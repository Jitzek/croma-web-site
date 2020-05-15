var socket = null;
function connect_socket(url) {
    // Create WebSocket connection.
    socket = new WebSocket(url);

    socket.onerror = function (event) {
        //console.log(event);
    };
    
    // Connection opened
    socket.addEventListener('open', function (event) {
        socket.send(JSON.stringify({ origin: 'client' }));
    });
    
    // Listen for messages
    socket.addEventListener('message', function (event) {
        json = JSON.parse(event.data);
        if (!json.origin) return;
        //console.log(`Message from ${json.origin}`);
    
        if (json.data) {
            // Do something with data
            updateHTML(json.data.velocity);
        }
    });
    
    socket.addEventListener('close', function (event) {
        console.log('Connection Closed ', event.data);
    });
}

function disconnect_socket() {
    if (socket) { socket.close(); }
    socket = null;
    updateHTML('0');
}

function updateHTML(velocity) {
    if (velocity)
        document.getElementById('velocity').innerHTML = velocity;
}