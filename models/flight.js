const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DfW', 'DEN', 'LAX', 'SAN'],
        require: true
    },
    arrival: {
        type: Date
    }
}, {
    timestamps: true
})

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United'],

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
        default: () => Date.now() + 365 * 24 * 60 * 60000
    },
    destinations: [destinationSchema]
}, {
    timestamps: true
});

// compile the Schema into a model and exports it 
module.exports = mongoose.model('Flight', flightSchema);
