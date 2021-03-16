const router = require('express').Router()
const {Castaway} = require('../db/models')
const getCastawaysBySeason = require('../scraper/castawayScraper')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const allCastaways = await Castaway.findAll()
    res.json(allCastaways)
  } catch (err) {
    next(err)
  }
})

router.get('/season', async (req, res, next) => {
  try {
    const seasonList = []
    const seasons = await Castaway.aggregate('season', 'DISTINCT', {
      plain: false
    })
    for (const el of seasons) {
      seasonList.push(el.DISTINCT)
    }
    res.json(seasonList.sort((a, b) => a - b))
  } catch (err) {
    next(err)
  }
})

router.get('/season/:seasonId', async (req, res, next) => {
  try {
    const {seasonId} = req.params
    const seasonCastaways = await Castaway.findAll({
      where: {
        season: seasonId
      }
    })
    res.json(seasonCastaways)
  } catch (err) {
    next(err)
  }
})

router.post('/season/:seasonId', async (req, res, next) => {
  try {
    const {seasonId} = req.params
    const castawaysArr = await getCastawaysBySeason(seasonId)
    let counter = 0
    for (const el of castawaysArr) {
      await Castaway.findOrCreate({where: el}).spread((result, created) => {
        if (created) {
          counter++
        }
      })
    }
    res.send(`${counter} castaways added to the database`)
  } catch (err) {
    next(err)
  }
})
