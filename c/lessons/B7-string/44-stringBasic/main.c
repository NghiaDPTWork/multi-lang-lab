#include <stdio.h>
#include <stdlib.h>

/* =========================================================================
   BÀI HỌC C: KIẾN THỨC CƠ BẢN VỀ CHUỖI KÝ TỰ (STRING / CHARACTER ARRAY)
   =========================================================================
   - Chuỗi trong C (C-style String): Thực chất là một mảng một chiều các ký tự `char`,
     được kết thúc bằng ký tự đặc biệt gọi là null terminator `\0` (Mã ASCII = 0).
   - Khai báo chuỗi: `char str[100] = "Xin Chao";`
   - Ký tự null `\0`: Báo hiệu cho các hàm in (như `printf`) biết điểm dừng của chuỗi.
   - Các thao tác nền tảng:
     * Độ dài chuỗi (strlen): Đếm số ký tự từ đầu chuỗi cho tới trước ký tự `\0`.
     * Sao chép chuỗi (strcpy), Nối chuỗi (strcat), So sánh chuỗi (strcmp).
   ========================================================================= */

int strLen(const char str[]);

int main()
{
    // Khai báo hai chuỗi ký tự cơ bản
    char strM[100] = "Xin Chao";
    char strS[100] = "Moi Nguoi";

    printf("=== HE THONG CHUOI KY TU C-STYLE ===\n");
    printf("1. Chuoi M: \"%s\"\n", strM);
    printf("2. Do dai thuc su cua chuoi M (strLen) = %d\n", strLen(strM));
    printf("3. Chuoi S: \"%s\"\n", strS);
    printf("4. Do dai thuc su cua chuoi S (strLen) = %d\n", strLen(strS));
    printf("=====================================\n");

    return 0;
}

/**
 * Hàm tự viết để tính độ dài thực sự của một chuỗi ký tự
 * @param str Chuỗi ký tự cần đếm
 * @return Số lượng ký tự (trước ký tự '\0')
 */
int strLen(const char str[]) {
    int len = 0;
    while (str[len] != '\0') {
        len++; // Tăng đếm cho đến khi gặp ký tự dừng '\0'
    }
    return len;
}
