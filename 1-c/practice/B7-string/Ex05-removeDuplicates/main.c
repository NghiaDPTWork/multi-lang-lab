/* =========================================================================
   THỰC HÀNH C: LOẠI BỎ KÝ TỰ TRÙNG LẶP TRONG CHUỖI (REMOVE DUPLICATE CHARACTERS)
   =========================================================================
   
   YÊU CẦU ĐỀ BÀI:
   1. Viết chương trình cho phép loại bỏ toàn bộ các ký tự bị lặp lại trong chuỗi (chỉ giữ lại ký tự đầu tiên).
   2. Viết hàm `removeDuplicatesInStr` duyệt qua chuỗi và loại bỏ tất cả các ký tự trùng lặp đứng sau ký tự gốc.
      - Ví dụ:
        + Chuỗi ban đầu: "Xin Chao Cac Ban Tre Yeu Quy"
        + Sau khi lọc trùng: "Xin Chao C B n T r Y e u Q y" (Lọc hết chữ trùng, kể cả khoảng trắng trùng lặp).
        
   ========================================================================= */

#include <stdio.h>
#include <stdlib.h>

int strLen(const char str[]);
void delCharByPos(char str[], int pos);
void removeDuplicatesInStr(char str[]);

int main()
{
    char str[100] = "Xin Chao Cac Ban Tre Yeu Quy";

    printf("=== HE THONG LOC TRUNG KY TU TRONG CHUOI ===\n");
    printf("1. Chuoi ban dau: \"%s\"\n", str);

    // Tiến hành lọc trùng
    removeDuplicatesInStr(str);

    printf("\n2. Chuoi sau khi loc: \"%s\"\n", str);
    printf("============================================\n");

    return 0;
}

int strLen(const char str[]) {
    int count = 0;
    while (str[count] != '\0') {
        count++;
    }
    return count;
}

void delCharByPos(char str[], int pos) {
    int len = strLen(str);
    if (pos < 0 || pos >= len) return;

    for (int i = pos; i <= len - 1; i++) {
        str[i] = str[i + 1];
    }
}

/**
 * Loại bỏ toàn bộ ký tự trùng lặp trong chuỗi
 */
void removeDuplicatesInStr(char str[]) {
    int len = strLen(str);
    if (len < 2) return;

    for (int i = 0; i <= len - 2; i++) {
        for (int j = i + 1; j <= len - 1; j++) {
            // Nếu phát hiện ký tự tại j giống hệt ký tự tại i
            if (str[i] == str[j]) {
                delCharByPos(str, j); // Xóa ký tự trùng lặp tại vị trí j
                j--; // Trừ j để đối chiếu lại ký tự mới vừa được dịch sang trái
                len--; // Giảm chiều dài chuỗi tạm thời
            }
        }
    }
}
