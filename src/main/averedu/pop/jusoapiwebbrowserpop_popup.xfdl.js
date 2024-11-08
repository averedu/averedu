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

            
            // UI Components Initialize
            obj = new WebBrowser("webOpenApi","0","30",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","522","2","45","26",null,null,null,null,null,null,this);
            obj.set_taborder("1");
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
        this.registerScript("jusoapiwebbrowserpop_popup.xfdl", function() {
        this._popup_onload = function(obj,e)
        {
        	//화면 로드시 웹브라우저 컴포넌트 url 연결
        	this.webOpenApi.set_url("http://localhost:8080/playnexacro_nana/service/juso/jusoopenapipopup.jsp");
        };

        this.btnClose_onclick = function(obj,e)
        {
        	//우편번호 검색화면 닫기
        	this.close();
        };

        this.webOpenApi_onusernotify = function(obj,e)
        {
        	//웹브라우저를 통해 로드된 웹페이지에서 정보 전달 시 발생 : onusernotify
        	var addData = e.userdata.split(",");

        	if(addData.length > 1)
        	{
        		//선택된 주소 결과 전달 및 검색화면 종료
        		this.close(e.userdata);
        	}
        };




        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this._popup_onload,this);
            this.webOpenApi.addEventHandler("onusernotify",this.webOpenApi_onusernotify,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
        };
        this.loadIncludeScript("jusoapiwebbrowserpop_popup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
