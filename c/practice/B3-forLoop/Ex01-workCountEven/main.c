/* =========================================================================
   BÀI TẬP THỰC HÀNH C: THỐNG KÊ SỐ LẺ VÀ TÍNH TỔNG (ODD NUMBERS STATISTICS)
   =========================================================================
   
   ĐỀ BÀI:
   Nhập vào hai điểm `start` và `end` định nghĩa một đoạn [start, end].
   Hãy thực hiện đồng thời các yêu cầu sau bằng vòng lặp FOR duy nhất:
   1. In ra màn hình danh sách các số lẻ trong đoạn.
   2. Tính tổng tất cả các số lẻ tìm được.
   3. Thống kê tổng số lượng số chẵn có mặt trong đoạn.
   4. Thống kê tổng cộng có bao nhiêu con số nằm trong đoạn đó.
   ========================================================================= */

#include <stdio.h>
#include <stdlib.h>

int main()
{
    int start, end;
    int totalSumOdd = 0;    // Biến tích lũy tổng số lẻ
    int countAll = 0;       // Tổng số lượng số trong đoạn
    int countEven = 0;      // Số lượng số chẵn
    int countOdd = 0;       // Số lượng số lẻ

    printf("--- CHUONG TRINH THONG KE TRONG DOAN ---\n");
    printf("Nhap vao diem bat dau: ");
    scanf("%d", &start);
    printf("Nhap vao diem ket thuc: ");
    scanf("%d", &end);

    // Đảm bảo vòng lặp chạy đúng từ nhỏ đến lớn
    if (start > end) {
        int tmp = start;
        start = end;
        end = tmp;
    }

    printf("\nDanh sach cac so le tim thay trong doan:\n");

    for (int i = start; i <= end; i++) {
        countAll++; // Đếm tổng số lượng phần tử duyệt qua
        
        if (i % 2 == 0) {
            countEven++; // Nếu chẵn -> Tăng biến đếm chẵn
        } 
        else {
            printf("%-5d", i);   // Nếu lẻ -> In ra màn hình
            totalSumOdd += i;     // Cộng dồn vào tổng số lẻ
            countOdd++;          // Tăng biến đếm lẻ
        }
    }

    printf("\n\n================ KET QUA =================\n");
    printf("- Tong cong co %d so trong doan.\n", countAll);
    printf("- Tim thay %d so chan.\n", countEven);
    printf("- Tim thay %d so le.\n", countOdd);
    printf("- TONG TAT CA CAC SO LE = %d\n", totalSumOdd);
    printf("==========================================\n");

    return 0;
}
