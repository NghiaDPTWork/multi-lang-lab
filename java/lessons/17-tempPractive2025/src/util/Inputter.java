package util;

import java.util.Scanner;

public class Inputter {
    private static Scanner sc = new Scanner(System.in);

    public static int getAnInteger(String inputMsg, String errMsg, int lower, int upper) {
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
}
