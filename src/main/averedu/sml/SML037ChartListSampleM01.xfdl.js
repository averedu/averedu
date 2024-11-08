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
            this.set_titletext("개발용꺽은선차트");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMaster", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CURR_MONTH\" type=\"STRING\" size=\"32\"/><Column id=\"STD_YM\" type=\"STRING\" size=\"32\"/><Column id=\"PAY_WAY_10\" type=\"STRING\" size=\"32\"/><Column id=\"SALE_AMT_10\" type=\"STRING\" size=\"32\"/><Column id=\"PAY_WAY_20\" type=\"STRING\" size=\"32\"/><Column id=\"SALE_AMT_20\" type=\"STRING\" size=\"32\"/><Column id=\"PAY_WAY_30\" type=\"STRING\" size=\"32\"/><Column id=\"SALE_AMT_30\" type=\"STRING\" size=\"32\"/><Column id=\"PAY_WAY_40\" type=\"STRING\" size=\"32\"/><Column id=\"SALE_AMT_40\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"CURR_MONTH\">MONTH</Col><Col id=\"STD_YM\">201803</Col><Col id=\"PAY_WAY_10\">직승인 신용</Col><Col id=\"SALE_AMT_10\">            1272</Col><Col id=\"PAY_WAY_20\">VAN 신용</Col><Col id=\"SALE_AMT_20\">             105</Col><Col id=\"PAY_WAY_30\">현금</Col><Col id=\"SALE_AMT_30\">            1346</Col><Col id=\"PAY_WAY_40\">상품</Col><Col id=\"SALE_AMT_40\">             111</Col></Row><Row><Col id=\"CURR_MONTH\">MONTH</Col><Col id=\"STD_YM\">201804</Col><Col id=\"PAY_WAY_10\">직승인 신용</Col><Col id=\"SALE_AMT_10\">            1284</Col><Col id=\"PAY_WAY_20\">VAN 신용</Col><Col id=\"SALE_AMT_20\">             106</Col><Col id=\"PAY_WAY_30\">현금</Col><Col id=\"SALE_AMT_30\">             111</Col><Col id=\"PAY_WAY_40\">상품</Col><Col id=\"SALE_AMT_40\">            1358</Col></Row><Row><Col id=\"CURR_MONTH\">MONTH</Col><Col id=\"STD_YM\">201805</Col><Col id=\"PAY_WAY_10\">직승인 신용</Col><Col id=\"SALE_AMT_10\">            1296</Col><Col id=\"PAY_WAY_20\">VAN 신용</Col><Col id=\"SALE_AMT_20\">             107</Col><Col id=\"PAY_WAY_30\">현금</Col><Col id=\"SALE_AMT_30\">            1358</Col><Col id=\"PAY_WAY_40\">상품</Col><Col id=\"SALE_AMT_40\">             112</Col></Row><Row><Col id=\"CURR_MONTH\">MONTH</Col><Col id=\"STD_YM\">201806</Col><Col id=\"PAY_WAY_10\">직승인 신용</Col><Col id=\"SALE_AMT_10\">            1309</Col><Col id=\"PAY_WAY_20\">VAN 신용</Col><Col id=\"SALE_AMT_20\">             108</Col><Col id=\"PAY_WAY_30\">현금</Col><Col id=\"SALE_AMT_30\">             112</Col><Col id=\"PAY_WAY_40\">상품</Col><Col id=\"SALE_AMT_40\">            1370</Col></Row><Row><Col id=\"CURR_MONTH\">MONTH</Col><Col id=\"STD_YM\">201807</Col><Col id=\"PAY_WAY_10\">직승인 신용</Col><Col id=\"SALE_AMT_10\">            1321</Col><Col id=\"PAY_WAY_20\">VAN 신용</Col><Col id=\"SALE_AMT_20\">             109</Col><Col id=\"PAY_WAY_30\">현금</Col><Col id=\"SALE_AMT_30\">            1370</Col><Col id=\"PAY_WAY_40\">상품</Col><Col id=\"SALE_AMT_40\">             113</Col></Row><Row><Col id=\"CURR_MONTH\">MONTH</Col><Col id=\"STD_YM\">201808</Col><Col id=\"PAY_WAY_10\">직승인 신용</Col><Col id=\"SALE_AMT_10\">            1333</Col><Col id=\"PAY_WAY_20\">VAN 신용</Col><Col id=\"SALE_AMT_20\">             110</Col><Col id=\"PAY_WAY_30\">현금</Col><Col id=\"SALE_AMT_30\">             113</Col><Col id=\"PAY_WAY_40\">상품</Col><Col id=\"SALE_AMT_40\">            1383</Col></Row><Row><Col id=\"CURR_MONTH\">MONTH</Col><Col id=\"STD_YM\">201809</Col><Col id=\"PAY_WAY_10\">직승인 신용</Col><Col id=\"SALE_AMT_10\">            1346</Col><Col id=\"PAY_WAY_20\">VAN 신용</Col><Col id=\"SALE_AMT_20\">             111</Col><Col id=\"PAY_WAY_30\">현금</Col><Col id=\"SALE_AMT_30\">            1383</Col><Col id=\"PAY_WAY_40\">상품</Col><Col id=\"SALE_AMT_40\">             114</Col></Row><Row><Col id=\"CURR_MONTH\">MONTH</Col><Col id=\"STD_YM\">201810</Col><Col id=\"PAY_WAY_10\">직승인 신용</Col><Col id=\"SALE_AMT_10\">            1358</Col><Col id=\"PAY_WAY_20\">VAN 신용</Col><Col id=\"SALE_AMT_20\">             112</Col><Col id=\"PAY_WAY_30\">현금</Col><Col id=\"SALE_AMT_30\">             114</Col><Col id=\"PAY_WAY_40\">상품</Col><Col id=\"SALE_AMT_40\">            1235</Col></Row><Row><Col id=\"CURR_MONTH\">MONTH</Col><Col id=\"STD_YM\">201811</Col><Col id=\"PAY_WAY_10\">직승인 신용</Col><Col id=\"SALE_AMT_10\">            1370</Col><Col id=\"PAY_WAY_20\">VAN 신용</Col><Col id=\"SALE_AMT_20\">             113</Col><Col id=\"PAY_WAY_30\">현금</Col><Col id=\"SALE_AMT_30\">            1235</Col><Col id=\"PAY_WAY_40\">상품</Col><Col id=\"SALE_AMT_40\">             102</Col></Row><Row><Col id=\"CURR_MONTH\">MONTH</Col><Col id=\"STD_YM\">201812</Col><Col id=\"PAY_WAY_10\">직승인 신용</Col><Col id=\"SALE_AMT_10\">            1383</Col><Col id=\"PAY_WAY_20\">VAN 신용</Col><Col id=\"SALE_AMT_20\">             114</Col><Col id=\"PAY_WAY_30\">현금</Col><Col id=\"SALE_AMT_30\">             102</Col><Col id=\"PAY_WAY_40\">상품</Col><Col id=\"SALE_AMT_40\">            1333</Col></Row><Row><Col id=\"CURR_MONTH\">MONTH</Col><Col id=\"STD_YM\">201901</Col><Col id=\"PAY_WAY_10\">직승인 신용</Col><Col id=\"SALE_AMT_10\">            1235</Col><Col id=\"PAY_WAY_20\">VAN 신용</Col><Col id=\"SALE_AMT_20\">             102</Col><Col id=\"PAY_WAY_30\">현금</Col><Col id=\"SALE_AMT_30\">            1333</Col><Col id=\"PAY_WAY_40\">상품</Col><Col id=\"SALE_AMT_40\">             110</Col></Row><Row><Col id=\"CURR_MONTH\">MONTH</Col><Col id=\"STD_YM\">201902</Col><Col id=\"PAY_WAY_10\">직승인 신용</Col><Col id=\"SALE_AMT_10\">               0</Col><Col id=\"PAY_WAY_20\">VAN 신용</Col><Col id=\"SALE_AMT_20\">               0</Col><Col id=\"PAY_WAY_30\">현금</Col><Col id=\"SALE_AMT_30\">               0</Col><Col id=\"PAY_WAY_40\">상품</Col><Col id=\"SALE_AMT_40\">               0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CMP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"STD_YM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMP_CD\"/><Col id=\"STD_YM\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPayWayCd", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"PAY_WAY_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PAY_WAY_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"PAY_WAY_CD\">10</Col><Col id=\"PAY_WAY_NM\">직승인 신용</Col></Row><Row><Col id=\"PAY_WAY_CD\">20</Col><Col id=\"PAY_WAY_NM\">VAN 신용</Col></Row><Row><Col id=\"PAY_WAY_CD\">30</Col><Col id=\"PAY_WAY_NM\">현금</Col></Row><Row><Col id=\"PAY_WAY_CD\">40</Col><Col id=\"PAY_WAY_NM\">상품</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMstCmp", this);
            obj._setContents("<ColumnInfo><Column id=\"CMP_CD\" type=\"STRING\" size=\"32\"/><Column id=\"CMP_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"10","60","22","10",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divChart","15","61","385","337",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("whitesmoke");
            obj.set_url("com::COMM000011D.xfdl");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divChart1","415","61","385","337",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("whitesmoke");
            obj.set_url("com::COMM000011D.xfdl");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divChart2","815","61","385","337",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("whitesmoke");
            obj.set_url("com::COMM000011D.xfdl");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divChart4","1215","61","385","337",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("whitesmoke");
            obj.set_url("com::COMM000011D.xfdl");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divChart6","415","431","385","337",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_background("whitesmoke");
            obj.set_url("com::COMM000011D.xfdl");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divChart7","815","431","385","337",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("whitesmoke");
            obj.set_url("com::COMM000011D.xfdl");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divChart8","1215","431","385","337",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_background("whitesmoke");
            obj.set_url("com::COMM000011D.xfdl");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divChart5","15","431","385","337",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_background("whitesmoke");
            obj.set_url("com::COMM000011D.xfdl");
            obj.set_text("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","com::COMM000011D.xfdl");
            this._addPreloadList("data","","dsMaster");
            this._addPreloadList("data","","dsPayWayCd");
        };
        
        // User Script
        this.registerScript("SML037ChartListSampleM01.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): TOT014DrApprCardSaleM01xfdl(싱글다중처리)
        * 작 성         일 명: jiback
        * 작 성         일 자: 2019/4/9
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
        this.cmpCd 			= "";
        this.sToday         = "";
        this.sCurrStdYmd    = "";
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

        /**
         * 기능 : 폼언 로드(닫기전 셋팅)  Setting
         */
        this.form_onclose = function(obj,e)
        {

        };
        /**********************************************************************
                04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        this.fn_formInit = function()
        {
            //this.postSearch();
        };


        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {

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
                            this.postformInit();
                        break;
                    case "singleInit":
                            this.postSingleInt();
                        break;
                    case "Search":
                            this.postSearch();
                        break;
                    default:
                        break;
                }
            }
        };
        /**********************************************************************
                05. 조회 함수 선언(마스터 함수)
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.preSearch = function()
        {
            var stdYm = this.divSearch.form.divStdYmd.form._getValue();
        	    stdYm = stdYm.substr(0,6);

        	if(!this.gfn_isYM(stdYm))
        	{
        		this.gfn_alert("잘못된 날짜 형식입니다.");	// MSG : 잘못된 날짜 형식입니다.
        		this.divSearch.form.divStdYmd.form._setFocus();
        		return false;
        	}

        	this.ds_input.setColumn(0,"STD_YM",	stdYm);
        	// 조회조건 셋팅
            return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.dvSearch_btnSearch_onclick = function(obj,e)
        {
            /*
            if(!this.preSearch())
            {
                return false;
            }
            var strSvc      = "Search";
            var strUrl      = "/prj/tot/RetrievePayWaySaleList.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsMaster=dsMaster" + " ";
        	    strOutDs   += "dsPayWayCd=dsPayWayCd";
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
        	*/
        	this.postSearch();
        };

        /**
         * 기능 : 조회 후 실행
         */
        this.postSearch = function()
        {

        	//trace(this.dsMaster.saveXML());
        	//trace(this.dsPayWayCd.saveXML());

        	this.fn_chart1();
        	this.fn_chart2();
        	this.fn_chart3();
        	this.fn_chart4();
        	this.fn_chart5();
        	this.fn_chart6();
        	this.fn_chart7();
        	this.fn_chart8();
        };

        /**********************************************************************
                06. 추가 함수 선언
        ***********************************************************************/
        /**********************************************************************
                07. 삭제 함수 선언
        ***********************************************************************/
        /**********************************************************************
                08. 저장 함수 선언
        ***********************************************************************/
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

        this.fn_chart1 = function()
        {
           var layoutStr = '<rMateChart backgroundColor="#FFFFFF" borderStyle="none">'
                           +'<Options>'
                              +'<Caption text="Monthly Rainfall in Vancouver" />'
                               +'<SubCaption text="( mm )" textAlign="right" />'
                         +'</Options>'
                         +'<Bar2DChart showDataTips="true">'
                               +'<horizontalAxis>'
                                   +'<LinearAxis maximum="100"/>'
                                +'</horizontalAxis>'
                              +'<verticalAxis>'
                                 +'<CategoryAxis categoryField="Month"/>'
                              +'</verticalAxis>'
                                +'<series>'
                                   +'<Bar2DSeries labelPosition="inside" xField="Rainfall" displayName="Rainfall" showValueLabels="[6,7]" color="#ffffff" insideLabelYOffset="-2">'
                                      +'<showDataEffect>'
                                           +'<SeriesInterpolate/>'
                                       +'</showDataEffect>'
                                  +'</Bar2DSeries>'
                             +'</series>'
                          +'</Bar2DChart>'
                      +'</rMateChart>';


           var chartData  = [{"Month":"Jan", "Rainfall":21},
                            {"Month":"Feb", "Rainfall":29},
                            {"Month":"Mar", "Rainfall":48},
                            {"Month":"Apr", "Rainfall":38},
                            {"Month":"May", "Rainfall":59},
                            {"Month":"Jun", "Rainfall":77.2},
                            {"Month":"Jul", "Rainfall":68},
                            {"Month":"Aug", "Rainfall":58},
                            {"Month":"Sep", "Rainfall":44},
                            {"Month":"Oct", "Rainfall":23}];


        	// Call Draw Function
        	this.divChart.form.ff_drawChart(layoutStr, chartData);
        };


        this.fn_chart2 = function()
        {
           var layoutStr = '<rMateChart backgroundColor="#FFFFFF" borderStyle="none">'
                       +'<Options>'
                          +'<Caption text="Net Sales 2014 - 2019"/>'
                            +'<SubCaption text="( $M )" textAlign="right" />'
                     +'</Options>'
                     +'<NumberFormatter id="numfmt" useThousandsSeparator="true"/>'
                        +'<Area2DChart showDataTips="true" type="stacked">'
                   /*
                  type 속성을 stacked로 변경    type속성으로는
                   clustered : 일반적인 다중데이터(차트의 멀티시리즈)방식으로 데이터를 표현합니다.(Default)
                  stacked : 데이터를 위에 쌓아 올린 방식으로 표현 합니다.
                    overlaid : 수치 데이터 값을 겹쳐서 표현 합니다. 주로 목표 위치와 현재 위치를 나타낼 때 많이 쓰입니다.
                    100% : 차트의 수치 데이터를 퍼센티지로 계산 후 값을 퍼센티지로 나타냅니다.
                   */
                          +'<horizontalAxis>'
                               +'<CategoryAxis categoryField="year" padding="0"/>'
                           +'</horizontalAxis>'
                          +'<verticalAxis>'
                             +'<LinearAxis id="vAxis" formatter="{numfmt}" />'
                         +'</verticalAxis>'
                            +'<verticalAxisRenderers>'
                                +'<Axis2DRenderer axis="{vAxis}" placement="right" />'
                            +'</verticalAxisRenderers>'
                           +'<series>'
                           /* Area Stacked 를 생성시에는 Area2DSeries를 최소 2개 정의합니다 */
                                +'<Area2DSeries yField="phone" form="curve" displayName="Cell Phone">'
                                    +'<showDataEffect>'
                                       +'<SeriesInterpolate duration="1000"/>'
                                   +'</showDataEffect>'
                              +'</Area2DSeries>'
                                +'<Area2DSeries yField="tv" form="curve" displayName="TV">'
                                   +'<showDataEffect>'
                                       +'<SeriesInterpolate duration="1000"/>'
                                   +'</showDataEffect>'
                              +'</Area2DSeries>'
                                +'<Area2DSeries yField="tablet" form="curve" displayName="Tablet">'
                                   +'<showDataEffect>'
                                       +'<SeriesInterpolate duration="1000"/>'
                                   +'</showDataEffect>'
                              +'</Area2DSeries>'
                            +'</series>'
                          +'<annotationElements>'
                               +'<CanvasElement>'
                                    +'<CanvasLabel right="20" top="60" text="Tablet" fontSize="13" color="#a37aa5"/>'
                                 +'<CanvasLabel right="20" top="150" text="TV" fontSize="13" color="#e5b00b"/>'
                                    +'<CanvasLabel right="20" top="310" text="Cell Phone" fontSize="13" color="#0896f0"/>'
                                +'</CanvasElement>'
                           +'</annotationElements>'
                      +'</Area2DChart>'
                 +'</rMateChart>';
           // 차트 데이터
           var chartData = [{"year" : "2014","phone" : 510,"tv" : 150,"tablet" : 150},
                         {"year" : "2015","phone" : 440,"tv" : 400,"tablet" : 300},
                         {"year" : "2016","phone" : 310,"tv" : 700,"tablet" : 330},
                         {"year" : "2017","phone" : 510,"tv" : 150,"tablet" : 120},
                         {"year" : "2018","phone" : 440,"tv" : 400,"tablet" : 300},
                         {"year" : "2019","phone" : 310,"tv" : 700,"tablet" : 300}];



        	// Call Draw Function
        	this.divChart1.form.ff_drawChart(layoutStr, chartData);
        };

        this.fn_chart3 = function()
        {
           var layoutStr =
                     '<rMateChart backgroundColor="#FFFFFF" borderStyle="none">'
                           +'<Options>'
                              +'<Caption text="Web Browser Market Share"/>'
                             +'<SubCaption text="August 2018"/>'
                               +'<Legend useVisibleCheck="true"/>'
                           +'</Options>'
                         +'<CurrencyFormatter id="numFmt" currencySymbol="%" alignSymbol="right"/>'
                            /*
                          Pie3D 차트 생성시에 필요한 Pie3DChart 정의합니다
                          showDataTips : 데이터에 마우스를 가져갔을 때 나오는 Tip을 보이기/안보이기 속성입니다.
                            */
                          +'<Pie3DChart showDataTips="true"  depth="50" paddingLeft="100" paddingTop="50" paddingRight="100" paddingBottom="50">'
                               +'<series>'
                                   +'<Pie3DSeries nameField="browser" field="share" labelPosition="inside" color="#ffffff" startAngle="240">'
                                    /* Pie3DChart 정의 후 Pie3DSeries labelPosition="inside"정의합니다 */
                                       +'<showDataEffect>'
                                           /* 차트 생성시에 Effect를 주고 싶을 때 shoDataEffect정의합니다 */
                                            +'<SeriesInterpolate duration="1000"/>'
                                           /*
                                          SeriesInterpolate 효과는 시리즈 데이터가 데이터로 표시될 때 데이터의 변화된 내용을 가지고 효과를 적용합니다
                                            - 공통 -
                                          elementOffset : effect를 지연시키는 시간을 지정합니다 default:20
                                          minimumElementDuration : 각 엘리먼트의 최소 지속 시간을 설정합니다 default:0
                                                       이 값보다 짧은 시간에 effect가 실행되지 않습니다
                                         offset : effect개시의 지연시간을 설정합니다 default:0
                                            perElementOffset : 각 엘리먼트의 개시 지연시간을 설정합니다
                                           */
                                      +'</showDataEffect>'
                                  +'</Pie3DSeries>'
                             +'</series>'
                          +'</Pie3DChart>'
                      +'</rMateChart>';

        	// 차트 데이터
        	var chartData = [{"browser":"Chrome", "share":68},
                         {"browser":"Internet Explorer", "share":12},
                         {"browser":"Firefox", "share":11},
                         {"browser":"Safari", "share":6},
                         {"browser":"Opera", "share":3}];


        	// Call Draw Function
        	this.divChart2.form.ff_drawChart(layoutStr, chartData);
        };

        this.fn_chart4 = function()
        {
           var layoutStr =  '<rMateChart  backgroundColor="#ffffff" borderStyle="none">'
                      +'<Options>'
                          +'<Caption text="Price Indices of Meats ($ Per Kilogram)"/>'
                          +'<SubCaption text="World Bank Commodity Price Data in 2013" textAlign="center" />'
                           +'<Legend useVisibleCheck="true"/>'
                       +'</Options>'
                     +'<Line2DChart showDataTips="true" dataTipDisplayMode="axis" paddingTop="0">'
                         +'<horizontalAxis>'
                               +'<CategoryAxis categoryField="Month" padding="0.2"/>'
                            +'</horizontalAxis>'
                          +'<verticalAxis>'
                             +'<LinearAxis maximum="100"/>'
                            +'</verticalAxis>'
                            +'<series>'
                               /*
                              itemRenderer는 Tip이 보여지는 영역차트 부분에 ItemRenderer에서 제공하는 모양을 그려줍니다
                              이 예제에서는 Diamond입니다
                              사용할 수 있는 도형을 모두 표현한 예제는 Chart Samples 의 범례 예제를 참고하십시오.
                              */
                              +'<Line2DSeries yField="Sheep" fill="#ffffff" radius="5" displayName="Sheep" itemRenderer="RectangleItemRenderer">'
                                   +'<showDataEffect>'
                                       +'<SeriesInterpolate/>'
                                   +'</showDataEffect>'
                              +'</Line2DSeries>'
                                +'<Line2DSeries labelPosition="up" yField="Beef" fill="#ffffff" radius="5" displayName="Beef" showValueLabels="[5]" itemRenderer="CircleItemRenderer">'
                               /* itemRenderer는 Circle입니다 */
                                   +'<showDataEffect>'
                                       +'<SeriesInterpolate/>'
                                   +'</showDataEffect>'
                              +'</Line2DSeries>'
                                +'<Line2DSeries yField="Chicken" fill="#ffffff" radius="6" displayName="Chicken" itemRenderer="TriangleItemRenderer">'
                                /* itemRenderer는 Triangle입니다 */
                                 +'<showDataEffect>'
                                       +'<SeriesInterpolate/>'
                                   +'</showDataEffect>'
                              +'</Line2DSeries>'
                            +'</series>'
                          +'<annotationElements>'
                               +'<CrossRangeZoomer zoomType="horizontal" fontSize="11" color="#FFFFFF" verticalLabelPlacement="bottom" horizontalLabelPlacement="left" enableZooming="false" enableCrossHair="true">'
                                +'</CrossRangeZoomer>'
                            +'</annotationElements>'
                      +'</Line2DChart>'
                 +'</rMateChart>';


        	// 차트 데이터
        	var chartData =    [{"Month":"Jan", "Beef":38.5, "Chicken":20, "Sheep":50},
                        {"Month":"Feb", "Beef":56.57, "Chicken":27.52, "Sheep":42},
                     {"Month":"Mar", "Beef":58.57, "Chicken":23.65, "Sheep":40},
                     {"Month":"Apr", "Beef":41.13, "Chicken":29.54, "Sheep":60},
                     {"Month":"May", "Beef":40.58, "Chicken":24.21, "Sheep":50},
                     {"Month":"Jun", "Beef":60.79, "Chicken":39.12, "Sheep":52.5},
                       {"Month":"Jul", "Beef":49.14, "Chicken":32.56, "Sheep":70.64},
                      {"Month":"Aug", "Beef":89.35, "Chicken":39.24, "Sheep":68.57},
                      {"Month":"Sep", "Beef":65.21, "Chicken":32.12, "Sheep":54.14},
                      {"Month":"Oct", "Beef":75.15, "Chicken":42.12, "Sheep":57.58},
                      {"Month":"Nov", "Beef":69.12, "Chicken":35.54, "Sheep":54.47},
                      {"Month":"Dec", "Beef":73.24, "Chicken":40.45, "Sheep":62.47}];

        	// Call Draw Function
        	this.divChart4.form.ff_drawChart(layoutStr, chartData);
        };


        this.fn_chart5 = function()
        {
           var layoutStr =    '<rMateChart backgroundColor="#FFFFFF" borderStyle="none">'
                           +'<Options>'
                              +'<Caption text="Sales by Month"/>'
                               +'<SubCaption text="( $M )" textAlign="right" />'
                             +'<Legend defaultMouseOverAction="false" useVisibleCheck="true"/>'
                            +'</Options>'
                         +'<Column3DChart showDataTips="true" cubeAngleRatio="1" columnWidthRatio="0.7">'
                              +'<horizontalAxis>'
                                   +'<CategoryAxis categoryField="Month"/>'
                              +'</horizontalAxis>'
                              +'<verticalAxis>'
                                 +'<LinearAxis />'
                             +'</verticalAxis>'
                                +'<series>'
                               /* Cylinder3D Multi-Sereis 를 생성시에는 Column3DSeries를 여러 개 정의합니다  */
                                   +'<Column3DSeries labelPosition="outside" yField="tv" displayName="TV" showValueLabels="[3]" halfWidthOffset="0" itemRenderer="CylinderItemRenderer">'
                                        +'<showDataEffect>'
                                           +'<SeriesInterpolate/>'
                                       +'</showDataEffect>'
                                  +'</Column3DSeries>'
                                  +'<Column3DSeries labelPosition="outside" yField="tablet" displayName="Tablet" showValueLabels="[3]" halfWidthOffset="0" itemRenderer="CylinderItemRenderer">'
                                        +'<showDataEffect>'
                                           +'<SeriesInterpolate/>'
                                       +'</showDataEffect>'
                                  +'</Column3DSeries>'
                                  +'<Column3DSeries labelPosition="outside" yField="phone" displayName="Cell Phone" showValueLabels="[3]" halfWidthOffset="0" itemRenderer="CylinderItemRenderer">'
                                     +'<showDataEffect>'
                                           +'<SeriesInterpolate/>'
                                       +'</showDataEffect>'
                                  +'</Column3DSeries>'
                              +'</series>'
                          +'</Column3DChart>'
                       +'</rMateChart>';


        	// 차트 데이터
        	var chartData =[{"Month" : "Jan","phone" : 140,"tv" : 220,"tablet" : 310},
        				   {"Month" : "Feb","phone" : 290,"tv" : 380,"tablet" : 450},
        				   {"Month" : "Mar","phone": 520,"tv" : 700,"tablet" : 770},
        				   {"Month" : "Apr","phone" : 210,"tv" : 410,"tablet" : 310},
        				   {"Month" : "May","phone" : 220,"tv" : 150,"tablet" : 310},
        				   {"Month" : "Jun","phone" : 310,"tv" : 510,"tablet" : 460}];


        	// Call Draw Function
        	this.divChart5.form.ff_drawChart(layoutStr, chartData);
        };

        this.fn_chart5 = function()
        {
           var layoutStr =    '<rMateChart backgroundColor="#FFFFFF" borderStyle="none">'
                           +'<Options>'
                              +'<Caption text="Sales by Month"/>'
                               +'<SubCaption text="( $M )" textAlign="right" />'
                             +'<Legend defaultMouseOverAction="false" useVisibleCheck="true"/>'
                            +'</Options>'
                         +'<Column3DChart showDataTips="true" cubeAngleRatio="1" columnWidthRatio="0.7">'
                              +'<horizontalAxis>'
                                   +'<CategoryAxis categoryField="Month"/>'
                              +'</horizontalAxis>'
                              +'<verticalAxis>'
                                 +'<LinearAxis />'
                             +'</verticalAxis>'
                                +'<series>'
                               /* Cylinder3D Multi-Sereis 를 생성시에는 Column3DSeries를 여러 개 정의합니다  */
                                   +'<Column3DSeries labelPosition="outside" yField="tv" displayName="TV" showValueLabels="[3]" halfWidthOffset="0" itemRenderer="CylinderItemRenderer">'
                                        +'<showDataEffect>'
                                           +'<SeriesInterpolate/>'
                                       +'</showDataEffect>'
                                  +'</Column3DSeries>'
                                  +'<Column3DSeries labelPosition="outside" yField="tablet" displayName="Tablet" showValueLabels="[3]" halfWidthOffset="0" itemRenderer="CylinderItemRenderer">'
                                        +'<showDataEffect>'
                                           +'<SeriesInterpolate/>'
                                       +'</showDataEffect>'
                                  +'</Column3DSeries>'
                                  +'<Column3DSeries labelPosition="outside" yField="phone" displayName="Cell Phone" showValueLabels="[3]" halfWidthOffset="0" itemRenderer="CylinderItemRenderer">'
                                     +'<showDataEffect>'
                                           +'<SeriesInterpolate/>'
                                       +'</showDataEffect>'
                                  +'</Column3DSeries>'
                              +'</series>'
                          +'</Column3DChart>'
                       +'</rMateChart>';


        	// 차트 데이터
        	var chartData =[{"Month" : "Jan","phone" : 140,"tv" : 220,"tablet" : 310},
        				   {"Month" : "Feb","phone" : 290,"tv" : 380,"tablet" : 450},
        				   {"Month" : "Mar","phone": 520,"tv" : 700,"tablet" : 770},
        				   {"Month" : "Apr","phone" : 210,"tv" : 410,"tablet" : 310},
        				   {"Month" : "May","phone" : 220,"tv" : 150,"tablet" : 310},
        				   {"Month" : "Jun","phone" : 310,"tv" : 510,"tablet" : 460}];


        	// Call Draw Function
        	this.divChart5.form.ff_drawChart(layoutStr, chartData);
        };


        this.fn_chart6 = function()
        {
           var layoutStr =                '<rMateChart backgroundColor="#FFFFFF" borderStyle="none">'
                           +'<Options>'
                              +'<Caption text="Monthly Sales w/ Total"/>'
                               +'<SubCaption text="( $M )" textAlign="right" />'
                             +'<Legend />'
                         +'</Options>'
                         +'<NumberFormatter id="numfmt" useThousandsSeparator="true"/>'
                            +'<Combination2DChart showDataTips="true">'
                               +'<horizontalAxis>'
                                   +'<CategoryAxis categoryField="Month" padding="0.5"/>'
                                +'</horizontalAxis>'
                              +'<verticalAxis>'
                                 +'<LinearAxis formatter="{numfmt}"/>'
                             +'</verticalAxis>'
                                +'<series>'
                                   +'<Area2DSeries yField="phone" displayName="Cell Phone">'
                                     +'<showDataEffect>'
                                           +'<SeriesInterpolate/>'
                                       +'</showDataEffect>'
                                  +'</Area2DSeries>'
                                    +'<Area2DSeries yField="tv" displayName="TV">'
                                        +'<showDataEffect>'
                                           +'<SeriesInterpolate/>'
                                       +'</showDataEffect>'
                                  +'</Area2DSeries>'
                                    +'<Area2DSeries yField="tablet" displayName="Tablet">'
                                        +'<showDataEffect>'
                                           +'<SeriesInterpolate/>'
                                       +'</showDataEffect>'
                                  +'</Area2DSeries>'
                                    +'<Line2DSeries yField="total" displayName="Total">'
                                      +'<showDataEffect>'
                                           +'<SeriesInterpolate/>'
                                       +'</showDataEffect>'
                                  +'</Line2DSeries>'
                                +'</series>'
                          +'</Combination2DChart>'
                      +'</rMateChart>';



        	// 차트 데이터
        	var chartData = [{"Month":"Jan","phone":510,"tv":320,"tablet":180,"total":1010},
        					{"Month":"Feb","phone":440,"tv":600,"tablet":240,"total":1280},
        					{"Month":"Mar","phone":110,"tv":430,"tablet":180,"total":720},
        					{"Month":"Apr","phone":190,"tv":330,"tablet":260,"total":780},
        					{"Month":"May","phone":140,"tv":500,"tablet":220,"total":860},
        					{"Month":"Jun","phone":200,"tv":580,"tablet":340,"total":1120},
        					{"Month":"Jul","phone":260,"tv":510,"tablet":330,"total":1100},
        					{"Month":"Aug","phone":190,"tv":660,"tablet":500,"total":1350},
        					{"Month":"Sep","phone":250,"tv":580,"tablet":440,"total":1270},
        					{"Month":"Oct","phone":190,"tv":500,"tablet":380,"total":1070},
        					{"Month":"Nov","phone":320,"tv":590,"tablet":440,"total":1350},
        					{"Month":"Dec","phone":400,"tv":680,"tablet":360,"total":1440}];

        	// Call Draw Function
        	this.divChart6.form.ff_drawChart(layoutStr, chartData);
        };


        this.fn_chart7 = function()
        {
           var layoutStr = '<rMateChart backgroundColor="#FFFFFF" borderStyle="none" >'
                          +'<Options>'
                              +'<Caption text="Sales by Month"/>'
                               +'<SubCaption text="( $M )" textAlign="right" />'
                             +'<Legend defaultMouseOverAction="false" />'
                          +'</Options>'
                         +'<Column2DChart showDataTips="true">'
                                +'<horizontalAxis>'
                                   +'<CategoryAxis categoryField="Month"/>'
                              +'</horizontalAxis>'
                              +'<verticalAxis>'
                                 +'<LinearAxis maximum="100" interval="10"/>'
                              +'</verticalAxis>'
                                +'<series>'
                                   /* type 속성을 stacked로 변경 */
                                  /* type속성으로는*/
                                  /* clustered : 일반적인 다중데이터(차트의 멀티시리즈)방식으로 데이터를 표현합니다.(Default)*/
                                 /* stacked : 데이터를 위에 쌓아 올린 방식으로 표현 합니다.*/
                                   /* overlaid : 수치 데이터 값을 겹쳐서 표현 합니다. 주로 목표 위치와 현재 위치를 나타낼 때 많이 쓰입니다.*/
                                   /* 100% : 차트의 수치 데이터를 퍼센티지로 계산 후 값을 퍼센티지로 나타냅니다. */
                                 +'<Column2DSet type="stacked" showTotalLabel="true" totalLabelJsFunction="totalFunc" labelYOffset="-5">'
                                      +'<series>'
                                       /*  Column2D Stacked 를 생성시에는 Column2DSeries를 최소 2개 정의합니다 */
                                         +'<Column2DSeries labelPosition="inside" yField="tv" displayName="TV" styleName="seriesLabel" showValueLabels="[3]">'
                                             +'<showDataEffect>'
                                                   +'<SeriesInterpolate/>'
                                               +'</showDataEffect>'
                                          +'</Column2DSeries>'
                                          +'<Column2DSeries labelPosition="inside" yField="tablet" displayName="Tablet" styleName="seriesLabel" showValueLabels="[3]">'
                                             +'<showDataEffect>'
                                                   +'<SeriesInterpolate/>'
                                               +'</showDataEffect>'
                                          +'</Column2DSeries>'
                                          +'<Column2DSeries labelPosition="inside" yField="phone" displayName="Cell Phone" styleName="seriesLabel" showValueLabels="[3]">'
                                              +'<showDataEffect>'
                                                   +'<SeriesInterpolate/>'
                                               +'</showDataEffect>'
                                          +'</Column2DSeries>'
                                      +'</series>'
                                  +'</Column2DSet>'
                                 +'<Column2DSet type="stacked" showTotalLabel="true" totalLabelJsFunction="totalFunc" labelYOffset="-5">'
                                      +'<series>'
                                       /*  Column2D Stacked 를 생성시에는 Column2DSeries를 최소 2개 정의합니다 */
                                         +'<Column2DSeries labelPosition="inside" yField="camera" displayName="Camera" styleName="seriesLabel" showValueLabels="[3]">'
                                             +'<showDataEffect>'
                                                   +'<SeriesInterpolate/>'
                                               +'</showDataEffect>'
                                          +'</Column2DSeries>'
                                          +'<Column2DSeries labelPosition="inside" yField="battery" displayName="Battery" styleName="seriesLabel" showValueLabels="[3]">'
                                               +'<showDataEffect>'
                                                   +'<SeriesInterpolate/>'
                                               +'</showDataEffect>'
                                          +'</Column2DSeries>'
                                          +'<Column2DSeries labelPosition="inside" yField="lcd" displayName="LCD" styleName="seriesLabel" showValueLabels="[3]">'
                                               +'<showDataEffect>'
                                                   +'<SeriesInterpolate/>'
                                               +'</showDataEffect>'
                                          +'</Column2DSeries>'
                                      +'</series>'
                                  +'</Column2DSet>'
                             +'</series>'
                          +'</Column2DChart>'
                           +'<Style>'
                                +'.seriesLabel{fontSize:11;color:#ffffff;fontWeight:bold;}'
                         +'</Style>'
                       +'</rMateChart>';

        	// 차트 데이터
        	var chartData = [{"Month":"Jan","phone":8,"tv":10,"tablet":8,"lcd":16,"camera":8,"battery":12},
        					{"Month":"Feb","phone":18,"tv":20,"tablet":18,"lcd":17,"camera":12,"battery":13},
        					{"Month":"Mar","phone":16,"tv":15,"tablet":15,"lcd":22,"camera":17,"battery":17},
        					{"Month":"Apr","phone":36,"tv":24,"tablet":20,"lcd":21,"camera":20,"battery":19},
        					{"Month":"May","phone":21,"tv":19,"tablet":19,"lcd":16,"camera":10,"battery":15},
        					{"Month":"Jun","phone":12,"tv":12,"tablet":13,"lcd":16,"camera":16,"battery":13},
        					{"Month":"Jul","phone":12,"tv":13,"tablet":12,"lcd":9,"camera":8,"battery":9}];


        	// Call Draw Function
        	this.divChart7.form.ff_drawChart(layoutStr, chartData);
        };

        this.fn_chart8 = function()
        {
           var layoutStr = '<rMateChart backgroundColor="#FFFFFF" borderStyle="none">'
                           +'<Options>'
                              +'<Caption text="Monthly Rainfall in Vancouver" />'
                               +'<SubCaption text="( mm )" textAlign="right" />'
                         +'</Options>'
                         +'<Column3DChart showDataTips="true" cubeAngleRatio="1" columnWidthRatio="0.5">'
                           /*
                         Cylinder3D 차트 생성시에 필요한 Column3DChart 정의합니다
                          showDataTips : 데이터에 마우스를 가져갔을 때 나오는 Tip을 보이기/안보이기 속성입니다
                           */
                                +'<horizontalAxis>'
                                   +'<CategoryAxis categoryField="Month"/>'
                              +'</horizontalAxis>'
                              +'<verticalAxis>'
                                 +'<LinearAxis minimum="0" maximum="100" interval="5"/>'
                               +'</verticalAxis>'
                                +'<series>'
                                   +'<Column3DSeries labelPosition="outside" yField="Rainfall" displayName="Rainfall" itemRenderer="CylinderItemRenderer" showValueLabels="[5]">'
                                    /*
                                  Column3DChart 정의 후 Column3DSeries 정의합니다
                                 Cylinder3DChart는 Column3DSeries의 itemRenderer에 CylinderItemRenderer를 정의하여 생성합니다
                                 */
                                      +'<showDataEffect>'
                                       /*  차트 생성시에 Effect를 주고 싶을 때 shoDataEffect정의합니다 */
                                           +'<SeriesInterpolate/>'
                                           /*
                                          SeriesInterpolate는 시리즈 데이터가 새로운 시리즈 데이터로 표시될 때 이동하는 효과를 적용합니다
                                           - 공통속성 -
                                            elementOffset : effect를 지연시키는 시간을 지정합니다 default:20
                                          minimumElementDuration : 각 엘리먼트의 최소 지속 시간을 설정합니다 default:0
                                                       이 값보다 짧은 시간에 effect가 실행되지 않습니다
                                         offset : effect개시의 지연시간을 설정합니다 default:0
                                            perElementOffset : 각 엘리먼트의 개시 지연시간을 설정합니다
                                           */
                                      +'</showDataEffect>'
                                  +'</Column3DSeries>'
                              +'</series>'
                          +'</Column3DChart>'
                       +'</rMateChart>';

        	// 차트 데이터
        	var chartData = [{"Month":"Jan","Rainfall":25},
         {"Month":"Feb","Rainfall":35},
          {"Month":"Mar","Rainfall":54},
          {"Month":"Apr","Rainfall":42},
          {"Month":"May","Rainfall":67},
          {"Month":"Jun","Rainfall":87},
          {"Month":"Jul","Rainfall":50},
          {"Month":"Aug","Rainfall":35},
          {"Month":"Sep","Rainfall":60},
          {"Month":"Oct","Rainfall":40}];

        	// Call Draw Function
        	this.divChart8.form.ff_drawChart(layoutStr, chartData);
        };
        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {

        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.dvSearch_btnSearch_onclick,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
        };
        this.loadIncludeScript("SML037ChartListSampleM01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
