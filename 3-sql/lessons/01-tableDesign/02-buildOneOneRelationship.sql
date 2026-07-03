-- =========================================================================
-- HỆ THỐNG BÀI HỌC SQL: THIẾT KẾ MỐI QUAN HỆ 1 - 1 (ONE-TO-ONE RELATIONSHIP)
-- =========================================================================

-- 1. BẢN CHẤT MỐI QUAN HỆ 1 - 1:
--    - Là mối quan hệ giữa hai thực thể độc lập (Thực thể - Thực thể), trong đó một thực thể bên A chỉ tương tác với duy nhất một thực thể bên B và ngược lại.
--    - Ví dụ thực tế: Một công dân (Citizen) chỉ sở hữu tối đa một hộ chiếu (Passport) còn hiệu lực, và một hộ chiếu đó chỉ thuộc về duy nhất một công dân đó.
--    - Lưu ý quan trọng: Phân biệt rõ giữa "Thực thể" và "Thuộc tính". Em và cánh tay của em không phải là MQH 1-1 vì tay là một thuộc tính sinh học của cơ thể (Thực thể), không phải thực thể độc lập lưu ở bảng khác.

-- 2. PHƯƠNG PHÁP XÂY DỰNG MQH 1 - 1 TRONG SQL:
--    - Bước 1: Tạo liên kết 1 - Nhiều (1 - N) bằng cách sử dụng Khóa Ngoại (FOREIGN KEY) tham chiếu từ bảng con sang bảng cha.
--    - Bước 2: Thêm ràng buộc DUY NHẤT (UNIQUE) lên cột Khóa Ngoại đó ở bảng con để ngăn chặn việc một bản ghi cha liên kết với nhiều bản ghi con, ép mối quan hệ lùi về đúng 1 - 1 tuyệt đối.
-- =========================================================================

-- --- PHẦN 1: KHỞI TẠO DATABASE ---
CREATE DATABASE DBKF3_OneOneRelationship;
GO
USE DBKF3_OneOneRelationship;
GO


-- --- PHẦN 2: THỰC THỂ CHA - CÔNG DÂN (CITIZEN) ---
CREATE TABLE Citizen (
    ID CHAR(9) NOT NULL,
    FirstName NVARCHAR(30) NOT NULL,
    LastName NVARCHAR(30) NOT NULL
);

-- Chỉ định Khóa chính cho bảng Citizen
ALTER TABLE Citizen 
    ADD CONSTRAINT PK_Citizen PRIMARY KEY (ID);

-- Nạp dữ liệu công dân mẫu
INSERT INTO Citizen VALUES ('C1', N'An', N'Nguyễn');
INSERT INTO Citizen VALUES ('C2', N'Bình', N'Lê');
INSERT INTO Citizen VALUES ('C3', N'Cường', N'Võ');
INSERT INTO Citizen VALUES ('C4', N'Dũng', N'Trần');


-- --- PHẦN 3: THỰC THỂ CON - HỘ CHIẾU (PASSPORT) ---
CREATE TABLE Passport (
    PNO CHAR(9) NOT NULL,
    IssuedDate DATE NOT NULL,   -- Ngày cấp hộ chiếu
    ExpiredDate DATE NOT NULL,  -- Ngày hết hạn hộ chiếu
    CCCD CHAR(9) NOT NULL       -- Cột liên kết sang bảng công dân
);

-- Chỉ định Khóa chính cho bảng Passport
ALTER TABLE Passport 
    ADD CONSTRAINT PK_Passport PRIMARY KEY (PNO);

-- Thiết lập ràng buộc Khóa Ngoại (FOREIGN KEY) để liên kết CCCD sang ID của Citizen (MQH 1 - N)
ALTER TABLE Passport 
    ADD CONSTRAINT FK_PassportCCCD_CitizenID 
    FOREIGN KEY (CCCD) REFERENCES Citizen (ID);

-- Thêm ràng buộc UNIQUE lên khóa ngoại CCCD để chuyển dịch quan hệ thành 1 - 1 tuyệt đối
ALTER TABLE Passport 
    ADD CONSTRAINT UQ_Passport_CCCD UNIQUE (CCCD);
