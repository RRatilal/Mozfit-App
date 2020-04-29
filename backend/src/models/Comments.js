const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./Users');

const CommentsSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: User,
    },
    comment: String,
    created: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model('Comments', CommentsSchema);