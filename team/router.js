const { Router } = require('express')
const Team = require('./model')

const router = new Router

router.get(
  '/team',
  (request, response, next) => Team
    .findAll()
    .then(teams => response.send(teams))
    .catch(next)
)
router.post(
  '/team',
  (request, response, next) => Team
    .create()
    .then(oke => response.status(201).send(oke))
    .catch(next)
)

module.exports = router