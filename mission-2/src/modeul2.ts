// * Type Assertion

let anything : any;
 anything = 20;
 (anything as Number)


 const KgConverter = (a : string | Number) =>{
    if(typeof a == "number"){
        return  a * 200;
    }else if(typeof a == 'string')
        {
        const [b]= a.split(' ');

        return Number(b)* 200 ;
    }
 }
  
 const res1 = KgConverter('2') ;
 const res2 = KgConverter(5) ;

console.log({res1});
console.log({res2});




//  *   interfce =========================
type User = {               // ? Type Eliias
    name : String,
    id : Number
}
interface IUser {
    name : string,
    id : number
}
const user1 : IUser = {
    name : 'Opar',
    // name : 2,
    id : 2
}

// * Interface 


const user2 : userRole = {
    name : 'Rijoan ',
    id : 3,
    role : 'user'
}

type Role = {
    role : 'user' | "admin"
}

type userRole  = User & Role ;


// * Generic function  == Dynamic type kora 
 type GenericArr<t> = Array<t>
// const frnname : string[] = ['opar' , 'rijoan' , 'rashid'];
const frnname : GenericArr <String> = ['opar' , 'rijoan' , 'rashid'];
// const frnNum : Number [] = [2,3,4,5]
const frnNum : GenericArr <number> = [2,3,4,5]

type Gen2 <x,y> = [x , y];
const arr1 : Gen2<Number , Number>
const arr2 : Gen2<Number , String>


// * generic with interface

interface Developer <T , X , B = null , Z = null>{
    name : string ,
    salary : Number,
    device : {
        year : string
        brand : string,
        model : string
    };
    watch : T,
    isSenior : X
    obj : {
        age? : B ,
        adress? : Z
    }
}

const poorDev : Developer <string , boolean , number ,string> = {
   name : 'opar',
   salary : 200,
   device : {
    brand : 'lenevo',
    year : '2001',
    model : 'x11'
   },
  watch : 'yes',
  isSenior : false,
  obj : {
    age : 22,
    adress : 'abx' 
  }
}

const rischDev : Developer <number , string> = {
   name : 'opar',
   salary : 200,
   device : {
    brand : 'lenevo',
    year : '2001',
    model : 'x11'
   },
  watch : 200,
  isSenior : 'no'
}


//  * constrain === strict rules set kora

// *  Enum == set of fixed string   (Only suported withoput strict only mode)

type UserDashboard = 'admin' | 'editor' | 'user';

function handleEdit (user : UserDashboard){
  if(user == 'admin' || user  == 'editor'){
    return true
  }else {
    return false
  }
}
handleEdit('user')

enum UserEnum {
    admin = 'admin',
    user = 'user',
    editor ='editor'
}

function handleEnum (user : UserEnum){
  if(user == UserEnum.admin || user == UserEnum.editor){
    return true
  }else {
    return false
  }
}

// * conditional types  = it types will depends on condition

type A = null ;
type B = undefined
type C = A extends null ? true : false
type D = A extends string ? true : B extends undefined ? true : false

type  PeopleBike = {
    bike : string,
    car : string,
    bus : string
}
type CheckBike  <T> = T extends keyof PeopleBike ? true : false;
type hasBike = CheckBike<'car'>


