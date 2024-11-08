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
            this.set_titletext("학생포트폴리오목록조회");
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
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"50\"/><Column id=\"HAKSAENG_ENM\" type=\"STRING\" size=\"50\"/><Column id=\"HAKSAENG_CNM\" type=\"STRING\" size=\"50\"/><Column id=\"CAMPUS_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"DAEHAK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"BUNBAN\" type=\"STRING\" size=\"5\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"JINGEUP_HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"JINGEUP_SYS_SAJEONG_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"JINGEUP_ADMIN_SAJEONG_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"HAKJEOK_STCD\" type=\"STRING\" size=\"3\"/><Column id=\"BYEONDONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"BYEONDONG_SANGSE_CD\" type=\"STRING\" size=\"10\"/><Column id=\"BYEONDONG_SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"BYEONDONG_DT\" type=\"STRING\" size=\"8\"/><Column id=\"JIDOGYOSU_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKSEOKSA_TONGHAPGWAJEONG_YN\" type=\"STRING\" size=\"1\"/><Column id=\"HAKNYEONJE_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"GYOGWA_GWAJEONG_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"GYOJIK_ISU_YN\" type=\"STRING\" size=\"1\"/><Column id=\"GYOJIK_POGI_YN\" type=\"STRING\" size=\"1\"/><Column id=\"GYOJIK_POGI_DT\" type=\"STRING\" size=\"8\"/><Column id=\"GYOJIK_POGI_SAYU\" type=\"STRING\" size=\"500\"/><Column id=\"GYOWON_JAGYEOK_NO\" type=\"STRING\" size=\"20\"/><Column id=\"GYOWON_JEUNGSEO_NO\" type=\"STRING\" size=\"20\"/><Column id=\"SERVICE_HAKJEOM_YN\" type=\"STRING\" size=\"1\"/><Column id=\"BALSONGJUSO_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"RES_NO\" type=\"STRING\" size=\"100\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"8\"/><Column id=\"GENDER_CD\" type=\"STRING\" size=\"1\"/><Column id=\"GUKJEOK_CD\" type=\"STRING\" size=\"3\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"300\"/><Column id=\"HP_NO\" type=\"STRING\" size=\"16\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"16\"/><Column id=\"POST_NO\" type=\"STRING\" size=\"6\"/><Column id=\"ADDR1\" type=\"STRING\" size=\"300\"/><Column id=\"ADDR2\" type=\"STRING\" size=\"300\"/><Column id=\"OEGUKIN_YN\" type=\"STRING\" size=\"1\"/><Column id=\"DONGPO_YN\" type=\"STRING\" size=\"1\"/><Column id=\"PWD\" type=\"STRING\" size=\"300\"/><Column id=\"PWD_1\" type=\"STRING\" size=\"300\"/><Column id=\"BOHOJA_NM\" type=\"STRING\" size=\"50\"/><Column id=\"BOHOJA_GWANGYE_GBCD\" type=\"STRING\" size=\"30\"/><Column id=\"BOHOJA_TEL_NO\" type=\"STRING\" size=\"16\"/><Column id=\"BOHOJA_HP_NO\" type=\"STRING\" size=\"16\"/><Column id=\"BOHOJA_POST_NO\" type=\"STRING\" size=\"6\"/><Column id=\"BOHOJA_ADDR1\" type=\"STRING\" size=\"300\"/><Column id=\"BOHOJA_ADDR2\" type=\"STRING\" size=\"300\"/><Column id=\"BOHOJA_JIKEOP\" type=\"STRING\" size=\"200\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"10\"/><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"IPHAK_DT\" type=\"STRING\" size=\"8\"/><Column id=\"IPHAK_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"JEONGWONNAEOE_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"IPHAK_JEONHYEONG_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"IPHAK_TYCD\" type=\"STRING\" size=\"3\"/><Column id=\"IPHAK_HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"GOGYOGYEYEOL_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"CHULSINGOGYO_JOLEOP_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"CHULSINGOGYO_JOLEOP_DT\" type=\"STRING\" size=\"8\"/><Column id=\"CHULSINGOGYO_CD\" type=\"STRING\" size=\"10\"/><Column id=\"CHULSINGOGYO_NM\" type=\"STRING\" size=\"300\"/><Column id=\"NEIS_GOGYO_CD\" type=\"STRING\" size=\"10\"/><Column id=\"CHULSINGOGYO_GUKJEOK_CD\" type=\"STRING\" size=\"3\"/><Column id=\"CHULSINDAEHAK_NM\" type=\"STRING\" size=\"300\"/><Column id=\"CHULSINDAEHAK_HAKGWA_NM\" type=\"STRING\" size=\"200\"/><Column id=\"CHULSINDAEHAK_JOLEOP_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"CHULSINDAEHAK_JOLEOP_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"DAEHAK_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"PYEONIP_HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"JOLEOP_GIJUN_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"JOLEOP_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"JOLEOP_HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"JOLEOP_DT\" type=\"STRING\" size=\"8\"/><Column id=\"JOLEOP_HOETSU\" type=\"STRING\" size=\"5\"/><Column id=\"JOLEOP_HAKGWA_SEOKCHA\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JOLEOP_HAKGWA_CHONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JOLEOP_JEONCHE_SEOKCHA\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JOLEOP_JEONCHE_CHONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JOLEOP_JEUNGSEO_NO\" type=\"STRING\" size=\"20\"/><Column id=\"HAKWI_DEUNGROK_NO1\" type=\"STRING\" size=\"20\"/><Column id=\"HAKWI_DEUNGROK_NO2\" type=\"STRING\" size=\"20\"/><Column id=\"HAKWI_CD1\" type=\"STRING\" size=\"20\"/><Column id=\"HAKWI_CD2\" type=\"STRING\" size=\"20\"/><Column id=\"BUNBAN_BYEONGYEONG_YN\" type=\"STRING\" size=\"1\"/><Column id=\"BUNBAN_BYEONGYEONG_DTTM\" type=\"DATE\" size=\"8\"/><Column id=\"BALGEUP_BULGA_YN\" type=\"STRING\" size=\"1\"/><Column id=\"BALGEUP_BULGA_SAYU\" type=\"STRING\" size=\"100\"/><Column id=\"BALGEUP_BULGA_DT\" type=\"STRING\" size=\"8\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/><Column id=\"DAEHAK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUNBAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKNYEON_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKJEOK_SANGTAE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BYEONDONG_SANGSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GENDER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JIDOGYOSU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR\" type=\"STRING\" size=\"4000\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"DAEHAK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"256\"/><Column id=\"HAKBEON_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKJEOK_STCD\" type=\"STRING\" size=\"256\"/><Column id=\"GENDER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BUNBAN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"JOJIK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DAEHAK_CD\"/><Col id=\"HAKGWA_CD\"/><Col id=\"JEONGONG_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJuya", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHaknyeon", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBunban", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakjeokSangtae", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGender", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGyeyeol", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgwa", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJeongong", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_01","0","0",null,"71","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSearchGyeyeol","95","10","200","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("0");
            obj.set_innerdataset("dsGyeyeol");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_01_00","0","10","80","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("10");
            obj.set_text("계열");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01","0","37","80","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("11");
            obj.set_text("학번/성명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_01.addChild(obj.name, obj);

            obj = new Edit("edtSearchHakbeon","95","37","200","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("6");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00","309","37","104","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("12");
            obj.set_text("학적상태");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","333","10","80","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("13");
            obj.set_text("학과/학부");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_01.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgwa","424","10","200","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsHakgwa");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.div_01.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakjeokSangtae","424","37","200","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsHakjeokSangtae");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_01_01","639","37","80","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("14");
            obj.set_text("성별");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_01","639","10","80","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("15");
            obj.set_text("전공");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_01.addChild(obj.name, obj);

            obj = new Combo("cboSearchJeongong","730","10","200","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsJeongong");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.div_01.addChild(obj.name, obj);

            obj = new Combo("cboSearchGender","730","37","200","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("8");
            obj.set_innerdataset("dsGender");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_01_01_00","927","37","110","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("16");
            obj.set_text("정렬구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_01_02","972","10","65","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("17");
            obj.set_text("주야");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_01.addChild(obj.name, obj);

            obj = new Combo("cboSearchJuya","1048","10","125","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsJuya");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.div_01.addChild(obj.name, obj);

            obj = new Radio("RadioSearchSort","1048","37","541","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var div_01_form_RadioSearchSort_innerdataset = new nexacro.NormalDataset("div_01_form_RadioSearchSort_innerdataset", obj);
            div_01_form_RadioSearchSort_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">학년</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">학년, 학번</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">학년, 성명, 학번</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">성명, 학번</Col></Row></Rows>");
            obj.set_innerdataset(div_01_form_RadioSearchSort_innerdataset);
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_01_02_00","1190","10","65","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("18");
            obj.set_text("학년");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_01.addChild(obj.name, obj);

            obj = new Combo("cboSearchHaknyeon","1268","10","105","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsHaknyeon");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_01_02_00_00","1391","10","65","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("19");
            obj.set_text("분반");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_01.addChild(obj.name, obj);

            obj = new Combo("cboSearchBunban","1468","10","125","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsBunban");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.div_01.addChild(obj.name, obj);

            obj = new Grid("grdMaster","0","104",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"122\"/><Column size=\"181\"/><Column size=\"123\"/><Column size=\"85\"/><Column size=\"73\"/><Column size=\"93\"/><Column size=\"47\"/><Column size=\"51\"/><Column size=\"51\"/><Column size=\"51\"/><Column size=\"61\"/><Column size=\"93\"/><Column size=\"93\"/><Column size=\"114\"/><Column size=\"57\"/><Column size=\"57\"/><Column size=\"76\"/><Column size=\"103\"/><Column size=\"82\"/><Column size=\"554\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"checkbox\" text=\"No\"/><Cell col=\"1\" text=\"계열\"/><Cell col=\"2\" text=\"학과/학부\"/><Cell col=\"3\" text=\"전공\"/><Cell col=\"4\" text=\"학번\"/><Cell col=\"5\" text=\"성명\"/><Cell col=\"6\" text=\"생년월일\"/><Cell col=\"7\" text=\"성별\"/><Cell col=\"8\" text=\"학년\"/><Cell col=\"9\" text=\"분반\"/><Cell col=\"10\" text=\"주야\"/><Cell col=\"11\" text=\"학적상태\"/><Cell col=\"12\" text=\"변동사유\"/><Cell col=\"13\" text=\"변동일자\"/><Cell col=\"14\" text=\"복학예정년도/학기\"/><Cell col=\"15\" text=\"학년제\"/><Cell col=\"16\" text=\"입학구분\"/><Cell col=\"17\" text=\"지도교수\"/><Cell col=\"18\" text=\"휴대폰번호\"/><Cell col=\"19\" text=\"우편번호\"/><Cell col=\"20\" text=\"주소\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:DAEHAK_NM\" editmaxlength=\"256\" cursor=\"pointer\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:HAKGWA_NM\" editmaxlength=\"256\" cursor=\"pointer\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:JEONGONG_NM\" editmaxlength=\"256\" cursor=\"pointer\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:HAKBEON\" editmaxlength=\"10\" cursor=\"pointer\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:HAKSAENG_NM\" editmaxlength=\"50\" cursor=\"pointer\"/><Cell col=\"6\" displaytype=\"date\" edittype=\"none\" textAlign=\"center\" text=\"bind:BIRTHDAY\" editmaxlength=\"8\" cursor=\"pointer\"/><Cell col=\"7\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:GENDER_NM\" editmaxlength=\"256\" cursor=\"pointer\"/><Cell col=\"8\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:HAKNYEON_NM\" editmaxlength=\"256\" cursor=\"pointer\"/><Cell col=\"9\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:BUNBAN\" editmaxlength=\"256\" cursor=\"pointer\"/><Cell col=\"10\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:JUYA_NM\" editmaxlength=\"256\" cursor=\"pointer\"/><Cell col=\"11\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:HAKJEOK_SANGTAE_NM\" editmaxlength=\"256\" cursor=\"pointer\"/><Cell col=\"12\" displaytype=\"text\" edittype=\"none\" textAlign=\"left\" text=\"bind:BYEONDONG_SANGSE_NM\" editmaxlength=\"256\" cursor=\"pointer\"/><Cell col=\"13\" displaytype=\"date\" edittype=\"none\" textAlign=\"center\" text=\"bind:BYEONDONG_DT\" editmaxlength=\"8\" cursor=\"pointer\"/><Cell col=\"14\" cursor=\"pointer\"/><Cell col=\"15\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:HAKNYEONJE_GBNM\" editmaxlength=\"256\" cursor=\"pointer\"/><Cell col=\"16\" cursor=\"pointer\"/><Cell col=\"17\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:JIDOGYOSU_NM\" editmaxlength=\"256\" cursor=\"pointer\"/><Cell col=\"18\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:HP_NO\" editmaxlength=\"16\" cursor=\"pointer\"/><Cell col=\"19\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:POST_NO\" editmaxlength=\"6\" cursor=\"pointer\"/><Cell col=\"20\" displaytype=\"text\" edittype=\"none\" textAlign=\"left\" text=\"bind:ADDR\" editmaxlength=\"4000\" cursor=\"pointer\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","0","79","330","22",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("학생정보");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stRowCnt","82","77","233","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","1","1","27","67",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","20","1","1000","9",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","86","1","10","67",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_02","40","33","1050","5",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 6pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_01","297","1","56","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","690","61","100","9",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","500","69","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","0","97","320","8",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00","626","1","56","70",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","414","1","10","67",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","720","1","10","67",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00_00","932","1","56","70",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00","1038","1","10","67",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00_00_00","1175","1","56","40",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00_00_00_00","1375","1","56","40",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00","1258","1","10","37",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00_00","1458","1","10","37",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("학생포트폴리오목록조회");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_01.form.cboSearchGyeyeol","value","ds_input","DAEHAK_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_01.form.edtSearchHakbeon","value","ds_input","HAKBEON_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_01.form.cboSearchHakgwa","value","ds_input","HAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_01.form.cboSearchHakjeokSangtae","value","ds_input","HAKJEOK_STCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_01.form.cboSearchJeongong","value","ds_input","JEONGONG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_01.form.cboSearchGender","value","ds_input","GENDER_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_01.form.cboSearchJuya","value","ds_input","JUYA_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_01.form.cboSearchHaknyeon","value","ds_input","HAKNYEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_01.form.cboSearchBunban","value","ds_input","BUNBAN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("UI01_2090101_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UI01_2090101_M.xfdl(학생포트폴리오목록조회)
        * 작 성         일 명: jiback
        * 작 성         일 자: 2020/11/23
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
        	this.fn_Auth();
        };

        /**********************************************************************
                04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        this.fn_formInit = function()
        {
            var strDs    = "dsJuya|dsHaknyeon|dsBunban|dsHakjeokSangtae|dsGender";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00003|00060|00050|00004|00001";                         // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "T|T|T|T|T";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";                                      // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId    = "Init";

                // gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
                // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.

            this.gfn_CmmnMultiComboLoad(strDs
                                      , strLgcd
                                      , strComb
                                      , strOptn
                                      , svcId);

        	// gfn_GyeyeolComboLoad(데이터셋, 콤보 옵션)
        	// 계열콤보
        	strDs       = "dsGyeyeol";
        	strComb     = "T";
        	svcId       = "gyeyeolInit";
        	strUseYn    = "1"; // 사용 여부
        	strJojikGbcd = "20";  // 조직구분 10.행정조직   20.학사조직   30.입시조직
        	strDaehakCd = "";  //
        	this.gfn_GyeyeolComboLoad(this.div_01.form.cboSearchGyeyeol, strComb, svcId, strUseYn, strJojikGbcd, strDaehakCd , objApp.gv_cutPrgId);

        };

        this.fn_PostGyeyeolInt = function()
        {
        	this.div_01.form.cboSearchGyeyeol.set_index(0);

        	// 계열 onitemchanged 호출
        	let info = new nexacro.ItemChangeEventInfo;
        	this.cboSearchGyeyeol_onitemchanged(this.div_01.form.cboSearchGyeyeol, info);
        };


        this.fn_PostHakgwaInit = function()
        {
        	this.div_01.form.cboSearchHakgwa.set_index(0);

        	// 학과 onitemchanged 호출
        	let info = new nexacro.ItemChangeEventInfo;
        	this.cboSearchHakgwa_onitemchanged(this.div_01.form.cboSearchHakgwa, info);
        };

        this.fn_PostJeongongInit = function()
        {
        	this.div_01.form.cboSearchJeongong.set_index(0);
        };

        this.fn_Auth = function()
        {
        	// 학생일 경우
        	if(objApp.gds_userInfoDb.getColumn(0,"USER_GBCD") == '00')
        	{
        		this.div_01.form.edtSearchHakbeon.set_value(objApp.gds_userInfoDb.getColumn(0,"USER_ID"));
        		this.div_01.form.edtSearchHakbeon.set_enable(false);
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
        			case "gyeyeolInit":
        			        this.fn_PostGyeyeolInt();
        			    break;
        			case "hakgwaInit":
        			        this.fn_PostHakgwaInit();
        			    break;
        			case "jeongongInit":
        			        this.fn_PostJeongongInit();
        			    break;
                    case "Ret":
                            this.fn_PostRet();
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
        		case "portpolio" :
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
                case "tmp1" :        // 도움말
                         this.fn_Help();
                    break;
                default :
                    break;
            };
        };;

        /**********************************************************************
                05. 조회 함수 선언(마스터 함수)
        ***********************************************************************/
        // 정렬구분 변경시 조회
        this.RadioSearchSort_onitemchanged = function(obj,e)
        {
        	this.fn_Ret();
        };
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreRet = function()
        {
        	var nCnt = 0;

        	if (!this.gfn_isNull(this.ds_input.getColumn(0, "DAEHAK_CD")))  nCnt++;
        	if (!this.gfn_isNull(this.ds_input.getColumn(0, "HAKBEON_NM")))  nCnt++;
        	if (!this.gfn_isNull(this.ds_input.getColumn(0, "HAKGWA_CD")))  nCnt++;
        	if (!this.gfn_isNull(this.ds_input.getColumn(0, "HAKJEOK_STCD")))  nCnt++;
        	if (!this.gfn_isNull(this.ds_input.getColumn(0, "JEONGONG_CD")))  nCnt++;
        	if (!this.gfn_isNull(this.ds_input.getColumn(0, "GENDER_CD")))  nCnt++;
        	if (!this.gfn_isNull(this.ds_input.getColumn(0, "JUYA_GBCD")))  nCnt++;
        	if (!this.gfn_isNull(this.ds_input.getColumn(0, "HAKNYEON")))  nCnt++;
        	if (!this.gfn_isNull(this.ds_input.getColumn(0, "BUNBAN")))  nCnt++;

            if (nCnt == 0) {
        	    this.gfn_alert("검색 조건 1개 이상 입력해 주세요.","조회정보","","information");
        		return false;
        	}

        	this.ds_input.setColumn(0, "USER_ID", objApp.gds_userInfoDb.getColumn(0,"USER_ID"));
        	this.ds_input.setColumn(0, "JOJIK_GBCD", "20");
        	this.ds_input.setColumn(0, "USE_YN", "1");
            this.ds_input.setColumn(0, "SORT", this.div_01.form.RadioSearchSort.value);
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
            var strUrl      = "/prj/UI/UI01/Retrieve_2090101_M.do";
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
            this.gfn_getRowCount(this.stRowCnt,this.dsMaster);

        	// 조회결과가 1건일때 바로 해당 학생포트폴리오 팝업 오픈
        	if(this.dsMaster.rowcount == 1)
        	{
        		var hakbeon = this.dsMaster.getColumn(0, "HAKBEON");
        		var oArg = {hakbeon:hakbeon};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";
        		this.gfn_openPopup( "portpolio","UI01::UI01_2090102_M.xfdl",oArg,sPopupCallBack,oOption);
        	}
        };
        /**********************************************************************
                06. 도움말 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreHelp = function()
        {
        	return true;
        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_Help = function()
        {
        	this.gfn_alert("도움말 준비중입니다.","저장정보","","question");
        };
        /**
         *      기능 : 저장시 후처리
         */
        this.fn_PostHelp = function()
        {

        };
        /**********************************************************************
                07. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj,e)
        {
            if(e.cell != this.grdMaster.getBindCellIndex("body","CHK"))
            {
                this.gfn_gridSort(obj,e);
            }
        };

        /**
          * 학과 필터 적용
         **/
        this.cboSearchGyeyeol_onitemchanged = function(obj,e)
        {
        	// gfn_HakgwaComboLoad(데이터셋, 콤보 옵션)
        	// 학과콤보
        	strDs       = "dsHakgwa";
        	strComb     = "T";
        	svcId       = "hakgwaInit";
        	strUseYn    = "1"; // 사용 여부
        	strJojikGbcd = "20";  // 조직구분 10.행정조직   20.학사조직   30.입시조직

        	if(this.gfn_isNull(e.postvalue))
        		strUpDeptCd = "";
        	else
        		strUpDeptCd = e.postvalue;

        	this.gfn_HakgwaComboLoad(this.div_01.form.cboSearchHakgwa, strComb, svcId, strUseYn, strJojikGbcd, strUpDeptCd, objApp.gv_cutPrgId);
        };

        /**
          * 전공 필터 적용
         **/
        this.cboSearchHakgwa_onitemchanged = function(obj,e)
        {
        	// gfn_JeongongComboLoad(데이터셋, 콤보 옵션)
        	// 전공콤보
        	strDs       = "dsJeongong";
        	strComb     = "T";
        	svcId       = "jeongongInit";
        	strUseYn    = "1"; // 사용 여부
        	strJojikGbcd = "20";  // 조직구분 10.행정조직   20.학사조직   30.입시조직

        	if(this.gfn_isNull(e.postvalue))
        		strUpDeptCd = "";
        	else
        		strUpDeptCd = e.postvalue;

        	this.gfn_JeongongComboLoad(this.div_01.form.cboSearchJeongong, strComb, svcId, strUseYn, strJojikGbcd, strUpDeptCd, objApp.gv_cutPrgId);
        };

        // 엔터키 누르면 조회
        this.div_01_cboSearchGyeyeol_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"DAEHAK_CD",obj.value);
        		this.fn_Ret();
        	}
        };

        // 엔터키 누르면 조회
        this.div_01_cboSearchHakgwa_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"HAKGWA_CD",obj.value);
        		this.fn_Ret();
        	}
        };

        // 엔터키 누르면 조회
        this.div_01_cboSearchJeongong_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"JEONGONG_CD",obj.value);
        		this.fn_Ret();
        	}
        };

        // 엔터키 누르면 조회
        this.div_01_cboSearchJuya_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"JUYA_GBCD",obj.value);
        		this.fn_Ret();
        	}
        };

        // 엔터키 누르면 조회
        this.div_01_cboSearchHaknyeon_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"HAKNYEON",obj.value);
        		this.fn_Ret();
        	}
        };

        // 엔터키 누르면 조회
        this.div_01_cboSearchBunban_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"BUNBAN",obj.value);
        		this.fn_Ret();
        	}
        };

        // 엔터키 누르면 조회
        this.div_01_cboSearchHakjeokSangtae_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"HAKJEOK_STCD",obj.value);
        		this.fn_Ret();
        	}
        };

        // 엔터키 누르면 조회
        this.div_01_cboSearchGender_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"GENDER_CD",obj.value);
        		this.fn_Ret();
        	}
        };

        /**********************************************************************
                08. 팝업
        ***********************************************************************/
        // 학생포트폴리오 팝업
        this.grdMaster_oncellclick = function(obj,e)
        {
        	var hakbeon = this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKBEON");
        	var oArg = {hakbeon:hakbeon};
        	var oOption = {};
        	var sPopupCallBack = "fn_popupCallback";
        	this.gfn_openPopup( "portpolio","UI01::UI01_2090102_M.xfdl",oArg,sPopupCallBack,oOption);
        };

        //
        this.edtSearchHakbeon_onkeydown = function(obj,e)
        {
        	if (obj.name == "edtSearchHakbeon")
        	{
        		//13(Enter) 누르면 조회
        		if(e.keycode == 13)
        		{
        			this.ds_input.setColumn(0,"HAKBEON_NM",obj.value);
        			this.fn_Ret();
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.div_01.form.cboSearchGyeyeol.addEventHandler("onlbuttondown",this.cboSearchGyeyeol_onlbuttondown,this);
            this.div_01.form.cboSearchGyeyeol.addEventHandler("onitemchanged",this.cboSearchGyeyeol_onitemchanged,this);
            this.div_01.form.cboSearchGyeyeol.addEventHandler("onkeydown",this.div_01_cboSearchGyeyeol_onkeydown,this);
            this.div_01.form.edtSearchHakbeon.addEventHandler("onkeydown",this.edtSearchHakbeon_onkeydown,this);
            this.div_01.form.cboSearchHakgwa.addEventHandler("onlbuttondown",this.cboSearchHakgwa_onlbuttondown,this);
            this.div_01.form.cboSearchHakgwa.addEventHandler("onitemchanged",this.cboSearchHakgwa_onitemchanged,this);
            this.div_01.form.cboSearchHakgwa.addEventHandler("onkeydown",this.div_01_cboSearchHakgwa_onkeydown,this);
            this.div_01.form.cboSearchHakjeokSangtae.addEventHandler("onkeydown",this.div_01_cboSearchHakjeokSangtae_onkeydown,this);
            this.div_01.form.cboSearchJeongong.addEventHandler("onlbuttondown",this.cboSearchJeongong_onlbuttondown,this);
            this.div_01.form.cboSearchJeongong.addEventHandler("onkeydown",this.div_01_cboSearchJeongong_onkeydown,this);
            this.div_01.form.cboSearchGender.addEventHandler("onkeydown",this.div_01_cboSearchGender_onkeydown,this);
            this.div_01.form.cboSearchJuya.addEventHandler("onkeydown",this.div_01_cboSearchJuya_onkeydown,this);
            this.div_01.form.RadioSearchSort.addEventHandler("onitemchanged",this.RadioSearchSort_onitemchanged,this);
            this.div_01.form.RadioSearchSort.addEventHandler("onkeydown",this.div_01_RadioSearchSort_onkeydown,this);
            this.div_01.form.cboSearchHaknyeon.addEventHandler("onkeydown",this.div_01_cboSearchHaknyeon_onkeydown,this);
            this.div_01.form.cboSearchBunban.addEventHandler("onkeydown",this.div_01_cboSearchBunban_onkeydown,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
            this.grdMaster.addEventHandler("oncellclick",this.grdMaster_oncellclick,this);
        };
        this.loadIncludeScript("UI01_2090101_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
