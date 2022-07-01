// @ts-check
const http = require("http")

const PORT = 4000
const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.end("hello")
})

server.listen(PORT, () => {
  console.log("server is ", PORT)
})
