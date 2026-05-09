/* =========================================================================
   HỆ THỐNG BÀI HỌC: THUỘC TÍNH DẪN XUẤT & ĐỊNH DẠNG CHUỖI TRONG JAVA
   =========================================================================
   
   1. NGUYÊN TẮC THUỘC TÍNH DẪN XUẤT (DERIVED PROPERTIES)
      - KHÔNG nên tạo các thuộc tính lưu trữ cho các giá trị có thể suy ra trực tiếp từ các thuộc tính khác (ví dụ: chu vi, diện tích được suy ra từ ba cạnh).
      - Lý do:
        + Nếu tạo thuộc tính độc lập, ta sẽ cần viết Getter/Setter cho chúng. Việc set trực tiếp các giá trị này (như set chu vi) mà không đổi các cạnh là không có ý nghĩa toán học.
        + Khi một thuộc tính cơ sở (cạnh tam giác) thay đổi, giá trị của chu vi và diện tích lưu trữ sẽ bị cũ (stale data), bắt buộc phải tính toán lại thủ công rất phức tạp.
      - Giải pháp: Chỉ lưu trữ các thuộc tính cơ sở bền vững, còn các thông tin dẫn xuất sẽ được tính toán trực tiếp "on-the-fly" thông qua các phương thức Getter (ví dụ `getPerimeter()` và `getArea()`).

   2. ĐỊNH DẠNG CHUỖI (STRING FORMATTING)
      - Sử dụng `String.format()` để tạo ra chuỗi định dạng đẹp mắt theo các cột hàng lối cố định:
        + `%5.2f` nghĩa là: In ra số thực float/double chiếm tổng cộng ít nhất 5 khoảng trống trên màn hình, trong đó lấy chính xác 2 chữ số sau dấu thập phân.
   ========================================================================= */

package data;

public class Triangle {
    
    // --- PHẦN 1: THUỘC TÍNH CƠ SỞ (BASE PROPERTIES WITH PROTECTED SCOPE) ---
    // protected cho phép lớp con kế thừa có thể truy cập trực tiếp
    protected double edgeA;
    protected double edgeB;
    protected double edgeC;

    
    // --- PHẦN 2: CONSTRUCTOR (HÀM KHỞI TẠO TAM GIÁC) ---
    public Triangle(double edgeA, double edgeB, double edgeC) {
        this.edgeA = edgeA;
        this.edgeB = edgeB;
        this.edgeC = edgeC;
    }
    
    
    // --- PHẦN 3: PHƯƠNG THỨC TÍNH TOÁN ON-THE-FLY (DERIVED METHOD GETTERS) ---
    public double getEdgeA() {
        return edgeA;
    }

    public double getEdgeB() {
        return edgeB;
    }

    public double getEdgeC() {
        return edgeC;
    }
    
    // Chu vi tính nhanh dựa trên 3 cạnh hiện hành
    public double getPerimeter() {
        return edgeA + edgeB + edgeC;
    }
    
    // Diện tích tính theo công thức Heron kinh điển: sqrt(p * (p-a) * (p-b) * (p-c))
    public double getArea() {
        double p = this.getPerimeter() / 2; // Nửa chu vi
        return Math.sqrt(p * (p - edgeA) * (p - edgeB) * (p - edgeC));
    }
    
    
    // --- PHẦN 4: HIỂN THỊ THÔNG TIN ĐƯỢC ĐỊNH DẠNG (FORMATTED OUTPUT) ---
    public void showInfor() {
        String str = String.format("Triangle     |%5.2f|%5.2f|%5.2f|%5.2f|%5.2f|",
                                    edgeA, edgeB, edgeC, getPerimeter(), getArea());
        System.out.println(str);
    }
}
