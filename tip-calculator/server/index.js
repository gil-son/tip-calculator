const express = require('express')

const server = express();

server.use(express.json()); // reconhece informações em json




server.listen(3005, function (){
    console.log('Example app listening on port 3005!');
});