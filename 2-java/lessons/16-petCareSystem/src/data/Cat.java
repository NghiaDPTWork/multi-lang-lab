package data;

import util.Inputter;

public class Cat extends Pet {
    
    private String ribbon; // Thuộc tính riêng của mèo (Dải ruy băng)

    public Cat() {
    }

    public Cat(String id, String owner, String color, double weight, String ribbon) {
        super(id, owner, color, weight);
        this.ribbon = ribbon;
    }

    public String getRibbon() { return ribbon; }

    @Override
    public void inputInfor() {
        super.inputInfor();
        this.ribbon = Inputter.getAString("-> Nhap kieu dang ruy bang: ", "Ruy bang khong duoc rong!");
    }

    @Override
    public void update() {
        super.update();
        this.ribbon = Inputter.getAString("-> Nhap kieu dang RUY BANG MOI: ", "Khong duoc rong!");
    }

    @Override
    public void showInfor() {
        System.out.printf("| CAT | %-5s | %-12s | %-10s | %5.2f kg | Ribbon  : %-12s |\n", 
                          id, owner, color, weight, ribbon);
    }

    @Override
    public String toString() {
        return String.format("%s | %s | %s | %.2f | %s", id, owner, color, weight, ribbon);
    }
}
