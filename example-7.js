"use strict";
// Use the enum type to define the suit for 
// a playing card. 
// Below define the ace. It should have a suit
// and a value.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Suit = void 0;
// Check the docs and define your enum below
// https://www.typescriptlang.org/docs/handbook/enums.html#handbook-content
var Suit;
(function (Suit) {
    Suit[Suit["clubs"] = 0] = "clubs";
    Suit[Suit["diamonds"] = 1] = "diamonds";
    Suit[Suit["hearts"] = 2] = "hearts";
    Suit[Suit["spades"] = 3] = "spades";
})(Suit || (exports.Suit = Suit = {}));
var ace = {
    suit: Suit.spades,
    value: 1
};
