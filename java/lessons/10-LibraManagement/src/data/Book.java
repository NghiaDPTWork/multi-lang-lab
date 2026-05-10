/* =========================================================================
   THỰC THỂ SÁCH (BOOK CLASS)
   =========================================================================
   
   GIAO THỨC MỐI QUAN HỆ:
   Mỗi cuốn sách sẽ lưu một thuộc tính `nickName` đại diện cho tác giả của nó.
   Trong thiết kế CSDL, đây được gọi là Khóa Ngoại (Foreign Key) giúp liên kết 
   hai bảng Thực thể lại với nhau mà không cần copy toàn bộ Object!
   ========================================================================= */

package data;

import java.util.Scanner;

public class Book {
    
    private String bookName;
    private String createAt; // Lưu ngày/năm xuất bản (String format)
    private String nickName; // Trường liên kết gián tiếp tới Author object

    // Constructors
    public Book() {
    }

    public Book(String bookName, String createAt, String nickName) {
        this.bookName = bookName;
        this.createAt = createAt;
        this.nickName = nickName;
    }

    // --- GETTERS ---
    public String getBookName() {
        return bookName;
    }

    public String getCreateAt() {
        return createAt;
    }

    public String getNickName() {
        return nickName;
    }

    // --- METHODS ---
    public void inputInfor() {
        Scanner sc = new Scanner(System.in);
        System.out.println("--- NHAP THONG TIN CUON SACH ---");
        
        System.out.print("-> Nhap Ten Sach: ");
        this.bookName = sc.nextLine();
        
        System.out.print("-> Nhap Thoi gian phat hanh (VD: 2025): ");
        this.createAt = sc.nextLine();
        
        System.out.print("-> Nhap But danh tac gia phu trach: ");
        this.nickName = sc.nextLine();
    }

    public void showInfor() {
        System.out.printf("| %-25s | %-10s | %-15s |\n", bookName, createAt, nickName);
    }
}
