/* =========================================================================
   BÀI TẬP THỰC HÀNH C: TÍNH TỔNG CHUỖI ĐIỀU HÒA / PHÂN SỐ (HARMONIC SERIES)
   =========================================================================
   
   ĐỀ BÀI:
   Nhập vào một số nguyên dương n.
   Thực hiện tính toán tổng của chuỗi phân số quy nạp sau:
   S = 1/1 + 1/2 + 1/3 + ... + 1/n
   
   LƯU Ý QUAN TRỌNG KHI TÍNH TOÁN:
   - Biến lưu trữ tổng `S` PHẢI thuộc kiểu số thực (`float` hoặc `double`).
   - Trong C, phép chia `1 / i` sẽ bị ép về kiểu nguyên (chặt bỏ phần thập phân) nếu cả 1 và `i` đều là số nguyên. Ví dụ `1 / 2` sẽ trả về `0`.
   - Giải pháp: Sử dụng `1.0 / i` hoặc `(double)1 / i` để C hiểu đây là phép chia số thực.
   ========================================================================= */

#include <stdio.h>
#include <stdlib.h>

int main()
{
    int n;
    double totalSum = 0.0; // Dùng kiểu số thực double để đảm bảo độ chính xác cao

    printf("--- CHUONG TRINH TINH S = 1/1 + 1/2 + ... + 1/n ---\n");
    printf("Nhap vao so nguyen duong n: ");
    scanf("%d", &n);

    if (n < 1) {
        printf(">> LOI: n phai lon hon hoac bang 1!\n");
    } 
    else {
        for (int i = 1; i <= n; i++) {
            // Ép kiểu ngầm định sang số thực bằng cách viết 1.0 thay vì 1
            totalSum += 1.0 / i;
        }
        
        printf("\n=> KET QUA TINH TOAN:\n");
        printf("Voi n = %d, tong chuoi phan so S = %.6lf\n", n, totalSum);
    }

    return 0;
}
