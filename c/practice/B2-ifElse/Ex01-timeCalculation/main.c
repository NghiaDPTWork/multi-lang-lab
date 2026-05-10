/* =========================================================================
   BÀI TẬP THỰC HÀNH C: QUY ĐỔI GIỜ - PHÚT - GIÂY (TIME CONVERSION)
   =========================================================================
   
   ĐỀ BÀI:
   Nhập vào một số nguyên dương biểu thị tổng số giây (s).
   Thực hiện quy đổi và in ra định dạng: H giờ, M phút, S giây tương ứng.
   Gợi ý: Sử dụng toán tử chia lấy nguyên (/) và chia lấy dư (%) để bóc tách.
   ========================================================================= */

#include <stdio.h>
#include <stdlib.h>

int main()
{
    int totalSeconds;
    int hour, minute, second;

    printf("--- CHUONG TRINH QUY DOI THOI GIAN ---\n");
    printf("Moi ban nhap vao tong so giay: ");
    scanf("%d", &totalSeconds);

    // Kiểm tra tính hợp lệ
    if (totalSeconds < 0) {
        printf("\n>> LOI: Thoi gian khong duoc am!\n");
    } 
    else {
        // 1 giờ = 3600 giây
        hour = totalSeconds / 3600;
        
        // Lấy phần dư còn lại sau khi tính giờ để tính phút (1 phút = 60 giây)
        minute = (totalSeconds % 3600) / 60;
        
        // Phần dư cuối cùng chính là số giây lẻ
        second = totalSeconds % 60;
        
        printf("\n=> Ket qua quy doi: %d gio, %d phut, %d giay.\n", hour, minute, second);
        printf("=> Dinh dang rut gon: %dh %dm %ds\n", hour, minute, second);
    }

    return 0;
}
