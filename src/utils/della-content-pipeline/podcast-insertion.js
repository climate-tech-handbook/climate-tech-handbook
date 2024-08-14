const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse/sync');

// Adjust the file paths as necessary
const csvFilePath = 'podcast.csv';
const markdownFilesPath = '../../../docs'; // Adjust the path as necessary
const marker = '## Overview';

function readAndParseCSV(filePath) {
  try {
    const fileContent = fs.readFileSync(filePath);
    return parse(fileContent, {
      columns: true,
      skip_empty_lines: true,
    });
  } catch (error) {
    console.error(`Error reading or parsing CSV file ${filePath}: ${error}`);
    return [];
  }
}

function updateMarkdownFile(markdownFilePath, marker, newItems) {
  try {
    if (fs.existsSync(markdownFilePath)) {
      let content = fs.readFileSync(markdownFilePath, 'utf-8');
      let index = content.indexOf(marker);

      if (index !== -1) {
        // Filter newItems to remove any that already exist in the file
        const uniqueItems = newItems.filter(item => !content.includes(item));
        
        if (uniqueItems.length > 0) {
          let blockToAdd = uniqueItems.join('\n');
          content = content.slice(0, index + marker.length) + `\n\n${blockToAdd}\n\n` + content.slice(index + marker.length);
  
          fs.writeFileSync(markdownFilePath, content, 'utf-8');
          console.log(`Updated file: ${path.basename(markdownFilePath)}`);
        } else {
          console.log(`No new content to add to ${path.basename(markdownFilePath)}`);
        }
      }
    } else {
      console.log(`File not found: ${path.basename(markdownFilePath)}`);
    }
  } catch (error) {
    console.error(`Error updating Markdown file ${markdownFilePath}: ${error}`);
  }
}

function groupBySolution(data1) {
  let groupedData = {};

  data1.forEach(item => {
    const solution = item.Solution.trim();
    if (!groupedData[solution]) {
      groupedData[solution] = { podcasts: [] };
    }
    // Use the correct 'Iframe' column name
    if (item['embed'] === 'TRUE' && item['Iframe']) {
      groupedData[solution].podcasts.push(item['Iframe']);
    }
  });

  return groupedData;
}

function main() {
  const podcastData = readAndParseCSV(csvFilePath);
  const groupedData = groupBySolution(podcastData);

  Object.entries(groupedData).forEach(([solutionName, content]) => {
    const solutionNameConverted = solutionName.toLowerCase().replace(/\s+/g, '-');
    const markdownFileName = `solution-${solutionNameConverted}.md`;
    const markdownFilePath = path.join(markdownFilesPath, markdownFileName);

    if (content.podcasts.length > 0) {
      updateMarkdownFile(markdownFilePath, marker, content.podcasts);
    }
  });
}

// Run the script
main();
