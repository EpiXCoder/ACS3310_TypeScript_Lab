// Giant Robot class
// GiantRobot Class
var GiantRobot = /** @class */ (function () {
    function GiantRobot(name, power, type) {
        this.name = name;
        this.power = power;
        this.type = type;
    }
    GiantRobot.prototype.describe = function () {
        console.log("name:".concat(this.name, " type:").concat(this.type, " power:").concat(this.power));
    };
    return GiantRobot;
}());
// Example Usage:
var giantRobotExample = new GiantRobot("MechaGodzilla", 150, "Mechanical Monster");
giantRobotExample.describe(); // This will print: name:MechaGodzilla type:Mechanical Monster power:150
