function ping(ip, port, onOnline) {
    // Create WebSocket connection.
    const socket = new WebSocket(`ws://${ip}:${port}`);
    socket.addEventListener('message', function (event) {
        onOnline();
        socket.close();
    });
}