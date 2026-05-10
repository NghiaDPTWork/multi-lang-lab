/* =========================================================================
   HỆ THỐNG BÀI HỌC: XÓA BỘ NHỚ ĐỆM BÀN PHÍM TRONG C (KEYBOARD BUFFER)
   =========================================================================
   
   1. BẢN CHẤT CỦA BỘ NHỚ ĐỆM (BUFFER - STDIN):
      - Khi ta gõ từ bàn phím và bấm ENTER (mã ASCII 10), tất cả các ký tự (bao gồm cả phím ENTER đó) sẽ đi vào vùng nhớ đệm trước.
      - Lệnh `scanf("%d", &var)` chỉ nhặt lấy số, và BỎ LẠI phím ENTER trong bộ nhớ đệm.
      
   2. HIỆN TƯỢNG TRÔI LỆNH (BUFFER OVERFLOW PROBLEM):
      - Khi lệnh tiếp theo yêu cầu nhập ký tự `scanf("%c", &var)` hoặc chuỗi, nó sẽ tự động nhặt phím ENTER đang nằm chờ sẵn trong bộ đệm -> Nó tưởng người dùng đã nhập xong và bỏ qua việc dừng màn hình để người dùng gõ phím thực tế.

   3. GIẢI PHÁP:
      - Sử dụng `fflush(stdin);` (Windows specific) hoặc `while(getchar() != '\n');` (Standard cross-platform) để dọn sạch hoàn toàn bộ nhớ đệm trước khi thực hiện lần nhập kế tiếp.
   ========================================================================= */

#include <stdio.h>
#include <stdlib.h>

int main()
{
    int age;
    char nameInitial;

    // --- PHẦN 1: NHẬP SỐ NGUYÊN ---
    printf("Nhap tuoi cua ban: ");
    scanf("%d", &age); // Người dùng gõ: 20 [ENTER] -> %d lấy số 20, để lại phím [ENTER] trong buffer
    
    
    // --- PHẦN 2: KHẮC PHỤC HIỆN TƯỢNG TRÔI LỆNH (IMPORTANT!) ---
    printf("--- Dang tien hanh xoa bo nho dem bang fflush(stdin) ---\n");
    fflush(stdin); 
    
    
    // --- PHẦN 3: NHẬP KÝ TỰ (DỄ BỊ TRÔI NẾU KHÔNG XÓA BUFFER) ---
    printf("Nhap chu cai dau tien cua ten ban: ");
    scanf("%c", &nameInitial); // Nếu không có lệnh trên, scanf này sẽ tự động hốt phím [ENTER] và bỏ qua bạn!


    // --- PHẦN 4: KẾT QUẢ ---
    printf("\nThong tin nhan duoc:\n");
    printf("Age: %d\n", age);
    printf("Name Initial: %c\n", nameInitial);

    return 0;
}
