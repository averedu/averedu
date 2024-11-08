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
            obj._setContents("<ColumnInfo><Column id=\"AFFLTS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"STD_YM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"AFFLTS_CD\"/><Col id=\"STD_YM\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPayWayCd", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"PAY_WAY_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PAY_WAY_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"PAY_WAY_CD\">10</Col><Col id=\"PAY_WAY_NM\">직승인 신용</Col></Row><Row><Col id=\"PAY_WAY_CD\">20</Col><Col id=\"PAY_WAY_NM\">VAN 신용</Col></Row><Row><Col id=\"PAY_WAY_CD\">30</Col><Col id=\"PAY_WAY_NM\">현금</Col></Row><Row><Col id=\"PAY_WAY_CD\">40</Col><Col id=\"PAY_WAY_NM\">상품</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsThrAfflts", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"AFFLTS_CD\" type=\"STRING\" size=\"32\"/><Column id=\"AFFLTS_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle00","1","10","72","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("회사");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboMstCmp","74","10","198","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsThrAfflts");
            obj.set_codecolumn("AFFLTS_CD");
            obj.set_datacolumn("AFFLTS_NM");
            obj.set_enable("false");
            obj.set_cssclass("point");
            obj.set_text("Combo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_15","272","10","75","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("기준일자");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"10","60","22","10",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divStdYmd","355","10","88","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_url("com::COMM000006P.xfdl");
            obj.getSetter("callbackfunc").set("fn_afterCall");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divChart","5","53",null,null,"5","5",null,null,null,null,this);
            obj.set_taborder("1");
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
            obj = new BindItem("item0","divSearch.form.cboMstCmp","value","ds_input","AFFLTS_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","com::COMM000006P.xfdl");
            this._addPreloadList("fdl","com::COMM000011D.xfdl");
            this._addPreloadList("data","","dsMaster");
            this._addPreloadList("data","","dsPayWayCd");
        };
        
        // User Script
        this.registerScript("SML036PayWaySaleM01.xfdl", function() {
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
            this.cmpCd  		= objApp.gds_userInfoDb.getColumn(0,"CMP_CD");
        	this.sToday 		= objApp.gds_SystemDate.getColumn(0,"YYYYMMDD");
        	this.sCurrStdYmd 	= this.sToday.substr(0, 6);

        	this.divSearch.form.divStdYmd.form._setValue(this.sCurrStdYmd);   	//월달력에 시작월

        	this.postformInit();

        };

        this.postformInit = function()
        {
            var strDs 		= "dsThrAfflts";
            var strLgcd 	= "XBT_THR_AFFLTS";   //카드사 기관코드
            var strComb 	= "X";
            var svcId 		= "singleInit";
            var callback 	= "fn_callBack";

            // gfn_CmmnSingleComboLoad(승인/정산);
            this.gfn_CmmnSingleComboLoad( strDs
                                        , strLgcd
                                        , strComb
                                        , svcId
                                        , callback);
        };

        this.postSingleInt = function()
        {
            //trace(this.dsMstCardOrg.saveXML());
            var nRow 		= this.dsThrAfflts.findRow("AFFLTS_CD",this.cmpCd );
        	if(nRow != -1)
        	{
        		var sCmpCode 	= this.dsThrAfflts.getColumn(nRow,"AFFLTS_CD");
        		this.ds_input.setColumn(0,"AFFLTS_CD",sCmpCode);
        		this.divSearch.form.cboMstCmp.set_enable(false);
        	}

        	this.divSearch.form.divStdYmd.form._setFocus();
        }


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

        	this.fn_chart();
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
        this.fn_chart = function()
        {
        	var yField   = "";

        	if(this.dsMaster.rowcount > 0)
        	{
        		for(var i=0; i < this.dsPayWayCd.rowcount; i++)
        		{
        			var sPayWayNm = this.dsPayWayCd.getColumn(i,"PAY_WAY_NM");

        			yField  +='<Line2DSeries labelPosition="up" yField="' + sPayWayNm + '" fill="#ffffff" radius="5" displayName="' + sPayWayNm + '" showValueLabels="">'
        					 +'<stroke><Stroke color="#fe6500" weight="1"/></stroke>'
        					 +'<showDataEffect>'
        						+'<SeriesInterpolate/>'
        					 +'</showDataEffect>'
        					 +'</Line2DSeries>';
        		}

        	}

           // Set Layout
           var layoutStr = '<rMateChart  backgroundColor="#ffffff" borderStyle="none">'
        				+'<Options>'
        					+'<Caption text="결제 수단별 매출 현황(기준년월 포함 12개월)"/>'
        					+'<SubCaption text="매출(단위:억)" textAlign="right" />'
        					+'<Legend defaultMouseOverAction="false" useVisibleCheck="true"/>'
        				+'</Options>'
        				+'<NumberFormatter id="numFmt" precision="0"/>'
        				+'<Line2DChart showDataTips="true" dataTipDisplayMode="axis" paddingTop="0">'
        					+'<horizontalAxis>'
        							+'<CategoryAxis categoryField="MONTH"/>'
        					+'</horizontalAxis>'
        					+'<verticalAxis>'
        						+'<LinearAxis />'
        					+'</verticalAxis>'
        					+'<series>'
        					+ yField
        					+'</series>'
        					+'<annotationElements>'
        						+'<CrossRangeZoomer zoomType="horizontal" fontSize="11" color="#FFFFFF" horizontalLabelFormatter="{numFmt}" verticalLabelPlacement="bottom" horizontalLabelPlacement="left" enableZooming="false" enableCrossHair="true" backgroundColor="#eb494a" borderColor="#eb494a">'
        								+'<verticalStroke>'
        									+'<Stroke color="#eb494a" />'
        								+'</verticalStroke>'
        								+'<horizontalStroke>'
        									+'<Stroke color="#eb494a" />'
        								+'</horizontalStroke>'
        						+'</CrossRangeZoomer>'
        					+'</annotationElements>'
        				+'</Line2DChart>'
        			+'</rMateChart>';

        	//trace(layoutStr);
        	var chartData = [];
        	var	data 	  = {};
            for(var i = 0; i < this.dsMaster.rowcount; i++)
            {
               data = {};
        	   data[this.gfn_rMateChartXmlEncoder(this.dsMaster.getColumn(i, "CURR_MONTH"))] = this.gfn_rMateChartXmlEncoder(this.dsMaster.getColumn(i, "STD_YM"));
               data[this.gfn_rMateChartXmlEncoder(this.dsMaster.getColumn(i, "PAY_WAY_10"))] = this.gfn_rMateChartXmlEncoder(this.dsMaster.getColumn(i, "SALE_AMT_10"));
               data[this.gfn_rMateChartXmlEncoder(this.dsMaster.getColumn(i, "PAY_WAY_20"))] = this.gfn_rMateChartXmlEncoder(this.dsMaster.getColumn(i, "SALE_AMT_20"));
               data[this.gfn_rMateChartXmlEncoder(this.dsMaster.getColumn(i, "PAY_WAY_30"))] = this.gfn_rMateChartXmlEncoder(this.dsMaster.getColumn(i, "SALE_AMT_30"));
               data[this.gfn_rMateChartXmlEncoder(this.dsMaster.getColumn(i, "PAY_WAY_40"))] = this.gfn_rMateChartXmlEncoder(this.dsMaster.getColumn(i, "SALE_AMT_40"));

               chartData.push(data);
        	}

        	// Call Draw Function
        	this.divChart.form.ff_drawChart(layoutStr, chartData);
        }


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
        this.loadIncludeScript("SML036PayWaySaleM01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
