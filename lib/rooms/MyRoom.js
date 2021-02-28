"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const colyseus_1 = require("colyseus");
const MyRoomState_1 = require("./schema/MyRoomState");
class MyRoom extends colyseus_1.Room {
    onCreate(options) {
        this.setState(new MyRoomState_1.MyRoomState());
        this.onMessage("type", (client, message) => {
            //
            // handle "type" message
            //
        });
    }
    onJoin(client, options) {
    }
    onLeave(client, consented) {
    }
    onDispose() {
    }
}
exports.MyRoom = MyRoom;
