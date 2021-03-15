// Utils for scraper
const axios = require('axios')
const cheerio = require('cheerio')

const fetchSeasonHTML = async season => {
  try {
    const castURL = `https://www.cbs.com/shows/survivor/cast/season/`
    const {data} = await axios.get(castURL + season)
    return cheerio.load(data)
  } catch (e) {
    console.log('error with fetchSeasonHTML', e)
  }
}

const fetchCastawayHTML = async castawayUrl => {
  try {
    const baseURL = `https://www.cbs.com`
    const {data} = await axios.get(baseURL + castawayUrl)
    return cheerio.load(data)
  } catch (e) {
    console.log('error with fetchCastawayHTML', e)
  }
}

const handlePairs = pairData => {
  const {id, name, img, season, bio} = pairData
  // First pair
  const firstPairName = name.slice(0, name.indexOf('&') - 2)
  const firstPair = {
    id: id + 'a',
    name: firstPairName,
    img,
    season,
    bio
  }
  // Second pair
  const secondPairName = name.slice(name.indexOf('&') + 2, name.length)
  const secondPair = {
    id: id + 'b',
    name: secondPairName,
    img,
    season,
    bio
  }
  return [firstPair, secondPair]
}

module.exports = {
  fetchSeasonHTML,
  fetchCastawayHTML,
  handlePairs
}
