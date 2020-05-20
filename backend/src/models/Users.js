const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const ImageSchema = require('./utils/ImageSchema');

const UserSchema = new mongoose.Schema({
    method: {
        type: [String],
        enum: ['local', 'google', 'facebook'],
        required: true
    },
    local: {
        email: {
            type: String,
            lowercase: true,
        },
        password: {
            type: String,
            select: false,
        },
        photo: {
            type: ImageSchema,
            index: 'image'
        },
        name: {
            type: String,
        },
    },
    google: {
        id: {
            type: String,
            lowercase: true,
        },
        email: {
            type: String
        },
        name: {
            type: String,
        },
        giveName: {
            type: String,
        },
        familyName: {
            type: String,
        },
        photoUrl: {
            type: String
        }
    },
    faceboook: {
        id: {
            type: String,
            lowercase: true,
        },
        email: {
            type: String
        }
    },
    created: {
        type: Date,
        default: Date.now(),
    }
});

UserSchema.pre('save', async function (next) {
    try {
        const user = this;
        if (!user.method.includes('local')) {
            next()
        }

        if (user.isModified('local.password')) {
            user.local.password = await bcrypt.hash(user.local.password, 10)
        }
        next()
    } catch (error) {
        next(error)
    }
});

UserSchema.pre('findOneAndUpdate', async function (next) {
    try {
        const userPhoto = this._update.$set.local.photo;


        userPhoto.url = await `http://192.168.43.251:3333/files/${userPhoto.key}`
        next()
    } catch (error) {
        next(error)
    }
})

module.exports = mongoose.model('Users', UserSchema)