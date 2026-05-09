-- =========================================================================
-- HỆ THỐNG BÀI HỌC SQL: THIẾT KẾ MỐI QUAN HỆ 1 - N (ONE-TO-MANY RELATIONSHIP)
-- =========================================================================

-- 1. BẢN CHẤT MỐI QUAN HỆ 1 - N:
--    - Là mối quan hệ phổ biến nhất trong cơ sở dữ liệu quan hệ, thể hiện một thực thể bên A (bên 1) có thể liên kết với nhiều thực thể bên B (bên N), nhưng ngược lại một thực thể bên B chỉ liên kết với tối đa một thực thể bên A.
--    - Ví dụ thực tế: Một khách hàng (Customer - bên 1) có thể sở hữu nhiều xe máy (Vehicle - bên N), nhưng một xe máy cụ thể chỉ thuộc sở hữu của duy nhất một khách hàng.

-- 2. THỰC THỂ MẠNH & THỰC THỂ YẾU (STRONG & WEAK ENTITIES):
--    - Strong Entity (Thực thể mạnh): Là thực thể có sự tồn tại độc lập, đóng vai trò làm điểm tựa (bên 1). Khi tạo Database, ta luôn ưu tiên tạo các thực thể mạnh trước.
--    - Weak Entity (Thực thể yếu): Là thực thể phụ thuộc hoàn toàn vào sự tồn tại của thực thể mạnh (bên N). Khi xóa thực thể mạnh, thực thể yếu liên kết với nó cũng bị mất đi điểm tựa.

-- 3. HÀNH VI TOÀN VẸN THAM CHIẾU (REFERENTIAL INTEGRITY ACTIONS):
--    - Khi thực hiện thay đổi dữ liệu (UPDATE / DELETE) ở bảng Cha (bên 1), ta cấu hình các hành vi ảnh hưởng đến bảng Con (bên N):
--      + NO ACTION / RESTRICT (Mặc định): Từ chối hành động xóa/sửa cha nếu vẫn còn tồn tại con đang liên kết (bảo vệ toàn vẹn tuyệt đối).
--      + ON DELETE CASCADE / ON UPDATE CASCADE: Khi xóa/sửa cha, tất cả các con liên kết cũng tự động bị xóa/sửa theo.
--      + ON DELETE SET NULL: Khi xóa cha, giá trị khóa ngoại ở bảng con tự động chuyển thành NULL (giữ lại con, cho con bơ vơ).
-- =========================================================================

-- --- PHẦN 1: KHỞI TẠO DATABASE ---
CREATE DATABASE DBK20F3_OneManyRelationship;
GO
USE DBK20F3_OneManyRelationship;
GO


-- --- PHẦN 2: THỰC THỂ MẠNH - KHÁCH HÀNG (CUSTOMER - BÊN 1) ---
CREATE TABLE Customer (
    ID CHAR(8) NOT NULL,
    Name NVARCHAR(30) NOT NULL
);

ALTER TABLE Customer
    ADD CONSTRAINT PK_Customer PRIMARY KEY (ID);

-- Nạp dữ liệu khách hàng mẫu
INSERT INTO Customer VALUES ('CUS1001', N'Nguyễn An');
INSERT INTO Customer VALUES ('CUS1002', N'Lê Bình');
INSERT INTO Customer VALUES ('CUS1003', N'Võ Cường');


-- --- PHẦN 3: THỰC THỂ YẾU - BIỂN SỐ XE (VEHICLE - BÊN N) ---
CREATE TABLE VehicleIndentity (
    VID CHAR(5) NOT NULL,
    CCCD CHAR(8) NOT NULL   -- Cột khóa ngoại chứa mã khách hàng sở hữu
);

ALTER TABLE VehicleIndentity
    ADD CONSTRAINT PK_VehicleIndentity PRIMARY KEY (VID);

-- Thiết lập ràng buộc Khóa Ngoại (FOREIGN KEY) liên kết CCCD sang ID của Customer
ALTER TABLE VehicleIndentity
    ADD CONSTRAINT FK_VehicleIndentityCCCD_CustomerID 
    FOREIGN KEY (CCCD) REFERENCES Customer (ID);

-- Nạp dữ liệu xe máy mẫu (Một khách hàng CUS1001 sở hữu 2 xe)
INSERT INTO VehicleIndentity VALUES ('V2204', 'CUS1001');
INSERT INTO VehicleIndentity VALUES ('V6789', 'CUS1001');
INSERT INTO VehicleIndentity VALUES ('V4589', 'CUS1002');


-- --- PHẦN 4: MINH HỌA HÀNH VI CASCADE & SET NULL ---
-- Tạo phiên bản V2 để thử nghiệm các tùy chọn ràng buộc
CREATE TABLE CustomerV2 (
    ID CHAR(8) NOT NULL,
    Name NVARCHAR(30) NOT NULL
);

ALTER TABLE CustomerV2
    ADD CONSTRAINT PK_CustomerV2 PRIMARY KEY (ID);

INSERT INTO CustomerV2 VALUES ('CUS1001', N'Nguyễn An');
INSERT INTO CustomerV2 VALUES ('CUS1002', N'Lê Bình');

CREATE TABLE VehicleIndentityV2 (
    VID CHAR(5) NOT NULL,
    CCCD CHAR(8) NULL -- Cho phép NULL để dùng ON DELETE SET NULL
);

ALTER TABLE VehicleIndentityV2
    ADD CONSTRAINT PK_VehicleIndentityV2 PRIMARY KEY (VID);

-- Áp dụng tùy chọn ON DELETE SET NULL và ON UPDATE CASCADE
ALTER TABLE VehicleIndentityV2
    ADD CONSTRAINT FK_VehicleIndentityV2CCCD_CustomerV2ID 
    FOREIGN KEY (CCCD) REFERENCES CustomerV2 (ID)
    ON DELETE SET NULL
    ON UPDATE CASCADE;

INSERT INTO VehicleIndentityV2 VALUES ('V2204', 'CUS1001');
INSERT INTO VehicleIndentityV2 VALUES ('V4589', 'CUS1002');

-- Chạy thử nghiệm hành vi UPDATE CASCADE (ID của CUS1002 đổi thành CUS1009, bảng con tự động đổi theo)
UPDATE CustomerV2 SET ID = 'CUS1009' WHERE ID = 'CUS1002';

-- Chạy thử nghiệm hành vi DELETE SET NULL (Xóa CUS1001, bảng con của xe V2204 tự chuyển CCCD thành NULL)
DELETE FROM CustomerV2 WHERE ID = 'CUS1001';

SELECT * FROM CustomerV2;
SELECT * FROM VehicleIndentityV2;
