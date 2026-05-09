/* =========================================================================
   THỬ THÁCH THỰC HÀNH JAVA: THIẾT KẾ HỆ THỐNG PHÒNG KHÁM THÚ CƯNG (PET CLINIC)
   =========================================================================
   
   BỐI CẢNH ĐỀ BÀI:
   Bạn được giao nhiệm vụ thiết kế lõi hệ thống quản lý danh sách thú cưng cho 
   một phòng khám thú y. Tất cả thú cưng đều có tên, tuổi và một hành vi 
   phát ra tiếng kêu đặc trưng khi bác sĩ khám bệnh.
   
   YÊU CẦU ĐỀ BÀI:
   1. Đọc kỹ thiết kế của lớp trừu tượng `Pet.java` dưới đây.
   2. Tạo thêm hai lớp con kế thừa `Pet`:
      - Lớp `Dog`: Bổ sung thêm thuộc tính riêng `private String breed` (Giống chó).
        Đồng thời ghi đè (vá lỗ thủng) phương thức tiếng kêu `makeSound()` in ra "Gâu Gâu" 
        và phương thức `showInfor()` hiển thị đầy đủ thông tin (gồm cả giống chó).
      - Lớp `Cat`: Bổ sung thêm thuộc tính riêng `private String ribbonColor` (Màu nơ cổ).
        Đồng thời ghi đè phương thức `makeSound()` in ra "Meo Meo" và `showInfor()` 
        hiển thị đầy đủ thông tin (gồm cả màu nơ).
   3. Hoàn thiện lớp thực thi chính `Program.java` để:
      - Quản lý mảng đa hình chứa cả Chó, Mèo.
      - Sử dụng lớp vô danh (Anonymous Class) để khởi tạo một loài thú cưng huyền bí/quý hiếm 
        (ví dụ: Rồng lửa hoặc Phượng hoàng) trực tiếp mà không cần lập khuôn class riêng.
   ========================================================================= */

package data;

public abstract class Pet {
    
    protected String name;
    protected int age;

    // Constructor chung cho thú cưng
    public Pet(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    // --- PHƯƠNG THỨC TRỪU TƯỢNG (LỖ THỦNG CẦN CÁC LỚP CON VÁ) ---
    public abstract void makeSound();
    public abstract void showInfor();
}
