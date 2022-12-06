// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `[License Badge](https://img.shields.io/badge/license-${license}-success)`;
  }
  return '';
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n+ [License](#license)\n`; // NOTE: "+ " creates bullet points in markdown
    // This function creates a link to the license section of the README if users select any license...
  } 
  return ''; // or returns an empty string if users select 'None'.
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
    
    Licensed under the ${license} license.`
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({ title, description, installation, usage, license, contributing, tests, github, email }) {
  return `# ${title}
  
  ## Description

  ${description}

  ## Table of Content

  + [Installation](#installation)
  + [Usage](#usage)
  ${renderLicenseLink(license)}
  + [Contributing](#contributing)
  + [Tests](#tests)
  + [Questions](#questions)

  ## Installation

  To install all necessary dependencies, please run the command below:
  \`${installation}\`

  ## Usage

  ${usage}

  ${renderLicenseSection}

  `;
}

module.exports = generateMarkdown;
