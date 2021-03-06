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
  season: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  bio: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

module.exports = Castaway
