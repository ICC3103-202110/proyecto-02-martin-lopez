const {printTable} = require("console-table-printer")
const {listForm, inputForm} = require("./view")


async function app(state, addCity, updateCity, deleteCity, view){
    while (true){
        const {model, currentView} = state
        const {title, table} = currentView
        console.clear()
        console.log(title)
        printTable(table)
        const {action} = await listForm()
        console.log(action)
        if (action === "Add City"){
            const {location} = await inputForm()
            const updatedModel = addCity(location, model)
            state = {
                ...state,
                model: updatedModel,
                currentView: view(updatedModel)
            }
        }if (action === "Update City"){
            const updatedModel = updateCity(model)
            state = {
                ...state,
                model: updatedModel,
                currentView: view(updatedModel)
            }
        }if (action === "Delete City"){
            const updatedModel = deleteCity(model)
            state = {
                ...state,
                model: updatedModel,
                currentView: view(updatedModel)
            }
        }
    }
}

module.exports = {
    app
}
