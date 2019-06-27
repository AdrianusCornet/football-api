const { Router } = require('express')
const Team = require('./model')

const router = new Router

router.get(
  '/team',
  (request, response, next) => Team
    .findAll()
    .then(teams => response.send({ teams }))
    .catch(next)
)
router.get(
  '/team/:id',
  (request, response, next) => Team
    .findByPk(request.params.id)
    .then(team => response.send({ team }))
    .catch(next)
)
router.post(
  '/team',
  (request, response, next) => Team
    .create(request.body)
    .then(team => response.status(201).send({ team }))
    .catch(next)
)
router.put(
  '/team/:id',
  (request, response, next) => Team
    .findByPk(request.params.id)
    .then(team => team.update(request.body))
    .then(updatedTeam => response.send({ updatedTeam }))
    .catch(next)
)

module.exports = router