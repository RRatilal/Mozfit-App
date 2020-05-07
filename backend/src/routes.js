const { Router } = require('express');
const authMiddleware = require('./middlewares/auth');
const multer = require('multer');
const { multerUploadExerciseFiles, multerUploadUserAvatar } = require('./config/multerConfig');

const UsersController = require('./controllers/Users');
const ExerciseController = require('./controllers/ExerciseController');
const WorkoutController = require('./controllers/WorkoutController');

const filesUpload = multer(multerUploadExerciseFiles).fields([
    {
        name: "image", maxCount: 1
    }, {
        name: "video", maxCount: 1
    }
])

const userAvatar = multer(multerUploadUserAvatar).single("file")

const routes = Router();

routes.post('/signup', UsersController.signUp);
routes.post('/signin', UsersController.signIn);
routes.post('/gsignin', UsersController.googleSignin);

routes.use(authMiddleware);

routes.post('/userimg/:userId', userAvatar, UsersController.uploadLocalUserImage);

routes.post('/exercise/:userId', filesUpload, ExerciseController.create);
routes.get('/exercise', ExerciseController.index);
routes.get('/authorexec', ExerciseController.listAuthorExerc);

routes.post('/workout/:userId', WorkoutController.create)
routes.get('/workout/:userId', WorkoutController.listUserWorkout)
routes.get('/workout', WorkoutController.listWorkout)

routes.delete('/delete/:id', UsersController.delete);

module.exports = { routes }