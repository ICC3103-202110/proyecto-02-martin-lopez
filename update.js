function addCity(location, model){
    const newLocation = location
    const newTemp = Math.floor(Math.random() * 10)
    const newMax = Math.floor(Math.random() * 10)
    const newMin = Math.floor(Math.random() * 10)
    return {
        ...model,
        name: newLocation, 
        temp: newTemp, 
        max: newMax, 
        min: newMin
    }   
}
function updateCity(model){
    const{name} = model
    const newTemp = Math.floor(Math.random() * 10)
    const newMax = Math.floor(Math.random() * 10)
    const newMin = Math.floor(Math.random() * 10)
    return {
        ...model,
        name: name, 
        temp: newTemp, 
        max: newMax, 
        min: newMin
    }
}

function deleteCity(model){
    const newLocation = ""
    const newTemp = ""
    const newMax = ""
    const newMin = ""
    return {
        ...model,
        name: newLocation, 
        temp: newTemp, 
        max: newMax, 
        min: newMin
    }
}

module.exports = {
    addCity,
    updateCity,
    deleteCity
}