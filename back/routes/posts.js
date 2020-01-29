const postRouter = require('express').Router()
const verify = require('./verify')

postRouter.get('/posts', verify, (req,res) => {
  res.send(req.user)

})

module.exports = postRouter