(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("NDSYS210M");
            this.set_titletext("제너레이트(Ibits/Map버전)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1045,701);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("DS_Master", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ROW_NO\" type=\"BIGDECIMAL\" size=\"0\"/><Column id=\"TABLE_NAME\" type=\"STRING\" size=\"128\"/><Column id=\"COMMENTS\" type=\"STRING\" size=\"4000\"/><Column id=\"OWNER\" type=\"STRING\" size=\"128\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_Detail", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"COL_NO\" type=\"STRING\" size=\"40\"/><Column id=\"COLUMN_NAME\" type=\"STRING\" size=\"128\"/><Column id=\"COMMENTS\" type=\"STRING\" size=\"4000\"/><Column id=\"VW_DATA_TYPE\" type=\"STRING\" size=\"170\"/><Column id=\"COL_NULL\" type=\"STRING\" size=\"8\"/><Column id=\"DATA_TYPE\" type=\"STRING\" size=\"128\"/><Column id=\"DATA_LENGTH\" type=\"BIGDECIMAL\" size=\"0\"/><Column id=\"COL_PK\" type=\"STRING\" size=\"1\"/><Column id=\"COL_DEF\" type=\"STRING\" size=\"0\"/><Column id=\"REMK_TEXT\" type=\"STRING\" size=\"0\"/><Column id=\"ORD\" type=\"STRING\" size=\"132\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOwer", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"32\"/><Column id=\"name\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds1Depth", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">mast</Col><Col id=\"NAME\">mast : 8084</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds2Depth", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LEVEL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">co</Col><Col id=\"NAME\">CO</Col><Col id=\"LEVEL\">mast</Col></Row><Row><Col id=\"CODE\">ms</Col><Col id=\"NAME\">MS</Col><Col id=\"LEVEL\">mast</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\"/><Col id=\"CODE_NAME\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cond", this);
            obj._setContents("<ColumnInfo><Column id=\"SYS_PART\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP_CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds3Depth", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"LEVEL2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">co</Col><Col id=\"NAME\">CO</Col><Col id=\"LEVEL\">mast</Col><Col id=\"LEVEL2\">ms</Col></Row><Row><Col id=\"CODE\">sr</Col><Col id=\"NAME\">SR</Col><Col id=\"LEVEL\">mast</Col><Col id=\"LEVEL2\">ms</Col></Row><Row><Col id=\"CODE\">so</Col><Col id=\"NAME\">SO</Col><Col id=\"LEVEL\">mast</Col><Col id=\"LEVEL2\">ms</Col></Row><Row><Col id=\"CODE\">cm</Col><Col id=\"NAME\">CM</Col><Col id=\"LEVEL\">mast</Col><Col id=\"LEVEL2\">ms</Col></Row><Row><Col id=\"CODE\">pa</Col><Col id=\"NAME\">PA</Col><Col id=\"LEVEL\">mast</Col><Col id=\"LEVEL2\">ms</Col></Row><Row><Col id=\"CODE\">po</Col><Col id=\"NAME\">PO</Col><Col id=\"LEVEL\">mast</Col><Col id=\"LEVEL2\">ms</Col></Row><Row><Col id=\"CODE\">em</Col><Col id=\"NAME\">EM</Col><Col id=\"LEVEL\">mast</Col><Col id=\"LEVEL2\">ms</Col></Row><Row><Col id=\"CODE\">sv</Col><Col id=\"NAME\">SV</Col><Col id=\"LEVEL\">mast</Col><Col id=\"LEVEL2\">ms</Col></Row><Row><Col id=\"CODE\">om</Col><Col id=\"NAME\">OM</Col><Col id=\"LEVEL\">mast</Col><Col id=\"LEVEL2\">ms</Col></Row><Row><Col id=\"CODE\">sd</Col><Col id=\"NAME\">SD</Col><Col id=\"LEVEL\">mast</Col><Col id=\"LEVEL2\">ms</Col></Row><Row><Col id=\"CODE\">ct</Col><Col id=\"NAME\">CT</Col><Col id=\"LEVEL\">mast</Col><Col id=\"LEVEL2\">ms</Col></Row><Row><Col id=\"CODE\">sy</Col><Col id=\"NAME\">SY</Col><Col id=\"LEVEL\">mast</Col><Col id=\"LEVEL2\">co</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new GroupBox("GroupBox00","5","2",null,"92","1",null,null,null,null,null,this);
            obj.set_background("aliceblue");
            obj.set_border("1px solid rgba(107,107,107,1)");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","2","165","308",null,null,"5",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("DS_Master");
            obj.set_cellsizingtype("col");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"115\"/><Column size=\"160\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"TABLE_NAME\"/><Cell col=\"2\" text=\"COMMENTS\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:TABLE_NAME\" textAlign=\"left\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:COMMENTS\" textAlign=\"left\" edittype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cbUsers","5","106","303","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_innerdataset("dsOwer");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Combo("cbUsers00","72","8","61","22",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_innerdataset("ds1Depth");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cbUsers01","202","8","86","22",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_innerdataset("ds2Depth");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("system");
            obj.set_value("system");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edPath","72","35","117","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_background("rgba(255,255,255,1)");
            this.addChild(obj.name, obj);

            obj = new Button("Search",null,"6","74","25","11",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("조회");
            obj.set_visible("false");
            obj.set_defaultbutton("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","10","13","56","18",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("RPJECT  :");
            obj.set_cssclass("sta_WF_SchTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","147","10","47","23",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("작업명 :");
            obj.set_cssclass("sta_WF_SchTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","295","9","50","23",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("개발명 :");
            obj.set_cssclass("sta_WF_SchTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","36","58","23",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Package :");
            obj.set_cssclass("sta_WF_SchTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","510","10","40","23",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("작업명");
            obj.set_cssclass("sta_WF_SchTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","651","10","74","23",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("작업구분명 :");
            obj.set_cssclass("sta_WF_SchTitle");
            this.addChild(obj.name, obj);

            obj = new Edit("edWorkName","557","8","91","22",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_inputmode("upper");
            this.addChild(obj.name, obj);

            obj = new Edit("edWorkName1","731","9","52","21",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_inputmode("upper");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","729","37","62","23",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("Contoller :");
            obj.set_cssclass("sta_WF_SchTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","13","62","55","23",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("Service  :");
            obj.set_cssclass("sta_WF_SchTitle");
            this.addChild(obj.name, obj);

            obj = new Edit("edController","798","36","237","23",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            this.addChild(obj.name, obj);

            obj = new Edit("edService","73","65","192","23",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","282","66","48","23",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("Dao   :");
            obj.set_cssclass("sta_WF_SchTitle");
            this.addChild(obj.name, obj);

            obj = new Edit("edDao","330","65","237","23",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","576","62",null,"23","404",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("IbitsXml  :");
            obj.set_cssclass("sta_WF_SchTitle");
            this.addChild(obj.name, obj);

            obj = new Edit("edRetrieve","643","64","206","23",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","853","66","58","23",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("Nexacro :");
            obj.set_cssclass("sta_WF_SchTitle");
            this.addChild(obj.name, obj);

            obj = new Edit("edXPlatForm","922","63","113","23",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            this.addChild(obj.name, obj);

            obj = new Tab("tbMain","315","106",null,null,"0%","5",null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_tabindex("0");
            obj.getSetter("scrollbars").set("autoboth");
            obj.set_font("9pt 굴림체");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tbSub1",this.tbMain);
            obj.set_text("Tab");
            this.tbMain.addChild(obj.name, obj);

            obj = new Grid("gd_Detail","5","5",null,null,"5","5",null,null,null,null,this.tbMain.tbSub1.form);
            obj.set_taborder("0");
            obj.set_binddataset("DS_Detail");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"93\"/><Column size=\"219\"/><Column size=\"111\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"167\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"컬럼ID\"/><Cell col=\"2\" text=\"컬럼명\"/><Cell col=\"3\" text=\"TYPE\"/><Cell col=\"4\" text=\"NULL\"/><Cell col=\"5\" text=\"PK\"/><Cell col=\"6\" text=\"DEFAULT\"/><Cell col=\"7\" text=\"엑셀임시설명\"/></Band><Band id=\"body\"><Cell text=\"bind:COL_NO\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:COLUMN_NAME\" textAlign=\"left\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"normal\" text=\"bind:COMMENTS\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:VW_DATA_TYPE\"/><Cell col=\"4\" text=\"bind:COL_NULL\"/><Cell col=\"5\" text=\"bind:COL_PK\"/><Cell col=\"6\" displaytype=\"text\" text=\"bind:COL_DEF\"/><Cell col=\"7\" displaytype=\"text\" edittype=\"text\" text=\"bind:REMK_TEXT\"/></Band></Format></Formats>");
            this.tbMain.tbSub1.addChild(obj.name, obj);

            obj = new Tabpage("tbSub3",this.tbMain);
            obj.set_text("Controller");
            this.tbMain.addChild(obj.name, obj);

            obj = new TextArea("taContoller","0","0",null,null,"0","0",null,null,null,null,this.tbMain.tbSub3.form);
            obj.set_taborder("0");
            obj.set_color("black");
            obj.set_font("9pt 굴림체");
            this.tbMain.tbSub3.addChild(obj.name, obj);

            obj = new Tabpage("tbSub4",this.tbMain);
            obj.set_text("Service");
            this.tbMain.addChild(obj.name, obj);

            obj = new TextArea("taSarvice","6","4",null,null,"0","0",null,null,null,null,this.tbMain.tbSub4.form);
            obj.set_taborder("0");
            obj.set_color("black");
            obj.set_font("9pt 굴림체");
            this.tbMain.tbSub4.addChild(obj.name, obj);

            obj = new Tabpage("tbSub6",this.tbMain);
            obj.set_text("Dao");
            this.tbMain.addChild(obj.name, obj);

            obj = new TextArea("taDao","6","4",null,null,"0","0",null,null,null,null,this.tbMain.tbSub6.form);
            obj.set_taborder("0");
            obj.set_color("black");
            obj.set_font("9pt 굴림체");
            this.tbMain.tbSub6.addChild(obj.name, obj);

            obj = new Tabpage("tbSub7",this.tbMain);
            obj.set_text("XQry");
            this.tbMain.addChild(obj.name, obj);

            obj = new TextArea("taXmlquery","6","4",null,null,"0.58%","0.8%",null,null,null,null,this.tbMain.tbSub7.form);
            obj.set_taborder("0");
            obj.set_color("black");
            obj.set_font("9pt 굴림체");
            this.tbMain.tbSub7.addChild(obj.name, obj);

            obj = new Tabpage("tbSub8",this.tbMain);
            obj.set_text("XOracle");
            this.tbMain.addChild(obj.name, obj);

            obj = new TextArea("taXOracle","6","4",null,null,"0%","0%",null,null,null,null,this.tbMain.tbSub8.form);
            obj.set_taborder("0");
            obj.set_color("black");
            obj.set_font("9pt 굴림체");
            this.tbMain.tbSub8.addChild(obj.name, obj);

            obj = new Tabpage("tbSub9",this.tbMain);
            obj.set_text("NXPlatForm");
            this.tbMain.addChild(obj.name, obj);

            obj = new TextArea("taPID","8","5",null,null,"0%","0",null,null,null,null,this.tbMain.tbSub9.form);
            obj.set_taborder("1");
            obj.getSetter("lengthunit").set("utf8");
            obj.set_color("black");
            obj.set_font("9pt 굴림체");
            this.tbMain.tbSub9.addChild(obj.name, obj);

            obj = new Tabpage("taSQL",this.tbMain);
            obj.set_text("사용할SQL");
            this.tbMain.addChild(obj.name, obj);

            obj = new TextArea("taSQL1","4","3",null,null,"0.55%","0.71%",null,null,null,null,this.tbMain.taSQL.form);
            obj.set_taborder("0");
            obj.set_value("  /*마스터 테이블 사용자별 조회(오라클기준임)*/\r\n  SELECT \r\n         ROWNUM AS ROW_NO                   -- 로번호\r\n      , TAB.TABLE_NAME                      -- 테이블명\r\n      , TAB_COM.COMMENTS                    -- 테이블 COMMENTS\r\n      , TAB.OWNER                           -- 테이블 사용자\r\n   FROM ALL_TABLES TAB                      -- 테이블 정보 \r\n      , ALL_TAB_COMMENTS TAB_COM            -- 주석정보\r\n   WHERE TAB.OWNER      = TAB_COM.OWNER    \r\n     AND TAB.TABLE_NAME = TAB_COM.TABLE_NAME    \r\n    -- AND TAB.TABLE_NAME LIKE \'\' || \'%\'\r\n     AND TAB.OWNER    = \'ADM\'\r\n   ORDER BY ROW_NO,TAB.TABLE_NAME    \r\n   ORDER BY TAB.TABLE_NAME \r\n  \r\n\r\n  /*마스터 테이블명을 받아서 디테일 조회하는 쿼리 마스터 테이블명을 받아야함*/\r\n  SELECT TO_CHAR(COL.COLUMN_ID) AS COL_NO                                                                                           --번호\r\n        , COL.COLUMN_NAME                                                                                                           --컬럼명\r\n        , COM.COMMENTS                                                                                                              --주석\r\n        , DECODE(COL.DATA_TYPE, \'NUMBER\', \'NUMBER(\'||COL.DATA_PRECISION||DECODE(COL.DATA_SCALE, 0, \'\', \',\'||COL.DATA_SCALE)||\')\',    \r\n                               \'DATE\', \'DATE\',    \r\n                               \'DATETIME\', \'DATE\', COL.DATA_TYPE||\'(\'||COL.DATA_LENGTH||\')\') AS VW_DATA_TYPE                        --데이타타입/사이지\r\n        , DECODE(COL.NULLABLE, \'N\', \'NOT NULL\', \'\') AS COL_NULL                                                                     --NOT NULL\r\n        , COL.DATA_TYPE                                                                                                             --데이타타입\r\n        , COL.DATA_LENGTH                                                                                                           --데이타길이\r\n        , CASE WHEN COL_CON.POSITION > 0 THEN \'Y\' ELSE \'\' END AS COL_PK                                                             --PK여부\r\n        , \'\' AS COL_DEF                                                                                                             --기본값\r\n        , \'\' AS REMK_TEXT                                                                                                           --엑셀출력시(입력값)\r\n        , COL.TABLE_NAME||TRIM(TO_CHAR(COL.COLUMN_ID, \'000\')) AS ORD                                                                --정렬순서\r\n   FROM ALL_TAB_COLUMNS COL\r\n      , ALL_COL_COMMENTS COM\r\n      , (\r\n            SELECT * FROM ALL_CONS_COLUMNS    \r\n            WHERE TABLE_NAME =  \'ACHV_BASC010\'          --받을인자\r\n            AND POSITION IS NOT NULL    \r\n        ) COL_CON    \r\n   WHERE COL.OWNER = COM.OWNER    \r\n     AND COL.TABLE_NAME  = COM.TABLE_NAME    \r\n     AND COL.COLUMN_NAME = COM.COLUMN_NAME    \r\n     AND COL.TABLE_NAME =  \'ACHV_BASC010\'               --받을인자\r\n     AND COL.OWNER = COL_CON.OWNER(+)    \r\n     AND COL.TABLE_NAME = COL_CON.TABLE_NAME(+)    \r\n     AND COL.COLUMN_NAME = COL_CON.COLUMN_NAME(+)    \r\n   ORDER BY ORD \r\n\r\n\r\n/*db기준에 서버 날짜 데이타 가지고 오기*/\r\nSELECT TO_CHAR(SYSDATE, \'YYYY\')AS YYYY                          --년     \r\n     , TO_CHAR(SYSDATE, \'YYYYMMDD\')AS YYYYMMDD                  --년/월/일\r\n     , TO_CHAR(SYSDATE, \'YYYYMM\')AS YYYYMM                      --년/월 \r\n     , TO_CHAR(SYSDATE, \'MMDD\')AS MMDD                          --월/일 \r\n     , TO_CHAR(SYSDATE, \'MM\')AS MM                              --년\r\n     , TO_CHAR(SYSDATE, \'DD\')AS DD                              --월    \r\n     , TO_CHAR(SYSDATE, \'YYYYMM\')||\'01\' AS MONTH_FIRST_DAY      --현재월에 시작일자\r\n     , TO_CHAR( LAST_DAY(SYSDATE), \'YYYYMMDD\')AS MONTH_LAST_DAY --현재월에 마지막일자   \r\n     , TO_CHAR(SYSDATE, \'D\') AS DAY_OF_WEEK                     --현재요일(1일요일~7토요일)\r\n     , TO_CHAR(SYSDATE, \'YYYYMMDDHH24MISS\') AS NOW_DATE_TIME    --현재일자/현재시간\r\nFROM DUAL ");
            obj.set_readonly("true");
            obj.set_background("white");
            obj.set_border("1px solid rgba(128,128,128,1)");
            obj.set_color("black");
            obj.set_font("9pt 굴림체");
            this.tbMain.taSQL.addChild(obj.name, obj);

            obj = new Button("btExcel",null,"103","91","25","13",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("엑셀다운로드");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","8","136","42","23",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("필터");
            obj.set_cssclass("sta_WF_SchTitle");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edRetrieve00","50","135","260","24",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_imemode("alpha");
            obj.set_inputmode("upper");
            this.addChild(obj.name, obj);

            obj = new Edit("edPath01","437","8","68","22",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_enable("false");
            obj.set_background("rgba(255,255,255,1)");
            obj.set_border("1px solid rgba(128,128,128,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","426","7","10","23",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("/");
            obj.set_cssclass("sta_WF_SchTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","790","10","160","23",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("1.메인: 공백,2팝업:P01,P02");
            obj.set_cssclass("sta_WF_SchTitle");
            obj.set_color("RED");
            this.addChild(obj.name, obj);

            obj = new Combo("cbUsers02","346","9","74","22",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_innerdataset("ds3Depth");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("system");
            obj.set_value("system");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","198","36","58","23",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("Method :");
            obj.set_cssclass("sta_WF_SchTitle");
            this.addChild(obj.name, obj);

            obj = new Edit("edMethod","260","35","187","24",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_background("rgba(255,255,255,1)");
            obj.set_value("COM_CD_MST");
            obj.set_inputmode("upper");
            obj.set_text("COM_CD_MST");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","468","38","190","23",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("EX) COM_CD_MST 메소드명");
            obj.set_cssclass("sta_WF_SchTitle");
            obj.set_color("RED");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","cbUsers","value","ds_input","CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","edRetrieve00","value","ds_input","CODE_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("MSCO000101.xfdl", function() {
        /*
         * FormID(화면 ID명)  		: MSCO000101.xfdl(소스생성기만들기)
         * 작 성		 일 명   	: jiback
         * 작 성	     일 자   	: 2018/01/23
         * 변 경		 일 자  	:
         * 변 경	     자 명   	:
         * 변경 및 수정 로그 		: 일자별로 변경자 및 변경사항을 간략히 기술
         */
        /**********************************************************************
         01. 전처리 공통 함수 선언
         ***********************************************************************/
        /**********************************************************************
         02. 폼 변수 정의
         ***********************************************************************/
        this.iFind = 0; //처음 상세 리스트가 2번 조회 돼는것을 방지하기 위한 Flag
        /**********************************************************************
         03. 폼 로드 및 닫을때(폼이 포커스 갈때)
         ***********************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfn_formOnload(obj,e);

        };

        this.fn_afterFormOnload = function()
        {

        	var strSvcId     = "init";
        	var strSvcUrl    = "msco000101/selGeneratorUser";
        	var inData       = "ds_cond=ds_cond";
        	var outData      = "dsOwer=dsOwer";
        	var strArg       = "";
        	var callBackFnc  = "fn_callBack";

        	//생략가능
        	var isAsync   = true;                   // true:비동기, false:동기

        	this.gfn_transaction(strSvcId , 	    // transaction을 구분하기 위한 svc id값
        						 strSvcUrl , 	// trabsaction을 요청할 주소
        						 inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						 outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						 strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						 callBackFnc, 	// transaction의 결과를 받을 Function 이름
        						 isAsync);       // 통신(동기:false / 비동기:true). 생략하면 비동기통신. 비동기통신 권장.

        };

        this.postInit = function ()
        {

        	this.cbUsers00.set_value("mast");
        	this.ds2Depth.filter("LEVEL == '" + this.cbUsers00.value + "'");
        	var strPrj = this.gfn_trim(this.cbUsers00.value);
        	this.cbUsers01.set_index(1);
        	this.ds3Depth.filter("LEVEL == '" + this.cbUsers00.value + "' && LEVEL2 == '" + this.cbUsers01.value + "'");
        	this.cbUsers02.set_index(0);
        	this.edPath01.set_value(this.cbUsers01.value + this.cbUsers02.value);
        	this.edWorkName.set_value(this.edPath01.value.toUpperCase()+"000101");
        	this.edPath.set_value(this.cbUsers00.value + "." + this.cbUsers01.value + "." +  this.cbUsers02.value );
        	this.cbUsers.set_value("MSSH");   //DB사용자
        	this.fn_search();

        };

        /**********************************************************************
         04. 콜백함수(후처리)
         ***********************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)
        {

        	if (errorCode < 0)
        	{
        		this.alert(errorMsg);
        		return false;

        	}else
        	{
        		/*sSvcId (Transaction Id)*/
        		switch(svcID)
        		{
        			case "init":
        				this.postInit();
        				break;
        			case "Search":
        				this.postSearch();
        				break;
        			case "DSearch":
        				this.postDSearch();
        				break;
        			default:
        				break;

        		}
        	}
        };
        /************************************************************************************************
        * 공통 버튼 호출 영역
        ************************************************************************************************/
        this.fn_cmmBtnClick = function(sBtn)
        {
        	switch(sBtn)
        	{
        		case "ret" :			//조회
        			this.fn_search();
        			break;
        		case "new" :			//신규
        			this.fn_new();
        			break;
        		case "del" :			//삭제
        			this.fn_delete()
        			break;
        		case "save" :			//저장
        			this.fn_save();
        			break;
        		case "excel" :			//엑셀
        			this.fn_excel();
        			break;
        		case "print" :			//출력
        			this.fn_print();
        			break;
        		case "confirm" :		//확정
        			this.confirm();
        			break;
        		default :
        			break;
        	}
        }
        /**********************************************************************
         05. 조회 함수 선언
         ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.preSearch = function()
        {
        	return true;
        };

        this.fn_search = function()
        {
        	if (!this.preSearch())
        	{
        		return false;
        	}

        	this.DS_Master.set_enableevent(false);
        	this.DS_Master.clearData();
        	this.DS_Master.set_enableevent(true);
        	var strSvcId     = "Search";
        	var strSvcUrl    = "msco000101/selGeneratorMaster";
        	var inData       = "ds_input=ds_input";
        	var outData      = "DS_Master=DS_Master";
        	var strArg       = "";
        	var callBackFnc  = "fn_callBack";

        	//생략가능
        	var isAsync   = true;                   // true:비동기, false:동기

        	this.gfn_transaction(strSvcId , 	    // transaction을 구분하기 위한 svc id값
        						 strSvcUrl , 	// trabsaction을 요청할 주소
        						 inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						 outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						 strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						 callBackFnc, 	// transaction의 결과를 받을 Function 이름
        						 isAsync);       // 통신(동기:false / 비동기:true). 생략하면 비동기통신. 비동기통신 권장.

        };


        this.postSearch = function ()
        {
        	//trace(this.DS_Master.saveXML());
        	//this.DS_Master_onrowposchanged(this.DS_Master);
        };
        /**********************************************************************
         05-1. detail 조회 함수 선언
         ***********************************************************************/
        this.DS_Master_onrowposchanged = function (obj, e)
        {
        	//if (this.iFind == 1)
        	//{
        		this.DSearch_OnClick();
        	//}
        	//this.iFind = 1;
        };
        /**
         * 기능 : 조회 전 실행
         */
        this.preDSearch = function ()
        {
        	return true;
        };


        this.DSearch_OnClick = function ()
        {
        	if (!this.preDSearch())
        	{
        		return false;
        	}
        	this.DS_Detail.set_enableevent(false);
        	this.DS_Detail.clearData();
        	this.DS_Detail.set_enableevent(true);
        	var strSvcId     = "DSearch";
        	var strSvcUrl    = "msco000101/selGeneratorDetail";
        	var inData       = "";
        	var outData      = "DS_Detail=DS_Detail";
        	var strArg 		 = "tableName=" + nexacro.wrapQuote(this.DS_Master.getColumn(this.DS_Master.rowposition, "TABLE_NAME")) + " ";
        	    strArg 	    += "code=" 		+ nexacro.wrapQuote(this.cbUsers.value);
        	var callBackFnc  = "fn_callBack";

        	//생략가능
        	var isAsync   = true;               // true:비동기, false:동기

        	this.gfn_transaction(strSvcId , 	// transaction을 구분하기 위한 svc id값
        						 strSvcUrl , 	// trabsaction을 요청할 주소
        						 inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						 outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						 strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						 callBackFnc, 	// transaction의 결과를 받을 Function 이름
        						 isAsync);       // 통신(동기:false / 비동기:true). 생략하면 비동기통신. 비동기통신 권장.


        };
        /**********************************************************************************************************************
         * 공통으로 사용하는 Function
         ***********************************************************************************************************************/
        /**
         * 첫자 대문자 만들기
         */
        this.fn_xmlFile = function (FileName)
        {
        	var strXmlFile 	= "";
        	    strXmlFile 	= (FileName.substr(0, 1)).toLowerCase() + FileName.substr(1);

        	return strXmlFile;
        };

        this.fn_strColName = function(strCol)
        {
        	var strPCol 	= "";
        	var arrCol 		= strCol.split("_");
        	var colCount	= 0;
        	colCount = arrCol.length;

        	if (colCount == 0)
        	{
        		strPCol = strCol;

        	}else
        	{
        		strPCol = strCol;

        		for (var i = 0; i < colCount; i++)
        		{
        			if (i == 0)
        			{
        				strPCol = arrCol[i];
        			}
        			else
        			{
        				strPCol += (arrCol[i].substr(0, 1)).toUpperCase() + (arrCol[i].substr(1)).trim();
        			}
        		}
        	}
        	return strPCol;
        };

        this.PidFileName = function ()
        {
        	var strPath = ((this.edPath.text).trim()).toLowerCase();
        	var strMixmlFileNm = strPath.split(".");
        	var strName = "";
        	var strWork = (this.edWorkName.text).trim() + (this.edWorkName1.text).trim();

        	for (var i = 0; i < strMixmlFileNm.length; i++)
        	{
        		if (strMixmlFileNm.length < 2)
        		{
        			this.alert("최소한 2레벨은 입력하셔야 합니다.ex)oem.xxx");
        		}
        		else
        		{
        			if (strMixmlFileNm.length == 2)
        			{
        				strName = strMixmlFileNm[i].toLowerCase() + (this.edWorkName.text).trim();
        			}
        			else if (strMixmlFileNm.length == 3)
        			{
        				if (i == 1)
        				{
        					strName = strMixmlFileNm[i].toLowerCase();
        				}
        				else if (i == 2)
        				{
        					strName += (strMixmlFileNm[i].toUpperCase()).substr(0, 1) + strMixmlFileNm[i].substr(1) + (this.edWorkName.text).trim() + ".xml";
        				}
        			}
        		}
        	}
        	return strName;
        };


        this.postDSearch = function()
        {
        	//trace(this.DS_Detail.saveXML());
        	var strTableName 	= this.cbUsers.value + "." + this.DS_Master.getColumn(this.DS_Master.rowposition, "TABLE_NAME");
        	var strWork 		= (this.edWorkName.text).trim() + (this.edWorkName1.text).trim();
        	var strGroupName 	= (this.edWorkName.text).trim();

        	this.edController.set_value(strGroupName + "Controller.java");
        	this.edService.set_value(strGroupName 	+ "Service.java");
        	this.edDao.set_value(strGroupName 		+ "Dao.java");
        	this.edRetrieve.set_value(strGroupName 	+ "Dao.xml");
        	this.edXPlatForm.set_value(strWork 	+ ".xfdl");

        	this.fn_taContorller();
        	this.fn_taService();
        	this.fn_taDao();
        	this.fn_tbXmlquery(strTableName);
        	this.fn_taXOracle(strTableName);
        	this.fn_PidXml();
        };

        /**********************************************************************************************************************
         * 서버 프로세스 Navigation시작
         ***********************************************************************************************************************/
        /**
         * Devon Navigation Create()
         * Contorler /입력/저장/수정/삭제
         */
        this.fn_taContorller = function()
        {
        	var objDate 	 	= new Date();
        	var nYear 		 	= objDate.getFullYear();
        	var nMonth 		 	= objDate.getMonth() + 1;
        	var nDay 		 	= objDate.getDate();
        	var ncurrDate    	= nYear + "/" + nMonth + "/" + nDay;
        	var classNameLow 	= this.edWorkName.value.toLowerCase();
        	var classNameUpp 	= this.edWorkName.value.toUpperCase();
        	var sContollerName 	= classNameUpp + "Controller";
        	var sServiceNameU 	= classNameUpp + "Service";
        	var sServiceNameL 	= classNameLow + "Service";
        	var sPackgeName     = this.gfn_trim(this.edPath.value) + "." + classNameLow;
        	var sMethodLow      = this.gfn_trim(this.edMethod.value.toLowerCase());
        	var sMethodNameSelt	= this.fn_strColName("sel_" 	+ sMethodLow);
        	var sMethodNameSave	= this.fn_strColName("save_" 	+ sMethodLow);
        	var sMethodNameDel	= this.fn_strColName("del_" 	+ sMethodLow);
        	var strContoller 	= "";
        	var tableName		= this.DS_Master.getColumn(this.DS_Master.rowposition,"COMMENTS");

        	strContoller += "package " + sPackgeName + ";                                                                                  				    \n";
        	strContoller += "                                                                                  												\n";
        	strContoller += "import javax.servlet.http.HttpServletRequest;                                                                                  \n";
        	strContoller += "import javax.servlet.http.HttpServletResponse;                                                                                 \n";
        	strContoller += "                                                                                                                               \n";
        	strContoller += "import org.apache.logging.log4j.LogManager;                                                                                    \n";
        	strContoller += "import org.apache.logging.log4j.Logger;                                                                                        \n";
        	strContoller += "import org.springframework.beans.factory.annotation.Autowired;                                                                 \n";
        	strContoller += "import org.springframework.web.bind.annotation.RequestMapping;                                                                 \n";
        	strContoller += "import org.springframework.web.bind.annotation.RequestMethod;                                                                  \n";
        	strContoller += "import org.springframework.web.bind.annotation.RestController;                                                                 \n";
        	strContoller += "import org.springframework.web.servlet.ModelAndView;                                                                           \n";
        	strContoller += "                                                                                                                               \n";
        	strContoller += "import kr.fujitsu.com.framework.model.DataSetMap;                                                                              \n";
        	strContoller += "import mast.common.exception.CommExceptionUtil;                                                                                \n";
        	strContoller += "import mast.common.extend.CommController;                                                                                      \n";
        	strContoller += "                                                                                                                               \n";
        	strContoller += "/**                                                                                                                            \n";
        	strContoller += " * " + tableName + " 관리를 위한 Controller 클래스입니다.                                                                             \n";
        	strContoller += " *                                                                                                                             \n";
        	strContoller += " * @created on 1.0, " + ncurrDate + "                                                                                          \n";
        	strContoller += " * @created by jiback                                                                                                         \n";
        	strContoller += " *                                                                                                                             \n";
        	strContoller += " * @modified on 1.1, " + ncurrDate + "                                                                                         \n";
        	strContoller += " * @modified by jiback                                                                                                        \n";
        	strContoller += " * @caused by 호출 권리명 수정                                                                                               \n";
        	strContoller += " */                                                                                                                            \n";
        	strContoller += "@RestController                                                                                                                \n";
        	strContoller += "@RequestMapping(value = " + "\"" + classNameLow + "\"" + ")                                                                    \n";
        	strContoller += "public class " + sContollerName + " extends CommController {                                                                   \n";
        	strContoller += "	private static Logger log = LogManager.getLogger(" + sContollerName + ".class);                                             \n";
        	strContoller += "	@Autowired                                                                                                                  \n";
        	strContoller += "	private " + sServiceNameU + " " + sServiceNameL + " = null;                                                                 \n";
        	strContoller += "                                                                                                                               \n";
        	strContoller += "	/**                                                                                                                         \n";
        	strContoller += "	 * " + tableName + " 조회                                                                                                   \n";
        	strContoller += "	 *                                                                                                                           \n";
        	strContoller += "	 * @param request                                                                                                            \n";
        	strContoller += "	 * @param response                                                                                                           \n";
        	strContoller += "	 * @return                                                                                                                   \n";
        	strContoller += "	 */                                                                                                                          \n";
        	strContoller += "	@RequestMapping(value = " + "\"" + "/" + sMethodNameSelt + "\"" + ", method = RequestMethod.POST)                            \n";
        	strContoller += "	public ModelAndView " + sMethodNameSelt + "(HttpServletRequest request, HttpServletResponse response) {                      \n";
        	strContoller += "                                                                                                                                \n";
        	strContoller += "		DataSetMap outputDsm = new DataSetMap();                                                                                            \n";
        	strContoller += "		DataSetMap inputDsm = new DataSetMap();                                                                                            \n";
        	strContoller += "                                                                                                                                \n";
        	strContoller += "		try {                                                                                                                    \n";
        	strContoller += "			inputDsm = super.getSessionDataSetMap(request);                                   									\n";
        	strContoller += "			inputDsm  = (DataSetMap) request.getAttribute(" + "\"" + "dataSetMap" + "\"" + ");                                   \n";
        	strContoller += "			outputDsm = " + sServiceNameL + "." + sMethodNameSelt+ "(inputDsm);                                                  \n";
        	strContoller += "		} catch (Exception e) {                                                                                                  \n";
        	strContoller += "			log.error(" + "\"" + "raised error: " + "\"" + ", e);                                                                \n";
        	strContoller += "			CommExceptionUtil.setError(e, outputDsm);                                                                            \n";
        	strContoller += "		}                                                                                                                        \n";
        	strContoller += "                                                                                                                                \n";
        	strContoller += "		return new ModelAndView(" + "\"" + "data" + "\"" + ", " + "\"" + "return" + "\"" + ", outputDsm);                        \n";
        	strContoller += "	}                                                                                                                            \n";
        	strContoller += "                                                                                                                                \n";
        	strContoller += "	/**                                                                                                                          \n";
        	strContoller += "	 * " + tableName + " 저장/수정                                                                                                        \n";
        	strContoller += "	 *                                                                                                                            \n";
        	strContoller += "	 * @param request                                                                                                             \n";
        	strContoller += "	 * @param response                                                                                                            \n";
        	strContoller += "	 * @return                                                                                                                    \n";
        	strContoller += "	 */                                                                                                                           \n";
        	strContoller += "	@RequestMapping(value = " + "\"" + "/" + sMethodNameSave + "\"" + ", method = RequestMethod.POST)                                      \n";
        	strContoller += "	public ModelAndView " + sMethodNameSave + "(HttpServletRequest request, HttpServletResponse response) {                                     \n";
        	strContoller += "                                                                                                                                 \n";
        	strContoller += "		DataSetMap outputDsm = new DataSetMap();                                                                                              \n";
        	strContoller += "		DataSetMap inputDsm = new DataSetMap();                                                                                  \n";
        	strContoller += "		int ret = 0;                                                                                                              \n";
        	strContoller += "                                                                                                                                 \n";
        	strContoller += "		try {                                                                                                                     \n";
        	strContoller += "			inputDsm = super.getSessionDataSetMap(request);                                   									\n";
        	strContoller += "			inputDsm = (DataSetMap) request.getAttribute(" + "\"" + "dataSetMap" + "\"" + ");                                     \n";
        	strContoller += "			ret = " + sServiceNameL + "." + sMethodNameSave+ "(inputDsm);                                                          \n";
        	strContoller += "			this.setMsg(outputDsm, " + "\"" + "CM0006" + "\"" + ", ret + " + "\"" + "|CM0002" + "\"" + "); // {0}건 {1} 되었습니다.\n";
        	strContoller += "		} catch (Exception e) {                                                                                                   \n";
        	strContoller += "			log.error(" + "\"" + "raised error: " + "\"" + ", e);                                                                 \n";
        	strContoller += "			CommExceptionUtil.setError(e, outputDsm);                                                                             \n";
        	strContoller += "		}                                                                                                                         \n";
        	strContoller += "                                                                                                                                 \n";
        	strContoller += "		return new ModelAndView(" + "\"" + "data" + "\"" + ", " + "\"" + "return" + "\"" + ", outputDsm);                         \n";
        	strContoller += "	}                                                                                                                             \n";
        	strContoller += "                                                                                                                                \n";
        	strContoller += "	/**                                                                                                                          \n";
        	strContoller += "	 * " + tableName + " 삭제                                                                                                    \n";
        	strContoller += "	 *                                                                                                                            \n";
        	strContoller += "	 * @param request                                                                                                             \n";
        	strContoller += "	 * @param response                                                                                                            \n";
        	strContoller += "	 * @return                                                                                                                    \n";
        	strContoller += "	 */                                                                                                                           \n";
        	strContoller += "	@RequestMapping(value = " + "\"" + "/" + sMethodNameDel + "\"" + ", method = RequestMethod.POST)                              \n";
        	strContoller += "	public ModelAndView " + sMethodNameDel + "(HttpServletRequest request, HttpServletResponse response) {                        \n";
        	strContoller += "                                                                                                                                 \n";
        	strContoller += "		DataSetMap outputDsm = new DataSetMap();                                                                                             \n";
        	strContoller += "		DataSetMap inputDsm = new DataSetMap();                                                                                  \n";
        	strContoller += "		int ret = 0;                                                                                                              \n";
        	strContoller += "                                                                                                                                 \n";
        	strContoller += "		try {                                                                                                                     \n";
        	strContoller += "			inputDsm = super.getSessionDataSetMap(request);                                   									\n";
        	strContoller += "			inputDsm = (DataSetMap) request.getAttribute(" + "\"" + "dataSetMap" + "\"" + ");                                     \n";
        	strContoller += "			ret = " + sServiceNameL + "." + sMethodNameDel+ "(inputDsm);                                                                          \n";
        	strContoller += "			this.setMsg(outputDsm, " + "\"" + "CM0006" + "\"" + ", ret + " + "\"" + "|CM0002" + "\"" + "); // {0}건 {1} 되었습니다.\n";
        	strContoller += "		} catch (Exception e) {                                                                                                   \n";
        	strContoller += "			log.error(" + "\"" + "raised error: " + "\"" + ", e);                                                                 \n";
        	strContoller += "			CommExceptionUtil.setError(e, outputDsm);                                                                             \n";
        	strContoller += "		}                                                                                                                         \n";
        	strContoller += "                                                                                                                                 \n";
        	strContoller += "		return new ModelAndView(" + "\"" + "data" + "\"" + ", " + "\"" + "return" + "\"" + ", outputDsm);                         \n";
        	strContoller += "	}                                                                                                                             \n";
        	strContoller += "}                                                                                                                                \n";


        	this.tbMain.tbSub3.form.taContoller.set_value(strContoller);
        };

        /**********************************************************************************************************************
         * 서버 프로세스 명령어 처리(입력/수정/삭제/저장) Cmd
         ***********************************************************************************************************************/
        /**
         * Devon RetrieveCmd Create()
         * 조회 Service 자동생성기
         */
        this.fn_taService = function ()
        {
        	var objDate 	 	= new Date();
        	var nYear 		 	= objDate.getFullYear();
        	var nMonth 		 	= objDate.getMonth() + 1;
        	var nDay 		 	= objDate.getDate();
        	var ncurrDate    	= nYear + "/" + nMonth + "/" + nDay;
        	var classNameLow 	= this.edWorkName.value.toLowerCase();
        	var classNameUpp 	= this.edWorkName.value.toUpperCase();
        	var sContollerName 	= classNameUpp + "Controller";
        	var sServiceNameU 	= classNameUpp + "Service";
        	var sServiceNameL 	= classNameLow + "Service";
        	var sDaoNameU 		= classNameUpp + "Dao";
        	var sDaoNameL 		= classNameLow + "Dao";
        	var sPackgeName     = this.gfn_trim(this.edPath.value) + "." + classNameLow;
        	var sMethodLow      = this.gfn_trim(this.edMethod.value.toLowerCase());
        	var sMethodNameSelt	= this.fn_strColName("sel_" 	+ sMethodLow);
        	var sMethodNameSave	= this.fn_strColName("save_" 	+ sMethodLow);
        	var sMethodNameIns	= this.fn_strColName("ins_" 	+ sMethodLow);
        	var sMethodNameUpd	= this.fn_strColName("upd_" 	+ sMethodLow);
        	var sMethodNameDel	= this.fn_strColName("del_" 	+ sMethodLow);
        	var strService 	    = "";
        	var tableName		= this.DS_Master.getColumn(this.DS_Master.rowposition,"COMMENTS");
        	var tableCode		= this.DS_Master.getColumn(this.DS_Master.rowposition,"TABLE_NAME");

        	strService += "/*                                                                                                                                                     \n";
        	strService += " * Copyright (c) 2018 BGF Retail All rights reserved.                                                                                                  \n";
        	strService += " *                                                                                                                                                     \n";
        	strService += " * This software is the confidential and proprietary information of BGF Retail.                                                                        \n";
        	strService += " * You shall not disclose such Confidential Information and shall use it                                                                               \n";
        	strService += " * only in accordance with the terms of the license agreement you entered into                                                                         \n";
        	strService += " * with BGF Retail                                                                                                                                     \n";
        	strService += " */                                                                                                                                                    \n";
        	strService += "package " + sPackgeName + ";                                                                                  				    					  \n";
        	strService += "                                                                                                                                                       \n";
        	strService += "import org.springframework.beans.factory.annotation.Autowired;                                                                                         \n";
        	strService += "import org.springframework.stereotype.Service;                                                                                                         \n";
        	strService += "                                                                                                                                                       \n";
        	strService += "import kr.fujitsu.com.framework.model.Data;                                                                                                            \n";
        	strService += "import kr.fujitsu.com.framework.model.DataSet;                                                                                                         \n";
        	strService += "import kr.fujitsu.com.framework.model.DataSetMap;                                                                                                      \n";
        	strService += "import mast.common.exception.CommException;                                                                                                            \n";
        	strService += "import mast.common.extend.CommService;                                                                                                            \n";
        	strService += "                                                                                                                                                       \n";
        	strService += "/**                                                                                                                                                    \n";
        	strService += " * " + tableName + " 관리를 위한 Service 클래스입니다.                                                                                                            \n";
        	strService += " *                                                                                                                                                     \n";
        	strService += " * @created  on 1.0, " + ncurrDate + "                                                                                                                          \n";
        	strService += " * @created  by jiback                                                                                                                                 \n";
        	strService += " *                                                                                                                                                     \n";
        	strService += " * @modified on 1.0, " + ncurrDate + "                                                                                                                                      \n";
        	strService += " * @modified by jiback                                                                                                                                       \n";
        	strService += " * @caused   by                                                                                                                                        \n";
        	strService += " */                                                                                                                                                    \n";
        	strService += "@Service                                                                                                                                               \n";
        	strService += "public class " + sServiceNameU + " extends CommService {                                                                                                                       \n";
        	strService += "	@Autowired                                                                                                                                            \n";
        	strService += "	private " + sDaoNameU + " " + sDaoNameL + " = null;                                                                                                           \n";
        	strService += "	                                                                                                                                                      \n";
        	strService += "	/**                                                                                                                                                   \n";
        	strService += "     * " + tableName + " 조회                                                                                                                                     \n";
        	strService += "     *                                                                                                                                                 \n";
        	strService += "     * @param param    조회조건 데이터                                                                                                                  \n";
        	strService += "     * @return DataSet 조회 결과 데이터셋                                                                                                              \n";
        	strService += "     *                                                                                                                                                 \n";
        	strService += "     * @throws Exception                                                                                                                               \n";
        	strService += "     */                                                                                                                                                \n";
        	strService += "	public DataSetMap " + sMethodNameSelt + "(DataSetMap dsm) throws Exception {                                                                                        \n";
        	strService += "		DataSetMap outputDsm = new DataSetMap();                                                                                                            \n";
        	strService += "		Data data            = dsm.getDataSet(" + "\"" + "ds_cond" + "\"" + ").getData(0);                                                                  \n";
        	strService += "		                                                                                                                                                    \n";
        	strService += "		outputDsm.setDataSet(" + "\"" + "ds_list" + "\"" + ", this." + sDaoNameL + "." + sMethodNameSelt + "(data));	                                                          \n";
        	strService += "	                                                                                                                                                      \n";
        	strService += "	    return outputDsm;                                                                                                                                 \n";
        	strService += "	}                                                                                                                                                     \n";
        	strService += "	                                                                                                                                                      \n";
        	strService += "    /**                                                                                                                                                   \n";
        	strService += "     * " + tableName + " 저장/수정                                                                                                                               \n";
        	strService += "     *                                                                                                                                                 \n";
        	strService += "     * @param param    조회조건 데이터                                                                                                                  \n";
        	strService += "     * @return DataSet 조회 결과 데이터셋                                                                                                              \n";
        	strService += "     *                                                                                                                                                 \n";
        	strService += "     * @throws Exception                                                                                                                               \n";
        	strService += "     */                                                                                                                                                \n";
        	strService += "    public int " + sMethodNameSave + "(DataSetMap dsm) throws Exception {                                                                                            \n";
        	strService += "        DataSet ds                = null;                                                                                                              \n";
        	strService += "        Data data                 = null;                                                                                                              \n";
        	strService += "        int ret                   = 0;                                                                                                                 \n";
        	strService += "        int resCnt                = 0;                                                                                                                 \n";
        	strService += "        String errMsg             = null;                                                                                                              \n";
        	strService += "                                                                                                                                                       \n";
        	strService += "        //Input DataSet 초기화                                                                                                                         \n";
        	strService += "        ds = dsm.getDataSet(" + "\"" + "ds_list" + "\"" + ");                                                                                        \n";
        	strService += "                                                                                                                                                       \n";
        	strService += "        //" + tableName + " 저장/수정                                                                                                                                  \n";
        	strService += "        while (ds.hasNext()) {                                                                                                                      \n";
        	strService += "            data = ds.next();                                                                                                                            \n";
        	strService += "            setDataCopy(dsm, data);                                                                                                                                              \n";
        	strService += "                                                                                                                                                     \n";
        	strService += "            if (data.isInsert()) {                                                                                                                     \n";
        	strService += "            	   if (isExistPK(data)) {                                                                                                                    \n";
        	strService += "                    throw new CommException(" + "\"" + "CM0007" + "\"" + ", " + "\"" + "MS0034" + "\"" + ");//매가TYPE 중복에러입니다.\n";
        	strService += "                }                                                                                                                                      \n";
        	strService += "                ret += " + sDaoNameL + "." + sMethodNameIns + "(data);                                                                                                      \n";
        	strService += "            } else if (data.isUpdate()) {                                                                                                              \n";
        	strService += "                ret += " + sDaoNameL + "." + sMethodNameUpd + "(data);                                                                                                      \n";
        	strService += "            }                                                                                                                                          \n";
        	strService += "            errMsg = " + "\"" + "MS0034" + "\"" + ";                                                                                                                                           \n";
        	strService += "            if (ret < 1) {                                                                                                                             \n";
        	strService += "                 throw new CommException(" + "\"" + "CM0008" + "\"" + ", errMsg);//데이터의 적합성 문제로 인하여 데이터를 ? 하지 못했습니다.\n";
        	strService += "            }                                                                                                                                          \n";
        	strService += "        }                                                                                                                                                 \n";
        	strService += "        resCnt += ret;                                                                                                                             \n";
        	strService += "        //데이터 히스토리 저장\n";
        	strService += "        //param1 : 테이블명, param2 : 업무구분(공통코드CMMS901MT:MS430), param3 : 데이터셋\n";
        	strService += "        this.setDataHistory(" + "\"" + tableCode + "\"" + ", " + "\"" + "07" + "\"" + ", ds);	//BIZ_ID(04:상품 분류)\n";
        	strService += "        return resCnt;                                                                                                                                 \n";
        	strService += "    }                                                                                                                                                  \n";
        	strService += "                                                                                                                                                       \n";
        	strService += "    /**                                                                                                                                                   \n";
        	strService += "     * " + tableName + " 삭제                                                                                                                               \n";
        	strService += "     *                                                                                                                                                 \n";
        	strService += "     * @param param    조회조건 데이터                                                                                                                  \n";
        	strService += "     * @return DataSet 조회 결과 데이터셋                                                                                                              \n";
        	strService += "     *                                                                                                                                                 \n";
        	strService += "     * @throws Exception                                                                                                                               \n";
        	strService += "     */                                                                                                                                                \n";
        	strService += "    public int " + sMethodNameDel + "(DataSetMap dsm) throws Exception {                                                                                            \n";
        	strService += "        DataSet ds             = null;                                                                                                              \n";
        	strService += "        Data data                 = null;                                                                                                              \n";
        	strService += "        int ret                   = 0;                                                                                                                 \n";
        	strService += "        int resCnt                = 0;                                                                                                                 \n";
            strService += "        String errMsg             = null;                                                                                                               \n";
        	strService += "                                                                                                                     \n";
        	strService += "        //Input DataSet 초기화                                                                                                                        \n";
        	strService += "        ds = dsm.getDataSet(" + "\"" + "ds_list" + "\"" + ");                                                                                        \n";
        	strService += "        //" + tableName + " 삭제                                                                                                                                   \n";
        	strService += "        while (ds.hasNext()) {                                                                                                                      \n";
        	strService += "            data = ds.next();                                                                                                                        \n";
        	strService += "            setDataCopy(dsm, data);                                                                                                                     \n";
        	strService += "            if (data.isDelete()) {                                                                                                              		   \n";
        	strService += "            	    ret += " + sDaoNameL + "." + sMethodNameDel + "(data);               																				     \n";
        	strService += "            }                                                                                                                                           \n";
        	strService += "            errMsg = " + "\"" + "MS0034" + "\"" + ";                                                                                                                                           \n";
        	strService += "            if (ret < 1) {                                                                                                                             \n";
        	strService += "                 throw new CommException(" + "\"" + "CM0008" + "\"" + ", errMsg);//데이터의 적합성 문제로 인하여 데이터를 ? 하지 못했습니다.\n";
        	strService += "            }                                                                                                                                          \n";
        	strService += "        }                                                                                                                                                 \n";
        	strService += "            resCnt += ret;                                                                                                                             \n";
        	strService += "        //데이터 히스토리 저장\n";
        	strService += "        //param1 : 테이블명, param2 : 업무구분(공통코드CMMS901MT:MS430), param3 : 데이터셋\n";
        	strService += "        this.setDataHistory(" + "\"" + tableCode + "\"" + ", " + "\"" + "07" + "\"" + ", ds);	//BIZ_ID(04:상품 분류)\n";
        	strService += "       return resCnt;                                                                                                                                  \n";
        	strService += "    }                                                                                                                                                   \n";
        	strService += "                                                                                                                                                        \n";
        	strService += "    /**                                                                                                                                                 \n";
        	strService += "     * " + tableName + " 중복 체크                                                                                                                               \n";
        	strService += "     *                                                                                                                                                 \n";
        	strService += "     * @param param   조회조건 데이터                                                                                                                  \n";
        	strService += "     * @return Boolean 중복데이터 존재여부                                                                                                             \n";
        	strService += "     *                                                                                                                                                 \n";
        	strService += "     * @throws Exception                                                                                                                               \n";
        	strService += "     */                                                                                                                                                \n";
        	strService += "    private Boolean isExistPK(Data data) throws Exception {                                                                                            \n";
        	strService += "        DataSet ds = " + sDaoNameL + ".isExistPK(data);                                                                                            \n";
        	strService += "        Data data1 = ds.getData(0);                                                                                                                    \n";
        	strService += "        if (data1.get(" + "\"" + "CNT" + "\"" + ").toString().equals(" + "\"" + "0" + "\"" + ")) {                                         				\n";
        	strService += "            return false;                                                                                                                          \n";
        	strService += "        }                                                                                                                                               \n";
        	strService += "        return true;                                                                                                                                   \n";
        	strService += "    }                                                                                                                                                  \n";
        	strService += "}                                                                                                                                                      \n";

        	this.tbMain.tbSub4.form.taSarvice.set_value(strService);
        };


        /**
         * Devon DeleteCmd Create()
         * 삭제 Cmd 자동생성기
         */
        this.fn_taDao = function ()
        {
        	var objDate 	 		= new Date();
        	var nYear 		 		= objDate.getFullYear();
        	var nMonth 		 		= objDate.getMonth() + 1;
        	var nDay 		 		= objDate.getDate();
        	var ncurrDate    		= nYear + "/" + nMonth + "/" + nDay;
        	var classNameLow 		= this.edWorkName.value.toLowerCase();
        	var classNameUpp 		= this.edWorkName.value.toUpperCase();
        	var sContollerName 		= classNameUpp + "Controller";
        	var sServiceNameU 		= classNameUpp + "Service";
        	var sServiceNameL 		= classNameLow + "Service";
        	var sDaoNameU 			= classNameUpp + "Dao";
        	var sDaoNameL 			= classNameLow + "Dao";
        	var sPackgeName     	= this.gfn_trim(this.edPath.value) + "." + classNameLow;
        	var sMethodUpp      	= this.gfn_trim(this.edMethod.value.toUpperCase());
        	var sMethodLow      	= this.gfn_trim(this.edMethod.value.toLowerCase());
        	var sMethodNameSelt		= this.fn_strColName("sel_" 	+ sMethodLow);
        	var sMethodNameSave		= this.fn_strColName("save_" 	+ sMethodLow);
        	var sMethodNameIns		= this.fn_strColName("ins_" 	+ sMethodLow);
        	var sMethodNameUpd		= this.fn_strColName("upd_" 	+ sMethodLow);
        	var sMethodNameDel		= this.fn_strColName("del_" 	+ sMethodLow);
        	var sMethodNamePk		= this.fn_strColName("sel_" 	+ sMethodLow + "_pk");
        	var methodName			= this.gfn_trim(this.edMethod.text);
        	var methodSelName		= "SEL_" + this.gfn_trim(methodName);
        	var methodSelPkName		= "SEL_" + this.gfn_trim(methodName) + "_PK";
        	var methodSelKeyName	= "SEL_" + this.gfn_trim(methodName) + "_KEY";
        	var methodInsName		= "INS_" + this.gfn_trim(methodName);
        	var methodUpdName		= "UPD_" + this.gfn_trim(methodName);
        	var methodDelName		= "DEL_" + this.gfn_trim(methodName);
        	var tableName		= this.DS_Master.getColumn(this.DS_Master.rowposition,"COMMENTS");
        	var tableCode		= this.DS_Master.getColumn(this.DS_Master.rowposition,"TABLE_NAME");


        	var sIsExistPK		= "isExistPK";
        	var strDao 			= "";
            strDao += " /* 													                                            \n";
        	strDao += " * Copyright (c) 2017 BGF Retail All rights reserved.                                            \n";
        	strDao += " *                                                                                               \n";
        	strDao += " * This software is the confidential and proprietary information of BGF Retail.                  \n";
        	strDao += " * You shall not disclose such Confidential Information and shall use it                         \n";
        	strDao += " * only in accordance with the terms of the license agreement you entered into                   \n";
        	strDao += " * with BGF Retail                                                                               \n";
        	strDao += " */                                                                                              \n";
        	strDao += "package " + sPackgeName + ";                                                                     \n";
        	strDao += "                                                                                                 \n";
        	strDao += "import org.springframework.stereotype.Component;                                                 \n";
        	strDao += "                                                                                                 \n";
        	strDao += "import kr.fujitsu.com.framework.model.AnnotationDaoSupport;                                      \n";
        	strDao += "import kr.fujitsu.com.framework.model.Data;                                                      \n";
        	strDao += "import kr.fujitsu.com.framework.model.DataSet;                                                   \n";
        	strDao += "                                                                                                 \n";
        	strDao += "/**                                                                                              \n";
        	strDao += " * " + tableName + " 관리를 위한 DAO 클래스입니다.                                                    \n";
        	strDao += " *                                                                                               \n";
        	strDao += " * @created  on 1.0, " + ncurrDate + "                                                           \n";
        	strDao += " * @created  by jiback                                                                          \n";
        	strDao += " *                                                                                               \n";
        	strDao += " * @modified on 1.0, " + ncurrDate + "                                                           \n";
        	strDao += " * @modified by jiback                                                                          \n";
        	strDao += " * @caused   by                                                                                  \n";
        	strDao += " */                                                                                              \n";
        	strDao += "@Component                                                                                       \n";
        	strDao += "public class " + sDaoNameU + " extends AnnotationDaoSupport {                                    \n";
        	strDao += "		                                                                                            \n";
        	strDao += "	/**                                                                                             \n";
        	strDao += "     * " + tableName + " 조회                                                                                \n";
        	strDao += "     *                                                                                           \n";
        	strDao += "     * @param param    조회조건 데이터                                                         \n";
        	strDao += "     * @return DataSet 조회 결과 데이터셋                                                      \n";
        	strDao += "     *                                                                                           \n";
        	strDao += "     * @throws Exception                                                                         \n";
        	strDao += "     */                                                                                          \n";
        	strDao += "	public DataSet " + sMethodNameSelt + "(Data data) throws Exception {                            \n";
        	strDao += "		return executeQuery(" + "\"" + sDaoNameU + "." + methodSelName + "\"" + ", data);           \n";
        	strDao += "	}                                                                                               \n";
        	strDao += "		                                                                                            \n";
        	strDao += "	/**                                                                                             \n";
        	strDao += "     * " + tableName + " 테이블 시퀀스조회                                                               \n";
        	strDao += "     *                                                                                           \n";
        	strDao += "     * @param param    조회조건 데이터                                                         \n";
        	strDao += "     * @return DataSet 조회 결과 데이터셋                                                      \n";
        	strDao += "     *                                                                                           \n";
        	strDao += "     * @throws Exception                                                                         \n";
        	strDao += "     */                                                                                          \n";
        	strDao += "	public DataSet " + sMethodNamePk + "(Data data) throws Exception {                            \n";
        	strDao += "		return executeQuery(" + "\"" + sDaoNameU + "." + methodSelPkName + "\"" + ", data);           \n";
        	strDao += "	}                                                                                               \n";
        	strDao += "                                                                                                 \n";
        	strDao += "	/**                                                                                             \n";
        	strDao += "     * " + tableName + " 중복 체크                                                                          \n";
        	strDao += "     *                                                                                           \n";
        	strDao += "     * @param data 변경 데이터                                                                  \n";
        	strDao += "     * @return DataSet 조회 결과 데이터셋                                                      \n";
        	strDao += "     *                                                                                           \n";
        	strDao += "     * @throws Exception                                                                         \n";
        	strDao += "     */                                                                                          \n";
        	strDao += "    public DataSet " + sIsExistPK + "(Data data) throws Exception {                                       \n";
        	strDao += "        return executeQuery(" + "\"" + sDaoNameU + "." + methodSelKeyName + "\"" + ", data);    \n";
        	strDao += "    }                                                                                            \n";
        	strDao += "                                                                                                 \n";
        	strDao += "    /**                                                                                          \n";
        	strDao += "     * " + tableName + " 신규 등록                                                                          \n";
        	strDao += "     *                                                                                           \n";
        	strDao += "     * @param data 변경 데이터                                                                  \n";
        	strDao += "     * @return int 저장 건수                                                                    \n";
        	strDao += "     *                                                                                           \n";
        	strDao += "     * @throws Exception                                                                         \n";
        	strDao += "     */                                                                                          \n";
        	strDao += "    public int " + sMethodNameIns + "(Data data) throws Exception {                              \n";
        	strDao += "        return executeUpdate(" + "\"" + sDaoNameU + "." + methodInsName + "\"" + " , data);      \n";
        	strDao += "    }                                                                                            \n";
        	strDao += "                                                                                                 \n";
        	strDao += "    /**                                                                                          \n";
        	strDao += "     * " + tableName + " 수정                                                                                \n";
        	strDao += "     *                                                                                           \n";
        	strDao += "     * @param data 변경 데이터                                                                  \n";
        	strDao += "     * @return int 변경 건수                                                                    \n";
        	strDao += "     *                                                                                           \n";
        	strDao += "     * @throws Exception                                                                         \n";
        	strDao += "     */                                                                                          \n";
        	strDao += "    public int " + sMethodNameUpd + "(Data data) throws Exception {                              \n";
        	strDao += "        return executeUpdate(" + "\"" + sDaoNameU + "." + methodUpdName + "\"" + " , data);      \n";
        	strDao += "    }                                                                                            \n";
        	strDao += "                                                                                                 \n";
        	strDao += "    /**                                                                                          \n";
        	strDao += "     * " + tableName + " 삭제                                                                                \n";
        	strDao += "     *                                                                                           \n";
        	strDao += "     * @param data 변경 데이터                                                                  \n";
        	strDao += "     * @return int 삭제 건수                                                                    \n";
        	strDao += "     *                                                                                           \n";
        	strDao += "     * @throws Exception                                                                         \n";
        	strDao += "     */                                                                                          \n";
        	strDao += "    public int " + sMethodNameDel + "(Data data) throws Exception {                              \n";
        	strDao += "        return executeUpdate(" + "\"" + sDaoNameU + "." + methodDelName + "\"" + " , data);      \n";
        	strDao += "    }                                                                                            \n";
        	strDao += "                                                                                                 \n";
        	strDao += "}                                                                                                \n";

        	this.tbMain.tbSub6.form.taDao.set_value(strDao);
        };

        /*===============================================================================================================================*/
        /* XSQL 텝의 자료 처리
         * XML => SQL문 자동작성/DATASET SOURCE/GRID 바운드생성
         */
        this.fn_tbXmlquery = function (strTableName)
        {

        	var objDate 	 		= new Date();
        	var nYear 		 		= objDate.getFullYear();
        	var nMonth 		 		= ((objDate.getMonth() + 1) + "").padLeft(2, '0');
        	var nDay 		 		= (objDate.getDate() + "").padLeft(2, '0');
        	var ncurrDate    		= nYear + "." + nMonth + "." + nDay;
        	var tableName				= this.DS_Master.getColumn(this.DS_Master.rowposition,"COMMENTS");
        	var strNexarcoName          = this.gfn_trim(this.edWorkName.value) + this.gfn_trim(this.edWorkName1.value);
        	var methodName				= this.gfn_trim(this.edMethod.text);
        	var methodSelName			= "SEL_" + this.gfn_trim(methodName);
        	var methodSelPkName		    = "SEL_" + this.gfn_trim(methodName) + "_PK";
        	var methodSelKeyName		= "SEL_" + this.gfn_trim(methodName) + "_KEY";
        	var methodInsName			= "INS_" + this.gfn_trim(methodName);
        	var methodUpdName			= "UPD_" + this.gfn_trim(methodName);
        	var methodDelName			= "DEL_" + this.gfn_trim(methodName);
        	var nRowCnt 				= this.DS_Detail.rowcount;
        	var strMetaData 			= "";
        	var strColName 				= "";
        	var strColPk 				= "";
        	var strDataLength 			= "";
        	var strColType 				= "";
        	var strColComent 			= "";

        	this.tbMain.tbSub7.form.taXmlquery.set_value("");

        	strMetaData += "<?xml version=" + "\"" + "1.0" + "\"" + " encoding=" + "\"" + "UTF-8" + "\"" + "?>\n";
        	strMetaData += "<sql-resource>\n";
        	strMetaData += "\n";
        	strMetaData += "       <query name=" + "\"" + methodSelName +  "\"" + ">\n";
        	strMetaData += "            /* " + tableName + " 조회,[상세명등록]," + ncurrDate + ",jiback */\n";
        	strMetaData += "            /* " + strNexarcoName + "." + methodSelName + " */\n";
        	strMetaData += "            <![CDATA[\n";
        	strMetaData += "                 SELECT\n";
        	strMetaData += "                       '0' AS CHK" + "/*".padLeft((31 - "0 AS CHK".length), " ") + "CHK" + "*/\n";
        	for (var idx = 0; idx < nRowCnt; idx++)
        	{
        		strColName 		= this.gfn_trim(this.DS_Detail.getColumn(idx, "COLUMN_NAME"));
        		strColComent 	= this.gfn_trim(this.DS_Detail.getColumn(idx, "COMMENTS"));
        		strMetaData += "                      , " + "A." + strColName + "/*".padLeft((30 - strColName.length), " ") + strColComent + "*/\n";
        	}
        	strMetaData += "                   FROM " + strTableName + " A" + "\n";
        	strMetaData += "                  WHERE 1=1\n";
        	strMetaData += "              ]]" + ">\n";
        	/*-------------------------------------------------------------------*/
        	pkRow = this.DS_Detail.findRow("COL_PK", "Y");
        	if (pkRow > -1)
        	{
        		for (var idx = 0; idx < nRowCnt; idx++)
        		{
        			strColName 	= this.gfn_trim(this.DS_Detail.getColumn(idx, "COLUMN_NAME"));
        			strColPk 	= this.gfn_trim(this.DS_Detail.getColumn(idx, "COL_PK"));

        			if ((strColPk.trim()).length > 0)
        			{
        				strMetaData += "              <if var=" + "\"" + this.gfn_trim(strColName) + "\"" + " sign=" +  "\"" + "!=" + "\"" + " value=" + "\"" + "NULL" + "\"" + ">\n";
        				strMetaData += "                   <![CDATA[\n";
        				strMetaData += "                         AND " + "A." + strColName + " = " + "#" + this.gfn_trim(strColName) + "#" + "\n";
        				strMetaData += "                   ]]" + ">\n";
        				strMetaData += "              </if>\n";
        			}
        		}

        	}
        	strMetaData += "       </query>\n";
        	strMetaData += "\n";
        	strMetaData += "       <query name=" + "\"" + methodSelPkName +  "\"" + ">\n";
        	strMetaData += "            /* " + tableName + " 유일키조회,[상세명등록]," + ncurrDate + ",jiback */\n";
        	strMetaData += "            /* " + strNexarcoName + "." + methodSelPkName + " */\n";
        	strMetaData += "            <![CDATA[\n";
        	strMetaData += "                    SELECT\n";
        	strMetaData += "                           LPAD(NVL(MAX(TO_NUMBER(CODE))+1,'1'),5,'0') AS PK_CODE\n";
        	strMetaData += "                      FROM " + strTableName + "\n";
        	strMetaData += "                     WHERE 1=1\n";

        	for (var idx = 0; idx < nRowCnt; idx++)
        	{
        		strColName = this.gfn_trim(this.DS_Detail.getColumn(idx, "COLUMN_NAME"));
        		strColPk = this.gfn_trim(this.DS_Detail.getColumn(idx, "COL_PK"));

        		if ((strColPk.trim()).length > 0)
        		{
        			strMetaData += "                       AND " + strColName + " = #" + this.gfn_trim(strColName) + "#" + "\n";
        		}
        	}
        	strMetaData += "            ]]" + ">\n";
        	strMetaData += "       </query>\n";
        	strMetaData += "\n";
        	strMetaData += "       <query name=" + "\"" + methodSelKeyName +  "\"" + ">\n";
        	strMetaData += "            /* " + tableName + " 중복체크조회,[상세명등록]," + ncurrDate + ",jiback */\n";
        	strMetaData += "            /* " + strNexarcoName + "." + methodSelKeyName + " */\n";
        	strMetaData += "            <![CDATA[\n";
        	strMetaData += "                    SELECT\n";
        	strMetaData += "                           COUNT(1) AS CNT\n";
        	strMetaData += "                      FROM " + strTableName + "\n";
        	strMetaData += "                     WHERE 1=1\n";
        	for (var idx = 0; idx < nRowCnt; idx++)
        	{
        		strColName = this.gfn_trim(this.DS_Detail.getColumn(idx, "COLUMN_NAME"));
        		strColPk = this.gfn_trim(this.DS_Detail.getColumn(idx, "COL_PK"));

        		if ((strColPk.trim()).length > 0)
        		{
        			strMetaData += "                       AND " + strColName + " = #" + this.gfn_trim(strColName) + "#" + "\n";
        		}
        	}
        	strMetaData += "            ]]" + ">\n";
        	strMetaData += "        </query>\n";

        	strMetaData += "\n";
        	strMetaData += "       <!-- " + tableName + " 저장 -->\n";
        	strMetaData += "       <query name=" + "\"" + methodInsName + "\"" + ">\n";
        	strMetaData += "             /* " + tableName + " 저장,[상세명등록]," + ncurrDate + ",jiback */\n";
        	strMetaData += "             /* " + strNexarcoName + "." + methodInsName+ " */\n";
        	strMetaData += "             <![CDATA[\n";
        	strMetaData += "                     INSERT INTO " + strTableName + "\n";
        	strMetaData += "                          (\n";
        	for (var idx = 0; idx < nRowCnt; idx++)
        	{
        		strColName = this.DS_Detail.getColumn(idx, "COLUMN_NAME");
        		strColComent = this.DS_Detail.getColumn(idx, "COMMENTS");
        		if (idx == 0)
        		{
        			strMetaData += "                            " + this.gfn_trim(strColName) + "/*".padLeft((30 - strColName.length), " ") + this.gfn_trim(strColComent) + "*/\n";
        		}else
        		{
        			strMetaData += "                          , " + this.gfn_trim(strColName) + "/*".padLeft((30 - strColName.length), " ") + this.gfn_trim(strColComent) + "*/\n";
        		}
        	}
        	strMetaData += "                          )\n";
        	strMetaData += "                     VALUES\n";
        	strMetaData += "                          (\n";

        	for (var idx = 0; idx < nRowCnt; idx++)
        	{
        		strColName = this.DS_Detail.getColumn(idx, "COLUMN_NAME");
        		strColType = this.gfn_trim(this.DS_Detail.getColumn(idx, "DATA_TYPE"));
        		if (idx == 0)
        		{
        			if (strColType == "DATE")
        			{
        				strMetaData += "                            SYSDATE\n";
        			}else
        			{
        				strMetaData += "                            #" + this.gfn_trim(strColName) + "#" + "\n";
        			}
        		}else
        		{
        			if (strColType == "DATE")
        			{
        				strMetaData += "                          , SYSDATE\n";

        			}else
        			{
        				strMetaData += "                          , #" + this.gfn_trim(strColName) + "#" + "\n";
        			}
        		}
        	}
        	strMetaData += "                          )\n";
        	strMetaData += "             ]]" + ">\n";
        	strMetaData += "       </query>\n";
        	/*--------------------------UPDATE-----------------------------------------*/
        	strMetaData += "\n";
        	strMetaData += "       <query name=" + "\"" + methodUpdName + "\"" + ">\n";
        	strMetaData += "             /* " + tableName + " 수정,[상세명등록]," + ncurrDate + ",jiback */\n";
        	strMetaData += "             /* " + strNexarcoName + "." + methodUpdName + " */\n";
        	strMetaData += "             <![CDATA[                                                																\n";
        	strMetaData += "                     UPDATE " + strTableName + "\n";
        	strMetaData += "                        SET\n";
        	for (var idx = 0; idx < nRowCnt; idx++)
        	{
        		strColName 		= this.DS_Detail.getColumn(idx, "COLUMN_NAME");
        		strColComent 	= this.DS_Detail.getColumn(idx, "COMMENTS");
        		strColType 		= this.gfn_trim(this.DS_Detail.getColumn(idx, "DATA_TYPE"));
        		if (idx == 0)
        		{
        			if (strColType == "DATE")
        			{
        				strMetaData += "                            " + strColName + " = ".padLeft((18 - "SYSDATE".length), " ") + "SYSDATE" + "/*".padLeft((22 - "SYSDATE".length), " ") + this.gfn_trim(strColComent) + "*/\n";
        			}
        			else
        			{
        				strMetaData += "                            " + strColName + " = #".padLeft((20 - strColName.length), " ") + this.gfn_trim(strColName) + "#" + "/*".padLeft((20 - (this.gfn_trim(strColName)).length), " ") + this.gfn_trim(strColComent) + "*/\n";
        			}
        		}
        		else
        		{
        			if (strColType == "DATE")
        			{
        				strMetaData += "                          , " + strColName + " = ".padLeft((18 - "SYSDATE".length), " ") + "SYSDATE" + "/*".padLeft((22 - "SYSDATE".length), " ") + this.gfn_trim(strColComent) + "*/\n";
        			}
        			else
        			{
        				strMetaData += "                          , " + strColName + " = #".padLeft((20 - strColName.length), " ") + this.gfn_trim(strColName) + "#" + "/*".padLeft((20 - (this.gfn_trim(strColName)).length), " ") + this.gfn_trim(strColComent) + "*/\n";
        			}
        		}
        	}
        	strMetaData += "                     WHERE 1=1\n";
        	for (var idx = 0; idx < nRowCnt; idx++)
        	{
        		strColName = this.DS_Detail.getColumn(idx, "COLUMN_NAME");
        		strColPk = this.DS_Detail.getColumn(idx, "COL_PK");
        		if ((strColPk.trim()).length > 0)
        		{
        			strMetaData += "                       AND " + strColName + " = #" + this.gfn_trim(strColName) + "#" + "\n";
        		}
        	}
        	strMetaData += "             ]]" + ">\n";
        	strMetaData += "       </query>\n";
        	/*--------------------------------DELETE-----------------------------------*/
        	strMetaData += "\n";
        	strMetaData += "       <query name=" + "\"" + methodDelName + "\"" + ">\n";
        	strMetaData += "             /* " + tableName + " 삭제,[상세명등록]," + ncurrDate + ",jiback */\n";
        	strMetaData += "            /* " + strNexarcoName + "." + methodDelName + " */\n";
        	strMetaData += "            <![CDATA[\n";
        	strMetaData += "                    DELETE FROM " + strTableName + "\n";
        	strMetaData += "                     WHERE 1=1\n";
        	for (var idx = 0; idx < nRowCnt; idx++)
        	{
        		strColName = this.DS_Detail.getColumn(idx, "COLUMN_NAME");
        		strColPk = this.DS_Detail.getColumn(idx, "COL_PK");
        		if ((strColPk.trim()).length > 0)
        		{
        			strMetaData += "                       AND " + strColName + " = #" + this.gfn_trim(strColName) + "#" + "\n";
        		}
        	}
        	strMetaData += "            ]]" + ">\n";
        	strMetaData += "      </query>\n";
        	strMetaData += "</sql-resource>\n";
        	strMetaData += "\n";

        	strMetaData += "------------------------------------파싱데이타 셋(ds에 Contents속성에 반듯이 넣어주세요. -------------------------------	\n";
        	strMetaData += "\n";
        	strMetaData += "<ColumnInfo>\n";
        	strMetaData += "    <Column id=" + "\"" + "CHK" + "\"" + " type=" + "\"" + "STRING" + "\"" + " size=" + "\"" + "1" + "\"" + "/>\n";
        	for (var idx = 0; idx < nRowCnt; idx++)
        	{
        		strColName 		= this.DS_Detail.getColumn(idx, "COLUMN_NAME");
        		strDataLength 	= this.DS_Detail.getColumn(idx, "DATA_LENGTH");
        		strColType 		= this.gfn_trim(this.DS_Detail.getColumn(idx, "DATA_TYPE"));

        		var strDsType;
        		switch (strColType)
        		{
        			case "VARCHAR2":
        			case "VARCHAR":
        				strDsType = "STRING";
        				break;
        			case "CHAR":
        				strDsType = "CHAR";
        				break;
        			case "DATE":
        				strDsType = "DATE";
        				break;
        			case "NUMBER":
        				strDsType = "BIGDECIMAL";
        				break;
        			case "INTEGER":
        				strDsType = "INT";
        				break;
        			case "BLOB":
        				strDsType = "BLOB";
        				break;
        			default:
        				strDsType = "STRING";
        				break;
        		}
        		strMetaData += "    <Column id=" + "\"" + strColName + "\"" + " type=" + "\"" + strDsType + "\"" + " size=" + "\"" + strDataLength + "\"" + "/>\n";
        	}
        	strMetaData += "</ColumnInfo>\n";
        	strMetaData += "\n";
        	strMetaData += "------------------------------------그리드 데이타 셋 디자인 입니다.   ------------------------------------------\n";
        	strMetaData += "\n";
        	strMetaData += "<Grid id=" + "\"" + "grd_list" + "\"" + " taborder=" + "\"" + "1" + "\"" + " binddataset=" + "\"" + "ds_list" + "\"" + " ";
        	strMetaData += "autoenter=" + "\"" + "select" + "\"" + " autofittype=" + "\"" + "col" + "\"" + " ";
        	strMetaData += "onheadclick=" + "\"" + "grd_list_onheadclick" + "\"" + " ";
        	strMetaData += "left=" + "\"" + "0" + "\"" + " top=" + "\"" + "123" + "\"" + " right=" + "\"" + "20" + "\"" + " bottom=" + "\"" + "0" + "\"" + ">\n";
        	strMetaData += "       <Formats>\n";
        	strMetaData += "              <Format id=" + "\"" + "default" + "\"" + ">\n";
        	strMetaData += "                     <Columns>\n";
        	strMetaData += "                            <Col size=" + "\"" + "40" + "\"" + "/>\n";
        	strMetaData += "                            <Col size=" + "\"" + "40" + "\"" + "/>\n";
        	for (var idx = 0; idx < nRowCnt; idx++)
        	{
        		strMetaData += "                            <Col size=" + "\"" + "100" + "\"" + "/>\n";
        	}
        	strMetaData += "                     </Columns>\n";
        	strMetaData += "                     <Rows>\n";
        	strMetaData += "                            <Row" + " size=" + "\"" + "30" + "\"" + " band=" + "\"" + "head" + "\"" + "/>\n";
        	strMetaData += "                            <Row" + " size=" + "\"" + "30" + "\"" + "/>\n";
        	strMetaData += "                     </Rows>\n";
        	strMetaData += "                     <Band id=" + "\"" + "head" + "\"" + ">\n";
        	strMetaData += "                            <Cell displaytype=" + "\"" + "checkboxcontrol" + "\"" + " edittype=" + "\"" + "checkbox" + "\"" + "/>  \n";
        	strMetaData += "                            <Cell col=" + "\"" + "1" + "\"" + " displaytype=" + "\"" + "normal" + "\"" + " text=" + "\"" + "No." + "\"" + "/>  \n";
        	for (var idx = 0; idx < nRowCnt; idx++)
        	{
        		strHeadName = this.DS_Detail.getColumn(idx, "COMMENTS");
        		strMetaData += "                            <Cell col=" + "\"" + (idx + 2).toString() + "\"" + " disptype=" + "\"" + "normal" + "\"" + " text=" + "\"" + this.gfn_trim(strHeadName).toLowerCase() + "\"" + "/>\n";
        	}
        	strMetaData += "                     </Band>\n";
        	strMetaData += "                     <Band id=" + "\"" + "body" + "\"" + ">\n";
        	strMetaData += "                            <Cell displaytype=" + "\"" + "checkboxcontrol" + "\"" + " edittype=" + "\"" + "checkbox" + "\"" + " text=" + "\"" + "bind:CHK" + "\"" + " editmaxlength=" + "\"" + "1" + "\"" + "/>\n";
        	strMetaData += "                            <Cell col=" + "\"" + "1" + "\"" + " displaytype=" + "\"" + "normal" + "\"" + " expr=" + "\"" + "currow+1" + "\"" + "/>\n";
        	for (var idx = 0; idx < nRowCnt; idx++)
        	{
        		strColName = this.DS_Detail.getColumn(idx, "COLUMN_NAME");
        		strColType = this.gfn_trim(this.DS_Detail.getColumn(idx, "DATA_TYPE"));
        		strDataLength = this.DS_Detail.getColumn(idx, "DATA_LENGTH");

        		var strDsType;
        		var strAlignSize;
        		var strEType;
        		switch (strColType)
        		{
        			case "VARCHAR2":
        			case "VARCHAR":
        				strDsType = "text";
        				strEType = "text";
        				strAlignSize = "left";
        				break;
        			case "CHAR":
        				strDsType = "text";
        				strEType = "text";
        				strAlignSize = "center";
        				break;
        			case "DATE":
        				strDsType = "date";
        				strEType = "date";
        				strAlignSize = "center";
        				break;
        			case "NUMBER":
        				strDsType = "number";
        				strEType = "mask";
        				strAlignSize = "right";
        				break;
        			case "INTEGER":
        				strDsType = "number";
        				strEType = "mask";
        				strAlignSize = "right";
        				break;
        			case "BLOB":
        				strDsType = "text";
        				strEType = "text";
        				strAlignSize = "left";
        				break;
        			default:
        				strDsType = "text";
        				strEType = "text";
        				strAlignSize = "center";
        				break;
        		}
        		if (strDsType == "date")
        		{
        			strMetaData += "                            <Cell col=" + "\"" + (idx + 2).toString() + "\"" + " displaytype=" + "\"" + this.gfn_trim(strDsType) + "\"" + " edittype=" + "\"" + this.gfn_trim(strEType) + "\"" + " textAlign=" + "\"" +  this.gfn_trim(strAlignSize) + "\"" + " text=" + "\"" + "bind:" + this.gfn_trim(strColName) + "\"" + " editmaxlength=" + "\"" + strDataLength + "\"" + " calendardisplaynulltype=" + "\"" + "none" + "\"" + "/>\n";
        		}
        		else
        		{
        			strMetaData += "                            <Cell col=" + "\"" + (idx + 2).toString() + "\"" + " displaytype=" + "\"" + this.gfn_trim(strDsType) + "\"" + " edittype=" + "\"" + this.gfn_trim(strEType) + "\"" + " textAlign=" + "\"" +  this.gfn_trim(strAlignSize) + "\"" + " text=" + "\"" + "bind:" + this.gfn_trim(strColName) + "\"" + " editmaxlength=" + "\"" + strDataLength + "\"" + "/>\n";
        		}
        	}
        	strMetaData += "                    </Band>\n";
        	strMetaData += "              </Format>\n";
        	strMetaData += "      </Formats>\n";
        	strMetaData += "</Grid>\n";

        	this.tbMain.tbSub7.form.taXmlquery.set_value(strMetaData);
        };
        /**
         테이블 크레이트를 만든다
         */
        this.fn_taXOracle = function (strTableName)
        {
        	this.tbMain.tbSub8.form.taXOracle.set_value("");
        	var strBlank 		= "                                                         ";
        	var strXOracle 		= "";
        	var strColLine 		= "";
        	var strComent 		= "";
        	var strSqData 		= "";
        	var strSqData1 		= "";
        	var strSqData2 		= "";
        	var strSqData3 		= "";
        	var DsType 			= "";
        	var strTabspace 	= "";
        	var strTabIndex 	= "";

        	var strColName 		= "";
        	var strColType 		= "";
        	var strColNull 		= "";
        	var strColDef 		= "";
        	var strColComent 	= "";
        	var strDataType 	= "";
        	var strDataLength 	= "";

        	var strConstraint 	= "";
        	var strConstraint1 	= "";

        	var idx = 0;
        	var nRowCnt = this.DS_Detail.rowcount;

        	strXOracle += "DROP TABLE " + strTableName + ";\n\n";
        	strXOracle += "CREATE TABLE " + strTableName + "(\n";
        	strComent += "COMMENT ON TABLE " + strTableName + " IS '" +
        		this.DS_Master.getColumn(this.DS_Master.rowposition, "COMMENTS") + "';\n";

        	var chkFalg = this.DS_Detail.findRow("COL_PK", "Y");

        	for (var idx = 0; idx < nRowCnt; idx++)
        	{
        		strColName = this.gfn_trim(this.DS_Detail.getColumn(idx, "COLUMN_NAME"));
        		strColType = this.gfn_trim(this.DS_Detail.getColumn(idx, "VW_DATA_TYPE"));
        		strColNull = this.gfn_trim(this.DS_Detail.getColumn(idx, "COL_NULL"));
        		strColPk = this.gfn_trim(this.DS_Detail.getColumn(idx, "COL_PK"));
        		strColDef = this.gfn_trim(this.DS_Detail.getColumn(idx, "COL_DEF"));
        		strColComent = this.gfn_trim(this.DS_Detail.getColumn(idx, "COMMENTS"));
        		strDataType = this.gfn_trim(this.DS_Detail.getColumn(idx, "DATA_TYPE"));
        		strDataLength = this.gfn_trim(this.DS_Detail.getColumn(idx, "DATA_LENGTH"));

        		if (this.gfn_trim(strColDef).length != 0)
        		{
        			strColDef = " DEFAULT " + strColDef;
        		}
        		if (chkFalg > -1)
        		{
        			if (idx == (nRowCnt - 1))
        			{
        				strColLine = "  " + strColName + " " + strColType + " " + strColNull + strColDef + ",";
        			}
        			else
        			{
        				strColLine = "  " + strColName + " " + strColType + " " + strColNull + strColDef + ",";
        			}
        		}
        		else
        		{
        			if (idx == (nRowCnt - 1))
        			{
        				strColLine = "  " + strColName + " " + strColType + " " + strColNull + strColDef;
        			}
        			else
        			{
        				strColLine = "  " + strColName + " " + strColType + " " + strColNull + strColDef + ",";
        			}
        		}

        		strColLine += strBlank.substr(0, 50 - strColLine.length);

        		strXOracle += strColLine + " -- " + strColComent + "\n";

        		strComent += "COMMENT ON COLUMN " + strTableName + "." + strColName + " IS '" + strColComent + "';\n";

        		if ((this.gfn_trim(strColPk)).length != 0)
        		{
        			if (strConstraint == "")
        			{
        				strConstraint += strColName;
        				strConstraint1 += "\t  " + strColName + " ASC \n";
        			}
        			else
        			{
        				strConstraint += ", " + strColName;
        				strConstraint1 += "\t, " + strColName + " ASC \n";
        			}
        		}
        	}
        	// END FOR

        	if ((strConstraint.trim()).length != 0)
        	{
        		strXOracle += "  CONSTRAINT PK_" + strTableName + " PRIMARY KEY (" + strConstraint + ")\n";
        	}

        	strXOracle += ");";

        	strSqData += "SELECT                                                  														\n";

        	for (var idx = 0; idx < nRowCnt; idx++)
        	{
        		strColName = this.gfn_trim(this.DS_Detail.getColumn(idx, "COLUMN_NAME"));
        		strColComent = this.gfn_trim(this.DS_Detail.getColumn(idx, "COMMENTS"));
        		if (idx == 0)
        		{
        			strSqData += "       " + strColName + "--".padLeft((30 - strColName.length), " ") + strColComent + "                                       										\n";
        		}
        		else
        		{
        			strSqData += "     , " + strColName + "--".padLeft((30 - strColName.length), " ") + strColComent + "                                      										\n";
        		}
        	}
        	strSqData += "FROM " + strTableName + "                                             											\n";
        	strSqData += "WHERE 1=1";
        	var chk = this.DS_Detail.findRow("COL_PK", "Y");

        	if (chk < 0)
        	{
        		strSqData += ";";
        	}
        	else
        	{
        		strSqData += "\n";
        	}
        	for (var idx = 0; idx < nRowCnt; idx++)
        	{
        		strColName = this.DS_Detail.getColumn(idx, "COLUMN_NAME");
        		strColPk = this.DS_Detail.getColumn(idx, "COL_PK");
        		strColComent = this.DS_Detail.getColumn(idx, "COMMENTS");
        		if ((this.gfn_trim(strColPk)).length > 0)
        		{
        			strSqData += "-- AND " + strColName + " = @".padLeft((30 - strColName.length), " ") + this.gfn_trim(strColName) + "--".padLeft((15 - strColName.length), " ") + strColComent + "        					\n";
        		}
        	}
        	if (chk > -1)
        	{
        		strSqData += ";";
        	}
        	// ====================sql 입력 쿼리 =========================================//
        	strSqData1 += "INSERT INTO " + strTableName + "                                       										\n";
        	strSqData1 += "(                                       																		\n";
        	for (var idx = 0; idx < nRowCnt; idx++)
        	{
        		strColName = this.gfn_trim(this.DS_Detail.getColumn(idx, "COLUMN_NAME"));
        		strColComent = this.gfn_trim(this.DS_Detail.getColumn(idx, "COMMENTS"));

        		if (idx == 0)
        		{
        			strSqData1 += "       " + strColName + "--".padLeft((30 - strColName.length), " ") + strColComent + "                                       										\n";
        		}
        		else
        		{
        			strSqData1 += "     , " + strColName + "--".padLeft((30 - strColName.length), " ") + strColComent + "                                      										\n";
        		}
        	}
        	strSqData1 += ")VALUES                                                  														\n";
        	strSqData1 += "(                                                        														\n";
        	for (var idx = 0; idx < nRowCnt; idx++)
        	{
        		strColName = this.DS_Detail.getColumn(idx, "COLUMN_NAME");
        		strColType = this.gfn_trim(this.DS_Detail.getColumn(idx, "DATA_TYPE"));

        		switch (strColType)
        		{
        			case "VARCHAR2":
        			case "VARCHAR":
        				DsType = "";
        				break;
        			case "CHAR":
        				DsType = "";
        				break;
        			case "DATE":
        				DsType = "SYSDATE";
        				break;
        			case "NUMBER":
        				DsType = "0";
        				break;
        			case "INTEGER":
        				DsType = "0";
        				break;
        			case "BLOB":
        				DsType = "";
        				break;
        			default:
        				DsType = "";
        				break;
        		}


        		if (idx == 0)
        		{
        			strSqData1 += "       " + ((DsType.length == 0) ? "''" : DsType) + "-- ".padLeft(30 - ((DsType.length == 0) ? "''" : DsType).length, " ") + this.gfn_trim(strColName) + "                                       		\n";
        		}
        		else
        		{
        			strSqData1 += "     , " + ((DsType.length == 0) ? "''" : DsType) + "-- ".padLeft(30 - ((DsType.length == 0) ? "''" : DsType).length, " ") + this.gfn_trim(strColName) + "                                      		\n";
        		}
        	}
        	strSqData1 += ");	                                                      														\n";

        	// ====================sql 수정 쿼리 =========================================//
        	strSqData3 += "UPDATE " + strTableName + "                                													\n";
        	strSqData3 += "SET                                                      														\n";
        	for (var idx = 0; idx < nRowCnt; idx++)
        	{
        		strColName = this.DS_Detail.getColumn(idx, "COLUMN_NAME");
        		strColComent = this.DS_Detail.getColumn(idx, "COMMENTS");
        		strColType = this.gfn_trim(this.DS_Detail.getColumn(idx, "DATA_TYPE"));

        		switch (strColType)
        		{
        			case "VARCHAR2":
        			case "VARCHAR":
        				DsType = "";
        				break;
        			case "CHAR":
        				DsType = "";
        				break;
        			case "DATE":
        				DsType = "SYSDATE";
        				break;
        			case "NUMBER":
        				DsType = "0";
        				break;
        			case "INTEGER":
        				DsType = "0";
        				break;
        			case "BLOB":
        				DsType = "";
        				break;
        			default:
        				DsType = "";
        				break;
        		}

        		if (idx == 0)
        		{
        			strSqData3 += "       " + strColName + " = ".padLeft((20 - strColName.length), " ") + ((DsType.length == 0) ? "''" : DsType) + "-- ".padLeft(30 - ((DsType.length == 0) ? "''" : DsType).length, " ") + this.gfn_trim(strColName) + strColComent + "                         \n";
        		}
        		else
        		{
        			strSqData3 += "     , " + strColName + " = ".padLeft((20 - strColName.length), " ") + ((DsType.length == 0) ? "''" : DsType) + "-- ".padLeft(30 - ((DsType.length == 0) ? "''" : DsType).length, " ") + this.gfn_trim(strColName) + strColComent + "                         \n";
        		}
        	}
        	strSqData3 += "WHERE 1=1                                                   						                            \n";
        	for (var idx = 0; idx < nRowCnt; idx++)
        	{
        		strColName = this.DS_Detail.getColumn(idx, "COLUMN_NAME");
        		strColPk = this.DS_Detail.getColumn(idx, "COL_PK");
        		strColComent = this.DS_Detail.getColumn(idx, "COMMENTS");
        		if (this.gfn_trim(strColPk).length > 0)
        		{
        			strSqData3 += "AND " + strColName + " = '' --@".padLeft((15 - strColName.length), " ") + this.gfn_trim(strColName) + "--".padLeft((15 - strColName.length), " ") + strColComent + "        					\n";
        		}
        	}
        	strSqData3 += ";";



        	// ====================sql 삭제 쿼리 =========================================//
        	strSqData2 += "DELETE FROM " + strTableName + "                                                  								\n";
        	strSqData2 += "WHERE 1=1                              																		\n";
        	for (var idx = 0; idx < nRowCnt; idx++)
        	{
        		strColName = this.DS_Detail.getColumn(idx, "COLUMN_NAME");
        		strColPk = this.DS_Detail.getColumn(idx, "COL_PK");
        		strColComent = this.DS_Detail.getColumn(idx, "COMMENTS");
        		if (this.gfn_trim(strColPk).length > 0)
        		{
        			strSqData2 += "AND " + strColName + " = '' --".padLeft((15 - strColName.length), " ") + this.gfn_trim(strColName) + "--".padLeft((15 - strColName.length), " ") + strColComent + "        					\n";
        		}
        	}
        	strSqData2 += ";";

        	this.tbMain.tbSub8.form.taXOracle.set_value(strXOracle + "\n\n" + strTabspace + "\n\n" + strComent + "\n\n" + strTabIndex + "\n\n"
        		 + " /* ---------------(" + strTableName + ")테이블 조회 쿼리 입니다. ----------------------- */ \n\n"
        		 + strSqData + "\n\n"
        		 + " /* ---------------(" + strTableName + ")테이블 입력 쿼리 입니다. ----------------------- */ \n\n"
        		 + strSqData1 + "\n\n"
        		 + " /* ---------------(" + strTableName + ")테이블 수정 쿼리 입니다. ----------------------- */ \n\n"
        		 + strSqData3 + "\n\n"
        		 + " /* ---------------(" + strTableName + ")테이블 삭제 쿼리 입니다. ----------------------- */ \n\n"
        		 + strSqData2 + "\n\n");
        };

        this.fn_PidXml = function ()
        {

        	var objDate 	 		= new Date();
        	var nYear 		 		= objDate.getFullYear();
        	var nMonth 		 		= objDate.getMonth() + 1;
        	var nDay 		 		= objDate.getDate();
        	var ncurrDate    		= nYear + "." + nMonth + "." + nDay;
        	var classNameLow 		= this.edWorkName.value.toLowerCase();
        	var classNameUpp 		= this.edWorkName.value.toUpperCase();
        	var nexacroNm			= this.edXPlatForm.value;

        	var sMethodUpp      	= this.gfn_trim(this.edMethod.value.toUpperCase());
        	var sMethodLow      	= this.gfn_trim(this.edMethod.value.toLowerCase());
        	var sMethodNameSel		= classNameLow + "/" + this.fn_strColName("sel_" 	+ sMethodLow);
        	var sMethodNameSave		= classNameLow + "/" + this.fn_strColName("save_" 	+ sMethodLow);
        	var sMethodNameDel		= classNameLow + "/" + this.fn_strColName("del_" 	+ sMethodLow);

        	var strPidxml 			= "";
        	strPidxml += "/**\n";
        	strPidxml += "*  메시지 관리\n";
        	strPidxml += "*  @MenuPath\n";
        	strPidxml += "*  @FileName       " + nexacroNm + "\n";
        	strPidxml += "*  @Creator        hkl(변경)\n";
        	strPidxml += "*  @CreateDate     " + ncurrDate + "\n";
        	strPidxml += "*  @LastModifier\n";
        	strPidxml += "*  @LastModifyDate\n";
        	strPidxml += "*  @Version        1.0\n";
        	strPidxml += "*  @Outline\n";
        	strPidxml += "*  @Description\n";
        	strPidxml += "************** 소스 수정 이력 *************************************************\n";
        	strPidxml += "*    date          		Modifier            Description\n";
        	strPidxml += "*******************************************************************************\n";
        	strPidxml += "*  " + ncurrDate + "     	    hkl(변경)           최초 생성\n";
        	strPidxml += "*******************************************************************************\n";
        	strPidxml += "*/\n";
        	strPidxml += "\n";
        	strPidxml += "/************************************************************************************************\n";
        	strPidxml += " * FORM 변수 선언 영역\n";
        	strPidxml += " ************************************************************************************************/\n";
        	strPidxml +=" this.fv_chkColidDs 		= " + "\"" + "BONBU_CD$BONBU_NM$HQ_CD$ORG_ID" + "\"" + "; 			//필수 입력사항 칼럼ID  예)  " + "\"" + "commSmcd$commName" + "\"" + "\n";
            strPidxml +=" this.fv_chkColNameDs   	= " + "\"" + "MS0034$MS0035$MS0036$MS0037" + "\"" + ";\n";
            strPidxml +=" this.fv_notNullobj 		= " + "\"" + "sta_inputTitle1$sta_inputTitle2$sta_inputTitle3" + "\"" + ";\n";
            strPidxml +=" this.fv_currDate;\n";
            strPidxml +=" this.fv_nextDay;\n";
        	strPidxml += "/***********************************************************************************************\n";
        	strPidxml += "* FORM EVENT 영역(onload)\n";
        	strPidxml += "/***********************************************************************************************/\n";
        	strPidxml += "this.form_onload = function(obj:nexacro.Form,e:nexacro.LoadEventInfo)\n";
        	strPidxml += "{\n";
        	strPidxml += "	this.gfn_formOnload(obj,e);\n";
        	strPidxml += "};\n";
        	strPidxml += "/**\n";
        	strPidxml += " * 공통코드 일괄 조회처리 기본셋팅\n";
        	strPidxml += " **/\n";
        	strPidxml += " this.fn_afterFormOnload = function()\n";
        	strPidxml += "{\n";
        	strPidxml += "/*\n";
        	strPidxml += "	this.mgfn_commSysDate(" + "\"" + "ds_date" + "\"" + ");\n";
            strPidxml += "	this.fv_currDate  = this.ds_date.getColumn(0," + "\"" + "YYYYMMDD" + "\"" + ");\n";
            strPidxml += "	this.fv_nextDay   = this.gfn_addDate(this.fv_currDate,1);\n";
            strPidxml += "\n";
            strPidxml += "	this.mgfn_cmmnGridSetNotNull(this.grd_list, this.fv_chkColidDs);\n";
            strPidxml += "	this.mgfn_cmmnMakeNotNullImg(this.fv_notNullobj, " + "\"" + "this" + "\"" + "); 			//필수항목을 펴시한다.\n";
        	strPidxml += "\n";
        	strPidxml += "	this.ds_cond.clearData();\n";
        	strPidxml += "	this.ds_cond.addRow();\n";
        	strPidxml += "*/\n";
        	strPidxml += "	//공통코드를 일괄적으로 가지고 옮\n";
        	strPidxml += "	var strDs 		= " + "\"" + "ds_comCd1|ds_comCd2|ds_comCd3|ds_comCd4|" + "\"" + ";\n";
        	strPidxml += "	    strDs 	   += " + "\"" + "ds_comCd5|ds_comCd6|ds_comCd7|ds_comCd8" + "\"" + ";\n";
        	strPidxml += "	var strLgcd 	= " + "\"" + "1|222|1|222|" + "\"" + ";\n";
        	strPidxml += "	    strLgcd    += " + "\"" + "1|222|1|222" + "\"" + ";\n";
        	strPidxml += "	var strSyscd    = " + "\"" + "1|1|1|1|" + "\"" + ";\n";
        	strPidxml += "	    strSyscd   += " + "\"" + "1|1|1|1" + "\"" + ";\n";
        	strPidxml += "	var strComb 	= " + "\"" + "T|S|N|X|" + "\"" + ";\n";
        	strPidxml += "	    strComb    += " + "\"" + "T|S|N|X" + "\"" + ";\n";
        	strPidxml += "	var strOptn 	= " + "\"" + "" + "\"" + ";\n";
        	strPidxml += "	var svcId 		= " + "\"" + "init" + "\"" + ";\n";
        	strPidxml += "	var callback 	= " + "\"" + "fn_callback" + "\"" + ";\n";
        	strPidxml += "\n";
        	strPidxml += "	// gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);\n";
        	strPidxml += "	this.mgfn_CmmnMultiComboLoad( strDs\n";
        	strPidxml += "	                            , strLgcd\n";
        	strPidxml += "							    , strSyscd\n";
        	strPidxml += "							    , strComb\n";
        	strPidxml += "							    , strOptn\n";
        	strPidxml += "							    , svcId\n";
        	strPidxml += "							    , callback);\n";
        	strPidxml += "\n";
        	strPidxml += "};\n";
        	strPidxml += "\n";
        	strPidxml += "this.fn_postInit = function()\n";
        	strPidxml += "{\n";
        	strPidxml += "\n";
        	strPidxml += "	/* 바운드가 걸려있을시 기본값을 셋팅 */\n";
        	strPidxml += "	this.ds_cond.setColumn(0," + "\"" + "TEST_CD1" + "\"" + "," + "\"" + "" + "\"" + ");\n";
        	strPidxml += "	this.ds_cond.setColumn(0," + "\"" + "TEST_CD2" + "\"" + "," + "\"" + "" + "\"" + ");\n";
        	strPidxml += "	this.ds_cond.setColumn(0," + "\"" + "TEST_CD3" + "\"" + "," + "\"" + "" + "\"" + ");\n";
        	strPidxml += "	this.ds_cond.setColumn(0," + "\"" + "TEST_CD4" + "\"" + "," + "\"" + "1" + "\"" + ");\n";
        	strPidxml += "\n";
        	strPidxml += "	/* 인덱스값으로만 셋팅 할때(바운드가 없을시)*/\n";
        	strPidxml += "	/*\n";
        	strPidxml += "	this.div_cond.form.cbo_comCd1.set_index(0);\n";
        	strPidxml += "	this.div_cond.form.cbo_comCd2.set_index(0);\n";
        	strPidxml += "	this.div_cond.form.cbo_comCd3.set_index(0);\n";
        	strPidxml += "	this.div_cond.form.cbo_comCd4.set_index(0);\n";
        	strPidxml += "	*/\n";
        	strPidxml += "	this.div_cond.form.cbo_comCd1.setFocus();\n";
        	strPidxml += "	this.mgfn_commSysDate(" + "\"" + "ds_date" + "\"" + ");\n";
        	strPidxml += "	var currDate  = this.ds_date.getColumn(0," + "\"" + "YYYYMMDD" + "\"" + ");\n";
        	strPidxml += "\n";
        	strPidxml += "	this.ds_cond.setColumn(0," + "\"" + "SYST_SDT" + "\"" + ",currDate);\n";
        	strPidxml += "	this.ds_cond.setColumn(0," + "\"" + "SYST_EDT" + "\"" + ",currDate);\n";
        	strPidxml += "\n";
        	strPidxml += "	/*\n";
        	strPidxml += "	//싱글화면 호출시사용\n";
        	strPidxml += "	var strDs 		= " + "\"" + "ds_listLageCmd|ds_listMidCmd|ds_listSmallCmd" + "\"" + ";\n";
        	strPidxml += "	var strLgcd 	= " + "\"" + "MSPO400MT|MSPO410MT|MSPO420MT" + "\"" + ";\n";
        	strPidxml += "	var strComb 	= " + "\"" + "T|T|T" + "\"" + ";\n";
        	strPidxml += "	var svcId 		= " + "\"" + "initSingle" + "\"" + ";\n";
        	strPidxml += "	var callback 	= " + "\"" + "fn_callback" + "\"" + ";\n";
        	strPidxml += "\n";
        	strPidxml += "	// mgfn_CmmnSingleComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);\n";
        	strPidxml += "	this.mgfn_CmmnSingleComboLoad( strDs\n";
        	strPidxml += "	                            , strLgcd\n";
        	strPidxml += "							    , strComb\n";
        	strPidxml += "							    , svcId\n";
        	strPidxml += "							    , callback);\n";
        	strPidxml += "	*/\n";
        	strPidxml += "\n";
        	strPidxml += "};\n";
        	strPidxml += "\n";
        	strPidxml += "this.fn_postInitSingle = function()\n";
        	strPidxml += "{\n";
        	strPidxml += "\n";
        	strPidxml += "};\n";
        	strPidxml += "\n";
        	strPidxml +="/************************************************************************************************\n";
        	strPidxml +="* 공통 버튼 호출 영역\n";
        	strPidxml +="************************************************************************************************/\n";
        	strPidxml +="this.fn_cmmBtnClick = function(sBtn)\n";
        	strPidxml +="{\n";
        	strPidxml +="	switch(sBtn)\n";
        	strPidxml +="	{\n";
        	strPidxml +="		case " + "\"" + "ret" + "\"" + " :           //조회\n";
        	strPidxml +="			this.fn_search();\n";
        	strPidxml +="			break;\n";
        	strPidxml +="		case " + "\"" + "new" + "\"" + " :           //신규\n";
        	strPidxml +="			this.fn_new();\n";
        	strPidxml +="			break;\n";
        	strPidxml +="		case " + "\"" + "save" + "\"" + " :          //저장\n";
        	strPidxml +="			this.fn_save();\n";
        	strPidxml +="			break;\n";
        	strPidxml +="		case " + "\"" + "excel" + "\"" + " :         //엑셀\n";
        	strPidxml +="			this.fn_excel();\n";
        	strPidxml +="			break;\n";
        	strPidxml +="		case " + "\"" + "confirm" + "\"" + " :		 //확정\n";
        	strPidxml +="			this.fn_confirm();\n";
        	strPidxml +="			break;\n";
        	strPidxml +="		default :\n";
        	strPidxml +="			break;\n";
        	strPidxml +="	}\n";
        	strPidxml +="}\n";
        	strPidxml += "/************************************************************************************************\n";
        	strPidxml += "* TRANSACTION 서비스 호출 처리\n";
        	strPidxml += "************************************************************************************************/\n";
        	strPidxml += "/**\n";
        	strPidxml += " * 기능 : 실제 이벤트 처리\n";
        	strPidxml += " */\n";
        	strPidxml += "this.fn_search = function()\n";
        	strPidxml += "{\n";
        	strPidxml += "    if(!this.fn_preSearch()){\n";
        	strPidxml += "        return false;\n";
        	strPidxml += "    }\n";
        	strPidxml += "\n";
        	strPidxml += "	this.ds_list.clearData();\n";
        	strPidxml += "	var strSvcId     = " + "\"" + "search" + "\"" + ";\n";
        	strPidxml += "	var strSvcUrl    = " + "\"" + sMethodNameSel + "\"" + ";\n";
        	strPidxml += "	var inData       = " + "\"" + "ds_cond=ds_cond" + "\"" + ";\n";
        	strPidxml += "	var outData      = " + "\"" + "ds_list=ds_list" + "\"" + ";\n";
        	strPidxml += "	var strArg       = " + "\"" + "" + "\"" + ";  //파라미터명 확인\n";
        	strPidxml += "	var callBackFnc  = " + "\"" + "fn_callback" + "\"" + ";\n";
        	strPidxml += "\n";
        	strPidxml += "	//생략가능\n";
        	strPidxml += "	var isAsync   = true;                   // true:비동기, false:동기\n";
        	strPidxml += "\n";
        	strPidxml += "	this.gfn_transaction( strSvcId ,        // transaction을 구분하기 위한 svc id값\n";
        	strPidxml += "                        strSvcUrl ,       // transaction을 요청할 주소\n";
        	strPidxml += "                        inData ,          // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭\n";
        	strPidxml += "                        outData ,         // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭\n";
        	strPidxml += "                        strArg,           // 입력갑스로 보낼 arguments, strFormData=" + "\"" + "20120607" + "\"" + "\n";
        	strPidxml += "                        callBackFnc,      // transaction의 결과를 받을 Function 이름\n";
        	strPidxml += "                        isAsync);         // 통신(동기:false / 비동기:true). 생략하면 비동기통신. 비동기통신 권장.\n";
        	strPidxml += "\n";
        	strPidxml += "};\n";
        	strPidxml += "\n";
        	strPidxml += "/**\n";
        	strPidxml += " * 기능 : 실제 이벤트 처리\n";
        	strPidxml += " */\n";
        	strPidxml += "this.fn_delete = function()\n";
        	strPidxml += "{\n";
        	strPidxml += "    if(!this.fn_preDelete()){\n";
        	strPidxml += "        return false;\n";
        	strPidxml += "    }\n";
        	strPidxml += "\n";
        	strPidxml += "	var strSvcId     = " + "\"" + "delete" + "\"" + ";\n";
        	strPidxml += "	var strSvcUrl    = " + "\"" + sMethodNameDel + "\"" + ";\n";
        	strPidxml += "	var inData       = " + "\"" + "ds_list=ds_list:U" + "\"" + ";\n";
        	strPidxml += "	var outData      = " + "\"" + "" + "\"" + ";\n";
        	strPidxml += "	var strArg       = " + "\"" + "" + "\"" + ";  //파라미터명 확인\n";
        	strPidxml += "	var callBackFnc  = " + "\"" + "fn_callback" + "\"" + ";\n";
        	strPidxml += "	//생략가능\n";
        	strPidxml += "	var isAsync   = true;                   // true:비동기, false:동기\n";
        	strPidxml += "	this.gfn_transaction( strSvcId ,        // transaction을 구분하기 위한 svc id값\n";
        	strPidxml += "                        strSvcUrl ,       // transaction을 요청할 주소\n";
        	strPidxml += "                        inData ,          // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭\n";
        	strPidxml += "                        outData ,         // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭\n";
        	strPidxml += "                        strArg,           // 입력갑스로 보낼 arguments, strFormData=" + "\"" + "20120607" + "\"" + "\n";
        	strPidxml += "                        callBackFnc,      // transaction의 결과를 받을 Function 이름\n";
        	strPidxml += "                        isAsync);         // 통신(동기:false / 비동기:true). 생략하면 비동기통신. 비동기통신 권장.\n";
        	strPidxml += "};\n";
        	strPidxml += "\n";
        	strPidxml += "/**\n";
        	strPidxml += " * 기능 : 실제 이벤트 처리\n";
        	strPidxml += " */\n";
        	strPidxml += "this.fn_save = function()\n";
        	strPidxml += "{\n";
        	strPidxml += "    if(!this.fn_preSave()){\n";
        	strPidxml += "        return false;\n";
        	strPidxml += "    }\n";
        	strPidxml += "\n";
        	strPidxml += "  var strSvcId     = " + "\"" + "save" + "\"" + ";\n";
        	strPidxml += "  var strSvcUrl    = " + "\"" + sMethodNameSave + "\"" + ";\n";
        	strPidxml += "  var inData       = " + "\"" + "ds_list=ds_list:U" + "\"" + ";\n";
        	strPidxml += "  var outData      = " + "\"" + "" + "\"" + ";\n";
        	strPidxml += "  var strArg       = " + "\"" + "" + "\"" + ";  //파라미터명 확인\n";
        	strPidxml += "  var callBackFnc  = " + "\"" + "fn_callback" + "\"" + ";\n";
        	strPidxml += "  //생략가능\n";
        	strPidxml += "  var isAsync   = true;                 // true:비동기, false:동기\n";
        	strPidxml += "  this.gfn_transaction( strSvcId ,      // transaction을 구분하기 위한 svc id값\n";
        	strPidxml += "                        strSvcUrl ,     // transaction을 요청할 주소\n";
        	strPidxml += "                        inData ,        // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭\n";
        	strPidxml += "                        outData ,       // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭\n";
        	strPidxml += "                        strArg,         // 입력갑스로 보낼 arguments, strFormData=" + "\"" + "20120607" + "\"" + "\n";
        	strPidxml += "                        callBackFnc,    // transaction의 결과를 받을 Function 이름\n";
        	strPidxml += "                        isAsync);       // 통신(동기:false / 비동기:true). 생략하면 비동기통신. 비동기통신 권장.\n";
        	strPidxml += "\n";
        	strPidxml += "};\n";
        	strPidxml += "/************************************************************************************************\n";
        	strPidxml += " * CALLBACK 콜백 처리부분\n";
        	strPidxml += " ************************************************************************************************/\n";
        	strPidxml += "this.fn_callback = function(svcID, errorCode, errorMsg)\n";
        	strPidxml += "{\n";
        	strPidxml += "\n";
        	strPidxml += "	if(errorCode < 0) {\n";
        	strPidxml += "		return false;\n";
        	strPidxml += "	}\n";
        	strPidxml += "	switch(svcID) {\n";
        	strPidxml += "		case " + "\"" + "init" + "\"" + ":\n";
        	strPidxml += "			this.fn_postInit();\n";
        	strPidxml += "			break;\n";
        	strPidxml += "		case " + "\"" + "initSingle" + "\"" + ":\n";
        	strPidxml += "			this.fn_postInitSingle();\n";
        	strPidxml += "			break;\n";
        	strPidxml += "		case " + "\"" + "search" + "\"" + ":\n";
        	strPidxml += "			this.fn_postSearch();\n";
        	strPidxml += "			break;\n";
        	strPidxml += "		case " + "\"" + "save" + "\"" + ":\n";
        	strPidxml += "			this.fn_postSave();\n";
        	strPidxml += "			break;\n";
        	strPidxml += "		default:\n";
        	strPidxml += "			break;\n";
        	strPidxml += "	}\n";
        	strPidxml += "};\n";
        	strPidxml += "\n";
        	strPidxml += "/************************************************************************************************\n";
        	strPidxml += " * 사용자 FUNCTION 영역\n";
        	strPidxml += " ************************************************************************************************/\n";
        	strPidxml += "/****************************************** 조회 ************************************************/\n";
        	strPidxml += "/**\n";
        	strPidxml += " * 기능 : 조회 전처리 실행\n";
        	strPidxml += " */\n";
        	strPidxml += "this.fn_preSearch = function()\n";
        	strPidxml += "{\n";
        	strPidxml += "	return true;\n";
        	strPidxml += "\n";
        	strPidxml += "};\n";
        	strPidxml += "/**\n";
        	strPidxml += " * 기능 : 조회 후처리 실행\n";
        	strPidxml += " */\n";
        	strPidxml += "this.fn_postSearch = function()\n";
        	strPidxml += "{\n";
        	strPidxml += "	//총건수\n";
        	strPidxml += "	this.totalText1.set_text(this.gfn_rtnDsCnt(this.ds_list));\n";
        	strPidxml += "\n";
        	strPidxml += "	//trace(this.ds_list.saveXML());		//데이타가 확인\n";
        	strPidxml += "};\n";
        	strPidxml += "/****************************************** 삭제 ************************************************/\n";
        	strPidxml += " /**\n";
        	strPidxml += " * 기능 : 삭제 전처리 실행\n";
        	strPidxml += " */\n";
        	strPidxml += "this.fn_preDelete = function()\n";
        	strPidxml += "{\n";
        	strPidxml += "	if(this.ds_list.rowcount == 0)\n";
        	strPidxml += "	{\n";
        	strPidxml += "		this.gfn_alert(" + "\"" + "info" + "\"" + ", this.gfn_getMessage(" + "\"" + "CM0003" + "\"" + ", " + "\"" + "CM0002" + "\"" + "));	//MSG : 저장할 데이터가 없습니다.\n";
        	strPidxml += "		return false; 					//마스터 조회건이 없는경우 리턴\n";
        	strPidxml += "	}\n";
        	strPidxml += "\n";
        	strPidxml += "	if(!this.gfn_dsIsUpdated(this.ds_list))\n";
        	strPidxml += "	{\n";
        	strPidxml += "		this.gfn_alert(" + "\"" + "info" + "\"" + ", this.gfn_getMessage(" + "\"" + "CM0015" + "\"" + ", " + "\"" + "CM0013" + "\"" + "));	//MSG : 변경된 데이터가 없습니다.\n";
        	strPidxml += "		return false;\n";
        	strPidxml += "	}\n";
        	strPidxml += "\n";
        	strPidxml += "   var confirmYn = this.gfn_confirm(" + "\"" + "confirm" + "\"" + ", " + "\"" + "삭제하시겠습니까?" + "\"" +");\n";
        	strPidxml += "   if(confirmYn == false) {\n";
        	strPidxml += "       return false;\n";
        	strPidxml += "   }\n";
        	strPidxml += "   return true;\n";
        	strPidxml += "};\n";
        	strPidxml += "\n";
        	strPidxml += "/**\n";
        	strPidxml += " * 기능 : 삭제 후처리 실행\n";
        	strPidxml += " */\n";
        	strPidxml += "this.fn_postDelete = function()\n";
        	strPidxml += "{\n";
        	strPidxml += "\n";
        	strPidxml += "};\n";
        	strPidxml += "/****************************************** 저장 ************************************************/\n";
        	strPidxml += " /**\n";
        	strPidxml += " * 기능 : 저장 전처리 실행\n";
        	strPidxml += " */\n";
        	strPidxml += "this.fn_preSave = function()\n";
        	strPidxml += "{\n";
        	strPidxml += "	var menuId = " + "\"" + "MSOM000001" + "\"" + ";        // 메뉴아이디\n";
        	strPidxml += " 	if(!this.mgfn_menuLockCheck(menuId)) {                  // 메뉴아이디 함수호출\n";
        	strPidxml += "		return false;\n";
        	strPidxml += " 	}\n";
        	strPidxml += "\n";
        	strPidxml += "	if(this.ds_list.rowcount == 0) {\n";
        	strPidxml += "		this.gfn_alert(" + "\"" + "info" + "\"" + ", this.gfn_getMessage(" + "\"" + "CM0003" + "\"" + ", " + "\"" + "CM0002" + "\"" + "));	//MSG : 저장할 데이터가 없습니다.\n";
        	strPidxml += "		return false; 					//조회건이 없는경우 리턴\n";
        	strPidxml += "	}\n";
        	strPidxml += "\n";
        	strPidxml += "	if(!this.gfn_dsIsUpdated(this.ds_list))	{\n";
        	strPidxml += "		this.gfn_alert(" + "\"" + "info" + "\"" + ", this.gfn_getMessage(" + "\"" + "CM0015" + "\"" + ", " + "\"" + "CM0013" + "\"" + "));	//MSG : 변경된 데이터가 없습니다.\n";
        	strPidxml += "		return false;\n";
        	strPidxml += "	}\n";
        	strPidxml += "\n";
        	strPidxml += "	// 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)\n";
        	strPidxml += "	//var chkFocusFlg = true;\n";
        	strPidxml += "	//var result = this.mgfn_CmmnChkEssentialItem(this.ds_list, this.fv_chkColidDs, this.fv_chkColNameDs, this.grd_list, chkFocusFlg, this);\n";
        	strPidxml += "\n";
        	strPidxml += "	//if (result[0] != " + "\"" + "success" + "\"" + ")\n";
        	strPidxml += "	//{\n";
        	strPidxml += "	//	this.gfn_alert(" + "\"" + "info" + "\"" + ", result[0], " + "\"" + "saveAlert" + "\"" + ");\n";
        	strPidxml += "	//	this.ds_list.set_rowposition(result[1]); //데이터셋 변경\n";
        	strPidxml += "	//	return false;\n";
        	strPidxml += "	//}\n";
            strPidxml += "\n";
        	strPidxml += "	/*********일반 컴포던트 필수항목체크****/\n";
        	strPidxml += "	//사용자 속성추가(validate)    제목Static(title):cssclass:sta_WF_thFirstEm    title:메뉴이름,required:true,maxlength:10\n";
        	strPidxml += "	/*\n";
        	strPidxml += "	if(this.gfn_validation(this.edt_id)) {\n";
        	strPidxml += "\n";
        	strPidxml += "		//true이면 저장\n";
        	strPidxml += "	}\n";
        	strPidxml += "	*/\n";
        	strPidxml += "	/******grid필수항목 체크******/\n";
        	strPidxml += "	//사용자 속성추가(validate)\n";
        	strPidxml += "	// col:COMM_CODE,title:상세코드,required:true,maxlength:10|col:COMM_NAME1,title:코드명1,required:true|col:INQR_ORDER,title:조회순서,required:true\n";
        	strPidxml += "	// 체크가능종류: required:필수입력/digits:숫자입력/date:정확한날짜/max:최대값/min:최소값/maxlength:최대길이/minlength:최소길이\n";
        	strPidxml += "	// validation 체크를 한필드라도 체크할게 있다면 retrun false/ 없다면 return true\n";
        	strPidxml += "   var confirmYn =  this.gfn_confirm(" + "\"" + "confirm" + "\"" + ", this.gfn_getMessage(" + "\"" + "CM0005" + "\"" + ", " + "\"" + "CM0002" + "\"" + "));\n";	//MSG : 저장 하시겠습니까?                    \n";
        	strPidxml += "   if(confirmYn == false) {\n";
        	strPidxml += "       return false;\n";
        	strPidxml += "   }\n";
        	strPidxml += "  return true;\n";
        	strPidxml += "\n";
        	strPidxml += "};\n";
        	strPidxml += "/**\n";
        	strPidxml += " * 기능 : 저장 후처리 실행\n";
        	strPidxml += " */\n";
        	strPidxml += "this.fn_postSave = function()\n";
        	strPidxml += "{\n";
        	strPidxml += "\n";
        	strPidxml += "};\n";
        	strPidxml += "/****************************************** 기본번튼 신규추가시 한행추가 ************************************************/\n";
        	strPidxml += " /**\n";
        	strPidxml += " * 기능 : 초기화 전처리 실행\n";
        	strPidxml += " */\n";
        	strPidxml += "this.fn_preNew = function()\n";
        	strPidxml += "{\n";
        	strPidxml += "	return true;\n";
        	strPidxml += "};\n";
        	strPidxml += "\n";
        	strPidxml += "this.fn_new = function()\n";
        	strPidxml += "{\n";
        	strPidxml += "    if(!this.fn_preNew()){\n";
        	strPidxml += "        return false;\n";
        	strPidxml += "    }\n";
        	strPidxml += "};\n";
        	strPidxml += "\n";
        	strPidxml += " /**\n";
        	strPidxml += " * 기능 : 한행을 추가\n";
        	strPidxml += " */\n";
        	strPidxml += "this.fn_postNew = function()\n";
        	strPidxml += "{\n";
        	strPidxml += "	//기본에 신규추가시 참조하세요\n";
        	strPidxml += "\n";
        	strPidxml += "};\n";
        	strPidxml += "/****************************************** 한행추가 ************************************************/\n";
        	strPidxml += " /**\n";
        	strPidxml += " * 기능 : 초기화 전처리 실행\n";
        	strPidxml += " */\n";
        	strPidxml += "this.fn_preAdd = function()\n";
        	strPidxml += "{\n";
        	strPidxml += "	return true;\n";
        	strPidxml += "};\n";
        	strPidxml += "\n";
        	strPidxml += "this.fn_add = function()\n";
        	strPidxml += "{\n";
        	strPidxml += "    if(!this.fn_preAdd()){\n";
        	strPidxml += "        return false;\n";
        	strPidxml += "    }\n";
        	strPidxml += "	//ds_list의 공통그룹코드\n";
        	strPidxml += "	var sCode = this.ds_list.getColumn(this.ds_list.rowposition," + "\"" + "CODE" + "\"" + ");\n";
        	strPidxml += "	var sName = this.ds_list.getColumn(this.ds_list.rowposition," + "\"" + "NAME" + "\"" + ");\n";
        	strPidxml += "\n";
        	strPidxml += "	//체크박스 컬럼 유무확인\n";
        	strPidxml += "	if(this.gfn_isNull(this.ds_list.getColumnInfo(" + "\"" + "CHK" + "\"" + ")) )	{\n";
        	strPidxml += "		this.ds_list.set_enableevent(false);          //ds_detail의 onrowpos이벤트발생 안되도록 감싼다\n";
        	strPidxml += "		this.ds_list.addColumn( " + "\"" + "CHK" + "\"" + ", " + "\"" + "STRING" + "\"" + ", 1 ); //체크박스 추가\n";
        	strPidxml += "		this.ds_list.set_enableevent(true);\n";
        	strPidxml += "	}\n";
        	strPidxml += "\n";
        	strPidxml += "	//멀티로 할때 기본셋팅값\n";
        	strPidxml += "	var nRow    = this.ds_list.addRow();\n";
        	strPidxml += "	this.ds_list.setColumn(nRow, " + "\"" + "CHK" + "\"" + " , 1);\n";
        	strPidxml += "	this.ds_list.setColumn(nRow, " + "\"" + "CODE" + "\"" + ", sCode);\n";
        	strPidxml += "	this.ds_list.setColumn(nRow, " + "\"" + "NAME" + "\"" + ", sName);\n";
        	strPidxml += "	this.ds_list.setColumn(nRow, " + "\"" + "USE_YN" + "\"" + ", 1); //사용 체크처리\n";
        	strPidxml += "\n";
        	strPidxml += "	//그리드에 편집위치셋팅\n";
        	strPidxml += "	this.grd_list.setCellPos(3);\n";
        	strPidxml += "	this.grd_list.showEditor();\n";
        	strPidxml += "\n";
        	strPidxml += "};\n";
        	strPidxml += "\n";
        	strPidxml += " /**\n";
        	strPidxml += " * 기능 : 한행을 추가\n";
        	strPidxml += " */\n";
        	strPidxml += "this.fn_postAdd = function()\n";
        	strPidxml += "{\n";
        	strPidxml += "	//기본에 신규추가시 참조하세요\n";
        	strPidxml += "\n";
        	strPidxml += "};\n";
        	strPidxml += "/****************************************** 한행삭제 ************************************************/\n";
        	strPidxml += " /**\n";
        	strPidxml += " *기능 : 한행삭제 전처리 실행\n";
        	strPidxml += " */\n";
        	strPidxml += "this.fn_preDel = function()\n";
        	strPidxml += "{\n";
        	strPidxml += "	if(this.ds_list.rowcount == 0) {\n";
        	strPidxml += "		return false;\n";
        	strPidxml += "	}\n";
        	strPidxml += "\n";
        	strPidxml += "	if(this.ds_list.findRow(" + "\"" + "CHK" + "\"" + ", 1) == -1) {\n";
        	strPidxml += "		this.gfn_alert(" + "\"" + "" + "\"" + "," + "\"" + "삭제할 데이터가 없습니다." + "\"" + ");				//나중에 코드화함\n";
        	strPidxml += "		return false;\n";
        	strPidxml += "	}\n";
        	strPidxml += "\n";
        	strPidxml += "   var confirmYn =  this.gfn_confirm(" + "\"" + "confirm" + "\"" + ", this.gfn_getMessage(" + "\"" + "CM0005" + "\"" + ", " + "\"" + "CM0002" + "\"" + ")); //MSG : 삭제 하시겠습니까? \n";	//MSG : 저장 하시겠습니까?                    \n";
        	strPidxml += "   if(confirmYn == false) {\n";
        	strPidxml += "       return false;\n";
        	strPidxml += "   }\n";
        	strPidxml += "  return true;\n";
        	strPidxml += "};\n";
        	strPidxml += "\n";
        	strPidxml += "this.fn_del = function()\n";
        	strPidxml += "{\n";
        	strPidxml += "    if(!this.fn_preDel()){\n";
        	strPidxml += "        return false;\n";
        	strPidxml += "    }\n";
        	strPidxml += "\n";
        	strPidxml += "	//한로우삭제 용도\n";
        	strPidxml += "	//this.ds_list.deleteRow(this.ds_list.rowposition);\n";
        	strPidxml += "\n";
        	strPidxml += "	//다중삭제 용도\n";
        	strPidxml += "	this.ds_list.set_enableevent(false);\n";
        	strPidxml += "	for(var i=this.ds_list.rowcount-1;i>-1;i--) {\n";
        	strPidxml += "		if(this.ds_list.getRowType(i) == 2) {\n";
        	strPidxml += "			this.ds_list.deleteRow(i);\n";
        	strPidxml += "		}\n";
        	strPidxml += "	}\n";
        	strPidxml += "	this.ds_list.set_enableevent(true);\n";
        	strPidxml += "\n";
        	strPidxml += "};\n";
        	strPidxml += "\n";
        	strPidxml += " /**\n";
        	strPidxml += " * 기능 : 한행삭제 후처리 실행\n";
        	strPidxml += " */\n";
        	strPidxml += "this.fn_postDel = function()\n";
        	strPidxml += "{\n";
        	strPidxml += "	//기본에 신규삭제 참조하세요\n";
        	strPidxml += "\n";
        	strPidxml += "};\n";
        	strPidxml += "/****************************************** EXECL처리 ************************************************/\n";
        	strPidxml += " /**\n";
        	strPidxml += " * 기능 : EXECL처리 전처리 실행\n";
        	strPidxml += " */\n";
        	strPidxml += "this.fn_preExecl = function()\n";
        	strPidxml += "{\n";
        	strPidxml += "   var confirmYn =  this.gfn_confirm(" + "\"" + "confirm" + "\"" + ", this.gfn_getMessage(" + "\"" + "CM0005" + "\"" + ", " + "\"" + "CM0002" + "\"" + ")); //MSG : EXECL다운로드 하시겠습니까? \n";
        	strPidxml += "   if(confirmYn == false) {\n";
        	strPidxml += "       return false;\n";
        	strPidxml += "   }\n";
        	strPidxml += "  return true;\n";
        	strPidxml += "};\n";
        	strPidxml += " /**\n";
        	strPidxml += " * 기능 : EXECL처리 처리\n";
        	strPidxml += " */\n";
        	strPidxml += "this.fn_execl = function()\n";
        	strPidxml += "{\n";
        	strPidxml += "    if(!this.fn_preExecl()){\n";
        	strPidxml += "        return false;\n";
        	strPidxml += "    }\n";
        	strPidxml += "\n";
        	strPidxml += "	this.gfn_excelExport(this.ds_list, " + "\"" + "중분류" + "\"" + "," + "\"" + "중분류_171227" + "\"" + ");\n";
        	strPidxml += "	this.gfn_excelExport(this.ds_list, " + "\"" + "sheet_test1" + "\"" + "," + "\"" + "TEST01" + "\"" + ",this.ds_title); 									//타이틀포함엑셀다운로드\n";
        	strPidxml += "	//this.gfn_excelExportSheet([this.grd_listL,this.grd_listR],[" + "\"" + "Sheet_master" + "\"" + "," + "\"" + "Sheet_detail" + "\"" + "]," + "\"" + "CommonCode" + "\"" + ");\n";
        	strPidxml += "};\n";
        	strPidxml += "\n";
        	strPidxml += " /**\n";
        	strPidxml += " * 기능 : 한행execl 후처리 실행\n";
        	strPidxml += " */\n";
        	strPidxml += "this.fn_postExecl = function()\n";
        	strPidxml += "{\n";
        	strPidxml += "\n";
        	strPidxml += "};\n";
        	strPidxml += "/************************************************************************************************\n";
        	strPidxml += " * 각 COMPONENT 별 EVENT 영역\n";
        	strPidxml += " ************************************************************************************************/\n";
        	strPidxml += "/**\n";
        	strPidxml += " * 한행추가버튼을 클릭처리\n";
        	strPidxml += " **/\n";
        	strPidxml += "this.btn_add_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)\n";
        	strPidxml += "{\n";
        	strPidxml += "	this.fn_add();\n";
        	strPidxml += "};\n";
        	strPidxml += "\n";
        	strPidxml += "/**\n";
        	strPidxml += " * 한행삭제버튼을 클릭처리\n";
        	strPidxml += " **/\n";
        	strPidxml += "\n";
        	strPidxml += "this.btn_del_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)\n";
        	strPidxml += "{\n";
        	strPidxml += "	this.fn_del();\n";
        	strPidxml += "};\n";
        	strPidxml += "\n";
        	strPidxml += "/**\n";
        	strPidxml += " * 그리드 입력후 다음셀로 자동이로 이동\n";
        	strPidxml += " */\n";
        	strPidxml += "this.grd_list_onenterdown = function(obj:nexacro.Grid,e:nexacro.GridEditEventInfo)\n";
        	strPidxml += "{\n";
        	strPidxml += "	obj.moveToNextCell();\n";
        	strPidxml += "};\n";
        	strPidxml += "\n";
        	strPidxml += "/**\n";
        	strPidxml += " * 그리드 해드 체크박스 전체 체크/다른헤드 자동정열\n";
        	strPidxml += " */\n";
        	strPidxml += "this.grd_list_onheadclick = function(obj:nexacro.Grid,e:nexacro.GridClickEventInfo)\n";
        	strPidxml += "{\n";
        	strPidxml += "	if(e.col == 0) {\n";
        	strPidxml += "		// 체크박스 컬럼명 index(0부터 시작)\n";
        	strPidxml += "		this.gfn_setGridCheckAll(obj,e);		// 전체 체크박스\n";
        	strPidxml += "		//this.gfn_setGridCheckSingle(obj,e); 	// 체크박스를 라이오체크처리할시\n";
        	strPidxml += "	} else {\n";
        	strPidxml += "		if(e.col != 0 && e.col !== 1) {\n";
        	strPidxml += "			this.gfn_setSort(obj,e);\n";
        	strPidxml += "		}\n";
        	strPidxml += "	}\n";
        	strPidxml += "};\n";
        	strPidxml += "\n";
        	strPidxml += "this.fn_beforeclose = function()\n";
        	strPidxml += "{\n";
        	strPidxml += "     var bFlag = this.gfn_dsIsUpdated(this.ds_list);\n";
        	strPidxml += "     return bFlag;\n";
        	strPidxml += "};\n";
            strPidxml += "\n";
            this.tbMain.tbSub9.form.taPID.set_value(strPidxml);
        };

        this.cbUsers_onitemchanged = function (obj, e)
        {
        	this.fn_search();
        };
        this.cbUsers00_onitemchanged = function (obj, e)
        {
        	this.ds2Depth.filter("LEVEL == '" + this.cbUsers00.value + "'");
        	this.cbUsers01.set_index(1);
        	this.ds3Depth.filter("LEVEL == '" + this.cbUsers00.value + "' && LEVEL2 == '" + this.cbUsers01.value + "'");
        	this.cbUsers02.set_index(0);
        	this.edPath01.set_value(this.cbUsers01.value + this.cbUsers02.value);									 //화면명(작업명 + 업무명)
        	this.edWorkName.set_value(this.edPath01.value.toUpperCase()+"000101");

        	this.edPath.set_value(this.cbUsers00.value + "." + this.cbUsers01.value + "." +  this.cbUsers02.value ); //패키지경로(플로젝트명 + 작업명 + 업무명)

        	this.fn_search();
        };
        this.cbUsers01_onitemchanged = function (obj, e)
        {
        	this.ds3Depth.filter("LEVEL == '" + this.cbUsers00.value + "' && LEVEL2 == '" + this.cbUsers01.value + "'");
        	this.cbUsers02.set_index(0);
        	this.edPath01.set_value(this.cbUsers01.value + this.cbUsers02.value);									 //화면명(작업명 + 업무명)
        	this.edWorkName.set_value(this.edPath01.value.toUpperCase()+"000101");
        	this.edPath.set_value(this.cbUsers00.value + "." + this.cbUsers01.value + "." +  this.cbUsers02.value ); //패키지경로(플로젝트명 + 작업명 + 업무명)

        	this.fn_search();
        };

        this.cbUsers02_onitemchanged = function(obj,e)
        {
        	this.edPath01.set_value(this.cbUsers01.value + this.cbUsers02.value);									  //화면명(작업명 + 업무명)
        	this.edWorkName.set_value(this.edPath01.value.toUpperCase()+"000101");
        	this.edPath.set_value(this.cbUsers00.value + "." + this.cbUsers01.value + "." +  this.cbUsers02.value );  //패키지경로(플로젝트명 + 작업명 + 업무명)

        	this.fn_search();

        };


        this.edWorkName_onchanged = function(obj,e)
        {
        	var strWork 		= (this.edWorkName.text).trim() + (this.edWorkName1.text).trim();
        	var strGroupName 	= (this.edWorkName.text).trim();

        	this.edController.set_value(strGroupName + "Controller.java");
        	this.edService.set_value(strGroupName 	+ "Service.java");
        	this.edDao.set_value(strGroupName 		+ "Dao.java");
        	this.edRetrieve.set_value(strGroupName 	+ "Dao.xml");
        	this.edXPlatForm.set_value(strWork 	+ ".xfdl");

        	this.fn_search();
        };

        this.edWorkName1_onchanged = function(obj,e)
        {
        	var strWork 		= (this.edWorkName.text).trim() + (this.edWorkName1.text).trim();
        	var strGroupName 	= (this.edWorkName.text).trim();

        	this.edController.set_value(strGroupName + "Controller.java");
        	this.edService.set_value(strGroupName 	+ "Service.java");
        	this.edDao.set_value(strGroupName 		+ "Dao.java");
        	this.edRetrieve.set_value(strGroupName 	+ "Dao.xml");
        	this.edXPlatForm.set_value(strWork 	+ ".xfdl");

        	this.fn_search();
        };



        this.fn_excel = function()
        {
        	this.gfn_excelExportSheet([this.Grid00,this.tbMain.tbSub1.form.gd_Detail],["Sheet_master","Sheet_detail"],"MSCO000101");

        };


        this.edRetrieve00_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.fn_search();
        	}
        };

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
           // return (this.gfn_isUpdate(this.dsMaster) || this.gfn_isUpdate(this.dsDetail1) || this.gfn_isUpdate(this.dsDetail2));
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.cbUsers.addEventHandler("onitemchanged",this.cbUsers_onitemchanged,this);
            this.cbUsers00.addEventHandler("onitemchanged",this.cbUsers00_onitemchanged,this);
            this.cbUsers01.addEventHandler("onitemchanged",this.cbUsers01_onitemchanged,this);
            this.edPath.addEventHandler("oneditclick",this.edPath_oneditclick,this);
            this.Search.addEventHandler("onclick",this.Search_onclick,this);
            this.edWorkName.addEventHandler("onchanged",this.edWorkName_onchanged,this);
            this.edWorkName1.addEventHandler("onchanged",this.edWorkName1_onchanged,this);
            this.tbMain.tbSub3.form.taContoller.addEventHandler("oneditclick",this.tbMain_tbSub2_taNavigation_oneditclick,this);
            this.tbMain.tbSub4.form.taSarvice.addEventHandler("oneditclick",this.tbMain_tbSub2_taNavigation_oneditclick,this);
            this.tbMain.tbSub6.form.taDao.addEventHandler("oneditclick",this.tbMain_tbSub2_taNavigation_oneditclick,this);
            this.tbMain.tbSub7.form.taXmlquery.addEventHandler("oneditclick",this.tbMain_tbSub2_taNavigation_oneditclick,this);
            this.tbMain.taSQL.form.taSQL1.addEventHandler("oneditclick",this.tbMain_tbSub10_taSQL_oneditclick,this);
            this.btExcel.addEventHandler("onclick",this.btExcel_onclick,this);
            this.edRetrieve00.addEventHandler("onkeyup",this.edRetrieve00_onkeyup,this);
            this.cbUsers02.addEventHandler("onitemchanged",this.cbUsers02_onitemchanged,this);
            this.edMethod.addEventHandler("oneditclick",this.edPath_oneditclick,this);
            this.DS_Master.addEventHandler("onrowposchanged",this.DS_Master_onrowposchanged,this);
        };
        this.loadIncludeScript("MSCO000101.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
