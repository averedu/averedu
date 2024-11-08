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
            this.set_titletext("동적버튼메뉴");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"LVL\" type=\"INT\" size=\"4\"/><Column id=\"MENU_NO\" type=\"STRING\" size=\"32\"/><Column id=\"UPPER_MENU_NO\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_DC\" type=\"STRING\" size=\"32\"/><Column id=\"PROG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PROG_FG\" type=\"STRING\" size=\"32\"/><Column id=\"FORM_PATH\" type=\"STRING\" size=\"32\"/><Column id=\"FORM_ID\" type=\"STRING\" size=\"32\"/><Column id=\"FORM_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_LVL\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MENU_DIV\" type=\"STRING\" size=\"32\"/><Column id=\"LINK_YN\" type=\"STRING\" size=\"32\"/><Column id=\"SORT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"REG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"32\"/><Column id=\"MOD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"32\"/><Column id=\"REG_YN\" type=\"STRING\" size=\"32\"/><Column id=\"PRT_YN\" type=\"STRING\" size=\"32\"/><Column id=\"DOWN_YN\" type=\"STRING\" size=\"32\"/><Column id=\"IS_NEW\" type=\"STRING\" size=\"32\"/><Column id=\"IS_RET\" type=\"STRING\" size=\"32\"/><Column id=\"IS_SAVE\" type=\"STRING\" size=\"32\"/><Column id=\"IS_DEL\" type=\"STRING\" size=\"32\"/><Column id=\"IS_EXCEL\" type=\"STRING\" size=\"32\"/><Column id=\"IS_PRINT\" type=\"STRING\" size=\"32\"/><Column id=\"IS_CONFIRM\" type=\"STRING\" size=\"32\"/><Column id=\"IS_TMP1\" type=\"STRING\" size=\"32\"/><Column id=\"IS_TMP2\" type=\"STRING\" size=\"32\"/><Column id=\"IS_TMP3\" type=\"STRING\" size=\"32\"/><Column id=\"NEW_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"RET_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"SAVE_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"DEL_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"EXCEL_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"PRINT_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"CONFIRM_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"TMP1_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"TMP2_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"TMP3_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"AUTH_CD\" type=\"STRING\" size=\"32\"/><Column id=\"AUTH_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MY_MENU_FG\" type=\"STRING\" size=\"32\"/><Column id=\"SORT_HIR\" type=\"STRING\" size=\"32\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMenu1", this);
            obj._setContents("<ColumnInfo><Column id=\"LVL\" type=\"INT\" size=\"4\"/><Column id=\"MENU_NO\" type=\"STRING\" size=\"32\"/><Column id=\"UPPER_MENU_NO\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_DC\" type=\"STRING\" size=\"32\"/><Column id=\"PROG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PROG_FG\" type=\"STRING\" size=\"32\"/><Column id=\"FORM_PATH\" type=\"STRING\" size=\"32\"/><Column id=\"FORM_ID\" type=\"STRING\" size=\"32\"/><Column id=\"FORM_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_LVL\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MENU_DIV\" type=\"STRING\" size=\"32\"/><Column id=\"LINK_YN\" type=\"STRING\" size=\"32\"/><Column id=\"SORT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"REG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"32\"/><Column id=\"MOD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"32\"/><Column id=\"REG_YN\" type=\"STRING\" size=\"32\"/><Column id=\"PRT_YN\" type=\"STRING\" size=\"32\"/><Column id=\"DOWN_YN\" type=\"STRING\" size=\"32\"/><Column id=\"IS_NEW\" type=\"STRING\" size=\"32\"/><Column id=\"IS_RET\" type=\"STRING\" size=\"32\"/><Column id=\"IS_SAVE\" type=\"STRING\" size=\"32\"/><Column id=\"IS_DEL\" type=\"STRING\" size=\"32\"/><Column id=\"IS_EXCEL\" type=\"STRING\" size=\"32\"/><Column id=\"IS_PRINT\" type=\"STRING\" size=\"32\"/><Column id=\"IS_CONFIRM\" type=\"STRING\" size=\"32\"/><Column id=\"IS_TMP1\" type=\"STRING\" size=\"32\"/><Column id=\"IS_TMP2\" type=\"STRING\" size=\"32\"/><Column id=\"IS_TMP3\" type=\"STRING\" size=\"32\"/><Column id=\"NEW_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"RET_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"SAVE_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"DEL_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"EXCEL_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"PRINT_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"CONFIRM_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"TMP1_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"TMP2_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"TMP3_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"AUTH_CD\" type=\"STRING\" size=\"32\"/><Column id=\"AUTH_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MY_MENU_FG\" type=\"STRING\" size=\"32\"/><Column id=\"SORT_HIR\" type=\"STRING\" size=\"32\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("gdsMenul", this);
            obj._setContents("<ColumnInfo><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"groupId\" type=\"STRING\" size=\"256\"/><Column id=\"menuId\" type=\"STRING\" size=\"256\"/><Column id=\"menuNm\" type=\"STRING\" size=\"256\"/><Column id=\"menuUrl\" type=\"STRING\" size=\"256\"/><Column id=\"sortNo\" type=\"STRING\" size=\"256\"/><Column id=\"upMenuId\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"auth\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"level\">0</Col><Col id=\"groupId\">SN00000001</Col><Col id=\"menuId\">SN00000001</Col><Col id=\"menuNm\">메뉴1</Col><Col id=\"sortNo\">1</Col><Col id=\"upMenuId\">SN00000000</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"level\">1</Col><Col id=\"groupId\">SN00000001</Col><Col id=\"menuId\">SN00000007</Col><Col id=\"menuNm\">메뉴1-1</Col><Col id=\"sortNo\">1</Col><Col id=\"upMenuId\">SN00000001</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"level\">1</Col><Col id=\"groupId\">SN00000001</Col><Col id=\"menuId\">SN00000013</Col><Col id=\"menuNm\">메뉴1-2</Col><Col id=\"sortNo\">1</Col><Col id=\"upMenuId\">SN00000001</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"level\">1</Col><Col id=\"groupId\">SN00000001</Col><Col id=\"menuId\">SN00000014</Col><Col id=\"menuNm\">메뉴1-3</Col><Col id=\"sortNo\">1</Col><Col id=\"upMenuId\">SN00000001</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"level\">1</Col><Col id=\"groupId\">SN00000001</Col><Col id=\"menuId\">SN00000015</Col><Col id=\"menuNm\">메뉴1-4</Col><Col id=\"sortNo\">1</Col><Col id=\"upMenuId\">SN00000001</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"level\">0</Col><Col id=\"groupId\">SN00000002</Col><Col id=\"menuId\">SN00000002</Col><Col id=\"menuNm\">메뉴2</Col><Col id=\"sortNo\">2</Col><Col id=\"upMenuId\">SN00000000</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"level\">1</Col><Col id=\"groupId\">SN00000002</Col><Col id=\"menuId\">SN00000018</Col><Col id=\"menuNm\">메뉴2-1</Col><Col id=\"sortNo\">1</Col><Col id=\"upMenuId\">SN00000002</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"level\">1</Col><Col id=\"groupId\">SN00000002</Col><Col id=\"menuId\">SN00000023</Col><Col id=\"menuNm\">메뉴2-2</Col><Col id=\"sortNo\">2</Col><Col id=\"upMenuId\">SN00000002</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"level\">1</Col><Col id=\"groupId\">SN00000002</Col><Col id=\"menuId\">SN00000027</Col><Col id=\"menuNm\">메뉴2-3</Col><Col id=\"sortNo\">3</Col><Col id=\"upMenuId\">SN00000002</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"level\">1</Col><Col id=\"groupId\">SN00000002</Col><Col id=\"menuId\">SN00000028</Col><Col id=\"menuNm\">메뉴2-4</Col><Col id=\"sortNo\">3</Col><Col id=\"upMenuId\">SN00000002</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"level\">1</Col><Col id=\"groupId\">SN00000002</Col><Col id=\"menuId\">SN00000029</Col><Col id=\"menuNm\">메뉴2-5</Col><Col id=\"sortNo\">3</Col><Col id=\"upMenuId\">SN00000002</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"level\">0</Col><Col id=\"groupId\">SN00000003</Col><Col id=\"menuId\">SN00000003</Col><Col id=\"menuNm\">메뉴3</Col><Col id=\"sortNo\">3</Col><Col id=\"upMenuId\">SN00000000</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"level\">1</Col><Col id=\"groupId\">SN00000003</Col><Col id=\"menuId\">SN00000030</Col><Col id=\"menuNm\">메뉴3-1</Col><Col id=\"sortNo\">1</Col><Col id=\"upMenuId\">SN00000003</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"level\">1</Col><Col id=\"groupId\">SN00000003</Col><Col id=\"menuId\">SN00000032</Col><Col id=\"menuNm\">메뉴3-2</Col><Col id=\"sortNo\">2</Col><Col id=\"upMenuId\">SN00000003</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"level\">0</Col><Col id=\"groupId\">SN00000004</Col><Col id=\"menuId\">SN00000004</Col><Col id=\"menuNm\">메뉴4</Col><Col id=\"sortNo\">4</Col><Col id=\"upMenuId\">SN00000000</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"level\">1</Col><Col id=\"groupId\">SN00000004</Col><Col id=\"menuId\">SN00000035</Col><Col id=\"menuNm\">메뉴4-1</Col><Col id=\"sortNo\">1</Col><Col id=\"upMenuId\">SN00000004</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"level\">1</Col><Col id=\"groupId\">SN00000004</Col><Col id=\"menuId\">SN00000043</Col><Col id=\"menuNm\">메뉴4-2</Col><Col id=\"sortNo\">2</Col><Col id=\"upMenuId\">SN00000004</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"level\">0</Col><Col id=\"groupId\">SA00000005</Col><Col id=\"menuId\">SA00000005</Col><Col id=\"menuNm\">샘플</Col><Col id=\"menuUrl\"/><Col id=\"sortNo\">6</Col><Col id=\"upMenuId\">SA00000001</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"level\">1</Col><Col id=\"groupId\">SA00000005</Col><Col id=\"menuId\">SA00000006</Col><Col id=\"menuNm\">표준 및 기본 정의</Col><Col id=\"sortNo\">1</Col><Col id=\"upMenuId\">SA00000005</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"groupId\">SA00000005</Col><Col id=\"menuId\">SA00006002</Col><Col id=\"menuNm\">script 표준</Col><Col id=\"menuUrl\">sample::sampleScript.xfdl</Col><Col id=\"sortNo\">1</Col><Col id=\"upMenuId\">SA00000006</Col><Col id=\"useYn\">Y</Col><Col id=\"auth\">YNNNNY</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"groupId\">SA00000005</Col><Col id=\"menuId\">SA00006003</Col><Col id=\"menuNm\">화면표준 및 transaction</Col><Col id=\"menuUrl\">sample::sampleTransaction.xfdl</Col><Col id=\"sortNo\">1</Col><Col id=\"upMenuId\">SA00000006</Col><Col id=\"useYn\">Y</Col><Col id=\"auth\">YYYYYY</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"groupId\">SA00000005</Col><Col id=\"menuId\">SA00006005</Col><Col id=\"menuNm\">다양한 그리드 표현</Col><Col id=\"menuUrl\">sample::sampleGridType.xfdl</Col><Col id=\"sortNo\">1</Col><Col id=\"upMenuId\">SA00000006</Col><Col id=\"useYn\">Y</Col><Col id=\"auth\">YYYYYY</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"groupId\">SA00000005</Col><Col id=\"menuId\">SA00006006</Col><Col id=\"menuNm\">그리드 기능</Col><Col id=\"menuUrl\">sample::sampleGrid.xfdl</Col><Col id=\"sortNo\">1</Col><Col id=\"upMenuId\">SA00000006</Col><Col id=\"useYn\">Y</Col><Col id=\"auth\">YYYYYY</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"groupId\">SA00000005</Col><Col id=\"menuId\">SA00006007</Col><Col id=\"menuNm\">그리드 합계 &amp; supress &amp; AutoSize</Col><Col id=\"menuUrl\">sample::sampleGridSum.xfdl</Col><Col id=\"sortNo\">1</Col><Col id=\"upMenuId\">SA00000006</Col><Col id=\"useYn\">Y</Col><Col id=\"auth\">YYYYYY</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"groupId\">SA00000005</Col><Col id=\"menuId\">SA00006008</Col><Col id=\"menuNm\">그리드 페이징</Col><Col id=\"menuUrl\">sample::samplePaging.xfdl</Col><Col id=\"sortNo\">1</Col><Col id=\"upMenuId\">SA00000006</Col><Col id=\"useYn\">Y</Col><Col id=\"auth\">YYYYYY</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"groupId\">SA00000005</Col><Col id=\"menuId\">SA00006009</Col><Col id=\"menuNm\">그리드 drag&amp;drop</Col><Col id=\"menuUrl\">sample::sampleDragDrop.xfdl</Col><Col id=\"sortNo\">1</Col><Col id=\"upMenuId\">SA00000006</Col><Col id=\"useYn\">Y</Col><Col id=\"auth\">YYYYYY</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"groupId\">SA00000005</Col><Col id=\"menuId\">SA00006010</Col><Col id=\"menuNm\">그리드 달력</Col><Col id=\"menuUrl\">sample::sampleGridCalendar.xfdl</Col><Col id=\"sortNo\">1</Col><Col id=\"upMenuId\">SA00000006</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"groupId\">SA00000005</Col><Col id=\"menuId\">SA00006013</Col><Col id=\"menuNm\">그리드 Row 확장</Col><Col id=\"menuUrl\">sample::sampleGridExpandRow.xfdl</Col><Col id=\"sortNo\">1</Col><Col id=\"upMenuId\">SA00000006</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"groupId\">SA00000005</Col><Col id=\"menuId\">SA00006014</Col><Col id=\"menuNm\">팝업</Col><Col id=\"menuUrl\">sample::samplePopup.xfdl</Col><Col id=\"sortNo\">1</Col><Col id=\"upMenuId\">SA00000006</Col><Col id=\"useYn\">Y</Col><Col id=\"auth\"/></Row><Row><Col id=\"level\">2</Col><Col id=\"groupId\">SA00000005</Col><Col id=\"menuId\">SA00006015</Col><Col id=\"menuNm\">메세지 목록</Col><Col id=\"menuUrl\">sample::sampleMessage.xfdl</Col><Col id=\"sortNo\">1</Col><Col id=\"upMenuId\">SA00000006</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"groupId\">SA00000005</Col><Col id=\"menuId\">SA00006018</Col><Col id=\"menuNm\">정합성 체크</Col><Col id=\"menuUrl\">sample::sampleValidation.xfdl</Col><Col id=\"sortNo\">1</Col><Col id=\"upMenuId\">SA00000006</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"level\">1</Col><Col id=\"groupId\">SA00000005</Col><Col id=\"menuId\">SA00000007</Col><Col id=\"menuNm\">콤포넌트 및 연동</Col><Col id=\"sortNo\">2</Col><Col id=\"upMenuId\">SA00000005</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"groupId\">SA00000005</Col><Col id=\"menuId\">SA00007001</Col><Col id=\"menuNm\">스케치</Col><Col id=\"menuUrl\">sample::sampleSketch.xfdl</Col><Col id=\"sortNo\">1</Col><Col id=\"upMenuId\">SA00000007</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"groupId\">SA00000005</Col><Col id=\"menuId\">SA00007002</Col><Col id=\"menuNm\">step</Col><Col id=\"menuUrl\">sample::sampleStep.xfdl</Col><Col id=\"sortNo\">1</Col><Col id=\"upMenuId\">SA00000007</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"groupId\">SA00000005</Col><Col id=\"menuId\">SA00007004</Col><Col id=\"menuNm\">기간/월 달력</Col><Col id=\"menuUrl\">sample::sampleCalendar.xfdl</Col><Col id=\"sortNo\">1</Col><Col id=\"upMenuId\">SA00000007</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"groupId\">SA00000005</Col><Col id=\"menuId\">SA00007005</Col><Col id=\"menuNm\">멀티콤보</Col><Col id=\"menuUrl\">sample::sampleMultiCombo.xfdl</Col><Col id=\"sortNo\">1</Col><Col id=\"upMenuId\">SA00000007</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"groupId\">SA00000005</Col><Col id=\"menuId\">SA00007006</Col><Col id=\"menuNm\">멀티체크박스</Col><Col id=\"menuUrl\">sample::sampleMultiCheckbox.xfdl</Col><Col id=\"sortNo\">1</Col><Col id=\"upMenuId\">SA00000007</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"groupId\">SA00000005</Col><Col id=\"menuId\">SA00007007</Col><Col id=\"menuNm\">Edit -ms-clear</Col><Col id=\"menuUrl\">sample::sampleEditMsClear.xfdl</Col><Col id=\"sortNo\">1</Col><Col id=\"upMenuId\">SA00000007</Col><Col id=\"useYn\">Y</Col><Col id=\"auth\">YYYYYY</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"groupId\">SA00000005</Col><Col id=\"menuId\">SA00007008</Col><Col id=\"menuNm\">아코디언 Script 방식</Col><Col id=\"menuUrl\">sample::sampleAccordion.xfdl</Col><Col id=\"sortNo\">1</Col><Col id=\"upMenuId\">SA00000007</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"groupId\">SA00000005</Col><Col id=\"menuId\">SA00007009</Col><Col id=\"menuNm\">아코디언 Arrangement 방식</Col><Col id=\"menuUrl\">sample::sampleArrangement.xfdl</Col><Col id=\"sortNo\">1</Col><Col id=\"upMenuId\">SA00000007</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"groupId\">SA00000005</Col><Col id=\"menuId\">SA00007015</Col><Col id=\"menuNm\">file up/download for HTML5</Col><Col id=\"menuUrl\">sample::sampleFileUpDownloadForHTML5.xfdl</Col><Col id=\"sortNo\">1</Col><Col id=\"upMenuId\">SA00000007</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"groupId\">SA00000005</Col><Col id=\"menuId\">SA00007016</Col><Col id=\"menuNm\">file up/download</Col><Col id=\"menuUrl\">sample::sampleFileUpDownload.xfdl</Col><Col id=\"sortNo\">1</Col><Col id=\"upMenuId\">SA00000007</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"groupId\">SA00000005</Col><Col id=\"menuId\">SA00007018</Col><Col id=\"menuNm\">extCommon dll</Col><Col id=\"menuUrl\">sample::sampleExtCommon.xfdl</Col><Col id=\"sortNo\">1</Col><Col id=\"upMenuId\">SA00000007</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"groupId\">SA00000005</Col><Col id=\"menuId\">SA00007019</Col><Col id=\"menuNm\">webBrowser scroll</Col><Col id=\"menuUrl\">sample::sampleWebBrowserScroll.xfdl</Col><Col id=\"sortNo\">1</Col><Col id=\"upMenuId\">SA00000007</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"level\">1</Col><Col id=\"groupId\">SA00000005</Col><Col id=\"menuId\">SA00000008</Col><Col id=\"menuNm\">테스트</Col><Col id=\"menuUrl\"/><Col id=\"sortNo\">1</Col><Col id=\"upMenuId\">SA00000005</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"groupId\">SA00000005</Col><Col id=\"menuId\">SA00008001</Col><Col id=\"menuNm\">테스트 실행</Col><Col id=\"menuUrl\">test::test.xfdl</Col><Col id=\"sortNo\">1</Col><Col id=\"upMenuId\">SA00000008</Col><Col id=\"useYn\">Y</Col><Col id=\"auth\">YYYYYY</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"groupId\">SA00000005</Col><Col id=\"menuId\">SA00008002</Col><Col id=\"menuNm\">탭페이지 추가/삭제</Col><Col id=\"menuUrl\">sample::sampleTabPage.xfdl</Col><Col id=\"sortNo\">1</Col><Col id=\"upMenuId\">SA00000008</Col><Col id=\"useYn\">Y</Col><Col id=\"auth\">YYYYYY</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta00","0","50",null,null,"0","18",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("black");
            this.addChild(obj.name, obj);

            obj = new Div("divTopBtn","10","55","560","420",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrolltype("vertical");
            obj.set_border("1px solid chartreuse");
            this.addChild(obj.name, obj);

            obj = new Div("divSubBtn","580","54",null,"420","8",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_border("1px solid chartreuse");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00","299","490","447",null,null,"35",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsMenu1");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"47\"/><Column size=\"57\"/><Column size=\"69\"/><Column size=\"51\"/><Column size=\"206\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"LVL\"/><Cell col=\"1\" text=\"MENU_ID\"/><Cell col=\"2\" text=\"MENU_NM\"/><Cell col=\"3\" text=\"프리픽스\"/><Cell col=\"4\" text=\"폼경로\"/></Band><Band id=\"body\"><Cell text=\"bind:LVL\"/><Cell col=\"1\" text=\"bind:MENU_ID\"/><Cell col=\"2\" text=\"bind:MENU_NM\"/><Cell col=\"3\" text=\"bind:FORM_PATH\"/><Cell col=\"4\" text=\"bind:FORM_ID\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00_00","13","489","277",null,null,"35",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsMenu");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"54\"/><Column size=\"69\"/><Column size=\"174\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"LVL\"/><Cell col=\"1\" text=\"MENU_ID\"/><Cell col=\"2\" text=\"MENU_NM\"/></Band><Band id=\"body\"><Cell text=\"bind:LVL\"/><Cell col=\"1\" text=\"bind:MENU_ID\"/><Cell col=\"2\" text=\"bind:MENU_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskCnt","412","8","199","36",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_value("3");
            this.addChild(obj.name, obj);

            obj = new Div("divView","756","487",null,null,"10","35",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("divView");
            obj.set_border("1px solid chartreuse");
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

        };
        
        // User Script
        this.registerScript("SML043DynamicBtnMenuM01.xfdl", function() {
        /**
        *  컨설팅 표준화 작업
        *  @MenuPath    샘플 > script 표준
        *  @FileName 	sampleScript.xfdl
        *  @Creator 	jiback
        *  @CreateDate 	2017.03.09
        *  @Desction    스크립트 표준 및 주석 표준 정의
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2018.01.01     	jiback 	                최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * include 영역(업무화면에서 꼭 필요한 경우에만 사용하세요)
         ************************************************************************************************/
        //include "lib::libCommon.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/

        this.fvTopBtnPrefix = "TOP_";
        this.fvSubBtnPrefix = "SUB_";

        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        /**
         * @description 화면 onload시 처리내역(필수)
        */
        this.form_onload = function(obj,e)
        {
        	//폼에 공통으로 로드시 사용하는 함수.
            this.gfn_formOnload(obj.e);
            //사용자 화면  초기화 함수
            this.fn_Load();
        };

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/

        /*
         * 폼에 있는 버튼 객체를 초기화 하는 함수
         * 인자값은 this.divTopBtn.form 버튼을 전부 삭제처리
         */
        this.fn_setObjBtnDestroy = function(objForm)
        {
        	var arrComp  = objForm.components;
        	var nLength = arrComp.length-1;
        	for(var i=nLength; i>=0; i--)
        	{
        		var objComp = arrComp[i];
        		if(objComp instanceof nexacro.Button)
        		{
        			objForm.removeChild(objComp.name);
        			objComp.destroy();
        			objComp = null;
        		}
        	}
        };

        /*
         * 등록한 메뉴에 1레벨에 있는 글로발에서 필터링 로컬 데이타셋에 담는 로직
         */
        this.fn_Load = function ()
        {
        	this.fn_setObjBtnDestroy(this.divTopBtn.form);

        	var objApp = nexacro.getApplication();
        	objApp.gds_Menu.filter("MENU_LVL==0");
        	this.dsMenu.copyData(objApp.gds_Menu, true);
        	objApp.gds_Menu.filter("");

        	this.fn_setTopMenu();
        };
        /*
         * 레벨에 맞게 메뉴를 생성한다.(동적생성)
         */
        this.fn_setTopMenu = function ()
        {
        	for (var i = 0; i < this.dsMenu.getRowCount(); i++)
        	{
        		var strID 			= this.dsMenu.getColumn(i, "MENU_ID");
        		var strName 		= this.dsMenu.getColumn(i, "MENU_NM");
        		this.fn_createTopMenu(strID, strName, i);
        	}
        	this.divTopBtn.form.resetScroll();
        };

        /*
         * 탑메뉴를 통적생성을 한다.
         */
        this.fn_createTopMenu = function (strID, strName, index)
        {
        	// Creating page button
        	var intLeft   = 0;
        	var intHeight = 80;
        	var intWidth  = 200;
        	var intSpace  = 5;
        	var intTop    = index * (intHeight+intSpace)
        	var objBtn 	  = new Button();
        	objBtn.init(this.fvTopBtnPrefix + strID, intLeft,intTop,intWidth,intHeight);
        	this.divTopBtn.addChild(objBtn.name, objBtn);
        	objBtn.set_text(strName);
        	objBtn.menuid = strID;
        	objBtn.set_cssclass("btn_WF_Pop");
        	objBtn.set_textAlign("center");
        	objBtn.set_border("1px solid black");
        	objBtn.set_font('34px/normal "휴먼둥근헤드라인"');
        	//objBtn.set_background("brown");
        	objBtn.set_right(0);
        	objBtn.menuId = strID;
        	objBtn.menuNm = strName;
        	objBtn.setEventHandler("onclick", this.btnMainMenu_onclick, this);
        	objBtn.set_visible(true);
        	objBtn.show();
        	//this.divTopBtn.form.Button00.set_font('48px/normal Malgun Gothic');
        };
        //*******************************************************************************************************
        /*
         *서버메뉴를 동적으로 생성하는 로직
         */
        this.btnMainMenu_onclick = function (obj, e)
        {
        	this.fn_setObjBtnDestroy(this.divSubBtn.form);
        	this.fn_get1StepMenuClick(obj.menuId);
        };
        /*
         *서버메뉴를 필터링해서 가지고 오는 메뉴처리
         */
        this.fn_get1StepMenuClick = function (menuId)
        {
        	this.dsMenu1.clearData();
        	var objApp = nexacro.getApplication();
        	objApp.gds_Menu.filter("MENU_LVL==1 && PMENU_ID == '" + menuId +"'");
        	this.dsMenu1.copyData(objApp.gds_Menu, true);
        	objApp.gds_Menu.filter("");

        	//trace(this.dsMenu1.saveXML());

        	this.fn_setSubMenu();
        };
        /*
         * 레벨에 맞게 서브메뉴를 생성한다.(동적생성)
         */
        this.fn_setSubMenu = function ()
        {
        	var colCnt = this.mskCnt.value; // 테스트 용도
        	if(this.gfn_isNull(colCnt))
        	{
        		colCnt = 1;
        	}
        	var rowCntGubn = 0;		// 행의 초기값을 구분하는 변수
        	var rowCnt     = colCnt;     // 열의 갯수를 설정하는 변수
        	var row        = -1;    // 행의 갯수를 카운터 하는 변수

        	for (var i = 0; i < this.dsMenu1.getRowCount(); i++)
        	{
        		var strID 			= this.dsMenu1.getColumn(i, "MENU_ID");
        		var strName 		= this.dsMenu1.getColumn(i, "MENU_NM");
        		var strFormPath 	= this.dsMenu1.getColumn(i, "FORM_PATH");
        		var strFormId 		= this.dsMenu1.getColumn(i, "FORM_ID");

        		var intRest = i%rowCnt;
        		if(intRest == 0)
        		{
        			row = row + 1;

        		}
        		this.fn_createSubMenu(strID, strName, strFormPath ,strFormId ,i,rowCnt,row);


        	}
        	this.divSubBtn.form.resetScroll();
        };
        /*
         * 서브메뉴를 통적생성을 한다.
         */
        this.fn_createSubMenu = function (strID, strName, strFormPath ,strFormId,index,rowCnt,row)
        {
        	var rowCntGubn = index % rowCnt;
        	var col = rowCntGubn;

        	var intWidth     = 200;
        	var intHeight    = 100;
        	var intColSpace  = 10;
        	var intRowSpace  = 10;
        	var intTop       = row * (intHeight+intRowSpace);
        	var intLeft      = col * (intWidth+intColSpace);

        	var objBtn = new Button();
        	objBtn.init(this.fvSubBtnPrefix + strID, intLeft, intTop ,intWidth, intHeight);
        	this.divSubBtn.addChild(objBtn.name, objBtn);
        	objBtn.set_text(strName);
        	objBtn.menuid = strID;
        	objBtn.set_cssclass("btn_WF_Crud");
        	objBtn.set_textAlign("center");
        	objBtn.set_border("1px solid black");
        	objBtn.set_font('bold 20px/normal "Malgun Gothic"');
        	//objBtn.set_background("brown");
        	objBtn.menuId  	= strID;
        	objBtn.menuNm  	= strName;
        	objBtn.formPath = strFormPath;
        	objBtn.formId 	= strFormId;
        	objBtn.setEventHandler("onclick", this.btnSubMenu_onclick, this);
        	objBtn.set_visible(true);
        	objBtn.show();
        };
        /*
         * 서브메뉴 클릭시 이벤트처리
         */
        this.btnSubMenu_onclick = function (obj, e)
        {

        	var strFormPath = obj.formPath;
        	var strFormId   = obj.formId;
        	this.fn_setView(strFormPath,strFormId);
        };

        this.fn_setView = function (strFormPath,strFormId)
        {
        	if(!this.gfn_isNull(strFormPath) && !this.gfn_isNull(strFormPath))
        	{
        		this.divView.set_url("");
        		var strUrl = strFormPath + "::" + strFormId;
        		this.divView.set_url(strUrl);
        		this.divView.form.resetScroll();
        	}else
        	{
        		this.divView.set_url("");
        	}
        };
        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/

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
        };
        this.loadIncludeScript("SML043DynamicBtnMenuM01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
