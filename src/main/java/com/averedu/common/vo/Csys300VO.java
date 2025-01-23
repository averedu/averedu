package com.averedu.common.vo;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

public class Csys300VO {

	private String gridNm;
	private String deptCd;
	private String upDeptCd;
	private String eptGrpFgCd;
	private String deptTypCd;
	private String univCd;
	private String psustCd;
	private String deptNm;
	private String deptAbbnm;
	private String shafFormaYn;
	private String danFg;
	@JsonFormat(pattern = "yyyy-MM-dd")
	private Date frDt;
	@JsonFormat(pattern = "yyyy-MM-dd")
	private Date blnDt;
	@JsonFormat(pattern = "yyyy-MM-dd")
	private Date ablnExpcDt;
	private String prnOrd;
	private String cyberFormaYn;
	private String useYn;
	private String flDeptYn;
	private String remk;
	private String campFgCd;
	private String lastModfIpBreuFg;
	private String formaTyp;
	private String deptEngNm;
	private String deptEngAbbNm;
	private String deptChnAbbNm;
	private String deptId;
	private String colgNm;
	private String sustTeamNm;
	private String certDeptNm;
	private String daytmSustCd;
	private String infoAnncPart;
	
	private String shafDegr;
	private String masterDegr;
	private String phdDegr;
	private String connMj;
	private String achvPart;
	private String phdDegrMjClsf;
	private String connMjAchvPart;
	private String regPart;
	private String rdtDegrIdcdPrnNm;
	private String achvScrnUniv;
	private String grscClsf;
	private String sustNm;
	private String sprfGwDeptCd;
	private String empGwDeptCd;
	private String deptSortSeq;
	private String gwDeptConnYn;
	private String subChancMissCd;
	private String breuFg;
	private String mjClsf;
	private int treeLevel;
	 
	   private String deptGrpFgCd;
	
	   private String sustCd;
	   // 부서이름

	   // 부서주소
	   private Date ablnDt;

	   private String frstInputId;
	   private Date frstInputDt;
	   private String frstInputMenuId;
	   private String frstInputIp;
	   private String lastModfId;
	   private Date lastModfDt;
	   private String lastModfMenuId;

	   private String deptChnNm;

	   private String grdtDegrIdcdPrnNm;
	   private String lsnYr;
	   private String bfDeptCd;
	   private String afDeptCd;
	   
	   
	   
	public int getTreeLevel() {
		return treeLevel;
	}
	public void setTreeLevel(int treeLevel) {
		this.treeLevel = treeLevel;
	}
	public String getDeptGrpFgCd() {
		return deptGrpFgCd;
	}
	public void setDeptGrpFgCd(String deptGrpFgCd) {
		this.deptGrpFgCd = deptGrpFgCd;
	}
	public String getSustCd() {
		return sustCd;
	}
	public void setSustCd(String sustCd) {
		this.sustCd = sustCd;
	}
	public Date getAblnDt() {
		return ablnDt;
	}
	public void setAblnDt(Date ablnDt) {
		this.ablnDt = ablnDt;
	}
	public String getFrstInputId() {
		return frstInputId;
	}
	public void setFrstInputId(String frstInputId) {
		this.frstInputId = frstInputId;
	}
	public Date getFrstInputDt() {
		return frstInputDt;
	}
	public void setFrstInputDt(Date frstInputDt) {
		this.frstInputDt = frstInputDt;
	}
	public String getFrstInputMenuId() {
		return frstInputMenuId;
	}
	public void setFrstInputMenuId(String frstInputMenuId) {
		this.frstInputMenuId = frstInputMenuId;
	}
	public String getFrstInputIp() {
		return frstInputIp;
	}
	public void setFrstInputIp(String frstInputIp) {
		this.frstInputIp = frstInputIp;
	}
	public String getLastModfId() {
		return lastModfId;
	}
	public void setLastModfId(String lastModfId) {
		this.lastModfId = lastModfId;
	}
	public Date getLastModfDt() {
		return lastModfDt;
	}
	public void setLastModfDt(Date lastModfDt) {
		this.lastModfDt = lastModfDt;
	}
	public String getLastModfMenuId() {
		return lastModfMenuId;
	}
	public void setLastModfMenuId(String lastModfMenuId) {
		this.lastModfMenuId = lastModfMenuId;
	}
	public String getDeptChnNm() {
		return deptChnNm;
	}
	public void setDeptChnNm(String deptChnNm) {
		this.deptChnNm = deptChnNm;
	}
	public String getGrdtDegrIdcdPrnNm() {
		return grdtDegrIdcdPrnNm;
	}
	public void setGrdtDegrIdcdPrnNm(String grdtDegrIdcdPrnNm) {
		this.grdtDegrIdcdPrnNm = grdtDegrIdcdPrnNm;
	}
	public String getLsnYr() {
		return lsnYr;
	}
	public void setLsnYr(String lsnYr) {
		this.lsnYr = lsnYr;
	}
	public String getBfDeptCd() {
		return bfDeptCd;
	}
	public void setBfDeptCd(String bfDeptCd) {
		this.bfDeptCd = bfDeptCd;
	}
	public String getAfDeptCd() {
		return afDeptCd;
	}
	public void setAfDeptCd(String afDeptCd) {
		this.afDeptCd = afDeptCd;
	}
	public String getGridNm() {
		return gridNm;
	}
	public void setGridNm(String gridNm) {
		this.gridNm = gridNm;
	}
	public String getDeptCd() {
		return deptCd;
	}
	public void setDeptCd(String deptCd) {
		this.deptCd = deptCd;
	}
	public String getUpDeptCd() {
		return upDeptCd;
	}
	public void setUpDeptCd(String upDeptCd) {
		this.upDeptCd = upDeptCd;
	}
	public String getEptGrpFgCd() {
		return eptGrpFgCd;
	}
	public void setEptGrpFgCd(String eptGrpFgCd) {
		this.eptGrpFgCd = eptGrpFgCd;
	}
	public String getDeptTypCd() {
		return deptTypCd;
	}
	public void setDeptTypCd(String deptTypCd) {
		this.deptTypCd = deptTypCd;
	}
	public String getUnivCd() {
		return univCd;
	}
	public void setUnivCd(String univCd) {
		this.univCd = univCd;
	}
	public String getPsustCd() {
		return psustCd;
	}
	public void setPsustCd(String psustCd) {
		this.psustCd = psustCd;
	}
	public String getDeptNm() {
		return deptNm;
	}
	public void setDeptNm(String deptNm) {
		this.deptNm = deptNm;
	}
	public String getDeptAbbnm() {
		return deptAbbnm;
	}
	public void setDeptAbbnm(String deptAbbnm) {
		this.deptAbbnm = deptAbbnm;
	}
	public String getShafFormaYn() {
		return shafFormaYn;
	}
	public void setShafFormaYn(String shafFormaYn) {
		this.shafFormaYn = shafFormaYn;
	}
	public String getDanFg() {
		return danFg;
	}
	public void setDanFg(String danFg) {
		this.danFg = danFg;
	}
	public Date getFrDt() {
		return frDt;
	}
	public void setFrDt(Date frDt) {
		this.frDt = frDt;
	}
	public Date getBlnDt() {
		return blnDt;
	}
	public void setBlnDt(Date blnDt) {
		this.blnDt = blnDt;
	}
	public Date getAblnExpcDt() {
		return ablnExpcDt;
	}
	public void setAblnExpcDt(Date ablnExpcDt) {
		this.ablnExpcDt = ablnExpcDt;
	}
	public String getPrnOrd() {
		return prnOrd;
	}
	public void setPrnOrd(String prnOrd) {
		this.prnOrd = prnOrd;
	}
	public String getCyberFormaYn() {
		return cyberFormaYn;
	}
	public void setCyberFormaYn(String cyberFormaYn) {
		this.cyberFormaYn = cyberFormaYn;
	}
	public String getUseYn() {
		return useYn;
	}
	public void setUseYn(String useYn) {
		this.useYn = useYn;
	}
	public String getFlDeptYn() {
		return flDeptYn;
	}
	public void setFlDeptYn(String flDeptYn) {
		this.flDeptYn = flDeptYn;
	}
	public String getRemk() {
		return remk;
	}
	public void setRemk(String remk) {
		this.remk = remk;
	}
	public String getCampFgCd() {
		return campFgCd;
	}
	public void setCampFgCd(String campFgCd) {
		this.campFgCd = campFgCd;
	}
	public String getLastModfIpBreuFg() {
		return lastModfIpBreuFg;
	}
	public void setLastModfIpBreuFg(String lastModfIpBreuFg) {
		this.lastModfIpBreuFg = lastModfIpBreuFg;
	}
	public String getFormaTyp() {
		return formaTyp;
	}
	public void setFormaTyp(String formaTyp) {
		this.formaTyp = formaTyp;
	}
	public String getDeptEngNm() {
		return deptEngNm;
	}
	public void setDeptEngNm(String deptEngNm) {
		this.deptEngNm = deptEngNm;
	}
	public String getDeptEngAbbNm() {
		return deptEngAbbNm;
	}
	public void setDeptEngAbbNm(String deptEngAbbNm) {
		this.deptEngAbbNm = deptEngAbbNm;
	}
	public String getDeptChnAbbNm() {
		return deptChnAbbNm;
	}
	public void setDeptChnAbbNm(String deptChnAbbNm) {
		this.deptChnAbbNm = deptChnAbbNm;
	}
	public String getDeptId() {
		return deptId;
	}
	public void setDeptId(String deptId) {
		this.deptId = deptId;
	}
	public String getColgNm() {
		return colgNm;
	}
	public void setColgNm(String colgNm) {
		this.colgNm = colgNm;
	}
	public String getSustTeamNm() {
		return sustTeamNm;
	}
	public void setSustTeamNm(String sustTeamNm) {
		this.sustTeamNm = sustTeamNm;
	}
	public String getCertDeptNm() {
		return certDeptNm;
	}
	public void setCertDeptNm(String certDeptNm) {
		this.certDeptNm = certDeptNm;
	}
	public String getDaytmSustCd() {
		return daytmSustCd;
	}
	public void setDaytmSustCd(String daytmSustCd) {
		this.daytmSustCd = daytmSustCd;
	}
	public String getInfoAnncPart() {
		return infoAnncPart;
	}
	public void setInfoAnncPart(String infoAnncPart) {
		this.infoAnncPart = infoAnncPart;
	}
	public String getShafDegr() {
		return shafDegr;
	}
	public void setShafDegr(String shafDegr) {
		this.shafDegr = shafDegr;
	}
	public String getMasterDegr() {
		return masterDegr;
	}
	public void setMasterDegr(String masterDegr) {
		this.masterDegr = masterDegr;
	}
	public String getPhdDegr() {
		return phdDegr;
	}
	public void setPhdDegr(String phdDegr) {
		this.phdDegr = phdDegr;
	}
	public String getConnMj() {
		return connMj;
	}
	public void setConnMj(String connMj) {
		this.connMj = connMj;
	}
	public String getAchvPart() {
		return achvPart;
	}
	public void setAchvPart(String achvPart) {
		this.achvPart = achvPart;
	}
	public String getPhdDegrMjClsf() {
		return phdDegrMjClsf;
	}
	public void setPhdDegrMjClsf(String phdDegrMjClsf) {
		this.phdDegrMjClsf = phdDegrMjClsf;
	}
	public String getConnMjAchvPart() {
		return connMjAchvPart;
	}
	public void setConnMjAchvPart(String connMjAchvPart) {
		this.connMjAchvPart = connMjAchvPart;
	}
	public String getRegPart() {
		return regPart;
	}
	public void setRegPart(String regPart) {
		this.regPart = regPart;
	}
	public String getRdtDegrIdcdPrnNm() {
		return rdtDegrIdcdPrnNm;
	}
	public void setRdtDegrIdcdPrnNm(String rdtDegrIdcdPrnNm) {
		this.rdtDegrIdcdPrnNm = rdtDegrIdcdPrnNm;
	}
	public String getAchvScrnUniv() {
		return achvScrnUniv;
	}
	public void setAchvScrnUniv(String achvScrnUniv) {
		this.achvScrnUniv = achvScrnUniv;
	}
	public String getGrscClsf() {
		return grscClsf;
	}
	public void setGrscClsf(String grscClsf) {
		this.grscClsf = grscClsf;
	}
	public String getSustNm() {
		return sustNm;
	}
	public void setSustNm(String sustNm) {
		this.sustNm = sustNm;
	}
	public String getSprfGwDeptCd() {
		return sprfGwDeptCd;
	}
	public void setSprfGwDeptCd(String sprfGwDeptCd) {
		this.sprfGwDeptCd = sprfGwDeptCd;
	}
	public String getEmpGwDeptCd() {
		return empGwDeptCd;
	}
	public void setEmpGwDeptCd(String empGwDeptCd) {
		this.empGwDeptCd = empGwDeptCd;
	}
	public String getDeptSortSeq() {
		return deptSortSeq;
	}
	public void setDeptSortSeq(String deptSortSeq) {
		this.deptSortSeq = deptSortSeq;
	}
	public String getGwDeptConnYn() {
		return gwDeptConnYn;
	}
	public void setGwDeptConnYn(String gwDeptConnYn) {
		this.gwDeptConnYn = gwDeptConnYn;
	}
	public String getSubChancMissCd() {
		return subChancMissCd;
	}
	public void setSubChancMissCd(String subChancMissCd) {
		this.subChancMissCd = subChancMissCd;
	}
	public String getBreuFg() {
		return breuFg;
	}
	public void setBreuFg(String breuFg) {
		this.breuFg = breuFg;
	}
	public String getMjClsf() {
		return mjClsf;
	}
	public void setMjClsf(String mjClsf) {
		this.mjClsf = mjClsf;
	}
}

	
