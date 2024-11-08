(function()
{
    return function()  
	{
        this.on_loadAppVariables = function()
        {		
            var obj = null;
			// global dataobject
		
            // global dataset
            obj = new Dataset("gds_OpenMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WINID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_userInfoDb", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"32\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"32\"/><Column id=\"USER_PW\" type=\"STRING\" size=\"32\"/><Column id=\"SC_USER_PW\" type=\"STRING\" size=\"32\"/><Column id=\"DEPT\" type=\"STRING\" size=\"32\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"32\"/><Column id=\"HP_NO\" type=\"STRING\" size=\"32\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"32\"/><Column id=\"FIRST_LOGIN\" type=\"DATETIME\" size=\"17\"/><Column id=\"LAST_LOGIN\" type=\"DATETIME\" size=\"17\"/><Column id=\"LOGIN_ERROR\" type=\"STRING\" size=\"32\"/><Column id=\"PRE_PW\" type=\"STRING\" size=\"32\"/><Column id=\"PW_CHANGE_DAY\" type=\"STRING\" size=\"32\"/><Column id=\"PW_CHANGE_CYCLE\" type=\"STRING\" size=\"32\"/><Column id=\"PW_CHANGE_PERIOD\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"REG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"REG_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"MOD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MOD_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"AUTO_PLUS\" type=\"STRING\" size=\"32\"/><Column id=\"CMP_CD\" type=\"STRING\" size=\"32\"/><Column id=\"LANGUAGE\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_session", this);
            obj._setContents("<ColumnInfo><Column id=\"sessionId\" type=\"STRING\" size=\"256\"/><Column id=\"usrNo\" type=\"STRING\" size=\"256\"/><Column id=\"loinUsid\" type=\"STRING\" size=\"256\"/><Column id=\"usrNm\" type=\"STRING\" size=\"256\"/><Column id=\"usrEnm\" type=\"STRING\" size=\"256\"/><Column id=\"orgCd\" type=\"STRING\" size=\"256\"/><Column id=\"ctrCd\" type=\"STRING\" size=\"256\"/><Column id=\"plcCd\" type=\"STRING\" size=\"256\"/><Column id=\"areaCd\" type=\"STRING\" size=\"256\"/><Column id=\"agtCd\" type=\"STRING\" size=\"256\"/><Column id=\"agtEngAbnm\" type=\"STRING\" size=\"256\"/><Column id=\"ctrCurCd\" type=\"STRING\" size=\"256\"/><Column id=\"tmf\" type=\"STRING\" size=\"256\"/><Column id=\"sysdate\" type=\"STRING\" size=\"256\"/><Column id=\"localdate\" type=\"STRING\" size=\"256\"/><Column id=\"location\" type=\"STRING\" size=\"256\"/><Column id=\"ostype\" type=\"STRING\" size=\"256\"/><Column id=\"jobroll\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_Message", this);
            obj._setContents("<ColumnInfo><Column id=\"MSG_CODE\" type=\"STRING\" size=\"32\"/><Column id=\"MSG_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"MSG_TYPE\" type=\"STRING\" size=\"32\"/><Column id=\"MSG_TYPE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MSG_BTN\" type=\"STRING\" size=\"32\"/><Column id=\"MSG_BTN_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MSG_YN\" type=\"STRING\" size=\"32\"/><Column id=\"REG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"REG_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"MOD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MOD_DT\" type=\"DATETIME\" size=\"17\"/></ColumnInfo><Rows><Row><Col id=\"MSG_CODE\">MSG00001</Col><Col id=\"MSG_NAME\">메세지 입니다$1또는$2또는$3입니다.</Col><Col id=\"MSG_TYPE\">4</Col><Col id=\"MSG_TYPE_NM\">Information</Col><Col id=\"MSG_BTN\">0</Col><Col id=\"MSG_BTN_NM\">OK</Col><Col id=\"MSG_YN\">1</Col><Col id=\"REG_ID\">admin</Col><Col id=\"REG_DT\">20180919021119000</Col><Col id=\"MOD_ID\">admin</Col><Col id=\"MOD_DT\">20180919021119000</Col></Row><Row><Col id=\"MSG_CODE\">MSG00002</Col><Col id=\"MSG_NAME\">필수입력항목  [$1]을(를) 입력 하지 않으셨습니다. </Col><Col id=\"MSG_TYPE\">1</Col><Col id=\"MSG_TYPE_NM\">Error</Col><Col id=\"MSG_BTN\">1</Col><Col id=\"MSG_BTN_NM\">YES,NO</Col><Col id=\"MSG_YN\">1</Col><Col id=\"REG_ID\">admin</Col><Col id=\"REG_DT\">20180919011751000</Col><Col id=\"MOD_ID\">admin</Col><Col id=\"MOD_DT\">20180919011751000</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_UserAuth", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"32\"/><Column id=\"AUTH_CD\" type=\"STRING\" size=\"32\"/><Column id=\"AUTH_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"AUTH_CD_DC\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"USER_ID\">admin</Col><Col id=\"AUTH_CD\">0001</Col><Col id=\"AUTH_CD_NM\">테스트1</Col><Col id=\"AUTH_CD_DC\">테스트1</Col></Row><Row><Col id=\"USER_ID\">admin</Col><Col id=\"AUTH_CD\">0002</Col><Col id=\"AUTH_CD_NM\">테스트2</Col><Col id=\"AUTH_CD_DC\">테스트2</Col></Row><Row><Col id=\"USER_ID\">admin</Col><Col id=\"AUTH_CD\">0003</Col><Col id=\"AUTH_CD_NM\">테스트3</Col><Col id=\"AUTH_CD_DC\">테스트3</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_SystemDate", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"32\"/><Column id=\"YYYYMMDD\" type=\"STRING\" size=\"32\"/><Column id=\"KOR_YYYYMMDD\" type=\"STRING\" size=\"32\"/><Column id=\"YYYYMM\" type=\"STRING\" size=\"32\"/><Column id=\"MMDD\" type=\"STRING\" size=\"32\"/><Column id=\"MM\" type=\"STRING\" size=\"32\"/><Column id=\"DD\" type=\"STRING\" size=\"32\"/><Column id=\"MONTH_FIRST_DAY\" type=\"STRING\" size=\"32\"/><Column id=\"MONTH_LAST_DAY\" type=\"STRING\" size=\"32\"/><Column id=\"DAY_OF_WEEK\" type=\"STRING\" size=\"32\"/><Column id=\"DAY_OF_KOR_WEEK\" type=\"STRING\" size=\"32\"/><Column id=\"NOW_DATE_TIME\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"YYYY\">2019</Col><Col id=\"YYYYMMDD\">20190425</Col><Col id=\"KOR_YYYYMMDD\">2019. 04. 25. Thu</Col><Col id=\"YYYYMM\">201904</Col><Col id=\"MMDD\">0425</Col><Col id=\"MM\">04</Col><Col id=\"DD\">25</Col><Col id=\"MONTH_FIRST_DAY\">20190401</Col><Col id=\"MONTH_LAST_DAY\">20190430</Col><Col id=\"DAY_OF_WEEK\">5</Col><Col id=\"DAY_OF_KOR_WEEK\">Thu</Col><Col id=\"NOW_DATE_TIME\">20190425102906</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_Menu", this);
            obj._setContents("<ColumnInfo><Column id=\"LVL\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"32\"/><Column id=\"UP_MENU_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_DC\" type=\"STRING\" size=\"32\"/><Column id=\"PROG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"FORM_PATH\" type=\"STRING\" size=\"32\"/><Column id=\"FORM_ID\" type=\"STRING\" size=\"32\"/><Column id=\"FORM_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_LVL\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MENU_DIV\" type=\"STRING\" size=\"32\"/><Column id=\"LINK_YN\" type=\"STRING\" size=\"32\"/><Column id=\"SORT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"REG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"REG_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"MOD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MOD_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"REG_YN\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PRT_YN\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"DOWN_YN\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"AUTH_CD\" type=\"STRING\" size=\"32\"/><Column id=\"AUTH_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_NM_PATH\" type=\"STRING\" size=\"32\"/><Column id=\"IS_NEW\" type=\"STRING\" size=\"256\"/><Column id=\"IS_RET\" type=\"STRING\" size=\"256\"/><Column id=\"IS_SAVE\" type=\"STRING\" size=\"256\"/><Column id=\"IS_DEL\" type=\"STRING\" size=\"256\"/><Column id=\"IS_EXCEL\" type=\"STRING\" size=\"256\"/><Column id=\"IS_PRINT\" type=\"STRING\" size=\"256\"/><Column id=\"IS_CONFIRM\" type=\"STRING\" size=\"256\"/><Column id=\"IS_TMP1\" type=\"STRING\" size=\"256\"/><Column id=\"IS_TMP2\" type=\"STRING\" size=\"256\"/><Column id=\"IS_TMP3\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RET_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRINT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CONFIRM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TMP1_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TMP2_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TMP3_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROG_FG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_ExtOpenMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"menuCd\" type=\"STRING\" size=\"256\"/><Column id=\"menuNm\" type=\"STRING\" size=\"256\"/><Column id=\"WINID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_Component", this);
            obj._setContents("<ColumnInfo><Column id=\"COP_CODE\" type=\"STRING\" size=\"32\"/><Column id=\"COP_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"COP_YN\" type=\"STRING\" size=\"32\"/><Column id=\"REG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"REG_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"MOD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MOD_DT\" type=\"DATETIME\" size=\"17\"/></ColumnInfo><Rows><Row><Col id=\"COP_CODE\">COP00021</Col><Col id=\"COP_NAME\">로그인했습니다.</Col><Col id=\"COP_YN\">1</Col><Col id=\"REG_ID\">admin</Col><Col id=\"REG_DT\">20180113011822000</Col><Col id=\"MOD_ID\">admin</Col><Col id=\"MOD_DT\">20180113011824000</Col></Row><Row><Col id=\"COP_CODE\">COP00022</Col><Col id=\"COP_NAME\">로그아웃</Col><Col id=\"COP_YN\">1</Col><Col id=\"REG_ID\">admin</Col><Col id=\"REG_DT\">20180113012107000</Col><Col id=\"MOD_ID\">admin</Col><Col id=\"MOD_DT\">20180113012111000</Col></Row><Row><Col id=\"COP_CODE\">COP00032</Col><Col id=\"COP_NAME\">추가</Col><Col id=\"COP_YN\">1</Col><Col id=\"REG_ID\">admin</Col><Col id=\"REG_DT\">20180913133242000</Col><Col id=\"MOD_ID\">admin</Col><Col id=\"MOD_DT\">20180913133242000</Col></Row><Row><Col id=\"COP_CODE\">COP00033</Col><Col id=\"COP_NAME\">삭제</Col><Col id=\"COP_YN\">1</Col><Col id=\"REG_ID\">admin</Col><Col id=\"REG_DT\">20180913133242000</Col><Col id=\"MOD_ID\">admin</Col><Col id=\"MOD_DT\">20180913133242000</Col></Row><Row><Col id=\"COP_CODE\">COP00034</Col><Col id=\"COP_NAME\">저장</Col><Col id=\"COP_YN\">1</Col><Col id=\"REG_ID\">admin</Col><Col id=\"REG_DT\">20180913133242000</Col><Col id=\"MOD_ID\">admin</Col><Col id=\"MOD_DT\">20180913133242000</Col></Row><Row><Col id=\"COP_CODE\">COP00035</Col><Col id=\"COP_NAME\">조회</Col><Col id=\"COP_YN\">1</Col><Col id=\"REG_ID\">admin</Col><Col id=\"REG_DT\">20180913133242000</Col><Col id=\"MOD_ID\">admin</Col><Col id=\"MOD_DT\">20180913133242000</Col></Row><Row><Col id=\"COP_CODE\">COP00036</Col><Col id=\"COP_NAME\">엑셀다운로드</Col><Col id=\"COP_YN\">1</Col><Col id=\"REG_ID\">admin</Col><Col id=\"REG_DT\">20180913133612000</Col><Col id=\"MOD_ID\">admin</Col><Col id=\"MOD_DT\">20180913133612000</Col></Row><Row><Col id=\"COP_CODE\">COP00037</Col><Col id=\"COP_NAME\">[총 &lt;fc v=&apos;red&apos;&gt;&lt;b v=&apos;true&apos;&gt;0 &lt;/b&gt;&lt;/fc&gt;건]</Col><Col id=\"COP_YN\">1</Col><Col id=\"REG_ID\">admin</Col><Col id=\"REG_DT\">20180913140716000</Col><Col id=\"MOD_ID\">admin</Col><Col id=\"MOD_DT\">20180913140716000</Col></Row><Row><Col id=\"COP_CODE\">COP00030</Col><Col id=\"COP_NAME\">설명</Col><Col id=\"COP_YN\">1</Col><Col id=\"REG_ID\">admin</Col><Col id=\"REG_DT\">20180113012107000</Col><Col id=\"MOD_ID\">admin</Col><Col id=\"MOD_DT\">20180113012111000</Col></Row><Row><Col id=\"COP_CODE\">COP00031</Col><Col id=\"COP_NAME\">클래스</Col><Col id=\"COP_YN\">1</Col><Col id=\"REG_ID\">admin</Col><Col id=\"REG_DT\">20180113012107000</Col><Col id=\"MOD_ID\">admin</Col><Col id=\"MOD_DT\">20180113012111000</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_PopRtn", this);
            obj._setContents("");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_menuTabAuth", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TAB_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MAIN_TAB_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_ID\">MSPO001008</Col><Col id=\"TAB_ID\">tabpage00</Col><Col id=\"MAIN_TAB_YN\">1</Col></Row><Row><Col id=\"MENU_ID\">MSPO001008</Col><Col id=\"TAB_ID\">tabpage01</Col><Col id=\"MAIN_TAB_YN\">1</Col></Row><Row><Col id=\"MENU_ID\">MSPO001008</Col><Col id=\"TAB_ID\">tabpage02</Col><Col id=\"MAIN_TAB_YN\">1</Col></Row><Row><Col id=\"MENU_ID\">MSPO001008</Col><Col id=\"TAB_ID\">tabpage03</Col><Col id=\"MAIN_TAB_YN\">1</Col></Row><Row><Col id=\"MENU_ID\">MSPO001008</Col><Col id=\"TAB_ID\">tabpage04</Col><Col id=\"MAIN_TAB_YN\">1</Col></Row><Row><Col id=\"MENU_ID\">MSPO001008</Col><Col id=\"TAB_ID\">tabpage05</Col><Col id=\"MAIN_TAB_YN\">1</Col></Row><Row><Col id=\"MENU_ID\">MSSO000001</Col><Col id=\"TAB_ID\">tabpage00</Col><Col id=\"MAIN_TAB_YN\">0</Col></Row><Row><Col id=\"MENU_ID\">MSSO000001</Col><Col id=\"TAB_ID\">tabpage01</Col><Col id=\"MAIN_TAB_YN\">0</Col></Row><Row><Col id=\"MENU_ID\">MSSO000001</Col><Col id=\"TAB_ID\">tabpage02</Col><Col id=\"MAIN_TAB_YN\">0</Col></Row><Row><Col id=\"MENU_ID\">MSSO000001</Col><Col id=\"TAB_ID\">tabpage03</Col><Col id=\"MAIN_TAB_YN\">0</Col></Row><Row><Col id=\"MENU_ID\">MSSO000001</Col><Col id=\"TAB_ID\">tabpage04</Col><Col id=\"MAIN_TAB_YN\">0</Col></Row><Row><Col id=\"MENU_ID\">MSSO000001</Col><Col id=\"TAB_ID\">tabpage05</Col><Col id=\"MAIN_TAB_YN\">0</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_MyMenu", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LVL\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"32\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"32\"/><Column id=\"UP_MENU_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_DC\" type=\"STRING\" size=\"32\"/><Column id=\"PROG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"FORM_PATH\" type=\"STRING\" size=\"32\"/><Column id=\"FORM_ID\" type=\"STRING\" size=\"32\"/><Column id=\"FORM_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_LVL\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MENU_DIV\" type=\"STRING\" size=\"32\"/><Column id=\"LINK_YN\" type=\"STRING\" size=\"32\"/><Column id=\"SORT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"REG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"REG_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"MOD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MOD_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"REG_YN\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PRT_YN\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"DOWN_YN\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"AUTH_CD\" type=\"STRING\" size=\"32\"/><Column id=\"AUTH_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_NM_PATH\" type=\"STRING\" size=\"32\"/><Column id=\"IS_NEW\" type=\"STRING\" size=\"256\"/><Column id=\"IS_RET\" type=\"STRING\" size=\"256\"/><Column id=\"IS_SAVE\" type=\"STRING\" size=\"256\"/><Column id=\"IS_DEL\" type=\"STRING\" size=\"256\"/><Column id=\"IS_EXCEL\" type=\"STRING\" size=\"256\"/><Column id=\"IS_PRINT\" type=\"STRING\" size=\"256\"/><Column id=\"IS_CONFIRM\" type=\"STRING\" size=\"256\"/><Column id=\"IS_TMP1\" type=\"STRING\" size=\"256\"/><Column id=\"IS_TMP2\" type=\"STRING\" size=\"256\"/><Column id=\"IS_TMP3\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RET_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRINT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CONFIRM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TMP1_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TMP2_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TMP3_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROG_FG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_popupMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"caption\" type=\"STRING\" size=\"256\"/><Column id=\"enable\" type=\"STRING\" size=\"256\"/><Column id=\"userData\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">shapeFix</Col><Col id=\"level\">0</Col><Col id=\"caption\">틀고정 설정</Col><Col id=\"enable\">1</Col><Col id=\"userData\">1</Col></Row><Row><Col id=\"id\">shapeFree</Col><Col id=\"level\">0</Col><Col id=\"caption\">틀고정 해제</Col><Col id=\"enable\">1</Col><Col id=\"userData\">1</Col></Row><Row><Col id=\"id\"/><Col id=\"level\">0</Col><Col id=\"caption\">-</Col><Col id=\"enable\">0</Col><Col id=\"userData\">0</Col></Row><Row><Col id=\"id\">filter</Col><Col id=\"level\">0</Col><Col id=\"caption\">그리드 필터</Col><Col id=\"enable\">1</Col><Col id=\"userData\">1</Col></Row><Row><Col id=\"id\">filterfree</Col><Col id=\"level\">0</Col><Col id=\"caption\">그리드 필터 해제</Col><Col id=\"enable\">1</Col><Col id=\"userData\">1</Col></Row><Row><Col id=\"level\">0</Col><Col id=\"caption\">-</Col><Col id=\"enable\">0</Col><Col id=\"userData\">0</Col><Col id=\"id\"/></Row><Row><Col id=\"id\">replace</Col><Col id=\"level\">0</Col><Col id=\"caption\">찾기</Col><Col id=\"enable\">1</Col><Col id=\"userData\">1</Col></Row><Row><Col id=\"level\">0</Col><Col id=\"caption\">-</Col><Col id=\"enable\">0</Col><Col id=\"userData\">0</Col><Col id=\"id\"/></Row><Row><Col id=\"id\">formatInit</Col><Col id=\"level\">0</Col><Col id=\"caption\">초기상태로 복구</Col><Col id=\"enable\">1</Col><Col id=\"userData\">1</Col></Row></Rows>");
            this._addDataset(obj.name, obj);
            
            // global variable
            this._addVariable("gv_userId","admin");
            this._addVariable("gv_openCnt","15");
            this._addVariable("gv_binary","false");
            this._addVariable("JSESSIONID","");
            this._addVariable("gv_Compress","false");
            this._addVariable("gv_OpenArg","");
            this._addVariable("gv_sessionid","");
            this._addVariable("gv_cutPrgId","");
            this._addVariable("gv_cutPrgNm","");
            this._addVariable("gv_viewType","login");
            this._addVariable("gv_activeWinId","");
            this._addVariable("gv_Language","ko");
            this._addVariable("gv_Flag","false");
            this._addVariable("gv_runMode","L");
            
            obj = null;
        };
 
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("App_Desktop");
            this.set_screenid("Desktop_screen");

            if (this._is_attach_childframe)
            	return;
        
            // frame
            var mainframe = this.createMainFrame("mainframe","0","0","1920","1080",null,null,this);
            mainframe.getSetter("title").set("maintitle");
            mainframe.getSetter("defaultfont").set("");
            mainframe.set_resizable("true");
            mainframe.set_showtitlebar("true");
            mainframe.set_showstatusbar("false");
            mainframe.set_openstatus("maximize");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;        
            // tray

        };
        
        this.loadPreloadList = function()
        {

        };
        
        this.mainframe_createBodyFrame = function()
        {
            var frame0 = new VFrameSet("VFrameSet",null,null,null,null,null,null,this);
            frame0.set_separatesize("0,0,*,0");
            this.addChild(frame0.name, frame0);
            this.frame=frame0;

            var frame1 = new ChildFrame("TopFrame",null,null,null,null,null,null,"Frame::TopFrame.xfdl",frame0);
            frame1.set_showcascadetitletext("true");
            frame1.set_showtitlebar("false");
            frame1.set_dragmovetype("none");
            frame0.addChild(frame1.name, frame1);
            frame1.set_formurl("Frame::TopFrame.xfdl");


            var frame2 = new HFrameSet("HFrameSet",null,null,null,null,null,null,frame0);
            frame2.set_separatesize("225,15,*");
            frame0.addChild(frame2.name, frame2);

            var frame3 = new ChildFrame("frameLeft",null,null,null,null,null,null,"Frame::LeftFrame.xfdl",frame2);
            frame3.set_showtitlebar("false");
            frame3.set_dragmovetype("none");
            frame2.addChild(frame3.name, frame3);
            frame3.set_formurl("Frame::LeftFrame.xfdl");


            var frame4 = new ChildFrame("framHideShow",null,null,null,null,null,null,"Frame::HideShowFrame.xfdl",frame2);
            frame4.set_showtitlebar("false");
            frame4.set_showtitleicon("false");
            frame4.set_dragmovetype("none");
            frame2.addChild(frame4.name, frame4);
            frame4.set_formurl("Frame::HideShowFrame.xfdl");


            var frame5 = new VFrameSet("VFrameWork",null,null,null,null,null,null,frame2);
            frame5.set_separatesize("35,*");
            frame2.addChild(frame5.name, frame5);

            var frame6 = new ChildFrame("frameTab",null,null,null,null,null,null,"Frame::TabFrame.xfdl",frame5);
            frame6.set_showtitlebar("false");
            frame6.set_dragmovetype("none");
            frame5.addChild(frame6.name, frame6);
            frame6.set_formurl("Frame::TabFrame.xfdl");


            var frame7 = new FrameSet("workFrameSet",null,null,null,null,null,null,frame5);
            frame5.addChild(frame7.name, frame7);

            var frame8 = new ChildFrame("mainForm",null,null,null,null,null,null,"Frame::MainFrame.xfdl",frame7);
            frame8.set_dragmovetype("all");
            frame8.set_showtitlebar("false");
            frame8.set_openstatus("maximize");
            frame7.addChild(frame8.name, frame8);
            frame8.set_formurl("Frame::MainFrame.xfdl");


            var frame9 = new ChildFrame("commLogin",null,null,null,null,null,null,"Frame::Login.xfdl",frame0);
            frame9.set_dragmovetype("none");
            frame9.set_showtitlebar("false");
            frame0.addChild(frame9.name, frame9);
            frame9.set_formurl("Frame::Login.xfdl");


            var frame10 = new ChildFrame("BottomFrame",null,null,null,null,null,null,"Frame::BottomFrame.xfdl",frame0);
            frame10.set_showtitlebar("false");
            frame10.set_dragmovetype("none");
            frame0.addChild(frame10.name, frame10);
            frame10.set_formurl("Frame::BottomFrame.xfdl");
        };
        
        this.on_initEvent = function()
        {
            this.addEventHandler("onbeforeexit",this.Application_onbeforeexit,this);
            this.addEventHandler("onerror",this.Application_onerror,this);
            this.addEventHandler("onload",this.Application_onload,this);
            this.addEventHandler("onexit",this.Application_onexit,this);
            this.mainframe.addEventHandler("onsize",this.mainframe_onsize,this);
        };
        
        // script Compiler
        this.registerScript("App_Desktop.xadl", function() {
        /**********************************************************************************
         *  공통  변수, 객체, 상수를 정의
         **********************************************************************************/
        /**********************************************************************************
         각 프레임에 해당되는 객체 참조 변수
         **********************************************************************************/
        this.gv_appMainFrame        = "";   // MainFrame
        this.gv_appVFrameSet		= "";   // VFrameSet 프레임
        this.gv_appTopFrame     	= "";	// 상단 TOP프레임
        this.gv_appHFrameSet    	= "";	// 메뉴와 업무화면을 갖고있는 프레임셋
        this.gv_appLoginFrame 		= "";	// 로그인 프레임
        this.gv_appBottomFrame 		= "";	// 하단 프레임
        this.gv_appLeftFrame    	= "";	// 좌측 프레임
        this.gv_appHideShowFrame 	= "";   // 펄치기 접기 프레임
        this.gv_appVFrameWorkFrame  = "";   // 작업프레임
        this.gv_appTabFrame 		= "";	// MDI TAB 프레임
        this.gv_appWorkFrameSet 	= "";	// 업무화면을 관리하는 프레임셋
        this.gv_appMainForm 		= "";	// 하단 프레임

        /**********************************************************************************
         해당 PC의 시스템 정보
         **********************************************************************************/
        this.gv_osVersion		 = "";	// OS Version
        this.gv_navigatorName    = "";	// Browser 명("nexacro", "IE", "Chrome", "Gecko")
        this.gv_navigatorVersion = "";	// Browser Version
        this.gv_screenResolution = "";	// 첫번째 모니터의 Screen 해상도(V13에서는 getMonitorIndex 미지원)
        this.gv_screenWidth      = "";	// 첫번째 모니터의 Screen 가로 해상도
        this.gv_screenHeight     = "";	// 첫번째 모니터의 Screen 세로 해상도
        objApp                   = "";

        this.Application_onload = function(obj,e)
        {

        	objApp = nexacro.getApplication();

        	this.gv_appMainFrame        = objApp.mainframe;
        	this.gv_appVFrameSet 		= objApp.mainframe.VFrameSet;
            this.gv_appTopFrame 		= objApp.mainframe.VFrameSet.TopFrame;
            this.gv_appHFrameSet 		= objApp.mainframe.VFrameSet.HFrameSet;
            this.gv_appLoginFrame 		= objApp.mainframe.VFrameSet.commLogin;
        	this.gv_appBottomFrame 		= objApp.mainframe.VFrameSet.bottomFrame;
        	this.gv_appLeftFrame 		= objApp.mainframe.VFrameSet.HFrameSet.frameLeft;
        	this.gv_appHideShowFrame	= objApp.mainframe.VFrameSet.HFrameSet.framHideShow;
        	this.gv_appVFrameWorkFrame  = objApp.mainframe.VFrameSet.HFrameSet.VFrameWork;
            this.gv_appTabFrame 		= objApp.mainframe.VFrameSet.HFrameSet.VFrameWork.frameTab;
            this.gv_appWorkFrameSet 	= objApp.mainframe.VFrameSet.HFrameSet.VFrameWork.workFrameSet;
        	this.gv_appMainForm  		= objApp.mainframe.VFrameSet.HFrameSet.VFrameWork.workFrameSet.mainForm;

        	this.gv_appMainFrame.set_titletext("목포과학대학");   // 메이프레임의 타이틀.

         	// 실행경로에 따른 Service 지정
         	var appUrl      = objApp.xadl;
         	/*
        	//trace("1.appUrl   : " + appUrl);
        	//RUNTIME :1.appUrl : file://C:/eGovFrame-3.2/workspace/gan/src/main/webapp/msu/App_Desktop.xadl.js
        	//EI      :2.appUrl : http://localhost/msu/App_Desktop.xadl.js
        	*/
        	var appUrlSplit = appUrl.split("/");
        	var objEnv 		= nexacro.getEnvironment();
         	var service     = objEnv.services["svcurl"];	// TypeDefinition 접근하기위한객체
        	var protocol 	= appUrlSplit[0];   			// 프로토콜이 : RUNTIME(file:),WEB(http)

        	if (protocol != "file:")						// 전용브라우저가 안닌경우
         	{
         		service.set_url(protocol + "//" + appUrlSplit[2] + "/");
         		// localhost:8080 or localhost:80 일때는 로컬 Http 접속
         		if(appUrlSplit[2] == "localhost:8080" || appUrlSplit[2] == "localhost")
         		{
         			objApp.gv_runMode = "local";

         		}else if(appUrlSplit[2] == "30.111.100.102:8080")
         		{
         			// 개발 서버
         			objApp.gv_runMode = "dev";
         			objApp.gv_serverUrl = "http://"+appUrlSplit[2]+"/";

         		}else
         		{
         			// 운영 서버
         			objApp.gv_runMode = "prd";
         			objApp.gv_serverUrl = "https://"+appUrlSplit[2]+"/";
         		}
         	}
        	//trace("3.service.url : "+service.url);
        	// 시스템환경저장
        	this.gv_osVersion		 = system.osversion;
        	this.gv_navigatorName    = system.navigatorname;
        	this.gv_navigatorVersion = system.navigatorversion;

        	this.gv_screenResolution = system.getScreenResolution(1);
        	var arrScreenResolution  = this.gv_screenResolution.split(" ");
        	this.gv_screenWidth      = arrScreenResolution[0];
        	this.gv_screenHeight     = arrScreenResolution[1];
        	/************************* 시작 ******************************/
        	/*
        		trace("1.gv_osVersion        :  " + this.gv_osVersion);	     	//RUNTIME :  Windows 7 , IE : Windows 7
        		trace("2.gv_navigatorName    :  " + this.gv_navigatorName);		//RUNTIME :  nexacro , IE : IE
        		trace("3.gv_navigatorVersion :  " + this.gv_navigatorVersion);	//RUNTIME :  17 , IE : 11
        		trace("4.gv_screenResolution :  " + this.gv_screenResolution);	//RUNTIME :  1600 900 , IE : 1455 818
        	*/
        	/************************* 종료 ******************************/
        	objApp.gv_locale = "KO";
        	//this.gv_appTopFrame.form.fn_setTopMenu();
        };
        /*----------------------------------------------------------------------------------------------
         * 설명      : application onbeforeexit 실행시
         *---------------------------------------------------------------------------------------------*/
        this.Application_onbeforeexit = function(obj,e)
        {
        	//trace("application_onbeforeexit");
        };

        /*----------------------------------------------------------------------------------------------
         * 설명      : application onexit 실행시
         *---------------------------------------------------------------------------------------------*/

        this.Application_onexit = function(obj,e)
        {
        	//trace("application_onexit");
        };

        /*----------------------------------------------------------------------------------------------
         * 설명      : application onerror
         *---------------------------------------------------------------------------------------------*/

        this.Application_onerror = function(obj,e)
        {

        	trace("application_onerror > e.errorcode=["+e.errorcode +"] e.errormsg=["+ e.errormsg +"] e.statuscode=["+ e.statuscode +"]");

        	var arrMsg  = e.errormsg.split(")");

        	//사용자가 통신중에 ESC키 발생시
        	if( e.errorcode == -2147418039 )
        	{
        		return true;	//사용자가 통신중에 ESC키로 통신중단을 막을때 주석해제한다.
        	}

        	// Network이 연결이 끊어진경우
        	if (e.errorcode = -2147418085)
        	{
        		if (e.statuscode == 10060)
        		{
        			trace("application_onerror : 서버와의 통신이 원활하지 않습니다.");
        		} else if (e.statuscode == 0)
        		{	//timeout
        			trace("application_onerror : timeout 이 발생했습니다.");
        		} else if (e.statuscode == 404)
        		{	//404 에러시 처리 방안
        			trace("application_onerror : 404 에러가  발생했습니다.");
        			//gv_workFrame.form.div_work.set_url("frame::workFrameNofile.xfdl");
        		} else if (e.statuscode == 408)
        		{	//408 Request Timeout
        			trace("application_onerror : 408 Request Timeout 가 발생했습니다.");
        		} else if (e.statuscode == 500)
        		{	//500 에러시 처리 방안
        			trace("application_onerror : 500 에러 가 발생했습니다.");
        		} else if (e.statuscode == 503)
        		{	//"System is unavailable. Please reconnect after a while."
        			trace("application_onerror : System is unavailable. Please reconnect after a while.");
        		} else if (e.statuscode == 12029)
        		{
                    alert("서버에서 응답이 없습니다. 잠시후 다시 로그인하시기 바랍니다.\n\n( No response from the server. Again in a few minutes, please login. )");
        			nexacro.getApplication().exit();
        		}
        		else
        		{	// 미등록 오류 발생시.
        			//trace("application_onerror : 미등록 오류 발생했습니다. = " + e.statuscode + ":" + e.errormsg);
        		}
        	}
        };

        this.afn_logout = function()
        {
        	//this.gv_appTopFrame.form.gfn_logout();
        };

        this.mainframe_onsize = function(obj,e)
        {
        	if( system.navigatorname == "nexacro" )
        	{
        		if(e.cx < 1280 )
        		{
        			nexacro.getApplication().mainframe.set_width(1280);
        		}

        		if(e.cy < 720 )
        		{
        			nexacro.getApplication().mainframe.set_height(720);
        		}
        	}

        };


        });
        this.checkLicense("");
        
        this.loadPreloadList();
        this.loadCss("xcssrc::NxPivot.xcss");
        this.loadCss("xcssrc::gridExpr.xcss");
        this.loadIncludeScript("App_Desktop.xadl");
    };
}
)();
