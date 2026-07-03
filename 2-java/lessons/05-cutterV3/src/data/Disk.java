package data;

public class Disk extends Shape {
    
    // --- PHẦN 1: THUỘC TÍNH RIÊNG ---
    private double radius;
    public static final double PI = 3.14;

    
    // --- PHẦN 2: CONSTRUCTOR ---
    public Disk(String owner, String color, double radius) {
        super(owner, color); // Gửi giá trị lên lớp cha Shape
        this.radius = radius;
    }

    
    // --- PHẦN 3: VÁ LỖ THỦNG PHƯƠNG THỨC TRỪU TƯỢNG (ABSTRACT METHOD IMPLEMENTATION) ---
    @Override
    public double getPerimeter() {
        return 2 * PI * radius;
    }

    @Override
    public double getArea() {
        return PI * radius * radius;
    }

    @Override
    public void Paint() {
        String str = String.format("Disk     |%-10s|%-10s|%11.2f|%5.2f|%5.2f", 
                                  owner, color, radius, getPerimeter(), getArea());
        System.out.println(str);
    }
}
