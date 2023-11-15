# Đăng nhập trên 1 thiết bị

## Database

1. users

- id
- name
- email
- password
- last_activity

2. login_token

- id
- user_id
- token

## Giải thuật

### Request 1

- Login (passport) => tạo ra 1 token
- Kiểm tra trong bảng login_token có token với user_id đang đăng nhập hay không ?

  - Nếu không có

    - Lưu token vào bảng login_token
    - Tạo 1 cookie lưu token vừa được khởi tạo

  - Nếu có :
    - Xóa tất cả token khác đi (Liên quan đến user_id đang đăng nhập)
    - Lưu token vào bảng login_token
    - Tạo 1 cookie lưu token vừa được khởi tạo

### Request 2

- Passport check Authenticate
- Nếu hợp lệ => Check Token (Dựa vào cookie và table login_token)
  - Nếu token trong Database khớp với Token lấy được từ cookie => next()
  - Nếu token trong Database không hợp lệ => Logout

Đăng nhập

### Request 3

- Đăng xuất => Lấy token từ cookie => Logout (Passport) => xóa token trong login_token
  => Gặp vấn đề khi trình duyệt tự động đăng xuất
  => Giải pháp : Viết API để check user hoạt động cuối cùng => sử dụng setInterval để send request
