/* =========================================================================
   HỆ THỐNG BÀI HỌC: VÒNG LẶP WHILE VÀ DO-WHILE (LOOP VARIETIES)
   =========================================================================
   
   1. VÒNG LẶP WHILE (PRE-TEST LOOP):
      - Kiểm tra điều kiện TRƯỚC khi thực thi khối lệnh.
      - Nếu điều kiện sai ngay từ đầu, khối lệnh sẽ KHÔNG chạy lần nào.
      - Phù hợp khi không biết chính xác số lần lặp và cần kiểm tra tính hợp lệ trước.
      - Cú pháp:
        `while (điều kiện) { // khối lệnh; cập nhật biến đếm; }`

   2. VÒNG LẶP DO-WHILE (POST-TEST LOOP):
      - Thực thi khối lệnh TRƯỚC RỒI MỚI kiểm tra điều kiện.
      - Đảm bảo khối lệnh luôn được chạy ÍT NHẤT MỘT LẦN bất kể điều kiện ban đầu đúng hay sai.
      - Cực kỳ phổ biến trong việc xây dựng Menu, yêu cầu người dùng NHẬP LẠI cho đến khi đúng.
      - Cú pháp:
        `do { // khối lệnh; } while (điều kiện);`
   ========================================================================= */

#include <stdio.h>
#include <stdlib.h>

int main()
{
    printf("--- MINH HOA VONG LAP WHILE & DO-WHILE ---\n");

    // --- PHẦN 1: MINH HỌA VÒNG LẶP WHILE ---
    printf("\n1. Vong lap WHILE (In tu 1 den 10):\n");
    int i = 1;
    while (i <= 10) {
        printf("%-4d", i);
        i++; // Rất quan trọng để tránh vòng lặp vô tận
    }
    printf("\nGiá trị i sau vong lap WHILE: %d\n", i); // i lúc này bằng 11


    // --- PHẦN 2: MINH HỌA VÒNG LẶP DO-WHILE ---
    printf("\n2. Vong lap DO-WHILE (In tu 1 den 10):\n");
    int j = 1;
    do {
        printf("%-4d", j);
        j++;
    } while (j <= 10);
    printf("\nGiá trị j sau vong lap DO-WHILE: %d\n", j);


    // --- PHẦN 3: SỰ KHÁC BIỆT KHI ĐIỀU KIỆN SAI NGAY TỪ ĐẦU ---
    printf("\n3. So sanh khi dieu kien sai (vi du count > 5):\n");
    int count = 10;
    
    printf("-> Chay WHILE: ");
    while (count < 5) {
        printf("Loi nay se khong bao gio duoc in!");
    }
    printf("(Khong co gi in ra ca)\n");

    printf("-> Chay DO-WHILE: ");
    do {
        printf("Dau dieu kien sai nhung van in ra duoc 1 lan! ");
    } while (count < 5);
    printf("\n");

    return 0;
}
