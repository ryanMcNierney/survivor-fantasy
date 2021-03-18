const router = require('express').Router()
const {Game} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const allGames = await Game.findAll()
    res.json(allGames)
  } catch (err) {
    next(err)
  }
})

router.get('/:gameId', async (req, res, next) => {
  try {
    const {gameId} = req.params
    const singleGame = await Game.findOne({
      where: {
        id: gameId
      }
    })
    res.json(singleGame)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const game = await Game.create(req.body)
    res.json(game)
  } catch (err) {
    next(err)
  }
})
