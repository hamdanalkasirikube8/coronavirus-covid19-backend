const winston = require('winston');
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
var mongoose = require('mongoose');
require('./startup/logging')();
require('./startup/routes')(app);
require('./startup/db')();
//require('./startup/config')();
//require('./startup/validation')();

// mongoose.connect(`mongodb+srv://admin:519935Mongo-@covid19-coronavirus-diigu.mongodb.net/test?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('connected to MongoDB...'))
//     .catch(err => { console.log('could not connect to db', err) });

    
// var covidCasesSchema = new mongoose.Schema({
//     date: Date,
//     country: String,
//     totalCases: String,
//     totalDeaths: String,
//     totalRecovered: String,
//     states: Array

// }
//     );
//     var CovidCases = mongoose.model('CovidCases', covidCasesSchema);

//     app.use(express.json());


   
    
//     app.post('/post/case', (req,res) => {

//         async function createCovidCase( ) {
//             var covidCases = new CovidCases({ 
//                 date: '03/01/2020',
//                  country: 'UK',
//                 totalCases: '71,808',
//             totalDeaths: '775',
//             totalRecovered: '400',
//             states: [{
//                 totalDeath: '6',
//                 totalCases: '852'
//             }]
//             });
        
//             const result = await covidCases.save();
//             console.log(result);
    
//         }
//         createCovidCase().then( resp =>  {
//             console.log('case created: '+ resp);
//             res.send(resp);
//            });
       
    
//     });

//const server = app.listen(port, () => winston.info(`Listening on port ${port}...`));
const server = app.listen(port, ()=> {
    console.log(`listening on port ${port}....`);
});

module.exports = server;