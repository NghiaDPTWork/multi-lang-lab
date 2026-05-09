/* =========================================================================
   HỆ THỐNG BÀI HỌC: LỚP VÔ DANH (ANONYMOUS CLASS) & KHỞI TẠO HANDMADE
   =========================================================================
   
   1. BẢN CHẤT LỚP VÔ DANH (ANONYMOUS CLASS)
      - Lớp vô danh (Anonymous Class) là một kỹ thuật đúc tượng không thông qua khuôn mẫu đặt tên cụ thể.
      - Sử dụng khi:
        + Ta lười hoặc ngại đặt tên cho một class phụ riêng biệt.
        + Chỉ muốn tạo nhanh duy nhất 1 đối tượng duy nhất tại chỗ và không có nhu cầu tái sử dụng class đó ở nơi khác (handmade creation).
      - Cú pháp đặc thù:
        Shape p = new Shape("Thang", "Hong") {
            // Vừa gán giá trị thuộc tính, vừa vá lỗ thủng của các phương thức trừu tượng ngay tại chỗ!
        }; // Kết thúc bằng dấu chấm phẩy vì bản chất đây là một câu lệnh gán giá trị!

   2. ƯU & NHƯỢC ĐIỂM
      - Ưu điểm: Cực nhanh chóng khi muốn tạo 1 đối tượng một lần duy nhất.
      - Nhược điểm: Không có tính tái sử dụng cao. Nếu muốn tạo cái thứ 2, ta lại phải copy toàn bộ khối code vá lỗ thủng, gây lãng phí và lặp code.
   ========================================================================= */

package runtime;

import data.Disk;
import data.Rectangle;
import data.Shape;
import data.Square;
import data.Triangle;

public class Program {
    
    public static void main(String[] args) {
        
        // --- PHẦN 1: QUẢN LÝ TẬP HỢP ĐA HÌNH Ở MỨC CAO NHẤT (TOP-LEVEL POLYMORPHISM) ---
        // Mảng kiểu cha chung Shape có thể chứa bất kỳ loại hình học con nào bên dưới Heap
        Shape ds[] = new Shape[4];
        ds[0] = new Disk("Quin", "Xanh", 5);
        ds[1] = new Square("Nghia", "Do", 6);
        ds[2] = new Rectangle("The Anh", "Tim", 2, 4);
        ds[3] = new Triangle(2, 4, 5, "Luc", "Gam"); // Sửa cạnh huyền tam giác hợp lệ (2+4 > 5)
        
        System.out.println("Danh sach cac hinh hoc trong mang:");
        System.out.println("Loai Hinh|Chu So Huu |Mau Sac   |Thong So Chuyen Biet (R/W/H/Edge...)");
        System.out.println("---------+-----------+----------+-----------------------------------");
        
        for (Shape item : ds) {
            item.Paint(); // Gọi đa hình hoàn hảo
        }
        
        
        // --- PHẦN 2: MINH HỌA LỚP VÔ DANH (ANONYMOUS CLASS - HANDMADE OBJECT CREATION) ---
        System.out.println("\nKhoi tao doi tuong bang Lop vo danh (Anonymous Class):");
        
        Shape p = new Shape("Thang", "Hong") {
            // Tiến hành vá các lỗ thủng trừu tượng trực tiếp cho đối tượng handmade này
            
            @Override
            public double getPerimeter() {
                return 28;
            }
            
            @Override
            public double getArea() {
                return 33;
            }
            
            @Override
            public void Paint() {
                String str = String.format("HANDMADE |%-10s|%-10s|%11.2f|%5.2f", 
                                  owner, color, getPerimeter(), getArea());
                System.out.println(str);
            }
        }; // Phải có dấu chấm phẩy kết thúc câu lệnh gán
        
        p.Paint(); // Gọi phương thức của đối tượng handmade vô danh thành công!
    }
}
