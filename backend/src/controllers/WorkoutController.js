const Workout = require('../models/Workout');
const User = require('../models/Users');

module.exports = {
    async create(req, res) {
        const { workoutType, subject, duration, Level, description, imageUrl, exerciseList } = req.body;
        const { userId } = req.params;

        let workout = await Workout.findOne({ "workoutType": workoutType });
        const user = await User.findById(userId)

        if (!user)
            return res.status(400).json({ mgs: "You can not add this workout" })

        if (workout)
            return res.status(400).json({ msg: "Alread exist an workout with thid name" });

        workout = await Workout.create({
            workoutType,
            subject,
            duration,
            Level,
            description,
            imageUrl,
            exerciseList,
            userId
        });

        return res.json(workout);
    },

    async listWorkout(req, res) {
        const workout = await Workout.find().populate("exerciseList");

        return res.json(workout)
    },

    async listUserWorkout(req, res) {
        const { userId } = req.params;

        const workout = await Workout.find({ "userId": userId }).populate("exerciseList");

        return res.json(workout)
    },
}