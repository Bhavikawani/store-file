const express = require("express");
const app = express();
const server = require("http").createServer(app);
const initMiddlewares = require("./middlewares/index");
const initRoutes = require("./routes/index");
const path = require("path");
const cors = require("cors");

// Initializing Middlewares
initMiddlewares(app);

// Initializing Routes
initRoutes(app);

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use(cors());
let PORT = 5000;
io.on("connection", (socket) => {
  socket.emit("me", socket.id);

  socket.on("disconnect", () => {
    socket.broadcast.emit("callended");
  });

  socket.on("calluser", ({ userToCall, signalData, from, name }) => {
    io.to(userToCall).emit("calluser", { signal: signalData, from, name });
  });

  socket.on("answercall", (data) => {
    io.to(data.to).emit("callaccepted", data.signal);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
