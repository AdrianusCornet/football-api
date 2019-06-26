const express = require('express')
const Sequelize = require('sequelize')

const databaseUrl = 'postgres://postgres:fb-api@localhost:5432/postgres'
const port = process.env.PORT || 4000

const app = express()

app.listen(port, () => console.log(`Listening on :${port}`))