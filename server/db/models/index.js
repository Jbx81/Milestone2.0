const User = require('./user')


// make all associations in this document
Users have many projects

projects can have 1 user as proj manager
projects can have many users as collaborator

projects can have many milestones



module.exports ={
  User
}
