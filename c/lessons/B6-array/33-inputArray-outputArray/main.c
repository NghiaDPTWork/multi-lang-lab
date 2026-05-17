#include <stdio.h>
#include <stdlib.h>

/* =========================================================================
   BÀI HỌC C: KHÁI NIỆM VÀ THAO TÁC MẢNG TĨNH MỘT CHIỀU (INTEGER ARRAY)
   =========================================================================
   - Mảng (Array): Là một tập hợp các phần tử có cùng kiểu dữ liệu, được sắp xếp liên tiếp
     nhau trên bộ nhớ RAM.
   - Chỉ mục (Index): Bắt đầu từ 0 đến (kích thước - 1).
   - Khai báo mảng tĩnh: `int arr[MAX];` với kích thước tối đa định trước.
   - Kích thước thật (size): Số phần tử thực tế đang được sử dụng trong mảng tĩnh.
   ========================================================================= */

const int MAX = 100;

int main()
{
    // I - INPUT: Khởi tạo mảng và nhập kích thước thật của mảng
    int arr[MAX]; // Mảng chứa tối đa 100 số nguyên
    int size;     // Số phần tử thực tế người dùng muốn lưu trữ

    printf("=== HE THONG LUU TRU MANG SO NGUYEN ===\n");
    printf("Nhap so luong phan tu ban muon luu tru (toi da %d): ", MAX);
    scanf("%d", &size);

    // Kiểm tra tính hợp lệ của kích thước mảng nhập vào
    if (size <= 0 || size > MAX) {
        printf("Kich thuoc khong hop le! Thoat chuong trinh...\n");
        return 1;
    }

    // Nhập dữ liệu cho từng phần tử trong mảng tĩnh
    for (int i = 0; i <= size - 1; i++) {
        printf("Nhap gia tri cho arr[%d] = ", i);
        scanf("%d", &arr[i]);
    }

    // O - OUTPUT: Duyệt qua mảng và xuất dữ liệu ra màn hình
    printf("\nMang so nguyen vua nhap la: \n");
    for (int i = 0; i <= size - 1; i++) {
        printf("%-5d", arr[i]);
    }
    printf("\n========================================\n");

    return 0;
}
