/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */
class Circle extends Shape {
  constructor(radius) {
    const area = Math.PI * radius * radius;
    const perimeter = 2 * Math.PI * radius;
    super(area, perimeter);
    this.radius = radius;
  }

  describe() {
    return `${super.describe()} Radius: ${this.radius}`;
  }
}

const myCircle = new Circle(10);
console.log(myCircle.describe());
