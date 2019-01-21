const Sequelize = require('sequelize');
const db = require('../db');

const Milestone = db.define('milestone', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  start: {
    type: Sequelize.DATE,
  },
  end: {
    type: Sequelize.DATE,
  },
});
module.exports = Milestone;
