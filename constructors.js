//constructor class for Person Object
function Person(fname, lname, age, position) {
  this.fname = fname;
  this.lname = lname;
  this.age = age;
  this.position = position;
  this.sayHello = function () {
    console.log("Name:" + this.fname + this.lname);
    console.log("Age:" + this.age);
    console.log("Position:" + this.position);
  };
}

//create instances of Person object
let Person1 = new Person("John", "Matutu", 30, "Store Manager");

//call the sayHello() method on each instance
Person1.sayHello();
