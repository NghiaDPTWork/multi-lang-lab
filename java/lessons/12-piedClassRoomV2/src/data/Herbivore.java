package data;

public abstract class Herbivore {
    protected String name;
    protected String yob;
    protected double weight;

    public Herbivore() {
    }

    public Herbivore(String name, String yob, double weight) {
        this.name = name;
        this.yob = yob;
        this.weight = weight;
    }

    public abstract double study(); 
    public abstract void showInfor();
}
