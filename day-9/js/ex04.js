/*
Viết 1 phương thức Prototype có tên là getCurrency có đối số truyền vào là đơn vị tiền tệ cần hiển thị

Kết quả sẽ hiển thị ra kết định dạng kèm đơn vị tiền tệ

Ví dụ:
//Case 1
var price = 12000;
console.log(price.getCurrency('đ')) //Hiển thị: 12,000 đ

//Case 2
var price = "12000000";
console.log(price.getCurrency('đ')) //Hiển thị: 12,000,000 đ
*/

Number.prototype.getCurrency = function (unit) {
  return this.toLocaleString() + " " + unit;
};

String.prototype.getCurrency = function (unit) {
  const number = parseInt(this, 10);
  if (!isNaN(number)) {
    return number.toLocaleString() + " " + unit;
  } else {
    return "Số không hợp lệ";
  }
};

var price1 = "1000";
console.log(price1.getCurrency("đ"));

var price = 12000;
console.log(price.getCurrency("đ"));
var price = "adsfdsf";
console.log(price.getCurrency("đ"));
