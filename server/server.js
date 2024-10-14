const net = require('net');
const server = net.createServer()

server.on('connection', (socket) => {
    socket.on('data', (data) => {
        console.log('Data received from client:', data.toString());
        socket.write('Data received by server: ' + data.toString());
    })
    socket.on('end', () => {
        console.log('Client disconnected');
    })
    socket.on('error', (error) => {
        console.log('Error:', error);
    })
})
server.listen(3000, ()=>{
    console.log('Server started on port', server.address().port);           
});
