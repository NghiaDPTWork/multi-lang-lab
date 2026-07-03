/* =========================================================================
   THỰC HÀNH C: TÌM KIẾM PHẦN TỬ TRONG MẢNG (FIND IN ARRAY / LINEAR SEARCH)
   =========================================================================
   
   YÊU CẦU ĐỀ BÀI:
   1. Viết hàm nhập và xuất mảng.
   2. Viết hàm `findInArray` nhận vào mảng, kích thước và một giá trị `key` cần tìm.
      Hàm sẽ trả về vị trí index đầu tiên tìm thấy `key` trong mảng. Nếu không tìm thấy, trả về `-1`.
   3. Viết chương trình tương tác cho phép người dùng nhập khóa cần tìm kiếm.
   
   THUẬT TOÁN:
   - Sử dụng thuật toán Tìm kiếm Tuyến tính (Linear Search): Duyệt tuần tự qua từng phần tử của mảng và so sánh với khóa tìm kiếm.
   ========================================================================= */

#include <stdio.h>
#include <stdlib.h>

const int MAX = 100;

void input(int arr[], int *size);
void output(const int arr[], int size);
int findInArray(const int arr[], int size, int key);

int main()
{
    int arr[MAX];
    int size;
    int key;

    printf("=== HE THONG TIM KIEM TUYEN TINH TRONG MANG ===\n");
    input(arr, &size);
    output(arr, size);

    if (size > 0) {
        printf("\nNhap gia tri can tim kiem: ");
        scanf("%d", &key);

        int index = findInArray(arr, size, key);
        
        printf("\n================ KET QUA ================\n");
        if (index != -1) {
            printf("=> Da tim thay khoa '%d' tai vi tri index: %d\n", key, index);
        } else {
            printf("=> Rat tiec! Khong tim thay khoa '%d' trong mang.\n", key);
        }
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
    printf("\nMang dang co: ");
    for (int i = 0; i <= size - 1; i++) {
        printf("%-5d", arr[i]);
    }
    printf("\n");
}

int findInArray(const int arr[], int size, int key) {
    for (int i = 0; i <= size - 1; i++) {
        if (arr[i] == key) {
            return i; // Trả về index ngay lập tức khi tìm thấy phần tử khớp
        }
    }
    return -1; // Duyệt hết mảng mà không gặp thì trả về -1
}
