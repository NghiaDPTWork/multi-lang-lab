/* =========================================================================
   THỰC HÀNH C: TÌM SỐ LỚN NHẤT VÀ NHỎ NHẤT TRONG MẢNG (FIND MAX/MIN IN ARRAY)
   =========================================================================
   
   YÊU CẦU ĐỀ BÀI:
   1. Viết hàm nhập và xuất mảng như bài trước.
   2. Viết hàm `findMaxNum` trả về phần tử có giá trị lớn nhất trong mảng.
   3. Viết hàm `findMinNum` trả về phần tử có giá trị nhỏ nhất trong mảng.
   4. Gọi các hàm này trong main và xuất kết quả.
   
   THUẬT TOÁN:
   - Đặt phần tử đầu tiên làm lính canh: `int max = arr[0]; int min = arr[0];`
   - Duyệt từ phần tử thứ 1 đến (size - 1) để tìm ra phần tử phá vỡ kỷ lục.
   ========================================================================= */

#include <stdio.h>
#include <stdlib.h>

const int MAX = 100;

void input(int arr[], int *size);
void output(const int arr[], int size);
int findMaxNum(const int arr[], int size);
int findMinNum(const int arr[], int size);

int main()
{
    int arr[MAX];
    int size;

    printf("=== HE THONG TIM CUC TRI TRONG MANG ===\n");
    input(arr, &size);
    output(arr, size);

    if (size > 0) {
        printf("\n>>> KET QUA:");
        printf("\n- Gia tri LON NHAT trong mang = %d", findMaxNum(arr, size));
        printf("\n- Gia tri NHO NHAT trong mang = %d\n", findMinNum(arr, size));
    }
    printf("=========================================\n");

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
    printf("\nMang vua nhap la: ");
    for (int i = 0; i <= size - 1; i++) {
        printf("%-5d", arr[i]);
    }
    printf("\n");
}

int findMaxNum(const int arr[], int size) {
    int max = arr[0]; // Giả định phần tử đầu tiên là lớn nhất
    for (int i = 1; i <= size - 1; i++) {
        if (arr[i] > max) {
            max = arr[i]; // Cập nhật kỷ lục mới
        }
    }
    return max;
}

int findMinNum(const int arr[], int size) {
    int min = arr[0]; // Giả định phần tử đầu tiên là nhỏ nhất
    for (int i = 1; i <= size - 1; i++) {
        if (arr[i] < min) {
            min = arr[i]; // Cập nhật kỷ lục mới
        }
    }
    return min;
}
