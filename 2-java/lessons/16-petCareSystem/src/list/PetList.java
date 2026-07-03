/* =========================================================================
   LỚP QUẢN LÝ DANH SÁCH ĐỘNG VẬT (PET INVENTORY MANAGEMENT)
   ========================================================================= */

package list;

import data.Cat;
import data.Dog;
import data.Pet;
import java.util.ArrayList;
import util.Inputter;

public class PetList extends ArrayList<Pet> {

    // --- BỘ TÌM KIẾM NỘI BỘ (HELPER) ---
    public Pet searchPetById(String id) {
        if (this.isEmpty()) return null;
        for (Pet p : this) {
            if (p.getId().equalsIgnoreCase(id)) return p;
        }
        return null;
    }

    // THUẬT TOÁN QUÉT TRÙNG LẶP MÃ ID KHI NHẬP MỚI
    private String getNonDuplicatedId(String typeRegex, String errorMsg) {
        String id;
        while (true) {
            id = Inputter.getAString("-> Nhap Ma ID (VD: D001 / C001): ", errorMsg, typeRegex);
            Pet check = searchPetById(id);
            if (check != null) {
                System.out.println(">> LOI: Ma ID '" + id + "' nay da ton tai! Vui long dung ma khac.");
            } else {
                return id;
            }
        }
    }

    // 1. Thêm mới Cún (Đã fix triệt để lỗi nhập trùng ID)
    public void addNewDog() {
        System.out.println("--- QUY TRINH NHAP KHO CUN CON ---");
        // Bắt ép định dạng Dxxx và không trùng
        String uniqueId = getNonDuplicatedId("^D\\d{3}$", "ID cho phai co dang Dxxx (VD: D123)");
        
        Dog d = new Dog();
        d.setId(uniqueId);
        d.inputInfor();
        this.add(d);
        
        System.out.println(">> THANH CONG: Da dua chu Cun moi vao he thong.");
    }

    // 2. Thêm mới Mèo (Đã fix triệt để lỗi nhập trùng ID)
    public void addNewCat() {
        System.out.println("--- QUY TRINH NHAP KHO MEO CON ---");
        // Bắt ép định dạng Cxxx và không trùng
        String uniqueId = getNonDuplicatedId("^C\\d{3}$", "ID meo phai co dang Cxxx (VD: C123)");
        
        Cat c = new Cat();
        c.setId(uniqueId);
        c.inputInfor();
        this.add(c);
        
        System.out.println(">> THANH CONG: Da dua chu Meo moi vao he thong.");
    }

    // 3. Hiển thị toàn bộ danh sách
    public void showAll() {
        if (this.isEmpty()) {
            System.out.println(">> THONG BAO: Hien khong co thu cung nao trong ho so.");
            return;
        }
        System.out.println("+-----+-------+--------------+------------+-----------+-----------------------+");
        System.out.println("| LOAI| MA ID | CHU SO HUU   | MAU SAC    | CAN NANG  | PHU KIEN DI KEM       |");
        System.out.println("+-----+-------+--------------+------------+-----------+-----------------------+");
        for (Pet p : this) {
            p.showInfor();
        }
        System.out.println("+-----+-------+--------------+------------+-----------+-----------------------+");
    }

    // 4. Tìm kiếm tương tác
    public void searchInteractive() {
        String id = Inputter.getAString("-> Nhap Ma ID can tim: ", "Khong duoc bo trong!");
        Pet p = searchPetById(id);
        if (p == null) {
            System.out.println(">> KHONG TIM THAY ket qua cho ID '" + id + "'");
        } else {
            System.out.println(">> DA TIM THAY THU CUNG:");
            p.showInfor();
        }
    }

    // 5. Cập nhật thông tin
    public void updatePet() {
        String id = Inputter.getAString("-> Nhap Ma ID can CAP NHAT: ", "Khong duoc bo trong!");
        Pet p = searchPetById(id);
        if (p == null) {
            System.out.println(">> LOI: Khong tim thay thu cung co ma nay de cap nhat!");
        } else {
            System.out.println(">> THONG TIN HIEN TAI:");
            p.showInfor();
            p.update();
            System.out.println(">> CAP NHAT THANH CONG!");
        }
    }

    // 6. Xóa bỏ
    public void removePet() {
        String id = Inputter.getAString("-> Nhap Ma ID can XOA: ", "Khong duoc bo trong!");
        Pet p = searchPetById(id);
        if (p == null) {
            System.out.println(">> LOI: Khong co du lieu ve ID nay de thuc hien xoa!");
        } else {
            this.remove(p);
            System.out.println(">> DA XOA THANH CONG thu cung " + id + " khoi he thong!");
        }
    }
}
