// Pulls castaway list from https://www.cbs.com/shows/survivor/cast/season/1/ by a given season
const {fetchSeasonHTML, fetchCastawayHTML, handlePairs} = require('./utils')

const getCastURLS = async season => {
  const urlList = []
  const $ = await fetchSeasonHTML(season)
  // Grab the urls from the gridList
  $('article[class=grid-view-item]').each((i, item) => {
    const link = $(item)
      .find('.link')
      .attr('href')
    urlList.push(link)
  })
  return urlList
}

const buildCastawayDbArray = async (castUrlArray, season) => {
  const castawayDbArray = []
  for (const url of castUrlArray) {
    const $ = await fetchCastawayHTML(url)
    // Grab the data from each castaway
    const data = {
      id: url.slice(21),
      name: $('.cast-title').text(),
      img: $('.cast-image')
        .find('img')
        .attr('src'),
      season,
      bio: $('.cast-bio').text()
    }
    // If this is Jeff Probst skip
    // If there is a pair break apart
    if (data.name === 'Jeff Probst') {
      continue
    } else if (data.name.includes('&')) {
      const breakdownArr = handlePairs(data)
      for (const pair of breakdownArr) {
        castawayDbArray.push(pair)
      }
    } else {
      castawayDbArray.push(data)
    }
  }
  return castawayDbArray
}

const getCastawaysBySeason = async season => {
  const urls = await getCastURLS(season)
  const dataArr = await buildCastawayDbArray(urls, season)
  return dataArr
}

module.exports = getCastawaysBySeason
