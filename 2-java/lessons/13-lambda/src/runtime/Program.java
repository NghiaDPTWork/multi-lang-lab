/* =========================================================================
   BIỂU THỨC LAMBDA VÀ HÀM CHỨC NĂNG (LAMBDA EXPRESSION IN JAVA 8+)
   =========================================================================
   
   KIẾN THỨC TIÊN QUYẾT:
   1. @FunctionalInterface (Giao diện chức năng): Là một Interface đặc biệt,
      NÓ CHỈ ĐƯỢC PHÉP CHỨA DUY NHẤT MỘT PHƯƠNG THỨC TRỪU TƯỢNG (Abstract Method).
   2. Lambda: Là cú pháp siêu tối giản (Syntactic Sugar) dùng để thay thế hoàn toàn 
      cho cách viết Anonymous Class rườm rà, giúp code gọn nhẹ và thanh thoát hơn!
   ========================================================================= */

package runtime;

// 1. KHAI BÁO MỘT FUNCTIONAL INTERFACE
@FunctionalInterface
interface MathOperation {
    // Giao kèo duy nhất: Nhận 2 số nguyên, trả về 1 kết quả nguyên
    int execute(int a, int b); 
}

public class Program {

    public static void main(String[] args) {
        System.out.println("=== KHAM PHA SUC MANH CUA BIEU THUC LAMBDA ===\n");

        // ---------------------------------------------------------------------
        // CÁCH 1: DÙNG ANONYMOUS CLASS TRUYỀN THỐNG (DÀI DÒNG)
        // ---------------------------------------------------------------------
        MathOperation plusOldStyle = new MathOperation() {
            @Override
            public int execute(int a, int b) {
                return a + b;
            }
        };
        System.out.println("Cach cu -> 5 + 10 = " + plusOldStyle.execute(5, 10));


        // ---------------------------------------------------------------------
        // CÁCH 2: DÙNG LAMBDA CƠ BẢN (VẪN CÓ CẶP NGOẶC NHỌN {})
        // ---------------------------------------------------------------------
        MathOperation minusLambda = (a, b) -> {
            System.out.println("...Dang thuc hien phep tinh tru...");
            return a - b; 
        };
        System.out.println("Lambda co ban -> 20 - 7 = " + minusLambda.execute(20, 7));


        // ---------------------------------------------------------------------
        // CÁCH 3: SIÊU CẤP TỐI GIẢN (SINGLE LINE LAMBDA)
        // Nếu chỉ có 1 dòng trả về: BỎ LUÔN { }, BỎ LUÔN TỪ KHÓA return!
        // ---------------------------------------------------------------------
        MathOperation multiplyLambda = (a, b) -> a * b; 
        
        System.out.println("Lambda rut gon -> 5 * 4 = " + multiplyLambda.execute(5, 4));
        
        
        // ---------------------------------------------------------------------
        // CÁCH 4: TÍNH NĂNG CHIA (ỨNG DỤNG NHANH GỌN)
        // ---------------------------------------------------------------------
        MathOperation divideLambda = (a, b) -> b != 0 ? a / b : 0;
        System.out.println("Lambda dieu kien -> 100 / 4 = " + divideLambda.execute(100, 4));


        System.out.println("\n=> KET LUAN: Lambda khong phai phep mau, no chi la cah viet rut gon");
        System.out.println("   cho Anonymous Class khi dung cho FunctionalInterface ma thoi!");
    }
}

/*
   NOTE MỞ RỘNG: 
   - Inner Class (Lớp lồng): Class nằm trong 1 Class khác.
   - File Java có thể chứa nhiều class bên ngoài (như Human dưới đây), 
     nhưng chỉ DUY NHẤT class trùng tên file mới được để public.
*/
class Human {
    String name;
}
