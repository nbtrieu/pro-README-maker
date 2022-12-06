// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Provide a succinct description of your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What command should users run to install dependencies?',
        name: 'installation',
        default: 'npm i',
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use of this application.',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Select a license for your project, if any.',
        choices: ['MIT', 'GPL', 'APACHE', 'BSD3', 'None'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'How can users contribute to this repo?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'What command can users run to run tests?',
        name: 'tests',
        default: 'npm test'
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
 ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data); // **WHY not just fs.writeFile with the error cb fn?
    // The path.join() method joins the current working directory of the node.js process with the passed in fileName ('README.md')
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((userInput) => {
        console.log(userInput);
        writeToFile('SampleREADME.md', generateMarkdown({ ...userInput })); // **WAIT WHY do we need to make a copy? why not use userInput object itself like in the mini project?
        // The ... is a spread operator that iterates over the object obtained from user's input and makes a shallow copy.
        // The generateMarkdown() function takes in this copy and return a markdown structure for the README.
    })
}

// Function call to initialize app
init();
