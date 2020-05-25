var mosca = require("mosca");
var settings = {port: 1884 };
var broker = new mosca.Server(settings);

broker.on('ready', () => {   
    console.log('Broker is ready!')
});

broker.on('clientConnected', function(client) {    
    console.log('client connected - id -> ', client.id? client.id : "no hay id");    
});

broker.on('clientDisconnected', function(client) {  
    console.log('Client Disconnected - id ->', client.id? client.id : "no hay id");
});

broker.on('published', (packet, client)=> {
    // bd    
    console.log(packet.payload.toString());       
})