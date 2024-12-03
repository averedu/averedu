package com.averedu.common;

import egovframework.rte.cmmn.ria.nexacroplatform.vo.RowType;

public class NPFrmVO implements RowType{
	/** 아이디 */
    private String userIp;
    
    private String userId;
    
    private String userPwd;
    
    private String ssoId;
    
    private String serverIp;
    private String userPgm;
    private String menuId;
    private String sysGb; 

	public String getSysGb() {
		return sysGb;
	}

	public void setSysGb(String sysGb) {
		this.sysGb = sysGb;
	}

	public String getMenuId() {
		return menuId;
	}

	public void setMenuId(String menuId) {
		this.menuId = menuId;
	}

	public String getServerIp() {
		return serverIp;
	}

	public void setServerIp(String serverIp) {
		this.serverIp = serverIp;
	}

	public String getUserPgm() {
		return userPgm;
	}

	public void setUserPgm(String userPgm) {
		this.userPgm = userPgm;
	}

	int rowType;

	public String getUserIp() {
		return userIp;
	}

	public void setUserIp(String userIp) {
		this.userIp = userIp;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getUserPwd() {
		return userPwd;
	}

	public void setUserPwd(String userPwd) {
		this.userPwd = userPwd;
	}

	public int getRowType() {
		return rowType;
	}

	public void setRowType(int rowType) {
		this.rowType = rowType;
	}		
	
	public String getSsoId() {
		return ssoId;
	}

	public void setSsoId(String ssoId) {
		this.ssoId = ssoId;
	}
			
}
