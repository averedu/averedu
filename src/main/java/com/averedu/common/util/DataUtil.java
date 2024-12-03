package com.averedu.common.util;

import java.math.BigDecimal;
import java.util.Calendar;
import java.util.Date;

import org.apache.commons.lang3.time.FastDateFormat;



/**
 * Data, DataSet, DataSetMap 등과 같은 데이터 관련 객체 사용에
 * 공통적으로 유용하게 사용할 수 있는 method 등을 정의
 * 
 * @author jiback
 *
 */
public class DataUtil {
	
	/**
	 * 주어진 객체를 String으로 변환한다.
	 * 만일 해당 값이 null이면 인자로 주어진 defaultValue를 반환한다.
	 * 
	 * @param data
	 * @param defaultValue
	 * @return
	 */
	public static String nvl(Object data, String defaultValue) {
		return (data == null) ? defaultValue : data.toString();
	}
	
	
	/**
	 * 주어진 객체를 String으로 변환한다.
	 * 만일 해당 값이 null이면 빈 문자열을 반환한다.
	 * 
	 * @param data
	 * @return
	 */
	public static String nvl(Object data) {
		return nvl(data, "");
	}
	
	
	/**
	 * 특정값의 타입을 판단하여 double 형식으로 변환 후 반환한다.
	 * 
	 * @param value
	 * @return
	 */
	public static Double parseDouble(Object value) {
		Double doubleObj = 0.0d;

		try {
			if (value instanceof Integer) {
				doubleObj = ((Integer) value).doubleValue();
				
			} else if (value instanceof Long) {
				doubleObj = ((Long) value).doubleValue();
				
			} else if (value instanceof Float) {
				doubleObj = ((Float) value).doubleValue();
				
			} else if( value instanceof Double ) {
				doubleObj = (Double) value;
				
			} else if (value instanceof BigDecimal) {
				doubleObj = ((BigDecimal) value).doubleValue();
				
			} else if (value instanceof String) {
				doubleObj = Double.parseDouble((String) value);
				
			} else {
				if(value == null) {
					doubleObj = 0.0d;
				} else {
					doubleObj = Double.parseDouble(value.toString());
				}
			}

		} catch (NumberFormatException ex) {
			doubleObj = 0.0d;
		}

		return doubleObj;
	}

	/**
	 * 특정값의 타입을 판단하여 double 형식으로 변환 후 반환한다. 만일 정상적으로 변환되지 않으면 defaultValue로 지정된
	 * 값을 반환한다.
	 * 
	 * @param value
	 * @param defaultValue
	 * @return
	 */
	public static Double parseDouble(Object value, Double defaultValue) {
		Double doubleObj = 0.0d;

		try {
			if (value instanceof Integer) {
				doubleObj = ((Integer) value).doubleValue();
				
			} else if (value instanceof Long) {
				doubleObj = ((Long) value).doubleValue();
				
			} else if (value instanceof Float) {
				doubleObj = ((Float) value).doubleValue();
				
			} else if( value instanceof Double ) {
				doubleObj = (Double) value;
				
			} else if (value instanceof BigDecimal) {
				doubleObj = ((BigDecimal) value).doubleValue();
				
			} else if (value instanceof String) {
				doubleObj = Double.parseDouble((String) value);
				
			} else {
				if(value == null) {
					doubleObj = defaultValue;
				} else {
					doubleObj = Double.parseDouble(value.toString());
				}
			}

		} catch (NumberFormatException ex) {
			doubleObj = defaultValue;
		}

		return doubleObj;
	}
	
	
	/**
	 * 특정값의 타입을 판단하여 int 형식으로 변환 후 반환한다.
	 * 
	 * @param value
	 * @return
	 */
	public static Integer parseInteger(Object value) {
		Integer integerObj = 0;

		try {
			if (value instanceof Integer) {
				integerObj = (Integer) value;
				
			} else if (value instanceof Long) {
				integerObj = ((Long) value).intValue();
				
			} else if (value instanceof Float) {
				integerObj = ((Float) value).intValue();
				
			} else if (value instanceof Double) {
				integerObj = ((Double) value).intValue();
				
			} else if (value instanceof BigDecimal) {
				integerObj = ((BigDecimal) value).intValue();
				
			} else if (value instanceof String) {
				integerObj = Integer.parseInt((String) value);
				
			} else {
				if(value == null) {
					integerObj = 0;
				} else {
					integerObj = Integer.parseInt(value.toString());
				}
			}

		} catch (NumberFormatException ex) {
			integerObj = 0;
		}

		return integerObj;
	}

	/**
	 * 특정값의 타입을 판단하여 int 형식으로 변환 후 반환한다. 만일 정상적으로 변환되지 않으면 defaultValue로 지정된 값을
	 * 반환한다.
	 * 
	 * @param value
	 * @return
	 */
	public static Integer parseInteger(Object value, Integer defaultValue) {
		Integer integerObj = 0;

		try {
			if (value instanceof Integer) {
				integerObj = (Integer) value;
				
			} else if (value instanceof Long) {
				integerObj = ((Long) value).intValue();
				
			} else if (value instanceof Float) {
				integerObj = ((Float) value).intValue();
				
			} else if (value instanceof Double) {
				integerObj = ((Double) value).intValue();
				
			} else if (value instanceof BigDecimal) {
				integerObj = ((BigDecimal) value).intValue();
				
			} else if (value instanceof String) {
				integerObj = Integer.parseInt((String) value);
				
			} else {
				if (value == null) {
					integerObj = defaultValue;
				} else {
					integerObj = Integer.parseInt(value.toString());
				}
			}

		} catch (NumberFormatException ex) {
			integerObj = defaultValue;
		}

		return integerObj;
	}
	
	
	/**
	 * yyyyMMdd 형식으로 이루어진 날짜 문자열을
	 * Calendar 객체로 반환한다.
	 * parameter로 넘어온 조회 조건 날짜를 이용하여 로직을 수행할 때 사용할 수 있다.
	 * 
	 * @param yyyyMMdd
	 * @return
	 */
	public static Calendar toCalendar(String yyyyMMdd) {
		Calendar dateCal = Calendar.getInstance();
		int year, month, date = 0;
		
		if( yyyyMMdd.length() == 8 ) {
			year  = parseInteger( yyyyMMdd.substring(0, 4) );
			month = parseInteger( yyyyMMdd.substring(4, 6) ) - 1;
			date  = parseInteger( yyyyMMdd.substring(6, 8) );
			
		} else if( yyyyMMdd.length() == 6 ) {
			year  = parseInteger( yyyyMMdd.substring(0, 4) );
			month = parseInteger( yyyyMMdd.substring(4, 6) ) - 1;
			date  = 1;
		
		} else {
			year  = dateCal.get(Calendar.YEAR);
			month = dateCal.get(Calendar.MONTH);
			date  = dateCal.get(Calendar.DATE);
		}
		
		dateCal.set(Calendar.YEAR, year);
		dateCal.set(Calendar.MONTH, month);
		dateCal.set(Calendar.DATE, date);
		
		return dateCal;
	}
	
	
	/**
	 * YYYYMMDDHH24MISS 형식으로 이루어진 날짜 문자열을
	 * Calendar 객체로 반환한다.
	 * parameter로 넘어온 조회 조건 날짜를 이용하여 로직을 수행할 때 사용할 수 있다.
	 * 
	 * @param YYYYMMDDHH24MISS
	 * @return
	 */
	public static Calendar dateStrToCalendar(String dateStr) {
		Calendar dateCal = Calendar.getInstance();
		int year, month, date, hourOfDay, minute, second = 0;
		
		year 		= Integer.parseInt(dateStr.substring(0, 4));
		month 		= Integer.parseInt(dateStr.substring(4, 6)) - 1;
		date 		= Integer.parseInt(dateStr.substring(6, 8));
		hourOfDay 	= Integer.parseInt(dateStr.substring(8, 10));
		minute 		= Integer.parseInt(dateStr.substring(10, 12));
		if (dateStr.length() == 14 ) {
			second 		= Integer.parseInt(dateStr.substring(12, 14));
		}
		
		dateCal.set(year, month, date, hourOfDay, minute, second);
		
		return dateCal;
	}
	
	/**
	 * yyyyMMdd 형식으로 이루어진 날짜 문자열을
	 * Calendar 객체로 반환한다.
	 * parameter로 넘어온 조회 조건 날짜를 이용하여 로직을 수행할 때 사용할 수 있다.
	 * 
	 * @param yyyyMMdd
	 * @return
	 */
	public static String addMinutes(Calendar calendar, int offsetMinutes, String formatString) {
		Calendar orgCal = Calendar.getInstance();
		int year, month, date, hourOfDay, minute, second = 0;
		
		year 		= calendar.get(Calendar.YEAR);
		month 		= calendar.get(Calendar.MONTH);
		date 		= calendar.get(Calendar.DATE);
		hourOfDay 	= calendar.get(Calendar.HOUR_OF_DAY);
		minute 		= calendar.get(Calendar.MINUTE);
		second 		= calendar.get(Calendar.SECOND);
		
		orgCal.set(year, month, date, hourOfDay, minute, second);
		orgCal.add(Calendar.MINUTE, offsetMinutes);
		
		return FastDateFormat.getInstance(formatString).format(orgCal);
	}
	
	
	/**
	 * 주어진 formatString에 맞게 Calendar 객체를 문자열로 변환한다.
	 * 
	 * @param calendar
	 * @param formatString
	 * @return
	 */
	public static String formatCalendar(Calendar calendar, String formatString) {
		return FastDateFormat.getInstance(formatString).format(calendar);
	}
	
	/**
	 * 현재시각을 주어진 formatString에 맞게 Calendar 객체를 문자열로 변환한다.
	 * 
	 * @param calendar
	 * @param formatString
	 * @return
	 */
	public static String getTodayString(String formatString) {
		Calendar calendar = Calendar.getInstance();
		return FastDateFormat.getInstance(formatString).format(calendar);
	}
	
}
