/* =========================================================================
   THỰC HÀNH C: CHUYỂN ĐỔI CHỮ HOA VÀ CHỮ THƯỜNG TRONG CHUỖI (CASE CONVERTER)
   =========================================================================
   
   YÊU CẦU ĐỀ BÀI:
   1. Viết hàm `strLwr` chuyển đổi toàn bộ ký tự viết hoa (A-Z) thành viết thường (a-z) trong chuỗi.
   2. Viết hàm `strUpr` chuyển đổi toàn bộ ký tự viết thường (a-z) thành viết hoa (A-Z) trong chuỗi.
   
   THUYẾT ASCII:
   - Các chữ cái viết hoa 'A' đến 'Z' có mã ASCII từ 65 đến 90.
   - Các chữ cái viết thường 'a' đến 'z' có mã ASCII từ 97 đến 122.
   - Khoảng cách giữa chữ cái viết hoa và viết thường là 32 đơn vị ('a' - 'A' = 32).
     + Muốn viết thường hóa: ký tự = ký tự + 32.
     + Muốn viết hoa hóa: ký tự = ký tự - 32.
   ========================================================================= */

#include <stdio.h>
#include <stdlib.h>

void strLwr(char str[]);
void strUpr(char str[]);

int main()
{
    char str1[100] = "LAP trinh C la NEN tang QUAN trong!";
    char str2[100] = "lap TRINH c LA nen TANG quan TRONG!";

    printf("=== HE THONG BIEN DOI CHU HOA - THUONG ===\n");
    
    printf("1. Chuoi 1 ban dau: \"%s\"\n", str1);
    strLwr(str1);
    printf("   Sau khi viet thuong: \"%s\"\n", str1);

    printf("\n2. Chuoi 2 ban dau: \"%s\"\n", str2);
    strUpr(str2);
    printf("   Sau khi viet hoa   : \"%s\"\n", str2);
    
    printf("=========================================\n");

    return 0;
}

/**
 * Chuyển đổi toàn bộ ký tự chữ hoa trong chuỗi thành chữ thường
 */
void strLwr(char str[]) {
    int i = 0;
    while (str[i] != '\0') {
        // Nếu ký tự hiện tại nằm trong dải chữ hoa 'A' -> 'Z'
        if (str[i] >= 'A' && str[i] <= 'Z') {
            str[i] = str[i] + 32; // Chuyển thành chữ thường tương ứng
        }
        i++;
    }
}

/**
 * Chuyển đổi toàn bộ ký tự chữ thường trong chuỗi thành chữ hoa
 */
void strUpr(char str[]) {
    int i = 0;
    while (str[i] != '\0') {
        // Nếu ký tự hiện tại nằm trong dải chữ thường 'a' -> 'z'
        if (str[i] >= 'a' && str[i] <= 'z') {
            str[i] = str[i] - 32; // Chuyển thành chữ hoa tương ứng
        }
        i++;
    }
}
