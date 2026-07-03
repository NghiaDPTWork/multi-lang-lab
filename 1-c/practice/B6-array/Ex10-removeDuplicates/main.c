/* =========================================================================
   THỰC HÀNH C: XÓA PHẦN TỬ TRÙNG LẶP TRONG MẢNG (REMOVE DUPLICATE IN ARRAY)
   =========================================================================
   
   YÊU CẦU ĐỀ BÀI:
   1. Viết chương trình C cho phép nhập mảng số nguyên `arr` (kích thước `size`).
   2. Viết hàm `removeDuplicates` lọc mảng, giữ lại duy nhất 1 đại diện cho các giá trị trùng lặp.
   3. Cập nhật kích thước thực tế của mảng sau khi xóa thông qua con trỏ `size`.
   
   THUẬT TOÁN:
   - Duyệt `i` từ 0 đến `size - 2`.
   - Với mỗi phần tử `arr[i]`, duyệt `j` từ `i + 1` đến `size - 1`.
   - Nếu phát hiện `arr[i] == arr[j]`, thực hiện xóa phần tử tại vị trí `j` bằng cách dịch chuyển tất cả phần tử bên phải sang trái 1 đơn vị, đồng thời giảm `size` đi 1 đơn vị.
   - Lưu ý giảm `j` đi 1 để tránh bỏ sót kiểm tra phần tử vừa được đẩy lên vị trí cũ.
   ========================================================================= */

#include <stdio.h>
#include <stdlib.h>

const int MAX = 100;

void input(int arr[], int *size);
void output(const int arr[], int size, const char *msg);
void deleteElementByPos(int arr[], int *size, int pos);
void removeDuplicates(int arr[], int *size);

int main()
{
    int arr[MAX];
    int size = 0;

    printf("=== HE THONG LOC TRUNG PHAN TU TRONG MANG ===\n");
    input(arr, &size);

    if (size > 0) {
        output(arr, size, "Mang truoc khi loc");
        
        removeDuplicates(arr, &size);

        printf("\n================ KET QUA ================\n");
        output(arr, size, "Mang sau khi loc  ");
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
 * Hàm xóa một phần tử ở vị trí chỉ định trong mảng
 */
void deleteElementByPos(int arr[], int *size, int pos) {
    if (pos < 0 || pos >= *size) return;

    for (int i = pos; i <= *size - 2; i++) {
        arr[i] = arr[i + 1]; // Dịch phần tử sau đè lên phần tử trước
    }
    (*size)--; // Giảm kích thước thật
}

/**
 * Hàm lọc loại bỏ các phần tử trùng lặp trong mảng
 */
void removeDuplicates(int arr[], int *size) {
    if (*size < 2) return;

    for (int i = 0; i <= *size - 2; i++) {
        for (int j = i + 1; j <= *size - 1; j++) {
            if (arr[i] == arr[j]) {
                deleteElementByPos(arr, size, j); // Xóa phần tử trùng lặp tại vị trí j
                j--; // Trừ chỉ số j để đối chiếu lại phần tử mới được dịch chuyển tới vị trí j
            }
        }
    }
}
