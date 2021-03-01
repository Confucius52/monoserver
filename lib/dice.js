"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dice = void 0;
const schema_1 = require("@colyseus/schema");
class Dice extends schema_1.Schema {
    constructor() {
        super(...arguments);
        this.first = 0;
        this.second = 0;
        this.consecutiveDoubles = 0;
    }
    roll(state) {
        const random = this.random();
        state.dice.first = random[0];
        state.dice.second = random[1];
        /* ++Dice.curRoll; */
        if (state.getCurrentPlayer().location == 40) {
            if (state.dice.first == state.dice.second) {
                state.getCurrentPlayer().location = (20 + state.dice.first + state.dice.second) % 40;
            }
            return;
        }
        state.getCurrentPlayer().location += state.dice.first + state.dice.second;
        state.getCurrentPlayer().location %= 40;
        if (state.dice.first == state.dice.second) {
            ++state.dice.consecutiveDoubles;
            if (state.dice.consecutiveDoubles == 3) {
                state.dice.consecutiveDoubles = 0;
                state.getCurrentPlayer().location = 40;
                ++state.currentTurn;
                state.currentTurn %= state.playerIds.length;
                state.dice.consecutiveDoubles = 0;
            }
        }
        else {
            ++state.currentTurn;
            state.currentTurn %= state.playerIds.length;
            state.dice.consecutiveDoubles = 0;
        }
        console.log("Roll: ", state.dice.first, state.dice.second);
    }
    random() {
        return [Math.random() * 6 + 1, Math.random() * 6 + 1];
    }
}
Dice.fakeRolls = [[1, 2], [2, 2], [4, 5], [5, 3], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2]];
Dice.curRoll = 0;
__decorate([
    schema_1.type("number")
], Dice.prototype, "first", void 0);
__decorate([
    schema_1.type("number")
], Dice.prototype, "second", void 0);
exports.Dice = Dice;
