(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("WorkTitleFrame");
            this.set_scrolltype("none");
            this.set_titletext("작업프레임제목");
            if (Form == this.constructor)
            {
                this._setFormPosition(1740,35);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_btnList", this);
            obj.set_keystring("al");
            obj._setContents("<ColumnInfo><Column id=\"IS_RET\" type=\"STRING\" size=\"256\"/><Column id=\"IS_NEW\" type=\"STRING\" size=\"256\"/><Column id=\"IS_SAVE\" type=\"STRING\" size=\"256\"/><Column id=\"IS_DEL\" type=\"STRING\" size=\"256\"/><Column id=\"IS_EXCEL\" type=\"STRING\" size=\"256\"/><Column id=\"IS_PRINT\" type=\"STRING\" size=\"256\"/><Column id=\"IS_CONFIRM\" type=\"STRING\" size=\"256\"/><Column id=\"IS_TMP1\" type=\"STRING\" size=\"256\"/><Column id=\"IS_TMP2\" type=\"STRING\" size=\"256\"/><Column id=\"IS_TMP3\" type=\"STRING\" size=\"256\"/><Column id=\"RET_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRINT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CONFIRM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TMP1_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TMP2_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TMP3_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NEW_NAME\">신규</Col><Col id=\"RET_NAME\">조회</Col><Col id=\"SAVE_NAME\">저장</Col><Col id=\"DEL_NAME\">삭제</Col><Col id=\"EXCEL_NAME\">엑셀</Col><Col id=\"PRINT_NAME\">출력</Col><Col id=\"CONFIRM_NAME\">확정</Col><Col id=\"IS_NEW\">1</Col><Col id=\"IS_RET\"/><Col id=\"IS_SAVE\">1</Col><Col id=\"IS_DEL\"/><Col id=\"IS_EXCEL\"/><Col id=\"IS_PRINT\"/><Col id=\"IS_CONFIRM\"/><Col id=\"IS_TMP1\"/><Col id=\"TMP1_NAME\">테스트</Col><Col id=\"IS_TMP2\"/><Col id=\"IS_TMP3\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("st_Navi2","500","6",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_textAlign("right");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnNew",null,"4","46","25","288",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("신규");
            obj.set_visible("false");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnNew00",null,"4","46","25","240",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_visible("false");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnNew01",null,"4","46","25","192",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_visible("false");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnNew02",null,"4","46","25","144",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("삭제");
            obj.set_visible("false");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnNew03",null,"4","46","25","96",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("엑셀");
            obj.set_visible("false");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnNew04",null,"4","46","25","48",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("출력");
            obj.set_visible("false");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnNew05",null,"4","46","25","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("확정");
            obj.set_visible("false");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("st_Navi","28","6",null,"22","1527",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_visible("true");
            obj.set_text("타이틀 영역");
            obj.set_cssclass("sta_WF_Title01");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("st_Navi3","228","5","555","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Button("btnMyMenu","0","6","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_visible("true");
            obj.set_text("☆");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("WorkTitleFrame.xfdl", function() {
        /**********************************************************************
        * FormID(화면  ID명) : MainFrame.xfdl(작업프레임제목및버튼권한)
        * 작 성		   일 명 : jiback
        * 작 성	       일 자 : 2018/09/19
        * 변 경        일 자 :
        * 변 경        자 명 :
        * 변경 및 수정 로 그 : 일자별로 변경자 및 변경사항을 간략히 기술
        ************************************************************************/
        /**********************************************************************
        	01. 전처리 공통 함수 선언
        ***********************************************************************/
        /**********************************************************************
        	02. 폼 변수 정의
        ***********************************************************************/
        this._gfv_preCommBtnLeft = 0;
        this._gfv_spaceBtn       = 4; //버튼간격
        this._gfv_initSpace      = 5; //오른쪽여백(버튼시작점)

        this._gfv_menuId 		 = "";
        /**********************************************************************
        	03. 폼 로드 및 언로드 선언
        ***********************************************************************/
        /**********************************************************************
        	04. 공통 코드 및 마스터 코드 선언
        ***********************************************************************/
        /**
         * @description 화면 온로드
        */
        this.form_onload = function(obj,e)
        {
        	 this.fn_setWorkTitleBtn(this.parent.parent.pv_menuTitle,this.parent.parent.pv_menuTitle2,this.parent.parent.pv_programId,this.parent.parent.pv_menuNmPath);

        	 this._gfv_menuId = this.parent.parent.pv_menuId;

             if(this.parent.parent.pv_popFlag != true || system.navigatorname == "nexacro" )               // 전용부라저에 MDI 및 모덜러스를사용시 , HTML5 MDI에사용
        	 {
        		 var nMenuRow = objApp.gds_Menu.findRow("MENU_ID", this._gfv_menuId);
        		 this.ds_btnList.copyRow(0, objApp.gds_Menu, nMenuRow);
        	 }else																							//html5 모덜러스 팝업띠울때 사용
        	 {
        		var nMenuRow = window.opener.objApp.gds_Menu.findRow("MENU_ID", this._gfv_menuId);
        		this.ds_btnList.copyRow(0, window.opener.objApp.gds_Menu, nMenuRow);
        	 }


        	 //로그인시 버튼권한을 this.ds_btnList여기에 카피한다) 구조는 아래와 같음(공통버튼 초기화함)
        	 for(var i=9; i>=0; i--)
        	 {
                if(this.ds_btnList.getColumn(0,i) == 1)
        		{
        			this._gfn_setCommBtn(this.gfn_trim(this.ds_btnList.getColID(i)).substr(3).toLowerCase(),this.gfn_trim(this.ds_btnList.getColumn(0,i+10)), i);
                }
            }

        	this.fn_setMyMenuBtn();
        };
        /*
         * 화면을 닫을때 처리하는함수
         */
        this.form_onclose = function(obj,e)
        {

        };

        /**********************************************************************
        	05. 콜백 함수 선언
        ***********************************************************************/
        /**********************************************************************
        	06. 조회 함수 선언
        ***********************************************************************/
        /**********************************************************************
        	07. 추가 함수 선언
        ***********************************************************************/
        /**********************************************************************
        	08. 삭제 함수 선언
        ***********************************************************************/
        /**********************************************************************
        	09. 저장 함수 선언
        ***********************************************************************/
        /**********************************************************************
        	10. 출력 함수 선언
        ***********************************************************************/
        /**********************************************************************
        	11. ExcelDnwn 엑셀로 출력
        ***********************************************************************/
        /**********************************************************************
        	12. ExcelUpLoad 엑셀업로드
        ***********************************************************************/
        /**********************************************************************
        	13. Get, Set Method
        ***********************************************************************/
        /**********************************************************************
        	14. 기타 Control Event
        ***********************************************************************/
        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/
        /************************************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         ************************************************************************************************/
        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /*
         * 처음 권한에따라 버튼을 동적으로 셋팅한다 db기준
         */
        this._gfn_setCommBtn = function(btnId, btnNm, nTaborder)
        {
            var fv_btnId  = btnId;
            var sCssClass = "";

            switch(fv_btnId.toUpperCase()) {
                case "NEW":
                    sCssClass = "btn_WF_Crud";
                    break;
                case "RET":
                    sCssClass = "btn_WF_Crud";
                    break;
                case "SAVE":
                    sCssClass = "btn_WF_Crud";
                    break;
                case "DEL":
                    sCssClass = "btn_WF_Crud";
                    break;
                case "EXCEL":
                    sCssClass = "btn_WF_Crud";
                    break;
                case "PRINT":
                    sCssClass = "btn_WF_Crud";
                    break;
                case "CONFIRM":
                    sCssClass = "btn_WF_Crud";
                    break;
                default:
                    sCssClass = "btn_WF_Crud";
                    break;
            }

            var nNmWidth = 70;

            if(btnNm.length > 2)
        	{
                var n_fontsize 	= btnNm.length;
                var n_mul 		= n_fontsize - 2;
                    nNmWidth  += (n_mul * 10);
                if( n_fontsize > 5 )
        		{
        			nNmWidth += 10;
                }
        		if( n_fontsize > 7 )
        		{
        			nNmWidth += 10;
                }
        		if( n_fontsize==5 || n_fontsize==7)
        		{
        			nNmWidth += 10;
        		}
        	}

            if(fv_btnId.toUpperCase() == "TMP3")
        	{
        		nNmWidth = 110;
            }

            var objButton = new Button(fv_btnId.toUpperCase(), null, 4, nNmWidth, 26, 0, null);
            this.addChild(fv_btnId.toUpperCase(), objButton);
            objButton.set_text(btnNm);
        	objButton.set_taborder(nTaborder);
            objButton.set_cssclass(sCssClass);
            objButton.addEventHandler( "onclick", this._gfn_btnClick, this);
            objButton.show(nTaborder);

            //처음이면
            if(this._gfv_preCommBtnLeft == 0)
        	{
        		this._gfv_preCommBtnLeft = this._gfv_initSpace;
            }

        	var objButtonRight = this._gfv_preCommBtnLeft+this._gfv_spaceBtn;
            objButton.set_right(objButtonRight);
            this._gfv_preCommBtnLeft = objButtonRight+objButton.getOffsetWidth();

        };
        /*
         * 동적인버튼을 클릭시 오픈한 폼에 대해서 공통버튼 적용
         */
        this._gfn_btnClick = function(obj, e)
        {
            //메뉴사용로그
            //this._gfn_tranLog(obj.text);
        	//trace(obj.name);
            try {
               	this.parent.parent.div_Work.form.fn_cmmBtnClick(obj.name.toLowerCase());
        	} catch(e) {
            }
        };

        /*
         * 동적인버튼 enable상태변경 함수
         */
        // 조회
        this.fn_retEnable = function(status)
        {
        	this.RET.set_enable(status);
        }

        // 신규
        this.fn_newEnable = function(status)
        {
        	this.NEW.set_enable(status);
        }

        // 저장
        this.fn_saveEnable = function(status)
        {
        	this.SAVE.set_enable(status);
        }

        // 삭제
        this.fn_delEnable = function(status)
        {
        	this.DEL.set_enable(status);
        }

        // 엑셀
        this.fn_excelEnable = function(status)
        {
        	this.EXCEL.set_enable(status);
        }

        // 출력
        this.fn_printEnable = function(status)
        {
        	this.PRINT.set_enable(status);
        }

        // 확정
        this.fn_confirmEnable = function(status)
        {
        	this.CONFIRM.set_enable(status);
        }

        // 여분1
        this.fn_tmp1Enable = function(status)
        {
        	this.TMP1.set_enable(status);
        }

        // 여분2
        this.fn_tmp2Enable = function(status)
        {
        	this.TMP2.set_enable(status);
        }

        // 여분3
        this.fn_tmp3Enable = function(status)
        {
        	this.TMP3.set_enable(status);
        }

        /*
         * 작업영역에 폼을 오픈시 기본 타이틀 및 폼의경로를셋팅(호출:WorkFrame호출한다.)
         */
        this.fn_setWorkTitleBtn = function (pv_menuTitle,pv_menuTitle2,pv_programId,pv_menuNmPath)
        {
        	this.st_Navi.set_text(pv_menuTitle);
        	this.st_Navi.set_font("bold 10pt Arial");
        	var objTextSize  = nexacro.getTextSize(this.st_Navi.text, this.st_Navi.font);
        	this.st_Navi.set_width(objTextSize.nx+40);

        	this.st_Navi3.set_text(this.gfn_trim(pv_menuTitle2).substr(1) + "  [" + pv_programId + "] ["+ pv_menuNmPath +"]");

        	//this.resetScroll();

        };

        /************************************************************************************************
        * 공통 버튼 호출 영역(공통버튼 사용에만사용)
        ************************************************************************************************/
        /*
         * _gfn_btnClick여기서 호출시 버튼을 클릭처릭(개인폼에 모든스크립터 복사함)
         */
        /*
        this.fn_cmmBtnClick = function(sBtn)
        {
        	switch(sBtn)
        	{
        		case "ret" :				//조회
        				this.fn_Ret();
        			break;
        		case "new" :				//신규
        				this.fn_New();
        			break;
        		case "del" :				//삭제
        				this.fn_Del();
        			break;
        		case "save" :				//저장
        				this.fn_Save();
        			break;
        		case "excel" :				//엑셀
        				this.fn_Excel();
        			break;
        		case "print" :				//출력
        				this.fn_Print();
        			break;
        		case "confirm" :			//확정
        				this.Confirm();
        			break;
        		case "tmp1" :				//여분버튼1
        				this.Tmp1();
        			break;
        		case "tmp2" :				//여분버튼2
        				this.Tmp2();
        			break;
        		case "tmp3" :				//여분버튼3
        				this.Tmp3();
        			break;

        		default :
        			break;
        	}
        };
        */
        /**
         * @description  즐겨찾기버튼 클릭 이벤트
        */
        this.btnMyMenu_onclick = function(obj,e)
        {
        	var bIsMymenu = false;
        	var sBtnText  = this.btnMyMenu.text;

        	if( sBtnText == "★")
        	{
        		bIsMymenu = true;
        	}

        	if(this.parent.parent.pv_popFlag != true || system.navigatorname == "nexacro" )               // 전용부라저에 MDI 및 모덜러스를사용시 , HTML5 MDI에사용
        	{
        		var objDs 		= objApp.gds_MyMenu;
        		var objMenuDs 	= objApp.gds_Menu;

        		objDs.set_enableevent(false);
        		objApp.gv_appLeftFrame.form.grdMyMenu.set_enableredraw(false);
        		if(bIsMymenu )
        		{
        			//즐겨찾기해제
        			var nRow = objDs.findRow("MENU_ID",this._gfv_menuId);
        			if( nRow > -1 )
        			{
        				objApp.gv_appLeftFrame.form.fn_setDeleteBookmark(this._gfv_menuId);
        			}
        		}else
        		{
        			//즐겨찾기추가
        			var nRow = objDs.findRow("MENU_ID",this._gfv_menuId);
        			if(nRow < 0)
        			{
        				objApp.gv_appLeftFrame.form.fn_setBookmarkRegister(this._gfv_menuId);
        			}

        		}
        		//TODO. MyMenu Transaction
        		objDs.set_enableevent(true);

        		objApp.gv_appLeftFrame.form.grdMyMenu.set_enableredraw(true);

        	}else
        	{
        		var objDs 		= window.opener.objApp.gds_MyMenu;
        		var objMenuDs 	= window.opener.objApp.gds_Menu;

        		objDs.set_enableevent(false);
        		window.opener.objApp.gv_appLeftFrame.form.grdMyMenu.set_enableredraw(false);
        		if(bIsMymenu )
        		{
        			//즐겨찾기해제
        			var nRow = objDs.findRow("MENU_ID",this._gfv_menuId);
        			if( nRow > -1 )
        			{
        				window.opener.objApp.gv_appLeftFrame.form.fn_setDeleteBookmark(this._gfv_menuId);
        			}
        		}else
        		{
        			//즐겨찾기추가
        			var nRow = objDs.findRow("MENU_ID",this._gfv_menuId);
        			if(nRow < 0)
        			{
        				window.opener.objApp.gv_appLeftFrame.form.fn_setBookmarkRegister(this._gfv_menuId);
        			}

        		}
        		//TODO. MyMenu Transaction
        		objDs.set_enableevent(true);
        		window.opener.objApp.gv_appLeftFrame.form.grdMyMenu.set_enableredraw(true);

        	}

        	nexacro.setPrivateProfile("gds_MyMenu", objDs.saveXML());
        	this.fn_setMyMenuBtn();
        };

        /**
         * @description 마이메뉴버튼 텍스트바꾸기<br>
        	즐겨찾기되어있는 화면 -> ★ <br>
        	즐겨찾기가안되있는화면 -> ☆
        */
        this.fn_setMyMenuBtn = function ()
        {
        	var objDs;
        	if(this.parent.parent.pv_popFlag != true || system.navigatorname == "nexacro" )               // 전용부라저에 MDI 및 모덜러스를사용시 , HTML5 MDI에사용
        	{
        		objDs = objApp.gds_MyMenu;
        	}else
        	{
        		objDs = window.opener.objApp.gds_MyMenu;
        	}

        	var nRow 	= objDs.findRow("MENU_ID", this._gfv_menuId);
        	if( nRow < 0 )
        	{
        		this.btnMyMenu.set_text("☆");
        		this.btnMyMenu.set_color("#000000");
        	}else
        	{
        		this.btnMyMenu.set_text("★");
        		this.btnMyMenu.set_color("#3026f2");
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclose",this.form_onclose,this);
            this.btnNew.addEventHandler("onclick",this.dvSearch_btnSearch_onclick,this);
            this.btnNew00.addEventHandler("onclick",this.dvSearch_btnSearch_onclick,this);
            this.btnNew01.addEventHandler("onclick",this.dvSearch_btnSearch_onclick,this);
            this.btnNew02.addEventHandler("onclick",this.dvSearch_btnSearch_onclick,this);
            this.btnNew03.addEventHandler("onclick",this.dvSearch_btnSearch_onclick,this);
            this.btnNew04.addEventHandler("onclick",this.dvSearch_btnSearch_onclick,this);
            this.btnNew05.addEventHandler("onclick",this.dvSearch_btnSearch_onclick,this);
            this.st_Navi.addEventHandler("onclick",this.st_Navi_onclick,this);
            this.btnMyMenu.addEventHandler("onclick",this.btnMyMenu_onclick,this);
        };
        this.loadIncludeScript("WorkTitleFrame.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
