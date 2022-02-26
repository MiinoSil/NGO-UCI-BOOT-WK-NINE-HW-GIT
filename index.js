// TODO: Include packages needed for this application
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = ("./utils/generateMarkdown.js")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the repository?'
    },

    {
        type: 'input',
        name: 'description',
        message: 'What is the description of the repository (e.g. Motivation? Reason for project? Problem to solve?)?'
    },

    {
        type: 'input',
        name: 'installation',
        message: 'Describe installation requirements for the repository (e.g. npm? requirements? commands?)'
    },

    {
        type: 'input',
        name: 'credits',
        message: 'Who else is contributing to the project?'
    },

    {
        type: 'list',
        name: 'license',
        message: 'Choose a license.',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("New README.md generated");
    })
}

// TODO: Create a function to initialize app
const generatedREADME = util.promisify(writeToFile);

async function init() {
    try {
        const answers = await inquirer.prompt(questions);
        const newREADME = generateMarkdown(answers);
        await generatedREADME("README1.md", newREADME);
    } catch (error) {
        console.log("Failed to generate.");
    }
};

// Function call to initialize app
init();
