package com.msu.common.util;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Locale;

public class DateUtil2 {
	/**
	 * 날짜에 일을 더한한다.
	 * 
	 * @param string
	 * @param int
	 * @return String
	 * @throws Exception
	 */
	public static String addDay(String strDate, int day) throws Exception {
		Calendar cal = Calendar.getInstance();

		cal.set(Calendar.YEAR, Integer.parseInt(strDate.substring(0, 4)));
		cal.set(Calendar.MONTH, Integer.parseInt(strDate.substring(4, 6)) - 1);
		cal.set(Calendar.DATE, Integer.parseInt(strDate.substring(6, 8)));

		cal.add(Calendar.DATE, day);

		Date sDate = cal.getTime();
		SimpleDateFormat simpleDate = new SimpleDateFormat("yyyyMMdd", Locale.KOREA);
		String sSpotDate = simpleDate.format(sDate);

		return sSpotDate;
	}
	
	/**
	 * 현재일시를 반환한다.
	 * 
	 * @param string
	 * @param int
	 * @return String
	 * @throws Exception
	 */
	public static String getThisDay(String type) {
		java.util.Date date = new java.util.Date();
		SimpleDateFormat sdf = null;

		if (type.toLowerCase().equals("yymmdd")) {
			sdf = new SimpleDateFormat("yyMMdd", Locale.KOREA);
			return sdf.format(date);
		}
		if (type.toLowerCase().equals("yyyymmdd")) {
			sdf = new SimpleDateFormat("yyyyMMdd", Locale.KOREA);
			return sdf.format(date);
		}
		if (type.toLowerCase().equals("yyyymmddhh")) {
			sdf = new SimpleDateFormat("yyyyMMddHH", Locale.KOREA);
			return sdf.format(date);
		}
		if (type.toLowerCase().equals("yyyymmddhhmm")) {
			sdf = new SimpleDateFormat("yyyyMMddHHmm", Locale.KOREA);
			return sdf.format(date);
		}
		if (type.toLowerCase().equals("yyyymmddhhss")) {
			sdf = new SimpleDateFormat("yyyyMMddHHmmss", Locale.KOREA);
			return sdf.format(date);
		}
		if (type.toLowerCase().equals("yyyymmddhhmmssms")) {
			sdf = new SimpleDateFormat("yyyyMMddHHmmssSSS", Locale.KOREA);
			return sdf.format(date);
		}
		return "ERR: parameter must be 'YYYYMMDD', 'YYYYMMDDHH', 'YYYYMMDDHHSS'or 'YYYYMMDDHHSSMS'";
	}
}
