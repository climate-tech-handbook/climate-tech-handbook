const fs = require('fs');
const { parse } = require('csv-parse/sync');

// Function to read and parse the CSV file
function readCSV(filePath) {
  try {
    const fileContent = fs.readFileSync(filePath);
    const records = parse(fileContent, {
      columns: true,
      skip_empty_lines: true
    });
    return records;
  } catch (error) {
    console.error('Error reading or parsing CSV:', error);
    return [];
  }
}

// Function to group articles by Solution or Sector
function groupBySolutionOrSector(articles) {
  return articles.reduce((acc, article) => {
    let solution = article.Solution.trim();
    let sector = article.Sector ? article.Sector.trim() : '';

    let key;
    let prefix;
    if (solution.toLowerCase() === 'n/a') {
      key = sector;
      prefix = 'sector';
    } else {
      key = solution;
      prefix = 'solution';
    }

    // Ignore articles without a valid Solution or Sector value
    if (key) {
      // Remove commas, parentheses, and trim whitespace
      let normalizedKey = key.replace(/[(),]/g, '').trim() || 'Uncategorized';
      if (!acc[normalizedKey]) {
        acc[normalizedKey] = { prefix, markdownLinks: [] };
      }
      acc[normalizedKey].markdownLinks.push(article['Markdown syntax']);
    }
    return acc;
  }, {});
}

// Function to write markdown links to the respective files
function appendMarkdown(groupedArticles) {
  for (let [key, { prefix, markdownLinks }] of Object.entries(groupedArticles)) {
    let fileName = `../../../docs/${prefix}-${key.toLowerCase().replace(/\s+/g, '-')}.md`; // Adjust the path as necessary
    try {
      // Read the existing content of the file
      let fileContent = fs.readFileSync(fileName, 'utf8');
      let updatedContent;
      let uniqueLinks = markdownLinks.filter(link => !fileContent.includes(link));

      if (uniqueLinks.length > 0) {
        let newContent = `${uniqueLinks.join('\n')}\n`;

        // Location logic to determine where to insert the new content
        let overviewPosition = fileContent.indexOf('## Overview');
        let jobOpeningsPosition = fileContent.indexOf(':::company job openings');
        let bookSectionStart = fileContent.indexOf(':::book Great articles');

        if (bookSectionStart !== -1) {
          // Find the end of the existing ":::book Great articles" section
          let bookSectionEnd = fileContent.indexOf(':::', bookSectionStart + ':::book Great articles'.length);
          
          if (bookSectionEnd !== -1) {
            // Insert the new links directly after the last link in the existing section
            let insertionPoint = bookSectionEnd;
            updatedContent = fileContent.slice(0, insertionPoint) + newContent + fileContent.slice(insertionPoint);
          } else {
            // If no end of section is found, append at the end
            updatedContent = fileContent + newContent;
          }
        } else if (overviewPosition !== -1) {
          // Insert the new content after '## Overview'
          let insertionPoint = overviewPosition + '## Overview'.length;
          newContent = `\n:::book Great articles\n${newContent}:::\n\n`;
          updatedContent = fileContent.slice(0, insertionPoint) + newContent + fileContent.slice(insertionPoint);
        } else if (jobOpeningsPosition !== -1) {
          // Find the end of the ":::company job openings" section
          let endOfJobOpeningsSection = fileContent.indexOf(':::', jobOpeningsPosition + ':::company job openings'.length);
          if (endOfJobOpeningsSection !== -1) {
            // Insert the new content after the ":::company job openings" section
            let insertionPoint = endOfJobOpeningsSection + ':::'.length;
            newContent = `\n:::book Great articles\n${newContent}:::\n\n`;
            updatedContent = fileContent.slice(0, insertionPoint) + newContent + fileContent.slice(insertionPoint);
          } else {
            // If no end of section is found, append at the end
            updatedContent = fileContent + newContent;
          }
        } else {
          // If neither '## Overview' nor ':::company job openings' are found, append at the end
          newContent = `\n:::book Great articles\n${newContent}:::\n\n`;
          updatedContent = fileContent + newContent;
        }

        fs.writeFileSync(fileName, updatedContent);
        console.log(`Markdown appended to ${fileName}`);
      } else {
        console.log(`No new unique content to add to ${fileName}.`);
      }
    } catch (error) {
      console.error(`Error updating file ${fileName}: `, error);
    }
  }
}

// Main function to orchestrate the script
function main() {
  const csvFilePath = 'newsletter.csv'; // Adjust the path to your CSV file
  const articles = readCSV(csvFilePath);
  console.log(`Parsed ${articles.length} articles from ${csvFilePath}`);
  
  const groupedArticles = groupBySolutionOrSector(articles);
  console.log('Articles grouped by solution or sector:', groupedArticles);
  
  appendMarkdown(groupedArticles);
}

// Run the script
main();
