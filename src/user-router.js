const Router = require('../framework/Router');
const controller = require('./user-controller')

const USERS_ENDPOINT = '/users';

const router = new Router();


router.get(USERS_ENDPOINT, controller.getUsers)

router.post(USERS_ENDPOINT, controller.createUser)


module.exports = router;