/* =========================================================================
   THỰC HÀNH C: SẮP XẾP MẢNG PHẦN TỬ LỚN NHẤT Ở GIỮA (SORT ARRAY LARGEST AT CENTER)
   =========================================================================
   
   YÊU CẦU ĐỀ BÀI:
   1. Viết chương trình C cho phép nhập mảng số nguyên `arr` (kích thước `size`).
   2. Viết hàm `sortMaxValueInCenter` thực hiện sắp xếp mảng sao cho giá trị lớn nhất trong mảng được đưa về chính giữa mảng.
      - Ví dụ:
        + Mảng gốc: 1, 2, 3, 3, 4, 6, 7, 8, 4, 5, 9
        + Số lớn nhất là 9, mảng có 11 phần tử -> Vị trí chính giữa là index 5.
        + Kết quả sắp xếp có dạng: 1, 2, 3, 3, 4, 9, 5, 6, 7, 8, 4 (Phần tử 9 đứng ở giữa).
        
   THUẬT TOÁN:
   - Bước 1: Tìm giá trị lớn nhất và vị trí index của nó.
   - Bước 2: Hoán đổi phần tử lớn nhất đó với phần tử đang đứng ở vị trí chính giữa mảng `(size / 2)`.
   - Bước 3: Sắp xếp các phần tử còn lại (phía trước và phía sau vị trí giữa) tùy theo yêu cầu (hoặc đơn giản là sắp xếp toàn bộ mảng trước rồi đổi chỗ phần tử max về giữa).
     + Theo code mẫu của bài: Sắp xếp toàn bộ mảng tĩnh từ nhỏ đến lớn trước.
     + Chèn phần tử lớn nhất (đang ở vị trí cuối cùng `size - 1`) vào vị trí `size / 2` bằng cách dịch chuyển các phần tử từ giữa về cuối sang phải.
   ========================================================================= */

#include <stdio.h>
#include <stdlib.h>

const int MAX = 100;

void input(int arr[], int *size);
void output(const int arr[], int size, const char *msg);
void sortAscending(int arr[], int size);
int insertInArrByPos(int arr[], int *size, int pos, int key);
void sortMaxValueInCenter(int arr[], int *size);

int main()
{
    int arr[MAX];
    int size = 0;

    printf("=== HE THONG SAP XEP DUA SO MAX VE GIUA MANG ===\n");
    input(arr, &size);

    if (size > 0) {
        output(arr, size, "Mang truoc khi sap xep");

        sortMaxValueInCenter(arr, &size);

        printf("\n================ KET QUA ================\n");
        output(arr, size, "Mang sau khi sap xep  ");
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

void sortAscending(int arr[], int size) {
    for (int i = 0; i <= size - 2; i++) {
        for (int j = i + 1; j <= size - 1; j++) {
            if (arr[i] > arr[j]) {
                int tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
    }
}

int insertInArrByPos(int arr[], int *size, int pos, int key) {
    if (pos < 0 || pos > *size) return 0;

    for (int i = *size - 1; i >= pos; i--) {
        arr[i + 1] = arr[i];
    }
    arr[pos] = key;
    (*size)++;
    return 1;
}

/**
 * Đưa số lớn nhất về vị trí chính giữa mảng
 */
void sortMaxValueInCenter(int arr[], int *size) {
    // 1. Sắp xếp mảng tăng dần -> Số lớn nhất sẽ ở cuối mảng (arr[*size - 1])
    sortAscending(arr, *size);

    // 2. Lưu trữ giá trị lớn nhất đó lại
    int maxVal = arr[*size - 1];

    // 3. Xác định vị trí giữa mǎng
    int midPos = (*size) / 2;

    // 4. Giảm tạm thời kích thước thật đi 1 đơn vị để ẩn số max cuối đi
    (*size)--;

    // 5. Chèn số max vào vị trí giữa mảng (hàm tự tăng size lại)
    insertInArrByPos(arr, size, midPos, maxVal);
}
