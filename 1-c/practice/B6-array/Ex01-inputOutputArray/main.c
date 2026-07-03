/* =========================================================================
   THỰC HÀNH C: XÂY DỰNG HÀM NHẬP XUẤT MẢNG SỐ NGUYÊN CHUẨN (INPUT/OUTPUT ARRAY FUNCTIONS)
   =========================================================================
   
   YÊU CẦU ĐỀ BÀI:
   1. Viết hàm `inputArray` nhận vào một mảng số nguyên và con trỏ `size`.
      Hàm có nhiệm vụ hỏi người dùng kích thước muốn sử dụng, lưu vào con trỏ `size` và cho phép nhập các giá trị phần tử.
   2. Viết hàm `outputArray` nhận vào mảng và kích thước thực để in mảng ra dạng định dạng đẹp mắt.
   3. Triển khai cấu trúc trong hàm `main` để gọi cả hai hàm này.
   
   KỸ THUẬT:
   - Sử dụng con trỏ kiểu `int*` cho tham số kích thước nhằm cập nhật kích thước mảng thật ra ngoài hàm main (Pass by Reference).
   ========================================================================= */

#include <stdio.h>
#include <stdlib.h>

const int MAX = 100;

// Khai báo prototype các hàm nhập xuất mảng
void inputArray(int array[], int *size);
void outputArray(const int array[], int size);

int main()
{
    int arrMain[MAX];
    int sizeMain = 0; // Kích thước thật lúc đầu bằng 0

    printf("=== HE THONG MO-DUL HOA MANG SO NGUYEN ===\n");
    
    // Gọi hàm nhập mảng - Truyền địa chỉ của sizeMain để hàm cập nhật lại
    inputArray(arrMain, &sizeMain);
    
    // Gọi hàm xuất mảng
    outputArray(arrMain, sizeMain);

    return 0;
}

/**
 * Hàm nhập kích thước và các phần tử của mảng số nguyên
 * @param array Mảng tĩnh số nguyên
 * @param size Con trỏ lưu kích thước thực tế
 */
void inputArray(int array[], int *size) {
    printf("Nhap vao kich thuoc cua mang (toi da %d): ", MAX);
    scanf("%d", size);

    if (*size <= 0 || *size > MAX) {
        printf("Kich thuoc khong hop le! Dat mac dinh bang 5.\n");
        *size = 5;
    }

    for (int i = 0; i <= *size - 1; i++) {
        printf("Array[%d]: ", i);
        scanf("%d", &array[i]);
    }
}

/**
 * Hàm xuất định dạng các phần tử của mảng số nguyên
 * @param array Mảng tĩnh số nguyên
 * @param size Kích thước thực tế của mảng
 */
void outputArray(const int array[], int size) {
    printf("\nMang hien tai tren bo nho la:\n");
    printf("[ ");
    for (int i = 0; i <= size - 1; i++) {
        printf("%-5d", array[i]);
    }
    printf("]\n----------------------------------------\n");
}
