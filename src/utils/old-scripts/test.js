const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse/sync');

// Paths to your CSV files
const csvFilePath1 = 'podcast-oringinal.csv'; // Adjust the file path as necessary
const csvFilePath2 = 'newsletter-test.csv'; // Adjust the file path as necessary

// Base path where your markdown files are located
const markdownFilesPath = '../../docs'; // Adjust the path as necessary

// Marker to find in the Markdown file
const marker = '## Overview';

// Read and parse a CSV file synchronously
function readAndParseCSV(filePath) {
  const fileContent = fs.readFileSync(filePath);
  return parse(fileContent, {
    columns: true,
    skip_empty_lines: true
  });
}

// Function to escape special characters in HTML content
function escapeHTML(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Function to parse existing items from the content
function parseExistingItems(content, summaryTitle) {
    const regex = new RegExp(`(?<=<summary>${escapeHTML(summaryTitle)}</summary>[\\s\\S]*?<ul>)([\\s\\S]*?)(?=<\\/ul>)`, 'g');
    const existingItemsMatch = content.match(regex);
    const existingItemsSet = new Set();
    if (existingItemsMatch) {
        existingItemsMatch.forEach(block => {
            block.match(/<li>[\\s\\S]*?<\\/li>/g).forEach(item => {
                const matchHref = item.match(/href="([^"]*)"/);
                if (matchHref) existingItemsSet.add(matchHref[1]); // Use the URL as a unique identifier
            });
        });
    }
    return existingItemsSet;
}
  return existingItemsSet;
}

// Function to add new items to the content
function addNewItems(existingItemsSet, newItems) {
  return newItems.filter(item => {
    const matchHref = item.match(/href="([^"]*)"/);
    return matchHref && !existingItemsSet.has(matchHref[1]);
  }).map(item => `<li>${item}</li>`).join('');
}

// Function to update markdown files
function updateMarkdownFile(markdownFilePath, marker, summaryTitle, newItems) {
  if (fs.existsSync(markdownFilePath)) {
    let content = fs.readFileSync(markdownFilePath, 'utf-8');
    let index = content.indexOf(marker);

    if (index !== -1) {
      const existingItemsSet = parseExistingItems(content, summaryTitle);
      const itemsToAdd = addNewItems(existingItemsSet, newItems);

      if (itemsToAdd.length > 0) {
        let blockToAdd = itemsToAdd.map(item => `\n    <li>${item}</li>`).join('');

        let existingBlockRegex = new RegExp(`(${summaryTitle}[\\s\\S]*?<ul>)([\\s\\S]*?)(<\\/ul>)`, 'g');
        if (existingBlockRegex.test(content)) {
          content = content.replace(existingBlockRegex, `$1$2${blockToAdd}\n    $3`);
        } else {
          blockToAdd = `<details>\n<summary>${summaryTitle}</summary>\n<div>\n    <ul>${blockToAdd}\n    </ul>\n</div>\n</details>\n\n`;
          content = content.slice(0, index) + blockToAdd + content.slice(index);
        }

        fs.writeFileSync(markdownFilePath, content, 'utf-8');
        console.log(`Updated file: ${path.basename(markdownFilePath)}`);
      }
    }
  } else {
    console.log(`File not found: ${path.basename(markdownFilePath)}`);
  }
}

// Function to group data by Solution
function groupBySolution(data1, data2) {
  let groupedData = {};

  data1.forEach(item => {
    const solution = item.Solution.trim();
    if (!groupedData[solution]) {
      groupedData[solution] = { podcasts: [], articles: [] };
    }
    groupedData[solution].podcasts.push(item['Formatted URL with Title']);
  });

  data2.forEach(item => {
    const solution = item.Solution.trim();
    if (!groupedData[solution]) {
      groupedData[solution] = { podcasts: [], articles: [] };
    }

// ... (continuing from the previous part)

groupedData[solution].articles.push(item['Markdown syntax']);
});

return groupedData;
}

// Main function to orchestrate the script
function main() {
const podcastData = readAndParseCSV(csvFilePath1);
const articleData = readAndParseCSV(csvFilePath2);
const groupedData = groupBySolution(podcastData, articleData);

Object.entries(groupedData).forEach(([solutionName, content]) => {
  const solutionNameConverted = solutionName.toLowerCase().replace(/\s+/g, '-');
  const markdownFileName = `solution-${solutionNameConverted}.md`;
  const markdownFilePath = path.join(markdownFilesPath, markdownFileName);

  // Only call updateMarkdownFile if there are podcasts or articles to add
  if (content.podcasts.length > 0) {
    updateMarkdownFile(markdownFilePath, marker, 'List of podcasts for this solution...', content.podcasts);
  }
  if (content.articles.length > 0) {
    updateMarkdownFile(markdownFilePath, marker, 'List of articles for this solution...', content.articles);
  }
});
}

// Run the script
main();

