const appetizers = [{ 
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
{ 
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
{ 
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

function getAppetizers(request, response) {
    response.send(appetizers)
}

function getAppetizer(request, response) {
    response.send(appetizers[request.params.id])
}

module.exports = {
    appetizers,
    getAppetizers,
    getAppetizer
}