const jsonServer = require('json-server')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.listen(3000, () => {
  console.log('JSON Server is running')
})
server.get('/unauthorized', (req, res) => {
  res.status(401).jsonp({
    message: "unauthorized"
  })
})

server.get('/systemerror', (req, res) => {
  res.status(500).jsonp({
    message: "something wrong"
  })
})
