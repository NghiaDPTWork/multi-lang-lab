/* =========================================================================
   HỆ THỐNG BÀI HỌC: NGUYÊN TẮC THIẾT KẾ THUỘC TÍNH (OOP ATOMIC DESIGN) & STATIC FINAL
   =========================================================================
   
   1. NGUYÊN TẮC THUỘC TÍNH NGUYÊN TỬ (ATOMIC DESIGN PRINCIPLE / ACID ATOMICITY)
      - Trong lập trình hướng đối tượng và cơ sở dữ liệu, ta chỉ nên lưu trữ những thuộc tính ở dạng nguyên tử (Atomic properties) - tức là không còn khả năng phân tách nhỏ hơn được nữa.
      - Ví dụ: Giữa "Bán kính" (Radius) và "Đường kính" (Diameter), ta chọn lưu "Bán kính" vì đường kính hoàn toàn có thể tính được bằng `Radius * 2`. Lưu trữ cả hai sẽ dẫn đến dư thừa dữ liệu và nguy cơ bất đồng bộ dữ liệu.

   2. HẰNG SỐ TOÀN CỤC VỚI 'public static final'
      - `public static final double PI = 3.14;`
        + `public`: Ai cũng có thể truy cập.
        + `static`: Thuộc sở hữu của Class, mọi đối tượng dùng chung một vùng nhớ duy nhất, tránh lãng phí RAM.
        + `final`: Hằng số không thể thay đổi giá trị sau khi gán.
   ========================================================================= */

package data;

public class Disk {
    
    // --- PHẦN 1: THUỘC TÍNH NGUYÊN TỬ (ATOMIC PROPERTIES) ---
    private double radius;
    private String color;
    
    // Hằng số PI dùng chung cho toàn bộ Class Disk
    public static final double PI = 3.14;

    
    // --- PHẦN 2: CONSTRUCTOR ---
    public Disk(double radius, String color) {
        this.radius = radius;
        this.color = color;
    }

    
    // --- PHẦN 3: GETTERS ---
    public double getRadius() {
        return radius;
    }

    public String getColor() {
        return color;
    }

    // Chu vi hình tròn: 2 * PI * r
    public double getPerimeter() {
        return 2 * PI * radius;
    }

    // Diện tích hình tròn: PI * r^2
    public double getArea() {
        return PI * radius * radius;
    }

    
    // --- PHẦN 4: HIỂN THỊ THÔNG TIN VẼ HÌNH (PAINT) ---
    public void Paint() {
        String str = String.format("Disk    |%11.2f|%-10s|%5.2f|%5.2f", 
                                  radius, color, getPerimeter(), getArea());
        System.out.println(str);
    }
}
