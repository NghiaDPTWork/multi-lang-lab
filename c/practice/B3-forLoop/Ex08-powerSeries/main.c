/* =========================================================================
   BÀI TẬP THỰC HÀNH C: TÍNH TỔNG LŨY THỪA QUY NẠP (POWER SERIES)
   =========================================================================
   
   ĐỀ BÀI:
   Nhập vào một số nguyên dương n.
   Hãy tính giá trị biểu thức tổng các lũy thừa bậc n:
   S = 1^n + 2^n + 3^n + ... + n^n
   
   PHÂN TÍCH:
   - Sử dụng thư viện <math.h> và hàm `pow(base, exponent)` để tính lũy thừa.
   - Kết quả lũy thừa tăng cực kỳ nhanh, nên dùng kiểu dữ liệu lớn (ví dụ: `double` hoặc `long long`) để lưu trữ nhằm giảm thiểu tràn số.
   ========================================================================= */

#include <stdio.h>
#include <stdlib.h>
#include <math.h>

int main()
{
    int n;
    double totalSum = 0; // Dùng double để chứa kết quả siêu to

    printf("--- CHUONG TRINH TINH S = 1^n + 2^n + ... + n^n ---\n");
    printf("Nhap vao so nguyen n: ");
    scanf("%d", &n);

    if (n < 1) {
        printf(">> LOI: n phai lon hon hoac bang 1.\n");
    }
    else {
        for (int i = 1; i <= n; i++) {
            // Tính i^n rồi cộng dồn
            totalSum += pow(i, n);
        }
        
        // In định dạng số thực không hiện số lẻ thập phân %.0f
        printf("\n=> KET QUA: Voi n = %d, tong S = %.0f\n", n, totalSum);
    }

    return 0;
}
