/* =========================================================================
   BÀI TẬP THỰC HÀNH C: KIỂM TRA SỐ NGUYÊN TỐ TỐI ƯU (PRIME CHECKER)
   =========================================================================
   
   ĐỀ BÀI:
   Nhập vào một số nguyên n từ bàn phím.
   Xây dựng chương trình xác định xem con số đó có phải là Số nguyên tố hay không.
   
   CÁC CẤP ĐỘ TỐI ƯU HÓA:
   1. Cấp thấp: Chạy từ 2 đến n - 1 (rất tốn tài nguyên khi n cực lớn).
   2. Cấp cao: Chỉ chạy vòng lặp kiểm tra chia hết từ 2 đến CĂN BẬC HAI của n.
   3. Cấp tối cao (Kết hợp): Sử dụng toán tử `break` để thoát vòng lặp ngay lập tức khi vừa tìm thấy ước đầu tiên (không đợi chạy hết vòng lặp).
   ========================================================================= */

#include <stdio.h>
#include <stdlib.h>
#include <math.h>

int main()
{
    int n;
    int isPrime = 1; // 1: ĐÚNG là số nguyên tố, 0: SAI

    printf("--- CHUONG TRINH KIEM TRA SO NGUYEN TO ---\n");
    printf("Moi ban nhap so can kiem tra: ");
    scanf("%d", &n);

    // Quy luật gốc: Các số < 2 không bao giờ là số nguyên tố
    if (n < 2) {
        isPrime = 0;
    }
    else {
        // KỸ THUẬT TỐI ƯU: Chỉ chạy đến căn bậc hai (sqrt) của n
        // Giúp tiết kiệm tài nguyên khổng lồ khi kiểm tra số lớn
        int limit = (int)sqrt(n);

        for (int i = 2; i <= limit; i++) {
            if (n % i == 0) {
                isPrime = 0; // Hạ cờ hiệu vì đã tìm thấy ước số
                break;       // THOÁT NGAY! Tiết kiệm thời gian tính toán
            }
        }
    }

    // KẾT LUẬN DỰA TRÊN KẾT QUẢ CỜ HIỆU
    if (isPrime == 1) {
        printf("\n=> KET QUA: Con so %d LA mot so nguyen to!\n", n);
    } 
    else {
        printf("\n=> KET QUA: Con so %d KHONG PHAI la so nguyen to!\n", n);
    }

    return 0;
}
