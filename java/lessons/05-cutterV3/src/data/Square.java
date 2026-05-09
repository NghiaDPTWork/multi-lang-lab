package data;

public class Square extends Rectangle {
    
    // --- PHẦN 1: CONSTRUCTOR ---
    public Square(String owner, String color, double edge) {
        super(owner, color, edge, edge);
    }
   
    
    // --- PHẦN 2: GHI ĐÈ PAINT ĐẶC TRƯNG ---
    @Override
    public void Paint() {
        String str = String.format("Square   |%-10s|%-10s|%11.2f|%5.2f|%5.2f", 
                                  owner, color, width, getPerimeter(), getArea());
        System.out.println(str);
    }
}
