const { Router } = require('express')
const Player = require('./model')

const router = new Router

router.get(
  '/player',
  (request, response, next) => Player
    .findAll()
    .then(players => response.send({ players }))
    .catch(next)
)
router.get(
  '/player/:id',
  (request, response, next) => Player
    .findByPk(request.params.id)
    .then(player => response.send({ player }))
    .catch(next)
)
router.post(
  '/player',
  (request, response, next) => Player
    .create(request.body)
    .then(player => response.status(201).send({ player }))
    .catch(next)
)
router.put(
  '/player/:id',
  (request, response, next) => Player
    .findByPk(request.params.id)
    .then(player => player.update(request.body))
    .then(updatedPlayer => response.send({ updatedPlayer }))
    .catch(next)
)

module.exports = router