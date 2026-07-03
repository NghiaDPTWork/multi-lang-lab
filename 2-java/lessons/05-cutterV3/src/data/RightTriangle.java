package data;

public class RightTriangle extends Triangle {

    // --- PHẦN 1: CONSTRUCTOR ---
    public RightTriangle(double edgeA, double edgeB, String color, String owner) {
        // Cạnh huyền tự tính bằng định lý Pitago, kế thừa Constructor của Triangle
        super(edgeA, edgeB, Math.sqrt(edgeA * edgeA + edgeB * edgeB), color, owner);
    }

    
    // --- PHẦN 2: GHI ĐÈ PAINT ĐẶC TRƯNG ---
    @Override
    public void Paint() {
        String str = String.format("RightTriangle   |%-10s|%-10s|%5.2f|%5.2f|%5.2f|%5.2f|%5.2f",
                               owner, color, edgeA, edgeB, edgeC, getPerimeter(), getArea());
        System.out.println(str);
    }
}
