/* =========================================================================
   HỆ THỐNG BÀI HỌC: ĐA HÌNH, CON TRỎ BIẾN THỂ & ÉP KIỂU XUỐNG (DOWNCASTING)
   =========================================================================
   
   1. ĐA DẠNG KHAI BÁO THAM CHIẾU (REFERENCE VARIABILITY)
      Trong Java, ta có thể khai báo tham chiếu theo nhiều cách:
      - Cách 1: `Rectangle re1 = new Rectangle(...)` -> Khai báo tham chiếu kiểu cha, trỏ đến đối tượng cha.
      - Cách 2: `Square sq1 = new Square(...)` -> Khai báo tham chiếu kiểu con, trỏ đến đối tượng con.
      - Cách 3: `Rectangle sq2 = new Square(...)` -> Khai báo tham chiếu kiểu CHA, trỏ đến đối tượng CON (Upcasting).
        + Khi khai báo kiểu Cha trỏ đến đối tượng Con, đối tượng đó sẽ bị "giới hạn tầm nhìn" chỉ nhìn thấy những gì lớp Cha định nghĩa.
        + Do đó, câu lệnh `sq2.hehe()` sẽ gây lỗi biên dịch trực tiếp, dù bản chất thực tế đối tượng dưới Heap là một Hình Vuông có phương thức `hehe()`.

   2. ÉP KIỂU XUỐNG (DOWNCASTING / DRIFTING POINTER)
      - Để vượt qua giới hạn tầm nhìn của tham chiếu Cha và tiếp cận các phương thức đặc trưng của Con, ta thực hiện ép kiểu ngược về lớp con:
        `((Square) sq2).hehe();`
      - Hành động này tạm thời ép kiểu con trỏ chuyển hướng xuống lớp Con để kích hoạt phương thức độc quyền.

   3. VÒNG LẶP FOR-EACH (ITERATOR)
      - Cú pháp `for (Rectangle item : ds)` duyệt tuần tự qua toàn bộ mảng mà không cần quản lý biến chỉ số (index) thủ công, giúp mã nguồn vô cùng sạch sẽ và tránh lỗi tràn chỉ mục mảng.
   ========================================================================= */

package runtime;

import data.Rectangle;
import data.Square;

public class Program {
    
    public static void main(String[] args) {
        
        // --- PHẦN 1: KHỞI TẠO ĐỐI TƯỢNG VỚI CÁC KIỂU THAM CHIẾU KHÁC NHAU ---
        Rectangle re1 = new Rectangle(2, 5, "Tim"); // Khai cha trỏ cha
        re1.Paint();
        
        Square sq1 = new Square(3, "Do"); // Khai con trỏ con
        
        Rectangle sq2 = new Square(5, "Cam"); // Khai cha trỏ con (Upcasting)
        
        
        // --- PHẦN 2: MINH HỌA ÉP KIỂU NGƯỢC XUỐNG (DOWNCASTING / POINTER DRIFTING) ---
        System.out.println("\nThuc hien Downcasting de goi phuong thuc rieng cua Hinh Vuong:");
        // sq2.hehe(); -> Lỗi biên dịch vì con trỏ mang danh nghĩa Rectangle không biết hehe() là gì
        ((Square) sq2).hehe(); // Ép kiểu thành công và gọi được hehe()
        
        
        // --- PHẦN 3: LƯU TRỮ VÀ DUYỆT MẢNG ĐA HÌNH (POLYMORPHIC ARRAY) ---
        Rectangle ds[] = new Rectangle[3];
        ds[0] = re1;
        ds[1] = sq1;
        ds[2] = sq2; // Tất cả đều hợp lệ vì Hình vuông IS-A Hình chữ nhật
        
        System.out.println("\nDanh sach cac hinh chu nhat va hinh vuong trong mang:");
        System.out.println("Loai Hinh|  Rong |  Cao  | Mau Sac  |Chu Vi|Dien Tich");
        System.out.println("---------+-------+-------+----------+------+---------");
        
        // Sử dụng vòng lặp For-Each tối ưu để duyệt mảng
        for (Rectangle item : ds) {
            item.Paint(); // Đa hình kích hoạt Paint() phù hợp với từng đối tượng thực tế dưới Heap
        }
    }
}
