"use strict";
function Add(a, b) {
  return a + b;
}
console.log(Add(3, 33));
const sub = (n1, n2) => n1 - n2;
const mult = function(n1, n2) {
  return n1 * n2;
};
console.log(sub(36, 33), mult(3, 33));
function Addition(a, b, c) {
  return c ? a + b + c : a + b;
}
console.log(Addition(3, 3), Addition(3, 3, 3));
function add2(a, b, ...c) {
  return a + b + c.reduce((acc, num2) => acc + num2);
}
let num = [2, 22, 12];
console.log("add2 function : " + add2(3, 2, ...num));
function getItem(items) {
  return new Array().concat(items);
}
let concatResult1 = getItem([2, 22, 12]);
let concatResult2 = getItem(["2", "22", "12"]);
console.log(concatResult1);
console.log(concatResult2);
//# sourceMappingURL=function.js.map
