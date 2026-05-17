/* =========================================================================
   THỰC HÀNH C: TÁCH VÀ GHÉP CHUỖI KÝ TỰ (SPLIT & JOIN STRINGS)
   =========================================================================
   
   YÊU CẦU ĐỀ BÀI:
   1. Viết hàm `split` nhận vào chuỗi `str`, ký tự phân tách `token`.
      Hàm sẽ cắt chuỗi gốc thành nhiều chuỗi nhỏ dựa trên ký tự `token`, lưu vào mảng 2 chiều `strArr` và trả ra kích thước mảng qua `sizeArr`.
   2. Viết hàm `join` nhận vào mảng các chuỗi con `strArr`, kích thước `sizeArr`, và ký tự nối `token`.
      Hàm sẽ gộp các chuỗi con lại thành một chuỗi duy nhất phân tách bởi `token`.
      - Ví dụ:
        + Chuỗi ban đầu: "xin*chao*ban"
        + Sau khi split bằng '*': ta được mảng {"xin", "chao", "ban"} (size = 3)
        + Sau khi join bằng '-': ta được chuỗi "xin-chao-ban"
        
   ========================================================================= */

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void split(const char str[], char token, char strArr[][100], int *sizeArr);
void join(char strArr[][100], int sizeArr, char token, char str[]);

int main()
{
    char strArr[100][100];
    int sizeArr = 0;
    char str[100] = "xin*chao*ban*yeu*dau";

    printf("=== HE THONG TACH GHEP CHUOI (SPLIT & JOIN) ===\n");
    printf("1. Chuoi ban dau: \"%s\"\n", str);

    // Tiến hành cắt chuỗi
    split(str, '*', strArr, &sizeArr);

    printf("\n2. Mảng chuỗi sau khi cắt (split):\n");
    for (int i = 0; i < sizeArr; i++) {
        printf("   strArr[%d] = \"%s\"\n", i, strArr[i]);
    }

    // Tiến hành ghép chuỗi bằng ký tự gạch ngang '-'
    join(strArr, sizeArr, '-', str);
    printf("\n3. Chuỗi sau khi ghép lại (join): \"%s\"\n", str);
    printf("===============================================\n");

    return 0;
}

/**
 * Hàm cắt chuỗi thành mảng các chuỗi con
 */
void split(const char str[], char token, char strArr[][100], int *sizeArr) {
    char tmp[100] = "";
    int sizeTmp = 0;
    *sizeArr = 0;
    int pos = 0;
    int len = (int)strlen(str);

    while (pos < len) {
        for (int i = pos; i < len; i++) {
            pos++;
            if (str[i] != token) {
                tmp[sizeTmp++] = str[i];
            } else {
                break;
            }
        }
        tmp[sizeTmp] = '\0'; // Kết thúc chuỗi tạm
        strcpy(strArr[(*sizeArr)++], tmp); // Lưu vào mảng kết quả
        tmp[0] = '\0'; // Xóa chuỗi tạm
        sizeTmp = 0;   // Reset size chuỗi tạm
    }
}

/**
 * Hàm ghép mảng các chuỗi con lại thành một chuỗi duy nhất
 */
void join(char strArr[][100], int sizeArr, char token, char str[]) {
    str[0] = '\0'; // Khởi tạo chuỗi rỗng

    // Biến ký tự token thành một chuỗi tạm 2 ký tự (token + '\0')
    char tokenStr[2] = "";
    tokenStr[0] = token;
    tokenStr[1] = '\0';

    for (int i = 0; i < sizeArr; i++) {
        strcat(str, strArr[i]);
        if (i < sizeArr - 1) {
            strcat(str, tokenStr); // Không nối token ở phần tử cuối cùng
        }
    }
}
