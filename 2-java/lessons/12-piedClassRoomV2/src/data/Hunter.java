/* =========================================================================
   THỰC THỂ DỊ BIỆT: THỢ SĂN GIA NHẬP HỘI (HUNTER IN THE CLUB)
   =========================================================================
   
   CƠ CHẾ HOẠT ĐỘNG MỚI:
   - Hunter KHÔNG kế thừa Herbivore (Hoàn toàn không có huyết thống động vật).
   - Nhưng Hunter `implements StudyEnthusiasts` (Chìa khóa vạn năng).
   - Nhờ đó, Hunter được phép đứng chung một Danh sách với các loài Ngựa chăm học!
   ========================================================================= */

package data;

import java.util.Random;

public class Hunter implements StudyEnthusiasts {
    
    private String name;
    private String yob;
    private double weight;
    private String gear; 

    public Hunter() {
    }

    public Hunter(String name, String yob, double weight, String gear) {
        this.name = name;
        this.yob = yob;
        this.weight = weight;
        this.gear = gear;
    }

    // 1. Phương thức riêng tư của loài người
    public double study() {
        Random rd = new Random();
        return rd.nextDouble() * 50.0;
    }

    // 2. TRIỂN KHAI BẮT BUỘC CỦA GIAO DIỆN (INTERFACE METHODS)
    @Override
    public double studyHard() {
        // Bác thợ săn cố gắng học chăm chỉ đạt hiệu năng vượt trội 1.5
        return this.study() * 1.5; 
    }

    @Override
    public void showHard() {
        String formatStr = String.format("| HUNTER*    | %-15s | %4s | %6.2f kg | HARD SCORE: %5.2f | GEAR: %-8s |",
                                          name, yob, weight, studyHard(), gear);
        System.out.println(formatStr);
    }
}
