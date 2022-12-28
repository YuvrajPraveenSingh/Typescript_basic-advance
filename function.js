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
