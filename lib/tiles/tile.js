"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile = void 0;
const schema_1 = require("@colyseus/schema");
class Tile {
    constructor(position, type, full_name, split_name) {
        this.position = position;
        this.type = type;
        this.full_name = full_name;
        this.split_name = split_name;
    }
}
__decorate([
    schema_1.type('number')
], Tile.prototype, "position", void 0);
__decorate([
    schema_1.type('string')
], Tile.prototype, "type", void 0);
__decorate([
    schema_1.type('string')
], Tile.prototype, "full_name", void 0);
__decorate([
    schema_1.type('string')
], Tile.prototype, "split_name", void 0);
exports.Tile = Tile;
