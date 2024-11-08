(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("WorkFrame");
            this.set_background("");
            this.set_color("#f9f9f9");
            this.set_titletext("작업프레임");
            this.set_scrolltype("horizontal");
            if (Form == this.constructor)
            {
                this._setFormPosition(1680,855);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPageAuth", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"USER_ID\"/><Col id=\"MENU_ID\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_Work","20","35",null,null,"20","20",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("WorkFarme");
            obj.set_async("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","0",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0",null,null,"20","0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","20","20",null,null,"20",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static03",null,"20","20",null,"0","20",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Div("div_Title","20","0",null,"35","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_async("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("WorkFrame.xfdl", function() {
        /**********************************************************************
        * FormID(화면    ID명) : workArea.xfdl(작업프레임)
        * 작 성          일 명 : jiback
        * 작 성	          일 자 : 2018/08/25
        * 변 경          일 자 :
        * 변 경          자 명 :
        * 변경 및 수정 로 그  : 일자별로 변경자 및 변경사항을 간략히 기술
        ************************************************************************/
        /**********************************************************************
        	01. 전처리 공통 함수 선언
        ***********************************************************************/
        /**********************************************************************
        	02. 폼 변수 정의
        ***********************************************************************/
        this.pv_winKey;			//업무화면 Key코드
        this.pv_menuId;			//메뉴 ID
        this.pv_programId;   	//프로그램 ID
        this.pv_formUrl;		//업무화면 Url
        this.pv_menuTitle;		//업무화면 Title
        this.pv_menuTitle2;		//업무화면 Title2
        this.pv_menuNmPath;		//메뉴경로
        this.pv_helpUrl;		//도움말 URL
        this.pv_args;
        this.fv_datalog_yn;  	//데이터Log를 저장할지 여부
        this.pv_popFlag;		//팝업유무체크
        /**********************************************************************
        	03. 폼 로드 및 언로드 선언
        ***********************************************************************/
        /*
         *	화면초기화셋팅
         */
        this.workArea_oninit = function(obj,e)
        {

        };
        /**
         * 기능 : 폼 로드 완료후 초기값 Setting
         */
        this.workArea_onload = function(obj,e)
        {
        	if(!this.getOwnerFrame().prmNewOpen)												// 전용부라이저 MDI / HTML5  MDI
        	{
        		this.pv_winKey      = this.getOwnerFrame().arguments["winKey"];
        		this.pv_menuId      = this.getOwnerFrame().arguments["menuId"];
        		this.pv_formUrl     = this.getOwnerFrame().arguments["formId"];
        		this.pv_menuTitle   = this.getOwnerFrame().arguments["menuTitle"];
        		this.pv_menuTitle2  = this.getOwnerFrame().arguments["menuTitle2"];
        		this.pv_menuNmPath  = this.getOwnerFrame().arguments["menuNmPath"];
        		this.pv_programId   = this.getOwnerFrame().arguments["programId"];
        		this.pv_helpUrl	    = this.getOwnerFrame().arguments["helpUrl"];
        		this.pv_args		= this.getOwnerFrame().arguments["args"];
        		this.pv_menuMultiYn = this.getOwnerFrame().arguments["menuMultiYn"];
        		this.fv_datalog_yn  = this.getOwnerFrame().arguments["pInfoflag"];

        		//현재 열리는 메뉴의 권한정보를 가지고 옮.
        		//this.fn_GetWorkFormInfo();

        		this.div_Title.set_url("Frame::WorkTitleFrame.xfdl");
        		if(this.gfn_isNull(this.pv_menuTitle))
        		{
        			this.pv_menuTitle = "";
        		}
        		this.set_titletext(this.pv_menuTitle);

        		objApp.gv_cutPrgId = this.pv_menuId;
        		objApp.gv_cutPrgNm = this.pv_menuTitle;

        		var pv_loadUrl = this.pv_formUrl.indexOf("xfdl?") > 0 ? this.pv_formUrl.substr(0, this.pv_formUrl.indexOf("xfdl?") + 4) : this.pv_formUrl;
        		this.div_Work.set_text(pv_loadUrl + "화면파일이 없습니다.");
        		this.div_Work.set_url(pv_loadUrl);
        		this.div_Work.programId = this.pv_menuId;


        		/*
        		//권한을 처리하는 함수(현재이메뉴에 권한이 뭔지 확인후 클라이언단에서 퀀한을 체크할수 있음)
        		trace(dsPageAuth.saveXML());
        		//권한을 확인할수 있음
        		*/
        		//this.fn_setBtnEnablePro(this.div_Work.form, this.dsPageAuth);

        	}else																						// 모덜러스 팝업을 사용시
        	{

        		this.pv_winKey      = this.getOwnerFrame().prmWinKey;
        		this.pv_menuId      = this.getOwnerFrame().prmMenuId;
        		this.pv_formUrl     = this.getOwnerFrame().prmUrl;
        		this.pv_programId   = this.getOwnerFrame().prmProgramId;
        		this.pv_menuTitle   = this.getOwnerFrame().prmMenuTitle;
        		this.pv_menuTitle2  = this.getOwnerFrame().prmMenuTitle2;
        		this.pv_menuNmPath  = this.getOwnerFrame().prmMenuNmPath;
        		this.pv_args        = this.getOwnerFrame().prmArgs;
        		this.pv_popFlag     = this.getOwnerFrame().prmNewOpen;


        		//현재 열리는 메뉴의 권한정보를 가지고 옮.
        		//this.fn_GetWorkFormInfo();

        		this.div_Title.set_url("Frame::WorkTitleFrame.xfdl");

        		if(this.gfn_isNull(this.pv_menuTitle))
        		{
        			this.pv_menuTitle = "";
        		}

        		this.set_titletext(this.pv_menuTitle);

        		if(system.navigatorname == "nexacro")													// 전용부라이저에 사용
        		{
        			objApp.gv_cutPrgId = this.pv_menuId;
        			objApp.gv_cutPrgNm = this.pv_menuTitle;

        		}else																					// 다른 브라이저에서 사용시 EI/Chrome 등등
        		{
        			window.opener.objApp.gv_cutPrgId = this.pv_menuId;
        			window.opener.objApp.gv_cutPrgNm = this.pv_menuTitle;
        		}
        		var pv_loadUrl = this.pv_formUrl.indexOf("xfdl?") > 0 ? this.pv_formUrl.substr(0, this.pv_formUrl.indexOf("xfdl?") + 4) : this.pv_formUrl;

        		this.div_Work.set_text(pv_loadUrl + "화면파일이 없습니다.");
        		this.div_Work.set_url(pv_loadUrl);
        		this.div_Work.programId = this.pv_menuId;

        		//this.fn_setBtnEnablePro(this.div_Work.form, this.dsPageAuth);

        	}
        };
        /**
         * 기능 : 폼 언로드(닫기전 셋팅)  Setting
         */
        this.workArea_onclose = function(obj,e)
        {

        };

        /**********************************************************************
        	04. 공통 코드 및 마스터 코드 선언
        ***********************************************************************/
        /**********************************************************************
        	05. 콜백 함수 선언
        ***********************************************************************/
        /**********************************************************************
        	06. 조회 함수 선언
        ***********************************************************************/
        /**
         *	서버에 버튼에 관한 권한을 가지고 오는 프로세스
        **/
        this.fn_GetWorkFormInfo = function()
        {
        	this.ds_input.clearData();
        	var nRow = this.ds_input.addRow();

        	if(this.pv_popFlag != true || system.navigatorname == "nexacro")						// 전용부라이저에 사용
        	{
        		this.ds_input.setColumn(nRow,"USER_ID",objApp.gv_userId);

        	}else																					// 다른 브라이저에서 사용시 EI/Chrome 등등
        	{
        		this.ds_input.setColumn(nRow,"USER_ID",window.opener.objApp.gv_userId);
        	}

        	this.ds_input.setColumn(nRow,"MENU_ID",this.pv_menuId);

        	var strSvc      = "AUTH";
            var strUrl      = "/prj/com/RetrieveCommUserBttnAuthList.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsPageAuth=dsPageAuth";
            var strArg      = "";
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = false;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);

        };
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


        /*----------------------------------------------------*/
        // 화면 권한 설정(화면단 버튼 권한 처러부분
        /*----------------------------------------------------*/
        /*
        	컴포넌트 재귀호출 한다
        	아에선언을 않할시 버튼이 풀림
        	선언은 했는데 권한하고 비교할때 같은 권한이 없으면.. 전부 닫임
        **/
        this.fn_setBtnEnablePro = function(comObj, objDs)
        {
        	try{
        			var arrComp = comObj.components;
        			var nLength = arrComp.length;
        			for(var i=0; i < nLength; i++)
        			{
        				var sCompo = arrComp[i];
        				if(sCompo instanceof nexacro.Button)
        				{

        					this.fn_setAuthBtn(sCompo,objDs);
        				}

        				if(sCompo instanceof nexacro.Div || sCompo instanceof nexacro.PopupDiv)
        				{
        					this.fn_setBtnEnablePro(sCompo.form,objDs);             //재귀함수

        				}else if(sCompo instanceof nexacro.Tab)
        				{

        					var nPages = sCompo.tabpages.length;
        					for(var j=0; j<nPages; j++)
        					{

        						this.fn_setBtnEnablePro(sCompo.tabpages[j].form,objDs) //재귀함수
        					}
        				}
        			}

        	}catch(e){
        		trace("errorCode : " + e.name + " / errorMessage : " + e.message);
        	}
        };
        /**
         *	서버에 버튼에 권한에 따라 처리 하는 프로세스(W:쓰기/V:삭제/E:읽기 OR 등록이 없을시 읽기)
        **/
        this.fn_setAuthBtn = function(sCompo,objDs)
        {
        	//trace(objDs.saveXML());
        	var nRow = objDs.findRow("BTTN_NM",sCompo.name);
        	if(nRow >-1)
        	{
        		if(objDs.getColumn(nRow,"BTTN_FG") == "W")
        		{
        			sCompo.set_enable(true);

        		}else if(objDs.getColumn(nRow,"BTTN_FG") == "V")
        		{
        			sCompo.set_visible(false);
        		}else
        		{
        			sCompo.set_enable(false);
        		}
        	}else
        	{
        		sCompo.set_enable(false);
        	}
        };

        // /**
        // 	화면에 타이틀 넣고 싶을 사용하는 프로세스
        // */
        // function workArea_onactivate(obj:Form, e:ActivateEventInfo)
        // {
        // 	objApp.mainframe.set_titletext(pv_menuTitle == null || pv_menuTitle == undefined || pv_menuTitle == "" ? "" : " [ " +pv_menuTitle +" ]" );
        //
        // 	if(gfn_isNull(pv_winKey) == true) return;
        // 	gfn_ActiveForm(pv_winKey);
        // }
        this.workArea_onactivate = function(obj,e)
        {
           objApp.gv_cutPrgId = this.pv_menuId;

        };

        this.fn_setResize = function(obj, nCx, nCy)
        {
         	//this.div_Work.set_height(nCy-20);
         	//this.div_Work.set_width(nCx-20);
        };

        /**
        	화면을 닫을때 필요한 프로세스
        */
        this.fn_setClose = function()
        {
        	if(this.gfn_isNull(this.pv_winKey))
        	{
        		return false;
        	}

        	if(!this.gfn_isNull(this.div_Work.url))
        	{
        		this.close();       //화면닫기
        		this.gfn_FrameOnClose(this.pv_winKey);
        	}

        };
        /**********************************************************************
        	14. 기타 Control Event
        ***********************************************************************/
        /*
         *	화면기본사이즈 제어
         */
        this.workArea_onsize = function(obj,e)
        {
         	this.resetScroll();

        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onsize",this.workArea_onsize,this);
            this.addEventHandler("oninit",this.workArea_oninit,this);
            this.addEventHandler("onload",this.workArea_onload,this);
            this.addEventHandler("onclose",this.workArea_onclose,this);
        };
        this.loadIncludeScript("WorkFrame.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
