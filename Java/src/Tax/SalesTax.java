package Tax;

public class SalesTax implements Taxable{
    public double calculateTex(double amount){
      return amount * 0.15;
    }
}
