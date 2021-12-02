let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", (key) => {
    process.stdout.write(".");
    if (key === "\u0003") {
      process.exit();
    } else if (key === "w") {
      connection.write("Move: up");
    } else if (key === "s") {
      connection.write("Move: down");
    } else if (key === "a") {
      connection.write("Move: left");
    } else if (key === "d") {
      connection.write("Move: right");
    } else if (key === "h") {
      connection.write("Say: Sup!");
    }
  });


  return stdin;
};

module.exports = { setupInput };


