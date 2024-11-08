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
            this.set_titletext("입시등록현황협의회보고자료");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMaster", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"UP_HAKGWA_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"100\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JUYA_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"JEONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"IPHAK_JEONGWON_21\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"IPHAK_JEONGWON_22\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"IPHAK_JEONGWON_23\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"IPHAK_JEONGWON_31\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"IPHAK_JEONGWON_32\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"IPHAK_JEONGWON_33\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"IPHAK_JEONGWON_34\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"IPHAK_JEONGWON_35\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIWON_21\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIWON_22\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIWON_23\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIWON_31\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIWON_32\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIWON_331\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIWON_332\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIWON_34_1\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIWON_34_2\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIWON_34_3\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIWON_35\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DEUNGROK_21\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DEUNGROK_22\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DEUNGROK_23\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DEUNGROK_31\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DEUNGROK_32\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DEUNGROK_331\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DEUNGROK_332\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DEUNGROK_34_1\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DEUNGROK_34_2\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DEUNGROK_34_3\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DEUNGROK_35\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOTAL_JEONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOTA_JIWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOTAL_DEUNGROK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIWON_BIYUL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DEUNGROK_BIYUL\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gijunYyyy", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJeonhyeong", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"CODE_NM\">전체</Col></Row><Row><Col id=\"CODE\">12</Col><Col id=\"CODE_NM\">수시 전체</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">수시 1차</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"CODE_NM\">수시 2차</Col></Row><Row><Col id=\"CODE\">34</Col><Col id=\"CODE_NM\">정시 전체</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"CODE_NM\">정시 1차</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"CODE_NM\">정시 2차</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","500","42","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","0","52",null,"22","1395",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("입시등록현황협의회 보고자료 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","257","51",null,"24","1260",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","69","320","8",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"42","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","16","0","1620","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","20","31","1610","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00","7","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("입시년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","100","9","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_cssclass("point");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","248","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("전형구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJeonhyeong","341","9","174","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsJeonhyeong");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","90","0","10","37",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","331","0","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_01","224","3","56","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Grid("grdMaster","0","77",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_visible("true");
            obj.set_binddataset("dsMaster");
            obj._setContents("<Formats><Format id=\"grdMaster1\"><Columns><Column size=\"150\"/><Column size=\"180\"/><Column size=\"48\"/><Column size=\"90\"/><Column size=\"95\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"50\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"3\" text=\"계열\"/><Cell col=\"1\" rowspan=\"3\" text=\"모집단위\"/><Cell col=\"2\" rowspan=\"3\" text=\"학제\"/><Cell col=\"3\" rowspan=\"3\" text=\"주야\"/><Cell col=\"4\" rowspan=\"3\" text=\"입학&#13;&#10;정원\"/><Cell col=\"5\" colspan=\"4\" text=\"일반전형\"/><Cell col=\"9\" colspan=\"52\" text=\"정원내 특별전형\"/><Cell col=\"61\"/><Cell col=\"62\"/><Cell col=\"63\"/><Cell col=\"64\"/><Cell col=\"65\"/><Cell col=\"66\" rowspan=\"3\" text=\"미충원&#13;&#10;(A-B)\"/><Cell row=\"1\" col=\"5\" rowspan=\"2\" text=\"모집&#13;&#10;계획인원\"/><Cell row=\"1\" col=\"6\" rowspan=\"2\" text=\"모집인원\"/><Cell row=\"1\" col=\"7\" rowspan=\"2\" text=\"지원인원\"/><Cell row=\"1\" col=\"8\" rowspan=\"2\" text=\"등록인원\"/><Cell row=\"1\" col=\"9\" colspan=\"4\" text=\"대학자체기준\"/><Cell row=\"1\" col=\"13\" colspan=\"4\" text=\"고교유형별대상자\"/><Cell row=\"1\" col=\"17\" colspan=\"4\" text=\"경력자 및 특기자\"/><Cell row=\"1\" col=\"21\" colspan=\"4\" text=\"추천자 및 사회 지역우선\"/><Cell row=\"1\" col=\"25\" colspan=\"4\" text=\"일반고 졸업자 등\"/><Cell row=\"1\" col=\"29\" colspan=\"4\" text=\"전문(직업과정) 졸업자\"/><Cell row=\"1\" col=\"33\" colspan=\"4\" text=\"동일계열 및 연계교육 대상자\"/><Cell row=\"1\" col=\"37\" colspan=\"4\" text=\"추천자\"/><Cell row=\"1\" col=\"41\" colspan=\"4\" text=\"특기자\"/><Cell row=\"1\" col=\"45\" colspan=\"4\" text=\"관련 경력자\"/><Cell row=\"1\" col=\"49\" colspan=\"4\" text=\"사회지역배려 대상자\"/><Cell row=\"1\" col=\"53\" colspan=\"4\" text=\"학생부 종합전형\"/><Cell row=\"1\" col=\"57\" colspan=\"4\" text=\"비교과 입학전형\"/><Cell row=\"1\" col=\"61\" rowspan=\"2\" text=\"모집인원&#13;&#10;(A)\"/><Cell row=\"1\" col=\"62\" rowspan=\"2\" text=\"지원인원\"/><Cell row=\"1\" col=\"63\" rowspan=\"2\" text=\"등록인원&#13;&#10;(B)\"/><Cell row=\"1\" col=\"64\" rowspan=\"2\" text=\"지원율\"/><Cell row=\"1\" col=\"65\" rowspan=\"2\" text=\"등록률\"/><Cell row=\"2\" col=\"9\" text=\"모집&#13;&#10;계획인원\"/><Cell row=\"2\" col=\"10\" text=\"모집인원\"/><Cell row=\"2\" col=\"11\" text=\"지원인원\"/><Cell row=\"2\" col=\"12\" text=\"등록인원\"/><Cell row=\"2\" col=\"13\" text=\"모집&#13;&#10;계획인원\"/><Cell row=\"2\" col=\"14\" text=\"모집인원\"/><Cell row=\"2\" col=\"15\" text=\"지원인원\"/><Cell row=\"2\" col=\"16\" text=\"등록인원\"/><Cell row=\"2\" col=\"17\" text=\"모집&#13;&#10;계획인원\"/><Cell row=\"2\" col=\"18\" text=\"모집인원\"/><Cell row=\"2\" col=\"19\" text=\"지원인원\"/><Cell row=\"2\" col=\"20\" text=\"등록인원\"/><Cell row=\"2\" col=\"21\" text=\"모집&#13;&#10;계획인원\"/><Cell row=\"2\" col=\"22\" text=\"모집인원\"/><Cell row=\"2\" col=\"23\" text=\"지원인원\"/><Cell row=\"2\" col=\"24\" text=\"등록인원\"/><Cell row=\"2\" col=\"25\" text=\"모집&#13;&#10;계획인원\"/><Cell row=\"2\" col=\"26\" text=\"모집인원\"/><Cell row=\"2\" col=\"27\" text=\"지원인원\"/><Cell row=\"2\" col=\"28\" text=\"등록인원\"/><Cell row=\"2\" col=\"29\" text=\"모집&#13;&#10;계획인원\"/><Cell row=\"2\" col=\"30\" text=\"모집인원\"/><Cell row=\"2\" col=\"31\" text=\"지원인원\"/><Cell row=\"2\" col=\"32\" text=\"등록인원\"/><Cell row=\"2\" col=\"33\" text=\"모집&#13;&#10;계획인원\"/><Cell row=\"2\" col=\"34\" text=\"모집인원\"/><Cell row=\"2\" col=\"35\" text=\"지원인원\"/><Cell row=\"2\" col=\"36\" text=\"등록인원\"/><Cell row=\"2\" col=\"37\" text=\"모집&#13;&#10;계획인원\"/><Cell row=\"2\" col=\"38\" text=\"모집인원\"/><Cell row=\"2\" col=\"39\" text=\"지원인원\"/><Cell row=\"2\" col=\"40\" text=\"등록인원\"/><Cell row=\"2\" col=\"41\" text=\"모집&#13;&#10;계획인원\"/><Cell row=\"2\" col=\"42\" text=\"모집인원\"/><Cell row=\"2\" col=\"43\" text=\"지원인원\"/><Cell row=\"2\" col=\"44\" text=\"등록인원\"/><Cell row=\"2\" col=\"45\" text=\"모집&#13;&#10;계획인원\"/><Cell row=\"2\" col=\"46\" text=\"모집인원\"/><Cell row=\"2\" col=\"47\" text=\"지원인원\"/><Cell row=\"2\" col=\"48\" text=\"등록인원\"/><Cell row=\"2\" col=\"49\" text=\"모집&#13;&#10;계획인원\"/><Cell row=\"2\" col=\"50\" text=\"모집인원\"/><Cell row=\"2\" col=\"51\" text=\"지원인원\"/><Cell row=\"2\" col=\"52\" text=\"등록인원\"/><Cell row=\"2\" col=\"53\" text=\"모집&#13;&#10;계획인원\"/><Cell row=\"2\" col=\"54\" text=\"모집인원\"/><Cell row=\"2\" col=\"55\" text=\"지원인원\"/><Cell row=\"2\" col=\"56\" text=\"등록인원\"/><Cell row=\"2\" col=\"57\" text=\"모집&#13;&#10;계획인원\"/><Cell row=\"2\" col=\"58\" text=\"모집인원\"/><Cell row=\"2\" col=\"59\" text=\"지원인원\"/><Cell row=\"2\" col=\"60\" text=\"등록인원\"/></Band><Band id=\"body\"><Cell text=\"bind:UP_HAKGWA_NM\"/><Cell col=\"1\" text=\"bind:HAKGWA_NM\"/><Cell col=\"2\"/><Cell col=\"3\" text=\"bind:JUYA_GBNM\"/><Cell col=\"4\" text=\"bind:JEONGWON\"/><Cell col=\"5\" text=\"0\"/><Cell col=\"6\" text=\"0\"/><Cell col=\"7\" text=\"0\"/><Cell col=\"8\" text=\"0\"/><Cell col=\"9\" text=\"0\"/><Cell col=\"10\" text=\"0\"/><Cell col=\"11\" text=\"0\"/><Cell col=\"12\" text=\"0\"/><Cell col=\"13\" text=\"0\"/><Cell col=\"14\" text=\"0\"/><Cell col=\"15\" text=\"0\"/><Cell col=\"16\" text=\"0\"/><Cell col=\"17\" text=\"0\"/><Cell col=\"18\" text=\"0\"/><Cell col=\"19\" text=\"0\"/><Cell col=\"20\" text=\"0\"/><Cell col=\"21\" text=\"0\"/><Cell col=\"22\" text=\"0\"/><Cell col=\"23\" text=\"0\"/><Cell col=\"24\" text=\"0\"/><Cell col=\"25\" text=\"bind:IPHAK_JEONGWON_21\"/><Cell col=\"26\" text=\"bind:IPHAK_JEONGWON_21\"/><Cell col=\"27\" text=\"bind:JIWON_21\"/><Cell col=\"28\" text=\"bind:DEUNGROK_21\"/><Cell col=\"29\" text=\"bind:IPHAK_JEONGWON_22\"/><Cell col=\"30\" text=\"bind:IPHAK_JEONGWON_22\"/><Cell col=\"31\" text=\"bind:JIWON_22\"/><Cell col=\"32\" text=\"bind:DEUNGROK_22\"/><Cell col=\"33\" text=\"0\"/><Cell col=\"34\" text=\"0\"/><Cell col=\"35\" text=\"0\"/><Cell col=\"36\" text=\"0\"/><Cell col=\"37\" text=\"0\"/><Cell col=\"38\" text=\"0\"/><Cell col=\"39\" text=\"0\"/><Cell col=\"40\" text=\"0\"/><Cell col=\"41\" text=\"bind:IPHAK_JEONGWON_23\"/><Cell col=\"42\" text=\"bind:IPHAK_JEONGWON_23\"/><Cell col=\"43\" text=\"bind:JIWON_23\"/><Cell col=\"44\" text=\"bind:DEUNGROK_23\"/><Cell col=\"45\" text=\"0\"/><Cell col=\"46\" text=\"0\"/><Cell col=\"47\" text=\"0\"/><Cell col=\"48\" text=\"0\"/><Cell col=\"49\" text=\"0\"/><Cell col=\"50\" text=\"0\"/><Cell col=\"51\" text=\"0\"/><Cell col=\"52\" text=\"0\"/><Cell col=\"53\" text=\"0\"/><Cell col=\"54\" text=\"0\"/><Cell col=\"55\" text=\"0\"/><Cell col=\"56\" text=\"0\"/><Cell col=\"57\" text=\"0\"/><Cell col=\"58\" text=\"0\"/><Cell col=\"59\" text=\"0\"/><Cell col=\"60\" text=\"0\"/><Cell col=\"61\" text=\"expr:IPHAK_JEONGWON_21 + IPHAK_JEONGWON_22 + IPHAK_JEONGWON_23\"/><Cell col=\"62\" text=\"expr:JIWON_21 + JIWON_22 + JIWON_23\"/><Cell col=\"63\" text=\"expr:DEUNGROK_21 + DEUNGROK_22 + DEUNGROK_23\"/><Cell col=\"64\" text=\"expr:nexacro.round(((JIWON_21 + JIWON_22 + JIWON_23)*100) / (IPHAK_JEONGWON_21 + IPHAK_JEONGWON_22 + IPHAK_JEONGWON_23),2)\"/><Cell col=\"65\" text=\"expr:nexacro.round(((DEUNGROK_21 + DEUNGROK_22 + DEUNGROK_23)*100) / (IPHAK_JEONGWON_21 + IPHAK_JEONGWON_22 + IPHAK_JEONGWON_23),2)\"/><Cell col=\"66\" text=\"expr:(IPHAK_JEONGWON_21 + IPHAK_JEONGWON_22 + IPHAK_JEONGWON_23) -  (DEUNGROK_21 + DEUNGROK_22 + DEUNGROK_23)\"/></Band><Band id=\"summary\"><Cell colspan=\"5\"/><Cell col=\"5\" text=\"0\"/><Cell col=\"6\" text=\"0\"/><Cell col=\"7\" text=\"0\"/><Cell col=\"8\" text=\"0\"/><Cell col=\"9\" text=\"0\"/><Cell col=\"10\" text=\"0\"/><Cell col=\"11\" text=\"0\"/><Cell col=\"12\" text=\"0\"/><Cell col=\"13\" text=\"0\"/><Cell col=\"14\" text=\"0\"/><Cell col=\"15\" text=\"0\"/><Cell col=\"16\" text=\"0\"/><Cell col=\"17\" text=\"0\"/><Cell col=\"18\" text=\"0\"/><Cell col=\"19\" text=\"0\"/><Cell col=\"20\" text=\"0\"/><Cell col=\"21\" text=\"0\"/><Cell col=\"22\" text=\"0\"/><Cell col=\"23\" text=\"0\"/><Cell col=\"24\" text=\"0\"/><Cell col=\"25\" text=\"expr:dataset.getSum(&quot;IPHAK_JEONGWON_21&quot;)\"/><Cell col=\"26\" text=\"expr:dataset.getSum(&quot;IPHAK_JEONGWON_21&quot;)\"/><Cell col=\"27\" text=\"expr:dataset.getSum(&quot;JIWON_21&quot;)\"/><Cell col=\"28\" text=\"expr:dataset.getSum(&quot;DEUNGROK_21&quot;)\"/><Cell col=\"29\" text=\"expr:dataset.getSum(&quot;IPHAK_JEONGWON_22&quot;)\"/><Cell col=\"30\" text=\"expr:dataset.getSum(&quot;IPHAK_JEONGWON_22&quot;)\"/><Cell col=\"31\" text=\"expr:dataset.getSum(&quot;JIWON_22&quot;)\"/><Cell col=\"32\" text=\"expr:dataset.getSum(&quot;DEUNGROK_22&quot;)\"/><Cell col=\"33\" text=\"0\"/><Cell col=\"34\" text=\"0\"/><Cell col=\"35\" text=\"0\"/><Cell col=\"36\" text=\"0\"/><Cell col=\"37\" text=\"0\"/><Cell col=\"38\" text=\"0\"/><Cell col=\"39\" text=\"0\"/><Cell col=\"40\" text=\"0\"/><Cell col=\"41\" text=\"expr:dataset.getSum(&quot;IPHAK_JEONGWON_23&quot;)\"/><Cell col=\"42\" text=\"expr:dataset.getSum(&quot;IPHAK_JEONGWON_23&quot;)\"/><Cell col=\"43\" text=\"expr:dataset.getSum(&quot;JIWON_23&quot;)\"/><Cell col=\"44\" text=\"expr:dataset.getSum(&quot;DEUNGROK_23&quot;)\"/><Cell col=\"45\" text=\"0\"/><Cell col=\"46\" text=\"0\"/><Cell col=\"47\" text=\"0\"/><Cell col=\"48\" text=\"0\"/><Cell col=\"49\" text=\"0\"/><Cell col=\"50\" text=\"0\"/><Cell col=\"51\" text=\"0\"/><Cell col=\"52\" text=\"0\"/><Cell col=\"53\" text=\"0\"/><Cell col=\"54\" text=\"0\"/><Cell col=\"55\" text=\"0\"/><Cell col=\"56\" text=\"0\"/><Cell col=\"57\" text=\"0\"/><Cell col=\"58\" text=\"0\"/><Cell col=\"59\" text=\"0\"/><Cell col=\"60\" text=\"0\"/><Cell col=\"61\" text=\"expr:dataset.getSum(&quot;IPHAK_JEONGWON_21&quot;) + dataset.getSum(&quot;IPHAK_JEONGWON_22&quot;) + dataset.getSum(&quot;IPHAK_JEONGWON_23&quot;)\"/><Cell col=\"62\" text=\"expr:dataset.getSum(&quot;JIWON_21&quot;) + dataset.getSum(&quot;JIWON_22&quot;) + dataset.getSum(&quot;JIWON_23&quot;)\"/><Cell col=\"63\" text=\"expr:dataset.getSum(&quot;DEUNGROK_21&quot;) + dataset.getSum(&quot;DEUNGROK_22&quot;) + dataset.getSum(&quot;DEUNGROK_23&quot;)\"/><Cell col=\"64\" text=\"expr:nexacro.round(((dataset.getSum(&quot;JIWON_21&quot;) + dataset.getSum(&quot;JIWON_22&quot;) + dataset.getSum(&quot;JIWON_23&quot;))*100) / ( dataset.getSum(&quot;IPHAK_JEONGWON_21&quot;) + dataset.getSum(&quot;IPHAK_JEONGWON_22&quot;) + dataset.getSum(&quot;IPHAK_JEONGWON_23&quot;)),2)\"/><Cell col=\"65\" text=\"expr:nexacro.round(((dataset.getSum(&quot;DEUNGROK_21&quot;) + dataset.getSum(&quot;DEUNGROK_22&quot;) + dataset.getSum(&quot;DEUNGROK_23&quot;))*100) / ( dataset.getSum(&quot;IPHAK_JEONGWON_21&quot;) + dataset.getSum(&quot;IPHAK_JEONGWON_22&quot;) + dataset.getSum(&quot;IPHAK_JEONGWON_23&quot;)),2)\"/><Cell col=\"66\" text=\"expr:dataset.getSum(&quot;IPHAK_JEONGWON_21&quot;) + dataset.getSum(&quot;IPHAK_JEONGWON_22&quot;) + dataset.getSum(&quot;IPHAK_JEONGWON_23&quot;) - dataset.getSum(&quot;DEUNGROK_21&quot;) - dataset.getSum(&quot;DEUNGROK_22&quot;) - dataset.getSum(&quot;DEUNGROK_23&quot;)\"/></Band></Format><Format id=\"grdMaster2\"><Columns><Column size=\"150\"/><Column size=\"180\"/><Column size=\"48\"/><Column size=\"90\"/><Column size=\"95\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"50\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"5\" text=\"계열\"/><Cell col=\"1\" rowspan=\"5\" text=\"모집단위\"/><Cell col=\"2\" rowspan=\"5\" text=\"학제\"/><Cell col=\"3\" rowspan=\"5\" text=\"주야\"/><Cell col=\"4\" rowspan=\"5\" text=\"입학&#13;&#10;정원\"/><Cell col=\"5\" colspan=\"54\" text=\"정원 외 특별전형\"/><Cell col=\"59\" colspan=\"5\" text=\"합계\"/><Cell col=\"64\" rowspan=\"5\" text=\"미충원&#13;&#10;(A-B)\"/><Cell row=\"1\" col=\"5\" colspan=\"8\" text=\"전문대졸 이상자\"/><Cell row=\"1\" col=\"13\" colspan=\"4\" text=\"농어촌 출신\"/><Cell row=\"1\" col=\"17\" colspan=\"4\" text=\"기초생활수급자 및 차상위계층\"/><Cell row=\"1\" col=\"21\" colspan=\"4\" text=\"장애인 등\"/><Cell row=\"1\" col=\"25\" colspan=\"4\" text=\"재외국민 및 외국인(정원 2% 이내)\"/><Cell row=\"1\" col=\"29\" colspan=\"4\" text=\"순수 외국인&#13;&#10;(부모가모두외국인 혹은 전과정해외이수외국인)\"/><Cell row=\"1\" col=\"33\" colspan=\"4\" text=\"순수외국인(북한이탈주민)\"/><Cell row=\"1\" col=\"37\" colspan=\"6\" text=\"만학도 및 성인재직자\"/><Cell row=\"1\" col=\"43\" colspan=\"4\" text=\"특성화고졸 재직자\"/><Cell row=\"1\" col=\"47\" colspan=\"4\" text=\"서해5도 출신자\"/><Cell row=\"1\" col=\"51\" colspan=\"4\" text=\"다문화가정\"/><Cell row=\"1\" col=\"55\" colspan=\"4\" text=\"다자녀가정\"/><Cell row=\"1\" col=\"59\" rowspan=\"4\" text=\"모집인원&#13;&#10;(A)\"/><Cell row=\"1\" col=\"60\" rowspan=\"4\" text=\"지원인원\"/><Cell row=\"1\" col=\"61\" rowspan=\"4\" text=\"등록인원&#13;&#10;(B)\"/><Cell row=\"1\" col=\"62\" rowspan=\"4\" text=\"지원율\"/><Cell row=\"1\" col=\"63\" rowspan=\"4\" text=\"등록률\"/><Cell row=\"2\" col=\"5\" rowspan=\"3\" text=\"모집&#13;&#10;계획인원\"/><Cell row=\"2\" col=\"6\" rowspan=\"3\" text=\"모집인원\"/><Cell row=\"2\" col=\"7\" colspan=\"3\" text=\"지원인원\"/><Cell row=\"2\" col=\"10\" colspan=\"3\" text=\"등록인원\"/><Cell row=\"2\" col=\"13\" rowspan=\"3\" text=\"모집&#13;&#10;계획인원\"/><Cell row=\"2\" col=\"14\" rowspan=\"3\" text=\"모집인원\"/><Cell row=\"2\" col=\"15\" rowspan=\"3\" text=\"지원인원\"/><Cell row=\"2\" col=\"16\" rowspan=\"3\" text=\"등록인원\"/><Cell row=\"2\" col=\"17\" rowspan=\"3\" text=\"모집&#13;&#10;계획인원\"/><Cell row=\"2\" col=\"18\" rowspan=\"3\" text=\"모집인원\"/><Cell row=\"2\" col=\"19\" rowspan=\"3\" text=\"지원인원\"/><Cell row=\"2\" col=\"20\" rowspan=\"3\" text=\"등록인원\"/><Cell row=\"2\" col=\"21\" rowspan=\"3\" text=\"모집&#13;&#10;계획인원\"/><Cell row=\"2\" col=\"22\" rowspan=\"3\" text=\"모집인원\"/><Cell row=\"2\" col=\"23\" rowspan=\"3\" text=\"지원인원\"/><Cell row=\"2\" col=\"24\" rowspan=\"3\" text=\"등록인원\"/><Cell row=\"2\" col=\"25\" rowspan=\"3\" text=\"모집&#13;&#10;계획인원\"/><Cell row=\"2\" col=\"26\" rowspan=\"3\" text=\"모집인원\"/><Cell row=\"2\" col=\"27\" rowspan=\"3\" text=\"지원인원\"/><Cell row=\"2\" col=\"28\" rowspan=\"3\" text=\"등록인원\"/><Cell row=\"2\" col=\"29\" rowspan=\"3\" text=\"모집&#13;&#10;계획인원\"/><Cell row=\"2\" col=\"30\" rowspan=\"3\" text=\"모집인원\"/><Cell row=\"2\" col=\"31\" rowspan=\"3\" text=\"지원인원\"/><Cell row=\"2\" col=\"32\" rowspan=\"3\" text=\"등록인원\"/><Cell row=\"2\" col=\"33\" rowspan=\"3\" text=\"모집&#13;&#10;계획인원\"/><Cell row=\"2\" col=\"34\" rowspan=\"3\" text=\"모집인원\"/><Cell row=\"2\" col=\"35\" rowspan=\"3\" text=\"지원인원\"/><Cell row=\"2\" col=\"36\" rowspan=\"3\" text=\"등록인원\"/><Cell row=\"2\" col=\"37\" rowspan=\"3\" text=\"모집&#13;&#10;계획인원\"/><Cell row=\"2\" col=\"38\" rowspan=\"3\" text=\"모집인원\"/><Cell row=\"2\" col=\"39\" colspan=\"2\" text=\"지원인원\"/><Cell row=\"2\" col=\"41\" colspan=\"2\" text=\"등록인원\"/><Cell row=\"2\" col=\"43\" rowspan=\"3\" text=\"모집&#13;&#10;계획인원\"/><Cell row=\"2\" col=\"44\" rowspan=\"3\" text=\"모집인원\"/><Cell row=\"2\" col=\"45\" rowspan=\"3\" text=\"지원인원\"/><Cell row=\"2\" col=\"46\" rowspan=\"3\" text=\"등록인원\"/><Cell row=\"2\" col=\"47\" rowspan=\"3\" text=\"모집&#13;&#10;계획인원\"/><Cell row=\"2\" col=\"48\" rowspan=\"3\" text=\"모집인원\"/><Cell row=\"2\" col=\"49\" rowspan=\"3\" text=\"지원인원\"/><Cell row=\"2\" col=\"50\" rowspan=\"3\" text=\"등록인원\"/><Cell row=\"2\" col=\"51\" rowspan=\"3\" text=\"모집&#13;&#10;계획인원\"/><Cell row=\"2\" col=\"52\" rowspan=\"3\" text=\"모집인원\"/><Cell row=\"2\" col=\"53\" rowspan=\"3\" text=\"지원인원\"/><Cell row=\"2\" col=\"54\" rowspan=\"3\" text=\"등록인원\"/><Cell row=\"2\" col=\"55\" rowspan=\"3\" text=\"모집&#13;&#10;계획인원\"/><Cell row=\"2\" col=\"56\" rowspan=\"3\" text=\"모집인원\"/><Cell row=\"2\" col=\"57\" rowspan=\"3\" text=\"지원인원\"/><Cell row=\"2\" col=\"58\" rowspan=\"3\" text=\"등록인원\"/><Cell row=\"3\" col=\"7\" rowspan=\"2\" text=\"전문대졸\"/><Cell row=\"3\" col=\"8\" colspan=\"2\" text=\"대졸\"/><Cell row=\"3\" col=\"10\" rowspan=\"2\" text=\"전문대졸\"/><Cell row=\"3\" col=\"11\" colspan=\"2\" text=\"대졸\"/><Cell row=\"3\" col=\"39\" rowspan=\"2\" text=\"만학도\"/><Cell row=\"3\" col=\"40\" rowspan=\"2\" text=\"재직자\"/><Cell row=\"3\" col=\"41\" rowspan=\"2\" text=\"만학도\"/><Cell row=\"3\" col=\"42\" rowspan=\"2\" text=\"재직자\"/><Cell row=\"4\" col=\"8\" text=\"2년이상&#13;&#10;수료자\"/><Cell row=\"4\" col=\"9\" text=\"4년졸업자\"/><Cell row=\"4\" col=\"11\" text=\"2년이상&#13;&#10;수료자\"/><Cell row=\"4\" col=\"12\" text=\"4년졸업자\"/></Band><Band id=\"body\"><Cell text=\"bind:UP_HAKGWA_NM\"/><Cell col=\"1\" text=\"bind:HAKGWA_NM\"/><Cell col=\"2\"/><Cell col=\"3\" text=\"bind:JUYA_GBNM\"/><Cell col=\"4\" text=\"bind:JEONGWON\"/><Cell col=\"5\" text=\"bind:IPHAK_JEONGWON_34\"/><Cell col=\"6\" text=\"bind:IPHAK_JEONGWON_34\"/><Cell col=\"7\" text=\"bind:JIWON_34_1\"/><Cell col=\"8\" text=\"bind:JIWON_34_2\"/><Cell col=\"9\" text=\"bind:JIWON_34_3\"/><Cell col=\"10\" text=\"bind:DEUNGROK_34_1\"/><Cell col=\"11\" text=\"bind:DEUNGROK_34_2\"/><Cell col=\"12\" text=\"bind:DEUNGROK_34_3\"/><Cell col=\"13\" text=\"bind:IPHAK_JEONGWON_31\"/><Cell col=\"14\" text=\"bind:IPHAK_JEONGWON_31\"/><Cell col=\"15\" text=\"bind:JIWON_31\"/><Cell col=\"16\" text=\"bind:DEUNGROK_31\"/><Cell col=\"17\" text=\"bind:IPHAK_JEONGWON_32\"/><Cell col=\"18\" text=\"bind:IPHAK_JEONGWON_32\"/><Cell col=\"19\" text=\"bind:JIWON_32\"/><Cell col=\"20\" text=\"bind:DEUNGROK_32\"/><Cell col=\"21\" text=\"0\"/><Cell col=\"22\" text=\"0\"/><Cell col=\"23\" text=\"0\"/><Cell col=\"24\" text=\"0\"/><Cell col=\"25\" text=\"bind:IPHAK_JEONGWON_35\"/><Cell col=\"26\" text=\"bind:IPHAK_JEONGWON_35\"/><Cell col=\"27\" text=\"bind:JIWON_35\"/><Cell col=\"28\" text=\"bind:DEUNGROK_35\"/><Cell col=\"29\" text=\"0\"/><Cell col=\"30\" text=\"0\"/><Cell col=\"31\" text=\"0\"/><Cell col=\"32\" text=\"0\"/><Cell col=\"33\" text=\"0\"/><Cell col=\"34\" text=\"0\"/><Cell col=\"35\" text=\"0\"/><Cell col=\"36\" text=\"0\"/><Cell col=\"37\" text=\"bind:IPHAK_JEONGWON_33\"/><Cell col=\"38\" text=\"bind:IPHAK_JEONGWON_33\"/><Cell col=\"39\" text=\"bind:JIWON_331\"/><Cell col=\"40\" text=\"bind:JIWON_332\"/><Cell col=\"41\" text=\"bind:DEUNGROK_331\"/><Cell col=\"42\" text=\"bind:DEUNGROK_332\"/><Cell col=\"43\" text=\"0\"/><Cell col=\"44\" text=\"0\"/><Cell col=\"45\" text=\"0\"/><Cell col=\"46\" text=\"0\"/><Cell col=\"47\" text=\"0\"/><Cell col=\"48\" text=\"0\"/><Cell col=\"49\" text=\"0\"/><Cell col=\"50\" text=\"0\"/><Cell col=\"51\" text=\"0\"/><Cell col=\"52\" text=\"0\"/><Cell col=\"53\" text=\"0\"/><Cell col=\"54\" text=\"0\"/><Cell col=\"55\" text=\"0\"/><Cell col=\"56\" text=\"0\"/><Cell col=\"57\" text=\"0\"/><Cell col=\"58\" text=\"0\"/><Cell col=\"59\" text=\"expr:IPHAK_JEONGWON_31 + IPHAK_JEONGWON_32 + IPHAK_JEONGWON_33 +IPHAK_JEONGWON_34 +IPHAK_JEONGWON_35\"/><Cell col=\"60\" text=\"expr:JIWON_31+JIWON_32+JIWON_331+JIWON_332+JIWON_34_1+JIWON_34_2+JIWON_34_3+JIWON_35\"/><Cell col=\"61\" text=\"expr:DEUNGROK_31+ DEUNGROK_32+ DEUNGROK_331+ DEUNGROK_332+ DEUNGROK_34_1+ DEUNGROK_34_2+ DEUNGROK_34_3+ DEUNGROK_35\"/><Cell col=\"62\" text=\"expr:nexacro.round(((JIWON_31+JIWON_32+JIWON_331+JIWON_332+JIWON_34_1+JIWON_34_2+JIWON_34_3+JIWON_35)*100) / (IPHAK_JEONGWON_31 + IPHAK_JEONGWON_32 + IPHAK_JEONGWON_33 +IPHAK_JEONGWON_34 +IPHAK_JEONGWON_35),2)\"/><Cell col=\"63\" text=\"expr:nexacro.round(((DEUNGROK_31+ DEUNGROK_32+ DEUNGROK_331+ DEUNGROK_332+ DEUNGROK_34_1+ DEUNGROK_34_2+ DEUNGROK_34_3+ DEUNGROK_35)*100) / (IPHAK_JEONGWON_31 + IPHAK_JEONGWON_32 + IPHAK_JEONGWON_33 +IPHAK_JEONGWON_34 +IPHAK_JEONGWON_35),2)\"/><Cell col=\"64\" text=\"expr:(IPHAK_JEONGWON_31 + IPHAK_JEONGWON_32 + IPHAK_JEONGWON_33 +IPHAK_JEONGWON_34 +IPHAK_JEONGWON_35) - (DEUNGROK_31+ DEUNGROK_32+ DEUNGROK_331+ DEUNGROK_332+ DEUNGROK_34_1+ DEUNGROK_34_2+ DEUNGROK_34_3+ DEUNGROK_35)\"/></Band><Band id=\"summary\"><Cell colspan=\"5\"/><Cell col=\"5\" text=\"expr:dataset.getSum(&quot;IPHAK_JEONGWON_34&quot;)\"/><Cell col=\"6\" text=\"expr:dataset.getSum(&quot;IPHAK_JEONGWON_34&quot;)\"/><Cell col=\"7\" text=\"expr:dataset.getSum(&quot;JIWON_34_1&quot;)\"/><Cell col=\"8\" text=\"expr:dataset.getSum(&quot;JIWON_34_2&quot;)\"/><Cell col=\"9\" text=\"expr:dataset.getSum(&quot;JIWON_34_3&quot;)\"/><Cell col=\"10\" text=\"expr:dataset.getSum(&quot;DEUNGROK_34_1&quot;)\"/><Cell col=\"11\" text=\"expr:dataset.getSum(&quot;DEUNGROK_34_2&quot;)\"/><Cell col=\"12\" text=\"expr:dataset.getSum(&quot;DEUNGROK_34_3&quot;)\"/><Cell col=\"13\" text=\"expr:dataset.getSum(&quot;IPHAK_JEONGWON_31&quot;)\"/><Cell col=\"14\" text=\"expr:dataset.getSum(&quot;IPHAK_JEONGWON_31&quot;)\"/><Cell col=\"15\" text=\"expr:dataset.getSum(&quot;JIWON_31&quot;)\"/><Cell col=\"16\" text=\"expr:dataset.getSum(&quot;DEUNGROK_31&quot;)\"/><Cell col=\"17\" text=\"expr:dataset.getSum(&quot;IPHAK_JEONGWON_32&quot;)\"/><Cell col=\"18\" text=\"expr:dataset.getSum(&quot;IPHAK_JEONGWON_32&quot;)\"/><Cell col=\"19\" text=\"expr:dataset.getSum(&quot;JIWON_32&quot;)\"/><Cell col=\"20\" text=\"expr:dataset.getSum(&quot;DEUNGROK_32&quot;)\"/><Cell col=\"21\" text=\"0\"/><Cell col=\"22\" text=\"0\"/><Cell col=\"23\" text=\"0\"/><Cell col=\"24\" text=\"0\"/><Cell col=\"25\" text=\"expr:dataset.getSum(&quot;IPHAK_JEONGWON_35&quot;)\"/><Cell col=\"26\" text=\"expr:dataset.getSum(&quot;IPHAK_JEONGWON_35&quot;)\"/><Cell col=\"27\" text=\"expr:dataset.getSum(&quot;JIWON_35&quot;)\"/><Cell col=\"28\" text=\"expr:dataset.getSum(&quot;DEUNGROK_35&quot;)\"/><Cell col=\"29\" text=\"0\"/><Cell col=\"30\" text=\"0\"/><Cell col=\"31\" text=\"0\"/><Cell col=\"32\" text=\"0\"/><Cell col=\"33\" text=\"0\"/><Cell col=\"34\" text=\"0\"/><Cell col=\"35\" text=\"0\"/><Cell col=\"36\" text=\"0\"/><Cell col=\"37\" text=\"expr:dataset.getSum(&quot;IPHAK_JEONGWON_33&quot;)\"/><Cell col=\"38\" text=\"expr:dataset.getSum(&quot;IPHAK_JEONGWON_33&quot;)\"/><Cell col=\"39\" text=\"expr:dataset.getSum(&quot;JIWON_331&quot;)\"/><Cell col=\"40\" text=\"expr:dataset.getSum(&quot;JIWON_332&quot;)\"/><Cell col=\"41\" text=\"expr:dataset.getSum(&quot;DEUNGROK_331&quot;)\"/><Cell col=\"42\" text=\"expr:dataset.getSum(&quot;DEUNGROK_332&quot;)\"/><Cell col=\"43\" text=\"0\"/><Cell col=\"44\" text=\"0\"/><Cell col=\"45\" text=\"0\"/><Cell col=\"46\" text=\"0\"/><Cell col=\"47\" text=\"0\"/><Cell col=\"48\" text=\"0\"/><Cell col=\"49\" text=\"0\"/><Cell col=\"50\" text=\"0\"/><Cell col=\"51\" text=\"0\"/><Cell col=\"52\" text=\"0\"/><Cell col=\"53\" text=\"0\"/><Cell col=\"54\" text=\"0\"/><Cell col=\"55\" text=\"0\"/><Cell col=\"56\" text=\"0\"/><Cell col=\"57\" text=\"0\"/><Cell col=\"58\" text=\"0\"/><Cell col=\"59\" text=\"expr:dataset.getSum(&quot;IPHAK_JEONGWON_31&quot;) + dataset.getSum(&quot;IPHAK_JEONGWON_32&quot;) + dataset.getSum(&quot;IPHAK_JEONGWON_33&quot;) +dataset.getSum(&quot;IPHAK_JEONGWON_34&quot;) +dataset.getSum(&quot;IPHAK_JEONGWON_35&quot;)\"/><Cell col=\"60\" text=\"expr:dataset.getSum(&quot;JIWON_31&quot;)+dataset.getSum(&quot;JIWON_32&quot;)+dataset.getSum(&quot;JIWON_331&quot;)+dataset.getSum(&quot;JIWON_332&quot;)+dataset.getSum(&quot;JIWON_34_1&quot;)+dataset.getSum(&quot;JIWON_34_2&quot;)+dataset.getSum(&quot;JIWON_34_3&quot;)+dataset.getSum(&quot;JIWON_35&quot;)\"/><Cell col=\"61\" text=\"expr:dataset.getSum(&quot;DEUNGROK_31&quot;)+ dataset.getSum(&quot;DEUNGROK_32&quot;)+ dataset.getSum(&quot;DEUNGROK_331&quot;)+ dataset.getSum(&quot;DEUNGROK_332&quot;)+ dataset.getSum(&quot;DEUNGROK_34_1&quot;)+ dataset.getSum(&quot;DEUNGROK_34_2&quot;)+ dataset.getSum(&quot;DEUNGROK_34_3&quot;)+ dataset.getSum(&quot;DEUNGROK_35&quot;)\"/><Cell col=\"62\" text=\"expr:nexacro.round(((dataset.getSum(&quot;JIWON_31&quot;) + dataset.getSum(&quot;JIWON_32&quot;) + dataset.getSum(&quot;JIWON_331&quot;) + dataset.getSum(&quot;JIWON_332&quot;) + dataset.getSum(&quot;JIWON_34_1&quot;) + dataset.getSum(&quot;JIWON_34_2&quot;) + dataset.getSum(&quot;JIWON_34_3&quot;) + dataset.getSum(&quot;JIWON_35&quot;))*100) / ( dataset.getSum(&quot;IPHAK_JEONGWON_31&quot;) + dataset.getSum(&quot;IPHAK_JEONGWON_32&quot;) + dataset.getSum(&quot;IPHAK_JEONGWON_33&quot;) + dataset.getSum(&quot;IPHAK_JEONGWON_34&quot;) + dataset.getSum(&quot;IPHAK_JEONGWON_35&quot;)),2)\"/><Cell col=\"63\" text=\"expr:nexacro.round(((dataset.getSum(&quot;DEUNGROK_31&quot;) + dataset.getSum(&quot;DEUNGROK_32&quot;) + dataset.getSum(&quot;DEUNGROK_331&quot;) + dataset.getSum(&quot;DEUNGROK_332&quot;) + dataset.getSum(&quot;DEUNGROK_34_1&quot;) + dataset.getSum(&quot;DEUNGROK_34_2&quot;) + dataset.getSum(&quot;DEUNGROK_34_3&quot;) + dataset.getSum(&quot;DEUNGROK_35&quot;))*100) / ( dataset.getSum(&quot;IPHAK_JEONGWON_31&quot;) + dataset.getSum(&quot;IPHAK_JEONGWON_32&quot;) + dataset.getSum(&quot;IPHAK_JEONGWON_33&quot;) + dataset.getSum(&quot;IPHAK_JEONGWON_34&quot;) + dataset.getSum(&quot;IPHAK_JEONGWON_35&quot;)),2)\"/><Cell col=\"64\" text=\"expr:(dataset.getSum(&quot;IPHAK_JEONGWON_31&quot;) + dataset.getSum(&quot;IPHAK_JEONGWON_32&quot;) + dataset.getSum(&quot;IPHAK_JEONGWON_33&quot;) + dataset.getSum(&quot;IPHAK_JEONGWON_34&quot;) +dataset.getSum(&quot;IPHAK_JEONGWON_35&quot;)) - (dataset.getSum(&quot;DEUNGROK_31&quot;) + dataset.getSum(&quot;DEUNGROK_32&quot;) + dataset.getSum(&quot;DEUNGROK_331&quot;) + dataset.getSum(&quot;DEUNGROK_332&quot;) + dataset.getSum(&quot;DEUNGROK_34_1&quot;) + dataset.getSum(&quot;DEUNGROK_34_2&quot;)+ dataset.getSum(&quot;DEUNGROK_34_3&quot;)+ dataset.getSum(&quot;DEUNGROK_35&quot;))\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("입시등록현황협의회보고자료");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divSearch.form.spnSearchYYYY","value","ds_input","IPSI_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("EN09_1010903_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): EN09_1010903_M.xfdl(입시등록현황협의회보고자료)
        * 작 성         일 명: 백재인
        * 작 성         일 자: 2021/06/29
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

        /**********************************************************************
                04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        this.fn_formInit = function()
        {
            var strDs    = "dsJeonhyeong";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "01001";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "X";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";                                      // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId    = "Init";

            // gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
            // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.

            this.gfn_CmmnMultiComboLoad(strDs
                                      , strLgcd
                                      , strComb
                                      , strOptn
                                      , svcId);
        	this.fn_GijunYyyy();
        };

        this.fn_PostInit = function()
        {
        	for(var i=0; i<this.dsJeonhyeong.rowcount; i++)
        	{
        		if(this.dsJeonhyeong.getColumn(i, "CODE") == "1")
        		{
        			this.dsJeonhyeong.deleteRow(i);
        		}
        	}
        };

        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {
            this.gfn_clearSortAll(this.grdMaster);
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
                            this.fn_PostInit();
                        break;
        			case "GigunYyyy":
                            this.fn_PostGigunYyyy();
                        break;
                    case "Ret":
                            this.fn_PostRet();
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
                default :
                    break;
            };
        };;

        /**********************************************************************
                05. 조회 함수 선언(마스터 함수)
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreRet = function()
        {
        	if(this.ds_input.getColumn(0, "IPSI_YYYY") == null || this.ds_input.getColumn(0, "IPSI_YYYY") == '')
        	{
        		this.alert("입시년도를 입력해주세요.");
        		return false;
        	}

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
            var strUrl      = "/prj/EN/EN09/Retrieve_1010903_M.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsMaster=dsMaster";
            var strArg      = "";
            var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
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
            this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
        };

        /**********************************************************************
                06. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj,e)
        {
            this.gfn_gridSort(obj,e);
        };

        // 전형구분 변경시
        this.divSearch_cboSearchJeonhyeong_onitemchanged = function(obj,e)
        {
        	//정원내 특별전형
        	if(this.divSearch.form.cboSearchJeonhyeong.value == 2)
        	{
        		this.grdMaster.set_formatid("grdMaster1");
        	}
        	//정원외 특별전형
        	else if(this.divSearch.form.cboSearchJeonhyeong.value == 3)
        	{
        		this.grdMaster.set_formatid("grdMaster2");
        	}
        };

        /**********************************************************************
                07. 공통함수
        ***********************************************************************/
        // 기준년도 가져오기
        this.fn_GijunYyyy = function()
        {
        	var strSvc      = "GigunYyyy";
            var strUrl      = "prj/EN/EN_COM/Retrieve_GIJUN_YYYY.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "ds_gijunYyyy=ds_gijunYyyy";
            var strArg      = "";
            var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);
        }

        this.fn_PostGigunYyyy = function()
        {
        	this.ds_input.setColumn(0, "IPSI_YYYY", this.ds_gijunYyyy.getColumn(0, "YYYY"));
        	this.divSearch.form.cboSearchJeonhyeong.set_index(0);
        }

        /**********************************************************************
                08. 검색창 엔터키 조회
        ***********************************************************************/
        this.divSearch_spnSearchYYYY_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"IPSI_YYYY",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchJeonhyeong_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.fn_Ret();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onkeydown",this.divSearch_spnSearchYYYY_onkeydown,this);
            this.divSearch.form.cboSearchJeonhyeong.addEventHandler("onkeydown",this.divSearch_cboSearchJeonhyeong_onkeydown,this);
            this.divSearch.form.cboSearchJeonhyeong.addEventHandler("onitemchanged",this.divSearch_cboSearchJeonhyeong_onitemchanged,this);
            this.dsMaster.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
        };
        this.loadIncludeScript("EN09_1010903_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
