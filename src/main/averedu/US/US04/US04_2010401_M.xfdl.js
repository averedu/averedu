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
            this.set_titletext("증명서발급");
            this.set_color("blue");
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
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"JEOPSU_NO\" type=\"STRING\" size=\"7\"/><Column id=\"SINCHEONG_DT\" type=\"STRING\" size=\"8\"/><Column id=\"JEUNGMYEONGSEO_KIND\" type=\"STRING\" size=\"2\"/><Column id=\"JEUNGMYEONGSEO_GBCD\" type=\"STRING\" size=\"1\"/><Column id=\"SINCHEONG_GBCD\" type=\"STRING\" size=\"1\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"SINCHEONGJA_RES_NO\" type=\"STRING\" size=\"13\"/><Column id=\"HP_NO\" type=\"STRING\" size=\"20\"/><Column id=\"DANGA\" type=\"STRING\" size=\"10\"/><Column id=\"BALGEUP_MAESU\" type=\"STRING\" size=\"5\"/><Column id=\"GEUMAEK\" type=\"STRING\" size=\"10\"/><Column id=\"BALGEUP_GBCD\" type=\"STRING\" size=\"1\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SCORE_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"HAKBEON\" type=\"STRING\" size=\"256\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"256\"/><Column id=\"SINCHEONG_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input1", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"HAKBEON_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHDAY\" type=\"DATE\" size=\"8\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakjeok", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"50\"/><Column id=\"HAKSAENG_ENM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKSAENG_CNM\" type=\"STRING\" size=\"256\"/><Column id=\"CAMPUS_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"DAEHAK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DAEHAK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONGONG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"JUYA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUNBAN\" type=\"STRING\" size=\"5\"/><Column id=\"BUNBAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"HAKNYEON_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKJEOK_STCD\" type=\"STRING\" size=\"3\"/><Column id=\"HAKJEOK_SANGTAE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JIDOGYOSU_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JIDOGYOSU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"8\"/><Column id=\"GENDER_CD\" type=\"STRING\" size=\"1\"/><Column id=\"GENDER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HP_NO\" type=\"STRING\" size=\"16\"/><Column id=\"RES_NO\" type=\"STRING\" size=\"256\"/><Column id=\"GYOJIK_ISU_YN\" type=\"STRING\" size=\"256\"/><Column id=\"IPHAK_DT\" type=\"STRING\" size=\"256\"/><Column id=\"JOLEOP_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BALGEUP_BULGA_YN\" type=\"STRING\" size=\"256\"/><Column id=\"HAK_JEON\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakbeon", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"50\"/><Column id=\"HAKSAENG_ENM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKSAENG_CNM\" type=\"STRING\" size=\"256\"/><Column id=\"CAMPUS_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"DAEHAK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DAEHAK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONGONG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"JUYA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUNBAN\" type=\"STRING\" size=\"5\"/><Column id=\"BUNBAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"HAKNYEON_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKJEOK_STCD\" type=\"STRING\" size=\"3\"/><Column id=\"HAKJEOK_SANGTAE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JIDOGYOSU_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JIDOGYOSU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"8\"/><Column id=\"GENDER_CD\" type=\"STRING\" size=\"1\"/><Column id=\"GENDER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HP_NO\" type=\"STRING\" size=\"16\"/><Column id=\"RES_NO\" type=\"STRING\" size=\"256\"/><Column id=\"GYOJIK_ISU_YN\" type=\"STRING\" size=\"256\"/><Column id=\"IPHAK_DT\" type=\"STRING\" size=\"256\"/><Column id=\"JOLEOP_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BALGEUP_BULGA_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakjeom", this);
            obj.set_useclientlayout("true");
            obj.set_preload("true");
            obj._setContents("<ColumnInfo><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"CHWIDEUK_HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GANEUNG_YN\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHaknyeon", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JOLEOP_HAKNYEON\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSincheong", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCert", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CERT_LANG\" type=\"STRING\" size=\"7\"/><Column id=\"SINCHEONG_GBCD\" type=\"STRING\" size=\"1\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJeopsuNo", this);
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"JEOPSU_NO\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJeungmyeongseo", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsKorEng", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBalgeupYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTemp", this);
            obj._setContents("<ColumnInfo><Column id=\"JEOPSU_NO\" type=\"STRING\" size=\"7\"/><Column id=\"SINCHEONG_DT\" type=\"STRING\" size=\"8\"/><Column id=\"JEUNGMYEONGSEO_KIND\" type=\"STRING\" size=\"2\"/><Column id=\"JEUNGMYEONGSEO_GBCD\" type=\"STRING\" size=\"1\"/><Column id=\"SINCHEONG_GBCD\" type=\"STRING\" size=\"1\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"SINCHEONGJA_RES_NO\" type=\"STRING\" size=\"13\"/><Column id=\"DANGA\" type=\"STRING\" size=\"10\"/><Column id=\"BALGEUP_MAESU\" type=\"STRING\" size=\"5\"/><Column id=\"GEUMAEK\" type=\"STRING\" size=\"10\"/><Column id=\"BALGEUP_GBCD\" type=\"STRING\" size=\"1\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SCORE_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div1","0","77","790","153",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("white");
            obj.set_border("1px solid #4c4b66");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06","117","5","667","28",null,null,null,null,null,null,this.div1.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_DetailBg");
            this.div1.addChild(obj.name, obj);

            obj = new Static("stc_12_06","117","5","175","28",null,null,null,null,null,null,this.div1.form);
            obj.set_taborder("12");
            obj.set_text("학번");
            obj.set_cssclass("sta_WF_DetailTi");
            this.div1.addChild(obj.name, obj);

            obj = new Edit("edtHakbeon","294","8","154","22",null,null,null,null,null,null,this.div1.form);
            obj.set_taborder("1");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div1.addChild(obj.name, obj);

            obj = new Edit("edtNm","627","8","154","22",null,null,null,null,null,null,this.div1.form);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div1.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00","117","33","667","28",null,null,null,null,null,null,this.div1.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_DetailBg");
            this.div1.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01","117","33","175","28",null,null,null,null,null,null,this.div1.form);
            obj.set_taborder("14");
            obj.set_text("주민등록번호");
            obj.set_cssclass("sta_WF_DetailTi");
            this.div1.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00","117","61","667","28",null,null,null,null,null,null,this.div1.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_DetailBg");
            this.div1.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00","117","61","175","28",null,null,null,null,null,null,this.div1.form);
            obj.set_taborder("16");
            obj.set_text("학과/전공");
            obj.set_cssclass("sta_WF_DetailTi");
            this.div1.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00","117","89","667","28",null,null,null,null,null,null,this.div1.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_DetailBg");
            this.div1.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01","117","89","175","28",null,null,null,null,null,null,this.div1.form);
            obj.set_taborder("18");
            obj.set_text("학년");
            obj.set_cssclass("sta_WF_DetailTi");
            this.div1.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_00","117","117","667","28",null,null,null,null,null,null,this.div1.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_DetailBg");
            this.div1.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_00","117","117","175","28",null,null,null,null,null,null,this.div1.form);
            obj.set_taborder("20");
            obj.set_text("학적상태");
            obj.set_cssclass("sta_WF_DetailTi");
            this.div1.addChild(obj.name, obj);

            obj = new Calendar("calBirthday","627","36","154","22",null,null,null,null,null,null,this.div1.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.div1.addChild(obj.name, obj);

            obj = new Radio("rdoBalgeup","627","120","154","22",null,null,null,null,null,null,this.div1.form);
            obj.set_taborder("10");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_enable("true");
            obj.set_readonly("true");
            var div1_form_rdoBalgeup_innerdataset = new nexacro.NormalDataset("div1_form_rdoBalgeup_innerdataset", obj);
            div1_form_rdoBalgeup_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">발급</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">발급불가</Col></Row></Rows>");
            obj.set_innerdataset(div1_form_rdoBalgeup_innerdataset);
            this.div1.addChild(obj.name, obj);

            obj = new MaskEdit("mdtResNo","294","36","154","22",null,null,null,null,null,null,this.div1.form);
            obj.set_taborder("3");
            obj.set_enable("true");
            obj.set_format("######-#{######}");
            obj.set_type("string");
            obj.set_readonly("true");
            this.div1.addChild(obj.name, obj);

            obj = new Edit("edtHakjeokSangtae","294","120","154","22",null,null,null,null,null,null,this.div1.form);
            obj.set_taborder("9");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div1.addChild(obj.name, obj);

            obj = new Edit("edtHaknyeon","294","92","154","22",null,null,null,null,null,null,this.div1.form);
            obj.set_taborder("7");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div1.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02","450","5","175","28",null,null,null,null,null,null,this.div1.form);
            obj.set_taborder("21");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.div1.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_00","450","33","175","28",null,null,null,null,null,null,this.div1.form);
            obj.set_taborder("22");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_WF_DetailTi");
            this.div1.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02","450","61","175","28",null,null,null,null,null,null,this.div1.form);
            obj.set_taborder("23");
            obj.set_text("입학일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.div1.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_01","450","89","175","28",null,null,null,null,null,null,this.div1.form);
            obj.set_taborder("24");
            obj.set_text("졸업일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.div1.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_00_00","450","117","175","28",null,null,null,null,null,null,this.div1.form);
            obj.set_taborder("25");
            obj.set_text("발급구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.div1.addChild(obj.name, obj);

            obj = new Calendar("calIphakDt","627","64","154","22",null,null,null,null,null,null,this.div1.form);
            obj.set_taborder("6");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.div1.addChild(obj.name, obj);

            obj = new Calendar("calJoleopDt","627","92","154","22",null,null,null,null,null,null,this.div1.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.div1.addChild(obj.name, obj);

            obj = new Edit("edtHakgwa","294","64","154","22",null,null,null,null,null,null,this.div1.form);
            obj.set_taborder("5");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div1.addChild(obj.name, obj);

            obj = new ImageViewer("imgView","5","5","103","140",null,null,null,null,null,null,this.div1.form);
            obj.set_taborder("0");
            obj.set_stretch("fixaspectratio");
            this.div1.addChild(obj.name, obj);

            obj = new Static("Static01","490","230","100","45",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("↑\r\n45\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","520","42","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","69","1160","8",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","0","250","155","22",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("증명서 발급목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","0","274",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"130\"/><Column size=\"50\"/><Column size=\"60\"/><Column size=\"70\"/><Column size=\"60\"/><Column size=\"50\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"70\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"신청일자\"/><Cell col=\"2\" text=\"증명서종류\"/><Cell col=\"3\" text=\"국/영문\"/><Cell col=\"4\" text=\"신청구분\"/><Cell col=\"5\" text=\"학번\"/><Cell col=\"6\" text=\"성명\"/><Cell col=\"7\" text=\"단가\"/><Cell col=\"8\" text=\"발급매수\"/><Cell col=\"9\" text=\"합계금액\"/><Cell col=\"10\" text=\"발급상태\"/><Cell col=\"11\" text=\"삭제\"/><Cell col=\"12\" text=\"미리보기\"/><Cell col=\"13\" text=\"출력\"/><Cell col=\"14\" text=\"재출력\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:SINCHEONG_DT\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" text=\"bind:JEUNGMYEONGSEO_KIND\" displaytype=\"combotext\" combodataset=\"dsJeungmyeongseo\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" textAlign=\"left\" padding=\"0px 10px\"/><Cell col=\"3\" text=\"bind:JEUNGMYEONGSEO_GBCD\" displaytype=\"combotext\" combodataset=\"dsKorEng\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"4\" text=\"bind:SINCHEONG_GBCD\" displaytype=\"combotext\" combodataset=\"dsSincheong\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"5\" text=\"bind:HAKBEON\"/><Cell col=\"6\" text=\"bind:HAKSAENG_NM\"/><Cell col=\"7\" text=\"bind:DANGA\" textAlign=\"right\" padding=\"0px 10px\" displaytype=\"number\"/><Cell col=\"8\" text=\"bind:BALGEUP_MAESU\" edittype=\"text\" editinputtype=\"digit\"/><Cell col=\"9\" text=\"bind:GEUMAEK\" textAlign=\"right\" padding=\"0px 10px\" displaytype=\"number\"/><Cell col=\"10\" text=\"bind:BALGEUP_GBCD\" displaytype=\"combotext\" combodataset=\"dsBalgeupYn\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\" textAlign=\"center\"/><Cell col=\"11\" displaytype=\"buttoncontrol\" edittype=\"button\" controlautosizingtype=\"both\" text=\"삭제\" cursor=\"pointer\"/><Cell col=\"12\" edittype=\"button\" displaytype=\"buttoncontrol\" text=\"미리보기\" cursor=\"pointer\"/><Cell col=\"13\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"출력\" cursor=\"pointer\"/><Cell col=\"14\" text=\"expr:BALGEUP_GBCD != &apos;1&apos; ? &apos;&apos; : &apos;재출력&apos;\" displaytype=\"expr:BALGEUP_GBCD != &apos;1&apos; ? &apos;nomal&apos; : &apos;buttoncontrol&apos; \" edittype=\"expr:BALGEUP_GBCD != &apos;1&apos; ? &apos;none&apos;: &apos;button&apos;\" cursor=\"pointer\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01","790","48","30","100",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("30");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","0","52","152","22",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("학적기본정보");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"42","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","24","0","1500","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","24","31","1500","9",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new Static("Static01_02","393","0","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00","81","0","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","221","0","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","500","0","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchHakbeon","91","9","130","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_enable("false");
            obj.set_readonly("false");
            obj.set_usecontextmenu("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearchHakbeon","231","9","22","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_PopSrch");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchNm","263","9","130","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_cssclass("point");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_01","-1","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("학번/성명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01","253","0","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01","417","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            obj.set_visible("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calSearchBirthday","510","9","130","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("div2","820","77","820","153",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("white");
            obj.set_border("1px solid #4c4b66");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_00","173","7","640","54",null,null,null,null,null,null,this.div2.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.div2.addChild(obj.name, obj);

            obj = new Button("btnKor","6","7","80","25",null,null,null,null,null,null,this.div2.form);
            obj.set_taborder("0");
            obj.set_text("국   문");
            obj.set_enable("true");
            obj.set_background("gold");
            obj.set_color("white");
            this.div2.addChild(obj.name, obj);

            obj = new Button("btnEng","6","35","80","25",null,null,null,null,null,null,this.div2.form);
            obj.set_taborder("1");
            obj.set_text("영   문");
            obj.set_enable("true");
            obj.set_background("blue");
            obj.set_color("white");
            this.div2.addChild(obj.name, obj);

            obj = new Static("staLang","91","7","80","54",null,null,null,null,null,null,this.div2.form);
            obj.set_taborder("2");
            obj.set_background("antiquewhite");
            obj.set_textAlign("center");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            obj.set_verticalAlign("middle");
            this.div2.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_00_00","173","7","80","54",null,null,null,null,null,null,this.div2.form);
            obj.set_taborder("14");
            obj.set_text("신청구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.div2.addChild(obj.name, obj);

            obj = new Radio("rdoSincheong","272","23","344","22",null,null,null,null,null,null,this.div2.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsSincheong");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_direction("vertical");
            obj.set_enable("false");
            obj.set_readonly("false");
            this.div2.addChild(obj.name, obj);

            obj = new Button("btn10","6","63","80","25",null,null,null,null,null,null,this.div2.form);
            obj.set_taborder("4");
            obj.set_text("재   학");
            obj.set_enable("false");
            this.div2.addChild(obj.name, obj);

            obj = new Button("btn20","6","91","80","25",null,null,null,null,null,null,this.div2.form);
            obj.set_taborder("5");
            obj.set_text("휴   학");
            obj.set_enable("false");
            this.div2.addChild(obj.name, obj);

            obj = new Button("btn51","90","91","80","25",null,null,null,null,null,null,this.div2.form);
            obj.set_taborder("7");
            obj.set_text("졸업예정");
            obj.set_enable("false");
            this.div2.addChild(obj.name, obj);

            obj = new Button("btn50","90","63","80","25",null,null,null,null,null,null,this.div2.form);
            obj.set_taborder("6");
            obj.set_text("졸   업");
            obj.set_enable("false");
            this.div2.addChild(obj.name, obj);

            obj = new Button("btn30","173","63","80","25",null,null,null,null,null,null,this.div2.form);
            obj.set_taborder("8");
            obj.set_text("제   적");
            obj.set_enable("false");
            this.div2.addChild(obj.name, obj);

            obj = new Button("btn40","173","91","80","25",null,null,null,null,null,null,this.div2.form);
            obj.set_taborder("9");
            obj.set_text("수   료");
            obj.set_enable("false");
            this.div2.addChild(obj.name, obj);

            obj = new Button("btn01","256","63","80","53",null,null,null,null,null,null,this.div2.form);
            obj.set_taborder("10");
            obj.set_text("학적부");
            obj.set_enable("false");
            this.div2.addChild(obj.name, obj);

            obj = new Button("btn02","339","63","80","53",null,null,null,null,null,null,this.div2.form);
            obj.set_taborder("11");
            obj.set_text("성적증명서");
            obj.set_enable("false");
            this.div2.addChild(obj.name, obj);

            obj = new Radio("rdoScore1","432","64","194","22",null,null,null,null,null,null,this.div2.form);
            obj.set_taborder("12");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_enable("false");
            obj.set_readonly("false");
            var div2_form_rdoScore1_innerdataset = new nexacro.NormalDataset("div2_form_rdoScore1_innerdataset", obj);
            div2_form_rdoScore1_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">백분율</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">평점</Col></Row></Rows>");
            obj.set_innerdataset(div2_form_rdoScore1_innerdataset);
            obj.set_text("백분율");
            obj.set_value("1");
            obj.set_index("0");
            this.div2.addChild(obj.name, obj);

            obj = new Radio("rdoScore2","432","92","194","22",null,null,null,null,null,null,this.div2.form);
            obj.set_taborder("13");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_enable("false");
            obj.set_readonly("false");
            var div2_form_rdoScore2_innerdataset = new nexacro.NormalDataset("div2_form_rdoScore2_innerdataset", obj);
            div2_form_rdoScore2_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">석차 미포함</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">석차 포함</Col></Row></Rows>");
            obj.set_innerdataset(div2_form_rdoScore2_innerdataset);
            obj.set_text("석차 미포함");
            obj.set_value("2");
            obj.set_index("0");
            this.div2.addChild(obj.name, obj);

            obj = new Static("stc_39","6","121","420","20",null,null,null,null,null,null,this.div2.form);
            obj.set_taborder("16");
            obj.set_text("※ 98학번 이전의 학생은 평점으로만 출력가능합니다.");
            obj.set_cssclass("sta_WF_Desc02");
            this.div2.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00_00","822","52","152","22",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("증명서 종류");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00","0","267",null,"8","0",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnReset",null,"242","100","25","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("증명서발급");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item20","divSearch.form.edtSearchHakbeon","value","ds_input","HAKBEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divSearch.form.btnSearchHakbeon","enable","dsBindable","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divSearch.form.edtSearchNm","value","ds_input","HAKSAENG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div1.form.edtHakbeon","value","dsHakjeok","HAKBEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div1.form.edtNm","value","dsHakjeok","HAKSAENG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div1.form.calBirthday","value","dsHakjeok","BIRTHDAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div1.form.rdoBalgeup","value","dsHakjeok","BALGEUP_BULGA_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div1.form.mdtResNo","value","dsHakjeok","RES_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div1.form.edtHakjeokSangtae","value","dsHakjeok","HAKJEOK_SANGTAE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div1.form.edtHaknyeon","value","dsHakjeok","HAKNYEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div1.form.calIphakDt","value","dsHakjeok","IPHAK_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div1.form.calJoleopDt","value","dsHakjeok","JOLEOP_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div1.form.edtHakgwa","value","dsHakjeok","HAK_JEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div2.form.rdoSincheong","value","dsCert","SINCHEONG_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divSearch.form.calSearchBirthday","value","ds_input","BIRTHDAY");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
            this._addPreloadList("data","","dsHakjeok");
            this._addPreloadList("data","","dsHakbeon");
            this._addPreloadList("data","","dsHakjeom");
            this._addPreloadList("data","","dsCert");
            this._addPreloadList("data","","dsJeopsuNo");
        };
        
        // User Script
        this.registerScript("US04_2010401_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): US04_2010401_M.xfdl(증명서 발급)
        * 작 성         일 명: jiback
        * 작 성         일 자: 2021/09/30
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
            var strDs    = "dsSincheong|dsJeungmyeongseo|dsKorEng|dsBalgeupYn";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00043|00032|00041|00042";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "X|X|X|X";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
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

        this.fn_PostInit = function()
        {
        	this.ds_input.setColumn(0, "SINCHEONG_DT", objApp.gds_SystemDate.getColumn(0,"YYYYMMDD"));
        	this.dsSincheong.filter("CODE != 'D' && CODE !='E'");
        }

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
        			case "Save":
                            this.fn_AlterBalgeup();
                        break;
                    default:
                        break;
                }
            }
        };

        //Popup callback영역
        this.fn_popupCallback = function(strId, strVal)
        {
        	switch(strId)
        	{
        		case "hakbeon" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.ds_input.setColumn(0, "HAKBEON", sRtn[0]);
        					this.ds_input.setColumn(0, "HAKSAENG_NM", sRtn[1]);

        					this.dsHakjeok.setColumn(0, "HAKBEON", sRtn[0]);
        					this.dsHakjeok.setColumn(0, "HAKGWA_CD", sRtn[10]);
        					this.dsHakjeok.setColumn(0, "HAKGWA_NM", sRtn[2]);
        					this.dsHakjeok.setColumn(0, "JEONGONG_CD", sRtn[12]);
        					this.dsHakjeok.setColumn(0, "JEONGONG_NM", sRtn[13]);
        					this.dsHakjeok.setColumn(0, "HAKNYEON", sRtn[4]);
        					this.dsHakjeok.setColumn(0, "HAKSAENG_NM", sRtn[1]);
        					this.dsHakjeok.setColumn(0, "RES_NO", sRtn[8]);
        					this.dsHakjeok.setColumn(0, "HP_NO", sRtn[3]);
        					this.dsHakjeok.setColumn(0, "BIRTHDAY", sRtn[9]);
        					this.dsHakjeok.setColumn(0, "HAKJEOK_STCD", sRtn[14]);
        					this.dsHakjeok.setColumn(0, "HAKJEOK_SANGTAE_NM", sRtn[5]);
        					this.dsHakjeok.setColumn(0, "GYOJIK_ISU_YN", sRtn[15]);
        					this.dsHakjeok.setColumn(0, "IPHAK_DT", sRtn[16]);
        					this.dsHakjeok.setColumn(0, "JOLEOP_DT", sRtn[17]);
        					this.dsHakjeok.setColumn(0, "BALGEUP_BULGA_YN", sRtn[18]);
        					this.dsHakjeok.setColumn(0, "FILE_PATH", sRtn[19]);

        					if (!this.gfn_isNull(sRtn[13]))
        					{
        						this.dsHakjeok.setColumn(0, "HAK_JEON", sRtn[2] + '/' + sRtn[13]);
        					}
        					else
        					{
        						this.dsHakjeok.setColumn(0, "HAK_JEON", sRtn[2]);
        					}

        					this.fn_PicLoad(); // 학생사진 set
        					this.fn_BtnEnable(); // 학적상태에 따라 증명서 종류 버튼 활성화
        				}
        			break;
        		default:
                    break;
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
                case "tmp1" :        // 일괄 출력
                         this.fn_SelectPrint();
                    break;
                case "tmp2" :        // 일괄 재출력
                         this.fn_SelectReprint();
                    break;
                default :
                    break;
            };
        };;

        /**********************************************************************
                05. 조회 함수 선언(마스터 함수)
        ***********************************************************************/
        this.fn_Ret = function()
        {
        	this.fn_Reset();
        	this.fn_setCallHakbeonPopup();
        };

        /**********************************************************************
                06. 일괄 출력
        ***********************************************************************/
        this.fn_SelectPrint = function()
        {
            if(this.dsMaster.rowcount < 1 || this.dsMaster.findRow("CHK",1) == -1)
            {
                this.alert("선택된 증명서가 없습니다.");
        		return false;
            }

        	var result = this.gfn_confirm("선택된 증명서를 출력하시겠습니까?\n(이미 출력된 증명서는 재출력을 실행하세요.)", "삭제정보","","question" );
            if(result == 0)
            {
                return false;
            }

        	this.dsTemp.clearData();
        	for(var i=0; i<this.dsMaster.rowcount; i++)
            {
                if(this.dsMaster.getColumn(i,"CHK") == "1")
                {
        			if (this.dsMaster.getColumn(i, "BALGEUP_GBCD") == "0")
        			{
        				var nRow = this.dsTemp.addRow();
        				this.dsTemp.copyRow(nRow, this.dsMaster, i);
        			}
                }
            }

        	if (this.dsTemp.rowcount <= 0)
        	{
        		this.alert("이미 출력된 증명서 입니다. 재출력을 실행하세요.");
        		return false;
        	}

        	this.fn_InsertCert(); // 증명서테이블에 insert
        	this.fn_Cert('0', true);
        };

        /**********************************************************************
                07. 일괄 재출력
        ***********************************************************************/
        this.fn_SelectReprint = function()
        {
            if(this.dsMaster.rowcount < 1 || this.dsMaster.findRow("CHK",1) == -1)
            {
                this.alert("선택된 증명서가 없습니다.");
        		return false;
            }

        	this.dsTemp.clearData();
        	for(var i=0; i<this.dsMaster.rowcount; i++)
            {
                if(this.dsMaster.getColumn(i,"CHK") == "1")
                {
        			if (this.dsMaster.getColumn(i, "BALGEUP_GBCD") == "1")
        			{
        				var nRow = this.dsTemp.addRow();
        				this.dsTemp.copyRow(nRow, this.dsMaster, i);
        			}
                }
            }

        	if (this.dsTemp.rowcount <= 0)
        	{
        		this.alert("재출력할 증명서가 없습니다.");
        		return false;
        	}

        	this.fn_Cert('0', true);
        };

        /**********************************************************************
                08. 트랜잭션
        ***********************************************************************/
        // 취득학점 조회
        this.fn_Hakjeom = function()
        {
            var strSvc      = "Hakjeom";
            var strUrl      = "/prj/US/US04/Retrieve_2010401_M_Hakjeom.do";
            var strInDs     = "dsHakjeok=dsHakjeok";
            var strOutDs    = "dsHakjeom=dsHakjeom";
            var strArg      = "";
            var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = false;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);
        };

        // 학과별 졸업학년 조회
        this.fn_Haknyeon = function()
        {
            var strSvc      = "Hakjeom";
            var strUrl      = "/prj/US/US04/Retrieve_2010401_M_Haknyeon.do";
            var strInDs     = "dsHakjeok=dsHakjeok";
            var strOutDs    = "dsHaknyeon=dsHaknyeon";
            var strArg      = "";
            var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = false;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);
        };

        // 증명서 접수번호 조회
        this.fn_JeopsuNo = function()
        {
            var strSvc      = "dsJeopsuNo";
            var strUrl      = "/prj/US/US04/Retrieve_2010401_M_JeopsuNo.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsJeopsuNo=dsJeopsuNo";
            var strArg      = "";
            var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = false;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);
        };

        // 출력 실행 함수(증명서관리 테이블에 INSERT)
        this.fn_InsertCert = function()
        {
            var strSvc      = "Save";
            var strUrl      = "/prj/US/US04/Save_2010401_M.do";
            var strInDs     = "dsTemp=dsTemp";
            var strOutDs    = "";
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
                09. 각종함수
        ***********************************************************************/
        // 데이터셋, 증명서 버튼 reset
        this.fn_Reset = function()
        {
        	this.dsMaster.clearData();
        	this.dsHakjeok.clearData();
        	this.dsHaknyeon.clearData();
        	this.dsHakjeom.clearData();
        	this.dsHakbeon.clearData();
        	this.dsCert.clearData();
        	this.dsJeopsuNo.clearData();
        	this.dsHakjeok.addRow();
        	this.dsCert.addRow();

        	this.div2.form.btn01.set_enable(false); //학적부
        	this.div2.form.btn02.set_enable(false); //성적
        	this.div2.form.btn10.set_enable(false); //재학
        	this.div2.form.btn20.set_enable(false); //휴학
        	this.div2.form.btn30.set_enable(false); //제적
        	this.div2.form.btn40.set_enable(false); //수료
        	this.div2.form.btn50.set_enable(false); //졸업
        	this.div2.form.btn51.set_enable(false); //졸업예정
        };

        // 학생 사진 set
        this.fn_PicLoad = function()
        {
        	var xhttp = new XMLHttpRequest();
        	xhttp.targetObj  = this.dsHakjeok;
        	xhttp.targetComp = this.div1.form.imgView;
        	xhttp.onreadystatechange = function() {
        		if (this.readyState == 4 && this.status == 200) {
        			xhttp.targetComp.set_image(xhttp.targetObj.getColumn(xhttp.targetObj.rowposition, 'FILE_PATH'));
        		} else {
        			xhttp.targetComp.set_image('https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Noimage.svg/739px-Noimage.svg.png');
        		}
        	};
        	xhttp.open("GET", this.dsHakjeok.getColumn(this.dsHakjeok.rowposition, 'FILE_PATH'), false);
        	xhttp.send();
        };

        // 재학상태에 따른 증명서 버튼 활성화
        this.fn_BtnEnable = function()
        {
        	var haknyeon = this.dsHakjeok.getColumn(0, "HAKNYEON"); // 학년
        	var hakjeokSt = this.dsHakjeok.getColumn(0, "HAKJEOK_STCD");  //학적상태

        	this.div2.form.btn01.set_enable(true); // 학적부(무조건 enable)
        	this.div2.form.btn02.set_enable(true); // 성적증명서(무조건 enable)
        	this.div2.form.rdoScore2.set_enable(true);

        	var hakbeon = this.dsHakjeok.getColumn(0, 'HAKBEON');
        	if (hakbeon.substr(0, 2) >= 76 && hakbeon.substr(0, 2) < 99)
        	{
        		this.div2.form.rdoScore1.set_value('2');
        		this.div2.form.rdoScore1.set_enable(false);
        	}
        	else
        	{
        		this.div2.form.rdoScore1.set_value('1');
        		this.div2.form.rdoScore1.set_enable(true);
        	}

        	switch(hakjeokSt)
        	{
        		case '10' :   //재학
        				this.div2.form.btn10.set_enable(true);   //재학증명서
        				this.div2.form.btn50.set_enable(false);  //졸업증명서
        				this.div2.form.btn20.set_enable(false);  //휴학증명서
        				this.div2.form.btn30.set_enable(false);  //제적증명서
        				this.fn_EtcButton(haknyeon, hakjeokSt);
        			break;
        	    case '20' :  //휴학
        				this.div2.form.btn10.set_enable(false);  //재학증명서
        				this.div2.form.btn50.set_enable(false);  //졸업증명서
        				this.div2.form.btn20.set_enable(true);   //휴학증명서
        				this.div2.form.btn30.set_enable(false);  //제적증명서
        				this.fn_EtcButton(haknyeon, hakjeokSt);
        			break;
        		case '30' :// 제적
        				this.div2.form.btn10.set_enable(false);  //재학증명서
        				this.div2.form.btn50.set_enable(false);  //졸업증명서
        				this.div2.form.btn20.set_enable(false);  //휴학증명서
        				this.div2.form.btn30.set_enable(true);   //제적증명서
        			break ;
        	    case '40' : //수료
        				this.div2.form.btn10.set_enable(false);  //재학증명서
        				this.div2.form.btn50.set_enable(false);  //졸업증명서
        				this.div2.form.btn20.set_enable(false);  //휴학증명서
        				this.div2.form.btn30.set_enable(false);  //제적증명서
        				this.div2.form.btn40.set_enable(true);    //수료증명서
        				this.fn_EtcButton(haknyeon,hakjeokSt);
        			break ;
        		case '50' :  //졸업
        				this.div2.form.btn10.set_enable(false);  //재학증명서
        				this.div2.form.btn50.set_enable(true);   //졸업증명서
        				this.div2.form.btn20.set_enable(false);  //휴학증명서
        				this.div2.form.btn30.set_enable(false);  //제적증명서
        			break;
        		default :
        			break;
        	}
        };

        // 수료, 졸업예정서 버튼 활성화
        this.fn_EtcButton = function(haknyeon, hakjeokSt)
        {
        	this.fn_Hakjeom();
        	var chwideukHakjeom = this.dsHakjeom.getColumn(0, "CHWIDEUK_HAKJEOM");
        	var joleopGaneungYn = this.dsHakjeom.getColumn(0, "GANEUNG_YN")

        	if (chwideukHakjeom > 40)
        	{
        		this.div2.form.btn40.set_enable(true);
        	}
        	else
        	{
        		this.div2.form.btn40.set_enable(false);
        	}

        	if (hakjeokSt != '50')
        	{
        		this.fn_Haknyeon();
        		var joleupHaknyeon = this.dsHaknyeon.getColumn(0, "JOLEOP_HAKNYEON");
        		if (haknyeon == joleupHaknyeon && joleopGaneungYn == '1')
        		{
        			this.div2.form.btn51.set_enable(true);
        		}
        		else
        		{
        			this.div2.form.btn51.set_enable(false);
        		}
        	}
        };

        // 증명서 국문 or 영문 버튼 클릭시 발생 함수
        this.fn_Language = function(lang)
        {
        	var hakjeokSt = this.dsHakjeok.getColumn(0, 'HAKJEOK_STCD');
        	if(this.gfn_isNull(hakjeokSt))
        	{
        		this.alert("해당학번의 학생자료가 없거나 학적상태가 없는 자료입니다.\n학번을 확인해주세요.");
        		return false;
        	}

        	if(lang == '1')
        	{
        		this.div2.form.staLang.set_text('국문');
        		this.dsCert.setColumn(0, "CERT_LANG", "1");
        	} else if (lang == '2')
        	{
        		this.div2.form.staLang.set_text('영문');
        		this.dsCert.setColumn(0, "CERT_LANG", "2");
        	}

        	if(this.gfn_isNull(this.div2.form.staLang.text))
        	{
        		this.div2.form.rdoSincheong.set_enable(false);
        	}
        	else
        	{
        		this.div2.form.rdoSincheong.set_enable(true);
        	}
        };

        // 증명서 버튼 클릭시 발생하는 이벤트
        this.fn_CertBtn = function(obj,e)
        {
        	var cert = obj.name.substr(3);

        	var score1 = this.div2.form.rdoScore1.text;
        	var score2 = this.div2.form.rdoScore2.text;

        	// 성적증명서 타입
        	var scoreType  = this.div2.form.rdoScore1.value + '';
        	    scoreType += this.div2.form.rdoScore2.value + '';

        	if (this.gfn_isNull(this.dsCert.getColumn(0, "SINCHEONG_GBCD")))
        	{
        		this.alert("신청구분을 선택해주세요.");
        		return false;
        	}

        	// 영문 증명서는 재학, 성적증명서만 가능
        	if (this.dsCert.getColumn(0, "CERT_LANG") == '2' && cert != '10' && cert != '02')
        	{
        		this.alert("영문증명서는 재학, 성적증명서만 가능합니다.");
        		return false;
        	}

        	if (cert == '02')
        	{
        		var result = this.gfn_confirm("[" + score1 + "], [" + score2 + "] 성적증명서를 추가하시겠습니까?", "저장","", "question" );
        		if(result == 0)
        		{
        			return false;
        		}
        	}

        	this.fn_AddCert(cert, scoreType);
        };

        // 증명서 발급내역 그리드에 추가 함수
        this.fn_AddCert = function(cert, scoreType)
        {
        	var hakbeon = this.dsHakjeok.getColumn(0, 'HAKBEON'); // 학번
        	var haksaengNm = this.dsHakjeok.getColumn(0, 'HAKSAENG_NM'); // 성명
        	var resNo = this.dsHakjeok.getColumn(0, 'RES_NO'); // 주민등록번호
        	var hpNo = this.dsHakjeok.getColumn(0, 'HP_NO'); // 휴대전화
        	var language = this.dsCert.getColumn(0, "CERT_LANG"); // 국/영문
        	var sincheongGb = this.dsCert.getColumn(0, "SINCHEONG_GBCD"); // 신청구분

        	for (var i=0; i<this.dsMaster.rowcount; i++)
        	{
        		if (this.dsMaster.getColumn(i, "HAKBEON")
        		  + this.dsMaster.getColumn(i, "JEUNGMYEONGSEO_GBCD")
        		  + this.dsMaster.getColumn(i, "JEUNGMYEONGSEO_KIND")
        		  + this.dsMaster.getColumn(i, "SINCHEONG_GBCD")
        		  == hakbeon + language + cert + sincheongGb)
        		{
        			this.alert("같은 자료가 존재합니다. 추가 발행시 매수를 증가하세요.");
        			if (cert == '02')
        			{
        				this.dsMaster.setColumn(i, 'SCORE_TYPE', scoreType);
        			}
        			return false;
        		}
        	}

        	this.fn_JeopsuNo();
        	var jeopsuNo = this.dsJeopsuNo.getColumn(0, "JEOPSU_NO");
        	var seq = this.fn_Seq();
        	var nRow = this.dsMaster.addRow();

        	this.dsMaster.setColumn(nRow, 'CHK', '0');
        	this.dsMaster.setColumn(nRow, 'JEOPSU_NO', jeopsuNo);
        	this.dsMaster.setColumn(nRow, 'SINCHEONG_DT', this.ds_input.getColumn(0, "SINCHEONG_DT"));
        	this.dsMaster.setColumn(nRow, 'JEUNGMYEONGSEO_KIND', cert);
        	this.dsMaster.setColumn(nRow, 'JEUNGMYEONGSEO_GBCD', language);
        	this.dsMaster.setColumn(nRow, 'SINCHEONG_GBCD', sincheongGb);
        	this.dsMaster.setColumn(nRow, 'HAKBEON', hakbeon);
        	this.dsMaster.setColumn(nRow, 'HAKSAENG_NM', haksaengNm);
        	this.dsMaster.setColumn(nRow, 'SINCHEONGJA_RES_NO', resNo);
        	this.dsMaster.setColumn(nRow, 'BALGEUP_MAESU', 1);
        	this.dsMaster.setColumn(nRow, 'BALGEUP_GBCD', '0'); // 0: 미발급, 1: 발급
        	this.dsMaster.setColumn(nRow, 'SEQ', seq);
        	this.dsMaster.setColumn(nRow, 'SCORE_TYPE', scoreType); // 성적증명서 타입

        	if (this.dsCert.getColumn(0, "CERT_LANG") == '1')
        	{
        		this.dsMaster.setColumn(nRow, 'DANGA', 500);
        		this.dsMaster.setColumn(nRow, 'GEUMAEK', 500);
        	}
        	else
        	{
        		this.dsMaster.setColumn(nRow, 'DANGA', 1000);
        		this.dsMaster.setColumn(nRow, 'GEUMAEK', 1000);
        	}
        };

        // 증명서 추가 순서 구하는 함수
        this.fn_Seq = function ()
        {
        	var rCnt = this.dsMaster.rowcount;
        	if (rCnt == 0)
        	{
        		 return 1;
        	}
        	else
        	{
        		var seq = nexacro.toNumber(this.dsMaster.getColumn(rCnt-1, "SEQ")) + 1;
        		return seq;
        	}
        };

        // 출력물 미리보기
        this.fn_Preview = function(nRow)
        {
        	this.dsTemp.clearData();
        	var row = this.dsTemp.addRow();
        	this.dsTemp.copyRow(row, this.dsMaster, nRow);

        	this.fn_Cert('1');
        };

        // 그리드 내 출력 버튼 실행 함수
        this.fn_Print = function ()
        {
        	this.fn_InsertCert();
        	this.fn_Cert('0'); // 0: 미리보기x, 1: 미리보기o
        };

        // 그리드 내 재출력 버튼 실행 함수
        this.fn_RePrint = function (nRow)
        {
        	this.dsTemp.clearData();
        	var row = this.dsTemp.addRow();
        	this.dsTemp.copyRow(row, this.dsMaster, nRow);
        	this.fn_Cert('0'); // 0: 미리보기x, 1: 미리보기o
        };

        // 증명서 호출
        this.fn_Cert = function(previewYn , multiYn)
        {
        	var crfFile = []; // 출력물 경로 담는 배열 => app.gfn_commonUtils_report의 첫번째 인자 값을 위함
        	var obj = new Object(); // 각 출력물 파라미터 담는 object => app.gfn_commonUtils_report의 두번째 인자 값을 위함
        	var PG_CD = objApp.gv_cutPrgId;

        	var certKind = '';
        	var certLang = '';
        	var sincheongGb = '';
        	var url = '';

        	var HAKBEON = '';
        	var JEOPSU_NO = '';
        	var SINCHEONG_DT = '';

        	for (var i = 0; i < this.dsTemp.rowcount; i++)
        	{
        		certKind = this.dsTemp.getColumn(i, 'JEUNGMYEONGSEO_KIND');
        		certLang = this.dsTemp.getColumn(i, 'JEUNGMYEONGSEO_GBCD');
        		sincheongGb = this.dsTemp.getColumn(i, 'SINCHEONG_GBCD');
        		url = '';
        		HAKBEON = this.dsTemp.getColumn(i, 'HAKBEON');
        		JEOPSU_NO = this.dsTemp.getColumn(i, 'JEOPSU_NO');
        		SINCHEONG_DT = this.dsTemp.getColumn(i, 'SINCHEONG_DT');

        		switch(certKind) {

        			case '01' :   // 학적부
        					url = 'US04/US04_2010401_M_01_' + certLang + '_'  ;
        					if (previewYn == '1')
        					{
        						url += 'PREVIEW.crf';
        					}
        					else
        					{
        						url += sincheongGb + '.crf';
        					}
        				break;
        			case '02' :  // 성적
        					url = 'US04/US04_2010401_M_02_' + certLang + '_'  ;
        					if (previewYn == '1')
        					{
        						url += 'PREVIEW.crf';
        					}
        					else
        					{
        						if (certLang == '2')
        						{
        							url += 'B.crf';
        						}
        						else
        						{
        							url += sincheongGb + '.crf';
        						}
        					}
        				break;
        			case '10' : // 재학
        					if (certLang == '1')
        					{
        						url = 'US04/US04_2010401_M_10_' + certLang + '_' + sincheongGb +'.crf';
        					}
        					if (certLang == '2')
        					{
        						url = 'US04/US04_2010401_M_10_' + certLang + '_A.crf';
        					}
        				break;
        			case '20' : // 휴학
        					url = 'US04/US04_2010401_M_20_' + certLang + '_' + sincheongGb +'.crf';
        				break;
        			case '30' : // 제적
        					url = 'US04/US04_2010401_M_30_' + certLang + '_' + sincheongGb +'.crf';
        				break;
        			case '50' : // 졸업
        					url = 'US04/US04_2010401_M_50_' + certLang + '_' + sincheongGb +'.crf';
        				break;
        			case '51' : // 졸업예정
        					url = 'US04/US04_2010401_M_51_' + certLang + '_' + sincheongGb +'.crf';
        				break;
        		}
        		crfFile.push(url);
        		url=url.replace("US04/", "");
        		url=url.replace(".crf", "");

        		var param = new Object();

        		param.HAKBEON = HAKBEON;
        		param.JEOPSU_NO = JEOPSU_NO;
        		param.SINCHEONG_DT = SINCHEONG_DT;
        		param.JEUNGMYEONGSEO_KIND = certKind;
        		param.JEUNGMYEONGSEO_GBCD = certLang;
        		param.SINCHEONG_GBCD = sincheongGb;
        		param.PG_CD = PG_CD;

        		if (sincheongGb == 'C') // fax
        		{
        			param.DAMDANGJA = objApp.gds_userInfoDb.getColumn(0,"USER_NM");
        			param.TEL_NO = '061)270-2513';
        		}

        		if (certKind == '01')
        		{
        			var domain = location.hostname;

        			if (domain.trim() == 'localhost')
        			{
        				domain = 'mstis.dev.codefarm.co.kr';
        			}

        			param.DOMAIN = domain;
        		}

        		if (certKind == '02')
        		{
        			var scoreType = this.dsMaster.getColumn(i, 'SCORE_TYPE');
        			param.SCORE_TYPE = scoreType;
        		}

        		if (certKind != '01' && certKind != '02' && previewYn == '1')
        		{
        			param.PREVIEW = '1';
        		}
        		if(multiYn)
        		{
        			obj[url+'.'+i] = param;
        		}
        		else
        		{
        			obj[url] = param;
        		}

        	}

        	var crfUrl = crfFile.join(',') + '';

        	if (multiYn)
        	{
        		this.gfn_commonUtils_report(crfUrl,  obj);
        		return false;
        	} else
        	{
        		if (previewYn == '1')
        		{
        			this.gfn_commonUtils_report(crfUrl,  obj);
        			return false;
        		}
        		if (previewYn == '0')
        		{
        			this.gfn_commonUtils_report(crfUrl,  obj);
        			return false;
        		}
        	}
        }

        // 발급 상태 변경(미출력 -> 출력)
        this.fn_AlterBalgeup = function()
        {
            if(this.dsMaster.findRow("CHK",1) == -1)
            {
                this.dsMaster.setColumn(this.dsMaster.rowposition, 'BALGEUP_GBCD', 1);
            }
        	else
        	{
        		for(var i=0; i<this.dsMaster.rowcount; i++)
        		{
        			if(this.dsMaster.getColumn(i,"CHK") == "1")
        			{
        				if (this.dsMaster.getColumn(i, "BALGEUP_GBCD") == 0)
        				{
        					this.dsMaster.setColumn(i, 'BALGEUP_GBCD', 1);
        				}
        			}
        		}
        	}
        };

        /**********************************************************************
                10. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 체크
         */
        this.grdMaster_onheadclick = function(obj,e)
        {
            if(e.cell == this.grdMaster.getBindCellIndex("body","CHK"))
            {
                this.gfn_checkAll(obj, e);
            }
        };

        /**
         *      그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj,e)
        {
            if(e.cell != this.grdMaster.getBindCellIndex("body","CHK") && e.cell != 1)
            {
                this.gfn_gridSort(obj,e);
            }
        };

        // ds_input 컬럼 변경시
        this.ds_input_oncolumnchanged = function(obj,e)
        {
            // 팝업 명 삭제 시 코드 초기화
        	if (e.columnid == "HAKSAENG_NM") {
        	   if (this.gfn_isNull(e.newvalue)) {
        	       obj.setColumn(obj.rowposition, "HAKBEON", "");
        		   this.fn_Reset();
        	   }
        	   /*
        	   else {
        			if (e.oldvalue != e.newvalue)
        			{
        				this.fn_Reset();
        				this.fn_setCallHakbeonPopup();
        			}
        	   }
        	   */
        	}
        };

        // 국문 클릭시
        this.div2_btnKor_onclick = function(obj,e)
        {
        	this.fn_Language('1');
        };

        // 영문 클릭시
        this.div2_btnEng_onclick = function(obj,e)
        {
        	this.fn_Language('2');
        };

        // 그리드 내 버튼 클릭시
        this.grdMaster_oncellclick = function(obj,e)
        {
        	// 삭제
        	if (e.col == 11)
        	{
        		this.dsMaster.deleteRow(e.row);
        	}

        	// 미리보기
        	if (e.col == 12)
        	{
        		this.fn_Preview(e.row);
        	}

        	// 출력
        	if (e.col == 13)
        	{
        		var balgeupYn = this.dsMaster.getColumn(e.row, 'BALGEUP_GBCD');
        		if (balgeupYn == 1)
        		{
        			this.alert("이미 발급된 증명서 입니다. 재출력 버튼을 이용해주세요.");
        			return false;
        		}
        		else
        		{
        			var jeungmyeongseoNm = obj.getCellText(e.row, 2);

        			var result = this.gfn_confirm(jeungmyeongseoNm + "를 출력하시겠습니까?", "저장","", "question" );
        			if(result == 0)
        			{
        				return false;
        			}

        			this.dsTemp.clearData();
        			var nRow = this.dsTemp.addRow();
        			this.dsTemp.copyRow(nRow, this.dsMaster, e.row);
        			this.fn_Print();
        		}
        	}

        	// 재출력
        	if (e.col == 14)
        	{
        		this.fn_RePrint(e.row);
        	}
        };

        // 초기화버튼 클릭시
        this.btnReset_onclick = function(obj,e)
        {
        	this.dsMaster.clearData();
        };

        // 발급매수 변경시 단가, 금액 재조정
        this.dsMaster_onvaluechanged = function(obj,e)
        {
        	if (e.columnid == 'BALGEUP_MAESU')
        	{
        		var DANGA = this.dsMaster.getColumn(e.row, 'DANGA');
        		var BALGEUP_MAESU = this.dsMaster.getColumn(e.row, 'BALGEUP_MAESU');
        		var GEUMAEK = DANGA * BALGEUP_MAESU;

        		this.dsMaster.setColumn(e.row, 'GEUMAEK', GEUMAEK);
        	}
        };

        // 학적정보 div의 발급구분 radio의 값에 따라 컨트롤
        this.div1_rdoBalgeup_onitemchanged = function(obj,e)
        {
        	var balgeupGb = this.dsHakjeok.getColumn(0, "BALGEUP_BULGA_YN");

        	if (balgeupGb == '1' || balgeupGb == '')
        	{
        		this.div2.form.btnKor.set_enable(false);
        		this.div2.form.btnEng.set_enable(false);
        	}
        	else
        	{
        		this.div2.form.btnKor.set_enable(true);
        		this.div2.form.btnEng.set_enable(true);
        	}
        };

        /**********************************************************************
                13. 팝업
        ***********************************************************************/
        this.divSearch_btnSearchHakbeon_onclick = function(obj,e)
        {
        	this.fn_Reset();
        	this.fn_setCallHakbeonPopup();
        };

        // 학번 popup
        this.fn_setCallHakbeonPopup = function()
        {
        	this.dsHakbeon.clearData();
        	var hakbeonNm = this.divSearch.form.edtSearchNm.value;
        	var birthday = this.divSearch.form.calSearchBirthday.value;
        	this.ds_input1.setColumn(this.ds_input1.rowposition, "HAKBEON_NM", hakbeonNm);
        	this.ds_input1.setColumn(this.ds_input1.rowposition, "BIRTHDAY", birthday);

        	var strSvc 		= "SearchHakbeon";
        	var strUrl 		= "/prj/com/Retrieve_P04.do";
        	var strInDs  	= "ds_input=ds_input1";
        	var strOutDs 	= "dsHakbeon=dsMaster";
        	var strArg 		= "";
        	var GBV_MENUID    = objApp.gv_cutPrgId;
        	if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
        	{
        	  strArg = "GBV_MENUID=" + GBV_MENUID + " " + strArg;
        	}
        	var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        	var strASync    = false;			//생략이나 공백일시에는 ASync=true,싱크시는 false로

        	this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);

        	if(this.dsHakbeon.rowcount == 1)
        	{
        		this.ds_input.setColumn(0, "HAKBEON", this.dsHakbeon.getColumn(0,"HAKBEON"));
        		this.ds_input.setColumn(0, "HAKSAENG_NM", this.dsHakbeon.getColumn(0,"HAKSAENG_NM"));
        		this.ds_input.setColumn(0, "BIRTHDAY", this.dsHakbeon.getColumn(0,"BIRTHDAY"));

        		this.dsHakjeok.setColumn(0, "HAKBEON", this.dsHakbeon.getColumn(0,"HAKBEON"));
        		this.dsHakjeok.setColumn(0, "HAKGWA_CD", this.dsHakbeon.getColumn(0,"HAKGWA_CD"));
        		this.dsHakjeok.setColumn(0, "HAKGWA_NM", this.dsHakbeon.getColumn(0,"HAKGWA_NM"));
        		this.dsHakjeok.setColumn(0, "JEONGONG_CD", this.dsHakbeon.getColumn(0,"JEONGONG_CD"));
        		this.dsHakjeok.setColumn(0, "JEONGONG_NM", this.dsHakbeon.getColumn(0,"JEONGONG_NM"));
        		this.dsHakjeok.setColumn(0, "HAKNYEON", this.dsHakbeon.getColumn(0,"HAKNYEON"));
        		this.dsHakjeok.setColumn(0, "HAKSAENG_NM", this.dsHakbeon.getColumn(0,"HAKSAENG_NM"));
        		this.dsHakjeok.setColumn(0, "RES_NO", this.dsHakbeon.getColumn(0,"RES_NO"));
        		this.dsHakjeok.setColumn(0, "HP_NO", this.dsHakbeon.getColumn(0,"HP_NO"));
        		this.dsHakjeok.setColumn(0, "BIRTHDAY", this.dsHakbeon.getColumn(0,"BIRTHDAY"));
        		this.dsHakjeok.setColumn(0, "HAKJEOK_STCD", this.dsHakbeon.getColumn(0,"HAKJEOK_STCD"));
        		this.dsHakjeok.setColumn(0, "HAKJEOK_SANGTAE_NM", this.dsHakbeon.getColumn(0,"HAKJEOK_SANGTAE_NM"));
        		this.dsHakjeok.setColumn(0, "GYOJIK_ISU_YN", this.dsHakbeon.getColumn(0,"GYOJIK_ISU_YN"));
        		this.dsHakjeok.setColumn(0, "IPHAK_DT", this.dsHakbeon.getColumn(0,"IPHAK_DT"));
        		this.dsHakjeok.setColumn(0, "JOLEOP_DT", this.dsHakbeon.getColumn(0,"JOLEOP_DT"));
        		this.dsHakjeok.setColumn(0, "BALGEUP_BULGA_YN", this.dsHakbeon.getColumn(0,"BALGEUP_BULGA_YN"));
        		this.dsHakjeok.setColumn(0, "FILE_PATH", this.dsHakbeon.getColumn(0,"FILE_PATH"));

        		if (!this.gfn_isNull(this.dsHakbeon.getColumn(0,"JEONGONG_NM")))
        		{
        			this.dsHakjeok.setColumn(0, "HAK_JEON", this.dsHakbeon.getColumn(0,"HAKGWA_NM") + '/' + this.dsHakbeon.getColumn(0,"JEONGONG_NM"));
        		}
        		else
        		{
        			this.dsHakjeok.setColumn(0, "HAK_JEON", this.dsHakbeon.getColumn(0,"HAKGWA_NM"));
        		}

        		this.fn_PicLoad(); // 학생사진 set
        		this.fn_BtnEnable(); // 학적상태에 따라 증명서 종류 버튼 활성화
        	}
        	else
        	{
        		var oArg = {hakbeonNm:hakbeonNm, birthday:birthday, menuId:objApp.gv_cutPrgId};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";
        		this.gfn_openPopup( "hakbeon","com::COMM_P04.xfdl",oArg,sPopupCallBack,oOption);
        	}
        }

        this.divSearch_calSearchBirthday_onchanged = function(obj,e)
        {
        	this.fn_setCallHakbeonPopup();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.div1.form.rdoBalgeup.addEventHandler("onitemchanged",this.div1_rdoBalgeup_onitemchanged,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("oncellclick",this.grdMaster_oncellclick,this);
            this.divSearch.form.btnSearchHakbeon.addEventHandler("onclick",this.divSearch_btnSearchHakbeon_onclick,this);
            this.divSearch.form.calSearchBirthday.addEventHandler("onchanged",this.divSearch_calSearchBirthday_onchanged,this);
            this.div2.form.btnKor.addEventHandler("onclick",this.div2_btnKor_onclick,this);
            this.div2.form.btnEng.addEventHandler("onclick",this.div2_btnEng_onclick,this);
            this.div2.form.btn10.addEventHandler("onclick",this.fn_CertBtn,this);
            this.div2.form.btn20.addEventHandler("onclick",this.fn_CertBtn,this);
            this.div2.form.btn51.addEventHandler("onclick",this.fn_CertBtn,this);
            this.div2.form.btn50.addEventHandler("onclick",this.fn_CertBtn,this);
            this.div2.form.btn30.addEventHandler("onclick",this.fn_CertBtn,this);
            this.div2.form.btn40.addEventHandler("onclick",this.fn_CertBtn,this);
            this.div2.form.btn01.addEventHandler("onclick",this.fn_CertBtn,this);
            this.div2.form.btn02.addEventHandler("onclick",this.fn_CertBtn,this);
            this.btnReset.addEventHandler("onclick",this.btnReset_onclick,this);
            this.dsMaster.addEventHandler("onvaluechanged",this.dsMaster_onvaluechanged,this);
            this.ds_input.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
            this.dsCert.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsCert.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
        };
        this.loadIncludeScript("US04_2010401_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
