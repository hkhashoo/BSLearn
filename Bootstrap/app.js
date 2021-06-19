const express = require("express")
const path = require("path")
const port = 3000
const app = express()

app.use(
  "/css",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/css"))
)
app.use(
  "/js",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/js"))
)

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src/index.html"))
})
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "src/about.html"))
})


app.listen(port, () => {
  console.log("Listening on port " + port)
})

app.use(
   "/images",
   express.static(path.join(__dirname , "images"))
)