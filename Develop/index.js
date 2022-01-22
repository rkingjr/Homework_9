// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
var questions = [
    {
        type: 'input',
        message: 'What is the project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'How would you describe this project?',
        name: 'describe',
    },
    {
        type: 'input',
        message: 'How can you install this project?',
        name: 'install',
    },
    {
        type: 'input',
        message: 'How can you use this project?',
        name: 'use',
    },
    {
        type: 'input',
        message: 'How can someone contribute to this project?',
        name: 'contribute',
    },
    {
        type: 'input',
        message: 'How would someone test this project?',
        name: 'test',
    },
    {
        type: 'list',
        message: 'Which license would you like to use?',
        name: 'license',
        choices: ['(Apache license 2.0', 'MIT', 'Do What The F*ck You Want To Public License', 'None'],
    },
];

// // TODO: Create a function to write README file


function writeToFile(fileName, data) {
    return fs.writeFile('readme.md', generateMarkdown(data), (err) =>
        err ? console.log(err) : console.log('response written to file'))
};

// // TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            console.log(response)
            writeToFile('readme.md', response)}
            );
}

// // Function call to initialize app
init();
