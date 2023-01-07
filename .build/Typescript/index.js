"use strict";
for (let i = 0; i < 5; ++i) {
  let line = "";
  for (let j = 0; j <= i; ++j) {
    line += "*";
  }
  console.log(line);
}
let isValid = false;
console.log(isValid);
let empList;
let depList;
empList = ["hey", "hello,", "hi"];
depList = [1, 5, 68, 26];
let REs = depList.filter((num) => num > 50);
let result = depList.find((num) => num === 26);
let rs = depList.findIndex((num) => num === 5);
let r = depList.reduce((acc, num) => acc + num);
console.log(REs);
console.log(result);
console.log(rs);
console.log(r);
var Color = /* @__PURE__ */ ((Color2) => {
  Color2[Color2["Red"] = 0] = "Red";
  Color2[Color2["Green"] = 1] = "Green";
  Color2[Color2["Blue"] = 2] = "Blue";
  return Color2;
})(Color || {});
let c = 2 /* Blue */;
let swapnumbs;
function swapnumbers(num1, num2) {
  return [num2, num1];
}
swapnumbs = swapnumbers(20, 10);
console.log(swapnumbs);
//# sourceMappingURL=index.js.map
