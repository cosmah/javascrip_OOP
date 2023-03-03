
//define a class for Person object
class Person {
    constructor(fname, lname, age, position) {
      this.fname = fname;
      this.lname = lname;
      this.age = age;
      this.position = position;
    }
    sayHello = function () {
      console.log("Name:" + this.fname + this.lname);
      console.log("Age:" + this.age);
      console.log("Position:" + this.position);
    };
  }

  //create instances
let person1 = new Person("Lutwama ","Bosco", 25, "Carrier");

//call sayHello() method
person1.sayHello();
  