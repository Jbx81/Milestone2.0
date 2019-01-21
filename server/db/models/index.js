const User = require('./user')


// make all associations in this document

// Users have many projects

// projects can have 1 user as proj manager ** -- is this possible?
// projects can have many users as collaborator **

Project.belongsToMany(User, {through: 'UserProject'});
User.belongsToMany(Project, {through: 'UserProject'});

// projects can have many milestones
Project.hasMany(Milestone, {as: ProjectMilestones})

module.exports ={
  User
}
