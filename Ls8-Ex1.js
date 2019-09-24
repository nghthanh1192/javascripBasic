var a = 10;

var x = --a + a++;
console.log(x);

// Nhấn Run để chạy code.
// Giải thích vì sao kết quả là 18.

// x = --a + a++
// x = 9 + 9
// --a trả về giá trị sau khi giảm (a hiện tại = 9) 1 đơn vị a = 9
// a++ trả về giá trị trước khi tăng (a hiện tại = 10) 1 đơn vị a = 9  