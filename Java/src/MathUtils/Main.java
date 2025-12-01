package MathUtils;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner num = new Scanner(System.in);

        System.out.print("Enter your number: ");
        double x = num.nextDouble();

        // x^3 + x^2 + 1
        double res = MathOP.cube(x) + MathOP.square(x) + 1;

        System.out.println("Result of x^3 + x^2 + 1 = " + res);

        num.close();
    }
}
