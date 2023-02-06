 fetch("https://jsonplaceholder.typicode.com/albums")
   .then((response) => response.json())
   .then((json) => json.map((val)=>{
     let tbody = document.getElementById("tableBody");
     tbody.innerHTML += '<tr class="border"><td class="border">'+val.userId+'</td><td class="border">'+val.id+'</td><td class="border">'+val.title+'</td></tr>'
 }));

// filter polyfill

// let arr = [1, 2, 3, 4, 5];
// function filterPolyFill(arr, cb) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (cb(arr[i])) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }
// function greaterThanTwo(x) {
//   if (x > 2) {
//     return x;
//   }
// }
// console.log(filterPolyFill(arr, greaterThanTwo));

// reducePoly
// function reducePoly(arr, cb, initial = arr[0]) {
//   let acc = initial;
//   for (let i = 1; i < arr.length; i++) {
//     acc = cb(arr[i], acc);
//   }
//   return acc;
// }
// function sum(x, acc) {
//   return x + acc;
// }
// console.log(reducePoly(arr, sum));
// class Car {
//   constructor(brand, modal, color) {
//     this.brand = brand;
//     this.modal = modal;
//     this.color = color;
//   }
// }
// let car = new Car("BMW", "X5", "Red");
// let car1 = new Car("BW", "X5", "Red");
// console.log(car,car1);

// class Person{
//   constructor(name,age){
//     this.name = name;
//     this.age = age;
//   }
//   showDetails(){
//     return this.name;
//   }
// }
// class Personchild extends Person{
//   constructor(){
//     super("steve",21,"css");
//   }
// }
// let person = new Personchild();
// console.log(person.showDetails());

// calbackhell/
// destructure

// const arr =[1,2,3,4,5,6];
// const obj = {a:{b:arr}};
// const {a:{b:[c]}} = obj;
// console.log(c);

// const fun = (a,b)=> a+b;
// console.log(fun(2,3));

// (()=>console.log("hello"))();

//let str = "name=doulat;age=21;city=jaipur";
//
//str = str.split(";");
// console.log(str.length);
// obj = {};
// const map = new Map();
// for (let i = 0; i < str.length; i++) {
//     str[i] = str[i].split("=");
    // obj[str[i][0]] = str[i][1];
//     map.set(str[i][0],str[i][1]);
// }
// console.log(str);
// console.log(map);




