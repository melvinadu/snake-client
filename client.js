const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541
  });

// interpret incoming data as text
conn.setEncoding("utf8");

conn.on("connect", () => {
  // code that does something when the connection is first established
  conn.write("Name: MVA");
  console.log("Successfully connected to game server")
  // setInterval(() => {
  //   conn.write("Move: up");
  // }, 1000);
  
});

conn.on('data',function(message){
  console.log('server sent:',message);
});

return conn;
}


module.exports = { connect };