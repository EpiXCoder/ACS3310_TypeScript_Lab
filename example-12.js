"use strict";
// You are making a mapping application. 
Object.defineProperty(exports, "__esModule", { value: true });
// Write an enum that defines the directions: 
// North, South, East, West
// Use a string enum: https://www.typescriptlang.org/docs/handbook/enums.html#string-enums
var Direction;
(function (Direction) {
    Direction["N"] = "North";
    Direction["S"] = "South";
    Direction["E"] = "East";
    Direction["W"] = "West";
})(Direction || (Direction = {}));
// Should having a heading property type Direction
var MapPosition = /** @class */ (function () {
    function MapPosition() {
        this.direction = Direction.N;
    }
    // takes a new Direction as an argument
    MapPosition.prototype.move = function (newDirection) {
        // set the direction on your property 
        this.direction = newDirection;
        // Print the new direction
        console.log("Now heading ".concat(this.direction));
    };
    // Should return a string and print:
    // "you are heading <direction>"
    MapPosition.prototype.describe = function () {
        return "you are heading ".concat(this.direction);
    };
    return MapPosition;
}());
var location = new MapPosition();
console.log(location.describe());
// Might output:
// "You are heading north"
location.move(Direction.W);
console.log(location.describe());
exports.default = MapPosition;
