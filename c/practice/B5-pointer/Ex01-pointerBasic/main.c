/* =========================================================================
   THỰC HÀNH C: KHAI BÁO VÀ THAO TÁC CƠ BẢN VỚI CON TRỎ
   =========================================================================
   
   YÊU CẦU ĐỀ BÀI:
   Viết chương trình C thực hiện các thao tác:
   1. Khai báo 1 biến số nguyên `n` và gán giá trị bất kỳ.
   2. Khai báo 1 con trỏ `p` và trỏ vào biến `n`.
   3. Thực hiện in ra các thông số:
      - Giá trị của `n`
      - Địa chỉ của `n`
      - Giá trị của con trỏ `p` (địa chỉ của `n`)
      - Giá trị nằm tại địa chỉ mà con trỏ `p` trỏ tới (dùng toán tử dereference `*`).
   4. Thay đổi giá trị của `n` gián tiếp thông qua con trỏ `p` và in lại kết quả để xác minh.
   
   ========================================================================= */

#include <stdio.h>
#include <stdlib.h>

int main()
{
    int n = 100;
    int *p = &n;

    printf("============================================\n");
    printf("        THAO TAC CON TRO CO BAN             \n");
    printf("============================================\n");
    printf("1. Gia tri cua n                     = %d\n", n);
    printf("2. Dia chi cua n (&n)                = %p\n", (void*)&n);
    printf("3. Gia tri cua con tro p (luu &n)    = %p\n", (void*)p);
    printf("4. Gia tri p tro toi (*p)            = %d\n", *p);
    printf("5. Dia chi cua ban than con tro p    = %p\n", (void*)&p);
    printf("--------------------------------------------\n");

    // Thay đổi gián tiếp giá trị của n
    *p = 999;
    printf(">>> Thay doi gia tri qua con tro *p = 999...\n");
    printf("6. Gia tri moi cua n                 = %d\n", n);
    printf("7. Gia tri moi cua *p                = %d\n", *p);
    printf("============================================\n");

    return 0;
}
