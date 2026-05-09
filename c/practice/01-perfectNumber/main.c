/* =========================================================================
   THỬ THÁCH THỰC HÀNH C: SỐ HOÀN HẢO & SỐ ARMSTRONG (PERFECT & ARMSTRONG NUMBERS)
   =========================================================================
   
   YÊU CẦU ĐỀ BÀI:
   Hãy viết một chương trình C sử dụng các kiến thức đã học về vòng lặp (For/While) 
   và cấu trúc rẽ nhánh (If/Else) để thực hiện hai chức năng toán học thú vị sau:

   1. CHỨC NĂNG 1: KIỂM TRA SỐ HOÀN HẢO (PERFECT NUMBER)
      - Khái niệm: Một số nguyên dương được gọi là "Số hoàn hảo" nếu tổng tất cả các 
        ước số thực sự của nó (ngoại trừ chính nó) bằng chính số đó.
      - Ví dụ: 
        + Số 6: Các ước thực sự là 1, 2, 3. Tổng = 1 + 2 + 3 = 6 -> ĐÚNG!
        + Số 28: Các ước thực sự là 1, 2, 4, 7, 14. Tổng = 1+2+4+7+14 = 28 -> ĐÚNG!
        + Số 12: Các ước thực sự là 1, 2, 3, 4, 6. Tổng = 16 != 12 -> SAI!

   2. CHỨC NĂNG 2: KIỂM TRA SỐ ARMSTRONG (ARMSTRONG NUMBER)
      - Khái niệm: Một số nguyên dương có N chữ số được gọi là "Số Armstrong" nếu tổng
        các lũy thừa bậc N của từng chữ số của nó bằng chính số đó.
      - Ví dụ:
        + Số 153: Có 3 chữ số (N = 3).
          Tổng = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153 -> ĐÚNG!
        + Số 370: Có 3 chữ số (N = 3).
          Tổng = 3^3 + 7^3 + 0^3 = 27 + 343 + 0 = 370 -> ĐÚNG!
        + Số 1634: Có 4 chữ số (N = 4).
          Tổng = 1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634 -> ĐÚNG!

   HƯỚNG DẪN BẮT ĐẦU:
   - Hãy hoàn thiện hai hàm `isPerfectNumber(int n)` và `isArmstrongNumber(int n)` bên dưới.
   - Hàm main đã được dựng sẵn một giao diện Menu hiển thị bắt mắt để bạn dễ dàng test thử!
   ========================================================================= */

#include <stdio.h>
#include <stdlib.h>
#include <math.h>

// --- PHẦN 1: ĐỊNH NGHĨA CÁC HÀM KIỂM TRA (HÃY VIẾT CODE CỦA BẠN TẠI ĐÂY) ---

/**
 * Kiểm tra xem n có phải là Số hoàn hảo hay không.
 * @return 1 nếu đúng, 0 nếu sai.
 */
int isPerfectNumber(int n) {
    // TODO: Thực hiện tính tổng các ước của n (từ 1 đến n/2) và so sánh với n
    
    return 0; // Thay đổi giá trị trả về phù hợp
}

/**
 * Kiểm tra xem n có phải là Số Armstrong hay không.
 * @return 1 nếu đúng, 0 nếu sai.
 */
int isArmstrongNumber(int n) {
    // TODO: 1. Đếm số lượng chữ số (N) của n
    // TODO: 2. Tách từng chữ số, tính lũy thừa bậc N của nó và cộng dồn lại
    // TODO: 3. So sánh tổng cộng dồn với số n ban đầu
    
    return 0; // Thay đổi giá trị trả về phù hợp
}


// --- PHẦN 2: CHƯƠNG TRÌNH CHẠY CHÍNH (MAIN FUNCTION) ---
int main() {
    int choice = 0;
    int number = 0;
    
    while (1) {
        printf("\n============================================\n");
        printf("   MENU THU THACH LAP TRINH C (CHALLENGE)   \n");
        printf("============================================\n");
        printf("1. Kiem tra So Hoan Hao (Perfect Number)\n");
        printf("2. Kiem tra So Armstrong (Armstrong Number)\n");
        printf("3. Thoat chuong trinh\n");
        printf("--------------------------------------------\n");
        printf("Moi ban nhap lua chon (1-3): ");
        scanf("%d", &choice);
        
        if (choice == 3) {
            printf("\nTam biet! Cam on ban da tham gia thu thach.\n");
            break;
        }
        
        if (choice == 1 || choice == 2) {
            printf("Nhap vao so nguyen duong can kiem tra: ");
            scanf("%d", &number);
            if (number <= 0) {
                printf("Vui long nhap so nguyen duong lon hon 0!\n");
                continue;
            }
        }
        
        switch (choice) {
            case 1:
                if (isPerfectNumber(number)) {
                    printf("\n>>> KET QUA: %d LA So Hoan Hao!\n", number);
                } else {
                    printf("\n>>> KET QUA: %d KHONG phai la So Hoan Hao!\n", number);
                }
                break;
            case 2:
                if (isArmstrongNumber(number)) {
                    printf("\n>>> KET QUA: %d LA So Armstrong!\n", number);
                } else {
                    printf("\n>>> KET QUA: %d KHONG phai la So Armstrong!\n", number);
                }
                break;
            default:
                printf("\nLua chon khong hop le! Vui long nhap lai.\n");
        }
    }
    
    return 0;
}
