//ЗНАКОМСТВО С TypeScript

//Types of data
typeof 23;          // "number"     
typeof "str";       // "string"      
typeof true;        // "boolean"
typeof [];          // "object"
typeof {};          // "object"
typeof null;        // "object"  
typeof undefined;   // "undefined"     
typeof Symbol();    // "symbol"


//Массивы
let list: number[] = [1,2,3]; //простое обьявление
let list2: Array<number> = [1,2,3]; //обьявление с generic type

//Tuple type
//Multiple lines
let x: [string,number];
x = ["hello", 10];

//One line 
let y: [string,number] = ["goodbuy", 42];

//Error case
//x = [10, "hello"]; //Type "string" is not assignable to type "number"

//Any Type
//Any type for array
let g: [any, any] = ["goodbuy", 42];
let z: Array<any> = [10, "hello"];

//Any type for string
let notSure: any = false;

// Issue case (no error )
notSure = true;
notSure = 42;
notSure = "hello";


// Enum Type
enum Directions {
    Up,
    down = 4,
    Left = 5,
    Right
}

Directions.Up;    //0
Directions.down;  //4
Directions.Left;  //5
Directions.Right; //6

// Never Type, нужна когда результат функции получить невозможно, либо она бесконечно повторяется, либо всегда выдаёт ошибку
//Function return Error
const msg = "hello";
const error = (msg:string): never => {
    throw new Error(msg);
};

//Function infinite loop
const infiniteLoop = (): never => {
    while (true) {
    }
};

// Object Type
const create = (o: object | null): void => {};

create(1);  // Argument of type "1" is not assignable to parametr of type "object | null"
create("42"); // Argument of type "42" is not assignable to parametr of type "object | null"
create ({ obj: 1});

//Multiple types for one value
let id: number | string;

id = 10; //number is valid
id = "42"; //string is valid
id = true; // Type "true" is not assignable to type "string | number"


// Type
type Name = string; // Custom type creation

let id: Name; // Apply custom type

id = "42"; //No erro, because type of "42" is a string
id = 10; // Type "10" is not assignable to type "string"

//About Enum more details

// Reverse enum
enum Directs {
    Up,
    Down,
    Left,
    Right
}

Directs[0] // "Up"
Directs[1] // "Down"
Directs[2] // "Left"
Directs[3] // "Right"

// Custom index for enum elements
enum Directions2 {
    Up = 2,
    Down = 4,
    Left = 6,
    Right = 8
}

Directions2.Up;   // 2
Directions2.Down; // 4
Directions2[6];   // "Left"
Directions2[8];   // "Right"

// Custom name for keys
enum links {
    youtube = "https://youtube.com/",
    vk = "https://vk.com/",
    facebook = "https://facebook.com/"
}

// Using
links.vk        // "https://vk.com/"
links.youtube   // "https://yputube.com/"

// Compiled code
"use strict";
var links;
(function (links){
    links["youtube"] = "https://youtube.com/";
    links["vk"] = "https://vk.com/";
    links["facebook"] = "https://facebook.com/";
})(links || (links = {}))

//const enum (without using)
const enum links {
    youtube = "https://youtube.com/",
    vk = "https://vk.com/",
    facebook = "https://facebook.com/"
}

//Compiled code is empty
"use strict";

//Using of enum properties
const arr = [links.vk, links.facebook];

// Compiled code
"use strict";
const arr = ["https://vk.com/" /* vk */, "https://facebook.com/" /* facebook */];

//Function example
const createPassword = (name, age) => `${name}${age}`;

createPassword("Jack", 31); // "Jack31"

//Arguments type
const createPassword = (name: string, age: number) => `${name}${age}`;

// Multiple arguments types
const createPassword = (name: string, age: number | string) => `${name}${age}`;

createPassword("Jack", 31);    // "Jack31"
createPassword("Jack", "31");  // "Jack31"

//Default Arguments
const createPassword = (name: string = "Max", age: number | string = 20) => `${name}${age}`;

createPassword();  // "Max20"

//Call function with wrong argument
/* 
    Error:
    Argument of type "null" is not assignable to parameter of type "string | undefined"
*/
createPassword(null);



//Function with two required arguments
const createPassword = (name: string, age: number): string => `${name}${age}`;

//Call function with one argument
createPassword("Jack"); // "An argument for 'age' was not provided"

//Function with optional argument "age"
const createPassword = (name: string, age?: number) => `${name}${age}`;



//REST остаточные параметры
const createSkills = (name, ...skills) =>
                    `${name}, my skills are ${skills.join()}`;
//skills - массив скилов
// REST type
const createSkills = (name:string, ...skills: Array<string>) =>
                    `${name}, my skills are ${skills.join()}`;

//Call function with REST arguments
createSkills("Jack", "JS", "ES6", "React"); // "Jack, my skils are JS, ES6, React"




// Returned type is string
const createPassword = (name: string, age: number | string): string => `${name}${age}`;

// Returned type is number
const sum = (first: number, second: number): number => first + second;

// Returned type is object
const createEmptyObject = (): object => ({});




//Void (функция не возвращает ничего)
const greetUser: void = () => {
    alert("Hello, nice to see you!");
};

// Never Type
// Function return Error
const msg = "hello";
const error = (msg:string): never => {
    throw new Error(msg);
};

// Function infinite loop
const infiniteLoop = (): never => {
    while (true) {

    }
};



// Function variable type
let myFunc;

function oldFunc(name: string): void {
    alert(`Hello ${name}, nice to see you!`);
};

myFunc = oldFunc;

//Describe function type
let myFunc: (firstArg: string) => void;

function oldFunc(name: string): void {
    alert(`Hello ${name}, nice to see you!`);
};

// Describe function type with wrong retrun type
let myFunc: (firstArg: string) => number;

function oldFunc(name: string): void {
    alert(`Hello ${name}, nice to see you!`);
};

/*
    Error:
    Type "(name: string)" => void is not assignable to type "(firstArg: string) => number"
    type "void" is not assignable to type "number"
*/
myFunc = oldFunc;



//OBJECTS

// Simple object example
let user = {
    name: "Yauhen",
    age: 30,
};




// Object type using any
let user: any ={
    name: "Yauhen",
    age: 30,
};

user = "test" // Now type of user is string


// Define object type
let user: { name: string, age: number } = {
    name: "Yauhen",
    age: 30,
};



