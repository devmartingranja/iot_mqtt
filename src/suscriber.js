// MQTT subscriber
const topic = 'empresa_1/piso_1/#';

var mqtt = require("mqtt");

var client = mqtt.connect('mqtt://127.0.0.1:1884');

client.on('message', (topic, message) => {

    topic = topic.toString();
    message = message.toString();
    console.log("message -> topic = " + topic + " / msg = " + message);

})

client.on('connect', () => {
    //client.subscribe([topic, "topic2", "topic3"])
    client.subscribe(topic);

})

client.on("error", (e) => {
    console.log(e)
})