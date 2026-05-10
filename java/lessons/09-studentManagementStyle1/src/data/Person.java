/* =========================================================================
   LỚP DỮ LIỆU CƠ SỞ: THỰC THỂ NGƯỜI (PERSON CLASS)
   =========================================================================
   
   NHIỆM VỤ:
   1. Làm khuôn mẫu cơ bản chứa các thuộc tính dùng chung cho con người (tên, giới tính, năm sinh).
   2. Cung cấp cơ chế nhập thông tin thủ công qua bàn phím (inputInfor).
   3. Là lớp Cha (Parent Class) để các lớp chuyên biệt khác kế thừa.
   ========================================================================= */

package data;

import java.util.Scanner;

public class Person {
    
    // Properties
    protected String name;
    protected String gender;
    protected int yob;

    // 1. Constructor không đối số
    public Person() {
    }

    // 2. Constructor đầy đủ đối số
    public Person(String name, String gender, int yob) {
        this.name = name;
        this.gender = gender;
        this.yob = yob;
    }

    // Getters
    public String getName() {
        return name;
    }

    public String getGender() {
        return gender;
    }

    public int getYob() {
        return yob;
    }

    // Method: Hiển thị thông tin (Sử dụng printf để căn lề đẹp, không xuống dòng ngay)
    public void showInfor() {
        System.out.printf("| %-20s | %-6s | %4d ", name, gender, yob);
    }

    // Method: Nhập thông tin trực tiếp từ bàn phím
    public void inputInfor() {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("-> Nhap ten: ");
        this.name = sc.nextLine();
        
        System.out.print("-> Nhap gioi tinh: ");
        this.gender = sc.nextLine();
        
        System.out.print("-> Nhap nam sinh: ");
        // Sử dụng Integer.parseInt(nextLine) để tránh trôi lệnh scanf kinh điển!
        this.yob = Integer.parseInt(sc.nextLine()); 
    }
}
