/* =========================================================================
   HỆ THỐNG BÀI HỌC: KỸ THUẬT HOÁN ĐỔI & ĐẾM TRONG VÒNG LẶP (SWAP & COUNT)
   =========================================================================
   
   1. ĐỊNH NGHĨA KHOẢNG VÀ ĐOẠN TRONG TOÁN HỌC:
      - Đoạn [start, end]: Bao gồm cả điểm start và điểm end (Dùng dấu `<=` hoặc `>=`).
      - Khoảng (start, end): KHÔNG bao gồm điểm start và điểm end (Chỉ dùng `<` hoặc `>`).

   2. KỸ THUẬT HOÁN ĐỔI HAI GIÁ TRỊ (SWAPPING TECHNIQUE):
      - Khi gặp trường hợp đầu vào trái ngược logic mong đợi (ví dụ: `start` lớn hơn `end`), ta cần hoán đổi chúng để đảm bảo vòng lặp luôn chạy từ bé đến lớn.
      - Sử dụng thuật toán "Cốc Nước Thứ Ba":
        + B1: Rót nước từ cốc A (start) vào cốc trung gian C (tmp).
        + B2: Rót nước từ cốc B (end) sang cốc A (lúc này đang trống).
        + B3: Rót nước từ cốc trung gian C về cốc B.
      - Code mẫu:
        `int tmp = start;`
        `start = end;`
        `end = tmp;`

   3. KỸ THUẬT ĐẾM (COUNTING TECHNIQUE):
      - Khai báo một biến đếm ban đầu bằng 0 (`int count = 0`).
      - Khi điều kiện lọc thỏa mãn (ví dụ: `% 2 == 0`), thực hiện tăng biến đếm lên 1 đơn vị (`count++`).
   ========================================================================= */

#include <stdio.h>
#include <stdlib.h>

int main()
{
    // --- PHẦN 1: KHAI BÁO BIẾN VÀ NHẬP DỮ LIỆU ĐẦU VÀO ---
    int start, end;
    int count = 0;
    
    printf("Nhap vao diem bat dau: ");
    scanf("%d", &start);
    
    printf("Nhap vao diem ket thuc: ");
    scanf("%d", &end);


    // --- PHẦN 2: KỸ THUẬT ĐẢM BẢO TÍNH HỢP LỆ DỮ LIỆU (SWAP NẾU START > END) ---
    if (start > end) {
        int tmp = start;
        start = end;
        end = tmp;
        printf("--- Canh bao: Start lon hon End! Da hoan doi lai thanh: [%d, %d] ---\n", start, end);
    }


    // --- PHẦN 3: DUYỆT MẢNG VÀ ĐẾM CÁC SỐ CHẴN TRONG ĐOẠN ---
    printf("\nCac so chan tim thay trong doan:\n");
    
    for (int i = start; i <= end; i++) {
        if (i % 2 == 0) {
            printf("%-5d", i); // In ra số chẵn canh lề trái 5 khoảng trắng
            count++;           // Tăng biến đếm
        }
    }


    // --- PHẦN 4: IN RA TỔNG SỐ LƯỢNG ĐÃ ĐẾM ĐƯỢC ---
    printf("\n\nTong so luong so chan tim thay: Count = %d\n", count);

    return 0;
}
