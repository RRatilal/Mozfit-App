const Users = require('../models/Users');
const { generateAuthToken } = require('../config/userConfig');
const bcrypt = require('bcrypt')

module.exports = {
    async signUp(req, res) {
        const { email, password } = req.body;

        //  Check if there a user with the same email
        let user = await Users.findOne({ "local.email": email })
        if (user) {
            return res.status(400).json({ error: "Email already in use" })
        }

        //  Create a new user
        user = await Users.create({
            method: 'local',
            local: {
                email: email,
                password: password
            }
        });

        // Generate token
        const token = generateAuthToken({ id: user._id });

        return res.json({ user, token })
    },

    async uploadLocalUserImage(req, res) {
        const { userId } = req.params;
        const { originalname: name, size, key, url = '' } = req.file

        let user = await Users.findOne({ "_id": userId }).select('+local.password');

        if (!user)
            return res.status(401)

        // console.log(req.file)
        const imageFile = {
            type: 'Image',
            name,
            size,
            key,
            url,
        }

        user = await Users.findByIdAndUpdate({ "_id": userId }, {
            $set: {
                method: 'local',
                local: {
                    email: user.local.email,
                    password: user.local.password,
                    photo: await imageFile
                }
            },

        }, { new: true }, (err, doc) => {
            if (err) {
                return res.json({ err })
            }

            return res.json(doc)
        });
    },

    async signIn(req, res) {
        const { email, password } = req.body;

        const user = await Users.findOne({ "local.email": email }).select('+local.password');

        if (!user)
            return res.status(400).json({ error: "Invalid email" })

        const isPassMash = await bcrypt.compare(password, user.local.password)

        if (!isPassMash)
            return res.status(400).json({ error: "Invalid password" })

        user.local.password = undefined;

        const token = generateAuthToken(user._id)

        res.json({ user, token })
    },

    async googleSignin(req, res) {
        try {
            const { id, email, name, giveName, familyName, photoUrl } = req.body;

            let user = await Users.findOne({ "google.id": id });
            let token = null;

            if (!user) {
                user = await Users.create({
                    method: 'google',
                    google: {
                        id,
                        email,
                        name,
                        giveName,
                        familyName,
                        photoUrl
                    }
                });
                token = generateAuthToken(user._id)
                return res.json({ user, token })
            }

            token = generateAuthToken(user._id)
            return res.json({ user, token })
        } catch (error) {
            return res.status(400).json({ error: "can not login" })
        }
    },

    async delete(req, res) {
        try {
            await Users.findByIdAndRemove(req.params.id);
            return res.json()
        } catch (error) {
            return res.status(400).json({ error: "You a not authorized to delete this user" })
        }
    }
}