// function to create markdown for README
function generateMarkdown(data) {
    // returns inquirer data
    return `# ${data.title}
 
  <a href="https://img.shields.io/badge/License-${data.license[0]}-brightgreen">
  <img src="https://img.shields.io/badge/License-${data.license[0]}-brightgreen"></a>

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Contact Information](#contact-information)
  


### Description
${data.description}

### Installation
${data.installation}

### Usage
${data.usage}
### Contribution

${data.contribution}
### Test-Instructions

${data.tests}

### Contact-Information
[Github Profile](https://github.com/${data.username})
${data.email}

`;
} 
// export generateMarkdown
module.exports = generateMarkdown;