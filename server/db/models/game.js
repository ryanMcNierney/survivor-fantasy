const Sequelize = require('sequelize')
const db = require('../db')

const Game = db.define('game', {
  season: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  numPlayers: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = Game
