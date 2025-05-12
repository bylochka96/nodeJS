const http = require('http');
const EventEmitter = require('events');
const PORT = process.env.PORT || 5000;
const Router = require('../framework/Router')
const Application = require('../framework/Application')


const app = new Application()

const router = new Router();

const USERS = '/users';
router.get(USERS, (req, res)=>{
         res.end(JSON.stringify([
            {id: 0, name: 'Efim'},
            {id: 1, name: ' '},
            {id: 2, name: 'VarConstLet'},
        ]))
    })


const POSTS = '/posts';
 router.get(POSTS, (req, res)=>{
        res.end(JSON.stringify(`Ты сделал запрос на URL: ${POSTS}`))
    })


app.addRouter(router)
app.listen(PORT, () => {console.log(`Server started on PORT ${PORT}`)})
