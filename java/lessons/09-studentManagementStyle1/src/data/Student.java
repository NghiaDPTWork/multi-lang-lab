/* =========================================================================
   LỚP DỮ LIỆU CON: THỰC THỂ SINH VIÊN (STUDENT CLASS)
   =========================================================================
   
   NHIỆM VỤ NÂNG CAO:
   1. Kế thừa (Extends) toàn bộ thuộc tính của lớp `Person`.
   2. Triển khai cơ chế xác thực dữ liệu (Data Validation) bên trong Setter:
      - ID phải tuân theo biểu thức chính quy Regex (Ví dụ: SAxxx).
      - Điểm trung bình GPA phải nằm trong biên hợp lệ [0, 10].
      - Email phải chứa các ký tự đặc trưng (@ và .).
   3. Ghi đè (Override) lại hành vi Nhập & Xuất để bổ sung dữ liệu riêng của Student.
   ========================================================================= */

package data;

import java.util.Scanner;

public class Student extends Person {
    
    private String id;
    private double gpa;
    private String email;

    // Constructor không đối số
    public Student() {
    }

    // Constructor có đối số, tái sử dụng constructor của cha bằng từ khóa `super()`
    public Student(String name, String gender, int yob, String id, double gpa, String email) {
        super(name, gender, yob);
        this.id = id;
        this.gpa = gpa;
        this.email = email;
    }

    // --- BỘ DÀN GETTER ---
    public String getId() {
        return id;
    }

    public double getGpa() {
        return gpa;
    }

    public String getEmail() {
        return email;
    }

    // --- LOGIC BỔ SUNG ---
    public boolean hasScholarship() {
        return this.gpa >= 8.0;
    }

    // --- BỘ DÀN SETTER (CÓ CHỨA LOGIC XÁC THỰC) ---
    
    // Setter cho ID: Sử dụng REGEX để kiểm soát đầu vào
    public boolean setId(String id) {
        // Regex check: Bắt đầu bằng SA và kết thúc bằng đúng 3 chữ số (Ví dụ SA123)
        boolean isValid = id.matches("^SA\\d{3}$");
        if (!isValid) {
            System.out.println(">> LOI: ID khong hop le! Phai co dang SAxxx (VD: SA123)");
        } else {
            this.id = id;
        }
        return isValid;
    }

    // Setter cho GPA: Kiểm tra giới hạn điểm số
    public boolean setGpa(double gpa) {
        boolean isValid = (gpa >= 0 && gpa <= 10);
        if (!isValid) {
            System.out.println(">> LOI: GPA phai nam trong khoang tu 0 den 10!");
        } else {
            this.gpa = gpa;
        }
        return isValid;
    }

    // Setter cho Email: Kiểm tra sự hiện diện của ký tự đặc biệt
    public boolean setEmail(String email) {
        boolean isValid = email.contains("@") && email.contains(".");
        if (!isValid) {
            System.out.println(">> LOI: Email dang sai dinh dang (Thieu @ hoac .)!");
        } else {
            this.email = email; // Cố định bug nghiêm trọng từ code gốc (trước đó gán nhầm gpa = gpa)
        }
        return isValid;
    }


    // --- GHI ĐÈ PHƯƠNG THỨC (POLYMORPHISM - OVERRIDING) ---

    @Override
    public void showInfor() {
        super.showInfor(); // Gọi lại hàm in của cha để in Tên | Giới tính | Năm sinh
        // Sau đó in nốt các thuộc tính riêng biệt của Sinh viên
        System.out.printf("| %-6s | %5.2f | %-20s |\n", id, gpa, email);
    }

    @Override
    public void inputInfor() {
        super.inputInfor(); // Gọi hàm cha xin Tên, Giới tính, Năm sinh trước
        
        Scanner sc = new Scanner(System.in);
        System.out.println("--- NHAP THONG TIN SINH VIEN ---");
        
        // VÒNG LẶP ÉP NHẬP ĐÚNG (DO-WHILE NHỮNG CÚ PHÁP NGẮN GỌN CỦA WHILE)
        // Lặp lại liên tục cho tới khi hàm set trả về TRUE
        System.out.print("-> Nhap ID (SAxxx): ");
        while (!setId(sc.nextLine())); 

        System.out.print("-> Nhap GPA (0 - 10): ");
        while (!setGpa(Double.parseDouble(sc.nextLine())));

        System.out.print("-> Nhap Email: ");
        while (!setEmail(sc.nextLine()));
        
        System.out.println("----------------------------------");
    }
}
