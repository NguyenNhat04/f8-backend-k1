/*
Bài 1: Tìm số chẵn lẻ
Cho 1 số nguyên bất kỳ, hiển thị danh sách các số chẵn và số lẻ
*/

var n = 15,
  evenNumber = "",
  oddNumber = "";

if (Number.isInteger(n) && n > 0) {
  for (var i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      evenNumber += i + " ";
    } else {
      oddNumber += i + " ";
    }
  }
  console.log(`Danh sách số chẵn là : ${evenNumber}`);
  console.log(`Danh sách số lẻ là : ${oddNumber}`);
} else {
  console.log(`Số không hợp lệ `);
}

/*
Bài 2: Tính giá trị biểu thức
Cho trước số nguyên n. Tính giá trị biểu thức sau

S= 1*2 + 2*3 + 3*4 + ... + n*(n+1)
*/
var n = 3,
  total = 0;
if (Number.isInteger(n) && n > 0) {
  for (var i = 1; i <= n; i++) {
    total += i * (i + 1);
  }
  console.log(`Giá trị S = ${total}`);
} else {
  console.log(`Số không hợp lệ`);
}

// Bài 3: Tính tổng chẵn lẻ
// Cho trước 2 số a, b. Tính tổng số chẵn và số lẻ trong khoảng từ a đến b

var a = 3,
  b = 10,
  totalEven = 0,
  totalOdd = 0;

if (Number.isInteger(a, b) && a < b) {
  for (var i = a; i <= b; i++) {
    if (i % 2 === 0) {
      totalEven += i;
    } else {
      totalOdd += i;
    }
  }
  console.log(`Tổng số chẵn = ${totalEven}`);
  console.log(`Tổng số lẻ = ${totalOdd}`);
} else {
  console.log(`Số không hợp lệ`);
}

/*
Bài 4: Viết hàm kiểm tra số nguyên tố
Viết 1 hàm kiểm tra 1 số có phải số nguyên tố hay không?

Hàm có 1 tham số là số cần kiểm tra
Hàm có giá trị trả về
Gọi hàm trong câu điều kiện if else
*/
function isPrime(n) {
  if (Number.isInteger(n) && n <= 1) {
    return false;
  } else {
    for (var i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
        break;
      }
    }
  }
  return true;
}

var n = 2;
if (Number.isInteger(n) && n > 1) {
  if (isPrime(n)) {
    console.log(`Số ${n} là số nguyên tố`);
  } else {
    console.log(`Số ${n} ko là số nguyên tố`);
  }
} else {
  console.log(`Số không thỏa mãn`);
}

/*
Bài 5: Tính giá trị biểu thức không dùng vòng lặp
Tính giá trị biểu thức: S = 1 + 1/2 + 1/3 + 1/4 + 1/5 +…+1/N
*/

function sum(n) {
  if (Number.isInteger(n)) {
    if (n < 0) {
      return `Số không thỏa mãn`;
    } else if (n === 0) {
      return 0;
    } else {
      return parseFloat(1 / n + sum(n - 1));
    }
  }
}
console.log(`Giá trị S = ${sum(0)}`);
