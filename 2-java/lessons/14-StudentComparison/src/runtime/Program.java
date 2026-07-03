/* =========================================================================
   ĐẠI CHIẾN SẮP XẾP: COMPARATOR VS COMPARABLE (SORTING WARS)
   =========================================================================
   
   KỊCH BẢN THÍ NGHIỆM:
   Vòng 1 - Comparator (Anh trọng tài ngoại):
     - Object không biết tự sắp xếp.
     - Khởi tạo linh hoạt nhiều "Anh trọng tài" khác nhau (Theo Tên, Theo Điểm...).
     - Thắng lợi về tính CƠ ĐỘNG và LINH HOẠT.
     
   Vòng 2 - Comparable (Bản năng gốc):
     - Object được cài sẵn hệ điều hành tự so sánh trong máu.
     - Chỉ cần gọi `Collections.sort()` là máy tự chạy theo định cấu hình cứng.
     - Thắng lợi về sự NHANH GỌN cho các kịch bản đơn giản cố định.
   ========================================================================= */

package runtime;

import data.Student;
import data.StudentV2;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;

public class Program {

    public static void main(String[] args) {
        System.out.println("=== JAVA CORE: COMPARATOR VS COMPARABLE SHOWCASE ===\n");
        
        runComparatorDemo();
        
        System.out.println("\n==================================================\n");
        
        runComparableDemo();
    }

    // -------------------------------------------------------------------------
    // DỰNG DEMO CHO COMPARATOR (TRỌNG TÀI NGOÀI)
    // -------------------------------------------------------------------------
    public static void runComparatorDemo() {
        System.out.println("--- [PHAN 1] DEMO COMPARATOR (TRONG TAI NGOAI LINH HOAT) ---");
        
        ArrayList<Student> list = new ArrayList<>();
        list.add(new Student("SE01", "Le", "Nam", 9.0));
        list.add(new Student("SE03", "Vo", "Cuong", 7.5));
        list.add(new Student("SE02", "Nguyen", "Binh", 9.9));

        // THỬ THÁCH: Sắp xếp theo ĐIỂM SỐ tăng dần
        // Khởi tạo nóng một "Trọng tài chấm điểm"
        Comparator<Student> scoreReferee = new Comparator<Student>() {
            @Override
            public int compare(Student s1, Student s2) {
                if (s1.getScore() > s2.getScore()) return 1; // Nếu s1 lớn hơn s2 -> Đổi chỗ
                else if (s1.getScore() < s2.getScore()) return -1;
                return 0;
            }
        };

        System.out.println(">> KET QUA SAU KHI NHO TRONG TAI SAP XEP THEO DIEM:");
        Collections.sort(list, scoreReferee); // Chuyền cả mảng VÀ trọng tài vào!
        
        for (Student s : list) s.show();
        
        // ƯU ĐIỂM: Bạn hoàn toàn có thể tạo thêm 1 Comparator thứ 2 để sắp theo Tên 
        // mà không cần đụng vào mã nguồn của class Student ban đầu!
    }


    // -------------------------------------------------------------------------
    // DỰNG DEMO CHO COMPARABLE (BẢN NĂNG GỐC)
    // -------------------------------------------------------------------------
    public static void runComparableDemo() {
        System.out.println("--- [PHAN 2] DEMO COMPARABLE (BAN NANG TU SAP XEP) ---");
        
        ArrayList<StudentV2> list = new ArrayList<>();
        list.add(new StudentV2("SE01", "Le", "Nam", 9.0));
        list.add(new StudentV2("SE03", "Vo", "Cuong", 7.5));
        list.add(new StudentV2("SE02", "Nguyen", "Binh", 9.9));

        System.out.println(">> KET QUA SAU KHI DUNG BAN NANG GOC (MAC DINH SAP THEO ID):");
        
        // Nhờ có Comparable cài sẵn trong class StudentV2, 
        // chúng ta không cần truyền thêm tham số thứ hai vào đây nữa!
        Collections.sort(list); 
        
        for (StudentV2 s : list) s.show();
        
        System.out.println("\n>> NHAN XET: Cực kỳ nhanh gọn, nhưng sẽ BÓ TAY nếu muốn đổi sang sắp theo Điểm!");
    }
}
