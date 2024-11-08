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
            this.set_titletext("현금지급");
            if (Form == this.constructor)
            {
                this._setFormPosition(240,130);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cheoriInput", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"JIGEUP_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCheori", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JANGHAKDAESANG_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"JANGHAK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JANGHAK_NM\" type=\"STRING\" size=\"100\"/><Column id=\"USEON_SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEYEOL_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"10\"/><Column id=\"SUHEOMSAENG_NM\" type=\"STRING\" size=\"40\"/><Column id=\"SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SUHYE_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"JIGEUP_SANGTAE_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"IPHAKGEUM_JIGEUP_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"SUEOPRYO_JIGEUP_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"IPHAKGEUM_JIGEUP_PAMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SUEOPRYO_JIGEUP_PAMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"IPHAK_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SUEOP_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIGEUP_GANEUNG_IPHAK_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIGEUP_GANEUNG_SUEOP_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIGEUP_IPHAK_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIGEUP_SUEOP_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JUNGBOKSAKJE_IPHAK_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JUNGBOKSAKJE_SUEOP_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIGEUP_YN\" type=\"STRING\" size=\"1\"/><Column id=\"JIGEUP_DT\" type=\"STRING\" size=\"8\"/><Column id=\"TOTAL_HWANSU_IPHAK_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOTAL_HWANSU_SUEOP_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BIGO\" type=\"STRING\" size=\"200\"/><Column id=\"JEONHYEONG_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SEBUJEONHYEONG_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"HAPGYEOK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SEOKCHA\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHONGDEUNGGEUP\" type=\"STRING\" size=\"10\"/><Column id=\"DEUNGROK_MAGAM_DT\" type=\"STRING\" size=\"8\"/><Column id=\"HWANSU_YN\" type=\"STRING\" size=\"1\"/><Column id=\"GYEOLJE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"GYEOLJE_DT\" type=\"STRING\" size=\"8\"/><Column id=\"RES_NO_1\" type=\"STRING\" size=\"6\"/><Column id=\"DEUNGROK_YN\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01_02_00_00_00_00","0","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,"0","10",null,"0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_01","0",null,null,"10","0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","7","6",null,"22","98",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("현금지급");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","7","23",null,"8","0",null,null,null,null,null,this);
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

            obj = new Button("btnSave",null,null,"100","25","75","10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("현금지급실행");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","10","31",null,"42","10",null,null,null,null,null,this);
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

            obj = new Static("Static01_02_00","0","0","27","42",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01_00","26","31","1620","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01","-12","9","90","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("지급일자");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01","78","0","10","42",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00",null,"0","27","42","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calJigeupDt","88",null,"103","22",null,"9",null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_readonly("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"60","25","10","10",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",240,130,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_description("현금지급");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsCheori");
        };
        
        // User Script
        this.registerScript("UE04_2060401_P02.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UE04_2060401_P02.xfdl(현금지급)
        * 작 성         일 명: jiback
        * 작 성         일 자: 2022/08/09
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
        	this.dsCheori.copyData(this.getOwnerFrame().dsCheori)
        	this.ds_cheoriInput.copyData(this.getOwnerFrame().ds_cheoriInput)
        	this.divSearch.form.calJigeupDt.set_value(this.getOwnerFrame().today)
        };

        /**********************************************************************
                04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
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
                    case "Jigeup":
                            this.alert("처리되었습니다.");
        					this.close("CLOSE");
                        break;
                    default:
                        break;
                }
            }
        };

        /**********************************************************************
                05. 장학지급처리
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreJigeup = function(flag, jigeupDt, jigeupCnt)
        {
        	var result = this.gfn_confirm(
        			 (jigeupCnt > 0 ? '지급완료된 건이 존재합니다.\n': '')
        		   + (flag=='1'?'현금지급':flag=='2'?'등록마감':flag=='3'?'등록마감취소':flag=='4'?'선발확정':flag=='5'?'선발확정취소':'')
        		   + ' 처리 하시겠습니까?'
        		   + (jigeupCnt > 0 ? '\n\n※ 지급완료된 건이 존재할 경우 반드시 등록대상자를 재생성해야 합니다.': ''), "저장","", "question" );

        	if(result == 0)
        	{
        		return false;
        	}

        	this.ds_cheoriInput.setColumn(0, "FLAG", flag);
        	this.ds_cheoriInput.setColumn(0, "JIGEUP_DT", jigeupDt);

        	return true;
        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_Jigeup = function(flag, jigeupDt, jigeupCnt)
        {
            if(!this.fn_PreJigeup(flag, jigeupDt, jigeupCnt))
            {
                return false;
            }
            var strSvc      = "Jigeup";
            var strUrl      = "/prj/UE/UE04/Jigeup_2060401_M.do";
            var strInDs     = "ds_input=ds_input:a ";
                strInDs    += "ds_cheoriInput=ds_cheoriInput ";
        		strInDs    += "dsCheori=dsCheori";
            var strOutDs    = "dsMaster=dsMaster";
            var strArg      = "";
            var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);
        };

        /**********************************************************************
                06. 기타 Control Event
        ***********************************************************************/
        // 확인버튼 클릭시
        this.btnSave_onclick = function(obj,e)
        {
        	var jigeupDt = this.divSearch.form.calJigeupDt.value;
            this.fn_Jigeup(1, jigeupDt);
        };

        // 종료버튼 클릭시
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
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.divSearch.form.stc_01_00_01.addEventHandler("onclick",this.divSearch_stc_01_00_onclick,this);
            this.divSearch.form.calJigeupDt.addEventHandler("onkeydown",this.divSearch_calSearchBokhakFr_onkeydown,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.dsCheori.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
        };
        this.loadIncludeScript("UE04_2060401_P02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
