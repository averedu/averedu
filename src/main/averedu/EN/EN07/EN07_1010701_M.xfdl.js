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
            this.set_titletext("지원자현황");
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
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"MOJIP_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JUYA_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"JEONHYEONG_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONHYEONG_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"SEBUJEONHYEONG_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SEBUJEONHYEONG_TYCD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONGONG_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"JANGSO_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SUHEOMSAENG_NM\" type=\"STRING\" size=\"40\"/><Column id=\"RES_NO1\" type=\"STRING\" size=\"6\"/><Column id=\"RES_NO2\" type=\"STRING\" size=\"200\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"8\"/><Column id=\"BIRTHDAY1\" type=\"STRING\" size=\"65532\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"NAEOEGUKIN_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"POST\" type=\"STRING\" size=\"6\"/><Column id=\"JUSO_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JUSO\" type=\"STRING\" size=\"500\"/><Column id=\"SANGSE_JUSO\" type=\"STRING\" size=\"500\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"50\"/><Column id=\"HP_NO\" type=\"STRING\" size=\"15\"/><Column id=\"HP_NO1\" type=\"STRING\" size=\"65532\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"15\"/><Column id=\"TEL_NO1\" type=\"STRING\" size=\"65532\"/><Column id=\"CHUGA_YEONRAKCHEO\" type=\"STRING\" size=\"15\"/><Column id=\"CHUGA_YEONRAKCHEO1\" type=\"STRING\" size=\"65532\"/><Column id=\"GOGYO_CD\" type=\"STRING\" size=\"10\"/><Column id=\"GOGYO_NM\" type=\"STRING\" size=\"100\"/><Column id=\"GWANSIMGOGYO_NM\" type=\"STRING\" size=\"100\"/><Column id=\"CHULSIN_GOGYO_CD\" type=\"STRING\" size=\"10\"/><Column id=\"GOGYOGYEYEOL_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"GOGYOJOLEOP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"GOGYOJOLEOP_YEJEONG_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"TERM1_KOR_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TERM1_ENG_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TERM2_KOR_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TERM2_ENG_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TERM3_KOR_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TERM3_ENG_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHOEGEUN_HAKGI_KOR_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHOEGEUN_HAKGI_ENG_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYOGWAMOK_CHONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TERM2_SEOKCHA_CHONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOTAL_SEOKCHA_CHONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GEOMJEONGGOSI_CD\" type=\"STRING\" size=\"10\"/><Column id=\"GEOMJEONGGOSI_NM\" type=\"STRING\" size=\"100\"/><Column id=\"GEOMJEONGGOSI_HOECHA\" type=\"STRING\" size=\"10\"/><Column id=\"AVG_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HAPGYEOK_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"DONGUI_NO\" type=\"STRING\" size=\"20\"/><Column id=\"GEOMJEONGGOSI_BAEKBUNYUL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GEOMJEONGGOSI_KOR_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GEOMJEONGGOSI_ENG_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GEOMJEONGGOSI_CHONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHULSIN_DAEHAK_NM\" type=\"STRING\" size=\"200\"/><Column id=\"DAEHAKJOLEOP_YEJEONG_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"DAEHAKJOLEOP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"AVG_PYEONGJEOM_BAEKBUNYUL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHONGISU_HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHOEGEUN_HAKGI_PYEONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GIJUN_PYEONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PYEONGJEOM_CHONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"MYEONJEOP_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SILGI_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHONGDEUNGGEUP\" type=\"STRING\" size=\"10\"/><Column id=\"BANK_NM\" type=\"STRING\" size=\"50\"/><Column id=\"GYEJWA_NO\" type=\"STRING\" size=\"50\"/><Column id=\"YEGEUMJU\" type=\"STRING\" size=\"40\"/><Column id=\"YEGEUMJU_GWANGYE\" type=\"STRING\" size=\"20\"/><Column id=\"SUSI_HAPGYEOK_YN\" type=\"STRING\" size=\"2\"/><Column id=\"HAKSAENGBU_ONLINEJEGONGDONGUI_YN\" type=\"STRING\" size=\"10\"/><Column id=\"SUJIP_DONGUI_YN\" type=\"STRING\" size=\"2\"/><Column id=\"GOYUSIKBYEOL_INFO_DONGUI_YN\" type=\"STRING\" size=\"2\"/><Column id=\"INFO_WITAK_DONGUI_YN\" type=\"STRING\" size=\"2\"/><Column id=\"INFO_3JA_JEGONG_DONGUI_YN\" type=\"STRING\" size=\"2\"/><Column id=\"JEONHYEONGRYONAPBU_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONHYEONGRYONAPBU_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"MYEONJE_SAYU_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JEOPSUJA1\" type=\"STRING\" size=\"10\"/><Column id=\"JEOPSUJA2\" type=\"STRING\" size=\"10\"/><Column id=\"NAEYONG_HWAKIN_YN\" type=\"STRING\" size=\"2\"/><Column id=\"CHOECHOHAPGYEOK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"CHOECHOHAPGYEOK_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"HAPGYEOK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"HAPGYEOK_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"YEBIHAPGYEOKHUBO_SEOKCHA\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BULHAPGYEOK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"MIDEUNGROK_SEBU_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"BULHAPGYEOK_DT\" type=\"STRING\" size=\"8\"/><Column id=\"JEOPSU_DTTM\" type=\"STRING\" size=\"14\"/><Column id=\"CHULSIN_HAKGYO\" type=\"STRING\" size=\"200\"/><Column id=\"JOLEOPHAPGYEOK_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"DELETE_YN\" type=\"STRING\" size=\"2\"/><Column id=\"DELETE_SAYU\" type=\"STRING\" size=\"1000\"/><Column id=\"SEBUJIYEOK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"YECHIGEUM_DEUNGROK_STCD\" type=\"STRING\" size=\"10\"/><Column id=\"YECHIGEUM_POGI_SAYU\" type=\"STRING\" size=\"10\"/><Column id=\"YECHIGEUM_HWANBUL_YN\" type=\"STRING\" size=\"2\"/><Column id=\"BONDEUNGROK_DEUNGROK_STCD\" type=\"STRING\" size=\"10\"/><Column id=\"BONDEUNGROK_POGI_SAYU\" type=\"STRING\" size=\"10\"/><Column id=\"BONDEUNGROK_HWANBUL_YN\" type=\"STRING\" size=\"2\"/><Column id=\"SEBUJEONHYEONG_GBNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCDTO\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONHYEONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SEBUJEONHYEONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"HAPGYEOK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOMSAENG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JIYEOK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"GOGYO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GOGYO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GWANSIMGOGYO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JEOPSUJA\" type=\"STRING\" size=\"256\"/><Column id=\"JANGSO_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONHYEONGRYONAPBU_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JEOPSU_FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"JEOPSU_TODT\" type=\"STRING\" size=\"256\"/><Column id=\"DEUNGROK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"DEUNGROK_GBCD1\" type=\"STRING\" size=\"256\"/><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gijunYyyy", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_hakgwaCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"IPSI_DEPT_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_juyaGbcd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mojipGbcd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HYEONJAE_MOJIP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"JEOPSU_FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"JEOPSU_TODT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_jeonhyeong", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"JEONHYEONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONHYEONG_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sebujeonhyeong", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SEBUJEONHYEONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SEBUJEONHYEONG_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHapgyeok", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJeonhyeongryo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDeungrokja", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_jeongongCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UP_DEPT_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJiyeok", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Jeopsuja", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"JEOPSUJA\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_hakgyo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GOGYO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GOGYO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JIYEOK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SEBUJIYEOK_GBCD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPogisayu", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDeungrok", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJangso", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdMaster","0","185",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_readonly("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"54\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"73\"/><Column size=\"184\"/><Column size=\"180\"/><Column size=\"119\"/><Column size=\"169\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"198\"/><Column size=\"100\"/><Column size=\"83\"/><Column size=\"100\"/><Column size=\"82\"/><Column size=\"68\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"71\"/><Column size=\"80\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"수험번호\"/><Cell col=\"2\" text=\"합격구분\"/><Cell col=\"3\" text=\"모집구분\"/><Cell col=\"4\" text=\"지망학과\"/><Cell col=\"5\" text=\"지망전공\"/><Cell col=\"6\" text=\"전형구분\"/><Cell col=\"7\" text=\"세부전형\"/><Cell col=\"8\" text=\"주야구분\"/><Cell col=\"9\" text=\"성명\"/><Cell col=\"10\" text=\"생년월일\"/><Cell col=\"11\" text=\"전화번호\"/><Cell col=\"12\" text=\"휴대폰\"/><Cell col=\"13\" text=\"추가연락처\"/><Cell col=\"14\" text=\"출신학교\"/><Cell col=\"15\" text=\"졸업(합격)년도\"/><Cell col=\"16\" text=\"접수자\"/><Cell col=\"17\" text=\"전형료\"/><Cell col=\"18\" text=\"예치금\"/><Cell col=\"19\" text=\"환불여부\"/><Cell col=\"20\" text=\"예치금&#13;&#10;포기사유\"/><Cell col=\"21\" text=\"본등록\"/><Cell col=\"22\" text=\"환불여부\"/><Cell col=\"23\" text=\"본등록&#13;&#10;포기사유\"/></Band><Band id=\"body\"><Cell textAlign=\"center\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\" suppressalign=\"first\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:SUHEOM_NO\" editmaxlength=\"10\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:HAPGYEOK_GBNM\" editmaxlength=\"100\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:MOJIP_GBNM\" editmaxlength=\"4\" editinputtype=\"number\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:HAKGWA_NM\" editmaxlength=\"4\" editinputtype=\"number\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:JEONGONG_NM\" editmaxlength=\"8\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" editmaxlength=\"8\" text=\"bind:JEONHYEONG_GBNM\"/><Cell col=\"7\" text=\"bind:SEBUJEONHYEONG_GBNM\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"8\" text=\"bind:JUYA_GBNM\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"9\" text=\"bind:SUHEOMSAENG_NM\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"10\" text=\"bind:BIRTHDAY1\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"11\" text=\"bind:TEL_NO\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"12\" text=\"bind:HP_NO\"/><Cell col=\"13\" text=\"bind:CHUGA_YEONRAKCHEO\"/><Cell col=\"14\" text=\"bind:CHULSIN_HAKGYO\"/><Cell col=\"15\" text=\"bind:JOLEOPHAPGYEOK_YYYY\"/><Cell col=\"16\" text=\"bind:JEOPSUJA1\"/><Cell col=\"17\" text=\"bind:JEONHYEONGRYONAPBU_GBNM\"/><Cell col=\"18\" text=\"bind:YECHIGEUM_DEUNGROK_STCD\" edittype=\"none\" displaytype=\"combotext\" combodataset=\"dsDeungrok\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"19\" text=\"expr:YECHIGEUM_HWANBUL_YN == &apos;1&apos; ? &apos;환불&apos; : &apos;&apos;\"/><Cell col=\"20\" text=\"bind:YECHIGEUM_POGI_SAYU\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"dsPogisayu\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"21\" text=\"bind:BONDEUNGROK_DEUNGROK_STCD\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"dsDeungrok\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"22\" text=\"expr:BONDEUNGROK_HWANBUL_YN == &apos;1&apos; ? &apos;환불&apos; : &apos;&apos;\"/><Cell col=\"23\" text=\"bind:BONDEUNGROK_POGI_SAYU\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"dsPogisayu\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","500","150","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","0","160",null,"22","1485",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("지원자 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","107","159",null,"24","1410",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","177","320","8",null,null,null,null,null,null,this);
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

            obj = new Div("divSearch","0","0",null,"150","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_02","26","31","1600","5",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 6pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","16","0","1620","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","20","139","1610","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01","518","36","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            obj.set_text("주야구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01_00","791","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("25");
            obj.set_text("지원자");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01","1060","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("26");
            obj.set_text("수험번호");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00","8","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("27");
            obj.set_text("입시년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","100","9","183","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_cssclass("point");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","307","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("28");
            obj.set_text("모집구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchMojip","400","9","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_codecolumn("MOJIP_GBCD");
            obj.set_datacolumn("MOJIP_NM");
            obj.set_innerdataset("ds_mojipGbcd");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","147",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("29");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","90","0","10","147",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("30");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","331","114","10","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("31");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01","465","110","56","35",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("32");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","632","33","10","83",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("33");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00","811","117","56","27",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("34");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01","873","0","10","118",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("35");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_01","283","3","56","114",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("36");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJuya","642","36","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_codecolumn("JUYA_GBCD");
            obj.set_datacolumn("JUYA_NM");
            obj.set_innerdataset("ds_juyaGbcd");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00_00","1016","-1","56","60",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("37");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_02","761","36","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("38");
            obj.set_text("전형구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00","1145","0","10","63",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("39");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJeonhyeong","883","36","133","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_codecolumn("JEONHYEONG_GBCD");
            obj.set_datacolumn("JEONHYEONG_NM");
            obj.set_innerdataset("ds_jeonhyeong");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchNm","883","9","133","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchSuheomNo","1155","9","183","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_02_00","26","58","1600","5",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("40");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 6pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_03","318","36","70","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("41");
            obj.set_text("지원전공");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJeongong","400","36","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_innerdataset("ds_jeongongCd");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_02_00_00","26","85","1600","5",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("42");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 6pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_01_00_00","-23","117","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("43");
            obj.set_text("주소추가");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_03_00","278","63","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("44");
            obj.set_text("관심지역");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJiyeok","400","63","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsJiyeok");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_03_00_00","518","63","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("45");
            obj.set_text("관심학교");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgyo","642","63","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_codecolumn("GOGYO_NM");
            obj.set_datacolumn("GOGYO_NM");
            obj.set_innerdataset("ds_hakgyo");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_01","-23","63","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("46");
            obj.set_text("고교검색");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchGogyoCd","100","63","151","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("47");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearchGogyo","261","63","22","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_PopSrch");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_02","251","60","10","27",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("48");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_02_01","8","90","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("49");
            obj.set_text("접수자");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJeopsuja","100","90","183","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_codecolumn("JEOPSUJA");
            obj.set_datacolumn("JEOPSUJA");
            obj.set_innerdataset("ds_Jeopsuja");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_02_01_00","548","90","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("50");
            obj.set_text("전형료");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJeonhyeongryo","642","90","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsJeonhyeongryo");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_03_00_01","761","90","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("51");
            obj.set_text("접수일자");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00","1062","90","16","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("52");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkSearchJuso","100","118","50","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("유무");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_01_00_01","153","115","56","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("53");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_02_02","191","117","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("54");
            obj.set_text("합격구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkSearchHapgyeok","283","118","50","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("유무");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_02_00_00","273","117","10","27",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("55");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHapgyeok","341","117","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsHapgyeok");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staSearchYechigeum","489","117","128","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("56");
            obj.set_text("등록(예치금)구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkSearchYechigeum","629","118","50","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("유무");
            obj.set_visible("false");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchYechigeum","687","117","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsDeungrokja");
            obj.set_visible("false");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staSearchDeungrok","848","117","68","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("57");
            obj.set_text("등록구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_02_00_00_01_00","918","117","10","27",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("58");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkSearchDeungrok","928","118","50","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("유무");
            obj.set_visible("false");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_02_00_00_00_00_00","976","117","10","27",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("59");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchDeungrok","986","117","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsDeungrokja");
            obj.set_visible("false");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calSearchJeopsuFrDt","883","90","165","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_dateformat("yyyy-MM-dd");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calSearchJeopsuToDt","1091","90","165","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_dateformat("yyyy-MM-dd");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","544","9","16","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("60");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchMojipTo","580","9","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("61");
            obj.set_codecolumn("MOJIP_GBCD");
            obj.set_datacolumn("MOJIP_NM");
            obj.set_innerdataset("ds_mojipGbcd");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00_00","9","36","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("62");
            obj.set_text("지원학과");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgwa","100","36","183","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("63");
            obj.set_innerdataset("ds_hakgwaCd");
            obj.set_codecolumn("IPSI_DEPT_CD");
            obj.set_datacolumn("HAKGWA_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_01_00","524","32","56","86",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("64");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_01_00_00","766","2","56","116",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("65");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_02_00_00","1035","36","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("66");
            obj.set_text("세부전형구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchSebu","1155","36","183","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("67");
            obj.set_codecolumn("SEBUJEONHYEONG_GBCD");
            obj.set_datacolumn("SEBUJEONHYEONG_NM");
            obj.set_innerdataset("ds_sebujeonhyeong");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01","390","0","10","117",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("68");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_03_00_02","278","90","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("69");
            obj.set_text("접수처");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJangso","400","90","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("70");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsJangso");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_02_00_00_00","26","112","1600","5",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("71");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 6pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("지원자현황");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item13","divSearch.form.spnSearchYYYY","value","ds_input","IPSI_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divSearch.form.cboSearchMojip","value","ds_input","MOJIP_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboSearchJuya","value","ds_input","JUYA_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.cboSearchJeonhyeong","value","ds_input","JEONHYEONG_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtSearchSuheomNo","value","ds_input","SUHEOM_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.edtSearchNm","value","ds_input","SUHEOMSAENG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.cboSearchJeongong","value","ds_input","JEONGONG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.cboSearchJiyeok","value","ds_input","JIYEOK_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.cboSearchHakgyo","value","ds_input","GWANSIMGOGYO_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.cboSearchJeopsuja","value","ds_input","JEOPSUJA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSearch.form.cboSearchJeonhyeongryo","value","ds_input","JEONHYEONGRYONAPBU_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divSearch.form.cboSearchHapgyeok","value","ds_input","HAPGYEOK_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divSearch.form.cboSearchYechigeum","value","ds_input","DEUNGROK_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divSearch.form.cboSearchDeungrok","value","ds_input","DEUNGROK_GBCD1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divSearch.form.edtSearchGogyoCd","value","ds_input","GOGYO_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divSearch.form.calSearchJeopsuFrDt","value","ds_input","JEOPSU_FRDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divSearch.form.calSearchJeopsuToDt","value","ds_input","JEOPSU_TODT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divSearch.form.cboSearchMojipTo","value","ds_input","MOJIP_GBCDTO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboSearchJangso","value","ds_input","JANGSO_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.cboSearchHakgwa","value","ds_input","HAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divSearch.form.cboSearchSebu","value","ds_input","SEBUJEONHYEONG_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("EN07_1010701_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): EN07_1010701_M.xfdl(지원자현황)
        * 작 성         일 명: 백재인
        * 작 성         일 자: 2021/06/21
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
            var strDs    = "dsHapgyeok|dsJeonhyeongryo|dsDeungrokja|dsJiyeok|dsPogisayu|dsDeungrok|dsJangso";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "01014|01013|01052|00054|03010|03009|01005";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "T|T|T|T|T|X|T";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
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
        	this.fn_Hakgyo();
        };

        this.fn_PostInit = function()
        {
        	for(var i=0; i<this.dsDeungrok.rowcount; i++)
        	{
        		if(this.dsDeungrok.getColumn(i, "CODE") == "9")
        		{
        			this.dsDeungrok.deleteRow(i);
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
        			case "Jeopsuja":
                            this.fn_PostJeopsuja();
                        break;
        			case "Jeongong":
                            this.fn_PostJeongong();
                        break;
        			case "MojipGb":
                            this.fn_PostMojipGb();
                        break;
        			case "Hakgwa":
                            this.fn_PostHakgwa();
                        break;
        			case "Juya":
                            this.fn_PostJuya();
                        break;
        			case "Jeonhyeong":
                            this.fn_PostJeonhyeong();
                        break;
        			case "SebuJeonhyeong":
                            this.fn_PostSebuJeonhyeong();
                        break;
        			case "Hakgyo":
                            this.fn_PostHakgyo();
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
        		case "gogyo" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        		            this.ds_input.setColumn(0, "GOGYO_CD", sRtn[0]);
        					this.ds_input.setColumn(0, "GOGYO_NM", sRtn[1]);
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
        		case "print" :       // 출력
                         this.fn_Print();
                    break;
                case "tmp1" :        // 팁
                         this.fn_Tip();
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
            // 조회조건 셋팅
        	var startDt = this.ds_input.getColumn(0, "JEOPSU_FRDT");
        	var endDt = this.ds_input.getColumn(0, "JEOPSU_TODT");

        	if(this.ds_input.getColumn(0, "IPSI_YYYY") == null || this.ds_input.getColumn(0, "IPSI_YYYY") == '')
        	{
        		this.alert("입시년도를 입력해주세요.");
        		return false;
        	}

        	if(!this.gfn_isNull(startDt) && this.gfn_isNull(startDt))
        	{
        		this.ds_input.setColumn(0, "GUBUN", "0");
        	}
        	else if(!this.gfn_isNull(startDt) && !this.gfn_isNull(endDt))
        	{
        		if(startDt > endDt)
        		{
        			this.alert("접수일자를 확인해주세요.");
        			return false;
        		}
        		else
        		{
        			this.ds_input.setColumn(0, "GUBUN", "1");
        		}
        	}
        	else if(this.gfn_isNull(startDt) && !this.gfn_isNull(endDt))
        	{
        		this.alert("접수일자를 확인해주세요.");
        		return false;
        	}
        	else if(this.gfn_isNull(startDt) && this.gfn_isNull(endDt))
        	{
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
            var strUrl      = "/prj/EN/EN07/Retrieve_1010701_M.do";
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
                06. 팁
        ***********************************************************************/
        this.fn_Tip = function()
        {
        	this.alert("도움말 준비중입니다.");
        };

        /**********************************************************************
                07. 출력
        ***********************************************************************/
        this.fn_Print = function()
        {
        	var IPSI_YYYY				= this.ds_input.getColumn(0, "IPSI_YYYY");
        	var MOJIP_GBCD 				= this.ds_input.getColumn(0, "MOJIP_GBCD");
        	var JEOPSU_FRDT				= this.ds_input.getColumn(0, "JEOPSU_FRDT");
        	var JEOPSU_TODT				= this.ds_input.getColumn(0, "JEOPSU_TODT");
        	var GUBUN					= "";	// 0 : 일계, 1: 누계
        	var GWANSIMGOGYO_NM 		= "";
        	var HAKGWA_CD 				= this.ds_input.getColumn(0, "HAKGWA_CD");
        	var JEONGONG_CD 			= this.ds_input.getColumn(0, "JEONGONG_CD");
        	var SUHEOMSAENG_NM 			= this.ds_input.getColumn(0, "SUHEOMSAENG_NM");
        	var SUHEOM_NO 				= this.ds_input.getColumn(0, "SUHEOM_NO");
        	var JUYA_GBCD 				= this.ds_input.getColumn(0, "JUYA_GBCD");
        	var JEONHYEONG_GBCD 		= this.ds_input.getColumn(0, "JEONHYEONG_GBCD");
        	var SEBUJEONHYEONG_GBCD 	= this.ds_input.getColumn(0, "SEBUJEONHYEONG_GBCD");
        	var JIYEOK_GBCD 			= this.ds_input.getColumn(0, "JIYEOK_GBCD");
        	var JEOPSUJA 				= this.ds_input.getColumn(0, "JEOPSUJA");
        	var GOGYO_NM 				= this.ds_input.getColumn(0, "GOGYO_NM");
        	var JANGSO_GBCD 			= this.ds_input.getColumn(0, "JANGSO_GBCD");
        	var JEONHYEONGRYONAPBU_GBCD = this.ds_input.getColumn(0, "JEONHYEONGRYONAPBU_GBCD");
        	var HAPGYEOK_GBCD 			= this.ds_input.getColumn(0, "HAPGYEOK_GBCD");
        	var DEUNGROK_GBCD 			= this.ds_input.getColumn(0, "DEUNGROK_GBCD");
        	var DEUNGROK_GBCD1 			= this.ds_input.getColumn(0, "DEUNGROK_GBCD1");
        	// 테스트용 아이디 '2031'
        	//var INSERT_ID 				= objApp.gds_userInfoDb.getColumn(0,"USER_ID");
        	var INSERT_ID 				= '2031'
        	var INSERT_PG				= 'H020107001';

        	if(this.ds_input.getColumn(0, "JIYEOK_GBCD") == '' || this.ds_input.getColumn(0, "JIYEOK_GBCD") == null)
        	{
        		GWANSIMGOGYO_NM = '';
        	}
        	else
        	{
        		GWANSIMGOGYO_NM = nexacro.wrapQuote(this.ds_input.getColumn(0, "GWANSIMGOGYO_NM"));
        	}


        	if(IPSI_YYYY == "" || IPSI_YYYY == null)
        	{
        		this.alert("입시년도를 입력해주세요.");
        		return false;
        	}

        	if(JEOPSU_FRDT!='' && JEOPSU_TODT=='')
        	{
        		GUBUN = "0";
        	}
        	else if(JEOPSU_FRDT!="" && JEOPSU_TODT!="")
        	{
        		if(JEOPSU_FRDT > JEOPSU_TODT!="")
        		{
        			this.alert("접수일자를 확인해주세요.");
        			return false;
        		}
        		else
        		{
        			GUBUN = "1";
        		}
        	}
        	else if(JEOPSU_FRDT=="" && JEOPSU_TODT!="")
        	{
        		this.alert("접수일자를 확인해주세요.");
        		return false;
        	}
        	else if(JEOPSU_FRDT == "" && JEOPSU_TODT == "")
        	{
        		this.alert("접수일자를 확인해주세요.");
        		return false;
        	}

        // MENU_ID를 TOBE 형태로 바꿀시 주석해제 그전까지는 'H020107001'고정
        // 	for(var i=0; i<objApp.gds_Menu.rowcount; i ++)
        // 	{
        // 		if(objApp.gds_Menu.getColumn(i, "FORM_ID") == 'EN07_1010701_M.xfdl')
        // 		{
        // 			INSERT_PG = objApp.gds_Menu.getColumn(i, "MENU_ID");
        // 		}
        // 	}

        	var param =   { IPSI_YYYY:IPSI_YYYY
        				  , MOJIP_GBCD:MOJIP_GBCD
        				  , HAKGWA_CD:HAKGWA_CD
        				  , JEONGONG_CD:JEONGONG_CD
        				  , SUHEOMSAENG_NM:SUHEOMSAENG_NM
        				  , SUHEOM_NO:SUHEOM_NO
        				  , JUYA_GBCD:JUYA_GBCD
        				  , JEONHYEONG_GBCD:JEONHYEONG_GBCD
        				  , SEBUJEONHYEONG_GBCD:SEBUJEONHYEONG_GBCD
        				  , JIYEOK_GBCD:JIYEOK_GBCD
        				  , GOGYO_NM:GOGYO_NM
        				  , JEOPSUJA:JEOPSUJA
        				  , JANGSO_GBCD:JANGSO_GBCD
        				  , JEONHYEONGRYONAPBU_GBCD:JEONHYEONGRYONAPBU_GBCD
        				  , GUBUN:GUBUN
        				  , JEOPSU_FRDT:JEOPSU_FRDT
        				  , JEOPSU_TODT:JEOPSU_TODT
        				  , HAPGYEOK_GBCD:HAPGYEOK_GBCD
        				  , GWANSIMGOGYO_NM:GWANSIMGOGYO_NM
        				  , INSERT_ID:INSERT_ID
        				  , INSERT_PG:INSERT_PG
        				  , DEUNGROK_GBCD:DEUNGROK_GBCD
        				  , DEUNGROK_GBCD1:DEUNGROK_GBCD1
        				  }

        	this.gfn_commonUtils_report('EN07/EN07_1010701_M_01.crf',  param);
        };

        /**********************************************************************
                08. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj,e)
        {
            this.gfn_gridSort(obj,e);
        };

        // 모집구분 변경시
        this.divSearch_cboSearchMojip_onitemchanged = function(obj,e)
        {
        	this.fn_Hakgwa();

        	this.divSearch.form.chkSearchHapgyeok.set_value("N");
        	this.divSearch.form.chkSearchYechigeum.set_value("N");
        	this.divSearch.form.chkSearchDeungrok.set_value("N");

        	this.divSearch.form.cboSearchHapgyeok.set_enable(true);

        	this.divSearch.form.staSearchYechigeum.set_visible(false);
        	this.divSearch.form.chkSearchYechigeum.set_visible(false);
        	this.divSearch.form.cboSearchYechigeum.set_visible(false);
        	this.divSearch.form.chkSearchHapgyeok.set_enable(true);
        	this.divSearch.form.chkSearchYechigeum.set_enable(true);
        	this.divSearch.form.chkSearchDeungrok.set_enable(true);

        	this.grdMaster.setFormatColProperty(19, "size", 0);
        	this.grdMaster.setFormatColProperty(20, "size", 0);
        	this.divSearch.form.staSearchDeungrok.set_visible(false);
        	this.divSearch.form.chkSearchDeungrok.set_value("");
        	this.divSearch.form.chkSearchDeungrok.set_visible(false);
        	this.divSearch.form.cboSearchDeungrok.set_visible(false);

        	var JEOPSU_FRDT = this.ds_mojipGbcd.getColumn(obj.index, "JEOPSU_FRDT");
        	var JEOPSU_TODT = this.ds_mojipGbcd.getColumn(obj.index, "JEOPSU_TODT");

        	this.ds_input.setColumn(0, "JEOPSU_FRDT", JEOPSU_FRDT);
        	this.ds_input.setColumn(0, "JEOPSU_TODT", JEOPSU_TODT);

        	this.ds_input.setColumn(0, "MOJIP_GBCDTO", this.ds_input.getColumn(0, "MOJIP_GBCD"));
        };

        // 주소 유무 체크시
        this.divSearch_chkSearchJuso_onchanged = function(obj,e)
        {
        	if(this.divSearch.form.chkSearchJuso.value == "Y")
        	{
        		this.grdMaster.setFormatColProperty(10, "size", 100);
        		this.grdMaster.setFormatColProperty(11, "size", 300);
        		this.grdMaster.setFormatColProperty(12, "size", 200);
        	}
        	else
        	{
        		this.grdMaster.setFormatColProperty(10, "size", 0);
        		this.grdMaster.setFormatColProperty(11, "size", 0);
        		this.grdMaster.setFormatColProperty(12, "size", 0);
        	}
        };

        // 합격구분 유무 체크시
        this.divSearch_chkSearchHapgyeok_onchanged = function(obj,e)
        {
        	var MOJIP_GBCD = this.ds_input.getColumn(0, "MOJIP_GBCD");

        	if(this.divSearch.form.chkSearchHapgyeok.value == 'Y')
        	{
        		if(MOJIP_GBCD == '1' || MOJIP_GBCD == '2' || MOJIP_GBCD == '')
        		{
        			this.divSearch.form.staSearchYechigeum.set_visible(true);
        			this.divSearch.form.chkSearchYechigeum.set_visible(true);
        			this.divSearch.form.cboSearchYechigeum.set_visible(true);
        			this.divSearch.form.cboSearchHapgyeok.set_enable(true);
        		}
        		this.divSearch.form.staSearchDeungrok.set_visible(true);
        		this.divSearch.form.chkSearchDeungrok.set_visible(true);
        		this.divSearch.form.cboSearchDeungrok.set_visible(true);

        		this.grdMaster.setFormatColProperty(19, "size", 100);
        		this.grdMaster.setFormatColProperty(20, "size", 70);
        		this.grdMaster.setFormatColProperty(21, "size", 0);
        		this.grdMaster.setFormatColProperty(22, "size", 0);
        	}
        	else
        	{
        		this.divSearch.form.staSearchYechigeum.set_visible(false);
        		this.divSearch.form.chkSearchYechigeum.set_value("N");
        		this.divSearch.form.chkSearchYechigeum.set_visible(false);
        		this.divSearch.form.cboSearchYechigeum.set_visible(false);
        		this.divSearch.form.cboSearchHapgyeok.set_enable(true);

        		this.grdMaster.setFormatColProperty(19, "size", 0);
        		this.grdMaster.setFormatColProperty(20, "size", 0);
        		this.grdMaster.setFormatColProperty(21, "size", 0);
        		this.grdMaster.setFormatColProperty(22, "size", 0);
        		this.divSearch.form.staSearchDeungrok.set_visible(false);
        		this.divSearch.form.chkSearchDeungrok.set_value("N");
        		this.divSearch.form.chkSearchDeungrok.set_visible(false);
        		this.divSearch.form.cboSearchDeungrok.set_visible(false);
        	}
        };

        // 등록(예치금)구분 체크시
        this.divSearch_chkSearchYechigeum_onchanged = function(obj,e)
        {
        	if(this.divSearch.form.chkSearchYechigeum.value == "Y")
        	{
        		this.divSearch.form.cboSearchHapgyeok.set_enable(false);
        		this.divSearch.form.chkSearchHapgyeok.set_enable(false);
        		this.divSearch.form.cboSearchDeungrok.set_index(0);
        		this.divSearch.form.cboSearchYechigeum.set_enable(true);
        	}
        	else
        	{
        		this.divSearch.form.chkSearchYechigeum.set_enable(true);
        		this.divSearch.form.chkSearchHapgyeok.set_enable(true);
        		this.divSearch.form.cboSearchHapgyeok.set_enable(true);
        		this.divSearch.form.cboSearchYechigeum.set_index(0);
        	}
        };

        // 등록구분 체크시
        this.divSearch_chkSearchDeungrok_onchanged = function(obj,e)
        {
        	if(this.divSearch.form.chkSearchDeungrok.value == "Y")
        	{
        		this.divSearch.form.chkSearchYechigeum.set_enable(false);
        		this.divSearch.form.cboSearchYechigeum.set_enable(false);
        		this.divsearch.form.cboSearchYechigeum.set_index(0);
        		this.divSearch.form.cboSearchDeungrok.set_enable(true);
        	}
        	else
        	{
        		this.divSearch.form.chkSearchYechigeum.set_enable(true);
        		this.divSearch.form.cboSearchYechigeum.set_enable(true);
        		this.divSearch.form.cboSearchDeungrok.set_index(0);
        		this.divSearch.form.cboSearchDeungrok.set_enable(false);
        	}
        };

        /**********************************************************************
                09. 공통함수
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
        	this.fn_MojipGb();
        	this.fn_Jeopsuja();
        	this.fn_Jeongong();
        }

        // 접수자 가져오기
        this.fn_Jeopsuja = function()
        {
        	this.ds_Jeopsuja.deleteAll();

        	var strSvc      = "Jeopsuja";
            var strUrl      = "prj/EN/EN07/Retrieve_1010701_M_JEOPSUJA.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "ds_Jeopsuja=ds_Jeopsuja";
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

        this.fn_PostJeopsuja = function()
        {
        	this.ds_Jeopsuja.insertRow(0);
        	this.ds_Jeopsuja.setColumn(0, "JEOPSUJA", "전체");
        	this.divSearch.form.cboSearchJeopsuja.set_index(0);
        }

        // 전공 가져오기
        this.fn_Jeongong = function()
        {
        	this.ds_jeongongCd.deleteAll();

        	var strSvc      = "Jeongong";
            var strUrl      = "prj/EN/EN_COM/Retrieve_JEONGONG_CD.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "ds_jeongongCd=ds_jeongongCd";
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

        this.fn_PostJeongong = function()
        {
        	this.ds_jeongongCd.insertRow(0);
        	this.ds_jeongongCd.setColumn(0, "DEPT_CD", "");
        	this.ds_jeongongCd.setColumn(0, "DEPT_NM", "전체");
        	this.divSearch.form.cboSearchJeongong.set_index(0);
        }

        // 입시모집구분 가져오기
        this.fn_MojipGb = function()
        {
        	this.ds_mojipGbcd.deleteAll();
        	this.ds_hakgwaCd.deleteAll();
        	this.ds_juyaGbcd.deleteAll();
        	this.ds_jeonhyeong.deleteAll();
        	this.ds_sebujeonhyeong.deleteAll();

            var strSvc      = "MojipGb";
            var strUrl      = "prj/EN/EN_COM/Retrieve_IPSI_MOJIPGBCD.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "ds_mojipGbcd=ds_mojipGbcd";
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

        this.fn_PostMojipGb = function()
        {
        	var gubun;

        	this.ds_mojipGbcd.insertRow(0);
        	this.ds_mojipGbcd.setColumn(0, "MOJIP_GBCD", "");
        	this.ds_mojipGbcd.setColumn(0, "MOJIP_NM", "전체");
        	this.divSearch.form.cboSearchMojip.set_index(0);
        	this.divSearch.form.cboSearchMojipTo.set_index(0);

        	this.fn_Hakgwa();
        }

        // 입시학과 가져오기
        this.fn_Hakgwa = function()
        {
        	this.ds_hakgwaCd.deleteAll();
        	this.ds_juyaGbcd.deleteAll();
        	this.ds_jeonhyeong.deleteAll();
        	this.ds_sebujeonhyeong.deleteAll();

        	var strSvc      = "Hakgwa";
            var strUrl      = "prj/EN/EN_COM/Retrieve_HAKGWA_CD_FOR_JEONGONG.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "ds_hakgwaCd=ds_hakgwaCd";
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

        this.fn_PostHakgwa = function()
        {
        	this.ds_hakgwaCd.insertRow(0);
        	this.ds_hakgwaCd.setColumn(0, "IPSI_DEPT_CD", "");
        	this.ds_hakgwaCd.setColumn(0, "HAKGWA_NM", "전체");
        	this.divSearch.form.cboSearchHakgwa.set_index(0);

        	this.ds_juyaGbcd.insertRow(0);
        	this.ds_juyaGbcd.setColumn(0, "JUYA_GBCD", "");
        	this.ds_juyaGbcd.setColumn(0, "JUYA_NM", "전체");
        	this.divSearch.form.cboSearchJuya.set_index(0);

        	this.ds_jeonhyeong.insertRow(0);
        	this.ds_jeonhyeong.setColumn(0, "JEONHYEONG_GBCD", "");
        	this.ds_jeonhyeong.setColumn(0, "JEONHYEONG_NM", "전체");
        	this.divSearch.form.cboSearchJeonhyeong.set_index(0);

        	this.ds_sebujeonhyeong.insertRow(0);
        	this.ds_sebujeonhyeong.setColumn(0, "SEBUJEONHYEONG_GBCD", "");
        	this.ds_sebujeonhyeong.setColumn(0, "SEBUJEONHYEONG_NM", "전체");
        	this.divSearch.form.cboSearchSebu.set_index(0);
        }

        // 입시주야 가져오기
        this.fn_Juya = function()
        {
        	this.ds_juyaGbcd.deleteAll();
        	this.ds_jeonhyeong.deleteAll();
        	this.ds_sebujeonhyeong.deleteAll();

        	var strSvc      = "Juya";
            var strUrl      = "prj/EN/EN_COM/Retrieve_JUYAGBCD.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "ds_juyaGbcd=ds_juyaGbcd";
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

        this.fn_PostJuya = function()
        {
        	this.ds_juyaGbcd.insertRow(0);
        	this.ds_juyaGbcd.setColumn(0, "JUYA_GBCD", "");
        	this.ds_juyaGbcd.setColumn(0, "JUYA_NM", "전체");
        	this.divSearch.form.cboSearchJuya.set_index(0);

        	this.ds_jeonhyeong.insertRow(0);
        	this.ds_jeonhyeong.setColumn(0, "JEONHYEONG_GBCD", "");
        	this.ds_jeonhyeong.setColumn(0, "JEONHYEONG_NM", "전체");
        	this.divSearch.form.cboSearchJeonhyeong.set_index(0);

        	this.ds_sebujeonhyeong.insertRow(0);
        	this.ds_sebujeonhyeong.setColumn(0, "SEBUJEONHYEONG_GBCD", "");
        	this.ds_sebujeonhyeong.setColumn(0, "SEBUJEONHYEONG_NM", "전체");
        	this.divSearch.form.cboSearchSebu.set_index(0);
        }

        // 입시전형 가져오기
        this.fn_Jeonhyeong = function()
        {
        	this.ds_jeonhyeong.deleteAll();
        	this.ds_sebujeonhyeong.deleteAll();

        	var strSvc      = "Jeonhyeong";
            var strUrl      = "prj/EN/EN_COM/Retrieve_JEONHYEONG.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "ds_jeonhyeong=ds_jeonhyeong";
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

        this.fn_PostJeonhyeong = function()
        {
        	this.ds_jeonhyeong.insertRow(0);
        	this.ds_jeonhyeong.setColumn(0, "JEONHYEONG_GBCD", "");
        	this.ds_jeonhyeong.setColumn(0, "JEONHYEONG_NM", "전체");
        	this.divSearch.form.cboSearchJeonhyeong.set_index(0);

        	this.ds_sebujeonhyeong.insertRow(0);
        	this.ds_sebujeonhyeong.setColumn(0, "SEBUJEONHYEONG_GBCD", "");
        	this.ds_sebujeonhyeong.setColumn(0, "SEBUJEONHYEONG_NM", "전체");
        	this.divSearch.form.cboSearchSebu.set_index(0);
        }

        // 입시세부전형 가져오기
        this.fn_SebuJeonhyeong = function()
        {
        	this.ds_sebujeonhyeong.deleteAll();

        	var strSvc      = "SebuJeonhyeong";
            var strUrl      = "prj/EN/EN_COM/Retrieve_SEBUJEONHYEONG.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "ds_sebujeonhyeong=ds_sebujeonhyeong";
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

        this.fn_PostSebuJeonhyeong = function()
        {
        	this.ds_sebujeonhyeong.insertRow(0);
        	this.ds_sebujeonhyeong.setColumn(0, "SEBUJEONHYEONG_GBCD", "");
        	this.ds_sebujeonhyeong.setColumn(0, "SEBUJEONHYEONG_NM", "전체");
        	this.divSearch.form.cboSearchSebu.set_index(0);
        }

        // 관심학교 가져오기
        this.fn_Hakgyo = function()
        {
        	this.ds_hakgyo.deleteAll();

        	var strSvc      = "Hakgyo";
            var strUrl      = "prj/EN/EN07/Retrieve_1010701_M_HAKGYO.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "ds_hakgyo=ds_hakgyo";
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

        this.fn_PostHakgyo = function()
        {
        	this.ds_hakgyo.insertRow(0);
        	this.ds_hakgyo.setColumn(0, "GOGYO_CD", "");
        	this.ds_hakgyo.setColumn(0, "GOGYO_NM", "전체");
        	this.divSearch.form.cboSearchHakgyo.set_index(0);
        }

        /**********************************************************************
                10. 팝업
        ***********************************************************************/
        this.divSearch_btnSearchGogyo_onclick = function(obj,e)
        {
        	var oArg = {yyyy:this.ds_input.getColumn(0, "IPSI_YYYY")};
        	var oOption = {};
        	var sPopupCallBack = "fn_popupCallback";
        	this.gfn_openPopup("gogyo","EN01::EN01_1010106_P02.xfdl",oArg,sPopupCallBack,oOption);
        };

        /**********************************************************************
                11. 검색창 엔터키 조회
        ***********************************************************************/
        this.divSearch_spnSearchYYYY_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"IPSI_YYYY",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchMojip_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"MOJIP_GBCD",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchMojipTo_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"MOJIP_GBCDTO",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchHakgwa_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"HAKGWA_CD",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchJuya_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"JUYA_GBCD",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchJeonhyeong_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"JEONHYEONG_GBCD",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchSebu_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"SEBUJEONHYEONG_GBCD",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchHapgyeok_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"HAPGYEOK_GBCD",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_edtSearchSuheomNo_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"SUHEOM_NO",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_edtSearchNm_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"SUHEOMSAENG_NM",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchJeongong_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"JEONGONG_CD",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchJiyeok_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"JIYEOK_GBCD",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchHakgyo_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"GWANSIMGOGYO_NM",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchJeopsuja_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"JEOPSUJA",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchJeonhyeongryo_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"JEONHYEONGRYONAPBU_GBCD",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_calSearchJeopsuFrDt_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"JEOPSU_FRDT",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_calSearchJeopsuToDt_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"JEOPSU_TODT",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchYechigeum_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"DEUNGROK_GBCD",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchDeungrok_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"DEUNGROK_GBCD1",obj.value);
        		this.fn_Ret();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onchanged",this.fn_MojipGb,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onkeydown",this.divSearch_spnSearchYYYY_onkeydown,this);
            this.divSearch.form.cboSearchMojip.addEventHandler("onkeydown",this.divSearch_cboSearchMojip_onkeydown,this);
            this.divSearch.form.cboSearchMojip.addEventHandler("onitemchanged",this.divSearch_cboSearchMojip_onitemchanged,this);
            this.divSearch.form.cboSearchJuya.addEventHandler("onitemchanged",this.fn_Jeonhyeong,this);
            this.divSearch.form.cboSearchJuya.addEventHandler("onkeydown",this.divSearch_cboSearchJuya_onkeydown,this);
            this.divSearch.form.cboSearchJeonhyeong.addEventHandler("onitemchanged",this.fn_SebuJeonhyeong,this);
            this.divSearch.form.cboSearchJeonhyeong.addEventHandler("onkeydown",this.divSearch_cboSearchJeonhyeong_onkeydown,this);
            this.divSearch.form.edtSearchNm.addEventHandler("onkeydown",this.divSearch_edtSearchNm_onkeydown,this);
            this.divSearch.form.edtSearchSuheomNo.addEventHandler("onkeydown",this.divSearch_edtSearchSuheomNo_onkeydown,this);
            this.divSearch.form.cboSearchJeongong.addEventHandler("onkeydown",this.divSearch_cboSearchJeongong_onkeydown,this);
            this.divSearch.form.cboSearchJiyeok.addEventHandler("onitemchanged",this.fn_Hakgyo,this);
            this.divSearch.form.cboSearchJiyeok.addEventHandler("onkeydown",this.divSearch_cboSearchJiyeok_onkeydown,this);
            this.divSearch.form.cboSearchHakgyo.addEventHandler("onkeydown",this.divSearch_cboSearchHakgyo_onkeydown,this);
            this.divSearch.form.btnSearchGogyo.addEventHandler("onclick",this.divSearch_btnSearchGogyo_onclick,this);
            this.divSearch.form.cboSearchJeopsuja.addEventHandler("onkeydown",this.divSearch_cboSearchJeopsuja_onkeydown,this);
            this.divSearch.form.cboSearchJeonhyeongryo.addEventHandler("onitemchanged",this.fn_SebuJeonhyeong,this);
            this.divSearch.form.cboSearchJeonhyeongryo.addEventHandler("onkeydown",this.divSearch_cboSearchJeonhyeongryo_onkeydown,this);
            this.divSearch.form.chkSearchJuso.addEventHandler("onchanged",this.divSearch_chkSearchJuso_onchanged,this);
            this.divSearch.form.chkSearchHapgyeok.addEventHandler("onchanged",this.divSearch_chkSearchHapgyeok_onchanged,this);
            this.divSearch.form.cboSearchHapgyeok.addEventHandler("onkeydown",this.divSearch_cboSearchHapgyeok_onkeydown,this);
            this.divSearch.form.chkSearchYechigeum.addEventHandler("onchanged",this.divSearch_chkSearchYechigeum_onchanged,this);
            this.divSearch.form.cboSearchYechigeum.addEventHandler("onkeydown",this.divSearch_cboSearchYechigeum_onkeydown,this);
            this.divSearch.form.chkSearchDeungrok.addEventHandler("onchanged",this.divSearch_chkSearchDeungrok_onchanged,this);
            this.divSearch.form.cboSearchDeungrok.addEventHandler("onkeydown",this.divSearch_cboSearchDeungrok_onkeydown,this);
            this.divSearch.form.calSearchJeopsuFrDt.addEventHandler("onkeydown",this.divSearch_calSearchJeopsuFrDt_onkeydown,this);
            this.divSearch.form.calSearchJeopsuToDt.addEventHandler("onkeydown",this.divSearch_calSearchJeopsuToDt_onkeydown,this);
            this.divSearch.form.cboSearchMojipTo.addEventHandler("onkeydown",this.divSearch_cboSearchMojipTo_onkeydown,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onitemchanged",this.fn_Juya,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onkeydown",this.divSearch_cboSearchHakgwa_onkeydown,this);
            this.divSearch.form.cboSearchSebu.addEventHandler("onkeydown",this.divSearch_cboSearchSebu_onkeydown,this);
            this.divSearch.form.cboSearchJangso.addEventHandler("onitemchanged",this.fn_Hakgyo,this);
            this.divSearch.form.cboSearchJangso.addEventHandler("onkeydown",this.divSearch_cboSearchJiyeok_onkeydown,this);
            this.dsMaster.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
        };
        this.loadIncludeScript("EN07_1010701_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
