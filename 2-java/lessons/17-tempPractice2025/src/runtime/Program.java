/* =========================================================================
   DỰ ÁN ÔN TẬP NHÂN SỰ TỔNG HỢP (TEMP PRACTICE 2025)
   ========================================================================= */

package runtime;

import manager.Cabinet;
import util.Menu;

public class Program {

    public static void main(String[] args) {
        Cabinet box = new Cabinet();
        box.prepare(); // Nap du lieu gia lap ban dau de de demo

        Menu systemMenu = new Menu("PHAN MEM QUAN LY NHAN SU 2025");
        systemMenu.addOption("Them ho so nhan vien moi");
        systemMenu.addOption("Tra cuu thong tin theo Ma ID");
        systemMenu.addOption("Dieu chinh Luong cua nhan vien");
        systemMenu.addOption("Sa thai (Xoa) nhan vien");
        systemMenu.addOption("In toan bo danh sach (Sap tang theo Luong)");
        systemMenu.addOption("Loc danh sach theo Chuc vu");
        systemMenu.addOption("Hien thi toan bo bang tong hop");
        systemMenu.addOption("Ket thuc lam viec");

        boolean isRunning = true;
        while (isRunning) {
            systemMenu.print();
            int c = systemMenu.getChoice();

            switch (c) {
                case 1: box.handleTask1(); break;
                case 2: box.handleTask2(); break;
                case 3: box.handleTask3(); break;
                case 4: box.handleTask4(); break;
                case 5: box.handleTask5(); break;
                case 6: box.handleTask6(); break;
                case 7: box.handleTaskList(); break;
                case 8: 
                    System.out.println(">>> SYSTEM OFFLINE. GOODBYE!");
                    isRunning = false;
                    break;
            }
        }
    }
}
