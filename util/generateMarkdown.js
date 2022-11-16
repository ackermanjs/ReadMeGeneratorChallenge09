function generateReadme(answers) {
  return `
# ${answers.project_title}

## Description
${answers.description}

## Table of Contents
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Questions](#Questions)
- [Contributors](#Contributors)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
${showLogo(answers.license)}

## Questions
- My Github Username is ${answers.github_username}
- You may contact me with any additional questions at ${answers.email_address}
- You may find access my repository at ${answers.repo_url}

## Contributors
${answers.contributors}
`;
}

module.exports = generateReadme;

function showLogo(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "apache") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else {
    return license;
  }
}
