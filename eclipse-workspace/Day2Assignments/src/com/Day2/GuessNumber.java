package com.Day2;

import java.util.Scanner;

public class GuessNumber {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
int s;
		
		Scanner c=new Scanner(System.in);
		double k,m;
		s=75;
		double x[]=new double[s];
		int i=0;
		while(true) {
		 k=c.nextDouble();
			m=(int) Math.floor((Math.random()*100));
			if(m==k) {
				System.out.println("correct number");
			break;	
			}
			else if(m<k){
				System.out.println("too high");
			}
			else {
				System.out.println("too low"+m);
				
			}
			i++;
			
		}
		

	}

}
