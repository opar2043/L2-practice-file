package Liabrary;

import java.util.ArrayList;

public class ReadingList {
    ArrayList <String> books = new ArrayList<>();

    void addBook(String book){
        books.add(book);
    }
    void removeBook(String book){
        books.remove(book);
    }
    void display(){
        System.out.println("display all books:");
        for(String b: books){
            System.out.println("-" + b);
        }
    }
}
