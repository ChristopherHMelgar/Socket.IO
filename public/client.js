var socket = io.connect('http://localhost:8080');

socket.on('scrolling', newScroll);

function newScroll(data){

    window.scroll(data.x, data.y); 
}

window.addEventListener("scroll", function(){
   
    var data = {
        x: this.scrollX,
        y: this.scrollY,
        sending: true,
    }
       
    socket.emit('scrolling', data);
            
},false);

socket.on('newClient', currentCoordinates)

function currentCoordinates(data){
    window.scrollTo(data.x, data.y)
}



