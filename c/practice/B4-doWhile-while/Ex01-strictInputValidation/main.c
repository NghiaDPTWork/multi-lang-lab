/* =========================================================================
   BÀI TẬP THỰC HÀNH C: XÂY DỰNG HỘP NHẬP DỮ LIỆU SẠCH (STRICT INPUT VALIDATION)
   =========================================================================
   
   ĐỀ BÀI:
   Viết chương trình liên tục yêu cầu người dùng nhập tuổi (age).
   1. Ép buộc người dùng nhập đúng định dạng SỐ NGUYÊN (Không chứa chữ cái thừa ở sau).
   2. Đồng thời tuổi phải nằm trong khoảng hợp lý từ 1 đến 120 tuổi.
   Chỉ khi nào thỏa mãn cả 2 điều kiện trên thì mới được thoát vòng lặp và in ra tuổi.
   
   KỸ THUẬT SỬ DỤNG:
   - Vòng lặp `do-while` để bắt nhập lại.
   - Lệnh `fflush(stdin)` làm sạch bộ đệm.
   - Biến `bufferCheck` hốt ký tự thừa để so sánh với mã ASCII 10 (phím ENTER).
   ========================================================================= */

#include <stdio.h>
#include <stdlib.h>

int main()
{
    int age;
    char bufferCheck; // Biến thần thánh để bắt ký tự thừa sau con số

    printf("=== HE THONG XAC MINH DO TUOI KHACH HANG ===\n");

    do {
        // Bước 1: Dọn sạch bộ đệm trước khi cho nhập lượt mới
        fflush(stdin);

        printf("\nVui long nhap tuoi cua ban (1 - 120): ");
        
        // Bước 2: Hốt số và hốt ngay ký tự còn sót lại phía sau
        scanf("%d", &age);
        scanf("%c", &bufferCheck);

        // Bước 3: Biện luận logic
        // Kiểm tra xem có ký tự rác không? (bufferCheck != 10)
        if (bufferCheck != 10) {
            printf(">> CANH BAO: Ban da nhap sai kieu du lieu! Khong duoc go chu cai.\n");
        }
        // Nếu là số, kiểm tra xem có nằm trong tầm kiểm soát ko?
        else if (age < 1 || age > 120) {
            printf(">> CANH BAO: So tuoi %d khong hop le (Phai tu 1 den 120)!\n", age);
        }
        else {
            // Đã thỏa mãn toàn bộ điều kiện
            break; // Thoát khỏi vòng lặp do-while ngay lập tức!
        }

    } while (1); // Lặp vô tận, thoát bằng lệnh `break` ở trên khi dữ liệu chuẩn

    printf("\n================ KET QUA ================\n");
    printf("=> Dinh dang hop le! He thong ghi nhan tuoi la: %d\n", age);
    printf("=========================================\n");

    return 0;
}
