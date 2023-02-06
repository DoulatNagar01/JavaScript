class LocalStg {
  constructor() {
    this.map = new Map();
  }
  setItem(key, value) {
    if (typeof value !== "string") {
      return this.map.set(key, JSON.stringify(value));
    }
    this.map.set(key, value);
  }
  getItem(key) {
    if (this.map.has(key)) {
      console.log(this.map.get(key));
    } else {
      console.log("The key is not Defined");
    }
  }
  removeItem(key) {
    if (this.map.has(key)) {
      this.map.delete(key);
      console.log("the element is delete");
    } else {
      console.log("This key is not exist in localStorage");
    }
  }
  clear() {
    if (this.map.size) {
      this.map.clear();
    } else {
      console.log("Data not found");
    }
    console.log(this.map.size);
  }
  legth() {
    console.log('Localstorage : '+this.map.size+' Key Present in LocalStorage');
  }
}
let obj = new LocalStg();
obj.setItem("name", "Doulat");
obj.setItem("age", 21);
obj.getItem("age");
obj.legth();
console.log(obj);
obj.removeItem("name");
console.log(obj);



