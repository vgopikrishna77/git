package com.Day2;
import java.util.*;
public class Grading {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int g;
		Scanner c=new Scanner(System.in);
		g=c.nextInt();
		if(g<=100 && g>=90) {
			System.out.println("grade a");
		}
		else if(g<=89 && g>=80) {
			System.out.println("grade b");
		}
		else if(g<=79 && g>=70) {
			System.out.println("grade c");
		}else if(g<=69 && g>=60) {
			System.out.println("grade d");
		}else {
			System.out.println("grade f");
		}

	}

}
