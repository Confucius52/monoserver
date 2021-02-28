import { type, Schema, MapSchema, ArraySchema } from "@colyseus/schema";
import { Dice } from "./dice";
import Player from "./player";

export class State extends Schema {
	@type({map : Player})
	players = new MapSchema<Player>();
	
	@type([ "string" ])
	playerIds = new ArraySchema<string>();

	@type(Dice)
	dice = new Dice();

	@type("number") 
	currentTile = 0

	@type("string")
	currentSituation = "lobby"

	@type("string")
	currentSpecialDescription = ""

	@type("number")
	currentTurn = 0

	// @type([ Tile ])
	// tiles = ArraySchema<Tile>(); 

	// @type(Auction)
	// auction = new Auction()
   	colors: string[] = ['#da00fe', '#fea600', "#fe4138", "#0072BB", "#29b30f", "#00e2e5"]  

	constructor() {
		super();
	}

	getCurrentPlayer() {
		return this.players[this.playerIds[this.currentTurn]];
	}

	addPlayer(id, name) {
		var color = this.colors.shift();
	
		this.playerIds.push(id);
		this.players.set(id, new Player(name, id, color));
		this.colors.push(color); 
	}
}



