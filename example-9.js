"use strict";
// Currently the function below uses a string for
// for the type of monster. Better to use an enum
// since monsters are only: lizard, flying, or ape
Object.defineProperty(exports, "__esModule", { value: true });
// Import Kaiju and KaijuType from example-8.js
// Fix the rampage function so it makes use of the KaijuType enum
// Import Kaiju and KaijuType from example-8.js
var example_8_js_1 = require("./example-8.js");
function rampage(kaiju, city) {
    var name = kaiju.name, type = kaiju.type, power = kaiju.power;
    var action;
    switch (type) {
        case example_8_js_1.KaijuType.ape:
            action = 'smash';
            break;
        case example_8_js_1.KaijuType.lizard:
            action = 'burn';
            break;
        case example_8_js_1.KaijuType.flying:
            action = 'flap';
            break;
        default:
            throw new Error('Unknown Kaiju type.');
    }
    var result = "".concat(name, " ").concat(action, " over ").concat(city, " causing ").concat(power * 10000, " damage!");
    return result;
}
var gojira = new example_8_js_1.Kaiju('Gojira', example_8_js_1.KaijuType.lizard, 90);
// Define two more monsters
var kong = new example_8_js_1.Kaiju('Kong', example_8_js_1.KaijuType.ape, 95);
var rodan = new example_8_js_1.Kaiju('Rodan', example_8_js_1.KaijuType.flying, 85);
console.log(rampage(gojira, 'Tokyo'));
console.log(rampage(kong, 'New York'));
console.log(rampage(rodan, 'Los Angeles'));
