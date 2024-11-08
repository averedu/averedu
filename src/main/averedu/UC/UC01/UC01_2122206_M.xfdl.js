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
            this.set_titletext("직무능력성취도관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1630,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsHakgwa", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDaehak", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YYYY\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGyeyeolHakgwa", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBaseYyyyHakgi", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input1", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SUBJECT_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SAWON_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab","0","0","932","226",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Tabpage("hakgwa",this.tab);
            obj.set_text("학과 직무능력성취도");
            this.tab.addChild(obj.name, obj);

            obj = new Button("btnPrint",null,"119","164","25","384",null,null,null,null,null,this.tab.hakgwa.form);
            obj.set_taborder("3");
            obj.set_text("학과 직무능력성취도 출력");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_tabstop("true");
            this.tab.hakgwa.addChild(obj.name, obj);

            obj = new Static("stc_01_00","-13","36","80","22",null,null,null,null,null,null,this.tab.hakgwa.form);
            obj.set_taborder("4");
            obj.set_text("학년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.tab.hakgwa.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","80","36","100","22",null,null,null,null,null,null,this.tab.hakgwa.form);
            obj.set_taborder("0");
            this.tab.hakgwa.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00","-13","63","80","22",null,null,null,null,null,null,this.tab.hakgwa.form);
            obj.set_taborder("5");
            obj.set_text("계열/학과");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.tab.hakgwa.addChild(obj.name, obj);

            obj = new Combo("cboSearchGyeYeolHakGwa","80","63","160","22",null,null,null,null,null,null,this.tab.hakgwa.form);
            obj.set_taborder("1");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_innerdataset("dsGyeyeolHakgwa");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.tab.hakgwa.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","1","1","250","35",null,null,null,null,null,null,this.tab.hakgwa.form);
            obj.set_taborder("6");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.hakgwa.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","70","29","10","67",null,null,null,null,null,null,this.tab.hakgwa.form);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.hakgwa.addChild(obj.name, obj);

            obj = new Static("StaticLeft01","399","453","10","67",null,null,null,null,null,null,this.tab.hakgwa.form);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.hakgwa.addChild(obj.name, obj);

            obj = new Static("StaticLeft01_00","-1","-7","10","187",null,null,null,null,null,null,this.tab.hakgwa.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.hakgwa.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_02","-4","58","260","5",null,null,null,null,null,null,this.tab.hakgwa.form);
            obj.set_taborder("10");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 6pt/normal \"Arial\"");
            this.tab.hakgwa.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","351","144","250","45",null,null,null,null,null,null,this.tab.hakgwa.form);
            obj.set_taborder("11");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.hakgwa.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","1","84","620","35",null,null,null,null,null,null,this.tab.hakgwa.form);
            obj.set_taborder("2");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.hakgwa.addChild(obj.name, obj);

            obj = new Tabpage("daehak",this.tab);
            obj.set_text("대학 직무능력성취도");
            this.tab.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_01","436","472","210","10",null,null,null,null,null,null,this.tab.daehak.form);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.daehak.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","1232","121","10","67",null,null,null,null,null,null,this.tab.daehak.form);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.daehak.addChild(obj.name, obj);

            obj = new Button("btnPrint",null,"119","164","25","384",null,null,null,null,null,this.tab.daehak.form);
            obj.set_taborder("1");
            obj.set_text("대학 직무능력성취도 출력");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_tabstop("true");
            this.tab.daehak.addChild(obj.name, obj);

            obj = new Static("stc_01_00","-13","36","80","22",null,null,null,null,null,null,this.tab.daehak.form);
            obj.set_taborder("4");
            obj.set_text("학년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.tab.daehak.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","80","36","100","22",null,null,null,null,null,null,this.tab.daehak.form);
            obj.set_taborder("0");
            this.tab.daehak.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","1","1","250","35",null,null,null,null,null,null,this.tab.daehak.form);
            obj.set_taborder("5");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.daehak.addChild(obj.name, obj);

            obj = new Static("StaticLeft01_00","-1","-7","10","187",null,null,null,null,null,null,this.tab.daehak.form);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.daehak.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","351","144","250","45",null,null,null,null,null,null,this.tab.daehak.form);
            obj.set_taborder("7");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.daehak.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","1","57","620","62",null,null,null,null,null,null,this.tab.daehak.form);
            obj.set_taborder("8");
            obj.set_text("↑\r\n62\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.daehak.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1630,800,this,function(p){});
            obj.set_description("직무능력성취도관리");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item63","tab","enable","dsBindableTab","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","tab.hakgwa.form.spnSearchYYYY","value","dsHakgwa","YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","tab.hakgwa.form.cboSearchGyeYeolHakGwa","value","dsHakgwa","DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","tab.daehak.form.spnSearchYYYY","value","dsDaehak","YYYY");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsHakgwa");
        };
        
        // User Script
        this.registerScript("UC01_2122206_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UC01_2122206_M.xfdl(직무능력성취도관리)
        * 작 성         일 명: jiback
        * 작 성         일 자: 2021/02/18
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
            //사용자 화면  초기화 함수
            this.fn_formInit();
        };

        /**********************************************************************
                04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        this.fn_formInit = function()
        {
        	// 기준연도학기
            strDs    = "dsBaseYyyyHakgi";        // 데이터를 받을 데이터셋리스트     예) "dsBaseYyyyHakgi"
            svcId    = "baseYyyyHakgiInit";
        	var strEopmuGbcd = "UL";
        	var strUseYn     = "1";
            // gfn_BaseYyyyHakgiLoad(데이터셋, svcId , 업무구분, 사용구분);
            // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.gfn_BaseYyyyHakgiLoad(strDs
                                      , svcId
                                      , strEopmuGbcd
                                      , strUseYn);


        	// gfn_HakgwaComboLoad(데이터셋, 콤보 옵션)
        	// 학과콤보
        	strComb     = "T";
        	svcId       = "gyeyeolHakgwaInit";
        	strUseYn    = "1"; // 사용 여부
        	strJojikGbcd = "20";  // 조직구분 10.행정조직   20.학사조직   30.입시조직

        	this.gfn_GyeyeolHakgwaComboLoad(this.tab.hakgwa.form.cboSearchGyeYeolHakGwa, strComb, svcId, strUseYn, strJojikGbcd, objApp.gv_cutPrgId);
        };

        this.fn_PostBaseYyyyHakgiInit = function()
        {
        	if (this.dsBaseYyyyHakgi.rowcount > 0) {
        		this.dsHakgwa.setColumn(0,"YYYY",  this.dsBaseYyyyHakgi.getColumn(0, "YYYY"));
        		this.dsDaehak.setColumn(0,"YYYY",  this.dsBaseYyyyHakgi.getColumn(0, "YYYY"));
        	}
        };

        this.fn_PostGyeyeolHakgwaInit = function()
        {
        	this.tab.hakgwa.form.cboSearchGyeYeolHakGwa.set_index(0);
        };

        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {
            if(nErrorCode != 0)
            {
                this.gfn_alert(sErrorMsg,"에러정보","","error");
                return false;
            }else
            {
                /*sSvcId (Transaction Id)*/
                switch(sSvcId)
                {
        			case "baseYyyyHakgiInit":
        					this.fn_PostBaseYyyyHakgiInit();
        			    break;
        			case "gyeyeolHakgwaInit":
        					this.fn_PostGyeyeolHakgwaInit();
        			    break;
                    default:
                        break;
                }
            }
        };

        /**********************************************************************
                10. 기타 Control Event
        ***********************************************************************/
        // 학과 직무능력성취도 출력
        this.tab_hakgwa_btnPrint_onclick = function(obj,e)
        {
        	if(this.dsHakgwa.getColumn(this.dsHakgwa.rowposition, "YYYY") == null || this.dsHakgwa.getColumn(this.dsHakgwa.rowposition, "YYYY") == "")
        	{
        		this.gfn_alert("학년도를 입력해주세요.","저장정보","","question");
        		return false;
        	}

        	if(this.dsHakgwa.getColumn(this.dsHakgwa.rowposition, "DEPT_CD") == null || this.dsHakgwa.getColumn(this.dsHakgwa.rowposition, "DEPT_CD") == "")
        	{
        		this.gfn_alert("학과를 선택해주세요.","저장정보","","question");
        		return false;
        	}

        	var YYYY    = this.dsHakgwa.getColumn(this.dsHakgwa.rowposition, 'YYYY');
        	var DEPT_CD = this.dsHakgwa.getColumn(this.dsHakgwa.rowposition, 'DEPT_CD');

        	var param = { YYYY 		: YYYY
        				, DEPT_CD 	: DEPT_CD
        				};

        	this.gfn_commonUtils_report('UC01/UC01_2122206_M_01.crf',  param);
        };

        // 대학 직무능력성취도 출력
        this.tab_daehak_btnPrint_onclick = function(obj,e)
        {
        	if(this.dsDaehak.getColumn(this.dsHakgwa.rowposition, "YYYY") == null)
        	{
        		this.gfn_alert("학년도를 입력해주세요.","저장정보","","question");
        		return false;
        	}

        	var YYYY    = this.dsDaehak.getColumn(this.dsDaehak.rowposition, 'YYYY');

        	var param = { YYYY 	: YYYY
        				};

        	this.gfn_commonUtils_report('UC01/UC01_2122206_M_01.crf',  param);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.tab.addEventHandler("onchanged",this.tab_onchanged,this);
            this.tab.hakgwa.form.btnPrint.addEventHandler("onclick",this.tab_hakgwa_btnPrint_onclick,this);
            this.tab.hakgwa.form.cboSearchGyeYeolHakGwa.addEventHandler("onlbuttondown",this.divM_cboSearchGyeYeolHakGwa_onlbuttondown,this);
            this.tab.hakgwa.form.cboSearchGyeYeolHakGwa.addEventHandler("onitemchanged",this.divM_cboSearchGyeYeolHakGwa_onitemchanged,this);
            this.tab.daehak.form.btnPrint.addEventHandler("onclick",this.tab_daehak_btnPrint_onclick,this);
            this.dsDaehak.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
        };
        this.loadIncludeScript("UC01_2122206_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
