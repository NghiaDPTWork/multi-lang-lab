/* =========================================================================
   HỆ THỐNG BÀI HỌC: VÒNG LẶP FOR & PHẠM VI BIẾN (FOR LOOP & VARIABLE SCOPE)
   =========================================================================
   
   1. KHÁI NIỆM VÒNG LẶP (FOR LOOP)
      - Vòng lặp được sử dụng để lặp lại một khối mã lệnh nhiều lần cho đến khi một điều kiện nhất định không còn thỏa mãn.
      - Cú pháp chuẩn (Syntax):
        for (khởi_đầu; điều_kiện_thoát; bước_nhảy) {
            // thực hiện công việc (khối mã lặp)
        }
      - Quy trình hoạt động từng bước:
        Bước 1: Thực hiện biểu thức "khởi_đầu" (chỉ chạy duy nhất 1 lần đầu tiên).
        Bước 2: Kiểm tra "điều_kiện_thoát". Nếu True (đúng) thì sang Bước 3, nếu False (sai) thì dừng vòng lặp ngay.
        Bước 3: Thực thi khối mã lệnh bên trong thân vòng lặp `{ do something }`.
        Bước 4: Thực hiện biểu thức "bước_nhảy" (ví dụ: i++). Sau đó quay lại Bước 2 để tiếp tục chu kỳ mới.

   2. PHẠM VI HOẠT ĐỘNG CỦA BIẾN (VARIABLE SCOPE IN FOR LOOP)
      Có 2 cách khai báo biến đếm `i` cho vòng lặp, tương ứng với 2 tầm vực bộ nhớ khác nhau:
      
      - Trường hợp 1: Biến khai báo ngoài vòng lặp (External declaration)
        Ví dụ: 
        int i;
        for (i = 1; i <= 3; i++) { ... }
        + Lúc này, vòng lặp dùng chung ô nhớ của biến `i` ở ngoài. Khi kết thúc vòng lặp, giá trị của `i` ngoài đời thực cũng bị thay đổi.
        + Sau khi kết thúc vòng lặp trên, giá trị của `i` sẽ là 4.
      
      - Trường hợp 2: Biến khai báo trong vòng lặp (Local declaration - C99+)
        Ví dụ:
        for (int i = 1; i <= 3; i++) { ... }
        + Biến `i` này chỉ sống trong phạm vi khối lệnh `{}` của vòng lặp `for`. Khi ra ngoài, biến `i` này biến mất và bộ nhớ được giải phóng.
        + Nếu ngoài vòng lặp có một biến `i` khác, hai biến này hoàn toàn độc lập và không liên quan đến nhau.
   ========================================================================= */

#include <stdio.h>
#include <stdlib.h>

int main()
{
    // --- PHẦN 1: MINH HỌA VÒNG LẶP FOR VỚI BIẾN KHAI BÁO NGOÀI ---
    printf("--- PHAN 1: BIEN DEM KHAI BAO NGOAI (SHARED SCOPE) ---\n");
    int i = 10; // Khởi đầu i = 10 ngoài vòng lặp
    
    for (i = 1; i <= 3; i++) {
        printf("%d. Nguyen The Hoang\n", i);
    }
    
    
    // --- PHẦN 2: KIỂM TRA GIÁ TRỊ CỦA BIẾN ĐẾM SAU KHI VÒNG LẶP KẾT THÚC ---
    printf("\n--- PHAN 2: GIA TRI CUA BIEN 'i' SAU KHI LAP XONG ---\n");
    printf("I sau khi chay ne: %d\n", i); // Sẽ in ra 4 vì i tăng lên 4 mới sai điều kiện thoát


    // --- PHẦN 3: MINH HỌA PHẠM VI BIẾN LOCAL TRONG VÒNG LẶP (LOCAL SCOPE - C99) ---
    printf("\n--- PHAN 3: BIEN DEM KHAI BAO TRONG VONG LAP (LOCAL SCOPE) ---\n");
    int k = 99; // Biến k ngoài vòng lặp độc lập
    
    for (int k = 1; k <= 3; k++) {
        // Biến k ở đây là biến cục bộ hoàn toàn mới, chỉ sống trong dấu {} này
        printf("k trong vong lap = %d\n", k);
    }
    
    printf("k ngoai vong lap van giu nguyen la: %d\n", k); // In ra 99 vì k trong vòng lặp đã bị giải phóng

    return 0;
}
