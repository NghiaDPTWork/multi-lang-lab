/* =========================================================================
   BÀI TẬP THỰC HÀNH C: TÌM SỐ FIBONACCI THỨ N (NTH FIBONACCI NUMBER)
   =========================================================================
   
   ĐỀ BÀI:
   Nhập vào số nguyên dương n.
   Hãy tìm và in ra số đứng tại vị trí thứ n trong dãy Fibonacci.
   Dãy Fibonacci bắt đầu: 0, 1, 1, 2, 3, 5, 8, 13, 21...
   Quy luật: Mỗi số đứng sau bằng TỔNG HAI SỐ đứng ngay trước nó.
   
   VỊ TRÍ QUY ƯỚC:
   - n = 1 -> in ra 0.
   - n = 2 -> in ra 1.
   - n = 3 -> in ra 1 (0+1).
   - n = 4 -> in ra 2 (1+1).
   ========================================================================= */

#include <stdio.h>
#include <stdlib.h>

int main()
{
    int n;
    
    printf("--- CHUONG TRINH TIM SO FIBONACCI THU N ---\n");
    printf("Nhap vi tri n (bat dau tu 1): ");
    scanf("%d", &n);

    if (n <= 0) {
        printf(">> LOI: Vi tri phai la so nguyen duong.\n");
    }
    else if (n == 1) {
        printf("=> So Fibonacci thu 1 la: 0\n");
    }
    else if (n == 2) {
        printf("=> So Fibonacci thu 2 la: 1\n");
    }
    else {
        long long prev1 = 0; // F(n-2)
        long long prev2 = 1; // F(n-1)
        long long current = 0; // F(n)

        // Bắt đầu lặp từ vị trí số 3 trở đi
        for (int i = 3; i <= n; i++) {
            current = prev1 + prev2; // Tính số hiện tại
            
            // Cập nhật lịch sử cho vòng lặp tiếp theo
            prev1 = prev2; 
            prev2 = current;
        }
        
        printf("\n=> So Fibonacci thu %d la: %lld\n", n, current);
    }

    return 0;
}
