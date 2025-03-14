const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')

//Instead of adding logger manually to all routes.

/*app.use('/api', logger) 
//Applied to the api routes only.*/

/*app.use([logger, authorize])  
//If I want to apply authorize to all routes. If not, look at method on "/api/items" below. */

app.get('/', (req, res) => {
  res.send("Home page.")
})

app.get('/about', (req, res) => {
  res.send("About page.")
})

app.get('/api/products', (req, res) => {
  res.send("Products.")
})

app.get('/api/items', [logger, authorize], (req, res) => {
  console.log(req.user)
  res.send("Items.")
})

app.listen(5000, () => {
  console.log("Server is listening on port 5000...")
})