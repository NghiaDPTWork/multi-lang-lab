/* =========================================================================
   THỰC HÀNH C: CẮT VÀ GHÉP CHUỖI NÂNG CAO (STRING SPLICE & CUT)
   =========================================================================
   
   YÊU CẦU ĐỀ BÀI:
   1. Viết hàm `strDiv` nhận vào chuỗi gốc `strM`, vị trí cắt `pos` và chuỗi đích `strS`.
      Hàm sẽ cắt toàn bộ ký tự từ vị trí `pos` đến hết chuỗi `strM`, lưu sang `strS` và thêm ký tự `\0` kết thúc cho cả hai chuỗi.
      - Ví dụ:
        + Chuỗi ban đầu: M = "XinChaoMoinguoi", pos = 7
        + Kết quả: M = "XinChao", S = "Moinguoi"
   2. Viết hàm `insertStr` chèn chuỗi `strS` vào trong chuỗi `strM` tại một vị trí chỉ định `pos`.
      Hàm tự động nới lỏng mảng chuỗi `strM` để nhét vừa chuỗi `strS`.
      
   ========================================================================= */

#include <stdio.h>
#include <stdlib.h>

int strLen(const char str[]);
void strDiv(char strM[], int pos, char strS[]);
int insertStr(char strM[], const char strS[], int pos);

int main()
{
    char strM[100] = "XinChaoMoinguoi";
    char strS[100] = "";

    printf("=== HE THONG CAT GHEP CHUOI NANG CAO (SPLICE) ===\n");
    printf("1. Chuoi M ban dau: \"%s\"\n", strM);

    // Tiến hành cắt chuỗi tại vị trí index 7
    strDiv(strM, 7, strS);
    printf("\n>>> Thuc hien cat chuoi tai index 7 (strDiv):\n");
    printf("   - Chuoi M sau khi cat: \"%s\"\n", strM);
    printf("   - Chuoi S nhan duoc  : \"%s\"\n", strS);

    // Tiến hành chèn ngược lại chuỗi "Em" vào vị trí index 7
    insertStr(strM, "Em", 7);
    printf("\n>>> Thuc hien chen chuoi \"Em\" vao index 7 (insertStr):\n");
    printf("   - Chuoi M sau khi chen: \"%s\"\n", strM);
    printf("==================================================\n");

    return 0;
}

int strLen(const char str[]) {
    int count = 0;
    while (str[count] != '\0') {
        count++;
    }
    return count;
}

/**
 * Cắt chuỗi strM từ vị trí pos đến hết, gán phần cắt đó vào strS
 */
void strDiv(char strM[], int pos, char strS[]) {
    int lenM = strLen(strM);
    if (pos < 0 || pos > lenM) return;

    strS[0] = '\0'; // Xóa rỗng chuỗi S trước khi gán
    int sizeS = 0;

    // Sao chép từ vị trí pos đến hết vào chuỗi S
    for (int i = pos; i < lenM; i++) {
        strS[sizeS++] = strM[i];
    }
    strS[sizeS] = '\0'; // Thêm ký tự kết thúc cho chuỗi S

    strM[pos] = '\0'; // Đặt ký tự kết thúc cho chuỗi M tại chính vị trí pos vừa cắt
}

/**
 * Chèn chuỗi strS vào trong chuỗi strM tại vị trí pos
 * @return 1 nếu thành công, 0 nếu thất bại
 */
int insertStr(char strM[], const char strS[], int pos) {
    int lenM = strLen(strM);
    int lenS = strLen(strS);

    if (pos < 0 || pos > lenM) return 0; // Vi trí chèn không hợp lệ

    // 1. Nới rộng chuỗi M để tạo khoảng trống cho chuỗi S
    for (int i = lenM - 1; i >= pos; i--) {
        strM[i + lenS] = strM[i];
    }
    strM[lenM + lenS] = '\0';

    // 2. Điền nội dung chuỗi S vào khoảng trống vừa tạo tại vị trí pos
    int p = pos;
    for (int i = 0; i < lenS; i++) {
        strM[p++] = strS[i];
    }

    return 1;
}
