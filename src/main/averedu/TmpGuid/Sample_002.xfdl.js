(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Sample_002");
            this.set_titletext("공지사항등록관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1606,830);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cmb", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">전체</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">현재</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/><Col id=\"Column1\">1</Col><Col id=\"Column2\">12345678</Col><Col id=\"Column3\">비정형 텍스트 입니다.</Col><Col id=\"Column5\"/><Col id=\"Column6\">20181025</Col><Col id=\"Column7\">10,000,000</Col><Col id=\"Column8\">김항공</Col><Col id=\"Column4\">가나다라</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\">2</Col><Col id=\"Column2\">12345678</Col><Col id=\"Column3\">비정형 텍스트 입니다.</Col><Col id=\"Column5\"/><Col id=\"Column6\">20181025</Col><Col id=\"Column7\">10,000,000</Col><Col id=\"Column8\">김항공</Col><Col id=\"Column4\">가나다라</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\">3</Col><Col id=\"Column2\">12345678</Col><Col id=\"Column3\">비정형 텍스트 입니다.</Col><Col id=\"Column5\"/><Col id=\"Column6\">20181025</Col><Col id=\"Column7\">10,000,000</Col><Col id=\"Column8\">김항공</Col><Col id=\"Column4\">가나다라</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\">4</Col><Col id=\"Column2\">12345678</Col><Col id=\"Column3\">비정형 텍스트 입니다.</Col><Col id=\"Column5\"/><Col id=\"Column6\">20181025</Col><Col id=\"Column7\">10,000,000</Col><Col id=\"Column8\">김항공</Col><Col id=\"Column4\">가나다라</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\">5</Col><Col id=\"Column2\">12345678</Col><Col id=\"Column3\">비정형 텍스트 입니다.</Col><Col id=\"Column5\"/><Col id=\"Column6\">20181025</Col><Col id=\"Column7\">10,000,000</Col><Col id=\"Column8\">김항공</Col><Col id=\"Column4\">가나다라</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\">6</Col><Col id=\"Column2\">12345678</Col><Col id=\"Column3\">비정형 텍스트 입니다.</Col><Col id=\"Column5\"/><Col id=\"Column6\">20181025</Col><Col id=\"Column7\">10,000,000</Col><Col id=\"Column8\">김항공</Col><Col id=\"Column4\">가나다라</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\">7</Col><Col id=\"Column2\">12345678</Col><Col id=\"Column3\">비정형 텍스트 입니다.</Col><Col id=\"Column5\"/><Col id=\"Column6\">20181025</Col><Col id=\"Column7\">10,000,000</Col><Col id=\"Column8\">김항공</Col><Col id=\"Column4\">가나다라</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\">8</Col><Col id=\"Column2\">12345678</Col><Col id=\"Column3\">비정형 텍스트 입니다.</Col><Col id=\"Column5\"/><Col id=\"Column6\">20181025</Col><Col id=\"Column7\">10,000,000</Col><Col id=\"Column8\">김항공</Col><Col id=\"Column4\">가나다라</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\">9</Col><Col id=\"Column2\">12345678</Col><Col id=\"Column3\">비정형 텍스트 입니다.</Col><Col id=\"Column5\"/><Col id=\"Column6\">20181025</Col><Col id=\"Column7\">10,000,000</Col><Col id=\"Column8\">김항공</Col><Col id=\"Column4\">가나다라</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\">10</Col><Col id=\"Column2\">12345678</Col><Col id=\"Column3\">비정형 텍스트 입니다.</Col><Col id=\"Column5\"/><Col id=\"Column6\">20181025</Col><Col id=\"Column7\">10,000,000</Col><Col id=\"Column8\">김항공</Col><Col id=\"Column4\">가나다라</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\">11</Col><Col id=\"Column2\">12345678</Col><Col id=\"Column3\">비정형 텍스트 입니다.</Col><Col id=\"Column5\"/><Col id=\"Column6\">20181025</Col><Col id=\"Column7\">10,000,000</Col><Col id=\"Column8\">김항공</Col><Col id=\"Column4\">가나다라</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column1\">12</Col><Col id=\"Column2\">12345678</Col><Col id=\"Column3\">비정형 텍스트 입니다.</Col><Col id=\"Column4\">가나다라</Col><Col id=\"Column6\">20181025</Col><Col id=\"Column7\">10,000,000</Col><Col id=\"Column8\">김항공</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column1\">13</Col><Col id=\"Column2\">12345678</Col><Col id=\"Column3\">비정형 텍스트 입니다.</Col><Col id=\"Column4\">가나다라</Col><Col id=\"Column6\">20181025</Col><Col id=\"Column7\">10,000,000</Col><Col id=\"Column8\">김항공</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column1\">14</Col><Col id=\"Column2\">12345678</Col><Col id=\"Column3\">비정형 텍스트 입니다.</Col><Col id=\"Column4\">가나다라</Col><Col id=\"Column6\">20181025</Col><Col id=\"Column7\">10,000,000</Col><Col id=\"Column8\">김항공</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column1\">15</Col><Col id=\"Column2\">12345678</Col><Col id=\"Column3\">비정형 텍스트 입니다.</Col><Col id=\"Column4\">가나다라</Col><Col id=\"Column6\">20181025</Col><Col id=\"Column7\">10,000,000</Col><Col id=\"Column8\">김항공</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column1\">16</Col><Col id=\"Column2\">12345678</Col><Col id=\"Column3\">비정형 텍스트 입니다.</Col><Col id=\"Column4\">가나다라</Col><Col id=\"Column6\">20181025</Col><Col id=\"Column7\">10,000,000</Col><Col id=\"Column8\">김항공</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column1\">17</Col><Col id=\"Column2\">12345678</Col><Col id=\"Column3\">비정형 텍스트 입니다.</Col><Col id=\"Column4\">가나다라</Col><Col id=\"Column6\">20181025</Col><Col id=\"Column7\">10,000,000</Col><Col id=\"Column8\">김항공</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column2\">12345678</Col><Col id=\"Column3\">비정형 텍스트 입니다.</Col><Col id=\"Column1\">18</Col><Col id=\"Column4\">가나다라</Col><Col id=\"Column6\">20181025</Col><Col id=\"Column7\">10,000,000</Col><Col id=\"Column8\">김항공</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column2\">12345678</Col><Col id=\"Column3\">비정형 텍스트 입니다.</Col><Col id=\"Column1\">19</Col><Col id=\"Column4\">가나다라</Col><Col id=\"Column6\">20181025</Col><Col id=\"Column7\">10,000,000</Col><Col id=\"Column8\">김항공</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column2\">12345678</Col><Col id=\"Column3\">비정형 텍스트 입니다.</Col><Col id=\"Column1\">20</Col><Col id=\"Column4\">가나다라</Col><Col id=\"Column6\">20181025</Col><Col id=\"Column7\">10,000,000</Col><Col id=\"Column8\">김항공</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column2\">12345678</Col><Col id=\"Column3\">비정형 텍스트 입니다.</Col><Col id=\"Column1\">21</Col><Col id=\"Column4\">가나다라</Col><Col id=\"Column6\">20181025</Col><Col id=\"Column7\">10,000,000</Col><Col id=\"Column8\">김항공</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column2\">12345678</Col><Col id=\"Column3\">비정형 텍스트 입니다.</Col><Col id=\"Column1\">22</Col><Col id=\"Column4\">가나다라</Col><Col id=\"Column6\">20181025</Col><Col id=\"Column7\">10,000,000</Col><Col id=\"Column8\">김항공</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column2\">12345678</Col><Col id=\"Column3\">비정형 텍스트 입니다.</Col><Col id=\"Column1\">23</Col><Col id=\"Column4\">가나다라</Col><Col id=\"Column6\">20181025</Col><Col id=\"Column7\">10,000,000</Col><Col id=\"Column8\">김항공</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column2\">12345678</Col><Col id=\"Column3\">비정형 텍스트 입니다.</Col><Col id=\"Column1\">24</Col><Col id=\"Column4\">가나다라</Col><Col id=\"Column6\">20181025</Col><Col id=\"Column7\">10,000,000</Col><Col id=\"Column8\">김항공</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column2\">12345678</Col><Col id=\"Column3\">비정형 텍스트 입니다.</Col><Col id=\"Column1\">25</Col><Col id=\"Column4\">가나다라</Col><Col id=\"Column6\">20181025</Col><Col id=\"Column7\">10,000,000</Col><Col id=\"Column8\">김항공</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column1\">26</Col><Col id=\"Column2\">12345678</Col><Col id=\"Column3\">비정형 텍스트 입니다.</Col><Col id=\"Column4\">가나다라</Col><Col id=\"Column6\">20181025</Col><Col id=\"Column7\">10,000,000</Col><Col id=\"Column8\">김항공</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column1\">27</Col><Col id=\"Column2\">12345678</Col><Col id=\"Column3\">비정형 텍스트 입니다.</Col><Col id=\"Column4\">가나다라</Col><Col id=\"Column6\">20181025</Col><Col id=\"Column7\">10,000,000</Col><Col id=\"Column8\">김항공</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column1\">28</Col><Col id=\"Column2\">12345678</Col><Col id=\"Column3\">비정형 텍스트 입니다.</Col><Col id=\"Column4\">가나다라</Col><Col id=\"Column6\">20181025</Col><Col id=\"Column7\">10,000,000</Col><Col id=\"Column8\">김항공</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column1\">29</Col><Col id=\"Column2\">12345678</Col><Col id=\"Column3\">비정형 텍스트 입니다.</Col><Col id=\"Column4\">가나다라</Col><Col id=\"Column6\">20181025</Col><Col id=\"Column7\">10,000,000</Col><Col id=\"Column8\">김항공</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row><Row><Col id=\"Column1\">30</Col><Col id=\"Column2\">12345678</Col><Col id=\"Column3\">비정형 텍스트 입니다.</Col><Col id=\"Column4\">가나다라</Col><Col id=\"Column6\">20181025</Col><Col id=\"Column7\">10,000,000</Col><Col id=\"Column8\">김항공</Col><Col id=\"Column9\">9999-12-31</Col><Col id=\"Column10\">버튼</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_03",null,"3","58","22","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("도움말");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btn_02",null,"3","45","22","60",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("필터");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btn_01",null,"3","45","22","107",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btn_00",null,"3","45","22","154",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("stc_05","0","5","330","22",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("공지사항등록관리");
            obj.set_cssclass("sta_WF_Title01");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09","0","84","80","22",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("공지사항");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","0","102","100","7",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("7");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","515","74","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("35");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","74","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("15");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_00","0","109","1017",null,null,"0",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_binddataset("ds_grd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"220\"/><Column size=\"110\"/><Column size=\"90\"/><Column size=\"89\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Column0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"No.\"/><Cell col=\"2\" text=\"코드(Center)\"/><Cell col=\"3\" text=\"제목(Left)\"/><Cell col=\"4\" text=\"단위(Right)\"/><Cell col=\"5\" text=\"작성자(Center)\"/><Cell col=\"6\" text=\"작성일(Center)\"/><Cell col=\"7\" text=\"Button\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\" cssclass=\"pointL\"/><Cell col=\"4\" text=\"bind:Column7\" cssclass=\"pointR\"/><Cell col=\"5\" text=\"bind:Column8\"/><Cell col=\"6\" text=\"bind:Column9\"/><Cell col=\"7\" text=\"bind:Column10\" displaytype=\"buttoncontrol\" edittype=\"button\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_00","1033","84","330","22",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("공지사항 상세정보");
            obj.set_cssclass("sta_WF_Title03");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","1033","102","100","7",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("7");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","1033","74","100","17",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("17");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("stc_24","1033","109",null,"28","0",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_25","1033","109","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_26","1033","136",null,"150","0",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_27","1033","136","150","150",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01","1033","285",null,"28","0",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_02","1033","285","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("게시여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_05","1185","112",null,"22","3",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_value("공지사항 테스트");
            obj.set_text("공지사항 테스트");
            this.addChild(obj.name, obj);

            obj = new Button("btn_134",null,"3","45","22","201",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btn_132",null,"3","45","22","248",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_00","1185","139",null,"144","3",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_value("내용입력");
            this.addChild(obj.name, obj);

            obj = new Static("stc_04","1033","312",null,"28","0",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_03","1033","312","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("게시시작일");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_02","1185","288","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_innerdataset("combo");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_text("Y");
            obj.set_value("1");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_00","1185","315","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_value("20181025");
            obj.set_dateformat("yyyy-MM-dd ");
            this.addChild(obj.name, obj);

            obj = new Static("stc_07","1033","339",null,"28","0",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_06","1033","339","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("게시종료일");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_01","1185","342","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_value("20181025");
            obj.set_dateformat("yyyy-MM-dd ");
            this.addChild(obj.name, obj);

            obj = new Static("stc_08","1033","366",null,"28","0",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_10","1033","366","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("등록일시");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_02","1185","369","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_value("20181025");
            obj.set_dateformat("yyyy-MM-dd ");
            this.addChild(obj.name, obj);

            obj = new Static("stc_11","1033","393",null,"28","0",null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12","1033","393","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("등록자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_00","1185","396","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_value("테스트");
            obj.set_text("테스트");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13","1033","420",null,"218","0",null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14","1033","420","150","218",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","1018","112","15","100",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("15");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("stc_15","74","84","80","22",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("<b v=\'true\'><fc v=\'#ff3300\'>30</fc></b> 건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_TotalSta");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","1018","75","15",null,null,"0",null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_cssclass("div_WF_AreaBox");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0","0",null,null,"0","0",null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_Vspltt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("div_01","0","30",null,"44","0",null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_03","377","10","70","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("4");
            obj.set_text("등록일자");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.div_01.addChild(obj.name, obj);

            obj = new Button("Button00","stc_03:10","10","22","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_CalBtnM");
            this.div_01.addChild(obj.name, obj);

            obj = new Button("Button02","Button00:2","10","30","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("9");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CalBtnDay");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_00","0","10","44","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("2");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.div_01.addChild(obj.name, obj);

            obj = new Edit("edt_00","stc_00:10","10","145","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("0");
            obj.set_cssclass("point");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_01","199","10","68","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("1");
            obj.set_text("게시여부");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.div_01.addChild(obj.name, obj);

            obj = new Combo("cbo_00","stc_01:10","10","100","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_cmb");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("-1");
            this.div_01.addChild(obj.name, obj);

            obj = new Calendar("cal_00","Button02:2","10","110","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("5");
            obj.set_value("20181025");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_01.addChild(obj.name, obj);

            obj = new Button("btn_00",null,null,"55","22","10","9",null,null,null,null,this.div_01.form);
            obj.set_taborder("6");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.div_01.addChild(obj.name, obj);

            obj = new Button("Button01","cal_00:2","10","22","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_CalBtnP");
            this.div_01.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1606,830,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static01.addEventHandler("onclick",this.Static01_onclick,this);
            this.div_01.form.cal_00.addEventHandler("onchanged",this.div_01_cal_00_onchanged,this);
        };
        this.loadIncludeScript("Sample_002.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
