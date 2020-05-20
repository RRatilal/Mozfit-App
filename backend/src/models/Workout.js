const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Week = require('./utils/Week');
const ImageSchema = require('./utils/ImageSchema');

const WorkoutSchema = new Schema({
    title: {
        type: String,
        default: "Workout"
    },
    workoutType: {
        type: String,
    },
    target: {
        type: String
    },
    duration: {
        type: Number
    },
    level: {
        type: String,
    },
    description: {
        type: String
    },
    weeksList: [{
        type: Schema.Types.ObjectId,
        ref: Week
    }],
    image: {
        type: ImageSchema,
        index: 'image'
    },
    userId: String,
});

module.exports = mongoose.model('Workout', WorkoutSchema);