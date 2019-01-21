const Sequelize = require('sequelize');
const db = require('../db');

const UserProject = db.define('UserProject', {
  role: {
    type: Sequelize.STRING,
    validate: {
      isIn: [['Project Manager', 'Collaborator']],
    },
  },
});
module.exports = UserProject;
