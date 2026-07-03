/* =========================================================================
   VŨ TRỤ KẾT NỐI VẠN VẬT (THE CONNECTED UNIVERSE - V2)
   =========================================================================
   
   CHIẾN THẮNG CỦA HỌC THUẬT:
   1. GIẢI CỨU BẾ TẮC: Đưa Ngựa (Động vật) và Thợ Săn (Con người) về chung một nhà 
      bằng cách khai báo Mảng kiểu Interface `ArrayList<StudyEnthusiasts>`.
   2. KỸ THUẬT CASTING (ÉP KIỂU NGƯỢC): Hướng dẫn truy xuất lại nguồn gốc thật sự 
      của một biến khi nó đang ẩn mình dưới dạng Interface.
   3. SIÊU SỨC MẠNH CỦA ANONYMOUS CLASS: Tạo ra một thành viên hội bí ẩn (Ví dụ: Con Lười)
      trực tiếp từ chiếc khung Interface, biến lý thuyết thành thực tiễn đỉnh cao.
   ========================================================================= */

package runtime;

import data.Herbivore;
import data.Horse;
import data.Monkey;
import data.Hunter;
import data.StudyEnthusiasts;
import java.util.ArrayList;

public class Program {

    public static void main(String[] args) {
        System.out.println("=== CHAO MUNG DEN VOI HOI NHUNG NGUOI HAM HOC (V2) ===\n");

        // 1. KHỞI TẠO CÁC NHÂN VẬT TÀI NĂNG
        Monkey m1 = new Monkey("Rafiki", "1998", 210.0); // Khỉ: KHÔNG gia nhập hội!
        
        Horse h1 = new Horse("White Pearl", "2010", 350.0, "Gold");
        Herbivore h2 = new Horse("Shadowfax", "2000", 400.0, "Silver"); // Ngựa ẩn mình trong lớp Cha

        Hunter ranger1 = new Hunter("Mr. Smith", "1985", 75.0, "Ak-47");
        Hunter ranger2 = new Hunter("Legolas", "1999", 60.0, "LongBow");


        // 2. BẢN HỢP NHẤT LỊCH SỬ: Mảng chung dựa trên CHIẾC THẺ THÀNH VIÊN (Interface)
        ArrayList<StudyEnthusiasts> enthusiastClub = new ArrayList<>();
        
        // Hợp pháp 100% vì cả hai đều Implements StudyEnthusiasts!
        enthusiastClub.add(h1); 
        enthusiastClub.add((Horse)h2); // Kỹ thuật Casting: Ép cha Herbivore xuống con Horse để lòi ra Interface!
        
        enthusiastClub.add(ranger1);
        enthusiastClub.add(ranger2);
        
        // monkeyList.add(m1); // CÂU LỆNH NÀY SẼ BÁO ĐỎ GAY GẮT! Vì Khỉ không có thẻ thành viên!


        // 3. XUẤT HIỆN THÀNH VIÊN BÍ ẨN (ANONYMOUS OBJECT)
        // Bất ngờ có "Thần Đồng Gấu Trúc" lướt qua xin nhập học cấp tốc:
        StudyEnthusiasts masterKungfu = new StudyEnthusiasts() {
            @Override
            public double studyHard() {
                return 100.0; // Học siêu chăm chỉ!
            }

            @Override
            public void showHard() {
                System.out.println("| PANDA*     | Master Po       | ???? |   ??? kg | HARD SCORE: 100.00 | ANONYMOUS LEGEND! |");
            }
        };
        
        enthusiastClub.add(masterKungfu); // Siêu phàm chưa, add vào chung mảng mượt mà!


        // 4. VẬN HÀNH VÀ ĐIỂM DANH CÂU LẠC BỘ
        System.out.println("----------------------------- DANH SACH HOC VIEN CHUAN QUOC TE -----------------------------");
        
        for (StudyEnthusiasts member : enthusiastClub) {
            // Không cần quan tâm đó là Ngựa hay Người, chỉ cần biết họ đều có năng lực 'showHard()'
            member.showHard(); 
        }
        
        System.out.println("--------------------------------------------------------------------------------------------\n");
        System.out.println(">> PHUONG CHAM CHUNG CUA HOI: " + StudyEnthusiasts.COMMON_MOTIVATION);
    }
}
