import remark from 'remark';
import rehype from 'rehype';
import remarkRehype from 'remark-rehype';
import { defaultMarkdownParser } from '@docusaurus/core/lib/markdown/utils';

// this is how you insert images now in your markdown file
// ![alt text](image-url.jpg "This is the image caption")

//       working example
//      ![alt text](../img/main/favicon.ico "Hover to see the figcaption")



function customImageParser(markdownContent) {
  return remark()
    .use(remarkRehype)
    .processSync(markdownContent, {
      rehype: (ast) => {
        visit(ast, 'image', (imageNode) => {
          const title = imageNode.properties?.title;
          const alt = imageNode.properties?.alt;
          const src = imageNode.properties?.src;

          if (src && alt && title) {
            // Create the figure element with proper escaping
            const figureNode = {
              tagName: 'figure',
              children: [
                { tagName: 'img', properties: { src, alt } },
                { tagName: 'figcaption', children: [{ value: title.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') }] },
              ],
            };

            // Replace the image node with the figure node
            imageNode.parent?.children.splice(imageNode.index, 1, figureNode);
          }
        });
      },
    });
}

export default customImageParser;