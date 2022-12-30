"use strict";
for (var i = 0; i < 5; ++i) {
  var line = "";
  for (var j = 0; j <= i; ++j) {
    line += "*";
  }
  console.log(line);
}
var isValid = false;
console.log(isValid);
var empList;
var depList;
empList = ["hey", "hello,", "hi"];
depList = [1, 5, 68, 26];
var res = depList.filter(function(num) {
  return num > 50;
});
var result = depList.find(function(num) {
  return num === 26;
});
var rs = depList.findIndex(function(num) {
  return num === 5;
});
var r = depList.reduce(function(acc, num) {
  return acc + num;
});
console.log(res);
console.log(result);
console.log(rs);
console.log(r);
var c = 2;
var swapnumbs;
function swapnumbers(num1, num2) {
  return [num2, num1];
}
swapnumbs = swapnumbers(20, 10);
console.log(swapnumbs);
//# sourceMappingURL=index.js.map
