const express = require('express')
const bodyParser = require('body-parser')
const database = require('./db')
const team = require('./team/model')
const teamRouter = require('./team/router')

const port = process.env.PORT || 4000

const app = express()
const jsonParser = bodyParser.json()

app.listen(port, () => console.log(`Listening on :${port}`))
app.use(teamRouter)