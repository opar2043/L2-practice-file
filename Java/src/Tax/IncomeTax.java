package Tax;

public class IncomeTax implements Taxable{
    public double calculateTex(double amount){
        return amount * 0.25;
    }
}
