// === class ===

class Language {
  // properties
  public name: string;
  public creator: string;
  public year: number;

  // constructor
  constructor(name: string, creator: string, year: number) {
    this.name = name;
    this.creator = creator;
    this.year = year;
  }

  // method
  foundedYear() {
    return `${this.name} is founded by ${this.creator} in ${this.year}.`;
  }
}

// === instances ===
const JavaScript = new Language("JavaScript", "Brendan Eich", 1995);
const Python = new Language("Python", "Guido van Rossum", 1980);

// console.log(JavaScript.foundedYear());

// console.log(JavaScript);
