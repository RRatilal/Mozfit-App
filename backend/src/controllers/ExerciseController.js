const Exercise = require('../models/Exercises');

module.exports = {
    async create(req, res) {
        const { exerciceType, name, description, imageUrl, videoUrl, author } = req.body;

        let exercise = await Exercise.findOne({ "name": name });

        if (exercise)
            return res.status(400).json({ msg: "Already exist an exercise with this name" })



        exercise = await Exercise.create({
            exerciceType,
            name,
            description,
            imageUrl,
            videoUrl,
            author
        });

        return res.json(exercise);
    },

    async index(req, res) {
        const exercise = await Exercise.find().populate("author")

        return res.json(exercise)
    },

    async listAuthorExerc(req, res) {
        const { author } = req.body;
        const exercise = await Exercise.find({ "author": author })

        return res.json(exercise)
    }
}