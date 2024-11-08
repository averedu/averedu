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
            this.set_titletext("권한관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTDetail", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"LVL\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"32\"/><Column id=\"AUTH_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CHK\" type=\"STRING\" size=\"32\"/><Column id=\"REG_YN\" type=\"STRING\" size=\"32\"/><Column id=\"OUTPUT_YN\" type=\"STRING\" size=\"32\"/><Column id=\"DOWN_YN\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTMaster", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"32\"/><Column id=\"AUTH_CD\" type=\"STRING\" size=\"32\"/><Column id=\"TAUTH_CD\" type=\"STRING\" size=\"32\"/><Column id=\"AUTH_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"AUTH_CD_DC\" type=\"STRING\" size=\"32\"/><Column id=\"AUTH_USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"REG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"REG_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"MOD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MOD_DT\" type=\"DATETIME\" size=\"17\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGYn", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"SORT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ADDR\" type=\"STRING\" size=\"32\"/><Column id=\"CD_DC\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"32\"/><Column id=\"REF_2\" type=\"STRING\" size=\"32\"/><Column id=\"REF_3\" type=\"STRING\" size=\"32\"/><Column id=\"REF_4\" type=\"STRING\" size=\"32\"/><Column id=\"REF_5\" type=\"STRING\" size=\"32\"/><Column id=\"REF_6\" type=\"STRING\" size=\"32\"/><Column id=\"REF_7\" type=\"STRING\" size=\"32\"/><Column id=\"REF_8\" type=\"STRING\" size=\"32\"/><Column id=\"REF_9\" type=\"STRING\" size=\"32\"/><Column id=\"REF_10\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"REG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"REG_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"MOD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MOD_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"AUTO_PLUS\" type=\"BIGDECIMAL\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"LVL\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"32\"/><Column id=\"AUTH_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PARENT_MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"32\"/><Column id=\"REG_YN\" type=\"STRING\" size=\"32\"/><Column id=\"OUTPUT_YN\" type=\"STRING\" size=\"32\"/><Column id=\"DOWN_YN\" type=\"STRING\" size=\"32\"/><Column id=\"IS_NEW\" type=\"STRING\" size=\"256\"/><Column id=\"IS_RET\" type=\"STRING\" size=\"256\"/><Column id=\"IS_SAVE\" type=\"STRING\" size=\"256\"/><Column id=\"IS_DEL\" type=\"STRING\" size=\"256\"/><Column id=\"IS_EXCEL\" type=\"STRING\" size=\"256\"/><Column id=\"IS_PRINT\" type=\"STRING\" size=\"256\"/><Column id=\"IS_CONFIRM\" type=\"STRING\" size=\"256\"/><Column id=\"IS_TMP1\" type=\"STRING\" size=\"256\"/><Column id=\"IS_TMP2\" type=\"STRING\" size=\"256\"/><Column id=\"IS_TMP3\" type=\"STRING\" size=\"256\"/><Column id=\"TMP1_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TMP2_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TMP3_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input1", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"AUTH_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CO_CD\"/><Col id=\"AUTH_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"CO_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster", this);
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"32\"/><Column id=\"AUTH_CD\" type=\"STRING\" size=\"32\"/><Column id=\"TAUTH_CD\" type=\"STRING\" size=\"32\"/><Column id=\"AUTH_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"AUTH_CD_DC\" type=\"STRING\" size=\"32\"/><Column id=\"AUTH_USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"REG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"REG_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"MOD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MOD_DT\" type=\"DATETIME\" size=\"17\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetailTemp", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"LVL\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"32\"/><Column id=\"AUTH_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PARENT_MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"32\"/><Column id=\"REG_YN\" type=\"STRING\" size=\"32\"/><Column id=\"OUTPUT_YN\" type=\"STRING\" size=\"32\"/><Column id=\"DOWN_YN\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds2Level", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"LVL\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"32\"/><Column id=\"AUTH_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PARENT_MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"32\"/><Column id=\"REG_YN\" type=\"STRING\" size=\"32\"/><Column id=\"OUTPUT_YN\" type=\"STRING\" size=\"32\"/><Column id=\"DOWN_YN\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds3Level", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"LVL\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"32\"/><Column id=\"AUTH_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PARENT_MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"32\"/><Column id=\"REG_YN\" type=\"STRING\" size=\"32\"/><Column id=\"OUTPUT_YN\" type=\"STRING\" size=\"32\"/><Column id=\"DOWN_YN\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds4Level", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"LVL\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"32\"/><Column id=\"AUTH_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PARENT_MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"32\"/><Column id=\"REG_YN\" type=\"STRING\" size=\"32\"/><Column id=\"OUTPUT_YN\" type=\"STRING\" size=\"32\"/><Column id=\"DOWN_YN\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDeptList", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"SELECT\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UP_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_CD_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_LV\" type=\"STRING\" size=\"256\"/><Column id=\"SORT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDeptDetail", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_DEPT_INCLS_GBCD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inputDept", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"AUTH_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("Tab00","354","5",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("TabpageMenu",this.Tab00);
            obj.set_text("메뉴 권한 등록");
            this.Tab00.addChild(obj.name, obj);

            obj = new Grid("grdDetail","0","0",null,null,"0","0",null,null,null,null,this.Tab00.TabpageMenu.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsDetail");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseexpandkey("true");
            obj.set_treeuseimage("true");
            obj.set_cssclass("grd_WF_MenuListX");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"38\" band=\"left\"/><Column size=\"34\" band=\"left\"/><Column size=\"259\" band=\"left\"/><Column size=\"73\" band=\"left\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"No.\"/><Cell col=\"2\" text=\"설명\"/><Cell col=\"3\" text=\"메뉴코드\"/><Cell col=\"4\" text=\"신규\"/><Cell col=\"5\" text=\"조회\"/><Cell col=\"6\" text=\"저장\"/><Cell col=\"7\" text=\"삭제\"/><Cell col=\"8\" text=\"엑셀\"/><Cell col=\"9\" text=\"출력\"/><Cell col=\"10\" text=\"확정\"/><Cell col=\"11\" text=\"공용1\"/><Cell col=\"12\" text=\"공용2\"/><Cell col=\"13\" text=\"공용3\"/><Cell col=\"14\" text=\"공용1명\"/><Cell col=\"15\" text=\"공용2명\"/><Cell col=\"16\" text=\"공용3명\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" editmaxlength=\"1\"/><Cell col=\"1\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:MENU_NM\" displaytype=\"treeitemcontrol\" textAlign=\"left\" treelevel=\"bind:LVL\" treestartlevel=\"1\" edittype=\"tree\"/><Cell col=\"3\" text=\"bind:MENU_ID\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"4\" text=\"bind:IS_NEW\" displaytype=\"expr:PROG_FG == &apos;0&apos; ? &apos;none&apos; : (PROG_FG == &apos;1&apos; &amp;&amp; CHK == &apos;1&apos; ? &apos;checkboxcontrol&apos; : &apos;none&apos;)\" edittype=\"expr:PROG_FG == &apos;0&apos; ? &apos;none&apos; : (PROG_FG == &apos;1&apos; &amp;&amp; CHK == &apos;1&apos; ? &apos;checkbox&apos; : &apos;none&apos;)\"/><Cell col=\"5\" text=\"bind:IS_RET\" displaytype=\"expr:PROG_FG == &apos;0&apos; ? &apos;none&apos; : (PROG_FG == &apos;1&apos; &amp;&amp; CHK == &apos;1&apos; ? &apos;checkboxcontrol&apos; : &apos;none&apos;)\" edittype=\"expr:PROG_FG == &apos;0&apos; ? &apos;none&apos; : (PROG_FG == &apos;1&apos; &amp;&amp; CHK == &apos;1&apos; ? &apos;checkbox&apos; : &apos;none&apos;)\"/><Cell col=\"6\" text=\"bind:IS_SAVE\" displaytype=\"expr:PROG_FG == &apos;0&apos; ? &apos;none&apos; : (PROG_FG == &apos;1&apos; &amp;&amp; CHK == &apos;1&apos; ? &apos;checkboxcontrol&apos; : &apos;none&apos;)\" edittype=\"expr:PROG_FG == &apos;0&apos; ? &apos;none&apos; : (PROG_FG == &apos;1&apos; &amp;&amp; CHK == &apos;1&apos; ? &apos;checkbox&apos; : &apos;none&apos;)\"/><Cell col=\"7\" text=\"bind:IS_DEL\" displaytype=\"expr:PROG_FG == &apos;0&apos; ? &apos;none&apos; : (PROG_FG == &apos;1&apos; &amp;&amp; CHK == &apos;1&apos; ? &apos;checkboxcontrol&apos; : &apos;none&apos;)\" edittype=\"expr:PROG_FG == &apos;0&apos; ? &apos;none&apos; : (PROG_FG == &apos;1&apos; &amp;&amp; CHK == &apos;1&apos; ? &apos;checkbox&apos; : &apos;none&apos;)\"/><Cell col=\"8\" text=\"bind:IS_EXCEL\" displaytype=\"expr:PROG_FG == &apos;0&apos; ? &apos;none&apos; : (PROG_FG == &apos;1&apos; &amp;&amp; CHK == &apos;1&apos; ? &apos;checkboxcontrol&apos; : &apos;none&apos;)\" edittype=\"expr:PROG_FG == &apos;0&apos; ? &apos;none&apos; : (PROG_FG == &apos;1&apos; &amp;&amp; CHK == &apos;1&apos; ? &apos;checkbox&apos; : &apos;none&apos;)\"/><Cell col=\"9\" text=\"bind:IS_PRINT\" displaytype=\"expr:PROG_FG == &apos;0&apos; ? &apos;none&apos; : (PROG_FG == &apos;1&apos; &amp;&amp; CHK == &apos;1&apos; ? &apos;checkboxcontrol&apos; : &apos;none&apos;)\" edittype=\"expr:PROG_FG == &apos;0&apos; ? &apos;none&apos; : (PROG_FG == &apos;1&apos; &amp;&amp; CHK == &apos;1&apos; ? &apos;checkbox&apos; : &apos;none&apos;)\"/><Cell col=\"10\" text=\"bind:IS_CONFIRM\" displaytype=\"expr:PROG_FG == &apos;0&apos; ? &apos;none&apos; : (PROG_FG == &apos;1&apos; &amp;&amp; CHK == &apos;1&apos; ? &apos;checkboxcontrol&apos; : &apos;none&apos;)\" edittype=\"expr:PROG_FG == &apos;0&apos; ? &apos;none&apos; : (PROG_FG == &apos;1&apos; &amp;&amp; CHK == &apos;1&apos; ? &apos;checkbox&apos; : &apos;none&apos;)\"/><Cell col=\"11\" text=\"bind:IS_TMP1\" displaytype=\"expr:PROG_FG == &apos;0&apos; ? &apos;none&apos; : (PROG_FG == &apos;1&apos; &amp;&amp; CHK == &apos;1&apos; ? &apos;checkboxcontrol&apos; : &apos;none&apos;)\" edittype=\"expr:PROG_FG == &apos;0&apos; ? &apos;none&apos; : (PROG_FG == &apos;1&apos; &amp;&amp; CHK == &apos;1&apos; ? &apos;checkbox&apos; : &apos;none&apos;)\"/><Cell col=\"12\" text=\"bind:IS_TMP2\" displaytype=\"expr:PROG_FG == &apos;0&apos; ? &apos;none&apos; : (PROG_FG == &apos;1&apos; &amp;&amp; CHK == &apos;1&apos; ? &apos;checkboxcontrol&apos; : &apos;none&apos;)\" edittype=\"expr:PROG_FG == &apos;0&apos; ? &apos;none&apos; : (PROG_FG == &apos;1&apos; &amp;&amp; CHK == &apos;1&apos; ? &apos;checkbox&apos; : &apos;none&apos;)\"/><Cell col=\"13\" text=\"bind:IS_TMP3\" displaytype=\"expr:PROG_FG == &apos;0&apos; ? &apos;none&apos; : (PROG_FG == &apos;1&apos; &amp;&amp; CHK == &apos;1&apos; ? &apos;checkboxcontrol&apos; : &apos;none&apos;)\" edittype=\"expr:PROG_FG == &apos;0&apos; ? &apos;none&apos; : (PROG_FG == &apos;1&apos; &amp;&amp; CHK == &apos;1&apos; ? &apos;checkbox&apos; : &apos;none&apos;)\"/><Cell col=\"14\" edittype=\"expr:IS_TMP1 == &apos;1&apos; ? &apos;text&apos; : &apos;none&apos;\" displaytype=\"expr:PROG_FG == &apos;0&apos; ? &apos;none&apos; : IS_TMP1 ==&apos;1&apos; ? &apos;editcontrol&apos; : &apos;none&apos;\" text=\"bind:TMP1_NAME\" textAlign=\"left\"/><Cell col=\"15\" edittype=\"expr:IS_TMP2 == &apos;1&apos; ? &apos;text&apos; : &apos;none&apos;\" displaytype=\"expr:PROG_FG == &apos;0&apos; ? &apos;none&apos; : IS_TMP2 ==&apos;1&apos; ? &apos;editcontrol&apos; : &apos;none&apos;\" text=\"bind:TMP2_NAME\" textAlign=\"left\"/><Cell col=\"16\" edittype=\"expr:IS_TMP3 == &apos;1&apos; ? &apos;text&apos; : &apos;none&apos;\" displaytype=\"expr:PROG_FG == &apos;0&apos; ? &apos;none&apos; : IS_TMP3 ==&apos;1&apos; ? &apos;editcontrol&apos; : &apos;none&apos;\" text=\"bind:TMP3_NAME\" textAlign=\"left\"/></Band></Format></Formats>");
            this.Tab00.TabpageMenu.addChild(obj.name, obj);

            obj = new Tabpage("TabpageDept",this.Tab00);
            obj.set_text("관할 부서 등록");
            this.Tab00.addChild(obj.name, obj);

            obj = new Grid("grdDeptList","0","0","51.01%",null,null,"0",null,null,null,null,this.Tab00.TabpageDept.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsDeptList");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_cellsizebandtype("body");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseexpandkey("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"37\"/><Column size=\"48\"/><Column size=\"396\"/><Column size=\"72\"/><Column size=\"84\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"No.\"/><Cell col=\"2\" text=\"부서\"/><Cell col=\"3\" text=\"부서코드\"/><Cell col=\"4\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" editmaxlength=\"1\"/><Cell col=\"1\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:DEPT_NM\" displaytype=\"treeitemcontrol\" textAlign=\"left\" edittype=\"tree\" treelevel=\"bind:DEPT_LV\"/><Cell col=\"3\" text=\"bind:DEPT_CD\"/><Cell col=\"4\" text=\"bind:USE_YN\"/></Band></Format></Formats>");
            this.Tab00.TabpageDept.addChild(obj.name, obj);

            obj = new Grid("grdDeptDetail","grdDeptList:61","0",null,null,"0","0",null,null,null,null,this.Tab00.TabpageDept.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsDeptDetail");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"37\"/><Column size=\"48\"/><Column size=\"301\"/><Column size=\"69\"/><Column size=\"89\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"No.\"/><Cell col=\"2\" text=\"관할부서\"/><Cell col=\"3\" text=\"부서코드\"/><Cell col=\"4\" text=\"하위부서포함\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" editmaxlength=\"1\"/><Cell col=\"1\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:DEPT_NM\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:DEPT_CD\"/><Cell col=\"4\" text=\"bind:SUB_DEPT_INCLS_GBCD\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/></Band></Format></Formats>");
            this.Tab00.TabpageDept.addChild(obj.name, obj);

            obj = new Button("btnDeptSave","grdDeptList:17","180","26","26",null,null,null,null,null,null,this.Tab00.TabpageDept.form);
            obj.set_taborder("2");
            obj.set_text(">>");
            obj.set_tooltiptext("관할부서 추가");
            this.Tab00.TabpageDept.addChild(obj.name, obj);

            obj = new Button("btnDeptDel","grdDeptList:17","267","26","26",null,null,null,null,null,null,this.Tab00.TabpageDept.form);
            obj.set_taborder("3");
            obj.set_text("<<");
            obj.set_tooltiptext("관할부서 삭제");
            this.Tab00.TabpageDept.addChild(obj.name, obj);

            obj = new Grid("grdMaster","0","40","349",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"44\"/><Column size=\"80\"/><Column size=\"147\"/><Column size=\"69\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"권한코드\" cssclass=\"point\"/><Cell col=\"2\" text=\"권한명\" cssclass=\"point\"/><Cell col=\"3\" text=\"사용여부\" cssclass=\"point\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:AUTH_CD\" displaytype=\"text\" edittype=\"expr:dataset.getRowType(currow)==2 ? &apos;text&apos; : &apos;none&apos;\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:AUTH_CD_NM\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:AUTH_USE_YN\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"dsGYn\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stRowCnt","291","12","56","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Button("btnAuth",null,"14","60","22","5",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("적용");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle","3","14","98","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("권한 등록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00","349","46","5","390",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("stRowCnt1",null,"12","107","24","73",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("권한관리");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsTDetail");
            this._addPreloadList("data","","dsTMaster");
            this._addPreloadList("data","","dsDetail");
            this._addPreloadList("data","","dsDetailTemp");
            this._addPreloadList("data","","ds2Level");
            this._addPreloadList("data","","ds3Level");
            this._addPreloadList("data","","ds4Level");
        };
        
        // User Script
        this.registerScript("SYS003AuthMenuMasterM01.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): COMM000002S.xfdl(권한관리)
        * 작 성			일 명: jiback
        * 작 성	    	일 자: 2018/09/04
        * 변 경     	일 자:
        * 변 경			자 명:
        * 변경 및 수정 로그 : 일자별로 변경자 및 변경사항을 간략히 기술
        ************************************************************************/
        /**********************************************************************
        	01. 전처리 공통 함수 선언
        ***********************************************************************/
        /**********************************************************************
        	02. 폼 변수 정의
        ***********************************************************************/
        this.lvchkColidDs   	= "AUTH_CD$AUTH_CD_NM$AUTH_USE_YN";         		// 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs 	= "권한코드$관리자$사용여부";
        //this.iFind			= 0;
        this.strCopyData     	= "";
        this.strKeyValue     	= "";
        /**********************************************************************
        	03. 폼 로드 및 닫을때(폼이 포커스 갈때)
        ***********************************************************************/
        /**
         * 기능 : 폼 로드 완료후 초기값 Setting
         */
        this.form_onload = function(obj, e)
        {
        	//폼에 공통으로 로드시 사용하는 함수.
        	this.gfn_formOnload(obj.e);

            // 관할 부서 등록 사용안함. 사용자그룹권한관리 메뉴에서 처리함.
        	this.Tab00.removeTabpage(1);

        	//사용자 화면  초기화 함수
            this.fn_formInit();
        };

        /**
         * 기능 : 폼언 로드(닫기전 셋팅)  Setting
         */
        this.form_onclose = function(obj, e)
        {

        };
        /**********************************************************************
        	04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        this.fn_formInit = function()
        {

        	var strDs   = "dsGYn";					// 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
        	var strLgcd = "000002";           		// 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
        	var strComb = "X";   					// 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
        	var strOptn = "";						// 조건문 " AND COMM_IT02 = '" + vip + "'|||";
        	var svcId 	= "Init";   				//콤보의 (A:기본명-네임바운드nmae ,B:코드에[01] 기본명-네임바운드name1)

           // gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
           // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.

           this.gfn_CmmnMultiComboLoad(strDs
        							, strLgcd
        							, strComb
        							, strOptn
        							, svcId);
        };

        this.fn_PostformInit = function()
        {
        	this.fn_Ret();
        };
        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {

        	if(nErrorCode != 0)
        	{
        		this.alert(sErrorMsg);
        		return false;
        	}else
        	{
        		/*sSvcId (Transaction Id)*/
        		switch(sSvcId)
        		{
        			case "Init":
        				this.fn_PostformInit();
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
        			case "SaveDept":
        			    this.fn_PostSaveDept();
        				break;
        			case "Auth":
        			    this.fn_PostAuth();
        				break;
        			case "New":
        				this.fn_PostNew();
        				break;
        			case "Del":
        				this.fn_PostDel();
        				break;
        			case "DelDept":
        				this.fn_PostDelDept();
        				break;
        			default:
        				break;
        		}
        	}
        };
        /************************************************************************************************
        * 공통 버튼 호출 영역(공통버튼 사용에만사용)
        ************************************************************************************************/
        /*
         * _gfn_btnClick여기서 호출시 버튼을 클릭처릭(개인폼에 모든스크립터 복사함)
         */
        this.fn_cmmBtnClick = function(sBtn)
        {
        	switch(sBtn)
        	{
        		case "ret" :				//조회
        				this.fn_Ret();
        			break;
        		case "new" :				//신규
        				this.fn_New();
        			break;
        		case "del" :				//삭제
        				this.fn_Del();
        			break;
        		case "save" :				//저장
        				this.fn_Save();
        			break;
        		case "excel" :				//엑셀
        				this.fn_Excel();
        			break;
        		case "print" :				//출력
        				this.fn_Print();
        			break;
        		case "confirm" :			//확정
        				this.fn_Confirm();
        			break;
        		case "tmp1" :				//여분버튼1
        				this.fn_Copy();
        			break;
        		case "tmp2" :				//여분버튼2
        				this.fn_Tmp2();
        			break;
        		case "tmp3" :				//여분버튼3
        				this.fn_Tmp3();
        			break;

        		default :
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

        	var strSvc 		= "Ret";
        	var strUrl      = "/prj/sys/RetrieveAuthMenuMasterList.do";
        	var strInDs  	= "ds_input=ds_input";
        	var strOutDs 	= "dsMaster=dsMaster dsDeptList=dsDeptList";
        	var strArg 		= "";
        	var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        	var strASync    = true;			   //샏략이나 공백일시에는 ASync=true,싱크시는 false로

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
        	//trace(this.dsMaster.saveXML());
        	this.gfn_clearSortAll(this.grdMaster);
        	this.gfn_getRowCount(this.stRowCnt,this.dsMaster);

        	//this.dsMaster_onrowposchanged(this.dsMaster);

        	//this.gfn_clearSortAll(this.grdDeptList);
        };

        /**********************************************************************
        	05-1. 조회 함수 선언
        ***********************************************************************/
        this.dsMaster_onrowposchanged = function(obj,e)
        {
        	this.fn_DRet();
        };

        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreRet = function()
        {

        	// 조회조건 셋팅
        	this.ds_input1.setColumn(0,"AUTH_CD",this.dsMaster.getColumn(this.dsMaster.rowposition,"AUTH_CD"));
        	return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_DRet = function()
        {
        	if(!this.fn_PreRet())
        	{
        		return false;
        	}

        	var strSvc 		= "DRet";
        	var strUrl      = "/prj/sys/RetrieveAuthMenuDetailList.do";
        	var strInDs  	= "ds_input1=ds_input1";
        	var strOutDs 	= "dsDetail=dsDetail dsDeptDetail=dsDeptDetail";
        	var strArg 		= "";
        	var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        	var strASync    = true;			   //샏략이나 공백일시에는 ASync=true,싱크시는 false로
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
        	//trace(this.dsDetail.saveXML());
        	this.gfn_clearSortAll(this.Tab00.TabpageMenu.form.grdDetail);
        	this.gfn_getRowCount(this.stRowCnt1,this.dsDetail);

        	if(this.strCopyData == "COPY")
        	{
        		var nRow = -1;
        		this.dsDetail.set_enableevent(false);
        		for(var i=0; i < this.dsTDetail.rowcount; i++)
        		{
        			if(this.dsTDetail.getColumn(i,"CHK") == "1")
        			{
        				nRow = this.dsDetail.findRow("MENU_ID",	this.dsTDetail.getColumn(i,"MENU_ID"));

        				this.dsDetail.setColumn(nRow,"CHK",			this.dsTDetail.getColumn(i,"CHK"));
        				this.dsDetail.setColumn(nRow,"IS_NEW",		this.dsTDetail.getColumn(i,"IS_NEW"));
        				this.dsDetail.setColumn(nRow,"IS_RET",		this.dsTDetail.getColumn(i,"IS_RET"));
        				this.dsDetail.setColumn(nRow,"IS_SAVE",		this.dsTDetail.getColumn(i,"IS_SAVE"));
        				this.dsDetail.setColumn(nRow,"IS_DEL",		this.dsTDetail.getColumn(i,"IS_DEL"));
        				this.dsDetail.setColumn(nRow,"IS_EXCEL",	this.dsTDetail.getColumn(i,"IS_EXCEL"));
        				this.dsDetail.setColumn(nRow,"IS_PRINT",	this.dsTDetail.getColumn(i,"IS_PRINT"))
        				this.dsDetail.setColumn(nRow,"IS_CONFIRM",	this.dsTDetail.getColumn(i,"IS_CONFIRM"));
        				this.dsDetail.setColumn(nRow,"IS_TMP1",		this.dsTDetail.getColumn(i,"IS_TMP1"));
        				this.dsDetail.setColumn(nRow,"IS_TMP2",		this.dsTDetail.getColumn(i,"IS_TMP2"))
        				this.dsDetail.setColumn(nRow,"IS_TMP3",		this.dsTDetail.getColumn(i,"IS_TMP3"));
        				this.dsDetail.setColumn(nRow,"TMP1_NAME",	this.dsTDetail.getColumn(i,"TMP1_NAME"));
        				this.dsDetail.setColumn(nRow,"TMP2_NAME",	this.dsTDetail.getColumn(i,"TMP2_NAME"))
        				this.dsDetail.setColumn(nRow,"TMP3_NAME",	this.dsTDetail.getColumn(i,"TMP3_NAME"));

        			}
        		}
        		this.dsDetail.set_enableevent(true);

        		this.strCopyData ="";
        	}
        };
        /**********************************************************************
        	06. 추가 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 추가 전 실행(기본체크사항)
         */
        this.fn_PreNew = function()
        {

        	return true;
        };

        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_New = function()
        {

        	if(!this.fn_PreNew())
        	{
        		return false;
        	}

        	var result;
        	var nRow=-1;

        	if(this.gfn_isUpdateD(this.dsMaster) == true)
        	{
        		 result = this.confirm("변경이력있습니다.이동하시겠습니까?","확인","question");

        		if(result == true)
        		{
        			this.gfn_reSetDs(this.dsMaster,this.dsMaster.rowposition);
        			nRow = this.dsMaster.addRow();

        		}else
        		{
        			return false;
        		}
        	}else
        	{
        		nRow = this.dsMaster.addRow();
        	}

        	this.dsMaster.setColumn(nRow,"AUTH_USE_YN", 		   "1"); 		//사용유무
        };


        /**
         * 기능 : 처리 후 실행
         */
        this.fn_PostNew = function()
        {

        };
        /**********************************************************************
        	06-1. 복사 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 추가 전 실행(기본체크사항)
         */
        this.fn_PreCopy = function()
        {
        	return true;
        };

        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_Copy = function()
        {
        	if(!this.fn_PreCopy())
        	{
        		return false;
        	}

        	var result;
        	var nRow=-1

        	this.dsTMaster.clearData();
        	this.dsTDetail.clearData();

        	var cRow = this.dsTMaster.addRow();
        	this.dsTMaster.copyRow(cRow,this.dsMaster,this.dsMaster.rowposition);
        	this.dsTMaster.setColumn(cRow,"AUTH_CD","");
        	this.dsTDetail.copyData(this.dsDetail);

        	if(this.gfn_isUpdateD(this.dsMaster) == true)
        	{
        		 result = this.confirm("변경이력있습니다.이동하시겠습니까?","확인","question");

        		if(result == true)
        		{
        			this.gfn_reSetDs(this.dsMaster,this.dsMaster.rowposition);
        			nRow = this.dsMaster.addRow();

        		}else
        		{
        			return false;
        		}
        	}else
        	{
        		nRow = this.dsMaster.addRow();
        	}
        	this.dsMaster.copyRow(this.dsMaster.rowposition ,this.dsTMaster,0);
        	this.strCopyData = "COPY";

        };

        /**
         * 기능 : 처리 후 실행
         */
        this.fn_PostCopy = function()
        {

        };

        /**********************************************************************
        	07. 삭제 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 삭제 버튼 실행
         */
        this.fn_PreDel = function()
        {

        	if(this.dsMaster.rowcount < 1)
        	{
        		this.gfn_alert("MSG00006","삭제 정보","","warning");                        // 삭제할 데이타가 없습니다.!
        		return false;
        	}

        	if(this.dsMaster.getColumn(this.dsMaster.rowposition,"AUTH_CD") == "0001")
        	{
        		this.gfn_alert("MSG00017","삭제 정보","","warning");                       	// 시스템 관리자는 그룹은 삭제 할 수 없습니다.
        		return false;
        	}

        	var result = this.gfn_confirm("MSG00007","삭제 처리","","question");            // 현재선택행을 삭제하시겠습니까?

        	if(result == 0)
        	{
        	   return false;
        	}

        	this.dsMaster.deleteRow(this.dsMaster.rowposition);

        	//개별삭제시
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

        	var strSvc 		= "Del";
        	var strUrl      = "/prj/sys/DeleteAuthMenuMasterList.do";
        	var strInDs  	= "dsMaster=dsMaster:u";
        	var strOutDs 	= "";
        	var strArg 		= "";
        	var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        	var strASync    = true;			   //샏략이나 공백일시에는 ASync=true,싱크시는 false로
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

        };

        /**********************************************************************
        	08. 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function()
        {

        	if(!this.gfn_isUpdate(this.dsMaster) && !this.gfn_isUpdate(this.dsDetail))
            {
                this.alert("변경된 이력이 없습니다.","저장","question");
                return false;
            }

        	// 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
        	var chkFocusFlg = true;
        	var result 		= this.gfn_cmmnChkEssentialItem(this.dsMaster, this.lvchkColidDs, this.lvchkColNameDs, this.grdMaster, chkFocusFlg, this);

        	if (result[0] != "success")
        	{
        		this.alert(result[0]);
        		this.dsMaster.set_rowposition(result[1]); //데이터셋 변경
        		return false;
        	}

          	var result = this.confirm( "저장 하시겠습니까?", "저장", "question" );

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
        	this.dsMaster.set_enableevent(false);
        	var strSvc 		= "Save";
        	var strUrl      = "/prj/sys/SaveAuthMenuMasterList.do";
        	var strInDs  	= "ds_input=ds_input:a ";
        		strInDs    += "dsMaster=dsMaster:u ";
        		strInDs    += "dsDetail=dsDetail:u";
        	var strOutDs 	= "dsMaster=dsMaster";
        	var strArg 		= "";
        	var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        	var strASync    = true;			   //샏략이나 공백일시에는 ASync=true,싱크시는 false로
        	this.gfn_Transaction(strSvc
        					   , strUrl
        					   , strInDs
        					   , strOutDs
        					   , strArg
        					   , strCallBack
        					   , strASync);
        };
        /**
         *	기능 : 저장시 후처리
         */
        this.fn_PostSave = function()
        {
        	this.dsMaster.set_enableevent(true);
        	var nRow = this.dsMaster.findRow("AUTH_CD",this.strKeyValue);
        	this.dsMaster.set_rowposition(nRow);
        	this.dsMaster_onrowposchanged(this.dsMaster);
        };

        /**********************************************************************
        	08-1. 권한 적용 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreAuth = function()
        {

        	if(!this.gfn_isUpdate(this.dsDetail))
            {
                this.alert("변경된 이력이 없습니다.","적용","question");
                return false;
            }

          	if(this.dsMaster.getRowType(this.dsMaster.rowposition)==2)
          	{
        		this.alert("권한데이타를 저장후 적용해주세요","적용","question");
        		return false;
          	}

          	var result = this.confirm( "적용 하시겠습니까?", "적용", "question" );

        	if(result == 0)
        	{
        	   return false;
        	}

        	this.ds_input1.setColumn(0,"CO_CD",  this.dsMaster.getColumn(this.dsMaster.rowposition,"CO_CD"));
        	this.ds_input1.setColumn(0,"AUTH_CD",this.dsMaster.getColumn(this.dsMaster.rowposition,"AUTH_CD"));

        	return true;
        };

        /**
         * 기능 : 저장 실행
         */
        this.btnAuth_onclick = function(obj,e)
        {

        	if(!this.fn_PreAuth())
        	{
        		return false;
        	}

        	var strSvc 		= "Auth";
        	var strUrl      = "/prj/sys/SaveAuthMenuDetailList.do";
        	var strInDs  	= "ds_input1=ds_input1:a ";
        		strInDs    += "dsDetail=dsDetail:u";
        	var strOutDs 	= "dsDetail=dsDetail";
        	var strArg 		= "";
        	var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        	var strASync    = true;			   //생략이나 공백일시에는 ASync=true,싱크시는 false로
        	this.gfn_Transaction(strSvc
        				   , strUrl
        				   , strInDs
        				   , strOutDs
        				   , strArg
        				   , strCallBack
        				   , strASync);

        };
        /**
         *	기능 : 저장시 후처리
         */
        this.fn_PostAuth = function()
        {

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
        	12. ExcelUpLoad 신규저장시
        ***********************************************************************/
        /**********************************************************************
        	13. Get, Set Method
        ***********************************************************************/
        /**********************************************************************
        	14. 기타 Control Event
        ***********************************************************************/

        this.grdMaster_onheadclick = function(obj,e)
        {

        };
        /**
        	그리드멀티 소트정열
        */
        this.grdMaster_onheaddblclick = function(obj,e)
        {
        	if(e.cell != 0 && e.cell != 1)
        	{
        		this.gfn_gridSort(obj,e);
        	}
        };

        /**
        	그리드 체크박스 올체크
        */
        this.grdDetail_onheadclick = function(obj,e)
        {
        	if(e.cell == 0)
        	{
        		this.gfn_checkAll(obj, e,true);
        	}
        };

        /**
        	그리드멀티 소트정열
        */
        this.grdDetail_onheaddblclick = function(obj,e)
        {
        	if(e.cell != 0 && e.cell != 1)
        	{
        		//this.gfn_gridSort(obj,e);
        	}
        };


        this.dsMaster_canrowposchange = function(obj,e)
        {

        	if(obj.getRowType(e.newrow) != 2)
        	{
        		var result;

        		if(obj.rowcount < 1)
        		{
        			return true;
        		}

        		if(this.gfn_isUpdateD(obj))
        		{
        			result = this.confirm("변경이력있습니다.이동하시겠습니까?","확인");

        		}else
        		{
        			return true;
        		}

        		if(result == true)
        		{
        			this.gfn_reSetDs(obj,e.oldrow);

        		}else
        		{
        			return false;
        		}
        	}
        };

        this.dsMaster_cancolumnchange = function(obj,e)
        {
        	if(e.columnid == "AUTH_CD")
        	{
         		var nRow = this.dsMaster.findRowExpr("TAUTH_CD == '" + e.newvalue + "' && currow != '"+e.row+"'");
        		if(nRow > -1)
        		{
        			this.alert("중복된 키를 입력할수 없습니다.");
        			return false;
        		}else
        		{
        			if(this.dsMaster.getRowType(e.row) == 2)
        			{
        				this.dsMaster.set_enableevent(false);
        				this.dsMaster.setColumn(e.row,"TAUTH_CD",e.newvalue);
        				this.dsMaster.set_enableevent(true);
        			}
        		}
        	}
        };

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
            return (this.gfn_isUpdate(this.dsMaster) || this.gfn_isUpdate(this.dsDetail));
        };

        this.grdDetail_oncellclick = function(obj,e)
        {
        	if(e.cell == this.Tab00.TabpageMenu.form.grdDetail.getBindCellIndex("body","MENU_NM"))
        	{
        		if(e.clickitem == "treeitembutton")
        		{
        			return false;
        		}

        		var objDs = this[obj.binddataset];
        		var childRow = obj.getTreeChildRow(objDs.rowposition, 0, true);
        		if (childRow  >= 0)
        		{
        			 var gridRow = obj.getTreeRow(objDs.rowposition);

        			 if(obj.isTreeCollapsedRow(childRow, true))
        			 {
        				 obj.setTreeStatus(gridRow, true);

        			 }else
        			 {
        				 obj.setTreeStatus(gridRow, false);
        			 }
        		}
        	}
        };

        this.dsDetail_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "CHK")
        	{
        		var nLvl 			= this.dsDetail.getColumn(e.row,"LVL");
        		var sMenuId 		= this.dsDetail.getColumn(e.row,"MENU_ID");
        		var sParentMenuId 	= this.dsDetail.getColumn(e.row,"PARENT_MENU_ID");
        		this.dsDetailTemp.copyData(this.dsDetail);
            	this.dsDetailTemp.filter("PARENT_MENU_ID=='" + sMenuId + "'");

                // 상위메뉴 체크
        		if (e.newvalue == "1") {
        		    var sUpMenuId = sParentMenuId;
        		    for(var i=nLvl; i > 1; i--) {
        				var nRow = this.dsDetail.findRow("MENU_ID", sUpMenuId);
        				this.dsDetail.setColumn(nRow,"CHK",e.newvalue);

        				sUpMenuId = this.dsDetail.getColumn(nRow,"PARENT_MENU_ID");
        			}
        		}

        		if(nLvl == 1)
        		{
        			this.ds2Level.copyData(this.dsDetailTemp,true);
        			for(var i=0; i < this.ds2Level.rowcount; i++)
        			{
        				var sTMenuId = this.ds2Level.getColumn(i,"MENU_ID");
        				var nRow 	 = this.dsDetail.findRow("MENU_ID",sTMenuId);
        				this.dsDetail.setColumn(nRow,"CHK",e.newvalue);

        				this.dsDetailTemp.filter("PARENT_MENU_ID=='" + sTMenuId + "'");
        				this.ds3Level.copyData(this.dsDetailTemp,true);
        				this.dsDetailTemp.filter("");
        				for(var j=0; j < this.ds3Level.rowcount; j++)
        				{
        					var sTMenuId = this.ds3Level.getColumn(j,"MENU_ID");
        					var nRow 	 = this.dsDetail.findRow("MENU_ID",sTMenuId);
        					this.dsDetail.setColumn(nRow,"CHK",e.newvalue);

        					this.dsDetailTemp.filter("PARENT_MENU_ID=='" + sTMenuId + "'");
        					this.ds4Level.copyData(this.dsDetailTemp,true);
        					this.dsDetailTemp.filter("");

        					for(var k=0; k < this.ds4Level.rowcount; k++)
        					{
        						var sTTMenuId = this.ds4Level.getColumn(k,"MENU_ID");
        						var nRow 	  = this.dsDetail.findRow("MENU_ID",sTTMenuId);
        						this.dsDetail.setColumn(nRow,"CHK",e.newvalue);
        					}
        				}
        			}
        		}else if(nLvl == 2)
        		{
        			this.ds3Level.copyData(this.dsDetailTemp,true);
        			for(var i=0; i < this.ds3Level.rowcount; i++)
        			{
        				var sTMenuId = this.ds3Level.getColumn(i,"MENU_ID");
        				var nRow 	 = this.dsDetail.findRow("MENU_ID",sTMenuId);
        				this.dsDetail.setColumn(nRow,"CHK",e.newvalue);

        				this.dsDetailTemp.filter("PARENT_MENU_ID=='" + sTMenuId + "'");
        				this.ds4Level.copyData(this.dsDetailTemp,true);
        				this.dsDetailTemp.filter("");
        				for(var j=0; j < this.ds4Level.rowcount; j++)
        				{
        					var sTMenuId = this.ds4Level.getColumn(j,"MENU_ID");
        					var nRow 	 = this.dsDetail.findRow("MENU_ID",sTMenuId);
        					this.dsDetail.setColumn(nRow,"CHK",e.newvalue);
        				}
        			}
        		}else if(nLvl == 3)
        		{
        			this.ds4Level.copyData(this.dsDetailTemp,true);
        			for(var i=0; i < this.ds4Level.rowcount; i++)
        			{
        				var sTMenuId = this.ds4Level.getColumn(i,"MENU_ID");
        				var nRow 	 = this.dsDetail.findRow("MENU_ID",sTMenuId);
        				this.dsDetail.setColumn(nRow,"CHK",e.newvalue);
        			}
        		}
        		//this.dsDetailTemp.clearData();
        	}else if(e.columnid == "IS_TMP1")
        	{
        		if(e.newvalue == "0")
        		{
        			this.dsDetail.setColumn(e.row,"TMP1_NAME","");
        		}else
        		{
        			this.dsDetail.set_rowposition(e.row);
        			this.Tab00.TabpageMenu.form.grdDetail.setCellPos(this.Tab00.TabpageMenu.form.grdDetail.getBindCellIndex("body","TMP1_NAME"));
        			this.Tab00.TabpageMenu.form.grdDetail.showEditor(true);
        		}

        	}else if(e.columnid == "IS_TMP2")
        	{
        		if(e.newvalue == "0")
        		{
        			this.dsDetail.setColumn(e.row,"TMP2_NAME","");
        		}else
        		{
        			this.dsDetail.set_rowposition(e.row);
        			this.Tab00.TabpageMenu.form.grdDetail.setCellPos(this.Tab00.TabpageMenu.form.grdDetail.getBindCellIndex("body","TMP2_NAME"));
        			this.Tab00.TabpageMenu.form.grdDetail.showEditor(true);
        		}
        	}else if(e.columnid == "IS_TMP3")
        	{
        		if(e.newvalue == "0")
        		{
        			this.dsDetail.setColumn(e.row,"TMP3_NAME","");
        		}else
        		{
        			this.dsDetail.set_rowposition(e.row);
        			this.Tab00.TabpageMenu.form.grdDetail.setCellPos(this.Tab00.TabpageMenu.form.grdDetail.getBindCellIndex("body","TMP3_NAME"));
        			this.Tab00.TabpageMenu.form.grdDetail.showEditor(true);
        		}
        	}
        };


        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {

        };



        this.grdDeptList_onheadclick = function(obj,e)
        {
        	if(e.cell == 0)
        	{
        		this.gfn_checkAll(obj, e,true);
        	}
        };

        this.grdDeptList_onheaddblclick = function(obj,e)
        {
        	if(e.cell != 0 && e.cell != 1)
        	{
        		//this.gfn_gridSort(obj,e);
        	}
        };

        this.Tab00_TabpageDept_grdDeptList_oncellclick = function(obj,e)
        {
        	if(e.cell == this.Tab00.TabpageDept.form.grdDeptList.getBindCellIndex("body","DEPT_NM"))
        	{
        		if(e.clickitem == "treeitembutton")
        		{
        			return false;
        		}

        		var objDs = this[obj.binddataset];
        		var childRow = obj.getTreeChildRow(objDs.rowposition, 0, true);
        		if (childRow  >= 0)
        		{
        			 var gridRow = obj.getTreeRow(objDs.rowposition);

        			 if(obj.isTreeCollapsedRow(childRow, true))
        			 {
        				 obj.setTreeStatus(gridRow, true);

        			 }else
        			 {
        				 obj.setTreeStatus(gridRow, false);
        			 }
        		}
        	}
        };

        this.grdDeptDetail_onheadclick = function(obj,e)
        {
        	if(e.cell == 0)
        	{
        		this.gfn_checkAll(obj, e,true);
        	}
        };

        /**
        	그리드멀티 소트정열
        */
        this.grdDeptDetail_onheaddblclick = function(obj,e)
        {
        	if(e.cell != 0 && e.cell != 1)
        	{
        		this.gfn_gridSort(obj,e);
        	}
        };


        /**********************************************************************
                08. 부서저장 함수 선언
        ***********************************************************************/

        /**
        	부서추가
        */
        this.btnDeptSave_onclick = function(obj,e)
        {
        	this.fn_SaveDept();
        };

        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSaveDept = function()
        {
            if (this.dsMaster.rowcount == 0 || this.dsDeptList.rowcount == 0)
        		return false;

        	// 권한등록 변경여부 확인
            if(this.gfn_isUpdate(this.dsMaster))
            {
                this.gfn_alert("권한등록 목록에 변경된 이력이 있습니다. 저장 후 관할부서 등록해주세요.","저장정보","","question");
                return false;
            }

        	// 선택한 데이터가 없을 경우
        	if(this.dsDeptList.rowcount < 1 || this.dsDeptList.findRow("CHK","1") == -1)
            {
                this.gfn_alert("부서를 선택해주세요.","저장정보","","warning");
                return false;
            }

            var result = this.gfn_confirm( "관할부서로 저장 하시겠습니까?", "저장","", "question" );
            if(result == 0)
            {
                return false;
            }
            return true;
        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_SaveDept = function()
        {
            if(!this.fn_PreSaveDept())
            {
                return false;
            }

        	for(var i=0;i<this.dsDeptList.rowcount; i++)
        	{
        		// 체크되어있것 복사
        		if(this.dsDeptList.getColumn(i,"CHK") == "1")
        		{
        			if (this.dsDeptDetail.findRow("DEPT_CD", this.dsDeptList.getColumn(i, "DEPT_CD")) == -1)
        			{
        				var nRow = this.dsDeptDetail.addRow();

        				this.dsDeptDetail.setColumn(nRow,"CHK",        "1");           //체크
        				this.dsDeptDetail.setColumn(nRow,"AUTH_CD",    this.dsMaster.getColumn(this.dsMaster.rowposition, "AUTH_CD"));      // 권한코드
        				this.dsDeptDetail.setColumn(nRow,"DEPT_CD",    this.dsDeptList.getColumn(i, "DEPT_CD"));      // 부서코드
        				this.dsDeptDetail.setColumn(nRow,"DEPT_NM",    this.dsDeptList.getColumn(i, "DEPT_NM"));      // 부서명
        				this.dsDeptDetail.setColumn(nRow,"SUB_DEPT_INCLS_GBCD",    "1");      // 하위부서포함여부
        			}
        		}
        	}

        	this.ds_inputDept.setColumn(0, "AUTH_CD", this.dsMaster.getColumn(this.dsMaster.rowposition, "AUTH_CD"));

            var strSvc      = "SaveDept";
            var strUrl      = "/prj/sys/SaveAuthCtrlDeptList.do";
            var strInDs     = "ds_input=ds_inputDept:a ";
                strInDs    += "dsDeptDetail=dsDeptDetail:u";
            var strOutDs    = "dsDeptDetail=dsDeptDetail";
        	var strArg      = ""

            var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
              strArg = "GBV_MENUID=" + GBV_MENUID + " " + strArg;
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
         *      기능 : 저장시 후처리
         */
        this.fn_PostSaveDept = function()
        {
        	for(var i=0;i<this.dsDeptList.rowcount; i++)
        	{
        		// 체크 복원
        		if(this.dsDeptList.getColumn(i,"CHK") == "1")
        		{
        			this.dsDeptList.setColumn(i, "CHK", "0");
        		}
        	}

            //this.gfn_getRowCount(this.stRowCnt3,this.dsDeptDetail);
        };



        /**********************************************************************
                08. 부서삭제 함수 선언
        ***********************************************************************/
        /**
        	부서삭제
        */
        this.btnDeptDel_onclick = function(obj,e)
        {
        	this.fn_DelDept();
        };

        /**
         * 기능 : 삭제 전 실행
         */
        this.fn_PreDelDept = function()
        {
        	// 선택한 데이터가 없을 경우
        	if(this.dsDeptDetail.rowcount < 1 || this.dsDeptDetail.findRow("CHK","1") == -1)
            {
                this.gfn_alert("관할부서를 선택해주세요.","삭제정보","","warning");
                return false;
            }

            var result = this.gfn_confirm( "현재선택행을 삭제하시겠습니까?", "삭제","", "question" );
            if(result == 0)
            {
                return false;
            }

        	//다중삭제 용도
        	this.dsDeptDetail.set_enableevent(false);
        	for(var i=this.dsDeptDetail.rowcount-1;i>-1;i--)
        	{
        		// 체크되어있거나 데이터셋의 로우타입이 수정일 때
        		if(this.dsDeptDetail.getColumn(i,"CHK") == "1" || this.dsDeptDetail.getRowType(i) == Dataset.ROWTYPE_INSERT)
        		{
        			this.dsDeptDetail.deleteRow(i);
        		}
        	}
        	this.dsDeptDetail.set_enableevent(true);

            return true;
        };

        /**
         * 기능 : 삭제 실행
         */
        this.fn_DelDept = function()
        {
            if(!this.fn_PreDelDept())
            {
                return false;
            }

        	this.ds_inputDept.setColumn(0, "AUTH_CD", this.dsMaster.getColumn(this.dsMaster.rowposition, "AUTH_CD"));

            var strSvc      = "DelDept";
            var strUrl      = "/prj/sys/DeleteAuthCtrlDeptList.do";
            var strInDs     = "ds_input=ds_inputDept:a ";
                strInDs    += "dsDeptDetail=dsDeptDetail:u";
            var strOutDs    = "dsDeptDetail=dsDeptDetail";
        	var strArg      = ""

            var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
              strArg = "GBV_MENUID=" + GBV_MENUID + " " + strArg;
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

        /**
         *      기능 : 부서삭제 시 후처리
         */
        this.fn_PostDelDept = function()
        {
        }


        this.dsDeptDetail_onrowposchanged = function(obj,e)
        {
        	var nRow = this.dsDeptList.findRow("DEPT_CD", this.dsDeptDetail.getColumn(e.newrow, "DEPT_CD"));
        	if (nRow >= 0)	{
        		this.dsDeptList.set_rowposition(nRow);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.Tab00.TabpageMenu.form.grdDetail.addEventHandler("onheadclick",this.grdDetail_onheadclick,this);
            this.Tab00.TabpageMenu.form.grdDetail.addEventHandler("onheaddblclick",this.grdDetail_onheaddblclick,this);
            this.Tab00.TabpageMenu.form.grdDetail.addEventHandler("oncellclick",this.grdDetail_oncellclick,this);
            this.Tab00.TabpageDept.form.grdDeptList.addEventHandler("onheadclick",this.grdDeptList_onheadclick,this);
            this.Tab00.TabpageDept.form.grdDeptList.addEventHandler("onheaddblclick",this.grdDeptList_onheaddblclick,this);
            this.Tab00.TabpageDept.form.grdDeptList.addEventHandler("oncellclick",this.Tab00_TabpageDept_grdDeptList_oncellclick,this);
            this.Tab00.TabpageDept.form.grdDeptDetail.addEventHandler("onheadclick",this.grdDeptDetail_onheadclick,this);
            this.Tab00.TabpageDept.form.grdDeptDetail.addEventHandler("onheaddblclick",this.grdDeptDetail_onheaddblclick,this);
            this.Tab00.TabpageDept.form.btnDeptSave.addEventHandler("onclick",this.btnDeptSave_onclick,this);
            this.Tab00.TabpageDept.form.btnDeptDel.addEventHandler("onclick",this.btnDeptDel_onclick,this);
            this.grdMaster.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.btnAuth.addEventHandler("onclick",this.btnAuth_onclick,this);
            this.dsDetail.addEventHandler("oncolumnchanged",this.dsDetail_oncolumnchanged,this);
            this.dsMaster.addEventHandler("cancolumnchange",this.dsMaster_cancolumnchange,this);
            this.dsMaster.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsDetailTemp.addEventHandler("oncolumnchanged",this.dsDetail_oncolumnchanged,this);
            this.ds2Level.addEventHandler("oncolumnchanged",this.dsDetail_oncolumnchanged,this);
            this.ds3Level.addEventHandler("oncolumnchanged",this.dsDetail_oncolumnchanged,this);
            this.ds4Level.addEventHandler("oncolumnchanged",this.dsDetail_oncolumnchanged,this);
            this.dsDeptDetail.addEventHandler("onrowposchanged",this.dsDeptDetail_onrowposchanged,this);
        };
        this.loadIncludeScript("SYS003AuthMenuMasterM01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
