(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sample002_popup");
            this.set_titletext("ALERT/CONFIRM  메세지창");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">강남구</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">서초구</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">강동구</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">강서구</Col></Row><Row><Col id=\"Column0\">5</Col><Col id=\"Column1\">송파구</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rtn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDummy", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"string\" size=\"32\"/><Column id=\"progId\" type=\"string\" size=\"32\"/><Column id=\"formPath\" type=\"string\" size=\"32\"/><Column id=\"formId\" type=\"string\" size=\"32\"/><Column id=\"formNm\" type=\"string\" size=\"32\"/><Column id=\"userYn\" type=\"string\" size=\"32\"/><Column id=\"regId\" type=\"string\" size=\"32\"/><Column id=\"regDate\" type=\"string\" size=\"32\"/><Column id=\"modId\" type=\"string\" size=\"32\"/><Column id=\"modDate\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"uiId\" type=\"STRING\" size=\"32\"/><Column id=\"formPath\" type=\"STRING\" size=\"256\"/><Column id=\"formId\" type=\"STRING\" size=\"256\"/><Column id=\"formNm\" type=\"STRING\" size=\"256\"/><Column id=\"userYn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"uiId\"/><Col id=\"formPath\"/><Col id=\"formId\"/><Col id=\"formNm\"/><Col id=\"userYn\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGUseYn", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"classId\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"code\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"seq\" type=\"bigdecimal\" size=\"16\" prop=\"\"/><Column id=\"codeNm\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"codeSht\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"userRef1\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"userRef2\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"userRef3\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"useChk\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"regId\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"regDate\" type=\"date\" size=\"6\" prop=\"\"/><Column id=\"modId\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"modDate\" type=\"date\" size=\"6\" prop=\"\"/><Column id=\"sn\" type=\"bigdecimal\" size=\"16\" prop=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGPrefix", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"classId\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"code\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"seq\" type=\"bigdecimal\" size=\"16\" prop=\"\"/><Column id=\"codeNm\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"codeSht\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"userRef1\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"userRef2\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"userRef3\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"useChk\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"regId\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"regDate\" type=\"date\" size=\"6\" prop=\"\"/><Column id=\"modId\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"modDate\" type=\"date\" size=\"6\" prop=\"\"/><Column id=\"sn\" type=\"bigdecimal\" size=\"16\" prop=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"string\" size=\"32\"/><Column id=\"progId\" type=\"string\" size=\"32\"/><Column id=\"formPath\" type=\"string\" size=\"32\"/><Column id=\"formId\" type=\"string\" size=\"32\"/><Column id=\"formNm\" type=\"string\" size=\"32\"/><Column id=\"userYn\" type=\"string\" size=\"32\"/><Column id=\"regId\" type=\"string\" size=\"32\"/><Column id=\"regDate\" type=\"string\" size=\"32\"/><Column id=\"modId\" type=\"string\" size=\"32\"/><Column id=\"modDate\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnConfirm","240","103","250","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("confirm");
            obj.set_font("bold 20pt/normal \"Helvetica\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnAlert","7","103","225","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("alert");
            obj.set_font("bold 20pt/normal \"Helvetica\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","5","6",null,"44","5",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("각종: alert/confirm/(gfn_alert/gfn_confirm)/gfn_msg(alert+confirm)");
            obj.set_textAlign("center");
            obj.set_background("#f80626");
            obj.set_color("#ffffff");
            obj.set_font("bold 18px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","5","55",null,"40","5",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("※ 기본샘풀(일반) ");
            obj.set_textAlign("left");
            obj.set_background("cadetblue");
            obj.set_font("bold 14px/normal \"Gulim\"");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","5","255",null,"40","5",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("※ 개선샘풀(gfn_alert/gfn_confirm => 일반 alert/confirm메세지를 DB기준으로 메세지처리(파라미터처리)  )");
            obj.set_textAlign("left");
            obj.set_background("cadetblue");
            obj.set_font("bold 14px/normal \"Gulim\"");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","5","480",null,"40","5",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("※ 팝업창을 이용한 메세지 처리(gfn_msg=> 일반 alert/confirm메세지를 DB기준으로 메세지처리(파라미터처리)  )");
            obj.set_textAlign("left");
            obj.set_background("cadetblue");
            obj.set_font("bold 14px/normal \"Gulim\"");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Button("btnGfnAlert","6","301","225","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("gfn_alert");
            obj.set_font("bold 20pt/normal \"Helvetica\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnGfnConfirm","239","301","250","40",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("gfn_confirm");
            obj.set_font("bold 20pt/normal \"Helvetica\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnMsgAlert","7","527","225","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("gfn_msg(Alert)");
            obj.set_font("bold 20pt/normal \"Helvetica\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnMsgConfirm","240","527","250","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("gfn_msg(Confirm)");
            obj.set_font("bold 20pt/normal \"Helvetica\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","6","150",null,"100","824",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("- this.alert(\"저장할수없습니다.\",\"테스트\",\"information\");\r\n- 메세지값,타이틀,이미지표시\r\n  > 메세지내용.\r\n  > 메세지 제목(타이틀) html5에서는 적용않됨.\r\n  > 이미지표시4(\"error\": \"X\"/\"question\":(\"?\")\r\n                            /\"warning\":(\"!\")/\"information\":(\"!\") 모양표시");
            obj.set_textAlign("left");
            obj.set_background("#351ee0");
            obj.set_font("bold 13px/normal \"Gulim\"");
            obj.set_color("#ffffff");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","6","350",null,"125","824",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("this.gfn_alert(\"MSG00001\",\"팝업입니다\",\"하나,둘,셋\",\"warning\");\r\n1.번째인자: 메세지테이블에 메세지코드\r\n2.번째인자: 메세지타이틀 직접입력(문자열) (HTML5적용않됨)\r\n3.번째인자: {#1}:파라미터인자값 {#2}두번째 파라미터인자값(최대6개까지가능)\r\n4.번째인자: 메세지 타입(HTML5적용않됨.");
            obj.set_textAlign("left");
            obj.set_background("#351ee0");
            obj.set_font("bold 13px/normal \"Gulim\"");
            obj.set_color("#ffffff");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","6","573",null,null,"824","20",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("this.gfn_msg(\"MSG00001\",\"1,2,3\",\"fn_msgCallback\",\"gfn_alert\");\r\n1.번째인자: 문자/DB메세지코드(메제지내용)\r\n2.번째인자: {#1}기준으로 문자/인자값코드(컴포넌트) {#1},{#2}두개의 인자값.\r\n3.번째인자: callBack 메세지처리후 후처리함수.\r\n4.번째인자: callBack 메세지에 처리한 후처러 서비스별ID 팝업인자 값 \r\n- 팝의을 이용해서 따로 메세지 ALERT만든것임 \r\n- DB기준의 \"OK\".이면 ALERT/ YESNO이면 CONFIRM 메세지 ");
            obj.set_textAlign("left");
            obj.set_background("#351ee0");
            obj.set_font("bold 13px/normal \"Gulim\"");
            obj.set_color("#ffffff");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","Static05:8","573",null,null,"6","19",null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("this.gfn_msg(\"MSG00001\",\"1,2,3\",\"fn_msgCallback\",\"gfn_confirm\");\r\n1.번째인자: 문자/DB메세지코드(메제지내용)\r\n2.번째인자: {#1}기준으로 문자/인자값코드(컴포넌트) {#1},{#2}두개의 인자값.\r\n3.번째인자: callBack 메세지처리후 후처리함수.\r\n4.번째인자: callBack 메세지에 처리한 후처러 서비스별ID 팝업인자 값 \r\n- 팝의을 이용해서 따로 메세지 ALERT만든것임 \r\n- DB기준의 \"OK\".이면 ALERT/ YESNO이면 CONFIRM 메세지 ");
            obj.set_textAlign("left");
            obj.set_background("#351ee0");
            obj.set_font("bold 13px/normal \"Gulim\"");
            obj.set_color("#ffffff");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","Static04:8","350",null,"125","6",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("this.gfn_confirm(\"MSG00001\",\"팝업입니다\",\"1,2,3\",\"information\");\r\n1.번째인자: 메세지테이블에 메세지코드(HTML5적용않됨)\r\n2.번째인자: 메세지타이틀 직접입력(문자열)\r\n3.번째인자: {#1}:파라미터인자값 {#2}두번째 파라미터인자값(최대6개까지가능)\r\n4.번째인자: 메세지 타입(HTML5적용않됨.");
            obj.set_textAlign("left");
            obj.set_background("#351ee0");
            obj.set_font("bold 13px/normal \"Gulim\"");
            obj.set_color("#ffffff");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","Static00:8","149",null,"101","6",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("- this.confirm(\"저장할수없습니다.\",\"테스트\",\"information\");\r\n- 메세지값,타이틀,이미지표시\r\n  > 메세지내용.\r\n  > 메세지 제목(타이틀) html5에서는 적용않됨.\r\n  > 이미지표시4(\"error\": \"X\"/\"question\":(\"?\")\r\n                            /\"warning\":(\"!\")/\"information\":(\"!\") 모양표시");
            obj.set_textAlign("left");
            obj.set_background("#351ee0");
            obj.set_font("bold 13px/normal \"Gulim\"");
            obj.set_color("#ffffff");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsDummy");
            this._addPreloadList("data","","dsMaster");
            this._addPreloadList("data","","dsList");
        };
        
        // User Script
        this.registerScript("SML015AlertConfirmMessageM01.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): SAMPLE004.xfdl(Alert/Confirm)
        * 작 성			일 명: jiback
        * 작 성	    	일 자: 2018/09/11
        * 변 경     	일 자:
        * 변 경			자 명:
        * 변경 및 수정 로그 : 일자별로 변경자 및 변경사항을 간략히 기술
        */
        /**********************************************************************
        	01. 전처리 공통 함수 선언
        ***********************************************************************/
        /**********************************************************************
        	02. 폼 변수 정의
        ***********************************************************************/
        /**********************************************************************
        	03. 폼 로드 및 닫을때(폼이 포커스 갈때)
        ***********************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.fn_formInit();
        };
        /**********************************************************************
        	04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        this.fn_formInit = function()
        {

        };

        this.postformInit = function()
        {
        };
        /**********************************************************************
        	03. 폼 로드 및 언로드 선언
        ***********************************************************************/
        /**********************************************************************
        	04. 공통 코드 및 마스터 코드 선언
        ***********************************************************************/
        /**********************************************************************
        	05. 콜백 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {

        	this.gfn_clearSortAll(this.grdList);
        	if(nErrorCode != 0)
        	{
        		this.alert(sErrorMsg);
        		return false;
        	}else
        	{
        		/*sSvcId (Transaction Id)*/
        		switch(sSvcId)
        		{
        			case "Init":
        				this.postformInit();
        				break;
        			default:
        				break;
        		}
        	}
        };

        //메시지콜백 (메세지 후처리: alert,confirm)
        this.fn_msgCallback = function (strId, strVal)
        {
        	switch (strId)
        	{
        		case "gfn_alert":
        			//OK:화면그대로 닫이고 처리됨.
        			break;
        		case "gfn_confirm":
        			//YES:클릭시 true  인자값으로 넘어옮.
        			//NO :클릭시 false 인자값으로 넘어옮.
        			break;
        		default:
        			break;
        	}
        };
        /**********************************************************************
        	06. 조회 함수 선언
        ***********************************************************************/
        /**********************************************************************
        	07. 추가 함수 선언
        ***********************************************************************/
        /**********************************************************************
        	08. 삭제 함수 선언
        ***********************************************************************/
        /**********************************************************************
        	09. 저장 함수 선언
        ***********************************************************************/
        /**********************************************************************
        	10. 출력 함수 선언
        ***********************************************************************/
        /**********************************************************************
        	11. ExcelDnwn 엑셀로 출력
        ***********************************************************************/
        /**********************************************************************
        	12. ExcelUpLoad 엑셀업로드
        ***********************************************************************/
        /**********************************************************************
        	13. Get, Set Method
        ***********************************************************************/
        /**********************************************************************
        	14. 기타 Control Event
        ***********************************************************************/
        /*
         * alert을 처리하는 펑션 테스트
         */
        this.btnAlert_onclick = function(obj,e)
        {
        	this.alert("저장할수없습니다.","테스트","information");
        };

        /*
         * confirm을 처리하는 펑션 테스트
         */
        this.btnConfirm_onclick = function(obj,e)
        {
        	this.confirm("저장하시겠습니까?","테스트","information");
        };

        /*
         * gfn_alert을 처리하는 펑션 테스트
         */
        this.btnGfnAlert_onclick = function(obj,e)
        {
        	this.gfn_alert("MSG00001","팝업입니다","하나,둘,셋","warning");
        };

        /*
         * gfn_confirm을 처리하는 펑션 테스트
         */
        this.btnGfnConfirm_onclick = function(obj,e)
        {
        	this.gfn_confirm("MSG00001","저장하시겠습니까?","1,2,3","information");
        };

        /*
         * gfn_msg(alert)을 처리하는 펑션 테스트
         */
        this.btnMsgAlert_onclick = function(obj,e)
        {
        	var sMsgCd 			= "MSG00001";									// DB:GDS_MESSAGE 메세지코드값(코드값이 못찾을 시 입력한 값이 그대로 표시.디폴트:Information:I)
        	var sMsgParam 		= "1,2,3";                              // "20100816,20100916" 파리미터 인자값 "시작에서 $1이고 끝은 $2입니다. $1,$2이거로 치환됨.
        	var sMsgCallBack 	= "fn_msgCallback";							// 메세지 박스 콜백함수
        	var sMsgSvcId       = "gfn_alert";                              // 콜백함수에 분기처리함.
        	this.gfn_msg(sMsgCd, sMsgParam, sMsgCallBack, sMsgSvcId); 		// 패스워드는 필수항목입니다.
        };
        /*
         * gfn_msg(confirm)을 처리하는 펑션 테스트
         */
        this.btnMsgConfirm_onclick = function(obj,e)
        {
        	var sMsgCd 			= "MSG00002";									// DB:GDS_MESSAGE 메세지코드값(코드값이 못찾을 시 입력한 값이 그대로 표시.디폴트:Information:I)
        	var sMsgParam 		= "이름";                              // "20100816,20100916" 파리미터 인자값 "시작에서 $1이고 끝은 $2입니다. $1,$2이거로 치환됨.
        	var sMsgCallBack 	= "fn_msgCallback";							// 메세지 박스 콜백함수
        	var sMsgSvcId       = "gfn_confirm";                              // 콜백함수에 분기처리함.
        	this.gfn_msg(sMsgCd, sMsgParam, sMsgCallBack, sMsgSvcId); 		// 패스워드는 필수항목입니다.
        };


        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
           // return (this.gfn_isUpdate(this.dsMaster) || this.gfn_isUpdate(this.dsDetail1) || this.gfn_isUpdate(this.dsDetail2));
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnConfirm.addEventHandler("onclick",this.btnConfirm_onclick,this);
            this.btnAlert.addEventHandler("onclick",this.btnAlert_onclick,this);
            this.btnGfnAlert.addEventHandler("onclick",this.btnGfnAlert_onclick,this);
            this.btnGfnConfirm.addEventHandler("onclick",this.btnGfnConfirm_onclick,this);
            this.btnMsgAlert.addEventHandler("onclick",this.btnMsgAlert_onclick,this);
            this.btnMsgConfirm.addEventHandler("onclick",this.btnMsgConfirm_onclick,this);
        };
        this.loadIncludeScript("SML015AlertConfirmMessageM01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
