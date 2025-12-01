package Liabrary;

public class MainReadingList {
    public static void main(String[] args) {
        ReadingList books = new ReadingList();

        books.addBook("story");
        books.addBook("Horror");
        books.addBook("Crime");

        books.display();
        books.removeBook("story");
        System.out.println();
        System.out.println("after removing");
        books.display();
    }
}
