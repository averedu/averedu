package com.averedu.prj.sys.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Service;
import com.averedu.prj.sys.dao.CsysSysDAO;
import com.averedu.prj.sys.service.CsysSysSvc;
import com.averedu.prj.sys.vo.MenuVO;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("CsysSysSvc")
public class CsysSysSvcImpl extends EgovAbstractServiceImpl implements CsysSysSvc {
	protected Log log = LogFactory.getLog(this.getClass());

	/** csysSysDAO */
	@Resource(name = "CsysSysDAO")
	private CsysSysDAO csysSysDAO;

	@Override
	public List<MenuVO> sysMenuList() {
		try{
			List<MenuVO> sysMenuList = csysSysDAO.sysMenuList();
			return sysMenuList;
		}catch (Exception e){
			log.info("CsysSysSvcImpl.sysMenuList errir : " + e.getMessage());
		}
		return null;
		
	}
	
	
}
