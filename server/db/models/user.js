const Sequelize = require('sequelize');
const db = require('../db')

const User = db.define('user', {
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  role: {
    type: Sequelize.STRING,
    validate: {
      isIn: [['Project Manager', 'Colaborator']],
    },
  },
  googleId: {
    type: Sequelize.STRING
  }
})
module.exports = User