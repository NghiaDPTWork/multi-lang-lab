/* =========================================================================
   HỆ THỐNG QUẢN LÝ SINH VIÊN V1 (STUDENT MANAGEMENT SYSTEM)
   =========================================================================
   
   CÁC KIẾN THỨC CỐT LÕI TRONG BÀI HỌC NÀY:
   1. ArrayList: Mảng động, có khả năng co giãn kích thước tự động và cung cấp kho hàm khổng lồ.
   2. Comparator & Collections.sort(): Sử dụng Lớp Vô Danh (Anonymous Class) để tạo ra "Trọng tài" 
      so sánh và sắp xếp các đối tượng phức tạp theo bất kỳ tiêu chí nào.
   3. Thuật toán Tìm kiếm & Quét biên (Max/Min) trên mảng Object.
   4. Xây dựng Hệ thống Menu tương tác vòng lặp khép kín (Console Interactive Loop).
   ========================================================================= */

package runtime;

import data.Student;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Scanner;

public class Program {
    
    public static void main(String[] args) {
        
        // 1. Khởi tạo kho lưu trữ mảng động ArrayList chứa các Students
        ArrayList<Student> list = new ArrayList<>();
        
        Scanner sc = new Scanner(System.in);
        int choice = 0;

        do {
            printMenu();
            System.out.print("==> Moi ban nhap lua chon (1 - 7): ");
            try {
                choice = Integer.parseInt(sc.nextLine());
            } catch (Exception e) {
                choice = 0; // Gán 0 để nhảy vào default báo lỗi nếu nhập chữ
            }

            System.out.println(); // Dòng trống cho dễ nhìn

            switch (choice) {
                case 1: // 1. THÊM MỚI SINH VIÊN
                    System.out.println("--- [CHUC NANG 1] NHAP THONG TIN SINH VIEN ---");
                    Student newStudent = new Student();
                    newStudent.inputInfor();
                    
                    list.add(newStudent); // Đưa viên gạch mới đúc vào kho lưu trữ
                    System.out.println(">> THANH CONG: Da them sinh vien vao he thong!");
                    break;

                case 2: // 2. HIỂN THỊ DANH SÁCH
                    System.out.println("--- [CHUC NANG 2] DANH SACH SINH VIEN HIEN CO ---");
                    if (list.isEmpty()) {
                        System.out.println(">> THONG BAO: Hien chua co sinh vien nao trong danh sach.");
                    } else {
                        printHeader();
                        for (Student s : list) {
                            s.showInfor();
                        }
                    }
                    break;

                case 3: // 3. TÌM MAX/MIN ĐIỂM TRUNG BÌNH
                    System.out.println("--- [CHUC NANG 3] TRUY XUAT BIEN DIEM (MAX / MIN) ---");
                    if (list.isEmpty()) {
                        System.out.println(">> THONG BAO: Danh sach dang trong!");
                    } else {
                        // THUẬT TOÁN QUÉT CẠN: Giả định phần tử đầu tiên là bá chủ
                        double max = list.get(0).getGpa();
                        double min = list.get(0).getGpa();

                        // Quét toàn mảng để tìm Max, Min thực sự
                        for (Student s : list) {
                            if (s.getGpa() > max) max = s.getGpa();
                            if (s.getGpa() < min) min = s.getGpa();
                        }

                        System.out.printf("\n>> SINH VIEN CO DIEM CAO NHAT (%.2f):\n", max);
                        printHeader();
                        for (Student s : list) {
                            if (s.getGpa() == max) s.showInfor();
                        }

                        System.out.printf("\n>> SINH VIEN CO DIEM THAP NHAT (%.2f):\n", min);
                        printHeader();
                        for (Student s : list) {
                            if (s.getGpa() == min) s.showInfor();
                        }
                    }
                    break;

                case 4: // 4. TÌM KIẾM THEO MÃ SINH VIÊN
                    System.out.println("--- [CHUC NANG 4] TIM KIEM SINH VIEN THEO ID ---");
                    System.out.print("Moi nhap ID can tim: ");
                    String keyId = sc.nextLine();
                    boolean isFound = false;

                    for (Student s : list) {
                        // Dùng hàm equalsIgnoreCase so sánh chuỗi chuẩn xác (ko phân biệt hoa thường)
                        if (s.getId().equalsIgnoreCase(keyId)) {
                            System.out.println(">> DA TIM THAY:");
                            printHeader();
                            s.showInfor();
                            isFound = true;
                            break; // Tìm thấy rồi thì thoát lặp luôn
                        }
                    }
                    
                    if (!isFound) {
                        System.out.println(">> KHONG TIM THAY: Khong ton tai sinh vien co ID '" + keyId + "'");
                    }
                    break;

                case 5: // 5. SẮP XẾP THEO TÊN (ASCENDING)
                    System.out.println("--- [CHUC NANG 5] SAP XEP DANH SACH THEO TEN ---");
                    if (list.isEmpty()) {
                        System.out.println(">> THONG BAO: Danh sach trong!");
                    } else {
                        // Dùng Anonymous Class tạo ra Comparator (Trọng tài so sánh Tên)
                        Comparator<Student> nameComparator = new Comparator<Student>() {
                            @Override
                            public int compare(Student s1, Student s2) {
                                // Tận dụng phương thức compareTo có sẵn của String
                                return s1.getName().compareToIgnoreCase(s2.getName());
                            }
                        };

                        // Ra lệnh cho bộ công cụ Collections thực hiện Sort
                        Collections.sort(list, nameComparator);
                        System.out.println(">> DA SAP XEP THANH CONG. KET QUA:");
                        printHeader();
                        for (Student s : list) s.showInfor();
                    }
                    break;

                case 6: // 6. IN DANH SÁCH CÓ HỌC BỔNG VÀ SẮP GIẢM DẦN GPA
                    System.out.println("--- [CHUC NANG 6] DS HOC BONG (GIAM DAN THEO GPA) ---");
                    if (list.isEmpty()) {
                        System.out.println(">> THONG BAO: Danh sach trong!");
                    } else {
                        // Tạo trọng tài so sánh Điểm (Giảm dần - DESC)
                        Comparator<Student> gpaDescComparator = new Comparator<Student>() {
                            @Override
                            public int compare(Student s1, Student s2) {
                                if (s1.getGpa() < s2.getGpa()) return 1; // Đổi chỗ nếu s1 bé hơn s2 (Sắp giảm)
                                else if (s1.getGpa() > s2.getGpa()) return -1;
                                return 0;
                            }
                        };
                        
                        Collections.sort(list, gpaDescComparator);

                        System.out.println(">> DANH SACH SINH VIEN DUOC CAP HOC BONG (GPA >= 8.0):");
                        printHeader();
                        int scholarshipCount = 0;
                        for (Student s : list) {
                            if (s.hasScholarship()) {
                                s.showInfor();
                                scholarshipCount++;
                            }
                        }
                        
                        if (scholarshipCount == 0) {
                            System.out.println(">> [Trong]: Khong co sinh vien nao dat hoc bong.");
                        }
                    }
                    break;

                case 7:
                    System.out.println(">>> DANG THOAT HE THONG. CHAO TAM BIET & HEN GAP LAI! <<<");
                    break;

                default:
                    System.out.println(">> LOI: Lua chon khong hop le! Vui long go so tu 1 den 7.");
                    break;
            }
            
            System.out.println("\n--------------------------------------------------------------------\n");
            
        } while (choice != 7);
    }

    // Phương thức bổ trợ: In khung Header cho bảng danh sách cho chuyên nghiệp
    public static void printHeader() {
        System.out.println("+----------------------+--------+------+--------+-------+----------------------+");
        System.out.println("| HO VA TEN            | G.TINH | N.S  | ID     | GPA   | EMAIL                |");
        System.out.println("+----------------------+--------+------+--------+-------+----------------------+");
    }

    // Phương thức bổ trợ: In giao diện Menu
    public static void printMenu() {
        System.out.println("================ STUDENT MANAGEMENT SYSTEM (v1.0) ================");
        System.out.println("|  1. Them moi mot Sinh vien (Input info)                        |");
        System.out.println("|  2. Hien thi toan bo Danh sach Sinh vien                       |");
        System.out.println("|  3. Tim kiem va hien thi Top Max / Min GPA                     |");
        System.out.println("|  4. Tim kiem Sinh vien theo ma ID                              |");
        System.out.println("|  5. Sap xep Danh sach tang dan theo TEN (A-Z)                  |");
        System.out.println("|  6. Liet ke DS dat Hoc Bong sap giam dan theo GPA (10->0)      |");
        System.out.println("|  7. Thoat chuong trinh                                         |");
        System.out.println("==================================================================");
    }
}
