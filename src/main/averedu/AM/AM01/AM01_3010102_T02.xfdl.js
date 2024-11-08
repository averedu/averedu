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
            this.set_titletext("신상");
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
            obj._setContents("<ColumnInfo><Column id=\"SABEON\" type=\"STRING\" size=\"256\"/><Column id=\"GUKJEOK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"CHULSIN_SIDO\" type=\"STRING\" size=\"256\"/><Column id=\"HOJU_HANGEULSEONGMYEONG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HOJU_HANMUNSEONGMYEONG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HOJU_GWANGYE\" type=\"STRING\" size=\"256\"/><Column id=\"POST\" type=\"STRING\" size=\"256\"/><Column id=\"JUSO\" type=\"STRING\" size=\"256\"/><Column id=\"SANGSE_JUSO\" type=\"STRING\" size=\"256\"/><Column id=\"CURR_POST\" type=\"STRING\" size=\"256\"/><Column id=\"CURR_JUSO\" type=\"STRING\" size=\"256\"/><Column id=\"CURR_SANGSE_JUSO\" type=\"STRING\" size=\"256\"/><Column id=\"YEONGMUN_JUSO\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"JATAEK_TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"JIKJANG_TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"HP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SINJANG\" type=\"STRING\" size=\"256\"/><Column id=\"CHEJUNG\" type=\"STRING\" size=\"256\"/><Column id=\"HYEOLAEKHYEONG\" type=\"STRING\" size=\"256\"/><Column id=\"SIRYEOK_JWA\" type=\"STRING\" size=\"256\"/><Column id=\"SIRYEOK_U\" type=\"STRING\" size=\"256\"/><Column id=\"JONGGYO\" type=\"STRING\" size=\"256\"/><Column id=\"CHWIMI\" type=\"STRING\" size=\"256\"/><Column id=\"GYEOLHON_YEOBU_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BOHUN_DAESANG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BYEONGYEOK_GUBUN_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"GUNBYEOL_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"YEOKJONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"BYEONGGWA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JUTEUKGI_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"GYEGEUP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"GUNBEON\" type=\"STRING\" size=\"256\"/><Column id=\"IPDAE_DT\" type=\"STRING\" size=\"256\"/><Column id=\"JEDAE_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CHEORI_DT\" type=\"DATE\" size=\"256\"/><Column id=\"CHEORIJA\" type=\"STRING\" size=\"256\"/><Column id=\"WEP_SUJEONG_DT\" type=\"DATE\" size=\"256\"/><Column id=\"WEP_SUJEONG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MCAR_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"HYEONDOROMYEONG_JUSO\" type=\"STRING\" size=\"256\"/><Column id=\"HYEONDOROMYEONG_SANGSE_JUSO\" type=\"STRING\" size=\"256\"/><Column id=\"DOROMYEONG_JUSO_USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SABEON\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsByeongyeok", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGunbyeol", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYeokjong", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsByeonggwa", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJuteukgi", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGyegeub", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_13_06","10","45","691","58",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06","10","45","100","58",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00","10","99","691","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00","10","99","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("영문주소");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00","10","126","691","28",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01","10","126","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("자택전화");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_00","10","153","691","28",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_00","10","153","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","7","20","153","22",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("주소 정보");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_01","10","215","921","28",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02","10","215","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("신장");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_00","10","242","921","28",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_00","10","242","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("종교");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_01","10","269","921","28",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_01","10","269","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("병역구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00","240","242","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("결혼여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJonggyo","112","245","126","22",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","-1","10","437",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","5","37","700","8",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","313","0","100","45",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("↑\r\n45\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","313","181","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoDoromyung","114","48","126","22",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_enable("true");
            obj.set_readonly("false");
            var rdoDoromyung_innerdataset = new nexacro.NormalDataset("rdoDoromyung_innerdataset", obj);
            rdoDoromyung_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">도로명</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">지번</Col></Row></Rows>");
            obj.set_innerdataset(rdoDoromyung_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Edit("edtEJuso","112","102","586","22",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnJuso","363","48","70","22",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("우편번호");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_02_00","240","126","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("직장전화");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_01_01_00_00","470","126","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("휴대폰");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","7","190","153","22",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("기본 신상 정보");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_00","5","207","670","8",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_01_00","10","296","921","28",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_01_00","10","296","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("병과");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_01_00_00","10","323","921","28",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_01_00_00","10","323","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("군번");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00_00","240","269","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("군별");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00_00_00","240","296","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("입대일");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Calendar("calIpdaeDt","342","299","126","22",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel",null,"12","55","25","10",null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"12","55","25","70",null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJuso","112","75","291","22",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSangseJuso","407","75","291","22",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPostNo","232","48","126","22",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHomeTelNo","112","129","126","22",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJikjangTelNo","342","129","126","22",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHpNo","572","129","126","22",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEmail","112","156","356","22",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00_01","240","215","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("체중");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtChejung","342","218","126","22",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSinjang","112","218","126","22",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00_01_00","470","215","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("시력");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSiryeokL","572","218","61","22",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00_01_00_00","700","215","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("혈액형");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoMarry","342","245","126","22",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_enable("true");
            obj.set_readonly("false");
            var rdoMarry_innerdataset = new nexacro.NormalDataset("rdoMarry_innerdataset", obj);
            rdoMarry_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">미혼</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">기혼</Col></Row></Rows>");
            obj.set_innerdataset(rdoMarry_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00_02","470","242","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("보훈대상");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoBohun","572","245","126","22",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_enable("true");
            obj.set_readonly("false");
            var rdoBohun_innerdataset = new nexacro.NormalDataset("rdoBohun_innerdataset", obj);
            rdoBohun_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">대상</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">미대상</Col></Row></Rows>");
            obj.set_innerdataset(rdoBohun_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Edit("edtSiryeokR","637","218","61","22",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cboABO","802","218","126","22",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var cboABO_innerdataset = new nexacro.NormalDataset("cboABO_innerdataset", obj);
            cboABO_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"datacolumn\">A형</Col><Col id=\"codecolumn\">A</Col></Row><Row><Col id=\"datacolumn\">B형</Col><Col id=\"codecolumn\">B</Col></Row><Row><Col id=\"datacolumn\">O형</Col><Col id=\"codecolumn\">O</Col></Row><Row><Col id=\"datacolumn\">AB형</Col><Col id=\"codecolumn\">AB</Col></Row></Rows>");
            obj.set_innerdataset(cboABO_innerdataset);
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00_00_01","470","269","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("역종");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00_00_00_00","470","296","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("전역일");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Calendar("calJeonyeokDt","572","299","126","22",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_01_00_00_00","240","323","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("주특기");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJuteukgi","342","326","356","22",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_innerdataset("dsJuteukgi");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_readonly("false");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_01_00_00_00_00","700","323","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("계급");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboGyegeub","802","326","126","22",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_innerdataset("dsGyegeub");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_readonly("false");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cboByeongyeok","112","272","126","22",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_innerdataset("dsByeongyeok");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_readonly("false");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cboGunbyeol","342","272","126","22",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_innerdataset("dsGunbyeol");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_readonly("false");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cboYeokjong","572","272","126","22",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_innerdataset("dsYeokjong");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_readonly("false");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cboByeonggwa","112","299","126","22",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_innerdataset("dsByeonggwa");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_readonly("false");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGunbeon","112","326","126","22",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("신상");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item14","cboJuya00","value","ds_input","DAEHAK_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","rdoDoromyung","value","dsMaster","DOROMYEONG_JUSO_USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","edtEJuso","value","dsMaster","YEONGMUN_JUSO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","calIpdaeDt","value","dsMaster","IPDAE_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","edtJuso","value","dsMaster","HYEONDOROMYEONG_JUSO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtSangseJuso","value","dsMaster","HYEONDOROMYEONG_SANGSE_JUSO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edtPostNo","value","dsMaster","CURR_POST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edtHomeTelNo","value","dsMaster","JATAEK_TEL_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edtJikjangTelNo","value","dsMaster","JIKJANG_TEL_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edtHpNo","value","dsMaster","HP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","edtEmail","value","dsMaster","EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","rdoMarry","value","dsMaster","GYEOLHON_YEOBU_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","rdoBohun","value","dsMaster","BOHUN_DAESANG_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","calJeonyeokDt","value","dsMaster","JEDAE_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edtSinjang","value","dsMaster","SINJANG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edtChejung","value","dsMaster","CHEJUNG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edtSiryeokL","value","dsMaster","SIRYEOK_JWA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","edtSiryeokR","value","dsMaster","SIRYEOK_U");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","edtJonggyo","value","dsMaster","JONGGYO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","edtGunbeon","value","dsMaster","GUNBEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","cboABO","value","dsMaster","HYEOLAEKHYEONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","cboYeokjong","value","dsMaster","YEOKJONG_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","cboGunbyeol","value","dsMaster","GUNBYEOL_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","cboByeongyeok","value","dsMaster","BYEONGYEOK_GUBUN_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","cboByeonggwa","value","dsMaster","BYEONGGWA_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","cboJuteukgi","value","dsMaster","JUTEUKGI_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","cboGyegeub","value","dsMaster","GYEGEUP_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("AM01_3010102_T02.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): AM01_3010102_T02.xfdl(신상)
        * 작 성         일 명: jiback
        * 작 성         일 자: 2022/08/18
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
            var strDs    = "dsByeongyeok|dsGunbyeol|dsYeokjong|dsByeonggwa|dsJuteukgi|dsGyegeub";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00265|00264|00263|00262|00261|00260";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "S|S|S|S|S|S";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";                                      // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId    = "Init";

                // gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
                // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.

            this.gfn_CmmnMultiComboLoad(strDs
                                      , strLgcd
                                      , strComb
                                      , strOptn
                                      , svcId);

        };

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
                    case "Post":
                            this.fn_Ret(this.ds_input.getColumn(0, "SABEON"));
                        break;
                    default:
                        break;
                }
            }
        };

        /**********************************************************************
                05. 조회 함수 선언(마스터 함수)
        ***********************************************************************/
        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_Ret = function(sabeon)
        {
            this.ds_input.setColumn(0, "SABEON", sabeon);

            var strSvc      = "Ret";
            var strUrl      = "/prj/AM/AM01/Retrieve_3010101_T02.do";
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

        /**********************************************************************
                08. 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function()
        {
            if(!this.gfn_isUpdate(this.dsMaster))
            {
                this.gfn_alert("변경된 이력이 없습니다.","저장정보","","question");
                return false;
            }

        	var ipdaeDt = this.gfn_isEmpty(this.dsMaster.getColumn(0, "IPDAE_DT"));
        	var jedaeDt = this.gfn_isEmpty(this.dsMaster.getColumn(0, "JEDAE_DT"));

        	if (this.gfn_getDiffDate(ipdaeDt, jedaeDt) < 0)
        	{
        		this.alert("입대일이 전역일보다 큽니다.");
        		return false;
        	}

        	var result = this.gfn_confirm( "저장 하시겠습니까?", "저장","", "question" );
        	if(result == 0)
        	{
        		return false;
        	}
        	return true;

        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_Save = function()
        {
            if(!this.fn_PreSave())
            {
                return false;
            }
            var strSvc      = "Post";
            var strUrl      = "/prj/AM/AM01/Save_3010101_T02.do";
            var strInDs     = "dsMaster=dsMaster:u";
            var strOutDs    = "";
            var strArg      = "";
            var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);
        };

        /**********************************************************************
                08. 기타 Control Event
        ***********************************************************************/
        // 취소버튼 클릭시
        this.btnCancel_onclick = function(obj,e)
        {
        	this.dsMaster.reset();
        };

        // 주소검색
        this.btnJuso_onclick = function(obj,e)
        {
        	this.gfn_searchPost(this, searchPost);
        };

        // 주소검색
        function searchPost(postData)
        {
        	var addr	= "";
        	if (postData.userSelectedType == "R"){
        		// 도로명주소
        		addr = postData.roadAddress;
        		this.parent.dsMaster.setColumn(0, "DOROMYEONG_JUSO_USE_YN", '1');
        	}
        	else if (postData.userSelectedType == "J"){
        		// 지번주소
        		addr = postData.jibunAddress;
        		this.parent.dsMaster.setColumn(0, "DOROMYEONG_JUSO_USE_YN", '0');
        	}

        	this.parent.edtJuso.set_value(addr);				// 도로명/지번 주소
        	this.parent.edtPostNo.set_value(postData.zonecode);	// 우편번호 - 5자리
        };

        // 주소검색 창 닫기
        this.postWebbrowser_close = function (obj,e) {
        	if (e.userdata != 'close') {
        		obj.user_callback(e.userdata);
        	} else {
        		obj.parent.removeChild('Post');
        		obj.destroy();
        		obj = null;
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.stc_13_00_00_00_00.addEventHandler("onclick",this.tab_00_Tabpage1_stc_13_00_00_00_00_onclick,this);
            this.btnJuso.addEventHandler("onclick",this.btnJuso_onclick,this);
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
            this.btnSave.addEventHandler("onclick",this.fn_Save,this);
        };
        this.loadIncludeScript("AM01_3010102_T02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
