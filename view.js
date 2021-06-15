const figlet = require("figlet")
const chalk = require("chalk")
//const inquirer = require("inquirer")

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

function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports = {
    view,
}