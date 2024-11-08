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
            this.set_titletext("PopupMenuOPopupDivTrackPopup샘풀");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"RIMAK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"VALUE\">90</Col><Col id=\"NAME\">영국</Col><Col id=\"CODE\">001</Col><Col id=\"RIMAK\">1테스트입니다.</Col></Row><Row><Col id=\"VALUE\">40</Col><Col id=\"NAME\">독일</Col><Col id=\"CODE\">002</Col><Col id=\"RIMAK\">2테스트입니다.</Col></Row><Row><Col id=\"VALUE\">70</Col><Col id=\"NAME\">프랑스</Col><Col id=\"CODE\">003</Col><Col id=\"RIMAK\">3테스트입니다.</Col></Row><Row><Col id=\"VALUE\">80</Col><Col id=\"NAME\">포르투칼</Col><Col id=\"CODE\">004</Col><Col id=\"RIMAK\">4테스트입니다.</Col></Row><Row><Col id=\"VALUE\">90</Col><Col id=\"NAME\">대한민국</Col><Col id=\"CODE\">005</Col><Col id=\"RIMAK\">5테스트입니다.</Col></Row><Row><Col id=\"VALUE\">100</Col><Col id=\"NAME\">일본</Col><Col id=\"CODE\">006</Col><Col id=\"RIMAK\">6테스트입니다.</Col></Row><Row><Col id=\"VALUE\">70</Col><Col id=\"NAME\">러시아</Col><Col id=\"CODE\">007</Col><Col id=\"RIMAK\">7테스트입니다.</Col></Row><Row><Col id=\"VALUE\">80</Col><Col id=\"NAME\">호주</Col><Col id=\"CODE\">008</Col><Col id=\"RIMAK\">8테스트입니다.</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("PopupMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"idcolumn\" type=\"STRING\" size=\"256\"/><Column id=\"levelcolumn\" type=\"STRING\" size=\"256\"/><Column id=\"captioncolumn\" type=\"STRING\" size=\"256\"/><Column id=\"iconcolumn\" type=\"STRING\" size=\"256\"/><Column id=\"enablecolumn\" type=\"STRING\" size=\"256\"/><Column id=\"hotkeycolumn\" type=\"STRING\" size=\"256\"/><Column id=\"checkboxcolumn\" type=\"STRING\" size=\"256\"/><Column id=\"userdatacolumn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"idcolumn\">1</Col><Col id=\"levelcolumn\">0</Col><Col id=\"captioncolumn\">전화걸기</Col><Col id=\"enablecolumn\">true</Col><Col id=\"iconcolumn\"/><Col id=\"hotkeycolumn\"/><Col id=\"checkboxcolumn\"/><Col id=\"userdatacolumn\">체크1</Col></Row><Row><Col id=\"idcolumn\">2</Col><Col id=\"levelcolumn\">0</Col><Col id=\"captioncolumn\">문자보내기</Col><Col id=\"enablecolumn\">true</Col><Col id=\"iconcolumn\"/><Col id=\"hotkeycolumn\"/><Col id=\"checkboxcolumn\"/><Col id=\"userdatacolumn\">체크2</Col></Row><Row><Col id=\"levelcolumn\">0</Col><Col id=\"captioncolumn\">-</Col><Col id=\"iconcolumn\"/><Col id=\"enablecolumn\">true</Col><Col id=\"hotkeycolumn\"/><Col id=\"checkboxcolumn\"/><Col id=\"idcolumn\"/></Row><Row><Col id=\"idcolumn\">3</Col><Col id=\"levelcolumn\">0</Col><Col id=\"captioncolumn\">통화메모 등록</Col><Col id=\"iconcolumn\"/><Col id=\"enablecolumn\">true</Col><Col id=\"hotkeycolumn\"/><Col id=\"checkboxcolumn\"/><Col id=\"userdatacolumn\">체크3</Col></Row><Row><Col id=\"levelcolumn\">0</Col><Col id=\"captioncolumn\">-</Col><Col id=\"iconcolumn\"/><Col id=\"enablecolumn\">true</Col><Col id=\"hotkeycolumn\"/><Col id=\"checkboxcolumn\"/><Col id=\"idcolumn\"/></Row><Row><Col id=\"idcolumn\">4</Col><Col id=\"levelcolumn\">0</Col><Col id=\"captioncolumn\">통화내역 삭제</Col><Col id=\"iconcolumn\"/><Col id=\"enablecolumn\">true</Col><Col id=\"hotkeycolumn\"/><Col id=\"checkboxcolumn\"/><Col id=\"userdatacolumn\">체크4</Col></Row><Row><Col id=\"idcolumn\">5</Col><Col id=\"levelcolumn\">1</Col><Col id=\"captioncolumn\">통화이력 보기</Col><Col id=\"iconcolumn\">URL(&quot;theme://images/btn_WF_Excel.png&quot;)</Col><Col id=\"enablecolumn\">true</Col><Col id=\"hotkeycolumn\"/><Col id=\"checkboxcolumn\"/><Col id=\"userdatacolumn\">체크5</Col></Row><Row><Col id=\"levelcolumn\">1</Col><Col id=\"captioncolumn\">통화내역 다시 내려받기</Col><Col id=\"idcolumn\">6</Col><Col id=\"hotkeycolumn\"/><Col id=\"checkboxcolumn\"/><Col id=\"userdatacolumn\">체크6</Col></Row><Row><Col id=\"levelcolumn\">0</Col><Col id=\"captioncolumn\">-</Col><Col id=\"iconcolumn\"/><Col id=\"enablecolumn\">true</Col><Col id=\"hotkeycolumn\"/><Col id=\"checkboxcolumn\"/><Col id=\"idcolumn\"/></Row><Row><Col id=\"idcolumn\">7</Col><Col id=\"levelcolumn\">0</Col><Col id=\"captioncolumn\">전화번호 복사</Col><Col id=\"iconcolumn\"/><Col id=\"enablecolumn\">true</Col><Col id=\"hotkeycolumn\"/><Col id=\"checkboxcolumn\"/><Col id=\"userdatacolumn\">체크7</Col></Row><Row><Col id=\"idcolumn\">8</Col><Col id=\"levelcolumn\">0</Col><Col id=\"captioncolumn\">프로필 보기/수정</Col><Col id=\"hotkeycolumn\"/><Col id=\"checkboxcolumn\"/><Col id=\"userdatacolumn\">체크8</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPopupMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"idcolumn\" type=\"INT\" size=\"256\"/><Column id=\"captioncolumn\" size=\"256\" type=\"STRING\"/><Column id=\"levelcolumn\" type=\"INT\" size=\"256\"/><Column id=\"enablecolumn\" type=\"STRING\" size=\"256\"/><Column id=\"iconcolumn\" type=\"STRING\" size=\"256\"/><Column id=\"checkboxcolumn\" size=\"256\" type=\"STRING\"/><Column id=\"hotkeycolumn\" size=\"256\" type=\"STRING\"/><Column id=\"userdatacolumn\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"hotkeycolumn\">CTRL+A</Col><Col id=\"checkboxcolumn\"/><Col id=\"userdatacolumn\">참조1</Col><Col id=\"idcolumn\">1001</Col><Col id=\"captioncolumn\">메뉴1</Col><Col id=\"levelcolumn\">0</Col><Col id=\"iconcolumn\"/><Col id=\"enablecolumn\">true</Col></Row><Row><Col id=\"idcolumn\">1002</Col><Col id=\"captioncolumn\">-</Col><Col id=\"userdatacolumn\">-</Col><Col id=\"levelcolumn\">0</Col><Col id=\"enablecolumn\">true</Col><Col id=\"iconcolumn\"/><Col id=\"checkboxcolumn\"/><Col id=\"hotkeycolumn\"/></Row><Row><Col id=\"hotkeycolumn\"/><Col id=\"checkboxcolumn\"/><Col id=\"userdatacolumn\">참조2</Col><Col id=\"idcolumn\">2001</Col><Col id=\"captioncolumn\">메뉴2</Col><Col id=\"levelcolumn\">0</Col><Col id=\"iconcolumn\"/><Col id=\"enablecolumn\">true</Col></Row><Row><Col id=\"checkboxcolumn\"/><Col id=\"userdatacolumn\">참조3</Col><Col id=\"idcolumn\">3001</Col><Col id=\"captioncolumn\">메뉴3</Col><Col id=\"levelcolumn\">0</Col><Col id=\"iconcolumn\"/><Col id=\"enablecolumn\">true</Col><Col id=\"hotkeycolumn\"/></Row><Row><Col id=\"idcolumn\">3101</Col><Col id=\"levelcolumn\">1</Col><Col id=\"enablecolumn\">true</Col><Col id=\"userdatacolumn\">참조3_1</Col><Col id=\"captioncolumn\">메뉴3_1</Col><Col id=\"iconcolumn\">URL(&quot;theme://images/btn_WF_Excel.png&quot;)</Col><Col id=\"checkboxcolumn\"/><Col id=\"hotkeycolumn\"/></Row><Row><Col id=\"idcolumn\">3102</Col><Col id=\"captioncolumn\">메뉴3_2</Col><Col id=\"levelcolumn\">1</Col><Col id=\"enablecolumn\">true</Col><Col id=\"iconcolumn\"/><Col id=\"userdatacolumn\">참조3_2</Col><Col id=\"checkboxcolumn\">true</Col><Col id=\"hotkeycolumn\"/></Row><Row><Col id=\"idcolumn\">3002</Col><Col id=\"captioncolumn\">-</Col><Col id=\"levelcolumn\">0</Col><Col id=\"enablecolumn\">true</Col><Col id=\"iconcolumn\"/><Col id=\"checkboxcolumn\"/><Col id=\"hotkeycolumn\"/><Col id=\"userdatacolumn\">-</Col></Row><Row><Col id=\"hotkeycolumn\"/><Col id=\"checkboxcolumn\"/><Col id=\"userdatacolumn\">참조4</Col><Col id=\"idcolumn\">4001</Col><Col id=\"captioncolumn\">메뉴4</Col><Col id=\"levelcolumn\">0</Col><Col id=\"iconcolumn\"/><Col id=\"enablecolumn\">false</Col></Row><Row><Col id=\"hotkeycolumn\"/><Col id=\"checkboxcolumn\"/><Col id=\"userdatacolumn\">참조5</Col><Col id=\"idcolumn\">5001</Col><Col id=\"captioncolumn\">메뉴5</Col><Col id=\"levelcolumn\">0</Col><Col id=\"iconcolumn\"/><Col id=\"enablecolumn\">true</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_PopupDiv", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NAME\">영국</Col><Col id=\"CODE\">001</Col></Row><Row><Col id=\"NAME\">독일</Col><Col id=\"CODE\">002</Col></Row><Row><Col id=\"NAME\">프랑스</Col><Col id=\"CODE\">003</Col></Row><Row><Col id=\"NAME\">포르투칼</Col><Col id=\"CODE\">004</Col></Row><Row><Col id=\"NAME\">대한민국</Col><Col id=\"CODE\">005</Col></Row><Row><Col id=\"NAME\">일본</Col><Col id=\"CODE\">006</Col></Row><Row><Col id=\"NAME\">러시아</Col><Col id=\"CODE\">007</Col></Row><Row><Col id=\"NAME\">호주</Col><Col id=\"CODE\">008</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdList","10","55","48.84%","220",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_list");
            obj.getSetter("user_target").set("grd_list");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"CODE\"/><Cell col=\"1\" text=\"NAME\"/><Cell col=\"2\" text=\"VALUE\"/><Cell col=\"3\" text=\"RIMAK\"/></Band><Band id=\"body\"><Cell text=\"bind:CODE\"/><Cell col=\"1\" text=\"bind:NAME\"/><Cell col=\"2\" text=\"bind:VALUE\"/><Cell col=\"3\" text=\"bind:RIMAK\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","12","14","48.9%","33",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("그리드에 마우스 오른쪽을 클릭시 툴팁메뉴가 표시 하는 샘풀 (PopupMenu동적으로 생성한다.)");
            obj.set_textAlign("center");
            obj.set_background("#f80626");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","Static05:10","14",null,"33","15",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("그리드에 마우스 오른쪽을 클릭시 툴팁메뉴가 표시 하는 샘풀 (팝업을 메뉴를 만들어놓고 메뉴호출(정적))");
            obj.set_textAlign("center");
            obj.set_background("#f80626");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList2","grdList:13","58",null,"220","14",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_list");
            obj.getSetter("user_target").set("grd_list");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"CODE\"/><Cell col=\"1\" text=\"NAME\"/><Cell col=\"2\" text=\"VALUE\"/><Cell col=\"3\" text=\"RIMAK\"/></Band><Band id=\"body\"><Cell text=\"bind:CODE\"/><Cell col=\"1\" text=\"bind:NAME\"/><Cell col=\"2\" text=\"bind:VALUE\"/><Cell col=\"3\" text=\"bind:RIMAK\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new PopupMenu("pmuPopupMenu","1440","95","133","191",null,null,null,null,null,null,this);
            obj.set_innerdataset("PopupMenu");
            obj.set_captioncolumn("captioncolumn");
            obj.set_enablecolumn("enablecolumn");
            obj.set_iconcolumn("iconcolumn");
            obj.set_idcolumn("idcolumn");
            obj.set_levelcolumn("levelcolumn");
            obj.set_userdatacolumn("userdatacolumn");
            obj.set_checkboxcolumn("checkboxcolumn");
            obj.set_hotkeycolumn("hotkeycolumn");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","12","294",null,"33","12",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("그리드에 마우스 오른쪽을 클릭시 툴팁메뉴가 표시 하는 샘풀 (PopupMenu동적으로 생성한다.)");
            obj.set_textAlign("center");
            obj.set_background("#f80626");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList3","10","335",null,"300","10",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_list");
            obj.getSetter("user_target").set("grd_list");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"CODE\"/><Cell col=\"1\" text=\"NAME\"/><Cell col=\"2\" text=\"VALUE\"/><Cell col=\"3\" text=\"RIMAK\"/></Band><Band id=\"body\"><Cell text=\"bind:CODE\"/><Cell col=\"1\" text=\"bind:NAME\"/><Cell col=\"2\" text=\"bind:VALUE\"/><Cell col=\"3\" text=\"bind:RIMAK\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdvPopupDiv","200","644","269","222",null,null,null,null,null,null,this);
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grdListDiv","0","0",null,null,"0","2",null,null,null,null,this.pdvPopupDiv.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_PopupDiv");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"CODE\"/><Cell col=\"1\" text=\"NAME\"/></Band><Band id=\"body\"><Cell text=\"bind:CODE\"/><Cell col=\"1\" text=\"bind:NAME\"/></Band></Format></Formats>");
            this.pdvPopupDiv.addChild(obj.name, obj);

            obj = new PopupDiv("pdvPopupDiv01","549","667","346","128",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_border("2px solid #969696");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","4","5","333","112",null,null,null,null,null,null,this.pdvPopupDiv01.form);
            obj.set_taborder("0");
            this.pdvPopupDiv01.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","pdvPopupDiv01.form.TextArea00","value","ds_list","RIMAK");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SML026PopupMenuOrDivTrackPopupM01.xfdl", function() {
        /************************************************************************************************
         * 1.PopupMenu 동적 메뉴를 관리 처리.
         ************************************************************************************************/

        /*
         * 그리드에 마우스 오른쪽 클릭이벤트발생시 툴팁메뉴가 아온다.
         */
        this.grdList_onrbuttonup = function(obj,e)
        {
        	// 메뉴를 동적으로 만들어 화면에 오늘쪽메뉴가 보임.
         	// PopupMenu id 		: pmuGridMenu
        	// 표출할 메뉴 dataset : this.dsPopupMenu
        	var crtPopupMenuObj =  this.gfn_createPopupMenu(obj, e,"pmuGridMenu",this.dsPopupMenu,0, 0, 0, 0);

        	// 메뉴를 grid cell단위로 오른쪽에 오픈함.
        	this.gfn_gridMenuOpen(obj,e,crtPopupMenuObj);
        };

        /*
         * PopupMenu를 동적으로 만든다.
         */
        this.gfn_createPopupMenu = function (obj, e, toolBarCompId , dsMenuObj ,vLeft, vTop , vWidth, vHeight )
        {
        	if(e.row < 0)
        	{
        		return false;                                                       						// 해더클릭시 표시 하지 않음
        	}

        	this.ds_list.set_rowposition(e.row);															// 현재행을 선택한다.

        	var gridPopupMenuComp = new PopupMenu();														// 팝업메뉴를 생성
        	gridPopupMenuComp.init(toolBarCompId, vLeft, vTop , vWidth, vHeight);

        	gridPopupMenuComp.set_border("1px solid black");												// 팝업메뉴의 border 색을 지정한다
        	gridPopupMenuComp.set_innerdataset(dsMenuObj);													// 팝업메뉴를 지정하는 데이타셋(메뉴지정함)(필수)
        	gridPopupMenuComp.set_idcolumn("idcolumn");														// 메뉴를 구분하는 코드값(필수)
        	gridPopupMenuComp.set_captioncolumn("captioncolumn");											// 팝업메뉴에 표출되는 코드명(필수)
        	gridPopupMenuComp.set_levelcolumn("levelcolumn");												// 팝업메뉴에 레벨을 결정해줌(0레벨부터 설정)(필수)
        	gridPopupMenuComp.set_enablecolumn("enablecolumn");												// 아이템별로 enable treu/false (기본값은:true)
        	gridPopupMenuComp.set_iconcolumn("iconcolumn");                         						// 0번째에서는 아이콘 표시할수 없음 1레벨부터 가능 :URL("theme://images/btn_WF_Excel.png") 아이콘경로를 지정함.
        	gridPopupMenuComp.set_checkboxcolumn("checkboxcolumn");                 						// 체크박스를 표시(true)
        	gridPopupMenuComp.set_hotkeycolumn("hotkeycolumn");												// 단축키를 표시한다. CTRL+A
        	gridPopupMenuComp.set_userdatacolumn("userdatacolumn");											// 사용자 정의 변수임
        	//gridPopupMenuComp.set_itemheight(50);															// 아이템의 높이를 저정한다

        	this.removeChild(toolBarCompId);																// 동적으로 추가된 컴포넌트를 제거하는 메소드입니다.
        	this.addChild(toolBarCompId, gridPopupMenuComp);												// 동적으로 생성한 컴포넌트를 PopupMenu 의 자식 컴포넌트로 추가하는 메소드입니다.

        	gridPopupMenuComp.addEventHandler( "onmenuclick", 	this.pmuGridMenu_onmenuclick, 	this);	    // onmenuclick 이벤트를 설정한다.
        	gridPopupMenuComp.addEventHandler( "onmouseleave", 	this.pmuGridMenu_onmouseleave, 	this);      // onmouseleave 이벤트를 설정한다.
        	gridPopupMenuComp.show();																		// 동적 생성한 PopupMenu 을(를) 화면에 표시하는 메소드

        	return gridPopupMenuComp;																		// 팝업 메뉴 객체를 리턴한다.
        };
        /*
         * 그리드 위치를 지정하고 팝업메뉴를 표출한다.(1.표출방식은(스크린기준):trackPopup / 2컴포넌트를 기준 trackPopupByComponent)
         */
        this.gfn_gridMenuOpen = function (obj, e, PopupMenuObj)
        {
        	var arrCellRect = obj.getCellRect(e.row,e.cell);												// 그리드에 셀을 기준으로 표시
        	var nx 			= arrCellRect.left;                                     						// grid cell에 왼쪽라인에 팝업메뉴 표시
        	var ny 			= arrCellRect.top + obj.getRealRowFullSize("head");								// grid cell에 탑라인에 팝업메뉴 표시 + 해더에 높이사이즈

        	PopupMenuObj.trackPopupByComponent(obj, nx, ny);												// grid,x,y좌표에 팝업메뉴를 표출한다.

        };
        /*
         * 마우스 포인트가 나갈때 팝업메뉴를 닫는다.
         */
        this.pmuGridMenu_onmouseleave = function(obj,e)
        {
        	//this.pmuGridMenu.closePopup(); // 하부메뉴 마우스 포인터가 나갈 때 발생하는 이벤트가 버그로 인해 적용이 않됨.
        	obj.closePopup();                // 팝업메뉴가 수종을 닫는다.
        };
        /*
         * 메뉴를 클릭할때 처리하는 메소드
         */
        this.pmuGridMenu_onmenuclick = function(obj,e)
        {
        	//alert(e.id); == idcolumn
        	if(e.id == 1001)
        	{
        		trace("1.메뉴1=================>" + e.userdata);    //  e.userdata == userdatacolumn
        	}else if(e.id == 2001)
        	{
        		trace("2.메뉴2=================>" + e.userdata);
        	}else if(e.id == 3101)
        	{
        		trace("3.메뉴3_1=================>" + e.userdata);
        	}else if(e.id == 3102)
        	{
        		trace("4.메뉴3_2=================>" + e.userdata);
        	}else if(e.id == 4001)
        	{
        		trace("5.메뉴4=================>" + e.userdata);
        	}else if(e.id == 5001)
        	{
        		trace("6.메뉴5=================>" + e.userdata);
        	}
        	//this.pmuGridMenu.closePopup();
        	obj.closePopup(); //메뉴를 클릭시 팝업메뉴를 닫는다.
        };
        /************************************************************************************************
         * 2.PopupMenu 정적 메뉴를 관리 처리.
         ************************************************************************************************/
        this.grdList2_onrbuttonup = function(obj,e)
        {
        	this.ds_list.set_rowposition(e.row);
        	var arrCellRect = obj.getCellRect(e.row,e.cell);												// 그리드에 셀을 기준으로 표시
        	var nx 			= arrCellRect.left;                                     						// grid cell에 왼쪽라인에 팝업메뉴 표시
        	var ny 			= arrCellRect.top + obj.getRealRowFullSize("head");								// grid cell에 탑라인에 팝업메뉴 표시 + 해더에 높이사이즈

        	this.pmuPopupMenu.trackPopupByComponent(obj, nx, ny);												// grid,x,y좌표에 팝업메뉴를 표출한다.
        };

        this.pmuPopupMenu_onmenuclick = function(obj,e)
        {
        	trace(e.id); // e.id == idcolumn
        	trace(e.userdata); // e.userdata == userdatacolumn
        	if(e.id == 1)
        	{
        		trace("1.메뉴1=================>" + e.userdata);    //  e.userdata == userdatacolumn
        	}else if(e.id == 2)
        	{
        		trace("2.메뉴2=================>" + e.userdata);
        	}else if(e.id == 3)
        	{
        		trace("3.메뉴3=================>" + e.userdata);
        	}else if(e.id == 4)
        	{
        		trace("4.메뉴4=================>" + e.userdata);
        	}else if(e.id == 5)
        	{
        		trace("5.메뉴5=================>" + e.userdata);
        	}else if(e.id == 6)
        	{
        		trace("6.메뉴6=================>" + e.userdata);
        	}else if(e.id == 7)
        	{
        		trace("7.메뉴7=================>" + e.userdata);
        	}else if(e.id == 8)
        	{
        		trace("8.메뉴8=================>" + e.userdata);
        	}
        	//this.pmuGridMenu.closePopup();
        	obj.closePopup(); //메뉴를 클릭시 팝업메뉴를 닫는다.
        };

        this.pmuPopupMenu_onmouseleave = function(obj,e)
        {
        	obj.closePopup();
        };

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
            //return this.gfn_isUpdate(this.dsDetail);
        };

        /************************************************************************************************
         * 3.PopupDiv 정적인 팝업div사용
         ************************************************************************************************/
        this.grdList3_onrbuttonup = function(obj,e)
        {
        	if(e.row < 0 || e.cell < 0)
        	{
        		return false;
        	}

        	this.ds_list.set_rowposition(e.row);

        	var arrCellRect = obj.getCellRect(e.row,e.cell);												// 그리드에 셀을 기준으로 표시
        	var nx 			= arrCellRect.right-this.pdvPopupDiv.getOffsetWidth();                         	// grid cell에 왼쪽라인에 팝업메뉴 표시
        	var ny 			= arrCellRect.top + obj.getRealRowFullSize("head");								// grid cell에 탑라인에 팝업메뉴 표시 + 해더에 높이사이즈
        	if(e.cell == obj.getBindCellIndex("body","CODE") || e.cell == obj.getBindCellIndex("body","NAME"))
        	{
        		this.pdvPopupDiv.trackPopupByComponent(obj, nx, ny,null,null,"fn_Callback", true );

        	}
        };

        /* Grid 에서 PopupDiv 호출 후 리턴*/
        this.fn_Callback = function(objDiv, strReturnValue)
        {
        	//trace(objDiv);
        	if(!this.gfn_isNull(strReturnValue))
        	{
        		var arr_OpenArg  = strReturnValue.split(",");
        		var strItemCode  = arr_OpenArg[0];
        		var strItemName  = arr_OpenArg[1];

        		this.ds_list.setColumn(this.ds_list.rowposition,"CODE",strItemCode);
        		this.ds_list.setColumn(this.ds_list.rowposition,"NAME",strItemName);
        	}
        };

        this.pdvPopupDiv_grdListDiv_oncellclick = function(obj,e)
        {
        	var strArg  = this.ds_PopupDiv.getColumn(this.ds_PopupDiv.rowposition,"CODE") + ",";
        		strArg += this.ds_PopupDiv.getColumn(this.ds_PopupDiv.rowposition,"NAME");
        	this.pdvPopupDiv.closePopup(strArg);
        };

        this.grdList3_onmousemove = function(obj,e)
        {
        	if(e.row < 0 || e.cell < 0)
        	{
        		return false;
        	}

        	this.ds_list.set_rowposition(e.row);

        	var arrCellRect = obj.getCellRect(e.row,e.cell);												// 그리드에 셀을 기준으로 표시
        	var nx 			= arrCellRect.right-this.pdvPopupDiv01.getOffsetWidth();                         	// grid cell에 왼쪽라인에 팝업메뉴 표시
        	var ny 			= arrCellRect.top;								// grid cell에 탑라인에 팝업메뉴 표시 + 해더에 높이사이즈

        	if(e.cell == obj.getBindCellIndex("body","VALUE"))
        	{
        		this.pdvPopupDiv01.trackPopupByComponent(obj, nx, ny);
        	}
        };

        this.pdvPopupDiv_onmouseleave = function(obj,e)
        {
        	obj.closePopup();
        };

        this.pdvPopupDiv01_onmouseleave = function(obj,e)
        {
        	obj.closePopup();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ontimer",this.test_ontimer,this);
            this.grdList.addEventHandler("onrbuttonup",this.grdList_onrbuttonup,this);
            this.grdList2.addEventHandler("onrbuttonup",this.grdList2_onrbuttonup,this);
            this.pmuPopupMenu.addEventHandler("onmenuclick",this.pmuPopupMenu_onmenuclick,this);
            this.pmuPopupMenu.addEventHandler("onmouseleave",this.pmuPopupMenu_onmouseleave,this);
            this.grdList3.addEventHandler("onrbuttonup",this.grdList3_onrbuttonup,this);
            this.grdList3.addEventHandler("onmousemove",this.grdList3_onmousemove,this);
            this.pdvPopupDiv.addEventHandler("onmouseleave",this.pdvPopupDiv_onmouseleave,this);
            this.pdvPopupDiv.form.grdListDiv.addEventHandler("oncellclick",this.pdvPopupDiv_grdListDiv_oncellclick,this);
            this.pdvPopupDiv01.addEventHandler("onmouseleave",this.pdvPopupDiv01_onmouseleave,this);
        };
        this.loadIncludeScript("SML026PopupMenuOrDivTrackPopupM01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
