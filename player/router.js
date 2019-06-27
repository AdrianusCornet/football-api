const { Router } = require('express')
const Player = require('./model')

const router = new Router

router.get(
  '/player',
  (request, response, next) => Player
    .findAll()
    .then(players => response.send(players))
    .catch(next)
)

module.exports = router