

// creating variable and requiring Markdown.js 
var generateMarkdown = require("./Packages/markdown");

// creating variable and function to pull fs
const fs = require("fs");

// creating variable and function  to pull inquirer
const inquirer = require("inquirer");


// creating variable and using require to use npm
const path = require("path");


// function to write README file 
function writeToFile(fileName, data) {
    // writing and syncing filenide
    fs.writeFileSync(path.join(process.cwd(), fileName), data);
}
// function to initialize program

function init() {
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
        },
        {
            type: "checkbox",
            message: "Licensing Options",
            name: "license",
            choices: [
                "None",
                "Apache2.0",
                "Boost Software 1.0",
                "Creative Commons Zero v1.0 Universal",
                "Eclipse Public 2.0",
                "GNU Affero General Public v3.0",
                "GNU Public v3.0",
                "MIT",
                "Mozilla Public 2.0"
            ]

        }


        // Where the user input is stored (data)


    ]).then(function (data) {

        console.log("Generating Markdown...");

        writeToFile("README.md", generateMarkdown({ ...data }));
    });
}
// function call to initialize program
init()