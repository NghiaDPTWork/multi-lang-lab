/* =========================================================================
   THỰC THỂ NHÂN VIÊN (EMPLOYEE MODEL)
   ========================================================================= */

package data;

import util.Inputter;

public class Employee {

    private String id;     // Dạng EMPxxx
    private String name;
    private int yob;       // Sinh năm 1990 - 2000
    private int salary;
    private String title;

    public Employee() {
    }

    public Employee(String id, String name, int yob, int salary, String title) {
        this.id = id;
        this.name = name;
        this.yob = yob;
        this.salary = salary;
        this.title = title;
    }

    // --- GETTERS ---
    public String getId() { return id; }
    public String getName() { return name; }
    public int getYob() { return yob; }
    public int getSalary() { return salary; }
    public String getTitle() { return title; }

    // --- LOGICS ---
    public void updateSalary() {
        // Tận dụng Inputter bảo mật cao
        this.salary = Inputter.getAnInteger("-> Moi nhap muc Luong moi: ", "Luong khong hop le! Vui long go so duong.", 0, Integer.MAX_VALUE);
    }

    public void showInfor() {
        System.out.printf("| %-8s | %-15s | %4d | %8d USD | %-10s |\n", 
                          id, name, yob, salary, title);
    }
}
