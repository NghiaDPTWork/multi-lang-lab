package manager;

public class Cabinet {
    private EmpListManager core = new EmpListManager();

    public void prepare() {
        core.bootstrap();
    }

    public void handleTask1() { core.addNew(); }
    public void handleTask2() { core.search(); }
    public void handleTask3() { core.update(); }
    public void handleTask4() { core.delete(); }
    public void handleTask5() { core.sortBySalary(); }
    public void handleTask6() { core.filterByTitle(); }
    public void handleTaskList() { core.printAll(); }
}
