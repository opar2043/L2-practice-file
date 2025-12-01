//* class: 1 ===========================

// const obj = {
//     nextLevel : {course: "level-2"},
//     "programming hero":{course: "level-1"}
// };

// console.log(obj);
// console.log(obj.nextLevel);
// console.log(obj["programming hero"]);

const course1 = {name: "level1"};
const course2 = {name: "Level2"};
const map = new Map();
map.set(course1 , {id: "101"})
map.set(course2 , {id: "102"})

// console.log(map.keys);
// console.log(map.size);
// console.log(map.has(course1));
// console.log(map.delete(course1));
// console.log(map);


// map.forEach((value , key)=> console.log("Value" , value , "|", "key" , key));

// * class : 2 ===================
const rawApiData = [
  {
    id: "p-001",
    productName: "Quantum Laptop",
    category: "Electronics",
    price: 1200,
    rating: 4.8,
    stock: 15,
  },
  {
    id: "p-002",
    productName: "The Art of Code",
    category: "Books",
    price: 45,
    rating: 4.5,
    stock: 100,
  },
  {
    id: "p-003",
    productName: "Cyber Hoodie",
    category: "Clothing",
    price: 80,
    rating: 4.7,
    stock: 50,
  },
  {
    id: "p-004",
    productName: "4K Drone",
    category: "Electronics",
    price: 650,
    rating: 4.3,
    stock: 20,
  },
  {
    id: "p-005",
    productName: "Basic JavaScript",
    category: "Books",
    price: 25,
    rating: 3.8,
    stock: 200,
  },
  {
    id: "p-006",
    productName: "Smart Watch",
    category: "Electronics",
    price: 250,
    rating: 4.7,
    stock: 70,
  },
  {
    id: "p-007",
    productName: "Classic T-Shirt",
    category: "Clothing",
    price: 30,
    rating: 4.2,
    stock: 300,
  },
  {
    id: "p-008",
    productName: "Design Patterns",
    category: "Books",
    price: 55,
    rating: 4.9,
    stock: 80,
  },
  {
    id: "p-009",
    productName: "VR Headset",
    category: "Electronics",
    price: 400,
    rating: 4.6,
    stock: 30,
  },
  {
    id: "p-010",
    productName: "USB-C Cable",
    category: "Electronics",
    price: 15,
    rating: 4.0,
    stock: 500,
  },
  {
    id: "p-011",
    productName: "Noise-Cancelling Headphones",
    category: "Electronics",
    price: 300,
    rating: 4.7,
    stock: 40,
  },
  {
    id: "p-012",
    productName: "Algorithms Explained",
    category: "Books",
    price: 50,
    rating: 4.5,
    stock: 60,
  },
];


const filterApi = rawApiData.filter(api => api.category == "Electronics").sort((a,b)=> a.rating-b.rating).slice(0,3).map((item)=>{
  return { name: item.productName,}
});

// console.log(filterApi);


// * class : 3 =======================
const numbers = [40, 100, 1, 5,[ 25, 10 , [4 ,6, [10,5]]]];
const fruits = ["Banana", "apple", "Cherry", "date"];


const fruit = fruits.sort((a,b)=>a.localeCompare(b));
// console.log(fruit);
// console.log(numbers.flat(Infinity));





const tagsFromPosts = [
  ["javascript", "react", "css"],
  ["node", "express"],
  ["css", "html", "react"],
];


const flatArray1 = tagsFromPosts.flat();
const flatArray = [...new Set(tagsFromPosts.flat())];
// console.log(flatArray1);
// console.log(flatArray);


//* class : 3 ==============================
const num = [1, 5, 3, 7, 5];
// const hasEvenNumber = numbers.some((number) => number % 2 === 0);
// console.log(hasEvenNumber);


const hasEvennum = num.some((n)=>  n%2 == 0);
// console.log(hasEvennum);       



// * class : 4 =================================

const currentUserRoles = ["user", "editor" , "admin"];

const featureAccessRoles = ["admin", "manager"];

const canAccess = currentUserRoles.some(role => 
    featureAccessRoles.includes(role)
);
// console.log(canAccess);

const renge = (start , stop , step) =>Array.from({length: Math.floor((stop - start)/step)} ,(_ , idx ) => start * idx *step);

// console.log(renge(1, 11, 2));


// * class : 5 ====================================

const cartItems = [
  { id: "p-001", name: "Daraz Laptop Bag", price: 1500, quantity: 1 },
  { id: "p-002", name: "Walton USB-C Cable", price: 350, quantity: 12 },
  { id: "p-003", name: "Aarong Kurta", price: 2200, quantity: 1 },
];


const subtotal = cartItems.reduce((acc, item) => {
  return acc + (item.price * item.quantity);
}, 0);
// console.log(subtotal);
9
const players = [
  { name: "Jamal Bhuyan", score: 88 },
  { name: "Shekh Morsalin", score: 81 },
  { name: "Rakib Hossain", score: 95 },
  { name: "Topu Barman", score: 91 },
  { name: "Sohel Rana", score: 72 },
];

const bestPlayer = players.reduce((best, player) => {
//   return best.score > player.score ? best : player;
// console.log(best , "|" , player);
if(best.score > player.score){
    return best;
}
return player
});
// console.log(bestPlayer);


// * class : 6 ========================================

const postsArray = [
  { id: "p-101", title: "Intro to SQL", author: "Alex" },
  { id: "p-102", title: "Data Structures in JS", author: "Beth" },
  { id: "p-103", title: "Understanding Reduce", author: "Chris" },
  { id: "p-104", title: "CSS Grid Tricks", author: "Alex" },
];

const lookupTable = postsArray.reduce((table , post) => {
    table[post.id] = post;

    return table ;
}, {})

// console.log(lookupTable);


// * class : 7 ============================================

const surveyResponses = [
  "A",
  "C",
  "B",
  "A",
  "B",
  "B",
  "C",
  "A",
  "B",
  "D",
  "A",
  "C",
  "B",
  "A",
];


const count = surveyResponses.reduce((table , res)=>{
    // console.log(table , "|" , res);

    if(table[res]){
        table[res] = table[res] + 1;
    }else{
        table[res] = 1;
    }

    return table ;
},{})


// console.log(count);


// * class : 8 ========================================


const sales = [
  { category: "Electronics", item: "Laptop", price: 1200, quantity: 1 },
  { category: "Books", item: "JS Basics", price: 30, quantity: 2 },
  { category: "Electronics", item: "Mouse", price: 25, quantity: 2 },
  { category: "Home", item: "Chair", price: 150, quantity: 1 },
  { category: "Books", item: "React Deep Dive", price: 50, quantity: 1 },
  { category: "Electronics", item: "Keyboard", price: 80, quantity: 1 },
];

const totalObj = sales.reduce((cat, item) => {
  // If category not yet initialized, create it
  if (!cat[item.category]) {
    cat[item.category] = { total: 0, totalQuantity: 0 };
  }

  // Add up total price and quantity
  cat[item.category].total += item.price * item.quantity;
  cat[item.category].totalQuantity += item.quantity;

  return cat;
}, {});

console.log(totalObj)