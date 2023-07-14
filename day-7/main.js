/*
# Bài 1
Lấy kết quả giao giữa 2 mảng

var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];
*/

var arrA = [1, 4, 3, 2, 7];
var arrB = [5, 2, 6, 7, 1];
if (Array.isArray(arrA) && Array.isArray(arrB)) {
  var result = arrA.reduce(function (prev, current) {
    if (arrB.includes(current)) {
      prev.push(current);
    }
    return prev;
  }, []);
} else {
  console.log(`Không thỏa mãn điều kiện mảng`);
}

console.log(result);

/*
# Bài 2
Làm phẳng array sau (Chuyển về mảng 1 chiều)

var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
Kết quả

[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
*/

var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
if (Array.isArray(arr)) {
  var result = arr.flat(3);
} else {
  console.log(`Không phải mảng`);
}

console.log(result);

/**
 Bài 3
Tách phần tử trong mảng theo đúng kiểu dữ liệu

var arr = [["a", 1, true], ["b", 2, false]]
Kết quả

[["a", "b"], [1, 2], [true, false]]
 */

var arr = [
  ["a", 1, true, "c", NaN, undefined, "", { a: 1 }],
  ["b", 2, false, 3, null],
];
if (Array.isArray(arr)) {
  var newArr = arr.flat(1); // chuyển về mảng 1 chiều

  var arrStr = [];
  var arrNumber = [];
  var arrBool = [];
  var arrUndefined = [];
  var arrObj = [];
  var arrAll = [];
  var result = newArr.filter(function (element) {
    if (typeof element === "string") {
      arrStr.push(element);
    } else if (typeof element === "number") {
      arrNumber.push(element);
    } else if (typeof element === "boolean") {
      arrBool.push(element);
    } else if (typeof element === "object") {
      arrObj.push(element);
    } else if (typeof element === "undefined") {
      arrUndefined.push(element);
    }
  });

  var result1 = arrAll.push(arrStr, arrNumber, arrBool, arrObj, arrUndefined);
} else {
  console.log(`Không thỏa mãn điều kiện mảng`);
}
console.log("Kết quả là :", arrAll);
