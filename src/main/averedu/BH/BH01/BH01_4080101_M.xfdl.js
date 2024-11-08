(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BH01_4080101_M");
            this.set_titletext("시설관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_BuilDingInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"BLDG_CODE\" type=\"STRING\" size=\"3\"/><Column id=\"BLDG_KFNM\" type=\"STRING\" size=\"100\"/><Column id=\"BLDG_KSNM\" type=\"STRING\" size=\"50\"/><Column id=\"BLDG_EFNM\" type=\"STRING\" size=\"100\"/><Column id=\"BLDG_ESNM\" type=\"STRING\" size=\"50\"/><Column id=\"BLDG_ADMI\" type=\"STRING\" size=\"50\"/><Column id=\"BLDG_DEPT\" type=\"STRING\" size=\"50\"/><Column id=\"RMRK_NOTE\" type=\"STRING\" size=\"200\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_FloorInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"BLDG_CODE\" type=\"STRING\" size=\"3\"/><Column id=\"FLOR_NUMB\" type=\"STRING\" size=\"8\"/><Column id=\"FLOR_KFNM\" type=\"STRING\" size=\"60\"/><Column id=\"FLOR_KSNM\" type=\"STRING\" size=\"30\"/><Column id=\"FLOR_ADMI\" type=\"STRING\" size=\"60\"/><Column id=\"FLOR_DEPT\" type=\"STRING\" size=\"60\"/><Column id=\"FLOR_AREA\" type=\"STRING\" size=\"8\"/><Column id=\"SRVC_GUBN\" type=\"STRING\" size=\"2\"/><Column id=\"RMRK_NOTE\" type=\"STRING\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_RoomInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"BLDG_CODE\" type=\"STRING\" size=\"3\"/><Column id=\"FLOR_NUMB\" type=\"STRING\" size=\"8\"/><Column id=\"ROOM_NUMB\" type=\"STRING\" size=\"8\"/><Column id=\"ROOM_SEQU\" type=\"STRING\" size=\"2\"/><Column id=\"ROOM_KFNM\" type=\"STRING\" size=\"40\"/><Column id=\"ROOM_KSNM\" type=\"STRING\" size=\"20\"/><Column id=\"ROOM_CAPA\" type=\"STRING\" size=\"5\"/><Column id=\"ASSN_CAPA\" type=\"STRING\" size=\"5\"/><Column id=\"ROOM_ADMI\" type=\"STRING\" size=\"40\"/><Column id=\"ROOM_DEPT\" type=\"STRING\" size=\"40\"/><Column id=\"SRVC_GUBN\" type=\"STRING\" size=\"2\"/><Column id=\"ROOM_AREA\" type=\"STRING\" size=\"8\"/><Column id=\"RMRK_NOTE\" type=\"STRING\" size=\"100\"/><Column id=\"DONG_NUMB\" type=\"STRING\" size=\"2\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"BLDG_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"FLOR_NUMB\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_01","10","20","145","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("건물별 정보");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt01","1530","20","100","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd01",null,"20","50","20","295",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel01",null,"20","50","20","240",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancle01",null,"20","50","20","185",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave01",null,"20","50","20","130",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Grid("grdBuilDing","10","50",null,"180","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_BuilDingInfo");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"88\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" displaytype=\"checkboxcontrol\"/><Cell col=\"2\" text=\"건물코드\"/><Cell col=\"3\" text=\"건물명\"/><Cell col=\"4\" text=\"건물약어명\"/><Cell col=\"5\" text=\"건물영문명\"/><Cell col=\"6\" text=\"건물영문약어명\"/><Cell col=\"7\" text=\"관리자\"/><Cell col=\"8\" text=\"관리부서\"/><Cell col=\"9\" text=\"비고\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:BLDG_CODE\" edittype=\"none\"/><Cell col=\"3\" text=\"bind:BLDG_KFNM\" textAlign=\"left\" edittype=\"text\"/><Cell col=\"4\" text=\"bind:BLDG_KSNM\" textAlign=\"left\" edittype=\"text\"/><Cell col=\"5\" text=\"bind:BLDG_EFNM\" textAlign=\"left\" edittype=\"text\"/><Cell col=\"6\" text=\"bind:BLDG_ESNM\" textAlign=\"left\" edittype=\"text\"/><Cell col=\"7\" text=\"bind:BLDG_ADMI\" textAlign=\"left\" edittype=\"text\"/><Cell col=\"8\" text=\"bind:BLDG_DEPT\" textAlign=\"left\" edittype=\"text\"/><Cell col=\"9\" text=\"bind:RMRK_NOTE\" textAlign=\"left\" edittype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_02","10","250","145","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("층별 정보");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt02","1530","250","100","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd02",null,"250","50","20","295",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel02",null,"250","50","20","240",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancle02",null,"250","50","20","185",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave02",null,"250","50","20","130",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFloor","10","275",null,"180","10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_FloorInfo");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"88\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"250\"/><Column size=\"250\"/><Column size=\"250\"/><Column size=\"300\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" displaytype=\"checkboxcontrol\"/><Cell col=\"2\" text=\"건물명\"/><Cell col=\"3\" text=\"층코드\"/><Cell col=\"4\" text=\"명칭\"/><Cell col=\"5\" text=\"관리자\"/><Cell col=\"6\" text=\"관리부서\"/><Cell col=\"7\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:BLDG_CODE\" displaytype=\"combotext\" combocodecol=\"BLDG_CODE\" combodataset=\"ds_BuilDingInfo\" combodatacol=\"BLDG_KFNM\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:FLOR_NUMB\" edittype=\"none\"/><Cell col=\"4\" text=\"bind:FLOR_KFNM\" textAlign=\"left\" edittype=\"text\"/><Cell col=\"5\" text=\"bind:FLOR_ADMI\" textAlign=\"left\" edittype=\"text\"/><Cell col=\"6\" text=\"bind:FLOR_DEPT\" textAlign=\"left\" edittype=\"text\"/><Cell col=\"7\" text=\"bind:RMRK_NOTE\" textAlign=\"left\" edittype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_03","10","480","145","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("호실별 정보");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt03","1530","480","100","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd03",null,"480","50","20","295",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel03",null,"480","50","20","240",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancle03",null,"480","50","20","185",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave03",null,"480","50","20","130",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Grid("grdRoom","10","505",null,"180","10",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_RoomInfo");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"88\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"250\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"170\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" displaytype=\"checkboxcontrol\"/><Cell col=\"2\" text=\"건물명\"/><Cell col=\"3\" text=\"층수\"/><Cell col=\"4\" text=\"호실\"/><Cell col=\"5\" text=\"No\"/><Cell col=\"6\" text=\"명칭\"/><Cell col=\"7\" text=\"수용인원\"/><Cell col=\"8\" text=\"관리자\"/><Cell col=\"9\" text=\"관리부서\"/><Cell col=\"10\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:BLDG_CODE\" displaytype=\"combotext\" combodataset=\"ds_BuilDingInfo\" combodatacol=\"BLDG_KFNM\" combocodecol=\"BLDG_CODE\"/><Cell col=\"3\" text=\"bind:FLOR_NUMB\" combodataset=\"ds_FloorInfo\" combocodecol=\"FLOR_NUMB\" combodatacol=\"FLOR_KFNM\" displaytype=\"combotext\"/><Cell col=\"4\" text=\"bind:ROOM_NUMB\" textAlign=\"left\" edittype=\"text\"/><Cell col=\"5\" text=\"bind:ROOM_SEQU\"/><Cell col=\"6\" text=\"bind:ROOM_KFNM\" textAlign=\"left\" edittype=\"text\"/><Cell col=\"7\" text=\"bind:ROOM_CAPA\" edittype=\"text\"/><Cell col=\"8\" text=\"bind:ROOM_ADMI\" textAlign=\"left\" edittype=\"text\"/><Cell col=\"9\" text=\"bind:ROOM_DEPT\" textAlign=\"left\" edittype=\"text\"/><Cell col=\"10\" text=\"bind:RMRK_NOTE\" textAlign=\"left\" edittype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("BH01_4080101_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): BH01_4080101_M.xfdl(시설관리)
        * 작 성         일 명: 고승재
        * 작 성         일 자: 2022/10/24
        * 변 경         일 자:
        * 변 경         자 명:
        * 변경 및 수정 로그 : 일자별로 변경자 및 변경사항을 간략히 기술
        */
        /**********************************************************************
                01. 전처리 공통 함수 선언
        ***********************************************************************/
        var rowBuilDing = 0;	// 건물 row
        var rowFloor = 0;		// 층별 row
        var rowRoom = 0;		// 호실 row

        /**********************************************************************
                02. 폼 변수 정의
        ***********************************************************************/
        this.lvchkColidDs1   = "BLDG_KFNM";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs1 = "건물명";
        this.lvchkColidDs2   = "BLDG_CODE$FLOR_KFNM";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs2 = "건물명$명칭";
        this.lvchkColidDs3   = "BLDG_CODE$FLOR_NUMB$ROOM_NUMB";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs3 = "건물명$명칭$호실";
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
            this.fn_BuilDing();
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
                    case "BuilDing":				// 건물별
                            this.fn_PostBuilDing();
                        break;
                    case "Floor":					// 층별
        					if ( this.ds_FloorInfo.rowcount == 0 ) {
        						this.ds_RoomInfo.clearData();
        						this.fn_PostRoom();
        					}
                            this.fn_PostFloor();
                        break;
                    case "Room":					// 호실별
                            this.fn_PostRoom();
                        break;
                    case "SaveBuilDing":			// 건물별 저장
                            this.fn_BuilDing();
                        break;
                    case "SaveFloor":				// 층별 저장
                            this.fn_Floor();
                        break;
                    case "SaveRoom":				// 호실별 저장
                            this.fn_Room();
                        break;
                    case "DelBuilDing":				// 건물별 삭제
                            this.fn_PostBuilDingDel();
                        break;
                    case "DelFloor":				// 층별 삭제
                            this.fn_PostFloorDel();
                        break;
                    case "DelRoom":					// 호실별 삭제
                            this.fn_PostRoomDel();
                        break;
                    default:
                        break;
                }
            }
        };

        /**********************************************************************
         * 공통 버튼 호출 영역(공통버튼 사용에만사용)
         **********************************************************************/

        /**********************************************************************
                05. 조회 함수 선언
        ***********************************************************************/

        /**
         * 건물별 정보 조회
         */
        this.fn_BuilDing = function()
        {
        	this.ds_input.setColumn(0, "BLDG_CODE", '0');

            var strSvc      = "BuilDing";
            var strUrl      = "/prj/BH/BH01/Retrieve_4080101_M.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "ds_BuilDingInfo=ds_BuilDingInfo";
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
         * 기능 : 건물별 정보 조회 후 실행
         */
        this.fn_PostBuilDing = function()
        {
            this.gfn_getRowCount(this.staRowCnt01,this.ds_BuilDingInfo);
        };

        /**
         * 층별 정보 조회
         */
        this.fn_Floor = function()
        {
        	this.ds_input.setColumn(0, "BLDG_CODE", this.ds_BuilDingInfo.getColumn(this.ds_BuilDingInfo.rowposition, "BLDG_CODE"));

            var strSvc      = "Floor";
            var strUrl      = "/prj/BH/BH01/Retrieve2_4080101_M.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "ds_FloorInfo=ds_FloorInfo";
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
         * 기능 : 층별 정보 조회 후 실행
         */
        this.fn_PostFloor = function()
        {
            this.gfn_getRowCount(this.staRowCnt02,this.ds_FloorInfo);
        };

        /**
         * 호실별 정보 조회
         */
        this.fn_Room = function()
        {
        	this.ds_input.setColumn(0, "BLDG_CODE", this.ds_FloorInfo.getColumn(this.ds_FloorInfo.rowposition, "BLDG_CODE"));
        	this.ds_input.setColumn(0, "FLOR_NUMB", this.ds_FloorInfo.getColumn(this.ds_FloorInfo.rowposition, "FLOR_NUMB"));

            var strSvc      = "Room";
            var strUrl      = "/prj/BH/BH01/Retrieve3_4080101_M.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "ds_RoomInfo=ds_RoomInfo";
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
         * 기능 : 호실별 정보 조회 후 실행
         */
        this.fn_PostRoom = function()
        {
            this.gfn_getRowCount(this.staRowCnt03,this.ds_RoomInfo);
        };

        /**********************************************************************
                06. 추가 함수 선언
        ***********************************************************************/

        /**
         * 건물별 정보 신규 행 추가
         */
        this.btnAdd01_onclick = function(obj,e)
        {
            var nRow = this.ds_BuilDingInfo.addRow();
        	this.ds_BuilDingInfo.setColumn(nRow, "CHK", 0);
        };

        /**
         * 층별 정보 신규 행 추가
         */
        this.btnAdd02_onclick = function(obj,e)
        {
        	var builDingCode = this.ds_BuilDingInfo.getColumn(this.ds_BuilDingInfo.rowposition, "BLDG_CODE");	// 건물코드

        	if ( builDingCode == '' ) {
        		this.alert('건물별 정보 목록을 저장 한 후, 층별 정보를 추가해주세요.');
        		return;
        	}

        	var nRow = this.ds_FloorInfo.addRow();
        	this.ds_FloorInfo.setColumn(nRow, 'CHK', 0);
        	this.ds_FloorInfo.setColumn(nRow, 'BLDG_CODE', builDingCode);
        };

        /**
         * 호실별 정보 신규 행 추가
         */
        this.btnAdd03_onclick = function(obj,e)
        {
        	var builDingCode = this.ds_BuilDingInfo.getColumn(this.ds_BuilDingInfo.rowposition, "BLDG_CODE");	// 건물코드
        	var floorCode = this.ds_FloorInfo.getColumn(this.ds_FloorInfo.rowposition, 'FLOR_NUMB');				// 층별코드

        	if ( builDingCode == '' ) {
        		this.alert('건물별 정보 목록을 저장 한 후, 층별 정보를 추가해주세요.');
        		return;
        	}
        	else if ( floorCode == '' ) {
        		this.alert('층별 정보 목록을 저장 한 후, 호실별 정보를 추가해주세요.');
        		return;
        	}

        	var nRow = this.ds_RoomInfo.addRow();
        	this.ds_RoomInfo.setColumn(nRow, 'CHK', 0);
        	this.ds_RoomInfo.setColumn(nRow, 'BLDG_CODE', builDingCode);
        	this.ds_RoomInfo.setColumn(nRow, 'FLOR_NUMB', floorCode);
        };

        /**********************************************************************
                07. 삭제 함수 선언
        ***********************************************************************/

        /**
         * 기능 : 삭제 버튼 실행
         */
        this.fn_BuilDingDel = function()
        {
            //멀티삭제용도
            if(this.ds_BuilDingInfo.rowcount < 1 || this.ds_BuilDingInfo.findRow("CHK",1) == -1)
            {
                this.gfn_alert("삭제할 데이터가 없습니다.","삭제정보","","warning");
                return false;
            }
            var result = this.gfn_confirm( "현재선택행을 삭제하시겠습니까?", "삭제정보","","question" );

            if(result == 0)
            {
                return false;
            }

            //다중삭제 용도
            this.ds_BuilDingInfo.set_enableevent(false);
            for(var i=this.ds_BuilDingInfo.rowcount-1;i>-1;i--)
            {
                if(this.ds_BuilDingInfo.getColumn(i,"CHK") == "1" || this.ds_BuilDingInfo.getRowType(i) == 2)
                {
                    this.ds_BuilDingInfo.deleteRow(i);
                }
            }
            this.ds_BuilDingInfo.set_enableevent(true);

            return true;
        };

        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.fn_DelBuilDingRow = function()
        {
            if(!this.fn_BuilDingDel())
            {
                return false;
            }
            var strSvc      = "BuilDingDel";
            var strUrl      = "/prj/BH/BH01/Delete_4080101_M.do";
            var strInDs     = "ds_BuilDingInfo=ds_BuilDingInfo:u";
            var strOutDs    = "";
            var strArg      = "";
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;                                   //샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);
        };

        this.fn_PostBuilDingDel = function()
        {
            this.gfn_getRowCount(this.staRowCnt01,this.ds_BuilDingInfo);
        };

        /**
         * 기능 : 삭제 버튼 실행
         */
        this.fn_FloorDel = function()
        {
            //멀티삭제용도
            if(this.ds_FloorInfo.rowcount < 1 || this.ds_FloorInfo.findRow("CHK",1) == -1)
            {
                this.gfn_alert("삭제할 데이터가 없습니다.","삭제정보","","warning");
                return false;
            }
            var result = this.gfn_confirm( "현재선택행을 삭제하시겠습니까?", "삭제정보","","question" );

            if(result == 0)
            {
                return false;
            }

            //다중삭제 용도
            this.ds_FloorInfo.set_enableevent(false);
            for(var i=this.ds_FloorInfo.rowcount-1;i>-1;i--)
            {
                if(this.ds_FloorInfo.getColumn(i,"CHK") == "1" || this.ds_FloorInfo.getRowType(i) == 2)
                {
                    this.ds_FloorInfo.deleteRow(i);
                }
            }
            this.ds_FloorInfo.set_enableevent(true);

            return true;
        };

        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.fn_DelFloorRow = function()
        {
            if(!this.fn_FloorDel())
            {
                return false;
            }
            var strSvc      = "FloorDel";
            var strUrl      = "/prj/BH/BH01/Delete2_4080101_M.do";
            var strInDs     = "ds_FloorInfo=ds_FloorInfo:u";
            var strOutDs    = "";
            var strArg      = "";
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;                                   //샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);
        };

        this.fn_PostFloorDel = function()
        {
            this.gfn_getRowCount(this.staRowCnt02,this.ds_FloorInfo);
        };

        /**
         * 기능 : 삭제 버튼 실행
         */
        this.fn_RoomDel = function()
        {
            //멀티삭제용도
            if(this.ds_RoomInfo.rowcount < 1 || this.ds_RoomInfo.findRow("CHK",1) == -1)
            {
                this.gfn_alert("삭제할 데이터가 없습니다.","삭제정보","","warning");
                return false;
            }
            var result = this.gfn_confirm( "현재선택행을 삭제하시겠습니까?", "삭제정보","","question" );

            if(result == 0)
            {
                return false;
            }

            //다중삭제 용도
            this.ds_RoomInfo.set_enableevent(false);
            for(var i=this.ds_RoomInfo.rowcount-1;i>-1;i--)
            {
                if(this.ds_RoomInfo.getColumn(i,"CHK") == "1" || this.ds_RoomInfo.getRowType(i) == 2)
                {
                    this.ds_RoomInfo.deleteRow(i);
                }
            }
            this.ds_RoomInfo.set_enableevent(true);

            return true;
        };

        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.fn_DelRoomRow = function()
        {
            if(!this.fn_RoomDel())
            {
                return false;
            }
            var strSvc      = "RoomDel";
            var strUrl      = "/prj/BH/BH01/Delete3_4080101_M.do";
            var strInDs     = "ds_RoomInfo=ds_RoomInfo:u";
            var strOutDs    = "";
            var strArg      = "";
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;                                   //샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);
        };

        this.fn_PostRoomDel = function()
        {
            this.gfn_getRowCount(this.staRowCnt01,this.ds_RoomInfo);
        };

        /**********************************************************************
                08. 저장 함수 선언
        ***********************************************************************/

        /**
         * 기능 : 저장 전 실행
         */
        this.fn_BuilDingSave = function()
        {
            if(this.ds_BuilDingInfo.rowcount > 0)
            {
                for(var i=0;i<this.ds_BuilDingInfo.rowcount; i++)
                {
                    if(this.ds_BuilDingInfo.getColumn(i,"CHK") == "0")
                    {
                        continue;
                    }
                    this.ds_BuilDingInfo.setColumn(i,"CHK","0");
                }
            }

            if(!this.gfn_isUpdate(this.ds_BuilDingInfo))
            {
                this.gfn_alert("변경된 이력이 없습니다.","저장정보","","question");
                return false;
            }

            // 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
            var chkFocusFlg = true;
            var result      = this.gfn_cmmnChkEssentialItem(this.ds_BuilDingInfo, this.lvchkColidDs1, this.lvchkColNameDs1, this.grdBuilDing, chkFocusFlg, this);

            if (result[0] != "success")
            {
                this.gfn_alert(result[0],"저장정보","","question");
                this.ds_BuilDingInfo.set_rowposition(result[1]); //데이터셋 변경
                return false;
             }

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
        this.fn_SaveBuilDing = function()
        {
            if(!this.fn_BuilDingSave())
            {
                return false;
            }
            var strSvc      = "SaveBuilDing";
            var strUrl      = "/prj/BH/BH01/Save_4080101_M.do";
            var strInDs     = "ds_input=ds_input:a ";
                strInDs    += "ds_BuilDingInfo=ds_BuilDingInfo:u";
            var strOutDs    = "ds_BuilDingInfo=ds_BuilDingInfo";
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
        /**
         *      기능 : 저장시 후처리
         */
        this.fn_PostBuilDingSave = function()
        {
            this.gfn_getRowCount(this.staRowCnt01,this.ds_BuilDingInfo);
        };


        /**
         * 기능 : 저장 전 실행
         */
        this.fn_FloorSave = function()
        {
            if(this.ds_FloorInfo.rowcount > 0)
            {
                for(var i=0;i<this.ds_FloorInfo.rowcount; i++)
                {
                    if(this.ds_FloorInfo.getColumn(i,"CHK") == "0")
                    {
                        continue;
                    }
                    this.ds_FloorInfo.setColumn(i,"CHK","0");
                }
            }

            if(!this.gfn_isUpdate(this.ds_FloorInfo))
            {
                this.gfn_alert("변경된 이력이 없습니다.","저장정보","","question");
                return false;
            }

            // 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
            var chkFocusFlg = true;
            var result      = this.gfn_cmmnChkEssentialItem(this.ds_FloorInfo, this.lvchkColidDs2, this.lvchkColNameDs2, this.grdFloor, chkFocusFlg, this);

            if (result[0] != "success")
            {
                this.gfn_alert(result[0],"저장정보","","question");
                this.ds_FloorInfo.set_rowposition(result[1]); //데이터셋 변경
                return false;
             }

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
        this.fn_SaveFloor = function()
        {
            if(!this.fn_FloorSave())
            {
                return false;
            }
            var strSvc      = "SaveFloor";
            var strUrl      = "/prj/BH/BH01/Save2_4080101_M.do";
            var strInDs     = "ds_input=ds_input:a ";
                strInDs    += "ds_FloorInfo=ds_FloorInfo:u";
            var strOutDs    = "ds_FloorInfo=ds_FloorInfo";
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

        /**
         *      기능 : 저장시 후처리
         */
        this.fn_PostFloorSave = function()
        {
            this.gfn_getRowCount(this.staRowCnt02,this.ds_FloorInfo);
        };

        /**
         * 기능 : 저장 전 실행
         */
        this.fn_RoomSave = function()
        {
            if(this.ds_RoomInfo.rowcount > 0)
            {
                for(var i=0;i<this.ds_RoomInfo.rowcount; i++)
                {
                    if(this.ds_RoomInfo.getColumn(i,"CHK") == "0")
                    {
                        continue;
                    }
                    this.ds_RoomInfo.setColumn(i,"CHK","0");
                }
            }

            if(!this.gfn_isUpdate(this.ds_RoomInfo))
            {
                this.gfn_alert("변경된 이력이 없습니다.","저장정보","","question");
                return false;
            }

            // 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
            var chkFocusFlg = true;
            var result      = this.gfn_cmmnChkEssentialItem(this.ds_RoomInfo, this.lvchkColidDs3, this.lvchkColNameDs3, this.grdRoom, chkFocusFlg, this);

            if (result[0] != "success")
            {
                this.gfn_alert(result[0],"저장정보","","question");
                this.ds_RoomInfo.set_rowposition(result[1]); //데이터셋 변경
                return false;
             }

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
        this.fn_SaveRoom = function()
        {
            if(!this.fn_RoomSave())
            {
                return false;
            }
            var strSvc      = "SaveRoom";
            var strUrl      = "/prj/BH/BH01/Save3_4080101_M.do";
            var strInDs     = "ds_input=ds_input:a ";
                strInDs    += "ds_RoomInfo=ds_RoomInfo:u";
            var strOutDs    = "ds_RoomInfo=ds_RoomInfo";
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
        /**
         *      기능 : 저장시 후처리
         */
        this.fn_PostRoomSave = function()
        {
            this.gfn_getRowCount(this.staRowCnt03,this.ds_RoomInfo);
        };


        /**********************************************************************
                09. 초기화
        ***********************************************************************/

        /**
         * 건물별, 층별, 호실별 정보 취소 버튼 처리
         */
        this.btnCancle_onclick = function(obj,e)
        {
        	var btnName = obj.name;
        	var obj = btnName == 'btnCancle01' ? this.ds_BuilDingInfo : btnName == 'btnCancle02' ? this.ds_FloorInfo : this.ds_RoomInfo;
        	var objName = btnName == 'btnCancle1' ? '건물별' : btnName == 'btnCancle2' ? '층별' : '호실별';

        	if ( !this.confirm( objName + ' 정보의 변경 내용을 초기화하시겠습니까?') ) return;
        	obj.reset();
        };

        /**********************************************************************
                10. 출력 함수 선언
        ***********************************************************************/
        /**********************************************************************
                11. ExcelDnwn 엑셀로 출력
        ***********************************************************************/
        /**********************************************************************
                13. Get, Set Method
        ***********************************************************************/
        /**********************************************************************
                14. 기타 Control Event
        ***********************************************************************/

        /**
         * 건물별 정보 그리드 Head 클릭 처리
         */
        this.grdBuilDing_onheadclick = function(obj,e)
        {
            if(e.cell == this.grdBuilDing.getBindCellIndex("body","CHK"))
            {
                this.gfn_checkAll(obj, e);
            }
        };

        /**
         * 건물별 정보 그리드 row 변경 시
         */
        this.ds_BuilDingInfo_onrowposchanged = function(obj,e)
        {
        	if ( rowBuilDing == 0 || rowBuilDing == this.ds_BuilDingInfo.rowposition ) {
        		this.fn_Floor();
        	}
        };

        /**
         * 건물별 정보 그리드 rowPos 변경 시
         */
        this.ds_BuilDingInfo_canrowposchange = function(obj,e)
        {
        	if ( this.gfn_isUpdate(this.ds_FloorInfo) ) {
        		var result = this.gfn_confirm('수정 중인 층별 정보가 초기화 됩니다.\n계속하시겠습니까?', '수정유무', '', 'question');
        		if ( result == 0 ) {
        			this.ds_BuilDingInfo.reset();
        			return false;
        		}
        	}
        	else if ( this.gfn_isUpdate(this.ds_RoomInfo) ) {
        		var result = this.gfn_confirm('수정 중인 호실별 정보가 초기화 됩니다.\n계속하시겠습니까?', '수정유무', '', 'question');
        		if ( result == 0 ) {
        			this.ds_BuilDingInfo.reset();
        			return false;
        		}
        	}
        };

        /**
         * 층별 정보 그리드 Head 클릭 처리
         */
        this.grdFloor_onheadclick = function(obj,e)
        {
            if(e.cell == this.grdFloor.getBindCellIndex("body","CHK"))
            {
                this.gfn_checkAll(obj, e);
            }
        };

        /**
         * 층별 정보 그리드 row 변경 시
         */
        this.ds_FloorInfo_onrowposchanged = function(obj,e)
        {
        	if ( (rowBuilDing == 0 && rowFloor == 0) || rowFloor == this.ds_FloorInfo.rowposition ) {
        		this.fn_Room();
        	}
        };

        /**
         * 층별 정보 그리드 rowPos 변경 시
         */
        this.ds_FloorInfo_canrowposchange = function(obj,e)
        {
        	if ( this.gfn_isUpdate(this.ds_RoomInfo) ) {
        		var result = this.gfn_confirm('수정 중인 호실별 정보가 초기화 됩니다.\n계속하시겠습니까?', '수정유무', '', 'question');

        		if ( result == 0 ) {
        			this.ds_RoomInfo.reset();
        			return false;
        		}
        	}
        };

        /**
         * 호실별 정보 그리드 Head 클릭 처리
         */
        this.grdRoom_onheadclick = function(obj,e)
        {
            if(e.cell == this.grdRoom.getBindCellIndex("body","CHK"))
            {
                this.gfn_checkAll(obj, e);
            }
        };

        /**
         * 건물별 정보 삭제 버튼 처리
         */
        this.btnDel01_onclick = function(obj,e)
        {
        	this.fn_DelBuilDingRow();
        };

        /**
         * 층별 정보 삭제 버튼 처리
         */
        this.btnDel02_onclick = function(obj,e)
        {
        	this.fn_DelFloorRow();
        };

        /**
         * 호실별 정보 삭제 버튼 처리
         */
        this.btnDel03_onclick = function(obj,e)
        {
        	this.fn_DelRoomRow();
        };

        /**
         * 건물별 정보 저장 버튼 처리
         */
        this.btnSave01_onclick = function(obj,e)
        {
        	this.ds_input.setColumn(0, 'BLDG_CODE', 0);
        	this.ds_input.setColumn(0, 'FLOR_NUMB', 0);

        	this.fn_SaveBuilDing();
        };

        /**
         * 층별 정보 저장 버튼 처리
         */
        this.btnSave02_onclick = function(obj,e)
        {
        	this.ds_input.setColumn(0, 'BLDG_CODE', this.ds_BuilDingInfo.getColumn(this.ds_BuilDingInfo.rowposition, 'BLDG_CODE'));

        	this.fn_SaveFloor();
        };

        /**
         * 호실별 정보 저장 버튼 처리
         */
        this.btnSave03_onclick = function(obj,e)
        {
        	this.ds_input.setColumn(0, 'BLDG_CODE', this.ds_BuilDingInfo.getColumn(this.ds_BuilDingInfo.rowposition, 'BLDG_CODE'));
        	this.ds_input.setColumn(0, 'FLOR_NUMB', this.ds_FloorInfo.getColumn(this.ds_FloorInfo.rowposition, 'FLOR_NUMB'));

        	this.fn_SaveRoom();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.stc_01.addEventHandler("onclick",this.stc_09_00_onclick,this);
            this.btnAdd01.addEventHandler("onclick",this.btnAdd01_onclick,this);
            this.btnDel01.addEventHandler("onclick",this.btnDel01_onclick,this);
            this.btnCancle01.addEventHandler("onclick",this.btnCancle_onclick,this);
            this.btnSave01.addEventHandler("onclick",this.btnSave01_onclick,this);
            this.grdBuilDing.addEventHandler("onheadclick",this.grdBuilDing_onheadclick,this);
            this.stc_02.addEventHandler("onclick",this.stc_09_00_onclick,this);
            this.btnAdd02.addEventHandler("onclick",this.btnAdd02_onclick,this);
            this.btnDel02.addEventHandler("onclick",this.btnDel02_onclick,this);
            this.btnCancle02.addEventHandler("onclick",this.btnCancle_onclick,this);
            this.btnSave02.addEventHandler("onclick",this.btnSave02_onclick,this);
            this.grdFloor.addEventHandler("onheadclick",this.grdFloor_onheadclick,this);
            this.stc_03.addEventHandler("onclick",this.stc_09_00_onclick,this);
            this.btnAdd03.addEventHandler("onclick",this.btnAdd03_onclick,this);
            this.btnDel03.addEventHandler("onclick",this.btnDel03_onclick,this);
            this.btnCancle03.addEventHandler("onclick",this.btnCancle_onclick,this);
            this.btnSave03.addEventHandler("onclick",this.btnSave03_onclick,this);
            this.grdRoom.addEventHandler("onheadclick",this.grdRoom_onheadclick,this);
            this.ds_BuilDingInfo.addEventHandler("onrowposchanged",this.ds_BuilDingInfo_onrowposchanged,this);
            this.ds_BuilDingInfo.addEventHandler("canrowposchange",this.ds_BuilDingInfo_canrowposchange,this);
            this.ds_FloorInfo.addEventHandler("onrowposchanged",this.ds_FloorInfo_onrowposchanged,this);
            this.ds_FloorInfo.addEventHandler("canrowposchange",this.ds_FloorInfo_canrowposchange,this);
        };
        this.loadIncludeScript("BH01_4080101_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
