const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United'],
        require: true
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN',
        require: true,
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
        require: true,

    },
    departs: {
        type: Date,
        default: new Date().toLocaleDateString
    }
})