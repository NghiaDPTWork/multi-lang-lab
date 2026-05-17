/* =========================================================================
   THỰC HÀNH C: KIỂM TRA SỐ FIBONACCI TRONG MẢNG (CHECK FIBONACCI IN ARRAY)
   =========================================================================
   
   YÊU CẦU ĐỀ BÀI:
   1. Viết hàm bổ trợ `isFibonacci(int n)` trả về 1 nếu n là số thuộc dãy Fibonacci, và 0 nếu ngược lại.
   2. Viết hàm kiểm tra và in ra danh sách các số trong mảng thỏa mãn điều kiện là số Fibonacci.
   
   KHÁI NIỆM FIBONACCI:
   - Dãy Fibonacci bắt đầu bằng: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55,...
   - Số tiếp theo bằng tổng hai số liền trước: F(n) = F(n-1) + F(n-2) với F(0)=0, F(1)=1.
   ========================================================================= */

#include <stdio.h>
#include <stdlib.h>

const int MAX = 100;

void input(int arr[], int *size);
void output(const int arr[], int size);
int isFibonacci(int n);
void checkAndPrintFibonacciElements(const int arr[], int size);

int main()
{
    int arr[MAX];
    int size;

    printf("=== HE THONG KIEM TRA SO FIBONACCI TRONG MANG ===\n");
    input(arr, &size);
    output(arr, size);

    if (size > 0) {
        checkAndPrintFibonacciElements(arr, size);
    }
    printf("==================================================\n");

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
 * Kiểm tra xem một số nguyên n có thuộc dãy Fibonacci hay không
 * @return 1 nếu đúng, 0 nếu sai
 */
int isFibonacci(int n) {
    if (n < 0) return 0;
    if (n == 0 || n == 1) return 1;

    int prev = 0;
    int curr = 1;
    int next = prev + curr;

    while (next <= n) {
        if (next == n) return 1;
        prev = curr;
        curr = next;
        next = prev + curr;
    }

    return 0;
}

void checkAndPrintFibonacciElements(const int arr[], int size) {
    int found = 0;
    printf("\n>>> KET QUA KIEM TRA:\n");
    for (int i = 0; i <= size - 1; i++) {
        if (isFibonacci(arr[i])) {
            printf("- Phan tu Arr[%d] = %d LA so Fibonacci.\n", i, arr[i]);
            found++;
        } else {
            printf("- Phan tu Arr[%d] = %d KHONG PHAI la so Fibonacci.\n", i, arr[i]);
        }
    }
    printf("=> Tim thay tong cong %d so Fibonacci trong mang.\n", found);
}
