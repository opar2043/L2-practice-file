package Deals;

public class Festival implements Discount {
    public double getDiscount(double amount){
        return amount * 0.2;
    }
}
