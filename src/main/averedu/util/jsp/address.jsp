﻿<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>

<html>
<head>
  <title></title>
  <script src="http://dmaps.daum.net/map_js_init/postcode.v2.js"></script>
<script>
	/*
	접속허용 되야 할 도메인
	http://dmaps.daum.net/
	http://postcode.map.daum.net/
	https://spi.maps.daum.net/
	
	이용되는 URL
	http://dmaps.daum.net/map_js_init/postcode.v2.js	: 스크립트 소스 사이트
	http://postcode.map.daum.net/search	: 주소 검색 URL
	
	https://spi.maps.daum.net/imap/map_js_init/postcode.v2.js	: https 사용시 스크립트 소스 사이트
	https://spi.maps.daum.net/postcode/search	: https 사용시 주소 검색 URL
	*/
    // 우편번호 찾기 찾기 화면을 넣을 element
    var element_wrap = document.getElementById('wrap');

    function initDaumAddrssAPI() {
    	var width = 500; //팝업의 너비
		var height = 600; //팝업의 높이
        // 현재 scroll 위치를 저장해놓는다.
        var currentScroll = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
        new daum.Postcode({
            oncomplete: function(data) {
                //리턴값 조합
                var returnStr = setReturnData(data);
                //넥사크로 호출 유형에 맞게 분기해서 처리한다.
                if(window.NEXACROWEBBROWSER){
                  	//넥사크로 런타임 버전 
                   window.NEXACROWEBBROWSER.on_fire_onusernotify(window.NEXACROWEBBROWSER, returnStr);
                }else{
                  	//런타임 버전
                   	window.document.title = returnStr;
                }
                // 우편번호 찾기 화면이 보이기 이전으로 scroll 위치를 되돌린다.
                document.body.scrollTop = currentScroll;
            },
            // 우편번호 찾기 화면 크기가 조정되었을때 실행할 코드를 작성하는 부분. iframe을 넣은 element의 높이값을 조정한다.
            onresize : function(size) {
                //element_wrap.style.height = size.height+'px';
            },
            onclose : function(flag) {
                //그냥 닫았을시 "FORCE_CLOSE" , 주소선택시 "COMPLETE_CLOSE"
                if(flag == "FORCE_CLOSE")
                {
                    //넥사크로 호출 유형에 맞게 분기해서 처리한다.
                    if(window.NEXACROWEBBROWSER){
                      	//넥사크로 런타임 버전 
                       	window.NEXACROWEBBROWSER.on_fire_onusernotify(window.NEXACROWEBBROWSER, "CLOSE");
                    }else{
                      	//런타임 버전
                       	window.document.title = "CLOSE";
                    }
                }
            },
            width : '100%',
            height : '100%',
            animation : true
            
        }).open({left: (window.screen.width / 2) - (width / 2),	top: (window.screen.height / 2) - (height / 2)});
    }
    
    //데이터를 넥사크로 전송받식으로 변경한다.
    function setReturnData(object){
    	//넥사크로에서 리턴데이터인지 인식해야 되서 'WD@' prefix 추가
    	var returnStr = "WD@";
		//넥사트로 userdata는 길이제한이 있어서 필요한 정보만을 뽑아서 가져간다. 추후 더 필요한 정보가 있으면 추가하고 길이 테스트 꼭 해볼수 있도록
    	returnStr += ("userSelectedType:"+object.userSelectedType);	//검색 결과에서 사용자가 선택한 주소의 타입
		returnStr += ("?zonecode:"+object.zonecode);	//새 우편번호
		returnStr += ("?postcode:"+object.postcode);	//구 우편번호 (2015년 8월 1일 이후에는 업데이트가 되지 않습니다.)
		returnStr += ("?userLanguageType:"+object.userLanguageType);
		//선택된 언어에 따라 주소셋팅
		if(object.userLanguageType == "E"){
			returnStr += ("?roadAddress:"+object.roadAddressEnglish);		//도로명 주소
			returnStr += ("?jibunAddress:"+object.jibunAddressEnglish);	//지번 주소
		}else{
			returnStr += ("?roadAddress:"+object.roadAddress);		//도로명 주소
			returnStr += ("?jibunAddress:"+object.jibunAddress);	//지번 주소
		}
		returnStr += ("?buildingCode:"+object.buildingCode);	//건물관리번호
		returnStr += ("?buildingName:"+object.buildingName);	//건물명
		returnStr += ("?apartment:"+object.apartment);			//공동주택 여부(Y/N)(아파트,연립주택,다세대주택 등)
		
		return returnStr;
    	/*
    	zonecode	:	13494	:	국가기초구역번호. 2015년 8월 1일부터 시행될 새 우편번호.(ex. 서울 종로구 계동 1-1)
    	address	:	경기 성남시 분당구 판교역로 235	:	기본 주소(검색 결과에서 첫줄에 나오는 주소)
    	addressEnglish	:	235 Pangyoyeok-ro, Bundang-gu, Seongnam-si, Gyeonggi-do, korea :	기본 영문 주소
    	addressType	:	R/J	검색된 기본 주소 타입	: R(도로명), J(지번)
    	userSelectedType	:	R/J	:	검색 결과에서 사용자가 선택한 주소의 타입
    	userLanguageType	:	K/E	:	검색 결과에서 사용자가 선택한 주소의 언어 타입: K(한글주소), E(영문주소)
    	roadAddress	:	경기 성남시 분당구 판교역로 235	:	도로명 주소(모든 주소에 도로명 주소가 부여되어 있지는 않습니다. ex. 서울 종로구 계동 1-1)
    	roadAddressEnglish	:	235, Pangyoyeok-ro, Bundang-gu, Seongnam-si, Gyeonggi-do, Korea	:	영문 도로명 주소
    	jibunAddress	:	경기 성남시 분당구 삼평동 681	:	지번 주소
    	jibunAddressEnglish	:	681, Sampyeong-dong, Bundang-gu, Seongnam-si, Gyeonggi-do, Korea	:	영문 지번 주소
    	autoRoadAddress	:	경기 성남시 분당구 판교역로 235	:	매핑된 도로명 주소가 여러개인 경우, 사용자가 '선택안함'을 클릭했을 때 임의로 첫번째 매핑 주소를 넣어서 반환합니다.(autoMapping을 false로 설정한 경우에는 값이 채워지지 않습니다.)
    	autoRoadAddressEnglish	:	235, Pangyoyeok-ro, Bundang-gu, Seongnam-si, Gyeonggi-do, Korea	:	autoRoadAddress의 영문 도로명 주소
    	autoJibunAddress	:	경기 성남시 분당구 삼평동 681	:	매핑된 지번 주소가 여러개인 경우, 사용자가 '선택안함'을 클릭했을 때 임의로 첫번째 매핑 주소를 넣어서 반환합니다.(autoMapping을 false로 설정한 경우에는 값이 채워지지 않습니다.)
    	autoJibunAddressEnglish	:	681, Sampyeong-dong, Bundang-gu, Seongnam-si, Gyeonggi-do, Korea	:	autoJibunAddress의 영문 지번 주소
    	buildingCode	:	4113510900106810000000001	:	건물관리번호
    	buildingName	:	에이치스퀘어 엔동	건물명
    	apartment	:	N	:	공동주택 여부(Y/N)(아파트,연립주택,다세대주택 등)
    	sido	:	경기	:	도/시 이름
    	sigungu	:	성남시 분당구	:	시/군/구 이름
    	sigunguCode	:	41135	:	시/군/구 코드(5자리 구성된 시/군/구 코드입니다.)
    	roadnameCode	:	3179025	:	도로명 코드(7자리로 구성된 도로명 코드입니다. 단, 추후 7자리 이상으로 늘어날 수 있습니다.)
    	bcode	:	4113510900	:	법정동/법정리 코드
    	bname	:	삼평동		:	법정동/법정리 이름
    	hname	:	-	:	행정동 이름(선택된 도로명/지번주소의 법정동과 행정동이 다를 경우에만 내려갑니다.)
    	query	:	판교역로 235	:	사용자가 입력한 검색어
    	postcode	:	463-400	:	구 우편번호 (2015년 8월 1일 이후에는 업데이트가 되지 않습니다.)
    	postcode1	:	463	:	구 우편번호 앞 3자리 (2015년 8월 1일 이후에는 업데이트가 되지 않습니다.)
    	postcode2	:	400	:	구 우편번호 뒤 3자리 (2015년 8월 1일 이후에는 업데이트가 되지 않습니다.)
    	postcodeSeq	:	001	:	구 우편번호 일련번호 (2015년 8월 1일 이후에는 업데이트가 되지 않습니다.)
    	*/
    }
</script>
  
</head>
<body onload="initDaumAddrssAPI()">
</body>
</html>




