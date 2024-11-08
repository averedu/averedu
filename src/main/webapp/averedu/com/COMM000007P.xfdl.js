(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmMonthCalendar");
            this.set_titletext("공통그리드월달력(MonthCalendarGrid)");
            if (Form == this.constructor)
            {
                this._setFormPosition(201,193);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_enableMonth", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_monthCal","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta_calendarYY","0","0",null,"28","0",null,null,null,null,null,this.div_monthCal.form);
            obj.set_taborder("0");
            obj.set_text("2017");
            obj.set_background("#636363");
            obj.set_color("#ffffff");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_textAlign("center");
            this.div_monthCal.addChild(obj.name, obj);

            obj = new Button("btn_month01","0","28","51","55",null,null,null,null,null,null,this.div_monthCal.form);
            obj.set_taborder("1");
            obj.set_text("1월");
            obj.set_background("white");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.div_monthCal.addChild(obj.name, obj);

            obj = new Button("btn_month02","50","28","51","55",null,null,null,null,null,null,this.div_monthCal.form);
            obj.set_taborder("2");
            obj.set_text("2월");
            obj.set_background("white");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.div_monthCal.addChild(obj.name, obj);

            obj = new Button("btn_month03","100","28","51","55",null,null,null,null,null,null,this.div_monthCal.form);
            obj.set_taborder("3");
            obj.set_text("3월");
            obj.set_background("white");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.div_monthCal.addChild(obj.name, obj);

            obj = new Button("btn_month04","150","28",null,"55","1",null,null,null,null,null,this.div_monthCal.form);
            obj.set_taborder("4");
            obj.set_text("4월");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_background("white");
            this.div_monthCal.addChild(obj.name, obj);

            obj = new Button("btn_month08","150","83",null,"55","1",null,null,null,null,null,this.div_monthCal.form);
            obj.set_taborder("5");
            obj.set_text("8월");
            obj.set_background("white");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.div_monthCal.addChild(obj.name, obj);

            obj = new Button("btn_month07","100","83","51","55",null,null,null,null,null,null,this.div_monthCal.form);
            obj.set_taborder("6");
            obj.set_text("7월");
            obj.set_background("white");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.div_monthCal.addChild(obj.name, obj);

            obj = new Button("btn_month06","50","83","51","55",null,null,null,null,null,null,this.div_monthCal.form);
            obj.set_taborder("7");
            obj.set_text("6월");
            obj.set_background("white");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.div_monthCal.addChild(obj.name, obj);

            obj = new Button("btn_month05","0","83","51","55",null,null,null,null,null,null,this.div_monthCal.form);
            obj.set_taborder("8");
            obj.set_text("5월");
            obj.set_background("white");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.div_monthCal.addChild(obj.name, obj);

            obj = new Button("btn_month09","0","138","51",null,null,"1",null,null,null,null,this.div_monthCal.form);
            obj.set_taborder("9");
            obj.set_text("9월");
            obj.set_background("white");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.div_monthCal.addChild(obj.name, obj);

            obj = new Button("btn_month10","50","138","51",null,null,"1",null,null,null,null,this.div_monthCal.form);
            obj.set_taborder("10");
            obj.set_text("10월");
            obj.set_background("white");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.div_monthCal.addChild(obj.name, obj);

            obj = new Button("btn_month11","100","138","51",null,null,"1",null,null,null,null,this.div_monthCal.form);
            obj.set_taborder("11");
            obj.set_text("11월");
            obj.set_background("white");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.div_monthCal.addChild(obj.name, obj);

            obj = new Button("btn_month12","150","138",null,null,"1","1",null,null,null,null,this.div_monthCal.form);
            obj.set_taborder("12");
            obj.set_text("12월");
            obj.set_background("white");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.div_monthCal.addChild(obj.name, obj);

            obj = new Button("btn_pre","0","0","22","28",null,null,null,null,null,null,this.div_monthCal.form);
            obj.set_taborder("13");
            obj.set_text("◀");
            this.div_monthCal.addChild(obj.name, obj);

            obj = new Button("btn_next",null,"0","22","28","0",null,null,null,null,null,this.div_monthCal.form);
            obj.set_taborder("14");
            obj.set_text("▶");
            this.div_monthCal.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",201,193,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("COMM000007P.xfdl", function() {
        /**
        *  월달력
        *  @MenuPath
        *  @FileName 		cmmMonthCalendarGrid.xfdl
        *  @Creator 		UI공통
        *  @CreateDate 	    2018.07.19
        *  @LastModifier
        *  @LastModifyDate
        *  @Version 		1.0
        *  @Outline
        *  @Desction
        ************** 소스 수정 이력 *************************************************
        *    date          		Modifier            Description
        *******************************************************************************
        *  2018.07.19     	    UI공통	            최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM onload
         ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.fn_SetGridValue(this.parent.compent, this.parent.row, this.parent.cell);
        };

        this.fn_SetGridValue = function(objGrid, nRow, nCell)
        {
        	var sValue = objGrid.getCellValue(nRow, nCell);
        	if(sValue == "yyyy-MM") sValue = null;

        	if(this.gfn_isNull(sValue)) sValue = this.gfn_getDate();

        	var sYear = sValue.substr(0,4);
        	var sMonth = sValue.substr(4,2);

        	this.fn_SetCalendar(sYear,sMonth);
        }

        //선택한 월에 해당하는 버튼에 효과
        this.fn_SetCalendar = function(sYear, sMonth)
        {
        	if(sMonth.trim().length == 0) return;

        	this.div_monthCal.form.sta_calendarYY.set_text(sYear);

        	var objBtn = this.div_monthCal.form.components["btn_month" +sMonth];

        	objBtn.setFocus();
        	//objBtn.set_background("yellow");
        	//objBtn.set_cssclass("btn_WF_CalendarMonthS");
        }

        //이전 월
        this.div_monthCal_btn_pre_onclick = function(obj,e)
        {
        	var sYear = this.div_monthCal.form.sta_calendarYY.text;
        	sYear = (parseInt(sYear) - 1).toString();

        	this.div_monthCal.form.sta_calendarYY.set_text(sYear);
        };

        //다음 월
        this.div_monthCal_btn_next_onclick = function(obj,e)
        {
        	var sYear = this.div_monthCal.form.sta_calendarYY.text;
        	sYear = (parseInt(sYear) + 1).toString();

        	this.div_monthCal.form.sta_calendarYY.set_text(sYear);
        };

        //월선택
        this.btn_month_onclick = function(obj,e)
        {
        	var sObjBtn;

        	/*
        	for (var i=1; i<=12; i++)
        	{
        		sObjBtn = eval("this.btn_month"+i);
        		sObjBtn.set_cssclass("btn_WF_CalendarMonth");
        	}

        	obj.set_cssclass("btn_WF_CalendarMonthS");
        	*/

        	this.fn_applyMonth(obj);
        };

        this.fn_applyMonth = function(obj, e)
        {
        	var sDate = this.div_monthCal.form.sta_calendarYY.text + obj.name.replace("btn_month","");

        	// 월시작일/월종료일 리턴값 추가
        	var arrDate = sDate;

        	this.parent.closePopup(arrDate);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_monthCal.form.btn_month01.addEventHandler("onclick",this.btn_month_onclick,this);
            this.div_monthCal.form.btn_month02.addEventHandler("onclick",this.btn_month_onclick,this);
            this.div_monthCal.form.btn_month03.addEventHandler("onclick",this.btn_month_onclick,this);
            this.div_monthCal.form.btn_month04.addEventHandler("onclick",this.btn_month_onclick,this);
            this.div_monthCal.form.btn_month08.addEventHandler("onclick",this.btn_month_onclick,this);
            this.div_monthCal.form.btn_month07.addEventHandler("onclick",this.btn_month_onclick,this);
            this.div_monthCal.form.btn_month06.addEventHandler("onclick",this.btn_month_onclick,this);
            this.div_monthCal.form.btn_month05.addEventHandler("onclick",this.btn_month_onclick,this);
            this.div_monthCal.form.btn_month09.addEventHandler("onclick",this.btn_month_onclick,this);
            this.div_monthCal.form.btn_month10.addEventHandler("onclick",this.btn_month_onclick,this);
            this.div_monthCal.form.btn_month11.addEventHandler("onclick",this.btn_month_onclick,this);
            this.div_monthCal.form.btn_month12.addEventHandler("onclick",this.btn_month_onclick,this);
            this.div_monthCal.form.btn_pre.addEventHandler("onclick",this.div_monthCal_btn_pre_onclick,this);
            this.div_monthCal.form.btn_next.addEventHandler("onclick",this.div_monthCal_btn_next_onclick,this);
        };
        this.loadIncludeScript("COMM000007P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
