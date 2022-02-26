// TODO: Include packages needed for this application
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the repository (be unique or be creative)?'
    },

    {
        type: 'input',
        name: 'description',
        message: 'What is the description of the repository (e.g. Motivation? Reason for project? Problem to solve?)?'
    },

    {
        type: 'input',
        name: 'installation',
        message: 'Describe installation requirements for the repository (e.g. npm? requirements?)'
    },

    {
        type: 'input',
        name: 'usage',
        message: 'Describe how to use your APP or project? Are there specific commands or arguments needed?'
    },

    {
        type: 'input',
        name: 'credits',
        message: 'Who else is contributing to the project (do not forget yourself)?'
    },

    {
        type: 'input',
        name: 'GitHubName',
        message: 'What is your GitHub name?'
    },

    {
        type: 'input',
        name: 'question',
        message: 'What is your email if people have questions about the project?'
    },

    {
        type: 'input',
        name: 'testing',
        message: 'If there are tests in your project, describe how to run them?'
    },

    {
        type: 'list',
        name: 'license',
        message: 'Choose a license (use arrow keys to navigate list).',
        choices: ['GNUAGPLv3', 'GNUGPLv3', 'GNULGPLv3', 'MozillaPublicLicense2.0', 'ApacheLicense2.0', 'MITLicense', 'BoostSoftwareLicense1.0', 'TheUnlicense'],
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, error => {
        if (error) {
            return console.log("there is an error");
        } 
    })
}

// TODO: Create a function to initialize app
const writeFileAsync = util.promisify(writeToFile);

async function init() {
    try {
        const answers = await inquirer.prompt(questions);
        console.log(answers)

        const newREADME = generateMarkdown(answers);
        console.log(newREADME)

        await writeFileAsync("newREADME.md", newREADME);

    } catch (error) {
        console.log(error);
    }
};

// Function call to initialize app
init();
