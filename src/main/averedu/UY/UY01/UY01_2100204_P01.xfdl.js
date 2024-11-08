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
            this.set_titletext("설문참여");
            if (Form == this.constructor)
            {
                this._setFormPosition(700,480);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMunhangMaster", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"SEOLMUN_GAESEOL_CD\" type=\"STRING\" size=\"8\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"MUNHANG_NO\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PILSU_SEONTAEK_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GAESEOL_SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"MUNHANG_NAEYONG\" type=\"STRING\" size=\"4000\"/><Column id=\"YEJE_NO\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DABBYEON_NAEYONG\" type=\"STRING\" size=\"4000\"/><Column id=\"GAEKGWANSIK_YN\" type=\"STRING\" size=\"1\"/><Column id=\"GAESEOL_MUNHANG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_munhangInput", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SEOLMUN_GAESEOL_CD\" type=\"STRING\" size=\"8\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGaeseolMaster", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"SEOLMUN_GAESEOL_CD\" type=\"STRING\" size=\"8\"/><Column id=\"SEOLMUN_YUHYUNG_GBCD\" type=\"STRING\" size=\"20\"/><Column id=\"SEOLMUN_NAEYONG\" type=\"STRING\" size=\"4000\"/><Column id=\"SEOLMUN_SIJAK_DT\" type=\"DATE\" size=\"8\"/><Column id=\"SEOLMUN_JONGRYO_DT\" type=\"DATE\" size=\"8\"/><Column id=\"DAMDANG_DEPT_CD\" type=\"STRING\" size=\"8\"/><Column id=\"MAGAM_YN\" type=\"STRING\" size=\"1\"/><Column id=\"DAESANG_INWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SEOLMUN_INWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BIGYOGWA_CD\" type=\"STRING\" size=\"8\"/><Column id=\"GYOGWAMOK_CD\" type=\"STRING\" size=\"8\"/><Column id=\"BUNBAN\" type=\"STRING\" size=\"5\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"8\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMunhangList", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"SEOLMUN_GAESEOL_CD\" type=\"STRING\" size=\"8\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"MUNHANG_NO\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PILSU_SEONTAEK_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GAESEOL_SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"MUNHANG_NAEYONG\" type=\"STRING\" size=\"4000\"/><Column id=\"YEJE_NO\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DABBYEON_NAEYONG\" type=\"STRING\" size=\"4000\"/><Column id=\"GAEKGWANSIK_YN\" type=\"STRING\" size=\"1\"/><Column id=\"GAESEOL_MUNHANG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdMunhang","20","48","660","382",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsMunhangMaster");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_autosizingtype("row");
            obj.set_extendsizetype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"61\"/><Column size=\"517\"/><Column size=\"77\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"문항번호\"/><Cell col=\"1\" text=\"문항내용(필수선택수)\"/><Cell col=\"2\"/></Band><Band id=\"body\"><Cell displaytype=\"number\" edittype=\"none\" textAlign=\"center\" editmaxlength=\"22\" suppress=\"bind:GAESEOL_SEQ\" text=\"bind:GAESEOL_SEQ\"/><Cell col=\"1\" displaytype=\"expr:GAESEOL_MUNHANG!=&apos;Q&apos; &amp;&amp; YEJE_NO == &apos;0&apos; &amp;&amp; GAEKGWANSIK_YN==&apos;2&apos;?&quot;textarea&quot;:&quot;normal&quot;\" edittype=\"expr:GAESEOL_MUNHANG!=&apos;Q&apos; &amp;&amp; YEJE_NO == &apos;0&apos; &amp;&amp; GAEKGWANSIK_YN==&apos;2&apos;?&quot;textarea&quot;:&quot;none&quot;\" textAlign=\"left\" text=\"bind:MUNHANG_NAEYONG\" editmaxlength=\"4000\" wordWrap=\"char\" font=\"12px/normal &quot;Malgun Gothic&quot;\"/><Cell col=\"2\" edittype=\"expr:GAESEOL_MUNHANG!=&apos;Q&apos; &amp;&amp; GAEKGWANSIK_YN==&apos;1&apos;?&apos;checkbox&apos;:&apos;none&apos;\" displaytype=\"expr:GAESEOL_MUNHANG!=&apos;Q&apos; &amp;&amp; GAEKGWANSIK_YN==&apos;1&apos;?&apos;checkboxcontrol&apos;:&apos;normal&apos;\" text=\"bind:DABBYEON_NAEYONG\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","20","18","115","22",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("설문");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","620","440","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","555","440","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("stRowCnt","20","440","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00",null,"29","271","16","19",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("※ 주관식 여러 줄 입력은 alt+enter로 가능합니다.");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",700,480,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_description("설문참여");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMunhangMaster");
            this._addPreloadList("data","","dsGaeseolMaster");
            this._addPreloadList("data","","dsMunhangList");
        };
        
        // User Script
        this.registerScript("UY01_2100204_P01.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UY01_2100204_P01.xfdl(설문참여)
        * 작 성         일 명: jiback
        * 작 성         일 자: 2020/11/17
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
            //사용자 화면  초기화 함수
            this.fn_formInit();
        	this.dsGaeseolMaster.copyData(this.getOwnerFrame().dsArg);
        	this.fn_Ret();
        };

        /**********************************************************************
                04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        this.fn_formInit = function()
        {
            var strDs    = "";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "";                         // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";                                      // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId    = "Init";

                // gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
                // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.

            this.gfn_CmmnMultiComboLoad(strDs
                                      , strLgcd
                                      , strComb
                                      , strOptn
                                      , svcId);

        };

        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {

            this.gfn_clearSortAll(this.grdMunhang);
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
                    case "Save":
                            this.fn_PostSave();
                        break;
                    default:
                        break;
                }
            }
        };

        /************************************************************************************************;
         * 공통 버튼 호출 영역(공통버튼 사용에만사용);
         ************************************************************************************************/;
        /*;
         * _gfn_btnClick여기서 호출시 버튼을 클릭처릭(개인폼에 모든스크립터 복사함);
         */;
        this.fn_cmmBtnClick = function(sBtn)
        {
            switch(sBtn)
            {
                default :
                    break;
            };
        };;

        /**********************************************************************
                05. 조회 함수 선언(마스터 함수)
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreRet = function()
        {
            // 조회조건 셋팅
        	this.ds_munhangInput.setColumn(0, "HAKBEON", objApp.gds_userInfoDb.getColumn(0, "USER_ID"));
        	this.ds_munhangInput.setColumn(0, "SEOLMUN_GAESEOL_CD", this.dsGaeseolMaster.getColumn(0, "SEOLMUN_GAESEOL_CD"));
            return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_Ret = function()
        {
            if(!this.fn_PreRet())
            {
                return false;
            }

            var strSvc      = "Ret";
            var strUrl      = "/prj/UY/UY01/munhangRetrieve_2100204_P01.do";
            var strInDs     = "ds_munhangInput=ds_munhangInput";
            var strOutDs    = "dsMunhangMaster=dsMunhangMaster";
            var strArg      = "";
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
            this.gfn_getRowCount(this.stRowCnt,this.dsMunhangMaster);
        	//
        	this.dsMunhangList.clearData();
        	for(var i=0; i<this.dsMunhangMaster.rowcount; i++)
        	{
        		// 문항추출
        		if (this.dsMunhangMaster.getColumn(i, "GAESEOL_MUNHANG") == "Q")
        		{
        			var nRow = this.dsMunhangList.addRow();
        			this.dsMunhangList.copyRow(nRow, this.dsMunhangMaster, i);
        		}
        		else
        		{
        			// 주관식 row 크기 조정
        			if (this.dsMunhangMaster.getColumn(i, "GAEKGWANSIK_YN") == "2")
        			{
        				this.grdMunhang.setRealRowSize(i, 60);
        			}
        		}
        	} // for
        };

        /**********************************************************************
                06. 저장 함수 선언
        ***********************************************************************/
        this.btnSave_onclick = function(obj,e)
        {
        	this.fn_Save();
        };

        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function()
        {
        	var yejecnt = 0;
            if(!this.gfn_isUpdate(this.dsMunhangMaster))
            {
                this.gfn_alert("응답 내역이 없습니다.","저장정보","","question");
                return false;
            }

        	for(var q=0; q<this.dsMunhangList.rowcount; q++)
        	{
        		var nGaeseolSeq       = this.dsMunhangList.getColumn(q, "GAESEOL_SEQ");
        		var nMunhangNo        = parseInt(this.dsMunhangList.getColumn(q, "MUNHANG_NO"));
        		var nPilsuSeontaekCnt = this.dsMunhangList.getColumn(q, "PILSU_SEONTAEK_CNT");

        		// 필수문항
        		if ( nPilsuSeontaekCnt > 0)
        		{
        			// 객관식
        			if (this.dsMunhangList.getColumn(q, "GAEKGWANSIK_YN") == "1")
        			{
        			    var nDabbyeonCnt = 0;
        				for(var i=0; i<this.dsMunhangMaster.rowcount; i++)
        				{
        					if ("Q" != this.dsMunhangMaster.getColumn(i, "GAESEOL_MUNHANG") &&
        					    nMunhangNo == parseInt(this.dsMunhangMaster.getColumn(i, "MUNHANG_NO")) &&
        						"1" == this.dsMunhangMaster.getColumn(i, "DABBYEON_NAEYONG") )
        					{
        						nDabbyeonCnt++;
        					}
        				}
        				if (nPilsuSeontaekCnt != nDabbyeonCnt)
        				{
        				    var nRow = this.dsMunhangMaster.findRow("MUNHANG_NO",nMunhangNo);
        					this.dsMunhangMaster.set_rowposition(nRow);
        					this.gfn_alert(nGaeseolSeq + "번 문항은 필수 " + nPilsuSeontaekCnt + "선택입니다.","설문정보","","information");
        					this.grdMunhang.setFocus();
        					return false;
        				}
        			}
        			// 주관식
        			else if (this.dsMunhangList.getColumn(q, "GAEKGWANSIK_YN") == "2")
        			{
        			    var nDabbyeonCnt = 0;
        				for(var i=0; i<this.dsMunhangMaster.rowcount; i++)
        				{
        					if ("Q" != this.dsMunhangMaster.getColumn(i, "GAESEOL_MUNHANG") &&
        					    nMunhangNo == parseInt(this.dsMunhangMaster.getColumn(i, "MUNHANG_NO"))  &&
        						!this.gfn_isNull(this.dsMunhangMaster.getColumn(i, "MUNHANG_NAEYONG")) )
        					{
        						nDabbyeonCnt++;
        					}
        				}

        				if (nDabbyeonCnt == 0)
        				{
        				    var nRow = this.dsMunhangMaster.findRow("MUNHANG_NO",nMunhangNo);
        					this.dsMunhangMaster.set_rowposition(nRow + 1);
        					this.gfn_alert(nGaeseolSeq + "번 문항은 필수항목입니다.","설문정보","","information");

        					this.grdMunhang.setFocus();
        					this.grdMunhang.setCellPos(1);
        					return false;
        				}
        			}
        		}
        	} // for

            var result = this.gfn_confirm( "저장 하시겠습니까?", "저장","", "question" );
            if(result == 0)
            {
                return false;
            }

            return true;
        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_Save = function()
        {
            if(!this.fn_PreSave())
            {
                return false;
            }

            var strSvc      = "Save";
            var strUrl      = "/prj/UY/UY01/munhangSave_2100204_P01.do";
            var strInDs     = "ds_munhangInput=ds_munhangInput:a ";
                strInDs    += "dsMunhangMaster=dsMunhangMaster:a";
            var strOutDs    = "dsMunhangMaster=dsMunhangMaster";
            var strArg      = "";
            var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
              strArg = "GBV_MENUID=" + GBV_MENUID + " " + strArg;
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
        /**
         *      기능 : 저장시 후처리
         */
        this.fn_PostSave = function()
        {
            var objRtnArr = new Array(2);
        	objRtnArr[2] = this.dsMunhangMaster.saveXML();

        	this.close(objRtnArr.toString());
        };

        /**********************************************************************
                07. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 소트정열
         */
        this.grdMunhangMaster_onheaddblclick = function(obj,e)
        {
            if(e.cell != this.grdMunhangMaster.getBindCellIndex("body","CHK") && e.cell != 1)
            {
                this.gfn_gridSort(obj,e);
            }
        };


        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
            //return this.gfn_isUpdate(this.dsMaster);
        };

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
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
        };
        this.loadIncludeScript("UY01_2100204_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
