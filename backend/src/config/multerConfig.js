const Exercise = require('../models/Exercises');
const multer = require('multer');
const path = require('path');
const bcrypt = require('bcrypt');

module.exports = {
    dest: async (req, files, cb) => {
        if (await files.mimetype === 'image/jpeg' || await files.mimetype === 'image/jpg' || await files.mimetype === 'image/png')
            return cb(null, path.relative(__dirname, "..", "assets", "video"));

        if (await files.mimetype === 'video/mp4' || await files.mimetype === 'video/mkv' || await files.mimetype === 'video/3gp')
            return cb(null, path.resolve(__dirname, "..", "assets", "video"));
    },
    storage: multer.diskStorage({
        destination: async (req, files, cb) => {
            const { name } = req.body;
            const exercise = await Exercise.findOne({ name });

            if (exercise)
                return cb(new Error("Cannot upload file"))

            if (await files.mimetype === 'image/jpeg' || await files.mimetype === 'image/jpg' || await files.mimetype === 'image/png')
                return cb(null, path.relative(__dirname, "..", "assets", "video"));

            if (await files.mimetype === 'video/mp4' || await files.mimetype === 'video/mkv' || await files.mimetype === 'video/3gp')
                return cb(null, path.resolve(__dirname, "..", "assets", "video"));

            return cb(new Error("Invalid file type"));
        },
        filename: (req, files, cb) => {
            bcrypt.genSalt(16, (err, hash) => {
                if (err)
                    return cb(err)

                const fileName = `${hash.toString('hex')}-${files.originalname}`

                return cb(null, fileName)
            })
        },
    }),
    limits: {
        fileSize: 5 * 1024 * 1024
    },
}