/* =========================================================================
   HỆ THỐNG BÀI HỌC: ĐẾM SỐ NGUYÊN TỐ NÂNG CAO (NESTED LOOPS & OPTIMIZATION)
   =========================================================================
   
   1. GIẢI THUẬT KIỂM TRA SỐ NGUYÊN TỐ TỐI ƯU:
      - Số nguyên tố là số lớn hơn 1 và chỉ chia hết cho 1 và chính nó.
      - Thay vì chạy vòng lặp kiểm tra từ 2 đến n-1, ta chỉ cần kiểm tra đến CĂN BẬC HAI của n (`i * i <= n`).
      - Lý do: Nếu n có ước lớn hơn căn bậc hai, nó chắc chắn sẽ đi cặp với một ước khác nhỏ hơn căn bậc hai. Nếu ta không tìm thấy ước nào nhỏ hơn hoặc bằng căn bậc hai, thì chắc chắn số đó là số nguyên tố.
      - Lệnh `break;` giúp dừng ngay lập tức việc kiểm tra khi phát hiện ước số đầu tiên (tiết kiệm tài nguyên CPU cực lớn).

   2. KỸ THUẬT CỜ HIỆU (FLAG TECHNIQUE):
      - Dùng một biến `int flag = 1;` (giả định ban đầu là đúng).
      - Nếu phát hiện sai phạm, hạ cờ `flag = 0;` và ngắt vòng lặp.
      - Kết thúc vòng lặp, chỉ cần kiểm tra xem cờ còn dựng (`flag == 1`) hay không.
   ========================================================================= */

#include <stdio.h>
#include <stdlib.h>

int main()
{
    int start, end;
    int totalCount = 0;

    printf("=== CHUONG TRINH LIET KE VA DEM SO NGUYEN TO ===\n");
    printf("Nhap diem bat dau: ");
    scanf("%d", &start);
    printf("Nhap diem ket thuc: ");
    scanf("%d", &end);

    // B1: Xử lý đổi chỗ nếu nhập ngược
    if (start > end) {
        int tmp = start;
        start = end;
        end = tmp;
    }

    printf("\nCac so nguyen to tim thay trong doan [%d, %d]:\n", start, end);

    // B2: Duyệt qua từng số trong đoạn (Vòng lặp ngoài - Outer Loop)
    for (int number = start; number <= end; number++) {
        
        // Loại bỏ ngay lập tức các số <= 1 (không thể là số nguyên tố)
        if (number < 2) {
            continue; 
        }

        // Kỹ thuật Cờ hiệu (Flag) - Giả định đây là số nguyên tố
        int isPrime = 1; 

        // Vòng lặp kiểm tra ước (Vòng lặp trong - Inner Loop)
        // Chạy đến i * i <= number giúp tối ưu hiệu suất khủng khiếp!
        for (int i = 2; i * i <= number; i++) {
            if (number % i == 0) {
                isPrime = 0; // Hạ cờ hiệu vì phát hiện có ước khác 1 và chính nó
                break;       // Dừng ngay lập tức không cần kiểm tra tiếp các i khác
            }
        }

        // B3: Kiểm tra xem cờ còn dựng không để in ra kết quả
        if (isPrime == 1) {
            printf("%-5d", number);
            totalCount++;
        }
    }

    printf("\n\n=> Tong cong tim thay %d so nguyen to.\n", totalCount);

    return 0;
}
