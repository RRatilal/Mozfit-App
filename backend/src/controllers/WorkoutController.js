const Workout = require('../models/Workout');
const Exercise = require('../models/Exercises');
const User = require('../models/Users');
const Week = require('../models/utils/Week');
const Day = require('../models/utils/Day');

module.exports = {
    async create(req, res) {
        const {
            workoutType,
            target,
            duration,
            level,
            description,
            weekName,
            weeksArray,
            percentage,
            daysArray
        } = req.body;
        const { userId } = req.params;
        const { originalname: name, size, key, url = '' } = req.file

        let workout = await Workout.findOne({ "workoutType": workoutType });
        const user = await User.findById(userId)

        if (!user)
            return res.status(400).json({ mgs: "You can not add this workout" })

        if (workout)
            return res.status(400).json({ msg: "Alread exist an workout with thid name" });

        // Create day | days
        const { days } = JSON.parse(daysArray)
        const daysList = await Day.insertMany(days);

        // Create week | weeks
        const { weeks } = JSON.parse(weeksArray)
        const week = await Week.create({
            name: weekName,
            percentage,
            daysList
        });

        // Create image file
        const imageFile = {
            type: 'Image',
            name,
            size,
            key,
            url,
        }

        // Create workout
        workout = await Workout.create({
            workoutType,
            target,
            duration,
            level,
            description,
            image: imageFile,
            weeksList: week,
            userId
        });

        return res.json(workout);
    },

    async listWorkout(req, res) {
        const workout = await Workout.find().
            populate({
                path: 'weeksList',
                options: {
                    populate: {
                        path: 'daysList',
                        populate: { path: 'exerciseList' }
                    }
                }
            });;

        return res.json(workout)
    },

    async listUserWorkout(req, res) {
        const { userId } = req.params;

        const workout = await Workout.find({ "userId": userId }).
            populate({
                path: 'weeksList',
                options: {
                    populate: {
                        path: 'daysList',
                        populate: { path: 'exerciseList' }
                    }
                }
            });

        return res.json(workout)
    },
}