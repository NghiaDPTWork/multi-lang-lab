/* =========================================================================
   BÀI TẬP THỰC HÀNH C: ĐẾM SỰ XUẤT HIỆN CỦA CHỮ SỐ (DIGIT COUNTER)
   =========================================================================
   
   ĐỀ BÀI:
   Nhập vào một số nguyên dương lớn N và một chữ số đích target (0 -> 9).
   Hãy đếm xem chữ số đích đó xuất hiện bao nhiêu lần bên trong số N.
   
   VÍ DỤ:
   - Số N = 11223311
   - Chữ số cần đếm = 1
   => Kết quả: Xuất hiện 4 lần.
   ========================================================================= */

#include <stdio.h>
#include <stdlib.h>

int main()
{
    long long n;
    int targetDigit;
    int appearanceCount = 0;

    printf("--- CHUONG TRINH DEM SO LAN XUAT HIEN CHU SO ---\n");
    
    printf("Nhap vao so nguyen duong lon N: ");
    scanf("%lld", &n); // Dùng long long để chứa được số cực dài
    
    printf("Nhap vao chu so can kiem tra (0-9): ");
    scanf("%d", &targetDigit);

    // Xử lý biên
    if (targetDigit < 0 || targetDigit > 9) {
        printf(">> LOI: Chu so can dem phai nam tu 0 den 9.\n");
    }
    else {
        long long temp = n;

        // Trường hợp đặc biệt: Số gốc bằng đúng 0
        if (temp == 0 && targetDigit == 0) {
            appearanceCount = 1;
        } 
        else {
            // Vòng lặp bóc tách và đối chiếu
            while (temp > 0) {
                int currentDigit = temp % 10;
                
                if (currentDigit == targetDigit) {
                    appearanceCount++;
                }
                
                temp /= 10; // Loại bỏ chữ số vừa xét
            }
        }

        printf("\n=> Ket qua: Chu so %d xuat hien %d lan trong so da nhap.\n", targetDigit, appearanceCount);
    }

    return 0;
}
