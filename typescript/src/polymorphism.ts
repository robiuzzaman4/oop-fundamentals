// === polymorphism ===

class Person {
  getSleep() {
    console.log("I'm sleeping for 8 hours per day.");
  }
}

class Doctor extends Person {
  getSleep() {
    console.log("I'm sleeping for 9 hours per day.");
  }
}

class Developer extends Person {
  getSleep() {
    console.log("I'm sleeping for 6 hours per day.");
  }
}

const getSleeppingHour = (params: Person) => {
  params.getSleep();
};

const person1 = new Person();
const person2 = new Doctor();
const person3 = new Developer();

// getSleeppingHour(person1);
// getSleeppingHour(person2);
// getSleeppingHour(person3);

// === another example ===
class Shape {
  getArea(): number {
    return 0;
  }
}

class Rectangle extends Shape {
  public height: number;
  public width: number;

  constructor(height: number, width: number) {
    super();
    this.height = height;
    this.width = width;
  }
  getArea(): number {
    return this.height * this.width;
  }
}

const rectangleShape = new Rectangle(3, 4);
console.log("rectangleArea", rectangleShape.getArea());

