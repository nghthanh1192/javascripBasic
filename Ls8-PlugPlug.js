// Arithmetic Operators
// Thứ tự Các phép toán học trong lập trình
// 1. ++ --
// 2. * / %
// 3. + -

var a = 1;
// console.log(++a); // 2 trả về a sau khi tăng
// console.log(a++);  // 1 trả về a trước khi tăng

var a = 3;
var x = a++ + a-- - ++a + --a;
// 3 + 4 - 4 + 3 // 6
console.log(x); // 6