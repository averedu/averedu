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
            this.set_titletext("rMateChart");
            if (Form == this.constructor)
            {
                this._setFormPosition(300,200);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new WebBrowser("webChart","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",300,200,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("COMM000011D.xfdl", function() {

        /**
         * 01. 업무구분	: 차트 샘플
         * 02. 프로그램명	: SYS905Chart
         * 03. 화면설명	: 차트
         * 04. 작성일		: 2016.08.03
         * 05. 작성자		: jiback
         * 06. 수정이력	:
         **************************************************************************************************
         *     수정일        이  름    사유
         **************************************************************************************************
         *     2016-08-03     jiback    최초 작성
         **************************************************************************************************
         */
        //=================================================================================================
        //	▷ Form Variables Definition
        //=================================================================================================
        this._layout;
        this._data;
        this.readYn      = "N";
        this.ExtCommPath = "";
        this.gvExtComm   = {};
        //=================================================================================================
        //	▶ Form Event(화면 Load Event 처리)
        //=================================================================================================
        this.form_onload = function(obj, e)
        {
        	/************************운영 처리 시작*******************************/
        	var objEnv 	  = nexacro.getEnvironment();
         	var service     = objEnv.services["svcurl"].url;	// TypeDefinition 접근하기위한객체
        	//this.webChart.set_url(service.url+"averedu/rMateChart/rMateChart.html");
        	/************************운영 처리 종료*******************************/

        // 	if(nexacro._Browser == "Runtime")
        // 	{
        //
        // 		this.ExtCommPath 	= "C:\\eGovFrame-3.6\\workspace\\averedu\\src\\main\\averedu\\install\\ExtCommonV17_64.dll";
        // 		this.gvExtComm   	= nexacro._addExtensionModule(this.ExtCommPath);
        // 		var arr             = this.gvExtComm._ext_getIPAddress();
        // 		/*
        // 		for(var i=0; i < arr.length; i++)
        // 		{
        // 			 trace("=====" + i + arr[i]);
        // 	    }
        // 		trace("load ExtComm.DLL Test : " + this.gvExtComm._ext_getIPAddress());
        // 		trace("load ExtComm.DLL Test : " + this.gvExtComm._ext_getMACAddress());
        // 		*/
        //
        // 		var strIp = "http://" +  arr[0] + ":8080/averedu/rMateChart/rMateChart.html";
        // 		this.webChart.set_url(strIp);
        // 	}else
        // 	{
        // 		this.webChart.set_url(""+service+"/averedu/rMateChart/rMateChart.html");
        //	}
        	this.webChart.set_url(""+service+"/averedu/rMateChart/rMateChart.html");

        }

        this.webChart_onloadcompleted = function(obj,e)
        {
        	this.readYn = "Y";
        	this.webChart.callMethod("ff_drawChart", this._layout, this._data);
        };


        this.ff_drawChart = function(layout, chartData)
        {
        	if(this.gfn_isNull(layout) || this.gfn_isNull(chartData))
        	{
        		this.gfn_alert("차트 정보가 올바르지 않습니다.");
        		return;
        	}
        	this._layout = layout;
        	this._data   = chartData;

        	if(this.readYn == "N")
        	{
        		return false;
        	}
        	this.webChart.callMethod("ff_drawChart", layout, chartData);
        }

        //=================================================================================================
        //	♨ Callback Function (트랜잭션 처리 후 함수 ) (fn_callback 고정)
        //=================================================================================================







        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.webChart.addEventHandler("onloadcompleted",this.webChart_onloadcompleted,this);
        };
        this.loadIncludeScript("COMM000011D.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
