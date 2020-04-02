const mongoose = require('mongoose');

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
    exerciseList: {
        type: []
    }
});

module.exports = mongoose.model('Workout', WorkoutSchema);