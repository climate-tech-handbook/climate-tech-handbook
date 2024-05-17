import remark from 'remark';
import customImageParser from './CustomMarkdown'; // Assuming customMarkdown.js is in the same directory

const CustomImage = ({ content }) => {
  const processedContent = remark().use(customImageParser).processSync(content);
  return <div dangerouslySetInnerHTML={{ __html: processedContent.toString() }} />;
};

export default CustomImage;

// this is how you insert images now in your markdown file
// ![alt text](image-url.jpg "This is the image caption")



//       working example
//      ![alt text](../img/main/favicon.ico "Hover to see the figcaption")