/* =========================================================================
   BÀI TẬP THỰC HÀNH C: TÍNH TỔNG CHUỖI TÍCH SỐ (INDUCTIVE PRODUCT SERIES)
   =========================================================================
   
   ĐỀ BÀI:
   Nhập vào một số nguyên dương n.
   Thực hiện tính toán tổng của chuỗi quy nạp sau:
   S = 1*2 + 2*3 + 3*4 + ... + n*(n+1)
   
   PHÂN TÍCH:
   - Số hạng tổng quát tại vị trí `i` là: `i * (i + 1)`.
   - Chạy vòng lặp `i` từ 1 đến `n`, thực hiện tính `i * (i + 1)` rồi cộng dồn vào biến tổng ban đầu khởi tạo bằng 0.
   ========================================================================= */

#include <stdio.h>
#include <stdlib.h>

int main()
{
    int n;
    long long sumSeries = 0; // Dùng long long để tránh tràn số khi n lớn

    printf("--- CHUONG TRINH TINH S = 1*2 + 2*3 + ... + n*(n+1) ---\n");
    printf("Nhap vao so nguyen duong n: ");
    scanf("%d", &n);

    if (n < 1) {
        printf(">> LOI: Vui long nhap so n lon hon hoac bang 1.\n");
    } 
    else {
        // Bắt đầu vòng lặp từ 1 đến n
        for (int i = 1; i <= n; i++) {
            sumSeries += (long long)i * (i + 1);
        }
        
        printf("\n=> KET QUA TINH TOAN:\n");
        printf("Voi n = %d, tong S = %lld\n", n, sumSeries);
    }

    return 0;
}
