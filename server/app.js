import express from "express";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";

const app = express();

const server = http.createServer(app);

app.use(cors());

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);
});

server.listen(8000, () => {
  console.log("connected");
});
