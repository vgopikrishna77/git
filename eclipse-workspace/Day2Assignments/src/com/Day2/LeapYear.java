package com.Day2;
import java.util.*;
public class LeapYear {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner c=new Scanner(System.in);
		int leap,y;
		leap=c.nextInt();
		if((leap%4==0 && leap%100!=0) || leap%400==0) {
			System.out.println("leap year");
		}
		else {
			System.out.println("not a leaqp year");
		}

	}

}
