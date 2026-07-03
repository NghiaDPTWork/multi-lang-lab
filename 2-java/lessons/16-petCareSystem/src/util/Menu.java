/* =========================================================================
   BỘ ĐÚC TRÌNH ĐIỀU HƯỚNG (DYNAMIC MENU BUILDER)
   ========================================================================= */

package util;

import java.util.ArrayList;

public class Menu {
    private String title;
    private ArrayList<String> options;

    public Menu(String title) {
        this.title = title;
        this.options = new ArrayList<>();
    }

    // Thêm tùy chọn mới
    public void addNewOption(String opt) {
        options.add(opt);
    }

    // Hiển thị menu trực quan
    public void printMenu() {
        System.out.println("\n========== " + title.toUpperCase() + " ==========");
        for (int i = 0; i < options.size(); i++) {
            System.out.printf("| %d. %-40s |\n", (i + 1), options.get(i));
        }
        System.out.println("==================================================");
    }

    // Ép người dùng lựa chọn đúng giới hạn
    public int getChoice() {
        int max = options.size();
        return Inputter.getAnInteger("-> Moi chon tu 1 den " + max + ": ", 
                                     "Lua chon khong hop le! Vui long nhap lai.", 1, max);
    }
}
