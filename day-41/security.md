# Vấn đề bảo mật

## File .env

- Chmod => Phân quyền ở trên Linux
- Chown => Chuyển sang quyền root

=> Tránh quyền 777

## Database

- Chặn Remote Connect trong Database
- Nếu server database và server ứng dụng khác nhau => Bật remote => Thêm địa chỉ IP vào whitelist => Chỉ cho phép kết nối từ Server chỉ định
- Đổi port mặc định của database
- Thiết lập username , password phức tạp
- Không được dùng username root để kết nối vào ứng dụng
- Mỗi Database chỉ nên thuộc 1 user

## Server

- Đổi port mặc định của server
- Đổi password phức tạp
- Thiết lập tường lửa (Firewall)
- Nên sử dụng CDN để giấu địa chỉ IP thật của server

## Upload File

- Thiết lập các định dạng được phép upload
- Thiết lập dung lượng tối đa được phép upload
- Xử lí nén ảnh

## XSS ( Cross-Site Scripting)

- Chuyển hướng, DOM can thiệt tạo form mới => Khai thác dữ liệu qua form
- Đánh cắp cookie

=> Cách xủ lý : Loại bỏ các thẻ html trước khi được show UI

## CSRF (Cross-Site Request Forgerys)

- Hacker biết được request xóa dữ liệu trong trang quản trị
  Ví dụ : POST /delete/{id}

- Giả sử web : bị XSS => Ví dụ : XSS ở form liên hệ

- Cách tấn công : Gửi form liên hệ , nội dung form đoạn code js (Gửi request xóa)
  => Khi admin mở thông tin liên hệ
  => Đoạn code js tự động thực thi
  => Request sẽ hoạt động
  => Khóa học tự động bị xóa

=> Cách xử lý : Tạo crsf token

## SQL injection

## html injection
