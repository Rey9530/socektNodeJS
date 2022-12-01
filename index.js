const express = require("express");
const app = express();
const http = require("http");
const serve = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(serve);

const port = 3002;


io.on('connection', (socket) => {
    console.log('a user connected');


    socket.on('chat_message', (msg) => {
        
        io.emit('chat_message', msg)
    });






    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});



app.get('/', (req,resp)=>{
    // resp.send('<h1>Hola mundo</h1>');
    resp.sendFile(__dirname+'/public/index.html');
});


serve.listen(port,()=>{
    console.log("Servidor corriendo en el puerto:"+port);
});