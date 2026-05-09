/* =========================================================================
   HỆ THỐNG BÀI HỌC: MỆNH ĐỀ ĐIỀU KIỆN & CÁC TOÁN TỬ (CONDITIONAL CLAUSES & OPERATORS)
   =========================================================================
   
   1. MỆNH ĐỀ ĐIỀU KIỆN (CONDITIONAL CLAUSES)
      - Sử dụng để rẽ nhánh chương trình dựa trên điều kiện thực tế (True / False).
      - Cú pháp cơ bản:
        if (điều_kiện) {
            // thực hiện việc A khi điều kiện đúng
        } else if (điều_kiện_khác) {
            // thực hiện việc B khi điều kiện khác đúng
        } else {
            // thực hiện việc C khi tất cả các điều kiện trên đều sai
        }
      - Các mô hình cấu trúc điều kiện (ẩn dụ "Lưới lọc"):
        + "if" thuần túy: 1 lưới lọc đơn lẻ. Nếu thỏa mãn thì đi qua, không thì bỏ qua.
        + "if - else": Có 1 đỉnh rẽ nhánh, chia làm 2 lưới lọc (Chỉ chọn 1 trong 2).
        + "if - else if - else": Chia thành nhiều lưới lọc tuần tự từ trên xuống dưới (Chỉ chọn 1 nhánh đầu tiên thỏa mãn).
        + "if - if" riêng lẻ: Nhiều lưới độc lập, chương trình kiểm tra lần lượt tất cả (Có thể thỏa mãn nhiều nhánh cùng lúc).

   2. TOÁN TỬ SO SÁNH (COMPARISON OPERATORS)
      - Dùng để so sánh các toán hạng, kết quả trả về là đúng (1 / True) hoặc sai (0 / False).
      - Các toán tử:
        + == : So sánh bằng (Ví dụ: a == b)
        + != : So sánh khác / không bằng (Ví dụ: a != b)
        + <, >: So sánh bé hơn, lớn hơn
        + <=, >=: So sánh bé hơn hoặc bằng, lớn hơn hoặc bằng

   3. TOÁN TỬ TOÁN HỌC & GIA TĂNG (ARITHMETIC & INCREMENT OPERATORS)
      - Toán tử toán học cơ bản: +, -, *, /, % (chia lấy dư).
      - Toán tử viết tắt (Shorthand): +=, -=, *=, /=, %=
        + Ví dụ: number += 5 tương đương number = number + 5.
      - Toán tử tăng/giảm (Increment / Decrement):
        + Hậu tố (Postfix - number++ / number--): Trả về giá trị hiện tại trước, rồi mới tăng/giảm biến sau.
        + Tiền tố (Prefix - ++number / --number): Tăng/giảm biến trước, rồi mới trả về giá trị mới.
      - Thử thách toán học (Prefix/Postfix Quiz): 
        Cho a = 10;
        Tính b = a++ + ++a - --a - a-- - --a + a--;
        Giải thích từng bước chi tiết:
          + a++ (trả về 10, sau đó a tăng lên 11)
          + ++a (a tăng lên 12, trả về 12)
          + --a (a giảm xuống 11, trả về 11)
          + a-- (trả về 11, sau đó a giảm xuống 10)
          + --a (a giảm xuống 9, trả về 9)
          + a-- (trả về 9, sau đó a giảm xuống 8)
          => b = 10 + 12 - 11 - 11 - 9 + 9 = 0.
          => Giá trị cuối cùng của a = 8.

   4. TOÁN TỬ LOGIC (LOGICAL OPERATORS)
      - Dùng để kết hợp nhiều mệnh đề điều kiện với nhau.
      - Phép AND (VÀ): Cả hai vế đều True thì kết quả mới là True.
        + Ký hiệu && (Toán tử Short-circuit AND): Đi tìm vế SAI (False) đầu tiên. Nếu gặp False, dừng ngay lập tức và kết luận là False (không chạy các vế sau).
        + Ký hiệu & (Toán tử Full AND): Bắt buộc kiểm tra tất cả các vế rồi mới đưa ra kết luận.
      - Phép OR (HOẶC): Chỉ cần một trong hai vế True thì kết quả là True.
        + Ký hiệu || (Toán tử Short-circuit OR): Đi tìm vế ĐÚNG (True) đầu tiên. Nếu gặp True, dừng ngay lập tức và kết luận là True (không chạy các vế sau).
        + Ký hiệu | (Toán tử Full OR): Bắt buộc kiểm tra tất cả các vế rồi mới đưa ra kết luận.
   ========================================================================= */

#include <stdio.h>
#include <stdlib.h>

int main()
{
    // --- PHẦN 1: MỆNH ĐỀ ĐIỀU KIỆN (CONDITIONAL CLAUSE) ---
    // Ví dụ minh họa: Hành trình từ Sài Gòn đi Đà Lạt rẽ qua các con đèo khác nhau
    int car = 7;
    printf("Sai Gon\n");
    
    if (car <= 7) {
        printf("Prenn\n"); 
    } else if (car == 7) {
        printf("Sacom\n");
    } else {
        printf("Mimosa\n");
    }
    printf("Da Lat\n");


    // --- PHẦN 2: TOÁN TỬ TOÁN HỌC & TOÁN TỬ GIA TĂNG (OPERATORS) ---
    int number = 2;
    // Các cách tăng giá trị lên 1
    number++;
    number += 1;
    ++number;
    
    // Các toán tử viết tắt khác
    number *= 2;
    number--;
    number %= 2;


    // --- PHẦN 3: BÀI TẬP ĐỘ ƯU TIÊN TIỀN TỐ & HẬU TỐ (PREFIX VS POSTFIX QUIZ) ---
    int a = 10;
    int b = a++ + ++a - --a - a-- - --a + a--;
    
    /* Phân tích logic tính toán chi tiết:
       Bước 1: a++  -> Lấy giá trị 10 để cộng, biến a tăng lên 11 sau đó.
       Bước 2: ++a  -> Biến a tăng từ 11 lên 12 trước, lấy giá trị 12 để cộng.
       Bước 3: --a  -> Biến a giảm từ 12 xuống 11 trước, lấy giá trị 11 để trừ.
       Bước 4: a--  -> Lấy giá trị 11 để trừ, biến a giảm xuống 10 sau đó.
       Bước 5: --a  -> Biến a giảm từ 10 xuống 9 trước, lấy giá trị 9 để trừ.
       Bước 6: a--  -> Lấy giá trị 9 để cộng, biến a giảm xuống 8 sau đó.
       
       => Phép tính: b = 10 + 12 - 11 - 11 - 9 + 9 = 0
       => Giá trị cuối cùng của a = 8
    */
    printf("Gia tri a sau quiz: %d (Ky vong: 8)\n", a);
    printf("Gia tri b sau quiz: %d (Ky vong: 0)\n", b);


    // --- PHẦN 4: TOÁN TỬ LOGIC (LOGICAL OPERATORS - AND/OR) ---
    int age = 19;
    int money = 1750000;
    
    // Ví dụ đi vào bar đòi hỏi cả tuổi >= 18 VÀ tiền >= 2 triệu VNĐ
    if (age >= 18 && money >= 2000000) {
        printf("Welcome\n");
    } else {
        printf("Cut\n");
    }


    // --- PHẦN 5: MINH HỌA SỰ KHÁC BIỆT GIỮA && VÀ & (SHORT-CIRCUIT AND VS FULL AND) ---
    a = 12;
    b = 5;
    if (a == 10 && b++ > 2) {
        // Vì a == 10 là SAI (False), toán tử && sẽ dừng ngay lập tức (b++ không được chạy)
        printf("True a ne %d va b ne %d\n", a, b);
    } else {
        // Kỳ vọng: b vẫn giữ nguyên bằng 5 vì toán tử && dừng sớm
        printf("False a ne %d va b ne %d\n", a, b);
    }


    // --- PHẦN 6: MINH HỌA SỰ KHÁC BIỆT GIỮA || VÀ | (SHORT-CIRCUIT OR VS FULL OR) ---
    a = 10;
    b = 5;
    if (a == 10 || b++ > 2) {
        // Vì a == 10 là ĐÚNG (True), toán tử || dừng ngay lập tức (b++ không được chạy)
        printf("True a ne %d va b ne %d\n", a, b);
    } else {
        // Kỳ vọng: b vẫn giữ nguyên bằng 5 vì toán tử || dừng sớm
        printf("False a ne %d va b ne %d\n", a, b);
    }

    return 0;
}
