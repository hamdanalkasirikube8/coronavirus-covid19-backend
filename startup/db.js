const winston = require('winston');
const mongoose = require('mongoose');
const config = require('config');

module.exports = function() {
  //const db = config.get('db');
  // mongoose.connect('mongodb+srv://admin:519935Mongo-@covid19-coronavirus-diigu.mongodb.net/test?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true }')
  //   .then(() => winston.info(`Connected to Mongoo...`));

  mongoose.connect(`mongodb+srv://admin:519935Mongo-@coronavirus-covid19-cluster-gvhk7.mongodb.net/coronavirus-covid19`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('connected to MongoDB...'))
  .catch(err => { console.log('could not connect to db', err) });

}