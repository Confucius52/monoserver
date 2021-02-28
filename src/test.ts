/* const Colyseus = require("colyseus.js"); */
import { Client } from "colyseus.js";

let client = new Client("ws://localhost:3000");

async function main() {
	try {
		const room = await client.joinOrCreate("my_room", {username:"greenpizza12"});
		console.log("joined successfully");
		// console.log("joined successfully", room);
		// room.onStateChange((state) => {
		// 	console.log(JSON.stringify(state, null, 2));
		// });
		room.send("roll_dice");

	} catch (e) {
		console.error("join error", e);
	}
}

main();
