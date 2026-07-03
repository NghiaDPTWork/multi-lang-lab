/* =========================================================================
   THỰC HÀNH C: XÁC ĐỊNH PHẦN TỬ LỚN THỨ K TRONG MẢNG (FIND K-TH LARGEST ELEMENT)
   =========================================================================
   
   YÊU CẦU ĐỀ BÀI:
   1. Viết chương trình C cho phép nhập mảng số nguyên `arr` (kích thước `size`).
   2. Viết hàm `findKthLargest` nhận vào mảng, kích thước, và số nguyên `k`.
      Hàm có nhiệm vụ tìm và trả về phần tử có giá trị lớn thứ `k` trong mảng.
      - Ví dụ:
        + Mảng gốc: 1, 2, 3, 3, 4, 6, 7, 8, 4, 5, 9
        + Nếu chọn K = 3 (tìm số lớn thứ 3):
          Số lớn nhất là 9, số lớn nhì là 8, số lớn thứ ba là 7.
          Hàm phải trả về kết quả là 7.
          
   THUẬT TOÁN:
   - Cách 1: Sắp xếp mảng giảm dần, sau đó lọc bỏ các phần tử trùng lặp (hoặc đếm số lượng giá trị phân biệt) để trả về giá trị thứ `k`.
   - Cách 2: Sao chép mảng sang một mảng tạm để tránh thay đổi thứ tự mảng gốc.
     + Sắp xếp mảng tạm giảm dần.
     + Lọc trùng mảng tạm.
     + Trả về phần tử ở chỉ mục `k - 1` trong mảng tạm đã lọc trùng.
   ========================================================================= */

#include <stdio.h>
#include <stdlib.h>

const int MAX = 100;

void input(int arr[], int *size);
void output(const int arr[], int size, const char *msg);
void cpyArray(int dest[], int *sizeDest, const int src[], int sizeSrc);
void sortDescending(int arr[], int size);
int removeDuplicates(int arr[], int size);
int findKthLargest(const int arr[], int size, int k);

int main()
{
    int arr[MAX];
    int size = 0;
    int k;

    printf("=== HE THONG TIM SO LON THU K TRONG MANG ===\n");
    input(arr, &size);
    output(arr, size, "Mang ban dau");

    if (size > 0) {
        printf("\nNhap thu tu K muon tim (vi du: 3 la so lon thu 3): ");
        scanf("%d", &k);

        int result = findKthLargest(arr, size, k);

        printf("\n================ KET QUA ================\n");
        if (result != -1) {
            printf("=> Phan tu lon thu %d trong mang la: %d\n", k, result);
        } else {
            printf("=> LOI: Thu tu K = %d khong hop le hoac vuot qua so phan tu phan biet!\n", k);
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

void cpyArray(int dest[], int *sizeDest, const int src[], int sizeSrc) {
    *sizeDest = 0;
    for (int i = 0; i <= src - 1; i++) {
        dest[(*sizeDest)++] = src[i];
    }
}

void sortDescending(int arr[], int size) {
    for (int i = 0; i <= size - 2; i++) {
        for (int j = i + 1; j <= size - 1; j++) {
            if (arr[i] < arr[j]) {
                int tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
    }
}

int removeDuplicates(int arr[], int size) {
    if (size < 2) return size;
    int newSize = 0;
    
    for (int i = 0; i <= size - 1; i++) {
        int isDup = 0;
        for (int j = 0; j < newSize; j++) {
            if (arr[i] == arr[j]) {
                isDup = 1;
                break;
            }
        }
        if (!isDup) {
            arr[newSize++] = arr[i];
        }
    }
    return newSize;
}

/**
 * Tìm phần tử lớn thứ K trong mảng
 * @return Giá trị phần tử lớn thứ K, hoặc -1 nếu K không hợp lệ
 */
int findKthLargest(const int arr[], int size, int k) {
    if (k <= 0 || k > size) return -1;

    int tmp[100];
    int sizeTmp = 0;

    // Sao chép sang mảng tạm để bảo tồn mảng gốc
    cpyArray(tmp, &sizeTmp, arr, size);

    // Sắp xếp mảng tạm giảm dần
    sortDescending(tmp, sizeTmp);

    // Loại bỏ trùng để lấy tập các giá trị phân biệt giảm dần
    sizeTmp = removeDuplicates(tmp, sizeTmp);

    // Kiểm tra xem K có vượt quá số lượng phần tử phân biệt không
    if (k > sizeTmp) {
        return -1; // Không hợp lệ
    }

    return tmp[k - 1]; // Trả về phần tử ở vị trí k-1
}
