/* =========================================================================
   LÝ THUYẾT CHUYÊN SÂU: WRAPPER CLASS, BOXING VÀ UNBOXING TRONG JAVA
   =========================================================================
   
   1. SỰ KHÁC BIỆT CƠ BẢN:
      - Primitive (Nguyên thủy): int, float, char... Lưu trực tiếp giá trị. Nhẹ, tiết kiệm bộ nhớ. Không chấm (.) để gọi phương thức được.
      - Wrapper Class (Lớp bao bọc): Integer, Float, Character... Là Đối tượng (Object) bao bọc giá trị nguyên thủy. Có các phương thức xử lý (toString, compareTo...).
      
   2. CƠ CHẾ BOXING & UNBOXING:
      - Boxing: Đóng gói Primitive thành Object (ví dụ: `Integer num = new Integer(10)`).
      - Unboxing: Mở gói Object để lấy giá trị core bên trong.
      - Auto-Boxing/Unboxing (Từ Java 5): Tự động chuyển đổi qua lại giữa `int` và `Integer` một cách thông minh và mượt mà.

   3. LƯU Ý QUAN TRỌNG KHI SO SÁNH (== vs equals):
      - Dùng `==` với Primitive: So sánh trực tiếp GIÁ TRỊ.
      - Dùng `==` với Wrapper: So sánh ĐỊA CHỈ TRỎ đến vùng nhớ (Hai đối tượng new riêng biệt sẽ luôn trả về false dù cùng giá trị).
      - Giải pháp an toàn: Luôn dùng phương thức `.equals()` để so sánh giá trị core bên trong 2 Wrapper Objects.
   ========================================================================= */

package runtime;

public class Program {
    
    public static void main(String[] args) {
        System.out.println("=== JAVA CORE: WRAPPER CLASS DEMONSTRATION ===\n");

        // --- PHẦN 1: SO SÁNH PRIMITIVE VÀ WRAPPER CLASS ---
        int a = 10; // int - primitive datatype (Chỉ lưu thuần 10, ko có chấm gì cả)
        
        Integer b = new Integer(10); // Explicit Boxing (Tường minh đóng gói)
        // Lúc này 'b' là một con trỏ, đang trỏ tới 1 vùng nhớ heap chứa lõi là số 10 
        // kèm theo hàng tá các tool/methods đi kèm để xử lý con số đó.

        System.out.println("1. Giá trị của primitive a: " + a);
        System.out.println("2. Giá trị của Wrapper b (Auto-Unboxing): " + b);
        System.out.println("3. Chuyển Wrapper b sang văn bản: " + b.toString());


        // --- PHẦN 2: CƠ CHẾ AUTO-BOXING / UNBOXING ---
        Integer d = 2000; // Cú pháp viết tắt thần thánh (Auto-Boxing)
        int c = d;       // Tự động bóc vỏ để lấy 2000 gán vào primitive (Auto-Unboxing)
        
        System.out.println("\n4. Minh họa Auto-unboxing c = d: " + c);


        // --- PHẦN 3: CẠM BẪY SO SÁNH ĐỊA CHỈ (IMPORTANT!) ---
        Integer num1 = new Integer(2026);
        Integer num2 = new Integer(2026);
        
        System.out.println("\n5. PHÂN TÍCH SO SÁNH TRÊN WRAPPER CLASS:");
        
        // So sánh == giữa 2 đối tượng -> So sánh địa chỉ vùng nhớ!
        System.out.print("-> Dùng num1 == num2? ");
        System.out.println(num1 == num2); // KẾT QUẢ: FALSE vì 2 lệnh new tạo 2 vùng nhớ khác nhau hoàn toàn!

        // Muốn so sánh LÕI GIÁ TRỊ bên trong đối tượng, PHẢI dùng .equals()
        System.out.print("-> Dùng num1.equals(num2)? ");
        System.out.println(num1.equals(num2)); // KẾT QUẢ: TRUE (So sánh 2026 vs 2026)


        // --- PHẦN 4: CÁC TIỆN ÍCH CỦA WRAPPER (PARSE, MIN/MAX) ---
        System.out.println("\n6. TIỆN ÍCH CỦA WRAPPER CLASS:");
        System.out.println("- Số INT lớn nhất có thể chứa: " + Integer.MAX_VALUE);
        
        String moneyStr = "500000";
        // Dùng static method của Wrapper để biến chuỗi thành số!
        int money = Integer.parseInt(moneyStr); 
        System.out.println("- Chuyển đổi chuỗi '" + moneyStr + "' thành số: " + money);
    }
}
