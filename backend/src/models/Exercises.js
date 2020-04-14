const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./Users');

const ExerciseImage = require('./utils/ExerciseImage');
const ExerciseVideo = require('./utils/ExerciseVideo');

const ExerciseSchema = new mongoose.Schema({
    exerciceType: {
        type: String,
    },
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    image: {
        type: ExerciseImage,
        index: 'image',
    },
    video: {
        type: ExerciseVideo,
        index: 'video'
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: User
    },
    created: {
        type: Date,
        default: Date.now(),
    }
})

module.exports = mongoose.model('Exercise', ExerciseSchema)