// We need a Kaiju class
// All Kaiju have name, power and type. 
// Kaiju should have a describe method that 
// prints: name:<name> type:<type> power:<power>

// Type can be: lizard, flying, or ape. 
// Use an enum to define the type

// Be sure to include a constructor in the 
// Kaiju class that initializes it's properties!

enum KaijuType { 
	lizard,
	flying,
	ape
}
class Kaiju {
    name: string;
    power: number;
    type: KaijuType;

    constructor(name: string, type: KaijuType, power: number) {
        this.name = name;
        this.type = type;
        this.power = power;
    }

    describe(): void {
        console.log(`name:${this.name} type:${KaijuType[this.type]} power:${this.power}`);
    }
}

export {
	Kaiju, 
	KaijuType
}