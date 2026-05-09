/* =========================================================================
   HỆ THỐNG BÀI HỌC: KIỂU DỮ LIỆU & TOÁN TỬ TRONG JAVA (DATATYPES & OPERATORS)
   =========================================================================
   
   1. PHÂN LOẠI NHÓM KIỂU DỮ LIỆU TRONG JAVA (DATATYPES)
      Java chia kiểu dữ liệu thành 2 nhóm lớn:
      
      A. Primitive Datatypes (Kiểu dữ liệu nguyên thủy)
         - Là kiểu dữ liệu cơ bản ở mức thấp nhất, không thể tách nhỏ hơn được nữa.
         - Gồm có 8 loại nguyên thủy:
           + Kiểu số nguyên:
             * byte  (1 byte | 8-bit): Số nguyên rất nhỏ, dải giá trị từ -128 đến 127.
             * short (2 byte | 16-bit): Số nguyên nhỏ, từ -32,768 đến 32,767.
             * int   (4 byte | 32-bit): Số nguyên mặc định, từ -2^31 đến 2^31 - 1.
             * long  (8 byte | 64-bit): Số nguyên lớn. Cần thêm hậu tố 'L' hoặc 'l' (ví dụ 10L).
           + Kiểu số thực:
             * float  (4 byte | 32-bit): Số thực nhỏ. Cần thêm hậu tố 'F' hoặc 'f' (ví dụ 123.5F).
             * double (8 byte | 64-bit): Số thực lớn mặc định trong Java. Có thể thêm hậu tố 'D' hoặc 'd'.
           + Kiểu ký tự:
             * char (2 byte | 16-bit): Lưu ký tự đơn lẻ, hỗ trợ mã hóa Unicode (tiếng Việt, emoji...).
           + Kiểu logic:
             * boolean (1-bit / không xác định cụ thể): Lưu giá trị đúng/sai (true / false).
         
      B. Reference Datatypes (Kiểu dữ liệu tham chiếu)
         - Kiểu dữ liệu do người dùng tự định nghĩa từ các kiểu nguyên thủy (ví dụ: Class, Interface, Array, String).
         - Ví dụ: Đối tượng sinh viên `Student` chứa (char name, int age, float gpa).
         - Điểm khác biệt quan trọng:
           + Nguyên thủy (Primitive): Truyền tham trị (Pass by Value) - Sao chép giá trị trực tiếp.
           + Tham chiếu (Reference): Truyền tham chiếu (Pass by Reference) - Quản lý thông qua địa chỉ con trỏ/ô nhớ.

   2. TIỀN TỐ HỆ SỐ (PREFIX SYSTEM FOR LITERALS)
      Cách biểu diễn hằng số ở các hệ cơ số khác nhau thông qua tiền tố (Prefix):
      - Hệ thập lục phân (Hexadecimal - hệ 16): Bắt đầu bằng tiền tố "0x" hoặc "0X" (Ví dụ: 0xFA).
      - Hệ bát phân (Octal - hệ 8): Bắt đầu bằng tiền tố "0" (Ví dụ: 072, các chữ số không được lớn hơn 7).

   3. TOÁN TỬ TRONG JAVA (OPERATORS IN JAVA)
      Java hỗ trợ rất nhiều toán tử mạnh mẽ, tiêu biểu là:
      - Toán tử toán học (Arithmetic): +, -, *, /, % (chia lấy dư), ++, --
      - Toán tử gán (Assignment): =, +=, -=, *=, /=, %=
      - Toán tử so sánh (Comparison): >, <, >=, <=, ==, !=
      - Toán tử logic (Logical): && (and short-circuit), || (or short-circuit), & (full and), | (full or), ! (not)
      - Toán tử một ngôi (Unary): -a, +a, !boolean, ++, --
      - Toán tử ba ngôi (Ternary): dieu_kien ? gia_tri_dung : gia_tri_sai
      - Toán tử dịch bit (Bit Shifting):
        + Dịch phải `>>`: x >> a tương đương x / (2^a). Các bit rớt mất, thiếu bù 0 (hoặc bit dấu).
        + Dịch trái `<<`: x << a tương đương x * (2^a).
      - Toán tử bit (Bitwise):
        + & (AND bit): Nhân các bit (1 & 1 = 1, còn lại là 0).
        + | (OR bit): Chỉ cần có một bên là 1 thì ra 1.
        + ^ (XOR bit): Hai bit khác nhau ra 1, giống nhau ra 0.
        + ~ (NOT bit): Đảo ngược bit (0 thành 1, 1 thành 0).
   ========================================================================= */

package runtime;

public class Program {
    
    public static void main(String[] args) {
        
        // --- PHẦN 1: KHAI BÁO VÀ KHỞI TẠO CÁC KIỂU NGUYÊN THỦY (PRIMITIVES) ---
        byte a = 127;
        int numInt = a; // Ép kiểu ngầm định (Implicit casting) từ nhỏ byte lên lớn int
        
        // Float trong Java mặc định hiểu số thực là double, bắt buộc dùng hậu tố F hoặc ép kiểu
        float numFloat = 123.5F; 
        double numDouble = 123.5D;
        
        // Số nguyên quá lớn vượt tầm int bắt buộc dùng hậu tố L
        long numLong = 10_000_000_000L; 
        
        float b; 
        // b lúc này chưa khởi tạo cục bộ. Lưu ý: Trường hợp khai báo thuộc tính Instance/Class:
        // default value của Number = 0, Char = '\u0000' (null), Boolean = false.


        // --- PHẦN 2: BIỂU DIỄN HỆ CƠ SỐ KHÁC NHAU (PREFIX LITERALS) ---
        int c = 0xFA; // Prefix '0x' biểu thị hệ 16 (Hexadecimal)
        c = 072;      // Prefix '0' biểu thị hệ 8 (Octal)


        // --- PHẦN 3: XUẤT DỮ LIỆU RA MÀN HÌNH (OUTPUT) ---
        System.out.println("a = " + a); // ln viết tắt của Line New (in xong tự động xuống dòng)


        // --- PHẦN 4: MINH HỌA TOÁN TỬ DỊCH BIT (BIT SHIFTING OPERATORS) ---
        int x = 8;
        int shiftRight = x >> 2; // 8 / 2^2 = 2
        int shiftLeft = x << 1;  // 8 * 2^1 = 16
        System.out.println("8 >> 2 = " + shiftRight);
        System.out.println("8 << 1 = " + shiftLeft);


        // --- PHẦN 5: TOÁN TỬ BITWISE VÀ BA NGÔI (BITWISE & TERNARY) ---
        int bitAnd = 5 & 3; // 101 & 011 = 001 (1)
        int bitOr = 5 | 3;  // 101 | 011 = 111 (7)
        System.out.println("5 & 3 = " + bitAnd);
        System.out.println("5 | 3 = " + bitOr);

        String result = (x > 5) ? "X lon hon 5" : "X nho hon hoac bang 5";
        System.out.println(result);
    }
}
