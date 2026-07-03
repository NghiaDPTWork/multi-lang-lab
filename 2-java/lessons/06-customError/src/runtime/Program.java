/* =========================================================================
   HỆ THỐNG BÀI HỌC: BIỂU THỨC CHÍNH QUY (REGEX) & XỬ LÝ NGOẠI LỆ (EXCEPTION)
   =========================================================================
   
   I - BIỂU THỨC CHÍNH QUY (REGULAR EXPRESSION - REGEX)
       Regex là một chuỗi ký tự đặc biệt đóng vai trò làm mẫu (pattern) giúp kiểm tra xem
       một chuỗi văn bản đầu vào có khớp đúng cấu trúc mong muốn hay không.
       
       1. Ký tự cố định: Khớp chính xác từng ký tự (phân biệt hoa thường).
          - Thêm tiền tố `(?i)` ở đầu để không phân biệt chữ hoa hay chữ thường (ví dụ: `(?i)name` khớp `"NaMe"`).
       
       2. Dấu chấm `.`: Khớp với đúng 1 ký tự bất kỳ (ngoại trừ dấu xuống dòng Enter).
          - Ví dụ: `m.y` khớp `"may"`, `"mey"` nhưng KHÔNG khớp `"maay"` hay `"my"`.
       
       3. Dấu sao `*`: Cho phép ký tự đứng trước lặp lại từ 0 đến vô hạn lần (Unlimited).
          - Ví dụ: `me*y` khớp `"my"`, `"mey"`, `"meey"`.
       
       4. Dấu hỏi chấm `?`: Cho phép ký tự đứng trước lặp lại đúng 0 hoặc 1 lần.
          - Ví dụ: `me?y` khớp `"my"` hoặc `"mey"` nhưng KHÔNG khớp `"meey"`.
          
       5. Bộ tập hợp `[...]` (Set): Khớp duy nhất 1 ký tự nằm trong tập hợp.
          - Ví dụ: `m[abc]y` chỉ chấp nhận chữ `a`, `b`, hoặc `c` ở giữa (khớp `"may"`, `"mby"`).
          - Phủ định `[^...]`: Khớp ký tự KHÔNG nằm trong tập hợp (ví dụ: `m[^abc]y` từ chối `"may"`, chấp nhận `"mdy"`).
          
       6. Các dải ký tự phổ biến:
          - `[a-z]`: 1 ký tự chữ thường từ a đến z.
          - `[A-Z]`: 1 ký tự chữ hoa từ A đến Z.
          - `[a-zA-Z]`: 1 ký tự chữ (hoa hoặc thường).
          - `[0-9]`: 1 ký tự chữ số từ 0 đến 9.
          
       7. Bộ giới hạn số lần lặp `{min, max}`:
          - `{n}`: Lặp lại chính xác đúng `n` lần.
          - `{min, max}`: Lặp từ `min` đến `max` lần.
          - `{min,}`: Lặp từ `min` lần trở lên.
            + Ký hiệu `+` viết tắt cho `{1,}` (lặp ít nhất 1 lần).
            + Ký hiệu `*` viết tắt cho `{0,}` (lặp từ 0 lần trở lên).
            + Ký hiệu `?` viết tắt cho `{0, 1}` (lặp 0 hoặc 1 lần).
            
       8. Lựa chọn hoặc `(a|b)`: Cho phép chọn chuỗi `a` hoặc chuỗi `b`.
       
       9. Viết tắt (Shorthand):
          - `\w`: Chữ cái, chữ số và cả ký tự gạch dưới `_` (tương đương `[a-zA-Z0-9_]`).
          - `\W`: Ngược lại với `\w`.
          - `\d`: Chữ số từ 0 đến 9 (tương đương `[0-9]`).
          - `\D`: Ngược lại với `\d` (không phải số).
          - `\s`: Ký tự khoảng trắng (space, tab, newline).
          - `\S`: Ngược lại với `\s`.
          
       10. Giới hạn biên đầu cuối:
           - `^`: Bắt đầu chuỗi.
           - `$`: Kết thúc chuỗi.
           - `\\`: Dấu thoát (Escape Character) dùng để vô hiệu hóa chức năng đặc biệt của ký tự regex để biến nó thành ký tự thường. Trong Java cần viết double gạch chéo `\\` vì dấu `\` bản thân nó là ký tự thoát của chuỗi Java.

   II - PHÂN LOẠI CÁC DẠNG LỖI TRONG PHÁT TRIỂN PHẦN MỀM (ERROR TYPES)
       1. Error Compilation (Lỗi biên dịch / Cú pháp):
          - Xảy ra khi viết sai cú pháp ngôn ngữ, trình biên dịch phát hiện ngay lập tức khiến chương trình không thể build được. Thường do nhà phát triển mới viết code gây ra.
       2. Error Runtime (Lỗi thực thi / Ngoại lệ):
          - Cú pháp đúng hoàn toàn, nhưng chương trình bị đứng/crash trong lúc chạy thực tế (ví dụ: chia cho 0, ép kiểu sai, người dùng nhập chữ thay vì nhập số). Dev phải xử lý bằng cơ chế try-catch.
       3. Error Logic (Lỗi tư duy / Thuật toán):
          - Nguy hiểm nhất! Chương trình chạy hoàn hảo, không báo lỗi nhưng cho ra kết quả sai hoàn toàn so với yêu cầu đề bài do thuật toán viết sai.

   III - BỘ ĐỆM NHẬP LIỆU SCANNER & CƠ CHẾ TRY-CATCH
       - `Scanner`: Đối tượng bọc nguồn dữ liệu đầu vào (như `System.in`) để phân tích và bốc tách dữ liệu.
       - `try-catch`:
         + `try`: Bao bọc đoạn code có nguy cơ xảy ra lỗi trong quá trình thực thi.
         + `catch`: Đón nhận lỗi phát sinh để xử lý một cách êm đẹp, ngăn chặn chương trình bị crash đột ngột.
         + `throw`: Chủ động ném ra một ngoại lệ mới khi dữ liệu đầu vào không thỏa mãn quy tắc kinh doanh (Business Rules).
   ========================================================================= */

package runtime;

import java.util.Scanner;

public class Program {
    
    public static void main(String[] args) {
        
        // --- PHẦN 1: MINH HỌA KIỂM TRA ĐỊNH DẠNG CHUỖI (REGEX MATCHES) ---
        System.out.println("--- PHAN 1: MINH HOA KIEM TRA REGEX ---");
        
        // Kiểm tra mã sinh viên chuẩn: "se" hoặc "SE" ở đầu, theo sau là đúng 9 chữ số
        String regexStudentId = "^[Ss][Ee]\\d{9}$";
        System.out.println("Se123456789 hop le? " + "Se123456789".matches(regexStudentId)); // true
        System.out.println("SE12345 hop le? " + "SE12345".matches(regexStudentId));         // false (thiếu số)
        
        // Không phân biệt chữ hoa chữ thường với (?i)
        System.out.println("NaMe khớp (?i)name? " + "NaMe".matches("(?i)name")); // true
        
        // Ký tự bất kỳ với dấu chấm '.'
        System.out.println("mey khớp m.y? " + "mey".matches("m.y"));   // true
        System.out.println("maay khớp m.y? " + "maay".matches("m.y")); // false (2 ký tự giữa)
        
        // Lặp từ 0 đến vô hạn với '*'
        System.out.println("my khớp me*y? " + "my".matches("me*y"));     // true (0 chữ e)
        System.out.println("meey khớp me*y? " + "meey".matches("me*y")); // true (nhiều chữ e)
        
        // Lặp từ 0 đến 1 lần với '?'
        System.out.println("my khớp me?y? " + "my".matches("me?y"));     // true (0 chữ e)
        System.out.println("mey khớp me?y? " + "mey".matches("me?y"));   // true (1 chữ e)
        System.out.println("meey khớp me?y? " + "meey".matches("me?y")); // false (vượt quá 1 chữ e)
        
        // Khớp một ký tự thuộc tập hợp với [...]
        System.out.println("mby khớp m[abc]y? " + "mby".matches("m[abc]y"));   // true (chứa chữ b)
        System.out.println("mdy khớp m[abc]y? " + "mdy".matches("m[abc]y"));   // false (chữ d không nằm trong set)
        System.out.println("mdy khớp m[^abc]y? " + "mdy".matches("m[^abc]y")); // true (chấp nhận mọi ký tự ngoại trừ a, b, c)
        
        // Khớp lựa chọn chuỗi với (a|b)
        System.out.println("toi co gay khớp? " + "toi co gay".matches("toi (ko|co) gay")); // true
        
        
        // --- PHẦN 2: THU THẬP THÔNG TIN VÀ XỬ LÝ NGOẠI LỆ (TRY - CATCH - FINALLY) ---
        System.out.println("\n--- PHAN 2: THU THAP THONG TIN & XU LY NGOAI LE ---");
        
        Scanner sc = new Scanner(System.in);
        int age = 0;
        
        System.out.print("Moi ban nhap vao tuoi cua minh (Yeu cau tu 10 den 35 tuoi): ");
        
        try {
            // Đọc vào giá trị số nguyên từ bàn phím
            age = sc.nextInt(); 
            
            // Nếu dữ liệu hợp lệ về kiểu nhưng vi phạm quy tắc kinh doanh (Business Rules), chủ động ném Exception
            if (age < 10 || age > 35) {
                throw new Exception("Tuoi nhap vao nam ngoai khoang quy dinh (10-35)!");
            }
            
            System.out.println("Dang ky do tuoi thanh cong!");
            
        } catch (Exception e) {
            // Đón bắt lỗi nhập sai kiểu (ví dụ nhập chữ thay vì số) hoặc ngoại lệ do ta chủ động ném ra
            System.out.println("Da xay ra loi: " + e.getMessage());
            System.out.println("Vui long thu lai voi mot so nguyen hop le!");
        } finally {
            // Khối này luôn được thực thi dù chương trình chạy đúng hay xảy ra lỗi
            System.out.println("Cam on ban da su dung chuong trinh.");
        }
        
        System.out.println("Gia tri tuoi ghi nhan duoc: " + age);
    }
}
