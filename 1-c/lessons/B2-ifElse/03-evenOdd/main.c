/* =========================================================================
   HỆ THỐNG BÀI HỌC: TOÁN TỬ BITWISE, TOÁN TỬ BA NGÔI & THUẬT TOÁN ĐIỀU KIỆN
   =========================================================================
   
   1. BÀI TOÁN KIỂM TRA SỐ CHẴN LẺ (EVEN / ODD)
      Có nhiều cách để kiểm tra một số nguyên là chẵn hay lẻ:
      - Cách 1: Sử dụng toán tử chia lấy dư (%) - Truyền thống
        + Nếu number % 2 == 0 thì là số Chẵn (Even).
        + Nếu number % 2 != 0 thì là số Lẻ (Odd).
        + Rút gọn trong C: if (number % 2) -> Vì giá trị khác 0 là True (Lẻ), bằng 0 là False (Chẵn).
      
      - Cách 2: Sử dụng toán tử Bitwise AND (&) và Toán tử ba ngôi (Ternary Operator) - Tối ưu 1 dòng
        + Bản chất nhị phân: Số lẻ luôn có bit cuối cùng bên phải (LSB) là 1. Số chẵn luôn có bit cuối là 0.
          Ví dụ: 5 = 101 (nhị phân) -> 5 & 1 = 1 (Lẻ).
                 4 = 100 (nhị phân) -> 4 & 1 = 0 (Chẵn).
        + Toán tử ba ngôi (Ternary Operator): điều_kiện ? giá_trị_nếu_đúng : giá_trị_nếu_sai
          Ví dụ: (number & 1) ? "Odd" : "Even"

   2. CHUẨN BỊ CHO CÁC BÀI TẬP THỰC HÀNH TIẾP THEO
      - Bài 1: Tìm số lớn nhất trong 3 số a, b, c (Largest Number)
        + Điều kiện a lớn nhất: a > b && a > c
        + Điều kiện a và b cùng lớn nhất: a == b && a > c
        + Cả 3 số bằng nhau: a == b && b == c
      
      - Bài 2: Xác định loại tam giác (Triangle Type)
        + Điều kiện tạo thành tam giác: (a + b > c) && (a + c > b) && (b + c > a)
        + Tam giác Đều: 3 cạnh bằng nhau (a == b && b == c)
        + Tam giác Cân: Có 2 cạnh bằng nhau (a == b || a == c || b == c)
        + Tam giác Vuông: Bình phương 1 cạnh bằng tổng bình phương 2 cạnh còn lại (định lý Pitago).
        + Thứ tự kiểm tra tối ưu nhất: Đều -> Vuông Cân -> Cân -> Vuông -> Thường.
      
      - Bài 3: Giải phương trình bậc hai ax^2 + bx + c = 0 (Quadratic Equation)
        + Sử dụng thư viện <math.h> với các hàm toán học:
          * Lũy thừa: pow(cơ_số, số_mũ) -> Ví dụ 3^7 = pow(3, 7)
          * Căn bậc hai: sqrt(x) -> Ví dụ căn bậc hai của 5 = sqrt(5)
          * Căn bậc n: pow(x, 1.0/n) -> Ví dụ căn bậc 7 của 5 = pow(5, 1.0/7)
   ========================================================================= */

#include <stdio.h>
#include <stdlib.h>

int main()
{
    // --- PHẦN 1: NHẬP DỮ LIỆU TỪ NGƯỜI DÙNG (INPUT) ---
    int number;
    printf("Plz, Input a number: ");
    scanf("%d", &number);


    // --- PHẦN 2: CÁCH TRUYỀN THỐNG - DÙNG TOÁN TỬ CHIA LẤY DƯ (%) ---
    printf("\n--- CACH 1: DUNG TOAN TU CHIA LAY DU (%%) ---\n");
    if (number % 2) {
        printf("%d is Odd number\n", number);
    } else {
        printf("%d is Even number\n", number);
    }


    // --- PHẦN 3: CÁCH NÂNG CAO - DÙNG TOÁN TỬ BITWISE (&) VÀ BA NGÔI (TERNARY) ---
    printf("\n--- CACH 2: DUNG BITWISE (&) VA TOAN TU BA NGOI ---\n");
    
    // Viết code tối giản giải quyết yêu cầu trên 1 dòng duy nhất!
    printf("%d is %s number\n", number, (number & 1) ? "Odd" : "Even");

    return 0;
}
