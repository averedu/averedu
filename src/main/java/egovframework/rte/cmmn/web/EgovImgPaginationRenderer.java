/*
 * Copyright 2008-2009 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package egovframework.rte.cmmn.web;

import egovframework.rte.ptl.mvc.tags.ui.pagination.AbstractPaginationRenderer;

/**  
 * @Class Name : ImagePaginationRenderer.java
 * @Description : ImagePaginationRenderer Class
 * @Modification Information  
 * @
 * @  수정일      수정자              수정내용
 * @ ---------   ---------   -------------------------------
 * @ 2021.07.13           최초생성
 * 
 * @author 개발프레임웍크 실행환경 개발팀
 * @since 2021.07.13
 * @version 1.0
 * @see
 * 
 *  Copyright (C) by avereduSystem All right reserved.
 */
public class EgovImgPaginationRenderer extends AbstractPaginationRenderer {
	
    /**
    * PaginationRenderer
	* 
    * @see 개발프레임웍크 실행환경 개발팀
    */
	public EgovImgPaginationRenderer() {

		//String strWebDir = "/egovframework.guideprogram.basic/images/egovframework/cmmn/"; // localhost
		String strWebDir = "/###ARTIFACT_ID###/images/egovframework/cmmn/";

		firstPageLabel = "<a href=\"#\" onclick=\"{0}({1}); return false;\">" +
							"<image src='" + strWebDir + "btn_page_pre10.gif' border=0/></a>&#160;"; 
        previousPageLabel = "<a href=\"#\" onclick=\"{0}({1}); return false;\">" +
        						"<image src='" + strWebDir + "btn_page_pre1.gif' border=0/></a>&#160;";
        currentPageLabel = "<strong>{0}</strong>&#160;";
        otherPageLabel = "<a href=\"#\" onclick=\"{0}({1}); return false;\">{2}</a>&#160;";
        nextPageLabel = "<a href=\"#\" onclick=\"{0}({1}); return false;\">" +
        					"<image src='" + strWebDir + "btn_page_next10.gif' border=0/></a>&#160;";
        lastPageLabel = "<a href=\"#\" onclick=\"{0}({1}); return false;\">" +
        					"<image src='" + strWebDir + "btn_page_next1.gif' border=0/></a>&#160;";
	}
}
