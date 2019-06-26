const express = require('express')
const database = require('./db')

const port = process.env.PORT || 4000

const app = express()

app.listen(port, () => console.log(`Listening on :${port}`))