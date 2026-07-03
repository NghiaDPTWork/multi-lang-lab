/* =========================================================================
   BÀI TẬP THỰC HÀNH C: XÂY DỰNG MENU LỰA CHỌN TƯƠNG TÁC (INTERACTIVE MENU)
   =========================================================================
   
   ĐỀ BÀI:
   Viết chương trình hiển thị một thực đơn (Menu) gồm 3 tùy chọn:
   1. In ra màn hình câu chào "Xin chào the gioi!".
   2. Nhập vào một số và tính bình phương của nó.
   3. Thoát chương trình.
   
   YÊU CẦU KỸ THUẬT:
   - Sử dụng vòng lặp `do-while` để chương trình LUÔN HIỂN THỊ MENU ÍT NHẤT 1 LẦN.
   - Menu phải hiển thị đi hiển thị lại liên tục SAU MỖI LẦN THỰC THI LỆNH.
   - Chỉ khi người dùng nhập tùy chọn số 3 thì vòng lặp mới kết thúc.
   - Sử dụng cấu trúc `switch-case` để rẽ nhánh xử lý tùy chọn.
   ========================================================================= */

#include <stdio.h>
#include <stdlib.h>

int main()
{
    int choice; // Biến lưu trữ lựa chọn của người dùng

    do {
        // === BƯỚC 1: HIỂN THỊ GIAO DIỆN MENU ===
        printf("\n========== HỆ THỐNG MENU CHỨC NĂNG ==========\n");
        printf("1. Gui loi chao den the gioi\n");
        printf("2. Tinh binh phuong mot con so\n");
        printf("3. Thoat chuong trinh\n");
        printf("=============================================\n");
        
        printf("=> Moi ban nhap vao lua chon (1-3): ");
        scanf("%d", &choice);


        // === BƯỚC 2: XỬ LÝ LOGIC THEO LỰA CHỌN (SWITCH CASE) ===
        switch (choice) {
            case 1:
                printf("\n>> KET QUA: Hello World! Chuc ban mot ngay tot lanh!\n");
                break;

            case 2:
                {
                    float num;
                    printf("\n>> Nhap vao con so muon tinh: ");
                    scanf("%f", &num);
                    printf(">> KET QUA: Binh phuong cua %.2f la: %.2f\n", num, num * num);
                }
                break;

            case 3:
                printf("\n>> Cam on ban da su dung chuong trinh. Dang thoat...\n");
                break;

            default:
                printf("\n>> LOI: Lua chon '%d' khong ton tai. Vui long chon lai!\n", choice);
                break;
        }

        // Dừng màn hình một chút cho dễ nhìn (tùy chọn)
        printf("---------------------------------------------\n");

    } while (choice != 3); // ĐIỀU KIỆN LẶP: Tiếp tục nếu lựa chọn KHÁC 3

    printf("\n=== CHUONG TRINH KET THUC THANH CONG ===\n");

    return 0;
}
