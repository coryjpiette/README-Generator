

// creating variable and requiring Markdown.js 
var generateMarkdown = require("./develop/Markdown");

// creating variable and function to pull fs
const fs = require("fs");

// creating variable and function  to pull inquirer
const inquirer = require("inquirer");


// creating variable and using require to use npm
const path = require("path");


// function to write README file takes in fileName and user data parameters
function writeToFile(fileName, data) {
    // writing and syncing file
    fs.writeFileSync(path.join(process.cwd(), fileName), data);
  }
  