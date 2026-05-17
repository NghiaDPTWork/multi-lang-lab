/* =========================================================================
   THỰC HÀNH C: TÌM DÃY CON TĂNG DẦN LIÊN TIẾP CÓ TỔNG LỚN NHẤT (MAX SUM SUBARRAY)
   =========================================================================
   
   YÊU CẦU ĐỀ BÀI:
   1. Viết hàm nhập và xuất mảng.
   2. Tìm dãy con liên tiếp tăng dần trong mảng ban đầu sao cho tổng giá trị của dãy con này là lớn nhất.
      - Ví dụ:
        + Mảng gốc: 1, 2, 3, 1, 2, 4, 5, 6, 7, 2, 3, 6, 7, 8, 9, 9, 10
        + Các dãy con tăng dần là:
          * {1, 2, 3} -> tổng = 6
          * {1, 2, 4, 5, 6, 7} -> tổng = 25
          * {2, 3, 6, 7, 8, 9} -> tổng = 35
          * {9, 10} -> tổng = 19
        + Vậy mảng con tăng dần liên tiếp có tổng lớn nhất là: {2, 3, 6, 7, 8, 9} với tổng = 35.
        
   ========================================================================= */

#include <stdio.h>
#include <stdlib.h>

const int MAX = 100;

void input(int arr[], int *size);
void output(const int arr[], int size, const char *msg);
int sumAllElements(const int arr[], int size);
void cpyArray(int dest[], int *sizeDest, const int src[], int sizeSrc);
void findMaxIncreasingSubArray(const int arr[], int size, int result[], int *sizeResult);

int main()
{
    int arr[MAX];
    int size = 0;
    int result[MAX];
    int sizeResult = 0;

    printf("=== TIM DAY CON TANG DAN LIEN TIEP CO TONG MAX ===\n");
    input(arr, &size);
    output(arr, size, "Mang ban dau");

    if (size > 0) {
        findMaxIncreasingSubArray(arr, size, result, &sizeResult);

        printf("\n================ KET QUA ================\n");
        output(result, sizeResult, "Day con tang dan co tong MAX");
        printf("=> Tong cua day con nay la: %d\n", sumAllElements(result, sizeResult));
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

int sumAllElements(const int arr[], int size) {
    int sum = 0;
    for (int i = 0; i <= size - 1; i++) {
        sum += arr[i];
    }
    return sum;
}

void cpyArray(int dest[], int *sizeDest, const int src[], int sizeSrc) {
    *sizeDest = 0;
    for (int i = 0; i <= sizeSrc - 1; i++) {
        dest[(*sizeDest)++] = src[i];
    }
}

/**
 * Tìm dãy con tăng dần liên tiếp có tổng lớn nhất
 */
void findMaxIncreasingSubArray(const int arr[], int size, int result[], int *sizeResult) {
    int tmp[100];
    int sizeTmp = 0;

    int maxSub[100];
    int sizeMax = 0;

    for (int i = 0; i <= size - 1; i++) {
        // Nhét phần tử hiện tại vào dãy con tạm thời
        tmp[sizeTmp++] = arr[i];

        // Nếu phần tử tiếp theo KHÔNG tăng dần (arr[i] >= arr[i+1]) hoặc đã hết mảng (i == size - 1)
        if (i == size - 1 || arr[i] >= arr[i + 1]) {
            // So sánh tổng dãy con tạm thời với tổng của dãy con kỷ lục đang giữ
            if (sumAllElements(tmp, sizeTmp) > sumAllElements(maxSub, sizeMax)) {
                // Phá vỡ kỷ lục, sao chép dãy tạm thời vào dãy kỷ lục
                cpyArray(maxSub, &sizeMax, tmp, sizeTmp);
            }
            // Khởi tạo lại kích thước dãy con tạm thời về 0 để đón nhận dãy con mới
            sizeTmp = 0;
        }
    }

    // Sao chép kết quả kỷ lục ra ngoài
    cpyArray(result, sizeResult, maxSub, sizeMax);
}
