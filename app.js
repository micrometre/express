"use strict"
const express = require("express")
const path = require("path")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const compression = require('compression')
const ejs = require("ejs")

const PORT = 9998
const HOST = "0.0.0.0"

const app = express()

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use(compression())
app.use(cors())
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))

app.get("/", function (req, res, next) {
  res.render("pages/index")
})


app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
