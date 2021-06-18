const {initModel} = require("./model")
const {addCity, updateCity, deleteCity} = require("./update")
const {view} = require("./view")
const {app} = require("./app")

const state = {
    model: initModel,
    currentView: view(initModel)
}

app(state, addCity, updateCity, deleteCity, view)