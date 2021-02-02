// Boolean
let isValid = true;
let isInvalid = false;
// Number
let age = 32;
// String
let firstName = 'Yamid';
let lastName = 'Cueto';
let completeName = `${firstName} ${lastName}`;
// Array
let numbers = [1, 2, 3, 4, 5];
let number2 = [1, 2, 3, 4, 5];
// Tuple
let site = ['House', 08800];
// Enum
var Status;
(function (Status) {
    Status[Status["Offline"] = 0] = "Offline";
    Status[Status["Undefined"] = 1] = "Undefined";
    Status[Status["Online"] = 2] = "Online";
})(Status || (Status = {}));
let stat = Status.Online;
console.log(stat);
let withoutType = 'Hi!';
withoutType = 32;
withoutType = true;
let newString = 'This is an string';
let typeUndefined = 'this is a message';
newString = typeUndefined;
// void
function logger() {
    console.log('logging');
}
