/* =========================================================================
   THỰC THỂ CON: KHỈ (MONKEY CLASS)
   =========================================================================
   
   CƠ CHẾ HOẠT ĐỘNG:
   - Kế thừa `Herbivore` nên có sẵn Name, Yob, Weight.
   - Bắt buộc PHẢI Override 2 phương thức trừu tượng (study() và showInfor()).
   ========================================================================= */

package data;

import java.util.Random;

public class Monkey extends Herbivore {
    
    // Hằng số giới hạn khả năng tiếp thu kiến thức của loài Khỉ (tối đa 70%)
    public static final double RECEPTIVE_LIMIT = 70.0;

    public Monkey() {
    }

    public Monkey(String name, String yob, double weight) {
        super(name, yob, weight); // Nhờ cha khởi tạo giùm 3 thuộc tính cơ bản
    }

    // Định nghĩa cách Khỉ tham gia học tập (Bắt chước - Mimicry)
    @Override
    public double study() {
        Random rd = new Random();
        // Trả về kết quả ngẫu nhiên dựa trên giới hạn trần của loài
        return rd.nextDouble() * RECEPTIVE_LIMIT; 
    }

    @Override
    public void showInfor() {
        // Sử dụng String.format để gom chuỗi cực kỳ ngăn nắp trước khi in
        String formatStr = String.format("| MONKEY     | %-15s | %4s | %6.2f kg | Score: %5.2f |",
                                          name, yob, weight, study());
        System.out.println(formatStr);
    }
}
