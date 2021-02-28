import { Server } from "colyseus";
import { MyRoom } from "./MyRoom";

const port = +process.env.port || 3000;

const gameServer = new Server();
gameServer.listen(port);
// register your room handlers
gameServer.define('my_room', MyRoom);

console.log(`Listening on ws://localhost:${ port }`)
