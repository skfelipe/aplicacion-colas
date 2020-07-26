// TODO: COMANDO PARA ESTABLECER LA CONEXION

var socket = io();

var label = $("#lblNuevoTicket");

socket.on('connect', function() {
    console.log("Conectado al servidor");
});
socket.on('disconnect', function() {
    console.log("Desconectaado al servidor");
});

// TODO: on estadoActual

socket.on('estadoActual', function(resp) {

    label.text(resp.actual);


});


$('button').on('click', function() {
    //console.log('click');

    socket.emit('siguienteTicket', null, function(siguienteTicket) {

        label.text(siguienteTicket);

    });

});