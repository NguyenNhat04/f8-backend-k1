/*
    # Bài 1: Hoán vị 2 số
    Input: Cho trước 2 số a, b

    Output: Thực hiện hoán vị 2 số không dùng biến trung gian
*/

var a = 4;
var b = 5;

console.log(`Trước khi hoán vị : a = ${a} , b = ${b}`);
a = a + b;
b = a - b;
a = a - b;

console.log(`Sau khi hoán vị : a = ${a} , b= ${b}`);

/*
    # Bài 2: Thực hiện phép toán
    Viết chương trình tính toán biểu thức sau

    S = 10 + 20 + 5^10 / 2
*/
var S = 10 + 20 + 5 ** 10 / 2;
console.log(`Kết quả S = ${S}`);

/*
    # Bài 3: Tìm số lớn nhất
    Học viên tìm hiểu về câu lệnh rẽ nhánh và giải bài tập sau

    Input:

    Cho trước 3 số a, b, c

    Output:

    Tìm số lớn nhất trong 3 số và hiển thị kết quả
*/

var a = 5,
  b = 6,
  c = 7;
var max = a;

if (b > max) {
  max = b;
}
if (c > max) {
  max = c;
}

console.log(`Số lớn nhất là : ${max}`);

/*
    # Bài 4: Kiểm tra số cùng dấu
    Input:

    Cho trước 2 số a, b

    Output:

    Kiểm tra 2 số cùng dấu hay không và hiển thị kết quả ra màn hình
*/

var a = 4,
  b = 6;
if (a * b > 0) {
  console.log("Hai số cùng dấu");
} else if (a * b < 0) {
  console.log("Hai số trái dấu");
}

/*
    # Bài 5: Sắp xếp 3 số
    Input:

    Cho trước 3 số a, b, c

    Output:

    Thực hiện đổi chỗ 3 số a, b, c sao cho 3 số có thứ tự tăng dần
*/

var a = 3,
  b = 7,
  c = 2;
if (a > b) {
  var temp = a;
  a = b;
  b = temp;
}

if (b > c) {
  var temp = b;
  b = c;
  c = temp;
}

if (a > b) {
  var temp = a;
  a = b;
  b = temp;
}
console.log("Thứ tự tăng dần là : ", a, b, c);
