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
            this.set_titletext("그리드 CELL 복사 붙이기");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">똘기</Col><Col id=\"Column1\">피카추</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">123</Col></Row><Row><Col id=\"Column0\">떵이</Col><Col id=\"Column1\">라이츄</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">234</Col></Row><Row><Col id=\"Column0\">호치</Col><Col id=\"Column1\">파이리</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">345</Col></Row><Row><Col id=\"Column0\">새초미</Col><Col id=\"Column1\">꼬부기</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">456</Col></Row><Row><Col id=\"Column0\">드라곤</Col><Col id=\"Column1\">버터플</Col><Col id=\"Column2\">bbbb</Col><Col id=\"Column3\">567</Col></Row><Row><Col id=\"Column0\">요롱이</Col><Col id=\"Column1\">야도란</Col><Col id=\"Column2\">bbbb</Col><Col id=\"Column3\">678</Col></Row><Row><Col id=\"Column0\">마초</Col><Col id=\"Column1\">피존투</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">890</Col></Row><Row><Col id=\"Column0\">미미</Col><Col id=\"Column1\">또가스</Col><Col id=\"Column2\">bbbb</Col><Col id=\"Column3\">321</Col></Row><Row><Col id=\"Column0\">몽키</Col><Col id=\"Column1\">망나뇽</Col><Col id=\"Column2\">bbbb</Col><Col id=\"Column3\">214</Col></Row><Row><Col id=\"Column0\">키키</Col><Col id=\"Column1\">어니부기</Col><Col id=\"Column2\">bbbb</Col><Col id=\"Column3\">543</Col></Row><Row><Col id=\"Column0\">강다리</Col><Col id=\"Column1\">거북킹</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">345</Col></Row><Row><Col id=\"Column0\">찡찡이</Col><Col id=\"Column1\">지우</Col><Col id=\"Column2\">cccc</Col><Col id=\"Column3\">765</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPaste", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">똘기</Col><Col id=\"Column1\">피카추</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">123</Col></Row><Row><Col id=\"Column0\">떵이</Col><Col id=\"Column1\">라이츄</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">234</Col></Row><Row><Col id=\"Column0\">호치</Col><Col id=\"Column1\">파이리</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">345</Col></Row><Row><Col id=\"Column0\">새초미</Col><Col id=\"Column1\">꼬부기</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">456</Col></Row><Row><Col id=\"Column0\">드라곤</Col><Col id=\"Column1\">버터플</Col><Col id=\"Column2\">bbbb</Col><Col id=\"Column3\">567</Col></Row><Row><Col id=\"Column0\">요롱이</Col><Col id=\"Column1\">야도란</Col><Col id=\"Column2\">bbbb</Col><Col id=\"Column3\">678</Col></Row><Row><Col id=\"Column0\">마초</Col><Col id=\"Column1\">피존투</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">890</Col></Row><Row><Col id=\"Column0\">미미</Col><Col id=\"Column1\">또가스</Col><Col id=\"Column2\">bbbb</Col><Col id=\"Column3\">321</Col></Row><Row><Col id=\"Column0\">몽키</Col><Col id=\"Column1\">망나뇽</Col><Col id=\"Column2\">bbbb</Col><Col id=\"Column3\">214</Col></Row><Row><Col id=\"Column0\">키키</Col><Col id=\"Column1\">어니부기</Col><Col id=\"Column2\">bbbb</Col><Col id=\"Column3\">543</Col></Row><Row><Col id=\"Column0\">강다리</Col><Col id=\"Column1\">거북킹</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">345</Col></Row><Row><Col id=\"Column0\">찡찡이</Col><Col id=\"Column1\">지우</Col><Col id=\"Column2\">cccc</Col><Col id=\"Column3\">765</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSelectType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">row</Col><Col id=\"NAME\">한행</Col></Row><Row><Col id=\"CODE\">multirow</Col><Col id=\"NAME\">멀티행</Col></Row><Row><Col id=\"CODE\">cell</Col><Col id=\"NAME\">셀</Col></Row><Row><Col id=\"CODE\">area</Col><Col id=\"NAME\">셀불럭</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdCopyOrPaste01","14","195","48.29%",null,null,"12",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsCopy");
            obj.getSetter("griduserproperty").set("cellcopypaste");
            obj.set_autofittype("col");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdCopyOrPaste02","grdCopyOrPaste01:8","195",null,null,"9","13",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsPaste");
            obj.getSetter("griduserproperty").set("cellcopypaste");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static05",null,"14","1622","43","6",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("-그리드 selecttype 속정에 따른 그리드 복사(Copy)/붙여넣기(Paste)\r\n(아래 콤보에 선택에 따른 그리드 선택 타입이 달라진다)");
            obj.set_textAlign("center");
            obj.set_background("#f80626");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","13","60",null,"43","7",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_SearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle01","0","10","183","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("Grid Selecttype 속성에 셋팅 ");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSelectType","186","10","140","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsSelectType");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01","186","0","100","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("pink");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00","185","32","100","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("pink");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staSubTitle00","340","10","763","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("selecttype종류: cell / row / multirow(멀티불럭이이지만 한불럭만 복사됨) / area(불럭설정)");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static03","14","107",null,"64","8",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("※ 복사할 그리드를 선택 한 후 원하는 셀을 키보드(Ctrl + C) => 상대 방 그리드에 (Ctrl+V)한다. (양방향 가능)\r\n그리드에 onkeydown 이벤트에  this.gfn_copyAndPastenGrid(obj,e); 이함수를 호출하면 가능함.");
            obj.set_textAlign("left");
            obj.set_background("cadetblue");
            obj.set_font("bold 14px/normal \"Gulim\"");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("stc_77","13","171","250","22",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("복사할데이타 및 붙여넣기할 데이타");
            obj.set_cssclass("sta_WF_Title01");
            this.addChild(obj.name, obj);

            obj = new Static("stc_00","grdCopyOrPaste01:1.01%","171","260","22",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("복사할데이타 및 붙여넣기할 데이타");
            obj.set_cssclass("sta_WF_Title01");
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

        };
        
        // User Script
        this.registerScript("SML023CellCopyAndPasteM01.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): SML023CellCopyAndPasteM01.xfdl(그리드 CELL 복사 붙이기)
        * 작 성			일 명: jiback
        * 작 성	    	일 자: 2018/09/13
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

        /**
         * 기능 : 폼언 로드(닫기전 셋팅)  Setting
         */
        this.form_onclose = function(obj,e)
        {

        };
        /**********************************************************************
        	04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/

        this.fn_formInit = function()
        {
        	this.divSearch.form.cboSelectType.set_index(0);
        	this.grdCopyOrPaste01.setFocus();
        };
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
        			case "Init":
        				this.postformInit();
        				break;
        			case "Search":
        			    this.postSearch();
        			  	break;
        			case "Save":
        			    this.postSave();
        				break;
        			case "Add":
        				this.postAdd();
        				break;
        			case "Del":
        				this.postDel();
        				break;
        			default:
        				break;
        		}
        	}
        };
        /**********************************************************************
        	05. 조회 함수 선언(마스터 함수)
        ***********************************************************************/
        /**********************************************************************
        	06. 추가 함수 선언
        ***********************************************************************/
        /**********************************************************************
        	07. 삭제 함수 선언
        ***********************************************************************/
        /**********************************************************************
        	08. 저장 함수 선언
        ***********************************************************************/
        /**********************************************************************
        	09. 초기화
        ***********************************************************************/
        /**********************************************************************
        	10. 출력 함수 선언
        ***********************************************************************/
        /**********************************************************************
        	11. ExcelDnwn 엑셀로 출력
        ***********************************************************************/
        /**********************************************************************
        	12. ExcelUpLoad 신규저장시
        ***********************************************************************/
        /**********************************************************************
        	13. Get, Set Method
        ***********************************************************************/
        /**********************************************************************
        	14. 기타 Control Event
        ***********************************************************************/
        /**
         * 복사 및 붙여넣기처리(Ctrl+C/Ctrl+V)
         **/
        this.grdCopyOrPaste01_onkeydown = function(obj,e)
        {
        	this.gfn_copyAndPastenGrid(obj,e);
        };

        /**
         * 복사 및 붙여넣기처리(Ctrl+C/Ctrl+V)
         **/
        this.grdCopyOrPaste02_onkeydown = function(obj,e)
        {
        	this.gfn_copyAndPastenGrid(obj,e);
        };
        /**
         *	selectType셀렉트 타입을 변경시 사용
         **/
        this.divSearch_cboPrefix_onitemchanged = function(obj,e)
        {
        	this.grdCopyOrPaste01.set_selecttype(e.postvalue);
        	this.grdCopyOrPaste02.set_selecttype(e.postvalue);

        	this.grdCopyOrPaste01.setFocus();
        };

        /**
         * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
            //return this.gfn_isUpdate(this.dsDetail);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.grdCopyOrPaste01.addEventHandler("onkeydown",this.grdCopyOrPaste01_onkeydown,this);
            this.grdCopyOrPaste02.addEventHandler("onkeydown",this.grdCopyOrPaste02_onkeydown,this);
            this.divSearch.form.cboSelectType.addEventHandler("onitemchanged",this.divSearch_cboPrefix_onitemchanged,this);
        };
        this.loadIncludeScript("SML023CellCopyAndPasteM01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
