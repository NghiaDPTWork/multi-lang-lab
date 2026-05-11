/* =========================================================================
   BỘ MÁY XỬ LÝ NGHIỆP VỤ NHÂN SỰ (CORE BUSINESS LOGIC)
   ========================================================================= */

package manager;

import data.Employee;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import util.Inputter;

public class EmpListManager {

    private ArrayList<Employee> db = new ArrayList<>();

    // NẠP DỮ LIỆU MẪU
    public void bootstrap() {
        db.add(new Employee("EMP001", "Nghia Tran", 1999, 3000, "TechLead"));
        db.add(new Employee("EMP002", "Thanh Van", 1995, 2500, "HRM"));
        db.add(new Employee("EMP003", "Diep Huynh", 1990, 5000, "CEO"));
    }

    // --- LOGIC NỘI BỘ ---
    public Employee findById(String id) {
        for (Employee e : db) {
            if (e.getId().equalsIgnoreCase(id)) return e;
        }
        return null;
    }

    // --- NGHIỆP VỤ RA BÊN NGOÀI ---
    
    // 1. Thêm mới cấm trùng ID
    public void addNew() {
        System.out.println(">> [CAP NHAT] Them nhan vien moi:");
        String id;
        while (true) {
            id = Inputter.getAString("-> Nhap ID (EMPxxx): ", "ID phai co dang EMPxxx!", "^EMP\\d{3}$");
            if (findById(id) != null) {
                System.out.println(">> LOI: Ma ID nay da ton tai tren he thong!");
            } else {
                break;
            }
        }
        
        String name = Inputter.getAString("-> Nhap Ho va Ten: ", "Ten khong duoc de trong!");
        int yob = Inputter.getAnInteger("-> Nhap Nam Sinh (1990-2000): ", "Nam sinh khong hop le!", 1990, 2000);
        int salary = Inputter.getAnInteger("-> Nhap Luong Khoi Diem: ", "Luong phai la so duong!", 0, Integer.MAX_VALUE);
        String title = Inputter.getAString("-> Nhap Chuc danh: ", "Chuc danh khong duoc de trong!");

        db.add(new Employee(id, name, yob, salary, title));
        System.out.println(">> THANH CONG: Da ghi nhan ho so nhan vien.");
    }

    // 2. Tìm kiếm và hiển thị
    public void search() {
        String id = Inputter.getAString("-> Nhap ID can tim: ", "Khong bo trong!");
        Employee e = findById(id);
        if (e == null) {
            System.out.println(">> KHONG TIM THAY nhan vien mang ID " + id);
        } else {
            System.out.println(">> KET QUA:");
            printHeader();
            e.showInfor();
        }
    }

    // 3. Cập nhật lương
    public void update() {
        String id = Inputter.getAString("-> Nhap ID can CAP NHAT LUONG: ", "Khong bo trong!");
        Employee e = findById(id);
        if (e == null) {
            System.out.println(">> LOI: Khong tim thay ID de cap nhat.");
        } else {
            e.updateSalary();
            System.out.println(">> DA CAP NHAT LUONG THANH CONG!");
        }
    }

    // 4. Xóa hồ sơ
    public void delete() {
        String id = Inputter.getAString("-> Nhap ID nhan vien muon XOA: ", "Khong bo trong!");
        Employee e = findById(id);
        if (e == null) {
            System.out.println(">> LOI: ID khong ton tai!");
        } else {
            db.remove(e);
            System.out.println(">> DA XOA hoan toan ho so khoi he thong!");
        }
    }

    // 5. Sắp xếp tăng dần lương (Tận dụng Comparator)
    public void sortBySalary() {
        if (db.isEmpty()) {
            System.out.println(">> Danh sach dang trong.");
            return;
        }
        
        Collections.sort(db, new Comparator<Employee>() {
            @Override
            public int compare(Employee e1, Employee e2) {
                return e1.getSalary() - e2.getSalary(); // Phep tru nhanh cho so nguyen
            }
        });
        System.out.println(">> KET QUA SAU KHI SAP XEP THEO LUONG (TANG DAN):");
        printAll();
    }

    // 6. Lọc theo chức danh
    public void filterByTitle() {
        String query = Inputter.getAString("-> Nhap chuc danh can tim kiem: ", "Khong de trong!");
        System.out.println(">> KET QUA LOC CHO '" + query.toUpperCase() + "':");
        
        boolean found = false;
        for (Employee e : db) {
            if (e.getTitle().equalsIgnoreCase(query)) {
                if (!found) printHeader();
                e.showInfor();
                found = true;
            }
        }
        if (!found) System.out.println(">> Khong tim thay bat ky ai co chuc danh nay.");
    }

    // Tiện ích In ấn
    public void printAll() {
        if (db.isEmpty()) {
            System.out.println(">> He thong dang khong co nhan vien nao.");
            return;
        }
        printHeader();
        for (Employee e : db) e.showInfor();
    }

    private void printHeader() {
        System.out.println("+----------+-----------------+------+--------------+------------+");
        System.out.println("| MA ID    | HO VA TEN       | N.S  | LUONG HIEN TAI| CHUC VU   |");
        System.out.println("+----------+-----------------+------+--------------+------------+");
    }
}
