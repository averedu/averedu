(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CSYSCD0201");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,830);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMaster1", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"상태\" type=\"STRING\" size=\"256\"/><Column id=\"순번\" type=\"STRING\" size=\"256\"/><Column id=\"부서연계속성코드\" type=\"STRING\" size=\"256\"/><Column id=\"공통코드여부\" type=\"STRING\" size=\"256\"/><Column id=\"부서연계속성명\" type=\"STRING\" size=\"256\"/><Column id=\"관리부서\" type=\"STRING\" size=\"256\"/><Column id=\"정렬순서\" type=\"STRING\" size=\"256\"/><Column id=\"비고\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster2", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"상태\" type=\"STRING\" size=\"256\"/><Column id=\"순번\" type=\"STRING\" size=\"256\"/><Column id=\"부서코드\" type=\"STRING\" size=\"256\"/><Column id=\"부서명\" type=\"STRING\" size=\"256\"/><Column id=\"사용여부\" type=\"STRING\" size=\"256\"/><Column id=\"급여회계매핑\" type=\"STRING\" size=\"256\"/><Column id=\"부서연계속성코드\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_Dept_Title_01","13","15",null,"45","1060",null,null,null,null,null,this);
            obj.set_font("14pt/normal \"Arial\"");
            obj.set_taborder("1");
            obj.set_text("<b v=\'true\'>부서코드연계속성정보</b> ");
            obj.set_cssclass("stc_Dept_Title_01");
            obj.set_color("#000000");
            obj.set_usedecorate("true");
            obj.set_enableevent("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_01","10","69","106","45",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("<b v=\'true\'>부서연계 속성명</b> ");
            obj.set_cssclass("stc_dept_01");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept_01","110","76","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("edt_dept_01");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_02","10","124","77","45",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("<b v=\'true\'>부서명</b> ");
            obj.set_cssclass("stc_dept_02");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept_02","70","131","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("edt_dept_02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_03","200","123","77","45",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("<b v=\'true\'>부서코드</b> ");
            obj.set_cssclass("stc_dept_03");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept_03","260","131","107","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("edt_dept_03");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_04","373","124","77","45",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("<b v=\'true\'>기관구분</b> ");
            obj.set_cssclass("stc_dept_04");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_dept_01","433","128","75","32",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_05","514","124","77","45",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("<b v=\'true\'>최종조직여부</b> ");
            obj.set_cssclass("stc_dept_05");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_dept_02","591","131","149","32",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_06","753","123","77","45",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("<b v=\'true\'>학사조직여부</b> ");
            obj.set_cssclass("stc_dept_06");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_dept_03","840","130","140","32",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Button("btn_dept_01","1290","75","99","35",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("⌕ 조회");
            obj.set_escapebutton("true");
            obj.set_background("#e1b01d");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_07","10","190",null,"45","1143",null,null,null,null,null,this);
            obj.set_font("12pt/normal \"Arial\"");
            obj.set_taborder("0");
            obj.set_text("<b v=\'true\'>부서코드 연계속성 정보</b> ");
            obj.set_cssclass("stc_dept_07");
            obj.set_color("#000000");
            obj.set_usedecorate("true");
            obj.set_enableevent("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_07_00","200","190",null,"45","840",null,null,null,null,null,this);
            obj.set_font("10pt/normal \"Arial\"");
            obj.set_taborder("15");
            obj.set_text("* 부서코드 연계속성 정보 삭제 시 해당 정보의 연계속성 값이 같이 삭제됩니다.");
            obj.set_cssclass("stc_dept_07");
            obj.set_color("#ff1e1e");
            obj.set_usedecorate("true");
            obj.set_enableevent("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster1","13","233","1382","257",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_binddataset("dsMaster1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"37\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"207\"/><Column size=\"117\"/><Column size=\"236\"/><Column size=\"228\"/><Column size=\"123\"/><Column size=\"272\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"상태\"/><Cell col=\"2\" text=\"순번\"/><Cell col=\"3\" text=\"부서연계속성코드\"/><Cell col=\"4\" text=\"공통코드여부\"/><Cell col=\"5\" text=\"부서연계속성명\"/><Cell col=\"6\" text=\"관리부서\"/><Cell col=\"7\" text=\"정렬순서\"/><Cell col=\"8\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" background=\"#ffffff\"/><Cell col=\"1\" text=\"bind:상태\" background=\"#ffffff\"/><Cell col=\"2\" text=\"bind:순번\" background=\"#ffffff\"/><Cell col=\"3\" text=\"bind:부서연계속성코드\" background=\"#ffffff\"/><Cell col=\"4\" text=\"bind:공통코드여부\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" background=\"#ffffff\"/><Cell col=\"5\" text=\"bind:부서연계속성명\" displaytype=\"editcontrol\" edittype=\"text\" background=\"#ffffff\"/><Cell col=\"6\" text=\"bind:관리부서\" background=\"#ffffff\"/><Cell col=\"7\" text=\"bind:정렬순서\" background=\"#ffffff\"/><Cell col=\"8\" text=\"bind:비고\" displaytype=\"editcontrol\" edittype=\"text\" background=\"#ffffff\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_dept_1",null,"199","65","31","825",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("⊕ 추가");
            obj.set_cssclass("btn_dept_04");
            obj.set_cursor("auto");
            this.addChild(obj.name, obj);

            obj = new Button("btn_dept_3",null,"200","65","31","690",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("저장");
            obj.set_cssclass("btn_dept_04");
            obj.set_cursor("auto");
            this.addChild(obj.name, obj);

            obj = new Button("btn_dept_4",null,"199","65","31","620",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_dept_04");
            obj.set_cursor("auto");
            this.addChild(obj.name, obj);

            obj = new Button("btn_dept_2",null,"199","65","31","757",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("⊝ 삭제");
            obj.set_cssclass("btn_dept_04");
            obj.set_cursor("auto");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_08","1305","191","130","42",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("<b v=\'true\'>총건수 : </b> ");
            obj.set_usedecorate("true");
            obj.set_font("13px/normal \"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_09","13","500",null,"45","1140",null,null,null,null,null,this);
            obj.set_font("12pt/normal \"Arial\"");
            obj.set_taborder("22");
            obj.set_text("<b v=\'true\'>부서코드 연계속성 값 </b> ");
            obj.set_cssclass("stc_dept_07");
            obj.set_color("#000000");
            obj.set_usedecorate("true");
            obj.set_enableevent("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster2","13","550","1377","263",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_binddataset("dsMaster2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"38\"/><Column size=\"65\"/><Column size=\"64\"/><Column size=\"104\"/><Column size=\"197\"/><Column size=\"80\"/><Column size=\"173\"/><Column size=\"123\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"상태\"/><Cell col=\"2\" text=\"순번\"/><Cell col=\"3\" text=\"부서코드\"/><Cell col=\"4\" text=\"부서명\"/><Cell col=\"5\" text=\"사용여부\"/><Cell col=\"6\" text=\"급여회계매핑\"/><Cell col=\"7\" text=\"부서연계속성코드\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" background=\"#ffffff\"/><Cell col=\"1\" text=\"bind:상태\" background=\"#ffffff\"/><Cell col=\"2\" text=\"bind:순번\" background=\"#ffffff\"/><Cell col=\"3\" text=\"bind:부서코드\" background=\"#ffffff\"/><Cell col=\"4\" text=\"bind:부서명\" background=\"#ffffff\"/><Cell col=\"5\" text=\"bind:사용여부\" background=\"#ffffff\"/><Cell col=\"6\" text=\"bind:급여회계매핑\" displaytype=\"combocontrol\" edittype=\"combo\" background=\"#ffffff\"/><Cell col=\"7\" text=\"bind:부서연계속성코드\" background=\"#ffffff\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_dept_10_00_03",null,"514","65","31","610",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_dept_05");
            obj.set_cursor("auto");
            this.addChild(obj.name, obj);

            obj = new Button("btn_dept_5",null,"514","65","31","680",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("저장");
            obj.set_cssclass("btn_dept_05");
            obj.set_cursor("auto");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_10","1315","510","130","42",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("<b v=\'true\'>총건수 : </b> ");
            obj.set_usedecorate("true");
            obj.set_font("13px/normal \"Malgun Gothic\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1920,830,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CSYSCD0201.xfdl", function() {

        this.stc_dept_08_onclick = function(obj,e)
        {

        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.stc_Dept_Title_01.addEventHandler("onclick",this.stc_09_00_onclick,this);
            this.stc_dept_01.addEventHandler("onclick",this.stc_dept_01_onclick,this);
            this.stc_dept_02.addEventHandler("onclick",this.stc01_01_onclick,this);
            this.stc_dept_04.addEventHandler("onclick",this.stc01_00_onclick,this);
            this.cbo_dept_01.addEventHandler("onitemchanged",this.cbo_dept_01_onitemchanged,this);
            this.stc_dept_05.addEventHandler("onclick",this.stc01_02_onclick,this);
            this.cbo_dept_02.addEventHandler("onitemchanged",this.cbo_dept_01_onitemchanged,this);
            this.stc_dept_06.addEventHandler("onclick",this.stc_dept_07_onclick,this);
            this.cbo_dept_03.addEventHandler("onitemchanged",this.cbo_dept_01_onitemchanged,this);
            this.btn_dept_01.addEventHandler("onclick",this.btn_dept_01_onclick,this);
            this.stc_dept_07.addEventHandler("onclick",this.stc_09_00_onclick,this);
            this.stc_dept_07_00.addEventHandler("onclick",this.stc_09_00_onclick,this);
            this.btn_dept_1.addEventHandler("onclick",this.divHakgwa_btnJeongong_onclick,this);
            this.btn_dept_3.addEventHandler("onclick",this.divHakgwa_btnJeongong_onclick,this);
            this.btn_dept_4.addEventHandler("onclick",this.divHakgwa_btnJeongong_onclick,this);
            this.btn_dept_2.addEventHandler("onclick",this.divHakgwa_btnJeongong_onclick,this);
            this.stc_dept_08.addEventHandler("onclick",this.stc_dept_08_onclick,this);
            this.stc_dept_09.addEventHandler("onclick",this.stc_09_00_onclick,this);
            this.btn_dept_10_00_03.addEventHandler("onclick",this.divHakgwa_btnJeongong_onclick,this);
            this.btn_dept_5.addEventHandler("onclick",this.divHakgwa_btnJeongong_onclick,this);
        };
        this.loadIncludeScript("CSYSCD0201.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
