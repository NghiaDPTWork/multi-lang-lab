package data;

public class Rectangle extends Shape {
    
    // --- PHẦN 1: THUỘC TÍNH (PROTECTED FOR SQUARE INHERITANCE) ---
    protected double width;
    protected double height;

    
    // --- PHẦN 2: CONSTRUCTOR ---
    public Rectangle(String owner, String color, double width, double height) {
        super(owner, color);
        this.width = width;
        this.height = height;
    }

    
    // --- PHẦN 3: VÁ LỖ THỦNG PHƯƠNG THỨC TRỪU TƯỢNG ---
    @Override
    public double getPerimeter() {
        return (width + height) * 2;
    }

    @Override
    public double getArea() {
        return width * height;
    }

    @Override
    public void Paint() {
        String str = String.format("Rectangle|%-10s|%-10s|%5.2f|%5.2f|%5.2f|%5.2f", 
                                  owner, color, height, width, getPerimeter(), getArea());
        System.out.println(str);
    }
}
