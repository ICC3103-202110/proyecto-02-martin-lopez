const {printTable} = require("console-table-printer")
const {listForm, inputForm} = require("./view")


async function app(state, update, view){
    while (true){
        const {model, currentView} = state
        const {title, table} = currentView
        console.clear()
        console.log(title)
        printTable(table)
        const action = await listForm()
        if (action === "Add City"){
            const location = await inputForm()
            const updatedModel = update(location, model)
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
