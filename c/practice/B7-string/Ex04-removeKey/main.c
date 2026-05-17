/* =========================================================================
   THỰC HÀNH C: XÓA BỎ KÝ TỰ CHỈ ĐỊNH KHỎI CHUỖI (REMOVE KEY IN STRING)
   =========================================================================
   
   YÊU CẦU ĐỀ BÀI:
   1. Viết hàm `delCharByPos` thực hiện xóa ký tự tại vị trí index `pos` trong chuỗi bằng cách dịch các ký tự sau sang trái.
   2. Viết hàm `delKeyInStr` duyệt qua toàn bộ chuỗi và tìm kiếm tất cả các ký tự trùng khớp với ký tự `key` cần xóa.
      - Gọi hàm `delCharByPos` để loại bỏ ký tự đó và dịch chuyển chuỗi.
      - Đảm bảo xử lý đúng khi các ký tự trùng nhau đứng liền kề (nhờ lùi chỉ số duyệt `i--`).
      - Ví dụ:
        + Chuỗi ban đầu: "Xin Chao Ban Yeu Dau Cua Toi Nhe"
        + Sau khi xóa ký tự 'a': "Xin Cho Bn Yeu Du Cu Toi Nhe"
        
   ========================================================================= */

#include <stdio.h>
#include <stdlib.h>

int strLen(const char str[]);
void delCharByPos(char str[], int pos);
void delKeyInStr(char str[], char key);

int main()
{
    char str[100] = "Xin Chao Ban Yeu Dau Cua Toi Nhe";
    char key = 'a';

    printf("=== HE THONG XOA KY TU CHI DINH TRONG CHUOI ===\n");
    printf("1. Chuoi truoc khi xoa: \"%s\"\n", str);
    printf("   Ky tu can xoa (key): '%c'\n", key);

    // Tiến hành xóa
    delKeyInStr(str, key);

    printf("\n2. Chuoi sau khi xoa   : \"%s\"\n", str);
    printf("================================================\n");

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
 * Xóa ký tự tại vị trí pos và dịch các phần tử sau sang trái 1 đơn vị
 */
void delCharByPos(char str[], int pos) {
    int len = strLen(str);
    if (pos < 0 || pos >= len) return;

    for (int i = pos; i <= len - 1; i++) {
        str[i] = str[i + 1]; // Gán ký tự sau đè lên ký tự trước (bao gồm cả ký tự '\0' cuối cùng)
    }
}

/**
 * Tìm và xóa toàn bộ ký tự key xuất hiện trong chuỗi
 */
void delKeyInStr(char str[], char key) {
    int len = strLen(str);
    for (int i = 0; i < len; i++) {
        if (str[i] == key) {
            delCharByPos(str, i); // Gọi hàm xóa tại index i
            i--; // Giảm chỉ số duyệt để kiểm tra lại ký tự mới vừa được đẩy lên vị trí i
            len--; // Giảm độ dài chuỗi tạm thời đi 1 đơn vị để tối ưu hóa vòng lặp
        }
    }
}
