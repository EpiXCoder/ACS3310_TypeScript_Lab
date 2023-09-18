

// Currently the function below uses a string for
// for the type of monster. Better to use an enum
// since monsters are only: lizard, flying, or ape

// Import Kaiju and KaijuType from example-8.js

// Fix the rampage function so it makes use of the KaijuType enum

// Import Kaiju and KaijuType from example-8.js
import { Kaiju, KaijuType } from './example-8.js';

function rampage(kaiju: Kaiju, city: string): string {
    const { name, type, power } = kaiju;
    let action: string;
    
    switch(type) {
        case KaijuType.ape: 
            action = 'smash';
            break;

        case KaijuType.lizard:
            action = 'burn';
            break;

        case KaijuType.flying: 
            action = 'flap';	
            break;
        default:
            throw new Error('Unknown Kaiju type.');
    }
    
    let result = `${name} ${action} over ${city} causing ${power * 10000} damage!`;
    return result;
}

const gojira = new Kaiju('Gojira', KaijuType.lizard, 90);

// Define two more monsters
const kong = new Kaiju('Kong', KaijuType.ape, 95);
const rodan = new Kaiju('Rodan', KaijuType.flying, 85);

console.log(rampage(gojira, 'Tokyo'));
console.log(rampage(kong, 'New York'));
console.log(rampage(rodan, 'Los Angeles'));
