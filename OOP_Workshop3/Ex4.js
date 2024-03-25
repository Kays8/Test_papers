/* ------ Shape ------ */
class Shape {
  color = "";
  filled = false;
  constructor(color, filled) {
    this.color = color;
    this.filled = filled;
  }
  getColor() {
    return this.color;
  }
  setColor(color) {
    this.color = color;
  }
  isFilled() {
    return this.filled;
  }
  setFilled(filled) {
    this.filled = filled;
  }
  toString() {
    return `Shape [color = ${this.color}, filled = ${this.filled}]`;
  }
}

/* ------ Circle ------ */
class Circle extends Shape {
  radius = 1.0;
  constructor(color, filled, radius = 1.0) {
    super(color, filled);
    this.radius = radius;
  }
  getRadius() {
    return this.radius;
  }
  setRadius(radius) {
    this.radius = radius;
  }
  getArea() {
    return 3.14 * this.radius * this.radius;
  }
  getPerimeter() {
    return 2 * 3.14 * this.radius;
  }
  toString() {
    return `Circle [${super.toString()} radius = ${this.radius}]]`;
  }
}

/* ------ Rectangle ------ */
class Rectangle extends Shape {
  width = 1.0;
  length = 1.0;
  constructor(color, filled, width = 1.0, length = 1.0) {
    super(color, filled);
    this.width = width;
    this.length = length;
  }
  getWidth() {
    return this.width;
  }
  setWidth(width) {
    this.width = width;
  }
  getLength() {
    return this.length;
  }
  setLength(length) {
    this.length = length;
  }
  getArea() {
    return this.width * this.length;
  }
  getPerimeter() {
    return 2 * this.length + 2 * this.width;
  }
  toString() {
    return `Rectangle [Shape [color = ${this.color}, filled = ${this.filled}, width = ${this.width}, length = ${this.length}]]`;
  }
}

/* ------ Square ------ */
class Square extends Rectangle {
  constructor(color = "red", filled = true, side = 1.0) {
    super(color, filled, side, side);
  }

  getSide() {
    return this.width;
  }

  setSide(side) {
    this.setWidth(side);
    this.setLength(side);
  }

  setWidth(side) {
    super.setWidth(side);
    this.setLength(side);
  }

  setLength(side) {
    super.setLength(side);
    this.length = side;
  }

  toString() {
    return `Square [Rectangle[ Shape [ color = ${this.color}, filled = ${this.filled}], width = ${this.width}, length = ${this.length}]]`;
  }
}

/* ------ Main ------ */
const main = () => {
  //Shape
  const shape = new Shape("Blue", true);
  console.log(shape.toString());

  //Circle
  const circle = new Circle("Green", false, 5.0);
  console.log(circle.toString());

  // Rectangle
  const rectangle = new Rectangle("Red", true, 3.0, 7.0);
  console.log(rectangle.toString());

  // Square
  const square = new Square("Yellow", false, 4.0);
  console.log(square.toString());
};

main();
