/*
# Bài 01
Cho trước 1 mảng số nguyên, yêu cầu tìm số lớn nhất, nhỏ nhất trong mảng và vị trí
 */

var arr = [4, 3, 6, 8, 2, 11, 13, 1, 8, 13, 1];
var max = arr[0];
var min = arr[0];
var maxIndex = [0];
var minIndex = [0];

for (var i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
    maxIndex = [i];
  } else if (arr[i] === max) {
    maxIndex.push(i);
  }
  if (arr[i] < min) {
    min = arr[i];
    minIndex = [i];
  } else if (arr[i] === min) {
    minIndex.push(i);
  }
}

console.log(`Số lớn nhất là ${max}, vị trí thứ ${maxIndex}`);
console.log(`Số lớn nhất là ${min}, vị trí thứ ${minIndex}`);

/*
# Bài 02
Cho trước 1 mảng số nguyên, tính trung bình các số nguyên tố trong mảng.
 Nếu trong mảng không có số nguyên tố thì hiển thị “Không có số nguyên tố”
*/

var arr = [1, 3, 5, 3, 6, 7, 4, 8, 11, 25, 15];

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (var i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function primeArray(arr) {
  var total = 0;
  var count = 0;

  arr.forEach(function (a) {
    if (isPrime(a)) {
      total += a;
      count++;
    }
  });
  if (count === 0) {
    return `Không có số nguyên tố !`;
  }
  return parseFloat(total / count);
}
console.log(`Trung bình các số nguyên tố trong mảng là : ${primeArray(arr)}`);

/*
# Bài 03
Cho trước 1 mảng bất kỳ,
 nếu trong mảng có các phần tử trùng nhau thì chỉ giữa lại 1 (Gọi là lọc trùng).
  In ra mảng sau khi đã xử lý
*/

var arr = [1, 1, 3, 2, 2, 5, 6, 4, 3, 7, 4, 6, 8, 9];
var arr1 = ["nhất", "nhất", "tuấn", "an"];
var set = new Set(arr);
var set1 = new Set(arr1);

newArr = Array.from(set);
newArr1 = Array.from(set1);
console.log(newArr);
console.log(newArr1);

/*
 # Bài 04
Cho trước 1 mảng số nguyên và thực hiện các yêu cầu sau

Sắp xếp mảng theo thứ tự tăng dần

Chèn thêm 1 số vào bất kỳ vị trí nào trong mảng mà không làm thay đổi thứ tự sắp xếp của mảng
 */

var arr = [1, 3, 2, 4, 6, 7, 6, 5, 9];
function sortArr(arr) {
  return arr.sort((a, b) => a - b);
}

function insertNum(arr, num, index) {
  arr.splice(index, 0, num);
  return arr;
}
var sort1 = sortArr(arr);
console.log(`mảng được sắp xếp trước khi thêm phần tử : ${sort1}`);
var insertNum = insertNum(arr, 10, 2);
var sort2 = sortArr(insertNum);
console.log(`mảng sau khi thêm phần tử : ${sort2} `);
