const Comments = require('../models/Comments');
// const User = require('../models/Users');

module.exports = {
    async create(req, res) {
        const { userId } = req.params;
        const { comment } = req.body;

        const comment = await Comments.create({
            userId,
            comment
        });

        return res.json(comment)
    },

    async getComments(req, res) {
        const comments = await Comments.find().populate("userId");

        res.json(comments)
    }
}