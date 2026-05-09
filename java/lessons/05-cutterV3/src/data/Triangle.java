package data;

public class Triangle extends Shape {
    
    // --- PHẦN 1: THUỘC TÍNH (PROTECTED FOR RIGHTTRIANGLE INHERITANCE) ---
    protected double edgeA;
    protected double edgeB;
    protected double edgeC;

    
    // --- PHẦN 2: CONSTRUCTOR ---
    public Triangle(double edgeA, double edgeB, double edgeC, String color, String owner) {
        super(owner, color); // Đúng thứ tự của Shape (owner, color)
        this.edgeA = edgeA;
        this.edgeB = edgeB;
        this.edgeC = edgeC;
    }

    
    // --- PHẦN 3: GETTERS ---
    public double getEdgeA() {
        return edgeA;
    }

    public double getEdgeB() {
        return edgeB;
    }

    public double getEdgeC() {
        return edgeC;
    }

    
    // --- PHẦN 4: VÁ LỖ THỦNG PHƯƠNG THỨC TRỪU TƯỢNG ---
    @Override
    public double getPerimeter() {
        return edgeA + edgeB + edgeC;
    }

    @Override
    public double getArea() {
        double p = getPerimeter() / 2;
        return Math.sqrt(p * (p - edgeA) * (p - edgeB) * (p - edgeC));
    }

    @Override
    public void Paint() {
        String str = String.format("Triangle |%-10s|%-10s|%5.2f|%5.2f|%5.2f|%5.2f|%5.2f",
                               owner, color, edgeA, edgeB, edgeC, getPerimeter(), getArea());
        System.out.println(str);
    }
}
