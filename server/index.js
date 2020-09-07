var express = require('express');   //CERACON DEL SERVIDOR, exores viene de node_mosules
var app = express();    //llamaos a expres
var server = require('http').Server(app);   //le pasamos la app  expres
var io= require('socket.io')(server);   //engloba http y express

//html cargara 'client'
app.use(express.static('client')); //Se usara para cargar una vista estatica por defeccto


app.get('/hola-mundo',function(req,res){
    res.status(200).send('Hola mundo desde una ruta');
}); //creamos una ruta

var messages=[{
    id:1, 
    text: 'Bienvenido al chat privado de Socket.io y NodejS der Fernando A. ...',
    nickname: 'Bot - Fernando A.es'
}]; //array de mensajes

io.on ('connection',function(socket){
    console.log("El cliente con IP: "+socket.handshake.address+", se ha conectado!!");    //PAra ver la ip del cliente
    socket.emit('messages',messages); //emitir mensaje al cliente
});//Abrimos una conexion al sovket, encarga de recibir las coenxiones de loa clientes.

server.listen(6677, function(){
    console.log('El Servidor esta funcionando en el http://localhost:6677');
}); //Creamos servidor con express