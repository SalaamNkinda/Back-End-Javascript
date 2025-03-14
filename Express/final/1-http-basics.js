const http = require('http')

const server = http.createServer((req, res) => {
  // console.log(req.method)
  const url = req.url
  // home page
  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.end('<h1>Home page.</h1>')
  }
  // about page
  else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.end('<h1>About page</h1>')
  }
  // 404
  else {
    res.writeHead(404, { 'content-type': 'text/html' })
    res.end('<h1>Page Not Found :(</h1>')
  }
})

server.listen(5000)