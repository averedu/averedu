
/**
 * @fileoverview nexup utillity Library
 */

/*
*●==========================================================================================================
*●====================================== 정합성체크 =======================================================
*●===========================================================================================================
* isString : value의 string 여부 반환
* isNumber : value의 number 여부 반환.
* isBoolean : value의 boolean 여부 반환.
* isNull   : value의 null 여부 반환
* isUndefined  : value의 undefined 여부 반환.
* isEmpty   : value의 빈값 여부 반환.
* isObject  : value의 Object 여부 반환.
* isArray   : value의 Array 여부 반환.
* isDate   : value의 Date 여부 반환.
* isStringDate  : yyyyMMdd형태의 날짜 문자열 여부.( 예 : "20111231" ).
* isFunction  : value의 Function 여부 반환
* isRegExp    : value의 RegExp 여부 반환.
* isPrimitive  : primitive type (undefined, null, boolean, string, number) 여부 반환.
* isComponent  : nexacro component 여부 반환
* isSpace    :  value의 Space 여부 반환.
* iif    : 첫 값의 True/False를 검사해 그 결과에 따라 두번째 또는 세번째 값을 반환.
* getUniqueId :  유일한 ID 를 반환
* getSequenceId  : Form 내에서 지정된 접두문자열에 순번이 붙여진 ID 를 반환
*●===========================================================================================================
*●===================================== Array ===============================================================
*●===========================================================================================================
* arrayEach  :배열의 각 항목에 대해 주어진 콜백 함수를 호출한다
* toArray :배열 형태로 변환 처리한다.
* indexOf :지정된 항목이 처음 나오는 배열 위치를 반환한다. 
* lastIndexOf : 지정된 항목이 처음 나오는 배열 위치를 뒤에서부터 찾아 반환한다.
* contains : 지정된 항목이 배열에 포함되어 있는지 확인한다.
* split2 : 2차원 배열 변환
* map : 배열의 모든 항목을 인자로 사용해서 제공하는 함수의 호출 결과로 새로운 배열을 작성한다.
* clean : 배열의 빈 항목을 제거한다.
* unique : 유일한 항목을 찾아 새로운 배열로 구성해서 리턴한다.
* filter : 대상 배열에서 Callback함수 조건을 만족하는 항목으로 새로운 배열을 구성한다.
* insertAt : 원하는 위치에 새로운 항목을 insert처리한다.
* insertBefore : 원하는 항목의 앞 위치에 새로운 항목을 insert처리한다.
* removeAt : 원하는 위치의 항목을 배열에서 삭제 처리한다.
* remove : 원하는 항목을 배열에서 삭제 처리한다.
*●===========================================================================================================
*●===================================== STRING ==============================================================
*●===========================================================================================================
* utf8ByteCount : utf8을 기준으로 문자열 길이계산.
* asciiByteCount : ascii를 기준으로 문자열 길이계산.
* indexOfIgnoreCase  : 문자열의 위치를 대소문자 구별없이 찾는다.
* replaceIgnoreCase : 문자열을 대소문자 구별없이 주어진 변경문자열(문자) 치환한다.
* lastIndexOfIgnoreCase : 문자열의 위치를 대소문자 구별없이 오른쪽에서 왼쪽으로 검색이 수행됩니다.
* getRightStr  : 문자열의 오른쪽에서 length만큼의 문자열을 가져온다.
* removeStr  : 문자열을 "좌 or 우" + "대소문자 구분유무"로 첫번째 일치되는 문자열 제거.
* format   : 문자열 내의 {0},{1}...{n}값을 전달받은 arguments로 치환.
* getLength : 문자열 길이계산.
* countNonword : 문자열의 특수문자(개행문자 Tab문자 ~ ` ! @ # $ % % ^ & * - = + 등) 포함개수.
* strFullToHalf : 전각문자를 반각문자로 변환.
* strHalfToFull : 반각문자를 전각문자로 변환
* repeatStr  : 주어진 문자열을 n회 반복해서 반환한다.
* hanGulToUnicode : 한글 → 유니코드로 변환.
* unicodeToHanGul : 유니코드 → 한글로 변환.
* startsWith : 지정된 문자로 시작하는지 여부.
* endsWith : 지정된 문자로 끝나는지 여부.
* getMaskFormatString : 주어진 문자열의 Mask Format 처리된 문자열을 반환합니다.
* escapeXML : XML 의 예약문자,특수문자를 치환하여 반환.
* capitalize : 주어진 문자열을 첫 문자만 대문자 변경
*●===========================================================================================================
*●===================================== DATE ================================================================
*●===========================================================================================================
* addDate : 입력된 날짜에 OffSet으로 지정된 만큼의 날짜를 증감한다.
* addMonth : 입력된 날짜에 OffSet 으로 지정된만큼의 월을 증감한다.
* getDiffDay : 두 일자 사이의 일 수 계산.
* getDiffMonth : 두 일자 사이의 월 수 계산.(정확한 달수를 처리하려면 
			          fromDate Day값을 1로 하고 toDate를 마지막일자로 처리
* getLastDayOfMonth : 해당월의 마지막 날짜를 숫자로 구하기.
* getWeekOfYear : yyyyMMdd 형태의 날짜를 입력하면 해당연도의 날짜에 해당하는 주차반환.
* getDayOfYear : 해당연도의 1월 1일부터 날짜까지의 일 수 반환
* strToDate : yyyy, yyyyMM, yyyyMMdd, yyyyMMddhh, yyyyMMddhhmm, yyyyMMddhhmmss 형태의 
                   문자열을 Date객체로 반환.
* isLeapYear : 윤년 여부.
* solarToLunar : 양력을 음력으로 변환해주는 함수.
* lunarToSolar : 음력을 양력으로 변환.
* getFirstDate : 전달된 月의 1일 만들기
* getDiffTime : 날짜 차이 반환.
* getDateMaskFormatString : 주어진 날짜 객체의 Mask Format 처리된 문자열을 반환
* dateFormatString : 날짜 변환 함수
*●===========================================================================================================
*●===================================== Number ==============================================================
*●===========================================================================================================
* intToHanGul : 숫자를 한글로 표기
* bytesToSize : 파일 사이즈 환산
* evenRound : 반올림할 자리의 값이 1~4인 경우는 버리고, 6~9인 경우는 올림 처리한다.
* getNumberMaskFormatString : 주어진 숫자 형식값에 Mask Format 처리된 문자열을 반환합니다.
*●===========================================================================================================
*●=====================================  JSON ===============================================================
*●===========================================================================================================
* makeJSONarguments  : string으로 넘어오는 파라메터를 JSON object 로 변환
*●===========================================================================================================
*●=====================================  Object =============================================================
*●===========================================================================================================
* objectEach  : object에서 각 반복되는 속성값들을 주어진 함수로 처리한다.
* getServiceArgumenets : object 속성값들을 transcation 함수에 사용되는 인자인 strArgument를
						      transaction 형식의 값으로 변경 
* getServiceDatasets : object 속성값들을 transcation 함수에 사용되는 인자인
						    strInDatasets, strOutDatasets를 transaction 형식의 값으로 변경한다.     
* getValues : object에 속성값들을 array로 넘겨준다.                                             
* toDataset : object에 속성들(name, value)를 dataset에 구성한다
*●===========================================================================================================
*●=====================================  Component ==========================================================
*●===========================================================================================================
* setUserProperty : 주어진 nexacro Component, object 에 사용자 속성을 추가한다
* getUserProperty : 주어진 nexacro Component, object 에서 사용자 정의 속성값을 얻어온다.
* isVisible : 주어진 컴포넌트가 실제 화면에 보여지는지 여부를 반환
* isVisual  : 주어진 오브젝트가 Visual한 컴포넌트인지를 반환
* isEnable : 주어진 컴포넌트의 실제 활성화 여부를 반환
* getComponent : 주어진 nexacro Component 에 포함되고 조건에 맞는 component, object 반환
* lookup : 주어진 대상을 포함한 상위 범위로 지정된 이름에 최초로 일치하는 component, object 반환
* convertXY : nexaCompB기준의 XY좌표를 nexaCompA기준의 XY좌표로 변환. 
* getTopLevelForm : 주어진 Form 을 포함하는 최상위 Form을 찾는다.
* getPopupPosition : nexacro Component 기준으로
*                         지정된 size를 갖는 컴포넌트를 표시하기위한 방향 및 좌표를 반환한다.
* getScrollTop : 수직스크롤바의 trackbar위치를 반환한다.
* getScrollLeft : 수평스크롤바의 trackbar위치를 반환한다.
* getScrollBarSize : 스크롤바 height(수평스크롤바) 또는 width(수직스크롤바)의 size를 반환한다.
* getCurrentScrollBarSize : 스크롤바가 표시됐을 때에만 size를 반환한다.
*●===========================================================================================================
*●=====================================  Dataset ============================================================
*●===========================================================================================================
* isCheckDs : 해당 데이터셋명으로 검색하여 데이터셋이 없으면 데이터셋을 생성
* getDataset : 해당 데이터셋명으로 검색하여 데이터셋찾아서 리턴 없으면 -1을 반환
* splitDsName : = 을 배열로 분리 처리
* deleteData : dataset object에서 키에 해당되는 Row를 찾아서 삭제
* findData : dataSet object에서 키에 해당되는 Row를 찾아서 rowpostion 전달
* moveData : dataset object에서 키에 해당되는 Row를 찾아서 이동
* editData :  dataset object에서 키에 해당되는 Row를 찾아서 값을 변경
* getData : dataset object에서 가져오는 함수 Null경우에는 Type에 의한 예외처리 하여 반환
* getLookupData : dataSet object에서 키에 해당되는 Row를 찾아서 칼럼값을 전달
* isUpdated : dataSet의 Row 중에서 변경된 내용이 있는지 여부를  판단하는 함수
* isUpdatedRow : dataSet의 Row가 변경되었는지 판단하는 함수
* isUpdateColumn : dataSet의 Row 에서 해당 칼럼이 변경되었는지
* allRowDataCall : Dataset의 모든 행을 함수의 인자로 넘겨주고 함수 호출처리
* dsFilter : Dataset의 필터한 정보를 대상 Dataset으로 Copy하는 기능
*●============================================================================================================
*●===================================== Develper Log =========================================================
*●============================================================================================================
* log  : 공통 log 실행 함수
*●============================================================================================================
*●===================================== ETC ==================================================================
*●============================================================================================================

* checkEmail : 입력값이 e-mail Type인지 체크하는 함수
* today  : 해당 PC의 오늘 날짜(korea)를 가져온다.
* todayEng : 해당 PC의 오늘 날짜(English)를 가져온다.
* replaceDateKorea : 날짜 형식을 englisg 형태를  korea 형식으로 변환
* todayTime : 해당 PC의 오늘 날짜+시간를 가져온다.
* checkEmail : 입력값이 e-mail Type인지 체크하는 함수 
* checkPhone : 입력값이 전화번호 format 인지 체크하는 함수
* getObjFont : Font Object 생성 반환
* convertMessage : 공통 메세지 치환
* searchParentFunc : 부모창에 존재하는 함수명 검색하여 호출 
* isNvl : 입력값이 null에 해당되면 val2(대체문자열)로 반환한다
* decode : 입력된 값 또는 수식을 검사해 적당한 값을 반환.
*/


/**
 * create namespace variable object
 * @private
*/
createNS("nexutil");


/*●============================
	    정합성체크
==============================●*/
/**
 * value의 string 여부 반환
 * @public
 * @param {*} value 확인할 value.
 * @return {boolean} string 여부.
 * @example
 * trace(nexutil.isString("test string!!!"));	// output : true
 * trace(nexutil.isString(1234));	// output : false
 */
nexutil.isString =  function(value) 
{
	return typeof value === 'string';
};

/**
 * value의 number 여부 반환.
 * @public
 * @param {*} value 확인할 value.
 * @return {boolean} number 여부.
 * @example
 * trace(nexutil.isNumber(1234));	// output : true
 * trace(nexutil.isNumber("1234"));	// output : false		 
  */		
nexutil.isNumber = function(value) 
{
	return typeof value === 'number' && isFinite(value);
};		

/**
 * value의 boolean 여부 반환.
 * @public
 * @param {*} value 확인할 value.
 * @return {boolean} boolean 여부.
 * @example
 * trace(nexutil.isBoolean(true));	// output : true
 * trace(nexutil.isBoolean("true"));	// output : false		 
 */
nexutil.isBoolean = function(value) 
{
	return typeof value == 'boolean'; 
}; 
	  
/**
 * value의 null 여부 반환.
 * @public
 * @param {*} value 확인할 value.
 * @return {boolean} null 여부.
 * @example
 * trace(nexutil.isNull(null));	// output : true
 * var a; // undefined
 * trace(nexutil.isNull(a));	// output : false		
 * trace(nexutil.isNull(""));	// output : false
 */
nexutil.isNull= function(value)
{
	return value === null;
};

/**
 * value의 undefined 여부 반환.
 * @public
 * @param {*} value 확인할 value.		 
 * @return {boolean} undefined 여부.
 * @example
 * var a;
 * trace(nexutil.isUndefined(a));	// output : true
 *
 * var a = "";
 * trace(nexutil.isUndefined(a));	// output : false
 */
nexutil.isUndefined = function(value)
{
	return value === undefined;
};

/**
 * value의 빈값 여부 반환.<br>
 * @public
 * 1. null, undefined type : true 반환<br>
 * 2. string, array type : length 가 0인 경우 true 반환<br>
 * 3. object type : 하위 속성이 존재할 경우 true 반환<br>
 * 4. boolean, number, date type : false 반환
 *
 * @param {*} value 확인할 value.
 * @return {boolean} empty 여부.
 * @example
 * var a;	// undefined
 * trace(nexutil.isEmpty(a));	// output : true
 *
 * var a = null;	// null
 * trace(nexutil.isEmpty(a));	// output : true
 *
 * var a = "";	// string
 * trace(nexutil.isEmpty(a));	// output : true
 *
 * var a = "abc";	// string
 * trace(nexutil.isEmpty(a));	// output : false
 *
 * var a = [];	// array
 * trace(nexutil.isEmpty(a));	// output : true
 *
 * var a = [1,2,3];	// array
 * trace(nexutil.isEmpty(a));	// output : false
 *
 * var a = new Array();	// array
 * trace(nexutil.isEmpty(a));	// output : true
 *
 * var a = new Array(3);	// array
 * trace(nexutil.isEmpty(a));	// output : false
 *
 * var a = {};	// object
 * trace(nexutil.isEmpty(a));	// output : true
 *
 * var a = {a:'1', b:'2'};	// object
 * trace(nexutil.isEmpty(a));	// output : false
 *
 * var a = new Object();	// object
 * trace(nexutil.isEmpty(a));	// output : true
 *
 * var a = new Object();	// object
 * a.test = "abc";
 * trace(nexutil.isEmpty(a));	// output : false
 *
 * var a = true;	// boolean
 * trace(nexutil.isEmpty(a));	// output : false
 *
 * var a = 0;	// number
 * trace(nexutil.isEmpty(a));	// output : false
 *
 * var a = new Date();	// date
 * trace(nexutil.isEmpty(a));	// output : false
 */
nexutil.isEmpty = function(value)
{
	// null, undefined ==> true
	if ( value == null ) return true;
	
	// String, Array ==> length == 0
	if ( this.isString(value) || this.isArray(value) )
	{
		return value.length == 0 ? true : false;
	}
	else if ( nexutil.isObject(value) )
	{
	
		for (var p in value) 
		{
			if ( value.hasOwnProperty(p) )
			{
				return false;
			}
		}
		return true;
	}
	
	return false;
};

/**
 * empty값인 경우 대체 값으로 치환
 * @param {*} Val 치환대상.
 * @param {*} rtnValue 치환값.
 * @return {string} 치환값.
 */
nexutil.isEmptyToString = function (Val, rtnValue)
{
	if(this.isEmpty(Val)==true)
	{
		return rtnValue;
	}else
	{
		return Val;
	}
};


/**
 * value의 Object 여부 반환.
 * @public
 * @param {*} value 확인할 value.
 * @return {boolean} Object 여부.
 * @example
 * var o = new Object();
 * trace(nexutil.isObject(o));	// output : true
 * 
 * var o = {};
 * trace(nexutil.isObject(o));	// output : true
 *
 * var o = [1,2,3];
 * trace(nexutil.isObject(o));	// output : false
 *
 * var o = new Button();
 * trace(nexutil.isObject(o));	// output : false
 *
 * var o = new Rect();
 * trace(nexutil.isObject(o));	// output : false
 */
nexutil.isObject = function(value)
{
	if ( value === null || value === undefined ) return false;
	
	// nexacro Component
	if ( this.isComponent(value) ) return false;
	
	// nexacro Object (e.g. Dataset)
	if( value instanceof nexacro.Object ) return false;
	
	return typeof value == "object" && 
		   'constructor' in value &&
		   value.constructor === Object;
};			

/**
 * value의 Array 여부 반환.
 * @public
 * @function isArray
 * @param {*} value 확인할 value.
 * @return {boolean} Array 여부.
 * @example
 * var a = new Array();
 * trace(nexutil.isArray(a));	// output : true
 *
 * var a = [1,2,3];
 * trace(nexutil.isArray(a));	// output : true
 */
nexutil.isArray = function(value) {
	
	return nex.v.toString.call( value ) === '[object Array]';
}; 

/**
 * value의 Date 여부 반환.
 * @param {date} value 확인할 value.
 * @return {boolean} Date 여부.
 * @example
 * var a = new Date();
 * trace(nexutil.isDate(a));	// output : true
 *
 * var a = "20130501";
 * trace(nexutil.isDate(a));	// output : false 	 
 */
nexutil.isDate = function(value) 
{
	return nex.v.toString.call( value ) === '[object Date]';
};

/**
 * yyyyMMdd형태의 날짜 문자열 여부.( 예 : "20111231" ).
 * @public
 * @param {string} value 확인할 value.
 * @return {boolean} Date 여부.
 * @example
 * var a = "20130501";
 * trace(nexutil.isStringDate(a));	// output : true 	 
 */
nexutil.isStringDate = function(value) 
{
	var stringWrapper = new String(value);	

	value = stringWrapper.toString();
	
	if( value.length !== 8 ) return false;
	
	var iMonth  = Math.floor(stringWrapper.slice(4,6), 10);
	var iDate   = Math.floor(stringWrapper.slice(6,8), 10);
	
	if( iMonth < 1 || iMonth > 12 ) return false;
		
	if( iDate < 1 || iDate > this.getLastDayOfMonth(value) ) return false;
	
	
	return true;
};

/**
 * value의 Function 여부 반환.
 * @public
 * @param {*} value 확인할 value.
 * @return {boolean} Function 여부.
 * @example
 * trace(nexutil.isFunction(nexutil.isFunction));	// output : true
 *
 * this.testFunction = function()
 * {
 * }
 * trace(nexutil.isFunction(this.testFunction));	// output : true
 */
nexutil.isFunction = function(value)
{

	return nex.v.toString.call( value ) === '[object Function]';
};

/**
 * value의 RegExp 여부 반환.
 * @public
 * @param {*} value 확인할 value.
 * @return {boolean} 정규식 패턴 여부.
 * @example
 * var a = new RegExp();
 * trace(nexutil.isRegExp(a));	// output : true
 * 
 * var a = /[a-z]/g;
 * trace(nexutil.isRegExp(a));	// output : true		 
 */
nexutil.isRegExp = function(value) 
{
	return nex.v.toString.call( value ) === '[object RegExp]';
};		

/**
 * primitive type (undefined, null, boolean, string, number) 여부 반환.
 * @public
 * @param {*} value 확인할 value.
 * @return {boolean} primitive type 여부.
 * @memberOf public
 */
nexutil.isPrimitive =  function(value)
{
	return value === null || /^[usbn]/.test(typeof value);
};	

/**
 * value의 nexacro component 여부 반환.
 * @public
 * @param {*} value 확인할 value.
 * @return {boolean} nexacro component 여부.
 * @example
 * var a = new Button();
 * trace(nexutil.isComponent(a));	// output : true
 *
 * var a = new Dataset();
 * trace(nexutil.isComponent(a));	// output : false
 *
 * var a = new String();
 * trace(nexutil.isComponent(a));	// output : false
 */
nexutil.isComponent = function(value) 
{
	if ( value === null || value === undefined  ) return false;
	
	return value instanceof nexacro.Component;
};

/**
 * value의 Space 여부 반환.
 * @public
 * @param {*} value 확인할 value.
 * @return {boolean} Space 여부.
 * @example
 * var a = " ";
 * trace(nexutil.isSpace(a));	// true
 *
 * var a = "\t";
 * trace(nexutil.isSpace(a));	// false		 
 */
nexutil.isSpace = function(value) 
{
	return value == ' ';
};

/**
 * 첫 값의 True/False를 검사해 그 결과에 따라 두번째 또는 세번째 값을 반환.
 * @public
 * @param {*} expr 비교할 값. expr의 값으로 True/False 여부를 확인합니다.
 *                 expr이 Integer인경우 0이면 False아니면 True인식합니다.
 * @param {*} trueValue expr이 True에 해당하는 값일 경우 Return 되는 값.
 * @param {*} falseValue expr이 False에 해당하는 값일 경우 Return 되는 값.
 * @return {*} expr에 따라 Return 된 값.
 * @example
 *
 * trace(nexutil.iif(2-1=1, "True", "False")); // output : True
 *
 * var a = 98;
 * var b = nexutil.iif(a > 100, 100, a);
 * trace(b);	// output : 98
 */	
nexutil.iif = function(expr, trueValue, falseValue) 
{
	return expr ? trueValue : falseValue;
};

/**
 * 유일한 ID 를 반환
 * @public
 * @param {string=} prefix id 앞에 붙일 문자열
 * @param {string=} separator id 생성시 구분용 문자(default: '-' ).
 * @return {string} id
 * @example
 *
 * trace(nexutil.getUniqueId()); 
 * // output : 3e52d1f6-f0d2-4970-a590-ba7656b07859
 * 
 * trace(nexutil.getUniqueId("Button_")); 
 * // output : Button_4e601da1-63f4-4cfa-849b-01b8a7f14d40
 * 
 * trace(nexutil.getUniqueId("", "_")); 
 * // output : 4e601da1_63f4_4cfa_849b_01b8a7f14d40
 * 
 * trace(nexutil.getUniqueId("Button_", "_")); 
 * // output : Button_4e601da1_63f4_4cfa_849b_01b8a7f14d40
 */
nexutil.getUniqueId = function(prefix, separator)
{
	if ( this.isEmpty(prefix) ) prefix = "";
	if ( this.isEmpty(separator) ) {
		separator = 45;
	} else {
		separator = separator.charCodeAt(0);
	}
		charcode = nex.v.ALPHA_CHAR_CODES,
		math = Math;
	var seq = 0;
	var seq0;
	var tmpArray = new Array(36);
	var idx = -1;
	
	while (seq < 8) 
	{
		tmpArray[++idx] = charcode[math.random() * 16 | 0];
		seq++;
	}
	seq = 0;
	while (seq < 3) 
	{
		tmpArray[++idx] = separator;//45 => "-", 95=> "_"
		seq0 = 0;
		while (seq0 < 4) 
		{
			tmpArray[++idx] = charcode[math.random() * 16  | 0];
			seq0++;
		}
		seq++;
	}
	tmpArray[++idx] = separator; //45 => "-", 95=> "_"
	// 끝에서 12자리을 random으로 처리하면 속도가 좀더 개선됨(10만건 생성 약 0.8초 ==> chrome)
	/*
	seq = 0;
	while (seq < 12) 
	{
		tmpArray[++idx] = charcode[math.random() * 16 | 0];
		seq++;
	}
	return prefix + String.fromCharCode.apply(null, tmpArray);
	*/
	// 원래 로직은 끝에서 12자리을 현재 time 구한 8자리 와 random 4자리를 조합한 처리임.(10만건 생성 약 1.3초 ==> chrome)
	/**/
	var tmpStr = (new Date()).getTime();
	tmpStr = ("0000000" + tmpStr.toString(16)).substr(-8);
	seq = 0;
	while (seq < 8) 
	{
		tmpArray[++idx] = tmpStr.charCodeAt(seq);
		seq++;
	}
	seq = 0;
	while (seq < 4) 
	{
		tmpArray[++idx] = charcode[math.random() * 16 | 0];
		seq++;
	}
	return prefix + String.fromCharCode.apply(null, tmpArray);
	
};

/**
 * Form 내에서 지정된 접두문자열에 순번이 붙여진 ID 를 반환
 * @public
 * @param {form} prefix 순번 앞에 붙일 문자열
 * @param {string} prefix 순번 앞에 붙일 문자열
 * @return {string} id
 * @example
 *
 * // this = Form
 * trace(nexutil.getSequenceId(this, "Button")); // output : Button0
 * trace(nexutil.getSequenceId(this, "Button")); // output : Button1
 * 
 * // this = Form
 * trace(nexutil.getSequenceId(this, "chk_")); // output : chk_0
 * trace(nexutil.getSequenceId(this, "chk_")); // output : chk_1
 */		
nexutil.getSequenceId = function(form, prefix)
{
	if ( this.isEmpty(form) ) 
	{		
	   trace("1st argument doesn't exist !!");
		return null;
	}
	
	if ( this.isEmpty(prefix) ) 
	{		
		
		trace("2st argument doesn't exist !!");
		return null;
	}
	
	if ( !(form instanceof Form) ) 
	{				
		trace("3st argument doesn't exist !!");
		return null;
	}
	
	var cache = form._sequenceIdCache;
	if ( this.isEmpty(cache) )
	{
		cache = form._sequenceIdCache = {};
	}
	
	
	var sequence = cache[prefix];
	if ( this.isEmpty(sequence) )
	{
		sequence = -1;
	}
	sequence++;
	
	cache[prefix] = sequence;
	
	return prefix + sequence;
};

/*●============================
	         Array
==============================●*/
/**
* 배열의 각 항목에 대해 주어진 콜백 함수를 호출한다.<br>
* 주어진 함수에서 return false 처리 되면 임의 배열 항목에서 반복이 멈춘다.
* @public
* @param {array} array 처리 대상 Array.
* @param {function} func callback 함수. 
* @param {object=} scope callback 함수에 대한 수행 scope.
* @param {boolean=} reverse 반복순서 (default: false).
* @return {boolean | number} 배열 항목 모두가 처리되면 true를 리턴, 함수 처리중에 return false를 하게 되면 false 처리된 배열 index를 리턴.
* @example
* var mon = ["Jan","Feb","Mar","Apr"];
* var result = nexutil.arrayEach(mon, function(name, index) {
* 	trace(index + "==>" + name);
*	// output : 0==>Jan
*	// output : 1==>Feb
*	// output : 2==>Mar
*	// output : 3==>Apr
* });
* trace(result);	// output : true
*
* var result = nexutil.arrayEach(mon, function(name, index) {
*	trace(index + "==>" + name);
*	// output : 0==>Jan
*	// output : 1==>Feb
*	if (name === 'Mar') 
*	{
*		trace("break here!");
*		// output : break here!
*		return false;
*	}
* });
* trace(result);	// output : 2
*/
nexutil.arrayEach = function(array, func, scope, reverse) 
{
	var i, len = array.length;

	if (reverse !== true) 
	{
		for (i = 0; i < len; i++) 
		{
			if (func.call(scope || array[i], array[i], i, array) === false) 
			{
				return i;
			}
		}
	}
	else 
	{
		for (i = len - 1; i > -1; i--) 
		{
			if (func.call(scope || array[i], array[i], i, array) === false) 
			{
				return i;
			}
		}
	}

	return true;
};

/**
 * 배열 형태로 변환 처리한다.
 * @public
 * @param {object} iterant 변환 대상 Obejct.
 * @param {number=} start 시작 위치 (default: start Index).
 * @param {number=} end 끝 위치 (default: end Index).
 * @return {array} 변환된 Array.
 * @example
 * this.fn_mon("Jan","Feb","Mar","Apr");
 * this.fn_mon = function() 
 * {
 * 	var result = nexutil.toArray(arguments);
 *	trace("result==>" + result);	// output : result==>[Jan,Feb,Mar,Apr]
 * }
 *
 * var result = nexutil.toArray("ABCDEFG",1,3);
 * trace("result==>" + result);	// output : result==>[B,C]
*/
nexutil.toArray = function(iterant, start, end)
{
	if (!iterant || !iterant.length) 
	{
		return [];
	}
	
	if ( this.isArray(iterant) )
	{
		if ( arguments.length == 1 ) return iterant;
		else if ( arguments.length == 2 ) return iterant.slice(start);
		else return iterant.slice(start, end);
	}

	if (typeof iterant === "string") 
	{
		iterant = iterant.split("");
	}

	var i, array = [],
	start = start || 0;
	
	end = end ? ((end < 0) ? iterant.length + end : end) : iterant.length;

	for (i = start; i < end; i++) 
	{
		array.push(iterant[i]);
	}

	return array;
};

 /**
 * 지정된 항목이 처음 나오는 배열 위치를 반환한다. 
 * @public
 * @param {array} array 검색 대상 Array.
 * @param {object} item 찾고자 하는 Item.
 * @param {number=} from 검색의 시작 위치 (default: 0).
 * @param {boolean=} strict true: 형변환 없이 비교('==='), false: 형변환 후 비교('==') (default: false).
 * @return {number} 검색된 배열 위치. 없다면 -1 리턴.
 * @example
 * var mon = ["Jan","Feb","Mar","Apr"];
 * var index = nexutil.indexOf(mon, "Mar");
 * trace("index==>" + index);	// output : index==>2
 * var index = nexutil.indexOf(mon, "May");
 * trace("index==>" + index);	// output : index==>-1
*/
nexutil.indexOf = function(array, item, from, strict) 
{
	var len = array.length;
	if ( from == null ) from = 0;;
	strict == !!strict;
	from = (from < 0) ? Math.ceil(from) : Math.floor(from);
	if (from < 0)
	{
		from += len;
	}
	
	if (strict)
	{
		for (; from < len; from++) 
		{
			if ( array[from] === item)
			{
				return from;
			}
		}
	}
	else
	{
		for (; from < len; from++) 
		{
			if ( array[from] == item)
			{
				return from;
			}
		}
	}
	
	return -1;
};

/**
 * 지정된 항목이 처음 나오는 배열 위치를 뒤에서부터 찾아 반환한다.
 * @public
 * @param {array} array 검색 대상 Array.
 * @param {object} item 찾고자 하는 Item.
 * @param {number=} from 검색 시작 위치 (default: Last Index).
 * @param {boolean=} strict true: 형변환 없이 비교('==='), false: 형변환 후 비교('==') (default: false).
 * @return {number} 검색된 배열 위치. 없다면 -1 리턴.
 * @example
 * var mon = ["Jan","Feb","Mar","Apr"];
 * var index = nexutil.lastIndexOf(mon, "Mar");
 * trace("index==>" + index);	// output : index==>2
 * var index = nexutil.lastIndexOf(mon, "May");
 * trace("index==>" + index);	// output : index==>-1
*/
nexutil.lastIndexOf = function(array, item, from, strict) 
{
	var i;
	
	if (from == null)
	{
		from = array.length - 1;
	}
	else if (from < 0)
	{
		from = Math.max(0, array.length + from);
	}
	
	var strict = strict || false;
	
	if (strict)
	{
		for (i=from; i>=0; i--)
		{
			if (array[i] === item)
			{
				return i;
			}
		}
	}
	else
	{
		for (i=from; i>=0; i--)
		{
			if (array[i] == item)
			{
				return i;
			}
		}
	}
	
	return -1;
};
 
/**
 * 지정된 항목이 배열에 포함되어 있는지 확인한다.
 * @public
 * @param {array} array 검색 대상 Array.
 * @param {object} item 찾고자 하는 Item.
 * @param {boolean=} strict true: 형변환 없이 비교('==='), false: 형변환 후 비교('==') (default: false).
 * @return {boolean} 포함되어 있다면 true, 없다면 false를 리턴.
 * @example
 * var mon = ["Jan","Feb","Mar","Apr"];
 * var contain = nexutil.contains(mon, "Mar");
 * trace("contain==>" + contain);	// output : contain==>true
 * var contain = nexutil.contains(mon, "May");
 * trace("contain==>" + contain);	// output : contain==>false
*/
nexutil.contains = function(array, item, strict) 
{
	if (nexutil.indexOf(array, item, null, strict) === -1) 
	{
		return false;
	}
	else
	{
		return true;
	}
};

/**
 *  2차원 배열
 * @public
 * @param {string}   문자열 정규 표현식 입니다.
 * @param {string} 배열에서 반환된 요소 수의 한계 값 입니다.
  * @param {string} 배열에서 반환된 요소 수의 한계 값 입니다.
 * @return {object} 문자열 배열입니다.
 * @example
 * var tOpenStyle = nexutil.split2(strOpenStyle, " ", "=");
 */ 
nexutil.split2 = function(stringValue,strDelimiter1, strDelimiter2){

	var stringVal = [];
	
	var stringArr = String(stringValue).split(strDelimiter1);

	for(var i = 0; i < stringArr.length; i++) {

		stringVal.push(String(stringArr[i]).split(strDelimiter2));
		
	}
	return stringVal;
};

/**
 * 배열의 모든 항목을 인자로 사용해서 제공하는 함수의 호출 결과로 새로운 배열을 작성한다.
 * @public
 * @param {array} array 처리 대상 Array.
 * @param {function} func callback 함수. 
 * @param {object=} scope callback 함수에 대한 수행 scope.
 * @return {array} callback 함수 결과를 담은 Array.
 * @example
 * var counts = [2, 10, 5, 1];
 * var map = nexutil.map(counts, function(ele){return ele * 1000;});
 * trace("result==>" + result);	// output : result==>[2000,10000,5000,1000]
*/
nexutil.map = function(array, func, scope) 
{
	if (!func || !(typeof func === "function"))
	{
		return;
	}
	
	var results = [],
		i = 0, len = array.length;

	for (; i < len; i++) 
	{
		results[i] = func.call(scope, array[i], i, array);
	}

	return results;
};

/**
 * 배열의 빈 항목을 제거한다.
 * @public
 * @param {array} array 처리 대상 Array.
 * @return {array} clean 처리 된 Array.
 * @example
 * var clean = nexutil.clean(["A", undefined, "B", null, "C", , "D"]);
 * trace("clean==>" + clean);	// output : clean==>["A","B","C","D"]
*/
nexutil.clean = function(array) 
{
	var results = [], i = 0,
		len = array.length, item;

	for (; i < len; i++) 
	{
		item = array[i];

		if (!this.isEmpty(item)) 
		{
			results.push(item);
		}
	}

	return results;
};

/**
 * 유일한 항목을 찾아 새로운 배열로 구성해서 리턴한다.
 * @public
 * @param {array} array 처리 대상 Array.
 * @return {array} unique한 항목으로 새로 구성된 Array.
 * @example
 * var unique = nexutil.unique(["A","B","C","A","A","B"]);
 * trace("unique==>" + unique);	// output : unique==>["A","B","C"]
*/
nexutil.unique = function(array) 
{
	var i = 0, uniqueArray = [],
	len = array.length, 
	item, 
	pThis = this;

	for (; i < len; i++) 
	{
		item = array[i];

		if (pThis.indexOf(uniqueArray, item) === -1) 
		{
			uniqueArray.push(item);
		}
	}

	return uniqueArray;
};

/**
 * 대상 배열에서 Callback함수 조건을 만족하는 항목으로 새로운 배열을 구성한다.
 * @public
 * @param {array} array 처리 대상 Array.
 * @param {function} func callback 함수. 
 * @param {object=} scope callback 함수에 대한 수행 scope.
 * @return {array} filter처리된 항목으로 새로 구성된 Array.
 * @example
 * var counts = [2, 10, 5, 1];
 * var filter = nexutil.filter(counts, function(ele){return (ele > 3);});
 * trace("filter==>" + filter);	// output : filter==>[10,5]
*/
nexutil.filter = function(array, func, scope) 
{
	if (!func || !(typeof func === "function"))
	{
		return;
	}
	
	var results = [],
		i = 0,
		len = array.length;

	for (var i=0; i < len; i++) 
	{
		if (func.call(scope, array[i], i, array)) 
		{
			results.push(array[i]);
		}
	}

	return results;
};

/**
 * 원하는 위치에 새로운 항목을 insert처리한다.
 * @public
 * @param {array} array insert 대상 Array.
 * @param {number} index insert 위치.
 * @param {object} items insert하고자 하는 items.
 * @example
 * var mon = ["Jan","Feb","Mar","Apr"];
 * nexutil.insertAt(mon, 1, [50,100]);
 * trace("mon==>" + mon);	// output : mon==>["Jan", 50, 100, "Feb", "Mar", "Apr"]
*/
nexutil.insertAt = function(array, index, items) 
{
	array.splice(index, 0, items);
};

/**
 * 원하는 항목의 앞 위치에 새로운 항목을 insert처리한다.
 * @public
 * @param {array} array insert 대상 Array.
 * @param {object} items insert하고자 하는 items.
 * @param {object} items2 insert 위치(이 item 앞에 위치시킴).
 * @example
 * var mon = ["Jan","Feb","Mar","Apr"];
 * nexutil.insertBefore(mon, [50,100], "Feb");
 * trace("mon==>" + mon);	// output : mon==>["Jan", 50, 100, "Feb", "Mar", "Apr"]
*/
nexutil.insertBefore = function(array, items, items2) 
{
	var index = nexutil.indexOf(array, items2);
	if (index == -1)
	{
		array.push(items);
	}
	else 
	{
		array.splice(index, 0, items);
	}
};

/**
 * 원하는 위치의 항목을 배열에서 삭제 처리한다.
 * @public
 * @param {array} array remove 대상 Array.
 * @param {number} index remove하고자 하는 item index.
 * @example
 * var mon = ["Jan","Feb","Mar","Apr"];
 * nexutil.removeAt(mon, 1);
 * trace("mon==>" + mon);	// output : mon==>["Jan","Mar","Apr"]
*/
nexutil.removeAt = function(array, index) 
{
	array.splice(index, 1);
};

/**
 * 원하는 항목을 배열에서 삭제 처리한다.
 * @public
 * @param {array} array remove 대상 Array.
 * @param {object} item remove하고자 하는 item.
 * @example
 * var mon = ["Jan","Feb","Mar","Apr"];
 * nexutil.remove(mon, "Feb");
 * trace("mon==>" + mon);	// output : mon==>["Jan","Mar","Apr"]
*/
nexutil.remove = function(array, item) 
{
	var index = nexutil.indexOf(array, item);

	if (index !== -1) 
	{
		array.splice(index, 1);
	}
};

/*●============================
	         String
==============================●*/
/**
 * utf8을 기준으로 문자열 길이계산.
 * @public
 * @param {string} str 대상 문자열.
 * @return {number} 문자열 길이.
*/	 		 
nexutil.utf8ByteCount = function(str)
{
	if (str === undefined) return 0;

	var count = 0,
	ch,
	high,
	low,
	isHighSurrogate = nexutil._isHighSurrogate,
	utf8Len = nexutil._utf8Len,
	toCodepoint = nexutil._toCodepoint;

	for(var i=0, n = str.length; i< n; i++) 
	{
	ch = str.charCodeAt(i);

	if(isHighSurrogate(ch)) 
	{
		high = ch;
		low = str.charCodeAt(++i);
		count += utf8Len(toCodepoint(high, low));
	} 
	else 
	{
		count += utf8Len(ch);
	}
	}
	return count;
}; 	

/**
* ascii를 기준으로 문자열 길이계산.
* @public
* @param {string} str 대상 문자열.
* @return {number} 문자열 길이.
*/	 		 
nexutil.asciiByteCount = function(str)
{
	if (str === undefined) return 0;

	var i, j=0, val; 
	for(i=0, n = str.length; i< n; i++) 
	{ 
	val = str.charCodeAt(i);
	if ( val > 255 ) j++;
	j++; 
	}
	return j;
};

/**
 * 문자열의 위치를 대소문자 구별없이 찾는다.
 * @public
 * @param {string} value 원래 문자열( 예 : "aaBBbbcc" )
 * @param {string} sFind 찾고자 하는 문자열( 예 : "bb" )
 * @param {number} nStart 검색 시작위치 (옵션 : Default=0) ( 예 : 1 ) 
 * @return {number} 찾고자 하는 문자열의 시작위치 ( 예 : 2 ). 실패 = -1.
 * @example
 * var str = "DCABCABAABAAB",
 *     findStr = "ab";
 * var idx = nexutil.indexOfIgnoreCase(str, findStr);
 * trace(idx); // output : 2
 * idx = nexutil.indexOfIgnoreCase(str, findStr, 3);
 * trace(idx); // output : 5
 * @memberOf public
*/
nexutil.indexOfIgnoreCase = function(value, sFind, nStart)	
{
	return value.toLowerCase().indexOf(sFind.toLowerCase(), nStart);
};

/**
 * 문자열을 대소문자 구별없이 주어진 변경문자열(문자) 치환한다.
 * @public
 * @param {string} sOrg 원래 문자열( 예 : "aaBBbbcc" )
 * @param {string} sRepFrom 찾고자 하는 문자열( 예 : "bb" )
 * @param {string} sRepTo 치환될 문자열 ( 예 : "xx" )
 * @return {number} 치환된 문자열 ( 예 : "aaxxxxccxx" ).
 * @example
 * var str = "DCABCABAABAAB",
 *     findStr = "ab";
 * var str = nexutil.replaceIgnoreCase(str, findStr, "x");
 * trace(str); // output : DCxCxAxAx
 * @memberOf public
*/ 
nexutil.replaceIgnoreCase = function( sOrg, sRepFrom, sRepTo )	
{
	var pos, nStart=0, sRet="";


	while(1)
	{
	pos = this.indexOfIgnoreCase( sOrg, sRepFrom, nStart );
	if( pos < 0 )
	{
		sRet += sOrg.substr( nStart );
		break;
	}
	else
	{
		sRet += sOrg.substr( nStart, pos - nStart);
		sRet += sRepTo;
		nStart = pos+sRepFrom.length;
	}
	}

	return sRet;
};

/**
 * 문자열의 위치를 대소문자 구별없이 오른쪽에서 왼쪽으로 검색이 수행됩니다.
 * @public
 * @param {string} source 원래 문자열( 예 : "aaBBbbcc" )
 * @param {string} target 찾고자 하는 문자열( 예 : "BB" )
 * @param {string=} opt_start 검색 시작위치 index(Default=문자열의 끝 )
 * @return {number} 찾고자 하는 문자열의 시작위치
 * @example
 * var str = "CABCDABCDABCD",
 *     findStr = "abc";
 * var idx = nexutil.lastIndexOfIgnoreCase(str, findStr);
 * trace(idx); // output : 9
 * idx = nexutil.lastIndexOfIgnoreCase(str, findStr, 8);
 * trace(idx); // output : 5
 * @memberOf public
*/
nexutil.lastIndexOfIgnoreCase = function(source, target, opt_start) 
{
	if ( opt_start === undefined ||
	 opt_start < 0 ||
	 opt_start > source.length )
	{
	opt_start = source.length - 1;
	}
	return source.toLowerCase().lastIndexOf(target.toLowerCase(), opt_start);
};

/**
 * 문자열의 오른쪽에서 length만큼의 문자열을 가져온다.
 * @public
 * @param {string} source 원래 문자열( 예 : "aaBBbbcc" )
 * @param {number} length 가져올문자열 길이 ( 예 : 2 )
 * @return {boolean} 오른쪽에서 length만큼의 문자열 ( 예 : "cc" )]
 * @example
 * var str = "myT1 and myT2 are the strings used for padding";
 * var res = nexutil.getRightStr(str, 7);
 * trace(res); // output : padding
 * @memberOf public
*/	 
nexutil.getRightStr = function(source, length) 
{
	if( source.length < length ) 
	{
	return source;
	} 
	else 
	{
	return source.substr(source.length-length, length);
	}
};

/**
 * 문자열을 "좌 or 우" + "대소문자 구분유무"로 첫번째 일치되는 문자열 제거.
 * @public
 * @param {string} source 원래 문자열( 예 : "aaBBbbcc" )
 * @param {string} target 제거할 문자열( 예 : "cc" )
 * @param {string} direction 삭제방향."left(default)", "right".
 * @param {boolean=} opt_ignoreCase 대소문자구분유무.true(default), false.
 * @return {string} 제거된 문자열.
 * @example
 * var str = "www.domain.com";
 * var result = nexutil.removeStr(str, "www.");
 * trace(result); // output : domain.com
 * str = "www.tobesoft.com, www.tobesoft.co.kr";
 * result = nexutil.removeStr(str, ".com", "right");
 * trace(result); // output : www.tobesoft, www.tobesoft.co.kr
 * str = "www.tobesoft.COM, www.tobesoft.co.kr";
 * result = nexutil.removeStr(str, ".com", "right", false);
 * trace(result); // output : www.tobesoft, www.tobesoft.co.kr
*/	 
nexutil.removeStr = function(source, target, direction, opt_ignoreCase) 
{
	direction = direction || "left";
	if(opt_ignoreCase !== false) opt_ignoreCase = true;

	var tempSource,tempTarget,pos;
	var sourceLen = source.length;
	var targetLen = target.length;

	tempSource = source;
	tempTarget = target;

	if(!opt_ignoreCase) 
	{
	tempSource = source.toLowerCase();
	tempTarget = target.toLowerCase();
	}

	//왼쪽부터 검색
	if(direction=="left") 
	{
	pos = tempSource.indexOf(tempTarget);
	} 
	else if(direction=="right") 
	{
	pos = tempSource.lastIndexOf(tempTarget);
	} 
	else 
	{
	return;
	}	

	if(pos < 0) 
	{
	return source;
	} 
	else if(tempSource == tempTarget)
	{
	return "";
	}
	else if(pos == 0)
	{
	return tempSource.substr(targetLen);
	} 
	else if(pos > 0)
	{
	return tempSource.substr(0, pos) + tempSource.substr(pos+targetLen);
	}

};

/**
 * 문자열 내의 {0},{1}...{n}값을 전달받은 arguments로 치환.
 * @public
 * @param {string} str 대상 문자열.
 * @param {arguments} arguments 식별자 {N}을 대체할 값.
 * @return {string} 치환된 문자열.
 * @requires 
 * @example
 * var str = "I {0} a {1} {2}.";
 * nexutil.format(str, "am", "cool", "guy"); //return "I am a cool guy."
 *
 * str = "Currency: [{0}], Date : [{1}], JuminNo: [{2}]";
 * var result = nexutil.format(str,
 *      nexutil.getMaskFormatString(12301234, "#,###"),
 *      nexutil.getMaskFormatString(new Date(), "yyyy-MM-dd tt hh:mm"),
 *      nexutil.getMaskFormatString("6601011234567", "@@@@@@-{@@@@@@@}")
 *    );
 * trace(result); // output : Currency: [12,301,234], Date : [2013-05-03 오후 07:49], JuminNo: [660101-*******]
 * @memberOf public
*/	 	         
nexutil.format = function() 
{
    var p_formatRegExp =nex.v.formatRegExp;
	var str = arguments[0];
	var args = this.toArray(arguments, 1);
	return str.replace(nex.v.formatRegExp, function(m, i) {
	return args[i];
	});
};

/**
 * 문자열 길이계산.
 * @public
 * @param {string} str 대상 문자열.
 * @param {string=} unit 문자열의 길이를 검사하는 단위 . 
 		   "utf16" - 한문자당 1의 값으로 합산함(default).
		   "utf8"  - 한 문자당 영문1, 다국어 2~5의 값으로 합산함.
		   "ascii" - 한문자당 영문 1, 한글 2의 값으로 합산함.
 * @return {number} 문자열 길이.
 * @example
 * var str = "unit 문자열";
 * var len = nexutil.getLength(str);
 * trace(len); // output : 8
 * len = nexutil.getLength(str, "ascii");
 * trace(len); // output : 11
 * len = nexutil.getLength(str, "utf8");
 * trace(len); // output : 14
 * @memberOf public
*/	 		 
nexutil.getLength = function(str, unit)
{
	if ( !str ) return 0;
	if ( unit == "utf8" )
	{
	return this.utf8ByteCount(str);
	}
	else if ( unit == "ascii" )
	{
	return this.asciiByteCount(str);
	}
	else
	{
	return str.length;
	}
};

/**
 * 문자열의 특수문자(개행문자 Tab문자 ~ ` ! @ # $ % % ^ & * - = + 등) 포함개수.
 * @public
 * @param {string} str 대상 문자열.
 * @return {number} 특수문자 개수.
 * @example
 * var str = "2011-12-27\r\n\t~`";
 * var cnt = nexutil.countNonword(str);
 * trace(cnt); // output : 7
 * @memberOf public
*/	 		 
nexutil.countNonword = function(str)
{
	var regExp = nex.v.regExp;
	var rtn = str.match(regExp);
	return (!rtn)?0:rtn.length;
}; 	

/**
 * 전각문자를 반각문자로 변환.<br><br>
 * 참고: <br>
 * 전각문자는 "정사각형" 안에 들어가는 문자이고, <br>
 * 반각은 그 정사각형의 반쪽에 들어가는 문자이다.<br>
 * 전각문자의 폭은, 반각문자의 2배입니다. <br><br>
 * 예를 들어 숫자 "3" 은, 한글 "가"의 절반의 폭만을 가지고 있습니다. <br>
 * 그래서 영문과 숫자 등은 반각이고, 한글이나 한자들은 전각문자입니다. <br>
 * 다만, 영문과 숫자를 전각으로 표현할 수도 있습니다.<br>
 * 예 : 전각문자 ==> ※★０＋ , 반각문자 ==> 1a 
 * @public
 * @param {string} str 전각문자( 예 : "０＋" ).
 * @return {string} 반각문자 ( 예 : "0+" ).
 * @example
 * var var str = "０１＋ｗｏｒｌｄ투비소프트";
 * var result = nexutil.strFullToHalf(str);
 * trace(result); // output : 01+world투비소프트
 * @memberOf public
*/	 			 
nexutil.strFullToHalf = function(str)
{
	var i, c, sHalf = "";
	var count = str.length;
	for( i=0 ; i < count ; i++ )
	{
	var c = str.charCodeAt(i);

	if (c == 12288) 
	{
		sHalf += unescape("%20"); 
	} 
	else if ( (c >= 65281) && (c <= 65374) ) 
	{
		sHalf += unescape("%"+(c-65248).toString(16));
	} 
	else 
	{
		sHalf += str.charAt(i);
	}
	}

	return  sHalf;
}; 	

/**
 * 반각문자를 전각문자로 변환.
 * @public
 * @param {string} str 반각문자( 예 : "0+" ).
 * @return {string} 전각문자 ( 예 : "０＋" ).
 * @example
 * var var str = "01+world투비소프트";
 * var result = nexutil.strHalfToFull(str);
 * trace(result); // output : ０１＋ｗｏｒｌｄ투비소프트
*/	 	 
nexutil.strHalfToFull = function(str)
{
	var rTmp = "";
	var iTmp = "";
	var i, incount = str.length;
	var tempCode;

	for( i = 0 ; i < incount ; i++ ) 
	{
	//기본 아스키 코드 값을 벗어난 경우(한글)는 전자로 변환할 필요 없음.
	tempCode = str.charCodeAt(i);

	if( (tempCode >= 32) && (tempCode <= 126) ) 
	{
		if( tempCode == 32 ) 
		{
			iTmp = unescape("%u"+(12288).toString(16));
		} 
		else 
		{
			iTmp = tempCode + 65248;
		}
		
	} 
	else 
	{
		iTmp = tempCode;
	}

	if( tempCode == 32 )
	{
		rTmp = rTmp + (iTmp);
	} 
	else 
	{
		rTmp = rTmp + String.fromCharCode(iTmp);
	}
	}

	return rTmp;
};

/**
 * 주어진 문자열을 n회 반복해서 반환한다.
 * @public
 * @param {string} str 반복할 문자열.
 * @param {number} count 반복 횟수.
 * @return {string} 반복된 문자열
 * @example
 * var str = "0";
 * var result = nexutil.repeatStr(str, 4);
 * trace(result); // output : 0000
 * @memberOf public
*/
nexutil.repeatStr = function(str, count) 
{
	var rtn = "".padLeft(count, str);
	return rtn;
};

/**
 * 한글 → 유니코드로 변환.
 * @public
 * @param {string} str 한글 문자열.
 * @return {string} 유니코드.
 * @example
 * var str = "www.투비소프트.com";
 * var result = nexutil.hanGulToUnicode(str);
 * trace(result); // output : www.\uD22C\uBE44\uC18C\uD504\uD2B8.com 
*/	 	 
nexutil.hanGulToUnicode = function(str)
{
	return escape(str).replace(/%/gi, "\\");
};	

/**
 * 유니코드 → 한글로 변환.
 * @public
 * @param {string} str 유니코드 문자열.
 * @return {string} 한글.
 * @example
 * var str = "www.\uD22C\uBE44\uC18C\uD504\uD2B8.com";
 * var result = nexutil.unicodeToHanGul(str);
 * trace(result); // output : www.투비소프트.com
*/	 	 
nexutil.unicodeToHanGul = function(str)
{
	return unescape(str.replace(nex.v.regExp2, "%"));
};

/**
 * 지정된 문자로 시작하는지 여부.
 * @public
 * @param {string} str 문자열.
 * @param {string} target 대상문자열.
 * @return {boolean} 시작하는지 여부.
 * @example
 * var str = "Hello World!";
 * var result = nexutil.startsWith(str, "He");
 * trace(result); // output : true
 * result = nexutil.startsWith(str, "hew");
 * trace(result); // output : false
*/
nexutil.startsWith = function(str, target) 
{
	return str.lastIndexOf(target, 0) == 0;
};

/**
 * 지정된 문자로 끝나는지 여부.
 * @public
 * @param {string} str 문자열.
 * @param {string} target 대상문자열.
 * @return {boolean} 끝나는지 여부.
 * @example
 * var str = "Hello World!";
 * var result = nexutil.endsWith(str, "ld!");
 * trace(result); // output : true
 * result = nexutil.endsWith(str, "Wor");
 * trace(result); // output : false
*/
nexutil.endsWith = function(str, target) 
{
	var l = str.length - target.length;
	return l >= 0 && str.indexOf(target, l) == l;
};

/**
 * 주어진 문자열의 Mask Format 처리된 문자열을 반환합니다.
 * @public
 * @param {string} val 원본 문자열.
 * @param {string} strMask mask할 format 문자열.
 * @param {string=} maskChr mask 문자.
 * @return {string} 변환된 문자열.
 * @example
 * var str = "20060607";
 * var result = nexutil.getMaskFormatString(str, "@@@@-@@-@@");
 * trace(result); // output : 2006-06-07
 *
 * str = "6601011234567";
 * result = nexutil.getMaskFormatString(str, "######-{#######}");
 * trace(result); // output : 660101-*******
*/
nexutil.getMaskFormatString = function(val, strMask, maskChr)
{
	if ( !maskChr ) maskChr = nex.v.defaultMaskChar;
	var passChr = nex.v.defaultPassChar;

	var maskInfo = this._parseStringMask(strMask, maskChr, passChr),
	arrMask = maskInfo[0],
	arrPass = maskInfo[1],
	arrOrgMask = maskInfo[2],
	arrVal = val.split("");

	var maskedValue = this._makeMaskedValue(arrVal, arrMask, arrOrgMask);

	var i;
	var strText = [];
	var c;
	var Mask, Pass, strMask;

	var nLen = arrOrgMask.length;
	for(i = 0 ; i < nLen ; i++ ) 
	{
	c = maskedValue[i];
	Mask = arrMask[i];
	Pass = arrPass[i];
	strMask = arrOrgMask[i];
	if( Mask != 0 ) 
	{
		if( this.isEmpty(c) || c == nex.v.chkEmpty ) 
		{
			c = maskChr;
		}
		else if( Pass )
		{
			c = nex.v.defaultPassChar;
		}
		else if( strMask == "A" || strMask == "Z" ) 
		{
			c = c.toUpperCase();
		}
		else if( strMask == "a" || strMask == "z" ) 
		{
			c = c.toLowerCase();
		}
	}
	strText[i] = c;
	}
	return strText.join("");
};

/**
 * XML 의 예약문자,특수문자를 치환하여 반환.<br><br>
 * @public
 * 대상문자 : &, <, >, ', ", \t, \r, \n
 * @param {string} str 문자열.
 * @return {string} 치환된 문자열.
 * @example
 *W
 * trace(nexutil.escapeXML("1 > 0")); // output : 1 &gt; 0
 * trace(nexutil.escapeXML("Q&A")); // output : Q&amp;A
 *
*/
nexutil.escapeXML = function(str) 
{
	if ( typeof str != "string") {
	str = new String(str);
	}

	var ret = nex.v.cacheEscapeXML[str];
	if ( this.isEmpty(ret) )
	{

	ret = str.replace(nex.v.regExp3, "&amp;")
			.replace(nex.v.regExp4, "&lt;")
			.replace(nex.v.regExp5, "&gt;")
			.replace(nex.v.regExp6, "&apos;")
			.replace(nex.v.regExp7, "&quot;")
			.replace(nex.v.regExp8, "&#9;")
			.replace(nex.v.regExp9, "&#13;")
			.replace(nex.v.regExp10, "&#10;");

	nex.v.cacheEscapeXML[str] = ret;
	}

	return ret;
};

/**
 * 주어진 문자열을 첫 문자만 대문자 변경
 * @public
 * @param {string} str
 * @return {string} 첫 문자 대문자 처리된 문자
 * @example
 *
 * trace(nexutil.capitalize("point")); // output : Point
 *		 
*/
nexutil.capitalize = function(str)
{

	return str.replace(nex.v.regExp11, function(match) {
	return match.toUpperCase();
	});
};


/**
* mask 값이 적용된 문자 배열 반환
* @private
* @param {array} arrVal 원본 문자 배열.
* @param {array} arrMask 변환된 mask 문자 배열.
* @param {array} arrOrgMask 원본 mask 문자 배열.
* @return {array} mask 값이 적용된 문자 배열
*/
nexutil._makeMaskedValue = function(arrVal, arrMask, arrOrgMask)
{
	var bOverlappedValue = false; // 기본은 겹치지 않음.
	var Mask;
	var c;

	var	nXCharLen = 0;
	var nLen = arrVal.length;
	var i, j;
	if( nLen == arrMask.length ) 
	{
	for( i=0 ; i < nLen ; i++) 
	{
		if( arrMask[i] == 0 && arrVal[i] == arrMask[i] )
			continue;
		else if( arrMask[i] == 0 )
			break;
	}
	if( i == arrVal.length )
		bOverlappedValue = true;
	}

	var strMaskedValue = [];
	nLen = arrOrgMask.length;		
	var ReserveMasks = nex.v.maskChr;
	for( i=0, j=0 ; i < nLen ; i++ ) 
	{
	c = arrOrgMask[i];
	Mask = arrMask[i];

	if ( Mask != 0 && ReserveMasks[c] ) 
	{
		do 
		{
			c = arrVal[j];
			j++;
		}
		while( c && !Mask.test(c) )
		
		if( this.isEmpty(c) ) 
		{// || (xch & 0x80) )
			c = _chkEmpty;
		}
	}
	else if( bOverlappedValue && arrOrgMask[i] == c ) 
	{
		j++;
	}
	strMaskedValue[i] = c;
	}
	return strMaskedValue;
};

/**
 * mask format 변환 정보 반환.
 * @private
 * @param {string} strMask mask할 format 문자열.
 * @param {string} maskChr mask 문자.
 * @param {string} passChr password 문자.
 * @return {array} mask format 변환 정보
*/
nexutil._parseStringMask = function(strMask, maskChr, passChr)
{
	var res = nex.v.stringMaskCache[strMask];
	if ( res ) return res;

	var len = strMask.length,
	arrMask = [],
	arrPass = [],
	arrOrgMask = [],
	bQuote = false,
	bEscape = false,
	bPasswd = false,
	Mask = 0,
	i, nIdx,
	cMasks = strMask.split(""),
	rMaskChr,
	ReserveMasks = nex.v.maskChr;

	for( i=0, nIdx=0; i < len ; i++ ) 
	{
	if( bEscape == false && cMasks[i] == "'" ) 
	{ // Mask가 Quotation이 시작될 경우.
		if( bQuote == false )
			bQuote = true;
		else
			bQuote = false;
		continue;
	}
	Mask = 0;
	if( bEscape == false && cMasks[i] == "\\" && !bQuote ) 
	{ // Mask에서 Escape에 진입할 경우.
		bEscape = true;
		continue;
	}
	else if ( bEscape ) 
	{ // Mask에서 Escape를 사용할 경우.
		bEscape = false;
	}
	else if( bQuote == false ) 
	{// Mask에서 Quotation 밖의 글자에 대해.
		rMaskChr = ReserveMasks[cMasks[i]];
		if ( rMaskChr ) 
		{
			Mask = rMaskChr;
		}
		if( cMasks[i] == nex.v.PASSWORD_PAIR[0] ) 
		{
			bPasswd = true;
			continue;
		}
		if( cMasks[i] == nex.v.PASSWORD_PAIR[1] ) 
		{
			bPasswd = false;
			continue;
		}
	}
	arrMask[nIdx] = Mask;
	arrPass[nIdx] = bPasswd;
	arrOrgMask[nIdx] = cMasks[i];
	nIdx++;
	}
	res = [arrMask, arrPass, arrOrgMask];
	nex.v.stringMaskCache[strMask] = res;
	return res;
};

/**
* [내부함수]uft8 문자열 길이계산.
* @private
* @param {string} codePoint 문자셋 수치보정값.
* @return {number} 문자열 길이.
*/	 		 
nexutil._utf8Len = function(codePoint)
{
	if(codePoint >= 0xD800 && codePoint <= 0xDFFF)
	{	
        trace("Illegal argument: ");	
	}
	if(codePoint < 0)
	{
		trace("Illegal argument: ");	  
		 
	}
	
	if(codePoint <= 0x7F) return 1;
	if(codePoint <= 0x7FF) return 2;
	if(codePoint <= 0xFFFF) return 3;
	if(codePoint <= 0x1FFFFF) return 4;
	if(codePoint <= 0x3FFFFFF) return 5;
	if(codePoint <= 0x7FFFFFFF) return 6;
};


/**
* 유니코드 보충언어판(Supplementary Plane)의 상위 대행코드(High Surrogate) 여부.
* @private
* @param {string} codeUnit 대상 문자열.
* @return {number} 문자열 길이.
*/	 		 
nexutil._isHighSurrogate = function(codeUnit)
{
	return codeUnit >= 0xD800 && codeUnit <= 0xDBFF;
};

/**
* 유니코드 보충언어판(Supplementary Plane)의 하위 대행코드(Low Surrogate) 여부.
* @private
* @param {string} codeUnit 대상 문자열.
* @return {number} 문자열 길이.
*/	 		 
nexutil._isLowSurrogate = function(codeUnit)
{
	return codeUnit >= 0xDC00 && codeUnit <= 0xDFFF;
};

/**
* 문자셋의 수치보정값 처리
* @private
* @param {number} highCodeUnit 상위 대행코드.
* @param {number} lowCodeUnit 하위 대행코드.
* @return {number} 문자열 길이.
*/
nexutil._toCodepoint = function(highCodeUnit, lowCodeUnit)
{

	if(!this._isHighSurrogate(highCodeUnit))
	{
	    trace("Illegal argument: "+highCodeUnit);
	
	}
	if(!this._isLowSurrogate(lowCodeUnit))
	{
	   trace("Illegal argument: "+lowCodeUnit);
	
	}
	highCodeUnit = (0x3FF & highCodeUnit) << 10;
	var u = highCodeUnit | (0x3FF & lowCodeUnit);
	return u + 0x10000;	 	
};

/*●============================
	         Date
==============================●*/
/**
 * 입력된 날짜에 OffSet으로 지정된 만큼의 날짜를 증감한다.
 * @public
 * @param {string|date} value 'yyyyMMdd'형태로 표현된 String 또는 Date.
 * @param {number} offset 일단위 증가(또는 감소값).
 * @return {string|date} 'yyyyMMdd'형태로 표현된 String 또는 Date Value.
 * @example
 * // 2013/04/29 16:39:04 test함. 
 * trace(nexutil.addDate(new Date(), 3)); // output : Thu May 02 2013 16:39:04 GMT+0900
 * var val = nexutil.getDateMaskFormatString(new Date(), "yyyyMMdd");
 * trace(nexutil.addDate(val, 3)); // output : 20130502 
 */
nexutil.addDate = function(value, offset) 
{
	var dt;
	if ( this.isDate(value) )
	{
		dt = new Date();
		dt.setFullYear(value.getFullYear(), value.getMonth(), value.getDate() + offset);
		dt.setHours(value.getHours(), value.getMinutes(), value.getSeconds());
		dt.setMilliseconds(value.getMilliseconds());
		
		return dt;
	}
	else
	{
		dt = new Date();
		dt.setFullYear(parseInt(value.substr(0, 4)), parseInt(value.substr(4, 2)-1), parseInt(value.substr(6, 2)) + offset);
		dt.setHours(0, 0, 0);
		dt.setMilliseconds(0);
		return this.getDateMaskFormatString(dt, "yyyyMMdd");
	}
};

/**
 * 입력된 날짜에 OffSet 으로 지정된만큼의 월을 증감한다.
 * @public
 * @param {string | date} value 'yyyyMMdd' 형태로 표현된 String 또는 Date.
 * @param {number} offset 월단위 증가(또는 감소값).
 * @return {string | date} 'yyyyMMdd' 형태로 표현된 String 또는 Date Value.
 * @example
 * var dt = nexutil.strToDate("20130331");
 * var dt0 = nexutil.addMonth(dt, 1);
 * trace(dt0); // output : Tue Apr 30 2013 00:00:00 GMT+0900
 * var str1 = "20130331";
 * var str = nexutil.addMonth(str1, 1);
 * trace(str); // output : 20130430 
 */
nexutil.addMonth = function(value, offset) 
{	
	var dt;
	if ( this.isDate(value) )
	{
		var nTmpday = value.getDate();
		dt = new Date();
		dt.setFullYear(value.getFullYear(), value.getMonth() + offset, value.getDate());
		dt.setHours(value.getHours(), value.getMinutes(), value.getSeconds());
		dt.setMilliseconds(value.getMilliseconds());
		if ( dt.getDate() != nTmpday )
		{
			dt.setMonth(dt.getMonth() - 1);
			dt.setDate(this.getLastDayOfMonth(dt));
		}
		return dt;
	}
	else
	{
		var nTmpday = parseInt(value.substr(6, 2));
		dt = new Date();
		dt.setFullYear(parseInt(value.substr(0, 4)), parseInt(value.substr(4, 2)-1) + offset, nTmpday);
		dt.setHours(0, 0, 0);
		dt.setMilliseconds(0);
		if ( dt.getDate() != nTmpday )
		{
			dt.setMonth(dt.getMonth() - 1);
			dt.setDate(this.getLastDayOfMonth(dt));
		}
		return this.getMaskFormatString(dt, "yyyyMMdd");
	}
};

/**
 * 두 일자 사이의 일 수 계산.
 * @public
 * @param {date | string} fromDate Date Object 또는 yyyyMMdd형태의 시작일자.
 * @param {date | string} toDate Date Object 또는 yyyyMMdd형태의 종료일자.
 * @return {number} 두 일자 사이의 일 수. 단, 종료일자가 시작일자보다 작으면 음수가 return된다.
 * @example
 * var fromdt = nexutil.strToDate("20120331");
 * var todt = nexutil.strToDate("20130420");
 * var day = nexutil.getDiffDay(fromdt, todt);
 * trace(day); // output : 385
 * var fromstr = "20120331";
 * var tostr = "20130420";
 * var day = nexutil.getDiffDay(fromstr, tostr);
 * trace(day); // output : 385
 */
nexutil.getDiffDay = function(fromDate, toDate)
{
	if(this.isString(fromDate) && this.isString(toDate))
	{
		fromDate = new Date(parseInt(fromDate.substring(0,4),  10), parseInt(fromDate.substring(4,6)-1,  10), parseInt(fromDate.substring(6,8), 10));
		toDate   = new Date(parseInt(toDate.substring(0,4),  10), parseInt(toDate.substring(4,6)-1,  10), parseInt(toDate.substring(6,8), 10));
	}

	var flag = 1, nDay;
	if ( fromDate >  toDate )
	{
		flag = -1;
		var tmpDt = toDate;
		toDate = fromDate;
		fromDate = tmpDt;
	}

	if (fromDate.getFullYear() != toDate.getFullYear() )
	{
		nDay = (this._isLeapYear(fromDate.getFullYear()) ? 366 : 365) - this.getDayOfYear(fromDate) + this.getDayOfYear(toDate);
		var nYear = fromDate.getFullYear();
		while (nYear++ < toDate.getFullYear() - 1)
		{
			nDay = nDay + (this._isLeapYear(nYear) ? 366 : 365);
		}
	}
	else
	{
		nDay = this.getDayOfYear(toDate) - this.getDayOfYear(fromDate);
	}
	return nDay*flag;
};

/**
 * 두 일자 사이의 월 수 계산.(정확한 달수를 처리하려면 fromDate Day값을 1로 하고 toDate를 마지막일자로 처리하여야 한다.)<br>
 * 시작일자의 Day값이 1이 아니면 소수점((마지막일자 - 해당월의 일수)/마지막일자)으로 계산한다.<br>
 * 종료일자의 Day값이 마지막일자가 아니면 소수점(해당월의 일수/마지막일자)으로 계산한다.
 * @public
 * @param {date | string} fromDate Date Object 또는 yyyyMMdd형태의 시작일자.
 * @param {date | string} toDate Date Object 또는 yyyyMMdd형태의 종료일자.
 * @return {number} 두 일자 사이의 월 수. 단, 종료일자가 시작일자보다 작으면 음수가 return된다.
 * @example
 * var fromdt = nexutil.strToDate("20130301");
 * var todt = nexutil.strToDate("20130501");
 * var month = Math.ceil(nexutil.getDiffMonth(fromdt, todt));
 * trace(month); // output : 3
 * var fromstr = "20120331";
 * var tostr = "20130420";
 * var month = nexutil.getDiffMonth(fromstr, tostr);
 * trace(month); // output : 12.69
 */
nexutil.getDiffMonth = function(fromDate, toDate)
{
	
	if(this.isString(fromDate) && this.isString(toDate))
	{
		fromDate = new Date(parseInt(fromDate.substring(0,4),  10), parseInt(fromDate.substring(4,6)-1,  10), parseInt(fromDate.substring(6,8), 10));
		toDate   = new Date(parseInt(toDate.substring(0,4),  10), parseInt(toDate.substring(4,6)-1,  10), parseInt(toDate.substring(6,8), 10));
	}

	var flag = 1, nMonth, nDay;
	if ( fromDate >  toDate )
	{
		flag = -1;
		var tmpDt = toDate;
		toDate = fromDate;
		fromDate = tmpDt;
	}

	if ( fromDate.getDate() == 1 )
	{
		nMonth = 1;
		nDay = 0;
	}
	else
	{
		nMonth = 0;
		var lastday = this.getLastDayOfMonth(fromDate);
		nDay = Math.floor(( lastday - fromDate.getDate() + 1)/lastday, 2);
	}

	if ( toDate.getDate() == this.getLastDayOfMonth(toDate) )
	{
		nMonth += 1;
	}
	else
	{
		nDay += Math.floor(toDate.getDate()/this.getLastDayOfMonth(toDate), 2);
	}

	if (fromDate.getFullYear() != toDate.getFullYear() )
	{
		nMonth += 12 - (fromDate.getMonth() + 1) + toDate.getMonth();
		var nYear = fromDate.getFullYear();
		while (nYear++ < toDate.getFullYear() - 1)
		{
			nMonth = nMonth + 12;
		}
	}
	else
	{
		nMonth += toDate.getMonth() - (fromDate.getMonth() + 1);
	}
	return (nMonth + nDay)*flag;
};

/**
 * 해당월의 마지막 날짜를 숫자로 구하기.
 * @public
 * @param {number | string} value 'yyyyMMdd' 형태의 날짜.
 * @return {number} 마지막 날짜 숫자값.
 * @example
 * var dt = nexutil.strToDate("20120302"); // convert Date type from "20120302".
 * var day = nexutil.getLastDayOfMonth(dt);
 * trace(day); // output : 31
 * var dtstr = "20120302";
 * var day = nexutil.getLastDayOfMonth(dtstr);
 * trace(day); // output : 31
 * @memberOf public
 */
nexutil.getLastDayOfMonth = function(value) 
{
	var nMonth, nLastDate;

	if ( this.isDate(value) )
	{
		nMonth = value.getMonth() + 1;
	}
	else
	{
		nMonth = parseInt(value.substr(4,2), 10);
	}
	if( nMonth == 1 || nMonth == 3 || nMonth == 5 || nMonth == 7  || nMonth == 8 || nMonth == 10 || nMonth == 12 ) 
	{
		nLastDate = 31;
	} 
	else if( nMonth == 2 ) 
	{
		if( this.isLeapYear(value) == true ) 
		{
			nLastDate = 29;
		} 
		else 
		{
			nLastDate = 28;
		}
	} 
	else 
	{
		nLastDate = 30;
	}
		
	return nLastDate;
};

/**
 * yyyyMMdd 형태의 날짜를 입력하면 해당연도의 날짜에 해당하는 주차반환.
 * @public
 * @param {date|string} date Date Object 또는 날짜형 문자열.
 * @return {number} 주차에 해당하는 숫자.
 * @example
 * var dt = nexutil.strToDate("20130331"); // convert Date type from "20130331".
 * var week = nexutil.getWeekOfYear(dt);
 * trace(week); // output : 14
 * var dtstr = "20130331";
 * var week = nexutil.getWeekOfYear(dt);
 * trace(week); // output : 14
 * @memberOf public
 */
nexutil.getWeekOfYear = function(date)
{
	if ( this.isString(date) )
	{
		date = this.strToDate(date);
	}
	if ( !this.isDate(date) )
	{
		return -1;
	}
	
	var onejan = new Date();
	
	onejan.setYear(date.getFullYear());
	onejan.setMonth(0);
	onejan.setDate(1);	
							
	return Math.ceil((((date - onejan) / 86400000) + onejan.getDay()+1)/7);
};

/**
 * 해당연도의 1월 1일부터 날짜까지의 일 수 반환.
 * @public
 * @param {date|string} date Date Object 또는 날짜형 문자열.
 * @return {number} 일 수.
 * @example
 * var dt = nexutil.strToDate("20130420"); // convert Date type from "20130420".
 * var days = nexutil.getDayOfYear(dt);
 * trace(days); // output : 110
 * var dtstr = "20130420";
 * var days = nexutil.getDayOfYear(dtstr);
 * trace(days); // output : 110
 */
nexutil.getDayOfYear = function(date) 
{
		
	if ( this.isString(date) )
	{
		date = this.strToDate(date);
	}
	
	if ( !this.isDate(date) )
	{
		trace("invalid date");
		
		throw e;
	}
	
	var nMonth = date.getMonth();
	var nDay = nex.v.dayOfYearOffset[nMonth] + date.getDate();
	
	//윤년과 2월이 포함되어 있을 경우에만 +1.
	if (nexutil._isLeapYear(date.getFullYear()) && nMonth > 1)
	{
		nDay = nDay + 1;
	}
	return nDay;
};

/**
 * yyyy, yyyyMM, yyyyMMdd, yyyyMMddhh, yyyyMMddhhmm, yyyyMMddhhmmss 형태의 문자열을 Date객체로 반환.
 * @public
 * @param {string} value 날짜 문자열.
 * @return {date} Date Object.
 * @example
 * var dt = nexutil.strToDate("20120331"); // convert Date type from "20120331".
 * trace(dt); // output : Sat Mar 31 2012 00:00:00 GMT+0900
 * var dt = nexutil.strToDate("20130320123022"); // convert Date type from "20130320123022".
 * trace(dt); // output : Wed Mar 20 2013 12:30:22 GMT+0900
 * @memberOf public
 */
nexutil.strToDate = function(value) 
{
	var dt = new Date();
	if ( value.length == 4 ) //yyyy
	{
		dt.setFullYear(parseInt(value), 0, 0);
		dt.setHours(0, 0, 0);
		dt.setMilliseconds(0);
	}
	else if ( value.length == 6 ) //yyyyMM
	{
		dt.setFullYear(parseInt(value.substr(0,4)), parseInt(value.substr(4,2))-1, 0);
		dt.setHours(0, 0, 0);
		dt.setMilliseconds(0);
	}
	else if ( value.length == 8 ) //yyyyMMdd
	{
		dt.setFullYear(parseInt(value.substr(0,4)), parseInt(value.substr(4,2))-1, parseInt(value.substr(6,2)));
		dt.setHours(0, 0, 0);
		dt.setMilliseconds(0);
	}
	else if ( value.length == 10 ) //yyyyMMddhh
	{
		dt.setFullYear(parseInt(value.substr(0,4)), parseInt(value.substr(4,2))-1, parseInt(value.substr(6,2)));
		dt.setHours(parseInt(value.substr(8,2)), 0, 0);
		dt.setMilliseconds(0);
	}
	else if ( value.length == 12 )//yyyyMMddhhmm
	{
		dt.setFullYear(parseInt(value.substr(0,4)), parseInt(value.substr(4,2))-1, parseInt(value.substr(6,2)));
		dt.setHours(parseInt(value.substr(8,2)), parseInt(value.substr(10,2)), 0);
		dt.setMilliseconds(0);
	}
	else if ( value.length == 14 ) //yyyyMMddhhmmss
	{
		dt.setFullYear(parseInt(value.substr(0,4)), parseInt(value.substr(4,2))-1, parseInt(value.substr(6,2)));
		dt.setHours(parseInt(value.substr(8,2)), parseInt(value.substr(10,2)), parseInt(value.substr(12,2)));
		dt.setMilliseconds(0);
	}
	return dt;
};	

/**
 * 윤년 여부.
 * @public
 * @param {string|number|date|nexacro.Date} value yyyyMMdd 형태의 날짜(문자열).<br>
 *                                   number 타입일 경우에는 yyyy.<br>
 *                                   JavaScript Date.<br>
 *                                   Dataset의 컬럼타입이 DATE인 컬럼값.
 * @return {boolean} 윤년 여부(입력되지 않은 경우는 false).
 * @example
 * var yyyyMMdd = "20120301";
 * var flag = nexutil.isLeapYear(yyyyMMdd);
 * trace(flag); // output : false
 * var date = new Date();
 * var flag = nexutil.isLeapYear(date);
 * trace(flag); // output : true		 
 * var flag = nexutil.isLeapYear(2016);
 * trace(flag); // output : true
 * var value = this.Dataset.getColumn(0, "yyyyMMdd"); // yyyyMMdd 컬럼타입은 DATE. 
 * var flag = nexutil.isLeapYear(value);
 * trace(flag); // output : true		 
 */
nexutil.isLeapYear = function(value)
{ 
	var result;
	var year;
	
	if( this.isEmpty(value) ) {
		return false;
		
	} else if ( this.isString(value) ) {
		year = parseInt(value.substring(0,4), 10);
	
	} else if ( this.isNumber(value) ) {
		year = value;
	
	} //dataset의 컬럼타입이 DATE인 경우 처리.
	else if(value instanceof nexacro.Date) {
		value = value.toString();
		
		if(this.isEmpty(value)) {
			return false;
		}
		
		year = parseInt(value.substring(0,4), 10);
		
	} else if( this.isDate(value) ) {
		
		year = value.getFullYear();
	}

	
	if ((year % 4) == 0) 
	{
		if ((year % 100) != 0 || (year % 400) == 0){
			result = true;
		} 
		else 
		{
			result = false;
		}
	} 
	else 
	{
		result = false;
	}
	
	return result;
};	

/**
 * 양력을 음력으로 변환해주는 함수.<br>
 * [주의사항]<br>
 *  1. return값이 8자리가 아니고 9자리임에 주의<br>
 *  2. 처리가능 기간  1900 - 2040년<br>
 *  ※ 아래 해에는 윤달이 중국과 베트남이 우리와 다름.<br>
 *     2012년: 대한민국:3, 중국: 4, 베트남: 4
 *     2017년: 대한민국:5, 중국: 6, 베트남: 6
 * @public

 * @param {string | date} value yyyyMMdd 형태의 양력일자.
 * @return {string | undefined} Flag(평달 = "0", 윤달 = "1") + yyyyMMdd 형태의 음력일자. 실패시 undefined.
 * @example
 * var dt = nexutil.strToDate("20130331");
 * var str = nexutil.solarToLunar(dt);
 * trace(str); // output : 020130220
 * var str1 = "20130331";
 * var str = nexutil.solarToLunar(str1);
 * trace(str); // output : 020130220
 */		
nexutil.solarToLunar = function (value) {
	var year, month, day;
	var dateInfo = this._getYearMonthDay(value);
	if(this.isEmpty(dateInfo)) { return; }
	
	year  =  dateInfo.year;
	month =  dateInfo.month;
	day   =  dateInfo.day;
	
	if ( this.isDate(value) ) {
		year = value.getFullYear();
		month = value.getMonth() + 1;
		day = value.getDate();
		
	} else if(this.isString(value)) {
		year = parseInt(value.substr(0,4), 10);
		month = parseInt(value.substr(4,2), 10);
		day = parseInt(value.substr(6,2), 10);
		
	} else { 	
		trace(" invalid data type.");
		return; 
	}		

	var date = this._lunarSolarConverter(year, month, day, 1);
	
	if(this.isEmpty(date)) {
		return;
	}			
	
	var resultStr = "" + date.leapMonth + date.year + String(date.month).padLeft(2, "0") + String(date.day).padLeft(2, "0");
	
	return resultStr;
};
 
/**
 * 음력을 양력으로 변환.
 * @public
 * @param {string | date} value Date object 또는 yyyyMMdd 형태의 음력일자.
 * @param {boolean} leapMonth 윤달 여부.
 * @return {string | undefined} yyyyMMdd 형태의 양력일자. 실패시 undefined.
 * @example
 * var dt = nexutil.strToDate("20120331");
 * var str = nexutil.lunarToSolar(dt, false);
 * trace(str); // output : undefined <-- 정상적인 값이 아닐 때는 alert 표시됨.
 * 
 * var dt = nexutil.strToDate("20120201");
 * var str = nexutil.lunarToSolar(dt, false);
 * trace(str); // output : 20160309
 */				 
nexutil.lunarToSolar = function (value, leapMonth) {
	var year, month, day;
	var dateInfo = this._getYearMonthDay(value);
	if(this.isEmpty(dateInfo)) { return; }
	
	year  =  dateInfo.year;
	month =  dateInfo.month;
	day   =  dateInfo.day;	

	leapMonth = (leapMonth)? 1 : 0;
	var date = this._lunarSolarConverter(year, month, day, 2, leapMonth);

	if(this.isEmpty(date)) {
		return;
	}			
	
	var resultStr = "" + date.year + String(date.month).padLeft(2, "0") + String(date.day).padLeft(2, "0");
	
	return resultStr;		
};

/**
 * 전달된 月의 1일 만들기.
 * @public
 * @param {string | date} value Date object 또는 yyyyMMdd 형태의 일자.
 * @return {string} yyyyMM01.
 * @example
 * var dt = nexutil.strToDate("20120331");
 * var dt1 = nexutil.getFirstDate(dt);
 * trace(dt1); // output : Thu Mar 01 2012 00:00:00 GMT+0900
 * var str1 = "20120331";
 * var str = nexutil.getFirstDate(str1);
 * trace(str); // output : 20120301
 */			 
nexutil.getFirstDate = function(value)
{
	if ( this.isDate(value) )
	{
		var dt = new Date();
		dt.setFullYear(value.getFullYear(), value.getMonth(), 1);
		dt.setHours(value.getHours(), value.getMinutes(), value.getSeconds());
		dt.setMilliseconds(value.getMilliseconds());
		return dt;
	}
	else
	{
		var sRtn = "";
		var dDate = new Date(parseInt(value.substr(0,4)), parseInt(value.substr(4,2))-1, 1);
		sRtn =  dDate.getFullYear()
			 + (dDate.getMonth()+1).toString().padLeft(2, "0")
			 +  dDate.getDate().toString().padLeft(2, "0");

		return sRtn;
	}
};

/**
 * 날짜 차이 반환.
 * @public
 * @param {string} date1 yyyyMMddHHMMSS 형태의 일자.
 * @param {string} date2 yyyyMMddHHMMSS 형태의 일자.
 * @return {array} 두 날짜의 기간.[일,시,분,초]
 * @example
 * var dt0 = nexutil.strToDate("20130302113022");
 * var dt1 = nexutil.strToDate("20130305145032");
 * var etime = nexutil.getDiffTime(dt0, dt1); // return Array Type [일, 시, 분, 초]
 * trace(etime); // output : 3,3,20,10
 * var str0 = "20130302113022";
 * var str1 = "20130305145032";
 * var etime = nexutil.getDiffTime(str0, str1); // return Array Type [일, 시, 분, 초]
 * trace(etime); // output : 3,3,20,10
 * @memberOf public
 */		 
nexutil.getDiffTime = function(date1, date2)
{
	var dFrom, dTo;
	if ( this.isDate(date1) && this.isDate(date2) )
	{
		dFrom = date2;
		dTo = date1;
	}
	else
	{
		dFrom = new Date(date2.substring(0,4),  date2.substring(4,6)-1, date2.substring(6,8)
						,date2.substring(8,10), date2.substring(10,12), date2.substring(12,14));
		dTo   = new Date(date1.substring(0,4),  date1.substring(4,6)-1, date1.substring(6,8)
						,date1.substring(8,10), date1.substring(10,12), date1.substring(12,14));    
	}
	var nGap  = (dFrom.getTime() - dTo.getTime()) / 1000; 
	var nSec  = nGap % 60; 
	var nMin  = Math.floor(nGap/(60)) % 60; 
	var nHour = Math.floor(nGap/(60 * 60)) % 24; 
	var nDay  = Math.floor(nGap/(60 * 60 * 24)); 
		
	var sRtn = nDay + "" + nHour  + "" + nMin + "" + nSec+ ""; 
	return [nDay, nHour, nMin, nSec];
};

/**
 * 주어진 날짜 객체의 Mask Format 처리된 문자열을 반환.<br>
 * 요일명칭, 월 명칭, 오전/오후 명칭 표시 처리는 xacomm에 정의된 값으로 처리된다.<br><br>
 * nexutil.weekName : 요일명칭(Array value), <br>
 * nexutil.weekShortName : 요일축약명칭(Array value),<br>
 * nexutil.monthName : 월명칭(Array value),<br>
 * nexutil.monthShortName : 월축약 명칭(Array value),<br>
 * nexutil.ttName : 오전/오후 명칭(Array value)
 * @public
 * @param {date} dt Date 개체.
 * @param {string} strMask mask할 format 문자열.
 * @return {string} 변환된 문자열.
 * @example
 * var dt = nexutil.strToDate("20130430123412"); // convert Date type from "20130430123412".
 * trace(nexutil.getDateMaskFormatString(dt, "yyyy년 MM월 dd일 tt hh시 mm분 ss초")); // output : 2013년 04월 30일 오후 12시 34분 12초
 * trace(nexutil.getDateMaskFormatString(dt, "yyyy-MM-dd")); // output : 2013-04-30
 * trace(nexutil.getDateMaskFormatString(dt, "yy MM.dd")); // output : 13 04.30
 * trace(nexutil.getDateMaskFormatString(dt, "yyyy-MM-dd W \\Week")); // output : 2013-04-30 18 Week
 * trace(nexutil.getDateMaskFormatString(dt, "MMMM dddd")); // output : 4월 화요일
 */
nexutil.getDateMaskFormatString = function(dt, strMask)
{
	
	var arrMask = this._parseDateMask(strMask),
		arrDt = [], mask, h;
	for ( var i = 0, len = arrMask.length; i < len ; i++ )
	{
		mask = arrMask[i];
		if ( mask > -1 )
		{
			arrDt[arrDt.length] = strMask.charAt(mask);
		}
		else
		{
			switch (mask)
			{
				case "yyyy": arrDt[arrDt.length] = new String(dt.getFullYear()); break;
				case "MMMM": arrDt[arrDt.length] = nex.v.monthName[dt.getMonth()]; break;
				case "dddd": arrDt[arrDt.length] = nex.v.weekName[dt.getDay()]; break;
				case "MMM": arrDt[arrDt.length] = nex.v.monthShortName[dt.getMonth()]; break;
				case "ddd": arrDt[arrDt.length] = nex.v.weekShortName[dt.getDay()]; break;
				case "sss": arrDt[arrDt.length] = new String(dt.getMilliseconds()).padLeft(3,'0'); break;
				case "yy": arrDt[arrDt.length] = new String(dt.getFullYear() % 1000).padLeft(2,'0'); break;
				case "MM": arrDt[arrDt.length] = new String(dt.getMonth() + 1).padLeft(2,'0'); break;
				case "WW": arrDt[arrDt.length] = new String(getWeekNumber(dt)).padLeft(2,'0'); break;
				case "dd": arrDt[arrDt.length] = new String(dt.getDate()).padLeft(2,'0'); break;
				case "HH": arrDt[arrDt.length] = new String(dt.getHours()).padLeft(2,'0'); break;
				case "hh": arrDt[arrDt.length] = new String(((h = dt.getHours() % 12) ? h : 12)).padLeft(2,'0'); break;
				case "mm": arrDt[arrDt.length] = new String(dt.getMinutes()).padLeft(2,'0'); break;
				case "ss": arrDt[arrDt.length] = new String(dt.getSeconds()).padLeft(2,'0'); break;
				case "tt": arrDt[arrDt.length] = dt.getHours() < 12 ? nex.v.ttName[0] : nex.v.ttName[1]; break;
				case "M": arrDt[arrDt.length] = new String(dt.getMonth() + 1); break;
				case "d": arrDt[arrDt.length] = new String(dt.getDate()); break;
				case "H": arrDt[arrDt.length] = new String(dt.getHours()); break;
				case "h": arrDt[arrDt.length] = new String(((h = dt.getHours() % 12) ? h : 12)); break;
				case "m": arrDt[arrDt.length] = new String(dt.getMinutes()); break;
				case "s": arrDt[arrDt.length] = new String(dt.getSeconds()); break;
				case "W": arrDt[arrDt.length] = new String(nexutil.getWeekOfYear(dt)); break;
			}
		}
	}
	return arrDt.join("");
};

/**
 * 날짜 변환 함수
 * @public
 * @param {xaComp}
 *            calendar
 * @return {string} 반환된 날짜
 * @example nexutil.dateFormatString(new Date(), "%Y/%m/%d %H:%M:%S");
 */
nexutil.dateFormatString = function (objDate, strFormat) {
	if (this.isEmpty(strFormat))
		return "";

	var fY = String(objDate.getFullYear());
	var fY2 = fY.substr(fY.length - 2, 2);

	strFormat = strFormat.toString();
	strFormat = strFormat.split("%Y").join(String(objDate.getFullYear()));
	strFormat = strFormat.split("%y").join(fY2);
	strFormat = strFormat.split("%m").join(
		String(objDate.getMonth() + 1).padLeft(2, "0"));
	strFormat = strFormat.split("%d").join(
		String(objDate.getDate()).padLeft(2, "0"));
	strFormat = strFormat.split("%H").join(
		String(objDate.getHours()).padLeft(2, "0"));
	strFormat = strFormat.split("%M").join(
		String(objDate.getMinutes()).padLeft(2, "0"));
	strFormat = strFormat.split("%S").join(
		String(objDate.getSeconds()).padLeft(2, "0"));

	return strFormat;
};

/* component의 property, currentstyle, style 에서 특정 name에 해당하는 값을 얻어온다.
 * @private
 * @param {nexacro Component} obj where 문자열
 * @param {string} type 검색 대상 (property, currentstyle, style)
 * @param {string} name property, currentstyle, style 에서 찾을 명칭
 * @return {string} name에 해당하는 값
 */
nexutil._getQueryCompValue = function(obj, type, name)
{
	var ret;
	if ( type == "prop" )
	{
		ret = obj[name];
	}
	else if ( type == "curStyle" )
	{
		ret = obj.currentstyle[name];
	}
	else if ( type == "style" )
	{
		ret = obj.style[name];
	}

	if ( ret && typeof ret == "object" )
	{
		if ( ret.toString )
		{
			ret = ret.toString();
		}
		else
		{
			ret = ret + "";
		}
		ret = ret.trim();
	}

	return ret;
};

/**
 * mask format 변환 정보 반환.
 * @private
 * @param {string} strMask mask할 format 문자열.
 * @return {array} mask format 변환 정보.
 */		
nexutil._parseDateMask = function(strMask)
{
		
	var res = nex.v.dateMaskCache[strMask];
	if ( res ) return res;

	var arrMask = [], tokenStr, seq = 0,
		bEscape = false, bQuote = false,
		maskArr = strMask.split(""),
		tmpStr;

	for ( var i = 0, len = maskArr.length ; i < len ; )
	{
		tokenStr = maskArr[i];
		//trace(i + "===>" + tokenStr);
		if( bEscape == false && tokenStr == "'" ) 
		{ // Mask가 Quotation이 시작될 경우.
			if( bQuote == false )
				bQuote = true;
			else
				bQuote = false;
			i++;
			continue;
		}
		if( bEscape == false && tokenStr == "\\" && !bQuote ) 
		{ // Mask에서 Escape에 진입할 경우.
			bEscape = true;
			i++;
			continue;
		}
		else if ( bEscape ) 
		{ // Mask에서 Escape를 사용할 경우.
			//trace(i + "(EEE)===>" + tokenStr);
			arrMask[seq] = i;
			seq++;
			bEscape = false;
		}
		else if( bQuote == false ) 
		{// Mask에서 Quotation 밖의 글자에 대해.
			tmpStr = strMask.substr(i, 4);
			if ( tmpStr == "yyyy" || tmpStr == "MMMM" || tmpStr == "dddd" ) //yyyy, MMMM, dddd
			{
				arrMask[seq] = tmpStr;
				i += 4;
				seq++;
				continue;
			}
			tmpStr = strMask.substr(i, 3);
			if ( tmpStr == "MMM" || tmpStr == "ddd" || tmpStr == "sss" ) //MMM, ddd, sss
			{
				arrMask[seq] = tmpStr;
				i += 3;
				seq++;
				continue;
			}
			tmpStr = strMask.substr(i, 2);
			if ( tmpStr == "yy" || tmpStr == "MM" || tmpStr == "dd" ||
				 tmpStr == "HH" || tmpStr == "mm" || tmpStr == "ss" ||
				 tmpStr == "hh" || tmpStr == "tt" || tmpStr == "tt" ) // yy, MM, dd, HH, mm , ss, tt, WW
			{
				arrMask[seq] = tmpStr;
				i += 2;
				seq++;
				continue;
			}

			if ( tokenStr == "M" || tokenStr == "d" || tokenStr == "H" ||
				 tokenStr == "h" || tokenStr == "m" || tokenStr == "s" || tokenStr == "W" ) // M, d, H, h, m, s, W
			{
				arrMask[seq] = tokenStr;
				seq++;
			}
			else
			{
				arrMask[seq] = i;
				seq++;
			}
		}
		i++;
	}
	
	nex.v.dateMaskCache[strMask] = arrMask;
	
	return arrMask;
};

/**
 * 양/음력 변환 private 함수.
 * @private
 * @param {number} year yyyy 형태의 연도.
 * @param {number} month MM 형태의 월.
 * @param {number} day dd 형태의 일.
 * @param {number} type 1:음력으로 반환, 2:양력으로 반환.
 * @param {number} leapmonth 0:평달, 1:윤달
 * @return {object | undefined} 실패시 undefined.
 */		 		
nexutil._lunarSolarConverter = function (year, month, day, type, leapmonth) {

	var solYear, solMonth, solDay;
	var lunYear, lunMonth, lunDay;
	var lunLeapMonth, lunMonthDay;    
	var i, lunIndex;

	var solMonthDay = [31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

	/* range check */
	if (year < 1900 || year > 2040)
	{
		alert('1900년부터 2040년까지만 지원합니다');
		return;
	}

	/* 속도 개선을 위해 기준 일자를 여러개로 한다 */
	if (year >= 2000)
	{
		/* 기준일자 양력 2000년 1월 1일 (음력 1999년 11월 25일) */
		solYear = 2000;
		solMonth = 1;
		solDay = 1;
		lunYear = 1999;
		lunMonth = 11;
		lunDay = 25;
		lunLeapMonth = 0;

		solMonthDay[1] = 29;    /* 2000 년 2월 28일 */
		lunMonthDay = 30;    /* 1999년 11월 */
	}
	else if (year >= 1970)
	{
		/* 기준일자 양력 1970년 1월 1일 (음력 1969년 11월 24일) */
		solYear = 1970;
		solMonth = 1;
		solDay = 1;
		lunYear = 1969;
		lunMonth = 11;
		lunDay = 24;
		lunLeapMonth = 0;

		solMonthDay[1] = 28;    /* 1970 년 2월 28일 */
		lunMonthDay = 30;    /* 1969년 11월 */
	}
	else if (year >= 1940)
	{
		/* 기준일자 양력 1940년 1월 1일 (음력 1939년 11월 22일) */
		solYear = 1940;
		solMonth = 1;
		solDay = 1;
		lunYear = 1939;
		lunMonth = 11;
		lunDay = 22;
		lunLeapMonth = 0;

		solMonthDay[1] = 29;    /* 1940 년 2월 28일 */
		lunMonthDay = 29;    /* 1939년 11월 */
	}
	else
	{
		/* 기준일자 양력 1900년 1월 1일 (음력 1899년 12월 1일) */
		solYear = 1900;
		solMonth = 1;
		solDay = 1;
		lunYear = 1899;
		lunMonth = 12;
		lunDay = 1;
		lunLeapMonth = 0;

		solMonthDay[1] = 28;    /* 1900 년 2월 28일 */
		lunMonthDay = 30;    /* 1899년 12월 */
	}

	lunIndex = lunYear - 1899;

	while (true)
	{
		if (type == 1 &&
			year == solYear &&
			month == solMonth &&
			day == solDay)
		{
			return {"year": lunYear, "month": lunMonth, "day": lunDay, "leapMonth": lunLeapMonth};
		}    
		else if (type == 2 &&
				year == lunYear &&
				month == lunMonth &&
				day == lunDay && 
				leapmonth == lunLeapMonth)
		{
			return {"year": solYear, "month": solMonth, "day": solDay, "leapMonth": 0};
		}

		/* add a day of solar calendar */
		if (solMonth == 12 && solDay == 31)
		{
			solYear++;
			solMonth = 1;
			solDay = 1;

			/* set monthDay of Feb */
			if (solYear % 400 == 0)
				solMonthDay[1] = 29;
			else if (solYear % 100 == 0)
				solMonthDay[1] = 28;
			else if (solYear % 4 == 0)
				solMonthDay[1] = 29;
			else
				solMonthDay[1] = 28;

		}
		else if (solMonthDay[solMonth - 1] == solDay)
		{
			solMonth++;
			solDay = 1;    
		}
		else {
			solDay++;
		}


		/* add a day of lunar calendar */
		if (lunMonth == 12 &&
			((nex.v.lunarMonthTable[lunIndex][lunMonth - 1] == 1 && lunDay == 29) ||
			(nex.v.lunarMonthTable[lunIndex][lunMonth - 1] == 2 && lunDay == 30)))
		{
			lunYear++;
			lunMonth = 1;
			lunDay = 1;

			lunIndex = lunYear - 1899;
			
			if(lunIndex > 144) {
				alert("날짜 범위를 벗어났습니다.");
				return;
			}					

			if (nex.v.lunarMonthTable[lunIndex][lunMonth - 1] == 1)
				lunMonthDay = 29;
			else if (nex.v.lunarMonthTable[lunIndex][lunMonth - 1] == 2)
				lunMonthDay = 30;
		}
		else if (lunDay == lunMonthDay)
		{
			if (nex.v.lunarMonthTable[lunIndex][lunMonth - 1] >= 3
				&& lunLeapMonth == 0)
			{
				lunDay = 1;
				lunLeapMonth = 1;
			}
			else
			{
				lunMonth++;
				lunDay = 1;
				lunLeapMonth = 0;
			}

			if (nex.v.lunarMonthTable[lunIndex][lunMonth - 1] == 1)
				lunMonthDay = 29;
			else if (nex.v.lunarMonthTable[lunIndex][lunMonth - 1] == 2)
				lunMonthDay = 30;
			else if (nex.v.lunarMonthTable[lunIndex][lunMonth - 1] == 3)
				lunMonthDay = 29;
			else if (nex.v.lunarMonthTable[lunIndex][lunMonth - 1] == 4 &&
					lunLeapMonth == 0)
				lunMonthDay = 29;
			else if (nex.v.lunarMonthTable[lunIndex][lunMonth - 1] == 4 &&
					lunLeapMonth == 1)
				lunMonthDay = 30;
			else if (nex.v.lunarMonthTable[lunIndex][lunMonth - 1] == 5 &&
					lunLeapMonth == 0)
				lunMonthDay = 30;
			else if (nex.v.lunarMonthTable[lunIndex][lunMonth - 1] == 5 &&
					lunLeapMonth == 1)
					lunMonthDay = 29;
			else if (nex.v.lunarMonthTable[lunIndex][lunMonth - 1] == 6)
				lunMonthDay = 30;
		}
		else
			lunDay++;
	}
};

/**
 * 양/음력 변환시 입력값에서 year, month, day값을 추출 후 object로 반환한다.
 * @private
 * @param {string | date} value Date object 또는 yyyyMMdd 형태의 음력일자.
 * @return {object} {"year": year, "month": month, "day": day}.
 */		    
nexutil._getYearMonthDay = function (value) {
	var year, month, day;
	if ( this.isDate(value) ) {
		year = value.getFullYear();
		month = value.getMonth() + 1;
		day = value.getDate();
		
	} else if(this.isString(value)) {
		year = parseInt(value.substr(0,4), 10);
		month = parseInt(value.substr(4,2), 10);
		day = parseInt(value.substr(6,2), 10);
		
	} else { 
		
		trace("invalid data type.");
		return; 
	}

	return {"year": year, "month": month, "day": day};
};

/*●============================
	         number
==============================●*/
 /**
 * 숫자를 한글로 표기.
 * @public
 * @param {number} val 숫자 
 * @return {string} 문자열
 * @example
 * var val = 1200340500.01;
 * var str = nexutil.intToHanGul(val);
 * trace(str); // output : 일십이억 삼십사만 오백  소수점 영일
 * var val = 1200340500;
 * var str = nexutil.intToHanGul(val);
 * trace(str); // output : 일십이억 삼십사만 오백
 * @memberOf public
 */ 	 
nexutil.intToHanGul = function(val)
{
	if ( !this.isString(val) )
	{
		val = String(val);
	}

	var arrhn = ["영","일","이","삼","사","오","육","칠","팔","구"];
	var arrhj = ["","만","억","조","경","해"];
	var arrul = ["영천","영백","영십","영"];
	var arrtm = [];
	var sRtn  = "";
	var sTm2  = "";

	if (val.charAt(0) == "-") 
	{
		sRtn   = "마이너스 ";
		val = val.substr(1, val.length-1);
	}
	else if (val.charAt(0) == "+")
	{
		val = val.substr(1, val.length-1);
	}

	var nPoint = val.indexOf( '.' ),
		strNumber = "", bPoint, strDecimal = "";

	if( nPoint < 0 ) 
	{
		strNumber = val;
		bPoint = false;
	}
	else 
	{
		strNumber = val.substr( 0, nPoint);
		strDecimal = val.substr( nPoint + 1);
		bPoint = true;
	}

	var nSize = Math.ceil(strNumber.length/4);
	sTmpPrice = "";

	for (var i = strNumber.length; i >= 0; i--)
	{
		sTmpPrice += strNumber.substring(i, i-1);
	}
	
	strNumber = sTmpPrice;

	for (var i = 0; i < nSize; i++) 
	{
		sSum     = arrhj[i] + " ";
		arrtm[i] = strNumber.substr(i*4, 4);    
		sTm2     = "";

		for (var j = arrtm[i].length; j >= 0; j--)
		{
			sTm2 += arrtm[i].substring(j, j-1);      
		}

		arrtm[i] = sTm2;
		sPart 	 = arrtm[i].length;

		for (var j = 0; j < 10; j++) 
		{
			for (var k = 0; k < 10; k++) 
			{
				arrtm[i] = arrtm[i].replace(k, arrhn[k]);
			}
		}

		if (sPart == 4) 
		{
			arrtm[i] = arrtm[i].charAt(0) + "천" + arrtm[i].charAt(1) + "백" + arrtm[i].charAt(2)+"십"+arrtm[i].charAt(3);
		}
		else if (sPart == 3) 
		{
			arrtm[i] = arrtm[i].charAt(0) + "백" + arrtm[i].charAt(1) + "십" + arrtm[i].charAt(2);
		}
		else if (sPart == 2) 
		{
			arrtm[i] = arrtm[i].charAt(0) + "십"+arrtm[i].charAt(1);
		}
		else 
		{
			arrtm[i] = arrtm[i].charAt(0);
		}

		for (var j = 0; j < 4; j++) 
		{
			if (arrtm[i].match(arrul[j])) 
			{
				sPart--; 
				arrtm[i] = arrtm[i].replace(arrul[j], "");
			}
		}

		if (sPart != 0) 
		{
			arrtm[i] += sSum;
		}
	}

	for (nSize; nSize > -1; nSize--)
	{
		sRtn += arrtm[nSize];
	}

	sRtn = sRtn.replace("undefined","");
	if ( bPoint )
	{
		sRtn += " 소수점 ";
		for ( var i = 0, n = strDecimal.length ; i < n ; i++ )
		{
			sRtn += arrhn[parseInt(strDecimal.charAt(i))];
		}
	}
	return sRtn;
};			

/**
* 파일 사이즈 환산.
* @public
* @param {number} bytes 파일 사이즈(byte 단위)
* @param {number=} precision 정밀도(default : 1)
* @param {boolean=} unit 파일단위(KB,MB,...) 포함여부(default : true).
* @return {number|string} 파일 사이즈(소수점 1자리 포함).
* @example
* var size = 1023405670,
*     precision = 2,
*     unit = false;
* var result = nexutil.bytesToSize(size, precision, unit);
* trace(result); // output : 976.00
* result = nexutil.bytesToSize(size, 0);
* trace(result); // output : 976 MB
* result = nexutil.bytesToSize(size);
* trace(result); // output : 976.0 MB
*/	
nexutil.bytesToSize = function(bytes, precision, unit) 
{
	if(precision === null || precision === undefined || precision === "") precision = 1;

	if(unit !== false) unit = true;
	
	var units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	var i = 0;
	while(bytes >= 1024) 
	{
		bytes /= 1024;
		++i;
	}
	
	if(!unit)
	{
		return bytes.toFixed(precision);
	} 
	else 
	{
		if ( precision > 0 )
		{
			return bytes.toFixed(precision) + ' ' + units[i];
		}
		else
		{
			return Math.round(bytes) + ' ' + units[i];
		}
	}
	
};	

/**
* 반올림할 자리의 값이 1~4인 경우는 버리고, 6~9인 경우는 올림 처리한다.<br>
* 5의 경우 그 앞자리 값이 짝수이면 버리고, 홀수이면 올림 처리한다.<br>
* 편중 오차를 최소화하는 방법 중의 하나로 Banker's Rounding을 사용하는 것입니다.
* @public
* @param {number} value 변환할 값.
* @param {number} length 소수부.
* @return {number} 
* @example
* alert(nexutil.evenRound(1.5)); // 2
* alert(nexutil.evenRound(2.5)); // 2
* alert(nexutil.evenRound(1.535, 2)); // 1.54
* alert(nexutil.evenRound(1.525, 2)); // 1.52
*/		
nexutil.evenRound = function(num, decimalPlaces)
{
	var d = decimalPlaces || 0;
	var m = Math.pow(10, d);
	var n = +(d ? num * m : num).toFixed(8); // Avoid rounding errors
	var i = Math.floor(n), f = n - i;
	var r = (f == 0.5) ? ((i % 2 == 0) ? i : i + 1) : Math.round(n);
	return d ? r / m : r;
};

/**
 * 주어진 숫자 형식값에 Mask Format 처리된 문자열을 반환합니다.
 * @public
 * @param {string|number} value 숫자형식 값
 * @param {string} strMask mask할 format 문자열.
 * @return {string} 변환된 문자열.
 * @example
 * var val = 1234.567;
 * var result = nexutil.getNumberMaskFormatString(val, "99.99");
 * trace(result); // output : 1234.56
 * result = nexutil.getNumberMaskFormatString(val, "9900.0099");
 * trace(result); // output : 1234.567
 * result = nexutil.getNumberMaskFormatString(val, "9,999.9");
 * trace(result); // output : 1,234.5
 *
 * val = 1.2;
 * result = nexutil.getNumberMaskFormatString(val, "99.99");
 * trace(result); // output : 1.2
 * result = nexutil.getNumberMaskFormatString(val, "9900.0099");
 * trace(result); // output : 01.20
 * result = nexutil.getNumberMaskFormatString(val, "9,999.9");
 * trace(result); // output : 1.2
 */		
nexutil.getNumberMaskFormatString = function(value, strMask)
{
	
	var strText = value + "";
	strText = this._normalizeValue(strText, true);

	var nDecimalLen = 0;		// 소수부 길이.
	var nIntegerLen = 0;		// 정수부 길이.

	// Split : value를 정수부, 소수부로 나누고 소수점 유무, 양음부호부 까지 판별한다.
	var ret = this._numberSplit(strText),
		nSign = ret[0],
		bPoint = ret[1],
		strNumber = ret[2],
		strDecimal = ret[3];

	// 각 부분의 길이구함.
	nIntegerLen = strNumber.length;
	nDecimalLen = strDecimal ? strDecimal.length : 0;

	var maskInfo = this._parseNumberMask(strMask),
		dispComma = maskInfo[0],
		nMin = maskInfo[1],
		nMax = maskInfo[2],
		nDecimalMin = maskInfo[3],
		nDecimalMax = maskInfo[4];

	if (nMin > nIntegerLen) 
	{
		var tmpStr = "";
		for(var i=0, n =  nMin - nIntegerLen; i < n ; i++) 
		{
			tmpStr += "0";
		}
		strNumber = tmpStr + strNumber;
	}

	if (nDecimalMin > nDecimalLen) 
	{
		var tmpStr = "";
		for(var i=0, n = nDecimalMin - nDecimalLen; i < n ; i++) 
		{
			tmpStr += "0";
		}
		strDecimal = strDecimal + tmpStr;
	}
	else if ( nDecimalMax != -1 && nDecimalMax < nDecimalLen) 
	{
		strDecimal = strDecimal.substring(0, nDecimalMax) + strDecimal.substr(nDecimalLen, strDecimal.length);
	}
	// 정수부분에 Comma적용.
	if(  dispComma )
		strNumber = this._applyComma(strNumber);

	if( nSign < 0 ) strText = "-";
	else if( nSign > 0) strText = "+";
	else	strText = "";

	// 정수부.
	strText += strNumber;

	// 소수부.
	if( strDecimal.length > 0 ) 
	{
		strText += nex.v.point;
		strText += strDecimal;
	}
	return strText;
};	

/**
 * mask format 변환 정보 반환.
 * @private
 * @param {string} strMask mask할 format 문자열.
 * @return {array} mask format 변환 정보
 */	
nexutil._parseNumberMask = function(strMask)
{
	
	var res = nex.v.numberMaskCache[strMask];
	if ( res ) return res;

	var dispComma = false,
		nMin = 0,
		nMax = 0,
		nDecimalMin = -1,
		nDecimalMax = 0;

	strMask = this.trimLeft(strMask);

	if (strMask.length <= 0 ) 
	{
		return [dispComma, nMin, nMax, nDecimalMin, nDecimalMax];
	}

	nDecimalMax = 0;
	nDecimalMin = 0;
	dispComma = (strMask.indexOf(",") >= 0);

	var c,
		bFindPoint = false;

	for( var i = 0, n = strMask.length; i < n; i++ ) 
	{
		c = strMask.charAt(i);
		if ( c == '.' )
		{
			bFindPoint = true;
		}
		else if ( c == '#' || c == '0' || c == '9' || c == ',' ) 
		{
			if ( bFindPoint ) 
			{
				if ( c == '0' ) 
				{
					nDecimalMax++;
					nDecimalMin = nDecimalMax;
				}
				else
				{
					nDecimalMax++;
				}
			}
			else 
			{
				if ( c == '0' )
				{
					nMin++;
				}
				else if ( nMin > 0)
				{
					nMin++;
				}
				nMax++;
			}
		}
	}// end of for.
	
	res = [dispComma, nMin, nMax, nDecimalMin, nDecimalMax];
	nex.v.numberMaskCache[strMask] = res;
	return res;
};

/**
 * 숫자형 문자에서 부호, 소수점, 정수부, 소수부 분리.
 * @private
 * @param {string} strText 숫자형 문자.
 * @return {array} 분리 정보
 */	
nexutil._numberSplit = function(strText) 
{

	// 부호 분리.
	var nBegin = 0, nSign;
	if( (nBegin = strText.indexOf('+')) >= 0 ) 
	{
		nSign = +1;
		nBegin = 1;
	}
	else if( (nBegin = strText.indexOf('-')) >= 0 ) 
	{
		nSign = -1;
		nBegin = 1;
	}
	else 
	{
		nSign = 0;
		nBegin = 0;
	}

	var nPoint = strText.indexOf( nex.v.point ,nBegin ),
		strNumber = "", bPoint, strDecimal = "";
	if( nPoint < 0 ) 
	{
		strNumber = strText.substr( nBegin );
		bPoint = false;
	}
	else 
	{
		strNumber = strText.substr( nBegin, nPoint - nBegin);
		strDecimal = strText.substr( nPoint + 1);
		bPoint = true;
	}
	return [nSign, bPoint, strNumber, strDecimal];
};

/**
 * mask 제거.
 * @private
 * @param {string} strText 숫자형 문자.
 * @return {string} 변환된 문자열
 */	
nexutil._removeMask = function(str) 
{
	
	
	str = str.trim();
	var ntxtLen = str.length,
		i,
		pointVal = nex.v.point,
		separatorVal = nex.v.separator;
		bPoint = false, // 소숫점은 1개만 인정.
		bInside = false, // 부호는 숫자가 나오기 전에만 인정.
		buf = [];
	for(i = 0 ; i < ntxtLen ; i++ ) 
	{
		var c = str.charAt(i);
		if( ( c == '+' || c == '-') && ( bInside === false) ) 
		{
			// 부호는 숫자가 나오기 전에만 인정.
			buf.push(c);
			bInside = true;
		}
		else if( nexacro.isNumeric(c) ) 
		{
			// 숫자인경우 인정.
			buf.push(c);
			bInside = true;
		}
		else if( c == pointVal && bPoint === false ) 
		{
			// 소숫점은 1회만 인정.
			buf.push(c);
			bPoint = true;
			bInside = true;
		}
		else if( c != separatorVal ) 
		{
			return "";
		}
	}
	return buf.join("");
};

/**
 * 숫자 단위 적용.
 * @private
 * @param {string} strNumber 숫자형 문자.
 * @return {string} 변환된 문자열
 */
nexutil._applyComma = function(strNumber) 
{
	// 차후에 locale 처리 필요.
	
	
	
	var grouping = nex.v.separatorGrouping;
	var thousands_sep = nex.v.separator;
	if( thousands_sep.length > 0 )
	{
		var	dec_buf = strNumber.split(""),
			dec_size = strNumber.length,
			out_size = (thousands_sep.length + 1) * strNumber.length,
			out_buf = [],
			cur_group = 0, d_size = dec_size,
			endpos = out_size,
			groupingIdx = 0,
			g;

		grouping = grouping.split("");

		while (grouping[groupingIdx] && d_size > 0 ) 
		{	
			g = grouping[groupingIdx];
			if ( g == "\\" ) 
			{
				groupingIdx++;
				g = parseInt(grouping[groupingIdx]);
			}
			if (g > 0 ) 
			{
				cur_group = g;
				while (g-- > 0 && d_size > 0)
					out_buf[--endpos] = dec_buf[--d_size];
				if (d_size > 0)
					out_buf[--endpos] = thousands_sep;
			}
			else if (g == 0 && d_size > cur_group) 
			{
				g = cur_group;
				while (g-- > 0)
					out_buf[--endpos] = dec_buf[--d_size];
				if (d_size > 0)
					out_buf[--endpos] = thousands_sep;
			}
			else if (g == 0 && d_size <= cur_group && d_size > 0 ) 
			{
				g = d_size;
				while (g-- > 0)
					out_buf[--endpos] = dec_buf[--d_size];
			}
			else 
			{
				break;
			}
		}
		return out_buf.slice(endpos,out_size + endpos).join("");
	}
	return strNumber;
};

/**
 * 숫자형 변환
 * @private
 * @param {string} strValue 숫자형 문자.
 * @param {boolean} bTrim 공백제거 여부.
 * @return {string} 변환된 문자열.
 */	
nexutil._normalizeValue = function(strValue, bTrim) 
{
	
	
	if (strValue.length<=0) return strValue;
	if ( bTrim === undefined ) bTrim = true;
		
	// 좌우 공백 제거, 마스크 제거.
	strValue = this._removeMask(strValue);
	// 정규형식으로 만듬.
	if( strValue.charAt( strValue.length -1 ) == nex.v.point )
		strValue = strValue + "0";

	if(bTrim) 
	{
		// 0 Trim 하기 전에 부호 있는 경우 주의.
		var bSign = ( strValue.charAt(0) == '-' ) ? 1 : 0;
		var pointVal = nex.v.point;

		// 0000~~ 에 대해서 첫 자리 0을 삭제
		// -0000~~ 에 대해서 부호 뒷 자리 0을 삭제.
		while( strValue.charAt( 0+bSign ) == '0' 
				&& strValue.charAt( 1+bSign ) != pointVal
				&& strValue.length != (1+bSign) ) 
		{
				strValue = strValue.substring(0, 0+bSign) + strValue.substr(0+bSign+1, strValue.length);
		}
		// .~~0000에 대해서 0을 Trim
		var nPoint = strValue.indexOf(pointVal);
		if( nPoint >= 0 ) 
		{
			var i;
			for( i = strValue.length - 1 ; i > nPoint+1 ; i -- ) 
			{
				if( strValue.charAt( i ) != '0' )
						break;
			}
			strValue = strValue.substring(0, i + 1 );
		}
	}

	// 부호에 대해 정규형으로.
	if( strValue.charAt(0) == '+' ) 
	{
		strValue = strValue.substr(1);
	}
	else if( strValue.length <= 0 || parseFloat(strValue) == 0.0 ) 
	{
		// 값이 0.0인경우 부호 제거.
		if( strValue.charAt(0) == '-' )
			strValue = strValue.substr(1);
	}
	return strValue;
};

/*●============================
	         JSON
==============================●*/	
/**
* string으로 넘어오는 파라메터를 JSON object 로 변환


* @public
* @param {string} string 파라메터
* @return {array} Array 객체
* @example
* var str = "arg1=aa arg2=bb";
* nexutil.makeJSONarguments(str);
*/ 
nexutil.makeJSONarguments = function(strArg) {

	if (this.isEmpty(strArg))
		return;

	var TokenPatterns = [
			[
					"",
					"[^-\\d\\s~!#^&*=+|\\)\\(\\]\\[\\}\\{%~:;?\\\"<,.>\|/\\'][^-\\s~!#^&*=+|\\)\\(\\]\\[\\}\\{%~:;?\\\"<,.>\|/\\']*" ],
			[ "", "=" ], [ "'", "'[^'\\\\]*(\\\\[\\S\\s]|[^'\\\\]*)*'" ],
			[ '"', '"[^"\\\\]*(\\\\[\\S\\s]|[^"\\\\]*)*"' ],
			[ "", "[0-9]+(\\.[0-9]*)?" ], [ "", "[ \\t\\n\\r]+" ],
			[ "", "[\\S]+" ] ];

	var TokenArray = this._getMatchToken(strArg, TokenPatterns, "m", -1);
	var oResult = this._getTokenToArgArr(TokenArray);
	return oResult;
};

/**
* 특정 오브젝트 또는 오브젝트 이름이 폼 내에 존재하는지 여부를 확인하는 메소드입니다.
* @private
* @param {object} object
* @return {boolen} 존재여무 true/false
*/
nexutil._getMatchToken = function(strArg, tokenPatterns, flag, nEtcIndex) {

	var allPattern = "[\\S\\s]";
	var pos = 0;
	var retPos = 0;
	var firstStr = "";
	var strPattern = "";
	var bFind = false;

	var TokenArray = new Array();
	var Token;

	while (pos < strArg.length) {

		bFind = false;

		for (var i = 0; i < tokenPatterns.length; i++) {
			firstStr = tokenPatterns[i][0];
			strPattern = tokenPatterns[i][1];
			retPos = this._matchTokenType(strArg, firstStr, strPattern, pos,
					flag);
			if (retPos > pos) {
				Token = strArg.substr(pos, retPos - pos);
				TokenArray.push([ i, Token ]);
				pos = retPos;
				bFind = true;
				break;
			}
		}

		if (bFind == true)
			continue;
		retPos = this._matchTokenType(strArg, "", allPattern, pos, flag);
		if (retPos > pos) {
			if (nEtcIndex != -1) {
				Token = strArg.substr(pos, retPos - pos);
				TokenArray.push([ nEtcIndex, Token ]);
			}
			pos = retPos;
		}
	}
	return TokenArray;
};

/**
* scan된 Array를 name과 value로 구분해서 배열로 만든다
* @private
* @param {string} scan된 Array
* @return {array} name과 value로 구분한 Array 객체
* @example
*/
nexutil._getTokenToArgArr = function(TokenArray) {
	var Tokenlength = TokenArray.length;
	// var argArr = [];
	var oArg = {};
	var Token;
	var name = '';
	var value = [];
	var bLeft = 0;
	var sKey = "key";
	var tokenVar = TokenArray;

	for (var i = 0; i < Tokenlength; i++) {
		Token = TokenArray[i];

		switch (Token[0]) {
		case 0:

			if (bLeft == 0) {
				name = Token[1];

			} else if (bLeft == 1) {
				oArg[name] = nexacro.stripQuote(Token[1]);
				bLeft = 0;
			} else {
				bLeft = 0;
			}

			break;

		case 1: // =
			bLeft = 1;

			break;
		case 2: // String "xxxxx"
		case 3: // String 'xxxxx'
		case 4: // number 123456
			oArg[name] = nexacro.stripQuote(Token[1]);
			bLeft = 0;

			break;
		case 5: // =
			bLeft = 0;
			break;
		case 6: // etc printable char

			oArg[name] = nexacro.stripQuote(Token[1]);

			bLeft = 0;
			break;

		default:

		}
	}

	return oArg;

};

/**
* String을 pattern과 주어진 position에서 matching 되는 문자열의 위치를 확인한다.
* @private
* @param {string} str
* @param {string} firstStr
* @param {string} pattern
* @param {string} pos
* @param {boolen} flag
* @return {array}matching 되는 첫 위치에서 부터의 문자열 마지막 위치
*/
nexutil._matchTokenType = function(str, firstStr, pattern, pos, flag) {

	var strFirst = str.substr(pos);

	var exp = new RegExp(pattern, flag);
	var objArr = exp.exec(strFirst);

	if (objArr != null && objArr.index == 0)
		return pos + objArr[0].length;
	return -1;
};

/*●============================
	         Object
==============================●*/
/**
* object에서 각 반복되는 속성값들을 주어진 함수로 처리한다.<br>
* 주어진 함수에서 임의 속성 처리에서 return false를 하면 임의 속성지점에서 반복이 멈춘다.
* @public
* @param {object} object 
* @param {function} func callback 함수 
* @param {string} func.prop object property name 
* @param {object} func.val object property value
* @param {object} func.object object 그 자체
* @param {object=} scope callback 함수에 대한 수행 scope
* @example
* var datas = {code: "001", userId: "", name: "pete"};
* nexutil.objectEach(datas, function(prop, val, object) {
* 	var result = "";
* 	if ( !val )
* 	{
* 		result = prop + " must have not a non-empty value!"
* 		st_result03.text += result;
* 		trace(result);	// output : userId must have not a non-empty value!
* 		return false;
* 	}
* 	result = prop + ":" + val;
* 	st_result03.text += result + "  ";
* 	trace(result);	// output : code:001
* }, this);
*/
nexutil.objectEach = function(object, func, scope)
{
	var p,
		scope = scope || object;
	for (p in object)
	{
		if (object.hasOwnProperty(p))
		{
			if (func.call(scope, p, object[p], object) === false)
			{
				return;
			}
		}
	}
};

/**
* object 속성값들을 transcation 함수에 사용되는 인자인 strArgument를<br>
* transaction 형식의 값으로 변경한다.<br>
* 속성 구조가 반복되는 객체의 경우는 (속성명 + "_" + index) 또는<br> 
* (속성명 + "_" + 속성명) 의 argument string으로 변환한다.<br>
*   예) {colors: ['red', 'green', 'blue']}) == > colors_0='red' colors_1='green' colors_2='blue'
* @public
* @param {object} object argument string 정보를 담고 있는 객체
* @return {string} argument 형태로 변환 처리된 string
* @example
* edt_arg.value = "edt_arg_value"; // Edit Compoenent value
* var result = nexutil.getServiceArgumenets({a: 1, b: "2", code: edt_arg});
* trace(result);
* // output : a=1 b="2" code="edt_arg_value"
*
* var result = nexutil.getServiceArgumenets({colors: ['red', 'green', edt_arg]});
* trace(result);
* // output : colors_0="red" colors_1="green" colors_2="edt_arg_value"
*
* var result = nexutil.getServiceArgumenets({a: 1, b: {b1: "2", b2: "3"}, code: edt_arg});
* trace(result);
* // output : a=1 b_b1="2" b_b2="3" code="edt_arg_value"
*/
nexutil.getServiceArgumenets = function(object)
{
	var p, objects = [],
		i, len, value,
		obj, params = [],
		isEmpty = this.isEmpty;
		
	
	for (p in object) 
	{
		if (object.hasOwnProperty(p)) 
		{
			objects = objects.concat(this._toArgumentObjects(p, object[p], true));
		}
	}
	
	for (i = 0, len = objects.length; i < len; i++) 
	{
		obj = objects[i];
		if (!obj || isEmpty(obj.name))	continue;
		
		name = obj.name;
		value = obj.value;
		if (typeof value === "string")
		{
			value = nexacro.wrapQuote(value);
		}
		
		params.push(name + '=' + value);
	}

	return params.join(" ");
};

/**
* object 속성값들을 transcation 함수에 사용되는 인자인<br>
* strInDatasets, strOutDatasets를 transaction 형식의 값으로 변경한다.
* @public
* @param {object} object strInDatasets, strOutDatasets string 정보를 담고 있는 객체
* @return {string} 변환 처리된 string
* @example
* var result = nexutil.getServiceDatasets({input: ds_users, input1: "ds_info"});
* trace(result);
* // output : input=ds_users input1=ds_info
*/
nexutil.getServiceDatasets = function(object)
{
	var p, objects = [],
		i, len, value,
		obj, params = [],
		isEmpty = this.isEmpty;
		
	
	for (p in object) 
	{
		if (object.hasOwnProperty(p)) 
		{
			objects = objects.concat(this._toArgumentObjects(p, object[p]));
		}
	}
	
	for (i = 0, len = objects.length; i < len; i++) 
	{
		obj = objects[i];
		if (!obj || isEmpty(obj.name))	continue;
		
		name = obj.name;
		value = obj.value;
		params.push(name + '=' + value);
	}

	return params.join(" ");
};

/**
* object에 속성값들을 array로 넘겨준다. 
* @public
* @param {object} object 속성값 추출 대상 객체
* @return {array} 속성값 Array
* @example
* var result = nexutil.getValues({"id": "kiwi", "id1": "apple", code: edt_arg});
* trace(result);	// output : kiwi,apple,[object Edit]
*/
nexutil.getValues = function(object)
{
	var values = [], p;

	for (p in object) 
	{
		if (object.hasOwnProperty(p)) 
		{
			values.push(object[p]);
		}
	}

	return values;
};

/**
* object에 속성들(name, value)를 dataset에 구성한다.<br>
* dir 값이 vert 이면 name Column, value Column를 dataset에 구성한 후 속성 값들을 record로 구성하고,<br>
* dir 값이 horz 이면 name는 Column 명으로 구성한다 value는 Column에 0번째 Row에 구성된다.<br>
* @public
* @param {object} object Dataset의 구성에 참조되는 객체
* @param {dataset} ds 객체 속성,값을 참조해서 구성되는 Dataset
* @param {string=} dir default horz(horz/vert) 
* @example
* var info = { "basic": "A",
* 	"string": "가",
* 	"int": 10,
*  	"float": 0.8,
* 	"bool": true
* };
* nexutil.toDataset(info, ds_vert, "vert");
* trace(ds_vert.saveXML());
* // output: 구성된 Dataset 정보
* //	&lt;Dataset id="ds_vert"&gt;
* // 		&lt;ColumnInfo&gt;
* // 			&lt;Column id="name" type="STRING" size="256"/&gt;
* // 			&lt;Column id="value" type="STRING" size="256"/&gt;
* // 		&lt;/ColumnInfo&gt;
* // 		&lt;Rows&gt;
* // 			&lt;Row&gt;
* // 				&lt;Col id="name"&gt;basic&lt;/Col&gt;
* // 				&lt;Col id="value"&gt;A&lt;/Col&gt;
* // 			&lt;/Row&gt;
* // 			&lt;Row&gt;
* // 				&lt;Col id="name"&gt;string&lt;/Col&gt;
* // 				&lt;Col id="value"&gt;가&lt;/Col&gt;
* // 			&lt;/Row&gt;
* // 			&lt;Row&gt;
* // 				&lt;Col id="name"&gt;int&lt;/Col&gt;
* // 				&lt;Col id="value"&gt;10&lt;/Col&gt;
* // 			&lt;/Row&gt;
* // 			&lt;Row&gt;
* // 				&lt;Col id="name"&gt;float&lt;/Col&gt;
* // 				&lt;Col id="value"&gt;0.8&lt;/Col&gt;
* // 			&lt;/Row&gt;
* // 			&lt;Row&gt;
* // 				&lt;Col id="name"&gt;bool&lt;/Col&gt;
* // 				&lt;Col id="value"&gt;true&lt;/Col&gt;
* // 			&lt;/Row&gt;
* // 		&lt;/Rows&gt;
* // 	&lt;/Dataset&gt;
* nexutil.toDataset(info, ds_horz, "horz");
* // output : 구성된 Dataset 정보
* // 	&lt;Dataset id="dsHorz"&gt;
* // 		&lt;ColumnInfo&gt;
* // 			&lt;Column id="basic" type="STRING" size="256"/&gt;
* // 			&lt;Column id="string" type="STRING" size="256"/&gt;
* // 			&lt;Column id="int" type="STRING" size="256"/&gt;
* // 			&lt;Column id="float" type="STRING" size="256"/&gt;
* // 			&lt;Column id="bool" type="STRING" size="256"/&gt;
* // 		&lt;/ColumnInfo&gt;
* // 		&lt;Rows&gt;
* // 			&lt;Row&gt;
* // 				&lt;Col id="basic"&gt;A&lt;/Col&gt;
* // 				&lt;Col id="string"&gt;가&lt;/Col&gt;
* // 				&lt;Col id="int"&gt;10&lt;/Col&gt;
* // 				&lt;Col id="float"&gt;0.8&lt;/Col&gt;
* // 				&lt;Col id="bool"&gt;true&lt;/Col&gt;
* // 			&lt;/Row&gt;
* // 		&lt;/Rows&gt;
* // 	&lt;/Dataset&gt;	
*/
nexutil.toDataset = function(object, ds, dir)
{
	var p, i, len,
		value;
	
	if (dir == "vert")
	{
		if (!this.isEmpty(object)) 
		{
			ds.addColumn("name", "string", 256);
			ds.addColumn("value", "string", 256);
		}
		
		for (p in object)
		{
			if ( object.hasOwnProperty(p) )
			{
				value = object[p] || "";
				
				len = ds.addRow();
				ds.setColumn(len, "name", p);
				ds.setColumn(len, "value", value);
			}
		}
	}
	else 
	{
		if (!this.isEmpty(object)) 
		{
			for (p in object)
			{
				if ( object.hasOwnProperty(p) )
				{
					ds.addColumn(p, "string", 256);
				}
			}
			
			len = ds.addRow();
			
			for (p in object)
			{
				if ( object.hasOwnProperty(p) )
				{
					value = object[p] || "";
					ds.setColumn(len, p, value);
				}
			}
		}
	}
};

/**
* 속성,값 객체의 배열 형태로 반환
* @private
* @param {string} name 속성명
* @param {object} value 속성값
* @param {boolean=} recursive 재귀 처리 여부 (default: false)
* @return {array} 
*/	
nexutil._toArgumentObjects = function(name, value, recursive) 
{
	var thisFunc = this._toArgumentObjects,
		objects = [],
		i, len, p;

	if (this.isComponent(value))
	{
		if(value instanceof Static || value instanceof Button) 
		{
			value = value.text;
		} 
		else 
		{
			value = value.value;
		}
		
		objects.push({
			name: name,
			value: value
		});
	}
	else if (this.isArray(value)) 
	{
		for (i = 0, len = value.length; i < len; i++) 
		{
			if (recursive) 
			{
				objects = objects.concat(thisFunc(name + '_' + i, value[i], true));
			}
			else
			{
				objects.push({
					name: name,
					value: value[i]
				});
			}
		}
	}
	else if (this.isObject(value)) 
	{
		for (p in value) 
		{
			if (value.hasOwnProperty(p)) 
			{
				if (recursive) 
				{
					objects = objects.concat(thisFunc(name + '_' + p, value[p], true));
				}
				else 
				{
					objects.push({
						name: name,
						value: value[p]
					});
				}
			}
		}
	}
	else if (value instanceof Dataset)
	{
		value = value.name;
		objects.push({
			name: name,
			value: value
		});
	}
	else 
	{
		objects.push({
			name: name,
			value: value
		});
	}

	return objects;
};


/*●============================
	         Component
==============================●*/
/**
* 주어진 nexacro Component, object 에 사용자 속성을 추가한다.<br>
* 대상이 원래 가지고 있는 이름을 지정해도 상관없이 동작한다.<br>
* ※ 사용자 정의 속성을 대상에 바로 사용하면 내부 속성을<br>
* 덮어쓸 수 있으므로 본 메소드를 통해서 사용하도록 한다.
* @public
* @param {*} target nexacro Component, object
* @param {string} name 사용자 정의 속성 명
* @param {*=} value 속성 값
* @example
*
* // Button00 (text : Button00)
* nexutil.setUserProperty(Button00, "text", "user property");
* nexutil.setUserProperty(Button00, "myProp", [0,1,2]);
*
*/
nexutil.setUserProperty = function(target, name, value)
{
 var propName = this._userProperty.uniqid;
 propName += "_" + name;
 target[propName] = value;
};

/**
* 주어진 nexacro Component, object 에서 사용자 정의 속성값을 얻어온다.<br>
* ※ setUserProperty 메소드에 의해 지정된 사용자 정의 속성값을 얻어온다.
* @public
* @param {*} target nexacro Component, object
* @param {string} name 사용자 정의 속성 명
* @return {*} 주어진 target에 name으로 지정된 사용자 정의 속성값
* @example
*
* // Button00 (text : Button00)
* nexutil.setUserProperty(Button00, "text", "user property");
* trace(Button00.text + " : " + nexutil.getUserProperty(Button00, "text"));
*
* // output :
* Button00 : user property
*/
nexutil.getUserProperty = function(target, name)
{
 var propName = this._userProperty.uniqid;
    propName += "_" + name;
 return target[propName];
};

/**
 * 사용자 정의 속성에 추가할 prefix 명
 * @private
 */
nexutil._userProperty = {
     uniqid : nexutil.getUniqueId()
};

/**
 * 주어진 nexacro 개체의 type 을 반환
 * @public
 * @param {*} obj Object, Component, Frame, .. 등 nexacro 모든 개체
 * @return {string} 개체의 type
 * @example
 * trace(nexutil.typeOf(Button00));	// output : Button
 * trace(nexutil.typeOf(Tab00));	// output : Tab
 * trace(nexutil.typeOf(Tab00.tabpage1));	// output : Tabpage
 * trace(nexutil.typeOf(Dataset00));	// output : Dataset
 * trace(nexutil.typeOf(PropertyAnimation00));	// output : PropertyAnimation
 *
 * var o;
 * o = new Buffer;
 * trace(nexutil.typeOf(o));	// output : Buffer
 *
 * o = new DomDocument;
 * trace(nexutil.typeOf(o));	// output : DomDocument
 *
 * o = new Rect;
 * trace(nexutil.typeOf(o));	// output : Rect
 *
 * o = new FileDialog;
 * trace(nexutil.typeOf(o));	// output : FileDialog
 *
 * o = new UserEvent;
 * trace(nexutil.typeOf(o));	// output : UserEvent
 *
 * // non XP Component/Object return undefined.
 * o = {};
 * trace(nexutil.typeOf(o));	// output : undefined
 *
 * o = new Date();
 * trace(nexutil.typeOf(o));	// output : undefined
 */
nexutil.typeOf = function(obj)
{
	var type;
	if ( obj && (typeof obj == "object"))
	{
		var s = obj.toString();
		if(s == "[object Object]") return type;

		type = s.substr(8, s.length-9);
	}
	return type;
};

/**
 * 주어진 컴포넌트가 실제 화면에 보여지는지 여부를 반환<br><br>
 * 대상 컴포넌트의 상위컴포넌트(parent)의 visible 속성이 false 가<br>
 * 지정되어 화면에 대상 컴포넌트가 보이지 않더라도 대상 컴포넌트의<br>
 * visible 속성값은 지정된 값을 유지하고 있으므로 화면에 실제 <br>
 * 보여지는지 여부를 판단하기 위해서는 본 메소드를 사용한다.
 * @public
 * @param {nexaComp} obj nexacro Component
 * @return {string} 개체의 type
 * @example
 * Div00.Button00.visible = true;
 * Div00.visible = false;	// 화면에 Button00 이 보이지 않는다.
 * trace(Div00.Button00.visible);	// output : true
 * trace(nexutil.isVisible(Div00.Button00));	// output : false
 */
nexutil.isVisible = function(obj)
{
	if ( !("visible" in obj) ) return false;
	if ( obj.visible == false ) return false;

	var ret = true;
	var p = obj.parent;
	while ( p )
	{
		if ( p instanceof ChildFrame ) break;
		if ( p.visible === false )
		{
			ret = false;
			break;
		}

		p = p.parent;
	}
	return ret;
};

/**
 * 주어진 오브젝트가 Visual한 컴포넌트인지를 반환
 * @public
 * @param {nexaComp} obj nexacro Component
 * @return {boolean} visual Component 여부
 * @example
 * trace(nexutil.isVisual(Button00));	// output : true
 * trace(nexutil.isVisual(Dataset00));	// output : false
 */
nexutil.isVisual = function(obj)
{
	if ( !("currentstyle" in obj) ) return false;
	return true;
};

/**
 * 주어진 컴포넌트의 실제 활성화 여부를 반환<br><br>
 * 대상 컴포넌트의 상위컴포넌트(parent)의 enable 속성이 false 가 <br>
 * 지정되어 화면에 대상 컴포넌트가 비활성화 상태이어도 대상 컴포넌트의 <br>
 * enable 속성값은 지정된 값을 유지하고 있으므로 실제 활성화 여부를 <br>
 * 판단하기 위해서는 본 메소드를 사용한다.
 * @public
 * @param {nexaComp} obj nexacro Component
 * @return {string} 개체의 type
 * @example
 * Div00.Button00.enable = true;
 * Div00.enable = false;	// Button00 이 비활성화 된다.
 * trace(Div00.Button00.enable);	// output : true
 * trace(nexutil.isEnable(Div00.Button00));	// output : false
 */
nexutil.isEnable = function(obj)
{
	if ( !("enable" in obj) ) return false;
	if ( obj.enable == false ) return false;

	var ret = true;
	var p = obj.parent;
	while ( p )
	{
		if ( p instanceof ChildFrame ) break;
		if ( p.enable === false )
		{
			ret = false;
			break;
		}

		p = p.parent;
	}
	return ret;
};


/**
 * 주어진 nexacro Component 에 포함되고 조건에 맞는 component, object 반환<br><br>
 * 1. where 조건문에 지원하는 예약어 피연산자(operand) 는 다음과 같다.<br>
 *  - prop[property_name] : property 중 name 에 해당하는 값을 의미<br>
 *  - curStyle[currentstyle_name] : currentstyle 중 name 에 해당하는 값(문자열)을 의미<br>
 *  - style[style_name] : style 중 name 에 해당하는 값을 의미<br>
 *  - typeOf : XP Component type을 의미<br>
 *  - isVisible : XP Component의 실제 visible 여부<br>
 *  - isVisual : 주어진 오브젝트가 Visual한 컴포넌트인지 여부<br>
 *  - isEnable : XP Component의 실제 enable 여부<br><br>
 * ※ isVisible는 실제 컴포넌트가 화면에 보여지는 여부를 체크하게 된다.<br>
 *    prop[visible] == true 형식으로 사용하면 대상 컴포넌트의 value property 값이 true 인지를 체크한다.<br>		 
 * 2. where 조건문에 지원하는 연산자(operator) 는 다음과 같다.<br>
 *  - A && B : A 와 B 가 모두 참이면 참<br>
 *  - A || B : A 와 B 가 모두 거짓이면 거짓<br>
 *  - A == B : A 와 B 는 같다.<br>
 *  - A != B : A 와 B 는 같지 않다.<br>
 *  - A > B : A 는 B 보다 크다.<br>
 *  - A >= B : A 는 B 보다 크거나 같다.<br>
 *  - A < B : A 는 B 보다 작다.<br>
 *  - A <= B : A 는 B 보다 작거나 같다.<br>
 *  - 'b' *= 'abc' : 'abc' 에 'b' 가 포함되어 있다. (like)<br>
 *  - 'a' ^= 'abc' : 'abc' 는 'a' 로 시작한다. (startWith)<br>
 *  - 'c' $= 'abc' : 'abc' 는 'c' 로 끝난다. (endWith)
 * @public
 * @param {*} obj Object, Component, Frame, .. 등 nexacro 모든 개체
 * @param {string=} where 찾을 조건문
 * @param {number=} depth 하위 레벨 깊이 (default: 제한없음)
 * @return {array} 검색된 component, object
 * @example		 
 * // from이 Form00 이고 depth 를 지정하지 않은 경우 Form00 에 포함된 모든 하위요소 검색
 * trace(nexutil.getComponent(Form00, ""));
 * // output : [object Div],[object Button],[object Div],[object Button],[object Tab],
 *             [object Tabpage],[object Button],[object Tabpage],[object Button]
 *
 * // from이 Div00 이고 depth 를 지정하지 않은 경우 Div00 에 포함된 모든 하위요소 검색
 * trace(nexutil.getComponent(Div00, ""));
 * // output : [object Button],[object Div],[object Button],[object Tab],
 *             [object Tabpage],[object Button],[object Tabpage],[object Button]
 *
 * // from이 Div00 이고 depth가 0 인 경우 Div00 에 포함된 요소까지 검색
 * trace(nexutil.getComponent(Div00, "", 0));
 * // output : [object Button],[object Div]
 *
 * // from이 Div00 이고 depth가 1 인 경우 Div01 에 포함된 요소까지 검색
 * trace(nexutil.getComponent(Div00, "", 1));
 * // output : [object Button],[object Div],[object Button],[object Tab]
 *
 * // from이 Div00 이고 depth가 2 인 경우 Tab00 에 포함된 요소까지 검색
 * trace(nexutil.getComponent(Div00, "", 2));
 * // output : [object Button],[object Div],[object Button],[object Tab],
 *             [object Tabpage],[object Tabpage]
 *
 * // Div00 에 하위로 포함된 모든 Button 검색
 * trace(nexutil.getComponent(Div00, "typeOf == 'Button'"));
 * // output : [object Button],[object Button],[object Button],[object Button]
 *
 * // Div00 에 하위로 포함된 모든 Button, Div 검색
 * trace(nexutil.getComponent(Div00, "typeOf == 'Button' || typeOf == 'Div'"));
 * // output : [object Button],[object Div],[object Button],[object Button],[object Button]
 *
 * // Div00 에 포함된 모든 하위요소중 property visible 값이 true 인 요소 검색
 * // Div01에 포함된 Tab 과 Button이 보이지 않지만 visible 속성값은 true 임
 * // 실제 visible 한 요소만 찾을 경우 isVisible 을 사용
 * Div00.Div01.visible = false;
 * trace(nexutil.getComponent(Div00, "prop[visible] == true"));
 * // output : [object Button],[object Button],[object Tab],[object Button],[object Button]
 *
 * // Div00 에 포함된 모든 하위요소중 property text 값이 "Button02" 인 요소 검색
 * trace(nexutil.getComponent(Div00, "prop[text] == 'Button02'"));
 * // output : [object Button]
 *
 * // Div00 에 포함된 모든 하위요소중 currentstyle align 값이 "center middle" 인 요소 검색
 * // (currentstyle은 현재 적용되고 있는 style object를 얻어오는 property 임)
 * Div00.Div01.Button01.style.align = "left bottom";
 * trace(nexutil.getComponent(Div00, "curStyle[align] == 'center middle'"));
 * // output : [object Button],[object Div],[object Tab],[object Button],[object Button]
 *
 * // Div00 에 포함된 모든 하위요소중 style align 값이 "left top" 인 요소 검색
 * // 화면디자인시 적용된 style 의 특정 값을 얻어온다.
 * trace(nexutil.getComponent(Div00, "style[align] == 'left top'"));
 * // output : [object Button]
 *
 * // Div00 에 포함된 모든 하위요소중 화면에 보이는 요소 검색
 * // prop[value] == true 는 실제 보이는 요소가 아니어도 속성값이 true이면 검색됨.
 * Div00.Div01.visible = false;
 * trace(nexutil.getComponent(Div00, "isVisible == true"));
 * // output : [object Button]
 *
 * // Div00 에 Dataset과 Button이 포함됐을 경우 하위요소중 visual한 컴포넌트만 검색
 * trace(nexutil.getComponent(Div00, "isVisual == true", 0));
 * // output : [object Button]
 *
 * // Div00 에 포함된 모든 하위요소중 활성화된 요소 검색
 * // prop[enable] == true 는 실제 활성화된 요소가 아니어도 속성값이 true이면 검색됨.
 * Div00.Div01.enable = false;
 * trace(nexutil.getComponent(Div00, "isEnable == true"));
 * // output : [object Button]
 *
 * // Div00 에 포함된 모든 하위요소중 property name에 'ab' 이 포함된 요소을 검색
 * trace(nexutil.getComponent(Div00, "prop[name] *= 'ab'"));
 * // output : [object Tab],[object Tabpage],[object Tabpage]
 *
 * // Div00 에 포함된 모든 하위요소중 property name이 'Bu' 로 시작되는 요소을 검색
 * trace(nexutil.getComponent(Div00, "prop[name] ^= 'Bu'"));
 * // output : [object Button],[object Button],[object Button],[object Button]
 *
 * // Div00 에 포함된 모든 하위요소중 property name이 '01' 로 끝나는 요소을 검색
 * trace(nexutil.getComponent(Div00, "prop[name] $= '01'"));
 * // output : [object Div],[object Button]
 *
 * // Div00에 포함된 모든 하위요소중 화면에 보이면서 type이 Button 인 요소를 검색
 * Div00.Div01.visible = false;
 * trace(nexutil.getComponent(Div00, "isVisible == true && typeOf == 'Button'"));
 * // output : [object Button]
 */
nexutil.getComponent = function(from, where, deep)
{

	if ( !from || !this.isComponent(from) )
	{
		return [];
	}

	var depth = {};
		depth.current = 0;

	if ( this.isNumber(deep) )
	{
		depth.max = deep;
	}
	else if ( nexacro.isNumeric(deep) )
	{
		depth.max = parseInt(deep);
	}
	else
	{
		depth.max = Number.MAX_VALUE;
	}

	var results = [];
	var targets = this._getChildren(from, depth);
	//trace("query > targets="+targets);

	if ( this.isEmpty(where) )
	{
			results = targets.slice(0);
	}
	else
	{

		var func = this._parseQueryWhere(where);	
		var target, check;
		for (var i=0, len=targets.length; i<len; i++)
		{
			target = targets[i];
			check = func.call(this, target);
			
			if ( check )
			{
				results.push(target);
			}
		}
	}
	
	return results;
};

/**
 * 주어진 대상을 포함한 상위 범위로 지정된 이름에 최초로 일치하는 component, object 반환
 * @public
 * @param {nexaComp} p 찾을 대상
 * @param {string} name 찾을 대상 이름
 * @return {nexaComp} 검색된 component, object
 * @example
 *
 * // this = Form
 * // Form 에 Button11 존재
 * trace(nexutil.lookup(this, "Button11"));	// output : [object Button]
 *
 * // Button12 는 Div01 에 존재하지 않으나 Div01 의 상위 컴포넌트인 Form 에 존재
 * trace(nexutil.lookup(Div01, "Button11"));	// output : [object Button]
 */
nexutil.lookup = function(p, name)
{
	var o;
	while (p)
	{
		o = p.components;
		if ( o && o[name] ) return o[name];

		o = p.objects;
		if ( o && o[name] ) return o[name];

		p = p.parent;
	}
	return null;
};


/**
* nexaCompB기준의 XY좌표를 nexaCompA기준의 XY좌표로 변환.
* @public
* @param {nexaComp} nexaCompA nexacro Component
* @param {array.<number>} xy nexaCompB기준의 XY좌표.
* @param {nexaComp} nexaCompB nexacro Component
* @return {array.<number>} nexaCompA기준의 좌표. [ x좌표, y좌표]
* @example
* 
* Form에 아래와 같이 Button00이 존재 할 경우
*
* |---------------------------------------------------------|  ^
* |  Form                                                   |  |
* |                                                         |  |
* |                                                         | 300
* |                                                         |  |
* |                                     //(0,0)             |  v
* |                                       *-----------      | 
* |                                       | Button00 |      | 
* |                                       ------------      | 
* |                                                         | 
* |---------------------------------------------------------| 
* <--------------- 900 ------------------>	
*		 
* trace(nexutil.convertXYconvertXY(this,[0,0], Button00)); //output: [900,300]
* //Button00을 기준으로 한 0,0 좌표는
* //form 기준으로 했을 때 900, 300이 된다.
*/
nexutil.convertXY = function(nexaCompA, xy, nexaCompB)
{
	var tempX, tempY;
	var x, y;
	if ( nexaCompB )
	{
		tempX = system.clientToScreenX(nexaCompB, xy[0]);
		tempY = system.clientToScreenY(nexaCompB, xy[1]);
		
		x = system.screenToClientX(nexaCompA, tempX) + this.getScrollLeft(nexaCompA);
		y = system.screenToClientY(nexaCompA, tempY) + this.getScrollTop(nexaCompA);				
	}
	else
	{
		x = xy[0];
		y = xy[1];
	}

	return [x, y];
};

/**
 * 주어진 Form 을 포함하는 최상위 Form을 찾는다.
 * @public
 * @param {Form} curForm 찾을 대상 이름
 * @return {Form} 최상위 Form
 * @example
 *
 * trace(nexutil.getTopLevelForm(this));	// output : [object Form]
 */
nexutil.getTopLevelForm = function(curForm)
{
	var p = curForm;
	while (p && !(p instanceof ChildFrame))
	{
		p = p.parent;
	}
	return p.form;
};


 /**
 * 수직스크롤바의 trackbar위치를 반환한다.
 * @public
 * @param {nexaComp} nexaComp nexacro Component
 * @return {number} 수직스크롤바의 trackbar위치(수직스크롤바가 없을때는 0).
 * @example
 * trace(nexutil.getScrollTop(Div01)); //output: 20
 * trace(nexutil.getScrollTop(Div01)); //output: 0
 */
nexutil.getScrollTop = function(nexaComp)
{
	return (nexaComp.vscrollbar && nexaComp.vscrollbar.visible ? nexaComp.vscrollbar.pos : 0);
};

/**
* nexacro Component 기준으로,<br>
* 지정된 size를 갖는 컴포넌트를 표시하기위한 방향 및 좌표를 반환한다.<br><br>
*  ※direction이 vert(vertical) 일때 표시방법: <br>
*    1.하단 왼쪽맞춤(default).<br>
*    2.왼쪽맞춤으로 공간부족시, 표시를 위해 팝업을 왼쪽으로 이동시킨다.<br>
*    3.하단에 공간이 부족하면 상단에 표시.<br>
*    4.2번과정 반복<br>
*    5.1~4번으로도 공간확보가 안되면 direction을 무시하고 표시가능한 영역을 찾는다.<br>
*    6.영역을 초과하는 공간을 요청하면,표시가능한 x,y좌표 및 size를 반환한다.<br><br>
*  ※direction이 horz(horizontal) 일때 표시방법: <br>
*    1.우측 상단맞춤(default).<br>
*    2.상단맞춤으로 공간부족시, 표시를 위해 팝업을 위쪽으로 이동시킨다.<br>
*    3.우측에 공간이 부족하면 좌측에 표시.<br>
*    4.2번과정 반복<br>
*    5.1~4번으로도 공간확보가 안되면 direction을 무시하고 표시가능한 영역을 찾는다.<br>
*    6.영역을 초과하는 공간을 요청하면,표시가능한 x,y좌표 및 size를 반환한다.
* @public
* @param {nexaComp} nexaComp 기준이 되는 nexacro Component 
* @param {number} width 표시할 팝업 width
* @param {number} height 표시할 팝업 height
* @param {string=} direction 팝업표시 방향."vert": vertical(default),"horz": horizontal
* @param {number=} offset 표시될때 nexaComp와의 간격(default: 0).
* @return {array.<string...number>} [nexaComp 기준 팝업위치("left", "top", "right", "bottom"), x, y [ ,width, height] ]
*   <pre>※주어진 width와 height, offset으로 
*    1.표시가능한 공간이 있을 경우: 
*       [팝업위치("left", "top", "right", "bottom"), x좌표, y좌표]
*    2.영역을 초과하는 공간을 요청했을 때는 표시가능한 정보 반환: 
*       [팝업위치("left", "top", "right", "bottom"), x좌표, y좌표, 가능한 width, 가능한 height]
*   </pre>

* @example
*   var position = nexutil.getPopupPosition(Button00, 44, 23, "vert", 2); //return: [bottom, 1394, 317]
*   PopupDiv00.trackPopup(position[1], position[2]);
*
*   //해상도(1920*1080)를 초과한 높이 2000의 위치를 요구했을경우.
*   var position = nexutil.getPopupPosition(Button00, 300, 2000, "vert", 2); //return: [right,854,0,300,1080]
*   PopupDiv00.trackPopup(position[1], position[2]);
*/			
nexutil.getPopupPosition = function(nexaComp, width, height, direction, offset)
{
	var _window = nexaComp._getWindow();
	var w = _window.clientWidth;
	var h = _window.clientHeight;

	var xy = this.convertXY(application.mainframe, [0, 0], nexaComp);
	var x = xy[0];
	var y = xy[1];

	if ( isNaN(xy[0]) || isNaN(xy[1]) ) return;

	var x = [xy[0], xy[0] + nexaComp.getOffsetWidth()];
	var y = [xy[1], xy[1] + nexaComp.getOffsetHeight()];

	// Client 크기의 Rect
	var rect = {'left': 0, 'top': 0, 'right': w, 'bottom': h, 'width': w, 'height': h};

	var position = this._getDisplayPosition(width, height, x, y, rect, direction, offset);

	return position;
};


 /**
 * 수평스크롤바의 trackbar위치를 반환한다.
 * @public
 * @param {nexaComp} nexaComp nexacro Component
 * @return {number} 수평스크롤바의 trackbar위치(수평스크롤바가 없을때는 0).
 * @example
 * trace(nexutil.getScrollLeft(Div01)); //output: 10
 * trace(nexutil.getScrollLeft(Div01)); //output: 0
 */
nexutil.getScrollLeft = function(nexaComp)
{
	return (nexaComp.hscrollbar && nexaComp.hscrollbar.visible ? nexaComp.hscrollbar.pos : 0);
};

 /**
 * 스크롤바 height(수평스크롤바) 또는 width(수직스크롤바)의 size를 반환한다.
 * @public
 * @param {nexaComp} nexaComp nexacro Component
 * @param {string} type 스크롤바 종류(수평스크롤바:"horz", 수직스크롤바:"vert")
 * @return {number} 스크롤바 height(수평스크롤바) 또는 width(수직스크롤바)의 size를 반환한다.<br>
 *                  스크롤바를 지원하지 않는 컴포넌트 일때는 0.
 * @example
 * trace(nexutil.getScrollBarSize(Div03, "vert")); //output:  11
 */
nexutil.getScrollBarSize = function(nexaComp, type)
{
	var scrollBar = (type == "horz") ? nexaComp.hscrollbar : nexaComp.vscrollbar;
	var size = 0;
	if(scrollBar)
	{
		//theme에 scrollbarsize가 지정되지 않은경우 null을 반환함.
		size = scrollBar.currentstyle.scrollbarsize; 
		
		return (size===null ? (type == "horz" ? scrollBar.height : scrollBar.width): size);
	}
	else 
	{
		return size;
	}
};		

 /**
 * 스크롤바가 표시됐을 때에만 size를 반환한다.
 * @public
 * @param {nexaComp} nexaComp nexacro Component
 * @param {string} type 스크롤바 종류(수평스크롤바:"horz", 수직스크롤바:"vert")
 * @return {number} 스크롤바 size(스크롤바가 없거나 표시되지 않을 때는 0).
 * @example
 * trace(nexutil.getCurrentScrollBarSize(Div03, "vert")); //output: 0
 */
nexutil.getCurrentScrollBarSize = function(nexaComp, type)
{
	var scrollBar = (type == "horz") ? nexaComp.hscrollbar : nexaComp.vscrollbar;
	
	return (scrollBar && scrollBar.visible ? (type == "horz" ? scrollBar.height : scrollBar.width) : 0);
};

/**
 * 주어진 component의 depth에 포함된 하위 component, object 반환 (recursive)<br>
 * from이 container가 아닐 경우 undefind 반환
 * @private
 * @param {nexaComp} from 대상 container component
 * @param {object} depth max, current depth
 * @return {array} 하위 component, object
 */
nexutil._getChildren = function(from, depth)
{
	
	var children = this._getAll(from);
	var results = [], c, cs0, recvCs;

	depth.current += 1;

	for (var i=0,len=children.length; i<len; i++)
	{
		c = children[i];

		cs0 = this._getAll(c);

		if ( cs0 && cs0.length > 0 && depth.max >= depth.current )
		{
			//trace(" _getChildren > c="+c);
			results.push(c);
			recvCs = this._getChildren(c, depth);
			results = results.concat(recvCs);
			depth.current -= 1;
		}
		else
		{
			results.push(c);
		}
	}

	return results;
};

/**
 * 주어진 component에 포함된 모든 하위 component, object 반환
 * @private
 * @param {nexacro Component} c 대상 component
 * @return {array} 하위 component, object
 */
nexutil._getAll=  function(c)
{
	var children = [];
	var cs = c.all;
	if ( cs )
	{
		for (var i=0,len=cs.length; i<len; i++)
		{
			children.push(cs[i]);
		}
	}
	else
	{
		cs = c.objects;
		if ( cs )
		{
			for (var i=0,len=cs.length; i<len; i++)
			{
				children.push(cs[i]);
			}
		}

		cs = c.components;
		if ( cs )
		{
			for (var i=0,len=cs.length; i<len; i++)
			{
				children.push(cs[i]);
			}
		}
	}
	return children;
};

/**
 * where 조건문의 token을 얻어온다.<br>
 * thanks to Douglas Crockford. tokens.js (crockford.com)
 * @private
 * @param {string} str where 문자열
 * @return {array} type, value 를 가지는 token collecion
 */
nexutil._tokenizeQueryWhere = function(str)
{
	var c;				// The current character.
	var i = 0;			// The index of the current character.
	var s;				// The string value.
	var n;				// The number value.
	var q;				// The quote character.

	var result = [];	// An array to hold the results.

	var prefix = '<>&|=*^$!';
	var suffix = '=>&|';

	var length = str.length;

	c = str.charAt(i);
   
	while (c)
	{
		// Ignore whitespace.
		if (c <= ' ')
		{
			i += 1;
			c = str.charAt(i);
		}
		// named or boolean
		else if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || c == '_')
		{
			s = c;
			i += 1;
			for (;;)
			{
				c = str.charAt(i);
				if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') ||
						(c >= '0' && c <= '9') || c === '_') {
					s += c;
					i += 1;
				} else {
					break;
				}
			}

			if ( s == 'true' || s == 'false' )
			{
				result.push({type:'boolean', value:s});
			}
			else
			{
				result.push({type:'named', value:s});
			}
		}
		// number.
		// A number cannot start with a decimal point. It must start with a digit,
		// possibly '0'.
		else if (c >= '0' && c <= '9') {
			s = c;
			i += 1;
			// Look for more digits.
			for (;;)
			{
				c = str.charAt(i);
				if (c < '0' || c > '9') {
					break;
				}
				i += 1;
				s += c;
			}
			// Look for a decimal fraction part.
			if (c === '.') {
				i += 1;
				s += c;
				for (;;)
				{
					c = str.charAt(i);
					if (c < '0' || c > '9') {
						break;
					}
					i += 1;
					s += c;
				}
			}
			// Look for an exponent part.
			if (c === 'e' || c === 'E') {
				i += 1;
				s += c;
				c = str.charAt(i);
				if (c === '-' || c === '+') {
					i += 1;
					s += c;
					c = str.charAt(i);
				}
				if (c < '0' || c > '9') {
				    
					trace("Bad exponent");
				}
				do {
					i += 1;
					s += c;
					c = str.charAt(i);
				} while (c >= '0' && c <= '9');
			}
			// Make sure the next character is not a letter.
			if (c >= 'a' && c <= 'z')
			{
				s += c;
				i += 1;
				trace("Bad number");
			}
			// Convert the string value to a number. If it is finite, then it is a good
			// token.
			n = +s;
			if (isFinite(n))
			{
				result.push({type:'number', value:n});
			}
			else
			{
				trace("Bad number");
			}
		}
		// string
		else if (c === '\'' || c === '"') {
			s = '';
			q = c;
			i += 1;
			for (;;)
			{
				c = str.charAt(i);
				if (c < ' ') {
					if (c === '\n' || c === '\r' || c === '')
					{
						trace("Unterminated string.");
					}
					else
					{
						trace("Control character in string.");
					}
				}

				// Look for the closing quote.
				if (c === q)
				{
					break;
				}

				// Look for escapement.
				if (c === '\\') {
					i += 1;
					if (i >= length)
					{
					   trace("Unterminated string");
					}
					c = str.charAt(i);
					switch (c) {
					case 'b':
						c = '\b';
						break;
					case 'f':
						c = '\f';
						break;
					case 'n':
						c = '\n';
						break;
					case 'r':
						c = '\r';
						break;
					case 't':
						c = '\t';
						break;
					case 'u':
						if (i >= length)
						{
							trace("Unterminated string");
						}
						c = parseInt(str.substr(i + 1, 4), 16);
						if (!isFinite(c) || c < 0) {
							trace("Unterminated string");
						}
						c = String.fromCharCode(c);
						i += 4;
						break;
					}
				}
				s += c;
				i += 1;
			}
			i += 1;
			result.push({type:'string', value:s});
			c = str.charAt(i);
		}
		// comment. (not use)
		else if (c === '/' && str.charAt(i + 1) === '/')
		{
			i += 1;
			for (;;)
			{
				c = str.charAt(i);
				if (c === '\n' || c === '\r' || c === '') {
					break;
				}
				i += 1;
			}
		}
		// combining
		else if (prefix.indexOf(c) >= 0)
		{
			s = c;
			i += 1;
			while (true)
			{
				c = str.charAt(i);
				if (i >= length || suffix.indexOf(c) < 0)
				{
					break;
				}
				s += c;
				i += 1;
			}
			result.push({type:'operator', value:s});
		}
		// single-character operator
		else
		{
			if ( "()[]".indexOf(c) > -1 )
			{
				result.push({type:'bracket', value:c});
			}
			else
			{
				result.push({type:'operator', value:c});
			}

			i += 1;
			c = str.charAt(i);
		}
	}
	return result;
};

/**
 * where 조건문의 연산자에 피연산자를 대입한다.
 * @private
 * @param {number} depth 우선순위 깊이
 * @param {number} syntax 변환 대상 토큰
 */
nexutil._replaceOperator = function(depth, syntax)
{
	var s;
	for (var i=0,len=syntax.length; i<len; i++)
	{
		s = syntax[i];
		if ( s.depth == depth )
		{
			if ( s.type == "replaceOperator" )
			{
				s0 = syntax[i-1];
				s1 = syntax[i+1];

				if ( s0 && s0.depth == depth && s0.type == "operand" &&
					 s1 && s1.depth == depth && s1.type == "operand" )
				{
					temp = s.value;
					temp = temp.replace("$1", s0.value);
					temp = temp.replace("$2", s1.value);

					s.depth = s.depth-1;
					s.type = "operand";
					s.value = temp;

					s0.depth = null;
					s1.depth = null;

					i += 1;
				}
			}
		}
	}

	for (var i=(syntax.length-1); i>=0; i--)
	{
		s = syntax[i];
		if ( s.depth == null )
		{
			syntax.splice(i,1);
			i--;
		}
	}
};

/**
 * component의 property, currentstyle, style 에서 특정 name에 해당하는 값을 얻어온다.
 * @private
 * @param {nexacro Component} obj where 문자열
 * @param {string} type 검색 대상 (property, currentstyle, style)
 * @param {string} name property, currentstyle, style 에서 찾을 명칭
 * @return {string} name에 해당하는 값
 */
nexutil._getQueryCompValue = function(obj, type, name)
{
	var ret;
	if ( type == "prop" )
	{
		ret = obj[name];
	}
	else if ( type == "curStyle" )
	{
		ret = obj.currentstyle[name];
	}
	else if ( type == "style" )
	{
		ret = obj.style[name];
	}

	if ( ret && typeof ret == "object" )
	{
		if ( ret.toString )
		{
			ret = ret.toString();
		}
		else
		{
			ret = ret + "";
		}
		ret = ret.trim();
	}

	return ret;
}

/**
 * where 조건문을 파싱하여 실행 함수를 반환
 * @private
 * @param {string} where where 문자열
 * @return {function} where 조건 실행 함수
 */
nexutil._parseQueryWhere = function(where)
{
	
	var cache = nex.v.parseQueryCache[where];

	if ( cache )
	{
		return cache;
	}

	var token, type, value, temp;
	var tokens = this._tokenizeQueryWhere(where);

	var depth = 0, maxDepth=0;
	var syntax = [];

	for (var i=0,len=tokens.length; i<len; i++)
	{
		token = tokens[i];
		type = token.type;
		value = token.value;
		//trace(type + " : " + value);
		if ( type == "bracket" )
		{
			if ( value == "(" )
			{
				syntax.push({depth:depth, type:"value", value:"("});
				depth += 1;
				maxDepth = depth;
			}
			else if ( value == ")" )
			{
				depth -= 1;
				syntax.push({depth:depth, type:"value", value:")"});
			}
		}
		else if ( type == "named" )
		{
			if ( value == "prop" || value == "curStyle" || value == "style" )
			{

				i += 1;
				token = tokens[i];


				if ( token.type == "bracket" && token.value == "[" )
				{
					i += 1;
					token = tokens[i];
					syntax.push({depth:depth, type:"operand", value:"nexutil._getQueryCompValue(obj, \""+value+"\", \""+token.value+"\")"});
				}
				i += 1;
			}
			else if ( value == "typeOf" || value == "isVisible" || value == "isVisual" || value == "isEnable" )
			{
				syntax.push({depth:depth, type:"operand", value:"nexutil."+value+"(obj)"});
			}
		}
		else if ( type == "operator" )
		{
			if ( value == "&&" || value == "||" )
			{
				syntax.push({depth:depth, type:"operator", value:value});
			}
			else
			{
				temp = "";
				switch (value)
				{
					case '==' :
						temp = "equal";
						break;
					case '!=' :
						temp = "notEqual";
						break;
					case '>' :
						temp = "greaterThan";
						break;
					case '>=' :
						temp = "greaterThanEqual";
						break;
					case '<' :
						temp = "lessThan";
						break;
					case '<=' :
						temp = "lessThanEqual";
						break;
					case '*=' :
						temp = "contains";
						break;
					case '^=' :
						temp = "startWith";
						break;
					case '$=' :
						temp = "endWith";
						break;
				}
				syntax.push({depth:depth, type:"replaceOperator", value:"nex.v.operators."+temp+"($1, $2, this)"});
			}
		}
		else if ( type == "string" )
		{
			syntax.push({depth:depth, type:"operand", value:"\""+value+"\""});
		}
		else if ( type == "number" || type == "boolean" )
		{
			syntax.push({depth:depth, type:"operand", value:value});
		}
	}

	var s, s0, s1;
	for (var i=maxDepth; i>=0; i--)
	{
		this._replaceOperator(i, syntax);
	}

	var result = [];
	for (var i=0,len=syntax.length; i<len ;i++)
	{
		s = syntax[i];
		result.push(syntax[i].value);
	}

	var fn = "var f = function(obj) {\n	return " + result.join(" ") + ";\n}";

	try
	{
		eval(fn);
	}
	catch(e)
	{
		trace("eval error:"+e.description);		
	}

	nex.v.parseQueryCache[where] = f;

	return f;
};

/**
* 컴포넌트 표시를 위한 좌표반환<br><br>
*  ※표시될 공간이 없을 경우 우선순위<br>
*     direction이 vertical 일때 : 하단(왼쪽맞춤->오른쪽맞춤) -> 상단(왼쪽맞춤->오른쪽맞춤)
* @private
* @param {number} width 표시할 width
* @param {number} height 표시할 height
* @param {string} direction 팝업표시 방향."vert": vertical(default),"horz": horizontal
* @param {number} offset 표시될때 nexaComp와의 간격.
* @param {boolean=} isChange direction 전환 후 재호출 여부.
* @return {number} [x,y] 좌표배열
*/	
nexutil._getDisplayPosition =function(width, height, screenX, screenY, screenRect, direction, offset, isChange)
{
	if(isChange != true)
	{
		isChange = false;
	}
	
	var position;
	
	if(direction == "horz")
	{
		position = this._getHorizontalPosition(width, height, screenX, screenY, screenRect, direction, offset, isChange);
	}
	else if(direction == "vert")
	{
		position = this._getVerticalPosition(width, height, screenX, screenY, screenRect, direction, offset, isChange);
	}
	
	var side = position[0];
	//표시할 수 있는 공간이 없을 때.
	//표시가능한 최대공간에 대한 정보를 반환한다.
	if(position[1] === undefined && position[2] === undefined)
	{
		if(width > screenRect.width)
		{
			width = screenRect.width;
		}
		
		if(height > screenRect.height)
		{
			height = screenRect.height;
		}				
		
		position = [side, screenRect.left, screenRect.top, width, height];
	}
	else if(position[1] === undefined)
	{
		position = [side, screenRect.left, position[2], screenRect.width, height];
	}
	else if(position[2] === undefined)
	{
		position = [side, position[1], screenRect.top, width, screenRect.height];
	}
	
	return position;
};

/**
 * 컴포넌트 표시를 위한 수평방향 좌표 반환
 * @private
 * @param {number} width 표시할 width
 * @param {number} height 표시할 height
 * @param {string=} direction 팝업표시 방향."vert": vertical,"horz": horizontal
 * @param {number} offset 표시될때 nexaComp와의 간격.
 * @param {boolean} isChange direction 전환 후 재호출 여부.
 * @return {array.<number>} screenX, screenY 좌표, 최종 direction
 */	
nexutil._getHorizontalPosition = function(width, height, screenX, screenY, screenRect, direction, offset, isChange)
{
	var side;

	if(screenRect.right >= (screenX[1] + width + offset))
	{
		side = "right";
		screenX = screenX[1] + offset;
		
	}
	else if(screenRect.left  < (screenX[0] - width - offset))
	{
		side = "left";
		screenX = screenX[0] - width - offset ;
	}
	else
	{
		if(isChange == true)
		{
			//재검사시에도 표시공간을 못찾으면 direction의 기본방향 리턴.
			return ["bottom", undefined,undefined];
		}			

		//argument로 전달된 direction으로 공간이 확보되지 않으면
		//다른 direction으로 가능한 공간을 찾는다.			
		direction = (direction=="vert")?"horz":"vert";
		var position = this._getDisplayPosition(width, height, screenX, screenY, screenRect, direction, offset, true);
		return position;	
	}			

	//align 위치 획득
	screenY = this._getVerticalAlign(width, height, screenX, screenY, screenRect, direction, offset);

	return [side, screenX, screenY];
};

/**
 * 컴포넌트 표시를 위한 수직방향 좌표 반환
 * @private
 * @param {number} width 표시할 width
 * @param {number} height 표시할 height
 * @param {string} direction 팝업표시 방향."vert": vertical,"horz": horizontal
 * @param {number} offset 표시될때 XComp와의 간격.
 * @param {boolean} isChange direction 전환 후 재호출 여부.
 * @return {array.<number>} screenX, screenY 좌표, 최종 direction 
 */	
nexutil._getVerticalPosition = function(width, height, screenX, screenY, screenRect, direction, offset, isChange)
 {
	
	var side;
	//bottom 공간확인
	if(screenRect.bottom  >= (screenY[1] + height + offset))
	{
		side = "bottom";
		screenY = screenY[1] + offset;

	} //top 공간확인
	else if(screenRect.top  < (screenY[0] - height - offset)) 
	{
		side = "top";
		screenY = screenY[0] - height - offset;
	}
	else
	{
		if(isChange == true)
		{
			//재검사시에도 표시공간을 못찾으면 direction의 기본방향 리턴.
			return ["right", undefined, undefined];
		}
		

		//argument로 전달된 direction으로 공간이 확보되지 않으면
		//다른 direction으로 가능한 공간을 찾는다.
		direction = (direction=="vert")?"horz":"vert";
		var position = this._getDisplayPosition(width, height, screenX, screenY, screenRect, direction, offset, true);
		return position;	
	}
	
	//align 위치 획득
	screenX = this._getHorizontalAlign(width, height, screenX, screenY, screenRect, direction, offset);
	
	return [side, screenX, screenY];
		
 };
 
/**
* direction이 vertical일때 컴포넌트 표시를 위한 수평정렬위치 반환.
* @private
* @param {number} width 표시할 width
* @param {number} height 표시할 height
* @param {string} direction 팝업표시 방향."vert": vertical,"horz": horizontal
* @param {number} offset 표시될때 nexaComp와의 간격.
* @return {number} screenX 좌표
*/	
nexutil._getHorizontalAlign = function(width, height, screenX, screenY, screenRect, direction, offset)
{
	var spaceSize = screenRect.right - (screenX[0] + width);

	if(spaceSize >= 0)
	{
		screenX = screenX[0];
	}
	else if(spaceSize < 0)
	{
		screenX = screenX[0] + spaceSize;
		
		//표시공간보다 팝업size가 over시
		if(screenX < screenRect.left)
		{
			//trace("_getHorizontalAlign 표시공간보다 팝업size가 over시");
			screenX = undefined;
		}
	}
	else
	{
		screenX = undefined;		
		
	}

	return screenX;
};

/**
 * direction이 horizontal일때 컴포넌트 표시를 위한 수직정렬위치 반환
 * @private
 * @param {number} width 표시할 width
 * @param {number} height 표시할 height
 * @param {string} direction 팝업표시 방향."vert": vertical,"horz": horizontal
 * @param {number} offset 표시될때 nexaComp와의 간격.
 * @return {number} screenY 좌표
 */	
nexutil._getVerticalAlign = function(width, height, screenX, screenY, screenRect, direction, offset)
{
	var spaceSize = screenRect.bottom - (screenY[0] + height);
	
	if(spaceSize >= 0)
	{
		screenY = screenY[0];
	}
	else if(spaceSize < 0)
	{
		screenY = screenY[0] + spaceSize;
		
		//표시공간보다 팝업size가 over시
		if(screenY < screenRect.top)
		{
			screenY = undefined;
		}				
	}
	else
	{
		screenY = undefined;
		
		
	}

	return screenY;			
};
	

/*●============================
	    Dataset
==============================●*/
/**
* 해당 데이터셋명으로 검색하여 데이터셋이 없으면 데이터셋을 생성
* @public
* @param {Form} nexacro form
* @param {string} 데이터셋명
* @return {string} dataset
* @example
*/   
nexutil.isCheckDs = function(pForm,sDsNm)
{
   var pThis = pForm;
	//var oDs = nexutil.getDataset(sDsNm);
	var oDs = this.lookup(pThis,sDsNm);
	
	// 
	 if(this.isEmpty(oDs))
	 {
		 oDs = new Dataset;
		 oDs.name = sDsNm;
	  
		 pThis.addChild(sDsNm, oDs);
	 }
	 else
	{
		 oDs.clearData();
		 
	}	 
	
	 
	 return oDs;
};

/**
* 해당 데이터셋명으로 검색하여 데이터셋찾아서 리턴 없으면 -1을 반환
* @param {string} 데이터셋명
* @return {string} dataset
* @example
*/  
nexutil.getDataset = function(Form,sDsNm)
{

	return this.getComponent(Form, "typeOf == 'Dataset' && prop[name] == '"+sDsNm+"'")[0];
};

/**
* = 을 배열로 분리 처리
* @param {string} objString (inds=inds)
* @param {number} 0 : 배열 첫번째값 1: 배열 두번째값
* @return {string} return 된 배열값
* @example
*/ 
nexutil.splitDsName = function(objString, type)
{
	var strDsMapping;			//mapping string
	var objArr;					//dataset name array
	var objReturn = new Array();
	
	strDsMapping = objString.split(" ");
	
	for (var i = 0; i < strDsMapping.length ; i++ ){
		objArr = strDsMapping[i].split("=");    // objArr = a,cd
		if (type == 0)
			objReturn[i] = objArr[0];
		else
			objReturn[i] = objArr[1];
	}
	
	return objReturn;
};

/**
* dataset object에서 키에 해당되는 Row를 찾아서 삭제
* @public
* @param {object} dataset
* @param {string} 키칼럼
* @param {string} :키값
* @param {string} 서브키칼럼
* @param {string} :서브 키값
* @return N/A
* @example
*/  
nexutil.deleteData = function (ObjDs, strIdCol, strId, strSubCol, strSubId)
{
	var curRow = this.findData(ObjDs, strIdCol, strId, strSubCol, strSubId);
	ObjDs.deleteRow(curRow);
};

/**
* dataSet object에서 키에 해당되는 Row를 찾아서 rowpostion 전달
* @public
* @param {object} dataset
* @param {string} 키칼럼
* @param {string} :키값
* @param {string} : 서브키칼럼
* @param {string} :서브 키값
* @return N/A
* @example
*/  
nexutil.findData = function (ObjDs, strIdCol, strId, strSubCol, strSubId)
{
	if (this.isEmpty(strSubCol)) 
	{
		return ObjDs.findRow(strIdCol, strId.toString());
	}

	return ObjDs.findRowExpr(strIdCol + " == '" + strId + "' && " + strSubCol + " == '" + strSubId + "'");
};

/**
* dataset object에서 키에 해당되는 Row를 찾아서 이동
* @memberOf public
* @param {object} dataset
* @param {string} 키칼럼
* @param {string} :키값
* @param {string} : 이동할 Row,
* @param {string} :서브키칼럼
* @param {string} : 서브 키값
* @return N/A
* @example
*/   
nexutil.moveData = function (ObjDs, strIdCol, strId, newRow, strSubCol, strSubId)
{
	var curRow = this.findData(ObjDs, strIdCol, strId, strSubCol, strSubId);
	ObjDs.moveRow(curRow, newRow);
};

/**
* dataset object에서 키에 해당되는 Row를 찾아서 값을 변경
* @public
* @param {object} dataset
* @param {string} 키칼럼
* @param {string} :키값
* @param {string} : 변경할 칼럼
* @param {string} :변경값
* @param {string} : 서브키칼럼
* @param {string} : 서브 키값
* @return N/A
* @example
*/   
nexutil.editData = function(ObjDs, strIdCol, strId, valCol, newVal, strSubCol, strSubId)
{
	var curRow = this.findData(ObjDs, strIdCol, strId, strSubCol, strSubId);
	return ObjDs.setColumn(curRow, valCol, newVal);
};

/**
* dataset object에서 가져오는 함수 Null경우에는 Type에 의한 예외처리 하여 반환
* @public
* @param {object} dataset
* @param {string} 키칼럼
* @param {string} :키값
* @param {string} : 변경할 칼럼
* @param {string} :변경값
* @param {string} : 서브키칼럼
* @param {string} : 서브 키값
* @return N/A
* @example
*/  
nexutil.getData = function(ObjDs,nRow,sColId,sVal)
{
	var oData = ObjDs.getColumn(nRow,sColId); 
	var oColInfo = ObjDs.getColumnInfo(sColId);
	
	if(this.isEmpty(oColInfo)) return "";
	var sType = oColInfo.type;
	
	if(this.isEmpty(sVal))
	{
		switch(sType.toUpperCase())
		{
			case "STRING" : 
			   sVal = "";
			break;
			case "BIGDECIMAL" :
			case "INT" :
			case "FLOAT" :
			   sVal = 0;
			break;
		}
	}	
	
	var rtnVal = (this.isEmpty(oData)) ? sVal : oData;
	
	return rtnVal;
};

/**
* dataSet object에서 키에 해당되는 Row를 찾아서 칼럼값을 전달
* @public
* @param {object} dataset
* @param {string} 키칼럼
* @param {string} :키값
* @param {string} : dataSet 칼럼
* @param {string} :변경값
* @param {string} : 서브키칼럼
* @param {string} : 서브 키값
* @return N/A
* @example
*/   
nexutil.getLookupData = function(ObjDs, strIdCol, strId, strInfo, strSubCol, strSubId)
{
	var strVal;
	var curRow = this.findData(ObjDs, strIdCol, strId, strSubCol, strSubId);
	if (curRow < 0) 
	{
		return "";
	}
	
	strVal = ObjDs.getColumn(curRow, strInfo);
	if (this.isEmpty(strVal)) 
	{
		return "";
	}

	return strVal;
};

/**
* dataSet의 Row 중에서 변경된 내용이 있는지 여부를  판단하는 함수
* @public
* @param {object} DataSet
* @return {boolen} true = 변경 된 데이터가 존재 , false = 변경 된 데이터가 없음
* @example
*/  
nexutil.isUpdated = function(objDs)
{
	if (objDs.getDeletedRowCount() > 0) 
	{
		return true;
	}
	
	if (objDs.findRowExpr("(this.getRowType(rowidx)==Dataset.ROWTYPE_UPDATE)||(this.getRowType(rowidx)==Dataset.ROWTYPE_INSERT)") > -1) 
	{
		return true;
	}
	return false;
};

/**
* dataSet의 Row가 변경되었는지 판단하는 함수
* @public
* @param {object} objDs(DataSet)
* @param {number} 체크할 Row index
* @return {boolen} true = 변경 된 데이터가 존재 , false = 변경 된 데이터가 없음
* @example
*/   
nexutil.isUpdatedRow = function (objDs, nRow)
{
	if (objDs.updatecontrol == true) 
	{
		if (objDs.getRowType(nRow) == 2 || objDs.getRowType(nRow) == 4) 
		{
			return true;
		}
		return false;
	}
	else 
	{
		for (var i = 0; objDs.getColCount(); i++) 
		{
			if (this.IsUpdateColumn(objDs, nRow, i) == true) 
			{
				return true;
			}
		}
	}
	return false;
};

/**
* dataSet의 Row 에서 해당 칼럼이 변경되었는지
* @public
* @param {object} objDs(DataSet)
* @param {number} 체크할 Row index
* @param {string} 체크할 컬럼값
* @return {boolen} true = 변경 된 데이터가 존재 , false = 변경 된 데이터가 없음
* @example
*/   
nexutil.isUpdateColumn = function (objDs, nRow, Column)
{
	if (objDs.getRowType(nRow) == 2) 
	{
		if (this.isEmpty(objDs.getColumn(nRow, Column))) 
		{
			return false;
		}
	}
	else 
	{
		if (objDs.getColumn(nRow, Column) == objDs.getOrgColumn(nRow, Column)) 
		{
			return false;
		}
	}
	return true;
};

/**
* Dataset의 모든 행을 함수의 인자로 넘겨주고 함수 호출처리
* @public
* @param {object} objDs(DataSet)
* @param {string} 호출할 함수
* @param {boolen} 변경된 데이터만 호출할지 여부
* @return {string} 호출된값
* @example
*/   
nexutil.allRowDataCall = function (dsObj, callFncObj, bModifiedOnly)
{
	var retVal;
	for (var i = 0; i < dsObj.getRowCount(); i++) 
	{
		if (bModifiedOnly && !(dsObj.getRowType(i) == 2 || dsObj.getRowType(i) == 4)) 
		{
			continue;
		}
		retVal = callFncObj(dsObj, i);
		if (this.isEmpty(retVal) == false) 
		{
			return retVal;
		}
	}
};

/**
* Dataset의 필터한 정보를 대상 Dataset으로 Copy하는 기능
* @public
* @param {object} 목적데이타셋dsDs(DataSet)
* @param {string} 처리데이타셋
* @param {string} 필터표현
* @return N/A
* @example
*/   
nexutil.dsFilter = function(dsSc,dsTg,sFilterExpr)
{
	var sKeyString = dsSc.keystring;
	if(!this.isEmpty(sKeyString))  sKeyString = sKeyString.toString();
	dsSc.set_keystring("");
	dsSc.filter(sFilterExpr);
	dsTg.copyData(dsSc,true);
	dsSc.filter("");   
	if(!this.isEmpty(sKeyString))  dsSc.set_keystring(sKeyString);
};

/*●============================
	      Developer Log
==============================●*/

/**
 * developer debug messge print
 *@param   {xComp} nexacro Form
 * @param {object}
 *            {name: "xam_function",msg:{"logmessage","aaaaaaaaaaaaaaaa"}})
 * @return
 * @example nexutil.log(this,{msg:{"logmessage","aaaaaaaaaaaaaaaa"}}); or
 *          nexutil.log(this,{msg:"logmessage",info:"error"});
 *          //에러일경우
 * @since 2016.06.23
 * @author #{J}
 */
nexutil.log = function (pForm, variant) {

	var pThis = pForm;
	var pArgu = variant || {};
	this._setDebugInfoFunctions(pThis);
	var sName = this._getFuncFullName(arguments.callee.caller);

	var sMsg = pArgu.msg || "";
	var sErrror = pArgu.info || "info";
	var nDate = this.dateFormatString(new Date(), "%Y/%m/%d %H:%M:%S");
	var dataString, levelString;
	var resultMessage = "\n";
	resultMessage += "========================= DEBUG MESSAGE(" + sErrror
		+ ") ==============";
	resultMessage += "\n  (TimeStamp : " + nDate + ")";
	resultMessage += "\n==============================================================";
	resultMessage += "\n  [function name ]      : " + sName;
	resultMessage += "\n  [Browser]   : " + system.navigatorname;
	resultMessage += "\n  [Arguments] : "
		+ [].join.call(arguments.callee.caller.arguments); // 넘어온 아규먼트

	if (!this.isEmpty(sMsg)) {
		resultMessage += "\n======================== USER LOG ===========================";
		if (typeof sMsg == "object") {
			for (key in sMsg) {
				resultMessage += "\n  [" + key + "] : " + sMsg[key] + " "; // 넘어온
				// 아규먼트
			}

		} else {
			resultMessage += "\n  " + sMsg + " "; // 넘어온 아규먼트
		}

	}
	resultMessage += "\n===================== COMPLETE MESSAGE ======================\n";

	if (sErrror == "error") {
		var e = new Error(resultMessage);
		throw e;
	} else {
		application.trace(resultMessage);
	}

};
	

/**
 * ChildFrame에 속한 계층 위치의 정보까지 명칭으로 얻는다.
 * @private
 * @param {nexaComp} obj nexacro component.
 * @param {nexaComp=} refParent 계층 구조에서 중단할 상위 nexacro component
 * @return {string} obj 계층 구조의 명칭(xpform.Div00.Button01)
 * @example
 *
 * // obj = Button
 * trace(nexutil._getPathName(obj, this));
 * // output : Button00
 *
 * trace(nexutil._getPathName(Div00.st_test, this));
 * // output : Div00.st_test
*/
nexutil._getPathName = function (obj, refParent) 
{
	var c = obj, arr = [];
	while (c) {
		if (c instanceof ChildFrame) break;
		if (refParent && c === refParent) break;
		arr.push(c.name);
		c = c.parent;
	}
	arr = arr.reverse();
	return arr.join(".");
};

/**
 * Form에 존재하는 함수들의 debug정보를 구성한다.<br><br>
 * 폼의 함수를 익명함수 형태로 하므로 본 함수를<br>
 * 호출하지 않으면 anonymous function 으로 표시된다.<br>
 * stack 기능을 사용하려면 이 함수가 호출되어야 한다.<br>
 * @private
 * @param {Form} form 대상 Form
 * @example
 *
 * nexutil._setDebugInfoFunctions(this, false);
 */
nexutil._setDebugInfoFunctions = function (form) 
{
	for (var nm in form) {

		if (form.hasOwnProperty(nm) && typeof form[nm] == "function") {
			form[nm]._thisName = nm;
			form[nm]._thisOwner = form;
		}
	}
};

/**
 * function full name을 얻어온다.
 * @private
 * @param {function} func 대상 function.
 * @return {string} function full name.
 */
nexutil._getFuncFullName = function(func) 
{
	var name = "";
	if (func._thisOwner) {
		name += (func._thisOwner._className || this._getPathName(func._thisOwner)) + ".";
	}

	if (func._thisName) {
		name += func._thisName;
	}
	else {
		var funcName = "";
		if ('name' in func) {
			funcName = func.name;
		}
		else {
			var reg = nex.v.regExp12;
			funcName = reg.test(func.toString()) ? RegExp.$1 : "";
		}

		if (funcName.length == 0) {
			funcName = "anonymous function";
		}

		name += funcName;
	}
	return name;
};

/*●============================
	      ETC
==============================●*/
 
/**
* 입력값이 e-mail Type인지 체크하는 함수
* @public
* @param {string} strValue
* @return true = 입력값이 email형태일 경우
* @example
*/ 
nexutil.checkEmail = function (strValue)
{
	if (this.isEmpty(strValue)) 
	{
		return false;
	}

	var nIndexOfAt = strValue.indexOf("@");
	var nIndexOfDot = strValue.indexOf(".");
	var nLength = strValue.length;

	// "@" 이 하나도 없거나 맨 끝에 위치한  경우
	if (nIndexOfAt <= 0 || nIndexOfAt == nLength) 
	{
		return false;
	}

	// "." 이 하나도 없거나 맨 끝에 위치한 경우
	if (nIndexOfDot <= 0 || nIndexOfDot == nLength) 
	{
		return false;
	}

	// "@"이 두개 이상 존재하는 경우
	if (strValue.indexOf("@", nIndexOfAt + 1) != -1) 
	{
		return false;
	}

	// ".@" 인 경우 또는 "@."인 경우
	if (strValue.substr(nIndexOfAt - 1, 1) == "." || strValue.substr(nIndexOfAt + 1, 1) == ".") 
	{
		return false;
	}

	// "@" 이후에 "."이 존재하지 않는 경우
	if (strValue.indexOf(".", (nIndexOfAt + 2)) == -1) 
	{
		return false;
	}

	// 공백문자가 존재하는 경우
	if (strValue.indexOf(" ") != -1) 
	{
		return false;
	}
	return true;
};

/**
* 해당 PC의 오늘 날짜(korea)를 가져온다.
* @public
* @return {string] 오늘날짜
* @example
*/  
nexutil.today = function ()
{
	var strToday = "";
	var objDate = new Date();

	var strToday = objDate.getFullYear() + "";
	strToday += this.isUndefined("0" + (objDate.getMonth() + 1), 2);
	strToday += this.isUndefined("0" + objDate.getDate(), 2);

	return strToday;
};

/**
* 해당 PC의 오늘 날짜(English)를 가져온다.
* @public
* @return {string] 오늘날짜
* @example
*/  
nexutil.todayEng = function ()
{

	var strToday = "";
	var objDate = new Date();

	var strToday = "";
	strToday += this.isUndefined("0" + (objDate.getMonth() + 1), 2);
	strToday += this.isUndefined("0" + objDate.getDate(), 2);
	strToday += objDate.getFullYear() 

	return strToday;
};

/**
* 날짜 형식을 englisg 형태를  korea 형식으로 변환
* @public
* @return {string]  mmddyyyy 형태에 날짜를 yyyymmdd로 변경처리
* @example
*/  
nexutil.replaceDateKorea = function(value)
{
	var stringWrapper = new String(value);
	
	if( stringWrapper.toString().length !== 8 ) return;
   //영문달력인지 체크하는 함수
	var iMonth  = Math.floor(stringWrapper.slice(0,2), 10);
	var iDate   = Math.floor(stringWrapper.slice(2,4), 10);

	if( iMonth < 1 || iMonth > 12 ) return;		
	if( iDate < 1 ) return;
	
	strToday = value.slice(4);
	
	strToday += value.slice(0,2);
	strToday += value.slice(2,4);

	return strToday;
	
};

/**
* 해당 PC의 오늘 날짜+시간를 가져온다.
* @public
* @return {string] 오늘날짜 + 시간
* @example
*/  
nexutil.todayTime = function ()
{
	var strToday = "";
	var objDate = new Date();

	var strToday = objDate.getFullYear() + "";
	strToday += this.isUndefined("0" + (objDate.getMonth() + 1), 2);
	strToday += this.isUndefined("0" + objDate.getDate(), 2);
	strToday += this.isUndefined("0" + objDate.getHours(), 2);
	strToday += this.isUndefined("0" + objDate.getMinutes(), 2);
	strToday += this.isUndefined("0" + objDate.getSeconds(), 2);

	return strToday;
};

/**
* 입력값이 e-mail Type인지 체크하는 함수
* @public
* @param {string} strValue
* @return true = 입력값이 email형태일 경우
* @example
*/ 
nexutil.checkEmail = function (strValue)
{
	if (this.isEmpty(strValue)) 
	{
		return false;
	}

	var nIndexOfAt = strValue.indexOf("@");
	var nIndexOfDot = strValue.indexOf(".");
	var nLength = strValue.length;

	// "@" 이 하나도 없거나 맨 끝에 위치한  경우
	if (nIndexOfAt <= 0 || nIndexOfAt == nLength) 
	{
		return false;
	}

	// "." 이 하나도 없거나 맨 끝에 위치한 경우
	if (nIndexOfDot <= 0 || nIndexOfDot == nLength) 
	{
		return false;
	}

	// "@"이 두개 이상 존재하는 경우
	if (strValue.indexOf("@", nIndexOfAt + 1) != -1) 
	{
		return false;
	}

	// ".@" 인 경우 또는 "@."인 경우
	if (strValue.substr(nIndexOfAt - 1, 1) == "." || strValue.substr(nIndexOfAt + 1, 1) == ".") 
	{
		return false;
	}

	// "@" 이후에 "."이 존재하지 않는 경우
	if (strValue.indexOf(".", (nIndexOfAt + 2)) == -1) 
	{
		return false;
	}

	// 공백문자가 존재하는 경우
	if (strValue.indexOf(" ") != -1) 
	{
		return false;
	}

	return true;
};

/**
* 입력값이 전화번호 format 인지 체크하는 함수
* @public
* @param {string} strValue
* @return true = 입력값이 전화번호 형태일 경우
* @example
*/
nexutil.checkPhone = function (strValue)
{
	// null 이거나 "-"이 존재하지 않는 경우
	if (this.isEmpty(strValue) || (!this.isEmpty(strValue) && strValue.indexOf("-") == -1)) 
	{
		return false;
	}
	else if (strValue.indexOf(".") >= 0) 
	{
		return false;
	}
	else 
	{
		// "-" 사이의 값이 숫자가 아닌 경우
		var arrNumbers = strValue.split("-");
		for (var i = 0; i < arrNumbers.length; i++) 
		{
			if (!nexacro.isNumeric(arrNumbers[i])) 
			{
				return false;
			}
		}
	}
	return true;
};

/**
* Font Object 생성 반환.
* @public
* @param {object} obj
* @param {number} iFontSize
* @param {string} 폰트명
* @param {string} sType
* @return {array] 변형문자열
* @example
*/ 
nexutil.getObjFont = function (obj,iFontSize, sFontName, sType)
{
	var objFont = obj.currentstyle.font;
	sType = (this.isEmpty(sType)) ? "normal" : sType;
	objFont.set_size(iFontSize);
	objFont.set_face(sFontName);
	objFont.set_type(sType);

	return objFont;
};


/**
* 공통 메세지 치환
* @public
* @param {array} 치환될 부분은 "{0~N}"이 되고 치환값은 배열
* @return {string}  치환된 문자열
* @example
var msg = "{0}은(는) 필수 입력입니다.";
var convertMsg =  nexutil.convertMessage(msg, ["이름"]);
trace(convertMsg); //이름은(는) 필수 입력입니다.  

msg = "[{0}] 검색가능 일자는 {1} ~ {2} 입니다.";
convertMsg =  nexutil.convertMessage(msg, ["알림", "2015-05-01", "2015-05-12"]);
trace(convertMsg); //[알림] 검색가능 일자는 2015-05-01 ~ 2015-05-12 입니다.
*/   
nexutil.convertMessage = function(msg, values) {
    return msg.replace(nex.v.regExp13 , function() {
        return values[arguments[1]];
    });
};

 /**
 * 부모창에 존재하는 함수명 검색하여 호출 
 * @public 
 * @param {form} nexacro form
 * @param {string} function명
 * @return {string} 공백으로 치환값
 * @example
 *  nexutil.searchParentFunc("fn_func").call(this,arg1);
 */	
nexutil.searchParentFunc = function(pForm,funcNm)
{

	var idx = 1;
	var parentStr = "";
	var pThis = pForm;
	var  i=0;
	var functionName = arguments[0];
	var isFind = false;
	
	while(idx<5)
	{
		
	   if(this.isFunction(eval(pThis + parentStr + functionName)) == true)
	   {
		   
		 isFind= true;
		 break;
	   }
	   else
	   {
		  parentStr =  "parent." + parentStr;
		 idx++;
	   }
	  
	}
  
   if(!isFind)
   {
	  
	}
   else
	{
	   isFind = eval(pThis + parentStr + functionName);
	   
	} 
   
	return isFind;
};


/**
* 입력값이 null에 해당되면 val2(대체문자열)로 반환한다.
* @public 
* @param {string} val : 체크할 문자열( 예 : null 또는 undefined 또는 "" 또는 "abc" )
* @return {string}  val값이 null에 해당하는 경우 val2값으로 대체 반환
* @example
*/   
nexutil.isNvl = function(val,val2)
{
	var rtnVal = (this.isEmpty(val)) ? val2 : val;
	return rtnVal;
};

/**
 * 입력된 값 또는 수식을 검사해 적당한 값을 반환.<br>
 * decoce(비교값, CASE1, 결과값1 [, CASE2, 결과값2, ... ], 디폴트 값);<br>
 * 표현식의 값이 기준값1이면 값1을 출력하고, 기준값2이면 값2를 출력한다.<br>
 * 그리고 기준값이 없으면 디폴트 값을 출력한다.<br>
 * @public 
 * @param {*} * 1. 비교값
 * @param {*} * 2. CASE
 * @param {*} * 3. 결과값 (2,3 반복)
 * @param {*=} * (2,3 반복)
 * @param {*=} * 4.디폴트값
 * @return {*} decode에 의해서 선택된 값.
 * @example
 * trace(nexutil.decode("1", "1", "One", "2", "Two", "Default")); // output : One;
 * 
 * trace(nexutil.decode(100, 1, "일", 10, "십", 100, "백"));	// output : 백
 *
 */		 
nexutil.decode = function() 
{
	var i;
	var count = arguments.length;
	for( i = 1 ; i < count ; i+=2 )
	{
		if( arguments[0] === arguments[i] )
		{
			return arguments[i+1];
		}
	}
	
	return arguments[i-2];
};



/***********
** JSON ***
**************/

nexutil.JSONtoString = function(object) {
    var results = [];
    for (var property in object) {
        var value = object[property];
        if (value)
            results.push(property.toString() + ': ' + value);
        }
                
        return '{' + results.join(', ') + '}';
};



nexutil.convertToString = function( value )
{

	
	// determine what value is and convert it based on it's type
	if ( nexutil.isString(value) )
	{
		// escape the string so it's formatted correctly
		return this.escapeString( value );
	}
	else if ( this.isNumber(value) )
	{
		// only encode numbers that finate
		return isFinite( value ) ? value.toString() : "null";
	}
	else if ( this.isBoolean(value) )
	{
		// convert boolean to string easily
		return value ? "true" : "false";
	}
	else if ( this.isArray(value) )
	{
		// call the helper method to convert an array
		return this.arrayToString( value );

	}
	else if ( this.isComponent(value) )
	{
		return value.name;
	}
	//else if ( value && MiscUtil.isObject(value) )
	else if ( value )
	{
		// call the helper method to convert an object
		return this.objectToString( value );
	}
	return "null";
};

nexutil.escapeString = function( str )
{
	// create a string to store the string's jsonstring value
	var s = "";
	// current character in the string we're processing
	var ch;
	// store the length in a local variable to reduce lookups
	var len = str.length;

	// loop over all of the characters in the string
	for ( var i = 0; i < len; i++ )
	{
		// examine the character to determine if we have to escape it
		ch = str.charAt( i );
		switch ( ch )
		{
			case '"':       // quotation mark
				s += "\\\"";
				break;
			//case '/':     // solidus
			//      s += "\\/";
			//      break;
			case '\\':      // reverse solidus
				s += "\\\\";
				break;
			case '\b':      // bell
				s += "\\b";
				break;
			case '\f':      // form feed
				s += "\\f";
				break;
			case '\n':      // newline
				s += "\\n";
				break;
			case '\r':      // carriage return
				s += "\\r";
				break;
			case '\t':      // horizontal tab
				s += "\\t";
				break;
			default:        // everything else
				// check for a control character and escape as unicode
				if ( ch < ' ' )
				{
					// get the hex digit(s) of the character (either 1 or 2 digits)
					var hexCode = ch.charCodeAt( 0 ).toString( 16 );
					// ensure that there are 4 digits by adjusting
					// the # of zeros accordingly.
					var zeroPad = hexCode.length == 2 ? "00" : "000";
					// create the unicode escape sequence with 4 hex digits
					s += "\\u" + zeroPad + hexCode;
				}
				else
				{
					// no need to do any special encoding, just pass-through
					s += ch;
				}
		}// end switch

	}// end for loop
	return "\"" + s + "\"";
};

nexutil.arrayToString = function( a )
{
	
	// create a string to store the array's jsonstring value
	var s = "";

	// loop over the elements in the array and add their converted
	// values to the string
	for ( var i = 0; i < a.length; i++ )
	{
		// when the length is 0 we're adding the first element so
		// no comma is necessary
		if ( s.length > 0 )
		{
			// we've already added an element, so add the comma separator
			s += ","
		}
		
		// convert the value to a string
		s += this.convertToString( a[i] );   
	}

	// KNOWN ISSUE:  In ActionScript, Arrays can also be associative
	// objects and you can put anything in them, ie:
	//              myArray["foo"] = "bar";
	//
	// These properties aren't picked up in the for loop above because
	// the properties don't correspond to indexes.  However, we're
	// sort of out luck because the JSON specification doesn't allow
	// these types of array properties.
	//
	// So, if the array was also used as an associative object, there
	// may be some values in the array that don't get properly encoded.
	//
	// A possible solution is to instead encode the Array as an Object
	// but then it won't get decoded correctly (and won't be an
	// Array instance)
		
	// close the array and return it's string value
	return "[" + s + "]";
},

nexutil.objectToString = function( o )
{
	// create a string to store the object's jsonstring value
	var s = "";
	
	//trace("_objectToString o="+o);
	if ( this.isObject(o) )
	{
		// the value of o[key] in the loop below - store this 
		// as a variable so we don't have to keep looking up o[key]
		// when testing for valid values to convert
		var value;

		// loop over the keys in the object and add their converted
		// values to the string
		for ( var key in o )
		{
			if ( o.hasOwnProperty(key) )
			{
				// assign value to a variable for quick lookup
				value = o[key];

				// don't add function's to the JSON string
				if ( this.isFunction(value) )
				{
					// skip this key and try another
					continue;
				}
				
				// when the length is 0 we're adding the first item so
				// no comma is necessary
				if ( s.length > 0 )
				{
					// we've already added an item, so add the comma separator
					s += ","
				}
				
				s += this.escapeString( key ) + ":" + this.convertToString( value );
			}
		}
	}
	//else if ( is xpcomp )
	//{
	//}
	else // o is a ufo class instance
	{
	
		var value;
		var propName;
		var props = o._properties;
		var getter;
		
		//trace("props="+props + ", typeof=" + (typeof(props)));
		//trace("json.js > _objectToString > ■ start 테스트를 위한 임의설정 ");
		if(props === undefined)
		{
		//	trace("json.js > _objectToString > s="+s);
			return "{" + s + "}";
		}
		//return "{" + s + "}";
		
		for (var i=0,len=props.length; i<len; i++)
		{
			propName = props[i];
			
			if ( propName == "name" ) continue;
			
			getter = o["get"+propName.charAt(0).toUpperCase() + propName.substr(1)];
			if ( getter )
			{
				value = getter.call(o);
			}
			else
			{
				value = o["_"+propName];
			}
			
			// when the length is 0 we're adding the first item so
			// no comma is necessary
			if ( s.length > 0 )
			{
				// we've already added an item, so add the comma separator
				s += ","
			}				

			s += this.escapeString( propName ) + ":" + this.convertToString( value );
		}
	}

	return "{" + s + "}";
};