(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmPaging");
            this.set_titletext("공통페이징(Paging)");
            if (Form == this.constructor)
            {
                this._setFormPosition(416,26);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btn_first","0","0","26","26",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_enable("true");
            obj.set_text("<<");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_background("linear-gradient(to top,#eaeaea,#ffffff) whitesmoke");
            this.addChild(obj.name, obj);

            obj = new Button("btn_previous","30","0","26","26",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_enable("true");
            obj.set_text("<");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_background("linear-gradient(to top,#eaeaea,#ffffff) whitesmoke");
            this.addChild(obj.name, obj);

            obj = new Button("btn_page0","60","0","26","26",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("1");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_background("#565656");
            obj.set_color("#afafaf");
            this.addChild(obj.name, obj);

            obj = new Button("btn_page1","90","0","26","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("2");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_background("#ffffff");
            obj.set_color("#afafaf");
            this.addChild(obj.name, obj);

            obj = new Button("btn_page2","120","0","26","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("3");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_background("#ffffff");
            obj.set_color("#afafaf");
            this.addChild(obj.name, obj);

            obj = new Button("btn_page3","150","0","26","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("4");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_background("#ffffff");
            obj.set_color("#afafaf");
            this.addChild(obj.name, obj);

            obj = new Button("btn_page4","180","0","26","26",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("5");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_background("#ffffff");
            obj.set_color("#afafaf");
            this.addChild(obj.name, obj);

            obj = new Button("btn_page5","210","0","26","26",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("6");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_background("#ffffff");
            obj.set_color("#afafaf");
            this.addChild(obj.name, obj);

            obj = new Button("btn_page6","240","0","26","26",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("7");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_background("#ffffff");
            obj.set_color("#afafaf");
            this.addChild(obj.name, obj);

            obj = new Button("btn_page7","270","0","26","26",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("8");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_background("#ffffff");
            obj.set_color("#afafaf");
            this.addChild(obj.name, obj);

            obj = new Button("btn_next","360","0","26","26",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text(">");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_background("linear-gradient(to top,#eaeaea,#ffffff) whitesmoke");
            this.addChild(obj.name, obj);

            obj = new Button("btn_end","390","0","26","26",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text(">>");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_background("linear-gradient(to top,#eaeaea,#ffffff) whitesmoke");
            this.addChild(obj.name, obj);

            obj = new Button("btn_page8","300","0","26","26",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("9");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_background("#ffffff");
            obj.set_color("#afafaf");
            this.addChild(obj.name, obj);

            obj = new Button("btn_page9","330","0","26","26",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_background("#ffffff");
            obj.set_color("#afafaf");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",416,26,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("COMM000008P.xfdl", function() {
        this.iStartPageNo   = 0;
        this.iUnitSelRowNo  = 0;
        this.iStartSelRowNo = 1;
        this.iMaxPageNum    = 10;
        this.iTotCnt        = 0;
        this.lsDivPage      = "";
        this.lsDivPageNum   = "";
        this.lsTotCntDst    = "";
        this.lsFuncNm       = "";
        this.objDiv       = "";

        this.form_onload = function(obj,e)
        {
        	//Paging화면 호출Div 중앙정렬
        	var parentWidth = (this.parent.parent.getOffsetWidth() / 2);
        	var divWidth    = (this.width / 2);

        	this.parent.set_left(parentWidth - divWidth);
        };

        this.btn_page_onclick = function(obj,e)
        {
        	var iNo       = new Number(obj.text);
        	var iPageNo   = iNo % 10;
        	this.objDiv = obj.parent.parent;

        	if (iPageNo == 0)
        	{
        		iPageNo = 10;
        	}
        	// 호출되는 함수명 추가
        	if (!this.gfn_isNull(this.lsFuncNm))
        	{
        		this.lookupFunc(this.lsFuncNm + "(" + iNo + ")").call();
        	}
        	else
        	{
        		this.lookupFunc("fn_paging").call(iNo, this.objDiv);
        	}

        	this.fn_btnColorSet(iPageNo - 1);
        };

        // Page번호 Setting
        this.fn_SetPageNo = function (iVStartPageNo)
        {
        	var sPage = iVStartPageNo * this.iMaxPageNum;
        	var iPageNo = 0;
        	// 이전버튼 처리
        	if (iVStartPageNo < 1)
        	{
        		this.btn_first.set_visible(false);
        		this.btn_previous.set_visible(false);
        	}
        	else
        	{
        		this.btn_first.set_visible(true);
        		this.btn_previous.set_visible(true);
        	}

        	// 마지막 버튼 처리
        	if (this.iTotCnt <= ((sPage + 10) * this.iUnitSelRowNo))
        	{
        		this.btn_next.set_visible(false);
        		this.btn_end.set_visible(false);
        	}
        	else
        	{
        		this.btn_next.set_visible(true);
        		this.btn_end.set_visible(true);
        	}

        	var nCnt = "";
        	// 인덱스 번호 처리
        	for (var i = 0; i < this.iMaxPageNum; i++)
        	{
        		iPageNo = sPage + i + 1;
        		this.components["btn_page" + i].set_visible(true);
        		this.components["btn_page" + i].set_text(iPageNo);
        		this.components["btn_page" + i].set_tooltiptext(iPageNo);

        		if (this.iTotCnt > ((iPageNo - 1) * this.iUnitSelRowNo))
        		{
        			this.components["btn_page" + i].set_visible(true);
        			nCnt = i;
        		}
        		else
        		{
        			this.components["btn_page" + i].set_visible(false);
        		}
        	}

        	this.fn_setButtonOrder(nCnt + 1);
        };

        this.btn_next_onclick = function(obj,e)
        {
        	this.iStartPageNo = this.iStartPageNo + 1;

        	this.fn_SetPageNo(this.iStartPageNo);
        	this.fn_btnColorSet(0); //버튼색상설정
        	this.objDiv = obj.parent.parent;
        	var iValue = (this.iStartPageNo * this.iMaxPageNum) + 1;

        	// 호출되는 함수명 추가
        	if (!this.gfn_isNull(this.lsFuncNm))
        	{
        		this.components[this.lsFuncNm + "(" + iValue + ")"];
        	}
        	else
        	{
        		this.lookupFunc("fn_paging").call(iValue, this.objDiv);
        	}
        };

        this.btn_previous_onclick = function (obj,e)
        {
        	this.iStartPageNo = this.iStartPageNo - 1;
        	this.fn_SetPageNo(this.iStartPageNo);
        	this.fn_btnColorSet(9); //버튼색상설정
        	this.objDiv = obj.parent.parent;
        	var iValue = ((this.iStartPageNo + 1) * this.iMaxPageNum);

        	// 호출되는 함수명 추가
        	if (!this.gfn_isNull(this.lsFuncNm))
        	{
        		this.all[this.lsFuncNm + "(" + iValue + ")"];
        	}
        	else
        	{
        		this.lookupFunc("fn_paging").call(iValue, this.objDiv);
        	}
        };

        this.btn_first_onclick = function(obj,e)
        {
        	this.iStartPageNo = 0;
        	this.fn_SetPageNo(this.iStartPageNo);
        	this.fn_btnColorSet(0); //버튼색상설정
        	this.objDiv = obj.parent.parent;
        	// 호출되는 함수명 추가
        	if (!this.gfn_isNull(this.lsFuncNm))
        	{
        		this.all[this.lsFuncNm + "(" + 1 + ")"];
        	}
        	else
        	{
        		this.lookupFunc("fn_paging").call(1, this.objDiv);
        	}
        };

        this.btn_end_onclick = function (obj,e)
        {
        	this.iStartPageNo = parseInt(this.iTotCnt / (this.iUnitSelRowNo * 10));

        	var iNam = this.iTotCnt % this.iUnitSelRowNo;
        	var iValue = parseInt((this.iTotCnt / this.iUnitSelRowNo)) % 10;

        	var jValue = parseInt((this.iTotCnt / this.iUnitSelRowNo)) + 1;
        	var jTValue = parseInt(jValue % 10);


        	this.objDiv = obj.parent.parent;

        	if (iNam == 0)
        	{
        		iValue = iValue - 1;
        		jValue = jValue - 1;
        		// iStartPageNo = iStartPageNo -1;
        	}

        	if (iValue == -1)
        	{
        		iValue = 9;
        	}

        	if (iNam == 0)
        	{
        		jTValue = parseInt(jValue % 10); //페이지 끝번호

        		if (jTValue == 0)
        		{
        			this.iStartPageNo = this.iStartPageNo - 1;
        			this.fn_SetPageNo(this.iStartPageNo);
        		}
        		else
        		{
        			this.fn_SetPageNo(this.iStartPageNo);
        		}
        	}
        	else
        	{
        		this.fn_SetPageNo(this.iStartPageNo);
        	}

        	this.fn_btnColorSet(iValue); //버튼색상설정


        	// 호출되는 함수명 추가
        	if (!this.gfn_isNull(this.lsFuncNm))
        	{
        		this.all[this.lsFuncNm + "(" + jValue + ")"];
        	}
        	else
        	{
        		this.lookupFunc("fn_paging").call(jValue, this.objDiv);
        	}
        };

        // 업무화면에서 호출
        this.fn_pageSet = function (sTotalRowCnt, sPageSize, sdivPage, sNowPage, sCalFuncNm, sTotCntDst, sDivPageNum)
        {
        	this.iTotCnt = sTotalRowCnt;

        	// 호출되는 함수명 추가
        	if (!this.gfn_isNull(sCalFuncNm))
        	{
        		this.lsFuncNm = sCalFuncNm;
        	}

        	if (this.iTotCnt > 0)
        	{
        		// this.all[sdivPage].visible = true; //2015
        		this.set_visible(true);
        	}
        	else
        	{
        		if (this.gfn_isNull(sTotalRowCnt))
        		{
        		}
        		// this.all[sdivPage].visible = false; //2015
        		this.set_visible(false);
        	}

        	this.iUnitSelRowNo = sPageSize;

        	// 현재페이지가 첫 페이지 일경우
        	if (sNowPage == 1)
        	{
        		this.iStartPageNo = 0;
        	}

        	this.fn_SetPageNo(this.iStartPageNo);

        	// 현재페이지가 첫 페이지 일경우
        	if (sNowPage == 1)
        	{
        		this.fn_btnColorSet(0);
        	}
        };

        // 버튼색상설정
        this.fn_btnColorSet = function (sNo)
        {
        	for (var iLoop = 0; iLoop < 10; iLoop++)
        	{
        		if (iLoop == sNo)
        		{
        			//this.components["btn_page" + iLoop].set_cssclass("btn_WF_pagingActive");
        			this.components["btn_page" + iLoop].set_background("#565656");
        		}
        		else
        		{
        			//this.components["btn_page" + iLoop].set_cssclass("btn_WF_paging");
        			this.components["btn_page" + iLoop].set_cssclass("#ffffff");
        		}
        	}

        	this.fn_setButtonPos(); //버튼위치조정
        };

        //버튼위치 세팅
        this.fn_setButtonPos = function ()
        {
        	var iPos = 10;

        	for (var iLoop = 0; iLoop < 10; iLoop++)
        	{
        		if (this.all["btn_page" + iLoop].visible == false)
        		{
        			iPos = iLoop;
        			break;
        		}
        	}

        	this.fn_setButtonOrder(iPos);
        };

        /***********************************************************************************************
         * 함수명     : lfn_setButtonOrder()
         * 설명       : 버튼위치 정렬
         * parameter   : iPos - 안보이는 버튼 시작위치
         * return      : void
         ***********************************************************************************************/
        this.fn_setButtonOrder = function (iPos)
        {
        	if (iPos == 10)
        	{
        		this.btn_first.set_left(0);
        		this.btn_previous.set_left(30);
        		this.btn_next.set_left(360);
        		this.btn_end.set_left(390);

        		this.btn_page0.set_left(60);
        		this.btn_page1.set_left(90);
        		this.btn_page2.set_left(120);
        		this.btn_page3.set_left(150);
        		this.btn_page4.set_left(180);
        		this.btn_page5.set_left(210);
        		this.btn_page6.set_left(240);
        		this.btn_page7.set_left(270);
        		this.btn_page8.set_left(300);
        		this.btn_page9.set_left(330);
        	}
        	else if (iPos == 1)
        	{
        		this.btn_first.set_left(135);
        		this.btn_previous.set_left(165);

        		this.btn_page0.set_left(195);
        	}
        	else if (iPos == 2)
        	{
        		this.btn_first.set_left(120);
        		this.btn_previous.set_left(150);

        		this.btn_page0.set_left(180);
        		this.btn_page1.set_left(210);
        	}
        	else if (iPos == 3)
        	{
        		this.btn_first.set_left(105);
        		this.btn_previous.set_left(135);

        		this.btn_page0.set_left(165);
        		this.btn_page1.set_left(195);
        		this.btn_page2.set_left(225);
        	}
        	else if (iPos == 4)
        	{
        		this.btn_first.set_left(90);
        		this.btn_previous.set_left(120);

        		this.btn_page0.set_left(150);
        		this.btn_page1.set_left(180);
        		this.btn_page2.set_left(210);
        		this.btn_page3.set_left(240);
        	}
        	else if (iPos == 5)
        	{
        		this.btn_first.set_left(75);
        		this.btn_previous.set_left(105);

        		this.btn_page0.set_left(135);
        		this.btn_page1.set_left(165);
        		this.btn_page2.set_left(195);
        		this.btn_page3.set_left(225);
        		this.btn_page4.set_left(255);
        	}
        	else if (iPos == 6)
        	{
        		this.btn_first.set_left(60);
        		this.btn_previous.set_left(90);

        		this.btn_page0.set_left(120);
        		this.btn_page1.set_left(150);
        		this.btn_page2.set_left(180);
        		this.btn_page3.set_left(210);
        		this.btn_page4.set_left(240);
        		this.btn_page5.set_left(270);
        	}
        	else if (iPos == 7)
        	{
        		this.btn_first.set_left(45);
        		this.btn_previous.set_left(75);

        		this.btn_page0.set_left(105);
        		this.btn_page1.set_left(135);
        		this.btn_page2.set_left(165);
        		this.btn_page3.set_left(195);
        		this.btn_page4.set_left(225);
        		this.btn_page5.set_left(255);
        		this.btn_page6.set_left(285);
        	}
        	else if (iPos == 8)
        	{
        		this.btn_first.set_left(30);
        		this.btn_previous.set_left(60);

        		this.btn_page0.set_left(90);
        		this.btn_page1.set_left(120);
        		this.btn_page2.set_left(150);
        		this.btn_page3.set_left(180);
        		this.btn_page4.set_left(210);
        		this.btn_page5.set_left(240);
        		this.btn_page6.set_left(270);
        		this.btn_page7.set_left(300);
        	}
        	else if (iPos == 9)
        	{
        		this.btn_first.set_left(15);
        		this.btn_previous.set_left(45);

        		this.btn_page0.set_left(75);
        		this.btn_page1.set_left(105);
        		this.btn_page2.set_left(135);
        		this.btn_page3.set_left(165);
        		this.btn_page4.set_left(195);
        		this.btn_page5.set_left(225);
        		this.btn_page6.set_left(255);
        		this.btn_page7.set_left(285);
        		this.btn_page8.set_left(315);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btn_first.addEventHandler("onclick",this.btn_first_onclick,this);
            this.btn_previous.addEventHandler("onclick",this.btn_previous_onclick,this);
            this.btn_page0.addEventHandler("onclick",this.btn_page_onclick,this);
            this.btn_page1.addEventHandler("onclick",this.btn_page_onclick,this);
            this.btn_page2.addEventHandler("onclick",this.btn_page_onclick,this);
            this.btn_page3.addEventHandler("onclick",this.btn_page_onclick,this);
            this.btn_page4.addEventHandler("onclick",this.btn_page_onclick,this);
            this.btn_page5.addEventHandler("onclick",this.btn_page_onclick,this);
            this.btn_page6.addEventHandler("onclick",this.btn_page_onclick,this);
            this.btn_page7.addEventHandler("onclick",this.btn_page_onclick,this);
            this.btn_next.addEventHandler("onclick",this.btn_next_onclick,this);
            this.btn_end.addEventHandler("onclick",this.btn_end_onclick,this);
            this.btn_page8.addEventHandler("onclick",this.btn_page_onclick,this);
            this.btn_page9.addEventHandler("onclick",this.btn_page_onclick,this);
        };
        this.loadIncludeScript("COMM000008P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
