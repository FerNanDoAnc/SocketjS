//Para que el cliente se conecte AL SOCKET Y nos notifique
var socket = io.connect('http://192.168.1.45:6677',{'forceNew':true});

socket.on('messages',function(data){
    console.log(data);
    render(data);
});  //El cliente recoge el messages

function render(data){
    var html = data.map(function(message, index){
        return(`
            <div class="message">
                <strong>${message.nickname}</strong>
                <p>${message.text}</p>    
            </div>
        `);
    }).join('');   //map para recorrer el array y mostrarlo

    document.getElementById('messages').innerHTML = html;    //messages viene del html o se usara en el html
} //para mostrar el array en el html