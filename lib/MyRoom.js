"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyRoom = exports.ISituation = void 0;
const colyseus_1 = require("colyseus");
const state_1 = require("./state");
const jail_1 = require("./jail");
var ISituation;
(function (ISituation) {
    ISituation["in_jail"] = "in_jail";
    ISituation["lobby"] = "lobby";
    ISituation["dice"] = "waiting_for_dice_roll";
    ISituation["buy_or_auction"] = "buy_or_auction";
    ISituation["auction"] = "auction";
    ISituation["tax"] = "tax";
    ISituation["special"] = "special";
})(ISituation = exports.ISituation || (exports.ISituation = {}));
class MyRoom extends colyseus_1.Room {
    onCreate(options) {
        this.maxClients = 2;
        this.setState(new state_1.State());
        this.onMessage("roll_dice", (client, message) => {
            // console.log(message);
            if (this.state.getCurrentPlayer().id != client.id || this.state.currentSituation != ISituation.dice)
                return;
            this.state.dice.roll(this.state);
        });
        this.onMessage("jail", (client, message) => {
            jail_1.jail_choice(this.state, client, message);
        });
    }
    onJoin(client, options) {
        this.state.addPlayer(client.id, options.username);
        if (this.state.playerIds.length == this.maxClients) {
            this.state.currentSituation = "waiting_for_dice_roll";
        }
    }
    onLeave(client, consented) {
    }
    onDispose() {
    }
}
exports.MyRoom = MyRoom;
