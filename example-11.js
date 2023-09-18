"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allPeople = void 0;
var example_10_js_1 = require("./example-10.js");
var amy = new example_10_js_1.Student('Amy', 21);
var bob = new example_10_js_1.default('Bob', 32);
var cat = new example_10_js_1.Student('Cat', 43);
// Use the interface to make an array that 
// holds both types: Person and Student 
var allPeople = [
    amy,
    bob,
    cat
];
exports.allPeople = allPeople;
