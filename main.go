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
	// num1 := 5
	// num2 := 10
	// var sum int = num1 + num2;

    // var name string = "Rijoan Rashid Opar";

	// fmt.Println("sum" , sum);
	// fmt.Println("Hello learning go");

	// fmt.Println("sum" , sum);
	// fmt.Printf("Name:  %s and i am %d years old\n" , name , num1);
    
	// var addition, subtraction = add(3,5);
	// fmt.Println(addition, subtraction)
	// fmt.Println(makeCoffe("Alice", 5));
	// fmt.Println(makeCoffe("Bob", 6));


	const marks int = 45;

	if marks < 50 {
		fmt.Printf("Keep hard work");
	}else if marks > 75 {
		fmt.Print("You got A+");
	}else {
		fmt.Println("You are doing great");
	}

    var monthe int;
    fmt.Scan(&monthe);

	switch monthe  {
	case 1:
		fmt.Println("This is january");
	case 2:
		fmt.Println("This is feb");
	case 3:
		fmt.Println("This is march");
	default:
		fmt.Println("This is not a month")
	}


	// fmt.Println("Write any message -----");
	// var msg string;
	// fmt.Scan(&msg);

	// fmt.Println(msg);


	for i := 0; i < 10; i++ {
       if(i == 5){
	   	continue;
	   }
       if(i == 8){
	break;
	   }
 	fmt.Println("Value of i:", i);

	}
	
}
