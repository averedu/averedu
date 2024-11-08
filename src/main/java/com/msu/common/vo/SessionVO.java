package com.msu.common.vo;

import java.io.Serializable;

/**
 * 세션 VO 클래스
 * @author 공통서비스 개발팀 박지욱
 * @since 2009.03.06
 * @version 1.0
 * @see
 *  
 * <pre>
 * << 개정이력(Modification Information) >>
 * 
 *   수정일      수정자          수정내용
 *  -------    --------    ---------------------------
 *  2021.07.13  jiback          최초 생성 
 *  
 *  </pre>
 */
public class SessionVO implements Serializable {
	
	
	/** 사용자ID **/
	private String userId;

	/** 사용자명 **/
	private String userNm;

	/** 패스워드 **/
	private String userPw;

	/** 권한코드 **/
	private String authCd;

	/** 부서 **/
	private String dept;

	/** 전화번호 **/
	private String telNo;

	/** 핸드폰번호 **/
	private String hpNo;

	/** 이메일 **/
	private String email;
	
	/** IP 주소 **/
	private String ipAddress;
	
	/** 사용자 구분 코드 **/
	private String userGbcd;
	
	/** 직원 구분 코드 **/
	private String jikjongGbcd;
	
	/** 직급 구분 코드 **/
	private String jikgeupGbcd;
	
	public String getUserId() {
	  return userId;
	}

	public void setUserId(String userId) {
	  this.userId = userId;
	}

	public String getUserNm() {
	  return userNm;
	}

	public void setUserNm(String userNm) {
	  this.userNm = userNm;
	}

	public String getUserPw() {
	  return userPw;
	}

	public void setUserPw(String userPw) {
	  this.userPw = userPw;
	}

	public String getAuthCd() {
	  return authCd;
	}

	public void setAuthCd(String authCd) {
	  this.authCd = authCd;
	}

	public String getDept() {
	  return dept;
	}

	public void setDept(String dept) {
	  this.dept = dept;
	}

	public String getTelNo() {
	  return telNo;
	}

	public void setTelNo(String telNo) {
	  this.telNo = telNo;
	}

	public String getHpNo() {
	  return hpNo;
	}

	public void setHpNo(String hpNo) {
	  this.hpNo = hpNo;
	}

	public String getEmail() {
	  return email;
	}

	public void setEmail(String email) {
	  this.email = email;
	}
	
	public String getIpAddress() {
		return ipAddress;
	}

	public void setIpAddress(String ipAddress) {
		this.ipAddress = ipAddress;
	}

	public String getUserGbcd() {
		return userGbcd;
	}

	public void setUserGbcd(String userGbcd) {
		this.userGbcd = userGbcd;
	}

	public String getJikjongGbcd() {
		return jikjongGbcd;
	}

	public void setJikjongGbcd(String jikjongGbcd) {
		this.jikjongGbcd = jikjongGbcd;
	}

	public String getJikgeupGbcd() {
		return jikgeupGbcd;
	}

	public void setJikgeupGbcd(String jikgeupGbcd) {
		this.jikgeupGbcd = jikgeupGbcd;
	}
}
