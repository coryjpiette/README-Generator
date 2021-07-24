

// creating variable and requiring Markdown.js 
var generateMarkdown = require("./markdown");

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
// function to initialize program

function initialize() {
    // prompted questions from the inquirer

    inquirer.prompt([
        {

            type: "input",
            name: "username",
            message: "Please enter Your Github username"
        },
        {

            type: "input",
            name: "email",
            message: "Please enter a valid email address"
        },
        {

            type: "input",
            name: "title",
            message: "Please enter your project's name"
        },
        {

            type: "input",
            name: "description",
            message: "Please enter a project descrition"
        },
        {

            type: "input",
            name: "installation",
            message: "Please enter your installation instructions"
        },
        {

            type: "input",
            name: "usage",
            message: "Enter the appropiate usage Info"
        },
        {

            type: "input",
            name: "contribution",
            message: "Please enter the contribution guidelines"
        },
        {

            type: "input",
            name: "tests",
            message: "Please enter the test instructions"
        }
    ]
    )
}