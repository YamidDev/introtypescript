const add = function (num1, num2) {
    return num1 + num2;
};
// Params optionals and default values
function showName(name, lastName = 'Gomez') {
    if (lastName)
        return `${name} ${lastName}`;
    else
        return name;
}
console.log(showName('Yamid'));
console.log(showName('Yamid', 'Cueto'));
// Params REST
function showNameTwo(name, ...moreInfo) {
    return `${name} ${moreInfo.join(' ')}`;
}
console.log(showNameTwo('Yamid', 'David', 'Carlos', 'John'));
