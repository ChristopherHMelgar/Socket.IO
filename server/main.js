var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static('public'));

app.get('/', function(req, res){
    res.sendfile(__dirname + 'index.html');
});

var coordinates = {
    x: 0,
    y: 0
}

io.on('connection', function(socket){
    console.log("Someone has connected with Socket", socket.id);

    socket.on('scrolling', scrollMsg);
    
    function scrollMsg(data){
        
        socket.broadcast.emit('scrolling', data)       
        console.log(data);
               
        coordinates = data;
    }

    io.emit('newClient', coordinates)

})

server.listen(8080, function(){
    console.log("Server running in http://localhost:8080");
});