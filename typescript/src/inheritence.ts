// === inheritence ===

class User {
  // properties
  public name: string;
  public email: string;
  public password: string;
  public role: "student" | "teacher" | "admin";

  // constructor
  constructor(
    name: string,
    email: string,
    password: string,
    role: "student" | "teacher" | "admin"
  ) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.role = role;
  }

  // method
  getRule() {
    console.log(`${this.name}'s rule is ${this.email}`);
  }
}

class Student extends User {
  // properties
  public studentId: string;
  public course: string;

  // constructor
  constructor(
    name: string,
    email: string,
    password: string,
    studentId: string,
    course: string
  ) {
    super(name, email, password, "student");
    this.studentId = studentId;
    this.course = course;
  }
}

class Teacher extends User {
  // properties
  public teacherId: string;
  public subject: string;

  // constructor
  constructor(
    name: string,
    email: string,
    password: string,
    teacherId: string,
    subject: string
  ) {
    super(name, email, password, "teacher");
    this.teacherId = teacherId;
    this.subject = subject;
  }
}

const exampleStudent = new Student(
  "Ruhan",
  "ruhan@mail.com",
  "123",
  "SID-01",
  "honors"
);

const exampleTeacher = new Teacher(
  "Zaman",
  "zaman@mail.com",
  "12345",
  "TID-01",
  "economics"
);
console.log(exampleStudent);
console.log(exampleTeacher);
