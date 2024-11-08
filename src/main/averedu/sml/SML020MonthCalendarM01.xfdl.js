(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sample025_monthCalendar");
            this.set_titletext("MONTHCALENDAR(월달력)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"PAY_YYMM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_monthCalendar", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","39","76","136","26",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_url("com::COMM000006P.xfdl");
            obj.getSetter("callbackfunc").set("fn_afterCall");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","200","71","120","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("_getValue");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","200","117","120","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("_setValue");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","200","163","120","35",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("_clearValue");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","200","209","120","35",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("_enable");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","200","255","120","35",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("_setFocus");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button06","200","301","120","35",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("_setReadonly");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","407","71",null,"259","3",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"151\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"년월\"/></Band><Band id=\"body\"><Cell displaytype=\"mask\" text=\"bind:PAY_YYMM\" calendardateformat=\"yyyy-MM\" calendareditformat=\"yyyy-MM\" calendardisplaynulltype=\"nulltext\" calendartype=\"spin\" expandshow=\"show\" expandsize=\"26\" maskeditformat=\"####-##\" maskeditautoselect=\"true\" maskedittype=\"string\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","0","1",null,"44","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("각종월달력 처리 샘풀(그리드상의 월달력처리)");
            obj.set_textAlign("center");
            obj.set_background("#f80626");
            obj.set_color("#ffffff");
            obj.set_font("bold 18px/normal \"Gulim\"");
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
            this._addPreloadList("fdl","com::COMM000006P.xfdl");
        };
        
        // User Script
        this.registerScript("SML020MonthCalendarM01.xfdl", function() {

        this.form_onload = function(obj, e)
        {
        	this.Div00.form._setValue(this.gfn_getDate("date").substr(0, 6));   //월달력에 로컬PC시간기준 월설정
        }

        //월선택시 콜백함수. callbackfunc user property생성후 정의
        this.fn_afterCall = function (sVal)
        {
        	trace("sVal >> "+sVal);
        }

        //월달력값 가져오기. _getValue()
        this.Button00_onclick = function(obj,  e)
        {
        	this.gfn_alert(this.Div00.form._getValue());
        }

        //월달력 값설정. _setValue
        this.Button01_onclick = function(obj,  e)
        {
        	this.Div00.form._setValue("201502");
        }

        //월달력 클리어. _clearValue
        this.Button02_onclick = function(obj,  e)
        {
        	this.Div00.form._clearValue();
        }

        // Enable / Disable
        this.Button03_onclick = function(obj,  e)
        {
        	this.Div00.form._enable(false); // true / false
        }

        // setFocus
        this.Button04_onclick = function(obj,  e)
        {
        	this.Div00.form._setFocus();
        }

        // ReadOnly
        this.Button06_onclick = function(obj,  e)
        {
        	this.Div00.form._setReadonly(true); // true/false
        }
        this.Grid00_onexpanddown = function(obj,e)
        {
        	if(e.col == 0)
        	{
        		this.fn_monCalCall(obj, e);
        	}
        };


        this.fn_monCalCall = function(obj, e)
        {
        	var objDs 		= obj.getBindDataset();
        	var nCellIndex 	= obj.getBindCellIndex("Body", "PAY_YYMM");
        	var nRow 		= e.row;
        	var nCol 		= objDs.getColIndex( "PAY_YYMM" );
        	var nCell 		= e.cell;
        	if (nCell== nCellIndex)
        	{
        		this.gfn_calendarMonthByGrid(obj, nRow, nCol, nCell);
        	}
        }

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
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button03.addEventHandler("onclick",this.Button03_onclick,this);
            this.Button04.addEventHandler("onclick",this.Button04_onclick,this);
            this.Button06.addEventHandler("onclick",this.Button06_onclick,this);
            this.Grid00.addEventHandler("onexpanddown",this.Grid00_onexpanddown,this);
        };
        this.loadIncludeScript("SML020MonthCalendarM01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
