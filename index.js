const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
// const utils = require('./utils');
const Web3 = require('web3');
const app = express();
var mongoose = require('mongoose');
var config = require('./config');

const path = require('path');


//Mongoose connection
mongoose.connect(config.db.mongoURI, { useNewUrlParser: true })
    .then(() => console.log("DB connected", config.db.mongoURI))
    .catch(err => console.log('err'));


// app.use(express.static(path.join(__dirname, "client/public")))


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, x-access-token,X-PINGOTHER");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

// body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./Models/InTime');
const inTime = mongoose.model('inTime');


app.post('/postTime',(req,res)=>{
    console.log(req.body);
    var id = req.body.id;
    var time 
    console.log(id);
    var obj = new inTime({
        rfid : id,
        timestamp: parseInt(Date.now()/(1000*60))
    });
    obj.save();
    res.send("success");
})

app.post('/getAmount',(req,res)=>{
    var id = req.body.id;
    console.log(id);
    inTime.find({rfid:id})
    .then(entry=>{
        if(entry != undefined)
        {
            console.log(entry);

         var exitTime = Date.now()/(1000*60);
         var entryTime = entry[0].timestamp;
         console.log("exitTime",exitTime);
         console.log("entryTime",entry[0].timestamp);
         var amount = (parseInt(exitTime) - parseInt(entryTime));
         console.log(amount.toString());
         res.send( amount.toString());

        }
        else
        {
            res.sendStatus(-1);
        }
    })
})

var port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`server started at port ${port}`);
})

