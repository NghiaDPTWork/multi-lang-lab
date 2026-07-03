/* =========================================================================
   ĐỐI TƯỢNG DỊ BIỆT: THỢ SĂN (HUNTER CLASS)
   =========================================================================
   
   VAI TRÒ GIÁO TRÌNH:
   Lớp này đại diện cho một "Kẻ đột nhập" không thuộc hệ thống sinh thái `Herbivore`.
   Mặc dù thợ săn cũng có `name`, `yob` và cũng có phương thức `study()` (học tập), 
   nhưng về mặt cốt lõi anh ta KHÔNG PHẢI là Động vật ăn cỏ. 
   => Điều này dẫn tới lỗi không thể xếp chung vào một ArrayList<Herbivore>!
   ========================================================================= */

package data;

import java.util.Random;

public class Hunter {
    
    private String name;
    private String yob;
    private double weight;
    private String gear; // Trang bị đi kèm (Ví dụ: Nỏ, Cung)

    public Hunter() {
    }

    public Hunter(String name, String yob, double weight, String gear) {
        this.name = name;
        this.yob = yob;
        this.weight = weight;
        this.gear = gear;
    }

    public double study() {
        Random rd = new Random();
        return rd.nextDouble() * 50.0; // Khả năng học hỏi trung bình 50%
    }

    public void showInfor() {
        String formatStr = String.format("| HUNTER     | %-15s | %4s | %6.2f kg | Score: %5.2f | Gear: %-10s |",
                                          name, yob, weight, study(), gear);
        System.out.println(formatStr);
    }
}
