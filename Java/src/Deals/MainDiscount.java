package Deals;

import java.util.ArrayList;
import java.util.List;

public class MainDiscount {
    public static void main(String[] args) {
        ArrayList<Discount> discount = new ArrayList<>();
        discount.add(new Festival());
        discount.add(new MemberSales());

        double amount = 50000;

        for (Discount d : discount) {
            double finalDiscount = d.getDiscount(amount);

            System.out.println(
            d.getClass().getSimpleName() + " Discount for " + finalDiscount);
            System.out.println();
        }
    }
}
