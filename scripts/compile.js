import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { portfolioData } from '../src/data/portfolio.js';

// Resolve directory paths in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '..');
const assetsDir = path.join(rootDir, 'assets');
const metadataPath = path.join(__dirname, 'last_build.json');

// Read last build metadata
let lastBuild = {};
if (fs.existsSync(metadataPath)) {
  lastBuild = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
} else {
  console.error("Error: last_build.json not found. Run setup again.");
  process.exit(1);
}

// Generate the replacements list
const replacements = [
  // Full Name and First Name
  { old: lastBuild.name, new: portfolioData.name },
  { old: lastBuild.firstName, new: portfolioData.firstName },
  { old: lastBuild.title, new: portfolioData.title },
  { old: lastBuild.location, new: portfolioData.location },
  { old: lastBuild.countryCode, new: portfolioData.countryCode },
  { old: lastBuild.email, new: portfolioData.email },
  { old: lastBuild.language, new: portfolioData.language },
  
  // Socials
  { old: lastBuild.socials.github, new: portfolioData.socials.github },
  { old: lastBuild.socials.githubUsername, new: portfolioData.socials.githubUsername },
  { old: lastBuild.socials.linkedin, new: portfolioData.socials.linkedin },
  { old: lastBuild.socials.linkedinUsername, new: portfolioData.socials.linkedinUsername },
  { old: lastBuild.socials.twitterUsername, new: portfolioData.socials.twitterUsername },
  { old: lastBuild.socials.youtube, new: portfolioData.socials.youtube },
  { old: lastBuild.socials.youtubeUsername, new: portfolioData.socials.youtubeUsername },
  { old: lastBuild.socials.stackoverflow, new: portfolioData.socials.stackoverflow },
  { old: lastBuild.socials.pubdev, new: portfolioData.socials.pubdev },
  
  // Professional
  { old: lastBuild.currentCompany, new: portfolioData.currentCompany },
  { old: lastBuild.currentCompanyUrl, new: portfolioData.currentCompanyUrl },
  { old: lastBuild.domain, new: portfolioData.domain }
];

// Deduplicate and filter out empty or unchanged replacements
const activeReplacements = [];
const seen = new Set();
for (const r of replacements) {
  if (r.old && r.new && r.old !== r.new) {
    const key = `${r.old}--->${r.new}`;
    if (!seen.has(key)) {
      seen.add(key);
      activeReplacements.push(r);
    }
  }
}

if (activeReplacements.length === 0) {
  printLog("No content changes detected. Build is up to date.");
} else {
  printLog(`Applying ${activeReplacements.length} content replacements...`);
  
  // Perform replacement on HTML and JS files
  const validExtensions = ['.js', '.html', '.webmanifest', '.json', '.css'];
  
  function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and .git
        if (file !== 'node_modules' && file !== '.git' && file !== 'scripts') {
          processDirectory(fullPath);
        }
      } else {
        const ext = path.extname(file);
        if (validExtensions.includes(ext)) {
          try {
            let content = fs.readFileSync(fullPath, 'utf8');
            let originalContent = content;
            
            for (const r of activeReplacements) {
              content = content.replaceAll(r.old, r.new);
            }
            
            if (content !== originalContent) {
              fs.writeFileSync(fullPath, content, 'utf8');
              printLog(`Updated data in: ${path.relative(rootDir, fullPath)}`);
            }
          } catch (e) {
            console.error(`Error processing ${file}: ${e.message}`);
          }
        }
      }
    }
  }
  
  // Process the root directory
  processDirectory(rootDir);
  
  // Update last_build.json with the new values
  fs.writeFileSync(metadataPath, JSON.stringify(portfolioData, null, 2), 'utf8');
  printLog("Compilation metadata updated successfully.");
}

function printLog(message) {
  console.log(`[Portfolio Compiler] ${message}`);
}
