const Exercise = require('../models/Exercises');
const multer = require('multer');
const path = require('path');
const bcrypt = require('bcrypt');

const multerUploadExerciseFiles = {
    dest: async (req, files, cb) => {
        if (await files.mimetype === 'image/jpeg' || await files.mimetype === 'image/jpg' || await files.mimetype === 'image/png')
            return cb(null, path.resolve(__dirname, "..", "assets", "image"));

        if (await files.mimetype === 'video/mp4' || await files.mimetype === 'video/mkv' || await files.mimetype === 'video/3gp')
            return cb(null, path.resolve(__dirname, "..", "assets", "video"));
    },
    storage: multer.diskStorage({
        destination: async (req, files, cb) => {
            const { name } = req.body;
            // const exercise = await Exercise.findOne({ name });

            // if (exercise)
            //     return cb(new Error("Cannot upload file"))

            if (await files.mimetype === 'image/jpeg' || await files.mimetype === 'image/jpg' || await files.mimetype === 'image/png')
                return cb(null, path.resolve(__dirname, "..", "assets", "image"));

            if (await files.mimetype === 'video/mp4' || await files.mimetype === 'video/mkv' || await files.mimetype === 'video/3gp')
                return cb(null, path.resolve(__dirname, "..", "assets", "video"));

            return cb(new Error("Invalid file type"));
        },
        filename: (req, files, cb) => {
            bcrypt.genSalt(16, (err, hash) => {
                if (err)
                    return cb(err)

                const fileName = `${hash.toString('hex').replace("/", "a")}-${files.originalname}`

                return cb(null, fileName)
            })
        },
    }),
    limits: {
        fileSize: 5 * 1024 * 1024
    },
}

const multerUploadSingleImage = {
    dest: path.resolve(__dirname, "..", "assets", "image"),
    storage: multer.diskStorage({
        destination: async (req, file, cb) => {
            cb(null, path.resolve(__dirname, "..", "assets", "image"));
        },
        filename: (req, file, cb) => {
            bcrypt.genSalt(16, (err, hash) => {
                if (err)
                    return cb(err)

                file.key = `${hash.toString('hex').replace("/", "a")}-${file.originalname}`

                return cb(null, file.key)
            })
        },
    }),
    limits: {
        fileize: 5 * 1024 * 1024
    },
    fileFilter: (req, file, cb) => {
        const allowedMimes = [
            'image/jpeg',
            'image/jpg',
            'image/png'
        ]

        if (allowedMimes.includes(file.mimetype)) {
            cb(null, true)
        } else {
            cb(new Error("Invalid file type"))
        }
    }
}

module.exports = {
    multerUploadExerciseFiles,
    multerUploadSingleImage
}