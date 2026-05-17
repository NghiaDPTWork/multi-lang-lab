/* =========================================================================
   THỰC HÀNH C: ĐẾM VÀ TÍNH TỔNG SỐ NGUYÊN TỐ TRONG MẢNG (PRIME NUMBERS IN ARRAY)
   =========================================================================
   
   YÊU CẦU ĐỀ BÀI:
   1. Viết một hàm bổ trợ `isPrime(int n)` trả về 1 nếu n là số nguyên tố, và 0 nếu ngược lại.
   2. Viết hàm `countPrimesInArray` để đếm số lượng số nguyên tố xuất hiện trong mảng.
   3. Viết hàm `sumPrimesInArray` để tính tổng của tất cả các số nguyên tố trong mảng.
   
   THUẬT TOÁN KIỂM TRA SỐ NGUYÊN TỐ:
   - Số nguyên tố là số nguyên lớn hơn hoặc bằng 2 và chỉ chia hết cho 1 và chính nó.
   - Sử dụng vòng lặp duyệt từ 2 đến căn bậc hai của số đó để tối ưu hóa hiệu năng.
   ========================================================================= */

#include <stdio.h>
#include <stdlib.h>
#include <math.h>

const int MAX = 100;

void input(int arr[], int *size);
void output(const int arr[], int size);
int isPrime(int n);
int countPrimesInArray(const int arr[], int size);
int sumPrimesInArray(const int arr[], int size);

int main()
{
    int arr[MAX];
    int size;

    printf("=== HE THONG THONG KE SO NGUYEN TO TRONG MANG ===\n");
    input(arr, &size);
    output(arr, size);

    if (size > 0) {
        printf("\n================ KET QUA ================\n");
        printf("- So luong so nguyen to trong mang = %d\n", countPrimesInArray(arr, size));
        printf("- Tong cac so nguyen to trong mang  = %d\n", sumPrimesInArray(arr, size));
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

/**
 * Kiểm tra xem một số nguyên có phải là số nguyên tố không
 * @return 1 nếu đúng, 0 nếu sai
 */
int isPrime(int n) {
    if (n < 2) return 0;
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) return 0;
    }
    return 1;
}

int countPrimesInArray(const int arr[], int size) {
    int count = 0;
    for (int i = 0; i <= size - 1; i++) {
        if (isPrime(arr[i])) {
            count++;
        }
    }
    return count;
}

int sumPrimesInArray(const int arr[], int size) {
    int sum = 0;
    for (int i = 0; i <= size - 1; i++) {
        if (isPrime(arr[i])) {
            sum += arr[i];
        }
    }
    return sum;
}
