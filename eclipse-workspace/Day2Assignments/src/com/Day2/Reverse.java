package com.Day2;
import java.util.*;

public class Reverse {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String s="gopi",l="";
		char k;
		int i,len;
		len=s.length();
		for(i=0;i<len;i++) {
			k=s.charAt(i);
			l=k+l;
		}
		System.out.println(l);

	}

}
