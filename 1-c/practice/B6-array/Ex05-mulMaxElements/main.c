/* =========================================================================
   THỰC HÀNH C: TÌM TÍCH LỚN NHẤT CỦA HAI PHẦN TỬ TRONG MẢNG (MAX PRODUCT OF TWO ELEMENTS)
   =========================================================================
   
   YÊU CẦU ĐỀ BÀI:
   1. Viết hàm nhập và xuất mảng.
   2. Viết hàm `mulMaxInArray` thực hiện tìm kiếm cặp phần tử `(arr[i], arr[j])` (với i != j)
      sao cho tích `arr[i] * arr[j]` đạt giá trị cực đại.
      
   THUẬT TOÁN:
   - Cách 1: Duyệt hai vòng lặp lồng nhau (Brute Force) để kiểm tra mọi cặp và lưu trữ giá trị lớn nhất.
   - Cách 2 (Nâng cao): Tích lớn nhất có thể được tạo bởi:
     + Tích của hai số dương lớn nhất.
     + Tích của hai số âm nhỏ nhất (vì âm nhân âm ra dương).
   ========================================================================= */

#include <stdio.h>
#include <stdlib.h>

const int MAX = 100;

void input(int arr[], int *size);
void output(const int arr[], int size);
int mulMaxInArray(const int arr[], int size);

int main()
{
    int arr[MAX];
    int size;

    printf("=== HE THONG TIM TICH CUC DAI TRONG MANG ===\n");
    input(arr, &size);
    output(arr, size);

    if (size >= 2) {
        printf("\n>>> KET QUA: Tich lon nhat cua hai phan tu bat ky = %d\n", mulMaxInArray(arr, size));
    } else {
        printf("\n>>> CANH BAO: Mang phai co it nhat 2 phan tu!\n");
    }
    printf("=============================================\n");

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

void output(const int arr[], int size) {
    printf("\nMang dang xu ly: ");
    for (int i = 0; i <= size - 1; i++) {
        printf("%-5d", arr[i]);
    }
    printf("\n");
}

int mulMaxInArray(const int arr[], int size) {
    if (size < 2) return 0;

    int maxMulProduct = arr[0] * arr[1];

    for (int i = 0; i <= size - 2; i++) {
        for (int j = i + 1; j <= size - 1; j++) {
            int currentProduct = arr[i] * arr[j];
            if (currentProduct > maxMulProduct) {
                maxMulProduct = currentProduct;
            }
        }
    }
    return maxMulProduct;
}
