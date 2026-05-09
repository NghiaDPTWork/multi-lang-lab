-- =========================================================================
-- HỆ THỐNG BÀI HỌC SQL: KHÓA NHÂN TẠO / TỰ TĂNG (SURROGATE KEY)
-- =========================================================================

-- 1. BẢN CHẤT CỦA KHÓA NHÂN TẠO (SURROGATE KEY):
--    - Là khóa chính được tạo ra một cách nhân tạo bởi hệ thống cơ sở dữ liệu (thường là số nguyên tự tăng hoặc chuỗi ngẫu nhiên duy nhất), không mang bất kỳ giá trị thực tế hay ý nghĩa nghiệp vụ nào.
--    - Tại sao cần Surrogate Key?
--      + Khắc phục nhược điểm khi để người dùng tự nhập ID (nguy cơ trùng lặp dữ liệu, không tăng tiến tuần tự).
--      + Giảm tải áp lực nhập liệu cho nhân viên vận hành hệ thống.
--      + Tăng tốc hiệu năng truy vấn chỉ mục (Indexing) nhờ kích thước kiểu số nguyên nhỏ gọn và tăng tiến đều đặn.

-- 2. CƠ CHẾ SINH KHÓA TỰ ĐỘNG TRONG SQL SERVER:
--    - Cách 1: Sử dụng `IDENTITY(seed, increment)`:
--      + Tự tăng số nguyên tuần tự từ điểm xuất phát `seed` với khoảng tăng `increment` (ví dụ `IDENTITY(1, 1)`).
--      + Đảm bảo tính cấm trùng trên một bảng cụ thể. Kể cả khi xóa dòng dữ liệu, bộ đếm nội bộ vẫn tiếp tục tăng lên mà không reset (ngoại trừ khi TRUNCATE TABLE).
--    - Cách 2: Sử dụng `UniqueIdentifier` kết hợp với hàm `NEWID()`:
--      + Sinh ra chuỗi định danh ngẫu nhiên chuẩn toàn cầu 128-bit (GUID/UUID) dưới dạng mã Hexadecimal.
--      + Cực kỳ phù hợp cho hệ thống cơ sở dữ liệu phân tán nhiều máy chủ (Distributed Databases) nhằm tránh xung đột trùng lặp ID khi hợp nhất dữ liệu từ các server khác nhau.
-- =========================================================================

-- --- PHẦN 1: KHỞI TẠO DATABASE ---
CREATE DATABASE DBK20F3_SurrogateKey;
GO
USE DBK20F3_SurrogateKey;
GO


-- --- PHẦN 2: BẤT CẬP KHI ĐỂ NGƯỜI DÙNG TỰ NHẬP KHÓA CHÍNH ---
CREATE TABLE Student (
    ID CHAR(8) NOT NULL,
    Name NVARCHAR(40),
    Point INT,
    CONSTRAINT PK_Student PRIMARY KEY (ID)
);

-- Người dùng có nguy cơ nhập trùng, nhập lộn xộn hoặc bỏ qua các khoảng trống số
INSERT INTO Student VALUES ('SE123456', N'Lê Điệp', 10);
INSERT INTO Student VALUES ('SE123459', N'Nguyên Vy', 9);


-- --- PHẦN 3: CƠ CHẾ 1 - SỬ DỤNG IDENTITY TỰ TĂNG TUẦN TỰ ---
-- Bắt đầu từ số 5, mỗi lần thêm mới tăng lên 2 đơn vị
CREATE TABLE StudentV2 (
    ID INT IDENTITY(5, 2) NOT NULL,
    Name NVARCHAR(40),
    Point INT,
    CONSTRAINT PK_StudentV2 PRIMARY KEY (ID)
);

-- Khi nạp dữ liệu, KHÔNG được phép truyền giá trị cho cột IDENTITY (hệ thống tự sinh)
INSERT INTO StudentV2 VALUES (N'Lê Điệp', 10); -- Tự sinh ID = 5
INSERT INTO StudentV2 VALUES (N'Thanh Hùng', 8); -- Tự sinh ID = 7

SELECT * FROM StudentV2;


-- --- PHẦN 4: CƠ CHẾ 2 - SỬ DỤNG UNIQUEIDENTIFIER (UUID CHUẨN TOÀN CẦU) ---
CREATE TABLE StudentV3 (
    ID UNIQUEIDENTIFIER DEFAULT NEWID() NOT NULL,
    Name NVARCHAR(40),
    Point INT,
    CONSTRAINT PK_StudentV3 PRIMARY KEY (ID)
);

-- Khởi tạo đối tượng tự động gán chuỗi ngẫu nhiên chuẩn toàn cầu thông qua NEWID()
INSERT INTO StudentV3 (Name, Point) VALUES (N'Quyên Vòng', 10);
INSERT INTO StudentV3 (Name, Point) VALUES (N'Thế Thắng', 9);

SELECT * FROM StudentV3;
