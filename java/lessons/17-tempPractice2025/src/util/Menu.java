package util;

import java.util.ArrayList;

public class Menu {
    private String title;
    private ArrayList<String> opts = new ArrayList<>();

    public Menu(String title) {
        this.title = title;
    }

    public void addOption(String opt) {
        opts.add(opt);
    }

    public void print() {
        System.out.println("\n----- " + title.toUpperCase() + " -----");
        for (int i = 0; i < opts.size(); i++) {
            System.out.printf("| %d. %s\n", (i + 1), opts.get(i));
        }
        System.out.println("----------------------------------");
    }

    public int getChoice() {
        return Inputter.getAnInteger("Chon muc: ", "Khong hop le!", 1, opts.size());
    }
}
