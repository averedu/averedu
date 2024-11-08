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
            this.set_titletext("입학원서입력");
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
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONHYEONG_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SEBUJEONHYEONG_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SEBUJEONHYEONG_TYCD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JANGSO_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SUHEOMSAENG_NM\" type=\"STRING\" size=\"40\"/><Column id=\"RES_NO1\" type=\"STRING\" size=\"6\"/><Column id=\"RES_NO2\" type=\"STRING\" size=\"100\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"8\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"NAEOEGUKIN_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"POST\" type=\"STRING\" size=\"6\"/><Column id=\"JUSO_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JUSO\" type=\"STRING\" size=\"500\"/><Column id=\"SANGSE_JUSO\" type=\"STRING\" size=\"500\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"50\"/><Column id=\"HP_NO\" type=\"STRING\" size=\"15\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"15\"/><Column id=\"CHUGA_YEONRAKCHEO\" type=\"STRING\" size=\"15\"/><Column id=\"GOGYO_CD\" type=\"STRING\" size=\"10\"/><Column id=\"CHULSIN_GOGYO_CD\" type=\"STRING\" size=\"10\"/><Column id=\"GOGYOGYEYEOL_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"GOGYOJOLEOP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"GOGYOJOLEOP_YEJEONG_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"GOGYO_SEONGJEOK_IPRYEOK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"TERM1_KOR_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TERM1_ENG_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TERM2_KOR_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TERM2_ENG_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TERM3_KOR_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TERM3_ENG_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHOEGEUN_HAKGI_KOR_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHOEGEUN_HAKGI_ENG_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYOGWAMOK_CHONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TERM2_SEOKCHA_CHONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOTAL_SEOKCHA_CHONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GEOMJEONGGOSI_CD\" type=\"STRING\" size=\"10\"/><Column id=\"GEOMJEONGGOSI_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GEOMJEONGGOSI_HOECHA\" type=\"STRING\" size=\"10\"/><Column id=\"AVG_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HAPGYEOK_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"DONGUI_NO\" type=\"STRING\" size=\"20\"/><Column id=\"GEOMJEONGGOSI_BAEKBUNYUL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GEOMJEONGGOSI_KOR_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GEOMJEONGGOSI_ENG_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GEOMJEONGGOSI_CHONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHULSIN_DAEHAK_NM\" type=\"STRING\" size=\"200\"/><Column id=\"DAEHAKJOLEOP_YEJEONG_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"DAEHAKJOLEOP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"AVG_PYEONGJEOM_BAEKBUNYUL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHONGISU_HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHOEGEUN_HAKGI_PYEONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GIJUN_PYEONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PYEONGJEOM_CHONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"MYEONJEOP_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SILGI_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHONGDEUNGGEUP\" type=\"STRING\" size=\"10\"/><Column id=\"BANK_NM\" type=\"STRING\" size=\"50\"/><Column id=\"GYEJWA_NO\" type=\"STRING\" size=\"50\"/><Column id=\"YEGEUMJU\" type=\"STRING\" size=\"40\"/><Column id=\"YEGEUMJU_GWANGYE\" type=\"STRING\" size=\"20\"/><Column id=\"SUSI_HAPGYEOK_YN\" type=\"STRING\" size=\"2\"/><Column id=\"GEOMJEONGGOSI_ONLINEJEGONGDONGUI_YN\" type=\"STRING\" size=\"2\"/><Column id=\"HAKSAENGBU_ONLINEJEGONGDONGUI_YN\" type=\"STRING\" size=\"10\"/><Column id=\"SUJIP_DONGUI_YN\" type=\"STRING\" size=\"2\"/><Column id=\"GOYUSIKBYEOL_INFO_DONGUI_YN\" type=\"STRING\" size=\"2\"/><Column id=\"INFO_WITAK_DONGUI_YN\" type=\"STRING\" size=\"2\"/><Column id=\"INFO_3JA_JEGONG_DONGUI_YN\" type=\"STRING\" size=\"2\"/><Column id=\"JEONHYEONGRYONAPBU_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONHYEONGRYONAPBU_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"MYEONJE_SAYU_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JEOPSUJA1\" type=\"STRING\" size=\"10\"/><Column id=\"JEOPSUJA2\" type=\"STRING\" size=\"10\"/><Column id=\"NAEYONG_HWAKIN_YN\" type=\"STRING\" size=\"2\"/><Column id=\"CHOECHOHAPGYEOK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"HAPGYEOK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"HAPGYEOK_DT\" type=\"STRING\" size=\"8\"/><Column id=\"JEONHYEONGBYEOL_SEOKCHA\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"YEBIHAPGYEOKHUBO_SEOKCHA\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BULHAPGYEOK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"MIDEUNGROK_SEBU_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"BULHAPGYEOK_DT\" type=\"STRING\" size=\"8\"/><Column id=\"JEOPSU_DTTM\" type=\"STRING\" size=\"14\"/><Column id=\"DELETE_YN\" type=\"STRING\" size=\"2\"/><Column id=\"DELETE_SAYU\" type=\"STRING\" size=\"1000\"/><Column id=\"BIGO\" type=\"STRING\" size=\"1000\"/><Column id=\"GOGYO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"IJEON_SEONGJEOK_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"DEUNGROK_STCD_01\" type=\"STRING\" size=\"256\"/><Column id=\"POGI_DT_01\" type=\"STRING\" size=\"256\"/><Column id=\"NAPBU_DT_01\" type=\"STRING\" size=\"256\"/><Column id=\"DEUNGROK_STCD_02\" type=\"STRING\" size=\"256\"/><Column id=\"POGI_DT_02\" type=\"STRING\" size=\"256\"/><Column id=\"NAPBU_DT_02\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYnRadio", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dInput", this);
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"GOGYOJOLEOP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"IPRYEOK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"GOGYOJOLEOP_YEJEONG_YYYY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JEONHYEONG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONHYEONG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"GWAMOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GWAMOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GWAMOK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"GWAMOK_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"ISU_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"SEONGCHWIDO\" type=\"STRING\" size=\"256\"/><Column id=\"SEOKCHA\" type=\"STRING\" size=\"256\"/><Column id=\"DONG_SEOKCHA\" type=\"STRING\" size=\"256\"/><Column id=\"JAEJEOK_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"SEOKCHA_BAEKBUNYUL\" type=\"STRING\" size=\"256\"/><Column id=\"WON_JEOMSU\" type=\"STRING\" size=\"256\"/><Column id=\"GWAMOK_AVG\" type=\"STRING\" size=\"256\"/><Column id=\"PYOJUNPYEONCHA\" type=\"STRING\" size=\"256\"/><Column id=\"WON_DEUNGGEUP\" type=\"STRING\" size=\"256\"/><Column id=\"WON_DEUNGGEUP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HWANSAN_DEUNGGEUP\" type=\"STRING\" size=\"256\"/><Column id=\"HWANSAN_JEOMSU\" type=\"STRING\" size=\"256\"/><Column id=\"IPRYEOK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"IPRYEOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USUGWAMOK_SEONJEONG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"GOGYOJOLEOP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"IPRYEOK_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"BANYEONG_GB\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds1996Jolup", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBindableGogyo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"bEnable\" type=\"STRING\" size=\"256\"/><Column id=\"bReadonly\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"bEnable\">false</Col><Col id=\"bReadonly\">true</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBindableGosi", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"bEnable\" type=\"STRING\" size=\"256\"/><Column id=\"bReadonly\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"bEnable\">false</Col><Col id=\"bReadonly\">true</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBindableDaehak", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"bEnable\" type=\"STRING\" size=\"256\"/><Column id=\"bReadonly\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"bEnable\">false</Col><Col id=\"bReadonly\">true</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDeungGeub", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSeongchwido", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJeomsu", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"GOGYO_SEONGJEOK_IPRYEOK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"CHONG_JEOMSU\" type=\"STRING\" size=\"256\"/><Column id=\"CHONG_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"CHONG_TOTAL_JEOMSU\" type=\"STRING\" size=\"256\"/><Column id=\"CHONG_DEUNGGEUP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gijunYyyy", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_hakgwaCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_juyaGbcd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mojipGbcd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_jeonhyeong", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"JEONHYEONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONHYEONG_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sebujeonhyeong", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SEBUJEONHYEONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SEBUJEONHYEONG_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_jeongongCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UP_DEPT_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGogyoGyeyeol", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSebuYuhyeong", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJeonhyeong", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONHYEONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SEBUJEONHYEONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"GOGYOGYEYEOL_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOMSAENG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RES_NO1\" type=\"STRING\" size=\"256\"/><Column id=\"RES_NO2\" type=\"STRING\" size=\"256\"/><Column id=\"JOLEOPNYEONDO_IPRYEOK_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ONLINEBUDONGUI\" type=\"STRING\" size=\"256\"/><Column id=\"SEONGJEOKMIIPRYEOK_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DELETE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"HYEONJAE_MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JEOPSU_FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"JEOPSU_TODT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBindableComp", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"bEnable\" type=\"STRING\" size=\"256\"/><Column id=\"bReadonly\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"bEnable\">false</Col><Col id=\"bReadonly\">true</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJungbok", this);
            obj._setContents("<ColumnInfo><Column id=\"CNT\" type=\"STRING\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_jungbokInput", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"RES_NO1\" type=\"STRING\" size=\"256\"/><Column id=\"RES_NO2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJaejiwon", this);
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"MOJIP_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JUYA_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"JEONHYEONG_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONHYEONG_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"SEBUJEONHYEONG_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SEBUJEONHYEONG_TYCD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONGONG_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"JANGSO_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SUHEOMSAENG_NM\" type=\"STRING\" size=\"40\"/><Column id=\"RES_NO1\" type=\"STRING\" size=\"6\"/><Column id=\"RES_NO2\" type=\"STRING\" size=\"200\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"8\"/><Column id=\"BIRTHDAY1\" type=\"STRING\" size=\"65532\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"NAEOEGUKIN_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"POST\" type=\"STRING\" size=\"6\"/><Column id=\"JUSO_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JUSO\" type=\"STRING\" size=\"500\"/><Column id=\"SANGSE_JUSO\" type=\"STRING\" size=\"500\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"50\"/><Column id=\"HP_NO\" type=\"STRING\" size=\"15\"/><Column id=\"HP_NO1\" type=\"STRING\" size=\"65532\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"15\"/><Column id=\"TEL_NO1\" type=\"STRING\" size=\"65532\"/><Column id=\"CHUGA_YEONRAKCHEO\" type=\"STRING\" size=\"15\"/><Column id=\"CHUGA_YEONRAKCHEO1\" type=\"STRING\" size=\"65532\"/><Column id=\"GOGYO_CD\" type=\"STRING\" size=\"10\"/><Column id=\"GOGYO_NM\" type=\"STRING\" size=\"100\"/><Column id=\"CHULSIN_GOGYO_CD\" type=\"STRING\" size=\"10\"/><Column id=\"GOGYOGYEYEOL_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"GOGYOJOLEOP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"GOGYOJOLEOP_YEJEONG_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"GOGYO_SEONGJEOK_IPRYEOK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"TERM1_KOR_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TERM1_ENG_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TERM2_KOR_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TERM2_ENG_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TERM3_KOR_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TERM3_ENG_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHOEGEUN_HAKGI_KOR_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHOEGEUN_HAKGI_ENG_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYOGWAMOK_CHONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TERM2_SEOKCHA_CHONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOTAL_SEOKCHA_CHONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GEOMJEONGGOSI_CD\" type=\"STRING\" size=\"10\"/><Column id=\"GEOMJEONGGOSI_NM\" type=\"STRING\" size=\"100\"/><Column id=\"GEOMJEONGGOSI_HOECHA\" type=\"STRING\" size=\"10\"/><Column id=\"AVG_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HAPGYEOK_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"DONGUI_NO\" type=\"STRING\" size=\"20\"/><Column id=\"GEOMJEONGGOSI_BAEKBUNYUL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GEOMJEONGGOSI_KOR_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GEOMJEONGGOSI_ENG_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GEOMJEONGGOSI_CHONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHULSIN_DAEHAK_NM\" type=\"STRING\" size=\"200\"/><Column id=\"DAEHAKJOLEOP_YEJEONG_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"DAEHAKJOLEOP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"AVG_PYEONGJEOM_BAEKBUNYUL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHONGISU_HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHOEGEUN_HAKGI_PYEONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GIJUN_PYEONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PYEONGJEOM_CHONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"MYEONJEOP_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SILGI_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHONGDEUNGGEUP\" type=\"STRING\" size=\"10\"/><Column id=\"BANK_NM\" type=\"STRING\" size=\"50\"/><Column id=\"GYEJWA_NO\" type=\"STRING\" size=\"50\"/><Column id=\"YEGEUMJU\" type=\"STRING\" size=\"40\"/><Column id=\"YEGEUMJU_GWANGYE\" type=\"STRING\" size=\"20\"/><Column id=\"SUSI_HAPGYEOK_YN\" type=\"STRING\" size=\"2\"/><Column id=\"HAKSAENGBU_ONLINEJEGONGDONGUI_YN\" type=\"STRING\" size=\"10\"/><Column id=\"SUJIP_DONGUI_YN\" type=\"STRING\" size=\"2\"/><Column id=\"GOYUSIKBYEOL_INFO_DONGUI_YN\" type=\"STRING\" size=\"2\"/><Column id=\"INFO_WITAK_DONGUI_YN\" type=\"STRING\" size=\"2\"/><Column id=\"INFO_3JA_JEGONG_DONGUI_YN\" type=\"STRING\" size=\"2\"/><Column id=\"JEONHYEONGRYONAPBU_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONHYEONGRYONAPBU_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"MYEONJE_SAYU_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JEOPSUJA1\" type=\"STRING\" size=\"10\"/><Column id=\"JEOPSUJA2\" type=\"STRING\" size=\"10\"/><Column id=\"NAEYONG_HWAKIN_YN\" type=\"STRING\" size=\"2\"/><Column id=\"CHOECHOHAPGYEOK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"HAPGYEOK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"YEBIHAPGYEOKHUBO_SEOKCHA\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BULHAPGYEOK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"MIDEUNGROK_SEBU_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"BULHAPGYEOK_DT\" type=\"STRING\" size=\"8\"/><Column id=\"JEOPSU_DTTM\" type=\"STRING\" size=\"14\"/><Column id=\"DELETE_YN\" type=\"STRING\" size=\"2\"/><Column id=\"DELETE_SAYU\" type=\"STRING\" size=\"1000\"/><Column id=\"IJEON_SEONGJEOK_CNT\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGogyoJolub", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gogyoInput", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"GOGYO_SEONGJEOK_IPRYEOK_GBCD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHoecha", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDaehakJolub", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPyeongjeom", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJeonhyeongryo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSayu", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDeungrok", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHapgyeok", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYnRadioOnline", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBulHapgyeok", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMideungrok", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inputGogyo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"GOGYO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GOGYO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JIYEOK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"GEOMJEONGGOSI\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGogyo", this);
            obj._setContents("<ColumnInfo><Column id=\"GOGYO_CD\" type=\"STRING\" size=\"10\"/><Column id=\"GOGYO_NM\" type=\"STRING\" size=\"100\"/><Column id=\"JIYEOK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SEBUJIYEOK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"GOGYOGYEYEOL_GBCD\" type=\"STRING\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"OUT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"OUT_MSG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_copyInput", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"IN_IPSI_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"IN_MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"IN_SUHEOM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"IN_RES_NO1\" type=\"STRING\" size=\"256\"/><Column id=\"IN_RES_NO2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_deungrokInput", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DEUNGROK_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"GONGJI_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"CHASU_GBCD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds2chaDeungrok", this);
            obj._setContents("<ColumnInfo><Column id=\"DEUNGROK_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"DEUNGROK_FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"DEUNGROK_TODT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds2cha", this);
            obj._setContents("<ColumnInfo><Column id=\"OUT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"OUT_MSG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_2chaInput", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"IN_DEUNGROK_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"IN_MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"IN_SUHEOM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"IN_GONGJI_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"IN_CHASU_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"IN_HAPGYEOK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"IN_DEUNGROK_FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"IN_DEUNGROK_TODT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdMaster","10","35","367","755",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsMaster");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"108\"/><Column size=\"142\"/><Column size=\"105\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"상태\"/><Cell col=\"1\" text=\"수험번호\"/><Cell col=\"2\" text=\"전형구분\"/><Cell col=\"3\" text=\"성명\"/><Cell col=\"4\"/><Cell col=\"5\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:SUHEOM_NO\" editmaxlength=\"10\"/><Cell col=\"2\" displaytype=\"combotext\" edittype=\"none\" textAlign=\"center\" text=\"bind:JEONHYEONG_GBCD\" editmaxlength=\"100\" combodataset=\"dsJeonhyeong\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:SUHEOMSAENG_NM\" editmaxlength=\"256\"/><Cell col=\"4\" text=\"bind:IPSI_YYYY\"/><Cell col=\"5\" text=\"bind:MOJIP_GBCD\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","10","13","115","22",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_text("원서접수내역");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_05","407","35","785","28",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02","407","35","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_text("지원일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","119","12","233","24",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","404","13","115","22",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_text("지원정보");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_05_00","407","62","785","28",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_05_00_00","407","89","785","28",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00_00","404","130","115","22",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_text("인적사항");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00_00_00","403","247","115","22",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_text("학력사항(고교)");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_05_00_00_00_00","407","323","265","28",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_05_01_00","407","269","265","28",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_05_00_01_00","407","296","265","28",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00_00_00_00","403","364","115","22",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_text("접수자");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_05_00_00_00_00_00","407","386","265","28",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00_00_00_01","683","247","145","22",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_text("학력사항(검정고시)");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_05_01_00_00","687","269","235","28",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_05_00_01_00_00","687","296","235","28",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_05_00_00_00_00_01","687","323","235","28",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_05_01_00_00_00","687","350","235","28",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_05_00_01_00_00_00","687","377","235","28",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_05_01_00_00_00_00","687","402","235","28",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_05_00_01_00_00_00_00","687","429","235","28",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00_00_00_01_00","933","247","145","22",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_text("학력사항(대학졸업)");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_05_01_00_00_01","937","269","255","28",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_05_00_01_00_00_01","937","296","255","28",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_05_00_00_00_00_01_00","937","323","255","28",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_05_01_00_00_00_01","937","350","255","28",null,null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_05_00_01_00_00_00_01","937","377","255","28",null,null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_05_01_00_00_00_00_00","937","402","255","28",null,null,null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00_00_00_00_00","403","454","115","22",null,null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_text("전형료");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_05_01_00_01","407","476","265","28",null,null,null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("staMyenjeSayu","407","503","265","28",null,null,null,null,null,null,this);
            obj.set_taborder("100");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_05_00_00_00_00_00_00","407","413","265","28",null,null,null,null,null,null,this);
            obj.set_taborder("101");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_05_01_00_01_00","690","503","502","28",null,null,null,null,null,null,this);
            obj.set_taborder("102");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_05_00_01_00_01_00","690","530","502","28",null,null,null,null,null,null,this);
            obj.set_taborder("103");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00_00_00_00_00_00","687","481","115","22",null,null,null,null,null,null,this);
            obj.set_taborder("104");
            obj.set_text("은행계좌");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00_00_00_00_00_01","403","572","115","22",null,null,null,null,null,null,this);
            obj.set_taborder("105");
            obj.set_text("정보동의");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_05_01_01","407","594","785","28",null,null,null,null,null,null,this);
            obj.set_taborder("106");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_05_00_01_01","407","621","785","28",null,null,null,null,null,null,this);
            obj.set_taborder("107");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_05_00_00_00_01","407","648","785","28",null,null,null,null,null,null,this);
            obj.set_taborder("108");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00_00_00_02","405","686","115","22",null,null,null,null,null,null,this);
            obj.set_taborder("109");
            obj.set_text("선수금등록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_05_01_00_02","409","708","255","28",null,null,null,null,null,null,this);
            obj.set_taborder("110");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_05_00_01_00_02","409","735","255","28",null,null,null,null,null,null,this);
            obj.set_taborder("111");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_05_00_00_00_00_02","409","762","255","28",null,null,null,null,null,null,this);
            obj.set_taborder("112");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00_00_00_02_00","675","686","115","22",null,null,null,null,null,null,this);
            obj.set_taborder("113");
            obj.set_text("최종등록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_05_01_00_02_00","679","708","255","28",null,null,null,null,null,null,this);
            obj.set_taborder("114");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_05_00_01_00_02_00","679","735","255","28",null,null,null,null,null,null,this);
            obj.set_taborder("115");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_05_00_00_00_00_02_00","679","762","255","28",null,null,null,null,null,null,this);
            obj.set_taborder("116");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00_00_00_02_00_00","950","686","115","22",null,null,null,null,null,null,this);
            obj.set_taborder("117");
            obj.set_text("처리");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_05_01_00_02_00_00","950","708","242","28",null,null,null,null,null,null,this);
            obj.set_taborder("118");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("staBulMi","950","735","242","28",null,null,null,null,null,null,this);
            obj.set_taborder("119");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_00","895","35","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("120");
            obj.set_text("수험번호");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSuheomNo","1008","38","180","22",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_01","407","62","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("121");
            obj.set_text("학과/학부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboHakgwa","520","65","133","22",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_codecolumn("HAKGWA_CD");
            obj.set_datacolumn("HAKGWA_NM");
            obj.set_readonly("false");
            obj.set_innerdataset("ds_hakgwaCd");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_01_00","656","62","88","28",null,null,null,null,null,null,this);
            obj.set_taborder("122");
            obj.set_text("전공");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJeongong","747","65","146","22",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_innerdataset("ds_jeongongCd");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_01_00_00","895","62","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("123");
            obj.set_text("주야구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJuya","1008","65","180","22",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_codecolumn("JUYA_GBCD");
            obj.set_datacolumn("JUYA_NM");
            obj.set_readonly("false");
            obj.set_innerdataset("ds_juyaGbcd");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_01_01","407","89","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("124");
            obj.set_text("전형");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJeonhyeong","520","92","133","22",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_readonly("false");
            obj.set_codecolumn("JEONHYEONG_GBCD");
            obj.set_datacolumn("JEONHYEONG_NM");
            obj.set_innerdataset("ds_jeonhyeong");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSebu","656","92","88","22",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_readonly("false");
            obj.set_codecolumn("SEBUJEONHYEONG_GBCD");
            obj.set_datacolumn("SEBUJEONHYEONG_NM");
            obj.set_innerdataset("ds_sebujeonhyeong");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSebuYuhyeong","747","92","146","22",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_readonly("false");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsSebuYuhyeong");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_01_01_00","895","89","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("125");
            obj.set_text("고교계열구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboGyeyeol","1008","92","180","22",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsGogyoGyeyeol");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_05_01","407","152","785","28",null,null,null,null,null,null,this);
            obj.set_taborder("126");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_02","407","152","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("127");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtNm","520","155","93","22",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_enable("true");
            obj.set_maxlength("13");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_05_00_01","407","179","785","28",null,null,null,null,null,null,this);
            obj.set_taborder("128");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_05_00_00_00","407","206","785","28",null,null,null,null,null,null,this);
            obj.set_taborder("129");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Edit("edtResNo1","729","155","102","22",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_enable("true");
            obj.set_maxlength("6");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_01_02","407","179","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("130");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_01_01_01","407","206","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("131");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_01_00_01_00","616","152","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("132");
            obj.set_text("주민등록번호");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtResNo2","849","155","102","22",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_enable("true");
            obj.set_maxlength("7");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","822","149","36","32",null,null,null,null,null,null,this);
            obj.set_taborder("133");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJuso","689","182","262","22",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtTelNo","520","209","93","22",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_enable("true");
            obj.set_maxlength("13");
            obj.set_inputtype("number,digit");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_01_01_01_00","617","206","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("134");
            obj.set_text("휴대폰");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHpNo","730","209","102","22",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_enable("true");
            obj.set_maxlength("13");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_01_01_01_00_00","835","206","116","28",null,null,null,null,null,null,this);
            obj.set_taborder("135");
            obj.set_text("추가연락처");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAddNo","954","209","102","22",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_enable("true");
            obj.set_maxlength("13");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_02_00","407","269","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("136");
            obj.set_text("출신고교명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtChulsinGogyo","520","272","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_01_02_00","407","296","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("137");
            obj.set_text("고교졸업구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_01_01_01_01","407","323","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("138");
            obj.set_text("졸업(예정)년도");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGogyoJolubYYYY","520","326","146","22",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_enable("true");
            obj.set_maxlength("4");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Button("btnGogyo","643","272","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_PopSrch");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("cboGogyoJolubGb","520","299","146","22",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsGogyoJolub");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_02_00_00","687","269","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("139");
            obj.set_text("검정고시명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_01_02_00_00","687","296","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("140");
            obj.set_text("합격년도");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_01_01_01_01_00","687","323","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("141");
            obj.set_text("평균점수");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_02_00_00_00","687","348","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("142");
            obj.set_text("회차");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_01_02_00_00_00","687","375","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("143");
            obj.set_text("동의번호");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_01_01_01_01_00_00","687","402","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("144");
            obj.set_text("국어점수평균");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_01_01_01_01_00_00_00","687","429","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("145");
            obj.set_text("영어점수평균");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGosi","799","272","95","22",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnGosi","896","272","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_cssclass("btn_WF_PopSrch");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGosiYYYY","799","299","119","22",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_enable("true");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGosiJeomsu","799","326","119","22",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_enable("true");
            obj.set_maxlength("7");
            obj.set_inputtype("number,dot");
            this.addChild(obj.name, obj);

            obj = new Combo("cboGosiHeocha","799","353","119","22",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsHoecha");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDonguiNo","799","379","119","22",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_enable("true");
            obj.set_maxlength("20");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Edit("edtKor","799","405","119","22",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_enable("true");
            obj.set_maxlength("6");
            obj.set_inputtype("number,dot");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEng","799","432","119","22",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_enable("true");
            obj.set_maxlength("6");
            obj.set_inputtype("number,dot");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_02_00_00_01","937","269","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("146");
            obj.set_text("출신대학명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_01_02_00_00_01","937","296","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("147");
            obj.set_text("대학졸업구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_01_01_01_01_00_01","937","323","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("148");
            obj.set_text("졸업(예정)년도");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_02_00_00_00_00","937","350","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("149");
            obj.set_text("전학년평점백분율");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_font("8pt \"Arial\" bold");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_01_02_00_00_00_00","937","377","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("150");
            obj.set_text("이수학점");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_01_01_01_01_00_00_01","937","402","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("151");
            obj.set_text("전학년평균평점");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_font("8pt \"Arial\" bold");
            this.addChild(obj.name, obj);

            obj = new Edit("edtChulsinDaehak","1049","272","139","22",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_enable("true");
            obj.set_maxlength("66");
            this.addChild(obj.name, obj);

            obj = new Combo("cboDaehakJolubGb","1049","299","139","22",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsDaehakJolub");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDaehakJolbuYYYY","1049","326","139","22",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_enable("true");
            obj.set_maxlength("4");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Edit("edt100","1049","353","139","22",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_enable("true");
            obj.set_maxlength("6");
            obj.set_inputtype("number,dot");
            this.addChild(obj.name, obj);

            obj = new Edit("edtIsuHakjeom","1049","379","139","22",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_enable("true");
            obj.set_maxlength("3");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAvg","1049","405","59","22",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_enable("true");
            obj.set_maxlength("7");
            obj.set_inputtype("number,dot");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","1096","398","36","32",null,null,null,null,null,null,this);
            obj.set_taborder("152");
            obj.set_text("/");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_01_01_01_01_01","407","386","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("153");
            obj.set_text("접수자1");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJeopsu1","520","389","146","22",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_enable("true");
            obj.set_maxlength("3");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_01_01_01_01_01_00","407","413","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("154");
            obj.set_text("접수자2");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJeopsu2","520","415","146","22",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_enable("true");
            obj.set_maxlength("3");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_01_01_01_01_01_01","407","476","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("155");
            obj.set_text("전형료납부구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("staMyenje","407","503","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("156");
            obj.set_text("면제사유구분");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJeonhyeongryo","520","479","148","22",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsJeonhyeongryo");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_01_01_01_01_00_00_00_00","687","530","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("157");
            obj.set_text("계좌번호");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_01_01_01_01_00_00_02","687","503","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("158");
            obj.set_text("은행명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBankNm","799","506","135","22",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_enable("true");
            obj.set_maxlength("16");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGyejwaNo","799","533","135","22",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_enable("true");
            obj.set_maxlength("20");
            obj.set_inputtype("number,digit");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_01_01_01_01_00_00_02_00","937","503","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("159");
            obj.set_text("예금주");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_01_01_01_01_00_00_00_00_00","937","530","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("160");
            obj.set_text("관계");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtYegeumju","1049","506","139","22",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_enable("true");
            obj.set_maxlength("13");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGwangye","1049","533","139","22",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_enable("true");
            obj.set_maxlength("6");
            this.addChild(obj.name, obj);

            obj = new Calendar("calDt","747","38","146","23",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_01_01_01_01_01_00_00_00","407","594","170","28",null,null,null,null,null,null,this);
            obj.set_taborder("161");
            obj.set_text("수시모집 합격여부 확인");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoDongui1","581","596","130","22",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_direction("vertical");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsYnRadio");
            obj.set_text("예");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_01_01_01_01_01_00_00_00_00","407","621","170","28",null,null,null,null,null,null,this);
            obj.set_taborder("162");
            obj.set_text("개인정보 수집 및 이용");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoDongui3","581","624","130","22",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_direction("vertical");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsYnRadio");
            obj.set_text("예");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_01_01_01_01_01_00_00_00_00_00","407","648","170","28",null,null,null,null,null,null,this);
            obj.set_taborder("163");
            obj.set_text("개인정보취급 위탁");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoDongui5","581","650","130","22",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_direction("vertical");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsYnRadio");
            obj.set_text("예");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("staOnline","767","594","190","28",null,null,null,null,null,null,this);
            obj.set_taborder("164");
            obj.set_text("학생부자료 온라인 제공");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoDongui2","961","596","200","22",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_direction("vertical");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsYnRadioOnline");
            obj.set_text("예");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_01_01_01_01_01_00_00_00_00_01","767","621","190","28",null,null,null,null,null,null,this);
            obj.set_taborder("165");
            obj.set_text("고유식별정보 수집 및 이용");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoDongui4","961","624","130","22",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_direction("vertical");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsYnRadio");
            obj.set_text("예");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_01_01_01_01_01_00_00_00_00_00_00","767","648","190","28",null,null,null,null,null,null,this);
            obj.set_taborder("166");
            obj.set_text("개인정보 제3자 제공");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoDongui6","961","651","130","22",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_direction("vertical");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsYnRadio");
            obj.set_text("예");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_02_01","407","708","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("167");
            obj.set_text("등록여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_01_02_01","407","735","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("168");
            obj.set_text("등록포기날짜");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_01_01_01_02","407","762","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("169");
            obj.set_text("등록일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboPreDeungrokYn","519","711","141","22",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_innerdataset("dsDeungrok");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calPrePogiDt","519","738","141","22",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calPreDeungrokDt","519","765","141","22",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_02_01_00","679","708","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("170");
            obj.set_text("등록여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_01_02_01_00","679","735","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("171");
            obj.set_text("등록포기날짜");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_01_01_01_02_00","679","762","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("172");
            obj.set_text("등록일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboDeungrokYn","791","711","139","22",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_innerdataset("dsDeungrok");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calPogiDt","791","738","139","22",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calDeungrokDt","791","765","139","22",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_02_01_00_00","950","708","90","28",null,null,null,null,null,null,this);
            obj.set_taborder("173");
            obj.set_text("합격여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboHabgyeokYn","1042","711","146","22",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_innerdataset("dsHapgyeok");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00_01",null,"14","115","22","303",null,null,null,null,null,this);
            obj.set_taborder("174");
            obj.set_text("고교성적");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt2",null,"12","53","24","283",null,null,null,null,null,this);
            obj.set_taborder("175");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cboMojip","656","38","88","22",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_codecolumn("MOJIP_GBCD");
            obj.set_datacolumn("MOJIP_NM");
            obj.set_readonly("true");
            obj.set_innerdataset("ds_mojipGbcd");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSangse","954","182","234","22",null,null,null,null,null,null,this);
            obj.set_taborder("176");
            obj.set_enable("true");
            obj.set_maxlength("166");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_05_00_01_00_01_01","407","530","265","28",null,null,null,null,null,null,this);
            obj.set_taborder("177");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_01_01_01_01_01_00_00_01","407","530","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("178");
            obj.set_text("위내용확인여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoHwakin","521","532","110","22",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_direction("vertical");
            obj.set_innerdataset("dsYnRadio");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("예");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cboMyeonjeSayu","520","506","148","22",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsSayu");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnUpdate","1089","5","101","25",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("접수내역수정");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_tabstop("true");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","1089","122","101","25",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("인적사항저장");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_tabstop("true");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn2cha","950","767","91","21",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("정시2차처리");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_tabstop("true");
            this.addChild(obj.name, obj);

            obj = new Spin("spnYYYY","519","38","134","22",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPostNo","520","182","93","22",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","279","0","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("179");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01_00","0","30","1630","5",null,null,null,null,null,null,this);
            obj.set_taborder("180");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00","377","35","30","729",null,null,null,null,null,null,this);
            obj.set_taborder("181");
            obj.set_text("30");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","736","117","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("182");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01_00_00","405","147","790","5",null,null,null,null,null,null,this);
            obj.set_taborder("183");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","576","234","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("184");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01_00_00_00","405","264","790","5",null,null,null,null,null,null,this);
            obj.set_taborder("185");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","569","351","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("186");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","569","441","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("187");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01_00_00_00_00","405","381","260","5",null,null,null,null,null,null,this);
            obj.set_taborder("188");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01_00_00_00_00_00","405","471","260","5",null,null,null,null,null,null,this);
            obj.set_taborder("189");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01_00_00_00_00_00_00","694","498","470","5",null,null,null,null,null,null,this);
            obj.set_taborder("190");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00","609","558","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("191");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01_00_00_00_00_00_01","405","589","770","5",null,null,null,null,null,null,this);
            obj.set_taborder("192");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00_00","579","676","100","31",null,null,null,null,null,null,this);
            obj.set_taborder("193");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01_00_00_00_00_00_01_00","405","703","770","5",null,null,null,null,null,null,this);
            obj.set_taborder("194");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","1192","35","30","729",null,null,null,null,null,null,this);
            obj.set_taborder("195");
            obj.set_text("30");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","1","10","741",null,null,null,null,null,null,this);
            obj.set_taborder("196");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_01","0",null,"1640","10",null,"0",null,null,null,null,this);
            obj.set_taborder("197");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,"11","10","741","0",null,null,null,null,null,this);
            obj.set_taborder("198");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDetail",null,"104","408","686","10",null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsDetail");
            obj._setContents("<Formats><Format id=\"default\"/><Format id=\"format00\"><Columns><Column size=\"48\"/><Column size=\"66\"/><Column size=\"76\"/><Column size=\"87\"/><Column size=\"74\"/><Column size=\"58\"/><Column size=\"58\"/><Column size=\"58\"/><Column size=\"58\"/><Column size=\"58\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"상태\"/><Cell col=\"1\" text=\"학년\"/><Cell col=\"2\" text=\"학기\"/><Cell col=\"3\" text=\"과목\"/><Cell col=\"4\" text=\"등급\"/><Cell col=\"5\" text=\"환산등급\"/><Cell col=\"6\" text=\"환산점수\"/><Cell col=\"7\" text=\"우수과목\"/><Cell col=\"8\" text=\"입력구분\"/><Cell col=\"9\" text=\"수정여부\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"expr:HAKNYEON+&apos;학년&apos;\"/><Cell col=\"2\" text=\"expr:HAKGI+&apos;학기&apos;\"/><Cell col=\"3\" text=\"bind:GWAMOK_GBNM\"/><Cell col=\"4\" text=\"bind:WON_DEUNGGEUP\" edittype=\"expr:dataset.parent.fn_GridType(IPRYEOK_GBCD, HAKNYEON, HAKGI) == true ? &quot;combo&quot; : &quot;none&quot; \" displaytype=\"expr:dataset.parent.fn_GridType(IPRYEOK_GBCD, HAKNYEON, HAKGI) == true ? &quot;combocontrol&quot; : &quot;normal&quot;\" combodataset=\"dsDeungGeub\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"5\" text=\"bind:HWANSAN_DEUNGGEUP\"/><Cell col=\"6\" text=\"bind:HWANSAN_JEOMSU\"/><Cell col=\"7\" text=\"bind:USUGWAMOK_SEONJEONG_YN\"/><Cell col=\"8\" text=\"bind:IPRYEOK_NM\"/><Cell col=\"9\" text=\"bind:UPDATE_YN\"/></Band></Format><Format id=\"format01\"><Columns><Column size=\"48\"/><Column size=\"66\"/><Column size=\"76\"/><Column size=\"87\"/><Column size=\"74\"/><Column size=\"58\"/><Column size=\"58\"/><Column size=\"58\"/><Column size=\"58\"/><Column size=\"58\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"상태\"/><Cell col=\"1\" text=\"학년\"/><Cell col=\"2\" text=\"학기\"/><Cell col=\"3\" text=\"과목\"/><Cell col=\"4\" text=\"성취도\"/><Cell col=\"5\" text=\"환산등급\"/><Cell col=\"6\" text=\"환산점수\"/><Cell col=\"7\" text=\"우수과목\"/><Cell col=\"8\" text=\"입력구분\"/><Cell col=\"9\" text=\"수정여부\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"expr:HAKNYEON+&apos;학년&apos;\"/><Cell col=\"2\" text=\"expr:HAKGI+&apos;학기&apos;\"/><Cell col=\"3\" text=\"bind:GWAMOK_GBNM\"/><Cell col=\"4\" text=\"bind:SEONGCHWIDO\" edittype=\"expr:dataset.parent.fn_GridType(IPRYEOK_GBCD, HAKNYEON, HAKGI) == true ? &quot;combo&quot; : &quot;none&quot; \" combodataset=\"dsSeongchwido\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\" displaytype=\"expr:dataset.parent.fn_GridType(IPRYEOK_GBCD, HAKNYEON, HAKGI) == true ? &quot;combocontrol&quot; : &quot;normal&quot;\"/><Cell col=\"5\" text=\"bind:HWANSAN_DEUNGGEUP\"/><Cell col=\"6\" text=\"bind:HWANSAN_JEOMSU\"/><Cell col=\"7\" text=\"bind:USUGWAMOK_SEONJEONG_YN\"/><Cell col=\"8\" text=\"bind:IPRYEOK_NM\"/><Cell col=\"9\" text=\"bind:UPDATE_YN\"/></Band></Format><Format id=\"format02\"><Columns><Column size=\"48\"/><Column size=\"66\"/><Column size=\"76\"/><Column size=\"87\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"74\"/><Column size=\"58\"/><Column size=\"58\"/><Column size=\"58\"/><Column size=\"58\"/><Column size=\"58\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"상태\"/><Cell col=\"1\" text=\"학년\"/><Cell col=\"2\" text=\"학기\"/><Cell col=\"3\" text=\"과목\"/><Cell col=\"4\" text=\"석차\"/><Cell col=\"5\" text=\"재적\"/><Cell col=\"6\" text=\"백분율\"/><Cell col=\"7\" text=\"성취도\"/><Cell col=\"8\" text=\"환산등급\"/><Cell col=\"9\" text=\"환산점수\"/><Cell col=\"10\" text=\"우수과목\"/><Cell col=\"11\" text=\"입력구분\"/><Cell col=\"12\" text=\"수정여부\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"expr:HAKNYEON\"/><Cell col=\"2\" text=\"expr:HAKGI\"/><Cell col=\"3\" text=\"bind:GWAMOK_GBNM\"/><Cell col=\"4\" text=\"bind:SEOKCHA\" displaytype=\"expr:IPRYEOK_TYPE == &quot;1&quot; ? &quot;maskeditcontrol&quot; : &quot;none&quot;\" edittype=\"expr:IPRYEOK_GBCD == &quot;1&quot; ? &quot;readonly&quot; : (IPRYEOK_TYPE == &quot;1&quot; ? &quot;mask&quot; : &quot;none&quot;)\" maskeditautoselect=\"true\" maskeditformat=\"####\" maskeditlimitbymask=\"both\"/><Cell col=\"5\" text=\"bind:JAEJEOK_CNT\" maskeditautoselect=\"true\" maskeditformat=\"####\" displaytype=\"expr:IPRYEOK_TYPE == &quot;1&quot; ? &quot;maskeditcontrol&quot; : &quot;none&quot;\" edittype=\"expr:IPRYEOK_GBCD == &quot;1&quot; ? &quot;readonly&quot; : (IPRYEOK_TYPE == &quot;1&quot; ? &quot;mask&quot; : &quot;none&quot;)\" maskeditlimitbymask=\"both\"/><Cell col=\"6\" text=\"bind:SEOKCHA_BAEKBUNYUL\"/><Cell col=\"7\" text=\"bind:SEONGCHWIDO\" displaytype=\"expr:IPRYEOK_TYPE == &quot;2&quot; ? &quot;combocontrol&quot; : &quot;none&quot;\" edittype=\"expr:IPRYEOK_GBCD == &quot;1&quot; ? &quot;none&quot; : (IPRYEOK_TYPE == &quot;2&quot; ? &quot;combo&quot; : &quot;none&quot;)\" combodataset=\"dsSeongchwido\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"8\" text=\"bind:HWANSAN_DEUNGGEUP\"/><Cell col=\"9\" text=\"bind:HWANSAN_JEOMSU\"/><Cell col=\"10\" text=\"bind:USUGWAMOK_SEONJEONG_YN\"/><Cell col=\"11\" text=\"bind:IPRYEOK_NM\"/><Cell col=\"12\" text=\"bind:UPDATE_YN\"/></Band></Format><Format id=\"format03\"><Columns><Column size=\"48\"/><Column size=\"66\"/><Column size=\"76\"/><Column size=\"87\"/><Column size=\"93\"/><Column size=\"74\"/><Column size=\"58\"/><Column size=\"58\"/><Column size=\"58\"/><Column size=\"58\"/><Column size=\"58\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"상태\"/><Cell col=\"1\" text=\"학년\"/><Cell col=\"2\" text=\"학기\"/><Cell col=\"3\" text=\"과목\"/><Cell col=\"4\" text=\"석차백분율(%)\"/><Cell col=\"5\" text=\"성취도\"/><Cell col=\"6\" text=\"환산등급\"/><Cell col=\"7\" text=\"환산점수\"/><Cell col=\"8\" text=\"우수과목\"/><Cell col=\"9\" text=\"입력구분\"/><Cell col=\"10\" text=\"수정여부\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"expr:HAKNYEON\"/><Cell col=\"2\" text=\"expr:HAKGI\"/><Cell col=\"3\" text=\"bind:GWAMOK_GBNM\"/><Cell col=\"4\" text=\"bind:SEOKCHA_BAEKBUNYUL\" displaytype=\"expr:IPRYEOK_TYPE == &quot;1&quot; ? &quot;maskeditcontrol&quot; : &quot;none&quot;\" edittype=\"expr:IPRYEOK_GBCD == &quot;1&quot; ? &quot;readonly&quot; : (IPRYEOK_TYPE == &quot;1&quot; ? &quot;mask&quot; : &quot;none&quot;)\" maskeditautoselect=\"true\" maskeditformat=\"###.##\" maskeditlimitbymask=\"both\"/><Cell col=\"5\" text=\"bind:SEONGCHWIDO\" displaytype=\"expr:IPRYEOK_TYPE == &quot;2&quot; ? &quot;combocontrol&quot; : &quot;none&quot;\" edittype=\"expr:IPRYEOK_GBCD == &quot;1&quot; ? &quot;none&quot; : (IPRYEOK_TYPE == &quot;2&quot; ? &quot;combo&quot; : &quot;none&quot;)\" combodataset=\"dsSeongchwido\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"6\" text=\"bind:HWANSAN_DEUNGGEUP\"/><Cell col=\"7\" text=\"bind:HWANSAN_JEOMSU\"/><Cell col=\"8\" text=\"bind:USUGWAMOK_SEONJEONG_YN\"/><Cell col=\"9\" text=\"bind:IPRYEOK_NM\"/><Cell col=\"10\" text=\"bind:UPDATE_YN\"/></Band></Format><Format id=\"format04\"><Columns><Column size=\"48\"/><Column size=\"66\"/><Column size=\"76\"/><Column size=\"87\"/><Column size=\"74\"/><Column size=\"74\"/><Column size=\"58\"/><Column size=\"58\"/><Column size=\"58\"/><Column size=\"58\"/><Column size=\"58\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"상태\"/><Cell col=\"1\" text=\"학년\"/><Cell col=\"2\" text=\"학기\"/><Cell col=\"3\" text=\"과목\"/><Cell col=\"4\" text=\"등급\"/><Cell col=\"5\" text=\"성취도\"/><Cell col=\"6\" text=\"환산등급\"/><Cell col=\"7\" text=\"환산점수\"/><Cell col=\"8\" text=\"우수과목\"/><Cell col=\"9\" text=\"입력구분\"/><Cell col=\"10\" text=\"수정여부\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"expr:HAKNYEON+&apos;학년&apos;\"/><Cell col=\"2\" text=\"expr:HAKGI+&apos;학기&apos;\"/><Cell col=\"3\" text=\"bind:GWAMOK_GBNM\"/><Cell col=\"4\" text=\"bind:WON_DEUNGGEUP\" displaytype=\"expr:dataset.parent.fn_GridType(IPRYEOK_GBCD, HAKNYEON, HAKGI) == true ? &quot;combocontrol&quot; : &quot;normal&quot;\" edittype=\"expr:dataset.parent.fn_GridType(IPRYEOK_GBCD, HAKNYEON, HAKGI) == true ? &quot;combo&quot; : &quot;none&quot; \" combodataset=\"dsDeungGeub\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"5\" text=\"bind:SEONGCHWIDO\" displaytype=\"expr:dataset.parent.fn_GridType(IPRYEOK_GBCD, HAKNYEON, HAKGI) == true ? &quot;combocontrol&quot; : &quot;normal&quot;\" edittype=\"expr:dataset.parent.fn_GridType(IPRYEOK_GBCD, HAKNYEON, HAKGI) == true ? &quot;combo&quot; : &quot;none&quot; \" combodataset=\"dsSeongchwido\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"6\" text=\"bind:HWANSAN_DEUNGGEUP\"/><Cell col=\"7\" text=\"bind:HWANSAN_JEOMSU\"/><Cell col=\"8\" text=\"bind:USUGWAMOK_SEONJEONG_YN\"/><Cell col=\"9\" text=\"bind:IPRYEOK_NM\"/><Cell col=\"10\" text=\"bind:UPDATE_YN\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail",null,"35","408","69","10",null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","4","58","380","9",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static01_01","4","0","380","9",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static00","232","8","80","23",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            obj.set_text("환산등급");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static00_00","233","34","78","23",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            obj.set_text("환산점수");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtHwansanDeungGeub","310","8","70","23",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtHwansanJeomsu","310","35","70","23",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new CheckBox("chkDeungGeub","17","36","116","20",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_text("등급, 성취도");
            obj.set_visible("false");
            obj.set_value("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","310","4","10","58",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("stc_04","0","9","141","22",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("9");
            obj.set_text("1996년 졸업생 선택");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cbo1996","137","9","80","22",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("ds1996Jolup");
            obj.set_displaynulltext("전체");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_02","6","31","380","5",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("10");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 6pt/normal \"Arial\"");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01","127","1","10","38",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboChongAvg","1122","405","66","22",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsPyeongjeom");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("cboMiDeungrok","1042","739","146","22",null,null,null,null,null,null,this);
            obj.set_taborder("200");
            obj.set_innerdataset("dsMideungrok");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            this.addChild(obj.name, obj);

            obj = new Button("btnJuso","615","183","71","21",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("주소검색");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_tabstop("true");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoDongui2_1","961","596","130","22",null,null,null,null,null,null,this);
            obj.set_taborder("201");
            obj.set_direction("vertical");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsYnRadio");
            obj.set_text("예");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cboBulHapgyeok","1042","739","146","22",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_innerdataset("dsBulHapgyeok");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            this.addChild(obj.name, obj);

            obj = new Button("btnIjeonSeongjeok",null,"5","101","25","10",null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("이전성적복사");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_tabstop("true");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("staBulHapgyeok","950","736","90","28",null,null,null,null,null,null,this);
            obj.set_taborder("199");
            obj.set_text("미등록 사유");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("입학원서입력");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","cboMojip","value","dsMaster","MOJIP_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","calDt","value","dsMaster","JEOPSU_DTTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","cboHakgwa","value","dsMaster","HAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","cboJeongong","value","dsMaster","JEONGONG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","cboJuya","value","dsMaster","JUYA_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","cboJeonhyeong","value","dsMaster","JEONHYEONG_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","cboSebu","value","dsMaster","SEBUJEONHYEONG_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","cboSebuYuhyeong","value","dsMaster","SEBUJEONHYEONG_TYCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","cboGyeyeol","value","dsMaster","GOGYOGYEYEOL_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","cboDaehakJolubGb","value","dsMaster","DAEHAKJOLEOP_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","cboGosiHeocha","value","dsMaster","GEOMJEONGGOSI_HOECHA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","cboGogyoJolubGb","value","dsMaster","GOGYOJOLEOP_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","cboJeonhyeongryo","value","dsMaster","JEONHYEONGRYONAPBU_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","cboPreDeungrokYn","value","dsMaster","DEUNGROK_STCD_01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","calPrePogiDt","value","dsMaster","POGI_DT_01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","calPreDeungrokDt","value","dsMaster","NAPBU_DT_01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","cboDeungrokYn","value","dsMaster","DEUNGROK_STCD_02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","calPogiDt","value","dsMaster","POGI_DT_02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","calDeungrokDt","value","dsMaster","NAPBU_DT_02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","cboHabgyeokYn","value","dsMaster","HAPGYEOK_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","cboMyeonjeSayu","value","dsMaster","MYEONJE_SAYU_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","rdoDongui2","value","dsMaster","HAKSAENGBU_ONLINEJEGONGDONGUI_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","rdoDongui4","value","dsMaster","GOYUSIKBYEOL_INFO_DONGUI_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","rdoDongui6","value","dsMaster","INFO_3JA_JEGONG_DONGUI_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","rdoDongui5","value","dsMaster","INFO_WITAK_DONGUI_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","rdoDongui3","value","dsMaster","SUJIP_DONGUI_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","rdoDongui1","value","dsMaster","SUSI_HAPGYEOK_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","btnNew01","enable","dsBindableButton","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","btn2cha","enable","dsBindableButton","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","spnYYYY","value","dsMaster","IPSI_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edtResNo1","value","dsMaster","RES_NO1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edtResNo2","value","dsMaster","RES_NO2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edtNm","value","dsMaster","SUHEOMSAENG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edtSuheomNo","value","dsMaster","SUHEOM_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edtPostNo","value","dsMaster","POST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edtJuso","value","dsMaster","JUSO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","edtSangse","value","dsMaster","SANGSE_JUSO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","edtTelNo","value","dsMaster","TEL_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","edtHpNo","value","dsMaster","HP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","edtAddNo","value","dsMaster","CHUGA_YEONRAKCHEO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","edtChulsinGogyo","value","dsMaster","GOGYO_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","edtGogyoJolubYYYY","value","dsMaster","GOGYOJOLEOP_YEJEONG_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","edtJeopsu1","value","dsMaster","JEOPSUJA1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","edtJeopsu2","value","dsMaster","JEOPSUJA2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","edtGosi","value","dsMaster","GEOMJEONGGOSI_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","edtGosiJeomsu","value","dsMaster","AVG_JEOMSU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","edtDonguiNo","value","dsMaster","DONGUI_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","edtKor","value","dsMaster","GEOMJEONGGOSI_KOR_JEOMSU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","edtEng","value","dsMaster","GEOMJEONGGOSI_ENG_JEOMSU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","edtChulsinDaehak","value","dsMaster","CHULSIN_DAEHAK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","edtDaehakJolbuYYYY","value","dsMaster","DAEHAKJOLEOP_YEJEONG_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","edt100","value","dsMaster","AVG_PYEONGJEOM_BAEKBUNYUL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","edtIsuHakjeom","value","dsMaster","CHONGISU_HAKJEOM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","edtAvg","value","dsMaster","PYEONGJEOM_CHONGJEOM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","edtBankNm","value","dsMaster","BANK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","edtGyejwaNo","value","dsMaster","GYEJWA_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","edtYegeumju","value","dsMaster","YEGEUMJU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","edtGwangye","value","dsMaster","YEGEUMJU_GWANGYE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","divDetail.form.edtHwansanDeungGeub","value","dsJeomsu","CHONG_DEUNGGEUP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item62","divDetail.form.edtHwansanJeomsu","value","dsJeomsu","CHONG_TOTAL_JEOMSU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","divDetail.form.cbo1996","value","ds_input","JUYA_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","cboChongAvg","value","dsMaster","DAEHAKJOLEOP_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item64","cboMiDeungrok","value","dsMaster","MIDEUNGROK_SEBU_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item65","btnJuso","enable","dsBindableButton","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item67","cboGogyoJolubGb","readonly","dsBindableGogyo","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item68","edtGogyoJolubYYYY","readonly","dsBindableGogyo","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item69","btnGogyo","enable","dsBindableGogyo","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item71","edtGosiYYYY","readonly","dsBindableGosi","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item72","edtGosiJeomsu","readonly","dsBindableGosi","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item73","cboGosiHeocha","readonly","dsBindableGosi","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item74","edtDonguiNo","readonly","dsBindableGosi","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item75","edtKor","readonly","dsBindableGosi","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item76","edtEng","readonly","dsBindableGosi","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item77","btnGosi","enable","dsBindableGosi","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item78","edtChulsinDaehak","readonly","dsBindableDaehak","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item79","cboDaehakJolubGb","readonly","dsBindableDaehak","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item80","edtDaehakJolbuYYYY","readonly","dsBindableDaehak","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item81","edt100","readonly","dsBindableDaehak","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item82","edtIsuHakjeom","readonly","dsBindableDaehak","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item83","edtAvg","readonly","dsBindableDaehak","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item84","cboChongAvg","readonly","dsBindableDaehak","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item85","rdoDongui2_1","value","dsMaster","GEOMJEONGGOSI_ONLINEJEGONGDONGUI_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item66","cboHakgwa","readonly","dsBindableComp","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item70","cboJeonhyeong","readonly","dsBindableComp","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item86","cboSebu","readonly","dsBindableComp","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item87","cboSebuYuhyeong","readonly","dsBindableComp","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item88","cboJuya","readonly","dsBindableComp","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","cboBulHapgyeok","value","dsMaster","BULHAPGYEOK_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item89","rdoHwakin","value","dsMaster","NAEYONG_HWAKIN_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item90","edtGosiYYYY","value","dsMaster","HAPGYEOK_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
            this._addPreloadList("data","","dsJeomsu");
        };
        
        // User Script
        this.registerScript("EN02_1010203_T01.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): EN02_1010203_T01.xfdl(입학원서입력)
        * 작 성         일 명: 성연우
        * 작 성         일 자: 2021/04/20
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
        var objDate = new Date();
        var nYear = objDate.getFullYear();
        var GIJUN_YYYY;

        // 현재모집구분코드
        var HYEONJAE_MOJIP_GBCD;

        //목포과학대 요청사항(20180927)
        var rowNum = new Array();

        //이전의 입시년도를 저장하는 변수
        var preIpsiYyyy;

        //선택한 접수 일자
        var selectJeopsuDttm;

        //접수 시작일자
        var jeopsuFrdt;

        //접수 종료일자
        var jeopsuTodt;

        //이전 고교졸업예정년도
        var preJoleopYejeongYyyy;

        var modJoleopYejeongYyyy;

        var GOGYOGYEYEOL_GBCD;

        var gogyoGyeyeol;

        var preJoleopGbcd;

        var jaejiwonGbVal;

        var modJoleopGbcd;
        var modRowPos = new Array();

        //저장 콜백 구분 카운트
        var jeopsuSuccessChk = 0;
        var seongjeokSuccessChk = 0;
        var jeopsuFailureChk = 0;
        var seongjeokFailureChk = 0;

        var ChoechoHapgyeokChk = 0;

        var ijeonJuyaGbcd;
        var graduateStuVal;
        var deunggeubSeongchidoVal;

        var newHakgwaCd;
        var newJeongongCd;
        var newJuyaGbcd;
        var newJeonhyeongGbcd;
        var newSebujeonhyeongGbcd;
        var newSebujeonhyeongTycd;

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
        var getDay = yyyy +''+ mm +''+ dd+''+hh+''+mi+''+ss;

        var DEL_MOJIP_GBCD;

        var saveType;

        var mojipHapgyeokChk = 0;
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
            var strDs    = "ds1996Jolup|dsYnRadio|dsDeungGeub|dsSeongchwido|dsGogyoGyeyeol|dsSebuYuhyeong|dsJeonhyeong|dsGogyoJolub|dsHoecha|dsDaehakJolub|dsPyeongjeom|dsJeonhyeongryo|dsSayu|dsDeungrok|dsHapgyeok|dsYnRadioOnline|dsBulHapgyeok|dsMideungrok";
            var strLgcd  = "01050|00052|01048|01049|01008|01003|01001|01009|01010|01011|01012|01013|01034|03009|01014|01026|01015|01027";
            var strComb  = "T|X|S|S|S|S|X|S|S|S|S|S|S|X|S|X|S|S";
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
        			case "2cha":
                            this.fn_Post2cha();
                        break;
                    case "Ret":
                            this.fn_PostRet();
                        break;
        			 case "DRet":
                            this.fn_PostDRet();
                        break;
                    case "Save":
                            this.fn_PostSave();
                        break;
                    case "New":
                            this.fn_PostNew();
                        break;
                    case "Del":
                            this.fn_PostDel();
                        break;
        			case "Copy":
                            this.fn_PostCopy();
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
        					GOGYOGYEYEOL_GBCD = sRtn[4];
        					this.cboGyeyeol.set_value(GOGYOGYEYEOL_GBCD);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "GOGYO_CD", sRtn[0]);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "GOGYO_NM", sRtn[1]);
        				}
        			break;
        		case "gosi" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					GOGYOGYEYEOL_GBCD = sRtn[4];
        					this.cboGyeyeol.set_value(GOGYOGYEYEOL_GBCD);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "GEOMJEONGGOSI_CD", sRtn[0]);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "GEOMJEONGGOSI_NM", sRtn[1]);
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
        this.fn_PreRet = function()
        {
            // 조회조건 셋팅
        	if(this.fn_beforeclose())
        	{
        		var result = this.gfn_confirm( "변경된 데이터가 있습니다. 그래도 이동하시겠습니까?", "저장","", "question" );
        		if(result == 0)
        		{
        			return false;
        		}
        	}
            return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_Ret = function(data1)
        {
            if(!this.fn_PreRet())
            {
                return false;
            }

        	this.ds_input.copyData(data1);

        	HYEONJAE_MOJIP_GBCD = this.ds_input.getColumn(0, "HYEONJAE_MOJIP_GBCD");
        	jeopsuFrdt = this.ds_input.getColumn(0, "JEOPSU_FRDT")+'000000';
        	jeopsuTodt = this.ds_input.getColumn(0, "JEOPSU_TODT")+'235959';

        	this.fn_Jeongong();
        	this.fn_MojipGb();

            var strSvc      = "Ret";
            var strUrl      = "/prj/EN/EN02/Retrieve_1010203_T01.do";
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
                05-1. 조회 함수 선언(디테일 함수)
        ***********************************************************************/
        this.dsMaster_canrowposchange = function(obj,e)
        {
        	if(this.fn_detailbeforeclose())
        	{
        		var result = this.gfn_confirm( "변경된 데이터가 있습니다. 그래도 이동하시겠습니까?", "저장","", "question" );
        		if(result == 0)
        		{
        			return false;
        		}
        	}
        };

        this.dsMaster_onrowposchanged = function(obj,e)
        {
        	if(this.dsMaster.getRowType(this.dsMaster.rowposition) == '2')
        	{
        		this.dsBindableComp.setColumn(0, "bReadonly", false);
        		this.dsBindableComp.setColumn(0, "bEnable", true);
        		this.btnSave.set_visible(false);
        	}
        	else
        	{
        		this.dsBindableComp.setColumn(0, "bReadonly", true);
        		this.dsBindableComp.setColumn(0, "bEnable", false);
        		this.btnSave.set_visible(true);
        	}

        	if(this.dsMaster.getColumn(this.dsMaster.rowposition, "JEONHYEONGRYONAPBU_GBCD") == '03')
        	{
        		this.staMyenje.set_visible(true);
        		this.staMyenjeSayu.set_visible(true);
        		this.cboMyeonjeSayu.set_visible(true);
        	}
        	else
        	{
        		this.staMyenje.set_visible(false);
        		this.staMyenjeSayu.set_visible(false);
        		this.cboMyeonjeSayu.set_visible(false);
        	}

        	if(this.dsMaster.getColumn(this.dsMaster.rowposition, "SEBUJEONHYEONG_GBCD") == '34')
        	{
        		this.dsBindableGogyo.setColumn(0, "bEnable", true);
        		this.dsBindableGogyo.setColumn(0, "bReadonly", false);
        		this.dsBindableGosi.setColumn(0, "bEnable", true);
        		this.dsBindableGosi.setColumn(0, "bReadonly", false);
        		this.dsBindableDaehak.setColumn(0, "bEnable", true);
        		this.dsBindableDaehak.setColumn(0, "bReadonly", false);
        		this.staOnline.set_text("");
        		this.rdoDongui2.set_visible(false);
        		this.rdoDongui2_1.set_visible(false);
        	}
        	else
        	{
        		if(this.dsMaster.getColumn(this.dsMaster.rowposition, "GOGYOGYEYEOL_GBCD") == '52')
        		{
        			this.dsBindableGogyo.setColumn(0, "bEnable", false);
        			this.dsBindableGogyo.setColumn(0, "bReadonly", true);
        			this.dsBindableGosi.setColumn(0, "bEnable", true);
        			this.dsBindableGosi.setColumn(0, "bReadonly", false);
        			this.dsBindableDaehak.setColumn(0, "bEnable", false);
        			this.dsBindableDaehak.setColumn(0, "bReadonly", true);
        			this.staOnline.set_text("검정고시 온라인제공 동의 여부");
        			this.rdoDongui2.set_visible(false);
        			this.rdoDongui2_1.set_visible(true);
        		}
        		else
        		{
        			this.dsBindableGogyo.setColumn(0, "bEnable", true);
        			this.dsBindableGogyo.setColumn(0, "bReadonly", false);
        			this.dsBindableGosi.setColumn(0, "bEnable", false);
        			this.dsBindableGosi.setColumn(0, "bReadonly", true);
        			this.dsBindableDaehak.setColumn(0, "bEnable", false);
        			this.dsBindableDaehak.setColumn(0, "bReadonly", true);
        			this.staOnline.set_text("학생부자료 온라인 제공");
        			this.rdoDongui2.set_visible(true);
        			this.rdoDongui2_1.set_visible(false);
        		}
        	}

        	// 미등록
        	if(this.dsMaster.getColumn(this.dsMaster.rowposition, "HAPGYEOK_GBCD") == '98')
        	{
        		this.staBulMi.set_visible(true);
        		this.staBulHapgyeok.set_text("미등록 사유");
        		this.staBulHapgyeok.set_visible(true);
        		this.cboMiDeungrok.set_visible(true);
        		this.cboBulHapgyeok.set_visible(false);
        	}
        	else if(this.dsMaster.getColumn(this.dsMaster.rowposition, "HAPGYEOK_GBCD") == '99')
        	{
        		this.staBulMi.set_visible(true);
        		this.staBulHapgyeok.set_text("불합격 사유");
        		this.staBulHapgyeok.set_visible(true);
        		this.cboMiDeungrok.set_visible(false);
        		this.cboBulHapgyeok.set_visible(true);
        	}
        	else
        	{
        		this.staBulMi.set_visible(false);
        		this.staBulHapgyeok.set_visible(false);
        		this.cboMiDeungrok.set_visible(false);
        		this.cboBulHapgyeok.set_visible(false);
        	}

        	//이전성적복사 버튼 활성화 담당
        	if(this.dsMaster.getColumn(this.dsMaster.rowposition, "IJEON_SEONGJEOK_CNT")  > 0)
        	{
        		this.btnIjeonSeongjeok.set_visible(true);
        	}
        	else
        	{
        		this.btnIjeonSeongjeok.set_visible(false);
        	}

        	//수정버튼 활성화 담당
        	if(this.dsMaster.getColumn(this.dsMaster.rowposition, "JANGSO_GBCD") == 0)
        	{
        		this.btnUpdate.set_visible(true);
        	}
        	else
        	{
        		this.btnUpdate.set_visible(false);
        	}

        	var SEONGJEOK_IPRYEOK_GBCD = this.dsMaster.getColumn(this.dsMaster.rowposition,"GOGYO_SEONGJEOK_IPRYEOK_GBCD");

        	this.ds_dInput.setColumn(0,"IPSI_YYYY", this.dsMaster.getColumn(this.dsMaster.rowposition,"IPSI_YYYY"));
        	this.ds_dInput.setColumn(0,"MOJIP_GBCD", this.dsMaster.getColumn(this.dsMaster.rowposition,"MOJIP_GBCD"));
        	this.ds_dInput.setColumn(0,"SUHEOM_NO", this.dsMaster.getColumn(this.dsMaster.rowposition,"SUHEOM_NO"));
        	this.ds_dInput.setColumn(0,"GOGYOJOLEOP_GBCD", this.dsMaster.getColumn(this.dsMaster.rowposition,"GOGYOJOLEOP_GBCD"));
        	this.ds_dInput.setColumn(0,"IPRYEOK_GBCD", this.dsMaster.getColumn(this.dsMaster.rowposition,"GOGYO_SEONGJEOK_IPRYEOK_GBCD"));
        	this.ds_dInput.setColumn(0,"GOGYOJOLEOP_YEJEONG_YYYY", this.dsMaster.getColumn(this.dsMaster.rowposition,"GOGYOJOLEOP_YEJEONG_YYYY"));

        	this.divDetail.form.chkDeungGeub.set_value(false);

        	if(this.dsMaster.getColumn(this.dsMaster.rowposition, "SEBUJEONHYEONG_GBCD") == '34' && this.dsMaster.getColumn(this.dsMaster.rowposition, "GOGYO_SEONGJEOK_IPRYEOK_GBCD") == "")
        	{
        		this.grdDetail.set_formatid("default");
        		this.divDetail.form.cbo1996.set_value('');
        		this.divDetail.form.cbo1996.set_enable(false);
        	}

        	if(this.dsMaster.getColumn(this.dsMaster.rowposition, "GOGYOGYEYEOL_GBCD") == '52' && this.dsMaster.getColumn(this.dsMaster.rowposition, "GOGYO_SEONGJEOK_IPRYEOK_GBCD") == "")
        	{
        		this.grdDetail.set_formatid("default");
        		this.divDetail.form.cbo1996.set_value('');
        		this.divDetail.form.cbo1996.set_enable(false);
        	}

        	// 1 : 1996년이전(백분율)
        	// 2 : 1996년이전(석차/재적)
        	// 3 : 1997년(2학년석차/재적)
        	// 4 : 1998년이후2007년(성취도)
        	// 5 : 08년이후현재(등급)
        	if(SEONGJEOK_IPRYEOK_GBCD == '1')
        	{
        		this.grdDetail.set_formatid("format03");
        		this.divDetail.form.cbo1996.set_value(SEONGJEOK_IPRYEOK_GBCD);
        		this.divDetail.form.cbo1996.set_enable(true);
        		this.divDetail.form.chkDeungGeub.set_visible(false);
        	}
        	else if(SEONGJEOK_IPRYEOK_GBCD == '2')
        	{
        		this.grdDetail.set_formatid("format02");
        		this.divDetail.form.cbo1996.set_value(SEONGJEOK_IPRYEOK_GBCD);
        		this.divDetail.form.cbo1996.set_enable(true);
        		this.divDetail.form.chkDeungGeub.set_visible(false);
        	}
        	else if(SEONGJEOK_IPRYEOK_GBCD == '3')
        	{
        		this.grdDetail.set_formatid("format02");
        		this.divDetail.form.cbo1996.set_value('');
        		this.divDetail.form.cbo1996.set_enable(false);
        		this.divDetail.form.chkDeungGeub.set_visible(false);
        	}
        	else if(SEONGJEOK_IPRYEOK_GBCD == '4')
        	{
        		this.grdDetail.set_formatid("format01");
        		this.divDetail.form.cbo1996.set_value('');
        		this.divDetail.form.cbo1996.set_enable(false);
        		this.divDetail.form.chkDeungGeub.set_visible(true);
        	}
        	else if(SEONGJEOK_IPRYEOK_GBCD == '5')
        	{
        		this.grdDetail.set_formatid("format00");
        		this.divDetail.form.cbo1996.set_value('');
        		this.divDetail.form.cbo1996.set_enable(false);
        		this.divDetail.form.chkDeungGeub.set_visible(true);
        	}
        	else if(SEONGJEOK_IPRYEOK_GBCD == '99')
        	{
        		this.grdDetail.set_formatid("format04");
        		this.divDetail.form.cbo1996.set_value('');
        		this.divDetail.form.cbo1996.set_enable(false);
        		this.divDetail.form.chkDeungGeub.set_visible(true);
        		this.divDetail.form.chkDeungGeub.set_value(true);
        	}

        	this.fn_DRet();
        };

        this.fn_DRet = function()
        {
            var strSvc      = "DRet";
            var strUrl      = "/prj/EN/EN02/Retrieve_1010203_T01_Detail.do";
            var strInDs     = "ds_dInput=ds_dInput";
            var strOutDs    = "dsDetail=dsDetail ";
        		strOutDs   += "dsJeomsu=dsJeomsu";
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
        this.fn_PostDRet = function()
        {
            this.gfn_getRowCount(this.staRowCnt2,this.dsDetail);
        };

        /**********************************************************************
                06. 추가 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_New = function()
        {
        	var newCount = 0;

        	if(this.ds_input.getColumn(0,"MOJIP_GBCD") == '')
        	{
        		this.alert("모집기간이 아닙니다.");
        		return;
        	}

        	if(jeopsuFrdt <= getDay && jeopsuTodt >= getDay && HYEONJAE_MOJIP_GBCD == this.ds_input.getColumn(0, "MOJIP_GBCD"))
        	{
        		var rowCount = this.dsMaster.rowcount;
        		if(rowCount > 0)
        		{
        			for(var i = 0; i < rowCount ; i++)
        			{
        				if(this.dsMaster.getRowType(i) == '2')
        				{
        					var RES_NO1 = this.dsMaster.getColumn(i, "RES_NO1");
        					var RES_NO2 = this.dsMaster.getColumn(i, "RES_NO2");

        					newCount = 1;
        					if(this.dsMaster.getColumn(i, "HAKGWA_CD") == '')
        					{
        						this.alert("학과를 선택해주세요.");
        						return false;
        					}
        					else if(this.ds_jeongongCd.rowcount != 0 && this.dsMaster.getColumn(i, "JEONGONG_CD") == '')
        					{
        						this.alert('전공을 선택해주세요.');
        						return false;
        					}
        					else if(this.dsMaster.getColumn(i, "JUYA_GBCD") == '')
        					{
        						this.alert("주야구분을 선택해주세요.");
        						return false;
        					}
        					else if(this.dsMaster.getColumn(i, "JEONHYEONG_GBCD") == '')
        					{
        						this.alert("전형구분을 선택해주세요.");
        						return false;
        					}
        					else if(this.dsMaster.getColumn(i, "SEBUJEONHYEONG_GBCD") == '')
        					{
        						this.alert("세부전형구분을 선택해주세요.");
        						return false;
        					}
        					else if(this.dsMaster.getColumn(i, "SEBUJEONHYEONG_GBCD") == '32' || this.dsMaster.getColumn(i, "SEBUJEONHYEONG_GBCD") == '33' || this.dsMaster.getColumn(i, "SEBUJEONHYEONG_GBCD") == '35')
        					{
        						if(this.dsMaster.getColumn(i, "SEBUJEONHYEONG_TYCD") == '')
        						{
        							this.alert('세부유형구분을 선택해주세요.');
        							return false;
        						}
        					}
        					else if(this.dsMaster.getColumn(i, "GOGYOGYEYEOL_GBCD") == '')
        					{
        						this.alert("고교계열구분을 선택해주세요.");
        						return false;
        					}
        					else if(this.dsMaster.getColumn(i, "SUHEOMSAENG_NM") == '')
        					{
        						this.alert("성명을 입력해주세요.");
        						return false;
        					}
        					else if(RES_NO1 == '' || RES_NO2 == '')
        					{
        						this.alert("주민등록번호를 입력해주세요.");
        						return false;
        					}
        					else if(RES_NO1.length != '6')
        					{
        						this.alert("주민등록번호 앞자리 갯수가 맞지 않습니다.");
        						return false;
        					}
        					else if(RES_NO2.length != '7')
        					{
        						this.alert("주민등록번호 뒷자리 갯수가 맞지 않습니다.");
        						return false;
        					}
        					else if(!(parseInt(RES_NO1.substring(2,4)) >= 1 && parseInt(RES_NO1.substring(2,4)) <= 12))
        					{
        						this.alert("주민등록번호의 생년월일을 잘못 입력하셨습니다.");
        						return false;
        					}
        					else if(RES_NO1.substring(4,6) >= 1 && RES_NO1.substring(4,6) <= 31)
        					{
        						this.alert("주민등록번호의 생년월일을 잘못 입력하셨습니다.");
        						return false;
        					}
        					else if(this.dsMaster.getColumn(i, "POST") == '' || this.dsMaster.getColumn(i, "JUSO") == '' || this.dsMaster.getColumn(i, "SANGSE_JUSO") == '')
        					{
        						this.alert("주소를 입력해주세요.");
        						return false;
        					}
        					else if(this.dsMaster.getColumn(i, "HP_NO") == '')
        					{
        						this.alert("휴대폰 번호를 입력해주세요.");
        						return false;
        					}
        					else if(this.dsMaster.getColumn(i, "SEBUJEONHYEONG_GBCD") == '34')
        					{
        						if(this.dsMaster.getColumn(i, "GOGYOGYEYEOL_GBCD") == '52')
        						{
        							if(this.dsMaster.getColumn(i, "GEOMJEONGGOSI_CD") == '' || this.dsMaster.getColumn(i, "GEOMJEONGGOSI_NM") == '')
        							{
        								this.alert("검정고시명을 선택해주세요.");
        								return false;
        							}
        							else if(this.dsMaster.getColumn(i, "HAPGYEOK_YYYY") == '')
        							{
        								this.alert("합격년도를 입력해주세요.");
        								return false;
        							}
        							else if(this.dsMaster.getColumn(i, "AVG_JEOMSU") === '')
        							{
        								this.alert("평균점수를 입력해주세요.");
        								return false;
        							}
        							else if(this.dsMaster.getColumn(i, "GEOMJEONGGOSI_HOECHA") == '')
        							{
        								this.alert("회차를 선택해주세요.");
        								return false;
        							}
        							else if(this.dsMaster.getColumn(i, "DONGUI_NO") == '')
        							{
        								this.alert("동의번호를 입력해주세요.");
        								return false;
        							}
        						}
        						else if(this.dsMaster.getColumn(i, "GOGYOGYEYEOL_GBCD") != '52')
        						{
        							if(this.dsMaster.getColumn(i, "GOGYO_CD") == '' || this.dsMaster.getColumn(i, "GOGYO_NM") == '')
        							{
        								this.alert("출신고교명을 선택해주세요.");
        								return false;
        							}
        							else if(this.dsMaster.getColumn(i, "GOGYOJOLEOP_GBCD") == '')
        							{
        								this.alert("고교졸업구분을 선택해주세요.");
        								return false;
        							}
        							else if(this.dsMaster.getColumn(i, "GOGYOJOLEOP_YEJEONG_YYYY") == '')
        							{
        								this.alert("고교 졸업(예정)년도를 입력해주세요.");
        								return false;
        							}
        						}

        						if(this.dsMaster.getColumn(i, "CHULSIN_DAEHAK_NM") == '')
        						{
        							this.alert("출신대학명을 입력해주세요.");
        							return false;
        						}
        						else if(this.dsMaster.getColumn(i, "DAEHAKJOLEOP_GBCD") == '')
        						{
        							this.alert("대학졸업구분을 선택해주세요.");
        							return false;
        						}
        						else if(this.dsMaster.getColumn(i, "DAEHAKJOLEOP_YEJEONG_YYYY") == '')
        						{
        							this.alert("대학 졸업(예정)년도를 입력해주세요.");
        							return false;
        						}
        						else if(this.dsMaster.getColumn(i, "AVG_PYEONGJEOM_BAEKBUNYUL") === '')
        						{
        							this.alert("전학년 평점 백분율을 입력해주세요.");
        							return false;
        						}
        						else if(this.dsMaster.getColumn(i, "CHONGISU_HAKJEOM") === '')
        						{
        							this.alert("이수학점을 입력해주세요.");
        							return false;
        						}
        						else if(this.dsMaster.getColumn(i, "CHOEGEUN_HAKGI_PYEONGJEOM") === '')
        						{
        							this.alert("최근 학기 평균 평점을 입력해주세요.");
        							return false;
        						}
        						else if(this.dsMaster.getColumn(i, "GIJUN_PYEONGJEOM") === '')
        						{
        							this.alert("기준 평점을 입력해주세요.");
        							return false;
        						}
        					}
        					else if(this.dsMaster.getColumn(i, "SEBUJEONHYEONG_GBCD") != '34')
        					{
        						if(this.dsMaster.getColumn(i, "GOGYOGYEYEOL_GBCD") == '52')
        						{
        							if(this.dsMaster.getColumn(i, "GEOMJEONGGOSI_CD") == '' || this.dsMaster.getColumn(i, "GEOMJEONGGOSI_NM") == '')
        							{
        								this.alert("검정고시명을 선택해주세요.");
        								return false;
        							}
        							else if(this.dsMaster.getColumn(i, "HAPGYEOK_YYYY") == '')
        							{
        								this.alert("합격년도를 입력해주세요.");
        								return false;
        							}
        							else if(this.dsMaster.getColumn(i, "AVG_JEOMSU") === '')
        							{
        								this.alert("평균점수를 입력해주세요.");
        								return false;
        							}
        							else if(this.dsMaster.getColumn(i, "GEOMJEONGGOSI_HOECHA") == '')
        							{
        								this.alert("회차를 선택해주세요.");
        								return false;
        							}
        						}
        						else if(this.dsMaster.getColumn(i, "GOGYOGYEYEOL_GBCD") != '52')
        						{
        							if(this.dsMaster.getColumn(i, "GOGYO_CD") == '' || this.dsMaster.getColumn(i, "GOGYO_NM") == '')
        							{
        								this.alert("출신고교명을 선택해주세요.");
        								return false;
        							}
        							else if(this.dsMaster.getColumn(i, "GOGYOGYEYEOL_GBCD") == '')
        							{
        								this.alert("고교졸업구분을 선택해주세요.");
        								return false;
        							}
        							else if(this.dsMaster.getColumn(i, "GOGYOJOLEOP_YEJEONG_YYYY") == '')
        							{
        								this.alert("고교 졸업(예정)년도를 입력해주세요.");
        								return false;
        							}
        						}
        					}

        					if(this.dsMaster.getColumn(i, "NAEYONG_HWAKIN_YN") == ''
        					|| this.dsMaster.getColumn(i, "SUSI_HAPGYEOK_YN") == ''
        					|| this.dsMaster.getColumn(i, "SUJIP_DONGUI_YN") == ''
        					|| this.dsMaster.getColumn(i, "GOYUSIKBYEOL_INFO_DONGUI_YN") == ''
        					|| this.dsMaster.getColumn(i, "INFO_WITAK_DONGUI_YN") == ''
        					|| this.dsMaster.getColumn(i, "INFO_3JA_JEGONG_DONGUI_YN") == '')
        					{
        						this.alert("위 내용 확인여부와 정보 동의 항목을 모두 체크해주세요.");
        						return false;
        					}
        					if(this.dsMaster.getColumn(i,"SEBUJEONHYEONG_GBCD") != '34' && this.dsMaster.getColumn(i, "GOGYOGYEYEOL_GBCD") != '52')
        					{
        						if(this.dsMaster.getColumn(i, "HAKSAENGBU_ONLINEJEGONGDONGUI_YN") == '')
        						{
        							this.alert("위 내용 확인여부와 정보 동의 항목을 모두 체크해주세요.");
        							return false;
        						}
        					}
        					else if(this.dsMaster.getColumn(i,"SEBUJEONHYEONG_GBCD") != '34' && this.dsMaster.getColumn(i, "GOGYOGYEYEOL_GBCD") == '52')
        					{
        						if(this.dsMaster.getColumn(i, "GEOMJEONGGOSI_ONLINEJEGONGDONGUI_YN") == '')
        						{
        							this.alert("위 내용 확인여부와 정보 동의 항목을 모두 체크해주세요.");
        							return false;
        						}
        					}
        				}
        			}

        			//주민등록번호 중복 체크(신규나 수정)
        			rowNum = this.fn_RemoveDuplicatesArray(rowNum);

        			if(rowNum.length != 0)
        			{
        				for(var i = 0; i < rowNum.length ; i++)
        				{
        					var IPSI_YYYY = this.dsMaster.getColumn(i, "IPSI_YYYY");
        					var MOJIP_GBCD = this.dsMaster.getColumn(i, "MOJIP_GBCD");
        					var RES_NO1 = this.dsMaster.getColumn(rowNum[i], "RES_NO1");
        					var RES_NO2 = this.dsMaster.getColumn(rowNum[i], "RES_NO2");

        					this.fn_MojipGbResNoChk();

        					if(this.dsJungbok.getColumn(0,"CNT") != "0")
        					{
        						this.alert('같은 모집에 중복으로 지원하실 수 없습니다.');
        						this.dsJungbok.deleteAll();
        						return false;
        					}
        				}
        			}
        		}

        		if(newCount == 1)
        		{
        			this.alert("새로운 신규를 추가하기 위해서는 먼저 저장을 하셔야합니다.");
        			return false;
        		}

        		var nRow = this.dsMaster.addRow();
        		this.dsMaster.setColumn(nRow, "IPSI_YYYY", this.ds_input.getColumn(0, "IPSI_YYYY"));
        		this.dsMaster.setColumn(nRow, "MOJIP_GBCD", this.ds_input.getColumn(0, "MOJIP_GBCD"));

        		this.dsMaster.setColumn(nRow, "NAEYONG_HWAKIN_YN", 'Y');
        		this.dsMaster.setColumn(nRow, "GEOMJEONGGOSI_ONLINEJEGONGDONGUI_YN", 'Y');
        		this.dsMaster.setColumn(nRow, "HAKSAENGBU_ONLINEJEGONGDONGUI_YN", 'Y');
        		this.dsMaster.setColumn(nRow, "SUJIP_DONGUI_YN", 'Y');
        		this.dsMaster.setColumn(nRow, "GOYUSIKBYEOL_INFO_DONGUI_YN", 'Y');
        		this.dsMaster.setColumn(nRow, "INFO_WITAK_DONGUI_YN", 'Y');
        		this.dsMaster.setColumn(nRow, "INFO_3JA_JEGONG_DONGUI_YN", 'Y');

        		this.calDt.set_value(getDay);

        		this.dsBindableComp.setColumn(0, "bReadonly", false);
        	}
        	else
        	{
        		this.alert("모집기간이 아닙니다.\n검색조건의 모집이 현재 모집하는 항목인지 확인해주세요.");
        		return false;
        	}
        };

        /**
         * 기능 : 처리 후 실행
         */
        this.fn_PostNew = function()
        {
        	this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
        };

        /**********************************************************************
                07. 삭제 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 삭제 버튼 실행
         */
        this.fn_PreDel = function()
        {
        	var rowNo = this.dsMaster.rowposition;

        	var IPSI_YYYY =  this.dsMaster.getColumn(rowNo, "IPSI_YYYY");
        	var MOJIP_GBCD = this.dsMaster.getColumn(rowNo, "MOJIP_GBCD");
        	var SUHEOM_NO = this.dsMaster.getColumn(rowNo, "SUHEOM_NO");

            //멀티삭제용도
            if(this.dsMaster.rowcount < 1)
            {
                this.gfn_alert("삭제할 데이타가 없습니다.!","삭제정보","","warning");
                return false;
            }

            var result = this.gfn_confirm( "현재선택행을 삭제하시겠습니까?", "삭제정보","","question" );

            if(result == 0)
            {
                return false;
            }

            //개별삭제시
        	if(jeopsuFrdt <= getDay && jeopsuTodt >= getDay && HYEONJAE_MOJIP_GBCD == MOJIP_GBCD)
        	{
        		this.dsBindableComp.setColumn(0, "bReadonly", true);
        		DEL_MOJIP_GBCD = this.dsMaster.getColumn(this.dsMaster.rowposition, "MOJIP_GBCD");

        		this.dsMaster.deleteRow(this.dsMaster.rowposition);
        	}
        	else
        	{
        		this.alert("모집기간이 아니므로 접수 내역을 삭제 하실 수 없습니다.");
        		return false;
        	}
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
            var strUrl      = "/prj/EN/Delete_1010203_T01.do";
            var strInDs     = "dsMaster=dsMaster:u";
            var strOutDs    = "";
            var strArg      = "";
        	var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;                                   //샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);
        };

        this.fn_PostDel = function()
        {
            this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
        };

        /**********************************************************************
                08. 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 실행
         */
        this.fn_Save = function()
        {
        	var MOD_MOJIP_GBCD;

        	if(this.ds_input.getColumn(0,"MOJIP_GBCD") == '')
        	{
        		this.alert("모집기간이 아닙니다.");
        		return false;
        	}

        	if(DEL_MOJIP_GBCD != '' && DEL_MOJIP_GBCD != null)
        	{
        		MOD_MOJIP_GBCD = DEL_MOJIP_GBCD;
        	}
        	else
        	{
        		MOD_MOJIP_GBCD = this.cboMojip.value;
        	}

        	// 현재 접수기간이면서 모집중인 구분일때
        	if(jeopsuFrdt <= getDay && jeopsuTodt >= getDay && HYEONJAE_MOJIP_GBCD == MOD_MOJIP_GBCD)
        	{
        		var rowCount = this.dsMaster.rowcount;
        		// 데이터가 존재할때
        		if(rowCount > 0)
        		{
        			for(var i = 0; i < rowCount ; i++)
        			{
        				// 로우타입이 삽입(2), 수정(4) 일때
        				if(this.dsMaster.getRowType(i) == '2' || this.dsMaster.getRowType(i) == '4')
        				{
        					this.ds_inputGogyo.setColumn(0, "IPSI_YYYY", this.dsMaster.getColumn(this.dsMaster.rowposition, "IPSI_YYYY"));

        					// 고교계열구분이 검정고시일때
        					if(this.dsMaster.getColumn(i, "GOGYOGYEYEOL_GBCD") == '52')
        					{
        						this.ds_inputGogyo.setColumn(0, "GOGYO_CD", this.dsMaster.getColumn(this.dsMaster.rowposition, "GEOMJEONGGOSI_CD"));
        						this.ds_inputGogyo.setColumn(0, "GOGYO_NM", this.dsMaster.getColumn(this.dsMaster.rowposition, "GEOMJEONGGOSI_NM"));
        						this.ds_inputGogyo.setColumn(0, "JIYEOK_GBCD", '');
        						this.ds_inputGogyo.setColumn(0, "GEOMJEONGGOSI", '100000001');
        					}
        					// 고교계열구분이 검정고시가 아닐때
        					else
        					{
        						this.ds_inputGogyo.setColumn(0, "GOGYO_CD", this.dsMaster.getColumn(this.dsMaster.rowposition, "GOGYO_CD"));
        						this.ds_inputGogyo.setColumn(0, "GOGYO_NM", this.dsMaster.getColumn(this.dsMaster.rowposition, "GOGYO_NM"));
        						this.ds_inputGogyo.setColumn(0, "JIYEOK_GBCD", '');
        					}

        					// 고교조회
        					var strSvc      = "GogyoRet";
        					var strUrl      = "/prj/EN/EN02/Retrieve_1010203_T01_Gogyo.do";
        					var strInDs     = "ds_inputGogyo=ds_inputGogyo";
        					var strOutDs    = "dsGogyo=dsGogyo ";
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

        					modRowPos.push(this.dsMaster.getColumn(i, "SUHEOM_NO"));

        					var RES_NO1 = this.dsMaster.getColumn(i, "RES_NO1");
        					var RES_NO2 = this.dsMaster.getColumn(i, "RES_NO2");

        					if(this.dsMaster.getColumn(i, "HAKGWA_CD") == '' || this.dsMaster.getColumn(i, "HAKGWA_CD") == null)
        					{
        						this.alert("학과를 선택해주세요.");
        						return false;
        					}
        					else if(this.ds_jeongongCd.rowcount > 1 && (this.dsMaster.getColumn(i, "JEONGONG_CD") == '' || this.dsMaster.getColumn(i, "JEONGONG_CD") == null))
        					{
        						this.alert('전공을 선택해주세요.');
        						return false;
        					}
        					else if(this.dsMaster.getColumn(i, "JUYA_GBCD") == '' || this.dsMaster.getColumn(i, "JUYA_GBCD") == null)
        					{
        						this.alert("주야구분을 선택해주세요.");
        						return false;
        					}
        					else if(this.dsMaster.getColumn(i, "JEONHYEONG_GBCD") == '' || this.dsMaster.getColumn(i, "JEONHYEONG_GBCD") == null)
        					{
        						this.alert("전형구분을 선택해주세요.");
        						return false;
        					}
        					else if(this.dsMaster.getColumn(i, "SEBUJEONHYEONG_GBCD") == '' || this.dsMaster.getColumn(i, "SEBUJEONHYEONG_GBCD") == null)
        					{
        						this.alert("세부전형구분을 선택해주세요.");
        						return false;
        					}
        					// 세부전형이 기초생활수급자 및 차상위, 만학도 및 성인재직자, 재외국민 및 외국인 일때
        					else if(this.dsMaster.getColumn(i, "SEBUJEONHYEONG_GBCD") == '32' || this.dsMaster.getColumn(i, "SEBUJEONHYEONG_GBCD") == '33' || this.dsMaster.getColumn(i, "SEBUJEONHYEONG_GBCD") == '35')
        					{
        						if(this.dsMaster.getColumn(i, "SEBUJEONHYEONG_TYCD") == '' || this.dsMaster.getColumn(i, "SEBUJEONHYEONG_TYCD") == null)
        						{
        							this.alert('세부유형구분을 선택해주세요.');
        							return false;
        						}
        					}
        					else if(this.dsMaster.getColumn(i, "GOGYOGYEYEOL_GBCD") == '' || this.dsMaster.getColumn(i, "GOGYOGYEYEOL_GBCD") == null)
        					{
        						this.alert("고교계열구분을 선택해주세요.");
        						return false;
        					}
        					else if(this.dsMaster.getColumn(i, "SUHEOMSAENG_NM") == '' || this.dsMaster.getColumn(i, "SUHEOMSAENG_NM") == null)
        					{
        						this.alert("성명을 입력해주세요.");
        						return false;
        					}
        					else if(RES_NO1 == '' || RES_NO1 == null || RES_NO2 == '' || RES_NO2 == null)
        					{
        						this.alert("주민등록번호를 입력해주세요.");
        						return false;
        					}
        					else if(RES_NO1.length != '6')
        					{
        						this.alert("주민등록번호 앞자리 갯수가 맞지 않습니다.");
        						return false;
        					}
        					else if(RES_NO2.length != '7')
        					{
        						this.alert("주민등록번호 뒷자리 갯수가 맞지 않습니다.");
        						return false;
        					}
        					else if(!(parseInt(RES_NO1.substring(2,4)) >= 1 && parseInt(RES_NO1.substring(2,4)) <= 12))
        					{
        						this.alert("주민등록번호의 생년월일을 잘못 입력하셨습니다.");
        						return false;
        					}
        					else if(!(parseInt(RES_NO1.substring(4,6)) >= 1 && parseInt(RES_NO1.substring(4,6)) <= 31))
        					{
        						this.alert("주민등록번호의 생년월일을 잘못 입력하셨습니다.");
        						return false;
        					}
        					else if(this.dsMaster.getColumn(i, "POST") == '' || this.dsMaster.getColumn(i, "JUSO") == '' || this.dsMaster.getColumn(i, "SANGSE_JUSO") == ''
        							|| this.dsMaster.getColumn(i, "POST") == null || this.dsMaster.getColumn(i, "JUSO") == null || this.dsMaster.getColumn(i, "SANGSE_JUSO") == null)
        					{
        						this.alert("주소를 입력해주세요.");
        						return false;
        					}
        					else if(this.dsMaster.getColumn(i, "HP_NO") == '' || this.dsMaster.getColumn(i, "HP_NO") == null)
        					{
        						this.alert("휴대폰 번호를 입력해주세요.");
        						return false;
        					}

        					// 세부전형이 농어촌 출신 일때
        					if(this.dsMaster.getColumn(i, "SEBUJEONHYEONG_GBCD") == '31')
        					{
        						if(this.dsMaster.getColumn(i, "GOGYOGYEYEOL_GBCD") == '52')
        						{
        							this.alert("농어촌 출신은 검정고시를 지원하실 수 없습니다.");
        							return false;
        						}
        					}

        					// 세부전형이 전문대이상 졸업자 일때
        					if(this.dsMaster.getColumn(i, "SEBUJEONHYEONG_GBCD") == '34')
        					{
        						// 고교계열이 검정고시 일때
        						if(this.dsMaster.getColumn(i, "GOGYOGYEYEOL_GBCD") == '52')
        						{
        							if(this.dsMaster.getColumn(i, "GEOMJEONGGOSI_CD") == '' || this.dsMaster.getColumn(i, "GEOMJEONGGOSI_NM") == ''
        								|| this.dsMaster.getColumn(i, "GEOMJEONGGOSI_CD") == null || this.dsMaster.getColumn(i, "GEOMJEONGGOSI_NM") == null)
        							{
        								this.alert("검정고시명을 선택해주세요.");
        								return false;
        							}
        						}
        						// 고교계열이 검정고시가 아닐때
        						else if(this.dsMaster.getColumn(i, "GOGYOGYEYEOL_GBCD") != '52')
        						{
        							if(this.dsMaster.getColumn(i, "GOGYO_CD") == '' || this.dsMaster.getColumn(i, "GOGYO_NM") == ''
        								|| this.dsMaster.getColumn(i, "GOGYO_CD") == null || this.dsMaster.getColumn(i, "GOGYO_NM") == null)
        							{
        								this.alert("출신고교명을 선택해주세요.");
        								return false;
        							}
        						}

        						if(this.dsMaster.getColumn(i, "CHULSIN_DAEHAK_NM") == '' || this.dsMaster.getColumn(i, "CHULSIN_DAEHAK_NM") == null)
        						{
        							this.alert("출신대학명을 입력해주세요.");
        							return false;
        						}
        						else if(this.dsMaster.getColumn(i, "DAEHAKJOLEOP_GBCD") == '' || this.dsMaster.getColumn(i, "DAEHAKJOLEOP_GBCD") == null)
        						{
        							this.alert("대학졸업구분을 선택해주세요.");
        							return false;
        						}
        						else if(this.dsMaster.getColumn(i, "DAEHAKJOLEOP_YEJEONG_YYYY") == '' || this.dsMaster.getColumn(i, "DAEHAKJOLEOP_YEJEONG_YYYY") == null)
        						{
        							this.alert("대학 졸업(예정)년도를 입력해주세요.");
        							return false;
        						}
        						else if(this.dsMaster.getColumn(i, "AVG_PYEONGJEOM_BAEKBUNYUL") == '' || this.dsMaster.getColumn(i, "AVG_PYEONGJEOM_BAEKBUNYUL") == null)
        						{
        							this.alert("전학년 평점 백분율을 입력해주세요.");
        							return false;
        						}
        						else if(this.dsMaster.getColumn(i, "CHONGISU_HAKJEOM") == '' || this.dsMaster.getColumn(i, "CHONGISU_HAKJEOM") == null)
        						{
        							this.alert("이수학점을 입력해주세요.");
        							return false;
        						}
        						else if(this.dsMaster.getColumn(i, "CHOEGEUN_HAKGI_PYEONGJEOM") == '' || this.dsMaster.getColumn(i, "CHOEGEUN_HAKGI_PYEONGJEOM") == null)
        						{
        							this.alert("최근 학기 평균 평점을 입력해주세요.");
        							return false;
        						}
        						else if(this.dsMaster.getColumn(i, "GIJUN_PYEONGJEOM") == '' || this.dsMaster.getColumn(i, "GIJUN_PYEONGJEOM") == null)
        						{
        							this.alert("기준 평점을 입력해주세요.");
        							return false;
        						}
        					}
        					// 세부전형이 전문대이상 졸업자가 아닐때
        					else if(this.dsMaster.getColumn(i, "SEBUJEONHYEONG_GBCD") != '34')
        					{
        						// 고교계열이 검정고시 일때
        						if(this.dsMaster.getColumn(i, "GOGYOGYEYEOL_GBCD") == '52')
        						{
        							if(this.dsMaster.getColumn(i, "GEOMJEONGGOSI_CD") == '' || this.dsMaster.getColumn(i, "GEOMJEONGGOSI_NM") == ''
        								|| this.dsMaster.getColumn(i, "GEOMJEONGGOSI_CD") == null || this.dsMaster.getColumn(i, "GEOMJEONGGOSI_NM") == null)
        							{
        								this.alert("검정고시명을 선택해주세요.");
        								return false;
        							}
        							else if(this.dsMaster.getColumn(i, "HAPGYEOK_YYYY") == '' || this.dsMaster.getColumn(i, "HAPGYEOK_YYYY") == null)
        							{
        								this.alert("합격년도를 입력해주세요.");
        								return false;
        							}
        							else if(this.dsMaster.getColumn(i, "AVG_JEOMSU") == '' || this.dsMaster.getColumn(i, "AVG_JEOMSU") == null)
        							{
        								this.alert("평균점수를 입력해주세요.");
        								return false;
        							}
        							else if(this.dsMaster.getColumn(i, "GEOMJEONGGOSI_HOECHA") == '' || this.dsMaster.getColumn(i, "GEOMJEONGGOSI_HOECHA") == null)
        							{
        								this.alert("회차를 선택해주세요.");
        								return false;
        							}
        						}
        						// 고교계열이 검정고시가 아닐때
        						else if(this.dsMaster.getColumn(i, "GOGYOGYEYEOL_GBCD") != '52')
        						{
        							if(this.dsMaster.getColumn(i, "GOGYO_CD") == '' || this.dsMaster.getColumn(i, "GOGYO_NM") == ''
        								|| this.dsMaster.getColumn(i, "GOGYO_CD") == null || this.dsMaster.getColumn(i, "GOGYO_NM") == null)
        							{
        								this.alert("출신고교명을 선택해주세요.");
        								return false;
        							}
        							else if(this.dsMaster.getColumn(i, "GOGYOJOLEOP_GBCD") == '' || this.dsMaster.getColumn(i, "GOGYOJOLEOP_GBCD") == null)
        							{
        								this.alert("고교졸업구분을 선택해주세요.");
        								return false;
        							}
        							else if(this.dsMaster.getColumn(i, "GOGYOJOLEOP_YEJEONG_YYYY") == '' || this.dsMaster.getColumn(i, "GOGYOJOLEOP_YEJEONG_YYYY") == null)
        							{
        								this.alert("고교 졸업(예정)년도를 입력해주세요.");
        								return false;
        							}
        						}
        					}

        					// 동의내용중에 한가지라도 선택하지 않았을 때
        					if(this.dsMaster.getColumn(i, "NAEYONG_HWAKIN_YN") == '' || this.dsMaster.getColumn(i, "NAEYONG_HWAKIN_YN") == null
        					|| this.dsMaster.getColumn(i, "SUSI_HAPGYEOK_YN") == '' || this.dsMaster.getColumn(i, "SUSI_HAPGYEOK_YN") == null
        					|| this.dsMaster.getColumn(i, "SUJIP_DONGUI_YN") == '' || this.dsMaster.getColumn(i, "SUJIP_DONGUI_YN") == null
        					|| this.dsMaster.getColumn(i, "GOYUSIKBYEOL_INFO_DONGUI_YN") == '' || this.dsMaster.getColumn(i, "GOYUSIKBYEOL_INFO_DONGUI_YN") == null
        					|| this.dsMaster.getColumn(i, "INFO_WITAK_DONGUI_YN") == '' || this.dsMaster.getColumn(i, "INFO_WITAK_DONGUI_YN") == null
        					|| this.dsMaster.getColumn(i, "INFO_3JA_JEGONG_DONGUI_YN") == '' || this.dsMaster.getColumn(i, "INFO_3JA_JEGONG_DONGUI_YN") == null)
        					{
        						this.alert("위 내용 확인여부와 정보 동의 항목을 모두 체크해주세요.");
        						return false;
        					}

        					// 세부전형이 전문대이상 졸업자가 아니면서 고교계열이 검정고시가 아닐때
        					if(this.dsMaster.getColumn(i,"SEBUJEONHYEONG_GBCD") != '34' && this.dsMaster.getColumn(i, "GOGYOGYEYEOL_GBCD") != '52')
        					{
        						if(this.dsMaster.getColumn(i, "HAKSAENGBU_ONLINEJEGONGDONGUI_YN") == '' || this.dsMaster.getColumn(i, "HAKSAENGBU_ONLINEJEGONGDONGUI_YN") == null)
        						{
        							this.alert("위 내용 확인여부와 정보 동의 항목을 모두 체크해주세요.");
        							return false;
        						}
        					}
        					// 세부전형이 전문대이상 졸업자가 아니면서 고교계열이 검정고시일때
        					else if(this.dsMaster.getColumn(i,"SEBUJEONHYEONG_GBCD") != '34' && this.dsMaster.getColumn(i, "GOGYOGYEYEOL_GBCD") == '52')
        					{
        						if(this.dsMaster.getColumn(i, "GEOMJEONGGOSI_ONLINEJEGONGDONGUI_YN") == '' || this.dsMaster.getColumn(i, "GEOMJEONGGOSI_ONLINEJEGONGDONGUI_YN") == null)
        						{
        							this.alert("위 내용 확인여부와 정보 동의 항목을 모두 체크해주세요.");
        							return false;
        						}
        					}

        					// 조회한 고등학교와 현재 로우의 고등학교가 일치하지 않을때
        					if(this.dsGogyo.getColumn(0, "GOGYOGYEYEOL_GBCD") != this.dsMaster.getColumn(i, "GOGYOGYEYEOL_GBCD"))
        					{
        						var gogyoGyeyeolNm = '';
        						for(var i = 0; i < this.dsGogyoGyeyeol.rowcount ;  i++)
        						{
        							if(this.dsGogyo.getColumn(0, "GOGYOGYEYEOL_GBCD") == this.dsGogyoGyeyeol.getColumn(i, "CODE"))
        							{
        								gogyoGyeyeolNm = this.dsGogyoGyeyeol.getColumn(i, "CODE_NM");
        							}
        						}
        						this.alert("출신 고교의 고교 계열이 아닙니다. (출신학교 고교 계열 : "+ gogyoGyeyeolNm +")");
        						return false;
        					}

        					// 전형이 정원내 특별전형일때
        					if(this.dsMaster.getColumn(i, "JEONHYEONG_GBCD") == '2')
        					{
        						// 세부전형이 일반고일때
        						if(this.dsMaster.getColumn(i, "SEBUJEONHYEONG_GBCD") == '21')
        						{
        							// 고교가 예술/체육고, 산업수요맞춤형고, 특성화고, 기타고 일때
        							if(this.dsMaster.getColumn(i, "GOGYOGYEYEOL_GBCD") == '23'
        							|| this.dsMaster.getColumn(i, "GOGYOGYEYEOL_GBCD") == '24'
        							|| this.dsMaster.getColumn(i, "GOGYOGYEYEOL_GBCD") == '31'
        							|| this.dsMaster.getColumn(i, "GOGYOGYEYEOL_GBCD") == '53')
        							{
        								this.alert("해당 전형에 지원하실 수 없는 고등학교입니다.\n(지원 가능한 고교 계열 : 일반고, 과학고, 외고/국제고/특목고, 자율고, 영재학교, 검정고시)");
        								return false;
        							}
        						}
        						// 세부전형이 특성화고일때
        						else if(this.dsMaster.getColumn(i, "SEBUJEONHYEONG_GBCD") == '22')
        						{
        							// 고교가 일반고, 과학고, 외고/국제고/특목고, 자율고, 영재학교, 검정고시 일때
        							if(this.dsMaster.getColumn(i, "GOGYOGYEYEOL_GBCD") == '11'
        							|| this.dsMaster.getColumn(i, "GOGYOGYEYEOL_GBCD") == '21'
        							|| this.dsMaster.getColumn(i, "GOGYOGYEYEOL_GBCD") == '22'
        							|| this.dsMaster.getColumn(i, "GOGYOGYEYEOL_GBCD") == '41'
        							|| this.dsMaster.getColumn(i, "GOGYOGYEYEOL_GBCD") == '51'
        							|| this.dsMaster.getColumn(i, "GOGYOGYEYEOL_GBCD") == '52')
        							{
        								this.alert("해당 전형에 지원하실 수 없는 고등학교입니다.(지원 가능한 고교 계열 : 예술/체육고, 산업수요맞춤형고, 특성화고, 기타고)");
        								return false;
        							}
        						}
        					}

        					// 세부전형이 전문대이상 졸업자 일때
        					if(this.dsMaster.getColumn(i, "SEBUJEONHYEONG_GBCD") == '34')
        					{
        						// 고교계열이 검정고시 일때
        						if(this.dsMaster.getColumn(i, "GOGYOGYEYEOL_GBCD") == '52')
        						{
        							// 학력사항(고교)가 입력되었을때
        							if(this.dsMaster.getColumn(i, "GOGYO_CD") != '' || this.dsMaster.getColumn(i, "GOGYOJOLEOP_GBCD") != '' || this.dsMaster.getColumn(i, "GOGYOJOLEOP_YEJEONG_YYYY") != '')
        							{
        								this.alert("고교 계열 구분에 따라 학력사항(검정고시)만 입력가능합니다.");
        								this.edtChulsinGogyo.set_value("");
        								this.dsMaster.setColumn(this.dsMaster.rowposition, "GOGYO_CD", "");
        								this.dsMaster.setColumn(this.dsMaster.rowposition, "GOGYO_NM", "");
        								this.dsMaster.setColumn(this.dsMaster.rowposition, "GOGYOJOLEOP_GBCD", "");
        								this.dsMaster.setColumn(this.dsMaster.rowposition, "GOGYOJOLEOP_YEJEONG_YYYY", "");
        								this.dsMaster.setColumn(this.dsMaster.rowposition, "CHOEGEUN_HAKGI_KOR_JEOMSU", "");
        								this.dsMaster.setColumn(this.dsMaster.rowposition, "CHOEGEUN_HAKGI_ENG_JEOMSU", "");
        								return false;
        							}
        						}
        						// 고교계열이 검정고시가 아닐때
        						else
        						{
        							// 학력사항(검정고시)가 입력되었을때
        							if(this.dsMaster.getColumn(i, "GEOMJEONGGOSI_CD") != ''
        							|| this.dsMaster.getColumn(i, "GEOMJEONGGOSI_HOECHA") != ''
        							|| this.dsMaster.getColumn(i, "HAPGYEOK_YYYY") != ''
        							|| this.dsMaster.getColumn(i, "AVG_JEOMSU") !== ''
        							|| this.dsMaster.getColumn(i, "DONGUI_NO") != ''
        							|| this.dsMaster.getColumn(i, "GEOMJEONGGOSI_KOR_JEOMSU") != ''
        							|| this.dsMaster.getColumn(i, "GEOMJEONGGOSI_ENG_JEOMSU") != '')
        							{
        								this.alert("고교 계열 구분에 따라 학력사항(고교)만 입력가능합니다.");
        								this.edtGosi.set_value("");
        								this.edtGosiJeomsu.set_value("");
        								this.dsMaster.setColumn(this.dsMaster.rowposition, "GEOMJEONGGOSI_CD", "");
        								this.dsMaster.setColumn(this.dsMaster.rowposition, "GEOMJEONGGOSI_NM", "");
        								this.dsMaster.setColumn(this.dsMaster.rowposition, "HAPGYEOK_YYYY", "");
        								this.dsMaster.setColumn(this.dsMaster.rowposition, "AVG_JEOMSU", "");
        								this.dsMaster.setColumn(this.dsMaster.rowposition, "GEOMJEONGGOSI_HOECHA", "");
        								this.dsMaster.setColumn(this.dsMaster.rowposition, "DONGUI_NO", "");
        								this.dsMaster.setColumn(this.dsMaster.rowposition, "GEOMJEONGGOSI_KOR_JEOMSU", "");
        								this.dsMaster.setColumn(this.dsMaster.rowposition, "GEOMJEONGGOSI_ENG_JEOMSU", "");
        								return false;
        							}
        						}
        					}

        					if(this.dsMaster.getColumn(i, "JEONHYEONGRYONAPBU_GBCD") == '' || this.dsMaster.getColumn(i, "JEONHYEONGRYONAPBU_GBCD") == null)
        					{
        						this.alert("전형료 납부 구분을 선택해주세요.");
        						return false;
        					}
        				}
        			}

        			//주민등록번호 중복 체크(신규나 수정)
        			rowNum = this.fn_RemoveDuplicatesArray(rowNum);
        			if(rowNum.length != 0)
        			{
        				for(var i = 0; i < rowNum.length ; i++)
        				{
        					var IPSI_YYYY = this.dsMaster.getColumn(rowNum[i], "IPSI_YYYY");
        					var MOJIP_GBCD = this.dsMaster.getColumn(rowNum[i], "MOJIP_GBCD");
        					var RES_NO1 = this.dsMaster.getColumn(rowNum[i], "RES_NO1");
        					var RES_NO2 = this.dsMaster.getColumn(rowNum[i], "RES_NO2");

        					this.fn_MojipGbResNoChk();
        					if(this.dsJungbok.getColumn(0,"CNT") != "0")
        					{
        						this.alert('같은 모집에 중복으로 지원하실 수 없습니다.');
        						return false;
        					}
        				}
        			}
        		}
        	}
        	// 모집 중이 아닐때
        	else
        	{
        		this.alert("모집기간인 내용만 수정 및 삭제가 가능합니다.");
        		this.dsMaster.reset();
        		this.dsDetail.reset();
        		return false;
        	}

        	if(mojipHapgyeokChk == 2)
        	{
        		this.alert("수시 1, 2차 합격자는 지원하실 수 없습니다.");
        		return false;
        	}

        	if(this.gfn_isUpdate(this.dsMaster) || this.gfn_isUpdate(this.dsDetail))
        	{
        		//저장 콜백 구분 변수 초기화
        		jeopsuSuccessChk = 0;
        		seongjeokSuccessChk = 0;
        		jeopsuFailureChk = 0;
        		seongjeokFailureChk = 0;
        		var msg = '저장하시겠습니까?';

        		// 고교계열이 일반/종합고 이면서 세부전형이 특성화고일때
        		if(this.cboGyeyeol.value == '61' && this.cboSebu.value == '22')
        		{
        			msg = '특성화전형입니다. 일반고/종합고를 등록하시겠습니까?';
        		}

        		if(this.confirm(msg))
        		{
        			// 데이터가 존재할 때
        			if(rowCount > 0)
        			{
        				for(var i = 0; i < rowCount ; i++)
        				{
        					// 로우타입이 삽입(2), 수정(4)
        					if(this.dsMaster.getRowType(i) == '2' || this.dsMaster.getRowType(i) == '4')
        					{
        						// 세부전형이 전문대이상 졸업자가 아닐때
        						if(this.dsMaster.getColumn(i, "SEBUJEONHYEONG_GBCD") != '34')
        						{
        							// 고교계열이 검정고시 일때
        							if(this.dsMaster.getColumn(i, "GOGYOGYEYEOL_GBCD") == '52')
        							{
        								this.edtChulsinGogyo.set_value("");
        								this.dsMaster.setColumn(i, "GOGYO_CD", "");
        								this.dsMaster.setColumn(i, "GOGYO_NM", "");
        								this.dsMaster.setColumn(i, "GOGYOJOLEOP_GBCD", "");
        								this.dsMaster.setColumn(i, "GOGYOJOLEOP_YEJEONG_YYYY", "");
        								this.dsMaster.setColumn(i, "CHOEGEUN_HAKGI_KOR_JEOMSU", "");
        								this.dsMaster.setColumn(i, "CHOEGEUN_HAKGI_ENG_JEOMSU", "");
        								this.dsMaster.setColumn(i, "HAKSAENGBU_ONLINEJEGONGDONGUI_YN", "");
        							}
        							// 고교계열이 검정고시가 아닐때
        							else
        							{
        								this.edtGosi.set_value("");
        								this.edtGosiJeomsu.set_value("");
        								this.dsMaster.setColumn(i, "GEOMJEONGGOSI_CD", "");
        								this.dsMaster.setColumn(i, "GEOMJEONGGOSI_NM", "");
        								this.dsMaster.setColumn(i, "HAPGYEOK_YYYY", "");
        								this.dsMaster.setColumn(i, "AVG_JEOMSU", "");
        								this.dsMaster.setColumn(i, "GEOMJEONGGOSI_HOECHA", "");
        								this.dsMaster.setColumn(i, "DONGUI_NO", "");
        								this.dsMaster.setColumn(i, "GEOMJEONGGOSI_KOR_JEOMSU", "");
        								this.dsMaster.setColumn(i, "GEOMJEONGGOSI_ENG_JEOMSU", "");
        								this.dsMaster.setColumn(i, "GEOMJEONGGOSI_ONLINEJEGONGDONGUI_YN", "");
        							}

        							this.dsMaster.setColumn(i, "CHULSIN_DAEHAK_NM", "");
        							this.dsMaster.setColumn(i, "DAEHAKJOLEOP_YEJEONG_YYYY", "");
        							this.dsMaster.setColumn(i, "DAEHAKJOLEOP_GBCD", "");
        							this.dsMaster.setColumn(i, "AVG_PYEONGJEOM_BAEKBUNYUL", "");
        							this.dsMaster.setColumn(i, "CHONGISU_HAKJEOM", "");
        							this.dsMaster.setColumn(i, "CHOEGEUN_HAKGI_PYEONGJEOM", "");
        							this.dsMaster.setColumn(i, "GIJUN_PYEONGJEOM", "");
        						}
        						// 세부전형이 전문대이상 졸업자 일때
        						else
        						{
        							// 고교계열이 검정고시 일때
        							if(this.dsMaster.getColumn(i, "GOGYOGYEYEOL_GBCD") == '52')
        							{
        								this.edtChulsinGogyo.set_value("");
        								this.dsMaster.setColumn(i, "GOGYO_CD", "");
        								this.dsMaster.setColumn(i, "GOGYO_NM", "");
        								this.dsMaster.setColumn(i, "GOGYOJOLEOP_GBCD", "");
        								this.dsMaster.setColumn(i, "GOGYOJOLEOP_YEJEONG_YYYY", "");
        								this.dsMaster.setColumn(i, "CHOEGEUN_HAKGI_KOR_JEOMSU", "");
        								this.dsMaster.setColumn(i, "CHOEGEUN_HAKGI_ENG_JEOMSU", "");
        								this.dsMaster.setColumn(i, "HAKSAENGBU_ONLINEJEGONGDONGUI_YN", "");
        								this.dsMaster.setColumn(i, "GEOMJEONGGOSI_ONLINEJEGONGDONGUI_YN", "");
        							}
        							// 고교계열이 검정고시가 아닐때
        							else
        							{
        								this.edtGosi.set_value("");
        								this.edtGosiJeomsu.set_value("");
        								this.dsMaster.setColumn(i, "GEOMJEONGGOSI_CD", "");
        								this.dsMaster.setColumn(i, "GEOMJEONGGOSI_NM", "");
        								this.dsMaster.setColumn(i, "HAPGYEOK_YYYY", "");
        								this.dsMaster.setColumn(i, "AVG_JEOMSU", "");
        								this.dsMaster.setColumn(i, "GEOMJEONGGOSI_HOECHA", "");
        								this.dsMaster.setColumn(i, "DONGUI_NO", "");
        								this.dsMaster.setColumn(i, "GEOMJEONGGOSI_KOR_JEOMSU", "");
        								this.dsMaster.setColumn(i, "GEOMJEONGGOSI_ENG_JEOMSU", "");
        								this.dsMaster.setColumn(i, "HAKSAENGBU_ONLINEJEGONGDONGUI_YN", "");
        								this.dsMaster.setColumn(i, "GEOMJEONGGOSI_ONLINEJEGONGDONGUI_YN", "");
        							}
        						}
        					}
        				}
        			}

        			var strSvc      = "Save";
        			var strUrl      = "/prj/EN/EN02/Save_1010203_T01.do";
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
        			var strASync    = false;             //샏략이나 공백일시에는 ASync=true,싱크시는 false로
        			this.gfn_Transaction(strSvc
        							   , strUrl
        							   , strInDs
        							   , strOutDs
        							   , strArg
        							   , strCallBack
        							   , strASync);

        			var banyeongGb = this.fn_BanyeongGb();
        			for(var i=0; i<this.dsDetail.rowcount; i++)
        			{
        				this.dsDetail.setColumn(i, "BANYEONG_GB", banyeongGb);
        				this.dsDetail.setColumn(i, "IPSI_YYYY", this.dsMaster.getColumn(this.dsMaster.rowposition, "IPSI_YYYY"));
        				this.dsDetail.setColumn(i, "MOJIP_GBCD", this.dsMaster.getColumn(this.dsMaster.rowposition, "MOJIP_GBCD"));
        				this.dsDetail.setColumn(i, "SUHEOM_NO", this.dsMaster.getColumn(this.dsMaster.rowposition, "SUHEOM_NO"));
        				this.dsDetail.setColumn(i, "GOGYOJOLEOP_GBCD", this.dsMaster.getColumn(this.dsMaster.rowposition, "GOGYOJOLEOP_GBCD"));
        			}
        			var result = true; //저장 가능 여부

        			var strSvc      = "DSave";
        			var strUrl      = "/prj/EN/EN02/Save_1010203_T01_Detail.do";
        			var strInDs     = "ds_dInput=ds_dInput:a ";
        				strInDs    += "dsDetail=dsDetail:u";
        			var strOutDs    = "dsDetail=dsDetail";
        			var strArg      = "";
        			var GBV_MENUID    = objApp.gv_cutPrgId;
        			if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
        			{
        				strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
        			}
        			var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        			var strASync    = false;             //샏략이나 공백일시에는 ASync=true,싱크시는 false로
        			this.gfn_Transaction(strSvc
        							   , strUrl
        							   , strInDs
        							   , strOutDs
        							   , strArg
        							   , strCallBack
        							   , strASync);
        		}
        	}
        };

        /**
         *      기능 : 저장시 후처리
         */
        this.fn_PostSave = function()
        {
            this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
        	this.gfn_getRowCount(this.staRowCnt2,this.dsDetail);
        };

        /**********************************************************************
                09. 접수내역수정
        ***********************************************************************/
        this.btnUpdate_onclick = function(obj,e)
        {
        	var rowNo = this.dsMaster.rowposition;

        	var MOJIP_GBCD = this.dsMaster.getColumn(rowNo, "MOJIP_GBCD");

        	if(jeopsuFrdt <= getDay && jeopsuTodt >= getDay && HYEONJAE_MOJIP_GBCD == MOJIP_GBCD)
        	{
        		this.dsMaster.setColumn(rowNo, "SUHEOM_NO", "");
        		this.dsMaster.setColumn(rowNo, "HAKGWA_CD", "");
        		this.dsMaster.setColumn(rowNo, "JEONGONG_CD", "");
        		this.dsMaster.setColumn(rowNo, "JUYA_GBCD", "");
        		this.dsMaster.setColumn(rowNo, "JEONHYEONG_GBCD", "");
        		this.dsMaster.setColumn(rowNo, "SEBUJEONHYEONG_GBCD", "");
        		this.dsMaster.setColumn(rowNo, "SEBUJEONHYEONG_TYCD", "");

        		this.dsBindableComp.setColumn(0, "bReadonly", false);
            }
        	else
        	{
        		this.alert("모집기간이 아니므로 접수 내역을 수정 하실 수 없습니다.");
            }
        };

        /**********************************************************************
                10. 인적사항저장
        ***********************************************************************/
        this.btnSave_onclick = function(obj,e)
        {
        	if(this.confirm("저장하시겠습니까?"))
        	{
        		var strSvc      = "SahangSave";
        		var strUrl      = "/prj/EN/EN02/Save_1010203_T01_Sahang.do";
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
        		var strASync    = false;             //샏략이나 공백일시에는 ASync=true,싱크시는 false로
        		this.gfn_Transaction(strSvc
        						   , strUrl
        						   , strInDs
        						   , strOutDs
        						   , strArg
        						   , strCallBack
        						   , strASync);
        	}
        };

        /**********************************************************************
                11. 이전성적복사
        ***********************************************************************/
        this.btnIjeonSeongjeok_onclick = function(obj,e)
        {
        	var rowNo = this.dsMaster.rowposition;
        	var IPSI_YYYY = this.dsMaster.getColumn(rowNo, "IPSI_YYYY");
        	var MOJIP_GBCD = this.dsMaster.getColumn(rowNo, "MOJIP_GBCD");
        	var SUHEOM_NO = this.dsMaster.getColumn(rowNo, "SUHEOM_NO");
        	var RES_NO1 = this.dsMaster.getColumn(rowNo, "RES_NO1");
        	var RES_NO2 = this.dsMaster.getColumn(rowNo, "RES_NO2");

        	this.ds_copyInput.setColumn(0, "IN_IPSI_YYYY", IPSI_YYYY);
        	this.ds_copyInput.setColumn(0, "IN_MOJIP_GBCD", MOJIP_GBCD);
        	this.ds_copyInput.setColumn(0, "IN_SUHEOM_NO", SUHEOM_NO);
        	this.ds_copyInput.setColumn(0, "IN_RES_NO1", RES_NO1);
        	this.ds_copyInput.setColumn(0, "IN_RES_NO2", RES_NO2);

        	saveType = this.dsMaster.getRowType(rowNo);

        	if(jeopsuFrdt <= getDay && jeopsuTodt >= getDay && HYEONJAE_MOJIP_GBCD == MOJIP_GBCD)
        	{
        		if(this.confirm('이전성적 복사 시 기존 성적은 사라집니다.\n그래도 진행 하시겠습니까?'))
        		{
        			var strSvc      = "Copy";
        			var strUrl      = "/prj/EN/EN02/Copy_1010203_T01.do";
        			var strInDs     = "ds_copyInput=ds_copyInput:a ";
        			var strOutDs    = "dsCopy=dsCopy";
        			var strArg      = "";
        			var GBV_MENUID    = objApp.gv_cutPrgId;
        			if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
        			{
        				strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
        			}
        			var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        			var strASync    = false;             //샏략이나 공백일시에는 ASync=true,싱크시는 false로
        			this.gfn_Transaction(strSvc
        							   , strUrl
        							   , strInDs
        							   , strOutDs
        							   , strArg
        							   , strCallBack
        							   , strASync);
        		}
        		else
        		{
        			return false;
        		}
        	}
        	else
        	{
        		this.alert("모집기간이 아니므로 이전성적 복사를 하실 수 없습니다.");
        	}
        };

        this.fn_PostCopy = function()
        {
        	if(this.dsCopy.getColumn(0, "OUT_CODE") == '-1')
        	{
        		this.alert('작동중 문제가 발생되었습니다. \n 같은 현상이 반복된다면 관리자에게 문의하세요.');
        	}
        	else
        	{
        		this.alert(this.dsDetail.rowcount + '건이 저장되었습니다.');
        		this.fn_Ret();
        	}
        }

        /**********************************************************************
                12. 정시2차처리
        ***********************************************************************/
        this.btn2cha_onclick = function(obj,e)
        {
         	var rRow = this.dsMaster.rowposition;
         	var IPSI_YYYY = this.dsMaster.getColumn(rRow,"IPSI_YYYY");
         	var MOJIP_GBCD = this.dsMaster.getColumn(rRow,"MOJIP_GBCD");
         	var SUHEOM_NO = this.dsMaster.getColumn(rRow,"SUHEOM_NO");
         	var GONGJI_GBCD = '02';
         	var CHASU_GBCD = '5';
        	var HAPGYEOK_GBCD = '01'

        	this.ds_deungrokInput.setColumn(0, "DEUNGROK_YYYY", IPSI_YYYY);
        	this.ds_deungrokInput.setColumn(0, "GONGJI_GBCD", GONGJI_GBCD);
        	this.ds_deungrokInput.setColumn(0, "MOJIP_GBCD", MOJIP_GBCD);
        	this.ds_deungrokInput.setColumn(0, "CHASU_GBCD", CHASU_GBCD);

            var strSvc      = "Deungrok";
            var strUrl      = "/prj/EN/EN02/Retrieve_1010203_T01_Deungrok.do";
            var strInDs     = "ds_deungrokInput=ds_deungrokInput";
            var strOutDs    = "ds2chaDeungrok=ds2chaDeungrok";
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

         	if(MOJIP_GBCD > 3)
        	{
        		this.ds_2chaInput.setColumn(0, "IN_DEUNGROK_YYYY", IPSI_YYYY);
        		this.ds_2chaInput.setColumn(0, "IN_MOJIP_GBCD", MOJIP_GBCD);
        		this.ds_2chaInput.setColumn(0, "IN_SUHEOM_NO", SUHEOM_NO);
        		this.ds_2chaInput.setColumn(0, "IN_GONGJI_GBCD", GONGJI_GBCD);
        		this.ds_2chaInput.setColumn(0, "IN_CHASU_GBCD", CHASU_GBCD);
        		this.ds_2chaInput.setColumn(0, "IN_HAPGYEOK_GBCD", HAPGYEOK_GBCD);
        		this.ds_2chaInput.setColumn(0, "IN_DEUNGROK_FRDT", this.ds2chaDeungrok.getColumn(0,'DEUNGROK_FRDT'));
        		this.ds_2chaInput.setColumn(0, "IN_DEUNGROK_TODT", this.ds2chaDeungrok.getColumn(0,'DEUNGROK_TODT'));

        		var strSvc      = "2cha";
        		var strUrl      = "/prj/EN/EN02/Save_1010203_T01_2cha.do";
        		var strInDs     = "ds_2chaInput=ds_2chaInput:a ";
        		var strOutDs    = "ds2cha=ds2cha";
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
        	else
        	{
         		this.alert("정시2차만 가능합니다.");
         	}
        };

        this.fn_Post2cha = function()
        {
        	this.alert(this.ds2cha.getColumn(0, "OUT_MSG"));
        };
        /**********************************************************************
                13. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj,e)
        {
            this.gfn_gridSort(obj,e);
        };
        this.grdDetail_onheaddblclick = function(obj,e)
        {
        	this.gfn_gridSort(obj,e);
        };

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
           var value = false;

           if(this.gfn_isUpdate(this.dsMaster))
           {
              value = true;
           }
           else if(this.gfn_isUpdate(this.dsDetail))
           {
              value = true;
           }

           return value;
        };

        /**
          * 디테일 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_detailbeforeclose = function()
        {
           var value = false;

           if(this.gfn_isUpdate(this.dsDetail))
           {
              value = true;
           }

           return value;
        };

        // 세부전형 변경시
        this.cboSebu_onitemchanged = function(obj,e)
        {
        	if(this.cboSebu.value == '34')
        	{
        		this.dsBindableGogyo.setColumn(0, "bEnable", true);
        		this.dsBindableGogyo.setColumn(0, "bReadonly", false);
        		this.dsBindableGosi.setColumn(0, "bEnable", true);
        		this.dsBindableGosi.setColumn(0, "bReadonly", false);
        		this.dsBindableDaehak.setColumn(0, "bEnable", true);
        		this.dsBindableDaehak.setColumn(0, "bReadonly", false);
        		this.staOnline.set_text("");
        		this.rdoDongui2.set_visible(false);
        		this.rdoDongui2_1.set_visible(false);
        	}
        	else
        	{
        		if(this.cboGyeyeol.value == '52')
        		{
        			this.dsBindableGogyo.setColumn(0, "bEnable", false);
        			this.dsBindableGogyo.setColumn(0, "bReadonly", true);
        			this.dsBindableGosi.setColumn(0, "bEnable", true);
        			this.dsBindableGosi.setColumn(0, "bReadonly", false);
        			this.dsBindableDaehak.setColumn(0, "bEnable", false);
        			this.dsBindableDaehak.setColumn(0, "bReadonly", true);
        			this.staOnline.set_text("검정고시 온라인제공 동의 여부");
        			this.rdoDongui2.set_visible(false);
        			this.rdoDongui2_1.set_visible(true);
        		}
        		else
        		{
        			this.dsBindableGogyo.setColumn(0, "bEnable", true);
        			this.dsBindableGogyo.setColumn(0, "bReadonly", false);
        			this.dsBindableGosi.setColumn(0, "bEnable", false);
        			this.dsBindableGosi.setColumn(0, "bReadonly", true);
        			this.dsBindableDaehak.setColumn(0, "bEnable", false);
        			this.dsBindableDaehak.setColumn(0, "bReadonly", true);
        			this.staOnline.set_text("학생부자료 온라인 제공");
        			this.rdoDongui2.set_visible(true);
        			this.rdoDongui2_1.set_visible(false);
        		}
        	}
        };

        // 고교계열 변경시
        this.cboGyeyeol_onitemchanged = function(obj,e)
        {
        	if(this.cboGyeyeol.value == '52')
        	{
        		if(this.dsMaster.getRowType(this.dsMaster.rowposition) == '2')
        		{
        			this.edtChulsinGogyo.set_value("");
        			//학력사항 고교의 데이터를 데이터셋에서 공백으로 초기화
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "GOGYO_CD", "");
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "GOGYO_NM", "");
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "GOGYOJOLEOP_GBCD", "");
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "GOGYOJOLEOP_YEJEONG_YYYY", "");
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "CHOEGEUN_HAKGI_KOR_JEOMSU", "");
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "CHOEGEUN_HAKGI_ENG_JEOMSU", "");

        			if(this.cboSebu.value == '34')
        			{
        				this.dsBindableGogyo.setColumn(0, "bEnable", true);
        				this.dsBindableGogyo.setColumn(0, "bReadonly", false);
        				this.dsBindableGosi.setColumn(0, "bEnable", true);
        				this.dsBindableGosi.setColumn(0, "bReadonly", false);
        				this.dsBindableDaehak.setColumn(0, "bEnable", true);
        				this.dsBindableDaehak.setColumn(0, "bReadonly", false);
        				this.staOnline.set_text("");
        				this.rdoDongui2.set_visible(false);
        				this.rdoDongui2_1.set_visible(false);
        			}
        			else
        			{
        				this.dsBindableGogyo.setColumn(0, "bEnable", false);
        				this.dsBindableGogyo.setColumn(0, "bReadonly", true);
        				this.dsBindableGosi.setColumn(0, "bEnable", true);
        				this.dsBindableGosi.setColumn(0, "bReadonly", false);
        				this.dsBindableDaehak.setColumn(0, "bEnable", false);
        				this.dsBindableDaehak.setColumn(0, "bReadonly", true);
        				this.staOnline.set_text("검정고시 온라인제공 동의 여부");
        				this.rdoDongui2.set_visible(false);
        				this.rdoDongui2_1.set_visible(true);
        			}
        		}
        		else if(this.dsMaster.getRowType(this.dsMaster.rowposition) == '4')
        		{
        			this.ds_input.setColumn(0, "IPSI_YYYY", this.dsMaster.getColumn(this.dsMaster.rowposition, "IPSI_YYYY"));
        			this.ds_input.setColumn(0, "MOJIP_GBCD", this.dsMaster.getColumn(this.dsMaster.rowposition, "MOJIP_GBCD"));
        			this.ds_input.setColumn(0, "SUHEOM_NO", this.dsMaster.getColumn(this.dsMaster.rowposition, "SUHEOM_NO"));

        			if(this.confirm("검정고시로 변경 시 기존 성적은 사라지고 수정 중이었던 원서접수 내역은 저장됩니다.\n그래도 진행 하시겠습니까?"))
        			{
        				this.fn_RealDel();
        			}

        			this.dsDetail.deleteAll();
        			this.grdDetail.set_formatid("default");
        			this.divDetail.form.cbo1996.set_value('');
        			this.divDetail.form.cbo1996.set_enable(false);

        			this.edtChulsinGogyo.set_value("");
        			//학력사항 고교의 데이터를 데이터셋에서 공백으로 초기화
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "GOGYO_CD", "");
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "GOGYO_NM", "");
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "GOGYOJOLEOP_GBCD", "");
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "GOGYOJOLEOP_YEJEONG_YYYY", "");
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "CHOEGEUN_HAKGI_KOR_JEOMSU", "");
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "CHOEGEUN_HAKGI_ENG_JEOMSU", "");

        			if(this.tab.tabIphakwonseoIpryeok.form.divInput1.form.cboSebuJeonhyeongGbcd.value == '34')
        			{
        				this.dsBindableGogyo.setColumn(0, "bEnable", true);
        				this.dsBindableGogyo.setColumn(0, "bReadonly", false);
        				this.dsBindableGosi.setColumn(0, "bEnable", true);
        				this.dsBindableGosi.setColumn(0, "bReadonly", false);
        				this.dsBindableDaehak.setColumn(0, "bEnable", true);
        				this.dsBindableDaehak.setColumn(0, "bReadonly", false);
        				this.staOnline.set_text("");
        				this.rdoDongui2.set_visible(false);
        				this.rdoDongui2_1.set_visible(false);
        			}
        			else
        			{
        				this.dsBindableGogyo.setColumn(0, "bEnable", false);
        				this.dsBindableGogyo.setColumn(0, "bReadonly", true);
        				this.dsBindableGosi.setColumn(0, "bEnable", true);
        				this.dsBindableGosi.setColumn(0, "bReadonly", false);
        				this.dsBindableDaehak.setColumn(0, "bEnable", false);
        				this.dsBindableDaehak.setColumn(0, "bReadonly", true);
        				this.staOnline.set_text("검정고시 온라인제공 동의 여부");
        				this.rdoDongui2.set_visible(false);
        				this.rdoDongui2_1.set_visible(true);
        			}
        		}
        	}
        	else if(this.cboGyeyeol.value == '')
        	{
        		if(this.dsMaster.getRowType(this.dsMaster.rowposition) == '4')
        		{
        			this.ds_input.setColumn(0, "IPSI_YYYY", this.dsMaster.getColumn(this.dsMaster.rowposition, "IPSI_YYYY"));
        			this.ds_input.setColumn(0, "MOJIP_GBCD", this.dsMaster.getColumn(this.dsMaster.rowposition, "MOJIP_GBCD"));
        			this.ds_input.setColumn(0, "SUHEOM_NO", this.dsMaster.getColumn(this.dsMaster.rowposition, "SUHEOM_NO"));

        			if(this.confirm("선택으로 변경 시 기존 성적은 사라지고 수정 중이었던 원서접수 내역은 저장됩니다.\n그래도 진행 하시겠습니까?"))
        			{
        				this.fn_RealDel();
        			}

        			this.cboGyeyeol.set_value("");

        			this.edtChulsinGogyo.set_value("");
        			//학력사항 고교의 데이터를 데이터셋에서 공백으로 초기화
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "GOGYO_CD", "");
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "GOGYO_NM", "");
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "GOGYOJOLEOP_GBCD", "");
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "GOGYOJOLEOP_YEJEONG_YYYY", "");
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "CHOEGEUN_HAKGI_KOR_JEOMSU", "");
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "CHOEGEUN_HAKGI_ENG_JEOMSU", "");
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "GEOMJEONGGOSI_CD", "");
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "GEOMJEONGGOSI_NM", "");
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "HAPGYEOK_YYYY", "");
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "AVG_JEOMSU", "");
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "GEOMJEONGGOSI_HOECHA", "");
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "DONGUI_NO", "");
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "GEOMJEONGGOSI_KOR_JEOMSU", "");
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "GEOMJEONGGOSI_ENG_JEOMSU", "");

        			if(this.tab.tabIphakwonseoIpryeok.form.divInput1.form.cboSebuJeonhyeongGbcd.value == '34')
        			{
        				this.dsBindableGogyo.setColumn(0, "bEnable", true);
        				this.dsBindableGogyo.setColumn(0, "bReadonly", false);
        				this.dsBindableGosi.setColumn(0, "bEnable", true);
        				this.dsBindableGosi.setColumn(0, "bReadonly", false);
        				this.dsBindableDaehak.setColumn(0, "bEnable", true);
        				this.dsBindableDaehak.setColumn(0, "bReadonly", false);
        				this.staOnline.set_text("");
        				this.rdoDongui2.set_visible(false);
        				this.rdoDongui2_1.set_visible(false);
        			}
        			else
        			{
        				this.dsBindableGogyo.setColumn(0, "bEnable", false);
        				this.dsBindableGogyo.setColumn(0, "bReadonly", true);
        				this.dsBindableGosi.setColumn(0, "bEnable", false);
        				this.dsBindableGosi.setColumn(0, "bReadonly", true);
        				this.dsBindableDaehak.setColumn(0, "bEnable", false);
        				this.dsBindableDaehak.setColumn(0, "bReadonly", true);
        				this.staOnline.set_text("학생부자료 온라인 제공");
        				this.rdoDongui2.set_visible(true);
        				this.rdoDongui2_1.set_visible(false);
        			}

        			this.dsDetail.deleteAll();
        			this.grdDetail.set_formatid("default");
        			this.divDetail.form.cbo1996.set_value("");
        			this.divDetail.form.cbo1996.set_enable(false);
        		}
        		else if(this.dsMaster.getRowType(this.dsMaster.rowposition) == '2')
        		{
        			this.edtChulsinGogyo.set_value("");
        			//학력사항 고교의 데이터를 데이터셋에서 공백으로 초기화
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "GOGYO_CD", "");
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "GOGYO_NM", "");
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "GOGYOJOLEOP_GBCD", "");
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "GOGYOJOLEOP_YEJEONG_YYYY", "");
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "CHOEGEUN_HAKGI_KOR_JEOMSU", "");
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "CHOEGEUN_HAKGI_ENG_JEOMSU", "");
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "GEOMJEONGGOSI_CD", "");
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "GEOMJEONGGOSI_NM", "");
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "HAPGYEOK_YYYY", "");
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "AVG_JEOMSU", "");
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "GEOMJEONGGOSI_HOECHA", "");
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "DONGUI_NO", "");
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "GEOMJEONGGOSI_KOR_JEOMSU", "");
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "GEOMJEONGGOSI_ENG_JEOMSU", "");

        			if(this.tab.tabIphakwonseoIpryeok.form.divInput1.form.cboSebuJeonhyeongGbcd.value == '34')
        			{
        				this.dsBindableGogyo.setColumn(0, "bEnable", true);
        				this.dsBindableGogyo.setColumn(0, "bReadonly", false);
        				this.dsBindableGosi.setColumn(0, "bEnable", true);
        				this.dsBindableGosi.setColumn(0, "bReadonly", false);
        				this.dsBindableDaehak.setColumn(0, "bEnable", true);
        				this.dsBindableDaehak.setColumn(0, "bReadonly", false);
        				this.staOnline.set_text("");
        				this.rdoDongui2.set_visible(false);
        				this.rdoDongui2_1.set_visible(false);
        			}
        			else
        			{
        				this.dsBindableGogyo.setColumn(0, "bEnable", false);
        				this.dsBindableGogyo.setColumn(0, "bReadonly", true);
        				this.dsBindableGosi.setColumn(0, "bEnable", false);
        				this.dsBindableGosi.setColumn(0, "bReadonly", true);
        				this.dsBindableDaehak.setColumn(0, "bEnable", false);
        				this.dsBindableDaehak.setColumn(0, "bReadonly", true);
        				this.staOnline.set_text("학생부자료 온라인 제공");
        				this.rdoDongui2.set_visible(true);
        				this.rdoDongui2_1.set_visible(false);
        			}
        		}
        	}
        	else
        	{
        		if(this.tab.tabIphakwonseoIpryeok.form.divInput1.form.cboSebuJeonhyeongGbcd.value == '34')
        		{
        			this.dsBindableGogyo.setColumn(0, "bEnable", true);
        			this.dsBindableGogyo.setColumn(0, "bReadonly", false);
        			this.dsBindableGosi.setColumn(0, "bEnable", true);
        			this.dsBindableGosi.setColumn(0, "bReadonly", false);
        			this.dsBindableDaehak.setColumn(0, "bEnable", true);
        			this.dsBindableDaehak.setColumn(0, "bReadonly", false);
        			this.staOnline.set_text("");
        			this.rdoDongui2.set_visible(false);
        			this.rdoDongui2_1.set_visible(false);
        		}
        		else
        		{
        			this.dsBindableGogyo.setColumn(0, "bEnable", true);
        			this.dsBindableGogyo.setColumn(0, "bReadonly", false);
        			this.dsBindableGosi.setColumn(0, "bEnable", false);
        			this.dsBindableGosi.setColumn(0, "bReadonly", true);
        			this.dsBindableDaehak.setColumn(0, "bEnable", false);
        			this.dsBindableDaehak.setColumn(0, "bReadonly", true);
        			this.staOnline.set_text("학생부자료 온라인 제공");
        			this.rdoDongui2.set_visible(true);
        			this.rdoDongui2_1.set_visible(false);
        		}

        		//학력사항 검정고시 데이터셋에서 공백으로 초기화
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "GEOMJEONGGOSI_CD", "");
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "GEOMJEONGGOSI_NM", "");
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "HAPGYEOK_YYYY", "");
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "AVG_JEOMSU", "");
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "GEOMJEONGGOSI_HOECHA", "");
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "DONGUI_NO", "");
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "GEOMJEONGGOSI_KOR_JEOMSU", "");
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "GEOMJEONGGOSI_ENG_JEOMSU", "");
        	}
        };

        // 주민등록번호 앞 6자리 입력시 뒷자리로 포커스 이동
        this.edtResNo1_onkeyup = function(obj,e)
        {
        	if(obj.getLength() == 6)
        	{
        		this.edtResNo2.setFocus(true);
        	}
        };

        // 주민등록번호 앞자리 변경시 중복 체크
        this.edtResNo1_onchanged = function(obj,e)
        {
        	rowNum.push(this.dsMaster.rowposition);

        	var IPSI_YYYY = this.dsMaster.getColumn(this.dsMaster.rowposition, "IPSI_YYYY");
        	var MOJIP_GBCD = this.dsMaster.getColumn(this.dsMaster.rowposition, "MOJIP_GBCD");
        	var RES_NO1 = this.dsMaster.getColumn(this.dsMaster.rowposition, "RES_NO1");
        	var RES_NO2 = this.dsMaster.getColumn(this.dsMaster.rowposition, "RES_NO2");

        	this.ds_jungbokInput.setColumn(0, "IPSI_YYYY", IPSI_YYYY);
        	this.ds_jungbokInput.setColumn(0, "MOJIP_GBCD", MOJIP_GBCD);
        	this.ds_jungbokInput.setColumn(0, "RES_NO1", RES_NO1);
        	this.ds_jungbokInput.setColumn(0, "RES_NO2", RES_NO2);

        	// 암호화 문자 길이때문에
        	if(RES_NO2 == '')
        	{
        		RES_NO2 = '9999999'
        	}

        	this.fn_MojipGbResNoChk();

        	if(this.dsJungbok.getColumn(0,"CNT") != "0")
        	{
        		alert('같은 모집에 중복으로 지원하실 수 없습니다.');
        		return;
        	}

        	if(obj.value != '' && this.edtResNo2.value != '')
        	{
        		if(this.dsMaster.getRowType(this.dsMaster.rowposition) == '2')
        		{
        			this.fn_GetJaejiwonValue();
        		}
        	}
        };

        // 주민등록번호 뒷자리 변경시 중복 체크
        this.edtResNo2_onchanged = function(obj,e)
        {
        	rowNum.push(this.dsMaster.rowposition);

        	var IPSI_YYYY = this.dsMaster.getColumn(this.dsMaster.rowposition, "IPSI_YYYY");
        	var MOJIP_GBCD = this.dsMaster.getColumn(this.dsMaster.rowposition, "MOJIP_GBCD");
        	var RES_NO1 = this.dsMaster.getColumn(this.dsMaster.rowposition, "RES_NO1");
        	var RES_NO2 = this.dsMaster.getColumn(this.dsMaster.rowposition, "RES_NO2");

        	this.ds_jungbokInput.setColumn(0, "IPSI_YYYY", IPSI_YYYY);
        	this.ds_jungbokInput.setColumn(0, "MOJIP_GBCD", MOJIP_GBCD);
        	this.ds_jungbokInput.setColumn(0, "RES_NO1", RES_NO1);
        	this.ds_jungbokInput.setColumn(0, "RES_NO2", RES_NO2);

        	this.fn_MojipGbResNoChk();

        	if(this.dsJungbok.getColumn(0,"CNT") != "0")
        	{
        		alert('같은 모집에 중복으로 지원하실 수 없습니다.');
        		return;
        	}

        	if(obj.value != '' && this.edtResNo2.value != '')
        	{
        		if(this.dsMaster.getRowType(this.dsMaster.rowposition) == '2')
        		{
        			this.fn_GetJaejiwonValue();
        		}
        	}
        };

        // 주소 검색
        this.btnJuso_onclick = function(obj,e)
        {
        	if(this.dsMaster.rowcount == 0)
        	{
        		this.alert("주소를 검색할 데이터가 존재하지 않습니다.");
        	}
        	else
        	{
        		this.gfn_searchPost(this, searchPost);
        	}
        };

        // 고교졸업구분에 마우스가 올라갔을때
        this.cboGogyoJolubGb_onmouseenter = function(obj,e)
        {
        	preJoleopGbcd = obj.value;
        };

        // 고교졸업구분 변경시
        this.cboGogyoJolubGb_onitemchanged = function(obj,e)
        {
        	var rowNo = this.dsMaster.rowposition;

        	var IPSI_YYYY =  this.dsMaster.getColumn(rowNo, "IPSI_YYYY");
        	var MOJIP_GBCD = this.dsMaster.getColumn(rowNo, "MOJIP_GBCD");
        	var SUHEOM_NO = this.dsMaster.getColumn(rowNo, "SUHEOM_NO");

        	if(jeopsuFrdt <= getDay && jeopsuTodt >= getDay && HYEONJAE_MOJIP_GBCD == MOJIP_GBCD)
        	{
        		modJoleopGbcd = obj.value;

        		if(this.dsMaster.getRowType(this.dsMaster.rowposition) == '4'
        		  && this.dsMaster.getColumn(this.dsMaster.rowposition, "SEBUJEONHYEONG_GBCD") != '34'
        		  && preJoleopGbcd != modJoleopGbcd
        		  && this.dsDetail.rowcount != 0){

        			if(this.confirm("고교졸업구분 변경 시 기존 성적은 사라집니다.\n그래도 진행 하시겠습니까?"))
        			{
        				this.fn_RealDel();
        				this.dsDetail.deleteAll();

        				this.grdDetail.set_formatid("default");
        				this.divDetail.form.cbo1996.set_value('');
        				this.divDetail.form.cbo1996.set_enable(false);
        			}
        			else
        			{
        				this.cboGogyoJolubGb.set_value(preJoleopGbcd);
        			}
        		}
        	 }
        	 else
        	 {
        		this.alert("모집기간이 아니므로 변경하실 수 없습니다.");
        		this.dsMaster.reset();
        		this.dsDetail.reset();
        	 }
        };

        // 졸업(예정)년도 변경 전
        this.edtGogyoJolubYYYY_canchange = function(obj,e)
        {
        	preJoleopYejeongYyyy = this.dsMaster.getColumn(this.dsMaster.rowposition, "GOGYOJOLEOP_YEJEONG_YYYY");
        };

        // 졸업(예정)년도 변경 시
        this.edtGogyoJolubYYYY_onchanged = function(obj,e)
        {
        	var rowNo = this.dsMaster.rowposition;

        	var IPSI_YYYY =  this.dsMaster.getColumn(rowNo, "IPSI_YYYY");
        	var MOJIP_GBCD = this.dsMaster.getColumn(rowNo, "MOJIP_GBCD");
        	var SUHEOM_NO = this.dsMaster.getColumn(rowNo, "SUHEOM_NO");

        	if(jeopsuFrdt <= getDay && jeopsuTodt >= getDay && HYEONJAE_MOJIP_GBCD == MOJIP_GBCD)
        	{
        		modJoleopYejeongYyyy = obj.value;

        		if(this.dsMaster.getRowType(this.dsMaster.rowposition) == '4'
        		   && this.dsMaster.getColumn(this.dsMaster.rowposition, "SEBUJEONHYEONG_GBCD") != '34'
        		   && preJoleopYejeongYyyy != modJoleopYejeongYyyy
        		   && this.dsDetail.rowcount != 0)
        		{
        			var IPSI_YYYY = this.dsMaster.getColumn(this.dsMaster.rowposition, "IPSI_YYYY");
        			var MOJIP_GBCD = this.dsMaster.getColumn(this.dsMaster.rowposition, "MOJIP_GBCD");
        			var SUHEOM_NO = this.dsMaster.getColumn(this.dsMaster.rowposition, "SUHEOM_NO");
        			var GOGYO_SEONGJEOK_IPRYEOK_GBCD;

        			if(modJoleopYejeongYyyy < 1996)
        			{
        				GOGYO_SEONGJEOK_IPRYEOK_GBCD = '2';
        			}
        			else if(modJoleopYejeongYyyy == 1997)
        			{
        				GOGYO_SEONGJEOK_IPRYEOK_GBCD = '3';
        			}
        			else if(modJoleopYejeongYyyy < 2007)
        			{
        				GOGYO_SEONGJEOK_IPRYEOK_GBCD = '4';
        			}
        			else if(modJoleopYejeongYyyy > 2008)
        			{
        				GOGYO_SEONGJEOK_IPRYEOK_GBCD = '5';
        			}

        			this.dsMaster.setColumn(rowNo, "GOGYO_SEONGJEOK_IPRYEOK_GBCD", GOGYO_SEONGJEOK_IPRYEOK_GBCD);

        			this.ds_gogyoInput.setColumn(0, "IPSI_YYYY", IPSI_YYYY);
        			this.ds_gogyoInput.setColumn(0, "MOJIP_GBCD", MOJIP_GBCD);
        			this.ds_gogyoInput.setColumn(0, "SUHEOM_NO", SUHEOM_NO);
        			this.ds_gogyoInput.setColumn(0, "GOGYO_SEONGJEOK_IPRYEOK_GBCD", GOGYO_SEONGJEOK_IPRYEOK_GBCD);

        			if(this.confirm("졸업(예정)년도 변경 시 기존 성적은 사라집니다.\n그래도 진행 하시겠습니까?"))
        			{
        				var strSvc      = "";
        				var strUrl      = "/prj/EN/EN02/Save_1010203_T01_GogyoJolub.do";
        				var strInDs     = "ds_gogyoInput=ds_gogyoInput:a ";
        				var strOutDs    = "";
        				var strArg      = "";
        				var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        				var strASync    = false;             //샏략이나 공백일시에는 ASync=true,싱크시는 false로
        				this.gfn_Transaction(strSvc
        								   , strUrl
        								   , strInDs
        								   , strOutDs
        								   , strArg
        								   , strCallBack
        								   , strASync);

        				this.edtGogyoJolubYYYY.set_value(modJoleopYejeongYyyy);

        				this.dsDetail.deleteAll();

        				this.grdDetail.set_formatid("default");
        				this.divDetail.form.cbo1996.set_value('');
        				this.divDetail.form.cbo1996.set_enable(false);
        			}
        			else
        			{
        				this.edtGogyoJolubYYYY.set_value(preJoleopYejeongYyyy);
        			}
        		}
        	}
        	else
        	{
        		this.alert("모집기간이 아니므로 변경 하실 수 없습니다.");
        		this.dsMaster.reset();
        		this.dsDetail.reset();
        	}
        };

        // 전형료 납부구분 변경시
        this.cboJeonhyeongryo_onitemchanged = function(obj,e)
        {
        	if(this.cboJeonhyeongryo.value == '03')
        	{
        		this.staMyenje.set_visible(true);
        		this.staMyenjeSayu.set_visible(true);
        		this.cboMyeonjeSayu.set_visible(true);
        	}
        	else
        	{
        		this.dsMaster.setColumn(this.dsMaster.rowposition,"MYEONJE_SAYU_GBCD", "");
        		this.staMyenje.set_visible(false);
        		this.staMyenjeSayu.set_visible(false);
        		this.cboMyeonjeSayu.set_visible(false);
        	}
        };

        // 합격여부 변경시
        this.cboHabgyeokYn_onitemchanged = function(obj,e)
        {
        	if(this.dsMaster.getRowType(this.dsMaster.rowposition) == '2')
        	{
        		this.alert("신규 등록 시 합격 구분을 선택하실 수 없습니다.");
        		this.cboHabgyeokYn.set_index(0);
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "BULHAPGYEOK_GBCD", "");
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "MIDEUNGROK_SEBU_GBCD", "");
        		return false;
        	}

        	//미등록
        	if(this.cboHabgyeokYn.value  == '98')
        	{
        		this.staBulMi.set_visible(true);
        		this.staBulHapgyeok.set_visible(true);
        		this.cboBulHapgyeok.set_visible(false);
        		this.cboMiDeungrok.set_visible(true);
        		this.staBulHapgyeok.set_text("미등록 사유");
        		this.cboMiDeungrok.set_index(0);
        	}
        	//불합격
        	else if(this.cboHabgyeokYn.value  == '99'){
        		this.staBulMi.set_visible(true);
        		this.staBulHapgyeok.set_visible(true);
        		this.cboBulHapgyeok.set_visible(true);
        		this.cboMiDeungrok.set_visible(false);
        		this.staBulHapgyeok.set_text("불합격 사유");
        		this.cboBulHapgyeok.set_index(0);
        	}
        	else
        	{
        		this.staBulMi.set_visible(false);
        		this.staBulHapgyeok.set_visible(false);
        		this.cboBulHapgyeok.set_visible(false);
        		this.cboMiDeungrok.set_visible(false);
        	}
        };

        // 등급, 성취도 변경전
        this.divDetail_chkDeungGeub_onmouseenter = function(obj,e)
        {
        	deunggeubSeongchidoVal = obj.value;
        };

        // 등급, 성취도 변경시
        this.divDetail_chkDeungGeub_onchanged = function(obj,e)
        {
        	var rowNo = this.dsMaster.rowposition;

        	var IPSI_YYYY =  this.dsMaster.getColumn(rowNo, "IPSI_YYYY");
        	var MOJIP_GBCD = this.dsMaster.getColumn(rowNo, "MOJIP_GBCD");
        	var SUHEOM_NO = this.dsMaster.getColumn(rowNo, "SUHEOM_NO");
        	var GOGYOJOLEOP_YEJEONG_YYYY = this.dsMaster.getColumn(rowNo, "GOGYOJOLEOP_YEJEONG_YYYY");
        	var SEONGJEOK_IPRYEOK_GBCD_VALUE;

        	if(e.postvalue == false)
        	{
        		if(GOGYOJOLEOP_YEJEONG_YYYY < 2008)
        		{
        			SEONGJEOK_IPRYEOK_GBCD_VALUE = '4';
        		}
        		else
        		{
        			SEONGJEOK_IPRYEOK_GBCD_VALUE = '5';
        		}
        	}
        	else
        	{
        		SEONGJEOK_IPRYEOK_GBCD_VALUE = '99';
        	}

        	saveType = this.dsMaster.getRowType(this.dsMaster.rowposition);

        	if(jeopsuFrdt <= getDay && jeopsuTodt >= getDay && HYEONJAE_MOJIP_GBCD == MOJIP_GBCD)
        	{
        		if(this.confirm('변경 시 기존 성적은 사라집니다.\n그래도 진행 하시겠습니까?'))
        		{
        			this.dsMaster.setColumn(rowNo,'GOGYO_SEONGJEOK_IPRYEOK_GBCD',SEONGJEOK_IPRYEOK_GBCD_VALUE);

        			if(saveType == '1')
        			{
        				this.dsMaster.set_updatecontrol(false);
        				this.dsMaster.setRowType(rowNo, '1');
        				this.dsMaster.set_updatecontrol(true);
        			}

        			if(obj.value == '0')
        			{
        				if(SEONGJEOK_IPRYEOK_GBCD_VALUE  == '4')
        				{
        					this.grdDetail.set_formatid("format01");
        					this.divDetail.form.cbo1996.set_value('');
        					this.divDetail.form.cbo1996.set_enable(false);
        					this.divDetail.form.chkDeungGeub.set_visible(true);
        				}
        				else
        				{
        					this.grdDetail.set_formatid("format00");
        					this.divDetail.form.cbo1996.set_value('');
        					this.divDetail.form.cbo1996.set_enable(false);
        					this.divDetail.form.chkDeungGeub.set_visible(true);
        				}
        			}
        			else if(obj.value == '1')
        			{
        				this.grdDetail.set_formatid("format04");
        				this.divDetail.form.cbo1996.set_value('');
        				this.divDetail.form.cbo1996.set_enable(false);
        				this.divDetail.form.chkDeungGeub.set_visible(true);
        				this.divDetail.form.chkDeungGeub.set_value(true);
        			}

        			this.ds_gogyoInput.setColumn(0, "IPSI_YYYY", IPSI_YYYY);
        			this.ds_gogyoInput.setColumn(0, "MOJIP_GBCD", MOJIP_GBCD);
        			this.ds_gogyoInput.setColumn(0, "SUHEOM_NO", SUHEOM_NO);
        			this.ds_gogyoInput.setColumn(0, "GOGYO_SEONGJEOK_IPRYEOK_GBCD", SEONGJEOK_IPRYEOK_GBCD_VALUE);

        			var strSvc      = "";
        			var strUrl      = "/prj/EN/EN02/Save_1010203_T01_GogyoJolub.do";
        			var strInDs     = "ds_gogyoInput=ds_gogyoInput:a ";
        			var strOutDs    = "";
        			var strArg      = "";
        			var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        			var strASync    = false;             //샏략이나 공백일시에는 ASync=true,싱크시는 false로
        			this.gfn_Transaction(strSvc
        							   , strUrl
        							   , strInDs
        							   , strOutDs
        							   , strArg
        							   , strCallBack
        							   , strASync);
        		}
        		else
        		{
        			this.divDetail.form.chkDeungGeub.set_value(deunggeubSeongchidoVal);
        		}
        	 }
        	 else
        	 {
        		this.alert("모집기간이 아니므로 등급 성취도를 수정하실 수 없습니다.");
        		this.divDetail.form.chkDeungGeub.set_value(deunggeubSeongchidoVal);
        	 }
        };

        // 1996년 졸업생 선택 변경전
        this.divDetail_cbo1996_onmouseenter = function(obj,e)
        {
        	graduateStuVal = obj.value;
        };

        // 1996년 졸업생 선택 변경시
        this.divDetail_cbo1996_onitemchanged = function(obj,e)
        {
        	var rowNo = this.dsMaster.rowposition;

        	var IPSI_YYYY =  this.dsMaster.getColumn(rowNo, "IPSI_YYYY");
        	var MOJIP_GBCD = this.dsMaster.getColumn(rowNo, "MOJIP_GBCD");
        	var SUHEOM_NO = this.dsMaster.getColumn(rowNo, "SUHEOM_NO");

        	saveType = this.dsMaster.getRowType(rowNo);

        	if(jeopsuFrdt <= getDay && jeopsuTodt >= getDay && HYEONJAE_MOJIP_GBCD == MOJIP_GBCD)
        	{
        		  if(this.confirm('변경 시 기존 성적은 사라집니다.\n그래도 진행 하시겠습니까?'))
        		  {
        			var GOGYO_SEONGJEOK_IPRYEOK_GBCD = obj.value;
        			this.dsMaster.setColumn(rowNo,'GOGYO_SEONGJEOK_IPRYEOK_GBCD',GOGYO_SEONGJEOK_IPRYEOK_GBCD);

        			if(saveType == '1')
        			{
        				this.dsMaster.set_updatecontrol(false);
        				this.dsMaster.setRowType(rowNo, Dataset.ROWTYPE_NORMAL);
        				this.dsMaster.set_updatecontrol(true);
        			}

        			if(obj.value == '1')
        			{
        				this.grdDetail.set_formatid("format03");
        			}
        			else if(obj.value == '2')
        			{
        				this.grdDetail.set_formatid("format02");
        			}

        			this.ds_gogyoInput.setColumn(0, "IPSI_YYYY", IPSI_YYYY);
        			this.ds_gogyoInput.setColumn(0, "MOJIP_GBCD", MOJIP_GBCD);
        			this.ds_gogyoInput.setColumn(0, "SUHEOM_NO", SUHEOM_NO);
        			this.ds_gogyoInput.setColumn(0, "GOGYO_SEONGJEOK_IPRYEOK_GBCD", SEONGJEOK_IPRYEOK_GBCD_VALUE);

        			var strSvc      = "";
        			var strUrl      = "/prj/EN/EN02/Save_1010203_T01_GogyoJolub.do";
        			var strInDs     = "ds_gogyoInput=ds_gogyoInput:a ";
        			var strOutDs    = "";
        			var strArg      = "";
        			var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        			var strASync    = false;             //샏략이나 공백일시에는 ASync=true,싱크시는 false로
        			this.gfn_Transaction(strSvc
        							   , strUrl
        							   , strInDs
        							   , strOutDs
        							   , strArg
        							   , strCallBack
        							   , strASync);
        		}
        		else
        		{
        			obj.set_value(graduateStuVal);
        		}
        	}
        	else
        	{
        		this.alert("모집기간이 아니므로 수정하실 수 없습니다.");
        		obj.set_value(graduateStuVal);
        	}
        };

        /**********************************************************************
                14. 팝업
        ***********************************************************************/
        // 출신고교 팝업
        this.btnGogyo_onclick = function(obj,e)
        {
        	var yyyy = this.ds_input.getColumn(0, "IPSI_YYYY");
        	var gosi = '';
        	var oArg = {yyyy:yyyy, gosi:gosi};
        	var oOption = {};
        	var sPopupCallBack = "fn_popupCallback";
        	this.gfn_openPopup( "gogyo","EN01::EN01_1010106_P02.xfdl",oArg,sPopupCallBack,oOption);
        };

        this.btnGosi_onclick = function(obj,e)
        {
        	var yyyy = this.ds_input.getColumn(0, "IPSI_YYYY");
        	var gosi = '100000001';
        	var oArg = {yyyy:yyyy, gosi:gosi};
        	var oOption = {};
        	var sPopupCallBack = "fn_popupCallback";
        	this.gfn_openPopup( "gosi","EN01::EN01_1010106_P02.xfdl",oArg,sPopupCallBack,oOption);
        };

        /**********************************************************************
                15. 공통함수
        ***********************************************************************/
        // 입시전공 가져오기
        this.fn_Jeongong = function()
        {
            var strSvc      = "Jeongong";
            var strUrl      = "prj/EN/EN02/Retrieve_1010203_JEONGONG_CD.do";
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
        	this.ds_jeongongCd.setColumn(0, "DEPT_NM", "선택");
        	this.cboJeongong.set_index(0);
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
            var strUrl      = "prj/EN/EN02/Retrieve_1010203_MOJIPGBCD.do";
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
        	this.ds_mojipGbcd.insertRow(0);
        	this.ds_mojipGbcd.setColumn(0, "MOJIP_GBCD", "");
        	this.ds_mojipGbcd.setColumn(0, "MOJIP_NM", "선택");
        	this.cboMojip.set_index(0);

        	this.ds_hakgwaCd.insertRow(0);
        	this.ds_hakgwaCd.setColumn(0, "DEPT_CD", "");
        	this.ds_hakgwaCd.setColumn(0, "DEPT_NM", "선택");
        	this.cboHakgwa.set_index(0);

        	this.ds_juyaGbcd.insertRow(0);
        	this.ds_juyaGbcd.setColumn(0, "JUYA_GBCD", "");
        	this.ds_juyaGbcd.setColumn(0, "JUYA_GM", "선택");
        	this.cboJuya.set_index(0);

        	this.ds_jeonhyeong.insertRow(0);
        	this.ds_jeonhyeong.setColumn(0, "JEONHYEONG_GBCD", "");
        	this.ds_jeonhyeong.setColumn(0, "JEONHYEONG_NM", "선택");
        	this.cboJeonhyeong.set_index(0);

        	this.ds_sebujeonhyeong.insertRow(0);
        	this.ds_sebujeonhyeong.setColumn(0, "SEBUJEONHYEONG_GBCD", "");
        	this.ds_sebujeonhyeong.setColumn(0, "SEBUJEONHYEONG_NM", "선택");
        	this.cboSebu.set_index(0);

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
            var strUrl      = "prj/EN/EN02/Retrieve_1010203_HAKGWA_CD.do";
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
        	this.ds_hakgwaCd.setColumn(0, "DEPT_CD", "");
        	this.ds_hakgwaCd.setColumn(0, "DEPT_NM", "선택");
        	this.cboHakgwa.set_index(0);

        	this.ds_juyaGbcd.insertRow(0);
        	this.ds_juyaGbcd.setColumn(0, "JUYA_GBCD", "");
        	this.ds_juyaGbcd.setColumn(0, "JUYA_GM", "선택");
        	this.cboJuya.set_index(0);

        	this.ds_jeonhyeong.insertRow(0);
        	this.ds_jeonhyeong.setColumn(0, "JEONHYEONG_GBCD", "");
        	this.ds_jeonhyeong.setColumn(0, "JEONHYEONG_NM", "선택");
        	this.cboJeonhyeong.set_index(0);

        	this.ds_sebujeonhyeong.insertRow(0);
        	this.ds_sebujeonhyeong.setColumn(0, "SEBUJEONHYEONG_GBCD", "");
        	this.ds_sebujeonhyeong.setColumn(0, "SEBUJEONHYEONG_NM", "선택");
        	this.cboSebu.set_index(0);

        	this.fn_Juya();
        }

        // 입시주야 가져오기
        this.fn_Juya = function()
        {
        	this.ds_juyaGbcd.deleteAll();
        	this.ds_jeonhyeong.deleteAll();
        	this.ds_sebujeonhyeong.deleteAll();

        	this.ds_input.setColumn(0, "HAKGWA_CD", this.cboHakgwa.value);

        	var strSvc      = "Juya";
            var strUrl      = "prj/EN/EN02/Retrieve_1010203_JUYAGBCD.do";
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
        	this.ds_juyaGbcd.setColumn(0, "JUYA_NM", "선택");
        	this.cboJuya.set_index(0);

        	this.ds_jeonhyeong.insertRow(0);
        	this.ds_jeonhyeong.setColumn(0, "JEONHYEONG_GBCD", "");
        	this.ds_jeonhyeong.setColumn(0, "JEONHYEONG_NM", "선택");
        	this.cboJeonhyeong.set_index(0);

        	this.ds_sebujeonhyeong.insertRow(0);
        	this.ds_sebujeonhyeong.setColumn(0, "SEBUJEONHYEONG_GBCD", "");
        	this.ds_sebujeonhyeong.setColumn(0, "SEBUJEONHYEONG_NM", "선택");
        	this.cboSebu.set_index(0);

        	this.fn_Jeonhyeong();
        }

        // 입시전형 가져오기
        this.fn_Jeonhyeong = function()
        {
        	this.ds_jeonhyeong.deleteAll();
        	this.ds_sebujeonhyeong.deleteAll();

        	this.ds_input.setColumn(0, "HAKGWA_CD", this.cboHakgwa.value);
        	this.ds_input.setColumn(0, "JUYA_GBCD", this.cboJuya.value);

        	var strSvc      = "Jeonhyeong";
            var strUrl      = "prj/EN/EN02/Retrieve_1010203_JEONHYEONG.do";
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
        	this.ds_jeonhyeong.setColumn(0, "JEONHYEONG_NM", "선택");
        	this.cboJeonhyeong.set_index(0);

        	this.ds_sebujeonhyeong.insertRow(0);
        	this.ds_sebujeonhyeong.setColumn(0, "SEBUJEONHYEONG_GBCD", "");
        	this.ds_sebujeonhyeong.setColumn(0, "SEBUJEONHYEONG_NM", "선택");
        	this.cboSebu.set_index(0);

        	this.fn_SebuJeonhyeong();
        }

        // 입시세부전형 가져오기
        this.fn_SebuJeonhyeong = function()
        {
        	this.ds_sebujeonhyeong.deleteAll();

        	this.ds_input.setColumn(0, "HAKGWA_CD", this.cboHakgwa.value);
        	this.ds_input.setColumn(0, "JUYA_GBCD", this.cboJuya.value);
        	this.ds_input.setColumn(0, "JEONHYEONG_GBCD", this.cboJeonhyeong.value);

        	var strSvc      = "SebuJeonhyeong";
            var strUrl      = "prj/EN/EN02/Retrieve_1010203_SEBUJEONHYEONG.do";
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
        	this.ds_sebujeonhyeong.setColumn(0, "SEBUJEONHYEONG_NM", "선택");
        	this.cboSebu.set_index(0);
        }

        // 성적입력 그리드
        this.fn_GridType = function(IPRYEOK_GBCD, HAKNYEON, HAKGI){
            var nRow = this.dsMaster.rowposition;
            var IPSI_YYYY = this.dsMaster.getColumn(nRow,'IPSI_YYYY');
            var MOJIP_GBCD = this.dsMaster.getColumn(nRow,'MOJIP_GBCD');;
            if(IPSI_YYYY != "")
        	{
                if(IPRYEOK_GBCD == "1")
        		{
                    return false;
                }
        		else
        		{
                    if(MOJIP_GBCD == "1")
        			{
                        if(HAKNYEON == "3" && HAKGI == "2")
        				{
                            return false;
                        }
        				else
        				{
                            return true;
                        }
                    }
        			else if(MOJIP_GBCD == "2")
        			{
                        if(HAKNYEON == "3" && HAKGI == "2")
        				{
                            return false;
                        }
        				else
        				{
                            return true;
                        }
                    }
        			else
        			{
                        return true;
                    }
                }
            }
        	else
        	{
                return false;
            }
        }

        // 중복지원 체크 함수
        this.fn_MojipGbResNoChk = function()
        {
        	var strSvc      = "Jungbok";
            var strUrl      = "prj/EN/EN02/Retrieve_1010203_T01_Jungbok.do";
            var strInDs     = "ds_jungbokInput=ds_jungbokInput";
            var strOutDs    = "dsJungbok=dsJungbok";
            var strArg      = "";
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

        // 재지원 체크 함수
        this.fn_GetJaejiwonValue = function ()
        {
        	mojipHapgyeokChk = 0;

        	this.dsJaejiwon.deleteAll();
        	var curMojipRowNum;
        	var myeonjaeYn = 0;

        	var strSvc      = "Jaejiwon";
            var strUrl      = "prj/EN/EN02/Retrieve_1010203_T01_Jaejiwon.do";
            var strInDs     = "ds_jungbokInput=ds_jungbokInput";
            var strOutDs    = "dsJaejiwon=dsJaejiwon";
            var strArg      = "";
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = false;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);

        	if(this.dsJaejiwon.rowcount > 0){
        		jaejiwonGbVal = 1;

        		for(var i = 0; i < this.dsJaejiwon.rowcount ; i++)
        		{
        			curMojipRowNum = i;
        			if(this.dsJaejiwon.getColumn(i, "JEONHYEONGRYONAPBU_GBCD") == '01' || this.dsJaejiwon.getColumn(i, "JEONHYEONGRYONAPBU_GBCD") == '02')
        			{
        				myeonjaeYn = 1;
        			}
        			if(this.dsJaejiwon.getColumn(i, "MOJIP_GBCD") == '1' && this.dsJaejiwon.getColumn(i, "HAPGYEOK_GBCD") == '01')
        			{
        				mojipHapgyeokChk = mojipHapgyeokChk + 1;
        			}
        			if(this.dsJaejiwon.getColumn(i, "MOJIP_GBCD") == '1' && this.dsJaejiwon.getColumn(i, "HAPGYEOK_GBCD") == '02')
        			{
        				mojipHapgyeokChk = mojipHapgyeokChk + 1;
        			}
        			if(this.dsJaejiwon.getColumn(i, "MOJIP_GBCD") == '2' && this.dsJaejiwon.getColumn(i, "HAPGYEOK_GBCD") == '01')
        			{
        				mojipHapgyeokChk = mojipHapgyeokChk + 1;
        			}
        			if(this.dsJaejiwon.getColumn(i, "MOJIP_GBCD") == '2' && this.dsJaejiwon.getColumn(i, "HAPGYEOK_GBCD") == '02')
        			{
        				mojipHapgyeokChk = mojipHapgyeokChk + 1;
        			}
        		}

        		if(jaejiwonGbVal == 1)
        		{
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "SUHEOMSAENG_NM", this.dsJaejiwon.getColumn(curMojipRowNum, "SUHEOMSAENG_NM"));
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "POST", this.dsJaejiwon.getColumn(curMojipRowNum, "POST"));
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "JUSO_GBCD", this.dsJaejiwon.getColumn(curMojipRowNum, "JUSO_GBCD"));
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "JUSO", this.dsJaejiwon.getColumn(curMojipRowNum, "JUSO"));
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "SANGSE_JUSO", this.dsJaejiwon.getColumn(curMojipRowNum, "SANGSE_JUSO"));
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "HP_NO", this.dsJaejiwon.getColumn(curMojipRowNum, "HP_NO"));
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "TEL_NO", this.dsJaejiwon.getColumn(curMojipRowNum, "TEL_NO"));
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "CHUGA_YEONRAKCHEO", this.dsJaejiwon.getColumn(curMojipRowNum, "CHUGA_YEONRAKCHEO"));
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "GOGYO_CD", this.dsJaejiwon.getColumn(curMojipRowNum, "GOGYO_CD"));
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "GOGYO_NM", this.dsJaejiwon.getColumn(curMojipRowNum, "GOGYO_NM"));
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "GOGYOGYEYEOL_GBCD", this.dsJaejiwon.getColumn(curMojipRowNum, "GOGYOGYEYEOL_GBCD"));
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "GOGYOJOLEOP_GBCD", this.dsJaejiwon.getColumn(curMojipRowNum, "GOGYOJOLEOP_GBCD"));
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "GOGYOJOLEOP_YEJEONG_YYYY", this.dsJaejiwon.getColumn(curMojipRowNum, "GOGYOJOLEOP_YEJEONG_YYYY"));
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "GOGYO_SEONGJEOK_IPRYEOK_GBCD", this.dsJaejiwon.getColumn(curMojipRowNum, "GOGYO_SEONGJEOK_IPRYEOK_GBCD"));
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "GEOMJEONGGOSI_CD", this.dsJaejiwon.getColumn(curMojipRowNum, "GEOMJEONGGOSI_CD"));
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "GEOMJEONGGOSI_NM", this.dsJaejiwon.getColumn(curMojipRowNum, "GEOMJEONGGOSI_NM"));
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "GEOMJEONGGOSI_HOECHA", this.dsJaejiwon.getColumn(curMojipRowNum, "GEOMJEONGGOSI_HOECHA"));
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "AVG_JEOMSU", this.dsJaejiwon.getColumn(curMojipRowNum, "AVG_JEOMSU"));
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "HAPGYEOK_YYYY", this.dsJaejiwon.getColumn(curMojipRowNum, "HAPGYEOK_YYYY"));
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "GEOMJEONGGOSI_BAEKBUNYUL", this.dsJaejiwon.getColumn(curMojipRowNum, "GEOMJEONGGOSI_BAEKBUNYUL"));
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "GEOMJEONGGOSI_KOR_JEOMSU", this.dsJaejiwon.getColumn(curMojipRowNum, "GEOMJEONGGOSI_KOR_JEOMSU"));
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "GEOMJEONGGOSI_ENG_JEOMSU", this.dsJaejiwon.getColumn(curMojipRowNum, "GEOMJEONGGOSI_ENG_JEOMSU"));
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "CHULSIN_DAEHAK_NM", this.dsJaejiwon.getColumn(curMojipRowNum, "CHULSIN_DAEHAK_NM"));
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "DAEHAKJOLEOP_YEJEONG_YYYY", this.dsJaejiwon.getColumn(curMojipRowNum, "DAEHAKJOLEOP_YEJEONG_YYYY"));
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "DAEHAKJOLEOP_GBCD", this.dsJaejiwon.getColumn(curMojipRowNum, "DAEHAKJOLEOP_GBCD"));
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "AVG_PYEONGJEOM_BAEKBUNYUL", this.dsJaejiwon.getColumn(curMojipRowNum, "AVG_PYEONGJEOM_BAEKBUNYUL"));
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "CHONGISU_HAKJEOM", this.dsJaejiwon.getColumn(curMojipRowNum, "CHONGISU_HAKJEOM"));
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "CHOEGEUN_HAKGI_PYEONGJEOM", this.dsJaejiwon.getColumn(curMojipRowNum, "CHOEGEUN_HAKGI_PYEONGJEOM"));
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "GIJUN_PYEONGJEOM", this.dsJaejiwon.getColumn(curMojipRowNum, "GIJUN_PYEONGJEOM"));
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "BANK_NM", this.dsJaejiwon.getColumn(curMojipRowNum, "BANK_NM"));
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "GYEJWA_NO", this.dsJaejiwon.getColumn(curMojipRowNum, "GYEJWA_NO"));
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "YEGEUMJU", this.dsJaejiwon.getColumn(curMojipRowNum, "YEGEUMJU"));
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "YEGEUMJU_GWANGYE", this.dsJaejiwon.getColumn(curMojipRowNum, "YEGEUMJU_GWANGYE"));
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "SUSI_HAPGYEOK_YN", this.dsJaejiwon.getColumn(curMojipRowNum, "SUSI_HAPGYEOK_YN"));
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "HAKSAENGBU_ONLINEJEGONGDONGUI_YN", this.dsJaejiwon.getColumn(curMojipRowNum, "HAKSAENGBU_ONLINEJEGONGDONGUI_YN"));
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "SUJIP_DONGUI_YN", this.dsJaejiwon.getColumn(curMojipRowNum, "SUJIP_DONGUI_YN"));
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "GOYUSIKBYEOL_INFO_DONGUI_YN", this.dsJaejiwon.getColumn(curMojipRowNum, "GOYUSIKBYEOL_INFO_DONGUI_YN"));
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "INFO_WITAK_DONGUI_YN", this.dsJaejiwon.getColumn(curMojipRowNum, "INFO_WITAK_DONGUI_YN"));
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "INFO_3JA_JEGONG_DONGUI_YN", this.dsJaejiwon.getColumn(curMojipRowNum, "INFO_3JA_JEGONG_DONGUI_YN"));
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "NAEYONG_HWAKIN_YN", this.dsJaejiwon.getColumn(curMojipRowNum, "NAEYONG_HWAKIN_YN"));
        		}

        		if(this.cboSebu.value == '34')
        		{
        			this.dsBindableGogyo.setColumn(0, "bEnable", true);
        			this.dsBindableGogyo.setColumn(0, "bReadonly", false);
        			this.dsBindableGosi.setColumn(0, "bEnable", true);
        			this.dsBindableGosi.setColumn(0, "bReadonly", false);
        			this.dsBindableDaehak.setColumn(0, "bEnable", true);
        			this.dsBindableDaehak.setColumn(0, "bReadonly", false);
        			this.staOnline.set_text("");
        			this.rdoDongui2.set_visible(false);
        			this.rdoDongui2_1.set_visible(false);
        		}
        		else
        		{
        			if(this.cboGyeyeol.value != '')
        			{
        				if(this.cboGyeyeol.value == '52')
        				{
        					this.dsBindableGogyo.setColumn(0, "bEnable", false);
        					this.dsBindableGogyo.setColumn(0, "bReadonly", true);
        					this.dsBindableGosi.setColumn(0, "bEnable", true);
        					this.dsBindableGosi.setColumn(0, "bReadonly", false);
        					this.dsBindableDaehak.setColumn(0, "bEnable", true);
        					this.dsBindableDaehak.setColumn(0, "bReadonly", false);
        					this.staOnline.set_text("검정고시 온라인제공 동의 여부");
        					this.rdoDongui2.set_visible(false);
        					this.rdoDongui2_1.set_visible(true);
        				}
        				else
        				{
        					this.dsBindableGogyo.setColumn(0, "bEnable", true);
        					this.dsBindableGogyo.setColumn(0, "bReadonly", false);
        					this.dsBindableGosi.setColumn(0, "bEnable", false);
        					this.dsBindableGosi.setColumn(0, "bReadonly", true);
        					this.dsBindableDaehak.setColumn(0, "bEnable", false);
        					this.dsBindableDaehak.setColumn(0, "bReadonly", true);
        					this.staOnline.set_text("학생부자료 온라인 제공");
        					this.rdoDongui2.set_visible(true);
        					this.rdoDongui2_1.set_visible(false);
        				}
        			}
        			else
        			{
        				this.dsBindableGogyo.setColumn(0, "bEnable", false);
        				this.dsBindableGogyo.setColumn(0, "bReadonly", true);
        				this.dsBindableGosi.setColumn(0, "bEnable", false);
        				this.dsBindableGosi.setColumn(0, "bReadonly", true);
        				this.dsBindableDaehak.setColumn(0, "bEnable", false);
        				this.dsBindableDaehak.setColumn(0, "bReadonly", true);
        				this.staOnline.set_text("학생부자료 온라인 제공");
        				this.rdoDongui2.set_visible(true);
        				this.rdoDongui2_1.set_visible(false);
        			}
        		}

        		if(myeonjaeYn == 1)
        		{
        			this.staMyenje.set_visible(true);
        			this.staMyenjeSayu.set_visible(true);
        			this.cboMyeonjeSayu.set_visible(true);
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "JEONHYEONGRYONAPBU_GBCD", "03");
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "MYEONJE_SAYU_GBCD", "1");
        		}
        		else if(myeonjaeYn == 0)
        		{
        		    if(this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKGWA_CD") == '1800')
        			{
        				this.dsMaster.setColumn(this.dsMaster.rowposition, "JEONHYEONGRYONAPBU_GBCD", "02");
        			}
        			else
        			{
        				this.dsMaster.setColumn(this.dsMaster.rowposition, "JEONHYEONGRYONAPBU_GBCD", "01");
        			}
        		}

        		return;
        	}
        	else
        	{
        		jaejiwonGbVal = 0;
        		if(this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKGWA_CD") == '1800')
        		{
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "JEONHYEONGRYONAPBU_GBCD", "02");
        		}
        		else
        		{
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "JEONHYEONGRYONAPBU_GBCD", "01");
        		}
        	}
        };

        this.postWebbrowser_close = function (obj,e)
        {
        	if (e.userdata != 'close')
        	{
        		obj.user_callback(e.userdata);
        	}
        	else
        	{
        		obj.parent.removeChild('Post');
        		obj.destroy();
        		obj = null;
        	}
        };

        //주소 검색
        function searchPost(postData)
        {
        	var addr	= "";
        	if (postData.userSelectedType == "R")
        	{
        		// 도로명주소
        		addr = postData.roadAddress;
        		this.parent.dsMaster.setColumn(this.parent.dsMaster.rowposition,'JUSO_GBCD','Y');
        	}
        	else if (postData.userSelectedType == "J")
        	{
        		// 지번주소
        		addr = postData.jibunAddress;
        		this.parent.dsMaster.setColumn(this.parent.dsMaster.rowposition,'JUSO_GBCD','N');
        	}

        	this.parent.edtJuso.set_value(addr); // 도로명/지번 주소
        	this.parent.edtPostNo.set_value(postData.zonecode); // 우편번호 - 5자리
        };

        //주민등록번호 중복 체크(신규나 수정)
        this.fn_RemoveDuplicatesArray = function (arr)
        {
        	var tempArr = [];
        	for (var i = 0; i < arr.length; i++)
        	{
        		if (tempArr.length == 0)
        		{
        			tempArr.push(arr[i]);
        		}
        		else
        		{
        			var duplicatesFlag = true;
        			for (var j = 0; j < tempArr.length; j++)
        			{
        				if (tempArr[j] == arr[i])
        				{
        					duplicatesFlag = false;
        					break;
        				}
        			}

        			if (duplicatesFlag)
        			{
        				tempArr.push(arr[i]);
        			}
        		}
        	}
        	return tempArr;
        }

        //수험생 고교졸업구분
        this.fn_BanyeongGb = function()
        {
        	var gogyojoleopYyyy = this.dsMaster.getColumn(this.dsMaster.rowposition,"GOGYOJOLEOP_YEJEONG_YYYY");
        	var gogyojoleopGbcd = this.dsMaster.getColumn(this.dsMaster.rowposition,"GOGYOJOLEOP_GBCD");

        	if(gogyojoleopYyyy == 1997)
        	{
        		console.log("1997년 2월 졸업자");
        		//1997년 2월 졸압자는 2학년 학기별 석차, 재적 또는 석차백분율 입력
        		banyeongGb = '1';
        	}
        	else if(gogyojoleopYyyy <= 1996)
        	{
        		console.log("1996년 2월 이전 졸업자");
        		//1996년 2월 이전 졸업자
        		banyeongGb = '2';
        	}
        	else if(gogyojoleopYyyy > 1997)
        	{
        		console.log("1997년 이후");
        		banyeongGb = '3';
        	}
        	else
        	{
        		//성적을 산출할 수 없는 자 - 등급입력(9등급)
        		banyeongGb = '4';
        	}
        	return banyeongGb;
        }

        // 실제로 DB에서 삭제하는 함수
        this.fn_RealDel = function()
        {
            var strSvc      = "Del";
            var strUrl      = "/prj/EN/Delete_1010203_T01_Real.do";
            var strInDs     = "dsMaster=dsMaster:u";
            var strOutDs    = "";
            var strArg      = "";
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;                                   //샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
            this.grdMaster.addEventHandler("oncellclick",this.grdMaster_oncellclick,this);
            this.cboHakgwa.addEventHandler("onitemchanged",this.fn_Juya,this);
            this.cboJuya.addEventHandler("onitemchanged",this.fn_Jeonhyeong,this);
            this.cboJeonhyeong.addEventHandler("onitemchanged",this.fn_SebuJeonhyeong,this);
            this.cboSebu.addEventHandler("onitemchanged",this.cboSebu_onitemchanged,this);
            this.cboGyeyeol.addEventHandler("onitemchanged",this.cboGyeyeol_onitemchanged,this);
            this.edtResNo1.addEventHandler("onkeyup",this.edtResNo1_onkeyup,this);
            this.edtResNo1.addEventHandler("onchanged",this.edtResNo1_onchanged,this);
            this.edtResNo2.addEventHandler("onchanged",this.edtResNo2_onchanged,this);
            this.edtGogyoJolubYYYY.addEventHandler("canchange",this.edtGogyoJolubYYYY_canchange,this);
            this.edtGogyoJolubYYYY.addEventHandler("onchanged",this.edtGogyoJolubYYYY_onchanged,this);
            this.btnGogyo.addEventHandler("onclick",this.btnGogyo_onclick,this);
            this.cboGogyoJolubGb.addEventHandler("onitemchanged",this.cboGogyoJolubGb_onitemchanged,this);
            this.cboGogyoJolubGb.addEventHandler("onmouseenter",this.cboGogyoJolubGb_onmouseenter,this);
            this.btnGosi.addEventHandler("onclick",this.btnGosi_onclick,this);
            this.cboJeonhyeongryo.addEventHandler("onitemchanged",this.cboJeonhyeongryo_onitemchanged,this);
            this.rdoDongui1.addEventHandler("onitemchanged",this.rdo_00_onitemchanged,this);
            this.rdoDongui3.addEventHandler("onitemchanged",this.rdo_00_onitemchanged,this);
            this.rdoDongui5.addEventHandler("onitemchanged",this.rdo_00_onitemchanged,this);
            this.rdoDongui2.addEventHandler("onitemchanged",this.rdo_00_onitemchanged,this);
            this.rdoDongui4.addEventHandler("onitemchanged",this.rdo_00_onitemchanged,this);
            this.rdoDongui6.addEventHandler("onitemchanged",this.rdo_00_onitemchanged,this);
            this.cboHabgyeokYn.addEventHandler("onitemchanged",this.cboHabgyeokYn_onitemchanged,this);
            this.cboMojip.addEventHandler("onitemchanged",this.fn_Hakgwa,this);
            this.rdoHwakin.addEventHandler("onitemchanged",this.rdo_00_onitemchanged,this);
            this.btnUpdate.addEventHandler("onclick",this.btnUpdate_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btn2cha.addEventHandler("onclick",this.btn2cha_onclick,this);
            this.spnYYYY.addEventHandler("onchanged",this.fn_MojipGb,this);
            this.grdDetail.addEventHandler("onheaddblclick",this.grdDetail_onheaddblclick,this);
            this.divDetail.form.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.divDetail.form.chkDeungGeub.addEventHandler("onchanged",this.divDetail_chkDeungGeub_onchanged,this);
            this.divDetail.form.chkDeungGeub.addEventHandler("onmouseenter",this.divDetail_chkDeungGeub_onmouseenter,this);
            this.divDetail.form.cbo1996.addEventHandler("onmouseenter",this.divDetail_cbo1996_onmouseenter,this);
            this.divDetail.form.cbo1996.addEventHandler("onitemchanged",this.divDetail_cbo1996_onitemchanged,this);
            this.btnJuso.addEventHandler("onclick",this.btnJuso_onclick,this);
            this.rdoDongui2_1.addEventHandler("onitemchanged",this.rdo_00_onitemchanged,this);
            this.btnIjeonSeongjeok.addEventHandler("onclick",this.btnIjeonSeongjeok_onclick,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsMaster.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
            this.dsJeomsu.addEventHandler("onrowposchanged",this.dsDetail_onrowposchanged,this);
        };
        this.loadIncludeScript("EN02_1010203_T01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
