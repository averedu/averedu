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
            this.set_titletext("면접 학생 검색 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(900,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMaster", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOMSAENG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOMSAENG_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMasterUpdate", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOMSAENG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"256\"/><Column id=\"SABEON\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult1", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"HYEONJAE_MOJIP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GIGAN_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult2", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CNT\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult3", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CNT\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult4", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"MYEONJEOPHANGMOK_CNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SUM_JEOMSU\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dInput", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMasterUpdate2", this);
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnClose","830","565","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnChoice","765","565","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","10","10",null,"42","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","4","9","70","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("수험번호");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","43",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","75","2","10","37",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00_00","185","6","56","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00","209","9","70","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("학생명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01","280","2","10","37",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchNm","290","9","83","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch","810","7","60","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Crud");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchSuheomNo","84","9","101","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","16","0","770","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01_00","16","31","770","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stRowCnt","10","565","233","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","10","70",null,null,"10","50",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsMaster");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"131\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" text=\"No.\"/><Cell col=\"1\" disptype=\"normal\" text=\"수험번호\"/><Cell col=\"2\" disptype=\"normal\" text=\"성명\"/><Cell col=\"3\" text=\"생년월일\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:SUHEOM_NO\" editmaxlength=\"10\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:SUHEOMSAENG_NM\" editmaxlength=\"100\"/><Cell col=\"3\" text=\"bind:BIRTHDAY\" displaytype=\"normal\" edittype=\"none\" combodataset=\"dsGogyoGyeYeolGbCd\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",900,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_description("면접 학생 검색 팝업");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item3","divSearch.form.edtSearchNm","value","ds_input","SUHEOMSAENG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.edtSearchSuheomNo","value","ds_input","SUHEOM_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
            this._addPreloadList("data","","dsMasterUpdate");
            this._addPreloadList("data","","dsResult1");
            this._addPreloadList("data","","dsResult2");
            this._addPreloadList("data","","dsResult3");
            this._addPreloadList("data","","dsResult4");
        };
        
        // User Script
        this.registerScript("EN04_1010401_P01.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): EN04_1010401_P01.xfdl(면접학생검색팝업)
        * 작 성         일 명: 성연우
        * 작 성         일 자: 2021/04/30
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

        	this.ds_input.setColumn(0, "IPSI_YYYY", this.getOwnerFrame().ipsiYyyy);
        	this.ds_input.setColumn(0, "MOJIP_GBCD", this.getOwnerFrame().mojipGbcd);
        	this.ds_input.setColumn(0, "HAKGWA_CD", this.getOwnerFrame().hakgwaCd);
        	this.ds_input.setColumn(0, "JUYA_GBCD", this.getOwnerFrame().juyaGbcd);
        	this.fn_Ret();
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
        			case "beforUpdate":
        					this.fn_PostBeforeUpdate();
                        break;
        			case "Save":
        					this.close("CLOSE");
        				break;
                    default:
                        break;
                }
            }
        };

        /**********************************************************************
                05. 조회 함수 선언(마스터 함수)
        ***********************************************************************/
        this.btnSearch_onclick = function(obj,e)
        {
        	this.fn_Ret();
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_Ret = function()
        {
            var strSvc      = "Ret";
            var strUrl      = "/prj/EN/EN04/Retrieve_1010401_P01.do";
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
            this.gfn_getRowCount(this.stRowCnt,this.dsMaster);
        };

        /**********************************************************************
                06. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj,e)
        {
            this.gfn_gridSort(obj,e);
        };

        this.btnChoice_onclick = function(obj,e)
        {
        	if(this.dsMaster.rowposition == -1)
        	{
        		this.alert("추가할 학생을 선택해주세요.");
        		return false;
        	}

        	this.ds_dInput.setColumn(0, "IPSI_YYYY", this.dsMaster.getColumn(this.dsMaster.rowposition, "IPSI_YYYY"));
        	this.ds_dInput.setColumn(0, "MOJIP_GBCD", this.dsMaster.getColumn(this.dsMaster.rowposition, "MOJIP_GBCD"));
        	this.ds_dInput.setColumn(0, "HAKGWA_CD", this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKGWA_CD"));
        	this.ds_dInput.setColumn(0, "JUYA_GBCD", this.dsMaster.getColumn(this.dsMaster.rowposition, "JUYA_GBCD"));
        	this.ds_dInput.setColumn(0, "SUHEOM_NO", this.dsMaster.getColumn(this.dsMaster.rowposition, "SUHEOM_NO"));

        	var strSvc      = "beforUpdate";
        	var strUrl      = "/prj/EN/EN04/Retrieve_1010401_P01_BeforeUpdate.do";
        	var strInDs     = "ds_dInput=ds_dInput";
        	var strOutDs    = "dsResult1=dsResult1 ";
        		strOutDs   += "dsResult2=dsResult2 ";
        		strOutDs   += "dsResult3=dsResult3 ";
        		strOutDs   += "dsResult4=dsResult4";
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

        this.fn_PostBeforeUpdate = function()
        {
        	if(this.dsResult1.getColumn(0, "HYEONJAE_MOJIP_YN") != "Y")
        	{
        		this.alert("모집중이 아닙니다");
        		return false;
        	}
        	else if(this.dsResult1.getColumn(0, "MOJIP_GIGAN_YN") != "N")
        	{
        		this.alert("모집기간 중에는 면접대상자를 추가할 수 없습니다.");
        		return false;
        	}
        	else if(this.dsResult2.getColumn(0, "CNT") < 1)
        	{
        		this.alert("면접을 진행하지 않는 학과입니다.");
        		return false;
        	}
        	else if(this.dsResult3.getColumn(0, "CNT") > 0)
        	{
        		this.alert("세부전형코드 값이 없는 학생입니다.");
        		return false;
        	}
        	else if(this.dsResult4.getColumn(0, "MYEONJEOPHANGMOK_CNT") == 0)
        	{
        		this.alert("학과에 등록된 면접항목이 없습니다.");
        		return false;
        	}
        	else if(this.dsResult4.getColumn(0, "SUM_JEOMSU") != 400)
        	{
        		this.alert("학과에 등록된 면접항목의 합계는 400점이 되어야 합니다.");
        		return false;
        	}

        	this.fn_Update();
        }

        this.fn_Update = function()
        {
        	if (this.confirm("선택한 학생들을 면접대상자로 추가합니다."))
        	{
        		for(var i=0; i<this.getOwnerFrame().sabeon.length; i++)
        		{
        			var nRow = this.dsMasterUpdate.addRow();
        			this.dsMasterUpdate.setColumn(nRow, "SABEON" , this.getOwnerFrame().sabeon[i].toString());
        			this.dsMasterUpdate.setColumn(nRow, "IPSI_YYYY" , this.dsMaster.getColumn(this.dsMaster.rowposition, "IPSI_YYYY"));
        			this.dsMasterUpdate.setColumn(nRow, "MOJIP_GBCD" , this.dsMaster.getColumn(this.dsMaster.rowposition, "MOJIP_GBCD"));
        			this.dsMasterUpdate.setColumn(nRow, "SUHEOM_NO" , this.dsMaster.getColumn(this.dsMaster.rowposition, "SUHEOM_NO"));
        			this.dsMasterUpdate.setColumn(nRow, "HAKGWA_CD" , this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKGWA_CD"));
        			this.dsMasterUpdate.setColumn(nRow, "JUYA_GBCD" , this.dsMaster.getColumn(this.dsMaster.rowposition, "JUYA_GBCD"));

        			if(i==0)
        			{
        				var nRow = this.dsMasterUpdate2.addRow();
        				this.dsMasterUpdate2.setColumn(nRow, "IPSI_YYYY" , this.dsMaster.getColumn(this.dsMaster.rowposition, "IPSI_YYYY"));
        				this.dsMasterUpdate2.setColumn(nRow, "MOJIP_GBCD" , this.dsMaster.getColumn(this.dsMaster.rowposition, "MOJIP_GBCD"));
        				this.dsMasterUpdate2.setColumn(nRow, "SUHEOM_NO" , this.dsMaster.getColumn(this.dsMaster.rowposition, "SUHEOM_NO"));
        			}
        		}

        		// 교수별 면접 담당 학생 추가
        		// - 대상자테이블에 있으면 점수테이블에만 추가
        		// - 대상자테이블에 없으면 대상자테이블과 점수테이블에 추가
         		var strSvc      = "Save";
         		var strUrl      = "/prj/EN/EN04/Save_1010401_P01.do";
         		var strInDs     = "dsMasterUpdate=dsMasterUpdate:a ";
         			strInDs    += "dsMasterUpdate2=dsMasterUpdate2:a";
         		var strOutDs    = "";
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
        	}
        }

        this.btnClose_onclick = function(obj,e)
        {
        	this.close("CLOSE");
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.btnChoice.addEventHandler("onclick",this.btnChoice_onclick,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
        };
        this.loadIncludeScript("EN04_1010401_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
