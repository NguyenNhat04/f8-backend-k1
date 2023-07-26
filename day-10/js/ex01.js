/*
# Bài 1
Viết 1 hàm tính tổng giá trị biểu thức, tham số truyền vào ở dạng Rest Parameter

Yêu cầu chi tiết:

Hàm return về giá trị
Ép ràng buộc kiểu dữ liệu là số
Nếu dữ liệu truyền vào không hợp lệ, trả về thông báo lỗi
 */

var Sum = function (...args) {
  var result = 0;
  for (var i = 0; i < args.length; i++) {
    if (typeof args[i] !== "number") {
      throw new Error("Số không hợp lệ");
    } else {
      result += args[i];
    }
  }

  return result;
};

try {
  var result = Sum(1, 2, 3, 4, 5, 6, "a");
  console.log(result);
} catch (error) {
  console.log(error.message);
}
