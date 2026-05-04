package main

import "fmt"

func add( a int , b int) (int , int){
   return  a + b , a-b;
}

func makeCoffe (name string , price int) string{
	return fmt.Sprintf("Making coffe for %s with price %d" , name, price);
}

func main(){
	// var num1 int ;
	// var num2 int;
	num1 := 5
	num2 := 10
	var sum int = num1 + num2;

    var name string = "Rijoan Rashid Opar";

	fmt.Println("sum" , sum);
	fmt.Println("Hello learning go");

	fmt.Println("sum" , sum);
	fmt.Printf("Name:  %s and i am %d years old\n" , name , num1);
    
	var addition, subtraction = add(3,5);
	fmt.Println(addition, subtraction)
	fmt.Println(makeCoffe("Alice", 5));
	fmt.Println(makeCoffe("Bob", 6));
}
