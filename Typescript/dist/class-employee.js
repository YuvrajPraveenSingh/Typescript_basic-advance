"use strict";
exports.__esModule = true;
var Employee_detail = /** @class */ (function () {
    function Employee_detail(detail, Address) {
        this.pesonal_detail = detail;
        this.employee_Address = Address;
    }
    return Employee_detail;
}());
//object destructring in typescript
var _a = {
    name: "yuv",
    id: 25,
    age: 21,
    email: "xyz@yourcompanyname.com "
}, userName = _a.name, userLogin = _a.email;
//Array destructring in typescript....
var _b = [
    {
        name: "Yuvraj singh01",
        id: 1,
        email: " yuvrajsingh@yourcompanyname.com "
    },
    {
        name: "Yuvraj singh02",
        id: 2,
        email: " yuvrajsingh@yourcompanyname.com "
    },
    {
        name: "Yuvraj singh03",
        id: 3,
        email: " yuvrajsingh@yourcompanyname.com "
    }
], emp1 = _b[0], emp2 = _b[1], restUser = _b.slice(2);
//driver code 
var obj1 = new Employee_detail({
    name: "Yuvraj singh",
    id: 3,
    email: " yuvrajsingh@yourcompanyname.com ",
    department: " Your Department ",
    salary: 50000
}, {
    street: "XYZ",
    city: "Kolkata",
    state: "West Bengal",
    pin: 500971
});
console.log(userName);
console.log(userLogin);
console.log(obj1.pesonal_detail.name);
console.log(emp1.name);
console.log(emp2.name);
var res = restUser.filter(function (user) { return user.id === 3; });
console.log(res);
