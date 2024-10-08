const express = require('express')
const PORT = process.env.PORT || 3005

const app = express()

const appetizerController = require('./controllers/AppetizerController.js')
const entreeController = require('./controllers/EntreeController.js')
const dessertController = require('./controllers/DessertController.js')
const everythingController = require('./controllers/EverythingController.js')

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})

app.get('/', (req, res) => {
    res.send("Welcome to the restaurant!")
})

app.get('/Appetizers', appetizerController.getAppetizers)
app.get('/Appetizers/:id', appetizerController.getAppetizer)

app.get('/Entrees', entreeController.getEntrees)
app.get('/Entrees/:id', entreeController.getEntree)

app.get('/Desserts', dessertController.getDesserts)
app.get('/Desserts/:id', dessertController.getDessert)

app.get('/full-menu', everythingController.getFullMenu)
app.get('/full-menu/:id', everythingController.getMenuItem)


app.get('/vegan', everythingController.getVegan)
app.get('/halal', everythingController.getHalal)

app.get('/*', (req, res) => {
    res.send("404 - Page not found")
  })