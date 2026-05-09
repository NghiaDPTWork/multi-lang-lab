/* =========================================================================
   HỆ THỐNG BÀI HỌC: QUAN HỆ KẾ THỪA (INHERITANCE) & PHƯƠNG THỨC GHI ĐÈ
   =========================================================================
   
   1. QUAN HỆ KẾ THỪA "IS-A" (KẾ THỪA ĐẶC BIỆT HÓA)
      - Sử dụng từ khóa `extends` trong Java để liên kết lớp con và lớp cha.
      - Ví dụ: `RightTriangle extends Triangle` thể hiện mối quan hệ "RightTriangle IS A Triangle" (Tam giác vuông là một Tam giác).
      - Mục đích của kế thừa:
        + Tái sử dụng (Reusability): Kế thừa toàn bộ những thuộc tính và phương thức tốt mà lớp cha đã có sẵn.
        + Mở rộng (Extension): Bổ sung thêm các đặc tính riêng biệt hoặc viết lại các hành vi chưa phù hợp của lớp cha.

   2. TỪ KHÓA 'super' (LÊN HỆ BỀ TRÊN)
      - `super` được dùng để gọi đến Constructor hoặc phương thức của lớp cha gần nhất.
      - Gọi constructor của cha: `super(edgeA, edgeB, edgeC)`.
      - **QUY TẮC BẮT BUỘC**: Lệnh `super(...)` luôn luôn phải là dòng lệnh đầu tiên xuất hiện trong Constructor của lớp con.

   3. GHI ĐÈ PHƯƠNG THỨC (METHOD OVERRIDING)
      - Lớp con định nghĩa lại thân hàm của phương thức đã có ở lớp cha để phù hợp với ngữ cảnh cụ thể của lớp con.
      - Sử dụng annotation `@Override` để trình biên dịch kiểm tra lỗi chính tả chữ ký hàm một cách chặt chẽ.
   ========================================================================= */

package data;

public class RightTriangle extends Triangle { 
    
    // --- PHẦN 1: CONSTRUCTOR (ỦY QUYỀN KHỞI TẠO CHO CHA QUA SUPER) ---
    // Tam giác vuông chỉ cần nhập 2 cạnh góc vuông (A, B). Cạnh huyền C được tính tự động bằng định lý Pitago.
    public RightTriangle(double edgeA, double edgeB) {
        super(edgeA, edgeB, Math.sqrt(edgeA * edgeA + edgeB * edgeB)); // Gọi ngay Constructor của cha Triangle
    }
    
    
    // --- PHẦN 2: PHƯƠNG THỨC GHI ĐÈ HIỂN THỊ THÔNG TIN (METHOD OVERRIDING) ---
    @Override
    public void showInfor() {
        String str = String.format("RightTriangle|%5.2f|%5.2f|%5.2f|%5.2f|%5.2f|",
                                    edgeA, edgeB, edgeC, getPerimeter(), getArea());
        System.out.println(str);
    }
}
