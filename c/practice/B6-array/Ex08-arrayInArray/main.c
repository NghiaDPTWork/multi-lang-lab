/* =========================================================================
   THỰC HÀNH C: TÌM MẢNG CON TRONG MẢNG CHA (SUBARRAY IN MAIN ARRAY)
   =========================================================================
   
   YÊU CẦU ĐỀ BÀI:
   1. Viết chương trình nhập hai mảng: Mảng cha `arrM` (kích thước `sizeM`) và Mảng con `arrS` (kích thước `sizeS`).
   2. Viết hàm `findSubArray` kiểm tra xem mảng con `arrS` có xuất hiện liên tiếp trong mảng cha `arrM` hay không.
   3. Nếu có, hàm sẽ trả về vị trí index bắt đầu xuất hiện đầu tiên của mảng con trong mảng cha. Nếu không, trả về `-1`.
   
   THUẬT TOÁN:
   - Duyệt `i` từ 0 đến `sizeM - sizeS`.
   - Tại mỗi vị trí `i`, dùng vòng lặp thứ hai duyệt `j` từ 0 đến `sizeS - 1` để đối chiếu từng phần tử tương ứng: `arrM[i + j]` và `arrS[j]`.
   - Nếu so khớp hết toàn bộ `arrS`, trả về vị trí `i`.
   ========================================================================= */

#include <stdio.h>
#include <stdlib.h>

const int MAX = 100;

void input(int arr[], int *size, const char *name);
void output(const int arr[], int size, const char *name);
int findSubArray(const int arrM[], int sizeM, const int arrS[], int sizeS);

int main()
{
    int arrM[MAX], arrS[MAX];
    int sizeM, sizeS;

    printf("=== HE THONG TIM KIEM MANG CON IN MANG CHA ===\n");
    input(arrM, &sizeM, "Mang Cha (M)");
    input(arrS, &sizeS, "Mang Con (S)");

    printf("\n=== TRANG THAI MANG ===\n");
    output(arrM, sizeM, "Mang M");
    output(arrS, sizeS, "Mang S");

    if (sizeM > 0 && sizeS > 0) {
        int index = findSubArray(arrM, sizeM, arrS, sizeS);
        printf("\n================ KET QUA ================\n");
        if (index != -1) {
            printf("=> MANG CON (S) xuat hien trong MANG CHA (M) tai index bat dau: %d\n", index);
        } else {
            printf("=> KHONG TIM THAY mang con (S) xuat hien lien tiep trong mang cha (M).\n");
        }
        printf("=========================================\n");
    }

    return 0;
}

void input(int arr[], int *size, const char *name) {
    printf("\n--- Nhap thong tin cho %s ---\n", name);
    printf("Nhap vao kich thuoc: ");
    scanf("%d", size);

    for (int i = 0; i <= *size - 1; i++) {
        printf("%s[%d] = ", name, i);
        scanf("%d", &arr[i]);
    }
}

void output(const int arr[], int size, const char *name) {
    printf("%s: [ ", name);
    for (int i = 0; i <= size - 1; i++) {
        printf("%d ", arr[i]);
    }
    printf("]\n");
}

/**
 * Tìm vị trí xuất hiện của mảng con trong mảng cha
 * @return Vị trí index bắt đầu xuất hiện đầu tiên, hoặc -1 nếu không có
 */
int findSubArray(const int arrM[], int sizeM, const int arrS[], int sizeS) {
    if (sizeS > sizeM) return -1; // Mảng con không thể lớn hơn mảng cha

    for (int i = 0; i <= sizeM - sizeS; i++) {
        int isMatch = 1; // Giả sử khớp tại vị trí i
        for (int j = 0; j <= sizeS - 1; j++) {
            if (arrM[i + j] != arrS[j]) {
                isMatch = 0; // Phát hiện phần tử không khớp
                break;
            }
        }
        if (isMatch == 1) {
            return i; // Khớp thành công cả mảng con, trả về vị trí bắt đầu
        }
    }
    return -1; // Không tìm thấy bất kỳ vị trí khớp nào
}
