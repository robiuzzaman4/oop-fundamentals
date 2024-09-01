// === abstraction ===

// === using interface ===
// idea
interface Vehicle {
  start: () => void;
  stop: () => void;
  move: (x: number, y: number) => void;
}

// real implementation
class Car implements Vehicle {
  start() {
    console.log("Car started.");
  }
  stop() {
    console.log("Car stopped.");
  }
  move(x: number, y: number) {
    console.log(`Car moved to ${x}, ${y}.`);
  }
  test() {
    console.log("Car test method called.");
  }
}
const myCar = new Car();
const movedResult = myCar.move(10, 0);

// === using abstract class ===
abstract class Abstract {
  abstract start(): void;
  abstract stop(): void;
}

class ExtendsAbstract extends Abstract {
  start() {
    console.log("Car started.");
  }
  stop() {
    console.log("Car stoped.");
  }
}

const car = new ExtendsAbstract();
car.start();
car.stop();
