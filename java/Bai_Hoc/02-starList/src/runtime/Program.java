/* =========================================================================
   HỆ THỐNG BÀI HỌC: ĐẶC TẢ TRUY CẬP (ACCESS & NON-ACCESS MODIFIERS)
   =========================================================================
   
   I - ACCESS MODIFIERS (ĐẶC TẢ TRUY CẬP - GIỚI HẠN TẦM NHÌN)
       Java cung cấp 4 cấp độ kiểm soát truy cập từ nghiêm ngặt nhất đến thoáng nhất:
       
       1. private (Nghiêm ngặt nhất):
          - Chỉ có các thành viên (biến, phương thức) trong CÙNG MỘT CLASS mới nhìn thấy và gọi được.
          - Bên ngoài class (kể cả class con hay cùng package) đều KHÔNG thể truy cập trực tiếp.
       
       2. default (Cấp độ mặc định - Package-private):
          - Khi không khai báo từ khóa access modifier nào trước thuộc tính/phương thức.
          - Chỉ có những Class nằm trong CÙNG MỘT PACKAGE (cùng hộp) mới có quyền truy cập lẫn nhau.
       
       3. protected (Cấp độ kế thừa):
          - Cho phép các Class trong CÙNG PACKAGE hoặc các Class CON kế thừa từ nó (ngay cả khi khác package) có quyền truy cập.
          - Quy tắc kế thừa: "Cha cho con tất cả những gì cha có, nhưng con không cho cha bất cứ thứ gì".
       
       4. public (Cấp độ thoáng nhất):
          - Cho phép truy cập từ bất kỳ đâu trong toàn bộ Project (cùng hoặc khác package).
          - Chỉ cần import Class là có thể gọi thoải mái các thành phần public.
          
       * Quy tắc: Chỉ có 1 trong 4 đặc tả truy cập trên được xuất hiện trước 1 thành phần tại một thời điểm.

   II - NON-ACCESS MODIFIERS (ĐẶC TẢ PHI TRUY CẬP - THAY ĐỔI TÍNH CHẤT)
       Được dùng phối hợp cùng Access Modifiers để thay đổi đặc tính hành vi của Class, thuộc tính hoặc phương thức:
       
       1. static (Đồ dùng chung của tập thể):
          - Thuộc tính hoặc phương thức tĩnh thuộc sở hữu của chính CLASS, chứ không thuộc sở hữu riêng của bất kỳ đối tượng (instance) nào được tạo ra từ Class đó.
          - Có thể gọi trực tiếp qua tên Class (ví dụ `Math.sqrt()`) mà không cần khởi tạo đối tượng qua từ khóa `new`.
       
       2. final (Phiên bản cuối cùng - Không thể biến đổi):
          - final class: Lớp cuối cùng, không thể bị kế thừa (tuyệt tự).
          - final properties: Biến hằng số, chỉ được gán giá trị một lần duy nhất và không thể thay đổi giá trị sau đó (thường viết hoa, ví dụ `public final double PI = 3.14`).
          - final method: Phương thức cuối cùng, lớp con kế thừa không thể nạp chồng/vượt mặt (override).
       
       3. abstract (Trừu tượng):
          - abstract class: Lớp trừu tượng, đóng vai trò làm khung xương/bản mẫu thiết kế, không thể tạo đối tượng trực tiếp qua `new`.
          - abstract method: Phương thức trừu tượng, chỉ có tên và chữ ký hàm mà không có thân hàm `{}` xử lý cụ thể. Lớp con kế thừa bắt buộc phải override để định nghĩa chi tiết.
   ========================================================================= */

package runtime;

import data.Star;

public class Program {
    
    public static void main(String[] args) {
        
        // --- PHẦN 1: KHỞI TẠO ĐỐI TƯỢNG (OBJECT INSTANTIATION) ---
        // 'mtp' đóng vai trò là một biến tham chiếu (con trỏ) trỏ đến vùng dữ liệu thực tế (bức tượng/object) trên bộ nhớ Heap
        Star mtp = new Star("Son Tung MTP", 1994, "Nam", "Con Mua Ngang Qua");
        
        // Gọi phương thức hành vi hiển thị thông tin
        mtp.showInfor();
        
        
        // --- PHẦN 2: KHỞI TẠO ĐỐI TƯỢNG THỨ HAI ---
        Star chiPu = new Star("Chi Pu", 1993, "Nu", "Anh oi o lai");
        chiPu.showInfor();
        
        
        // --- PHẦN 3: MINH HỌA SỬ DỤNG GETTER & SETTER ĐỂ THAY ĐỔI DỮ LIỆU AN TOÀN ---
        // Ta không thể gọi trực tiếp 'chiPu.name = "Thuy Chi"' vì thuộc tính 'name' là private
        System.out.println("\nTen hien tai cua Chi Pu qua Getter: " + chiPu.getName());
        
        chiPu.setName("Thuy Chi (New Name)"); // Sử dụng Setter để đổi tên an toàn
        System.out.println("Ten sau khi thay doi cua Chi Pu:");
        chiPu.showInfor();
    }
}
