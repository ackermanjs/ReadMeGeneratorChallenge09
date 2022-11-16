//Inquirer
const inquirer = require("inquirer");
//Filesystem
const fs = require("fs");

//Link to the js file
const generateMarkdown = require("./util/generateMarkdown");

//This is an array of question prompts for the user
inquirer
  .prompt([
    {
      //The name of the project.
      name: "project_title",
      type: "input",
      message: "What is the name of the project?",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please input a value to continue!";
        }
      },
    },
    {
      // The description of the project.
      name: "description",
      type: "input",
      message: "Describe your project.",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please input a value to continue!";
        }
      },
    },
    {
      // Installation instructions.
      name: "installation",
      type: "input",
      message: "Describe the installation process.",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please input a value to continue!";
        }
      },
    },
    {
      //Usage instructions.
      name: "usage",
      type: "input",
      message: "Explain the usage of the application.",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please input a value to continue!";
        }
      },
    },
    {
      //License used.
      name: "license",
      type: "list",
      message: "What license is the project built with?",
      choices: ["MIT", "Apache", "None"],
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please input a value to continue!";
        }
      },
    },
    {
      //Contact e-mail address.
      name: "email_address",
      type: "input",
      message: "What is your e-mail address?",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please input a value to continue!";
        }
      },
    },
    {
      //Github username.
      name: "github_username",
      type: "input",
      message: "What is your Github Username?",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please input a value to continue!";
        }
      },
    },
    {
      //URL for the Repo
      name: "repo_url",
      type: "input",
      message: "What is the URL for your repository?",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please input a value to continue!";
        }
      },
    },
    {
      //Contributors.
      name: "contributors",
      type: "input",
      message: "Who contributed to this project?",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please input a value to continue!";
        }
      },
    },
  ])
  .then((response) => {
    console.log("Success!");
    console.log(response);

    const htmlResponse = generateMarkdown(response);
    fs.writeFile("README.md", htmlResponse, (err) => {
      if (err) {
        return console.log(err);
        console.log("Success! Your README.md file has been generated.");
      }
    });
  });
