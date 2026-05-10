/* =========================================================================
   ĐIỀU HÀNH LỚP HỌC MUÔN LOÀI (THE WILD CLASSROOM - V1)
   =========================================================================
   
   CÁC KỸ THUẬT ĐƯỢC TRÌNH DIỄN:
   1. Đa hình (Polymorphism): Một mảng kiểu Cha (`ArrayList<Herbivore>`) có thể chứa 
      vô số các loại thực thể con cái khác nhau (Monkey, Horse...).
   2. Anonymous Class (Lớp vô danh): Cách khởi tạo trực tiếp Abstract Class khi bí bách 
      ngay tại thời điểm chạy mà không cần tạo file code riêng biệt.
   3. VẤN ĐỀ NẢY SINH (PROBLEM SETTING): Việc không thể nhét một thực thể không cùng 
      huyết thống (Hunter) vào chung một giỏ hàng. Mở đường cho bài học INTERFACE!
   ========================================================================= */

package runtime;

import data.Herbivore;
import data.Horse;
import data.Monkey;
import data.Hunter;
import java.util.ArrayList;

public class Program {

    public static void main(String[] args) {
        System.out.println("=== CHAO MUNG DEN VOI LOP HOC TRU TUONG V1 ===\n");

        // 1. Tạo ra các bạn học sinh động vật riêng lẻ
        Monkey m1 = new Monkey("KingKong JR", "2002", 120.5);
        Monkey m2 = new Monkey("Abu Aladdin", "1992", 15.0);

        Horse h1 = new Horse("White Pearl", "2010", 350.0, "Gold");
        Horse h2 = new Horse("Shadowfax", "2000", 400.0, "Silver");

        // 2. Khởi tạo chiếc túi thần kỳ của Cha (Chứa được mọi loài con cháu)
        ArrayList<Herbivore> classList = new ArrayList<>();
        
        classList.add(m1);
        classList.add(m2);
        classList.add(h1);
        classList.add(h2);


        // 3. BIỂU DIỄN KỸ THUẬT ANONYMOUS CLASS (Mượn gió bẻ măng)
        // Tạo ra một con vật không rõ lai lịch (VD: Con lười) ngay tại đây luôn!
        Herbivore anonymousBeast = new Herbivore("Con Luoi Bi An", "2024", 25.0) {
            @Override
            public double study() {
                return 1.5; // Lười thì học được có nhiêu đây thôi!
            }

            @Override
            public void showInfor() {
                System.out.printf("| UNKNOWN    | %-15s | %4s | %6.2f kg | Score: %5.2f | ANONYMOUS! |\n",
                                  name, yob, weight, study());
            }
        };
        
        classList.add(anonymousBeast); // Vẫn chui lọt vào danh sách bình thường!


        // 4. VẬN HÀNH VÀ ĐIỂM DANH CẢ LỚP HỌC
        System.out.println("--------------------------- DANH SACH DIEM DANH CUOI NAM ---------------------------");
        for (Herbivore pet : classList) {
            // Tính đa hình tuyệt đẹp: Cùng 1 câu lệnh, nhưng mỗi đứa ra kết quả riêng biệt
            pet.showInfor(); 
        }
        System.out.println("------------------------------------------------------------------------------------\n");


        // 5. VẤN ĐỀ NAN GIẢI TRUYỀN KỲ:
        System.out.println(">>> TINH HUONG MO RONG:");
        Hunter ranger = new Hunter("Mr. Smith", "1985", 75.0, "Ak-47");
        System.out.println("Bác thợ săn muốn đăng ký học:");
        ranger.showInfor();

        // LỆNH DƯỚI ĐÂY SẼ GÂY LỖI BIÊN DỊCH (COMPILED ERROR)! 
        // classList.add(ranger); // <--- BỎ COMMENT SẼ ĐỎ NGAY!
        
        System.out.println("-> KET LUAN: Khong the add Hunter vao ClassList vi khac huyet thong voi Herbivore.");
        System.out.println("-> GIAI PHAP: Phai cho doi kien thuc INTERFACE o bai tiep theo de hop nhat!");
    }
}
