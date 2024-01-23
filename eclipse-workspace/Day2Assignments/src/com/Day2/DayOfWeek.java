package com.Day2;
import java.util.*;
public class DayOfWeek {

	public static void main(String[] args) {
		Scanner c=new Scanner(System.in);
		int day;
		String week;
		day=c.nextInt();
		switch(day) {
		case 1:
			week="sunDay";
			System.out.print(week);
			break;
		case 2:
			week="monday";
			System.out.print(week);
			break;
		case 3:
			week="tuesday";
			System.out.print(week);
			break;
		case 4:
			week="wenesday";
			System.out.print(week);
			break;
		case 5:
			week="thursday";
			System.out.print(week);
			break;
		case 6:
			week="friday";
			System.out.print(week);
			break;
		case 7:
			week="saturday";
			System.out.print(week);
			break;
		default:
			System.out.println("enter number between 1 to 7");
		}
		

	}

}
