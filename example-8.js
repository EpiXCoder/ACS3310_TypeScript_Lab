"use strict";
// We need a Kaiju class
// All Kaiju have name, power and type. 
// Kaiju should have a describe method that 
// prints: name:<name> type:<type> power:<power>
Object.defineProperty(exports, "__esModule", { value: true });
exports.KaijuType = exports.Kaiju = void 0;
// Type can be: lizard, flying, or ape. 
// Use an enum to define the type
// Be sure to include a constructor in the 
// Kaiju class that initializes it's properties!
var KaijuType;
(function (KaijuType) {
    KaijuType[KaijuType["lizard"] = 0] = "lizard";
    KaijuType[KaijuType["flying"] = 1] = "flying";
    KaijuType[KaijuType["ape"] = 2] = "ape";
})(KaijuType || (exports.KaijuType = KaijuType = {}));
var Kaiju = /** @class */ (function () {
    function Kaiju(name, type, power) {
        this.name = name;
        this.type = type;
        this.power = power;
    }
    Kaiju.prototype.describe = function () {
        console.log("name:".concat(this.name, " type:").concat(KaijuType[this.type], " power:").concat(this.power));
    };
    return Kaiju;
}());
exports.Kaiju = Kaiju;
