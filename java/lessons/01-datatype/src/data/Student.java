/* =========================================================================
   HỆ THỐNG BÀI HỌC: MINH HỌA KIỂU DỮ LIỆU THAM CHIẾU (REFERENCE DATATYPE)
   =========================================================================
   
   1. BẢN CHẤT CỦA KIỂU THAM CHIẾU (REFERENCE TYPE)
      - Khác với kiểu nguyên thủy (Primitive Type) chỉ lưu trữ trực tiếp một giá trị đơn thuần trong bộ nhớ Stack, kiểu tham chiếu (Reference Type) do người dùng định nghĩa chứa nhiều thông tin và cấu trúc phức tạp hơn.
      - Đối tượng thực sự sẽ được đúc và lưu trên bộ nhớ Heap.
      - Biến được khai báo kiểu `Student` thực chất chỉ lưu địa chỉ ô nhớ (con trỏ) trỏ đến đối tượng thực tế trên Heap.
   ========================================================================= */

package data;

public class Student {
    
    private String name;
    private int age;
    private double gpa;

    // Constructor đúc học sinh
    public Student(String name, int age, double gpa) {
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }

    // Hiển thị thông tin sinh viên
    public void showInfor() {
        System.out.println("Sinh vien: " + this.name + " | Tuoi: " + this.age + " | GPA: " + this.gpa);
    }
}
