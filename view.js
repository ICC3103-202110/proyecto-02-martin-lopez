const figlet = require("figlet")
const chalk = require("chalk")
const inquirer = require("inquirer")

function getTitle(){
    return chalk.red(
        figlet.textSync(
            "Weather app" ,
            {
                horizontalLayout: "full",
                font: "Nancyj-Underlined"
            }
        )
    )    
}

function getTable(model){
    const{name} = model
    const{temp} = model
    const{max} = model
    const{min} = model
    return[
        {name: name,
        temp: temp,
        max: max,
        min: min}    
    ]
}

function listForm(){
    const input = 0
    const message = "Select action:"
    const choices = ["Add City", "Update City", "Delete City"]
    return inquirer.prompt([
        {
            name: "action",
            type: "list",
            message: message,
            defaul: input,
            choices: choices
        }
    ])
}

function inputForm(model){
    const location = model
    const message = "Location?"
    return inquirer.prompt([
        {   
            name: "location",
            type: "input",
            message: message,
            default: location,
        }
    ])
}

function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports = {
    view,
    listForm,
    inputForm
}