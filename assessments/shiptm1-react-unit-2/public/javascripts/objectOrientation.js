////////////////////////////////////
// Unit 2 Assessment - Classes /////
////////////////////////////////////

////////////////////////////////////////////

// Problem 1: Intro to Classes

// Tasks:
// 1.) Create a new Class Square that extends from Rectangle.
// 2.) Instantiate a Square and call the calculateArea method from Rectangle.

class Rectangle {
  constructor(length, width) {
    // Create a rectangle.

    this.length = length
    this.width = width
  }

  calculateArea() {
    // Return the area of the rectangle.

    return this.length * this.width
  }
}

class Square extends Rectangle {
  constructor(length) {
    // Create a square (length = width)
    super(length, length);
  }
}

const square = new Square(10);
square.calculateArea();