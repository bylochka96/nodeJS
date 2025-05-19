module.exports = (req, res) => {
    res.writeHead(200, {
        'Content-type' : 'application/json'
    //    'Content-type': 'text/html; charset=utf-8'
    });
    res.send = (data) => {
        res.end(JSON.stringify(data))
    }
}


