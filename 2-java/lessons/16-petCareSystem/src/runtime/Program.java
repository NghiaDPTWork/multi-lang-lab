/* =========================================================================
   HỆ THỐNG VẬN HÀNH CHĂM SÓC THÚ CƯNG (PET CARE OPERATING SYSTEM)
   ========================================================================= */

package runtime;

import list.Cabinet;
import util.Menu;

public class Program {

    public static void main(String[] args) {
        
        // 1. Dựng Menu Chính (Tận dụng kiến trúc cực chuẩn)
        Menu rootMenu = new Menu("QUAN LY THU CUNG PIED-VET");
        rootMenu.addNewOption("Bo sung mot chu Cun moi vao ho so");
        rootMenu.addNewOption("Bo sung mot chu Meo moi vao ho so");
        rootMenu.addNewOption("Xem toan bo danh sach Thu cung");
        rootMenu.addNewOption("Tim kiem ho so theo ma ID");
        rootMenu.addNewOption("Cap nhat thong tin cho Thu cung");
        rootMenu.addNewOption("Xoa bo mot ho so Thu cung");
        rootMenu.addNewOption("Sap xep danh sach theo Can nang");
        rootMenu.addNewOption("Luu du lieu va Thoat he thong");

        // 2. Khoi tao Cabinet va Tu dong tai du lieu cu len
        Cabinet cabinet = new Cabinet();
        cabinet.load(); // Tu dong doc file luc khoi dong
        
        int userChoice;
        boolean isRunning = true;

        // 3. Vong lap vinh cuu xu ly yeu cau nguoi dung
        while (isRunning) {
            rootMenu.printMenu();
            userChoice = rootMenu.getChoice();

            switch (userChoice) {
                case 1:
                    cabinet.addDog();
                    break;
                case 2:
                    cabinet.addCat();
                    break;
                case 3:
                    cabinet.printAll();
                    break;
                case 4:
                    cabinet.findPet();
                    break;
                case 5:
                    cabinet.updateInfo();
                    break;
                case 6:
                    cabinet.removePet();
                    break;
                case 7:
                    cabinet.sortByWeight();
                    break;
                case 8:
                    cabinet.save(); // Luu lai toan bo truoc khi tat may!
                    System.out.println("\n>>> KET THUC CHUONG TRINH. CHUC BAN MOT NGAY TOT LANH! <<<");
                    isRunning = false;
                    break;
            }
        }
    }
}
