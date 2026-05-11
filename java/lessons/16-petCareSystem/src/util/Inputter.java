/* =========================================================================
   BỘ CÔNG CỤ TIỆN ÍCH NHẬP DỮ LIỆU (INPUTTER UTILITY)
   ========================================================================= */

package util;

import java.util.Scanner;

public class Inputter {
    private static Scanner sc = new Scanner(System.in);

    // Nhập số nguyên nằm trong khoảng xác định
    public static int getAnInteger(String inputMsg, String errMsg, int lower, int upper) {
        if (lower > upper) { // Sửa đổi chống treo logic nếu nhập sai tham số chặn
            int temp = lower; lower = upper; upper = temp;
        }
        while (true) {
            try {
                System.out.print(inputMsg);
                int value = Integer.parseInt(sc.nextLine());
                if (value < lower || value > upper) throw new Exception();
                return value;
            } catch (Exception e) {
                System.out.println(">> " + errMsg);
            }
        }
    }

    // Nhập chuỗi KÝ TỰ THUẦN, không rỗng
    public static String getAString(String inputMsg, String errMsg) {
        while (true) {
            System.out.print(inputMsg);
            String value = sc.nextLine().trim();
            if (value.isEmpty()) {
                System.out.println(">> " + errMsg);
            } else {
                return value;
            }
        }
    }

    // NHẬP CHUỖI KHỚP REGEX ĐỊNH DẠNG
    public static String getAString(String inputMsg, String errMsg, String regex) {
        while (true) {
            System.out.print(inputMsg);
            String value = sc.nextLine().trim();
            if (value.isEmpty() || !value.matches(regex)) {
                System.out.println(">> " + errMsg);
            } else {
                return value;
            }
        }
    }

    // Nhập số thực Double trong khoảng xác định
    public static double getADouble(String inputMsg, String errMsg, double lower, double upper) {
        while (true) {
            try {
                System.out.print(inputMsg);
                double value = Double.parseDouble(sc.nextLine());
                if (value < lower || value > upper) throw new Exception();
                return value;
            } catch (Exception e) {
                System.out.println(">> " + errMsg);
            }
        }
    }
}
