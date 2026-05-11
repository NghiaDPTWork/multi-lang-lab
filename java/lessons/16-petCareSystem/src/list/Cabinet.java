/* =========================================================================
   TỦ HỒ SƠ ĐIỀU PHỐI (CABINET COORDINATOR)
   ========================================================================= */

package list;

import data.Cat;
import data.Dog;
import data.Pet;
import java.util.Collections;
import java.util.StringTokenizer;
import util.FileHandler;

public class Cabinet {
    
    private PetList list = new PetList();
    
    // Tên tệp tin lưu trữ nội bộ (Chạy ổn định trên mọi máy tính)
    private final String DATA_FILENAME = "petData.txt"; 

    // TRIỂN KHAI TRÌNH DỊCH CHUỖI THÀNH ĐỐI TƯỢNG
    private FileHandler<Pet> fileHelper = new FileHandler<Pet>() {
        @Override
        public Pet handleLine(String line) {
            try {
                // Đọc dòng dữ liệu ngăn cách bởi ký tự "|" được định nghĩa trong toString
                StringTokenizer st = new StringTokenizer(line, "|");
                String id = st.nextToken().trim();
                String owner = st.nextToken().trim();
                String color = st.nextToken().trim();
                double weight = Double.parseDouble(st.nextToken().trim());
                String specialItem = st.nextToken().trim();

                // Nhận diện loại dựa trên Ký tự bắt đầu của ID
                if (id.toUpperCase().startsWith("D")) {
                    return new Dog(id, owner, color, weight, specialItem);
                } else {
                    return new Cat(id, owner, color, weight, specialItem);
                }
            } catch (Exception e) {
                return null; // Dòng hỏng thì skip qua an toàn
            }
        }
    };

    // --- DỊCH VỤ HỆ THỐNG ---
    
    public void load() {
        boolean result = fileHelper.load(DATA_FILENAME, list);
        if (result) {
            System.out.println(">> KET NOI CSDL THANH CONG: Da tai " + list.size() + " thu cung.");
        } else {
            System.out.println(">> KHOI TAO CSDL MOI: Chua ton tai file du lieu truoc do.");
        }
    }

    public void save() {
        boolean success = fileHelper.save(list, DATA_FILENAME);
        if (success) {
            System.out.println(">> LUU TRU HOAN TAT: Du lieu da duoc dong bang vao '" + DATA_FILENAME + "'.");
        }
    }

    // --- ÁNH XẠ TÁC VỤ RA MENU CHÍNH ---
    
    public void addDog() { list.addNewDog(); }
    public void addCat() { list.addNewCat(); }
    public void printAll() { list.showAll(); }
    public void findPet() { list.searchInteractive(); }
    public void updateInfo() { list.updatePet(); }
    public void removePet() { list.removePet(); }
    
    public void sortByWeight() {
        if (list.isEmpty()) {
            System.out.println(">> Danh sach dang trong, khong co gi de sap xep.");
        } else {
            Collections.sort(list); // Tự động kích hoạt Comparable weight trong Pet.java
            System.out.println(">> SAP XEP THANH CONG: Danh sach da duoc to chuc theo can nang tang dan.");
            list.showAll();
        }
    }
}
