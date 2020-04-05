//const config = require('config');
const {Worldwide, validate} = require('../models/worldwide'); 
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();



router.get('/', async (req, res) => {
  const worldWide = await Worldwide.find();
  res.send(worldWide);
});

router.post('/', async (req, res) => {
  //const { error } = validate(req.body); 
 // if (error) return res.status(400).send(error.details[0].message);

  const worldwide = new Worldwide({ 
    date: req.body.date,
    country: req.body.country,
    totalCases: req.body.totalCases,
    totalDeaths: req.body.totalDeaths,
    totalRecovered: req.body.totalRecovered
  });
  
  await worldwide.save();
  res.send(worldwide);
});



module.exports = router; 
