//@ts-nocheck

import {MyRoom} from "../src/MyRoom";
import {Client} from "./lib";

let room = new MyRoom()


const playerA = new Client(room, "a")
const playerB = new Client(room, "b")


export function simulate(log) {
    room.onCreate({});
    room.onJoin(playerA, {username: 'greenpizza12'})
    room.onJoin(playerB, {username: 'elephant'})
    playerA.send('roll_dice')
}

