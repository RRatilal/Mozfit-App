const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Exercise = require('../Exercises');

const DaySchema = new Schema({
    name: {
        type: String,
    },
    exerciseList: [{
        type: Schema.Types.ObjectId,
        ref: Exercise,
    }],
    created: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Day', DaySchema);