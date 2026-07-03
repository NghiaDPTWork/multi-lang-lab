package data;

import util.Inputter;

public class Dog extends Pet {
    
    private String necklace; // Thuộc tính riêng của cún (Vòng cổ)

    public Dog() {
    }

    public Dog(String id, String owner, String color, double weight, String necklace) {
        super(id, owner, color, weight);
        this.necklace = necklace;
    }

    public String getNecklace() { return necklace; }

    @Override
    public void inputInfor() {
        super.inputInfor(); // Gọi nhập phần chung (Owner, color, weight)
        this.necklace = Inputter.getAString("-> Nhap thong tin vong co: ", "Vong co khong duoc rong!");
    }

    @Override
    public void update() {
        super.update();
        this.necklace = Inputter.getAString("-> Nhap THONG TIN VONG CO MOI: ", "Khong duoc rong!");
    }

    @Override
    public void showInfor() {
        System.out.printf("| DOG | %-5s | %-12s | %-10s | %5.2f kg | Necklace: %-12s |\n", 
                          id, owner, color, weight, necklace);
    }

    // toString được định nghĩa để Save file cực chuẩn bằng ký tự phân cách "|"
    @Override
    public String toString() {
        return String.format("%s | %s | %s | %.2f | %s", id, owner, color, weight, necklace);
    }
}
