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
    return fs.writeFile(`${process.cwd()}/${fileName}`, data, (error) => 
    // ALTERNATIVE using string concatenation: return fs.writeFile(process.cwd() + "/" + fileName, data, (error) => 
    // ALTERNATIVE using path.join(): return fs.writeFile(path.join(process.cwd(), fileName), data, (error) => 
    // The path.join() method joins the current working directory of the node.js process with the passed in fileName ('SampleREADME.md')
    error ? console.error(error) : console.log('Success!')); 
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((userInput) => {
        console.log(userInput);
        // ALTERNATIVE using the object itself (also works): writeToFile('SampleREADME.md', generateMarkdown(userInput));
        writeToFile('SampleREADME.md', generateMarkdown({ ...userInput })); // 
        // The spread operator ... iterates over the object obtained from user's input and makes a copy.
        // The generateMarkdown() function takes in this copy and return a markdown structure for the README.
    })
}

// Function call to initialize app
init();
