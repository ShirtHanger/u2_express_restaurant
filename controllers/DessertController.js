const desserts = [{ 
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
{ 
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
{ 
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
{ 
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

function getDesserts(request, response) {
    response.send(desserts)
}

function getDessert(request, response) {
    response.send(desserts[request.params.id])
}

module.exports = {
    desserts,
    getDesserts,
    getDessert
}