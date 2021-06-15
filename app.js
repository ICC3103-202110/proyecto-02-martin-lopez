const {printTable} = require("console-table-printer")


async function app(state, view){

    const {model, currentView} = state
    const {title, table} = currentView
    console.clear()
    console.log(title)
    printTable(table)
    state = {
        ...state,
        model: model,
        currentView: view(model)
    }
}

module.exports = {
    app
}
