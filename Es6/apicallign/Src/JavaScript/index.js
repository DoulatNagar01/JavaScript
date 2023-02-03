fetch("https://jsonplaceholder.typicode.com/albums")
  .then((response) => response.json())
  .then((json) => json.map((val)=>{
    let tbody = document.getElementById("tableBody");
    tbody.innerHTML += '<tr class="border"><td class="border">'+val.userId+'</td><td class="border">'+val.id+'</td><td class="border">'+val.title+'</td></tr>'
}));


// class Car {
//   constructor(brand, modal, color) {
//     this.brand = brand;
//     this.modal = modal;
//     this.color = color;
  // }
  // function CAR1(brand,modal) {
  //   this.brand = brand;
  //   this.modal = modal;
  // }
// }
// let car = new Car("BMW", "X5", "Red");
// let car1 = new Car("BW", "X5", "Red");
// let car2 = new Car("B", "X5", "Red");
// console.log(car,car2,car1);

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