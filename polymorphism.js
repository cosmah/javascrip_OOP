//ability to change shapes
class Shapes {
    constructor() {
        this.area = 0;
    }

    calculateArea(){
        console.log("Area of this shape is: " + this.area);
    }
}

class Rectangle extends Shapes {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
        this.area = width*height;
    }
}

class Circle extends Shapes {
    constructor(radius){
        super();
        this.radius = radius;
        this.area = Math.PI * radius * radius;
    }
}

//create an array of shapes, containing both rectangls and circles
let shapes = [
    new Rectangle(10, 5),
    new Circle(7)
];

//call calculatorArea()
shapes.forEach(function(shape){
    shape.calculateArea();
});