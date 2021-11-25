// fuction to display README.md content
function generateMarkdown(answers) {
  return `
  ${answers.title} 👨‍💻

  ## Description 
  ${answers.description}

  ## Table of Contents:
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage} 💾

## License 
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)


This application is covered by the ${answers.license} license. 

## Contributions
${answers.contributions} 👥

## Tests
${answers.test} 📝

## Questions
${answers.questions} ❓ 



Find me on Github: 🤙 [${answers.username}](https://github.com/${answers.username})


Feel free to email me if you have any questions 🌈: ${answers.email}
`;
}

module.exports = generateMarkdown