/* =========================================================================
   ĐỐI TƯỢNG CÓ Ý THỨC SO SÁNH (COMPARABLE OBJECT)
   =========================================================================
   
   KIẾN THỨC CỐT LÕI:
   1. Implements `Comparable<StudentV2>`: Quy định trực tiếp TRONG GEN của Object 
      cách nó tự so sánh với đồng loại khi được đưa vào các bộ lọc sắp xếp.
   2. Hàm `compareTo()`: Trả về số DƯƠNG (Đổi chỗ), SỐ ÂM (Giữ nguyên), SỐ 0 (Bằng).
   
   NHƯỢC ĐIỂM TƯ DUY:
   - Làm "vấy bẩn" mã nguồn bảo toàn DL gốc (Cứ muốn so sánh là phải vào đây sửa code).
   - KÉM LINH HOẠT: Chỉ được định nghĩa DUY NHẤT một quy tắc sắp xếp mặc định (Ví dụ: Mặc định sắp theo ID). 
     Nếu muốn lúc thì sắp theo ID, lúc lại sắp theo Điểm thì Comparable BÓ TAY!
   ========================================================================= */

package data;

public class StudentV2 implements Comparable<StudentV2> {
    
    private String id;
    private String fname;
    private String lname;
    private double score;

    public StudentV2() {
    }

    public StudentV2(String id, String fname, String lname, double score) {
        this.id = id;
        this.fname = fname;
        this.lname = lname;
        this.score = score;
    }

    public String getId() {
        return id;
    }

    public double getScore() {
        return score;
    }

    public void show() {
        System.out.printf("| %-5s | %-10s | %-10s | %5.2f |\n", id, fname, lname, score);
    }

    // TRIỂN KHAI BẢN NĂNG TỰ SO SÁNH (DEFAULT ORDERING)
    @Override
    public int compareTo(StudentV2 that) {
        // Tận dụng hàm compareTo có sẵn của chuỗi String để so sánh ID
        return this.getId().compareTo(that.getId()); 
    }
}
