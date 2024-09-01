// === statics ===

class Counter {
  static count: number = 0;

  increment() {
    return (Counter.count += 1);
  }
  decrement() {
    return (Counter.count -= 1);
  }
}

const count1 = new Counter(); // same memory usage for using static methods
const count2 = new Counter(); // same memory usage for using static methods

console.log("count1", count1.increment());
console.log("count1", count1.increment());
console.log("count1", count1.increment());

console.log("count2", count2.increment());
console.log("count2", count2.increment());
console.log("count2", count2.increment());
console.log("count2", count2.increment());
