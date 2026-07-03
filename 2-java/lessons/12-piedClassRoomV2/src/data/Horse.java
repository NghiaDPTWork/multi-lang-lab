/* =========================================================================
   THỰC THỂ CON: NGỰA CHĂM CHỈ (HORSE WITH INTERFACE)
   =========================================================================
   
   CƠ CHẾ HOẠT ĐỘNG MỚI:
   - Vẫn kế thừa từ Herbivore (Cha đẻ sinh học).
   - Kèm theo đó `implements StudyEnthusiasts` (Gia nhập hội đồng học thuật).
   - Vừa phải override các hàm của cha, vừa phải override các hàm của Interface!
   ========================================================================= */

package data;

import java.util.Random;

public class Horse extends Herbivore implements StudyEnthusiasts {
    
    private String colorSaddle;
    public static final double RECEPTIVE_LIMIT = 30.0;

    public Horse() {
    }

    public Horse(String name, String yob, double weight, String colorSaddle) {
        super(name, yob, weight);
        this.colorSaddle = colorSaddle;
    }

    // --- 1. NHÓM TRIỂN KHAI CHO CHA (HERBIVORE) ---
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

    // --- 2. NHÓM TRIỂN KHAI CHO INTERFACE (STUDY ENTHUSIASTS) ---
    @Override
    public double studyHard() {
        // Khi chăm chỉ thì điểm số gấp 1.5 lần bình thường!
        return this.study() * 1.5; 
    }

    @Override
    public void showHard() {
        String formatStr = String.format("| HORSE*     | %-15s | %4s | %6.2f kg | HARD SCORE: %5.2f | [ENTHUSIAST] |",
                                          name, yob, weight, studyHard());
        System.out.println(formatStr);
    }
}
