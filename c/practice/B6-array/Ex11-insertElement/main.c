/* =========================================================================
   THỰC HÀNH C: CHÈN PHẦN TỬ VÀO MẢNG TẠI VỊ TRÍ CHỈ ĐỊNH (INSERT ELEMENT IN ARRAY)
   =========================================================================
   
   YÊU CẦU ĐỀ BÀI:
   1. Viết hàm nhập và xuất mảng.
   2. Viết hàm `insertElementByPos` chèn phần tử `key` vào mảng tại vị trí `pos`.
      - Điều kiện: Vị trí chèn `pos` phải hợp lệ: `0 <= pos <= size` và mảng chưa vượt quá `MAX`.
      - Hàm trả về 1 nếu chèn thành công, 0 nếu thất bại.
   3. Cập nhật lại kích thước mảng thật ngoài main.
   
   THUẬT TOÁN:
   - Dịch chuyển tất cả phần tử từ vị trí cuối cùng `size - 1` lùi sang phải 1 đơn vị về phía vị trí `pos`.
   - Gán giá trị `key` vào ô nhớ trống tại vị trí `pos`.
   - Tăng `size` lên 1 đơn vị.
   ========================================================================= */

#include <stdio.h>
#include <stdlib.h>

const int MAX = 100;

void input(int arr[], int *size);
void output(const int arr[], int size, const char *msg);
int insertElementByPos(int arr[], int *size, int pos, int key);

int main()
{
    int arr[MAX];
    int size = 0;
    int pos, key;

    printf("=== HE THONG CHEN PHAN TU MANG ===\n");
    input(arr, &size);
    output(arr, size, "Mang ban dau");

    if (size > 0) {
        printf("\nNhap gia tri can chen (key): ");
        scanf("%d", &key);
        printf("Nhap index can chen (0 - %d): ", size);
        scanf("%d", &pos);

        int result = insertElementByPos(arr, &size, pos, key);
        
        printf("\n================ KET QUA ================\n");
        if (result == 1) {
            printf("=> Da chen thanh cong khoa '%d' tai index %d!\n", key, pos);
            output(arr, size, "Mang sau khi chen ");
        } else {
            printf("=> LOI: Vi tri chen %d khong hop le hoac mang da day!\n", pos);
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

void output(const int arr[], int size, const char *msg) {
    printf("%s: [ ", msg);
    for (int i = 0; i <= size - 1; i++) {
        printf("%d ", arr[i]);
    }
    printf("]\n");
}

/**
 * Chèn giá trị key vào mảng tại vị trí pos
 * @return 1 nếu thành công, 0 nếu thất bại
 */
int insertElementByPos(int arr[], int *size, int pos, int key) {
    // Kiểm tra điều kiện biên
    if (pos < 0 || pos > *size || *size >= MAX) {
        return 0; // Thất bại
    }

    // Dịch các phần tử từ cuối về phía pos sang phải 1 đơn vị
    for (int i = *size - 1; i >= pos; i--) {
        arr[i + 1] = arr[i];
    }

    arr[pos] = key; // Nhét khóa vào ô index trống
    (*size)++;       // Tăng kích thước thật lên 1

    return 1; // Thành công
}
