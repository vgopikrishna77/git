package com.Day2;

import java.util.Scanner;

public class GuessrRange {

	public static void main(String[] args) {
int s;
		
		Scanner c=new Scanner(System.in);
		double k;
		int m;
		s=75;
		double x[]=new double[s];
		int i=0;
		while(true) {
		 k=c.nextDouble();
			m=(int) Math.floor((Math.random()*100));
			if(m==k) {
				System.out.println("correct number I wins");
			break;	
			}
			
			else {
				System.out.println("computer wins"+m);
				
			}
			i++;
			
		}
		// TODO Auto-generated method stub

	}

}
