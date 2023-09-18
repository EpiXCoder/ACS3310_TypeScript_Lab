// Giant Robot class

// Goal creat an interface with a methods 

// All Robots have name, power and type. 
// Kaiju should have a describe method that 
// prints: name:<name> type:<type> power:<power>


// Robot Interface
interface Robot {
    name: string;
    power: number;
    type: string;
}

// Kaiju Interface
interface Kaiju {
    describe(): void;
}

// GiantRobot Class
class GiantRobot implements Robot, Kaiju {
    name: string;
    power: number;
    type: string;

    constructor(name: string, power: number, type: string) {
        this.name = name;
        this.power = power;
        this.type = type;
    }

    describe(): void {
        console.log(`name:${this.name} type:${this.type} power:${this.power}`);
    }
}

// Example Usage:
const giantRobotExample = new GiantRobot("MechaGodzilla", 150, "Mechanical Monster");
giantRobotExample.describe();  // This will print: name:MechaGodzilla type:Mechanical Monster power:150
