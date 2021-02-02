// Boolean
let isValid: boolean = true;
let isInvalid: boolean = false;

// Number
let age: number = 32;

// String
let firstName: string = 'Yamid';
let lastName: string = 'Cueto';

let completeName: string = `${firstName} ${lastName}`;

// Array
let numbers: number[] = [1,2,3,4,5];
let number2: Array<number> = [1,2,3,4,5];

// Tuple
let site: [string, number] = ['House', 08800];

// Enum
enum Status {
    Offline,
    Undefined,
    Online
}

let stat: Status = Status.Online;
console.log(stat);

let withoutType: unknown = 'Hi!';
withoutType = 32;
withoutType = true;

let newString: string = 'This is an string';


let typeUndefined: any = 'this is a message';
newString = typeUndefined;

// void
function logger(): void{
    console.log('logging');
}



