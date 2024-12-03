package com.averedu.common.util;


public class XSSUtil {
	public static String cleanXSS(String value) {
		// You'll need to remove the spaces from the html entities below
		value = value.replaceAll("<", "& lt;").replaceAll(">", "& gt;");
		value = value.replaceAll("\\(", "& #40;").replaceAll("\\)", "& #41;");
		value = value.replaceAll("'", "& #39;");
		value = value.replaceAll("eval\\((.*)\\)", "");
		value = value.replaceAll("[\\\"\\\'][\\s]*javascript:(.*)[\\\"\\\']", "\"\"");
		value = value.replaceAll("script", "");
		return value;
	}
	
	public static String cleanPathMani(String value) {
		if(value.contains("..\\")) {
			value = value.replace("..\\", "");
		}
			
		if(value.contains("../")) {
			value = value.replace("../", "");
		}
			            
		if(value.contains("./")) {
			value = value.replace("./", "");
		}
			            
		return value;
	}

}
