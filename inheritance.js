//define class for a person object
class Person {
  constructor(fname, lname, age, position) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
  }

  sayHello = function () {
    console.log("Name:" + this.fname + this.lname);
    console.log("Age:" + this.age);
  };
}

//define a class for student object that inherits fro Person
class Student extends Person {
  constructor(fname, lname, age, position) {
    super(fname, lname, age, position)
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

//create an instance of student object
let student1 = new Student("Lutwama ","Bosco", 25, "supplier");

//call the sayHello() method on the student object
student1.sayHello();