/* =========================================================================
   THỰC THỂ CON: NGỰA (HORSE CLASS)
   =========================================================================
   
   CƠ CHẾ HOẠT ĐỘNG:
   - Vừa kế thừa từ Herbivore, vừa sở hữu riêng thuộc tính màu yên (colorSaddle).
   - Tự định nghĩa riêng biệt trần khả năng tiếp thu (30%) để thể hiện tính đa hình.
   ========================================================================= */

package data;

import java.util.Random;

public class Horse extends Herbivore {
    
    private String colorSaddle; // Điểm nhấn riêng chỉ Ngựa mới có
    public static final double RECEPTIVE_LIMIT = 30.0; // Trần giới hạn trí nhớ Ngựa

    public Horse() {
    }

    public Horse(String name, String yob, double weight, String colorSaddle) {
        super(name, yob, weight); // Phần chung thì cha lo
        this.colorSaddle = colorSaddle; // Phần riêng thì con tự xử
    }

    @Override
    public double study() {
        Random rd = new Random();
        return rd.nextDouble() * RECEPTIVE_LIMIT;
    }

    @Override
    public void showInfor() {
        String formatStr = String.format("| HORSE      | %-15s | %4s | %6.2f kg | Score: %5.2f | Saddle: %-8s |",
                                          name, yob, weight, study(), colorSaddle);
        System.out.println(formatStr);
    }
}
