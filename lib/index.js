"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const colyseus_1 = require("colyseus");
const MyRoom_1 = require("./MyRoom");
const port = +process.env.port || 3000;
const gameServer = new colyseus_1.Server();
gameServer.listen(port);
// register your room handlers
gameServer.define('my_room', MyRoom_1.MyRoom);
console.log(`Listening on ws://localhost:${port}`);
