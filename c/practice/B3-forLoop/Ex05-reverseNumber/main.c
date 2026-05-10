/* =========================================================================
   BÀI TẬP THỰC HÀNH C: ĐẢO NGƯỢC CHỮ SỐ (REVERSE DIGITS)
   =========================================================================
   
   ĐỀ BÀI:
   Nhập vào một số nguyên dương N bất kỳ.
   Thực hiện đảo ngược thứ tự các chữ số của nó để tạo ra số mới.
   Ví dụ:
   - N = 12345 -> Số đảo ngược: 54321
   - N = 100   -> Số đảo ngược: 1
   
   THUẬT TOÁN TÁCH SỐ KINH ĐIỂN:
   1. Sử dụng toán tử `% 10` để luôn luôn bóc tách chữ số cuối cùng (hàng đơn vị).
   2. Sử dụng biến tích lũy `reversed = reversed * 10 + digit` để đưa chữ số bóc được vào cuối số mới.
   3. Sử dụng toán tử `/= 10` để vứt bỏ chữ số cuối cùng đã xử lý, lặp lại cho đến khi N bằng 0.
   ========================================================================= */

#include <stdio.h>
#include <stdlib.h>

int main()
{
    int originalNumber;
    int temp; // Dùng biến tạm để không làm mất giá trị gốc
    int reversedNumber = 0;

    printf("--- CHUONG TRINH DAO NGUOC CHU SO ---\n");
    printf("Nhap vao mot so nguyen duong: ");
    scanf("%d", &originalNumber);

    if (originalNumber < 0) {
        printf(">> LOI: Vui long nhap so duong.\n");
    } 
    else {
        temp = originalNumber;

        // Vòng lặp xử lý tách từng chữ số cho đến khi cạn kiệt
        while (temp != 0) {
            int lastDigit = temp % 10;          // Bước 1: Bóc chữ số cuối
            reversedNumber = reversedNumber * 10 + lastDigit; // Bước 2: Nối vào số mới
            temp /= 10;                        // Bước 3: Loại bỏ số cuối khỏi biến tạm
        }

        printf("\n=> So ban dau: %d\n", originalNumber);
        printf("=> So dao nguoc: %d\n", reversedNumber);
    }

    return 0;
}
