const express = require('express')
const bodyParser = require('body-parser')
const database = require('./db')
// team
const team = require('./team/model')
const teamRouter = require('./team/router')
// player
const player = require('./player/model')

const port = process.env.PORT || 4000

const app = express()
const jsonParser = bodyParser.json()

app.listen(port, () => console.log(`Listening on :${port}`))
app.use(jsonParser)
app.use(teamRouter)