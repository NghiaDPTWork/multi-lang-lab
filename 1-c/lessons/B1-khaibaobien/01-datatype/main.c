/* =========================================================================
   HỆ THỐNG BÀI HỌC: KHAI BÁO BIẾN & KIỂU DỮ LIỆU (DATATYPE & VARIABLES)
   =========================================================================
   
   1. ĐỊNH NGHĨA CƠ BẢN VỀ CÔNG NGHỆ THÔNG TIN (CNTT)
      - CNTT (IT) là việc sử dụng công nghệ để xử lý thông tin.
      - Quy trình xử lý luôn đi qua 3 bước cốt lõi:
        + I (Input): Đầu vào hoặc Lưu trữ dữ liệu.
        + P (Process): Xử lý dữ liệu.
        + O (Output): Xuất kết quả, báo cáo, hiển thị ra màn hình.
   
   2. BẢN CHẤT SỐ VÀ KÝ TỰ (NUMBER VS CHARACTER)
      - Số và ký tự là hai khái niệm hoàn toàn khác nhau trong bộ nhớ máy tính.
      - Ví dụ: Số 12 là một giá trị số nguyên, nhưng chuỗi ký tự "12" được biểu diễn bởi hai ký tự riêng biệt là '1' và '2'.
   
   3. CÁC KIỂU DỮ LIỆU CƠ BẢN TRONG C (DATATYPES)
      - char (Character): Kiểu ký tự, chiếm 1 byte trong bộ nhớ.
      - int (Integer): Kiểu số nguyên, chiếm 4 byte trong bộ nhớ.
      - float (Float): Kiểu số thực, chiếm 4 byte trong bộ nhớ.
      - double (Double): Kiểu số thực dài (long float), chiếm 8 byte trong bộ nhớ.
   
   4. KHÁI NIỆM BIẾN (VARIABLES)
      - Biến là một phân vùng trong bộ nhớ RAM được đặt tên để lưu trữ dữ liệu (value). Muốn lưu cái gì đó thì phải có biến để chứa.
      - Cách tạo biến:
        Bước 1: Xác định kiểu dữ liệu của giá trị muốn lưu trữ (int, char, float...).
        Bước 2: Đặt tên biến theo đúng quy tắc:
                + Nên là danh từ thể hiện rõ giá trị đang chứa.
                + Áp dụng quy tắc đặt tên Lạc đà (camelCase).
                + Không bắt đầu bằng chữ số.
                + Không chứa ký tự đặc biệt ngoài trừ dấu gạch dưới (_) và dấu dollar ($).
      - Phép gán (=): Assignment operator, dùng để gán giá trị bên phải vào biến bên trái.
                     Ví dụ: char firstCharOfName = 'N'; (Gán ký tự 'N' vào biến firstCharOfName).
   
   5. IN DỮ LIỆU RA MÀN HÌNH (PRINTF - PRINT FORMAT)
      - printf = print format (in ra màn hình theo định dạng mong muốn).
      - Cú pháp: printf("Nội dung cần hiển thị với %định_dạng", tên_biến);
      - Các ký hiệu định dạng (Format Specifiers):
        + %c: Đại diện cho ký tự (character).
        + %i hoặc %d: Đại diện cho số nguyên (integer / decimal hệ 10).
        + %u: Đại diện cho số nguyên không dấu (unsigned int). Thường dùng hiển thị địa chỉ ô nhớ RAM.
        + %f: Đại diện cho số thực (float). Để giới hạn số chữ số thập phân dùng %.nf (ví dụ %.3f).
        + %lf: Đại diện cho số thực dài (double / long float).
   
   6. CÁC KHÁI NIỆM NÂNG CAO KHÁC
      - Hàm main: Điểm bắt đầu (dấu nhắc hệ thống) truyền đối số (args) thông báo cho hệ điều hành (OS) nhận diện và thực thi chương trình.
      - return 0: Trả về số 0 cho OS để thông báo hàm main đã kết thúc thành công tốt đẹp.
      - Sequence / Procedure: Lập trình hướng thủ tục, chương trình chạy tuần tự từng bước từ trên xuống dưới.
      - Hardcode: Code cứng (giá trị cố định, khó thay đổi linh hoạt).
      - Softcode: Code mềm (sử dụng biến, tham số để thay đổi linh hoạt, tăng tính tái sử dụng).
   ========================================================================= */

#include <stdio.h>
#include <stdlib.h>

int main()
{
    // --- PHẦN 1: KHAI BÁO BIẾN VÀ LƯU TRỮ (INPUT / STORAGE) ---
    char firstCharOfName = 'N'; // Khai báo ký tự đầu tiên
    int myAge = 19;             // Khai báo tuổi
    float markOfMath = 7.25;    // Khai báo điểm toán
    double score = 6.5123456;   // Khai báo điểm số dài
    int number = 'A';           // Khai báo biến integer gán bằng ký tự 'A' (mã ASCII 65)


    // --- PHẦN 2: XỬ LÝ DỮ LIỆU (PROCESS) ---
    score = score + 2;          // Cộng thêm 2 vào biến score


    // --- PHẦN 3: XUẤT DỮ LIỆU (OUTPUT) ---
    printf("Ky tu dau tien la %c", firstCharOfName);
    printf("\nMy age is %i", myAge);
    printf("\nAdress of my age is %u", &myAge);      // In ra địa chỉ bộ nhớ của biến myAge trên RAM
    printf("\nMy age is %d", myAge);
    printf("\nMy mark is %.3f", markOfMath);
    printf("\nAdress of my math is %u", &markOfMath); // In ra địa chỉ bộ nhớ của biến markOfMath
    printf("\nMy score is %lf", score);
    printf("\n %c", number);                          // In số nguyên dưới dạng ký tự (hiển thị ký tự 'A' từ mã ASCII 65)


    // --- PHẦN 4: PHÉP CHIA VÀ ÉP KIỂU (DIVISION & TYPE CASTING) ---
    int numb1 = 10;
    int numb2 = 3;
    int result;
    float result1;
    
    // Ép kiểu (cast) số nguyên numb2 sang float để thực hiện phép chia lấy phần thập phân chính xác
    result1 = numb1 / (float)numb2; 
    printf("\nThe result is %.2f", result1);


    // --- PHẦN 5: HOÁN VỊ GIÁ TRỊ CỦA HAI BIẾN (SWAP VARIABLES) ---
    int number1 = 13;
    int sting = 12;
    int tmp;

    // Cách 1: Sử dụng biến trung gian (tmp)
    // tmp = sting;
    // sting = number1;
    // number1 = tmp;

    // Cách 2: Sử dụng toán tử toán học (Softcode, không cần biến trung gian)
    number1 = number1 + sting; // number1 = 13 + 12 = 25
    sting = number1 - sting;   // sting = 25 - 12 = 13
    number1 = number1 - sting; // number1 = 25 - 13 = 12

    printf("\nNumber ne %d va Sting ne %d", number1, sting);


    // --- PHẦN 6: KẾT THÚC CHƯƠNG TRÌNH ---
    return 0; // Trả về số 0 cho OS thông báo hàm main hoàn thành xuất sắc
}
