/* =========================================================================
   LÝ THUYẾT CHUYÊN SÂU: BẢN CHẤT BẤT BIẾN (IMMUTABLE) & STRING POOL
   =========================================================================
   
   1. TÍNH BẤT BIẾN THIÊN (IMMUTABILITY):
      - Trong Java, String là ĐỐI TƯỢNG BẤT BIẾN. Một khi đã được tạo ra, giá trị bên trong không bao giờ có thể thay đổi được nữa.
      - Mọi phương thức như `concat()`, `toUpperCase()`, `replace()` KHÔNG sửa đổi chuỗi gốc, mà tạo ra và TRẢ VỀ MỘT CHUỖI MỚI HOÀN TOÀN.
      
   2. VÙNG NHỚ ĐỆM STRING POOL (INTERN POOL):
      - Là một vùng nhớ đặc biệt trong Heap dành riêng cho String nhằm tối ưu bộ nhớ.
      - Khi tạo chuỗi bằng Literal (ví dụ `String s1 = "A"`), Java sẽ kiểm tra xem "A" đã có trong Pool chưa:
        + Nếu chưa có: Tạo mới một object "A" trong Pool.
        + Nếu đã có rồi: KHÔNG tạo mới, cho `s1` trỏ thẳng tới object có sẵn.
      - Đó là lý do `s1 == s2` sẽ bằng TRUE nếu cả hai cùng tạo theo dạng literal và có giá trị giống nhau.
      - Ngược lại, nếu dùng từ khóa `new` (ví dụ `String s3 = new String("A")`), Java bị ép buộc TẠO MỚI VÙNG NHỚ MỚI BÊN NGOÀI POOL.
   ========================================================================= */

package runtime;

import java.util.StringTokenizer;

public class Program {
    public static void main(String[] args) {
        System.out.println("=== JAVA CORE: STRING IMMUTABILITY & STRING POOL ===\n");

        // --- PHẦN 1: BẢN CHẤT BẤT BIẾN THIÊN (IMMUTABLE) ---
        String fullName = "Nguyen Van A";
        
        // Hãy cẩn thận: Lệnh dưới đây KHÔNG LÀM THAY ĐỔI biến fullName!
        fullName.toUpperCase(); 
        System.out.println("1. Sau toUpperCase() nhung ko gan lai: " + fullName); // Vẫn là "Nguyen Van A"
        
        // Muốn nhận sự thay đổi, ta PHẢI hứng lấy sản phẩm mới trả về:
        fullName = fullName.toUpperCase();
        System.out.println("2. Sau khi gan lai ket qua moi: " + fullName); // Mới biến thành "NGUYEN VAN A"


        // --- PHẦN 2: VŨ TRỤ STRING POOL VÀ CÁC PHÉP SO SÁNH ---
        String s1 = "Hello"; // Tạo trong String Pool
        String s2 = "Hello"; // Java thấy đã có "Hello", cho s2 xài chung Pool luôn!
        
        String s3 = new String("Hello"); // Ép buộc tạo object hoàn toàn mới bên ngoài Pool
        String s4 = new String("Hello"); // Ép buộc tạo thêm một object khác nữa!
        
        System.out.println("\n3. PHÂN TÍCH BẰNG PHÉP TOÁN SO SÁNH ĐỊA CHỈ (==):");
        System.out.println("-> s1 == s2? " + (s1 == s2)); // TRUE! Vì chúng xài chung 1 địa chỉ trong Pool.
        System.out.println("-> s1 == s3? " + (s1 == s3)); // FALSE! 1 thằng trong Pool, 1 thằng ngoài Heap.
        System.out.println("-> s3 == s4? " + (s3 == s4)); // FALSE! Hai object new độc lập hoàn toàn.
        
        System.out.println("\n4. PHÉP SO SÁNH GIÁ TRỊ CHUẨN MỰC (.equals()):");
        System.out.println("-> s1.equals(s3)? " + s1.equals(s3)); // TRUE! So sánh nội dung con chữ.


        // --- PHẦN 3: CÔNG CỤ BĂM/TÁCH CHUỖI (STRING TOKENIZER) ---
        System.out.println("\n5. THỰC HÀNH CẮT TÁCH CHUỖI (TOKENIZING):");
        String csvData = "SE123|Nghia Duong|2005|9.5"; // Chuỗi dữ liệu thô phân tách bằng dấu '|'
        
        // Khởi tạo công cụ Tokenizer, định nghĩa bộ tách là "|"
        StringTokenizer tokenizer = new StringTokenizer(csvData, "|");
        
        System.out.println("- So luong manh vun hien co: " + tokenizer.countTokens());
        
        // Sử dụng While loop cùng logic "hasMoreTokens" để quét hết
        int count = 1;
        while (tokenizer.hasMoreTokens()) {
            String token = tokenizer.nextToken(); // Hốt mảnh vụn hiện tại và chuyển trỏ đến mảnh tiếp theo
            System.out.println("  + Manh " + count + ": " + token);
            count++;
        }
    }
}
