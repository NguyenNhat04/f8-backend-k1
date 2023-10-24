# RESTFul API

- URL : Server API + Path

- HTTP Method :

* GET -> Lấy dữ liệu từ server
* POST -> Thêm mới dữ liệu lên server
* PUT -> Cập nhập dữ liệu (ghi đè)
* PATCH -> Cập nhập dữ liệu (Không ghi đè)
* DELETE -> Xóa

- Endpoint : URL + Method

* GET /user
* POST /user

# Chú ý khi thiết kế API

Response Message thường sẽ cần phải cho chạy qua 1 bộ lọc có tên là : transformer

# Tác dụng của transformer : giúp sử lý , thay đổi lại các key của json , bổ sung thêm key mới

Giả sử tình huống :

- Font-end đang sử dụng API có key ở dạng camelCase
- Back-end đang thiết kế Database ở dạng underscore

=> tạo ra 1 transformer để rename các field trong Database thành dạng camelCase
