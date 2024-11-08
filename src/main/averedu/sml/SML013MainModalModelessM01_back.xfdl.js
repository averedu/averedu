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
            this.set_titletext("MAINPOPUP");
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
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"32\"/><Column id=\"PROGRM_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PROGRM_FNCT_SE_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PROGRM_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PROGRM_NM\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"REGTR_EMPL_NO\" type=\"STRING\" size=\"32\"/><Column id=\"REG_DTTM\" type=\"DATETIME\" size=\"17\"/><Column id=\"UPDUSR_EMPL_NO\" type=\"STRING\" size=\"32\"/><Column id=\"UPDT_DTTM\" type=\"DATETIME\" size=\"17\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"PROGRM_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PROGRM_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"PROGRM_CD\"/><Col id=\"PROGRM_NM\"/></Row></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"CD_GROUP_CD\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"INDICT_ORDR\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"DTL_CD_ABRV_NM\" type=\"STRING\" size=\"32\"/><Column id=\"RM_CNTNT\" type=\"STRING\" size=\"32\"/><Column id=\"REFRN_1_CNTNT\" type=\"STRING\" size=\"32\"/><Column id=\"REFRN_2_CNTNT\" type=\"STRING\" size=\"32\"/><Column id=\"REFRN_3_CNTNT\" type=\"STRING\" size=\"32\"/><Column id=\"REFRN_4_CNTNT\" type=\"STRING\" size=\"32\"/><Column id=\"REFRN_5_CNTNT\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"REGTR_EMPL_NO\" type=\"STRING\" size=\"32\"/><Column id=\"REG_DTTM\" type=\"DATETIME\" size=\"17\"/><Column id=\"UPDUSR_EMPL_NO\" type=\"STRING\" size=\"32\"/><Column id=\"UPDT_DTTM\" type=\"DATETIME\" size=\"17\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"CD_GROUP_CD\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"INDICT_ORDR\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"DTL_CD_ABRV_NM\" type=\"STRING\" size=\"32\"/><Column id=\"RM_CNTNT\" type=\"STRING\" size=\"32\"/><Column id=\"REFRN_1_CNTNT\" type=\"STRING\" size=\"32\"/><Column id=\"REFRN_2_CNTNT\" type=\"STRING\" size=\"32\"/><Column id=\"REFRN_3_CNTNT\" type=\"STRING\" size=\"32\"/><Column id=\"REFRN_4_CNTNT\" type=\"STRING\" size=\"32\"/><Column id=\"REFRN_5_CNTNT\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"REGTR_EMPL_NO\" type=\"STRING\" size=\"32\"/><Column id=\"REG_DTTM\" type=\"DATETIME\" size=\"17\"/><Column id=\"UPDUSR_EMPL_NO\" type=\"STRING\" size=\"32\"/><Column id=\"UPDT_DTTM\" type=\"DATETIME\" size=\"17\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"32\"/><Column id=\"PROGRM_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PROGRM_FNCT_SE_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PROGRM_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PROGRM_NM\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"REGTR_EMPL_NO\" type=\"STRING\" size=\"32\"/><Column id=\"REG_DTTM\" type=\"DATETIME\" size=\"17\"/><Column id=\"UPDUSR_EMPL_NO\" type=\"STRING\" size=\"32\"/><Column id=\"UPDT_DTTM\" type=\"DATETIME\" size=\"17\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnModal","15","100","490","75",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("모달팝업(default)");
            obj.set_font("bold 20pt/normal \"Helvetica\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnOpen","515","100","495","75",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("모달리스 팝업");
            obj.set_font("bold 20pt/normal \"Helvetica\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","5","6",null,"44","5",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("팝업Modal/Modeless모바일");
            obj.set_textAlign("center");
            obj.set_background("#f80626");
            obj.set_color("#ffffff");
            obj.set_font("bold 18px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnModal01","360","258","145","46",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text(" Modal ");
            obj.set_font("bold 20pt/normal \"Helvetica\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCodeId","15","259","335","46",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCodeNm","514","259","496","46",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCodeId01","15","314","335","46",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnModeless01","360","313","145","46",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Modeless");
            obj.set_font("bold 20pt/normal \"Helvetica\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCodeNm01","514","314","496","46",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","17","370","336","50",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("- 팝업에서 파라미터받음(인자/리스트)");
            obj.set_textAlign("center");
            obj.set_background("cadetblue");
            obj.set_font("bold 14px/normal \"Gulim\"");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","15","185","336","65",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("- 메인에 파라미터보냄 -");
            obj.set_textAlign("center");
            obj.set_background("cadetblue");
            obj.set_font("bold 14px/normal \"Gulim\"");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","14","55","336","40",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("- 기본샘플 -");
            obj.set_textAlign("center");
            obj.set_background("cadetblue");
            obj.set_font("bold 14px/normal \"Gulim\"");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","17","486",null,null,"13","11",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"108\"/><Column size=\"164\"/><Column size=\"75\"/><Column size=\"157\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"화면ID\"/><Cell col=\"2\" text=\"FORM명(한글)\"/><Cell col=\"3\" text=\"PREFIX\"/><Cell col=\"4\" text=\"FORMID\"/><Cell col=\"5\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"1\" text=\"bind:PROGRM_CD\" displaytype=\"normal\" edittype=\"text\" expandshow=\"show\" expandsize=\"30\" expandimage=\"url(&apos;theme://images/btn_WF_PopSrch.png&apos;)\" editautoselect=\"true\"/><Cell col=\"2\" text=\"bind:PROGRM_NM\" displaytype=\"text\" edittype=\"none\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:PROGRM_FNCT_SE_CD\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"dsGPrefix\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"4\" text=\"bind:PROGRM_ID\" displaytype=\"text\" edittype=\"none\"/><Cell col=\"5\" text=\"bind:USE_YN\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"dsGUseYn\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edtInputCodeId","112","428","340","50",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","17","428","86","50",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("인자1 :");
            obj.set_textAlign("center");
            obj.set_background("cadetblue");
            obj.set_font("bold 14px/normal \"Gulim\"");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","460","428","86","50",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("인자2 :");
            obj.set_textAlign("center");
            obj.set_background("cadetblue");
            obj.set_font("bold 14px/normal \"Gulim\"");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Edit("edtInputCodeNm","553","428","457","50",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","357","184","653","70",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("Modal모달: callBack있음 / Modeless모달러스 : callBack없음 팝업에서함수로호출 \r\nex)this.opener.fn_callBack(인자값) 인자값은:String,ds");
            obj.set_textAlign("center");
            obj.set_background("cadetblue");
            obj.set_font("bold 14px/normal \"Gulim\"");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","360","368","146","50",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("싱글/다중화면");
            obj.set_textAlign("center");
            obj.set_background("cadetblue");
            obj.set_font("bold 14px/normal \"Gulim\"");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSingleMult","515","367","97","48",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_autoselect("true");
            obj.set_value("S");
            obj.set_font("bold 18px/normal \"Gulim\"");
            obj.set_textAlign("center");
            obj.set_maxlength("1");
            obj.set_inputmode("upper");
            obj.set_inputfilter("none");
            obj.set_imemode("alpha");
            obj.set_text("S");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"456","60","22","81",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"456","60","22","16",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList00","1035","103",null,"343","10",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"108\"/><Column size=\"164\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"화면ID\"/><Cell col=\"2\" text=\"FORM명(한글)\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"1\" text=\"bind:PROGRM_CD\" displaytype=\"normal\" edittype=\"text\" expandshow=\"show\" expandsize=\"30\"/><Cell col=\"2\" text=\"bind:PROGRM_NM\" displaytype=\"text\" edittype=\"none\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edtCodeId","value","ds_input","PROGRM_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtCodeNm","value","ds_input","PROGRM_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsDummy");
            this._addPreloadList("data","","dsList");
        };
        
        // User Script
        this.registerScript("SML013MainModalModelessM01_back.xfdl", function() {
        /**
        *  컨설팅 표준화 작업
        *  @MenuPath
        *  @FileName 		sample004_popup.xfdl
        *  @Creator 			jiback
        *  @CreateDate 	2017.10.25
        *  @LastModifier
        *  @LastModifyDate
        *  @Version 		1.0
        *  @Outline
        *  @Desction
        ************** 소스 수정 이력 *************************************************
        *    date          		Modifier            Description
        *******************************************************************************
        *  2017.10.25     	   jiback                  최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.fn_formInit();
        };
        /**********************************************************************
        	04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        this.fn_formInit = function()
        {
        	var strDs    = "dsGUseYn|dsGPrefix";      						// 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
        	var strLgcd  = "000002|000008";           		 		// 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
        	var strComb  = "X|X";   								// 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
        	var strOptn  = "";										// 조건문 " AND COMM_IT02 = '" + vip + "'|||";
        	var svcId 	 = "Init";

           // gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
           // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.


        	this.gfn_CmmnMultiComboLoad(strDs
        							, strLgcd
        							, strComb
        							, strOptn
        							, svcId);
        };

        this.postformInit = function()
        {
        	//trace(this.dsGUseYn.saveXML());
        };
        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/

        /************************************************************************************************
         * CALLBACK 콜백 처리부분
         ************************************************************************************************/
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

        //Popup callback영역
        this.fn_popupCallback = function(strId, strVal)
        {

        	switch(strId)
        	{
        		case "popup" :
        				trace(" strId : " + strId + " strVal : " + strVal);

        				//일반
        				var sRtn = strVal.split(",");
        				trace(sRtn[0] +" , "+sRtn[1]);

        				//Dataset
        				this.ds_rtn.loadXML(sRtn[2]);
        				trace(this.ds_rtn.saveXML());
        			break;
        		case "POP006SampleListP01" :
        			//테스트팝업조회
        			if(!this.gfn_isNull(strVal))
        			{
        				//일반
        				var sRtn = strVal.split(",");
        				if(sRtn[0] == "S")
        				{
        					this.edtInputCodeId.set_value(sRtn[1]);
        					this.edtInputCodeNm.set_value(sRtn[2]);
        					/*
        					trace("sRtn[1] ======> " + sRtn[1]);
        					trace("sRtn[2] ======> " + sRtn[2]);
        					*/
        					//Dataset
        					//this.dsDummy.loadXML(sRtn[3]);
        					//trace(this.dsDummy.saveXML());
        				} else if(sRtn[0] == "M")
        				{
        					//this.dsDummy.loadXML(sRtn[1]);
        					//trace(this.dsDummy.saveXML());
        					this.dsList.copyData(this.dsDummy);
        				} else if(sRtn[0] == "CLOSE")
        				{
        					//trace(sRtn[0]);

        				} else if(sRtn[0] == "EXIT")
        				{
        					//trace(sRtn[0]);
        				}
        			}
        			break;
        		case "POP006GridSampleListP01" :
        			//테스트팝업조회

        			if(!this.gfn_isNull(strVal))
        			{
        				//일반
        				var sRtn = strVal.split(",");
        				if(sRtn[0] == "S")
        				{
        					this.dsList.setColumn(this.dsList.rowposition,"PROGRM_CD",this.dsDummy.getColumn(0,"PROGRM_CD"));
        					this.dsList.setColumn(this.dsList.rowposition,"PROGRM_NM",this.dsDummy.getColumn(0,"PROGRM_NM"));

        				} else if(sRtn[0] == "M")
        				{
        					//	this.dsList.copyData(this.dsDummy);
        				} else if(sRtn[0] == "CLOSE")
        				{
        				} else if(sRtn[0] == "EXIT")
        				{
        				}
        			}
        			break;
        		case "POP006SampleListP02" :
        			//테스트팝업조회
        			if(!this.gfn_isNull(strVal))
        			{
        				//일반
        				var sRtn = strVal.split(",");
        				if(sRtn[0] == "S")
        				{
        					this.edtInputCodeId.set_value(sRtn[1]);
        					this.edtInputCodeNm.set_value(sRtn[2]);
        				} else if(sRtn[0] == "M")
        				{
        					this.dsList.copyData(this.dsDummy);
        				} else if(sRtn[0] == "CLOSE")
        				{
        				} else if(sRtn[0] == "EXIT")
        				{
        				}
        			}
        			break;
        		default	:
        			break;
        	}
         };

         /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역(기본컴포넌트
         ************************************************************************************************/
        // Modal Popup
        this.btnModal_onclick = function(obj,e)
        {
        	var oArg = {paramCode:"abcd", paramNum:12345, dsArg:this.ds_list};
        	var oOption = {};
        	var sPopupCallBack = "fn_popupCallback";
        	this.gfn_openPopup( "popup","sml::SML014ChildModelessP01.xfdl",oArg,sPopupCallBack,oOption);
        };

        //Modeless Popup
        this.btnOpen_onclick = function(obj,e)
        {
        	var oArg = {paramCode:"abcd", paramNum:12345, dsArg:this.ds_list};
        	var oOption = {showtitlebar:"true",popuptype:"modeless",width:512,height:384};
        	var sPopupCallBack = "fn_popupCallback";
        	this.gfn_openPopup( "popup","sml::SML014ChildModelessP01.xfdl",oArg,sPopupCallBack,oOption);
        };
         /************************************************************************************************
         * Modal/Modeless(모달/모달러스 자식폼에서호출함수)샘풀
         ************************************************************************************************/
        this.fn_dsChildCopydsDummy = function(ds)
        {
        	this.dsDummy.clearData();
        	this.dsDummy.copyData(ds);
        };
         /************************************************************************************************
         * Modal(모달팝업)샘풀
         ************************************************************************************************/
        this.btnModal01_onclick = function(obj,e)
        {

        	var sCodeId  = this.gfn_trim(this.edtCodeId.value);
        	var sCodeNm  = this.gfn_trim(this.edtCodeNm.value);
        	var sMultFlg = this.edtSingleMult.value;

        	if(sMultFlg != "S" && sMultFlg != "M")
        	{
        		sMultFlg = "S";
        	}
        	this.fn_setCallModal(sCodeId,sCodeNm,sMultFlg);
        };

        /**
         * 입력에디터에 코드/명을 입력시 처리
         * 한행 바로셋팅/여러행일시 팝업을 띄운다.(단 입력창에 한글자 이상일때만 처리가능)
         */


        this.edtCodeId_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		var sCodeId  = this.gfn_trim(this.edtCodeId.value);
        		var sCodeNm  = this.gfn_trim(this.edtCodeNm.value);
        		var sMultFlg = this.edtSingleMult.value;

        		if(sMultFlg != "S" && sMultFlg != "M")
        		{
        			sMultFlg = "S";
        		}

        		this.fn_setCallModal(sCodeId,sCodeNm,sMultFlg);
        	}
        };

        /**
         * 입력창을 지우면 자동을 이름도 초기화처리
         */
        this.edtCodeId_oninput = function(obj,e)
        {

        	if(obj.getLength() == 0)
        	{
        		this.edtCodeNm.set_value("");
        		this.edtInputCodeId.set_value("");
        		this.edtInputCodeNm.set_value("");
        	}

        };

        /**
         * 실제로 처리하는 팝업함수
         */
        this.fn_setCallModal = function(sCodeId,sCodeNm,sMultFlg)
        {
        	this.dsMaster.clearData();
        	if(!this.gfn_isNull(sCodeId) && sMultFlg != "M")
        	{
        		var strSvc 		= "Search";
        		var strUrl 		= "/prj/pop/RetrieveProgramMasterList.do";
        		var strInDs  	= "ds_input=ds_input";
        		var strOutDs 	= "dsMaster=dsMaster";
        		var strArg 		= "";
        		var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        		var strASync    = false;			   //샏략이나 공백일시에는 ASync=true,싱크시는 false로
        		this.gfn_Transaction(strSvc
        							, strUrl
        							, strInDs
        							, strOutDs
        							, strArg
        							, strCallBack
        							, strASync);

        	}

        	if(this.dsMaster.rowcount == 1 && sMultFlg == "S")
        	{

        		this.edtInputCodeId.set_value(this.dsMaster.getColumn(0,"PROGRM_CD"));
        		this.edtInputCodeNm.set_value(this.dsMaster.getColumn(0,"PROGRM_NM"));

        	} else
        	{
        		var lv_sFlag01 			= "Y";						// (필수)부모에서 파라미터를 넘길지의 여부 (Y:파라미터넘김 / N:넘기지 않음)
        		var lv_sFlag02			= "Y";						// (필수)팝업이 열렸을때 자동조회를 할 것인가 여부.(Y:자동조회 / N:수동조회)
        		var lv_sFlag03			= sMultFlg;					// 멀티처리 : 싱글처리/멀티처리 S:한로우처리/M:멀티로처리
        		var lv_sValue01 		= sCodeId;						// 부모에서 넘어가는 파라미터(프로그래ID)
        		var lv_sValue02 		= sCodeNm;						// 부모에서 넘어가는 파라미터(폼ID)

        		var sPopId 			= "POP006SampleListP01";
        		var sUrl 			= "pop::POP006SampleListP01.xfdl";
        		var oArg 			= { pv_sOp01:lv_sFlag01      	// 조회조건 : 조회조건셋팅/조회조건에 미셋팅 Y:조회조건셋팅/조회조건자동셋팅않함.
        							  , pv_sOp02:lv_sFlag02       	// 자동조회 : 바로조회/미조회   Y:자동조회/N:자동조회않임
        							  , pv_sOp03:lv_sFlag03      	// 멀티처리 : 싱글처리/멀티처리 S:한로우처리/M:멀티로처리
        							  , pv_sVal01:lv_sValue01      	// 파라미터1
        							  , pv_sVal02:lv_sValue02};     // 파라미터2
        		var sPopupCallBack 	= "fn_popupCallback";
        		var oOption 		= {};
        		this.gfn_openPopup( sPopId
        						  , sUrl
        						  , oArg
        						  , sPopupCallBack
        						  , oOption);
        	}
        };
         /************************************************************************************************
         * Modeless(모달러스 팝업)샘풀
         ************************************************************************************************/
        this.btnModeless01_onclick = function(obj,e)
        {
        	var sCodeId  = this.gfn_trim(this.edtCodeId01.value);
        	var sCodeNm  = this.gfn_trim(this.edtCodeNm01.value);

        	var sMultFlg = this.edtSingleMult.value;
        	if(sMultFlg != "S" && sMultFlg != "M")
        	{
        		sMultFlg = "S";
        	}

        	this.fn_setCallModa2(sCodeId,sCodeNm,sMultFlg)
        };

        this.edtCodeId01_onkeyup = function(obj,e)
        {
        	var sCodeId  = this.gfn_trim(this.edtCodeId.value);
        	var sCodeNm  = this.gfn_trim(this.edtCodeNm.value);
        	var sMultFlg = this.edtSingleMult.value;

        	if(sMultFlg != "S" && sMultFlg != "M")
        	{
        		sMultFlg = "S";
        	}

        	if(e.keycode == 13)
        	{
        		this.fn_setCallModa2(sCodeId,sCodeNm,sMultFlg);
        	}
        };

        this.edtCodeId01_oninput = function(obj,e)
        {
        	if(obj.getLength() == 0)
        	{
        		this.edtCodeNm.set_value("");
        		this.edtInputCodeId.set_value("");
        		this.edtInputCodeNm.set_value("");
        	}
        };
        /**
         * 실제로 처리하는 팝업함수
         */
        this.fn_setCallModa2 = function(sCodeId,sCodeNm,sMultFlg)
        {
        	this.dsMaster.clearData();
        	if(!this.gfn_isNull(sCodeId) && sMultFlg != "M")
        	{
        		var strSvc 		= "Search";
        		var strUrl 		= "/prj/pop/RetrieveProgramMasterList.do";
        		var strInDs  	= "ds_input=ds_input";
        		var strOutDs 	= "dsMaster=dsMaster";
        		var strArg 		= "";
        		var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        		var strASync    = false;			   //샏략이나 공백일시에는 ASync=true,싱크시는 false로
        		this.gfn_Transaction(strSvc
        							, strUrl
        							, strInDs
        							, strOutDs
        							, strArg
        							, strCallBack
        							, strASync);
        	}

        	if(this.dsMaster.rowcount == 1 && sMultFlg == "S")
        	{

        		this.edtInputCodeId.set_value(this.dsMaster.getColumn(0,"PROGRM_CD"));
        		this.edtInputCodeNm.set_value(this.dsMaster.getColumn(0,"PROGRM_NM"));

        	} else
        	{
        		var lv_sFlag01 			= "Y";						// (필수)부모에서 파라미터를 넘길지의 여부 (Y:파라미터넘김 / N:넘기지 않음)
        		var lv_sFlag02			= "Y";						// (필수)팝업이 열렸을때 자동조회를 할 것인가 여부.(Y:자동조회 / N:수동조회)
        		var lv_sFlag03			= sMultFlg;					// 멀티처리 : 싱글처리/멀티처리 S:한로우처리/M:멀티로처리
        		var lv_sValue01 		= sCodeId;						// 부모에서 넘어가는 파라미터(프로그래ID)
        		var lv_sValue02 		= sCodeNm;						// 부모에서 넘어가는 파라미터(폼ID)

        		var sPopId 			= "POP006SampleListP02";
        		var sUrl 			= "pop::POP006SampleListP02.xfdl";
        		var oArg 			= { pv_sOp01:lv_sFlag01      	// 조회조건 : 조회조건셋팅/조회조건에 미셋팅 Y:조회조건셋팅/조회조건자동셋팅않함.
        							  , pv_sOp02:lv_sFlag02       	// 자동조회 : 바로조회/미조회   Y:자동조회/N:자동조회않임
        							  , pv_sOp03:lv_sFlag03      	// 멀티처리 : 싱글처리/멀티처리 S:한로우처리/M:멀티로처리
        							  , svcId   :sPopId
        							  , pv_sVal01:lv_sValue01      	// 파라미터1
        							  , pv_sVal02:lv_sValue02};     // 파라미터2
        		var sPopupCallBack 	= "fn_popupCallback";
        		var oOption 		= {popuptype:"modeless",width:675,height:533};
        		this.gfn_openPopup( sPopId
        						  , sUrl
        						  , oArg
        						  , sPopupCallBack
        						  , oOption);
        	}
        };


        this.fn_beforeclose = function()
        {
        	return this.gfn_isUpdate(this.dsMaster);
        };
         /************************************************************************************************
         * grid Modal(모달팝업)샘풀
         ************************************************************************************************/
        this.btnAdd_onclick = function(obj,e)
        {
        	var nRow = this.dsList.addRow();
        };

        this.btnDel_onclick = function(obj,e)
        {
        	this.dsList.deleteRow(this.dsList.rowposition);
        };
        /**
         * 실제로 처리하는 팝업함수
         */
        this.fn_setCallModal3 = function(sCodeId,sCodeNm,sMultFlg)
        {
        	this.dsMaster.clearData();
        	if(!this.gfn_isNull(sCodeId) && sMultFlg != "M")
        	{
        		this.ds_input.setColumn(0,"PROGRM_CD",sCodeId);
        		this.ds_input.setColumn(0,"PROGRM_NM",sCodeNm);
        		var strSvc 		= "Search";
        		var strUrl 		= "/prj/pop/RetrieveProgramMasterList.do";
        		var strInDs  	= "ds_input=ds_input";
        		var strOutDs 	= "dsMaster=dsMaster";
        		var strArg 		= "";
        		var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        		var strASync    = false;			   //샏략이나 공백일시에는 ASync=true,싱크시는 false로
        		this.gfn_Transaction(strSvc
        							, strUrl
        							, strInDs
        							, strOutDs
        							, strArg
        							, strCallBack
        							, strASync);

        	}

        	if(this.dsMaster.rowcount == 1 && sMultFlg == "S")
        	{
        		this.dsList.setColumn(this.dsList.rowposition,"PROGRM_CD",this.dsMaster.getColumn(0,"PROGRM_CD"));
        		this.dsList.setColumn(this.dsList.rowposition,"PROGRM_NM",this.dsMaster.getColumn(0,"PROGRM_NM"));

        	} else
        	{
        		var lv_sFlag01 			= "Y";						// (필수)부모에서 파라미터를 넘길지의 여부 (Y:파라미터넘김 / N:넘기지 않음)
        		var lv_sFlag02			= "Y";						// (필수)팝업이 열렸을때 자동조회를 할 것인가 여부.(Y:자동조회 / N:수동조회)
        		var lv_sFlag03			= sMultFlg;					// 멀티처리 : 싱글처리/멀티처리 S:한로우처리/M:멀티로처리
        		var lv_sValue01 		= sCodeId;						// 부모에서 넘어가는 파라미터(프로그래ID)
        		var lv_sValue02 		= sCodeNm;						// 부모에서 넘어가는 파라미터(폼ID)

        		var sPopId 			= "POP006GridSampleListP01";
        		var sUrl 			= "pop::POP006SampleListP01.xfdl";
        		var oArg 			= { pv_sOp01:lv_sFlag01      	// 조회조건 : 조회조건셋팅/조회조건에 미셋팅 Y:조회조건셋팅/조회조건자동셋팅않함.
        							  , pv_sOp02:lv_sFlag02       	// 자동조회 : 바로조회/미조회   Y:자동조회/N:자동조회않임
        							  , pv_sOp03:lv_sFlag03      	// 멀티처리 : 싱글처리/멀티처리 S:한로우처리/M:멀티로처리
        							  , pv_sVal01:lv_sValue01      	// 파라미터1
        							  , pv_sVal02:lv_sValue02};     // 파라미터2
        		var sPopupCallBack 	= "fn_popupCallback";
        		var oOption 		= {};
        		this.gfn_openPopup( sPopId
        						  , sUrl
        						  , oArg
        						  , sPopupCallBack
        						  , oOption);
        	}
        };


        this.grdList_onenterdown = function(obj,e)
        {
        	var sCodeId  = this.gfn_trim(this.dsList.getColumn(e.row,"PROGRM_CD"));
        	var sCodeNm  = this.gfn_trim(this.dsList.getColumn(e.row,"PROGRM_NM"));
        	var sMultFlg = "S";//this.edtSingleMult.value;

        	if(sMultFlg != "S" && sMultFlg != "M")
        	{
        		sMultFlg = "S";
        	}

        	this.fn_setCallModal3(sCodeId,sCodeNm,sMultFlg);
        };

        this.grdList_onexpandup = function(obj,e)
        {
        	var sCodeId  = this.gfn_trim(this.dsList.getColumn(e.row,"PROGRM_CD"));
        	var sCodeNm  = this.gfn_trim(this.dsList.getColumn(e.row,"PROGRM_NM"));
        	var sMultFlg = "S"; //this.edtSingleMult.value;

        	if(sMultFlg != "S" && sMultFlg != "M")
        	{
        		sMultFlg = "S";
        	}

        	this.fn_setCallModal3(sCodeId,sCodeNm,sMultFlg);
        };

        this.dsList_oncolumnchanged = function(obj,e)
        {
        	/*
        	if(e.columnid == "PROGRM_CD")
        	{
        		if(this.gfn_isNull(e.newvalue))
        		{
        			this.dsList.setColumn(e.row,"PROGRM_NM","");
        		}
        	}
        	*/
        };




        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnModal.addEventHandler("onclick",this.btnModal_onclick,this);
            this.btnOpen.addEventHandler("onclick",this.btnOpen_onclick,this);
            this.btnModal01.addEventHandler("onclick",this.btnModal01_onclick,this);
            this.edtCodeId.addEventHandler("oninput",this.edtCodeId_oninput,this);
            this.edtCodeId.addEventHandler("onkeyup",this.edtCodeId_onkeyup,this);
            this.edtCodeId01.addEventHandler("onkeyup",this.edtCodeId01_onkeyup,this);
            this.edtCodeId01.addEventHandler("oninput",this.edtCodeId01_oninput,this);
            this.btnModeless01.addEventHandler("onclick",this.btnModeless01_onclick,this);
            this.grdList.addEventHandler("onenterdown",this.grdList_onenterdown,this);
            this.grdList.addEventHandler("onexpandup",this.grdList_onexpandup,this);
            this.btnAdd.addEventHandler("onclick",this.btnAdd_onclick,this);
            this.btnDel.addEventHandler("onclick",this.btnDel_onclick,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
        };
        this.loadIncludeScript("SML013MainModalModelessM01_back.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
