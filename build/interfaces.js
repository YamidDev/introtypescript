function viewPerson(pPerson) {
    console.log(pPerson);
}
viewPerson({ firstName: 'YamiDev', lastName: 'Cueto', age: 32, dni: 1102825900 });
function showVehicle(pVehicle) {
    console.log(`Marca: ${pVehicle.brand}, Model: ${pVehicle.model}`);
    if (pVehicle.color) {
        console.log(`Color: ${pVehicle.color}`);
    }
    else {
        console.log('Color for vehicle is not present');
    }
}
showVehicle({ brand: 'Mazda', model: '3', plate: 3231 });
showVehicle({ brand: 'Toyota', model: 'Corolla', plate: 2134, color: 'red' });
let point1 = { x: 121, y: 84 };
const mySearch = (v, b) => {
    const result = v.search(b);
    return result > -1;
};
console.log(mySearch('Hola', 'Hola'));
class Adult {
    constructor(pName, pAge, pVehicle) {
        this.haveVehicle = pVehicle;
        this.firstName = pName;
        this.age = pAge;
    }
}
class kid {
    constructor(kName, kAge, isBoy, isGirl) {
        this.firstName = kName;
        this.age = kAge;
        this.isBoy = isBoy;
        this.isGirl = isGirl;
    }
    present(kName, kIsBoy, kIsGirl) {
        if (kIsGirl) {
            console.log(`Hi, everyone my name is: ${kName} and i am a Girl`);
        }
        if (kIsBoy) {
            console.log(`Hi, everyone my name is: ${kName} and i am a boy`);
        }
    }
}
let julieta = new kid('Julieta', 4, false, true);
let matias = new kid('Matias', 3, true);
julieta.present(julieta.firstName, julieta.isBoy, julieta.isGirl);
matias.present(matias.firstName, matias.isBoy, matias.isGirl);
