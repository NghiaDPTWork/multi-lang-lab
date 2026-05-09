-- =========================================================================
-- HỆ THỐNG BÀI HỌC SQL: THIẾT KẾ BẢNG & RÀNG BUỘC CƠ BẢN (TABLE DESIGN)
-- =========================================================================

-- 1. PHÂN LOẠI NGÔN NGỮ TRONG SQL:
--    - DDL (Data Definition Language): Ngôn ngữ kịch bản cấu trúc (CREATE, ALTER, DROP...) dùng để kiến tạo Database và các bảng.
--    - DML (Data Manipulation Language): Ngôn ngữ thao tác dữ liệu (SELECT, INSERT, UPDATE, DELETE...) dùng để điều khiển dữ liệu.
--    - DCL (Data Control Language): Ngôn ngữ điều khiển quyền truy cập (GRANT, REVOKE...).

-- 2. NGUYÊN TẮC THIẾT KẾ KHÓA CHÍNH (PRIMARY KEY):
--    - Mỗi bảng trong Database bắt buộc phải có ít nhất một cột cấm trùng tuyệt đối (Khóa - Key) để định danh chính xác duy nhất từng dòng dữ liệu.
--    - Các khóa ứng viên (Candidate Keys) là những cột có tiềm năng làm khóa chính (ví dụ: ID, Email, PhoneNumber).
--    - Tiêu chí lựa chọn Khóa Chính (Primary Key):
--      + Phù hợp nhất với mục đích lưu trữ.
--      + Tính thay đổi/hiệu lực thấp nhất (Hạn chế tối đa việc cập nhật lại giá trị Khóa chính).
--      + Ít mang tính suy luận hoặc mang thông tin nhạy cảm.
--    - Khóa chính là sự kết hợp của hai ràng buộc: NOT NULL (Cấm rỗng) + UNIQUE (Cấm trùng).
-- =========================================================================

-- --- PHẦN 1: TẠO DATABASE ---
CREATE DATABASE DBK20F3_TableDesign;
GO
USE DBK20F3_TableDesign;
GO


-- --- PHẦN 2: THIẾT KẾ BẢNG PHIÊN BẢN 1 (LỖI THIẾU KHÓA CHÍNH) ---
-- Bảng này cho phép người dùng nạp trùng lặp 100%, gây mất định danh dữ liệu
CREATE TABLE ProfileV1 (
    ID CHAR(8),
    Name NVARCHAR(50),
    DOB DATE,               -- Định dạng DATE mặc định: yyyy-MM-dd
    Gender CHAR(1) NULL,    -- Lưu ký tự giới tính đơn giản (M, F...)
    Email VARCHAR(50),
    PhoneNumber CHAR(11)
);

-- Nạp thử dữ liệu trùng lặp (không bị chặn)
INSERT INTO ProfileV1 VALUES ('SE123456', N'Nguyễn Thông', '1985-05-25', 'M', 'ThongNT@gmail.com', '0912345678');
INSERT INTO ProfileV1 VALUES ('SE123456', N'Nguyễn Thông', '1985-05-25', 'M', 'ThongNT@gmail.com', '0912345678');


-- --- PHẦN 3: THIẾT KẾ BẢNG PHIÊN BẢN 2 (BỔ SUNG KHÓA CHÍNH & KHÓA ỨNG VIÊN) ---
CREATE TABLE ProfileV2 (
    ID CHAR(8) PRIMARY KEY NOT NULL, -- Khóa chính cấm trùng và cấm null
    Name NVARCHAR(50),
    DOB DATE,
    Gender CHAR(1) NULL,
    Email VARCHAR(50) UNIQUE,        -- Khóa ứng viên (Unique - chỉ cho phép null 1 lần duy nhất)
    PhoneNumber CHAR(11) UNIQUE
);


-- --- PHẦN 4: THIẾT KẾ BẢNG PHIÊN BẢN 3 (THÊM RÀNG BUỘC CẤM NULL CHO TÊN) ---
CREATE TABLE ProfileV3 (
    ID CHAR(8) PRIMARY KEY NOT NULL,
    Name NVARCHAR(50) NOT NULL,      -- Bắt buộc phải nhập tên
    DOB DATE,
    Gender CHAR(1) NULL,
    Email VARCHAR(50) UNIQUE,
    PhoneNumber CHAR(11) UNIQUE
);


-- --- PHẦN 5: THIẾT KẾ BẢNG PHIÊN BẢN 4 (PHÂN TÁCH NGUYÊN TỬ TÊN - ATOMIC NAME FIELD) ---
-- Phân tách FirstName và LastName để dễ dàng sắp xếp (ORDER BY) chính xác theo Tên
CREATE TABLE ProfileV4 (
    ID CHAR(8) PRIMARY KEY NOT NULL,
    FirstName NVARCHAR(30) NOT NULL,
    LastName NVARCHAR(30) NOT NULL,
    DOB DATE,
    Gender CHAR(1) NULL,
    Email VARCHAR(50) UNIQUE,
    PhoneNumber CHAR(11) UNIQUE
);

-- Nạp thử dữ liệu và sắp xếp theo tên tăng dần
INSERT INTO ProfileV4 VALUES ('SE123456', N'Thông', N'Nguyễn', '1985-05-25', 'M', 'ThongNT@gmail.com', '0912345678');
INSERT INTO ProfileV4 VALUES ('SE123457', N'Kiếm', N'Hoàng', '1972-05-22', 'F', 'KiemHH@gmail.com', '0991234567');
INSERT INTO ProfileV4 VALUES ('SE123458', N'An', N'Thái', '1998-05-22', 'F', 'An2202@gmail.com', '0981234567');

SELECT * FROM ProfileV4 ORDER BY FirstName;


-- --- PHẦN 6: THIẾT KẾ BẢNG PHIÊN BẢN 5 (ĐẶT TÊN RÀNG BUỘC QUA ALTER TABLE) ---
-- Giúp đặt tên gợi nhớ cho các Constraint, hỗ trợ Debug và dễ dàng DROP ràng buộc sau này
CREATE TABLE ProfileV5 (
    ID CHAR(8) NOT NULL, -- Bắt buộc phải NOT NULL trước khi đặt làm khóa chính
    FirstName NVARCHAR(30) NOT NULL,
    LastName NVARCHAR(30) NOT NULL,
    DOB DATE,
    Gender CHAR(1) NULL,
    Email VARCHAR(50),
    PhoneNumber CHAR(11)
);

-- Thêm ràng buộc tường minh có tên (ALTER TABLE ADD CONSTRAINT)
ALTER TABLE ProfileV5
    ADD CONSTRAINT PK_ProfileV5 PRIMARY KEY (ID);

ALTER TABLE ProfileV5
    ADD CONSTRAINT UQ_ProfileV5_Email UNIQUE (Email);

ALTER TABLE ProfileV5
    ADD CONSTRAINT UQ_ProfileV5_PhoneNumber UNIQUE (PhoneNumber);
