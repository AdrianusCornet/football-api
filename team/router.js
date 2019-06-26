const { Router } = require('express')
const Team = require('./model')

const router = new Router

router.get('/team', (request, response) => {
  Team.query('SELECT * FROM football_team', (error, result) => {
    if(error) {
      response.status(500).send({
        message: "server error (it's not your fault it's mine)",
        details: error.message
      })
    } else {
      response.send(result)
    }
  })
})