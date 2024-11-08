package egovframework.rte.cmmn.ria.nexacroplatform;

import com.nexacro17.xapi.data.DataTypes;

public class ConvertDataType {
	public static int getPlatformDataType(Object obj) {

		int dataType = DataTypes.STRING;
		if (obj== null) return dataType;
		
		Class clz = obj.getClass();
		
		String typeName = clz.getName();
		
		//System.out.println("type=" + typeName);
		
		if (typeName.equals(String.class.getName())) 
		{
			dataType = DataTypes.STRING;
		
		}else if (typeName.equals(Integer.class.getName())) 
		{
			dataType = DataTypes.INT;
		
		}else if (typeName.equals(Boolean.class.getName())) 
		{
			dataType = DataTypes.INT;
		
		}else if (typeName.equals("java.math.BigDecimal")) 
		{
		
			dataType = DataTypes.BIG_DECIMAL;
		
		}else if (typeName.equals(Double.class.getName())) 
		{
			dataType = DataTypes.FLOAT;
		
		}else if (typeName.equals("java.sql.Timestamp")) 
		{
			dataType = DataTypes.DATE_TIME;
		
		} else if (typeName.equals("oracle.sql.CLOB")) 
		{
			dataType =  DataTypes.STRING;
		
		}else if (typeName.equals("oracle.sql.BLOB")) 
		{
			dataType = DataTypes.BLOB;
		
		}
		
		return dataType;
	}
}
