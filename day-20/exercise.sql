CREATE DATABASE database_03_NhatNguyen


USE database_03_NhatNguyen;
CREATE TABLE products(
    `id` INT PRIMARY KEY NOT NULL,
    `sku` VARCHAR(10) NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `original_price` FLOAT DEFAULT 0,
    `sale_price` FLOAT DEFAULT 0,
    `description` TEXT NOT NULL,
    `quantity_stock` INT NOT NULL,
    `user_manual` TEXT NOT NULL,
    `create_at` TIMESTAMP,
    `update_at` TIMESTAMP
)


CREATE TABLE product_attributes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    product_id INT NOT NULL,
    attribute_name VARCHAR (100),
    atrribute_value VARCHAR (50),
    FOREIGN KEY (product_id) REFERENCES products(id)

);

INSERT INTO products(`id`,`sku`,`name`,`original_price`,`sale_price`,`description`,`quantity_stock`,`user_manual`,`create_at`,`update_at`)
VALUES 
    (1001,"sp-1","Nồi cơm điện",500000,550000,"Đồ dân dụng",50,"Cắm trực tiếp vào ổ điện",NOW(),NOW()),
    (1002,"sp-2","Bàn học",400000,450000,"Nội thất gia đình",60,"Nối các chân vào mặt bàn và sử dụng",NOW(),NOW()),
    (1003,"sp-3","Máy tính xách tay",20000000,21000000,"Đồ dùng cá nhân",70,"Kết nối Wifi và sử dụng",NOW(),NOW());


INSERT INTO product_attributes(id,product_id,attribute_name,atrribute_value)
VALUES 
    (1,1001,"Kích thước","3L"),
    (2,1001,"Màu sắc","Đen"),
    (3,1001,"Nhà sản xuất","TOSHIBA"),
    (4,1002,"Kích thước","60x120"),
    (5,1002,"Màu sắc","Xanh da trời"),
    (6,1002,"Nhà sản xuất","Gỗ xinh"),
    (7,1003,"Kích thước","15.6inch"),
    (8,1003,"Màu sắc","Bạc"),
    (9,1003,"Nhà sản xuất","DELL")


SELECT * FROM products;
SELECT * FROM product_attributes WHERE product_id =1001;
SELECT * FROM products WHERE quantity_stock >0;