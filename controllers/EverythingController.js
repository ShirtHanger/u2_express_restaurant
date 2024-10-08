const appetizerController = require('./AppetizerController')
const entreeController = require('./EntreeController')
const dessertController = require('./DessertController')

const allMeals = [
    ...appetizerController.appetizers, 
    ...entreeController.entrees, 
    ...dessertController.desserts
]

function getFullMenu(request, response) {
    response.send(allMeals)
}

function getMenuItem(request, response) {
    response.send(allMeals[request.params.id])
}

function getVegan(request, response) {
    let veganFoods = []
    for (meal of allMeals) {
        if (meal.vegan) {
            veganFoods.push(meal)
    }
    }
    response.send(veganFoods)
}

function getHalal(request, response) {
    let halalFoods = []
    for (meal of allMeals) {
        if (meal.halal) {
            halalFoods.push(meal)
    }
    }
    response.send(halalFoods)
}

module.exports = {
    getFullMenu,
    getMenuItem,
    getVegan,
    getHalal
}