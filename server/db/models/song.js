const Sequelize = require('sequelize')
const db = require('../db')

const Song = db.define('song', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  artist: {
    type: Sequelize.STRING
  },
  level: {
    type: Sequelize.ENUM({
      values: ['★', '★★', '★★★']
    })
  },
  description: {
    type: Sequelize.STRING
  },
  notes: {
    type: Sequelize.TEXT,
    get: function() {
      return JSON.parse(this.getDataValue('notes'))
    },
    set: function(val) {
      return this.setDataValue('notes', JSON.stringify(val))
    }
  },
  answer: {
    type: Sequelize.ARRAY(Sequelize.INTEGER)
  }
})

module.exports = Song
