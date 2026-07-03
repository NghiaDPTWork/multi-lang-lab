/* =========================================================================
   HỆ THỐNG BÀI HỌC: THIẾT KẾ ĐỐI TƯỢNG VÀ PHÂN QUYỀN BIẾN (PROTECTED SCOPE)
   =========================================================================
   
   1. QUYỀN TRUY CẬP PROTECTED TRONG KẾ THỪA
      - Từ khóa `protected` cho phép các lớp con (subclasses) có thể thừa hưởng và truy cập trực tiếp vào thuộc tính của lớp cha mà không cần gọi thông qua các hàm Getter/Setter.
      - Đây là sự cân bằng tuyệt vời giữa `private` (bảo mật tuyệt đối, lớp con không thấy) và `public` (mở rộng tự do cho tất cả mọi người).

   2. LƯU Ý KHI THIẾT KẾ THUỘC TÍNH MÀU SẮC (COLOR)
      - Ở mức cơ bản, ta thường dùng kiểu `String` để lưu trữ màu sắc (ví dụ: "Đỏ", "Xanh").
      - Ở các hệ thống chuyên nghiệp, màu sắc nên được lưu trữ bằng số nguyên `int` chứa mã Hexadecimal (ví dụ: `0xFF0000` cho màu Đỏ), giúp tối ưu hóa dung lượng bộ nhớ và dễ dàng xử lý đồ họa.
   ========================================================================= */

package data;

public class Rectangle {
    
    // --- PHẦN 1: THUỘC TÍNH (PROPERTIES WITH MIXED SCOPES) ---
    protected double width;
    protected double height; // Thay đổi từ private sang protected để Square kế thừa hoàn chỉnh vùng nhớ
    protected String color;

    
    // --- PHẦN 2: CONSTRUCTOR ---
    public Rectangle(double width, double height, String color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    
    // --- PHẦN 3: PHƯƠNG THỨC LẤY THÔNG TIN (GETTERS & CALCULATIONS) ---
    public double getWidth() {
        return width;
    }

    public double getHeight() {
        return height;
    }

    public String getColor() {
        return color;
    }

    public double getPerimeter() {
        return (width + height) * 2;
    }

    public double getArea() {
        return width * height;
    }

    
    // --- PHẦN 4: HIỂN THỊ THÔNG TIN VẼ HÌNH (PAINT) ---
    public void Paint() {
        String str = String.format("Rectangle|%5.2f|%5.2f|%-10s|%5.2f|%5.2f", 
                                  width, height, color, getPerimeter(), getArea());
        System.out.println(str);
    }
}
