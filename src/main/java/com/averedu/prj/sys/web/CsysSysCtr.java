package com.averedu.prj.sys.web;

import java.util.List;

import javax.annotation.Resource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.averedu.prj.sys.service.CsysSysSvc;
import com.averedu.prj.sys.vo.MenuVO;

@Controller
public class CsysSysCtr {
	Log logger = LogFactory.getLog(this.getClass());

	/** CsyscdSvc */
	@Resource(name = "CsysSysSvc")
	private CsysSysSvc csysSysSvc;
	
	  @RequestMapping(value = "/", method = RequestMethod.GET)
	  public String index() throws Exception{
	      return "redirect:/index";  
	  }
	
	@RequestMapping(value = "/restApi/prj/sys/sysMenuList.do", method=RequestMethod.GET)
	@ResponseBody
	public ResponseEntity<List<MenuVO>> sysMenuList(){
		List<MenuVO> sysMenuList = csysSysSvc.sysMenuList();
		return new ResponseEntity<List<MenuVO>>(sysMenuList, HttpStatus.OK);
		
	}

}
