const superagent = require('superagent');

superagent
.post('app/signup')
.send({fullName: "Adam", username: "Ad", email: "adam@gmail.com", password: "adamadam"})