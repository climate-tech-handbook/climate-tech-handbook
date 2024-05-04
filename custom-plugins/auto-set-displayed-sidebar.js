const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const { parse } = require('yaml');

const readdirAsync = promisify(fs.readdir);
const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

async function autoSetDisplayedSidebar() {
  const docsFolderPath = path.resolve(__dirname, '../docs');

  const files = await readdirAsync(docsFolderPath);
  
  for (const file of files) {
      if(file === 'breadcrumb-test') continue;
      const filePath = path.resolve(docsFolderPath, file);
      const fileContents = await readFileAsync(filePath, 'utf-8');

      const frontmatterStart = fileContents.indexOf('---') + 3;
      const frontmatterEnd = fileContents.indexOf('---', frontmatterStart);

    if (frontmatterStart !== -1 && frontmatterEnd !== -1) {
      const frontmatterContent = fileContents.slice(frontmatterStart, frontmatterEnd);
      const frontmatter = parse(frontmatterContent);

      if (!frontmatter.displayed_sidebar) {
        frontmatter.displayed_sidebar = 'docSidebar';
        const newFrontmatterContent = `\n${Object.entries(frontmatter).map(([key, value]) => `${key}: ${isArray(value) ? '\n - '+ value.join('\n - '):value}`).join('\n')}\n`;
        const newFileContents = fileContents.slice(0, frontmatterStart) + newFrontmatterContent + fileContents.slice(frontmatterEnd);
        await writeFileAsync(filePath, newFileContents, 'utf-8');
      }
    }
  }
}

function isArray(ob){
    var arrayConstructor = [].constructor;
    return ob.constructor === arrayConstructor;
}
module.exports = function (context) {
  return {
    name: 'auto-set-displayed-sidebar',
    async loadContent() {
      await autoSetDisplayedSidebar();
      return null;
    },
  };
};
