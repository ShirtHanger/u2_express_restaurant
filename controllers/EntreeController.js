const entrees = [{ 
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
{ 
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
{ 
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

function getEntrees(request, response) {
    response.send(entrees)
}

function getEntree(request, response) {
    response.send(entrees[request.params.id])
}

module.exports = {
    entrees,
    getEntrees,
    getEntree
}