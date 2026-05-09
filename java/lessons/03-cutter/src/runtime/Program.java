/* =========================================================================
   HỆ THỐNG BÀI HỌC: TẬP HỢP ĐA HÌNH & LIÊN KẾT ĐỘNG (POLYMORPHISM & LATE BINDING)
   =========================================================================
   
   1. MẢNG THAM CHIẾU CHA (UPCASTING & HETEROGENEOUS COLLECTION)
      - Nhờ quan hệ kế thừa "Is-A", một biến tham chiếu kiểu cha (`Triangle`) hoàn toàn có thể trỏ đến đối tượng của lớp con (`RightTriangle`).
      - Điều này cho phép ta gom tất cả các đối tượng khác nhau (nhưng chung nguồn gốc cha) vào trong cùng một mảng duy nhất:
        `Triangle[] triangleList = new Triangle[2];`
        Mảng này có thể chứa cả `Triangle` thuần túy và `RightTriangle` đặc biệt.

   2. TÍNH ĐA HÌNH LÚC THỰC THI (RUNTIME POLYMORPHISM / DYNAMIC DISPATCH)
      - Khi duyệt mảng kiểu cha và gọi phương thức ghi đè: `triangleList[i].showInfor();`
      - Tại thời điểm biên dịch (Compile-time), trình biên dịch chỉ biết nó đang gọi `showInfor()` của lớp cha `Triangle`.
      - Tại thời điểm thực thi (Runtime), máy ảo Java (JVM) sẽ tự động kiểm tra xem ô nhớ thực sự bên dưới thuộc về Object nào (cha hay con). Nếu là con (`RightTriangle`), JVM sẽ tự động kích hoạt phương thức đã được ghi đè của con.
      - Đây chính là khái niệm **Liên kết động (Late Binding / Dynamic Binding)** cốt lõi trong lập trình hướng đối tượng OOP.
   ========================================================================= */

package runtime;

import data.RightTriangle;
import data.Triangle;

public class Program {
    
    public static void main(String[] args) {
        
        // --- PHẦN 1: KHỞI TẠO CÁC ĐỐI TƯỢNG (OBJECT INSTANTIATION) ---
        Triangle tr1 = new Triangle(4, 7, 9);
        RightTriangle rtr1 = new RightTriangle(3, 4); // Nhập 2 cạnh góc vuông 3 và 4, cạnh huyền tự tính bằng 5
        
        
        // --- PHẦN 2: QUẢN LÝ TẬP HỢP ĐA HÌNH QUA MẢNG KIỂU CHA (POLYMORPHIC ARRAY) ---
        Triangle triangleList[] = new Triangle[2];
        triangleList[0] = tr1;
        triangleList[1] = rtr1; // Hợp lệ hoàn toàn nhờ quan hệ "Is-A" (Upcasting)
        
        
        // --- PHẦN 3: DUYỆT MẢNG VÀ GỌI PHƯƠNG THỨC ĐA HÌNH (DYNAMIC BINDING) ---
        System.out.println("Danh sach cac hinh tam giac trong mang:");
        System.out.println("Loai Hinh     |Canh A|Canh B|Canh C|Chu Vi|Dien Tich|");
        System.out.println("--------------+------+------+------+------+---------+");
        
        for (int i = 0; i <= triangleList.length - 1; i++) {
            // JVM sẽ tự động gọi phương thức đúng của đối tượng thực tế dưới Heap (Late Binding)
            triangleList[i].showInfor();
        }
    }
}
