/* =========================================================================
   HỆ THỐNG BÀI HỌC: LỚP TRỪU TƯỢNG (ABSTRACT CLASS) & PHƯƠNG THỨC TRỪU TƯỢNG
   =========================================================================
   
   1. BẢN CHẤT LỚP TRỪU TƯỢNG (ABSTRACT CLASS)
      - Lớp trừu tượng đóng vai trò là một bản mẫu thiết kế chung ở mức độ khái quát cao nhất.
      - Nó chỉ chứa các đặc tính và hành vi chung cho tất cả các lớp con, nhưng chưa thể định nghĩa cụ thể cho từng loại.
      - Ẩn dụ "Khuôn bị thủng": Bản thân lớp trừu tượng không thể dùng để khởi tạo đối tượng trực tiếp qua từ khóa `new` (ví dụ `new Shape(...)` thông thường sẽ bị lỗi biên dịch).

   2. PHƯƠNG THỨC TRỪU TƯỢNG (ABSTRACT METHODS)
      - Là các phương thức chỉ có tên hàm và chữ ký hàm mà không có thân hàm `{}` (được biểu thị bằng từ khóa `abstract`).
      - Tại sao cần phương thức trừu tượng?
        + Vì tất cả các hình học đều có hành vi tính chu vi, tính diện tích và vẽ hình. Tuy nhiên, không có một công thức toán học chung nào có thể áp dụng cho tất cả các loại hình (hình tròn tính khác hình tam giác).
        + Do đó, ta để trống thân hàm để các thế hệ lớp con kế thừa có trách nhiệm "vá lỗ thủng" bằng cách ghi đè và định nghĩa chi tiết.
   ========================================================================= */

package data;

public abstract class Shape {
    
    // --- PHẦN 1: THUỘC TÍNH CHUNG (PROTECTED MEMBERS) ---
    protected String owner;
    protected String color;

    
    // --- PHẦN 2: CONSTRUCTOR ---
    public Shape(String owner, String color) {
        this.owner = owner;
        this.color = color;
    }

    
    // --- PHẦN 3: GETTERS ---
    public String getOwner() {
        return owner;
    }

    public String getColor() {
        return color;
    }

    
    // --- PHẦN 4: CÁC PHƯƠNG THỨC TRỪU TƯỢNG (ABSTRACT METHODS - LỖ THỦNG) ---
    public abstract double getPerimeter();
    public abstract double getArea();
    public abstract void Paint();
}
