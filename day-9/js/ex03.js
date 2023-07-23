/*
Bài 3
Viết lại vòng lặp filter() trong Array bằng cách sử dụng Prototype trong Javascript

Lưu ý: Đặt tên là filter2()
*/

Array.prototype.filter2 = function (callback) {
  var filteredArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      filteredArray.push(this[i]);
    }
  }
  return filteredArray;
};
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 10];
var evenNumbers = arr.filter2(function (number) {
  return number % 2 === 0;
});
console.log(evenNumbers);
