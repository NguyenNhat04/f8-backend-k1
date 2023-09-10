CREATE DATABASE database_05_NguyenNhat;


USE database_05_NguyenNhat;
ALTER DATABASE database_04_NguyenNhat CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

-- tạo bảng Khách Hàng
USE database_05_NguyenNhat;

CREATE TABLE KHACH_HANG(
    `MaKH` VARCHAR(10) PRIMARY KEY NOT NULL,
    `TenKH` VARCHAR(100) NOT NULL,
    `DiaChi` VARCHAR(250) NOT NULL,
    `SoDT` VARCHAR(11) NOT NULL UNIQUE,
    `create_at` TIMESTAMP,
    `update_at` TIMESTAMP 
);


INSERT INTO KHACH_HANG(MaKH,TenKH,DiaChi,SoDT)
VALUES
    ('KH001',"Nguyen Van A","Hoa xuan",1111111111),
    ('KH002',"Nguyen Van B","Hoa hai ",1111111112),
    ('KH003',"Phan Van A","Cam le",1111111113),
    ('KH004',"Phan Van B","Hoa xuan",1111111114);

-- tạo bảng Phòng

CREATE TABLE PHONG(
    `MaPhong` VARCHAR(10) PRIMARY KEY NOT NULL,
    `LoaiPhong` VARCHAR(10) NOT NULL,
    `SoKhachToiDa` TINYINT NOT NULL,
    `GiaPhong` FLOAT NOT NULL,
    `MoTa` TEXT,
    `create_at` TIMESTAMP,
    `update_at` TIMESTAMP 
 );


INSERT INTO PHONG(MaPhong,LoaiPhong,SoKhachToiDa,GiaPhong)
VALUES 
    ('P001',"Loai 1",20,60000),
    ('P002',"Loai 1",25,80000),
    ('P003',"Loai 2",15,50000),
    ('P004',"Loai 2",20,50000);


-- tạo bảng Đặt Phòng


USE database_05_NguyenNhat;
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
 
);
USE database_05_NguyenNhat;
INSERT INTO DAT_PHONG(MaDatPhong,MaPhong,MaKH,NgayDat,GioBatDau,GioKetThuc,TienDatCoc,TrangThaiDat)
VALUES
    ("DP001","P001","KH002","2018/03/26","11:00","13:30",100000,"Da dat"),
    ("DP002","P001","KH003","2018/03/27","17:15","19:15",50000,"Da huy"),
    ("DP003","P002","KH002","2018/03/26","20:30","22:15",100000,"Da dat"),
    ("DP004","P003","KH001","2018/04/01","19:30","21:15",200000,"Da dat");




-- tạo bảng Dịch Vụ Đi Kèm
USE database_05_NguyenNhat;
CREATE TABLE DICH_VU_DI_KEM(
    `MaDV` VARCHAR(10) PRIMARY KEY NOT NULL,
    `TenDV` VARCHAR(250) NOT NULL,
    `DonViTinh` VARCHAR(10) NOT NULL,
    `DonGia` FLOAT DEFAULT 0,
    `create_at` TIMESTAMP,
    `update_at` TIMESTAMP 
);



USE database_05_NguyenNhat;
INSERT INTO DICH_VU_DI_KEM(MaDV,TenDV,DonViTinh,DonGia)
VALUES 
    ("DV001","Beer","Lon",10000),
    ("DV002","Nuoc ngot","Lon",8000),
    ("DV003","Trai cay","Đĩa",35000),
    ("DV004","Khan uot","Cai",2000);



-- tạo bảng Chi tiết Sử dụng dịch vụ
USE database_05_NguyenNhat;
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
);


USE database_05_NguyenNhat;
INSERT INTO CHI_TIET_SU_DUNG_DV(MaDatPhong,MaDV, SoLuong)
VALUES 
    ("DP001","DV001",20),
    ("DP001","DV003",3),
    ("DP001","DV002",10),
    ("DP002","DV002",10),
    ("DP002","DV003",1),
    ("DP003","DV003",2),
    ("DP003","DV004",10);


-- CÂU 1:  Hiển thị MaDatPhong, MaPhong, LoaiPhong, GiaPhong, TenKH, NgayDat, TongTienHat, TongTienSuDungDichVu, TongTienThanhToan tương ứng với từng mã đặt phòng có trong bảng DAT_PHONG. Những đơn đặt phòng nào không sử dụng dịch vụ đi kèm thì cũng liệt kê thông tin của đơn đặt phòng đó ra
SELECT 
    DP.MaDatPhong,
    DP.MaPhong,
    P.LoaiPhong,
    P.GiaPhong,
    KH.TenKH,
    DP.NgayDat,
    TIME_TO_SEC(TIMEDIFF(DP.GioKetThuc, DP.GioBatDau)) / (60 * 60) * P.GiaPhong AS `TỔNG TIỀN HÁT`,
    IF(SUM(DVDK.DonGia * CTSD.SoLuong) , SUM(DVDK.DonGia * CTSD.SoLuong), 0 ) AS `tiền sử dụng dv`,
    TIME_TO_SEC(TIMEDIFF(DP.GioKetThuc, DP.GioBatDau)) / (60 * 60) * P.GiaPhong + if(SUM(DVDK.DonGia * CTSD.SoLuong) , SUM(DVDK.DonGia * CTSD.SoLuong), 0 ) as `tổng tiền`
    
FROM
    DAT_PHONG AS DP
    JOIN PHONG AS P ON DP.MaPhong = P.MaPhong
    JOIN KHACH_HANG AS KH ON DP.MaKH = KH.MaKH
    LEFT JOIN CHI_TIET_SU_DUNG_DV AS CTSD ON DP.MaDatPhong = CTSD.MaDatPhong
    LEFT JOIN DICH_VU_DI_KEM AS DVDK ON CTSD.MaDV = DVDK.MaDV

GROUP BY DP.MaDatPhong;


-- CAU 2 : Hiển thị MaKH, TenKH, DiaChi, SoDT của những khách hàng đã từng đặt phòng karaoke có địa chỉ ở “Hoa xuan”
SELECT
    KH.*
FROM
    KHACH_HANG AS KH
    JOIN DAT_PHONG AS DP ON KH.MaKH = DP.MaKH
WHERE KH.DiaChi = 'Hoa xuan';
-- CÂU 3 : Hiển thị MaPhong, LoaiPhong, SoKhachToiDa, GiaPhong, SoLanDat của những phòng được khách hàng đặt có số lần đặt lớn hơn 2 lần và trạng thái đặt là “Da dat”


SELECT
    P.*,
    COUNT(DP.MaPhong) AS SoLanDat
FROM
    PHONG AS P
    JOIN DAT_PHONG AS DP ON P.MaPhong = DP.MaPhong

WHERE DP.TrangThaiDat LIKE 'Da dat'
GROUP BY
P.MaPhong
HAVING SoLanDat > 2;