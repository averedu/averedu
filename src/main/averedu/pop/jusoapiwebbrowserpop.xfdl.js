(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("jusoopenapi");
            this.set_titletext("팝업 API");
            this.set_font("normal 12pt/normal \"Arial\"");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Edit("edtPostcode","100","21","152","38",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnPostcode","264","20","186","39",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("팝업 API 우편번호 조회");
            obj.set_cssclass("btn_WF_add01");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAddress1","100","69","350","38",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAddress2","100","116","350","38",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAddressDetail","100","164","350","38",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","21","80","38",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("우편번호");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","10","69","80","38",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("도로명주소");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","10","116","80","38",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("지번주소");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","10","164","80","38",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("상세주소");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("jusoapiwebbrowserpop.xfdl", function() {
        this.formType = "";

        this.jusoopenapi_onload = function(obj,e)
        {
        	//팝업화면을 띄울 폼타입 설정, 버튼 선택 시 변경 가능
        	//팝업 API : "popup" , 검색 API : "search"
        	this.formType = "popup";
        };


        //우편번호 찾기 버튼 클릭
        this.btnPostcode_onclick = function(obj,e)
        {
        	//popup 화면으로 전달할 값
        	var oArg = {};

        	var sPopupUrl = "";
        	var sPopupId = "";
        	if(this.formType == "popup")
        	{
        		sPopupId = "popupapi";
        		sPopupUrl = "learn::jusoapiwebbrowserpop_popup.xfdl";
        	}

        	//modal popup open call
        	this.gfn_showModal(sPopupId, oArg, sPopupUrl, "popupCallBack", this, 10, 100, 570, 450);
        };

        //popup call back
        this.popupCallBack = function(sFormId, sArg)
        {
        	if(sFormId=="popupapi")
        	{
        		if(!this.gfn_isNull(sArg))
        		{
        			var addData = sArg.split(",");
        			this.edtPostcode.set_value(addData[0]);
        			this.edtAddress1.set_value(addData[1]);
        			this.edtAddress2.set_value(addData[3]);
        			this.edtAddressDetail.set_value(addData[2]);
        		}
        	}
        }

        /**
        * @description null value check
        * @param  pvVal - object (input value)
        * @return true/false (Null is true)
        */
        this.gfn_isNull = function (pvVal)
        {
        	if (new String(pvVal).valueOf() == "undefined")
        	{
        		return true;
        	}
        	if (pvVal == null)
        	{
        		return true;
        	}
        	if (("x" + pvVal == "xNaN") && (new String(pvVal.length).valueOf() == "undefined"))
        	{
        		return true;
        	}
        	if (pvVal.length == 0)
        	{
        		return true;
        	}

        	return false;
        }
        /**
        * @description Modal Dialog open
        * @param 	sPopupId = showmodal popup id,
        			arrArguments = null,
        			sPopupUrl = popup form url,
        			popupCallback = call back funtion,
        			obj = this,
        			nPopupLeft = popup position left,
        			nPopupTop = popup position top,
        			nPopupWidth = popup position width,
        			nPopupHeight = popup position height
        * @return
        */

        //옵션 간소화 팝업
        this.gfn_showModal = function (sPopupId, arrArguments, sPopupUrl, popupCallback, obj, nPopupLeft, nPopupTop, nPopupWidth, nPopupHeight)
        {
        	// child frame 생성
        	var childFrame = new ChildFrame();

        	// parent frame 정의
        	var parentFrame = obj.getOwnerFrame();

        	//child frame 초기화
        	childFrame.init(sPopupId, nPopupLeft, nPopupTop, nPopupWidth, nPopupHeight, null, null, sPopupUrl);

        	// Modal Dialog 추가 옵션
        	//autosize default true
        	childFrame.set_autosize(false);
        	//statusbar default true
        	childFrame.set_showtitlebar(false);

        	// 동적으로 생성한 ChildFrame을 Modal Dialog로 보여줌.
        	childFrame.showModal(parentFrame, arrArguments, obj, popupCallback, true);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.jusoopenapi_onload,this);
            this.btnPostcode.addEventHandler("onclick",this.btnPostcode_onclick,this);
        };
        this.loadIncludeScript("jusoapiwebbrowserpop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
