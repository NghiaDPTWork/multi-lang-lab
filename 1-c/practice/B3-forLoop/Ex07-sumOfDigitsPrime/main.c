/* =========================================================================
   BÀI TẬP THỰC HÀNH C: KIỂM TRA TỔNG CÁC CHỮ SỐ CÓ LÀ SỐ NGUYÊN TỐ
   =========================================================================
   
   ĐỀ BÀI:
   Nhập vào một số nguyên dương N.
   1. Tính tổng của tất cả các chữ số cấu tạo nên N.
   2. Kiểm tra xem con số tổng vừa tính được có phải là một Số nguyên tố hay không?
   
   VÍ DỤ:
   - Nhập N = 165
   - Tổng = 1 + 6 + 5 = 12
   - 12 chia hết cho 2 -> Kết luận: Không phải số nguyên tố.
   ========================================================================= */

#include <stdio.h>
#include <stdlib.h>
#include <math.h>

int main()
{
    int n;
    int sumOfDigits = 0;

    printf("--- CHUONG TRINH KIEM TRA TONG CHU SO CO LA SO NGUYEN TO ---\n");
    printf("Nhap vao so nguyen duong N: ");
    scanf("%d", &n);

    if (n < 0) {
        printf(">> LOI: Vui long nhap so duong.\n");
    }
    else {
        int temp = n;

        // BƯỚC 1: Tính tổng các chữ số
        while (temp > 0) {
            sumOfDigits += temp % 10;
            temp /= 10;
        }
        
        printf("\n=> Tong cac chu so cua %d la: %d\n", n, sumOfDigits);


        // BƯỚC 2: Kiểm tra số nguyên tố cho biến sumOfDigits
        int isPrime = 1; // Cờ hiệu giả định là số nguyên tố

        if (sumOfDigits < 2) {
            isPrime = 0; // Số < 2 không phải số nguyên tố
        } 
        else {
            // Tối ưu hóa chạy đến căn bậc hai của tổng
            for (int i = 2; i <= sqrt(sumOfDigits); i++) {
                if (sumOfDigits % i == 0) {
                    isPrime = 0; // Hạ cờ hiệu nếu tìm thấy ước
                    break;
                }
            }
        }

        // BƯỚC 3: Kết luận dựa vào cờ hiệu
        if (isPrime == 1) {
            printf("=> KET LUAN: So %d LA mot so nguyen to!\n", sumOfDigits);
        } else {
            printf("=> KET LUAN: So %d KHONG PHAI la so nguyen to!\n", sumOfDigits);
        }
    }

    return 0;
}
