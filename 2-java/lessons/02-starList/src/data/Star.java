/* =========================================================================
   HỆ THỐNG BÀI HỌC: LỚP ĐỐI TƯỢNG, TÍNH ĐÓNG GÓI & CONSTRUCTOR TRONG JAVA
   =========================================================================
   
   1. ĐỐI TƯỢNG & LỚP (OBJECT & CLASS)
      - Class (Lớp): Giống như một bản thiết kế hoặc cái khuôn đúc. Nó định nghĩa các đặc tính (thuộc tính) và hành vi (phương thức) chung cho một nhóm đối tượng.
      - Object (Đối tượng): Là một thực thể cụ thể (bức tượng) được tạo ra từ bản thiết kế (Class) đó.

   2. THUỘC TÍNH & TÍNH ĐÓNG GÓI (PROPERTIES & ENCAPSULATION)
      - Thuộc tính (field/attribute): Lưu trữ thông tin trạng thái của đối tượng (ví dụ: name, yob, gender...).
      - private: Giới hạn truy cập. Thuộc tính được khai báo private thì bên ngoài không thể truy cập trực tiếp (ngăn chặn sửa đổi dữ liệu tùy tiện), tăng tính an toàn và tính đóng gói (Encapsulation).

   3. CONSTRUCTOR (HÀM KHỞI TẠO - CÁI PHỄU ĐÚC TƯỢNG)
      - Constructor là phương thức đặc biệt dùng để đón nhận dữ liệu từ bên ngoài và gán vào các thuộc tính tương ứng khi khởi tạo đối tượng (qua từ khóa `new`).
      - Đặc điểm cốt lõi của Constructor:
        + Tên phải trùng khớp 100% với tên Class chứa nó.
        + Không có kiểu trả về (ngay cả `void` cũng không có).
        + Thường được đặt là `public` để bên ngoài có thể gọi khởi tạo đối tượng.

   4. TỪ KHÓA 'this'
      - `this` đại diện cho chính đối tượng (instance) hiện tại đang được gọi thực thi.
      - Sử dụng `this.name = name;` để phân biệt rõ ràng giữa thuộc tính của lớp (this.name) và tham số truyền vào của hàm khởi tạo (name).

   5. GETTER VÀ SETTER
      - Vì các thuộc tính được để là `private`, ta cung cấp các phương thức công khai (getter và setter) làm cổng giao tiếp an toàn:
        + Getter (Phương thức lấy): Trả về giá trị của thuộc tính (ví dụ `getName()`).
        + Setter (Phương thức đặt): Thay đổi giá trị của thuộc tính có kiểm soát (ví dụ `setName()`).
   ========================================================================= */

package data;

public class Star {
    
    // --- PHẦN 1: THUỘC TÍNH ĐỐI TƯỢNG (PRIVATE PROPERTIES) ---
    private String name;
    private int yob;
    private String gender;
    private String hotsong;

    
    // --- PHẦN 2: CONSTRUCTOR (CÁI PHỄU KHỞI TẠO ĐỐI TƯỢNG) ---
    public Star(String name, int yob, String gender, String hotsong) {
        this.name = name;
        this.yob = yob;
        this.gender = gender;
        this.hotsong = hotsong;
    }
    
    
    // --- PHẦN 3: PHƯƠNG THỨC HIỂN THỊ THÔNG TIN (METHOD) ---
    public void showInfor() {
        System.out.println("Toi ten la: " + this.name +
                            ", sinh nam: " + this.yob +
                            ", gioi tinh: " + this.gender +
                            ", hotSong: " + this.hotsong);
    }
    
    
    // --- PHẦN 4: CÁC CỔNG GIAO TIẾP AN TOÀN (GETTER & SETTER) ---
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getYob() {
        return yob;
    }

    public String getGender() {
        return gender;
    }

    public String getHotsong() {
        return hotsong;
    }
}
