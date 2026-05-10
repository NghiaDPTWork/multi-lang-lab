package data;

import java.util.Random;

public class Monkey extends Herbivore {
    
    public static final double RECEPTIVE_LIMIT = 70.0;

    public Monkey() {
    }

    public Monkey(String name, String yob, double weight) {
        super(name, yob, weight); 
    }

    @Override
    public double study() {
        Random rd = new Random();
        return rd.nextDouble() * RECEPTIVE_LIMIT; 
    }

    @Override
    public void showInfor() {
        String formatStr = String.format("| MONKEY     | %-15s | %4s | %6.2f kg | Score: %5.2f |",
                                          name, yob, weight, study());
        System.out.println(formatStr);
    }
}
