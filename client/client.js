const net = require('net');
const readline = require('readline-sync');
const options ={
    port: 3000,
    host: 'localhost'
}
const client = new net.createConnection(options);
client.on('connect', () => {
    console.log('Connected to server')
    sendLine();
}); 
client.on('end', () => {
    console.log('Disconnected from server');
});
client.on('data', (data) => {
    console.log('Data received from server:', data.toString());
    sendLine();
});
client.on('error', (err) => {
    console.log('Error:', err);
});

function sendLine() {
   var line = readline.question('\nEnter a message:\n')
   if (line === 'exit') {
       client.end();
       console.log('Exiting...');
       return;
   }else{
         client.write(line);
   }
}