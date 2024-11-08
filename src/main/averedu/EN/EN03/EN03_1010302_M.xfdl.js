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
            this.set_titletext("학생부 수기 성적관리");
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
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"RESULT_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"IJEON_SEONGJEOK_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"GOGYO_SEONGJEOK_IPRYEOK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"RES_NO2\" type=\"STRING\" size=\"256\"/><Column id=\"RES_NO1\" type=\"STRING\" size=\"256\"/><Column id=\"GOGYOJOLEOP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"GOGYOJOLEOP_YEJEONG_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"JEONHYEONG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JEONHYEONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOMSAENG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"10\"/><Column id=\"SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"2\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"10\"/><Column id=\"GWAMOK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"GWAMOK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"GWAMOK_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"ISU_UNIT\" type=\"STRING\" size=\"10\"/><Column id=\"SEONGCHWIDO\" type=\"STRING\" size=\"10\"/><Column id=\"SEOKCHA\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DONG_SEOKCHA\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JAEJEOK_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SEOKCHA_BAEKBUNYUL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"WON_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GWAMOK_AVG\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PYOJUNPYEONCHA\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"WON_DEUNGGEUP\" type=\"STRING\" size=\"10\"/><Column id=\"WON_DEUNGGEUP_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HWANSAN_DEUNGGEUP\" type=\"STRING\" size=\"10\"/><Column id=\"HWANSAN_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"IPRYEOK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"USUGWAMOK_SEONJEONG_YN\" type=\"STRING\" size=\"2\"/><Column id=\"UPDATE_YN\" type=\"STRING\" size=\"2\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"500\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"500\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONHYEONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOMSAENG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEONGJEOKMIIPRYEOK_YN\" type=\"STRING\" size=\"256\"/><Column id=\"GOGYO_SEONGJEOK_IPRYEOK_GBCD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BUNRYU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JEONHYEONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONHYEONG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"GOGYOJOLEOP_YEJEONG_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"GOGYO_SEONGJEOK_IPRYEOK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"GWAMOK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"GWAMOK_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"SEONGCHWIDO\" type=\"STRING\" size=\"256\"/><Column id=\"SEOKCHA\" type=\"STRING\" size=\"256\"/><Column id=\"JAEJEOK_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"SEOKCHA_BAEKBUNYUL\" type=\"STRING\" size=\"256\"/><Column id=\"WON_DEUNGGEUP\" type=\"STRING\" size=\"256\"/><Column id=\"HWANSAN_DEUNGGEUP\" type=\"STRING\" size=\"256\"/><Column id=\"HWANSAN_JEOMSU\" type=\"STRING\" size=\"256\"/><Column id=\"IPRYEOK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"IPRYEOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USUGWAMOK_SEONJEONG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"IPRYEOK_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"GOGYOJOLEOP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"BANYEONG_GB\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGoGyoSeongJeokCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gijunYyyy", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_hakgwaCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_juyaGbcd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_jeonhyeong", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"JEONHYEONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONHYEONG_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mojipGbcd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HYEONJAE_MOJIP_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("ds_copyInput", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"IN_IPSI_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"IN_MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"IN_SUHEOM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"IN_RES_NO1\" type=\"STRING\" size=\"256\"/><Column id=\"IN_RES_NO2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCopyIgeon", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"OUT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"OUT_MSG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDeungGeub", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSeongchwido", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds1996Jolup", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_reset", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"GOGYO_SEONGJEOK_IPRYEOK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"GOGYOJOLEOP_YEJEONG_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds21", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dInput", this);
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"GOGYOJOLEOP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"IPRYEOK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"GOGYOJOLEOP_YEJEONG_YYYY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdMaster","0","114",null,null,"1221","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsMaster");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"수험번호\"/><Cell col=\"1\" text=\"학생명\"/><Cell col=\"2\" text=\"전형구분\"/><Cell col=\"3\" text=\"졸업년도\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" editmaxlength=\"256\" text=\"bind:SUHEOM_NO\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:SUHEOMSAENG_NM\" editmaxlength=\"256\"/><Cell col=\"2\" text=\"bind:JEONHYEONG_NM\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"3\" text=\"bind:GOGYOJOLEOP_YEJEONG_YYYY\" displaytype=\"normal\" combodataset=\"ds_Hakgwa\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" edittype=\"none\"/><Cell col=\"4\" text=\"bind:IPSI_YYYY\"/><Cell col=\"5\" text=\"bind:MOJIP_GBCD\"/><Cell col=\"6\" text=\"bind:IPSI_YYYY\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01","418","127","30","100",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("30");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDetail",null,"156","1192",null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsDetail");
            obj._setContents("<Formats><Format id=\"default\"/><Format id=\"format00\"><Columns><Column size=\"48\"/><Column size=\"66\"/><Column size=\"76\"/><Column size=\"87\"/><Column size=\"74\"/><Column size=\"58\"/><Column size=\"58\"/><Column size=\"58\"/><Column size=\"58\"/><Column size=\"58\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"상태\"/><Cell col=\"1\" text=\"학년\"/><Cell col=\"2\" text=\"학기\"/><Cell col=\"3\" text=\"과목\"/><Cell col=\"4\" text=\"등급\"/><Cell col=\"5\" text=\"환산등급\"/><Cell col=\"6\" text=\"환산점수\"/><Cell col=\"7\" text=\"우수과목\"/><Cell col=\"8\" text=\"입력구분\"/><Cell col=\"9\" text=\"수정여부\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"expr:HAKNYEON+&apos;학년&apos;\"/><Cell col=\"2\" text=\"expr:HAKGI+&apos;학기&apos;\"/><Cell col=\"3\" text=\"bind:GWAMOK_GBNM\"/><Cell col=\"4\" text=\"bind:WON_DEUNGGEUP\" edittype=\"expr:dataset.parent.fn_GridType(IPRYEOK_GBCD, HAKNYEON, HAKGI) == true ? &quot;combo&quot; : &quot;none&quot; \" displaytype=\"expr:dataset.parent.fn_GridType(IPRYEOK_GBCD, HAKNYEON, HAKGI) == true ? &quot;combocontrol&quot; : &quot;normal&quot;\" combodataset=\"dsDeungGeub\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"5\" text=\"bind:HWANSAN_DEUNGGEUP\"/><Cell col=\"6\" text=\"bind:HWANSAN_JEOMSU\"/><Cell col=\"7\" text=\"bind:USUGWAMOK_SEONJEONG_YN\"/><Cell col=\"8\" text=\"bind:IPRYEOK_NM\"/><Cell col=\"9\" text=\"bind:UPDATE_YN\"/></Band></Format><Format id=\"format01\"><Columns><Column size=\"48\"/><Column size=\"66\"/><Column size=\"76\"/><Column size=\"87\"/><Column size=\"74\"/><Column size=\"58\"/><Column size=\"58\"/><Column size=\"58\"/><Column size=\"58\"/><Column size=\"58\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"상태\"/><Cell col=\"1\" text=\"학년\"/><Cell col=\"2\" text=\"학기\"/><Cell col=\"3\" text=\"과목\"/><Cell col=\"4\" text=\"성취도\"/><Cell col=\"5\" text=\"환산등급\"/><Cell col=\"6\" text=\"환산점수\"/><Cell col=\"7\" text=\"우수과목\"/><Cell col=\"8\" text=\"입력구분\"/><Cell col=\"9\" text=\"수정여부\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"expr:HAKNYEON+&apos;학년&apos;\"/><Cell col=\"2\" text=\"expr:HAKGI+&apos;학기&apos;\"/><Cell col=\"3\" text=\"bind:GWAMOK_GBNM\"/><Cell col=\"4\" text=\"bind:SEONGCHWIDO\" edittype=\"expr:dataset.parent.fn_GridType(IPRYEOK_GBCD, HAKNYEON, HAKGI) == true ? &quot;combo&quot; : &quot;none&quot; \" combodataset=\"dsSeongchwido\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\" displaytype=\"expr:dataset.parent.fn_GridType(IPRYEOK_GBCD, HAKNYEON, HAKGI) == true ? &quot;combocontrol&quot; : &quot;normal&quot;\"/><Cell col=\"5\" text=\"bind:HWANSAN_DEUNGGEUP\"/><Cell col=\"6\" text=\"bind:HWANSAN_JEOMSU\"/><Cell col=\"7\" text=\"bind:USUGWAMOK_SEONJEONG_YN\"/><Cell col=\"8\" text=\"bind:IPRYEOK_NM\"/><Cell col=\"9\" text=\"bind:UPDATE_YN\"/></Band></Format><Format id=\"format02\"><Columns><Column size=\"48\"/><Column size=\"66\"/><Column size=\"76\"/><Column size=\"87\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"74\"/><Column size=\"58\"/><Column size=\"58\"/><Column size=\"58\"/><Column size=\"58\"/><Column size=\"58\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"상태\"/><Cell col=\"1\" text=\"학년\"/><Cell col=\"2\" text=\"학기\"/><Cell col=\"3\" text=\"과목\"/><Cell col=\"4\" text=\"석차\"/><Cell col=\"5\" text=\"재적\"/><Cell col=\"6\" text=\"백분율\"/><Cell col=\"7\" text=\"성취도\"/><Cell col=\"8\" text=\"환산등급\"/><Cell col=\"9\" text=\"환산점수\"/><Cell col=\"10\" text=\"우수과목\"/><Cell col=\"11\" text=\"입력구분\"/><Cell col=\"12\" text=\"수정여부\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"expr:HAKNYEON\"/><Cell col=\"2\" text=\"expr:HAKGI\"/><Cell col=\"3\" text=\"bind:GWAMOK_GBNM\"/><Cell col=\"4\" text=\"bind:SEOKCHA\" displaytype=\"expr:IPRYEOK_TYPE == &quot;1&quot; ? &quot;maskeditcontrol&quot; : &quot;none&quot;\" edittype=\"expr:IPRYEOK_GBCD == &quot;1&quot; ? &quot;readonly&quot; : (IPRYEOK_TYPE == &quot;1&quot; ? &quot;mask&quot; : &quot;none&quot;)\" maskeditautoselect=\"true\" maskeditformat=\"####\" maskeditlimitbymask=\"both\"/><Cell col=\"5\" text=\"bind:JAEJEOK_CNT\" maskeditautoselect=\"true\" maskeditformat=\"####\" displaytype=\"expr:IPRYEOK_TYPE == &quot;1&quot; ? &quot;maskeditcontrol&quot; : &quot;none&quot;\" edittype=\"expr:IPRYEOK_GBCD == &quot;1&quot; ? &quot;readonly&quot; : (IPRYEOK_TYPE == &quot;1&quot; ? &quot;mask&quot; : &quot;none&quot;)\" maskeditlimitbymask=\"both\"/><Cell col=\"6\" text=\"bind:SEOKCHA_BAEKBUNYUL\"/><Cell col=\"7\" text=\"bind:SEONGCHWIDO\" displaytype=\"expr:IPRYEOK_TYPE == &quot;2&quot; ? &quot;combocontrol&quot; : &quot;none&quot;\" edittype=\"expr:IPRYEOK_GBCD == &quot;1&quot; ? &quot;none&quot; : (IPRYEOK_TYPE == &quot;2&quot; ? &quot;combo&quot; : &quot;none&quot;)\" combodataset=\"dsSeongchwido\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"8\" text=\"bind:HWANSAN_DEUNGGEUP\"/><Cell col=\"9\" text=\"bind:HWANSAN_JEOMSU\"/><Cell col=\"10\" text=\"bind:USUGWAMOK_SEONJEONG_YN\"/><Cell col=\"11\" text=\"bind:IPRYEOK_NM\"/><Cell col=\"12\" text=\"bind:UPDATE_YN\"/></Band></Format><Format id=\"format03\"><Columns><Column size=\"48\"/><Column size=\"66\"/><Column size=\"76\"/><Column size=\"87\"/><Column size=\"93\"/><Column size=\"74\"/><Column size=\"58\"/><Column size=\"58\"/><Column size=\"58\"/><Column size=\"58\"/><Column size=\"58\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"상태\"/><Cell col=\"1\" text=\"학년\"/><Cell col=\"2\" text=\"학기\"/><Cell col=\"3\" text=\"과목\"/><Cell col=\"4\" text=\"석차백분율(%)\"/><Cell col=\"5\" text=\"성취도\"/><Cell col=\"6\" text=\"환산등급\"/><Cell col=\"7\" text=\"환산점수\"/><Cell col=\"8\" text=\"우수과목\"/><Cell col=\"9\" text=\"입력구분\"/><Cell col=\"10\" text=\"수정여부\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"expr:HAKNYEON\"/><Cell col=\"2\" text=\"expr:HAKGI\"/><Cell col=\"3\" text=\"bind:GWAMOK_GBNM\"/><Cell col=\"4\" text=\"bind:SEOKCHA_BAEKBUNYUL\" displaytype=\"expr:IPRYEOK_TYPE == &quot;1&quot; ? &quot;maskeditcontrol&quot; : &quot;none&quot;\" edittype=\"expr:IPRYEOK_GBCD == &quot;1&quot; ? &quot;readonly&quot; : (IPRYEOK_TYPE == &quot;1&quot; ? &quot;mask&quot; : &quot;none&quot;)\" maskeditautoselect=\"true\" maskeditformat=\"###.##\" maskeditlimitbymask=\"both\"/><Cell col=\"5\" text=\"bind:SEONGCHWIDO\" displaytype=\"expr:IPRYEOK_TYPE == &quot;2&quot; ? &quot;combocontrol&quot; : &quot;none&quot;\" edittype=\"expr:IPRYEOK_GBCD == &quot;1&quot; ? &quot;none&quot; : (IPRYEOK_TYPE == &quot;2&quot; ? &quot;combo&quot; : &quot;none&quot;)\" combodataset=\"dsSeongchwido\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"6\" text=\"bind:HWANSAN_DEUNGGEUP\"/><Cell col=\"7\" text=\"bind:HWANSAN_JEOMSU\"/><Cell col=\"8\" text=\"bind:USUGWAMOK_SEONJEONG_YN\"/><Cell col=\"9\" text=\"bind:IPRYEOK_NM\"/><Cell col=\"10\" text=\"bind:UPDATE_YN\"/></Band></Format><Format id=\"format04\"><Columns><Column size=\"48\"/><Column size=\"66\"/><Column size=\"76\"/><Column size=\"87\"/><Column size=\"48\"/><Column size=\"74\"/><Column size=\"58\"/><Column size=\"58\"/><Column size=\"58\"/><Column size=\"58\"/><Column size=\"58\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"상태\"/><Cell col=\"1\" text=\"학년\"/><Cell col=\"2\" text=\"학기\"/><Cell col=\"3\" text=\"과목\"/><Cell col=\"4\" text=\"등급\"/><Cell col=\"5\" text=\"성취도\"/><Cell col=\"6\" text=\"환산등급\"/><Cell col=\"7\" text=\"환산점수\"/><Cell col=\"8\" text=\"우수과목\"/><Cell col=\"9\" text=\"입력구분\"/><Cell col=\"10\" text=\"수정여부\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"expr:HAKNYEON+&apos;학년&apos;\"/><Cell col=\"2\" text=\"expr:HAKGI+&apos;학기&apos;\"/><Cell col=\"3\" text=\"bind:GWAMOK_GBNM\"/><Cell col=\"4\" text=\"bind:WON_DEUNGGEUP\" displaytype=\"expr:dataset.parent.fn_GridType(IPRYEOK_GBCD, HAKNYEON, HAKGI) == true ? &quot;combocontrol&quot; : &quot;normal&quot;\" edittype=\"expr:dataset.parent.fn_GridType(IPRYEOK_GBCD, HAKNYEON, HAKGI) == true ? &quot;combo&quot; : &quot;none&quot; \" combodataset=\"dsDeungGeub\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"5\" text=\"bind:SEONGCHWIDO\" displaytype=\"expr:dataset.parent.fn_GridType(IPRYEOK_GBCD, HAKNYEON, HAKGI) == true ? &quot;combocontrol&quot; : &quot;normal&quot;\" edittype=\"expr:dataset.parent.fn_GridType(IPRYEOK_GBCD, HAKNYEON, HAKGI) == true ? &quot;combo&quot; : &quot;none&quot; \" combodataset=\"dsSeongchwido\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"6\" text=\"bind:HWANSAN_DEUNGGEUP\"/><Cell col=\"7\" text=\"bind:HWANSAN_JEOMSU\"/><Cell col=\"8\" text=\"bind:USUGWAMOK_SEONJEONG_YN\"/><Cell col=\"9\" text=\"bind:IPRYEOK_NM\"/><Cell col=\"10\" text=\"bind:UPDATE_YN\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","900","69","100","45",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("↑\r\n\r45\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","0","89",null,"22","1535",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("원서접수내역");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","117","88",null,"24","1441",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00",null,"89","155","22","1035",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("고교성적입력 및 조회");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt2",null,"88","82","24","941",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"69","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSearchJuya","911","9","100","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_codecolumn("JUYA_GBCD");
            obj.set_datacolumn("JUYA_NM");
            obj.set_innerdataset("ds_juyaGbcd");
            obj.set_displaynulltext("전체");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_04","830","9","68","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("주야구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_02","559","9","50","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("학과");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01","7","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("입시년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgwa","616","9","172","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_innerdataset("ds_hakgwaCd");
            obj.set_displaynulltext("전체");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","88","9","101","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_01_00","-33","37","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("수험번호");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchSuheomNo","88","36","171","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchName","377","36","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_01_00_00","313","37","50","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJeonhyeong","1131","9","140","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_codecolumn("JEONHYEONG_GBCD");
            obj.set_datacolumn("JEONHYEONG_NM");
            obj.set_innerdataset("ds_jeonhyeong");
            obj.set_displaynulltext("전체");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_04_00","1050","9","68","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("전형구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchMojip","377","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_codecolumn("MOJIP_GBCD");
            obj.set_datacolumn("MOJIP_NM");
            obj.set_innerdataset("ds_mojipGbcd");
            obj.set_displaynulltext("전체");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_02_00","297","10","70","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("모집구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkSearchNoSeongjeok","582","37","116","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("성적미입력자");
            obj.set_visible("true");
            obj.set_value("false");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_02_01","1312","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("입력구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboIpryeok","1391","9","140","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsGoGyoSeongJeokCd");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btn32Copy","1482","36","150","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("3학년 2학기 일괄 복사");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_tabstop("true");
            obj.set_visible("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_02","14","0","1440","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_01","14","58","1440","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00","78","1","10","68",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","1","27","68",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_02","26","31","1400","5",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 6pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01","259","1","56","68",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","367","1","10","68",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00","497","1","56","68",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("25");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","606","1","10","38",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("26");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00_00","788","1","56","38",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("27");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","901","1","10","35",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("28");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00_00_00","1011","1","56","38",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("29");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00","1121","1","10","35",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("30");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00_00_00_00","1271","1","56","38",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("31");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00","1381","1","10","35",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("32");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00","0","106","1620","8",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail",null,"114","1192","42","0",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","1","27","40",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","24","31","1150","9",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static01_01","24","0","1150","9",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static00",null,"9","80","23","958",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_text("환산등급");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static00_00",null,"8","78","23","772",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_text("환산점수");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtHwansanDeungGeub",null,"9","70","23","890",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtHwansanJeomsu",null,"9","70","23","700",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            obj.set_readonly("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new CheckBox("chkDeungGeub","27","10","116","20",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            obj.set_text("등급, 성취도");
            obj.set_visible("false");
            obj.set_value("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00","115","1","56","38",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("8");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","220","1","10","38",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00_00","300","1","56","38",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("10");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","410","1","10","38",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("stc_04","530","9","171","22",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("12");
            obj.set_text("1996년 졸업생 선택");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cbo1996","677","9","170","22",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("13");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("ds1996Jolup");
            obj.set_displaynulltext("전체");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00_00_00","490","1","56","38",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("14");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00","667","1","10","38",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("15");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00_00_00_00","847","1","56","38",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("16");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("stc_04_00","887","9","94","22",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("17");
            obj.set_text("2+1 & 위탁");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00","975","1","10","38",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("18");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cbo21","985","9","170","22",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("19");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("ds21");
            obj.set_displaynulltext("해당없음");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnIgeonCopy","1540","81",null,"25","0",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("이전성적복사");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_tabstop("true");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("학생부 수기 성적관리");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.cboSearchJuya","value","ds_input","JUYA_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.spnSearchYYYY","value","ds_input","IPSI_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboSearchHakgwa","value","ds_input","HAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboSearchJeonhyeong","value","ds_input","JEONHYEONG_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.cboSearchMojip","value","ds_input","MOJIP_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.chkSearchNoSeongjeok","value","ds_input","SEONGJEOKMIIPRYEOK_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.cboIpryeok","value","ds_input","GOGYO_SEONGJEOK_IPRYEOK_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.btn32Copy","enable","dsBindableButton","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divDetail.form.edtHwansanDeungGeub","value","dsJeomsu","CHONG_DEUNGGEUP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","Edit00_00","value","dsDetail_JEOMSU","CHONG_TOTAL_JEOMSU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divDetail.form.edtHwansanJeomsu","value","dsJeomsu","CHONG_TOTAL_JEOMSU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","btnIgeonCopy","enable","dsBindableButton","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divSearch.form.edtSearchName","value","ds_input","SUHEOMSAENG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divSearch.form.edtSearchSuheomNo","value","ds_input","SUHEOM_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divDetail.form.cbo21","value","dsMaster","GOGYOJOLEOP_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
            this._addPreloadList("data","","dsDetail");
            this._addPreloadList("data","","dsJeomsu");
            this._addPreloadList("data","","dsCopyIgeon");
            this._addPreloadList("data","","ds_reset");
        };
        
        // User Script
        this.registerScript("EN03_1010302_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): EN03_1010302_M.xfdl(학생부수기성적관리)
        * 작 성         일 명: 성연우
        * 작 성         일 자: 2021/04/21
        * 변 경         일 자:
        * 변 경         자 명:
        * 변경 및 수정 로그 : 일자별로 변경자 및 변경사항을 간략히 기술
        */
        /**********************************************************************
                01. 전처리 공통 함수 선언
        ***********************************************************************/
        var hyeonjaeMojip;
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
            var strDs    = "dsGoGyoSeongJeokCd|dsDeungGeub|dsSeongchwido|ds1996Jolup|ds21";      // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "01035|01048|01049|01050|01009";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "T|S|S|T|X";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
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
        	this.ds_hakgwaCd.insertRow(0);
        	this.ds_hakgwaCd.setColumn(0, "DEPT_CD", "");
        	this.ds_hakgwaCd.setColumn(0, "DEPT_NM", "전체");
        	this.divSearch.form.cboSearchHakgwa.set_index(0);

        	this.fn_IpsiMojipGb();
        }

        // 입시모집구분 가져오기
        this.fn_IpsiMojipGb = function()
        {
            var strSvc      = "IpsiMojipGb";
            var strUrl      = "prj/EN/EN_COM/Retrieve_MOJIPGBCD.do";
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

        // 모집구분 콤보박스 설정
        this.fn_PostIpsiMojipGb = function()
        {
        	var gubun;
        	for(var i=0; i<this.ds_mojipGbcd.rowcount; i++)
        	{
        		gubun = this.ds_mojipGbcd.getColumn(i, "HYEONJAE_MOJIP_YN");

        		if(gubun == 'Y')
        		{
        			var mojipGb = this.ds_mojipGbcd.getColumn(i, "MOJIP_GBCD");
        			this.divSearch.form.cboSearchMojip.set_value(mojipGb);
        			hyeonjaeMojip = mojipGb;
        		}
        	}

        	this.ds_mojipGbcd.insertRow(0);
        	this.ds_mojipGbcd.setColumn(0, "MOJIP_GBCD", "");
        	this.ds_mojipGbcd.setColumn(0, "MOJIP_NM", "전체");

        	if(hyeonjaeMojip == '1' || hyeonjaeMojip == '2')
        	{
        		this.divSearch.form.btn32Copy.set_visible(true);
        	}
        	else
        	{
        		this.divSearch.form.btn32Copy.set_visible(false);
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
        			case "IpsiMojipGb":
                            this.fn_PostIpsiMojipGb();
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
                    case "Copy32":
                            this.fn_PostCopy32();
                        break;
        			case "CopyIgeon":
                            this.fn_PostCopyIgeon();
                        break;
        			case "DeungGeub":
                            this.fn_Ret();
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
                case "save" :        // 저장
                        this.fn_Save();
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
        this.fn_Ret = function()
        {
            if(!this.fn_PreRet())
            {
                return false;
            }
            var strSvc      = "Ret";
            var strUrl      = "/prj/EN/EN03/Retrieve_1010302_M.do";
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
        }

        /**********************************************************************
                06. 조회 함수 선언(디테일 함수)
        ***********************************************************************/
        this.dsMaster_canrowposchange = function(obj,e)
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
        };

        this.dsMaster_onrowposchanged = function(obj,e)
        {
        	this.ds_dInput.setColumn(0,"IPSI_YYYY" ,this.dsMaster.getColumn(this.dsMaster.rowposition,"IPSI_YYYY"));
        	this.ds_dInput.setColumn(0,"MOJIP_GBCD" ,this.dsMaster.getColumn(this.dsMaster.rowposition,"MOJIP_GBCD"));
        	this.ds_dInput.setColumn(0,"SUHEOM_NO" ,this.dsMaster.getColumn(this.dsMaster.rowposition,"SUHEOM_NO"));
        	this.ds_dInput.setColumn(0,"GOGYOJOLEOP_GBCD" ,this.dsMaster.getColumn(this.dsMaster.rowposition,"GOGYOJOLEOP_GBCD"));
        	this.ds_dInput.setColumn(0,"IPRYEOK_GBCD" ,this.dsMaster.getColumn(this.dsMaster.rowposition,"GOGYO_SEONGJEOK_IPRYEOK_GBCD"));
        	this.ds_dInput.setColumn(0,"GOGYOJOLEOP_YEJEONG_YYYY" ,this.dsMaster.getColumn(this.dsMaster.rowposition,"GOGYOJOLEOP_YEJEONG_YYYY"));
        	this.divDetail.form.chkDeungGeub.set_value(false);
        	this.divDetail.form.edtHwansanDeungGeub.set_text('');
        	this.divDetail.form.edtHwansanJeomsu.set_text('');

        	if(this.dsMaster.getColumn(this.dsMaster.rowposition, "IJEON_SEONGJEOK_CNT") > 0)
        	{
        		this.btnIgeonCopy.set_visible(true);
        	}
        	else
        	{
        		this.btnIgeonCopy.set_visible(false);
        	}

        	if(this.dsMaster.rowcount > 0)
        	{
        		if(this.dsMaster.getColumn(this.dsMaster.rowposition, "GOGYO_SEONGJEOK_IPRYEOK_GBCD") == null || this.dsMaster.getColumn(this.dsMaster.rowposition, "GOGYO_SEONGJEOK_IPRYEOK_GBCD") == "")
        		{
        			this.alert("입력구분값이 없습니다. \n관리자에게 문의하세요.");
        			this.grdDetail.set_formatid("default");
        			this.divDetail.form.cbo1996.set_value('');
        			this.divDetail.form.cbo1996.set_enable(false);
        		}
        		else
        		{
        			// 1 : 1996년이전(백분율)
        			// 2 : 1996년이전(석차/재적)
        			// 3 : 1997년(2학년석차/재적)
        			// 4 : 1998년이후2007년(성취도)
        			// 5 : 08년이후현재(등급)
        			if(this.dsMaster.getColumn(this.dsMaster.rowposition, "GOGYO_SEONGJEOK_IPRYEOK_GBCD") == '1')
        			{
        				this.grdDetail.set_formatid("format03");
        				this.divDetail.form.cbo1996.set_value(this.dsMaster.getColumn(this.dsMaster.rowposition, "GOGYO_SEONGJEOK_IPRYEOK_GBCD"));
        				this.divDetail.form.cbo1996.set_enable(true);
        				this.divDetail.form.chkDeungGeub.set_visible(false);
        			}
        			else if(this.dsMaster.getColumn(this.dsMaster.rowposition, "GOGYO_SEONGJEOK_IPRYEOK_GBCD") == '2')
        			{
        				this.grdDetail.set_formatid("format02");
        				this.divDetail.form.cbo1996.set_value(this.dsMaster.getColumn(this.dsMaster.rowposition, "GOGYO_SEONGJEOK_IPRYEOK_GBCD"));
        				this.divDetail.form.cbo1996.set_enable(true);
        				this.divDetail.form.chkDeungGeub.set_visible(false);
        			}
        			else if(this.dsMaster.getColumn(this.dsMaster.rowposition, "GOGYO_SEONGJEOK_IPRYEOK_GBCD") == '3')
        			{
        				this.grdDetail.set_formatid("format02");
        				this.divDetail.form.cbo1996.set_value('');
        				this.divDetail.form.cbo1996.set_enable(false);
        				this.divDetail.form.chkDeungGeub.set_visible(false);
        			}
        			else if(this.dsMaster.getColumn(this.dsMaster.rowposition, "GOGYO_SEONGJEOK_IPRYEOK_GBCD") == '4')
        			{
        				this.grdDetail.set_formatid("format01");
        				this.divDetail.form.cbo1996.set_value('');
        				this.divDetail.form.cbo1996.set_enable(false);
        				this.divDetail.form.chkDeungGeub.set_visible(true);
        			}
        			else if(this.dsMaster.getColumn(this.dsMaster.rowposition, "GOGYO_SEONGJEOK_IPRYEOK_GBCD") == '5')
        			{
        				this.grdDetail.set_formatid("format00");
        				this.divDetail.form.cbo1996.set_value('');
        				this.divDetail.form.cbo1996.set_enable(false);
        				this.divDetail.form.chkDeungGeub.set_visible(true);
        			}
        			else if(this.dsMaster.getColumn(this.dsMaster.rowposition, "GOGYO_SEONGJEOK_IPRYEOK_GBCD") == '99')
        			{
        				this.grdDetail.set_formatid("format04");
        				this.divDetail.form.cbo1996.set_value('');
        				this.divDetail.form.cbo1996.set_enable(false);
        				this.divDetail.form.chkDeungGeub.set_visible(true);
        				this.divDetail.form.chkDeungGeub.set_value(true);
        			}
        		}
        	}

        	this.fn_DRet();
        };

        this.fn_DRet = function()
        {
            var strSvc      = "DRet";
            var strUrl      = "/prj/EN/EN03/Retrieve_1010302_M_Detail.do";
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
        }

        /**
         * 기능 : 조회 후 실행
         */
        this.fn_PostDRet = function()
        {
        	this.gfn_getRowCount(this.staRowCnt2,this.dsDetail);
        };

        /**********************************************************************
                07. 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function()
        {
            if(!this.gfn_isUpdate(this.dsDetail))
            {
                this.gfn_alert("변경된 이력이 없습니다.","저장정보","","question");
                return false;
            }

        	var banyeongGb = this.fn_BanyeongGb();
        	var rowNo = this.dsMaster.rowposition;
        	var mojipGb = this.dsMaster.getColumn(rowNo, "MOJIP_GBCD");

        	for(i=0; i<this.dsDetail.rowcount; i++)
        	{
        		this.dsDetail.setColumn(i, "IPSI_YYYY", this.dsMaster.getColumn(rowNo, "IPSI_YYYY"));
        		this.dsDetail.setColumn(i, "MOJIP_GBCD", mojipGb);
        		this.dsDetail.setColumn(i, "SUHEOM_NO", this.dsMaster.getColumn(rowNo, "SUHEOM_NO"));
        		this.dsDetail.setColumn(i, "GOGYOJOLEOP_GBCD", this.dsMaster.getColumn(rowNo, "GOGYOJOLEOP_GBCD"));
        		this.dsDetail.setColumn(i, "BANYEONG_GB", banyeongGb);
        	}

        	if(hyeonjaeMojip != mojipGb){
        		this.alert('현재 모집중인 대상자만 수정이 가능합니다.');
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
            var strUrl      = "/prj/EN/EN03/Save_1010302_M.do";
            var strInDs     = "ds_input=ds_input:a ";
                strInDs    += "dsDetail=dsDetail:a";
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
        };
        /**
         *      기능 : 저장시 후처리
         */
        this.fn_PostSave = function()
        {
            this.gfn_getRowCount(this.staRowCnt ,this.dsMaster);
        };

        /**********************************************************************
                08. 팁
        ***********************************************************************/
        this.fn_Tip = function()
        {
        	this.alert("도움말 준비중입니다.");
        };

        /**********************************************************************
                09. 3-2 일괄복사
        ***********************************************************************/
        this.divSearch_btn32Copy_onclick = function(obj,e)
        {
        	 var result = this.gfn_confirm( "현재 모집중인 성적만 복사합니다. \n진행 하시겠습니까?", "저장","", "question" );
             if(result == 0)
             {
                 return false;
             }

        	 this.fn_Copy32();
        };

        this.fn_Copy32 = function()
        {
        	var strSvc      = "Copy32";
        	var strUrl      = "/prj/EN/EN03/Save_1010302_M_Copy32.do";
        	var strInDs     = "ds_input=ds_input:a ";
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
        }

        this.fn_PostCopy32 = function()
        {
        	this.alert("3학년 2학기 성적이 일괄 복사되었습니다");
        	this.fn_Ret();
        }

        /**********************************************************************
                10. 이전성적복사
        ***********************************************************************/
        this.btnIgeonCopy_onclick = function(obj,e)
        {
        	var nRow = this.dsMaster.rowposition;
        	var mojipGb = this.dsMaster.getColumn(nRow, "MOJIP_GBCD");
        	this.ds_copyInput.setColumn(0, "IN_IPSI_YYYY", this.dsMaster.getColumn(nRow, "IPSI_YYYY"));
        	this.ds_copyInput.setColumn(0, "IN_MOJIP_GBCD", mojipGb);
        	this.ds_copyInput.setColumn(0, "IN_SUHEOM_NO", this.dsMaster.getColumn(nRow, "SUHEOM_NO"));
        	this.ds_copyInput.setColumn(0, "IN_RES_NO1", this.dsMaster.getColumn(nRow, "RES_NO1"));
        	this.ds_copyInput.setColumn(0, "IN_RES_NO2", this.dsMaster.getColumn(nRow, "RES_NO2"));

        	if(hyeonjaeMojip != mojipGb){
        		this.alert('현재 모집중인 대상자만 수정이 가능합니다.');
        		return false;
        	}

        	var result = this.gfn_confirm( "이전성적복사 시 기존 성적은 삭제됩니다. \n진행 하시겠습니까?", "저장","", "question" );
            if(result == false)
            {
                return false;
            }

        	this.fn_CopyIgeon();
        };

        this.fn_CopyIgeon = function()
        {
        	var strSvc      = "CopyIgeon";
        	var strUrl      = "/prj/EN/EN03/Save_1010302_M_CopyIgeon.do";
        	var strInDs     = "ds_copyInput=ds_copyInput:a ";
        	var strOutDs    = "dsCopyIgeon=dsCopyIgeon";
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

        this.fn_PostCopyIgeon = function()
        {
        	if(this.dsCopyIgeon.getColumn(0, "OUT_CODE") == '-1')
        	{
        		this.alert('작동중 문제가 발생되었습니다. \n 같은 현상이 반복된다면 관리자에게 문의하세요.');
        	}
        	else
        	{
        		this.alert('복사 되었습니다.');
        		this.fn_Ret();
        	}
        }

        /**********************************************************************
                11. 등급, 성취도 변경
        ***********************************************************************/
        this.divDetail_chkDeungGeub_onchanged = function(obj,e)
        {
        	this.ds_reset.deleteAll();

        	var rowNo = this.dsMaster.rowposition;
        	var mojipGb = this.dsMaster.getColumn(rowNo, "MOJIP_GBCD");

        	this.ds_reset.addRow();
        	this.ds_reset.setColumn(0, "IPSI_YYYY", this.dsMaster.getColumn(rowNo, "IPSI_YYYY"));
        	this.ds_reset.setColumn(0, "MOJIP_GBCD", mojipGb);
        	this.ds_reset.setColumn(0, "GOGYO_SEONGJEOK_IPRYEOK_GBCD", this.dsMaster.getColumn(rowNo, "GOGYO_SEONGJEOK_IPRYEOK_GBCD"));
        	this.ds_reset.setColumn(0, "GOGYOJOLEOP_YEJEONG_YYYY", this.dsMaster.getColumn(rowNo, "GOGYOJOLEOP_YEJEONG_YYYY"));
        	this.ds_reset.setColumn(0, "SUHEOM_NO", this.dsMaster.getColumn(rowNo, "SUHEOM_NO"));

        	if(hyeonjaeMojip != mojipGb)
        	{
        		this.alert("현재 모집중인 대상자만 수정 가능합니다.");
        		this.divDetail.form.chkDeungGeub.set_value(e.prevalue);
        		return false;
        	}
        	else
        	{
        		// 체크해제시
        		if(e.postvalue == false)
        		{
        			if(this.ds_reset.getColumn(0, "GOGYOJOLEOP_YEJEONG_YYYY") < 2000)
        			{
        				this.ds_reset.setColumn(0, "GOGYO_SEONGJEOK_IPRYEOK_GBCD", "4");
        			}
        			else
        			{
        				this.ds_reset.setColumn(0, "GOGYO_SEONGJEOK_IPRYEOK_GBCD", "5");
        			}
        		}
        		// 체크시
        		else
        		{
        			this.ds_reset.setColumn(0, "GOGYO_SEONGJEOK_IPRYEOK_GBCD", "99");
        		}

        		if(this.confirm("변경 시 기존 성적은 사라집니다. \n진행 하시겠습니까?"))
        		{
        			// 체크해제시
        			if(obj.value == false)
        			{
        				// 고교졸업예정년도가 2000년 이전일때
        				if(this.ds_reset.getColumn(0, "GOGYO_SEONGJEOK_IPRYEOK_GBCD" == '4'))
        				{
        					this.grdDetail.set_formatid("format01");
        					this.divDetail.form.cbo1996.set_value('');
        					this.divDetail.form.cbo1996.set_enable(false);
        					this.divDetail.form.chkDeungGeub.set_visible(true);
        				}
        				// 고교졸업예정년도가 2000년 이후일때
        				else
        				{
        					this.grdDetail.set_formatid("format00");
        					this.divDetail.form.cbo1996.set_value('');
        					this.divDetail.form.cbo1996.set_enable(false);
        					this.divDetail.form.chkDeungGeub.set_visible(true);
        				}
        			}
        			// 체크시
        			else if(obj.value == true)
        			{
        				this.grdDetail.set_formatid("format04");
        				this.divDetail.form.cbo1996.set_value('');
        				this.divDetail.form.cbo1996.set_enable(false);
        				this.divDetail.form.chkDeungGeub.set_visible(true);
        				this.divDetail.form.chkDeungGeub.set_value(true);
        			}
        			this.fn_Reset();
        		}
        		// 취소 시
        		else
        		{
        			this.divDetail.form.chkDeungGeub.set_value(e.prevalue);
        		}
        	}
        };

        /**********************************************************************
                12. 1996년 졸업생 변경
        ***********************************************************************/
        this.divDetail_cbo1996_onitemchanged = function(obj,e)
        {
        	this.ds_reset.deleteAll();

        	var rowNo = this.dsMaster.rowposition;
        	var mojipGb = this.dsMaster.getColumn(rowNo, "MOJIP_GBCD");

        	this.ds_reset.addRow();
        	this.ds_reset.setColumn(0, "IPSI_YYYY", this.dsMaster.getColumn(rowNo, "IPSI_YYYY"));
        	this.ds_reset.setColumn(0, "MOJIP_GBCD", mojipGb);
        	this.ds_reset.setColumn(0, "SUHEOM_NO", this.dsMaster.getColumn(rowNo, "SUHEOM_NO"));

        	if(hyeonjaeMojip != mojipGb)
        	{
        		this.alert("현재 모집중인 대상자만 수정 가능합니다.");
        		obj.set_value(e.prevalue);
        		return false;
        	}
        	else
        	{
        		if(this.confirm("변경 시 기존 성적은 사라집니다. \n진행 하시겠습니까?"))
        		{
        			this.ds_reset.setColumn(0, "GOGYO_SEONGJEOK_IPRYEOK_GBCD", obj.value);

        			// 백분율
        			if(obj.value == '1')
        			{
        				this.grdDetail.set_formatid('format03');
        			}
        			// 석차/재적
        			else if(obj.value == '2')
        			{
        				this.grdDetail.set_formatid('format02');
        			}
        			this.fn_Reset();
        		}
        		// 취소 시
        		else
        		{
        			obj.set_value(e.prevalue);
        		}
        	}
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

        // 입시년도가 바뀔때마다 모집구분 재조회
        this.divSearch_spnSearchYYYY_onchanged = function(obj,e)
        {
        	this.fn_IpsiMojipGb();
        };

        // 학과변경시 주야구분이 세팅됨
        this.divSearch_cboSearchHakgwa_onitemchanged = function(obj,e)
        {
        	this.ds_juyaGbcd.deleteAll();
        	this.ds_jeonhyeong.deleteAll();

        	if(this.ds_input.getColumn(0, "HAKGWA_CD") != '')
        	{
        		var strSvc      = "";
        		var strUrl      = "prj/EN/EN03/Retrieve_JUYAGBCD.do";
        		var strInDs     = "ds_input=ds_input";
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
        	this.ds_juyaGbcd.setColumn(0, "JUYA_NM", "전체");
        	this.divSearch.form.cboSearchJuya.set_index(0);

        	this.ds_jeonhyeong.insertRow(0);
        	this.ds_jeonhyeong.setColumn(0, "JEONHYEONG_GBCD", "");
        	this.ds_jeonhyeong.setColumn(0, "JEONHYEONG_NM", "전체");
        	this.divSearch.form.cboSearchJeonhyeong.set_index(0);
        };

        // 주야구분 변경시 전형구분이 세팅됨
        this.divSearch_cboSearchJuya_onitemchanged = function(obj,e)
        {
        	this.ds_jeonhyeong.deleteAll();

        	if(this.ds_input.getColumn(0, "JUYA_GBCD") != '')
        	{
        		var strSvc      = "";
        		var strUrl      = "prj/EN/EN03/Retrieve_JEONHYEONG.do";
        		var strInDs     = "ds_input=ds_input";
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
        	this.ds_jeonhyeong.setColumn(0, "JEONHYEONG_NM", "전체");
        	this.divSearch.form.cboSearchJeonhyeong.set_index(0);
        };

        // 그리드 에디트 타입 구분 함수
        this.fn_GridType = function(IPRYEOK_GBCD, HAKNYEON, HAKGI)
        {
        	var nRow = this.dsMaster.rowposition;
        	var IPSI_YYYY = this.dsMaster.getColumn(nRow,"IPSI_YYYY");
        	var MOJIP_GBCD = this.dsMaster.getColumn(nRow,"MOJIP_GBCD");

        	if(IPSI_YYYY != ""){
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

        // 등급 성취도, 1996년 졸업생 선택 변경 함수
        this.fn_Reset = function()
        {
        	var strSvc      = "Reset";
        	var strUrl      = "/prj/EN/EN03/Save_1010302_M_Reset.do";
        	var strInDs     = "ds_reset=ds_reset";
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
        }

        // 수험생 고교졸업구분
        this.fn_BanyeongGb = function()
        {
        	var gogyojoleopYyyy = this.dsMaster.getColumn(this.dsMaster.rowposition, "GOGYOJOLEOP_YEJEONG_YYYY");
        	var gogyojoleopGbcd = this.dsMaster.getColumn(this.dsMaster.rowposition, "GOGYOJOLEOP_GBCD");

        	if(gogyojoleopYyyy == 1997)
        	{
        		// 1997년 2월 졸업자는 2학년 학기별 석차, 재적 또는 석차백분율 입력
        		banyeongGb = '1';
        	}
        	else if(gogyojoleopYyyy <= 1996)
        	{
        		// 1996년 2월 이전 졸업자
        		banyeongGb = '2';
        	}
        	else if(gogyojoleopYyyy > 1997)
        	{
        		// 1997년 이후 졸업자
        		banyeongGb = '3';
        	}
        	else
        	{
        		// 성적을 산출할 수 없는 자 - 등급입력(9등급)
        		banyeongGb = '4';
        	}
        	return banyeongGb;
        }

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
        	return this.gfn_isUpdate(this.dsDetail);
        };

        /**********************************************************************
                14. 검색창 엔터키 조회
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

        this.divSearch_cboIpryeok_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"GOGYO_SEONGJEOK_IPRYEOK_GBCD",obj.value);
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

        this.divSearch_edtSearchName_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"SUHEOMSAENG_NM",obj.value);
        		this.fn_Ret();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("oncellclick",this.grdMaster_oncellclick,this);
            this.grdMaster.addEventHandler("onkeyup",this.grdMaster_onkeyup,this);
            this.divSearch.form.cboSearchJuya.addEventHandler("onitemchanged",this.divSearch_cboSearchJuya_onitemchanged,this);
            this.divSearch.form.cboSearchJuya.addEventHandler("onkeydown",this.divSearch_cboSearchJuya_onkeydown,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onitemchanged",this.divSearch_cboSearchHakgwa_onitemchanged,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onkeydown",this.divSearch_cboSearchHakgwa_onkeydown,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onchanged",this.divSearch_spnSearchYYYY_onchanged,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onkeydown",this.divSearch_spnSearchYYYY_onkeydown,this);
            this.divSearch.form.edtSearchSuheomNo.addEventHandler("onkeydown",this.divSearch_edtSearchSuheomNo_onkeydown,this);
            this.divSearch.form.edtSearchName.addEventHandler("onkeydown",this.divSearch_edtSearchName_onkeydown,this);
            this.divSearch.form.cboSearchJeonhyeong.addEventHandler("onkeydown",this.divSearch_cboSearchJeonhyeong_onkeydown,this);
            this.divSearch.form.cboSearchMojip.addEventHandler("onkeydown",this.divSearch_cboSearchMojip_onkeydown,this);
            this.divSearch.form.cboIpryeok.addEventHandler("onkeydown",this.divSearch_cboIpryeok_onkeydown,this);
            this.divSearch.form.btn32Copy.addEventHandler("onclick",this.divSearch_btn32Copy_onclick,this);
            this.divDetail.form.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.divDetail.form.chkDeungGeub.addEventHandler("onchanged",this.divDetail_chkDeungGeub_onchanged,this);
            this.divDetail.form.cbo1996.addEventHandler("onitemchanged",this.divDetail_cbo1996_onitemchanged,this);
            this.divDetail.form.cbo21.addEventHandler("onitemchanged",this.divSearch_cboSearchJuya_onitemchanged,this);
            this.btnIgeonCopy.addEventHandler("onclick",this.btnIgeonCopy_onclick,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsMaster.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
            this.dsJeomsu.addEventHandler("onrowposchanged",this.dsDetail_onrowposchanged,this);
            this.dsCopyIgeon.addEventHandler("onrowposchanged",this.dsDetail_onrowposchanged,this);
        };
        this.loadIncludeScript("EN03_1010302_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
