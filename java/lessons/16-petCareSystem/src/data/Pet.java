/* =========================================================================
   LỚP TRỪU TƯỢNG GỐC: THÚ CƯNG (BASE PET CLASS)
   ========================================================================= */

package data;

import util.Inputter;

public abstract class Pet implements Comparable<Pet> {
    
    protected String id;
    protected String owner;
    protected String color;
    protected double weight;

    public Pet() {
    }

    public Pet(String id, String owner, String color, double weight) {
        this.id = id;
        this.owner = owner;
        this.color = color;
        this.weight = weight;
    }

    // --- ACCESSSORS ---
    public String getId() { return id; }
    public String getOwner() { return owner; }
    public String getColor() { return color; }
    public double getWeight() { return weight; }

    public void setId(String id) { this.id = id; } // Cho phép đặt ID sau khi check trùng

    // --- LOGICS ---
    public abstract void showInfor();

    // Nhập thông tin chung (Trừ ID vì ID được quản lý check trùng ở tầng ngoài)
    public void inputInfor() {
        this.owner = Inputter.getAString("-> Nhap ten chu so huu: ", "Ten khong duoc rong!");
        this.color = Inputter.getAString("-> Nhap mau sac chu dao: ", "Mau sac khong duoc rong!");
        this.weight = Inputter.getADouble("-> Nhap can nang (1.0 - 100.0 kg): ", "Can nang phai tu 1 den 100!", 1.0, 100.0);
    }

    // Cập nhật thông tin chung
    public void update() {
        this.color = Inputter.getAString("-> Nhap MAU SAC MOI: ", "Mau khong duoc de trong!");
        this.weight = Inputter.getADouble("-> Nhap CAN NANG MOI (1 - 100): ", "Khong hop le!", 1.0, 100.0);
    }

    // Triển khai sắp xếp mặc định theo Cân nặng Tăng dần
    @Override
    public int compareTo(Pet other) {
        if (this.weight > other.weight) return 1;
        else if (this.weight < other.weight) return -1;
        return 0;
    }
}
