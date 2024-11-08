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
            this.set_titletext("신입생");
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
            obj._setContents("<ColumnInfo><Column id=\"STNT_NUMB\" type=\"STRING\" size=\"10\"/><Column id=\"STNT_KNAM\" type=\"STRING\" size=\"50\"/><Column id=\"ACPT_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"ROOM_GUBN\" type=\"STRING\" size=\"20\"/><Column id=\"BLNG_DEPT\" type=\"STRING\" size=\"201\"/><Column id=\"STNT_SEXC\" type=\"STRING\" size=\"1\"/><Column id=\"STNT_GRAD\" type=\"STRING\" size=\"1\"/><Column id=\"AVRG_MARK\" type=\"STRING\" size=\"65532\"/><Column id=\"TOTL_MARK\" type=\"STRING\" size=\"65532\"/><Column id=\"RWPN_SCOR\" type=\"STRING\" size=\"65532\"/><Column id=\"RWPN_COLOR\" type=\"STRING\" size=\"11\"/><Column id=\"TELE_NUMB\" type=\"STRING\" size=\"65532\"/><Column id=\"CELL_NUMB\" type=\"STRING\" size=\"65532\"/><Column id=\"CMPN_ADDR\" type=\"STRING\" size=\"601\"/><Column id=\"PASS_GUBN\" type=\"STRING\" size=\"2\"/><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"SCHL_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"SCHL_SMST\" type=\"STRING\" size=\"2\"/><Column id=\"DIFF_SEQU\" type=\"STRING\" size=\"2\"/><Column id=\"RECM_PRSN\" type=\"STRING\" size=\"100\"/><Column id=\"STNT_GUBN\" type=\"STRING\" size=\"1\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"35\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"SCHL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SCHL_SMST\" type=\"STRING\" size=\"256\"/><Column id=\"STRT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ENDD_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ROOM_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"GENDER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"256\"/><Column id=\"STNT_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"DIFF_SEQU\" type=\"STRING\" size=\"256\"/><Column id=\"DAEHAK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"STNT_NUMB\" type=\"STRING\" size=\"15\"/><Column id=\"RWPN_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"RWPN_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"RWPN_SCOR\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"RWPN_GUBN\" type=\"STRING\" size=\"1\"/><Column id=\"RMRK_NOTE\" type=\"STRING\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inputDetail", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"STNT_NUMB\" type=\"STRING\" size=\"255\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDiffSequ", this);
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPassGubn", this);
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"CODE_NM\">합격</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"CODE_NM\">예비</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNamyeo", this);
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE_NM\"/></Row><Row><Col id=\"CODE\">M</Col><Col id=\"CODE_NM\">남자</Col></Row><Row><Col id=\"CODE\">F</Col><Col id=\"CODE_NM\">여자</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInsil", this);
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHaknyeon", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"256\"/><Column id=\"CAMPUS_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"DAEHAK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DAEHAK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"256\"/><Column id=\"HAKNYEON_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JINGEUP_HAKNYEON\" type=\"STRING\" size=\"256\"/><Column id=\"JINGEUP_SYS_SAJEONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JINGEUP_ADMIN_SAJEONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"BUNBAN\" type=\"STRING\" size=\"256\"/><Column id=\"BUNBAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKSAENG_ENM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKSAENG_CNM\" type=\"STRING\" size=\"256\"/><Column id=\"RES_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKJEOK_STCD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKJEOK_SANGTAE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BYEONDONG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BYEONDONG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BYEONDONG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"JIDOGYOSU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JIDOGYOSU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKSEOKSA_TONGHAPGWAJEONG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKNYEONJE_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"GENDER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GENDER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GUKJEOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GYOJIK_ISU_YN\" type=\"STRING\" size=\"256\"/><Column id=\"GYOJIK_POGI_YN\" type=\"STRING\" size=\"256\"/><Column id=\"GYOJIK_POGI_DT\" type=\"STRING\" size=\"256\"/><Column id=\"GYOJIK_POGI_SAYU\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_HAKJEOM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"OEGUKIN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DONGPO_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BALSONGJUSO_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"HP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"POST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR1\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"PWD\" type=\"STRING\" size=\"256\"/><Column id=\"BOHOJA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BOHOJA_GWANGYE_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"BOHOJA_TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BOHOJA_HP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BOHOJA_POST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BOHOJA_ADDR1\" type=\"STRING\" size=\"256\"/><Column id=\"BOHOJA_ADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"BOHOJA_JIKEOP\" type=\"STRING\" size=\"256\"/><Column id=\"IPHAK_DT\" type=\"STRING\" size=\"256\"/><Column id=\"IPHAK_HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GOGYOGYEYEOL_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"CHULSINGOGYO_JOLEOP_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"CHULSINGOGYO_JOLEOP_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CHULSINGOGYO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHULSINGOGYO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NEIS_GOGYO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHULSINGOGYO_GUKJEOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHULSINDAEHAK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHULSINDAEHAK_HAKGWA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHULSINDAEHAK_JOLEOP_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"CHULSINDAEHAK_JOLEOP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"DAEHAK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGWONNAEOE_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"IPHAK_JEONHYEONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"IPHAK_TYCD\" type=\"STRING\" size=\"256\"/><Column id=\"IPHAK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"PYEONIP_HAKNYEON\" type=\"STRING\" size=\"256\"/><Column id=\"JOLEOP_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"JOLEOP_HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"JOLEOP_DT\" type=\"STRING\" size=\"256\"/><Column id=\"JOLEOP_HOETSU\" type=\"STRING\" size=\"256\"/><Column id=\"HAKWI_DEUNGROK_NO1\" type=\"STRING\" size=\"256\"/><Column id=\"HAKWI_DEUNGROK_NO2\" type=\"STRING\" size=\"256\"/><Column id=\"HAKWI_CD1\" type=\"STRING\" size=\"256\"/><Column id=\"HAKWI_CD2\" type=\"STRING\" size=\"256\"/><Column id=\"BALGEUP_BULGA_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BALGEUP_BULGA_SAYU\" type=\"STRING\" size=\"256\"/><Column id=\"BALGEUP_BULGA_DT\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01_02_00_00_00_00","0","-1","10","437",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_00","5","0","670","8",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","10","8",null,"300","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj.set_fillareatype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"145\"/><Column size=\"30\"/><Column size=\"65\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" rowspan=\"2\" text=\"No\"/><Cell col=\"2\" rowspan=\"2\" text=\"차수\" textAlign=\"center\"/><Cell col=\"3\" rowspan=\"2\" text=\"expr:&quot;합격&quot; + String.fromCharCode(13) + &quot;유무&quot;\" textAlign=\"center\"/><Cell col=\"4\" rowspan=\"2\" text=\"신청일자\" textAlign=\"center\"/><Cell col=\"5\" rowspan=\"2\" text=\"인실\" textAlign=\"center\"/><Cell col=\"6\" rowspan=\"2\" text=\"수험번호\" textAlign=\"center\"/><Cell col=\"7\" rowspan=\"2\" text=\"성명\" textAlign=\"center\"/><Cell col=\"8\" rowspan=\"2\" text=\"학과\" textAlign=\"center\"/><Cell col=\"9\" rowspan=\"2\" text=\"성별\" textAlign=\"center\"/><Cell col=\"10\" rowspan=\"2\" text=\"직전&#13;&#10;학기성적\" textAlign=\"center\"/><Cell col=\"11\" rowspan=\"2\" text=\"총평점\" textAlign=\"center\"/><Cell col=\"12\" rowspan=\"2\" text=\"상벌점\" textAlign=\"center\"/><Cell col=\"13\" rowspan=\"2\" text=\"전화번호1\" textAlign=\"center\"/><Cell col=\"14\" rowspan=\"2\" text=\"전화번호2\" textAlign=\"center\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" editmaxlength=\"1\"/><Cell col=\"1\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"2\" text=\"bind:DIFF_SEQU\" displaytype=\"combotext\" combodataset=\"dsDiffSequ\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"3\" text=\"bind:PASS_GUBN\" combodataset=\"dsPassGubn\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" displaytype=\"combotext\"/><Cell col=\"4\" text=\"bind:ACPT_DATE\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"5\" text=\"bind:ROOM_GUBN\"/><Cell col=\"6\" text=\"bind:STNT_NUMB\"/><Cell col=\"7\" text=\"bind:STNT_KNAM\"/><Cell col=\"8\" text=\"bind:BLNG_DEPT\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:STNT_SEXC\" combodataset=\"dsNamyeo\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" displaytype=\"combotext\"/><Cell col=\"10\" text=\"bind:AVRG_MARK\"/><Cell col=\"11\" text=\"bind:TOTL_MARK\" displaytype=\"number\"/><Cell col=\"12\" text=\"bind:RWPN_SCOR\" displaytype=\"number\"/><Cell col=\"13\" text=\"bind:TELE_NUMB\"/><Cell col=\"14\" text=\"bind:CELL_NUMB\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","10","311","80","31",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","653","307","35","35",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01","0","335","1640","8",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgView","10","343","120","160",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_stretch("fixaspectratio");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_01","135","343","580","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00","135","343","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("신청일");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Calendar("calAcptDate","268","346","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00_00","425","343","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("신청인실");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboRoomGubn","558","346","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_innerdataset("dsInsil");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_01_00","135","370","580","28",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00_01","135","370","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("학번");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGyojikwonNo00","268","373","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00_01_00","425","370","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGyojikwonNo00_00","558","373","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_01_00_00","135","397","580","28",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00_01_01","135","397","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("소속");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_01_00_00_00","135","424","580","28",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_01_00_00_00_00","135","451","580","28",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_01_00_00_00_00_00","135","478","580","28",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_01_00_00_00_00_00_00","135","505","580","28",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGyojikwonNo00_01","268","400","444","22",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00_01_01_00","135","424","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("성별");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00_01_01_00_00","135","451","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("직전학기성적");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00_01_01_00_00_00","135","478","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("상벌점");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_01_00_00_00_00_00_00_00","135","532","580","28",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00_01_01_00_00_00_00","135","505","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00_01_01_00_00_00_00_00","135","532","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("집주소");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","715","307","30",null,null,"0",null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("↑\r\n30\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJikjong00_00","268","427","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_innerdataset("dsNamyeo");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00_01_01_00_01","425","424","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("학년");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGyojikwonNo00_02","268","454","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00_01_01_00_00_01","425","451","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("총학점");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGyojikwonNo00_00_00_00","558","454","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGyojikwonNo00_02_00","268","481","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00_01_01_00_00_01_00","425","478","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("추천인");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtRecnPrsn","558","481","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGyojikwonNo00_02_00_00","268","508","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00_01_01_00_00_01_00_00","425","505","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("HP");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGyojikwonNo00_00_00_00_00_00","558","508","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGyojikwonNo00_01_00","268","535","444","22",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","90","314","200","24",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJikjong00_00_00","558","427","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_innerdataset("dsHaknyeon");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("신입생");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","calAcptDate","value","dsMaster","ACPT_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","cboRoomGubn","value","dsMaster","ROOM_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edtGyojikwonNo00","value","dsMaster","STNT_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edtGyojikwonNo00_00","value","dsMaster","STNT_KNAM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edtGyojikwonNo00_01","value","dsMaster","BLNG_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","cboJikjong00_00","value","dsMaster","STNT_SEXC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edtGyojikwonNo00_02","value","dsMaster","AVRG_MARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edtGyojikwonNo00_02_00","value","dsMaster","RWPN_SCOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edtRecnPrsn","value","dsMaster","RECM_PRSN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","edtGyojikwonNo00_02_00_00","value","dsMaster","TELE_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","edtGyojikwonNo00_01_00","value","dsMaster","CMPN_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","cboJikjong00_00_00","value","dsMaster","STNT_GRAD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
            this._addPreloadList("data","","dsDetail");
            this._addPreloadList("data","","dsDiffSequ");
            this._addPreloadList("data","","dsPassGubn");
            this._addPreloadList("data","","dsNamyeo");
            this._addPreloadList("data","","dsInsil");
        };
        
        // User Script
        this.registerScript("BH02_4080201_T02.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): BH02_4080201_T02.xfdl(신입생)
        * 작 성         일 명: 정진호
        * 작 성         일 자: 2022/10/06
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
        this.lvchkColidDs   = "ACPT_DATE$ROOM_GUBN"; // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs = "신청일$신청인실";

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
            var strDs    = "dsInsil|dsHaknyeon"; 	// 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00744|00060"; 	// 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "S|N"; 		// 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = ""; 			// 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId    = "Init";
        	// gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
        	// 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.gfn_CmmnMultiComboLoad(strDs, strLgcd, strComb, strOptn, svcId);
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
                            this.fn_PostformInit();
                        break;
                    case "singleInit":
                            this.fn_PostSingleInt();
                        break;
                    case "Ret":
                            this.fn_PostRet();
                        break;
                    case "Save":
                            this.fn_PostSave();
                        break;
                    case "Del":
                            this.fn_PostDel();
                        break;
                    default:
                        break;
                }
            }
        };

        //Popup callback영역
        this.fn_popupCallback = function(strId, strVal) {
        	switch(strId) {
        		case "ibsi" :
        				var sRtn = strVal.split(",");
        				if (sRtn[0] != "CLOSE") {
        					this.dsMaster.set_enableevent(false);
        					var nRow = this.dsMaster.insertRow();
        		            this.dsMaster.setColumn(nRow, "DIFF_SEQU", this.ds_input.getColumn(0, "DIFF_SEQU"));
        		            this.dsMaster.setColumn(nRow, "PASS_GUBN", "02");
        		            this.dsMaster.setColumn(nRow, "ACPT_DATE", this.gfn_getDate());
        		            this.dsMaster.setColumn(nRow, "STNT_NUMB", sRtn[0]); // 학번
        		            this.dsMaster.setColumn(nRow, "STNT_KNAM", sRtn[1]); // 성명
        		            this.dsMaster.setColumn(nRow, "HAKNYEON", sRtn[12]); // 학년
        		            this.dsMaster.setColumn(nRow, "ROOM_GUBN", "");
        		            this.dsMaster.setColumn(nRow, "STNT_GUBN", "1");
        		            this.dsMaster.setColumn(nRow, "SCHL_YEAR", this.ds_input.getColumn(0, "SCHL_YEAR"));
        		            this.dsMaster.setColumn(nRow, "SCHL_SMST", this.ds_input.getColumn(0, "SCHL_SMST"));
        					this.dsMaster.set_enableevent(true);
        				}
        			break;
        		default:
        			break;
        	}
        };

        /**********************************************************************
                05. 조회 함수 선언(마스터 함수)
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreRet = function(obj)
        {
            // 조회조건 셋팅
        	this.ds_input.copyData(obj);
            return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_Ret = function(obj)
        {
            if(!this.fn_PreRet(obj))
            {
                return false;
            }
            var strSvc      = "Ret";
            var strUrl      = "/prj/BH/BH02/Retrieve_4080201_T02List.do";
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
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        };

        /**
         * 기능 : 조회 후 실행
         */
        this.fn_PostRet = function()
        {
            this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
        };

        /**********************************************************************
                06. 추가 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 추가 전 실행(기본체크사항)
         */
        this.fn_PreNew = function(obj)
        {
        	this.ds_input.copyData(obj);
            return true;
        };

        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_New = function(obj)
        {
            if(!this.fn_PreNew(obj))
            {
                return false;
            }

        	this.fn_setCallHakbeonPopup();

        };

        /**********************************************************************
                07. 삭제 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 삭제 버튼 실행
         */
        this.fn_PreDel = function()
        {
            //멀티삭제용도
            if(this.dsMaster.rowcount < 1 || this.dsMaster.findRow("CHK",1) == -1)
            {
                this.gfn_alert("삭제할 데이터가 없습니다.","삭제정보","","warning");
                return false;
            }
            var result = this.gfn_confirm( "현재선택행을 삭제하시겠습니까?", "삭제정보","","question" );

            if(result == 0)
            {
                return false;
            }

            //다중삭제 용도
            this.dsMaster.set_enableevent(false);
            for(var i=this.dsMaster.rowcount-1;i>-1;i--)
            {
                if(this.dsMaster.getColumn(i,"CHK") == "1" || this.dsMaster.getRowType(i) == 2)
                {
                    this.dsMaster.deleteRow(i);
                }
            }
            this.dsMaster.set_enableevent(true);

            //개별삭제시
            //this.dsMaster.deleteRow(this.dsMaster.rowposition);
            return true;
        };

        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.fn_Del = function()
        {
            if(!this.fn_PreDel())
            {
                return false;
            }
            var strSvc      = "Del";
            var strUrl      = "/prj/BH/BH02/Delete_4080201_T01List.do";
            var strInDs     = "dsMaster=dsMaster:u";
            var strOutDs    = "";
            var strArg      = "";
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;                                   //샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        };

        this.fn_PostDel = function()
        {
            this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
        };

        /**********************************************************************
                08. 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function()
        {
            if(this.dsMaster.rowcount > 0)
            {
                for(var i=0;i<this.dsMaster.rowcount; i++)
                {
                    if(this.dsMaster.getColumn(i,"CHK") == "0")
                    {
                        continue;
                    }
                    this.dsMaster.setColumn(i,"CHK","0");
                }
            }

            if(!this.gfn_isUpdate(this.dsMaster))
            {
                this.gfn_alert("변경된 이력이 없습니다.","저장정보","","question");
                return false;
            }

            // 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
            var chkFocusFlg = true;
            var result      = this.gfn_cmmnChkEssentialItem(this.dsMaster, this.lvchkColidDs, this.lvchkColNameDs, this.grdMaster, chkFocusFlg, this);

            if (result[0] != "success")
            {
                this.gfn_alert(result[0],"저장정보","","question");
                this.dsMaster.set_rowposition(result[1]); //데이터셋 변경
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
            var strSvc      = "Save";
            var strUrl      = "/prj/BH/BH02/Save_4080201_T01List.do";
            var strInDs     = "ds_input=ds_input:a ";
                strInDs    += "dsMaster=dsMaster:u";
            var strOutDs    = "dsMaster=dsMaster";
            var strArg      = "";
            var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        };
        /**
         *      기능 : 저장시 후처리
         */
        this.fn_PostSave = function()
        {
            this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
        };

        /**********************************************************************
                09. 초기화
        ***********************************************************************/
        /**********************************************************************
                10. 출력 함수 선언
        ***********************************************************************/
        /**********************************************************************
                11. ExcelDnwn 엑셀로 출력
        ***********************************************************************/
        /**********************************************************************
                12. 팝업
        ***********************************************************************/
        /**
         * 학생 검색 팝업
         */
        this.fn_setCallHakbeonPopup = function()
        {
        	var oArg = {};
        	var oOption = {};
        	var sPopupCallBack = "fn_popupCallback";
        	this.gfn_openPopup("ibsi","com::COMM_P12.xfdl",oArg,sPopupCallBack,oOption);
        };

        /**********************************************************************
                13. Get, Set Method
        ***********************************************************************/
        /**********************************************************************
                14. 기타 Control Event
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

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
            //return this.gfn_isUpdate(this.dsMaster);
        };

        this.dsMaster_onrowposchanged = function(obj,e)
        {
        	this.fn_picLoad(); // 학생사진 set
        };

        // 사진 set
        this.fn_picLoad = function()
        {
        	var xhttp = new XMLHttpRequest();
        	xhttp.targetObj = this.dsMaster;
        	xhttp.targetComp = this.imgView;
        	xhttp.onreadystatechange = function() {
        		if (this.readyState == 4 && this.status == 200) {
        			xhttp.targetComp.set_image(xhttp.targetObj.getColumn(xhttp.targetObj.rowposition, 'FILE_PATH'));
        		} else {
        			xhttp.targetComp.set_image('https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Noimage.svg/739px-Noimage.svg.png');
        		}
        	};
        	xhttp.open("GET", this.dsMaster.getColumn(this.dsMaster.rowposition, 'FILE_PATH'), false);
        	xhttp.send();
        };

        this.grdMaster_onselectchanged = function(obj,e) {
        	var rowType = this.dsMaster.getRowType(obj.currentrow);
        	if (rowType == 2) {
        		this.calAcptDate.set_readonly(false);
        		this.cboRoomGubn.set_readonly(false);
        		this.edtRecnPrsn.set_readonly(false);
        	} else {
        		this.calAcptDate.set_readonly(true);
        		this.cboRoomGubn.set_readonly(false);
        		this.edtRecnPrsn.set_readonly(false);
        	}
        };

        // 합격처리
        this.fn_Habgyeog = function() {
        	// 체크한 학생만 처리
        	var count = 0;
        	for (var i = 0; i < this.dsMaster.rowcount; i++) {
        		if (this.dsMaster.getColumn(i, "CHK") == "1") {
        			count++;
        		}
        	}
        	if (count < 1) {
        		this.alert("체크된 항목이 없습니다. 확인 바랍니다.");
        		return;
        	}

        	// 필수항목체크
        	if (this.dsMaster.rowcount > 0) {
        		if (this.gfn_isNull(this.gfn_trim(this.dsMaster.getColumn(this.dsMaster.rowposition, "STNT_NUMB")))) {
        			this.alert("학번/수험 정보는 필수 항목입니다.");
        			return;
        		}
        	}

        	var result = this.gfn_confirm("합격처리를 하시겠습니까?", "합격처리", "", "question");
        	if(result == 0) return;

            var strSvc      = "Habgyeog";
            var strUrl      = "/prj/BH/BH02/Save_4080201_T01HabgyeogList.do";
            var strInDs     = "ds_input=ds_input:a ";
                strInDs    += "dsMaster=dsMaster:u";
            var strOutDs    = "dsMaster=dsMaster";
            var strArg      = "";
            var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        }

        // 합격취소처리
        this.fn_Chwiso = function() {
        	// 체크한 학생만 처리
        	var count = 0;
        	for (var i = 0; i < this.dsMaster.rowcount; i++) {
        		if (this.dsMaster.getColumn(i, "CHK") == "1") {
        			count++;
        		}
        	}
        	if (count < 1) {
        		this.alert("체크된 항목이 없습니다. 확인 바랍니다.");
        		return;
        	}

        	// 필수항목체크
        	if (this.dsMaster.rowcount > 0) {
        		if (this.gfn_isNull(this.gfn_trim(this.dsMaster.getColumn(this.dsMaster.rowposition, "STNT_NUMB")))) {
        			this.alert("학번/수험 정보는 필수 항목입니다.");
        			return;
        		}
        	}

        	var result = this.gfn_confirm("합격취소처리를 하시겠습니까?", "합격취소처리", "", "question");
        	if(result == 0) return;

            var strSvc      = "Chwiso";
            var strUrl      = "/prj/BH/BH02/Save_4080201_T01ChwisoList.do";
            var strInDs     = "ds_input=ds_input:a ";
                strInDs    += "dsMaster=dsMaster:u";
            var strOutDs    = "dsMaster=dsMaster";
            var strArg      = "";
            var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("onselectchanged",this.grdMaster_onselectchanged,this);
            this.grdMaster.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
            this.cboRoomGubn.addEventHandler("onlbuttondown",this.cboSearchGyeyeol_onlbuttondown,this);
            this.cboRoomGubn.addEventHandler("onitemchanged",this.cboSearchGyeyeol_onitemchanged,this);
            this.cboRoomGubn.addEventHandler("onkeydown",this.div_01_cboSearchGyeyeol_onkeydown,this);
            this.cboJikjong00_00.addEventHandler("onlbuttondown",this.cboSearchGyeyeol_onlbuttondown,this);
            this.cboJikjong00_00.addEventHandler("onitemchanged",this.cboSearchGyeyeol_onitemchanged,this);
            this.cboJikjong00_00.addEventHandler("onkeydown",this.div_01_cboSearchGyeyeol_onkeydown,this);
            this.cboJikjong00_00_00.addEventHandler("onlbuttondown",this.cboSearchGyeyeol_onlbuttondown,this);
            this.cboJikjong00_00_00.addEventHandler("onitemchanged",this.cboSearchGyeyeol_onitemchanged,this);
            this.cboJikjong00_00_00.addEventHandler("onkeydown",this.div_01_cboSearchGyeyeol_onkeydown,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsDiffSequ.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsDiffSequ.addEventHandler("onvaluechanged",this.dsMaster_onvaluechanged,this);
            this.dsDiffSequ.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
            this.dsDiffSequ.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
            this.dsPassGubn.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsPassGubn.addEventHandler("onvaluechanged",this.dsMaster_onvaluechanged,this);
            this.dsPassGubn.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
            this.dsPassGubn.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
            this.dsNamyeo.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsNamyeo.addEventHandler("onvaluechanged",this.dsMaster_onvaluechanged,this);
            this.dsNamyeo.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
            this.dsNamyeo.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
            this.dsInsil.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsInsil.addEventHandler("onvaluechanged",this.dsMaster_onvaluechanged,this);
            this.dsInsil.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
            this.dsInsil.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
        };
        this.loadIncludeScript("BH02_4080201_T02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
