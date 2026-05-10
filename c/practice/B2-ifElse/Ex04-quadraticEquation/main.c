/* =========================================================================
   BÀI TẬP THỰC HÀNH C: GIẢI PHƯƠNG TRÌNH BẬC HAI (QUADRATIC EQUATION)
   =========================================================================
   
   ĐỀ BÀI:
   Giải biện luận phương trình dạng: a*x^2 + b*x + c = 0 với a, b, c nhập từ bàn phím.
   
   PHÂN TÍCH TOÁN HỌC CHUẨN:
   - Trường hợp a = 0: Phương trình trở thành bậc nhất: b*x + c = 0.
     + Nếu b = 0:
       * Nếu c = 0 -> Phương trình Vô Số Nghiệm.
       * Nếu c != 0 -> Phương trình Vô Nghiệm.
     + Nếu b != 0 -> Phương trình có 1 nghiệm duy nhất: x = -c/b.
   
   - Trường hợp a != 0: Phương trình là bậc hai. Tính Delta = b^2 - 4*a*c.
     + Nếu Delta < 0 -> Phương trình Vô Nghiệm (Không có nghiệm thực).
     + Nếu Delta == 0 -> Phương trình có Nghiệm kép: x1 = x2 = -b / (2*a).
     + Nếu Delta > 0 -> Phương trình có 2 nghiệm phân biệt:
       x1 = (-b + sqrt(Delta)) / (2*a)
       x2 = (-b - sqrt(Delta)) / (2*a)
   ========================================================================= */

#include <stdio.h>
#include <stdlib.h>
#include <math.h> // Cần thư viện này để sử dụng hàm sqrt()

int main()
{
    float a, b, c;
    float delta, x1, x2;

    printf("--- CHUONG TRINH GIAI PHUONG TRINH BAC HAI (ax^2 + bx + c = 0) ---\n");
    printf("Nhap he so a: "); scanf("%f", &a);
    printf("Nhap he so b: "); scanf("%f", &b);
    printf("Nhap he so c: "); scanf("%f", &c);

    printf("\n=> Phuong trinh cua ban la: %.2fx^2 + %.2fx + %.2f = 0\n", a, b, c);

    // TRƯỜNG HỢP 1: QUAY VỀ BẬC NHẤT NẾU a = 0
    if (a == 0) {
        if (b == 0) {
            if (c == 0) {
                printf(">> Ket qua: Phuong trinh co VO SO NGHIEM!\n");
            } else {
                printf(">> Ket qua: Phuong trinh VO NGHIEM!\n");
            }
        } else {
            // Nghiệm duy nhất x = -c / b
            x1 = -c / b;
            printf(">> Ket qua: Phuong trinh tro thanh bac nhat, co 1 nghiem x = %.4f\n", x1);
        }
    } 
    
    // TRƯỜNG HỢP 2: THỰC SỰ LÀ BẬC HAI KHI a != 0
    else {
        // Tính biệt thức Delta
        delta = b * b - 4 * a * c;
        printf(">> Tinh toan: Delta = %.4f\n", delta);

        if (delta < 0) {
            printf(">> Ket qua: Delta < 0, phuong trinh VO NGHIEM thuc!\n");
        } 
        else if (delta == 0) {
            x1 = -b / (2 * a);
            printf(">> Ket qua: Delta = 0, phuong trinh co NGHIEM KEP: x = %.4f\n", x1);
        } 
        else {
            // Delta > 0 -> Áp dụng công thức nghiệm
            float sqrtDelta = sqrt(delta);
            x1 = (-b + sqrtDelta) / (2 * a);
            x2 = (-b - sqrtDelta) / (2 * a);
            
            printf(">> Ket qua: Delta > 0, phuong trinh co 2 NGHIEM PHAN BIET:\n");
            printf("   - x1 = %.4f\n", x1);
            printf("   - x2 = %.4f\n", x2);
        }
    }

    return 0;
}
