const express = require('express')
const PORT = process.env.PORT || 3001

const app = express()

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})

app.get('/', (req, res) => {
    res.send("Welcome to the restaurant!")
})

const appetizers = [one = { 
    id: 1,
    name: 'Smoked Salmon Sushi Rolls',
    catagory: 'appetizer',
    cuisineType: 'Japanese',
    description: 'salmon roll made with sushi rice, nori, and smoked salmon. Added wasabi and horse radish',
    image: 'https://www.allrecipes.com/thmb/P0zUzOzkJGTm9iDvMnzdZ1ua_T8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/19511smoked-salmon-sushi-rollfabeveryday4x3-159a22b4d3ac49fe9a146db94b53c930.jpg',
    price: 5.99,
    calories: 200,
    vegan: false,
    halal: true
},
two = { 
    id: 2,
    name: 'Chinese Pork dumplings',
    catagory: 'appetizer',
    cuisineType: 'Chinese',
    description: '12 sharable chinese pork dumplings for the entire table!',
    image: 'https://www.recipetineats.com/tachyon/2022/09/Vegetable-Dumplings-1-on-plate.jpg',
    price: 4.99,
    calories: 720,
    vegan: false,
    halal: false
},
three = { 
    id: 3,
    name: 'Beef Patty',
    catagory: 'appetizer',
    cuisineType: 'Jamaican',
    description: ' flavorful, well-seasoned beef filling and enveloped by a tender, flaky, and buttery pastry shell',
    image: 'https://gardengrubblog.com/wp-content/uploads/2021/08/Untitled-design-2021-08-08T212255.120.jpg',
    price: 7.99,
    calories: 350,
    vegan: false,
    halal: true
}]
const entrees = [one = { 
    id: 4,
    name: 'Jerk chicken',
    catagory: 'entree',
    cuisineType: 'Jamaican',
    description: 'Chicken soaked in a spicy marinade, served with Rice and Plantin',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Jerk_chicken_plate.jpg',
    price: 13.99,
    calories: 780,
    vegan: false,
    halal: true
},
two = { 
    id: 5,
    name: 'Gimbap',
    catagory: 'entree',
    cuisineType: 'Korean',
    description: 'cooked white rice rolled in seaweed with vegetables, pork, fish, egg, and cheese',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Vegetable_gimbap.jpg',
    price: 10.99,
    calories: 350,
    vegan: false,
    halal: false
},
three = { 
    id: 6,
    name: '	Popiah',
    catagory: 'entree',
    cuisineType: 'Chinese',
    description: 'Spring roll with a crepe-like thin wrapping made from wheat flour, filled with a mixture of shredded yam bean, omelette, carrots, lettuce and bean sprouts.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/LunBhia.jpg',
    price: 9.99,
    calories: 350,
    vegan: false,
    halal: false
}]
const desserts = [one = { 
    id: 7,
    name: 'Greek Yogurt Bagel w/ Banana',
    catagory: 'dessert',
    cuisineType: 'Greek',
    description: 'Easy, protein-packed breakfast made with all-purpose flour and non-fat greek yogurt',
    image: 'https://somethingnutritiousblog.com/wp-content/uploads/2023/05/E121EEB3-D0B9-4326-9FAD-1A3AE5FDBD12-scaled-1.jpeg',
    price: 4.99,
    calories: 400,
    vegan: true,
    halal: true
},
two = { 
    id: 8,
    name: 'Mandazi Pudding',
    catagory: 'dessert',
    cuisineType: 'Ugandan',
    description: 'The ultimate east African snack! Drowned in a bath of milk, eggs, butter, sugar and all the warm spices and flavors, then baked until it has soaked in all the milky goodness. Topped with thick and wickedly sweet condensed milk and raisins.',
    image: 'https://akitcheninuganda.com/wp-content/uploads/2020/10/mandazi-pudding-a-kitchen-in-uganda-2.jpg?w=656',
    price: 4.99,
    calories: 290,
    vegan: false,
    halal: true
},
three = { 
    id: 9,
    name: 'Chinsukō biscuits',
    catagory: 'dessert',
    cuisineType: 'Japanese',
    description: 'traditional Okinawan sweet since the times of the Ryukyu Kingdom. Made of lard and flour, with a mild and sweet flavor.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Chinsuko.jpg',
    price: 5.99,
    calories: 600,
    vegan: false,
    halal: true
},
four = { 
    id: 10,
    name: 'Rum Cake',
    cuisineType: 'Caribbean',
    description: 'Dried fruit is soaked in rum for months and then added to dough prepared with sugar which has been caramelized by boiling in water',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Rum_cake.jpg',
    price: 4.99,
    calories: 500,
    vegan: false,
    halal: false
}]

const allMeals = [...appetizers, ...entrees, ...desserts]

app.get('/Appetizers', (req, res) => {
    res.send(appetizers)
})

app.get('/Entrees', (req, res) => {
    res.send(entrees)
})

app.get('/Desserts', (req, res) => {
    res.send(desserts)})

app.get('/full-menu', (req, res) => {
    res.send(allMeals)})


app.get('/vegan', (req, res) => {
    let veganFoods = []
    for (meal of allMeals) {
        if (meal.vegan === true) {
            veganFoods.push(meal)
    }
    }
    res.send(veganFoods)
})

app.get('/halal', (req, res) => {
    let halalFoods = []
    for (meal of allMeals) {
        if (meal.halal === true) {
            halalFoods.push(meal)
    }
    }
    res.send(halalFoods)
})

app.get('/*', (req, res) => {
    res.send("404 - Page not found")
  })