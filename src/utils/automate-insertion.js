const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse/sync');

// Adjust the file paths as necessary
const csvFilePath1 = 'podcast-oringinal.csv';
const csvFilePath2 = 'newsletter-updated.csv';
const markdownFilesPath = '../../docs'; // Adjust the path as necessary
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

function escapeHTML(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function parseExistingItems(content, summaryTitle) {
  const regex = new RegExp(`(?<=:::info ${escapeHTML(summaryTitle)}\\n)([\\s\\S]*?)(?=:::)`, 'g');
  const existingItemsMatch = content.match(regex);
  const existingItemsSet = new Set();
  if (existingItemsMatch) {
    existingItemsMatch.forEach(block => {
      (block.match(/<a href="([^"]*)">[\s\S]*?<\/a>/g) || []).forEach(item => {
        const matchHref = item.match(/href="([^"]*)"/);
        if (matchHref) existingItemsSet.add(matchHref[1]);
      });
    });
  }
  return existingItemsSet;
}

function addNewItems(existingItemsSet, newItems) {
  return newItems.filter(item => {
    const matchHref = item.match(/href="([^"]*)"/);
    return matchHref && !existingItemsSet.has(matchHref[1]);
  }).map(item => `- ${item}`).join('\n');
}

function updateMarkdownFile(markdownFilePath, marker, summaryTitle, newItems) {
  try {
    if (fs.existsSync(markdownFilePath)) {
      let content = fs.readFileSync(markdownFilePath, 'utf-8');
      let index = content.indexOf(marker);

      if (index !== -1) {
        const existingItemsSet = parseExistingItems(content, summaryTitle);
        const itemsToAdd = addNewItems(existingItemsSet, newItems);
        if (itemsToAdd.length > 0) {
          let blockToAdd = itemsToAdd.split('\n').map(item => `\n${item}`).join('');
          let existingBlockRegex = new RegExp(`(:::info ${escapeHTML(summaryTitle)}\\n)([\\s\\S]*?)(:::)`, 'g');
          if (existingBlockRegex.test(content)) {
            content = content.replace(existingBlockRegex, `$1$2${blockToAdd}\n$3`);
          } else {
            blockToAdd = `:::info ${summaryTitle}\n${blockToAdd}\n:::\n\n`;
            content = content.slice(0, index) + blockToAdd + content.slice(index);
          }

          fs.writeFileSync(markdownFilePath, content, 'utf-8');
          console.log(`Updated file: ${path.basename(markdownFilePath)}`);
        }
      }
    } else {
      console.log(`File not found: ${path.basename(markdownFilePath)}`);
    }
  } catch (error) {
    console.error(`Error updating Markdown file ${markdownFilePath}: ${error}`);
  }
}

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
    groupedData[solution].articles.push(item['Markdown syntax']);
  });

  return groupedData;
}

function main() {
  const podcastData = readAndParseCSV(csvFilePath1);
  const articleData = readAndParseCSV(csvFilePath2);
  const groupedData = groupBySolution(podcastData, articleData);

  Object.entries(groupedData).forEach(([solutionName, content]) => {
    const solutionNameConverted = solutionName.toLowerCase().replace(/\s+/g, '-');
    const markdownFileName = `solution-${solutionNameConverted}.md`;
    const markdownFilePath = path.join(markdownFilesPath, markdownFileName);
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