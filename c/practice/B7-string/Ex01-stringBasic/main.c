/* =========================================================================
   THỰC HÀNH C: TỰ XÂY DỰNG THƯ VIỆN CHUỖI KÝ TỰ CƠ BẢN (CUSTOM STRING LIBRARY)
   =========================================================================
   
   YÊU CẦU ĐỀ BÀI:
   Hãy tự định nghĩa các hàm xử lý chuỗi cơ bản mà không sử dụng thư viện `<string.h>`:
   1. `strLen`: Tính độ dài chuỗi.
   2. `strCpy`: Sao chép nội dung chuỗi nguồn sang chuỗi đích.
   3. `strCat`: Nối chuỗi nguồn vào sau chuỗi đích.
   4. `strCmp`: So sánh hai chuỗi theo thứ tự từ điển (trả về 1 nếu M > S, -1 nếu M < S, 0 nếu bằng).
   5. `strRev`: Đảo ngược chuỗi ký tự.
   
   ========================================================================= */

#include <stdio.h>
#include <stdlib.h>

int strLen(const char str[]);
void strCpy(char strM[], const char strS[]);
void strCat(char strM[], const char strS[]);
int strCmp(const char strM[], const char strS[]);
void strRev(char strM[]);

int main()
{
    char strM[100] = "Xin Chao";
    char strS[100] = " Moi Nguoi";

    printf("=== HE THONG THU VIEN CHUOI TU VIET ===\n");
    printf("1. Chuoi M ban dau: \"%s\" (Len = %d)\n", strM, strLen(strM));

    // Nối chuỗi
    strCat(strM, strS);
    printf("2. Sau khi cat (noi chuoi S vao M): \"%s\"\n", strM);

    // Đảo chuỗi
    strRev(strM);
    printf("3. Sau khi rev (dao nguoc chuoi M): \"%s\"\n", strM);

    // Sao chép chuỗi
    char copyStr[100];
    strCpy(copyStr, "Lap Trinh C");
    printf("4. Sao chep \"Lap Trinh C\" vao copyStr: \"%s\"\n", copyStr);

    // So sánh chuỗi
    int cmpResult = strCmp("abc", "abd");
    printf("5. So sanh \"abc\" va \"abd\" (strcmp) = %d (mong muon: -1)\n", cmpResult);
    printf("========================================\n");

    return 0;
}

int strLen(const char str[]) {
    int len = 0;
    while (str[len] != '\0') {
        len++;
    }
    return len;
}

void strCpy(char strM[], const char strS[]) {
    int i = 0;
    while (strS[i] != '\0') {
        strM[i] = strS[i];
        i++;
    }
    strM[i] = '\0'; // Thêm ký tự null để đánh dấu hết chuỗi
}

void strCat(char strM[], const char strS[]) {
    int sizeM = strLen(strM);
    int i = 0;
    while (strS[i] != '\0') {
        strM[sizeM + i] = strS[i];
        i++;
    }
    strM[sizeM + i] = '\0';
}

int strCmp(const char strM[], const char strS[]) {
    int i = 0;
    while (strM[i] != '\0' && strS[i] != '\0') {
        if (strM[i] > strS[i]) return 1;
        if (strM[i] < strS[i]) return -1;
        i++;
    }
    if (strM[i] != '\0') return 1;
    if (strS[i] != '\0') return -1;
    return 0;
}

void strRev(char strM[]) {
    int len = strLen(strM);
    for (int i = 0; i < len / 2; i++) {
        char tmp = strM[i];
        strM[i] = strM[len - i - 1];
        strM[len - i - 1] = tmp;
    }
}
