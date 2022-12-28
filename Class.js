var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Employee_id;
var Employee = /** @class */ (function () {
    // constructor in typescript
    function Employee(id, name, address) {
        _Employee_id.set(this, void 0); // private variable
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
        this.address = address;
    }
    Object.defineProperty(Employee.prototype, "empId", {
        // getter and setter 
        get: function () {
            return __classPrivateFieldGet(this, _Employee_id, "f");
        },
        set: function (id) {
            __classPrivateFieldSet(this, _Employee_id, id, "f");
        },
        enumerable: false,
        configurable: true
    });
    // methods static and non-static
    Employee.prototype.getName = function () {
        return this.name;
    };
    Employee.emplyeeCount = function () {
        return 50;
    };
    return Employee;
}());
_Employee_id = new WeakMap();
// inheritance 
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(id, name, address) {
        return _super.call(this, id, name, address) || this;
    }
    return Manager;
}(Employee));
// driver code 
var raj = new Manager(2, "raj sigal", "marine drive , mumbai");
var yuvraj = new Employee(1, "yuvraj Singh", "earth milkyWay");
console.log(yuvraj);
var res = yuvraj.getName();
console.log(res);
console.log(raj.getName());
console.log(Employee.emplyeeCount());
