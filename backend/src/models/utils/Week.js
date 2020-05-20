const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Day = require('./Day');

const WeekSchema = new Schema({
    name: {
        type: String
    },
    percentage: Number,
    daysList: [{
        type: Schema.Types.ObjectId,
        ref: Day,
    }],
    created: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Week', WeekSchema);