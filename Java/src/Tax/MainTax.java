package Tax;

import java.util.ArrayList;

public class MainTax {
    public static void main(String[] args) {
        ArrayList <Taxable> tax = new ArrayList<>();
        tax.add(new IncomeTax());
        tax.add(new SalesTax());

        double amount = 50000;

        for(Taxable t : tax){
            double finalTax = t.calculateTex(amount);

            System.out.println(
              " tax added " + t.getClass().getSimpleName()+ " " + finalTax
            );
            System.out.println();
        }
    }
}
