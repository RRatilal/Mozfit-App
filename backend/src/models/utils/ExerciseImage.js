const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const ExerciseImageSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Image'],
        required: true,
    },
    name: String,
    size: Number,
    key: String,
    url: String,
    created: {
        type: Date,
        default: Date.now,
    },
});

ExerciseImageSchema.pre('save', function () {
    if (!this.url)
        return this.url = `http://192.168.43.251:3333/files/${this.key}`
});

ExerciseImageSchema.pre('remove', function () {
    return promisify(fs.unlink)(path.resolve(__dirname, "..", "..", "assets", "image"));
});

module.exports = ExerciseImageSchema;