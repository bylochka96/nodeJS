const http = require('http');
const EventEmitter = require('events');
const Application = require('../framework/Application')
const userRouter = require('../src/user-router')
const jsonParser = require('../framework/parseJson')
const parseUrl = require('../framework/parseUrl');

const PORT = process.env.PORT || 5000;
const baseURL = `http://localhost:${PORT}`;

const app = new Application()
app.use(jsonParser);
app.use(parseUrl(baseURL));
app.addRouter(userRouter)

app.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}`)
})
