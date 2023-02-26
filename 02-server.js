require('http').createServer((req, res) =>{

    res.setHeader('Content-Type', 'application/json');
res.end(JSON.stringify({name: 'johnson', nos:[1,2,3,4]}))

}



    // res.end("Hello")

).listen(8080)



