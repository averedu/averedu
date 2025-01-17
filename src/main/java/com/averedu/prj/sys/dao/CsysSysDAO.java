package com.averedu.prj.sys.dao;
import java.util.List;
import javax.annotation.Resource;
import org.apache.ibatis.session.SqlSessionFactory;
import org.springframework.stereotype.Repository;
import com.averedu.prj.sys.vo.MenuVO;
import egovframework.rte.psl.dataaccess.EgovAbstractMapper;
                                                                                                      
@Repository("CsysSysDAO") 
public class CsysSysDAO extends EgovAbstractMapper{
	
	 @Resource(name = "sqlSession")                                                     
	    public void setSqlSessionFactory(SqlSessionFactory sqlSession) {                                         
	        super.setSqlSessionFactory(sqlSession);                                                              
	    }     
	
	public List<MenuVO> sysMenuList() {
		return selectList("CsysSysDAO.sysMenuList");
	}
}
