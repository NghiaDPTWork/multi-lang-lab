-- =========================================================================
-- THỬ THÁCH THỰC HÀNH SQL: THIẾT KẾ CƠ SỞ DỮ LIỆU BÁN HÀNG (E-COMMERCE SYSTEM)
-- =========================================================================

-- BỐI CẢNH ĐỀ BÀI:
-- Bạn được giao nhiệm vụ thiết kế một cơ sở dữ liệu bán hàng tối giản gồm các thực thể:
-- Khách hàng (Customers), Đơn hàng (Orders), Sản phẩm (Products) và Chi tiết đơn hàng (OrderDetails).

-- YÊU CẦU ĐỀ BÀI:
-- Hãy hoàn thiện các đoạn mã SQL còn trống (TODO) dưới đây để kiến tạo hệ thống hoàn chỉnh:

-- 1. THIẾT KẾ BẢNG KHÁCH HÀNG (CUSTOMERS - THỰC THỂ MẠNH):
--    - Trường `CustomerID` kiểu CHAR(6) làm Khóa chính.
--    - Trường `Email` VARCHAR(50) cấm trùng (UNIQUE) và bắt buộc phải nhập (NOT NULL).
--    - Trường `FullName` NVARCHAR(50) bắt buộc phải nhập.

-- 2. THIẾT KẾ BẢNG SẢN PHẨM (PRODUCTS):
--    - Trường `ProductID` kiểu INT tự tăng IDENTITY(1,1) làm Khóa chính.
--    - Trường `ProductName` NVARCHAR(50) bắt buộc phải nhập.
--    - Trường `Price` kiểu DECIMAL(10, 2) kèm theo ràng buộc kiểm tra CHECK bắt buộc giá phải > 0.

-- 3. THIẾT KẾ BẢNG ĐƠN HÀNG (ORDERS - LIÊN KẾT 1-N VỚI CUSTOMERS):
--    - Trường `OrderID` kiểu CHAR(8) làm Khóa chính.
--    - Trường `OrderDate` kiểu DATE mặc định lấy ngày hiện tại (DEFAULT GETDATE()).
--    - Trường `CustomerID` kiểu CHAR(6) liên kết làm Khóa ngoại tham chiếu đến bảng Customers.
--    - Cài đặt hành vi toàn vẹn: Khi xóa Khách hàng, các Đơn hàng của họ tự động bị xóa theo (ON DELETE CASCADE).

-- 4. THIẾT KẾ BẢNG CHI TIẾT ĐƠN HÀNG (ORDER_DETAILS - MỐI QUAN HỆ NHIỀU-NHIỀU):
--    - Bảng này là chiếc cầu nối giải quyết mối quan hệ Nhiều-Nhiều (N-N) giữa Orders và Products.
--    - Chứa hai Khóa ngoại:
--      + `OrderID` tham chiếu đến bảng Orders.
--      + `ProductID` tham chiếu đến bảng Products.
--    - Khóa chính hỗn hợp (Composite Key) được tạo nên từ cặp `(OrderID, ProductID)`.
--    - Trường `Quantity` kiểu INT bắt buộc phải > 0 (Dùng CONSTRAINT CHECK).
-- =========================================================================

-- --- BƯỚC 1: KHỞI TẠO DATABASE ---
CREATE DATABASE DB_ECommercePractice;
GO
USE DB_ECommercePractice;
GO


-- --- BƯỚC 2: KIẾN TẠO BẢNG CUSTOMERS ---
-- TODO: Hãy viết lệnh tạo bảng Customers đầy đủ các cột và ràng buộc theo mô tả
CREATE TABLE Customers (
    -- Viết code tạo bảng của bạn tại đây
);


-- --- BƯỚC 3: KIẾN TẠO BẢNG PRODUCTS ---
-- TODO: Hãy viết lệnh tạo bảng Products đầy đủ các cột và ràng buộc theo mô tả
CREATE TABLE Products (
    -- Viết code tạo bảng của bạn tại đây
);


-- --- BƯỚC 4: KIẾN TẠO BẢNG ORDERS ---
-- TODO: Hãy viết lệnh tạo bảng Orders và liên kết Khóa ngoại kèm ON DELETE CASCADE
CREATE TABLE Orders (
    -- Viết code tạo bảng của bạn tại đây
);


-- --- BƯỚC 5: KIẾN TẠO BẢNG CHI TIẾT ĐƠN HÀNG (ORDERDETAILS - COMPOSITE KEY) ---
-- TODO: Hãy viết lệnh tạo bảng cầu nối OrderDetails có khóa chính hỗn hợp và kiểm tra Quantity > 0
CREATE TABLE OrderDetails (
    -- Viết code tạo bảng của bạn tại đây
);
