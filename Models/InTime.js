const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inTime = new Schema ({
    rfid:String,
    timestamp:String
})

mongoose.model('inTime',inTime);