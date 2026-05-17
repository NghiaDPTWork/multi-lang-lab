#include <stdio.h>
#include <stdlib.h>

/* =========================================================================
   BÀI HỌC C: KIẾN THỨC CƠ BẢN VỀ CON TRỎ (POINTER BASIC)
   =========================================================================
   - Tìm hiểu cách thức hoạt động của RAM: Mỗi biến đều có [Giá trị] và [Địa chỉ].
   - Con trỏ (Pointer): Là biến đặc biệt chuyên dùng để lưu trữ [Địa chỉ] của biến khác.
   - Toán tử con trỏ:
     * `&` (Address-of): Lấy ra địa chỉ bộ nhớ của một biến.
     * `*` (Dereference / Value-at-address): Truy cập trực tiếp vào giá trị tại địa chỉ đó.
   ========================================================================= */

int main()
{
    // Tạo biến a lưu trữ giá trị số nguyên 20
    int a = 20;

    // Tạo biến con trỏ z trỏ vào địa chỉ của a
    int *z = &a;

    printf("=== DULIEU KHOI TAO ===\n");
    // In ra giá trị và địa chỉ của biến a
    printf("Gia tri cua a = %d\n", a);
    printf("Dia chi cua a = %p\n", (void*)&a);

    // In ra giá trị lưu trong z (địa chỉ của a) và địa chỉ bản thân của z
    printf("\nGia tri cua con tro z (Dia chi cua a) = %p\n", (void*)z);
    printf("Dia chi cua con tro z tren RAM = %p\n", (void*)&z);

    printf("\n=== THAY DOI GIA TRI QUA CON TRO ===\n");
    // Thay đổi giá trị của a thông qua con trỏ z
    *z -= 2; // Giảm giá trị tại địa chỉ z trỏ đến đi 2 đơn vị (a sẽ còn 18)

    // In ra giá trị mới của a
    printf("Gia tri moi cua a = %d\n", a);

    return 0;
}
