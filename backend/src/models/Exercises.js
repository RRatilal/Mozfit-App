const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./Users');

const ImageSchema = require('./utils/ImageSchema');
const VideoSchema = require('./utils/VideoSchema');

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
        type: ImageSchema,
        index: 'image',
    },
    video: {
        type: VideoSchema,
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