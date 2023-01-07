"use strict";
class Employee {
  #id;
  get empId() {
    return this.#id;
  }
  set empId(id) {
    this.#id = id;
  }
  constructor(id, name, address) {
    this.#id = id;
    this.name = name;
    this.address = address;
  }
  getName() {
    return this.name;
  }
  static emplyeeCount() {
    return 50;
  }
}
class Manager extends Employee {
  constructor(id, name, address) {
    super(id, name, address);
  }
}
class Thing {
  constructor() {
    this._size = 0;
  }
  get size() {
    return this._size;
  }
  set size(value) {
    let num = Number(value);
    if (!Number.isFinite(num)) {
      this._size = 0;
      return;
    }
    this._size = num;
  }
}
let raj = new Manager(
  2,
  "raj sigal",
  {
    street: "ABC",
    city: "bangalore",
    state: "karnatak",
    pin: 59001
  }
);
let yuvraj = new Employee(1, "yuvraj Singh", {
  street: "XYZ",
  city: "mumbai",
  state: "Maharasta",
  pin: 55986
});
console.log(yuvraj);
let Res = yuvraj.address;
console.log(Res);
console.log(raj.getName());
console.log(Employee.emplyeeCount());
//# sourceMappingURL=Class.js.map
