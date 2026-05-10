/* =========================================================================
   BÀI TẬP THỰC HÀNH C: VẼ TAM GIÁC CÂN RỖNG (HOLLOW ISOSCELES TRIANGLE)
   =========================================================================
   
   ĐỀ BÀI:
   Nhập vào số nguyên dương h biểu thị chiều cao.
   Thực hiện vẽ một tam giác cân rỗng bằng các ký tự '*' trên màn hình.
   
   VÍ DỤ VỚI h = 4:
      *        (dòng 1)
     * *       (dòng 2)
    *   *      (dòng 3)
   *******     (dòng 4 - dòng đáy in đặc)
   
   PHÂN TÍCH LOGIC TOÁN HỌC:
   - Vị trí cột trung tâm (Đỉnh): `middle = height`.
   - Chiều rộng tổng thể đáy: `2 * height - 1`.
   - Với dòng thứ `i` (chạy từ 1 đến `h`):
     + Nếu là dòng cuối (`i == h`) -> In toàn bộ dấu '*'.
     + Nếu dòng khác -> Chỉ in '*' tại 2 biên: `middle - (i - 1)` và `middle + (i - 1)`.
   ========================================================================= */

#include <stdio.h>
#include <stdlib.h>

int main()
{
    int height;
    
    printf("--- CHUONG TRINH VE TAM GIAC CAN RONG ---\n");
    printf("Nhap vao chieu cao (height): ");
    scanf("%d", &height);

    if (height < 1) {
        printf(">> LOI: Chieu cao phai lon hon 0.\n");
    }
    else {
        printf("\nKet qua hinh ve:\n");

        // Vòng lặp ngoài duyệt qua từng hàng (i)
        for (int i = 1; i <= height; i++) {
            
            // Vòng lặp trong duyệt qua từng cột (j)
            // Chiều ngang của tam giác cân luôn là 2 * height - 1
            for (int j = 1; j <= (2 * height - 1); j++) {
                
                // TH1: In dấu sao ở dòng đáy
                // TH2: In dấu sao ở cạnh trái của tam giác
                // TH3: In dấu sao ở cạnh phải của tam giác
                if (i == height || j == (height - i + 1) || j == (height + i - 1)) {
                    printf("*");
                } 
                else {
                    // In khoảng trống cho phần rỗng
                    printf(" ");
                }
            }
            
            // Hết một hàng, thực hiện xuống dòng
            printf("\n");
        }
    }

    return 0;
}
