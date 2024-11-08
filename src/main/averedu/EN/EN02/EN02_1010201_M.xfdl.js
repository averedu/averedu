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
            this.set_titletext("방문접수관리");
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
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONHYEONG_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SEBUJEONHYEONG_TYCD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JANGSO_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SUHEOMSAENG_NM\" type=\"STRING\" size=\"40\"/><Column id=\"RES_NO1\" type=\"STRING\" size=\"6\"/><Column id=\"RES_NO2\" type=\"STRING\" size=\"100\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"8\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"NAEOEGUKIN_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"POST\" type=\"STRING\" size=\"6\"/><Column id=\"JUSO_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JUSO\" type=\"STRING\" size=\"500\"/><Column id=\"SANGSE_JUSO\" type=\"STRING\" size=\"500\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"50\"/><Column id=\"HP_NO\" type=\"STRING\" size=\"15\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"15\"/><Column id=\"CHUGA_YEONRAKCHEO\" type=\"STRING\" size=\"15\"/><Column id=\"GOGYO_CD\" type=\"STRING\" size=\"10\"/><Column id=\"CHULSIN_GOGYO_CD\" type=\"STRING\" size=\"10\"/><Column id=\"GOGYOGYEYEOL_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"GOGYOJOLEOP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"GOGYOJOLEOP_YEJEONG_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"GOGYO_SEONGJEOK_IPRYEOK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"TERM1_KOR_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TERM1_ENG_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TERM2_KOR_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TERM2_ENG_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TERM3_KOR_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TERM3_ENG_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHOEGEUN_HAKGI_KOR_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHOEGEUN_HAKGI_ENG_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYOGWAMOK_CHONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TERM2_SEOKCHA_CHONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOTAL_SEOKCHA_CHONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GEOMJEONGGOSI_CD\" type=\"STRING\" size=\"10\"/><Column id=\"GEOMJEONGGOSI_HOECHA\" type=\"STRING\" size=\"10\"/><Column id=\"AVG_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HAPGYEOK_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"DONGUI_NO\" type=\"STRING\" size=\"20\"/><Column id=\"GEOMJEONGGOSI_BAEKBUNYUL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GEOMJEONGGOSI_KOR_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GEOMJEONGGOSI_ENG_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GEOMJEONGGOSI_CHONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHULSIN_DAEHAK_NM\" type=\"STRING\" size=\"200\"/><Column id=\"DAEHAKJOLEOP_YEJEONG_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"DAEHAKJOLEOP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"AVG_PYEONGJEOM_BAEKBUNYUL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHONGISU_HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHOEGEUN_HAKGI_PYEONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GIJUN_PYEONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PYEONGJEOM_CHONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"MYEONJEOP_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SILGI_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHONGDEUNGGEUP\" type=\"STRING\" size=\"10\"/><Column id=\"BANK_NM\" type=\"STRING\" size=\"50\"/><Column id=\"GYEJWA_NO\" type=\"STRING\" size=\"50\"/><Column id=\"YEGEUMJU\" type=\"STRING\" size=\"40\"/><Column id=\"YEGEUMJU_GWANGYE\" type=\"STRING\" size=\"20\"/><Column id=\"SUSI_HAPGYEOK_YN\" type=\"STRING\" size=\"2\"/><Column id=\"GEOMJEONGGOSI_ONLINEJEGONGDONGUI_YN\" type=\"STRING\" size=\"2\"/><Column id=\"HAKSAENGBU_ONLINEJEGONGDONGUI_YN\" type=\"STRING\" size=\"10\"/><Column id=\"SUJIP_DONGUI_YN\" type=\"STRING\" size=\"2\"/><Column id=\"GOYUSIKBYEOL_INFO_DONGUI_YN\" type=\"STRING\" size=\"2\"/><Column id=\"INFO_WITAK_DONGUI_YN\" type=\"STRING\" size=\"2\"/><Column id=\"INFO_3JA_JEGONG_DONGUI_YN\" type=\"STRING\" size=\"2\"/><Column id=\"JEONHYEONGRYONAPBU_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"MYEONJE_SAYU_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JEOPSUJA1\" type=\"STRING\" size=\"10\"/><Column id=\"JEOPSUJA2\" type=\"STRING\" size=\"10\"/><Column id=\"NAEYONG_HWAKIN_YN\" type=\"STRING\" size=\"2\"/><Column id=\"CHOECHOHAPGYEOK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"HAPGYEOK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"HAPGYEOK_DT\" type=\"STRING\" size=\"8\"/><Column id=\"JEONHYEONGBYEOL_SEOKCHA\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"YEBIHAPGYEOKHUBO_SEOKCHA\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BULHAPGYEOK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"MIDEUNGROK_SEBU_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"BULHAPGYEOK_DT\" type=\"STRING\" size=\"8\"/><Column id=\"JEOPSU_DTTM\" type=\"DATE\" size=\"8\"/><Column id=\"DELETE_YN\" type=\"STRING\" size=\"2\"/><Column id=\"DELETE_SAYU\" type=\"STRING\" size=\"1000\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"500\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"500\"/><Column id=\"BIGO\" type=\"STRING\" size=\"1000\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"SEBUJEONHYEONG_GBCD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONHYEONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOMSAENG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JEOPSU_DTTM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJuya", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_jeonhyeong", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"JEONHYEONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONHYEONG_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMojibGbCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_jeongongCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UP_DEPT_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gijunYyyy", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_hakgwaCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_SearchHakgwa", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_SearchJeonHyung", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJangso", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_hyeonjaeMojip", this);
            obj._setContents("<ColumnInfo><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"MOJIP_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"HYEONJAE_MOJIP_YN\" type=\"STRING\" size=\"2\"/><Column id=\"JEOPSU_FRDT\" type=\"STRING\" size=\"8\"/><Column id=\"JEOPSU_TODT\" type=\"STRING\" size=\"8\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBindableComp", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"bEnable\" type=\"STRING\" size=\"256\"/><Column id=\"bReadonly\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"bEnable\">false</Col><Col id=\"bReadonly\">true</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNew", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONHYEONG_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SEBUJEONHYEONG_TYCD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JANGSO_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SUHEOMSAENG_NM\" type=\"STRING\" size=\"40\"/><Column id=\"RES_NO1\" type=\"STRING\" size=\"6\"/><Column id=\"RES_NO2\" type=\"STRING\" size=\"100\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"8\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"NAEOEGUKIN_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"POST\" type=\"STRING\" size=\"6\"/><Column id=\"JUSO_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JUSO\" type=\"STRING\" size=\"500\"/><Column id=\"SANGSE_JUSO\" type=\"STRING\" size=\"500\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"50\"/><Column id=\"HP_NO\" type=\"STRING\" size=\"15\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"15\"/><Column id=\"CHUGA_YEONRAKCHEO\" type=\"STRING\" size=\"15\"/><Column id=\"GOGYO_CD\" type=\"STRING\" size=\"10\"/><Column id=\"CHULSIN_GOGYO_CD\" type=\"STRING\" size=\"10\"/><Column id=\"GOGYOGYEYEOL_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"GOGYOJOLEOP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"GOGYOJOLEOP_YEJEONG_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"GOGYO_SEONGJEOK_IPRYEOK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"TERM1_KOR_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TERM1_ENG_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TERM2_KOR_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TERM2_ENG_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TERM3_KOR_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TERM3_ENG_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHOEGEUN_HAKGI_KOR_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHOEGEUN_HAKGI_ENG_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYOGWAMOK_CHONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TERM2_SEOKCHA_CHONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOTAL_SEOKCHA_CHONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GEOMJEONGGOSI_CD\" type=\"STRING\" size=\"10\"/><Column id=\"GEOMJEONGGOSI_HOECHA\" type=\"STRING\" size=\"10\"/><Column id=\"AVG_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HAPGYEOK_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"DONGUI_NO\" type=\"STRING\" size=\"20\"/><Column id=\"GEOMJEONGGOSI_BAEKBUNYUL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GEOMJEONGGOSI_KOR_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GEOMJEONGGOSI_ENG_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GEOMJEONGGOSI_CHONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHULSIN_DAEHAK_NM\" type=\"STRING\" size=\"200\"/><Column id=\"DAEHAKJOLEOP_YEJEONG_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"DAEHAKJOLEOP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"AVG_PYEONGJEOM_BAEKBUNYUL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHONGISU_HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHOEGEUN_HAKGI_PYEONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GIJUN_PYEONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PYEONGJEOM_CHONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"MYEONJEOP_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SILGI_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHONGDEUNGGEUP\" type=\"STRING\" size=\"10\"/><Column id=\"BANK_NM\" type=\"STRING\" size=\"50\"/><Column id=\"GYEJWA_NO\" type=\"STRING\" size=\"50\"/><Column id=\"YEGEUMJU\" type=\"STRING\" size=\"40\"/><Column id=\"YEGEUMJU_GWANGYE\" type=\"STRING\" size=\"20\"/><Column id=\"SUSI_HAPGYEOK_YN\" type=\"STRING\" size=\"2\"/><Column id=\"GEOMJEONGGOSI_ONLINEJEGONGDONGUI_YN\" type=\"STRING\" size=\"2\"/><Column id=\"HAKSAENGBU_ONLINEJEGONGDONGUI_YN\" type=\"STRING\" size=\"10\"/><Column id=\"SUJIP_DONGUI_YN\" type=\"STRING\" size=\"2\"/><Column id=\"GOYUSIKBYEOL_INFO_DONGUI_YN\" type=\"STRING\" size=\"2\"/><Column id=\"INFO_WITAK_DONGUI_YN\" type=\"STRING\" size=\"2\"/><Column id=\"INFO_3JA_JEGONG_DONGUI_YN\" type=\"STRING\" size=\"2\"/><Column id=\"JEONHYEONGRYONAPBU_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"MYEONJE_SAYU_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JEOPSUJA1\" type=\"STRING\" size=\"10\"/><Column id=\"JEOPSUJA2\" type=\"STRING\" size=\"10\"/><Column id=\"NAEYONG_HWAKIN_YN\" type=\"STRING\" size=\"2\"/><Column id=\"CHOECHOHAPGYEOK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"HAPGYEOK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"HAPGYEOK_DT\" type=\"STRING\" size=\"8\"/><Column id=\"JEONHYEONGBYEOL_SEOKCHA\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"YEBIHAPGYEOKHUBO_SEOKCHA\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BULHAPGYEOK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"MIDEUNGROK_SEBU_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"BULHAPGYEOK_DT\" type=\"STRING\" size=\"8\"/><Column id=\"JEOPSU_DTTM\" type=\"DATE\" size=\"8\"/><Column id=\"DELETE_YN\" type=\"STRING\" size=\"2\"/><Column id=\"DELETE_SAYU\" type=\"STRING\" size=\"1000\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"500\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"500\"/><Column id=\"BIGO\" type=\"STRING\" size=\"1000\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"SEBUJEONHYEONG_GBCD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_SearchJuya", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sebujeonhyeong", this);
            obj._setContents("<ColumnInfo><Column id=\"SEBUJEONHYEONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SEBUJEONHYEONG_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_juyaGbcd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dInput", this);
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONHYEONG_GBCD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sebuyuhyeong", this);
            obj.set_preload("false");
            obj._setContents("<ColumnInfo><Column id=\"SEBUJEONHYEONG_TYCD\" type=\"STRING\" size=\"10\"/><Column id=\"SEBUJEONHYEONG_TYNM\" type=\"STRING\" size=\"100\"/><Column id=\"SEBUJEONHYEONG_GBCD\" type=\"STRING\" size=\"50\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOverlap", this);
            obj._setContents("<ColumnInfo><Column id=\"CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJaejiwon", this);
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"MOJIP_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JUYA_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"JEONHYEONG_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONHYEONG_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"SEBUJEONHYEONG_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SEBUJEONHYEONG_TYCD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONGONG_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"JANGSO_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SUHEOMSAENG_NM\" type=\"STRING\" size=\"40\"/><Column id=\"RES_NO1\" type=\"STRING\" size=\"6\"/><Column id=\"RES_NO2\" type=\"STRING\" size=\"200\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"8\"/><Column id=\"BIRTHDAY1\" type=\"STRING\" size=\"65532\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"NAEOEGUKIN_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"POST\" type=\"STRING\" size=\"6\"/><Column id=\"JUSO_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JUSO\" type=\"STRING\" size=\"500\"/><Column id=\"SANGSE_JUSO\" type=\"STRING\" size=\"500\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"50\"/><Column id=\"HP_NO\" type=\"STRING\" size=\"15\"/><Column id=\"HP_NO1\" type=\"STRING\" size=\"65532\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"15\"/><Column id=\"TEL_NO1\" type=\"STRING\" size=\"65532\"/><Column id=\"CHUGA_YEONRAKCHEO\" type=\"STRING\" size=\"15\"/><Column id=\"CHUGA_YEONRAKCHEO1\" type=\"STRING\" size=\"65532\"/><Column id=\"GOGYO_CD\" type=\"STRING\" size=\"10\"/><Column id=\"GOGYO_NM\" type=\"STRING\" size=\"100\"/><Column id=\"CHULSIN_GOGYO_CD\" type=\"STRING\" size=\"10\"/><Column id=\"GOGYOGYEYEOL_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"GOGYOJOLEOP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"GOGYOJOLEOP_YEJEONG_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"GOGYO_SEONGJEOK_IPRYEOK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"TERM1_KOR_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TERM1_ENG_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TERM2_KOR_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TERM2_ENG_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TERM3_KOR_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TERM3_ENG_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHOEGEUN_HAKGI_KOR_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHOEGEUN_HAKGI_ENG_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYOGWAMOK_CHONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TERM2_SEOKCHA_CHONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOTAL_SEOKCHA_CHONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GEOMJEONGGOSI_CD\" type=\"STRING\" size=\"10\"/><Column id=\"GEOMJEONGGOSI_NM\" type=\"STRING\" size=\"100\"/><Column id=\"GEOMJEONGGOSI_HOECHA\" type=\"STRING\" size=\"10\"/><Column id=\"AVG_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HAPGYEOK_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"DONGUI_NO\" type=\"STRING\" size=\"20\"/><Column id=\"GEOMJEONGGOSI_BAEKBUNYUL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GEOMJEONGGOSI_KOR_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GEOMJEONGGOSI_ENG_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GEOMJEONGGOSI_CHONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHULSIN_DAEHAK_NM\" type=\"STRING\" size=\"200\"/><Column id=\"DAEHAKJOLEOP_YEJEONG_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"DAEHAKJOLEOP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"AVG_PYEONGJEOM_BAEKBUNYUL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHONGISU_HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHOEGEUN_HAKGI_PYEONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GIJUN_PYEONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PYEONGJEOM_CHONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"MYEONJEOP_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SILGI_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHONGDEUNGGEUP\" type=\"STRING\" size=\"10\"/><Column id=\"BANK_NM\" type=\"STRING\" size=\"50\"/><Column id=\"GYEJWA_NO\" type=\"STRING\" size=\"50\"/><Column id=\"YEGEUMJU\" type=\"STRING\" size=\"40\"/><Column id=\"YEGEUMJU_GWANGYE\" type=\"STRING\" size=\"20\"/><Column id=\"SUSI_HAPGYEOK_YN\" type=\"STRING\" size=\"2\"/><Column id=\"HAKSAENGBU_ONLINEJEGONGDONGUI_YN\" type=\"STRING\" size=\"10\"/><Column id=\"SUJIP_DONGUI_YN\" type=\"STRING\" size=\"2\"/><Column id=\"GOYUSIKBYEOL_INFO_DONGUI_YN\" type=\"STRING\" size=\"2\"/><Column id=\"INFO_WITAK_DONGUI_YN\" type=\"STRING\" size=\"2\"/><Column id=\"INFO_3JA_JEGONG_DONGUI_YN\" type=\"STRING\" size=\"2\"/><Column id=\"JEONHYEONGRYONAPBU_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONHYEONGRYONAPBU_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"MYEONJE_SAYU_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JEOPSUJA1\" type=\"STRING\" size=\"10\"/><Column id=\"JEOPSUJA2\" type=\"STRING\" size=\"10\"/><Column id=\"NAEYONG_HWAKIN_YN\" type=\"STRING\" size=\"2\"/><Column id=\"CHOECHOHAPGYEOK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"HAPGYEOK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"YEBIHAPGYEOKHUBO_SEOKCHA\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BULHAPGYEOK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"MIDEUNGROK_SEBU_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"BULHAPGYEOK_DT\" type=\"STRING\" size=\"8\"/><Column id=\"JEOPSU_DTTM\" type=\"STRING\" size=\"14\"/><Column id=\"DELETE_YN\" type=\"STRING\" size=\"2\"/><Column id=\"DELETE_SAYU\" type=\"STRING\" size=\"1000\"/><Column id=\"IJEON_SEONGJEOK_CNT\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJeonhyeongGb", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdMaster","0","304",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"63\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"상태\"/><Cell col=\"1\" text=\"장소구분\"/><Cell col=\"2\" text=\"수험번호\"/><Cell col=\"3\" text=\"성명\"/><Cell col=\"4\" text=\"주민번호\"/><Cell col=\"5\" text=\"1지망학과\"/><Cell col=\"6\" text=\"주야구분\"/><Cell col=\"7\" text=\"전형구분\"/><Cell col=\"8\" text=\"접수일시\"/><Cell col=\"9\" text=\"등록자\"/></Band><Band id=\"body\"><Cell textAlign=\"center\" edittype=\"none\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:JANGSO_GBCD\" combodataset=\"dsJangso\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" displaytype=\"combotext\" edittype=\"none\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:SUHEOM_NO\" editmaxlength=\"100\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:SUHEOMSAENG_NM\" editmaxlength=\"4\" combodataset=\"ds_Hakgwa\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"4\" displaytype=\"expr:RES_NO1 != &quot;&quot; &amp;&amp; RES_NO2 != &quot;&quot; ? &quot;mask&quot; : &quot;none&quot;\" edittype=\"none\" textAlign=\"center\" editmaxlength=\"8\" combodataset=\"ds_Juya\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" text=\"expr:RES_NO1+RES_NO2\" maskeditformat=\"######-#######\" maskedittype=\"string\"/><Cell col=\"5\" displaytype=\"combotext\" edittype=\"none\" textAlign=\"center\" text=\"bind:HAKGWA_CD\" editmaxlength=\"8\" combodataset=\"ds_hakgwaCd\" combocodecol=\"DEPT_CD\" combodatacol=\"DEPT_NM\"/><Cell col=\"6\" displaytype=\"combotext\" edittype=\"none\" textAlign=\"center\" editmaxlength=\"8\" text=\"bind:JUYA_GBCD\" combodataset=\"dsJuya\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"7\" text=\"bind:JEONHYEONG_GBCD\" combodataset=\"dsJeonhyeongGb\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" displaytype=\"combotext\"/><Cell col=\"8\" text=\"bind:JEOPSU_DTTM\"/><Cell col=\"9\" text=\"bind:JEOPSUJA1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar","0","35","435","234",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_type("monthonly");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","0","279","155","22",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("접수 대상자 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","143","278","123","24",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","450","35","300","234",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01","31","20","44","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("학과");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00","35","191","44","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("이름");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchSuheomNum","93","149","178","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchNm","93","190","178","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJeonhyeong","93","106","178","23",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsJeonhyeongGb");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_displaynulltext("전체");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJuya","93","63","178","23",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_SearchJuya");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_displaynulltext("전체");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgwa","93","20","178","23",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_innerdataset("ds_SearchHakgwa");
            obj.set_displaynulltext("전체");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00","11","63","74","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("주야구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","11","107","74","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("전형구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01","11","150","74","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("수험번호");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","1","27","230",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00","271","1","27","230",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_01_00_00","83","2","10","228",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01","1","43","290","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01_00","1","0","290","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01_00_00","1","212","290","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01_01","1","86","290","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01_01_00","1","129","290","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01_01_00_00","1","171","290","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_13_06","766","34","874","40",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00","766","73","874","40",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_00","766","112","874","40",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_00_00","766","151","874","40",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_00_00_00","766","190","874","40",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_00_00_00_00","766","229","874","40",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00_00","763","10","155","22",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("원서 필수 입력 정보");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06","765","34","150","40",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("입시년도");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Spin("spnIpsiYYYY","919","38","187","34",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00_00","1109","34","150","40",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("모집구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00_00_00","765","73","150","40",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSuheomsaengNm","919","76","187","34",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_enable("true");
            obj.set_maxlength("13");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Combo("cboMojip","1261","37","175","34",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_innerdataset("dsMojibGbCd");
            obj.set_displaynulltext("선택");
            obj.set_cssclass("point");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00_00_01","1109","73","150","40",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("주민번호");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtResNo","1261","76","175","34",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_enable("true");
            obj.set_maxlength("6");
            obj.set_inputtype("number");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00_00_00_00","765","112","150","40",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("학과");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00_00_00_00_00","765","151","150","40",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("주야구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00_00_00_00_00_00","765","190","150","40",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("세부전형구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00_00_00_00_00_00_00","765","229","150","40",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("휴대폰번호");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboHakgwa","918","115","187","34",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("ds_hakgwaCd");
            obj.set_displaynulltext("선택");
            obj.set_cssclass("point");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJuya","918","154","187","34",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_codecolumn("JUYA_GBCD");
            obj.set_datacolumn("JUYA_NM");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("ds_juyaGbcd");
            obj.set_displaynulltext("선택");
            obj.set_cssclass("point");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00_00_01_00","1109","112","150","40",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("전공");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00_00_01_00_00","1109","151","150","40",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("전형구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00_00_01_00_00_00","1109","190","150","40",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("세부유형구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJeongong","1261","115","175","34",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("ds_jeongongCd");
            obj.set_displaynulltext("선택");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJeonhyeong","1261","154","175","34",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_codecolumn("JEONHYEONG_GBCD");
            obj.set_datacolumn("JEONHYEONG_NM");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("ds_jeonhyeong");
            obj.set_displaynulltext("선택");
            obj.set_cssclass("point");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSebuYuhyeong","1261","193","175","34",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_codecolumn("SEBUJEONHYEONG_TYCD");
            obj.set_datacolumn("SEBUJEONHYEONG_TYNM");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("ds_sebuyuhyeong");
            obj.set_displaynulltext("선택");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","1445","84","26","19",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSebuJeonhyeong","918","193","187","34",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_codecolumn("SEBUJEONHYEONG_GBCD");
            obj.set_datacolumn("SEBUJEONHYEONG_NM");
            obj.set_innerdataset("ds_sebujeonhyeong");
            obj.set_displaynulltext("선택");
            obj.set_cssclass("point");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_05","0","10","220","22",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_Title01");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01","1","27","940","8",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","570","0","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","570","269","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01_00","1","296","940","8",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_01_00_00","435","40","15","228",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("15");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_01_00_00_00","750","40","15","228",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("15");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mdtHpNo2","918","232","187","34",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_format("###-####-####");
            obj.set_type("string");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mdtResNo2","1461","76","175","34",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_maskchar("_");
            obj.set_format("#{######}");
            obj.set_type("string");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divSearch00.form.cboSearchSeunginSangtae","value","ds_input","JUYA_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch00.form.spnSearchYYYY","value","ds_input","IPSI_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch00.form.cboSearchSeunginSangtae00_00","value","ds_input","HAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","spnIpsiYYYY","value","dsNew","IPSI_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edtSuheomsaengNm","value","dsNew","SUHEOMSAENG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","cboMojip","value","dsNew","MOJIP_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edtResNo","value","dsNew","RES_NO1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","cboHakgwa","value","dsNew","HAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","cboJuya","value","dsNew","JUYA_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","cboJeongong","value","dsNew","JEONGONG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","cboJeonhyeong","value","dsNew","JEONHYEONG_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","cboSebuYuhyeong","value","dsNew","SEBUJEONHYEONG_TYCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","Calendar","value","ds_input","JEOPSU_DTTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","cboSebuJeonhyeong","value","dsNew","SEBUJEONHYEONG_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.edtSearchSuheomNum","value","ds_input","SUHEOM_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.edtSearchNm","value","ds_input","SUHEOMSAENG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.cboSearchHakgwa","value","ds_input","HAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divSearch.form.cboSearchJuya","value","ds_input","JUYA_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divSearch.form.cboSearchJeonhyeong","value","ds_input","JEONHYEONG_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","edtSuheomsaengNm","readonly","dsBindableComp","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","cboHakgwa","readonly","dsBindableComp","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","cboJuya","readonly","dsBindableComp","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","cboSebuJeonhyeong","readonly","dsBindableComp","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","cboSebuYuhyeong","readonly","dsBindableComp","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","cboJeonhyeong","readonly","dsBindableComp","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","cboJeongong","readonly","dsBindableComp","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","edtResNo","readonly","dsBindableComp","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","mdtHpNo2","value","dsNew","HP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","mdtResNo2","value","dsNew","RES_NO2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","mdtResNo2","readonly","dsBindableComp","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
            this._addPreloadList("data","","dsNew");
        };
        
        // User Script
        this.registerScript("EN02_1010201_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): EN02_1010201_M.xfdl(방문접수관리)
        * 작 성         일 명: 성연우
        * 작 성         일 자: 2021/04/19
        * 변 경         일 자:
        * 변 경         자 명:
        * 변경 및 수정 로그 : 일자별로 변경자 및 변경사항을 간략히 기술
        */
        /**********************************************************************
                01. 전처리 공통 함수 선언
        ***********************************************************************/
        var today = new Date();
        var hh = today.getHours();
        var mi = today.getMinutes();
        var ss = today.getSeconds();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();
        if(dd < 10) dd = '0' + dd;
        if(mm < 10) mm = '0' + mm;
        if(hh < 10) hh = '0' + hh;
        if(mi < 10) mi = '0' + mi;
        if(ss < 10) ss = '0' + ss;
        var getToDay = yyyy +''+ mm +''+ dd+''+hh+''+mi+''+ss;
        var mojipHapgyeokChk = 0;
        /**********************************************************************
                02. 폼 변수 정의
        ***********************************************************************/
        this.lvchkColidDs   = "SUHEOMSAENG_NM$RES_NO1$RES_NO2$HAKGWA_CD$JUYA_GBCD$JEONHYEONG_GBCD$SEBUJEONHYEONG_GBCD$HP_NO";
        this.lvchkColNameDs = "성명$주민번호(앞자리)$주민번호(뒷자리)$학과&주야구분$전형구분$세부전형구분$휴대폰번호";
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
            var strDs    = "dsJuya|ds_SearchJuya|ds_SearchJeonHyung|dsMojibGbCd|dsJangso|dsJeonhyeongGb";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00003|00003|01001|00005|01005|01001";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "S|T|T|X|X|T";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";                                      // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId    = "Init";

                // gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
                // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.

            this.gfn_CmmnMultiComboLoad(strDs
                                      , strLgcd
                                      , strComb
                                      , strOptn
                                      , svcId);

        	this.fn_IpsiGijunYyyy();
        };

        // 입시기준년도 가져오기
        this.fn_IpsiGijunYyyy = function()
        {
        	var strSvc      = "IpsiGigunYyyy";
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

        // 조회조건에 입시년도 설정 및 입시모집구분 조회
        this.fn_PostIpsiGigunYyyy = function()
        {
        	this.ds_input.setColumn(0, "IPSI_YYYY", this.ds_gijunYyyy.getColumn(0, "YYYY"));
        	this.dsNew.setColumn(0, "IPSI_YYYY", this.ds_gijunYyyy.getColumn(0, "YYYY"));
        	this.fn_IpsiHakgwa();
        }

        // 입시학과 가져오기
        this.fn_IpsiHakgwa = function()
        {
        	var strSvc      = "IpsiHakgwa";
            var strUrl      = "prj/EN/EN_COM/Retrieve_HAKGWA_CD.do";
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

        // 학과 콤보박스 설정
        this.fn_PostIpsiHakgwa = function()
        {
        	this.ds_SearchHakgwa.copyData(this.ds_hakgwaCd);

        	this.ds_SearchHakgwa.insertRow(0);
        	this.ds_SearchHakgwa.setColumn(0, "DEPT_CD", "");
        	this.ds_SearchHakgwa.setColumn(0, "DEPT_NM", "전체");
        	this.divSearch.form.cboSearchHakgwa.set_index(0);

        	this.ds_hakgwaCd.insertRow(0);
        	this.ds_hakgwaCd.setColumn(0, "DEPT_CD", "");
        	this.ds_hakgwaCd.setColumn(0, "DEPT_NM", "선택");
        	this.cboHakgwa.set_index(0);

        	this.fn_IpsiJeongong();
        }

        // 입시전공 가져오기
        this.fn_IpsiJeongong = function()
        {
        	var strSvc      = "IpsiJeongong";
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

        	this.fn_IpsiSebuYuhyeong();
        }

        // 세부유형구분 가져오기
        this.fn_IpsiSebuYuhyeong = function()
        {
        	var strSvc      = "IpsiSebuYuhyeong";
            var strUrl      = "prj/EN/EN02/Retrieve_SEBUYUHYEONG.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "ds_sebuyuhyeong=ds_sebuyuhyeong";
            var strArg      = "";
            var GBV_MENUID    = objApp.gv_cutPrgId;
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);

        	this.ds_sebuyuhyeong.filter("SEBUJEONHYEONG_GBCD == ''");
        	this.fn_HyeonjaeMojip();
        }

        this.fn_HyeonjaeMojip = function()
        {
        	// 현재모집여부 가져오기
        	var strSvc      = "HyeonjaeMojip";
            var strUrl      = "prj/EN/EN_COM/Retrieve_HYEONJAE_MOJIP.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "ds_hyeonjaeMojip=ds_hyeonjaeMojip";
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

        this.fn_PostHyeonjaeMojip = function()
        {
        	var gubun;
        	var jeopsuFrdt;
        	var jeopsuTodt;

        	for(var i=0; i<this.ds_hyeonjaeMojip.rowcount; i++){
        		gubun = this.ds_hyeonjaeMojip.getColumn(i, "HYEONJAE_MOJIP_YN");
        		if(gubun == 'Y')
        		{
        			jeopsuFrdt = this.ds_hyeonjaeMojip.getColumn(i, 'JEOPSU_FRDT')+'000000';
        			jeopsuTodt = this.ds_hyeonjaeMojip.getColumn(i, 'JEOPSU_TODT')+'235959';
        			if(jeopsuFrdt <= getToDay && jeopsuTodt >= getToDay)
        			{
        				this.dsBindableComp.setColumn(0, "bReadonly", "false");
        				this.cboMojip.set_index(i);
        				break;
        			}
        		}
        	}
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
                            this.fn_PostformInit();
                        break;
                    case "IpsiGigunYyyy":
                            this.fn_PostIpsiGigunYyyy();
                        break;
        			case "IpsiHakgwa":
                            this.fn_PostIpsiHakgwa();
                        break;
        			case "HyeonjaeMojip":
                            this.fn_PostHyeonjaeMojip();
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
                case "del" :         // 삭제
                        this.fn_Del();
                    break;
                case "tmp1" :        // 팁
                         this.fn_Tip();
                    break;
                case "tmp2" :        // 수험번호부여
                         this.fn_AddSuhoemNo();
                    break;
                default :
                    break;
            };
        };;

        /**********************************************************************
                05. 조회 함수 선언(마스터 함수)
        ***********************************************************************/
        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_Ret = function()
        {
            var strSvc      = "Ret";
            var strUrl      = "/prj/EN/EN02/Retrieve_1010201_M.do";
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
                06. 삭제 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 삭제 버튼 실행
         */

        this.fn_PreDel = function()
        {
        	if(this.dsMaster.getRowType(this.dsMaster.rowposition) == '2')
        	{
        		this.dsMaster.deleteRow(this.dsMaster.rowposition);
        		return true;
        	}
        	else
        	{
        		this.alert("저장된 데이터는 삭제할 수 없습니다.");
        		return false;
        	}
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

        	this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
        };

        /**********************************************************************
                07. 팁
        ***********************************************************************/
        this.fn_Tip = function()
        {
        	this.alert("도움말 준비중입니다.");
        };

        /**********************************************************************
                08. 수험번호 부여
        ***********************************************************************/
        this.fn_PreAddSuhoemNo = function()
        {
        	this.dsOverlap.deleteAll();
        	var hyeonjaeMojipYn = 'N';
        	var jeopsuFrdt;
        	var jeopsuTodt;

        	for(var i = 0; i <= this.ds_hyeonjaeMojip.rowcount ; i++)
        	{
        		gubun = this.ds_hyeonjaeMojip.getColumn(i, "HYEONJAE_MOJIP_YN");
        		if(gubun == 'Y')
        		{
        			jeopsuFrdt = this.ds_hyeonjaeMojip.getColumn(i, 'JEOPSU_FRDT')+'000000';
        			jeopsuTodt = this.ds_hyeonjaeMojip.getColumn(i, 'JEOPSU_TODT')+'235959';
        			if(jeopsuFrdt <= getToDay && jeopsuTodt >= getToDay)
        			{
        				hyeonjaeMojipYn = 'Y';
        				break;
        			 }
        		}
        	}

        	if(hyeonjaeMojipYn != 'Y')
        	{
        		this.alert("모집 기간이 아닙니다.");
        	}
        	else
        	{
        		// 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
        		var chkFocusFlg = false;
        		var result      = this.gfn_cmmnChkEssentialItem(this.dsNew, this.lvchkColidDs, this.lvchkColNameDs, '', chkFocusFlg, this);

        		if (result[0] != "success")
        		{
        			this.gfn_alert(result[0],"저장정보","","question");
        			this.dsNew.set_rowposition(result[1]); //데이터셋 변경
        			return false;
        		}

        		this.fn_Overlap();

        		if(this.dsOverlap.getColumn(0, "CNT") != "0")
        		{
        			this.alert("같은 모집에 중복으로 지원하실 수 없습니다.");
        			return false;
        		}

        		this.fn_Jaejiwon();

        		if(mojipHapgyeokChk == 2)
        		{
        			this.alert("수시 1, 2차 합격자는 지원하실 수 없습니다.");
        			return false;
        		}

        		var result = this.gfn_confirm( "저장 하시겠습니까?", "저장","", "question" );
        		if(result == 0)
        		{
        			return false;
        		}

        		this.ds_input.setColumn(0, "IPSI_YYYY", this.dsNew.getColumn(0, "IPSI_YYYY"));
        		this.ds_input.setColumn(0, "HAKGWA_CD", this.dsNew.getColumn(0, "HAKGWA_CD"));
        		this.ds_input.setColumn(0, "JUYA_GBCD", this.dsNew.getColumn(0, "JUYA_GBCD"));
        		this.ds_input.setColumn(0, "JEONHYEONG_GBCD", this.dsNew.getColumn(0, "JEONHYEONG_GBCD"));
        		this.ds_input.setColumn(0, "SUHEOMSAENG_NM", this.dsNew.getColumn(0, "SUHEOMSAENG_NM"));
        		this.ds_input.setColumn(0, "JEOPSU_DTTM", objApp.gds_SystemDate.getColumn(0,"YYYYMMDD"));

        		return true;
        	}
        }

        this.fn_AddSuhoemNo = function()
        {
            if(!this.fn_PreAddSuhoemNo())
            {
                return false;
            }

            var strSvc      = "Save";
            var strUrl      = "/prj/EN/EN02/Save_1010201_M.do";
            var strInDs     = "ds_input=ds_input:a ";
                strInDs    += "dsNew=dsNew:u";
            var strOutDs    = "dsMaster=dsMaster";
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
        }

        /**********************************************************************
                09. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj,e)
        {
            this.gfn_gridSort(obj,e);
        };

        // 학과변경시 주야구분이 세팅됨
        this.cboHakgwa_onitemchanged = function(obj,e)
        {
        	this.ds_juyaGbcd.deleteAll();
        	this.ds_jeonhyeong.deleteAll();
        	this.ds_sebujeonhyeong.deleteAll();
        	this.ds_jeongongCd.filter("UP_DEPT_CD=='"+this.ds_hakgwaCd.getColumn(this.cboHakgwa.index, "DEPT_CD")+"'");

        	this.ds_dInput.setColumn(0, "IPSI_YYYY", this.spnIpsiYYYY.value);
        	this.ds_dInput.setColumn(0, "MOJIP_GBCD", this.cboMojip.value);
        	this.ds_dInput.setColumn(0, "HAKGWA_CD", this.cboHakgwa.value);

        	if(this.ds_dInput.getColumn(0, "HAKGWA_CD") != '')
        	{
        		var strSvc      = "";
        		var strUrl      = "prj/EN/EN02/Retrieve_JUYAGBCD.do";
        		var strInDs     = "ds_dInput=ds_dInput";
        		var strOutDs    = "ds_juyaGbcd=ds_juyaGbcd";
        		var strArg      = "";
        		var GBV_MENUID    = objApp.gv_cutPrgId;
        		var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        		var strASync    = false;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
        		this.gfn_Transaction(strSvc
        						   , strUrl
        						   , strInDs
        						   , strOutDs
        						   , strArg
        						   , strCallBack
        						   , strASync);
        	}

        	this.ds_juyaGbcd.insertRow(0);
        	this.ds_juyaGbcd.setColumn(0, "JUYA_GBCD", "");
        	this.ds_juyaGbcd.setColumn(0, "JUYA_NM", "선택");
        	this.cboJuya.set_index(0);

        	this.ds_jeonhyeong.insertRow(0);
        	this.ds_jeonhyeong.setColumn(0, "JEONHYEONG_GBCD", "");
        	this.ds_jeonhyeong.setColumn(0, "JEONHYEONG_NM", "선택");
        	this.cboJeonhyeong.set_index(0);

        	this.ds_sebujeonhyeong.insertRow(0);
        	this.ds_sebujeonhyeong.setColumn(0, "SEBUJEONHYEONG_GBCD", "");
        	this.ds_sebujeonhyeong.setColumn(0, "SEBUJEONHYEONG_NM", "선택");
        	this.cboSebuJeonhyeong.set_index(0);
        };

        // 주야구분 변경시 전형구분이 세팅됨
        this.cboJuya_onitemchanged = function(obj,e)
        {
        	this.ds_jeonhyeong.deleteAll();
        	this.ds_sebujeonhyeong.deleteAll();

        	this.ds_dInput.setColumn(0, "IPSI_YYYY", this.spnIpsiYYYY.value);
        	this.ds_dInput.setColumn(0, "MOJIP_GBCD", this.cboMojip.value);
        	this.ds_dInput.setColumn(0, "HAKGWA_CD", this.cboHakgwa.value);
        	this.ds_dInput.setColumn(0, "JUYA_GBCD", this.cboJuya.value);

        	if(this.ds_dInput.getColumn(0, "JUYA_GBCD") != '')
        	{
        		var strSvc      = "";
        		var strUrl      = "prj/EN/EN02/Retrieve_JEONHYEONG.do";
        		var strInDs     = "ds_dInput=ds_dInput";
        		var strOutDs    = "ds_jeonhyeong=ds_jeonhyeong";
        		var strArg      = "";
        		var GBV_MENUID    = objApp.gv_cutPrgId;
        		var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        		var strASync    = false;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
        		this.gfn_Transaction(strSvc
        						   , strUrl
        						   , strInDs
        						   , strOutDs
        						   , strArg
        						   , strCallBack
        						   , strASync);
        	}

        	this.ds_jeonhyeong.insertRow(0);
        	this.ds_jeonhyeong.setColumn(0, "JEONHYEONG_GBCD", "");
        	this.ds_jeonhyeong.setColumn(0, "JEONHYEONG_NM", "선택");
        	this.cboJeonhyeong.set_index(0);

        	this.ds_sebujeonhyeong.insertRow(0);
        	this.ds_sebujeonhyeong.setColumn(0, "SEBUJEONHYEONG_GBCD", "");
        	this.ds_sebujeonhyeong.setColumn(0, "SEBUJEONHYEONG_NM", "선택");
        	this.cboSebuJeonhyeong.set_index(0);
        };

        // 전형구분 변경시 세부전형구분이 세팅됨
        this.cboJeonhyeong_onitemchanged = function(obj,e)
        {
        	this.ds_sebujeonhyeong.deleteAll();

        	this.ds_dInput.setColumn(0, "IPSI_YYYY", this.spnIpsiYYYY.value);
        	this.ds_dInput.setColumn(0, "MOJIP_GBCD", this.cboMojip.value);
        	this.ds_dInput.setColumn(0, "HAKGWA_CD", this.cboHakgwa.value);
        	this.ds_dInput.setColumn(0, "JUYA_GBCD", this.cboJuya.value);
        	this.ds_dInput.setColumn(0, "JEONHYEONG_GBCD", this.cboJeonhyeong.value);

        	if(this.ds_dInput.getColumn(0, "JEONHYEONG_GBCD") != '')
        	{
        		var strSvc      = "";
        		var strUrl      = "prj/EN/EN02/Retrieve_SEBUJEONHYEONG.do";
        		var strInDs     = "ds_dInput=ds_dInput";
        		var strOutDs    = "ds_sebujeonhyeong=ds_sebujeonhyeong";
        		var strArg      = "";
        		var GBV_MENUID    = objApp.gv_cutPrgId;
        		var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        		var strASync    = false;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
        		this.gfn_Transaction(strSvc
        						   , strUrl
        						   , strInDs
        						   , strOutDs
        						   , strArg
        						   , strCallBack
        						   , strASync);
        	}

        	this.ds_sebujeonhyeong.insertRow(0);
        	this.ds_sebujeonhyeong.setColumn(0, "SEBUJEONHYEONG_GBCD", "");
        	this.ds_sebujeonhyeong.setColumn(0, "SEBUJEONHYEONG_NM", "선택");
        	this.cboSebuJeonhyeong.set_index(0);
        };

        // 세부전형구분 변경시 세부유형구분이 세팅됨
        this.cboSebuJeonhyeong_onitemchanged = function(obj,e)
        {
        	this.ds_sebuyuhyeong.filter("SEBUJEONHYEONG_GBCD == '"+ this.cboSebuJeonhyeong.value +"'");
        	this.cboSebuYuhyeong.set_value("");
        };

        // 중복체크
        this.fn_Overlap = function()
        {
        	var strSvc      = "";
            var strUrl      = "prj/EN/EN02/Retrieve_OVERLAP.do";
            var strInDs     = "dsNew=dsNew";
            var strOutDs    = "dsOverlap=dsOverlap";
            var strArg      = "";
            var GBV_MENUID    = objApp.gv_cutPrgId;
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = false;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);
        }

        // 재지원자 값 가져오기
        this.fn_Jaejiwon = function()
        {
        	this.dsJaejiwon.deleteAll();

        	mojipHapgyeokChk = 0;
        	var curMojipRowNum;
        	var myeonjaeYn = 0;
        	var jaejiwonGbVal = 0;

        	var strSvc      = "";
            var strUrl      = "prj/EN/EN02/Retrieve_JAEJIWON.do";
            var strInDs     = "dsNew=dsNew";
            var strOutDs    = "dsJaejiwon=dsJaejiwon";
            var strArg      = "";
            var GBV_MENUID    = objApp.gv_cutPrgId;
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = false;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);

        	if(this.dsJaejiwon.rowcount > 0)
        	{
        		jaejiwonGbVal = 1;
        		for(var i=0; i<this.dsJaejiwon.rowcount; i++)
        		{
        			curMojipRowNum = i;
        			if(this.dsJaejiwon.getColumn(i, "JEONHYEONGRYONAPBU_GBCD") == '01' || this.dsJaejiwon.getColumn(i, "JEONHYEONGRYONAPBU_GBCD") == '02')
        			{
        				myeonjaeYn = 1;
        			}
        			if(this.dsJaejiwon.getColumn(i, "MOJIP_GBCD") == '1' || this.dsJaejiwon.getColumn(i, "HAPGYEOK_GBCD") == '01')
        			{
        				mojipHapgyeokChk = mojipHapgyeokChk + 1;
        			}
        			if(this.dsJaejiwon.getColumn(i, "MOJIP_GBCD") == '1' || this.dsJaejiwon.getColumn(i, "HAPGYEOK_GBCD") == '02')
        			{
        				mojipHapgyeokChk = mojipHapgyeokChk + 1;
        			}
        			if(this.dsJaejiwon.getColumn(i, "MOJIP_GBCD") == '2' || this.dsJaejiwon.getColumn(i, "HAPGYEOK_GBCD") == '01')
        			{
        				mojipHapgyeokChk = mojipHapgyeokChk + 1;
        			}
        			if(this.dsJaejiwon.getColumn(i, "MOJIP_GBCD") == '2' || this.dsJaejiwon.getColumn(i, "HAPGYEOK_GBCD") == '02')
        			{
        				mojipHapgyeokChk = mojipHapgyeokChk + 1;
        			}
        		}

        		if(jaejiwonGbVal == 1)
        		{
        			this.dsNew.setColumn(0, "TEL_NO", this.dsJaejiwon.getColumn(curMojipRowNum, "TEL_NO"));
        			this.dsNew.setColumn(0, "POST", this.dsJaejiwon.getColumn(curMojipRowNum, "POST"));
        			this.dsNew.setColumn(0, "JUSO_GBCD", this.dsJaejiwon.getColumn(curMojipRowNum, "JUSO_GBCD"));
        			this.dsNew.setColumn(0, "JUSO", this.dsJaejiwon.getColumn(curMojipRowNum, "JUSO"));
        			this.dsNew.setColumn(0, "SANGSE_JUSO", this.dsJaejiwon.getColumn(curMojipRowNum, "SANGSE_JUSO"));
        			this.dsNew.setColumn(0, "CHUGA_YEONRAKCHEO", this.dsJaejiwon.getColumn(curMojipRowNum, "CHUGA_YEONRAKCHEO"));
        			this.dsNew.setColumn(0, "GOGYO_CD", this.dsJaejiwon.getColumn(curMojipRowNum, "GOGYO_CD"));
        			this.dsNew.setColumn(0, "GOGYOGYEYEOL_GBCD", this.dsJaejiwon.getColumn(curMojipRowNum, "GOGYOGYEYEOL_GBCD"));
        			this.dsNew.setColumn(0, "GOGYOJOLEOP_GBCD", this.dsJaejiwon.getColumn(curMojipRowNum, "GOGYOJOLEOP_GBCD"));
        			this.dsNew.setColumn(0, "GOGYOJOLEOP_YEJEONG_YYYY", this.dsJaejiwon.getColumn(curMojipRowNum, "GOGYOJOLEOP_YEJEONG_YYYY"));
        			this.dsNew.setColumn(0, "GOGYO_SEONGJEOK_IPRYEOK_GBCD", this.dsJaejiwon.getColumn(curMojipRowNum, "GOGYO_SEONGJEOK_IPRYEOK_GBCD"));
        			this.dsNew.setColumn(0, "GEOMJEONGGOSI_CD", this.dsJaejiwon.getColumn(curMojipRowNum, "GEOMJEONGGOSI_CD"));
        			this.dsNew.setColumn(0, "GEOMJEONGGOSI_HOECHA", this.dsJaejiwon.getColumn(curMojipRowNum, "GEOMJEONGGOSI_HOECHA"));
        			this.dsNew.setColumn(0, "AVG_JEOMSU", this.dsJaejiwon.getColumn(curMojipRowNum, "AVG_JEOMSU"));
        			this.dsNew.setColumn(0, "HAPGYEOK_YYYY", this.dsJaejiwon.getColumn(curMojipRowNum, "HAPGYEOK_YYYY"));
        			this.dsNew.setColumn(0, "DONGUI_NO", this.dsJaejiwon.getColumn(curMojipRowNum, "DONGUI_NO"));
        			this.dsNew.setColumn(0, "GEOMJEONGGOSI_BAEKBUNYUL", this.dsJaejiwon.getColumn(curMojipRowNum, "GEOMJEONGGOSI_BAEKBUNYUL"));
        			this.dsNew.setColumn(0, "CHULSIN_DAEHAK_NM", this.dsJaejiwon.getColumn(curMojipRowNum, "CHULSIN_DAEHAK_NM"));
        			this.dsNew.setColumn(0, "DAEHAKJOLEOP_YEJEONG_YYYY", this.dsJaejiwon.getColumn(curMojipRowNum, "DAEHAKJOLEOP_YEJEONG_YYYY"));
        			this.dsNew.setColumn(0, "DAEHAKJOLEOP_GBCD", this.dsJaejiwon.getColumn(curMojipRowNum, "DAEHAKJOLEOP_GBCD"));
        			this.dsNew.setColumn(0, "AVG_PYEONGJEOM_BAEKBUNYUL", this.dsJaejiwon.getColumn(curMojipRowNum, "AVG_PYEONGJEOM_BAEKBUNYUL"));
        			this.dsNew.setColumn(0, "CHONGISU_HAKJEOM", this.dsJaejiwon.getColumn(curMojipRowNum, "CHONGISU_HAKJEOM"));
        			this.dsNew.setColumn(0, "CHOEGEUN_HAKGI_PYEONGJEOM", this.dsJaejiwon.getColumn(curMojipRowNum, "CHOEGEUN_HAKGI_PYEONGJEOM"));
        			this.dsNew.setColumn(0, "GIJUN_PYEONGJEOM", this.dsJaejiwon.getColumn(curMojipRowNum, "GIJUN_PYEONGJEOM"));
        			this.dsNew.setColumn(0, "BANK_NM", this.dsJaejiwon.getColumn(curMojipRowNum, "BANK_NM"));
        			this.dsNew.setColumn(0, "GYEJWA_NO", this.dsJaejiwon.getColumn(curMojipRowNum, "GYEJWA_NO"));
        			this.dsNew.setColumn(0, "YEGEUMJU", this.dsJaejiwon.getColumn(curMojipRowNum, "YEGEUMJU"));
        			this.dsNew.setColumn(0, "YEGEUMJU_GWANGYE", this.dsJaejiwon.getColumn(curMojipRowNum, "YEGEUMJU_GWANGYE"));
        			this.dsNew.setColumn(0, "SUSI_HAPGYEOK_YN", this.dsJaejiwon.getColumn(curMojipRowNum, "SUSI_HAPGYEOK_YN"));
        			this.dsNew.setColumn(0, "HAKSAENGBU_ONLINEJEGONGDONGUI_YN", this.dsJaejiwon.getColumn(curMojipRowNum, "HAKSAENGBU_ONLINEJEGONGDONGUI_YN"));
        			this.dsNew.setColumn(0, "SUJIP_DONGUI_YN", this.dsJaejiwon.getColumn(curMojipRowNum, "SUJIP_DONGUI_YN"));
        			this.dsNew.setColumn(0, "GOYUSIKBYEOL_INFO_DONGUI_YN", this.dsJaejiwon.getColumn(curMojipRowNum, "GOYUSIKBYEOL_INFO_DONGUI_YN"));
        			this.dsNew.setColumn(0, "INFO_WITAK_DONGUI_YN", this.dsJaejiwon.getColumn(curMojipRowNum, "INFO_WITAK_DONGUI_YN"));
        			this.dsNew.setColumn(0, "INFO_3JA_JEGONG_DONGUI_YN", this.dsJaejiwon.getColumn(curMojipRowNum, "INFO_3JA_JEGONG_DONGUI_YN"));
        			this.dsNew.setColumn(0, "NAEYONG_HWAKIN_YN", this.dsJaejiwon.getColumn(curMojipRowNum, "NAEYONG_HWAKIN_YN"));
        		}

        		if(myeonjaeYn = 1)
        		{
        			this.dsNew.setColumn(0, "JEONHYEONGRYONAPBU_GBCD", "03");
        			this.dsNew.setColumn(0, "MYEONJE_SAYU_GBCD", "01");
        		}
        		else
        		{
        			if(this.dsNew.getColumn(0, "HAKGWA_CD") == "1800")
        			{
        				this.dsNew.setColumn(0, "JEONHYEONGRYONAPBU_GBCD", "02");
        			}
        			else
        			{
        				this.dsNew.setColumn(0, "JEONHYEONGRYONAPBU_GBCD", "01");
        			}
        		}

        		return;
        	}
        	else
        	{
        		jaejiwonGbVal = 0;

        		if(this.dsNew.getColumn(0, "HAKGWA_CD") == "1800")
        		{
        			this.dsNew.setColumn(0, "JEONHYEONGRYONAPBU_GBCD", "02");
        		}
        		else
        		{
        			this.dsNew.setColumn(0, "JEONHYEONGRYONAPBU_GBCD", "01");
        		}
        	}
        }

        /**********************************************************************
                10. 검색창 엔터키 조회
        ***********************************************************************/
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

        this.divSearch_edtSearchSuheomNum_onkeydown = function(obj,e)
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

        this.edtResNo_onkeyup = function(obj,e)
        {
        	if(obj.value.length == 6)
        	{
        		this.mdtResNo2.setFocus();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
            this.Calendar.addEventHandler("ondayclick",this.Calendar00_ondayclick,this);
            this.divSearch.form.edtSearchSuheomNum.addEventHandler("onkeydown",this.divSearch_edtSearchSuheomNum_onkeydown,this);
            this.divSearch.form.edtSearchNm.addEventHandler("onkeydown",this.divSearch_edtSearchNm_onkeydown,this);
            this.divSearch.form.cboSearchJeonhyeong.addEventHandler("onkeydown",this.divSearch_cboSearchJeonhyeong_onkeydown,this);
            this.divSearch.form.cboSearchJuya.addEventHandler("onkeydown",this.divSearch_cboSearchJuya_onkeydown,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onkeydown",this.divSearch_cboSearchHakgwa_onkeydown,this);
            this.edtResNo.addEventHandler("onkeyup",this.edtResNo_onkeyup,this);
            this.cboHakgwa.addEventHandler("onitemchanged",this.cboHakgwa_onitemchanged,this);
            this.cboJuya.addEventHandler("onitemchanged",this.cboJuya_onitemchanged,this);
            this.cboJeonhyeong.addEventHandler("onitemchanged",this.cboJeonhyeong_onitemchanged,this);
            this.cboSebuJeonhyeong.addEventHandler("onitemchanged",this.cboSebuJeonhyeong_onitemchanged,this);
            this.stc_05.addEventHandler("onclick",this.stc_05_onclick,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsMaster.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
            this.ds_hyeonjaeMojip.addEventHandler("onload",this.DS_HYEONJAE_MOJIP_GBCD_onload,this);
            this.dsNew.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsNew.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
        };
        this.loadIncludeScript("EN02_1010201_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
