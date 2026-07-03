/* =========================================================================
   THỰC HÀNH C: CHIA MẢNG THÀNH HAI MẢNG CHẴN LẺ RIÊNG BIỆT (DIVIDE ARRAY EVEN/ODD)
   =========================================================================
   
   YÊU CẦU ĐỀ BÀI:
   1. Viết chương trình cho phép nhập mảng số nguyên `arr` (kích thước `size`).
   2. Viết hàm `divideArray` thực hiện lọc các phần tử có giá trị CHẴN nhét vào mảng `arrEven` 
      và các phần tử có giá trị LẺ nhét vào mảng `arrOdd`.
   3. Đồng thời cập nhật kích thước tương ứng cho `sizeEven` và `sizeOdd` thông qua con trỏ.
   4. In ra ba mảng: mảng ban đầu, mảng chứa các số chẵn, và mảng chứa các số lẻ.
   
   ========================================================================= */

#include <stdio.h>
#include <stdlib.h>

const int MAX = 100;

void input(int arr[], int *size);
void output(const int arr[], int size, const char *msg);
void divideArray(const int arr[], int size, int arrEven[], int *sizeEven, int arrOdd[], int *sizeOdd);

int main()
{
    int arr[MAX], arrEven[MAX], arrOdd[MAX];
    int size = 0, sizeEven = 0, sizeOdd = 0;

    printf("=== HE THONG CHIA MANG CHAN LE ===\n");
    input(arr, &size);

    if (size > 0) {
        divideArray(arr, size, arrEven, &sizeEven, arrOdd, &sizeOdd);

        printf("\n================ KET QUA ================\n");
        output(arr, size, "Mang ban dau");
        output(arrEven, sizeEven, "Mang so CHAN  ");
        output(arrOdd, sizeOdd, "Mang so LE    ");
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
 * Chia tách mảng gốc thành 2 mảng chẵn lẻ riêng biệt
 */
void divideArray(const int arr[], int size, int arrEven[], int *sizeEven, int arrOdd[], int *sizeOdd) {
    // Đảm bảo ban đầu kích thước mảng mới bằng 0
    *sizeEven = 0;
    *sizeOdd = 0;

    for (int i = 0; i <= size - 1; i++) {
        if (arr[i] % 2 == 0) {
            arrEven[(*sizeEven)++] = arr[i]; // Gán vào mảng chẵn và tăng kích thước lên 1
        } else {
            arrOdd[(*sizeOdd)++] = arr[i];   // Gán vào mảng lẻ và tăng kích thước lên 1
        }
    }
}
