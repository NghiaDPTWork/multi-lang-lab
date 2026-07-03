/* =========================================================================
   CẤU TRÚC DỮ LIỆU NÂNG CAO (ADVANCED COLLECTIONS & QUEUES)
   =========================================================================
   
   NỘI DUNG BÀI HỌC CHI TIẾT:
   1. Khám phá sâu về ArrayList: Các kỹ thuật hoán vị (Swap), sao chép nông (Shallow Copy) 
      thông qua .clone() và các cảnh báo an toàn bộ nhớ.
   2. Cơ chế Iterator: Cách thức duyệt mảng chuẩn xác sử dụng con trỏ dịch chuyển.
   3. Cấu trúc Hàng Đợi (Queue): Khai thác cơ chế FIFO (First In First Out) bằng LinkedList.
   4. PriorityQueue: Hàng đợi ưu tiên thông minh, tự động định vị phần tử quan trọng 
      lên vị trí hàng đầu (Dựa trên thuật toán Min-Heap mặc định).
   ========================================================================= */

package runtime;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.PriorityQueue;
import java.util.Queue;

public class Program {

    public static void main(String[] args) {
        System.out.println("===== KHOA HOC CHUYEN SAU VE COLLECTIONS (JAVA CORE) =====\n");
        
        System.out.println("--- PHAN 1: DAO CHOI CUNG ARRAYLIST NANG CAO ---");
        playWithList();
        
        System.out.println("\n---------------------------------------------------------\n");
        
        System.out.println("--- PHAN 2: KINH NGHIEM VAN HANH HANG DOI (QUEUES) ---");
        playWithQueue();
    }

    // =========================================================================
    // PHẦN 1: CÁC KHOẢNH KHẮC CÙNG DANH SÁCH MẢNG ĐỘNG
    // =========================================================================
    public static void playWithList() {
        // Mảng tĩnh vs Mảng động (ArrayList khai sinh từ Collection Framework)
        ArrayList<Integer> numList = new ArrayList<>();
        
        // 1.1. Thêm phần tử và Cú pháp Tự động đóng hộp (Auto-Boxing)
        numList.add(10); // Tự động chuyển int -> Integer object
        numList.add(20);
        numList.add(30);
        
        System.out.println(">> Mang ban dau: " + numList);

        // 1.2. Thêm tại vị trí cụ thể (Chèn ép các phần tử phía sau)
        numList.add(1, 15); // Chèn 15 vào vị trí số 1
        System.out.println(">> Sau khi chen 15 vao index 1: " + numList);
        
        // 1.3. Thuật toán Hoán vị (Swap) bằng get() và set()
        // Thử thách: Đổi chỗ phần tử đầu (index 0) và phần tử cuối (index 3)
        System.out.println(">> Dang tien hanh Swap giua index 0 va index 3...");
        Integer backup = numList.get(0);
        numList.set(0, numList.get(3));
        numList.set(3, backup);
        
        System.out.println(">> Ket qua sau khi Swap: " + numList);

        // 1.4. Cơ chế duyệt mảng bằng Iterator (Con trỏ khả duyệt)
        System.out.print(">> Duyet mang bang Iterator: ");
        Iterator<Integer> pointer = numList.iterator();
        while (pointer.hasNext()) {
            System.out.print(pointer.next() + " "); // Dịch con trỏ và in
        }
        System.out.println();

        // 1.5. Kỹ thuật Clone (Nhân bản nông - Shallow Copy)
        // LƯU Ý: Clone tạo ra túi mới nhưng NỘI DUNG bên trong vẫn trỏ cùng ô nhớ nếu là Object!
        ArrayList<Integer> shadowCopy = (ArrayList<Integer>) numList.clone();
        shadowCopy.set(0, 999); // Thay đổi trên bản clone
        
        System.out.println(">> Ban clone bi sua index 0 thanh 999: " + shadowCopy);
        System.out.println(">> Mang goc van giu nguyen: " + numList);
    }


    // =========================================================================
    // PHẦN 2: CƠ CHẾ HOẠT ĐỘNG CỦA HÀNG ĐỢI XẾP HÀNG
    // =========================================================================
    public static void playWithQueue() {
        // 2.1. Sử dụng LinkedList để giả lập Hàng đợi chuẩn FIFO
        // queue.offer() : Xin xếp hàng (Đứng cuối)
        // queue.poll()  : Được phục vụ xong và rời đi (Lấy từ đầu)
        Queue<String> customerLine = new LinkedList<>();
        customerLine.offer("Khach hang A");
        customerLine.offer("Khach hang B");
        customerLine.offer("Khach hang C");

        System.out.println(">> Hang doi hien tai: " + customerLine);
        System.out.println(">> Tien hanh phuc vu lan luot:");
        
        while (!customerLine.isEmpty()) {
            String client = customerLine.poll(); // Lấy ra và xóa khỏi hàng
            System.out.println("   - Dang phuc vu: " + client);
        }
        System.out.println(">> Hang doi sau cung: " + customerLine + " (Trong Tron)");


        // 2.2. Hàng đợi Ưu tiên (PriorityQueue)
        // ĐẶC BIỆT: Không xếp theo thứ tự đến trước, mà xếp theo giá trị (Mặc định là Tang Dan)
        System.out.println("\n--- TRIEN KHAI PRIORITY QUEUE (HANG DOI UU TIEN) ---");
        Queue<Integer> vipQueue = new PriorityQueue<>();
        vipQueue.offer(50);
        vipQueue.offer(10);
        vipQueue.offer(30);
        vipQueue.offer(5);

        System.out.println(">> Dang rut tung phan tu tu PriorityQueue:");
        // Dù chèn 50 và 10 trước, nhưng khi poll() nó luôn trả ra số BÉ NHẤT hiện có!
        while (!vipQueue.isEmpty()) {
            System.out.print(vipQueue.poll() + " -> ");
        }
        System.out.println("HET.");
        System.out.println(">> Nhan xet: PriorityQueue luon dam bao phan tu co uu tien cao nhat (nho nhat) ra truoc!");
    }
}
