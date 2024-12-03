package com.averedu.common.util;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Locale;

import javax.crypto.Cipher;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;

public class AEScrypto {	

	//public static String key = "0001000100010001"; // 
	public static String key = "0001000100010001"; // 
	public static String iV = "0001000100010001"; // 
	// Mapping table from 6-bit nibbles to Base64 characters.
	private static char[]    map1 = new char[64];
	static {
		int i=0;
		for (char c='A'; c<='Z'; c++) map1[i++] = c;
		for (char c='a'; c<='z'; c++) map1[i++] = c;
		for (char c='0'; c<='9'; c++) map1[i++] = c;
		map1[i++] = '+'; map1[i++] = '/'; }

	// Mapping table from Base64 characters to 6-bit nibbles.
	private static byte[]    map2 = new byte[128];
	static {
		for (int i=0; i<map2.length; i++) map2[i] = -1;
		for (int i=0; i<64; i++) map2[map1[i]] = (byte)i; }


	public static String encodeString (String s) {
		return new String(encode(s.getBytes())); }


	public static char[] encode (byte[] i) {
		return encode(i,i.length); }

	public static char[] encode (byte[] i, int iLen) {
		int oDataLen = (iLen*4+2)/3;       // output length without padding
		int oLen = ((iLen+2)/3)*4;         // output length including padding
		char[] out = new char[oLen];
		int ip = 0;
		int op = 0;
		while (ip < iLen) {
			int i0 = i[ip++] & 0xff;
			int i1 = ip < iLen ? i[ip++] & 0xff : 0;
			int i2 = ip < iLen ? i[ip++] & 0xff : 0;
			int o0 = i0 >>> 2;
			int o1 = ((i0 &   3) << 4) | (i1 >>> 4);
			int o2 = ((i1 & 0xf) << 2) | (i2 >>> 6);
			int o3 = i2 & 0x3F;
			out[op++] = map1[o0];
			out[op++] = map1[o1];
			out[op] = op < oDataLen ? map1[o2] : '='; op++;
			out[op] = op < oDataLen ? map1[o3] : '='; op++; }
		return out; }


	public static String decodeString (String s) {
		return new String(decode(s)); }


	public static byte[] decode (String s) {
		return decode(s.toCharArray()); }


	public static byte[] decode (char[] i) 
	{
		int iLen = i.length;
		if (iLen%4 != 0) throw new IllegalArgumentException ("Length of Base64 encoded input string is not a multiple of 4.");
		while (iLen > 0 && i[iLen-1] == '='){
			iLen--;
		}
		int oLen = (iLen*3) / 4;
		byte[] out = new byte[oLen];
		int ip = 0;
		int op = 0;
		while (ip < iLen) {
			int i0 = i[ip++];
			int i1 = i[ip++];
			int i2 = ip < iLen ? i[ip++] : 'A';
			int i3 = ip < iLen ? i[ip++] : 'A';
			if (i0 > 127 || i1 > 127 || i2 > 127 || i3 > 127)
				throw new IllegalArgumentException ("Illegal character in Base64 encoded data.");
			int b0 = map2[i0];
			int b1 = map2[i1];
			int b2 = map2[i2];
			int b3 = map2[i3];
			if (b0 < 0 || b1 < 0 || b2 < 0 || b3 < 0)
				throw new IllegalArgumentException ("Illegal character in Base64 encoded data.");
			int o0 = ( b0       <<2) | (b1>>>4);
			int o1 = ((b1 & 0xf)<<4) | (b2>>>2);
			int o2 = ((b2 &   3)<<6) |  b3;
			out[op++] = (byte)o0;
			if (op<oLen) out[op++] = (byte)o1;
			if (op<oLen) out[op++] = (byte)o2; }
		return out; 
	}

	public static byte [] IC_AES_Encrypt(byte [] data) throws Exception  {
		Cipher cipher = Cipher.getInstance("AES/CBC/NoPadding");
		SecretKeySpec keySpec = new SecretKeySpec(key.getBytes(), "AES");
		IvParameterSpec ivSpec = new IvParameterSpec(iV.getBytes());
		cipher.init(Cipher.ENCRYPT_MODE, keySpec, ivSpec);
		int padSize = 16 - (data.length % 16), i;
		byte [] padding = new byte [data.length + padSize];
		for(i = 0; i < padding.length; i++) {
			if(i < data.length) {
				padding[i] = data[i];
			} else {
				padding[i] = (byte)padSize;
			}
		}
		byte [] encrypted = cipher.doFinal(padding);
		return encrypted;

	}

	public static byte [] IC_AES_Decrypt(byte [] enc) throws Exception  {
		Cipher cipher = Cipher.getInstance("AES/CBC/NoPadding");
		SecretKeySpec keySpec = new SecretKeySpec(key.getBytes(), "AES");
		IvParameterSpec ivSpec = new IvParameterSpec(iV.getBytes());
		cipher.init(Cipher.DECRYPT_MODE, keySpec, ivSpec);
		int padSize, i;
		byte [] decrypted = cipher.doFinal(enc);
		padSize = decrypted[decrypted.length - 1];
		byte [] ret = new byte [decrypted.length - padSize];
		for(i = 0; i < ret.length; i++) {
			ret[i] = decrypted[i];
		}
		return ret;
	}

	//**************************************************************************
	// 단말 암호화 
	//**************************************************************************
	public static String IC_AES_Base64_Encrypt(String data) throws Exception  {

		key = "0001000100010001";

		return IC_AES_Base64_Encrypt(key, data);
	}

	public static String IC_AES_Base64_Encrypt(String enckey, String data) throws Exception  {

		key = enckey;
		iV = "0001000100010001";

		byte [] enc = IC_AES_Encrypt(data.getBytes());
		char [] encoded = encode(enc);
		return new String(encoded);
	}

	//**************************************************************************
	// POS 암호화 
	//**************************************************************************
	public static String IC_AES_Base64_POS_Encrypt(String encIv, String enckey, String data) throws Exception  {

		iV = encIv;
		key = enckey;

		byte [] enc = IC_AES_Encrypt(data.getBytes());
		char [] encoded = encode(enc);
		return new String(encoded);
	}

	//**************************************************************************
	// 단말 복호화 
	//**************************************************************************
	public static String IC_AES_Base64_Decrypt(String enc) throws Exception  {

		key = "0001000100010001";

		return IC_AES_Base64_Decrypt(key, enc);
	}

	public static String IC_AES_Base64_Decrypt(String enckey, String enc) throws Exception  {
		key = enckey;
		iV = "0001000100010001"; 

		byte [] decoded = decode(enc);
		byte [] data = IC_AES_Decrypt(decoded);
		return new String(data);
	}

	//**************************************************************************
	// POS 복호화 
	//**************************************************************************
	public static String IC_AES_Base64_POS_Decrypt(String encIv, String enckey, String enc) throws Exception  {
		iV = encIv;
		key = enckey;

		byte [] decoded = decode(enc);
		byte [] data = IC_AES_Decrypt(decoded);
		return new String(data);
	}

	//**************************************************************************
	// POS 복호화 
	//**************************************************************************
	public static String IC_AES_Base64_POS_Decrypt2(String encIv, String enckey, String enc) throws Exception  {
		iV = encIv;
		key = enckey;

		byte [] decoded = decode(enc);
		byte [] data = IC_AES_Decrypt(decoded);
		return new String(data, "EUC-KR");	// 서버가 EUC-KR로 인코딩 되어 있음(한글 처리)
	}

	//**************************************************************************
	// 가변키생성 
	//**************************************************************************
	public static String GetEnckey(String skeyData)
	{
		String sEnckey = "";

		try
		{
			if(skeyData.length() != 50)
			{
				if(skeyData.length() >= 16)
				{
					sEnckey = skeyData.substring(0, 16);
				}
				else
				{
					sEnckey = "0001000100010001";
				}

				return sEnckey;
			}

			String sSystemTime = skeyData.substring(0, 6);
			String sUniquekey = skeyData.substring(6, 42);
			String sSystemDate = skeyData.substring(42, 50);

			//System.out.println("sSystemTime = " + sSystemTime);
			//System.out.println("sUniquekey = " + sUniquekey);
			//System.out.println("sSystemDate = " + sSystemDate);

			// 시스템시간 => 6자리
			for(int nLoop = 0 ; nLoop < sSystemTime.length() ; nLoop++)
			{
				int nIndex = 0;

				if(nLoop > 1)
				{
					//System.out.println("sSystemDate -> nLoop = " + nLoop + "  [" + sSystemTime.substring(nLoop, nLoop+1) + "]");
					nIndex = Integer.parseInt(sSystemTime.substring(nLoop, nLoop+1)) * nLoop;
				}
				else
				{
					nIndex = Integer.parseInt(sSystemTime.substring(nLoop, nLoop+1));
				}

				nIndex = nIndex % 36;

				sEnckey += sUniquekey.substring(nIndex, nIndex + 1);
			}
			//System.out.println("sSystemDate -> sEnckey =" + sEnckey);

			// 시스템일자 => 8자리
			for(int nLoop = 0 ; nLoop < sSystemDate.length() ; nLoop++)
			{
				int nIndex = 0;

				if(nLoop > 1)
				{
					//System.out.println("sSystemDate -> nLoop = " + nLoop + "  [" + sSystemDate.substring(nLoop, nLoop+1) + "]");
					nIndex = Integer.parseInt(sSystemDate.substring(nLoop, nLoop+1)) * nLoop;
				}
				else
				{
					nIndex = Integer.parseInt(sSystemDate.substring(nLoop, nLoop+1));
				}
				nIndex += 20;
				nIndex = nIndex % 36;

				sEnckey += sUniquekey.substring(nIndex, nIndex + 1);
			}
			//System.out.println("sSystemDate -> sEnckey =" + sEnckey);

			sEnckey = sEnckey + sSystemTime.substring(5, 6) + sSystemDate.substring(7, 8);

			//System.out.println("sEnckey =" + sEnckey);
		}
		catch(Exception e)
		{
			if(skeyData.length() >= 16)
			{
				sEnckey = skeyData.substring(0, 16);
			}
			else
			{
				sEnckey = "0001000100010001";
			}
		}

		return sEnckey;
	}

	//**************************************************************************
	// 고유키 얻음 
	//**************************************************************************
	public static String GeUniquekey(String skeyData)
	{
		String sUniquekey = "AEGC-EDSG-HIJK-UNXY-KK87-M234-2UNH-Z";

		try
		{
			if(skeyData.length() != 50)
			{
				return sUniquekey;
			}

			sUniquekey = skeyData.substring(6, 42);
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}

		return sUniquekey;
	}


	//**************************************************************************
	// 고유키 얻음 
	//**************************************************************************
	public static String GekeyData(String sUniquekey)
	{
		String skeyData = "";

		try
		{
			// 시스템 일자 / 시간
			Calendar cToday = Calendar.getInstance();
			SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd", Locale.KOREA);
			String sSystemDate = sdf.format(cToday.getTime());

			sdf = new SimpleDateFormat("HHmmss", Locale.KOREA);
			String sSystemTime = sdf.format(cToday.getTime());

			// key Data
			skeyData = sSystemTime + sUniquekey + sSystemDate;
		}
		catch(Exception e)
		{
			skeyData = "231212" + "AEGC-EDSG-HIJK-UNXY-KK87-M234-2UNH-Z" + "20151223";
		}

		return skeyData;
	}

	public static void main(String [] args) throws Exception 
	{
		//System.out.println("test_len2=[" + IC_AES_Base64_Encrypt("1234") + "]"); 
	}
}

