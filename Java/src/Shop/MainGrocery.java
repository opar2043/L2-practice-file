package Shop;

public class MainGrocery {
    public static void main(String[] args) {
        GroceryShop shop = new GroceryShop();
        shop.addItem("Apple");
        shop.addItem("Lemon");
        shop.addItem("Banana");

        // ii. Display the list
        System.out.println("After adding items:");
        shop.display();

        shop.removeItem("Apple");
        // iv. Display the list again
        System.out.println("After removing :" );
        shop.display();
    }
}
