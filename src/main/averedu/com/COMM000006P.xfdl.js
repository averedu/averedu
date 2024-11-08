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
            this.set_titletext("공통월달력(MonthCalendar)");
            if (Form == this.constructor)
            {
                this._setFormPosition(106,22);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_enableMonth", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new MaskEdit("mae_monthCal","0","0",null,"22","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autoselect("true");
            obj.set_format("####-##");
            obj.set_type("string");
            obj.set_limitbymask("integer");
            this.addChild(obj.name, obj);

            obj = new Button("btn_monthCal",null,"0","22","22","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_font("bold 18px/normal \"Gulim\"");
            obj.set_cssclass("btn_WF_ShuttleB");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdv_monthCal","0","22","201","175",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_cssclass("div_WF_ymCalSelect");
            this.addChild(obj.name, obj);

            obj = new Static("sta_calendarYY","0","0",null,"22","0",null,null,null,null,null,this.pdv_monthCal.form);
            obj.set_taborder("0");
            obj.set_text("2017");
            obj.set_background("#636363");
            obj.set_textAlign("center");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_color("#ffffff");
            this.pdv_monthCal.addChild(obj.name, obj);

            obj = new Button("btn_next",null,"0","22","22","0",null,null,null,null,null,this.pdv_monthCal.form);
            obj.set_taborder("1");
            obj.set_cursor("pointer");
            obj.set_cssclass("btn_WF_ShuttleR");
            this.pdv_monthCal.addChild(obj.name, obj);

            obj = new Button("btn_pre","0","0","22","22",null,null,null,null,null,null,this.pdv_monthCal.form);
            obj.set_taborder("2");
            obj.set_cursor("pointer");
            obj.set_cssclass("btn_WF_ShuttleL");
            this.pdv_monthCal.addChild(obj.name, obj);

            obj = new Button("btn_month01","0","22","49","50",null,null,null,null,null,null,this.pdv_monthCal.form);
            obj.set_taborder("3");
            obj.set_text("1월");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_cssclass("btn_WF_Crud");
            this.pdv_monthCal.addChild(obj.name, obj);

            obj = new Button("btn_month02","50","22","49","50",null,null,null,null,null,null,this.pdv_monthCal.form);
            obj.set_taborder("4");
            obj.set_text("2월");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_cssclass("btn_WF_Crud");
            this.pdv_monthCal.addChild(obj.name, obj);

            obj = new Button("btn_month03","100","22","49","50",null,null,null,null,null,null,this.pdv_monthCal.form);
            obj.set_taborder("5");
            obj.set_text("3월");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_cssclass("btn_WF_Crud");
            this.pdv_monthCal.addChild(obj.name, obj);

            obj = new Button("btn_month04","150","22","50","50",null,null,null,null,null,null,this.pdv_monthCal.form);
            obj.set_taborder("6");
            obj.set_text("4월");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_cssclass("btn_WF_Crud");
            this.pdv_monthCal.addChild(obj.name, obj);

            obj = new Button("btn_month05","0","73","49","50",null,null,null,null,null,null,this.pdv_monthCal.form);
            obj.set_taborder("7");
            obj.set_text("5월");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_cssclass("btn_WF_Crud");
            this.pdv_monthCal.addChild(obj.name, obj);

            obj = new Button("btn_month06","50","73","49","50",null,null,null,null,null,null,this.pdv_monthCal.form);
            obj.set_taborder("8");
            obj.set_text("6월");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_cssclass("btn_WF_Crud");
            this.pdv_monthCal.addChild(obj.name, obj);

            obj = new Button("btn_month07","100","73","49","50",null,null,null,null,null,null,this.pdv_monthCal.form);
            obj.set_taborder("9");
            obj.set_text("7월");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_cssclass("btn_WF_Crud");
            this.pdv_monthCal.addChild(obj.name, obj);

            obj = new Button("btn_month08","150","73","50","50",null,null,null,null,null,null,this.pdv_monthCal.form);
            obj.set_taborder("10");
            obj.set_text("8월");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.pdv_monthCal.addChild(obj.name, obj);

            obj = new Button("btn_month09","0","124","49","50",null,null,null,null,null,null,this.pdv_monthCal.form);
            obj.set_taborder("11");
            obj.set_text("9월");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_cssclass("btn_WF_Crud");
            this.pdv_monthCal.addChild(obj.name, obj);

            obj = new Button("btn_month10","50","124","49","50",null,null,null,null,null,null,this.pdv_monthCal.form);
            obj.set_taborder("12");
            obj.set_text("10월");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_cssclass("btn_WF_Crud");
            this.pdv_monthCal.addChild(obj.name, obj);

            obj = new Button("btn_month11","100","124","49","50",null,null,null,null,null,null,this.pdv_monthCal.form);
            obj.set_taborder("13");
            obj.set_text("11월");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_cssclass("btn_WF_Crud");
            this.pdv_monthCal.addChild(obj.name, obj);

            obj = new Button("btn_month12","150","124","50","50",null,null,null,null,null,null,this.pdv_monthCal.form);
            obj.set_taborder("14");
            obj.set_text("12월");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_cssclass("btn_WF_Crud");
            this.pdv_monthCal.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",106,22,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("COMM000006P.xfdl", function() {
        /**
        *  월달력
        *  @MenuPath
        *  @FileName 		cmmMonthCalendar.xfdl
        *  @Creator 		jiback
        *  @CreateDate 	    2017.12.26
        *  @LastModifier
        *  @LastModifyDate
        *  @Version 		1.0
        *  @Outline
        *  @Desction
        ************** 소스 수정 이력 *************************************************
        *    date          		Modifier            Description
        *******************************************************************************
        *  2017.12.26     	     jgj	            최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.gfv_gFunctionName = ""; //값이 변경될때 호출할 함수명
        this.gfv_sCallbackDef  = "";
        this.gfv_sBeforeValue  = "";
        this.gfv_sLimitMonth   = false;
        this.gfv_strDateNew    = "";
        //this.gfv_strDateNewNew;
        //this.gfv_strDateNewOld;


        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj, e)
        {
        	var objTarget = this.parent;
        	this.gfv_gFunctionName = objTarget.callbackfunc;

            //현재 년월 초기값설정
            //mae_monthCal.value = gfn_toDay().substr(0, 6);
        }

        // function form_onsetfocus(obj:Form, e:SetFocusEventInfo)
        // {
        // 	this.setFocus();
        // }

        /**
         * @desc 달력 띄우기
         * @param obj Button
         * @param e ClickEventInfo
         */
        this.btn_monthCal_onclick = function(obj,  e)
        {
        	var sVal = this.mae_monthCal.value;

        	if(!this.gfn_isNull(sVal))
        	{

        		sVal = nexacro.replaceAll(sVal," ","");
        		if(sVal.length > 4)
        		{
        			if(sVal.toString().substr(4) > 12)
        			{
        				this.gfn_alert( "1 ~ 12월만 가능합니다.");
        				//this.mae_monthCal.set_value(sVal.toString().substr(0,4));
        				this.mae_monthCal.set_value("");

        				this.mae_monthCal.setFocus();
        				this.mae_monthCal.setCaretPos(0);
        				return;
        			}
        		}
        	}else
        	{
        		this.mae_monthCal.set_value(this.gfn_getDate("date").substr(0, 6));
        	}

        	var nX = system.clientToScreenX(this.mae_monthCal, 0) - system.clientToScreenX(nexacro.getApplication().mainframe, 0);
        	var nY = system.clientToScreenY(this.mae_monthCal, parseInt(this.mae_monthCal.height)) - system.clientToScreenY(nexacro.getApplication().mainframe, 0);

        	this._gfn_setCalendar(this._getValue());
        	var nRtn = this.pdv_monthCal.trackPopup(nX,nY);
        	this.pdv_monthCal.form.btn_next.setFocus();
        }

        this.mae_monthCal_onkeydown = function(obj, e)
        {
        	if(e.keycode == 13 )
        	{
        		this.btn_monthCal_onclick();
        	}
        }

        /**
         * 월 버튼 클릭시 날짜 선택
         * @param obj:nuButton
         * @param e:ClickEventInfo
         */
        this.btn_month_onclick = function (obj,  e)
        {
        	var strYear	= this.gfv_strDateNew.substr(0, 4);
        	var strText	= obj.text;
        		strText = strText.replace("월","");

        	if (strText.length == 1)
        	{
        		this.gfv_strDateNew = strYear+"0"+strText;
        	}
        	if( strText =="0 month")
        	{
        		this.gfv_strDateNew = strYear+"00";
        	} else if(strText.length > 1)
        	{
        		this.gfv_strDateNew = strYear+strText;
        	}

        	this.pdv_monthCal.closePopup();

        	this._setValue(this.gfv_strDateNew);

        	if (!this.gfn_isNull(this.gfv_strDateNew) && !this.gfn_isNull(this.gfv_sCallbackDef))
        	{
        		//v_sBeforeValue = this.mae_monthCal.value;
        		this.all[this.gfv_sCallbackDef]; //2015
        	}

        	this._callBindFunction(); // 함수호출
        }

        /**
         * 작년으로 이동
         * @param obj:Button
         * @param e:ClickEventInfo
         */
        this.pdv_monthCal_btn_pre_onclick = function(obj,  e)
        {
        	var strYear	 = parseInt(this.gfv_strDateNew.substr(0, 4));
        	var strMonth = this.gfv_strDateNew.substr(4, 2);

        	strYear = strYear - 1;

        	this.pdv_monthCal.form.sta_calendarYY.set_text(strYear);
        	this.gfv_strDateNew = strYear.toString() + strMonth;

        	if(this.gfv_sLimitMonth){
        		this._gfn_setmonthCal();
        	}
        }

        /**
         * 내년으로 이동
         * @param obj:Button
         * @param e:ClickEventInfo
         */
        this.pdv_monthCal_btn_next_onclick = function(obj,  e)
        {
        	var strYear	= parseInt(this.gfv_strDateNew.substr(0, 4));
        	var strMonth = this.gfv_strDateNew.substr(4, 2);

        	strYear = strYear + 1;

        	this.pdv_monthCal.form.sta_calendarYY.set_text(strYear);
        	this.gfv_strDateNew = strYear.toString() + strMonth;

        	if(this.gfv_sLimitMonth){
        		this._gfn_setMonthCal();
        	}
        }

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/

        /**
         * @desc 년월값이 맞는지 검증
         * @param strYYMM 비교할 값
         * @return 체크한값
         */
        this._checkDate = function (strYYMM)
        {
        	// 년월의 값은 6자리로 제한.
        	if (strYYMM == null) strYYMM = "";
        	if (strYYMM.length != 6) strYYMM = "";

        	var strYear	= strYYMM.substr(0, 4);
        	var strMonth = parseInt(strYYMM.substr(4, 2));

        	if (strMonth < 0 || strMonth >= 13) strYYMM = "";

        	return strYYMM;
        }

        /**
         * @desc 값을 가지고 올때 연동해서 처리할 함수명을 설정
         * @param v_sCallbackInput 콜백함수설정

        this._setCallback = function (v_sCallbackInput)
        {
        	this.gfv_sCallbackDef = v_sCallbackInput;
        }
        */

        /**
         * @desc 종료월 초기값 결정
         * @param strDateNew 초기값
         */
        this._gfn_setCalendar = function (strDate)
        {
        	this.gfv_strDateNew = strDate;
        	strDateOld 			= strDate;

        	// 기본값 : 현재년월셋팅
        	if(this.gfn_isNull(this.gfv_strDateNew) || this.gfv_strDateNew.length < 4)
        	{
        		this.gfv_strDateNew = this.gfn_getDate("date").substr(0, 6);
        	}

        	var strYear	 = this.gfv_strDateNew.substr(0, 4);
        	var strMonth = parseInt(this.gfv_strDateNew.substr(4, 2));

        	this.pdv_monthCal.form.sta_calendarYY.set_text(strYear);

        }

        /**
         * @desc 값이 변경될때 마다 함수를 호출한다.
         */
        this._callBindFunction = function ()
        {

        	this.gfv_strDateNew = this._getValue();

        	if (!this.gfn_isNull(this.gfv_gFunctionName))
        	{

        		try
        		{
        // 			var callBackFunc = "this.getOwnerFrame()."+this.gfv_gFunctionName+"(strDateNew)";
        // 			trace("in >> "+ callBackFunc);
        //  			eval(callBackFunc);
         			this.lookupFunc(this.gfv_gFunctionName).call(this.gfv_strDateNew);

        		} catch(e)
        		{
        		}
        	}
        }

        /**
         * @desc 달력을 읽기 전용으로 할것인지 여부 설정
         * @param isReadonly
         */
        this._setReadonly = function (isReadonly)
        {
        	if (this.gfn_isNull(isReadonly))
        	{
                isReadonly = true;
        	}
        	if (isReadonly)
        	{
        	//	this.mae_monthCal.set_cssclass("msk_WF_Readonly");
        		this.mae_monthCal.set_readonly(true);
        		this.btn_monthCal.set_enable(false);
        	} else
        	{
        		//this.mae_monthCal.set_cssclass("");
        		this.mae_monthCal.set_readonly(false);
        		this.btn_monthCal.set_enable(true);
        	}
        }

        /**
         * @desc 달력을 필수 전용으로 할것인지 여부 설정
         * @param isRequired
         */
        this._setRequired = function(isRequired, strMsgKey)
        {
        	return;

        	if (this.gfn_isNull(isRequired))
        	{
                isRequired = true;
            }
        // 	_required = isRequired;
        // 	_msgkey = strMsgKey; 2015
        	if (isRequired)
        	{
        	//	this.mae_monthCal.set_cssclass("msk_WF_Essential");
        	} else
        	{
        		//this.mae_monthCal.set_cssclass("");
        	}
        }

        /**
         * calendar 에 focus 를 지정하자.
         */
        this._setFocus = function ()
        {
        	this.mae_monthCal.setFocus();
        }

        /**
         * @desc 달력 날짜 정합성 체크
         * @param strDateNew 입력받은 달력날짜
         */
        this._getIsDate = function(strValue)
        {
            //날짜가 4자리(MMdd), 8자리(yyyyMMdd)가 아닐 경우
        	if (!(String(strValue).trim().length == 6)) return false;

            if (String(strValue).trim().length == 6)
            {
                var nYear =  nexacro.toNumber(strValue.toString().substr(0,4));
                var nMonth = nexacro.toNumber(strValue.toString().substr(4,2));

                //입력받은 년월일이 값이 없을 경우
                if (this.gfn_isNull(nYear) || this.gfn_isNull(nMonth)) return false;

                //입력받은 월이 범위를 초과할 경우
                if (nMonth > 12 || nMonth < 1) return false;
            }

            return true;
        }

        this._getMaskLength = function(strValue)
        {
            var strValue = new String(strValue);
        	strValue = new String(strValue);
            if (strValue == null
             || strValue == "null"
             || strValue.trim().length <= 0
             || escape(strValue) == "undefined")
            {
                return 0;
            } else
            {
                return strValue.length;
            }
        }

        this._getValue = function()
        {
        	if(!this.gfn_isNull(this.mae_monthCal.value)){
        		var oParamData = this.mae_monthCal.value;
        		return nexacro.replaceAll(oParamData, " " , "");
        	}else{
        		return "";
        	}
        }

        this._setValue = function (strYYMM)
        {
        	this.mae_monthCal.set_value(this._checkDate(strYYMM));
        }

        this._clearValue = function ()
        {
        	this.mae_monthCal.set_value("");
        }

        this._enable = function(obj)
        {
        	if(obj){
        		this.mae_monthCal.set_enable(true);
        		this.btn_monthCal.set_enable(true);
        	}else{
        		this.mae_monthCal.set_enable(false);
        		this.btn_monthCal.set_enable(false);
        	}
        }

        this._readonly = function (obj)
        {
        	if(obj){
        		//this.mae_monthCal.set_cssclass("msk_WF_Readonly");
        		this.mae_monthCal.set_readonly(true);
        		this.btn_monthCal.set_enable(false);
        	}else{
        		//this.mae_monthCal.set_cssclass("");
        		this.mae_monthCal.readonly(false);
        		this.btn_monthCal.set_enable(true);
        	}
        }

        this._setMonth = function (ds)
        {
        	this.ds_enableMonth.copyData(ds);
        	this.gfv_sLimitMonth = true;
        }

        function pdv_MonthCal_onpopup(obj, e)
        {
        	if(this.gfv_sLimitMonth){
        		this._gfn_setMonthCal()
        	}
        }

        this._gfn_setMonthCal = function ()
        {
        	var strYear = this.gfv_strDateNew.substr(0, 4);
        	for(var i=1; i<=12;i++) {

        		var strMonth = this.gfn_lpad(String(i), "0", 2);
        		var sEnableMonth = this.ds_enableMonth.findRow(0,String(strYear+strMonth));
        		var strBtnMonth = this.all["pdv_monthCal.btn_Month"+String(strMonth)];

        		if(sEnableMonth >= 0 ){
        			strBtnMonth.set_enable(true);

        		}else{
        			strBtnMonth.set_enable(false);
        		}

        	}
        }

        this.mae_monthCal_onkillfocus = function(obj, e)
        {
        	if(!this.gfn_isNull(obj.value)){
        		if(obj.value.length == 6){
        			if(obj.value.toString().substr(4) > 12) {
        				this.gfn_alert("1 ~ 12월만 가능합니다.");
        				this.mae_monthCal.set_value(obj.value.toString().substr(0,4));

        				this.mae_monthCal.setFocus();
        				this.mae_monthCal.setCaretPos(5);
        				return;
        			}
        		}
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.mae_monthCal.addEventHandler("onkeydown",this.mae_monthCal_onkeydown,this);
            this.mae_monthCal.addEventHandler("onkillfocus",this.mae_monthCal_onkillfocus,this);
            this.btn_monthCal.addEventHandler("onclick",this.btn_monthCal_onclick,this);
            this.pdv_monthCal.form.btn_next.addEventHandler("onclick",this.pdv_monthCal_btn_next_onclick,this);
            this.pdv_monthCal.form.btn_pre.addEventHandler("onclick",this.pdv_monthCal_btn_pre_onclick,this);
            this.pdv_monthCal.form.btn_month01.addEventHandler("onclick",this.btn_month_onclick,this);
            this.pdv_monthCal.form.btn_month02.addEventHandler("onclick",this.btn_month_onclick,this);
            this.pdv_monthCal.form.btn_month03.addEventHandler("onclick",this.btn_month_onclick,this);
            this.pdv_monthCal.form.btn_month04.addEventHandler("onclick",this.btn_month_onclick,this);
            this.pdv_monthCal.form.btn_month05.addEventHandler("onclick",this.btn_month_onclick,this);
            this.pdv_monthCal.form.btn_month06.addEventHandler("onclick",this.btn_month_onclick,this);
            this.pdv_monthCal.form.btn_month07.addEventHandler("onclick",this.btn_month_onclick,this);
            this.pdv_monthCal.form.btn_month08.addEventHandler("onclick",this.btn_month_onclick,this);
            this.pdv_monthCal.form.btn_month09.addEventHandler("onclick",this.btn_month_onclick,this);
            this.pdv_monthCal.form.btn_month10.addEventHandler("onclick",this.btn_month_onclick,this);
            this.pdv_monthCal.form.btn_month11.addEventHandler("onclick",this.btn_month_onclick,this);
            this.pdv_monthCal.form.btn_month12.addEventHandler("onclick",this.btn_month_onclick,this);
        };
        this.loadIncludeScript("COMM000006P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
