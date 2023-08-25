CREATE DATABASE database_02_tenhocvien;

use database_02_tenhocvien;

-- tạo bảng customers
CREATE TABLE customers(
    id INT PRIMARY KEY NOT NULL,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(30) NOT NULL,
    phone VARCHAR(20) NOT NULL
);

-- thêm dữ liệu vào bảng customer
INSERT INTO customers(id,name,email,phone) 
VALUES
    (1,"Nhat","Nhat@gmail.com","0123456789"),
    (2,"Anh","Anh@gmail.com","012345678")



-- tạo bảng products
CREATE TABLE products(
    id INT PRIMARY KEY NOT NULL,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    description TEXT
   
)


-- thêm dữ liệu vào bảng products
INSERT INTO products(id,name,price,description)
VALUES 
    (1,"quat dien",500000,"do dan dung"),
    (2,"am dien",600000,"do dan dung")



-- tạo bảng orders
CREATE TABLE orders(
    id INT PRIMARY KEY NOT NULL,
    customer_id INT NOT NULL,
    total_products INT NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    status VARCHAR(10) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT order_customer_id_foreign 
    FOREIGN KEY (customer_id) REFERENCES customers(id)
    ON DELETE CASCADE
	ON UPDATE CASCADE
)


-- thêm dữ liệu vào bảng orders
INSERT INTO orders(id,customer_id,total_products,amount,status,created_at)
VALUES 
    (1,1,2,500000,"da mua",NOW()),
    (2,2,3,600000,"da mua",NOW())


-- tạo bảng order_details
CREATE TABLE order_details (
    id INT PRIMARY KEY NOT NULL,
    product_id INT NOT NULL,
    order_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    
    CONSTRAINT order_details_product_id_foreign FOREIGN KEY (product_id) REFERENCES products(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    
    CONSTRAINT order_details_order_id_foreign FOREIGN KEY (order_id) REFERENCES orders(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);


-- thêm dữ liệu vào bảng order_details
INSERT INTO order_details(id,product_id,order_id,created_at,updated_at)
VALUES
    (1,1,1,NOW(),NOW()),
    (2,2,2,NOW(),NOW())



-- Xóa dữ liệu bảng cha customer


DELETE FROM customers WHERE id = 1

-- dòng dữ liệu có customer_id =1 trong bảng order bị xóa

SELECT * FROM orders;
SELECT * FROM order_details


-- cập nhật dữ liệu bảng cha product

UPDATE
    products
SET
    id = 3,
    name = "tu lanh",
    price = 1000000,
    description = "do dan dung"
WHERE
    id =1


-- dữ liệu có product_id =1 trong bảng order_details đã được cập nhập


SELECT * FROM order_details;
SELECT * FROM orders