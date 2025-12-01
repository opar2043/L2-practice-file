const nam : string= 'rijoan';
// console.log(`Hello, ${nam}!`);

let userName : string = "rijoan ";
// console.log(userName);

let  num : number = 42;
let x : undefined ;


// Array 
const bazar : string[]  = ['egg' , 'milk', 'bread'];
bazar.push('34545');
const array :  (  number | string )[] = [1,2,3,5,6 , 'opar'];
const touple : [string , number , boolean] = ['rijoan' , 25 , true];
const friends = ['opar', 'alim', 'karim'];
const newFriends  = [ 'rahim' , 'salim'];
friends.push(...newFriends);
console.log(friends);

const myfrn =friends[2];
console.log(myfrn);

const [ , , , name ,  name2 ] = friends;  // destructuring
console.log(name , name2);


// object
type User = {
    name : string,
    readonly  organization? : string,   // optional property
    age : number,
    isEmployed : boolean,
    address? : string         // optional property
}


const person1 : User  = {
    name: 'opar',
    age: 30,
    isEmployed: true,
    address: 'bandar , narayanganj'
}

console.log(person1);

const person : User = {
    name: 'opar',
    age: 30,
    isEmployed: false
}
person.address = '123 Main St';
// console.log(person);

const myinfo : {
    income : number,
    versity : string
} = {
    income : 5000,
    versity : 'ABC University'
}

const information = {...person , ...myinfo};
// console.log(information);



// function 
type Add = (a: number, b: number) => number;
const add: Add = (a, b) => a + b;

add(5, 10);

const addArr = (a : number , b : number) : number => a + b;
addArr(3, 7);

const poorUser = {
    name : 'rijoan',
    balance : 5,
    addbalance(money : number){
        return this.balance + money;
    }
}

poorUser.addbalance(10);


