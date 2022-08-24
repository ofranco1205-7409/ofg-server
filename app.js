const express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors')

const app = express()
const { API_VERSION } = require('./config')

// Load routings
const authRoutes = require('./routers/auth')
const userRoutes = require('./routers/user')

app.use(cors())
//app.use(function (req, res, next) {
//  res.header('Access-Control-Allow-Origin', 'localhost') // update to match the domain you will make the request from
//  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
//  next()
//})
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Configure Header HTTP

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE')
  next()
})

// Router Basic
app.use(`/api/${API_VERSION}`, authRoutes)
app.use(`/api/${API_VERSION}`, userRoutes)

module.exports = app
