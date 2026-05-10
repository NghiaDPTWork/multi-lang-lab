/* =========================================================================
   BÀI TẬP THỰC HÀNH C: TÌM SỐ LỚN NHẤT TRONG BA SỐ (LARGEST OF THREE)
   =========================================================================
   
   ĐỀ BÀI:
   Nhập vào 3 số nguyên a, b, c từ bàn phím.
   Sử dụng cấu trúc IF - ELSE IF - ELSE để tìm và in ra số có giá trị lớn nhất.
   Xử lý logic khéo léo để chương trình chạy đúng cả khi có các số bằng nhau.
   ========================================================================= */

#include <stdio.h>
#include <stdlib.h>

int main()
{
    int a, b, c;
    
    printf("--- TIM SO LON NHAT TRONG 3 SO ---\n");
    printf("Nhap vao so a: "); scanf("%d", &a);
    printf("Nhap vao so b: "); scanf("%d", &b);
    printf("Nhap vao so c: "); scanf("%d", &c);

    // TH1: a lớn hơn hoặc bằng cả b và c
    if (a >= b && a >= c) {
        /* 
           Logic bao quát:
           - Nếu a > b và a > c -> a lớn nhất.
           - Nếu a = b và a > c -> a và b cùng lớn nhất, in a vẫn đúng.
           - Nếu a = b = c -> cả 3 bằng nhau, in a vẫn chính xác.
        */
        printf("\n=> So lon nhat trong 3 so la: %d\n", a);
    } 
    // TH2: b lớn hơn hoặc bằng cả a và c
    else if (b >= a && b >= c) {
        printf("\n=> So lon nhat trong 3 so la: %d\n", b);
    } 
    // TH3: Cuối cùng chắc chắn c là lớn nhất
    else {
        printf("\n=> So lon nhat trong 3 so la: %d\n", c);
    }

    return 0;
}
