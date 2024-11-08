(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("_popup");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(570,450);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsJuso", this);
            obj._setContents("<ColumnInfo><Column id=\"postcode\" type=\"STRING\" size=\"256\"/><Column id=\"roadaddress\" type=\"STRING\" size=\"256\"/><Column id=\"jibunaddress\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Edit("edtSearch","70","40","344","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autoselect("true");
            obj.set_font("normal 15pt/normal \"Arial\"");
            obj.set_imemode("hangul");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"40","80","35","70",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검색");
            obj.set_font("normal 15pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","20","114",null,"306","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsJuso");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"65\"/><Column size=\"220\"/><Column size=\"240\"/></Columns><Rows><Row size=\"36\" band=\"head\"/><Row size=\"36\"/></Rows><Band id=\"head\"><Cell text=\"우편번호\"/><Cell col=\"1\" text=\"도로명주소\"/><Cell col=\"2\" text=\"지번주소\"/></Band><Band id=\"body\"><Cell text=\"bind:postcode\"/><Cell col=\"1\" text=\"bind:roadaddress\" wordWrap=\"char\"/><Cell col=\"2\" text=\"bind:jibunaddress\" wordWrap=\"char\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staTip","70","80","430","33",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("예시 : 도로명(반포대로 58), 건물명(독립기념관), 지번(삼성동 25)");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","522","2","45","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("X");
            obj.set_font("normal 17pt/normal \"Arial\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",570,450,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("jusoapisearchpop_popup.xfdl", function() {
        //transaction
        this.fn_transaction = function()
        {
        	var sText = "'"+this.edtSearch.value+"'";

        	var strSvcID = "selectJuso";
        	var strURL = "http://localhost:8080/playnexacro_nana/service/juso/jusoopenapisearch.jsp"
        	var strInDatasets = "";
        	var strOutDatasets = "dsJuso=dsjuso";
        	var strCallbackFunc = "fn_callback";
        	var strArgument = "currentPage=" + 1;
        		strArgument += " countPerPage=" + 100;
        		strArgument += " keyword=" + sText;
        	this.transaction(strSvcID,strURL,strInDatasets,strOutDatasets,strArgument,strCallbackFunc);
        };

        //call back
        this.fn_callback = function(strSvcID, nErrorCode, strErrorMag)
        {
        	if(nErrorCode < 0)
        	{
        		trace("sErrorCode :: " + sErrorCode);
        		return;
        	}

        	if(strSvcID == "selectJuso")
        	{
        		//한 페이지에 최대 100 row 조회 가능 : 도로명 오픈 API 규정사항
        		//다량 데이터 필요시 페이징처리
        		if(this.dsJuso.getRowCount()>99)
        		{
        			alert("검색 결과가 너무 많습니다(100건 이상)\n검색어 예를 참조하여 검색하시기 바랍니다.");
        			this.edtSearch.setFocus();
        		}
        	}
        };

        this.btnSearch_onclick = function(obj,e)
        {
        	//주소 입력 후 검색버튼 클릭
        	this.fn_transaction();
        }

        this.btnClose_onclick = function(obj,e)
        {
        	//우편번호 검색화면 닫기
        	this.close();
        };

        this.grdList_oncelldblclick = function(obj,e)
        {
        	var sPostcode = this.dsJuso.getColumn(e.row,"postcode");
        	var sAddress = this.dsJuso.getColumn(e.row,"roadaddress");
        	var sJibunAddress = this.dsJuso.getColumn(e.row,"jibunaddress");

        	//"우편번호,도로명주소,지번주소" 순으로 문자열 생성 (팝업API 화면과 동일한 문자열 구조 생성)
        	var strData = sPostcode + "," + sAddress + "," + sJibunAddress;

        	//선택된 주소 결과 전달 및 검색화면 종료
        	this.close(strData);
        };

        this.edtSearch_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.fn_transaction();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.edtSearch.addEventHandler("onkeydown",this.edtSearch_onkeydown,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.grdList.addEventHandler("oncelldblclick",this.grdList_oncelldblclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
        };
        this.loadIncludeScript("jusoapisearchpop_popup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
