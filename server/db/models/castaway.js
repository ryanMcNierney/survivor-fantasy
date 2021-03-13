const Sequelize = require('sequelize')
const db = require('../db')

const Castaway = db.define('castaway', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
    unique: true,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  img: {
    type: Sequelize.STRING,
    allowNull: false
  },
  survivorSeason: {
    type: Sequelize.STRING,
    allowNull: false
  },
  bio: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  startingTribe: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Castaway
