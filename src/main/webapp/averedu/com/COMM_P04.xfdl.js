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
            this.set_titletext("학생");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMaster", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"CAMPUS_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"DAEHAK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DAEHAK_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONGONG_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"JUYA_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"JINGEUP_HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"JINGEUP_SYS_SAJEONG_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"JINGEUP_ADMIN_SAJEONG_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"BUNBAN\" type=\"STRING\" size=\"5\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"50\"/><Column id=\"HAKSAENG_ENM\" type=\"STRING\" size=\"50\"/><Column id=\"HAKSAENG_CNM\" type=\"STRING\" size=\"50\"/><Column id=\"RES_NO\" type=\"STRING\" size=\"65532\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"8\"/><Column id=\"HAKJEOK_STCD\" type=\"STRING\" size=\"3\"/><Column id=\"HAKJEOK_SANGTAE_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"BYEONDONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"BYEONDONG_SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"BYEONDONG_DT\" type=\"STRING\" size=\"8\"/><Column id=\"JIDOGYOSU_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JIDOGYOSU_NM\" type=\"STRING\" size=\"20\"/><Column id=\"HAKSEOKSA_TONGHAPGWAJEONG_YN\" type=\"STRING\" size=\"1\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"10\"/><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"HAKNYEONJE_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"GENDER_CD\" type=\"STRING\" size=\"1\"/><Column id=\"GENDER_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"GUKJEOK_CD\" type=\"STRING\" size=\"3\"/><Column id=\"GYOJIK_ISU_YN\" type=\"STRING\" size=\"1\"/><Column id=\"GYOJIK_POGI_YN\" type=\"STRING\" size=\"1\"/><Column id=\"GYOJIK_POGI_DT\" type=\"STRING\" size=\"8\"/><Column id=\"GYOJIK_POGI_SAYU\" type=\"STRING\" size=\"500\"/><Column id=\"SERVICE_HAKJEOM_YN\" type=\"STRING\" size=\"1\"/><Column id=\"OEGUKIN_YN\" type=\"STRING\" size=\"1\"/><Column id=\"DONGPO_YN\" type=\"STRING\" size=\"1\"/><Column id=\"BALSONGJUSO_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"300\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"16\"/><Column id=\"HP_NO\" type=\"STRING\" size=\"16\"/><Column id=\"POST_NO\" type=\"STRING\" size=\"6\"/><Column id=\"ADDR1\" type=\"STRING\" size=\"300\"/><Column id=\"ADDR2\" type=\"STRING\" size=\"300\"/><Column id=\"PWD\" type=\"STRING\" size=\"65532\"/><Column id=\"BOHOJA_NM\" type=\"STRING\" size=\"50\"/><Column id=\"BOHOJA_GWANGYE_GBCD\" type=\"STRING\" size=\"30\"/><Column id=\"BOHOJA_TEL_NO\" type=\"STRING\" size=\"16\"/><Column id=\"BOHOJA_HP_NO\" type=\"STRING\" size=\"16\"/><Column id=\"BOHOJA_POST_NO\" type=\"STRING\" size=\"6\"/><Column id=\"BOHOJA_ADDR1\" type=\"STRING\" size=\"300\"/><Column id=\"BOHOJA_ADDR2\" type=\"STRING\" size=\"300\"/><Column id=\"BOHOJA_JIKEOP\" type=\"STRING\" size=\"200\"/><Column id=\"IPHAK_DT\" type=\"STRING\" size=\"8\"/><Column id=\"IPHAK_HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"GOGYOGYEYEOL_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"CHULSINGOGYO_JOLEOP_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"CHULSINGOGYO_JOLEOP_DT\" type=\"STRING\" size=\"8\"/><Column id=\"CHULSINGOGYO_CD\" type=\"STRING\" size=\"10\"/><Column id=\"CHULSINGOGYO_NM\" type=\"STRING\" size=\"300\"/><Column id=\"NEIS_GOGYO_CD\" type=\"STRING\" size=\"10\"/><Column id=\"CHULSINGOGYO_GUKJEOK_CD\" type=\"STRING\" size=\"3\"/><Column id=\"CHULSINDAEHAK_NM\" type=\"STRING\" size=\"300\"/><Column id=\"CHULSINDAEHAK_HAKGWA_NM\" type=\"STRING\" size=\"200\"/><Column id=\"CHULSINDAEHAK_JOLEOP_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"CHULSINDAEHAK_JOLEOP_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"DAEHAK_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"JEONGWONNAEOE_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"IPHAK_JEONHYEONG_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"IPHAK_TYCD\" type=\"STRING\" size=\"3\"/><Column id=\"IPHAK_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"PYEONIP_HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"JOLEOP_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"JOLEOP_HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"JOLEOP_DT\" type=\"STRING\" size=\"8\"/><Column id=\"JOLEOP_HOETSU\" type=\"STRING\" size=\"5\"/><Column id=\"HAKWI_DEUNGROK_NO1\" type=\"STRING\" size=\"20\"/><Column id=\"HAKWI_DEUNGROK_NO2\" type=\"STRING\" size=\"20\"/><Column id=\"HAKWI_CD1\" type=\"STRING\" size=\"20\"/><Column id=\"HAKWI_CD2\" type=\"STRING\" size=\"20\"/><Column id=\"BALGEUP_BULGA_YN\" type=\"STRING\" size=\"1\"/><Column id=\"BALGEUP_BULGA_SAYU\" type=\"STRING\" size=\"100\"/><Column id=\"BALGEUP_BULGA_DT\" type=\"STRING\" size=\"8\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"35\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"HAKBEON_NM\" type=\"STRING\" size=\"50\"/><Column id=\"CAMPUS_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"DAEHAK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"BUNBAN\" type=\"STRING\" size=\"5\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"HAKJEOK_STCD\" type=\"STRING\" size=\"3\"/><Column id=\"BIRTHDAY\" type=\"DATE\" size=\"8\"/><Column id=\"GENDER_CD\" type=\"STRING\" size=\"1\"/></ColumnInfo><Rows><Row/></Rows>");
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


            obj = new Dataset("dsGender", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakjeokSangtae", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutput", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"50\"/></ColumnInfo><Rows><Row/></Rows>");
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
            obj = new Grid("grdMaster","10","100",null,null,"10","50",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_autosizingtype("none");
            obj.set_extendsizetype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"49\"/><Column size=\"101\"/><Column size=\"133\"/><Column size=\"119\"/><Column size=\"86\"/><Column size=\"72\"/><Column size=\"81\"/><Column size=\"59\"/><Column size=\"59\"/><Column size=\"59\"/><Column size=\"59\"/><Column size=\"69\"/><Column size=\"69\"/><Column size=\"118\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"계열\"/><Cell col=\"2\" text=\"학과/학부\"/><Cell col=\"3\" text=\"전공\"/><Cell col=\"4\" text=\"학번\"/><Cell col=\"5\" text=\"성명\"/><Cell col=\"6\" text=\"생년월일\"/><Cell col=\"7\" text=\"성별\"/><Cell col=\"8\" text=\"학년\"/><Cell col=\"9\" text=\"분반\"/><Cell col=\"10\" text=\"주야\"/><Cell col=\"11\" text=\"학적상태\"/><Cell col=\"12\" text=\"지도교수\"/><Cell col=\"13\" text=\"휴대폰번호\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:DAEHAK_NM\" editmaxlength=\"256\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:HAKGWA_NM\" editmaxlength=\"256\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:JEONGONG_NM\" editmaxlength=\"256\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:HAKBEON\" editmaxlength=\"10\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:HAKSAENG_NM\" editmaxlength=\"50\"/><Cell col=\"6\" displaytype=\"date\" edittype=\"none\" textAlign=\"center\" text=\"bind:BIRTHDAY\" editmaxlength=\"8\"/><Cell col=\"7\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:GENDER_NM\" editmaxlength=\"256\"/><Cell col=\"8\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:HAKNYEON_NM\" editmaxlength=\"256\"/><Cell col=\"9\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:BUNBAN_NM\" editmaxlength=\"256\"/><Cell col=\"10\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:JUYA_NM\" editmaxlength=\"256\"/><Cell col=\"11\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:HAKJEOK_SANGTAE_NM\" editmaxlength=\"256\"/><Cell col=\"12\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:JIDOGYOSU_NM\" editmaxlength=\"256\"/><Cell col=\"13\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\" text=\"bind:HP_NO\" editmaxlength=\"16\" padding=\"0px 0px 0px 3px\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","1130",null,"60","25",null,"10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnChoice","1065",null,"60","25",null,"10",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("선택");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","10","10",null,"74","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","14","10","50","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_text("계열");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","183","10","86","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_text("학과/학부");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgwa","276","10","127","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_innerdataset("dsHakgwa");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","386","10","86","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_text("전공");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJeongong","479","10","127","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_innerdataset("dsJeongong");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","586","10","86","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_text("주야");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJuya","679","10","90","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsJuya");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","739","10","86","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_text("학년");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHaknyeon","832","10","90","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_innerdataset("dsHaknyeon");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","896","11","86","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_text("분반");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchBunban","989","11","90","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_innerdataset("dsBunban");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","183","41","86","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_text("학적상태");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakjeokSangtae","276","41","127","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_innerdataset("dsHakjeokSangtae");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","386","42","86","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_text("성별");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchGender","479","42","127","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_innerdataset("dsGender");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","586","41","85","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_text("생년월일");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchGyeyeol","72","10","127","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_innerdataset("dsGyeyeol");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_01","-21","41","85","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_text("학번/성명");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchHakbeonNm","72","41","127","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calSearchSincheongSijakDt","679","42","243","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_dateformat("yyyy-MM-dd");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch","1110","10","60","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Crud");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stRowCnt","10",null,"233","24",null,"10",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1200,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_description("학생");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.cboSearchHakgwa","value","ds_input","HAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboSearchJeongong","value","ds_input","JEONGONG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboSearchJuya","value","ds_input","JUYA_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboSearchHaknyeon","value","ds_input","HAKNYEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.cboSearchBunban","value","ds_input","BUNBAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.cboSearchHakjeokSangtae","value","ds_input","HAKJEOK_STCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.cboSearchGender","value","ds_input","GENDER_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.cboSearchGyeyeol","value","ds_input","DAEHAK_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSearch.form.edtSearchHakbeonNm","value","ds_input","HAKBEON_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.calSearchSincheongSijakDt","value","ds_input","BIRTHDAY");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("COMM_P04.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): COM_P04_P04.xfdl(학적기본관리 관리(조회))
        * 작 성         일 명: jiback
        * 작 성         일 자: 2020/11/18
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
        this.menuId = "";
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

        	if( !this.gfn_isNull(this.getOwnerFrame().hakbeonNm)){
        		this.ds_input.setColumn(0, "HAKBEON_NM", this.getOwnerFrame().hakbeonNm);
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().birthday)){
        		this.ds_input.setColumn(0, "BIRTHDAY", this.getOwnerFrame().birthday);
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().menuId)){
        		this.menuId = this.getOwnerFrame().menuId;
        	}

            //사용자 화면  초기화 함수
            this.fn_formInit();
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
        	strComb     = "TT";
        	svcId       = "gyeyeolInit";
        	strUseYn    = "1";    // 사용 여부
        	strJojikGbcd = "20";  // 조직구분 10.행정조직   20.학사조직   30.입시조직
        	strDaehakCd = "";     //

        	this.gfn_GyeyeolComboLoad(this.divSearch.form.cboSearchGyeyeol, strComb, svcId, strUseYn, strJojikGbcd, strDaehakCd, this.menuId);
        };

        this.fn_PostGyeyeolInt = function()
        {
        	this.divSearch.form.cboSearchGyeyeol.set_index(0);

        	// 계열 onitemchanged 호출
        	let info = new nexacro.ItemChangeEventInfo;
        	this.cboSearchGyeyeol_onitemchanged(this.cboSearchGyeyeol, info);
        };


        this.fn_PostHakgwaInit = function()
        {
        	this.divSearch.form.cboSearchHakgwa.set_index(0);

        	// 학과 onitemchanged 호출
        	let info = new nexacro.ItemChangeEventInfo;
        	this.cboSearchHakgwa_onitemchanged(this.cboSearchHakgwa, info);
        };

        this.fn_PostJeongongInit = function()
        {
        	this.divSearch.form.cboSearchJeongong.set_index(0);
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

        /**********************************************************************
                05. 조회 함수 선언(마스터 함수)
        ***********************************************************************/
        this.btnSearch_onclick = function(obj,e)
        {
        	var nCnt = 0;

        	if (!this.gfn_isNull(this.ds_input.getColumn(0, "DAEHAK_CD")))    nCnt++;
        	if (!this.gfn_isNull(this.ds_input.getColumn(0, "HAKGWA_CD")))    nCnt++;
        	if (!this.gfn_isNull(this.ds_input.getColumn(0, "JEONGONG_CD")))  nCnt++;
        	if (!this.gfn_isNull(this.ds_input.getColumn(0, "JUYA_GBCD")))    nCnt++;
        	if (!this.gfn_isNull(this.ds_input.getColumn(0, "HAKNYEON")))     nCnt++;
        	if (!this.gfn_isNull(this.ds_input.getColumn(0, "BUNBAN")))       nCnt++;
        	if (!this.gfn_isNull(this.ds_input.getColumn(0, "HAKBEON_NM")))   nCnt++;
        	if (!this.gfn_isNull(this.ds_input.getColumn(0, "HAKJEOK_STCD"))) nCnt++;
        	if (!this.gfn_isNull(this.ds_input.getColumn(0, "GENDER_CD")))    nCnt++;
        	if (!this.gfn_isNull(this.ds_input.getColumn(0, "BIRTHDAY")))     nCnt++;

            if (nCnt == 0) {
        	    this.gfn_alert("검색 조건 1개 이상 입력해 주세요.","조회정보","","information");
        		return false;
        	}

        	this.fn_Ret();
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_Ret = function()
        {
            var strSvc      = "Ret";
            var strUrl      = "/prj/com/Retrieve_P04.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsMaster=dsMaster";
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
            this.gfn_getRowCount(this.stRowCnt,this.dsMaster);
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

        this.btnChoice_onclick = function(obj,e)
        {
        	var objRtnArr = new Array(89);

        	objRtnArr[0] = this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKBEON");
        	objRtnArr[1] = this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKSAENG_NM");
        	objRtnArr[2] = this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKGWA_NM");
        	objRtnArr[3] = this.dsMaster.getColumn(this.dsMaster.rowposition, "HP_NO");
        	objRtnArr[4] = this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKNYEON");
        	objRtnArr[5] = this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKJEOK_SANGTAE_NM");
        	objRtnArr[6] = this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKSAENG_ENM");
        	objRtnArr[7] = this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKSAENG_CNM");
        	objRtnArr[8] = this.dsMaster.getColumn(this.dsMaster.rowposition, "RES_NO");
        	objRtnArr[9] = this.dsMaster.getColumn(this.dsMaster.rowposition, "BIRTHDAY");
        	objRtnArr[10] = this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKGWA_CD");
        	objRtnArr[11] = this.dsMaster.getColumn(this.dsMaster.rowposition, "CAMPUS_GBCD");
        	objRtnArr[12] = this.dsMaster.getColumn(this.dsMaster.rowposition, "JEONGONG_CD");
        	objRtnArr[13] = this.dsMaster.getColumn(this.dsMaster.rowposition, "JEONGONG_NM");
        	objRtnArr[14] = this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKJEOK_STCD");
        	objRtnArr[15] = this.dsMaster.getColumn(this.dsMaster.rowposition, "GYOJIK_ISU_YN");
        	objRtnArr[16] = this.dsMaster.getColumn(this.dsMaster.rowposition, "IPHAK_DT");
        	objRtnArr[17] = this.dsMaster.getColumn(this.dsMaster.rowposition, "JOLEOP_DT");
        	objRtnArr[18] = this.dsMaster.getColumn(this.dsMaster.rowposition, "BALGEUP_BULGA_YN");
        	objRtnArr[19] = this.dsMaster.getColumn(this.dsMaster.rowposition, "FILE_PATH");
        	objRtnArr[20] = this.dsMaster.getColumn(this.dsMaster.rowposition, "DAEHAK_CD");
        	objRtnArr[21] = this.dsMaster.getColumn(this.dsMaster.rowposition, "DAEHAK_NM");
        	objRtnArr[22] = this.dsMaster.getColumn(this.dsMaster.rowposition, "JUYA_GBCD");
        	objRtnArr[23] = this.dsMaster.getColumn(this.dsMaster.rowposition, "JUYA_GBNM");
        	objRtnArr[24] = this.dsMaster.getColumn(this.dsMaster.rowposition, "JINGEUP_HAKNYEON");
        	objRtnArr[25] = this.dsMaster.getColumn(this.dsMaster.rowposition, "JINGEUP_SYS_SAJEONG_GBCD");
        	objRtnArr[26] = this.dsMaster.getColumn(this.dsMaster.rowposition, "JINGEUP_ADMIN_SAJEONG_GBCD");
        	objRtnArr[27] = this.dsMaster.getColumn(this.dsMaster.rowposition, "BUNBAN");
        	objRtnArr[28] = this.dsMaster.getColumn(this.dsMaster.rowposition, "BYEONDONG_CD");
        	objRtnArr[29] = this.dsMaster.getColumn(this.dsMaster.rowposition, "BYEONDONG_SEQ");
        	objRtnArr[30] = this.dsMaster.getColumn(this.dsMaster.rowposition, "BYEONDONG_DT");
        	objRtnArr[31] = this.dsMaster.getColumn(this.dsMaster.rowposition, "JIDOGYOSU_CD");
        	objRtnArr[32] = this.dsMaster.getColumn(this.dsMaster.rowposition, "JIDOGYOSU_NM");
        	objRtnArr[33] = this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKSEOKSA_TONGHAPGWAJEONG_YN");
        	objRtnArr[34] = this.dsMaster.getColumn(this.dsMaster.rowposition, "SUHEOM_NO");
        	objRtnArr[35] = this.dsMaster.getColumn(this.dsMaster.rowposition, "IPSI_YYYY");
        	objRtnArr[36] = this.dsMaster.getColumn(this.dsMaster.rowposition, "MOJIP_GBCD");
        	objRtnArr[37] = this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKNYEONJE_GBCD");
        	objRtnArr[38] = this.dsMaster.getColumn(this.dsMaster.rowposition, "GENDER_CD");
        	objRtnArr[39] = this.dsMaster.getColumn(this.dsMaster.rowposition, "GENDER_NM");
        	objRtnArr[40] = this.dsMaster.getColumn(this.dsMaster.rowposition, "GUKJEOK_CD");
        	objRtnArr[41] = this.dsMaster.getColumn(this.dsMaster.rowposition, "GYOJIK_POGI_YN");
        	objRtnArr[42] = this.dsMaster.getColumn(this.dsMaster.rowposition, "GYOJIK_POGI_DT");
        	objRtnArr[43] = this.dsMaster.getColumn(this.dsMaster.rowposition, "GYOJIK_POGI_SAYU");
        	objRtnArr[44] = this.dsMaster.getColumn(this.dsMaster.rowposition, "SERVICE_HAKJEOM_YN");
        	objRtnArr[45] = this.dsMaster.getColumn(this.dsMaster.rowposition, "OEGUKIN_YN");
        	objRtnArr[46] = this.dsMaster.getColumn(this.dsMaster.rowposition, "DONGPO_YN");
        	objRtnArr[47] = this.dsMaster.getColumn(this.dsMaster.rowposition, "BALSONGJUSO_GBCD");
        	objRtnArr[48] = this.dsMaster.getColumn(this.dsMaster.rowposition, "EMAIL");
        	objRtnArr[49] = this.dsMaster.getColumn(this.dsMaster.rowposition, "TEL_NO");
        	objRtnArr[50] = this.dsMaster.getColumn(this.dsMaster.rowposition, "POST_NO");
        	objRtnArr[51] = this.dsMaster.getColumn(this.dsMaster.rowposition, "ADDR1");
        	objRtnArr[52] = this.dsMaster.getColumn(this.dsMaster.rowposition, "ADDR2");
        	objRtnArr[53] = this.dsMaster.getColumn(this.dsMaster.rowposition, "PWD");
        	objRtnArr[54] = this.dsMaster.getColumn(this.dsMaster.rowposition, "BOHOJA_NM");
        	objRtnArr[55] = this.dsMaster.getColumn(this.dsMaster.rowposition, "BOHOJA_GWANGYE_GBCD");
        	objRtnArr[56] = this.dsMaster.getColumn(this.dsMaster.rowposition, "BOHOJA_TEL_NO");
        	objRtnArr[57] = this.dsMaster.getColumn(this.dsMaster.rowposition, "BOHOJA_HP_NO");
        	objRtnArr[58] = this.dsMaster.getColumn(this.dsMaster.rowposition, "BOHOJA_POST_NO");
        	objRtnArr[59] = this.dsMaster.getColumn(this.dsMaster.rowposition, "BOHOJA_ADDR1");
        	objRtnArr[60] = this.dsMaster.getColumn(this.dsMaster.rowposition, "BOHOJA_ADDR2");
        	objRtnArr[61] = this.dsMaster.getColumn(this.dsMaster.rowposition, "BOHOJA_JIKEOP");
        	objRtnArr[62] = this.dsMaster.getColumn(this.dsMaster.rowposition, "IPHAK_HAKGWA_CD");
        	objRtnArr[63] = this.dsMaster.getColumn(this.dsMaster.rowposition, "GOGYOGYEYEOL_GBCD");
        	objRtnArr[64] = this.dsMaster.getColumn(this.dsMaster.rowposition, "CHULSINGOGYO_JOLEOP_YYYY");
        	objRtnArr[65] = this.dsMaster.getColumn(this.dsMaster.rowposition, "CHULSINGOGYO_JOLEOP_DT");
        	objRtnArr[66] = this.dsMaster.getColumn(this.dsMaster.rowposition, "CHULSINGOGYO_CD");
        	objRtnArr[67] = this.dsMaster.getColumn(this.dsMaster.rowposition, "CHULSINGOGYO_NM");
        	objRtnArr[68] = this.dsMaster.getColumn(this.dsMaster.rowposition, "NEIS_GOGYO_CD");
        	objRtnArr[69] = this.dsMaster.getColumn(this.dsMaster.rowposition, "CHULSINGOGYO_GUKJEOK_CD");
        	objRtnArr[70] = this.dsMaster.getColumn(this.dsMaster.rowposition, "CHULSINDAEHAK_NM");
        	objRtnArr[71] = this.dsMaster.getColumn(this.dsMaster.rowposition, "CHULSINDAEHAK_HAKGWA_NM");
        	objRtnArr[72] = this.dsMaster.getColumn(this.dsMaster.rowposition, "CHULSINDAEHAK_JOLEOP_YYYY");
        	objRtnArr[73] = this.dsMaster.getColumn(this.dsMaster.rowposition, "CHULSINDAEHAK_JOLEOP_GBCD");
        	objRtnArr[74] = this.dsMaster.getColumn(this.dsMaster.rowposition, "DAEHAK_GBCD");
        	objRtnArr[75] = this.dsMaster.getColumn(this.dsMaster.rowposition, "JEONGWONNAEOE_GBCD");
        	objRtnArr[76] = this.dsMaster.getColumn(this.dsMaster.rowposition, "IPHAK_JEONHYEONG_GBCD");
        	objRtnArr[77] = this.dsMaster.getColumn(this.dsMaster.rowposition, "IPHAK_TYCD");
        	objRtnArr[78] = this.dsMaster.getColumn(this.dsMaster.rowposition, "IPHAK_GBCD");
        	objRtnArr[79] = this.dsMaster.getColumn(this.dsMaster.rowposition, "PYEONIP_HAKNYEON");
        	objRtnArr[80] = this.dsMaster.getColumn(this.dsMaster.rowposition, "JOLEOP_YYYY");
        	objRtnArr[81] = this.dsMaster.getColumn(this.dsMaster.rowposition, "JOLEOP_HAKGI");
        	objRtnArr[82] = this.dsMaster.getColumn(this.dsMaster.rowposition, "JOLEOP_HOETSU");
        	objRtnArr[83] = this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKWI_DEUNGROK_NO1");
        	objRtnArr[84] = this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKWI_DEUNGROK_NO2");
        	objRtnArr[85] = this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKWI_CD1");
        	objRtnArr[86] = this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKWI_CD2");
        	objRtnArr[87] = this.dsMaster.getColumn(this.dsMaster.rowposition, "BALGEUP_BULGA_SAYU");
        	objRtnArr[88] = this.dsMaster.getColumn(this.dsMaster.rowposition, "BALGEUP_BULGA_DT");

        	this.close(objRtnArr.toString());
        };

        this.btnClose_onclick = function(obj,e)
        {
        	this.close("CLOSE");
        };

        this.divSearch_edtSearchHakbeonNm_onkeydown = function(obj,e)
        {
        	if (obj.name == "edtSearchHakbeonNm")
        	{
        		//13(Enter) 누르면 조회
        		if(e.keycode == 13)
        		{
        			this.ds_input.setColumn(0,"HAKBEON_NM",obj.value);
        			this.fn_Ret();
        		}
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
        	strComb     = "TT";
        	svcId       = "hakgwaInit";
        	strUseYn    = "1"; // 사용 여부
        	strJojikGbcd = "20";  // 조직구분 10.행정조직   20.학사조직   30.입시조직

        	if(this.gfn_isNull(e.postvalue))
        		strUpDeptCd = "";
        	else
        		strUpDeptCd = e.postvalue;

        	this.gfn_HakgwaComboLoad(this.divSearch.form.cboSearchHakgwa, strComb, svcId, strUseYn, strJojikGbcd, strUpDeptCd, this.menuId);
        };

        /**
          * 전공 필터 적용
         **/
        this.cboSearchHakgwa_onitemchanged = function(obj,e)
        {
        	// gfn_JeongongComboLoad(데이터셋, 콤보 옵션)
        	// 전공콤보
        	strDs       = "dsJeongong";
        	strComb     = "TT";
        	svcId       = "jeongongInit";
        	strUseYn    = "1"; // 사용 여부
        	strJojikGbcd = "20";  // 조직구분 10.행정조직   20.학사조직   30.입시조직

        	if(this.gfn_isNull(e.postvalue))
        		strUpDeptCd = "";
        	else
        		strUpDeptCd = e.postvalue;

        	this.gfn_JeongongComboLoad(this.divSearch.form.cboSearchJeongong, strComb, svcId, strUseYn, strJojikGbcd, strUpDeptCd, this.menuId);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("oncelldblclick",this.grdMaster_oncelldblclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.btnChoice.addEventHandler("onclick",this.btnChoice_onclick,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onitemchanged",this.cboSearchHakgwa_onitemchanged,this);
            this.divSearch.form.cboSearchGyeyeol.addEventHandler("onitemchanged",this.cboSearchGyeyeol_onitemchanged,this);
            this.divSearch.form.edtSearchHakbeonNm.addEventHandler("onkeydown",this.divSearch_edtSearchHakbeonNm_onkeydown,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
        };
        this.loadIncludeScript("COMM_P04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
