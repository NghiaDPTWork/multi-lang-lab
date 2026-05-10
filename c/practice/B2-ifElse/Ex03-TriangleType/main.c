/* =========================================================================
   BÀI TẬP THỰC HÀNH C: PHÂN LOẠI TAM GIÁC (TRIANGLE CLASSIFICATION)
   =========================================================================
   
   ĐỀ BÀI:
   Nhập vào 3 số thực dương đại diện cho 3 cạnh a, b, c của một hình.
   1. Kiểm tra 3 cạnh có lập thành một tam giác hợp lệ hay không?
      (Điều kiện: Tổng hai cạnh bất kỳ luôn phải LỚN HƠN cạnh còn lại).
   2. Nếu hợp lệ, tiếp tục phân loại chi tiết:
      - Tam giác Đều: Cả 3 cạnh bằng nhau.
      - Tam giác Vuông: Có 1 góc vuông (Áp dụng định lý Pitago: a^2 = b^2 + c^2).
      - Tam giác Cân: Có đúng 2 cạnh bằng nhau.
      - Tam giác Vuông Cân: Vừa có góc vuông, vừa có 2 cạnh góc vuông bằng nhau.
      - Tam giác Thường: Các trường hợp còn lại.
   ========================================================================= */

#include <stdio.h>
#include <stdlib.h>

int main()
{
    float a, b, c;
    
    printf("--- CHUONG TRINH PHAN LOAI HINH TAM GIAC ---\n");
    printf("Nhap canh a: "); scanf("%f", &a);
    printf("Nhap canh b: "); scanf("%f", &b);
    printf("Nhap canh c: "); scanf("%f", &c);

    // BƯỚC 1: Kiểm tra điều kiện tồn tại tam giác (BẮT BUỘC PHẢI SỬ DỤNG TOÁN TỬ &&)
    if (a + b > c && a + c > b && b + c > a) {
        
        printf("\n=> KET QUA: 3 canh da nhap LAP THANH mot tam giac.\n");
        printf("=> CHI TIET: ");

        // CÁCH TIẾP CẬN LOGIC TỪ ĐẶC BIỆT VỀ TỔNG QUÁT:
        
        // 1. Kiểm tra Tam giác Đều (Đặc biệt nhất)
        if (a == b && b == c) {
            printf("Day la Tam giac DEU!\n");
        }
        
        // 2. Kiểm tra Tam giác Cân hoặc Vuông Cân
        else if (a == b || b == c || a == c) {
            // Bên trong tam giác cân, có khả năng nó VUÔNG nữa (Vuông Cân)
            if (a*a + b*b == c*c || a*a + c*c == b*b || b*b + c*c == a*a) {
                printf("Day la Tam giac VUONG CAN!\n");
            } else {
                printf("Day la Tam giac CAN binh thuong!\n");
            }
        }
        
        // 3. Kiểm tra Tam giác Vuông (không cân)
        else if (a*a + b*b == c*c || a*a + c*c == b*b || b*b + c*c == a*a) {
            printf("Day la Tam giac VUONG!\n");
        }
        
        // 4. Cuối cùng là Tam giác Thường
        else {
            printf("Day la Tam giac THUONG!\n");
        }

    } else {
        printf("\n=> KET QUA: 3 canh da nhap KHONG the tao thanh mot tam giac hop le!\n");
    }

    return 0;
}
