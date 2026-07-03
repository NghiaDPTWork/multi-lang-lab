/* =========================================================================
   THỬ THÁCH THỰC HÀNH JAVA: LỚP THỰC THI CHÍNH (PET CLINIC TEST PROGRAM)
   =========================================================================
   
   Nhiệm vụ của bạn:
   1. Đã có lớp trừu tượng `Pet.java`.
   2. Viết thêm hai lớp `Dog.java` và `Cat.java` kế thừa từ `Pet.java` vào chung gói `data` 
      (hoặc viết trực tiếp dạng class phụ ở dưới tệp tin này nếu muốn nhanh gọn).
   3. Thực hiện hoàn tất đoạn code khởi tạo mảng đa hình và lớp vô danh (Anonymous Class) 
      dưới đây để chạy chương trình kiểm thử!
   ========================================================================= */

package runtime;

import data.Pet;
// import data.Dog; // Mở ra sau khi bạn viết xong Dog class
// import data.Cat; // Mở ra sau khi bạn viết xong Cat class

public class Program {
    
    public static void main(String[] args) {
        
        System.out.println("=== THU THACH QUAN LY PHONG KHAM THU CUNG ===");
        
        // --- BƯỚC 1: KHỞI TẠO MẢNG ĐA HÌNH CHỨA 3 THÚ CƯNG ---
        // TODO: Mở mảng này ra và gán 1 chú Dog, 1 chú Cat vào sau khi hoàn thành class
        Pet[] clinicList = new Pet[3];
        
        // clinicList[0] = new Dog("KiKi", 3, "Poodle");
        // clinicList[1] = new Cat("MiuMiu", 2, "Pink Ribbon");
        
        
        // --- BƯỚC 2: SỬ DỤNG ANONYMOUS CLASS (LỚP VÔ DANH) ---
        // TODO: Hoàn thành khởi tạo thú cưng quý hiếm vô danh (ví dụ: Phượng hoàng hoặc Rồng lửa)
        // ngay tại chỗ mà không cần tạo class riêng
        Pet rarePet = new Pet("Rong Lua", 100) {
            @Override
            public void makeSound() {
                // TODO: Viết tiếng gầm rú của rồng tại đây
                System.out.println("GRAAAWWWRR! (Tieng thoi lua hung ton)");
            }

            @Override
            public void showInfor() {
                // TODO: Hiển thị thông tin rồng huyền thoại
                System.out.println("Thu cung quy hiem: " + name + " | Tuoi tho: " + age + " nam tuoi");
            }
        };
        
        clinicList[2] = rarePet; // Gán rồng vô danh vào vị trí thứ 3 trong mảng đa hình
        
        
        // --- BƯỚC 3: DUYỆT MẢNG VÀ PHÁT TIẾNG KÊU ---
        System.out.println("\n--- TIEN HANH THAM KHAM CHO CAC THU CUNG ---");
        for (Pet item : clinicList) {
            if (item != null) {
                item.showInfor();
                System.out.print("Tieng keu khi tham kham: ");
                item.makeSound();
                System.out.println("----------------------------------------");
            } else {
                System.out.println("[O trong] - Chua co thong tin thu cung!");
            }
        }
    }
}
