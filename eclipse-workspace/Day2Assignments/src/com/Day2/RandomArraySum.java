package com.Day2;

import java.util.Scanner;

public class RandomArraySum {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
int s;
		
		Scanner c=new Scanner(System.in);
		double k=0,m;
		s=75;
		double x[]=new double[s];
		for(int i=0;i<s;i++) {
			x[i]=Math.floor((Math.random()*100));
			k=k+x[i];
			
			
		}
		m=k/s;
		System.out.println(k);
		System.out.println(m);

		

	}

}
