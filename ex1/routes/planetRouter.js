const express = require('express')
const planetRouter = express.Router();
const planet = require('../db/planets')
planetRouter.get('/',(req,res,next)=>{

    planet.getAll(req,res,next);

})

module.exports = planetRouter;