/* =========================================================================
   HỆ THỐNG QUẢN LÝ THƯ VIỆN LIÊN KẾT (RELATIONAL LIBRARY SYSTEM)
   =========================================================================
   
   MỤC TIÊU HỌC THUẬT CAO CẤP:
   1. Tư duy thiết kế Cơ sở Dữ liệu Quan hệ (RDBMS) áp dụng trực tiếp vào Java Objects.
   2. Xử lý sự phụ thuộc (Dependency Management):
      - Khi thêm một cuốn sách với bút danh chưa tồn tại -> Hệ thống thông minh ép buộc 
        người dùng phải khởi tạo hồ sơ Tác giả đó ngay lập tức!
   3. Phân tích & Kết nối 2 nguồn mảng độc lập (Cross-referencing arrays).
   ========================================================================= */

package runtime;

import data.Author;
import data.Book;
import java.util.ArrayList;
import java.util.Scanner;

public class Program {

    public static void main(String[] args) {
        
        // Khởi tạo 2 kho chứa độc lập (Bảng Author và Bảng Book)
        ArrayList<Author> authors = new ArrayList<>();
        ArrayList<Book> books = new ArrayList<>();
        
        // --- DỮ LIỆU GIẢ LẬP BAN ĐẦU (DUMMY DATA) ---
        authors.add(new Author("Nguyen Nhat Anh", "AnhNN", 1955));
        authors.add(new Author("Nguyen Trai", "Ức Trai", 1380));
        
        books.add(new Book("Kinh Van Hoa", "1995", "AnhNN"));
        books.add(new Book("Cho Toi Xin Mot Ve Di Tuoi Tho", "2008", "AnhNN"));
        books.add(new Book("Binh Ngo Dai Cao", "1428", "Ức Trai"));


        Scanner sc = new Scanner(System.in);
        int choice = 0;

        do {
            printMenu();
            System.out.print("==> Chon chuc nang (1-5): ");
            try {
                choice = Integer.parseInt(sc.nextLine());
            } catch (Exception e) { choice = 0; }

            System.out.println();

            switch (choice) {
                case 1: // 1. NHẬP THÔNG TIN SÁCH (KÈM RÀNG BUỘC THÔNG MINH)
                    System.out.println("--- [1] QUY TRINH THEM SACH MOI ---");
                    Book b = new Book();
                    b.inputInfor(); // Thu thập Tên sách, Năm, NickName tác giả
                    
                    // KIỂM TRA: Tác giả này đã có trong hồ sơ của thư viện chưa?
                    boolean foundAuthor = false;
                    for (Author a : authors) {
                        if (a.getNickName().equalsIgnoreCase(b.getNickName())) {
                            foundAuthor = true;
                            break;
                        }
                    }

                    // XỬ LÝ PHỤ THUỘC NẾU CHƯA CÓ TÁC GIẢ:
                    if (!foundAuthor) {
                        System.out.println("\n>>> CANH BAO: But danh '" + b.getNickName() + "' chua co trong he thong.");
                        System.out.println(">>> Yeu cau bo sung ho so Tac gia moi nay ngay bay gio:");
                        
                        // Tạo Author object dùng sẵn bút danh vừa nhập ở Book
                        Author newA = new Author(b.getNickName()); 
                        newA.inputInforBasic(); // Gọi nhập tiếp Tên thật & Năm sinh
                        
                        authors.add(newA); // Lưu hồ sơ tác giả vào CSDL
                        System.out.println(">>> THANH CONG: Da bo sung ho so Tac gia.");
                    }

                    books.add(b); // Lưu sách vào kho
                    System.out.println("\n>> CHUC MUNG: Sach da duoc dua vao thu vien.");
                    break;

                case 2: // 2. HIỂN THỊ TOÀN BỘ SÁCH
                    System.out.println("--- [2] TOAN BO KHO SACH THU VIEN ---");
                    if (books.isEmpty()) {
                        System.out.println(">> Thu vien dang trong.");
                    } else {
                        printBookHeader();
                        for (Book item : books) {
                            item.showInfor();
                        }
                    }
                    break;

                case 3: // 3. NHẬP THÔNG TIN TÁC GIẢ (THỦ CÔNG)
                    System.out.println("--- [3] CAP NHAT HO SO TAC GIA THU CONG ---");
                    Author aManual = new Author();
                    aManual.inputInfor(authors); // Dùng hàm Overloaded có check trùng lặp
                    authors.add(aManual);
                    System.out.println(">> THANH CONG: Da luu ho so tac gia moi.");
                    break;

                case 4: // 4. TÌM KIẾM SÁCH THEO BÚT DANH
                    System.out.println("--- [4] TRA CUU SACH THEO BUT DANH ---");
                    System.out.print("Nhap but danh tac gia can tra cuu: ");
                    String searchNick = sc.nextLine().trim();
                    
                    boolean hasAnyBook = false;
                    System.out.println("\n>> Ket qua tim kiem cho '" + searchNick + "':");
                    
                    for (Book item : books) {
                        if (item.getNickName().equalsIgnoreCase(searchNick)) {
                            if (!hasAnyBook) printBookHeader(); // In header 1 lần duy nhất
                            item.showInfor();
                            hasAnyBook = true;
                        }
                    }

                    if (!hasAnyBook) {
                        System.out.println(">> KHONG CO DU LIEU: Tac gia '" + searchNick + "' chua xuat ban sach nao o day.");
                    }
                    break;

                case 5:
                    System.out.println(">>> CHUONG TRINH KET THUC. HEN GAP LAI!");
                    break;

                default:
                    System.out.println(">> LOI: Vui long chon tu 1 den 5!");
                    break;
            }
            System.out.println("\n===============================================");

        } while (choice != 5);
    }

    public static void printBookHeader() {
        System.out.println("+---------------------------+------------+-----------------+");
        System.out.println("| TEN SACH                  | NAM P.HANH | BUT DANH        |");
        System.out.println("+---------------------------+------------+-----------------+");
    }

    public static void printMenu() {
        System.out.println("\n========== LIBRA MANAGEMENT SYSTEM ==========");
        System.out.println("1. Nhap thong tin Cuon Sach (Auto check author)");
        System.out.println("2. Hien thi toan bo Sach trong Thu vien");
        System.out.println("3. Nhap ho so Tac gia thu cong (No duplicate)");
        System.out.println("4. Tra cuu toan bo Sach theo But danh");
        System.out.println("5. Thoat he thong");
        System.out.println("=============================================");
    }
}
