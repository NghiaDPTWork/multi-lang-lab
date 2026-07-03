/* =========================================================================
   THỰC THỂ TÁC GIẢ (AUTHOR CLASS)
   =========================================================================
   
   KIẾN THỨC CỐT LÕI:
   1. Nạp chồng phương thức (Method Overloading): Tái sử dụng `inputInfor` với các tham số khác nhau.
   2. Logic Ràng Buộc Duy Nhất (Unique Constraint): Kiểm tra trùng lặp Nickname trong danh sách 
      trước khi chấp nhận lưu đối tượng vào hệ thống.
   ========================================================================= */

package data;

import java.util.List;
import java.util.Scanner;

public class Author {
    
    private String name;
    private String nickName; // Khóa nhận diện chính (Unique Identifier)
    private int yob;

    // Constructor rỗng
    public Author() {
    }

    // Constructor đầy đủ tham số
    public Author(String name, String nickName, int yob) {
        this.name = name;
        this.nickName = nickName;
        this.yob = yob;
    }

    // Constructor chỉ phục vụ việc khởi tạo nhanh bằng Nickname
    public Author(String nickName) {
        this.nickName = nickName;
    }

    // --- GETTERS ---
    public String getName() {
        return name;
    }

    public String getNickName() {
        return nickName;
    }

    public int getYob() {
        return yob;
    }

    // --- HÀM XỬ LÝ NHẬP XUẤT ---

    // Bản A: Nhập thông tin cơ bản (Dùng nội bộ)
    public void inputInforBasic() {
        Scanner sc = new Scanner(System.in);
        System.out.print("-> Nhap Ho va Ten tac gia: ");
        this.name = sc.nextLine();
        System.out.print("-> Nhap Nam sinh: ");
        this.yob = Integer.parseInt(sc.nextLine());
    }

    // Bản B (OVERLOADED): Nhập kèm theo kiểm soát chống trùng lặp Nickname
    public void inputInfor(List<Author> list) {
        Scanner sc = new Scanner(System.in);
        
        System.out.println("--- QUY TRINH THEM MOI TAC GIA ---");
        
        // Vòng lặp vây bắt Nickname độc nhất vô nhị
        while (true) {
            System.out.print("-> Nhap But danh (NickName): ");
            String inputNick = sc.nextLine().trim();
            
            // Thuật toán cờ hiệu (Flag) tìm trùng lặp
            boolean isDup = false;
            for (Author item : list) {
                if (item.getNickName().equalsIgnoreCase(inputNick)) {
                    isDup = true;
                    break;
                }
            }
            
            if (isDup) {
                System.out.println(">> LOI: But danh '" + inputNick + "' da co nguoi su dung! Vui long chon ten khac.");
            } else {
                this.nickName = inputNick;
                // Nếu But danh chuẩn -> Tiếp tục gọi nhập Name và Yob
                inputInforBasic(); 
                break; // Thoát lặp
            }
        }
    }

    // Phương thức Hiển thị chi tiết Tác giả
    public void showInfor() {
        System.out.printf("| %-20s | %-15s | %4d |\n", name, nickName, yob);
    }
}
