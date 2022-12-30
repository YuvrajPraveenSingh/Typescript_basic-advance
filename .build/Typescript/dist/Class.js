"use strict";
var __extends = exports && exports.__extends || function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __classPrivateFieldSet = exports && exports.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = exports && exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Employee_id;
var Employee = function() {
  function Employee2(id, name, address) {
    _Employee_id.set(this, void 0);
    __classPrivateFieldSet(this, _Employee_id, id, "f");
    this.name = name;
    this.address = address;
  }
  Object.defineProperty(Employee2.prototype, "empId", {
    get: function() {
      return __classPrivateFieldGet(this, _Employee_id, "f");
    },
    set: function(id) {
      __classPrivateFieldSet(this, _Employee_id, id, "f");
    },
    enumerable: false,
    configurable: true
  });
  Employee2.prototype.getName = function() {
    return this.name;
  };
  Employee2.emplyeeCount = function() {
    return 50;
  };
  return Employee2;
}();
_Employee_id = /* @__PURE__ */ new WeakMap();
var Manager = function(_super) {
  __extends(Manager2, _super);
  function Manager2(id, name, address) {
    return _super.call(this, id, name, address) || this;
  }
  return Manager2;
}(Employee);
var Thing = function() {
  function Thing2() {
    this._size = 0;
  }
  Object.defineProperty(Thing2.prototype, "size", {
    get: function() {
      return this._size;
    },
    set: function(value) {
      var num = Number(value);
      if (!Number.isFinite(num)) {
        this._size = 0;
        return;
      }
      this._size = num;
    },
    enumerable: false,
    configurable: true
  });
  return Thing2;
}();
var raj = new Manager(2, "raj sigal", { street: "ABC", city: "bangalore", state: "karnatak", pin: 59001 });
var yuvraj = new Employee(1, "yuvraj Singh", { street: "XYZ", city: "mumbai", state: "Maharasta", pin: 55986 });
console.log(yuvraj);
var res = yuvraj.address;
console.log(res);
console.log(raj.getName());
console.log(Employee.emplyeeCount());
//# sourceMappingURL=Class.js.map
