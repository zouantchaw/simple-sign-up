// this file responsible for routing requests that comes to server

const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/SignUpModels')

router.post('/signup', (request, response) => {
  const signedUpUser = new signUpTemplateCopy({
    fullName:request.body.fillName,
    username:request.body.username,
    email:request.body.username,
    password:request.body,password
  })
  signedUpUser.save()
  .then(data => {
    response.json(data)
  })
  .catch(error => {
    response.json(error)
  })
})

module.exports = router 