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
            this.set_titletext("공통코드 초기셋팅 및 다중콤보 셋팅");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_input", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"USER_YN01\" type=\"STRING\" size=\"256\"/><Column id=\"USER_YN02\" type=\"STRING\" size=\"256\"/><Column id=\"USER_YN03\" type=\"STRING\" size=\"256\"/><Column id=\"USER_YN04\" type=\"STRING\" size=\"256\"/><Column id=\"AFFLTS_CD1\" type=\"STRING\" size=\"256\"/><Column id=\"AFFLTS_CD2\" type=\"STRING\" size=\"256\"/><Column id=\"AFFLTS_CD3\" type=\"STRING\" size=\"256\"/><Column id=\"AFFLTS_CD4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"USER_YN01\"/><Col id=\"USER_YN02\"/><Col id=\"USER_YN03\"/><Col id=\"USER_YN04\"/><Col id=\"AFFLTS_CD1\"/><Col id=\"AFFLTS_CD2\"/><Col id=\"AFFLTS_CD3\"/><Col id=\"AFFLTS_CD4\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUserYn01", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"SORT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ADDR\" type=\"STRING\" size=\"32\"/><Column id=\"CD_DC\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"32\"/><Column id=\"REF_2\" type=\"STRING\" size=\"32\"/><Column id=\"REF_3\" type=\"STRING\" size=\"32\"/><Column id=\"REF_4\" type=\"STRING\" size=\"32\"/><Column id=\"REF_5\" type=\"STRING\" size=\"32\"/><Column id=\"REF_6\" type=\"STRING\" size=\"32\"/><Column id=\"REF_7\" type=\"STRING\" size=\"32\"/><Column id=\"REF_8\" type=\"STRING\" size=\"32\"/><Column id=\"REF_9\" type=\"STRING\" size=\"32\"/><Column id=\"REF_10\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"REG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"REG_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"MOD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MOD_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"AUTO_PLUS\" type=\"BIGDECIMAL\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUserYn02", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"SORT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ADDR\" type=\"STRING\" size=\"32\"/><Column id=\"CD_DC\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"32\"/><Column id=\"REF_2\" type=\"STRING\" size=\"32\"/><Column id=\"REF_3\" type=\"STRING\" size=\"32\"/><Column id=\"REF_4\" type=\"STRING\" size=\"32\"/><Column id=\"REF_5\" type=\"STRING\" size=\"32\"/><Column id=\"REF_6\" type=\"STRING\" size=\"32\"/><Column id=\"REF_7\" type=\"STRING\" size=\"32\"/><Column id=\"REF_8\" type=\"STRING\" size=\"32\"/><Column id=\"REF_9\" type=\"STRING\" size=\"32\"/><Column id=\"REF_10\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"REG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"REG_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"MOD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MOD_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"AUTO_PLUS\" type=\"BIGDECIMAL\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUserYn03", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"SORT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ADDR\" type=\"STRING\" size=\"32\"/><Column id=\"CD_DC\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"32\"/><Column id=\"REF_2\" type=\"STRING\" size=\"32\"/><Column id=\"REF_3\" type=\"STRING\" size=\"32\"/><Column id=\"REF_4\" type=\"STRING\" size=\"32\"/><Column id=\"REF_5\" type=\"STRING\" size=\"32\"/><Column id=\"REF_6\" type=\"STRING\" size=\"32\"/><Column id=\"REF_7\" type=\"STRING\" size=\"32\"/><Column id=\"REF_8\" type=\"STRING\" size=\"32\"/><Column id=\"REF_9\" type=\"STRING\" size=\"32\"/><Column id=\"REF_10\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"REG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"REG_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"MOD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MOD_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"AUTO_PLUS\" type=\"BIGDECIMAL\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUserYn04", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"SORT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ADDR\" type=\"STRING\" size=\"32\"/><Column id=\"CD_DC\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"32\"/><Column id=\"REF_2\" type=\"STRING\" size=\"32\"/><Column id=\"REF_3\" type=\"STRING\" size=\"32\"/><Column id=\"REF_4\" type=\"STRING\" size=\"32\"/><Column id=\"REF_5\" type=\"STRING\" size=\"32\"/><Column id=\"REF_6\" type=\"STRING\" size=\"32\"/><Column id=\"REF_7\" type=\"STRING\" size=\"32\"/><Column id=\"REF_8\" type=\"STRING\" size=\"32\"/><Column id=\"REF_9\" type=\"STRING\" size=\"32\"/><Column id=\"REF_10\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"REG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"REG_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"MOD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MOD_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"AUTO_PLUS\" type=\"BIGDECIMAL\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsThrAfflts01", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"AFFLTS_CD\" type=\"STRING\" size=\"32\"/><Column id=\"AFFLTS_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsThrAfflts02", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"AFFLTS_CD\" type=\"STRING\" size=\"32\"/><Column id=\"AFFLTS_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsThrAfflts03", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"AFFLTS_CD\" type=\"STRING\" size=\"32\"/><Column id=\"AFFLTS_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsThrAfflts04", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"AFFLTS_CD\" type=\"STRING\" size=\"32\"/><Column id=\"AFFLTS_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSmall", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"LRE_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MDI_CD\" type=\"STRING\" size=\"32\"/><Column id=\"SML_CD\" type=\"STRING\" size=\"32\"/><Column id=\"SML_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input01", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SML_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MDI_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LRE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SML_CD\"/><Col id=\"MDI_CD\"/><Col id=\"LRE_CD\"/><Col id=\"ITEM_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMedium", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SML_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MDI_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MDI_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLarge", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"LRE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LRE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsItem", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SML_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MDI_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LRE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input02", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SML_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MDI_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LRE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SML_CD\"/><Col id=\"MDI_CD\"/><Col id=\"LRE_CD\"/><Col id=\"ITEM_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static05","12","4",null,"33","6",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("공통코드 및 테이블공통코드 콤보처리");
            obj.set_textAlign("center");
            obj.set_background("#f80626");
            obj.set_font("normal 700 14px/normal \"Gulim\"");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02","16","343",null,"30","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("※ 테이블 공통코드 가지고 오는 함수(gfn_CmmnSingleComboLoad())");
            obj.set_textAlign("left");
            obj.set_background("cadetblue");
            obj.set_font("bold 14px/normal \"Gulim\"");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Div("divSetDate01","14","73",null,"44","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_04","-1","10","118","22",null,null,null,null,null,null,this.divSetDate01.form);
            obj.set_taborder("1");
            obj.set_text("공통코드1(전체:T)");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSetDate01.addChild(obj.name, obj);

            obj = new Combo("cboUseYn01","124","10","123","22",null,null,null,null,null,null,this.divSetDate01.form);
            obj.set_taborder("0");
            obj.set_innerdataset("dsUserYn01");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            this.divSetDate01.addChild(obj.name, obj);

            obj = new Static("stc_04_00","247","10","118","22",null,null,null,null,null,null,this.divSetDate01.form);
            obj.set_taborder("2");
            obj.set_text("공통코드2(선택:X)");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSetDate01.addChild(obj.name, obj);

            obj = new Combo("cboUseYn02","372","10","123","22",null,null,null,null,null,null,this.divSetDate01.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsUserYn02");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            this.divSetDate01.addChild(obj.name, obj);

            obj = new Static("stc_04_00_00","494","10","118","22",null,null,null,null,null,null,this.divSetDate01.form);
            obj.set_taborder("4");
            obj.set_text("공통코드3(공백:N)");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSetDate01.addChild(obj.name, obj);

            obj = new Combo("cboUseYn03","619","10","123","22",null,null,null,null,null,null,this.divSetDate01.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsUserYn03");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            this.divSetDate01.addChild(obj.name, obj);

            obj = new Static("stc_04_00_00_00","742","10","168","22",null,null,null,null,null,null,this.divSetDate01.form);
            obj.set_taborder("6");
            obj.set_text("공통코드4( X:해당사항없음)");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSetDate01.addChild(obj.name, obj);

            obj = new Combo("cboUseYn04","927","10","123","22",null,null,null,null,null,null,this.divSetDate01.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsUserYn04");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            this.divSetDate01.addChild(obj.name, obj);

            obj = new Div("divSetDate02","14","378",null,"44","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_04","-1","10","118","22",null,null,null,null,null,null,this.divSetDate02.form);
            obj.set_taborder("1");
            obj.set_text("공통코드1(전체:T)");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSetDate02.addChild(obj.name, obj);

            obj = new Combo("cboMstCmp01","124","10","123","22",null,null,null,null,null,null,this.divSetDate02.form);
            obj.set_taborder("0");
            obj.set_innerdataset("dsThrAfflts01");
            obj.set_codecolumn("AFFLTS_CD");
            obj.set_datacolumn("AFFLTS_NM");
            obj.set_text("");
            this.divSetDate02.addChild(obj.name, obj);

            obj = new Static("stc_04_00","247","10","118","22",null,null,null,null,null,null,this.divSetDate02.form);
            obj.set_taborder("2");
            obj.set_text("공통코드2(선택:X)");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSetDate02.addChild(obj.name, obj);

            obj = new Combo("cboMstCmp02","372","10","123","22",null,null,null,null,null,null,this.divSetDate02.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsThrAfflts02");
            obj.set_codecolumn("AFFLTS_CD");
            obj.set_datacolumn("AFFLTS_NM");
            obj.set_text("");
            this.divSetDate02.addChild(obj.name, obj);

            obj = new Static("stc_04_00_00","494","10","118","22",null,null,null,null,null,null,this.divSetDate02.form);
            obj.set_taborder("4");
            obj.set_text("공통코드3(공백:N)");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSetDate02.addChild(obj.name, obj);

            obj = new Combo("cboMstCmp03","619","10","123","22",null,null,null,null,null,null,this.divSetDate02.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsThrAfflts03");
            obj.set_codecolumn("AFFLTS_CD");
            obj.set_datacolumn("AFFLTS_NM");
            obj.set_text("");
            this.divSetDate02.addChild(obj.name, obj);

            obj = new Static("stc_04_00_00_00","742","10","168","22",null,null,null,null,null,null,this.divSetDate02.form);
            obj.set_taborder("6");
            obj.set_text("공통코드4( X:해당사항없음)");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSetDate02.addChild(obj.name, obj);

            obj = new Combo("cboMstCmp04","927","10","123","22",null,null,null,null,null,null,this.divSetDate02.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsThrAfflts04");
            obj.set_codecolumn("AFFLTS_CD");
            obj.set_datacolumn("AFFLTS_NM");
            obj.set_text("");
            this.divSetDate02.addChild(obj.name, obj);

            obj = new Static("Static01_02_03","14","40",null,"30","10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("※일반콛통 코드 가지고 오는 함수(gfn_CmmnMultiComboLoad())");
            obj.set_textAlign("left");
            obj.set_background("cadetblue");
            obj.set_font("bold 14px/normal \"Gulim\"");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox00","14","120","1601","218",null,null,null,null,null,null,this);
            obj.set_text(" 설명 ");
            obj.set_taborder("6");
            obj.set_cssclass("_gb_sample");
            obj.set_enableevent("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","45","133","1565","197",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("    var strDs    = \"dsUserYn01|dsUserYn02|dsUserYn03|dsUserYn04\";         // 데이터를 받을 데이터셋리스트     예) \"dsUserYn01|dsUserYn02|dsUserYn03|dsUserYn04\"\r\n    var strLgcd  = \"000002|000002|000002|000002\";                         // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) \"000002|000002|000002|000002\"\r\n    var strComb  = \"T|S|N|X\";                                             // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)\r\n    var strOptn  = \"\";                                                    // 조건문 \" AND COMM_IT02 = \'\" + vip + \"\'|||\";\r\n    var svcId    = \"Init\";\r\n\r\n    // gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);\r\n    // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.\r\n\r\n    this.gfn_CmmnMultiComboLoad(strDs\r\n                              , strLgcd\r\n                              , strComb\r\n                              , strOptn\r\n                              , svcId);");
            obj.set_cssclass("_SS_Text");
            this.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox00_00","14","424","1601","218",null,null,null,null,null,null,this);
            obj.set_text(" 설명 ");
            obj.set_taborder("8");
            obj.set_cssclass("_gb_sample");
            obj.set_enableevent("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","35","442","1565","202",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("    // 기초데이타 공통코드\r\n    var strDs    = \"dsThrAfflts01|dsThrAfflts02|dsThrAfflts03|dsThrAfflts04\";      // 데이터를 받을 데이터셋리스트              예) \"dsThrAfflts01|dsThrAfflts02|dsThrAfflts03|dsThrAfflts04\"\r\n    var strLgcd  = \"XBT_THR_AFFLTS|XBT_THR_AFFLTS|XBT_THR_AFFLTS|XBT_THR_AFFLTS\";                  // 테이블코드 , 데이터셋 개수와 같아야 한다. 예) \"XBT_THR_AFFLTS|XBT_THR_AFFLTS|XBT_THR_AFFLTS|XBT_THR_AFFLTS\"\r\n    var strComb  = \"T|S|N|X\";                                          // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)\r\n    var svcId    = \"singleInit\";                                       // 서비스아이디\r\n    var callback = \"fn_callBack\";                                      // 콜백\r\n\r\n    // gfn_CmmnSingleComboLoad(승인/정산);\r\n    this.gfn_CmmnSingleComboLoad( strDs\r\n                                , strLgcd\r\n                                , strComb\r\n                                , svcId\r\n                                , callback);");
            obj.set_cssclass("_SS_Text");
            this.addChild(obj.name, obj);

            obj = new Div("divSetDate03","14","658","766","44",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_04","1","10","58","22",null,null,null,null,null,null,this.divSetDate03.form);
            obj.set_taborder("1");
            obj.set_text("대분류");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSetDate03.addChild(obj.name, obj);

            obj = new Combo("cboLarge01","64","10","123","22",null,null,null,null,null,null,this.divSetDate03.form);
            obj.set_taborder("0");
            obj.set_innerdataset("dsLarge");
            obj.set_codecolumn("LRE_CD");
            obj.set_datacolumn("LRE_NM");
            obj.set_text("");
            this.divSetDate03.addChild(obj.name, obj);

            obj = new Static("stc_04_00","193","10","58","22",null,null,null,null,null,null,this.divSetDate03.form);
            obj.set_taborder("2");
            obj.set_text("중분류");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSetDate03.addChild(obj.name, obj);

            obj = new Combo("cboMedium01","252","10","123","22",null,null,null,null,null,null,this.divSetDate03.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsMedium");
            obj.set_codecolumn("MDI_CD");
            obj.set_datacolumn("MDI_NM");
            obj.set_text("");
            this.divSetDate03.addChild(obj.name, obj);

            obj = new Static("stc_04_00_00","382","10","58","22",null,null,null,null,null,null,this.divSetDate03.form);
            obj.set_taborder("4");
            obj.set_text("소분류");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSetDate03.addChild(obj.name, obj);

            obj = new Combo("cboSmall01","441","10","123","22",null,null,null,null,null,null,this.divSetDate03.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsSmall");
            obj.set_codecolumn("SML_CD");
            obj.set_datacolumn("SML_NM");
            obj.set_text("");
            this.divSetDate03.addChild(obj.name, obj);

            obj = new Static("stc_04_00_00_00","572","10","48","22",null,null,null,null,null,null,this.divSetDate03.form);
            obj.set_taborder("6");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSetDate03.addChild(obj.name, obj);

            obj = new Combo("cboItem01","625","10","123","22",null,null,null,null,null,null,this.divSetDate03.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsItem");
            obj.set_codecolumn("ITEM_CD");
            obj.set_datacolumn("ITEM_NM");
            obj.set_text("");
            this.divSetDate03.addChild(obj.name, obj);

            obj = new Div("divSetDate04","14","715","766","44",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_04","1","10","58","22",null,null,null,null,null,null,this.divSetDate04.form);
            obj.set_taborder("1");
            obj.set_text("대분류");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSetDate04.addChild(obj.name, obj);

            obj = new Combo("cboLarge01","64","10","123","22",null,null,null,null,null,null,this.divSetDate04.form);
            obj.set_taborder("0");
            obj.set_innerdataset("dsLarge");
            obj.set_codecolumn("LRE_CD");
            obj.set_datacolumn("LRE_NM");
            obj.set_text("");
            this.divSetDate04.addChild(obj.name, obj);

            obj = new Static("stc_04_00","193","10","58","22",null,null,null,null,null,null,this.divSetDate04.form);
            obj.set_taborder("2");
            obj.set_text("중분류");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSetDate04.addChild(obj.name, obj);

            obj = new Combo("cboMedium01","252","10","123","22",null,null,null,null,null,null,this.divSetDate04.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsMedium");
            obj.set_codecolumn("MDI_CD");
            obj.set_datacolumn("MDI_NM");
            obj.set_text("");
            this.divSetDate04.addChild(obj.name, obj);

            obj = new Static("stc_04_00_00","382","10","58","22",null,null,null,null,null,null,this.divSetDate04.form);
            obj.set_taborder("4");
            obj.set_text("소분류");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSetDate04.addChild(obj.name, obj);

            obj = new Combo("cboSmall01","441","10","123","22",null,null,null,null,null,null,this.divSetDate04.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsSmall");
            obj.set_codecolumn("SML_CD");
            obj.set_datacolumn("SML_NM");
            obj.set_text("");
            this.divSetDate04.addChild(obj.name, obj);

            obj = new Static("stc_04_00_00_00","572","10","48","22",null,null,null,null,null,null,this.divSetDate04.form);
            obj.set_taborder("6");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSetDate04.addChild(obj.name, obj);

            obj = new Combo("cboItem01","625","10","123","22",null,null,null,null,null,null,this.divSetDate04.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsItem");
            obj.set_codecolumn("ITEM_CD");
            obj.set_datacolumn("ITEM_NM");
            obj.set_text("");
            this.divSetDate04.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","786","649",null,"50","20",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("※ 트랜젝션을 처리해서 서버에서 대/중/소/아이템별로 가지고 오는 소스 샘풀");
            obj.set_textAlign("left");
            obj.set_background("cadetblue");
            obj.set_font("bold 14px/normal \"Gulim\"");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00","786","709",null,"50","20",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("※ 전체를 가지고 와서 필터링으로 대/중/소/아이템별로 가지고오는 소스 샘풀");
            obj.set_textAlign("left");
            obj.set_background("cadetblue");
            obj.set_font("bold 14px/normal \"Gulim\"");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSetDate01.form.cboUseYn01","value","ds_input","USER_YN01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSetDate01.form.cboUseYn02","value","ds_input","USER_YN02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSetDate01.form.cboUseYn03","value","ds_input","USER_YN03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSetDate01.form.cboUseYn04","value","ds_input","USER_YN04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSetDate02.form.cboMstCmp01","value","ds_input","AFFLTS_CD1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSetDate02.form.cboMstCmp02","value","ds_input","AFFLTS_CD2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSetDate02.form.cboMstCmp03","value","ds_input","AFFLTS_CD3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSetDate02.form.cboMstCmp04","value","ds_input","AFFLTS_CD4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSetDate03.form.cboLarge01","value","ds_input01","LRE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSetDate03.form.cboMedium01","value","ds_input01","MDI_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSetDate03.form.cboSmall01","value","ds_input01","SML_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divSetDate03.form.cboItem01","value","ds_input01","ITEM_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divSetDate04.form.cboLarge01","value","ds_input02","LRE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divSetDate04.form.cboMedium01","value","ds_input02","MDI_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divSetDate04.form.cboSmall01","value","ds_input02","SML_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divSetDate04.form.cboItem01","value","ds_input02","ITEM_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SML042InitCommCodeOrComboSampleM01.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): SML042InitCommCodeOrComboSampleM01.xfdl(업체공통클래스(샘풀) 관리(조회))
        * 작 성         일 명: jiback
        * 작 성         일 자: 2020/07/06
        * 변 경         일 자:
        * 변 경         자 명:
        * 변경 및 수정 로그 : 일자별로 변경자 및 변경사항을 간략히 기술
        */
        /**********************************************************************
                01. 전처리 공통 함수 선언
        ***********************************************************************/
        /**********************************************************************
                02. 폼 변수 정의
        ***********************************************************************/
        this.lvchkColidDs   = "";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs = "";
        this.cmpCd 			= "";
        /**********************************************************************
                03. 폼 로드 및 닫을때(폼이 포커스 갈때)
        ***********************************************************************/
        /**
         * 기능 : 폼 로드 완료후 초기값 Setting
         */
        this.form_onload = function(obj,e)
        {
            //폼에 공통으로 로드시 사용하는 함수.
            this.gfn_formOnload(obj.e);
            //사용자 화면  초기화 함수
            this.fn_formInit();
        };

        /**
         * 기능 : 폼언 로드(닫기전 셋팅)  Setting
         */
        this.form_onclose = function(obj,e)
        {

        };
        /**********************************************************************
                04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        /*
         * 공통코드 초기셋팅
         */
        this.fn_formInit = function()
        {
            var strDs    = "dsUserYn01|dsUserYn02|dsUserYn03|dsUserYn04";         // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "000002|000002|000002|000002";                         // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "T|S|N|X";                                             // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";                                                    // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId    = "Init";

            // gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
            // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.

            this.gfn_CmmnMultiComboLoad(strDs
                                      , strLgcd
                                      , strComb
                                      , strOptn
                                      , svcId);

        };
        /*
         * 공통코드 콜백시 후처리(기초데이타 공통처리 함수)
         */
        this.fn_PostFormInit = function()
        {
            // 공통코드 초기화
        	this.ds_input.setColumn(0,"USER_YN01",null);
            this.ds_input.setColumn(0,"USER_YN02",null);
            this.ds_input.setColumn(0,"USER_YN03",null);
            this.ds_input.setColumn(0,"USER_YN04","1");

        	// 기초데이타 공통코드
        	var strDs 		= "dsThrAfflts01|dsThrAfflts02|dsThrAfflts03|dsThrAfflts04";
            var strLgcd 	= "XBT_THR_AFFLTS|XBT_THR_AFFLTS|XBT_THR_AFFLTS|XBT_THR_AFFLTS";   				//계열사 코드
            var strComb 	= "T|S|N|X";
            var svcId 		= "singleInit";
            var callback 	= "fn_callBack";

            // gfn_CmmnSingleComboLoad(승인/정산);
            this.gfn_CmmnSingleComboLoad( strDs
                                        , strLgcd
                                        , strComb
                                        , svcId
                                        , callback);
        };

        this.fn_PostSingleInt = function()
        {
             //trace(this.dsThrAfflts04.saveXML());
        	this.ds_input.setColumn(0,"AFFLTS_CD1",null);
            this.ds_input.setColumn(0,"AFFLTS_CD2",null);
            this.ds_input.setColumn(0,"AFFLTS_CD3",null);

        	this.cmpCd  	= objApp.gds_userInfoDb.getColumn(0,"CMP_CD");
        	var nRow 		= this.dsThrAfflts04.findRow("AFFLTS_CD",this.cmpCd );
        	if(nRow != -1)
        	{
        		var sCmpCode 	= this.dsThrAfflts04.getColumn(nRow,"AFFLTS_CD");
        		this.ds_input.setColumn(0,"AFFLTS_CD4",sCmpCode);
        	}

        	this.fn_Ret();

        }

        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {

            if(nErrorCode != 0)
            {
                this.gfn_alert(sErrorMsg,"에러정보","","error");
                return false;
            }else
            {
                /*sSvcId (Transaction Id)*/
                switch(sSvcId)
                {
                    case "Init":
                            this.fn_PostFormInit();
                        break;
                    case "singleInit":
                            this.fn_PostSingleInt();
                        break;
                    case "Ret":
                            this.fn_PostRet();
                        break;
        			case "RetLarge":
                            this.fn_PostRetLarge();
                        break;
        			case "RetMedium":
                            this.fn_PostRetMedium();
                        break;
                    case "RetSmall":
                            this.fn_PostRetSmall();
                        break;

                    default:
                        break;
                }
            }
        };
        /************************************************************************************************;
         * 공통 버튼 호출 영역(공통버튼 사용에만사용);
         ************************************************************************************************/;
        /*;
         * _gfn_btnClick여기서 호출시 버튼을 클릭처릭(개인폼에 모든스크립터 복사함);
         */;
        this.fn_cmmBtnClick = function(sBtn)
        {
            switch(sBtn)
            {
                case "ret" :        // 조회
                        this.fn_Ret();
                    break;
                case "new" :         // 신규
                        this.fn_New();
                    break;
                case "del" :         // 삭제
                        this.fn_Del();
                    break;
                case "save" :        // 저장
                        this.fn_Save();
                    break;
                case "excel" :       // 엑셀
                        this.fn_Excel();
                    break;
                case "print" :       // 출력
                         this.fn_Print();
                    break;
                case "confirm" :     // 확정
                         this.fn_Confirm();
                    break;
                case "tmp1" :        // 여분버튼1
                         this.fn_Tmp1();
                    break;
                case "tmp2" :        // 여분버튼2
                         this.fn_Tmp2();
                    break;
                case "tmp3" :        // 여분버튼3
                         this.fn_Tmp3();
                    break;
                default :
                    break;
            };
        };

        /**********************************************************************
                05. 조회 함수 선언(마스터 함수)
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreRet = function()
        {
            // 조회조건 셋팅
            return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_Ret = function()
        {
            if(!this.fn_PreRet())
            {
                return false;
            }
            var strSvc      = "Ret";
            var strUrl      = "/prj/sml/RetrieveInitCommCodeOrCombo.do";
            var strInDs     = "";
            var strOutDs    = "dsLarge=dsLarge ";
        	    strOutDs   += "dsMedium=dsMedium ";
        		strOutDs   += "dsSmall=dsSmall ";
        		strOutDs   += "dsItem=dsItem";
            var strArg      = "";
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);
        };

        /**
         * 기능 : 조회 후 실행
         */
        this.fn_PostRet = function()
        {
            this.ds_input01.set_enableevent(false);
        	this.ds_input01.setColumn(0,"LRE_CD",null);
        	this.ds_input01.setColumn(0,"MDI_CD",null);
        	this.ds_input01.setColumn(0,"SML_CD",null);
        	this.ds_input01.setColumn(0,"ITEM_CD",null);

        	this.ds_input02.setColumn(0,"LRE_CD",null);
        	this.ds_input02.setColumn(0,"MDI_CD",null);
        	this.ds_input02.setColumn(0,"SML_CD",null);
        	this.ds_input02.setColumn(0,"ITEM_CD",null);
        	this.ds_input01.set_enableevent(true);
        	//trace(this.dsSmall.saveXML());

        };
        /***********************************************트랜젝션 처리 대/중/소/아이템 처리 *****************************************/

        /*
         *	기능 : 대분류 콤보가 변경시 처리하는이벤티
         */
        this.divSetDate03_cboLarge01_onitemchanged = function(obj,e)
        {
        	this.fn_RetLargeChanged();
        };


        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreRetLarge = function()
        {
            // 조회조건 셋팅
            return true;
        };
        /*
         *	기능 : 대분류 콤보 메인
         */
        this.fn_RetLargeChanged = function ()
        {
        	if(!this.fn_PreRetLarge())
            {
                return false;
            }
            var strSvc      = "RetLarge";
            var strUrl      = "/prj/sml/RetrieveInitLargeCombo.do";
            var strInDs     = "ds_input01=ds_input01";
            var strOutDs    = "dsMedium=dsMedium ";
        		strOutDs   += "dsSmall=dsSmall ";
        		strOutDs   += "dsItem=dsItem";
            var strArg      = "";
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);
        };

        /**
         * 기능 : 조회 후 실행
         */
        this.fn_PostRetLarge = function()
        {
            this.ds_input01.set_enableevent(false);
        	this.ds_input01.setColumn(0,"MDI_CD",null);
        	this.ds_input01.setColumn(0,"SML_CD",null);
        	this.ds_input01.setColumn(0,"ITEM_CD",null);
        	this.ds_input01.set_enableevent(true);
        	//trace(this.dsMaster.saveXML());

        };

        /*
         *	기능 : 중분류 콤보가 변경시 처리하는이벤티
         */
        this.divSetDate03_cboMedium01_onitemchanged = function(obj,e)
        {
        	this.fn_RetMediumChanged();
        };


        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreRetMedium = function()
        {
            // 조회조건 셋팅
            return true;
        };
        /*
         *	기능 : 중분류 콤보 메인
         */
        this.fn_RetMediumChanged = function ()
        {
        	if(!this.fn_PreRetMedium())
            {
                return false;
            }
            var strSvc      = "RetMedium";
            var strUrl      = "/prj/sml/RetrieveInitMediumCombo.do";
            var strInDs     = "ds_input01=ds_input01";
            var	strOutDs    = "dsSmall=dsSmall ";
        		strOutDs   += "dsItem=dsItem";
            var strArg      = "";
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);
        };

        /**
         * 기능 : 조회 후 실행
         */
        this.fn_PostRetMedium = function()
        {
            this.ds_input01.set_enableevent(false);
        	this.ds_input01.setColumn(0,"SML_CD",null);
        	this.ds_input01.setColumn(0,"ITEM_CD",null);
        	this.ds_input01.set_enableevent(true);
        	//trace(this.dsMaster.saveXML());

        };

        this.divSetDate03_cboSmall01_onitemchanged = function(obj,e)
        {
        	this.fn_RetSmallChanged();
        };


        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreRetSmall= function()
        {
            // 조회조건 셋팅
            return true;
        };
        /*
         *	기능 : 소분류 콤보 메인
         */
        this.fn_RetSmallChanged = function ()
        {
        	if(!this.fn_PreRetSmall())
            {
                return false;
            }
            var strSvc      = "RetSmall";
            var strUrl      = "/prj/sml/RetrieveInitSmallCombo.do";
            var strInDs     = "ds_input01=ds_input01";
          	var	strOutDs    = "dsItem=dsItem";
            var strArg      = "";
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);
        };

        /**
         * 기능 : 조회 후 실행
         */
        this.fn_PostRetSmall = function()
        {
            this.ds_input01.set_enableevent(false);
        	this.ds_input01.setColumn(0,"ITEM_CD",null);
        	this.ds_input01.set_enableevent(true);

        };
        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {

        };
        /***********************************************필터링 처리 대/중/소/아이템 처리 *****************************************/

        this.divSetDate04_cboLarge01_onitemchanged = function(obj,e)
        {

        	if(!this.gfn_isNull(e.postvalue))
        	{
        		this.dsMedium.filter("LRE_CD == '" + e.postvalue + "' || MDI_CD == null");
        		this.ds_input02.setColumn(0,"MDI_CD",null);

        		var strMdiCd = this.ds_input02.getColumn(0,"MDI_CD");

        		this.dsSmall.filter("(LRE_CD == '" + e.postvalue + "') || SML_CD == null");
        		this.ds_input02.setColumn(0,"SML_CD",null);

        		this.dsItem.filter("(LRE_CD == '" + e.postvalue + "') || ITEM_CD == null");
        		this.ds_input02.setColumn(0,"ITEM_CD",null);

        	}else
        	{
        		this.dsMedium.filter(null);
        		this.dsSmall.filter(null);
        		this.dsItem.filter(null);
        	}

        };

        this.divSetDate04_cboMedium01_onitemchanged = function(obj,e)
        {

        	if(!this.gfn_isNull(e.postvalue))
        	{
        		this.dsSmall.filter("(MDI_CD == '" + e.postvalue + "') || SML_CD == null");
        		this.ds_input02.setColumn(0,"SML_CD",null);

        		this.dsItem.filter("(MDI_CD == '" + e.postvalue + "') || ITEM_CD == null");
        		this.ds_input02.setColumn(0,"ITEM_CD",null);

        	}else
        	{

        		this.dsSmall.filter(null);
        		this.dsItem.filter(null);
        	}

        };


        this.divSetDate04_cboSmall01_onitemchanged = function(obj,e)
        {
        	if(!this.gfn_isNull(e.postvalue))
        	{
        		this.dsItem.filter("(SML_CD == '" + e.postvalue + "') || ITEM_CD == null");
        		this.ds_input02.setColumn(0,"ITEM_CD",null);

        	}else
        	{
        		this.dsItem.filter(null);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSetDate03.form.cboLarge01.addEventHandler("onitemchanged",this.divSetDate03_cboLarge01_onitemchanged,this);
            this.divSetDate03.form.cboMedium01.addEventHandler("onitemchanged",this.divSetDate03_cboMedium01_onitemchanged,this);
            this.divSetDate03.form.cboSmall01.addEventHandler("onitemchanged",this.divSetDate03_cboSmall01_onitemchanged,this);
            this.divSetDate04.form.cboLarge01.addEventHandler("onitemchanged",this.divSetDate04_cboLarge01_onitemchanged,this);
            this.divSetDate04.form.cboMedium01.addEventHandler("onitemchanged",this.divSetDate04_cboMedium01_onitemchanged,this);
            this.divSetDate04.form.cboSmall01.addEventHandler("onitemchanged",this.divSetDate04_cboSmall01_onitemchanged,this);
        };
        this.loadIncludeScript("SML042InitCommCodeOrComboSampleM01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
