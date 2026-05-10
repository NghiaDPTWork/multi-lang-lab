/* =========================================================================
   ĐỐI TƯỢNG DỮ LIỆU CƠ BẢN (BASIC DATA OBJECT)
   =========================================================================
   
   Ý NGHĨA KIẾN TRÚC:
   Lớp Student này hoàn toàn thuần khiết, chỉ chứa thuộc tính và Getter.
   Nó KHÔNG BIẾT tự so sánh mình với ai cả. Mọi việc sắp xếp sẽ hoàn toàn 
   phụ thuộc vào một "Trọng tài bên ngoài" (External Comparator).
   ========================================================================= */

package data;

public class Student {
    
    private String id;
    private String fname;
    private String lname;
    private double score;

    public Student() {
    }

    public Student(String id, String fname, String lname, double score) {
        this.id = id;
        this.fname = fname;
        this.lname = lname;
        this.score = score;
    }

    public String getId() {
        return id;
    }

    public String getFname() {
        return fname;
    }

    public String getLname() {
        return lname;
    }

    public double getScore() {
        return score;
    }

    public void show() {
        System.out.printf("| %-5s | %-10s | %-10s | %5.2f |\n", id, fname, lname, score);
    }
}
