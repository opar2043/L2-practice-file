package Shop;

import java.util.ArrayList;

public class GroceryShop {
    ArrayList<String> items = new ArrayList<>();

    public void addItem(String item){
        items.add(item);
    }
    public void removeItem(String item){
        items.remove(item);
    }

    public void display(){
      System.out.println("Grocery List");

      for(String i : items){
        System.out.println("- " + i);
      }
      System.out.println();
    }
}
