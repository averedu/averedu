package com.msu.common.upload;

public class FileInfo {
	
	private String fileName;
	private String fileOrgName;
	private String filePath;
	private long fileSize;
	private String fileType;
	
	public String getFileName() {
		return fileName;
	}
	public String getFileOrgName() {
		return fileOrgName;
	}
	public String getFilePath() {
		return filePath;
	}
	public long getFileSize() {
		return fileSize;
	}
	public String getFileType() {
		return fileType;
	}
	
	public void setFileName(String fileName) {
		this.fileName = fileName;
	}
	public void setFileOrgName(String fileOrgName) {
		this.fileOrgName = fileOrgName;
	}
	public void setFilePath(String filePath) {
		this.filePath = filePath;
	}
	public void setFileSize(long fileSize) {
		this.fileSize = fileSize;
	}
	public void setFileType(String fileType) {
		this.fileType = fileType;
	}
	  
}
