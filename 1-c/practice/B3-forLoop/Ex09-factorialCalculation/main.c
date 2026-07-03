/* =========================================================================
   BÀI TẬP THỰC HÀNH C: TÍNH GIAI THỪA (FACTORIAL CALCULATION)
   =========================================================================
   
   ĐỀ BÀI:
   Nhập vào một số nguyên dương n.
   Thực hiện tính toán giá trị giai thừa của n, ký hiệu là n!
   Ví dụ: n = 5 -> 5! = 1 * 2 * 3 * 4 * 5 = 120.
   Quy ước: 0! = 1.
   
   PHÂN TÍCH KỸ THUẬT:
   - Biến tích lũy tích `factorial` PHẢI khởi tạo bằng 1 thay vì 0.
   - Dùng vòng lặp chạy từ 1 đến n, cập nhật tích: `factorial *= i`.
   - Nên dùng `unsigned long long` do giai thừa tăng trưởng theo cấp số cực nhanh.
   ========================================================================= */

#include <stdio.h>
#include <stdlib.h>

int main()
{
    int n;
    unsigned long long factorial = 1; // Kiểu 64-bit chứa tối đa đến 20!

    printf("--- CHUONG TRINH TINH GIAI THUA (n!) ---\n");
    printf("Nhap vao mot so nguyen khong am n: ");
    scanf("%d", &n);

    if (n < 0) {
        printf(">> LOI: Giai thua khong xac dinh cho so am!\n");
    } 
    else {
        // Quy ước 0! = 1, vòng lặp sẽ tự động không chạy và in ra 1, rất đẹp!
        for (int i = 1; i <= n; i++) {
            factorial *= i;
        }

        printf("\n=> KET QUA: %d! = %llu\n", n, factorial);
        
        if (n > 20) {
            printf("(Luu y: Ket qua co the sai do vuot qua gioi han luu tru 64-bit)\n");
        }
    }

    return 0;
}
