const Router = require('../framework/Router');

const router = new Router();

const USERS_ENDPOINT = '/users';

let users = [
        {id: 0, name: 'Efim'},
        {id: 1, name: ' '},
        {id: 2, name: 'VarConstLet'},
]

router.get(USERS_ENDPOINT, (req, res)=>{
    res.send(users);
})

router.post(USERS_ENDPOINT, (req, res)=>{
    console.log(req.body);
    const user = req.body;
    users.push(user);
    res.send(users);
})



module.exports = router;