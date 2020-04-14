const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const ExerciseVideoSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Video'],
        required: true,
    },
    name: String,
    size: Number,
    key: String,
    created: {
        type: Date,
        default: Date.now,
    },
});

ExerciseVideoSchema.pre('save', function () {
    if (!this.url)
        return this.url = `http://192.168.43.251:3333/files/${this.key}`
});

ExerciseVideoSchema.pre('remove', function () {
    return promisify(fs.unlink)(path.resolve(__dirname, "..", "..", "assets", "video"));
});

module.exports = ExerciseVideoSchema;