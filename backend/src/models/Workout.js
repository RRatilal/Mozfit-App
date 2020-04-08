const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Exercise = require('./Exercises')

const WorkoutSchema = new mongoose.Schema({
    workoutType: {
        type: String,
    },
    subject: {
        type: String
    },
    duration: {
        type: Number
    },
    Level: {
        type: String,
    },
    description: {
        type: String
    },
    imageUrl: {
        type: String
    },
    exerciseList: [{
        type: Schema.Types.ObjectId,
        ref: Exercise,
    }],
    userId: String,
});

module.exports = mongoose.model('Workout', WorkoutSchema);