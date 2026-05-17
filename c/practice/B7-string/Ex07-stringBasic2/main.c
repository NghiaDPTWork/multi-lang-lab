/* =========================================================================
   THỰC HÀNH C: CÁC KỸ THUẬT XỬ LÝ CHUỖI NÂNG CAO KHÁC (ADDITIONAL STRING TECHNIQUES)
   =========================================================================
   
   YÊU CẦU ĐỀ BÀI:
   Viết chương trình C tổng hợp một số phương thức nâng cao hỗ trợ xử lý chuỗi:
   1. Viết hàm `wordCount` đếm số lượng từ có mặt trong một chuỗi văn bản (các từ phân tách bởi khoảng trắng).
   2. Viết hàm `trim` loại bỏ các khoảng trắng thừa ở đầu và cuối chuỗi.
   
   ========================================================================= */

#include <stdio.h>
#include <stdlib.h>

int strLen(const char str[]);
int wordCount(const char str[]);
void trim(char str[]);

int main()
{
    char text[100] = "   Lap trinh C rat   thu vi va bo ich!   ";

    printf("=== HE THONG XU LY CHUOI KY TU BO SUNG ===\n");
    printf("1. Chuoi ban dau: \"%s\"\n", text);
    printf("   So tu ban dau : %d\n", wordCount(text));

    // Thực hiện cắt khoảng trắng thừa
    trim(text);
    printf("\n2. Chuoi sau khi trim: \"%s\"\n", text);
    printf("   So tu sau trim   : %d\n", wordCount(text));
    printf("=========================================\n");

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
 * Đếm số lượng từ có mặt trong chuỗi (phân biệt bởi khoảng trắng)
 */
int wordCount(const char str[]) {
    int count = 0;
    int inWord = 0; // Biến trạng thái: 1 nếu đang duyệt bên trong 1 từ, 0 nếu ngoài từ
    int i = 0;

    while (str[i] != '\0') {
        // Nếu gặp khoảng trắng hoặc ký tự xuống dòng
        if (str[i] == ' ' || str[i] == '\t' || str[i] == '\n') {
            inWord = 0;
        } 
        // Nếu gặp một ký tự chữ và trước đó là khoảng trắng
        else if (inWord == 0) {
            inWord = 1;
            count++; // Phát hiện từ mới
        }
        i++;
    }

    return count;
}

/**
 * Loại bỏ khoảng trắng thừa ở đầu và cuối chuỗi
 */
void trim(char str[]) {
    int len = strLen(str);
    if (len == 0) return;

    // 1. Xóa khoảng trắng thừa ở cuối chuỗi
    int end = len - 1;
    while (end >= 0 && (str[end] == ' ' || str[end] == '\t' || str[end] == '\n')) {
        end--;
    }
    str[end + 1] = '\0'; // Đặt ký tự null kết thúc chuỗi mới tại đây

    // 2. Xóa khoảng trắng thừa ở đầu chuỗi
    int start = 0;
    while (str[start] == ' ' || str[start] == '\t' || str[start] == '\n') {
        start++;
    }

    // Dịch toàn bộ chuỗi sang trái nếu có khoảng trắng ở đầu
    if (start > 0) {
        int i = 0;
        while (str[start + i] != '\0') {
            str[i] = str[start + i];
            i++;
        }
        str[i] = '\0'; // Đánh dấu kết thúc chuỗi
    }
}
