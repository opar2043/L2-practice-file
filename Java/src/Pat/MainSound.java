package Pat;

import java.util.ArrayList;

public class MainSound {
    public static void main(String[] args) {
        ArrayList <Animal> sound =new ArrayList<>();
        sound.add(new Cat());
        sound.add(new Dog());
        sound.add(new Cat());
        sound.add(new Dog());


        for(Animal a : sound){
            a.makeSound();
        }

    }
}
