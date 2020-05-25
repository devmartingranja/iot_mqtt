const topic = 'empresa_1/piso_1/sensor_2';

// MQTT publisher
var mqtt = require("mqtt");
var client = mqtt.connect('mqtt://127.0.0.1:1884', {
    clientId :'11'
})

client.on('connect', () => {

    let i = 0;
    setInterval(() => {

        i++;
        data = {"value": i + " p2"};
        console.log(`Enviando valor ${i}`)
        client.publish(topic, JSON.stringify(data))
    }, 5000)

})

client.on("error", (e) => {
    console.log(e)
})