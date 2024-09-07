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

// Try to change property
let user: { name: strinq, age: number } ={
    name: "Yauhen",
    /*
        Error:
        The expected type comes from property "age"
        which is declared here on type "{ name: string, age: number;}"
    */
   age: "test",          // <---- Must be a number
};

// Try to chenge variable type
user = "test";  // Type "test" is not  assignable to type "{ name: strinq, age: number }"


// Additional property
let user: { name: string, age: number } = {
    name: "Yauneh",
    age: 30,
    /*
        Error:
        Object literal may only specify known properties,
        and "nickName" does not exist in type "{ name: string, age: number}"
    */
    nickName: "webDev",
};


// Dynamically try to add "nickName" property for User object
/*
    Error:
    Property "nickName" does not exist on type "{ name: strinf, age: number }"
*/
user.nickName = "webDev";




// Updating object type
let user: { name: string, age: number , nickName: string } = {
    name: "Yauneh",
    age: 30,
    nickName: "webDev",
};



// New admin object
let admin: { name: string, age: number, nickName: string } = {
    name: "Max",
    age: 20,
    nickName: "Mad",
};



// 2 objcet with the same types
let user: { name: string, age: number , nickName: string } = {
    name: "Yauneh",
    age: 30,
    nickName: "webDev",
};

let admin: { name: string, age: number, nickName: string } = {
    name: "Max",
    age: 20,
    nickName: "Mad",
};

//мы повторяем код что неэффективно




//Using Type for objects structure
type Person = { name: string, age: nimber, nickName: string };

//Apply Person type for objects with the same structure
let user: Person = {
    name: "Yauhen",
    age: 30,
    nickName: "webDev",
};

let admin: Person = {
    name: "Max",
    age: 20,
    nickName: "Mad",
}



// 2 objects with alomst the same structure
let user: Person = {
    name: "Yauhen",
    age: 30,
    nickName: "webDev",      //<---- property
};

let admin: Person = {
    name: "Max",
    age: 20,
    getPass(): string {      //<----- new method
        return `${this.name}${this.age}`;
    },
}

//Updating type with optional properties
type Person = {
    name: string,
    age: number,
    nickName?: string,
    getPass?: () => string,
};




// CLASSES

//Simple class example
class User {

}

//Class types, including constructor
class User {
    name: string;
    age: number;
    nickName: string;

    constructor(name: string, age: number, nickName: string) {
        this.name = name;
        this.age = age;
        this.nickName = nickName;
    }
}

const yauhen = new User("Yauhen", 31, "webDev");

yauhen; // { name: "Yauhen", age: 31, nickName: "webDev"}




//Class types modificators
class User {

    public name: string;
    private nickName: string;
    protected age: number;
    readonly pass: number;

    constructor(name: string, age: number, nickName: string, pass: number) {
        this.name = name;
        this.age = age;
        this.nickName = nickName;
        this.pass = pass;
    }
}

/*
    Public: значение по умолчанию. к этому св-ву можно получить свободный доступ
    Private: предмет в нем не может быть доступен вне класса, наследники тоже не смогут
    Protected: доступ могут получить только наследники
    Readonly: элемент доступен только для чтения
*/

const yauhen = new User("Yauhen", 31, "webDev", 123);

yauhen.name;           // "Yauhen"
yauhen.nickName;       //Prop "nickName" is private and only accesible within class "user"
yauhen.age;            //Prop "age" is protected and only accesible within class "user" and its subclasses
yauhen.pass = 42;      //Cannot assign to "pass" because it is a read-only property




// Class default properties
class User {

    name: string;
    nickName: string = "webDev";
    age: number = 20;

    constructor(name: string, age: number, nickName: string) {
        this.name = name;
    }
}

const user = new User("Yauhen");

user; // {name: "Yauhen", age: 20, nickName: "webDev"}



// Class creation example
class User {

    public name: string;
    public nickName: string;
    public age: number;
    public pass: number;

    constructor(name: string, age: number, nickName: string, pass: number) {
        this.name = name;
        this.age = age;
        this.nickName = nickName;
        this.pass = pass;
    }
}
//Слишком громоздко
//Minimalization of Class properties
class User {

    constructor(
        public name: string,
        public age: number,
        public nickName: string,
        public pass: number
    ) {}
}
//Все типы обяьвляются в конструктуре и автоматически происходит присвоение. Метод обращения нужно указывать обязательно в таких случаях


//Try to change private property
class User {
    private age: number = 20;

    constructor(public name: string) {}
}

const yauhen = new User("Yauhen");

yauhen.age = 30;   // Property "age" is private and only accessible within class "User"

// get access to private property
class User {
    private age: number = 20;
    constructor(public name:string) {}

    setAge(age: number) {
        this.age = age;
    }

    set myAge(age:number) {
        this.age = age;
    }
}


const yauhen = new User("Yauhen");

yauhen.setAge(30); // 30
yauhen.myAge = 31; // 31



//INHERITANCE (НАСЛЕДВОАНИЕ)

//Simple Class example
class User {

    constructor(public name: string, public age: number) {}
}

//Class with static property
class User {
    
    static secret = 12345; // static property

    constructor(public name: string, public age: number) {}
}


// Example of call static property
User.secret

// Call static property in class method
class User {

    static secret = 12345;

    constructor(public name: string, public age: number) {}

    getPass(): string {
        return `${this.name}${User.secret}`;
    }
}

const yauhen = new User("Yauhen", 30);

yauhen.getPass(); // "Yauhen12345"




// Class example
class User {

    private nickName: string = "webDev";
    static secret = 12345;

    constructor(public name: string, public age: number) {}

    getPass(): string {
        return `${this.name}${User.secret}`;
    }

}

// Inheritance example
class Yauhen extends User {

    name: string = "Yauhen";

}

// Create instances based on "User" and "Yauhen" classes
const max = new User("Max", 20);
const yauhen = new Yauhen(31); // Expected 2 arguments, but got 1

// Realization of constructor in the inherited class
class Yauhen extends User {

    name: string = "Yauhen";

    constructor(age: number) {
        super(name,age);
    }

}

// No Error
// Create instances based on "User" and "Yauhen" classes
const max = new User("Max", 20);
const yauhen = new Yauhen(31);

// Personal method in inherited class
class Yauhen extends User {

    name: string = "Yauhen";

    constructor(age: number) {
        super(name,age);
    }

    getPass(): string {
        return `${this.age}${this.name}${User.secret}`;
    }

}




// Abstract class example
abstract class User {


    constructor(public name: string, public age: number) {}

    greet(): void {
        console.log(this.name);
    }

    abstract getPass(): string;
}

const max = new User("Max", 20); // Cannot create an instance of an abstract class



// Create class using Abstarction
/*
    Error:
    Non-abstract class "Yauhen" does not implement
    inherited abstarct member "getPass" from class "User"
*/
class Yauhen extends User {
    name: string = "Yauhen";

    constructor(age: number) {
        super(name,age);
    }
}



// Realization of "getPass" method
class Yauhen extends User {

    name: string = "Yauhen";

    constructor(age:number) {
        super(name,age);
    }

    getPass(): string {
        return `${this.age}${this.name}`;
    }

}

// Call prototype method
yauhen.greet();   // "Yauhen"
// Call personal method
yauhen.getPass(); // "31Yauhen"





// NAMESPACES & MODULES (ПРОСТРАНСТВО ИМЕН И МОДУЛИ)

// Define namespace
namespace Utils {

    export const SECRET: string = "123321"; // Export data from Namespace
    const PI: number = 3.14;

    export const getPass = (name: string, age: number): string => `${name}${age}`;

    export const isEmpty = <T>(data: T): boolean => !data;

};

// Calling exported from namespace methods
const myPass = Utils.getPass("Yauhen", 31);   // "Yauhen31"
const isSecret = Utils.isEmpty(Utils.SECRET); // "false"

// Constant with the same name outsode namespace
const PI = 3;                                 // No Errors

// File "Utils.ts"

// Export
namespace Utils {

    export const SECRET: string = "123321";

    export const getPass = (name: string, age: number): string => `${name}${age}`;

};


// File "Customers.ts"
// Import
/// <reference path="Utils.ts" />                 // <--- Import

// Calling "Utils" namespace method
const myPass = Utils.getPass("Yauhen", 31); // "Yauhen31"


// Import/Export (ES6 Modules)

// File "Utils.ts"
export const SECRET: string = "123321";

export const getPass = (name:string, age: number): string => `${name}${age}`;


//File "Customers.ts"
import { getPass, SECRET } from "./Utils";

const myPass = getPass(SECRET, 31);





// TYPE INTERFACE (ИНТЕРФЕЙСЫ)

// Simple interface example
interface User {
    name: string,
    age: number,
}



// Interface & Type
interface User {
    name: string,
    age: number,
}

type User {
    name: string,
    age: number,
}

// Create object based on Interface
interface User {
    name: string,
    age: number,
}

const yauhen: User = {
    name: "Yauhen",
    age: 31,
}



// Interface "readonly" modifier
interface User {
    readonly name: string, // <--- Cant be changed
    age: number,
}

const yauhen: User = {
    name: "Yauhen",
    age: 31,
}

yauhen.age = 30;
yauhen.name = "Max"; // Cannot assign to "name" because it is a read-only property



// Compare interface type and object
interface User {
    name: string,
    age: number,
}

const yauhen: User = {
    name: "yauhen",
    age: 31,
    /*
    Error:
    Object literal may only specify known properties, and "nickName" does not exist in type "User"
    */
   nickName: "webDev",  // <--- didnt describe
}



// Interface extension
interface User {
    name: string,
    age: number,
    [propName: string]: any;
}

const yauhen: User = {
    name: "yauhen",
    age: 31,
    nickName: "webDev",
    justTest: "test",
}



// Class Interface
interface User {
    name: string,
    age: number,
    getPass(): string,
}

//Class creation based on interface "User"
class Yauhen implements User {
    name: string = "Yauhen";
    age: number = 31;
    nickName: string = "webDev"; // <--- Not in interface
    
    getPass() {
        return `${this.name}${this.age}`;
    } 
}



// Cretae Class based omn multiple interfaces
interface User {
    name: string,
    age: number,
}

// Separate interface with one method
interface Pass {
    getPass(): string,
}

class Yauhen implemets User, Pass {
    name: string = "Yauhen";
    age: number = 31;

    getPass() {
        return `${this.name}${this.age}`;
    }
}



// Interface extends
interface User {
    name: string,
    age: number,
}

// Interface extends
interface Admin extends User {
    getPass(): string,
}

class Yauhen implements Admin {
    name: string = "Yauhen";
    age: number = 31;

    getPass() {
        return `${this.name}${this.age}`;
    }
}
