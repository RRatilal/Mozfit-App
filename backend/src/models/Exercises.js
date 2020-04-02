const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./Users')

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
    imageUrl: {
        type: String,
    },
    videoUrl: {
        type: String,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: User
    },
    created: {
        type: Date,
        default: Date.now(),
    }
})

module.exports = mongoose.model('Exercise', ExerciseSchema)