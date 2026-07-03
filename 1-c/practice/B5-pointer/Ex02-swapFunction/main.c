/* =========================================================================
   THỰC HÀNH C: HÀM HOÁN VỊ HAI SỐ SỬ DỤNG CON TRỎ (SWAP FUNCTION)
   =========================================================================
   
   YÊU CẦU ĐỀ BÀI:
   1. Viết một hàm hoán vị (swap) nhận vào hai tham số là địa chỉ của hai số nguyên.
   2. Sử dụng con trỏ để truy cập và trao đổi giá trị của hai vùng nhớ đó (Pass by Reference).
   3. Nhập hai số nguyên `a` và `b` từ bàn phím, gọi hàm hoán vị, và in kết quả ra màn hình để kiểm chứng giá trị thực sự thay đổi sau khi thoát khỏi hàm.
   
   HỌC THUYẾT:
   - Truyền tham trị (Pass by Value): Bản sao của tham số được gửi vào hàm. Thay đổi bên trong hàm KHÔNG ảnh hưởng tới biến gốc ngoài hàm main.
   - Truyền tham chiếu/con trỏ (Pass by Reference): Địa chỉ của biến được gửi vào hàm. Thay đổi bên trong hàm THAY ĐỔI TRỰC TIẾP biến gốc.
   ========================================================================= */

#include <stdio.h>
#include <stdlib.h>

// Định nghĩa prototype của hàm hoán vị sử dụng con trỏ
void swapFunction(int *a, int *b);

int main()
{
    int num1, num2;

    printf("=== HE THONG HOAN VI CON TRO ===\n");
    printf("Nhap vao so nguyen a = ");
    scanf("%d", &num1);
    printf("Nhap vao so nguyen b = ");
    scanf("%d", &num2);

    printf("\n>>> Truoc khi hoan vi:\n");
    printf("   a = %d, b = %d\n", num1, num2);

    // Gọi hàm hoán vị và truyền địa chỉ (&) của num1 và num2
    swapFunction(&num1, &num2);

    printf("\n>>> Sau khi hoan vi (Goi ham swap):\n");
    printf("   a = %d, b = %d\n", num1, num2);
    printf("=================================\n");

    return 0;
}

/**
 * Hàm hoán vị giá trị của hai số nguyên thông qua con trỏ
 * @param a Con trỏ lưu địa chỉ số thứ nhất
 * @param b Con trỏ lưu địa chỉ số thứ hai
 */
void swapFunction(int *a, int *b) {
    int tmp = *a; // Lưu trữ giá trị nằm tại địa chỉ a vào biến tạm
    *a = *b;      // Gán giá trị tại địa chỉ b vào địa chỉ a
    *b = tmp;     // Gán giá trị biến tạm vào địa chỉ b
}
