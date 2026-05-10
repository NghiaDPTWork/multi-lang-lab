/* =========================================================================
   LỚP TRỪU TƯỢNG NỀN TẢNG: ĐỘNG VẬT ĂN CỎ (ABSTRACT CLASS HERBIVORE)
   =========================================================================
   
   TƯ DUY HỌC THUẬT:
   1. Keyword `abstract`: Dùng cho class không có thực (chung chung). Không thể dùng 
      lệnh `new` để trực tiếp tạo ra một "Động vật ăn cỏ" thuần túy.
   2. Abstract Method: Phương thức KHÔNG CÓ BODY (nội dung). Ép buộc các lớp con 
      phải tự định nghĩa cách hành xử riêng. Giúp tránh việc cha áp đặt hành vi 
      lên con cái một cách khiên cưỡng.
   ========================================================================= */

package data;

public abstract class Herbivore {
    
    protected String name;
    protected String yob;
    protected double weight;

    // Constructor cho phép lớp con tái sử dụng (super)
    public Herbivore() {
    }

    public Herbivore(String name, String yob, double weight) {
        this.name = name;
        this.yob = yob;
        this.weight = weight;
    }

    // --- CÁC PHƯƠNG THỨC TRỪU TƯỢNG ---
    
    // 1. Mỗi loài động vật sẽ có phương pháp học (Study) riêng biệt mang về điểm số
    public abstract double study(); 
    
    // 2. Mỗi loài có cách in ấn thông tin định dạng riêng biệt
    public abstract void showInfor();
    
}
