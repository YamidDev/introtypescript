interface Person {
    firstName: string;
    lastName: string;
    age: number;
    dni: number;
}

function viewPerson(pPerson: Person) {
    console.log(pPerson);
    
}

viewPerson({firstName: 'YamiDev', lastName: 'Cueto', age: 32, dni: 1102825900});

interface Vehicle {
    brand: string;
    model: string;
    plate: number;
    color?: string;
}

function showVehicle(pVehicle: Vehicle) {
    console.log(`Marca: ${pVehicle.brand}, Model: ${pVehicle.model}`);
    if(pVehicle.color) {
        console.log(`Color: ${pVehicle.color}`);
    } else {
        console.log('Color for vehicle is not present');
    }
}

showVehicle({brand: 'Mazda', model: '3', plate: 3231});
showVehicle({brand: 'Toyota', model: 'Corolla', plate: 2134, color: 'red'});

interface Dot {
    readonly x: number;
    readonly y: number;
}

let point1: Dot = { x: 121, y:84};

interface Search {
    (value: string, find: string): boolean;
}

const mySearch: Search = (v: string, b: string): boolean => {
    const result = v.search(b);
    return result > -1;
}

console.log(mySearch('Hola', 'Hola'));

// Inteface in the class 
interface Human {
    firstName: string;
    age: number;
}

class Adult implements Human {
    firstName: string;
    age: number;
    haveVehicle: boolean;

    constructor(pName: string, pAge: number, pVehicle: boolean) {
        this.haveVehicle = pVehicle;
        this.firstName = pName;
        this.age = pAge;
    }
}

class kid implements Human {
    firstName: string;
    age: number;
    isBoy: boolean;
    isGirl: boolean

    constructor(kName: string, kAge: number, isBoy?: boolean, isGirl?: boolean) {
        this.firstName = kName;
        this.age = kAge;
        this.isBoy = isBoy;
        this.isGirl = isGirl;
    }

    public present(kName: string, kIsBoy?: boolean, kIsGirl?: boolean) : void {
        if(kIsGirl) {
            console.log(`Hi, everyone my name is: ${kName} and i am a Girl`);
        } 
        if(kIsBoy) {
            console.log(`Hi, everyone my name is: ${kName} and i am a boy`);
        }
    }
}

let julieta = new kid('Julieta', 4, false, true);
let matias = new kid('Matias', 3, true);
julieta.present(julieta.firstName, julieta.isBoy, julieta.isGirl);
matias.present(matias.firstName, matias.isBoy, matias.isGirl);
