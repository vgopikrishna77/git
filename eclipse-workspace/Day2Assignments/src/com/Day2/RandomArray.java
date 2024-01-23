package com.Day2;
import java.util.*;
import java.lang.*;
public class RandomArray {

	public static void main(String[] args) {
		int s;
		
		Scanner c=new Scanner(System.in);
				s=c.nextInt();
		double x[]=new double[s];
		int max=500,min=100;
		//double r = Math.floor((Math.random()* (max - min))+min);
		if(s>0 && s<10) {
		for(int i=0;i<s;i++) {
			x[i]=Math.floor((Math.random()* (max - min))+min);;
			System.out.print(x[i]);
		}}else {
			for(int i=0;i<=3;i++) {
				System.out.print("enter correct number");
				s=c.nextInt();
				if(s>0 && s<10) {
					for(int j=0;j<s;j++) {
						x[j]=Math.floor((Math.random()* (max - min))+min);
						System.out.println(x[j]);
						
					}
					break;
					}
				
				else {
					if(s>=10) {
					s=c.nextInt();
					}
					
					
					break;
				}
			}
		}
		
		
			}}


