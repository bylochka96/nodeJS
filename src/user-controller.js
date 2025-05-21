const users = [
        {id: 0, name: 'Efim'},
        {id: 1, name: ' '},
        {id: 2, name: 'VarConstLet'},
]

const getUsers = (req, res)=>{
    if(req.params.id){
        return res.send(users.find(user => user.id == req.params.id))
    }
    if(req.params.name){
        return res.send(users.find(user => user.name == req.params.name))
    }
    res.send(users)
}

const createUser = (req, res)=>{
    console.log(req.body);
    // console.log(req.params);
    const user = req.body;
    users.push(user);
    res.send(users);
}

module.exports = {
    getUsers,
    createUser
}