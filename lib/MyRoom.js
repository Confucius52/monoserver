"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyRoom = void 0;
const colyseus_1 = require("colyseus");
const state_1 = require("./state");
const player_1 = __importDefault(require("./player"));
class MyRoom extends colyseus_1.Room {
    onCreate(options) {
        this.maxClients = 2;
        this.setState(new state_1.State());
        this.onMessage("roll_dice", (client, message) => {
            this.state.roll();
        });
    }
    onJoin(client, options) {
        this.state.playerIds.push(client.id);
        this.state.players.set(client.id, new player_1.default(options.username));
    }
    onLeave(client, consented) {
    }
    onDispose() {
    }
}
exports.MyRoom = MyRoom;
