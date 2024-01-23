package com.Day2;

public class Array {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int a[]=new int[30];
		int i,c=0;
		for(i=1;i<30;i++) {
			if(i%3==0) {
				a[i]=i;
				System.out.println(a[i]);
				c++;
			}
		}
	

	}

}
