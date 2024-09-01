// === encasulation ===

class Husbend {
  public name: string;
  private _age: number; // will unable to access from constructor and other inherited classes
  protected salary: number; // will unable to access from constructor but able to access from other inherited classes

  constructor(name: string, _age: number, salary: number) {
    this.name = name;
    this._age = _age;
    this.salary = salary;
  }
}

class Wife extends Husbend {
  constructor(name: string, age: number, salary: number) {
    super(name, age, salary);
  }
  knowSalary() {
    return this.salary;
  }
}

const men = new Husbend("Ruhan", 23, 25000);
const women = new Wife("Ruhan", 23, 25000);
const husbendsSalary = women.knowSalary();

console.log(husbendsSalary);

