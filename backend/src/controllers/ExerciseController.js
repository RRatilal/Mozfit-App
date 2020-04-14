const Exercise = require('../models/Exercises');

module.exports = {
    async create(req, res) {
        const { image, video } = req.files;
        const { exerciceType, name, description, userId } = req.body;

        let exercise = await Exercise.findOne({ "name": name });

        if (exercise)
            return res.status(400).json({ msg: "Already exist an exercise with this name" })

        const imageFile = {
            type: 'Image',
            name: image[0]["originalname"],
            size: image[0]["size"],
            key: image[0]["filename"],
            url: image[0]['destination'] = "",
        }

        const videoFiles = {
            type: 'Video',
            name: video[0]["originalname"],
            size: video[0]["size"],
            key: video[0]["filename"],
            url: video[0]['destination'] = "",
        }

        exercise = await Exercise.create({
            exerciceType,
            name,
            description,
            image: imageFile,
            video: videoFiles,
            userId,
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