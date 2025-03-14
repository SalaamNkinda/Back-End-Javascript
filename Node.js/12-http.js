const http = require('http')

//req -> incoming requests, res -> response, what we send back
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end("Welcome to our home page.")
    } else if (req.url === '/about') {
        res.end("Here is our short history.")
    } else {
        res.end(`
            <h1>OOPS</h1>
            <p>We can't seem to find the page that you are looking for!</p>
            <a href ="/">Back home.</a>
        `)
    }
})

//The port number
server.listen(5000, () => {
    console.log("Server running on port 5000...")
})
