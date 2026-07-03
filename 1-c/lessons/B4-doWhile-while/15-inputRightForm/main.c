/* =========================================================================
   HỆ THỐNG BÀI HỌC: KỸ THUẬT ÉP NHẬP ĐÚNG ĐỊNH DẠNG (INPUT VALIDATION LOOP)
   =========================================================================
   
   1. TÌNH HUỐNG VẤN ĐỀ:
      - Khi yêu cầu nhập số nguyên bằng `scanf("%d", &n)`, nếu người dùng phá hoại gõ "12a" [ENTER].
      - `scanf("%d")` sẽ hốt số 12, nhưng vẫn CÒN SÓT LẠI ký tự 'a' và phím [ENTER] trong bộ đệm.
      - Đây gọi là nhập bẩn (Dirty Input).

   2. GIẢI PHÁP KINH ĐIỂN VỚI DO-WHILE:
      - Ta sử dụng 2 lệnh scanf liên tiếp:
        + `scanf("%d", &n)` -> Hốt con số hợp lệ đầu tiên.
        + `scanf("%c", &garbage)` -> Nhặt NGAY ký tự còn sót lại liền sau số vừa nhập.
      - Phân tích logic:
        + Nếu nhập chuẩn "12" [ENTER] -> garbage = [ENTER] (mã ASCII là 10). 
          => Điều kiện lặp SAI -> Thoát vòng lặp -> THÀNH CÔNG!
        + Nếu nhập bẩn "12a" [ENTER] -> garbage = 'a' (mã ASCII != 10).
          => Điều kiện lặp ĐÚNG -> Bắt nhập lại -> THẤT BẠI!
   ========================================================================= */

#include <stdio.h>
#include <stdlib.h>

int main()
{
    int number;
    char bufferCheck; // Biến thần thánh để bắt ký tự thừa sau số

    printf("--- CHUONG TRINH EP NHAP SO NGUYEN CHUAN ---\n\n");

    do {
        // B1: Làm sạch bộ nhớ đệm trước khi nhập mới để đảm bảo an toàn
        fflush(stdin);

        printf("Vui long nhap mot so nguyen hop le: ");
        
        // B2: Hốt số và hốt ký tự thừa liền kề
        scanf("%d", &number);
        scanf("%c", &bufferCheck);

        // B3: Kiểm tra xem ký tự nhặt được có phải là ENTER (mã 10) hay không
        if (bufferCheck != 10) {
            // Nếu bufferCheck khác 10 tức là có rác sau số (ví dụ 'a' trong "12a")
            printf(">> LOI: Ban da nhap sai dinh dang! Vui long chi nhap so thoi.\n\n");
        }

    } while (bufferCheck != 10); // Tiếp tục lặp nếu ký tự sau số không phải phím ENTER

    printf("\nChuc mung! Ban da nhap thanh cong so: %d\n", number);

    return 0;
}
