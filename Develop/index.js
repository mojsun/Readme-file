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

inquirer.prompt([
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
]);
