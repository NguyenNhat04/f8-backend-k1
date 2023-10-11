# Các bước làm việc với sequelize cli

- Cài đặt sequelize : npm i sequelize

- Cài dặt sequelize-cli : npm install --save-dev sequelize-cli

- Khởi tạo : npx sequelize-cli init

File : config/config.json => config database theo các môi trường khác nhau

# Migration là gì ?

- là File xây dựng cấu trúc table trong database

- Khi làm việc với Database => không thao tác trực tiếp trên CSDL mà sẽ thông qua các file migration

- Tác dụng :

  - Bảo mật
  - Quản lý phiên bản Database (rollback)
  - Chia sẻ CSDL giữa các thành viên trong team

## Tạo Model bằng CLI

npx sequelize-cli model:generate --name TênModel --attributes tenfield1:kieudulieu,tenfield2:kieudulieu,....

ví dụ : npx sequelize-cli model:generate --name Customer --attributes id:number,name:string

## tạo riêng migration (áp dụng khi sửa cấu trúc bảng)

npx sequelize migration:generate --name tenMigration

Lưu ý : tên migration viết tường minh

## Running Migrations

npx sequelize-cli db:migrate

## Undoing Migrations (khôi phục phiên bản trước của database)

npx sequelize-cli db:migrate:undo

- undoing tất cả (reset database về trạng thái chưa có bảng nào) => npx sequelize-cli db:migrate:undo:all

# Seeder là gì ?

- tạo ra các dữ liệu mẫu để test

## tạo file Seeder

npx sequelize-cli seed:generate --name tenfileseeder

## Chạy seeder

npx sequelize-cli db:seed:all

# Chạy riêng file seeder

npx sequelize db:seed --seed=tênfileseeder

## Thông tin SMTP

- Host : smtp.gmail.com
- User : nhatnguyen26042003@gmail.com
- Password : oukq jprl dwjp dotl
- port : 465 hoặc 587
- Secure : ssl hoặc tls => ssl nếu port là 465 , tls nếu port là 587

## Đăng nhập thông qua mạng xã hội

=> Sử dụng phương thức xác thực của mạng xã hội => trả về thông tin tài khoản mạng xã hội (Tên,Email,Avatar,...)
=> Insert vào Database của ứng dụng
=> Thực hiện đăng nhập tự động

## Tư duy xây dựng database chức năng đăng nhập mạng xã hội

# trên 1 ứng dụng có nhiều loại đăng nhập

- Password
- Google
- Facebook
- Github

=> cần có 1 table để quản lý các loại đăng nhập : providers (id,name)

=> Trong bảng users => cần bổ sung thêm trường : provider_id
