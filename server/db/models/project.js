const Sequelize = require('sequelize');
const db = require('../db');

const Project = db.define('project', {
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
module.exports = Project;
