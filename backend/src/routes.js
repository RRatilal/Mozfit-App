const { Router } = require('express');
const authMiddleware = require('./middlewares/auth')

const UsersController = require('./controllers/Users')
const ExerciseController = require('./controllers/ExerciseController')
const WorkoutController = require('./controllers/WorkoutController')

const routes = Router();

routes.post('/signup', UsersController.signUp);
routes.post('/signin', UsersController.signIn);
routes.post('/gsignin', UsersController.googleSignin);

routes.use(authMiddleware);
routes.post('/exercise', ExerciseController.create);
routes.get('/exercise', ExerciseController.index);
routes.get('/authorexec', ExerciseController.listAuthorExerc);

routes.post('/workout/:userId', WorkoutController.create)
routes.get('/workout/:userId', WorkoutController.listUserWorkout)
routes.get('/workout', WorkoutController.listWorkout)

routes.delete('/delete/:id', UsersController.delete);

module.exports = { routes }