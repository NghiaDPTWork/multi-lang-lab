/* =========================================================================
   BÀI TẬP THỰC HÀNH C: TÍNH TỔNG CÁC SỐ NGUYÊN TỐ TRONG ĐOẠN (SUM PRIMES)
   =========================================================================
   
   ĐỀ BÀI:
   Nhập vào hai số `start` và `end`.
   Thực hiện việc liệt kê tất cả các số nguyên tố nằm trong đoạn [start, end]
   Đồng thời tính tổng giá trị của toàn bộ những số nguyên tố đó.
   
   PHƯƠNG PHÁP GIẢI (VÒNG LẶP LỒNG NHAU - NESTED LOOP):
   1. Vòng lặp ngoài: Duyệt qua từng ứng viên `num` từ start đến end.
   2. Bên trong mỗi lần lặp: Áp dụng thuật toán kiểm tra số nguyên tố tối ưu.
   3. Nếu ứng viên thỏa mãn: Thực hiện in ra màn hình và cộng vào biến tổng.
   ========================================================================= */

#include <stdio.h>
#include <stdlib.h>
#include <math.h>

int main()
{
    int start, end;
    long long sumPrimes = 0; // Chứa tổng cuối cùng
    int countPrimes = 0;     // Đếm số lượng

    printf("--- CHUONG TRINH LIET KE & TINH TONG CAC SO NGUYEN TO ---\n");
    printf("Nhap diem bat dau: ");
    scanf("%d", &start);
    printf("Nhap diem ket thuc: ");
    scanf("%d", &end);

    // Hoán đổi nếu nhập lộn xộn
    if (start > end) {
        int tmp = start;
        start = end;
        end = tmp;
    }

    printf("\nCac so nguyen to tim thay trong doan [%d, %d]:\n", start, end);

    // VÒNG LẶP NGOÀI: Duyệt qua từng số trong đoạn
    for (int currentNum = start; currentNum <= end; currentNum++) {
        
        // Số < 2 không xét tiếp
        if (currentNum < 2) {
            continue; 
        }

        // THUẬT TOÁN KIỂM TRA TỐI ƯU (NẰM BÊN TRONG VÒNG LẶP)
        int isPrime = 1;
        int limit = (int)sqrt(currentNum);

        for (int i = 2; i <= limit; i++) {
            if (currentNum % i == 0) {
                isPrime = 0; // Phát hiện không phải nguyên tố
                break;       // Ngắt kiểm tra sớm
            }
        }

        // NẾU THỎA MÃN ĐIỀU KIỆN
        if (isPrime == 1) {
            printf("%-5d", currentNum);
            sumPrimes += currentNum; // Cộng dồn vào tổng
            countPrimes++;           // Tăng bộ đếm
        }
    }

    printf("\n\n================ KET QUA ================\n");
    printf("- Tong so luong so nguyen to tim thay: %d\n", countPrimes);
    printf("- TONG GIA TRI TAT CA SO NGUYEN TO = %lld\n", sumPrimes);
    printf("=========================================\n");

    return 0;
}
