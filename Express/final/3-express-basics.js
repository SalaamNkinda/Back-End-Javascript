const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.status(200).send('<h1>Home page.</h1>')
})

app.get('/about', (req, res) => {
  res.status(200).send('<h1>About page.</h1>')
})

//This is for the 404 error
app.all('*', (req, res) => {
  res.status(404).send('<h1>Resource Not Found :(</h1>')
})

app.listen(5000, () => {
  console.log("Server is listening on port 5000...")
})


// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen