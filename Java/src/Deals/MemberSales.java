package Deals;

public class MemberSales implements Discount {
    public double getDiscount(double amount){
        return amount * 0.30;
    }
}
