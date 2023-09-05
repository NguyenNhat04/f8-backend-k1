CREATE DATABASE database_04_NguyenNhat;


-- tạo bảng Khách Hàng
USE database_04_NguyenNhat;

CREATE TABLE KHACH_HANG(
    `MaKH` VARCHAR(10) PRIMARY KEY NOT NULL,
    `TenKH` VARCHAR(100) NOT NULL,
    `DiaChi` VARCHAR(250) NOT NULL,
    `SoDT` VARCHAR(11) NOT NULL,
    `create_at` TIMESTAMP,
    `update_at` TIMESTAMP 
)


INSERT INTO KHACH_HANG(MaKH,TenKH,DiaChi,SoDT)
VALUES
    ('KH001',"Nguyen Van A","Hoa xuan",1111111111),
    ('KH002',"Nguyen Van B","Hoa hai ",1111111112),
    ('KH003',"Phan Van A","Cam le",1111111113),
    ('KH004',"Phan Van B","Hoa xuan",1111111114)

-- tạo bảng Phòng

CREATE TABLE PHONG(
    `MaPhong` VARCHAR(10) PRIMARY KEY NOT NULL,
    `LoaiPhong` VARCHAR(10) NOT NULL,
    `SoKhachToiDa` TINYINT NOT NULL,
    `GiaPhong` FLOAT NOT NULL,
    `MoTa` TEXT,
    `create_at` TIMESTAMP,
    `update_at` TIMESTAMP 
 )


INSERT INTO PHONG(MaPhong,LoaiPhong,SoKhachToiDa,GiaPhong)
VALUES 
    ('P001',"Loai 1",20,60000),
    ('P002',"Loai 1",25,80000),
    ('P003',"Loai 2",15,50000),
    ('P004',"Loai 2",20,50000)


-- tạo bảng Đặt Phòng



CREATE TABLE DAT_PHONG(
    `MaDatPhong` VARCHAR(10) PRIMARY KEY NOT NULL,
    `MaPhong` VARCHAR(10) NOT NULL,
    `MaKH` VARCHAR(10) NOT NULL,
    `NgayDat` DATE,
    `GioBatDau` TIME,
    `GioKetThuc` TIME,
    `TienDatCoc` FLOAT DEFAULT 0,
    `GhiChu` TEXT,
    `TrangThaiDat` VARCHAR(20) NOT NULL,
    CONSTRAINT FK_KhachHang_DatPhong 
    FOREIGN KEY (MaKH) REFERENCES KHACH_HANG(MaKH),
    CONSTRAINT FK_Phong_DatPhong 
    FOREIGN KEY (MaPhong) REFERENCES PHONG(MaPhong),
    `create_at` TIMESTAMP,
    `update_at` TIMESTAMP 
 
)


INSERT INTO DAT_PHONG(MaDatPhong,MaPhong,MaKH,NgayDat,GioBatDau,GioKetThuc,TienDatCoc,TrangThaiDat)
VALUES
    ("DP001","P001","KH002","2018/03/26","11:00","13:30",100000,"Da dat"),
    ("DP002","P001","KH003","2018/03/27","17:15","19:15",50000,"Da huy"),
    ("DP003","P002","KH002","2018/03/26","20:30","22:15",100000,"Da dat"),
    ("DP004","P003","KH001","2018/04/01","19:30","21:15",200000,"Da dat")




-- tạo bảng Dịch Vụ Đi Kèm
CREATE TABLE DICH_VU_DI_KEM(
    `MaDV` VARCHAR(10) PRIMARY KEY NOT NULL,
    `TenDV` VARCHAR(250) NOT NULL,
    `DonViTinh` VARCHAR(10) NOT NULL,
    `DonGia` FLOAT DEFAULT 0,
    `create_at` TIMESTAMP,
    `update_at` TIMESTAMP 
)




INSERT INTO DICH_VU_DI_KEM(MaDV,TenDV,DonViTinh,DonGia)
VALUES 
    ("DV001","Beer","Lon",10000),
    ("DV002","Nuoc ngot","Lon",8000),
    ("DV003","Trai cay","Đĩa",35000),
    ("DV004","Khan uot","Cai",2000)



-- tạo bảng Chi tiết Sử dụng dịch vụ

CREATE TABLE CHI_TIET_SU_DUNG_DV(
`MaDatPhong` VARCHAR(10) NOT NULL,
`MaDV` VARCHAR(10) NOT NULL,
`SoLuong` INT DEFAULT 0,
`create_at` TIMESTAMP,
`update_at` TIMESTAMP, 
PRIMARY KEY (MaDatPhong,MaDV),
CONSTRAINT FK_DatPhong_ChiTietSuDungDV
FOREIGN KEY (MaDatPhong) REFERENCES DAT_PHONG(MaDatPhong),
CONSTRAINT FK_DichVuDiKem_ChiTietSuDungDV
FOREIGN KEY (MaDV) REFERENCES DICH_VU_DI_KEM(MaDV)
)



INSERT INTO CHI_TIET_SU_DUNG_DV(MaDatPhong,MaDV, SoLuong)
VALUES 
    ("DP001","DV001",20),
    ("DP001","DV003",3),
    ("DP001","DV002",10),
    ("DP002","DV002",10),
    ("DP002","DV003",1),
    ("DP003","DV003",2),
    ("DP003","DV004",10)


-- TRUY VẤN

USE database_04_NguyenNhat;

-- câu 1 : Liệt kê MaDatPhong, MaDV, SoLuong của tất cả các dịch vụ có số lượng lớn hơn 3 và nhỏ hơn 10

SELECT MaDatPhong, MaDV, SoLuong FROM chi_tiet_su_dung_dv WHERE SoLuong > 3 AND SoLuong < 10

-- câu 2 : Cập nhật dữ liệu trên trường GiaPhong thuộc bảng PHONG tăng lên 10,000 VNĐ so với giá phòng hiện tại, chỉ cập nhật giá phòng của những phòng có số khách tối đa lớn hơn 10
UPDATE phong 
SET GiaPhong = GiaPhong + 10000 
WHERE SoKhachToiDa > 10;


-- câu 3 : Xóa tất cả những đơn đặt phòng (từ bảng DAT_PHONG) có trạng thái đặt (TrangThaiDat) là “Da huy”
DELETE FROM dat_phong WHERE TrangThaiDat = "Da huy";

-- câu 4 : Hiển thị TenKH của những khách hàng có tên bắt đầu là một trong các ký tự “H”, “N”, “M” và có độ dài tối đa là 20 ký tự

SELECT TenKH FROM khach_hang WHERE LEFT(TenKH,1) IN ("H","N","M") AND LENGTH(TenKH) <=20

-- câu 5 :  Hiển thị TenKH của tất cả các khách hàng có trong hệ thống, TenKH nào trùng nhau thì chỉ hiển thị một lần
SELECT DISTINCT TenKH FROM khach_hang

-- câu 6 : Hiển thị MaDV, TenDV, DonViTinh, DonGia của những dịch vụ đi kèm có DonViTinh là “lon” và có DonGia lớn hơn 10,000 VNĐ 
-- hoặc những dịch vụ đi kèm có DonViTinh là “Cai” và có DonGia nhỏ hơn 5,000 VNĐ
SELECT MaDV, TenDV, DonViTinh, DonGia FROM dich_vu_di_kem 
WHERE (DonViTinh = "Lon" AND DonGia > 10000) OR (DonViTinh = "Cai" AND DonGia < 5000)

-- câu 7 : Hiển thị MaDatPhong, MaPhong, LoaiPhong, SoKhachToiDa, GiaPhong, MaKH, TenKH, SoDT, NgayDat, GioBatDau, GioKetThuc, 
-- MaDichVu, SoLuong, DonGia của những đơn đặt phòng có năm đặt phòng là “2016”, “2017” và đặt những phòng có giá phòng > 50,000 VNĐ/ 1 giờ

SELECT dp.MaDatPhong, p.MaPhong, p.LoaiPhong, p.SoKhachToiDa, p.GiaPhong,
kh.MaKH, kh.TenKH, kh.SoDT, dp.NgayDat, dp.GioBatDau, dp.GioKetThuc,dv.MaDV,ct.SoLuong,dv.DonGia
FROM dat_phong AS dp
INNER JOIN  phong AS p
ON dp.MaPhong = p.MaPhong
INNER JOIN khach_hang AS kh
ON dp.MaKH = kh.MaKH
INNER JOIN chi_tiet_su_dung_dv AS ct
ON dp.MaDatPhong = ct.MaDatPhong
INNER JOIN dich_vu_di_kem AS dv
ON ct.MaDV = dv.MaDV

WHERE YEAR(dp.NgayDat) IN (2016,2017) AND p.GiaPhong > 50000
