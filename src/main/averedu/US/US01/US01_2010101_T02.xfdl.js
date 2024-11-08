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
            this.set_titletext("입학정보");
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
            obj._setContents("<ColumnInfo><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"10\"/><Column id=\"MOJIP_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"GYOGWA_GWAJEONG_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"GYOWON_JAGYEOK_NO\" type=\"STRING\" size=\"20\"/><Column id=\"GYOWON_JEUNGSEO_NO\" type=\"STRING\" size=\"20\"/><Column id=\"IPHAK_DT\" type=\"STRING\" size=\"8\"/><Column id=\"IPHAK_HAKGWA_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"GOGYOGYEYEOL_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"CHULSINGOGYO_JOLEOP_DT\" type=\"STRING\" size=\"8\"/><Column id=\"CHULSINGOGYO_CD\" type=\"STRING\" size=\"10\"/><Column id=\"CHULSINGOGYO_NM\" type=\"STRING\" size=\"300\"/><Column id=\"CHULSINDAEHAK_NM\" type=\"STRING\" size=\"300\"/><Column id=\"CHULSINDAEHAK_HAKGWA_NM\" type=\"STRING\" size=\"200\"/><Column id=\"CHULSINDAEHAK_JOLEOP_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"JEONGWONNAEOE_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"IPHAK_JEONHYEONG_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"JOLEOP_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"JOLEOP_HAKGI_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"JOLEOP_DT\" type=\"STRING\" size=\"8\"/><Column id=\"JOLEOP_HOETSU\" type=\"STRING\" size=\"5\"/><Column id=\"JOLEOP_HAKGWA_SEOKCHA\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JOLEOP_HAKGWA_CHONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JOLEOP_JEONCHE_SEOKCHA\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JOLEOP_JEONCHE_CHONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JOLEOP_JEUNGSEO_NO\" type=\"STRING\" size=\"27\"/><Column id=\"HAKWI_DEUNGROK_NO1\" type=\"STRING\" size=\"68\"/><Column id=\"HAKWI_DEUNGROK_NO2\" type=\"STRING\" size=\"20\"/><Column id=\"HAKWI_CD1\" type=\"STRING\" size=\"65532\"/><Column id=\"INJEONG_HAKGI_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"INJEONG_HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PYEONIP_HAKNYEON\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_13_06","10","35","1221","28",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06","11","35","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("출신고교명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtChulsinGogyoNm","133","38","156","22",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00","291","35","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("출신고교코드");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtChulsinGogyoCd","413","38","156","22",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","7","10","153","22",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("학적기본정보");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00","571","35","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("고교졸업일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00","852","35","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("고교구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGogyoGb","975","38","156","22",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calGogyoJolubDt","693","38","156","22",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00","10","62","1221","28",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01","11","62","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("출신대학명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtChulsinDaehakNm","133","65","156","22",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_01","291","62","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("출신학과");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtChulsinHakgwa","413","65","156","22",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_01","571","62","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("대학졸업년도");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDaehakJolubYYYY","693","65","156","22",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_00","10","89","1221","28",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_00","11","89","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("편입학년");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPyeonibHaknyeon","133","92","156","22",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_01_00","291","89","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("인정학점");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtInjeongHakjeom","413","92","156","22",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_01_00","571","89","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("인정학기 수");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtInjeongHakgiCnt","693","92","156","22",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_01","10","151","1221","28",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02","11","151","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("교과과정적용");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGyogwaGwajeong","133","154","156","22",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","7","127","153","22",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("입학 정보");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_01","10","178","1221","28",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_01","11","178","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("모집구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtMojibGb","133","181","156","22",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_01_01","291","178","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("수험번호");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSuheomNo","413","181","156","22",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_01_01","571","178","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("정원구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJeongwonGb","693","181","156","22",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_00_00","10","205","1221","28",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_00_00","11","205","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("입학학과");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtIbhakHakgwa","133","208","156","22",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_01_00_00","291","205","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("모집전형");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtMojibjeonhyung","413","208","156","22",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_01_00_00","571","205","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("입학일자");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_color("blue");
            this.addChild(obj.name, obj);

            obj = new Calendar("calIbhakDt","693","208","156","22",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_01_00","10","267","1221","28",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00","11","267","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("졸업년도");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJolubYYYY","133","270","156","22",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00_00","7","242","153","22",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("졸업 정보");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_01_00","10","294","1221","28",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_01_00","11","294","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("졸업학과석차");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJolubHakgwaSeokcha","133","297","67","22",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_01_01_00","291","294","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("졸업전체석차");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_00_00_00","10","321","1221","28",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_00_00_00","11","321","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("졸업증서번호");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJolubjeungNo","133","324","156","22",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_01_00_00_00","291","321","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("학위등록번호");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHakwiDeungrokNo","413","324","156","22",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_01_00_00_00","571","321","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("영문학위등록번호");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00_00","291","266","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("졸업학기");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJolubHakgi","413","269","156","22",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_01_00_00_00_00","571","267","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("졸업일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Calendar("calJolubDt","693","270","156","22",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00_00_00","852","267","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("졸업회차");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_02_06_01_00_00_00","975","270","156","22",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJolubHakgwaChongSeokcha","222","297","67","22",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","203","301","17","15",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("/");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJolubjeoncheSeokcha","413","297","67","22",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","482","301","17","15",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_text("/");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJolubJeoncheChongSeokcha","502","297","67","22",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEHakwiDeungrokNo","693","324","156","22",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_00_00_00_00","10","348","1221","28",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_00_00_00_00","11","348","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_text("학위코드");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHakwiCd","133","351","436","22",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_00_00_00_01","10","375","1221","28",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_00_00_00_01","11","375","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_text("교원자격번호");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGyowonJagyeokNo","133","378","156","22",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_01_00_00_00_00","291","375","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_text("교원증서번호");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGyowonJeungNo","413","378","156","22",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","-1","10","437",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,"-1","10","437","399",null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","5","27","320","8",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","313","0","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_00","5","143","320","8",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","313","116","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_00_00","5","259","320","8",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","283","232","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("입학정보");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item14","cboJuya00","value","ds_input","DAEHAK_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","edtChulsinGogyoNm","value","dsMaster","CHULSINGOGYO_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtChulsinGogyoCd","value","dsMaster","CHULSINGOGYO_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edtGogyoGb","value","dsMaster","GOGYOGYEYEOL_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","calGogyoJolubDt","value","dsMaster","CHULSINGOGYO_JOLEOP_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edtChulsinDaehakNm","value","dsMaster","CHULSINDAEHAK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edtChulsinHakgwa","value","dsMaster","CHULSINDAEHAK_HAKGWA_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edtDaehakJolubYYYY","value","dsMaster","CHULSINDAEHAK_JOLEOP_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edtPyeonibHaknyeon","value","dsMaster","PYEONIP_HAKNYEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edtInjeongHakjeom","value","dsMaster","INJEONG_HAKJEOM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edtInjeongHakgiCnt","value","dsMaster","INJEONG_HAKGI_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edtGyogwaGwajeong","value","dsMaster","GYOGWA_GWAJEONG_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","edtMojibGb","value","dsMaster","MOJIP_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","edtSuheomNo","value","dsMaster","SUHEOM_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","edtJeongwonGb","value","dsMaster","JEONGWONNAEOE_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","edtIbhakHakgwa","value","dsMaster","IPHAK_HAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","edtMojibjeonhyung","value","dsMaster","IPHAK_JEONHYEONG_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","calIbhakDt","value","dsMaster","IPHAK_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","edtJolubYYYY","value","dsMaster","JOLEOP_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","edtJolubHakgwaSeokcha","value","dsMaster","JOLEOP_HAKGWA_SEOKCHA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","edtJolubjeungNo","value","dsMaster","JOLEOP_JEUNGSEO_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","edtHakwiDeungrokNo","value","dsMaster","HAKWI_DEUNGROK_NO1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","edtJolubHakgi","value","dsMaster","JOLEOP_HAKGI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","calJolubDt","value","dsMaster","JOLEOP_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","edtJolubHakgwaChongSeokcha","value","dsMaster","JOLEOP_HAKGWA_CHONGWON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","edtJolubjeoncheSeokcha","value","dsMaster","JOLEOP_JEONCHE_SEOKCHA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","edtJolubJeoncheChongSeokcha","value","dsMaster","JOLEOP_JEONCHE_CHONGWON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","edtEHakwiDeungrokNo","value","dsMaster","HAKWI_DEUNGROK_NO2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","edtHakwiCd","value","dsMaster","HAKWI_CD1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","edtGyowonJagyeokNo","value","dsMaster","GYOWON_JAGYEOK_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","edtGyowonJeungNo","value","dsMaster","GYOWON_JEUNGSEO_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","edt_02_06_01_00_00_00","value","dsMaster","JOLEOP_HOETSU");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("US01_2010101_T02.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): US01_2010101_T02.xfdl(학적기본관리 관리(조회))
        * 작 성         일 명: jiback
        * 작 성         일 자: 2021/09/02
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
        };

        /**********************************************************************
                04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
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
                    case "Ret":
                            this.fn_PostRet();
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
        this.fn_Ret = function(hakbeon)
        {
        	this.ds_input.setColumn(0, "HAKBEON", hakbeon);

            var strSvc      = "Ret";
            var strUrl      = "/prj/US/US01/Retrieve_2010101_T02.do";
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

        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.stc_12_06_00_00_00.addEventHandler("onclick",this.tab_00_Tabpage2_stc_12_06_00_00_00_onclick,this);
        };
        this.loadIncludeScript("US01_2010101_T02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
