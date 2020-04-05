const Joi = require('joi');
const mongoose = require('mongoose');

const Worldwide = mongoose.model('WorldWide', new mongoose.Schema({
  date: {
    type: Date,
    required: true
  }
  ,
  country: {
    type: String,
    required: true
  }, 
  totalCases: {
    type: String,
    required: true
  },
  totalDeaths: {
    type: String,
    required: true
  },
  totalRecovered: {
    type: String,
    required: true
  }
}));

function validateWorldWide(worldwide) {
  const schema = {
    totalAffected: Joi.number().min(0).required()
  };

  return Joi.validate(worldwide, schema);
}


exports.Worldwide = Worldwide; 
exports.validate = validateWorldWide;