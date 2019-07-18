var isInitiator;

window.room = prompt("Enter your room");

var socket = io.connect();

if (room !== "") {
  console.log("Message from client: Asking to join room" + room);
  socket.emit("create or join", room);
}

socket.on("created", function(room, clientId) {
  isInitiator = true;
});

socket.on("full", function(room) {
  console.log("room full : " + room);
});

socket.on("ipaddr", function(ipaddr) {
  console.log("server ip address " + ipaddr); 
});

socket.on("joined", function(room, clientId) {
  isInitiator = false;
});

socket.on("log", function(array) {
  console.log.apply(console, array);
});
