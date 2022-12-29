var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function add(a, b) {
    return a + b;
}
function Add(a, b) {
    return a + b;
}
console.log(add(3, '33'), Add(3, 33));
var sub = function (n1, n2) { return n1 - n2; };
var mult = function (n1, n2) {
    return n1 * n2;
};
console.log(sub(36, 33), mult(3, 33));
// optional n3 variable
function Addition(a, b, c) {
    //optional chaining ..... 
    return c ? a + b + c : a + b;
}
console.log(Addition(3, 3), Addition(3, 3, 3));
function add2(a, b) {
    var c = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        c[_i - 2] = arguments[_i];
    }
    return a + b + c.reduce(function (acc, num) { return acc + num; });
}
// rest function
var num = [2, 22, 12];
console.log("add2 function : " + add2.apply(void 0, __spreadArray([3, 2], num, false)));
//  geniric function  
function getItem(items) {
    return new Array().concat(items);
}
var concatResult1 = getItem([2, 22, 12]);
var concatResult2 = getItem(["2", '22', '12']);
console.log(concatResult1);
console.log(concatResult2);
