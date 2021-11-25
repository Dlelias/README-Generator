// packages needed for this application
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile)

// email validator
const confirmEmail = async (input) => {
    if (!input.includes("@")) return "🚨 not a valid email!";
    return true;
};

// questions 

    function userPrompts() {
        return inquirer.prompt ([
            {
                type: "input",
                name: "title",
                message: "What is your project title?",
            },
            {
                type: "input",
                name: "description",
                message: "Describe your project",
        },
        {
            type: "input",
            name: "installation",
            message: "Describe the installation process, if any",
        },
        {
            type: "input",
            name: "usage",
            message: "Describe the usage instructions, be as detailed as possible ."
        },
        {
            type: "list",
            name: "license",
            message: "Chose your project license:",
            choices: [ "BSD 3-Clause License", 
            "Eclipes Public License",
            "GNU  GPL V3",
            "MIT","Perl",
            "Unlicense"]
            
        },
        {
            type: "input",
            name: "contributions",
            message: "Who contributed to this project ?",
        },
        {
            type: "list",
            name: "test",
            message: "Are any test included ?",
            choices: [
                "Yes",
                "No",
            ]
        },
        {
            type: "list",
            name: "questions",
            message: "Any questions?",
            choices: [
                "Yes",
                "No",
            ]
        },
        {
            type: "input",
            name: "username",
        message: "Please enter your Github username",
    },
    {
        type: "input",
        name: "email",
        message:"Please enter your email",
        validate: confirmEmail,
        
    }
]);
 }

async function init() {
    try {
        const answers = await userPrompts();
        const generateContent = generateMarkdown(answers);
        await writeFileAsync("./README.md", generateContent);
        console.log("Success! 🤓 You wrote to README.md");
    } catch(err) {
        console.log(err);
    }
}
init();
