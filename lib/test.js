"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/* const Colyseus = require("colyseus.js"); */
const colyseus_js_1 = require("colyseus.js");
let client = new colyseus_js_1.Client("ws://localhost:3000");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const room = yield client.joinOrCreate("my_room", { username: "greenpizza12" });
            console.log("joined successfully");
            // console.log("joined successfully", room);
            // room.onStateChange((state) => {
            // 	console.log(JSON.stringify(state, null, 2));
            // });
            room.send("roll_dice");
        }
        catch (e) {
            console.error("join error", e);
        }
    });
}
main();
