/* =========================================================================
   THỰC HÀNH C: SẮP XẾP TĂNG DẦN GIỮ NGUYÊN VỊ TRÍ SỐ 0 (SORT ARRAY KEEPING ZEROS IN PLACE)
   =========================================================================
   
   YÊU CẦU ĐỀ BÀI:
   1. Viết chương trình C cho phép nhập mảng số nguyên `arr` (kích thước `size`).
   2. Viết hàm `sortArrayKeepZeros` thực hiện sắp xếp mảng theo thứ tự tăng dần.
      Tuy nhiên, các phần tử có giá trị là 0 phải được giữ nguyên vị trí index ban đầu, không được tham gia hoán đổi vị trí.
      - Ví dụ:
        + Mảng gốc: 1, 4, 5, 6, 0, 3, 2, 1, 5, 4, 7, 9, 0
        + Kết quả:  1, 1, 2, 3, 0, 4, 4, 5, 5, 6, 7, 9, 0
        
   ========================================================================= */

#include <stdio.h>
#include <stdlib.h>

const int MAX = 100;

void input(int arr[], int *size);
void output(const int arr[], int size, const char *msg);
void sortArrayKeepZeros(int arr[], int size);

int main()
{
    int arr[MAX];
    int size = 0;

    printf("=== HE THONG SAP XEP MANG GIU NGUYEN VI TRI SO 0 ===\n");
    input(arr, &size);

    if (size > 0) {
        output(arr, size, "Mang truoc khi sap xep");

        sortArrayKeepZeros(arr, size);

        printf("\n================ KET QUA ================\n");
        output(arr, size, "Mang sau khi sap xep  ");
        printf("=========================================\n");
    }

    return 0;
}

void input(int arr[], int *size) {
    printf("Nhap vao kich thuoc cua mang: ");
    scanf("%d", size);

    for (int i = 0; i <= *size - 1; i++) {
        printf("Arr[%d] = ", i);
        scanf("%d", &arr[i]);
    }
}

void output(const int arr[], int size, const char *msg) {
    printf("%s (size = %d): [ ", msg, size);
    for (int i = 0; i <= size - 1; i++) {
        printf("%d ", arr[i]);
    }
    printf("]\n");
}

/**
 * Sắp xếp các số khác 0 tăng dần, giữ nguyên số 0 tại vị trí của nó
 */
void sortArrayKeepZeros(int arr[], int size) {
    for (int i = 0; i <= size - 2; i++) {
        // Chỉ duyệt nếu arr[i] khác 0
        if (arr[i] == 0) continue;

        for (int j = i + 1; j <= size - 1; j++) {
            // Chỉ so sánh hoán đổi nếu arr[j] cũng khác 0
            if (arr[j] != 0 && arr[i] > arr[j]) {
                // Hoán đổi giá trị
                int tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
    }
}
