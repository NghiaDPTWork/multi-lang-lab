/* =========================================================================
   THỰC HÀNH C: TỔNG HỢP VÀ TÍNH TỔNG CÁC PHẦN TỬ TRONG MẢNG (SUM OF ELEMENTS & INDICES)
   =========================================================================
   
   YÊU CẦU ĐỀ BÀI:
   Viết chương trình C hỗ trợ các chức năng tính toán thống kê:
   1. Tính tổng toàn bộ các phần tử trong mảng.
   2. Tính tổng toàn bộ các phần tử có giá trị CHẴN trong mảng.
   3. Tính tổng toàn bộ các phần tử nằm ở vị trí CHẴN (Index chẵn: 0, 2, 4,...) của mảng.
   4. Tích hợp giao diện lựa chọn tính năng trực quan.
   
   ========================================================================= */

#include <stdio.h>
#include <stdlib.h>

const int MAX = 100;

void input(int arr[], int *size);
void output(const int arr[], int size);
int sumAllElements(const int arr[], int size);
int sumEvenElements(const int arr[], int size);
int sumEvenIndices(const int arr[], int size);

int main()
{
    int arr[MAX];
    int size;

    printf("=== HE THONG THONG KE MOI TRUONG MANG ===\n");
    input(arr, &size);
    output(arr, size);

    if (size > 0) {
        printf("\n================ KET QUA ================\n");
        printf("1. Tong tat ca phan tu         = %d\n", sumAllElements(arr, size));
        printf("2. Tong cac phan tu chan       = %d\n", sumEvenElements(arr, size));
        printf("3. Tong phan tu o index chan   = %d\n", sumEvenIndices(arr, size));
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

void output(const int arr[], int size) {
    printf("\nMang dang xu ly: ");
    for (int i = 0; i <= size - 1; i++) {
        printf("%-5d", arr[i]);
    }
    printf("\n");
}

int sumAllElements(const int arr[], int size) {
    int sum = 0;
    for (int i = 0; i <= size - 1; i++) {
        sum += arr[i];
    }
    return sum;
}

int sumEvenElements(const int arr[], int size) {
    int sum = 0;
    for (int i = 0; i <= size - 1; i++) {
        if (arr[i] % 2 == 0) {
            sum += arr[i];
        }
    }
    return sum;
}

int sumEvenIndices(const int arr[], int size) {
    int sum = 0;
    for (int i = 0; i <= size - 1; i += 2) {
        sum += arr[i];
    }
    return sum;
}
