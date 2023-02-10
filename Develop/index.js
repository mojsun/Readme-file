/*// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();*/
const inquirer = require("inquirer");
const fs = require("fs");

const generateReadmeFile = ({
  title,
  description,
  installation,
  usage,
  license,
  contributors,
  test,
  github,
  email,
}) =>
  `
# Description
The title of the project is ${title}\n

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

The discription of the project is ${description} \n

## Installation
Installation process: ${installation}\n

## Usage
Usage of the project: ${usage}\n

## License
license of the project: ${license}\n

##Contributors
Contributors of this project: ${contributors}\n

##Test
Is there a test included ${test}\n

##Github
My Github Username: ${github}\n

##Email
My Email address${email}\n
`;
inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "what is the project title?",
    },
    {
      type: "input",
      name: "description",
      message: "write a description of your project:",
    },
    {
      type: "input",
      name: "installation",
      message: "describe the installation process:",
    },
    {
      type: "input",
      name: "usage",
      message: "what is this project usage for",
    },
    {
      type: "input",
      name: "license",
      message: "what is the license of this project",
    },
    {
      type: "input",
      name: "contributors",
      message: "who are the contributors of this project?",
    },
    {
      type: "input",
      name: "test",
      message: "is there a test included",
    },
    {
      type: "input",
      name: "github",
      message: "please enter your github username",
    },
    {
      type: "input",
      name: "email",
      message: "please enter your email",
    },
  ])
  .then((answers) => {
    const ReadmeContent = generateReadmeFile(answers);

    fs.writeFile("readme.md", ReadmeContent, (err) =>
      err ? console.log(err) : console.log("Successfully created readme!")
    );
  });
