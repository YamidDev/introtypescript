const add = function (num1: number, num2: number) : number {
    return num1 + num2;
}

// Params optionals and default values

function showName(name: string, lastName: string = 'Gomez') : string {
    if (lastName) return `${name} ${lastName}`;
    else return name;
}

console.log(showName('Yamid'));
console.log(showName('Yamid', 'Cueto'));

// Params REST

function showNameTwo(name: string, ...moreInfo: string[]): string {
    return `${name} ${moreInfo.join(' ')}`;
}

console.log(showNameTwo('Yamid', 'David', 'Carlos', 'John'));

