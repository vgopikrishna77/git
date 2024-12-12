
package assignment.one;

import java.util.*;

public class RandomOperationMath {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		  Random rand = new Random();

	        // Generate two random numbers between 1 and 6
	        int dice1 = rand.nextInt(6) + 1;
	        int dice2 = rand.nextInt(6) + 1;

	        // Calculate the sum
	        int sum = dice1 + dice2;

	        // Print the result
	        System.out.println("The sum of the two dice is: " + sum);
	}

	

}
