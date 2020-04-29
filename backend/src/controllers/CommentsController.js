const Comments = require('../models/Comments');
// const User = require('../models/Users');

module.exports = {
    async create(req, res) {
        const { userId, comment } = req.body;

        const comments = await Comments.create({
            userId,
            comment
        });

        return res.json(comments)
    },

    async getComments(req, res) {
        const comments = await Comments.find().populate("userId");

        res.json(comments)
    }
}