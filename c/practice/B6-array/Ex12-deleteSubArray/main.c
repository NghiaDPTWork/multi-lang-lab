/* =========================================================================
   THỰC HÀNH C: XÓA MỘT MẢNG CON KHỎI MẢNG CHA (DELETE SUBARRAY / SLICE FROM ARRAY)
   =========================================================================
   
   YÊU CẦU ĐỀ BÀI:
   1. Viết hàm nhập và xuất mảng.
   2. Viết hàm `deleteSubArray` thực hiện xóa một dãy phần tử bắt đầu từ vị trí `pos` với độ dài `len` ra khỏi mảng gốc.
      - Điều kiện: Vị trí bắt đầu `pos` phải hợp lệ: `0 <= pos < size` và `pos + len <= size`.
      - Hàm trả về 1 nếu xóa thành công, 0 nếu thất bại.
   3. Thực hiện dịch chuyển các phần tử còn lại bên phải sang trái để lấp đầy ô trống và cập nhật lại `size`.
   
   ========================================================================= */

#include <stdio.h>
#include <stdlib.h>

const int MAX = 100;

void input(int arr[], int *size);
void output(const int arr[], int size, const char *msg);
int deleteSubArray(int arr[], int *size, int pos, int len);

int main()
{
    int arr[MAX];
    int size = 0;
    int pos, len;

    printf("=== HE THONG XOA DOAN PHAN TU MANG ===\n");
    input(arr, &size);
    output(arr, size, "Mang ban dau");

    if (size > 0) {
        printf("\nNhap index bat dau xoa (pos): ");
        scanf("%d", &pos);
        printf("Nhap so luong phan tu muon xoa (len): ");
        scanf("%d", &len);

        int result = deleteSubArray(arr, &size, pos, len);
        
        printf("\n================ KET QUA ================\n");
        if (result == 1) {
            printf("=> Da xoa thanh cong %d phan tu tu index %d!\n", len, pos);
            output(arr, size, "Mang sau khi xoa ");
        } else {
            printf("=> LOI: Thong so xoa khong hop le (pos hoac len vuot qua kich thuoc mang)!\n");
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
 * Xóa dãy phần tử độ dài len bắt đầu từ vị trí pos
 * @return 1 nếu thành công, 0 nếu thất bại
 */
int deleteSubArray(int arr[], int *size, int pos, int len) {
    // Kiểm tra tính hợp lệ của tham số
    if (pos < 0 || pos >= *size || len <= 0 || (pos + len) > *size) {
        return 0; // Thất bại
    }

    // Dịch chuyển các phần tử từ vị trí (pos + len) sang trái len đơn vị
    for (int i = pos + len; i <= *size - 1; i++) {
        arr[i - len] = arr[i];
    }

    // Cập nhật lại kích thước thực của mảng
    *size -= len;

    return 1; // Thành công
}
