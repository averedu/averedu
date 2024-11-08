(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("form");
            this.set_titletext("동일과목처리이력");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMaster", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHG_GBCD\" type=\"STRING\" size=\"1\"/><Column id=\"GROUP_NO\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYOGWAMOK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"GROUP_NM\" type=\"STRING\" size=\"100\"/><Column id=\"SINCHEONG_DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"SINCHEONGJA_ID\" type=\"STRING\" size=\"30\"/><Column id=\"SEONGMYEONG\" type=\"STRING\" size=\"20\"/><Column id=\"SINCHEONG_DT\" type=\"STRING\" size=\"8\"/><Column id=\"SINCHEONG_SAYU\" type=\"STRING\" size=\"1000\"/><Column id=\"GYOGWAMOK_NM\" type=\"STRING\" size=\"200\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GROUP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GYOGWAMOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GYOGWAMOK_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input1", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SABEON_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GYOGWAMOK_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGyogwamok", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","10","45",null,"42","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","16","0","1620","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00","-3","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("그룹명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","42",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","90","0","10","42",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01_00","26","31","1620","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchGroupNm","100","9","150","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_maxlength("33");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","254","9","65","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("과목명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","320","0","10","42",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchGyogwamokCd","329","9","130","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            obj.set_maxlength("3");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01","459","0","10","42",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearchGyogwamok","468","9","22","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_PopSrch");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_00","489","0","10","42",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchGyogwamokNm","499","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_enable("true");
            obj.set_maxlength("66");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00","250","0","27","42",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_09_00","7","99","102","16",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("처리이력목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","10","122","1620",null,null,"10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"신청부서\"/><Cell col=\"1\" text=\"신청자명\"/><Cell col=\"2\" text=\"신청일자\"/><Cell col=\"3\" text=\"신청사유\"/><Cell col=\"4\" text=\"변경구분\"/><Cell col=\"5\" text=\"그룹코드\"/><Cell col=\"6\" text=\"그룹명\"/><Cell col=\"7\" text=\"과목코드\"/><Cell col=\"8\" text=\"과목명\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_NM\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:SEONGMYEONG\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:SINCHEONG_DT\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:SINCHEONG_SAYU\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:CHG_GBCD\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:GROUP_NO\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:GROUP_NM\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:GYOGWAMOK_CD\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:GYOGWAMOK_NM\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","1110","87","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","10","114",null,"8","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","610","0","100","45",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("↑\r\n45\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_05","10","20","220","22",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_Title01");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01","11","37","1620","8",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","1","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_01","0",null,"1640","10",null,"0",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnRet",null,"20","60","25","10",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","139","95",null,"24","1378",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("동일과목처리이력");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item4","divSearch.form.edtSearchGroupNm","value","ds_input","GROUP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.edtSearchGyogwamokCd","value","ds_input","GYOGWAMOK_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtSearchGyogwamokNm","value","ds_input","GYOGWAMOK_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("UL02_2020202_T04.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UL02_2020202_M.xfdl(안내 문구 관리 관리(조회))
        * 작 성         일 명: 홍길동
        * 작 성         일 자: 2021/10/06
        * 변 경         일 자:
        * 변 경         자 명:
        * 변경 및 수정 로그 : 일자별로 변경자 및 변경사항을 간략히 기술
        */
        /**********************************************************************
                01. 전처리 공통 함수 선언
        ***********************************************************************/
        /**********************************************************************
                02. 폼 변수 정의
        ***********************************************************************/
        this.lvchkColidDs   = "";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs = "";
        /**********************************************************************
                03. 폼 로드 및 닫을때(폼이 포커스 갈때)
        ***********************************************************************/
        /**
         * 기능 : 폼 로드 완료후 초기값 Setting
         */
        this.form_onload = function(obj,e)
        {
            //폼에 공통으로 로드시 사용하는 함수.
            this.gfn_formOnload(obj.e);
        };

        /**********************************************************************
                04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {
        	this.gfn_clearSortAll(this.grdMaster);
            if(nErrorCode != 0)
            {
                this.gfn_alert(sErrorMsg,"에러정보","","error");
                return false;
            }else
            {
                /*sSvcId (Transaction Id)*/
                switch(sSvcId)
                {
                    case "Ret":
                            this.fn_PostRet();
                        break;
                    default:
                        break;
                }
            }
        };

        //Popup callback영역
        this.fn_popupCallback = function(strId, strVal)
        {
        	switch(strId)
        	{
        		case "gyogwamokSearch" :						//과목
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.ds_input.set_enableevent(false);
        					this.ds_input.setColumn(0, "GYOGWAMOK_CD", sRtn[0]);
        					this.ds_input.setColumn(0, "GYOGWAMOK_NM", sRtn[1]);
        					this.ds_input.set_enableevent(true);
        				}
        			break;
        		default:
                    break;
        	}
        };

        /**********************************************************************
                05. 조회 함수 선언(마스터 함수)
        ***********************************************************************/
        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_Ret = function()
        {
            var strSvc      = "Ret";
            var strUrl      = "/prj/UL/UL02/RecordRetrieve_2020202_M.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsMaster=dsMaster";
            var strArg      = "";
            var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);
        };

        /**
         * 기능 : 조회 후 실행
         */
        this.fn_PostRet = function()
        {
            this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
        };

        /**********************************************************************
                6. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj,e)
        {
        	this.gfn_gridSort(obj,e);
        };

        //과목명이 바꿧을 때 팝업
        this.divSearch_edtSearchGyogwamokNm_onchanged = function(obj,e)
        {
        	if(this.gfn_isNull(obj.value)){
        			this.ds_input.setColumn(0, "GYOGWAMOK_CD","");
        	} else {
        		if (e.prevalue != e.postvalue)
        		{
        			this.fn_setCallGyogwamokPopup(e.postvalue);
        		}
        	};
        };

        /**********************************************************************
                7. 팝업
        ***********************************************************************/
        // 과목명 팝업
        this.divSearch_btnSearchGyogwamok_onclick = function(obj,e)
        {
        	var gyogwamokCdNm = this.divSearch.form.edtSearchGyogwamokNm.value;
        	this.fn_setCallGyogwamokPopup(gyogwamokCdNm);
        };

        // 과목명
        this.fn_setCallGyogwamokPopup = function(strSearchValue)
        {
        	this.dsGyogwamok.clearData();

        	this.ds_input1.setColumn(this.ds_input1.rowposition, "GYOGWAMOK_CD_NM", strSearchValue);

        	if(!this.gfn_isNull(strSearchValue))
        	{
        		var strSvc 		= "SearchGyogwamok";
        		var strUrl 		= "/prj/com/Retrieve_P03.do";
        		var strInDs  	= "ds_input=ds_input1";
        		var strOutDs 	= "dsGyogwamok=dsMaster";
        		var strArg 		= "";

        		var GBV_MENUID    = objApp.gv_cutPrgId;
        		if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
        		{
        		  strArg = "GBV_MENUID=" + GBV_MENUID + " " + strArg;
        		}

        		var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        		var strASync    = false;			//생략이나 공백일시에는 ASync=true,싱크시는 false로

        		this.gfn_Transaction( strSvc
        							, strUrl
        							, strInDs
        							, strOutDs
        							, strArg
        							, strCallBack
        							, strASync);
        	}

        	if(this.dsGyogwamok.rowcount == 1)
        	{
        		this.divSearch.form.edtSearchGyogwamokCd.set_value(this.dsGyogwamok.getColumn(0,"GYOGWAMOK_CD"));
        		this.divSearch.form.edtSearchGyogwamokNm.set_value(this.dsGyogwamok.getColumn(0,"GYOGWAMOK_NM"));
        	}
        	else
        	{
        		var oArg = {gyogwamokCdNm:strSearchValue};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";
        		this.gfn_openPopup("gyogwamokSearch","com::COMM_P03.xfdl",oArg,sPopupCallBack,oOption);
        	}
        };
        /**********************************************************************
                8. 검색창 엔터키 조회
        ***********************************************************************/
        // 그룹명 엔터
        this.divSearch_edtSearchGroupNm_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"GROUP_NM",obj.value);
        		this.fn_Ret();
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.edtSearchGroupNm.addEventHandler("onkeydown",this.divSearch_edtSearchGroupNm_onkeydown,this);
            this.divSearch.form.btnSearchGyogwamok.addEventHandler("onclick",this.divSearch_btnSearchGyogwamok_onclick,this);
            this.divSearch.form.edtSearchGyogwamokNm.addEventHandler("onchanged",this.divSearch_edtSearchGyogwamokNm_onchanged,this);
            this.divSearch.form.edtSearchGyogwamokNm.addEventHandler("onkeydown",this.divSearch_edtSearchGyogwamokNm_onkeydown,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.stc_05.addEventHandler("onclick",this.stc_05_onclick,this);
            this.btnRet.addEventHandler("onclick",this.fn_Ret,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
        };
        this.loadIncludeScript("UL02_2020202_T04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
