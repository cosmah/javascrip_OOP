//process of hiding unnecessary implementation details
let car = {
    brand: "Toyota",
    model: "Camry",
    color: "blue",
    speed: 0,

    accelerate: function(){
        this.speed += 10;
        console.log("Accelerating... Current speed is " + this.speed + " mph");

    },

    brake: function() {
        this.speed -= 10;
        console.log("Braking...Curent speed is " + this.speed + " mph");
    }
};

//call the public methods on the car object
car.accelerate();
car.accelerate();
car.brake();