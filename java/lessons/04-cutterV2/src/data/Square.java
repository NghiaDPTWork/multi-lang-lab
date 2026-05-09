/* =========================================================================
   HỆ THỐNG BÀI HỌC: KHÔNG DƯ THỪA DỮ LIỆU & ỦY QUYỀN CONSTRUCTOR TRONG KẾ THỪA
   =========================================================================
   
   1. QUY TẮC KHÔNG DƯ THỪA DỮ LIỆU (NO DATA REDUNDANCY IN SUBCLASS)
      - Lớp con `Square` kế thừa lớp cha `Rectangle`. Vì hình vuông thực chất là hình chữ nhật đặc biệt có 2 cạnh bằng nhau, nên `Square` KHÔNG cần tạo thêm bất kỳ thuộc tính riêng nào như `private double edge;`.
      - Nếu cố tình khai báo thêm `edge`, ta sẽ vừa lãng phí tài nguyên bộ nhớ bộ đệm, vừa tạo ra sự mâu thuẫn về mặt logic khi đồng thời tồn tại 3 giá trị cạnh (`width`, `height`, `edge`) trong một hình vuông.
      - Bản chất: `Square` sử dụng trực tiếp các ô nhớ `width` và `height` của cha nhưng luôn gán chúng bằng một giá trị duy nhất (độ dài cạnh).

   2. CƠ CHẾ KHỞI TẠO ĐỐI TƯỢNG CON (SUPER DELEGATION IN CONSTRUCTORS)
      - Lớp con đại diện cho một phiên bản mở rộng của lớp cha. Do đó, để tạo ra đối tượng con, máy ảo Java bắt buộc phải tạo ra bộ khung của đối tượng cha trước, sau đó mới đắp thêm phần mở rộng của con.
      - Câu lệnh `super(edge, edge, color)` thực hiện việc chuyển tiếp giá trị cạnh thành cả chiều dài và chiều rộng để khởi tạo bộ khung `Rectangle` của lớp cha.
   ========================================================================= */

package data;

public class Square extends Rectangle {
    
    // --- PHẦN 1: CONSTRUCTOR (ỦY QUYỀN KHỞI TẠO QUA SUPER) ---
    public Square(double edge, String color) {
        // Gửi giá trị 'edge' vào cả 2 tham số width và height của lớp cha
        super(edge, edge, color); 
    }

    
    // --- PHẦN 2: GHI ĐÈ PHƯƠNG THỨC PAINT (METHOD OVERRIDING) ---
    @Override
    public void Paint() {
        String str = String.format("Square   |%11.2f|%-10s|%5.2f|%5.2f", 
                                  width, color, getPerimeter(), getArea());
        System.out.println(str);
    }

    
    // --- PHẦN 3: PHƯƠNG THỨC ĐẶC BIỆT CỦA RIÊNG LỚP CON (SUBCLASS UNIQUE METHOD) ---
    public void hehe() {
        System.out.println("Hehe, day la tieng cuoi dac trung cua rieng Hinh Vuong!");
    }
}
