<template>
  <div class="flex h-screen w-full bg-gray-100 dark:bg-[#1E2028]">
  <LeftMenu></LeftMenu>
    <!-- Main Content -->
    <div class="flex-1 overflow-y-auto">
       <div class="p-6">
           <h2 class="text-1xl font-semibold mb-4 text-gray-800 dark:text-white">부서코드관리</h2>
           <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
             
               <div class="bg-white dark:bg-[#252731] h-32 p-6 rounded-lg shadow-md md:col-span-1">
                   <label class="p-1">부서명<input @keyup.enter="search()" v-model="param.deptNm" type="text" class="mx-3 bg-gray-50 border border-gray-300 text-gray-900"/></label>
                   <label class="p-1">부서코드<input @keyup.enter="search()" v-model="param.deptCd" type="text" class="mx-3 bg-gray-50 border border-gray-300 text-gray-900"/></label>
                   <label class="p-1">부서ID<input @keyup.enter="search()" v-model="param.deptId" class="mx-3 bg-gray-50 border border-gray-300 text-gray-900"/></label>
                   <label class="p-1">
                       사용여부
                       <select @change="search()" v-model="param.useYn" class="mx-3 p-1 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500">
                           <option selected></option>
                           <option value="Y">사용</option>
                           <option value="N">미사용</option>
                       </select></label><br>
                   <label class="p-1">기관구분
                       <select @change="search()" v-model="param.breuFg" class="mx-3 p-1 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500">
                           <option selected></option>
                           <option value="Y">사용</option>
                           <option value="N">미사용</option>
                       </select></label>
                   <label class="p-1">최종조직여부
                       <select @change="search()" v-model="param.flDeptYn" class="mx-3 p-1 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500">
                           <option selected></option>
                           <option value="Y">사용</option>
                           <option value="N">미사용</option>
                       </select></label>
                  <label class="p-1">학사조직여부
                       <select @change="search()" v-model="param.shafFormaYn" class="mx-3 p-1 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500">
                           <option selected></option>
                           <option value="Y">사용</option>
                           <option value="N">미사용</option>
                       </select></label>
                       <button @click="search()" id="searchBtn" type="button" class="float-right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5
                        py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">조회</button>
               </div>
           </div><br>
           <div class="flex-auto w-2/4">
            <h2 class="text-1xl font-semibold mb-4 text-gray-800 dark:text-white">부서목록</h2>
           <ag-grid-vue
              :columnDefs="mainColumnDefs"
              :rowData="mainRowData"
              @cell-clicked="onCellClicked"
              @grid-ready="onGridReady"
              :gridOptions="gridOptions"
              style="width: 72%; height: 600px;"
           ></ag-grid-vue>
           
          </div>
          <div class="bg-white dark:bg-[#252731] h-32 p-6 rounded-lg shadow-md md:col-span-1  text-1xl font-semibold mb-4 text-gray-800 dark:text-white flex-auto w-2/4
           h-2/3 float-right relative" style="top: -640px; left: -2%; width: 60%; height: 50%;">
            <h1>부서정보
              <strong class="float-right">총 : {{ mainRowData.length }} 건</strong>
                <!-- 메인 그리드 공통 버튼 시작-->
              <div class="float-right">
                <ButtonTest @add-row="mainGridAdd()" 
                          @delete-item="deleteItemMain"
                          @save-data="saveDataMain" 
                          @download-excel="downloadExcelMain" />
              </div>
              <!--
              <button type="button" @click="mainGridSave()" class="float-right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5
              py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">저장</button>
              <button type="button" @click="mainGridDel()" id="delGridBtn" class="float-right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5
              py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">삭제</button>
              <button type="button" @click="mainGridAdd()" id="addGrid" class="float-right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5
              py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">추가</button>-->
            </h1><br><br>
            <label class="p-1">부서코드<input v-model="deptDetaInfo.deptCd" type="text" class="mx-3 bg-gray-50 border border-gray-300 text-gray-900 w-24"/></label>
            <label class="p-1">상위부서<input v-model="deptDetaInfo.upDeptCd" type="text" class="mx-3 bg-gray-50 border border-gray-300 text-gray-900 w-24"/></label>
            <label class="p-1">사용여부<input v-model="deptDetaInfo.useYn" type="checkbox" class="mx-3 bg-gray-50 border border-gray-300 text-gray-900 w-8"/></label><br>
           
            <label class="p-1">기관구분<select name="" v-model="deptDetaInfo.breuFg" class="mx-3 bg-gray-50 border border-gray-300 text-gray-900 w-32">
              <option value=""></option>
              <option value="Y">기관</option>
              <option value="N">미기관</option></select></label>
            <label class="p-1">조직유형<select name="" v-model="deptDetaInfo.formaTyp" class="mx-3 bg-gray-50 border border-gray-300 text-gray-900 w-32">
              <option value=""></option>
              <option value="Y">조직</option>
              <option value="N">미조직</option></select></label>
            <label class="p-1">학사조직여부<input v-model="deptDetaInfo.shafFormaYn" type="checkbox" class="mx-3 bg-gray-50 border border-gray-300 text-gray-900 w-8"/></label><br>
            <label class="p-1">부서명<input v-model="deptDetaInfo.deptNm" type="text" class="mx-3 bg-gray-50 border border-gray-300 text-gray-900 w-32"/></label>
            <label class="p-1">부서약어명<input v-model="deptDetaInfo.deptAbbnm" type="text" class="mx-3 bg-gray-50 border border-gray-300 text-gray-900 w-32"/></label>
            <label class="p-1">가상조직여부<input v-model="deptDetaInfo.cyberFormaYn" type="checkbox" class="mx-3 bg-gray-50 border border-gray-300 text-gray-900 w-8"/></label><br>
            <label class="p-1">부서영문명<input v-model="deptDetaInfo.deptEngNm" type="text" class="mx-3 bg-gray-50 border border-gray-300 text-gray-900 w-24"/></label>
            <label class="p-1">부서영문약어명<input v-model="deptDetaInfo.deptEngAbbNm" type="text" class="mx-3 bg-gray-50 border border-gray-300 text-gray-900 w-24"/></label>
            <label class="p-1">최종조직여부<input v-model="deptDetaInfo.flDeptYn" type="checkbox" class="mx-3 bg-gray-50 border border-gray-300 text-gray-900 w-8"/></label><br>
            <label class="p-1">부서중문명<input v-model="deptDetaInfo.deptChnNm" type="text" class="mx-3 bg-gray-50 border border-gray-300 text-gray-900 w-24"/></label>
            <label class="p-1">부서중문약어명<input v-model="deptDetaInfo.deptChnAbbNm" type="text" class="mx-3 bg-gray-50 border border-gray-300 text-gray-900 w-24"/></label>
            <label class="p-1">부서ID<input v-model="deptDetaInfo.deptId" type="text" class="mx-3 bg-gray-50 border border-gray-300 text-gray-900 w-32"/></label><br>
            <label class="p-1">생성일자<input v-model="deptDetaInfo.frDt" type="date" class="mx-3 bg-gray-50 border border-gray-300 text-gray-900 w-32"/></label>
            <label class="p-1">대학(처)<input v-model="deptDetaInfo.colgNm" type="text" class="mx-3 bg-gray-50 border border-gray-300 text-gray-900 w-32"/></label>
            <label class="p-1">주야구분<select name="" v-model="deptDetaInfo.danFg" class="mx-3 bg-gray-50 border border-gray-300 text-gray-900 w-32">
              <option value=""></option>
              <option value="Y">주간</option>
              <option value="N">야간</option></select></label><br>
            <label class="p-1">폐지일자<input v-model="deptDetaInfo.ablnDt" type="date" class="mx-3 bg-gray-50 border border-gray-300 text-gray-900 w-32"/></label>
            <label class="p-1">학부(팀)<input v-model="deptDetaInfo.sustTeamNm" type="text" class="mx-3 bg-gray-50 border border-gray-300 text-gray-900 w-32"/></label>
            <label class="p-1">부서정렬순번<input v-model="deptDetaInfo.deptSortSeq" type="text" class="mx-3 bg-gray-50 border border-gray-300 text-gray-900 w-24"/></label><br>
            <label class="p-1">폐지예정일자<input v-model="deptDetaInfo.ablnExpcDt" type="date" class="mx-3 bg-gray-50 border border-gray-300 text-gray-900 w-32"/></label>
            <label class="p-1">부총장조직코드<select name="" v-model="deptDetaInfo.subChancMissCd" class="mx-3 bg-gray-50 border border-gray-300 text-gray-900 w-24">
              <option value=""></option>
              <option value="Y">기관</option>
              <option value="N">미기관</option></select></label>
            <label class="p-1">비고<input v-model="deptDetaInfo.remk" type="text" class="mx-3 bg-gray-50 border border-gray-300 text-gray-900 w-24"/></label>
          </div>
         
          <div class="bg-white dark:bg-[#252731] h-32 p-6 rounded-lg shadow-md md:col-span-1  text-1xl font-semibold mb-4 text-gray-800 dark:text-white flex-auto w-2/4
          h-2/3 float-right relative" style="top: -640px; left: -30px; width: 60%; height: 50%;">
              <h1>부서코드 연계정보</h1><br>
            <label class="p-1">증명서부서명<input v-model="deptDetaInfo.certDeptNm" type="text" class="mx-3 bg-gray-50 border border-gray-300 text-gray-900 w-24"/></label>
            <label class="p-1">주간학과코드<input v-model="deptDetaInfo.daytmSustCd" type="text" class="mx-3 bg-gray-50 border border-gray-300 text-gray-900 w-24"/></label>
            <label class="p-1">정보공시계열<select name="" v-model="deptDetaInfo.infoAnncPart" class="mx-3 bg-gray-50 border border-gray-300 text-gray-900 w-24">
              <option value=""></option>
              <option value="Y">기관</option>
              <option value="N">미기관</option></select></label><br>
            <label class="p-1">학사학위<select name="" v-model="deptDetaInfo.shafDegr" class="mx-3 bg-gray-50 border border-gray-300 text-gray-900 w-32">
              <option value=""></option>
              <option value="Y">학사</option>
              <option value="N">미학사</option></select></label>
            <label class="p-1">석사학위<select name="" v-model="deptDetaInfo.masterDegr" class="mx-3 bg-gray-50 border border-gray-300 text-gray-900 w-32">
              <option value=""></option>
              <option value="Y">석사</option>
              <option value="N">미석사</option></select></label>
            <label class="p-1">박사학위<select name="" v-model="deptDetaInfo.phdDegr" class="mx-3 bg-gray-50 border border-gray-300 text-gray-900 w-32">
              <option value=""></option>
              <option value="Y">박사</option>
              <option value="N">미박사</option></select></label><br>
            <label class="p-1">전공분류<select name="" v-model="deptDetaInfo.mjClsf" class="mx-3 bg-gray-50 border border-gray-300 text-gray-900 w-32">
              <option value=""></option>
              <option value="Y">전공</option>
              <option value="N">미전공</option></select></label>
            <label class="p-1">연계전공<input v-model="deptDetaInfo.connMj" type="text" class="mx-3 bg-gray-50 border border-gray-300 text-gray-900 w-32"/></label>
            <label class="p-1">업적계열<select name="" v-model="deptDetaInfo.achvPart" class="mx-3 bg-gray-50 border border-gray-300 text-gray-900 w-32">
              <option value=""></option>
              <option value="Y">업적</option>
              <option value="N">미업적</option></select></label><br>
            <label class="p-1">등록계열<input v-model="deptDetaInfo.regPart" type="text" class="mx-3 bg-gray-50 border border-gray-300 text-gray-900 w-32"/></label>
            <label class="p-1">졸업학위증출력명<input v-model="deptDetaInfo.grdtDegrIdcdPrnNm" type="text" class="mx-3 bg-gray-50 border border-gray-300 text-gray-900 w-24"/></label>
            <label class="p-1">수업년한<input v-model="deptDetaInfo.lsnYr" type="text" class="mx-3 bg-gray-50 border border-gray-300 text-gray-900 w-24"/></label><br>
            <label class="p-1">업적심사대학<select name="" v-model="deptDetaInfo.achvScrnUniv" class="mx-3 bg-gray-50 border border-gray-300 text-gray-900 w-32">
              <option value=""></option>
              <option value="Y">업적심사</option>
              <option value="N">미심사</option></select></label>
            <label class="p-1">대학원분류<select name="" v-model="deptDetaInfo.grscClsf" class="mx-3 bg-gray-50 border border-gray-300 text-gray-900 w-32">
              <option value=""></option>
              <option value="Y">분류</option>
              <option value="N">미분류</option></select></label>
            <label class="p-1">학부(과)<input v-model="deptDetaInfo.sustNm" type="text" class="mx-3 bg-gray-50 border border-gray-300 text-gray-900 w-24"/></label><br>
            <label class="p-1">그룹웨어부서연계여부<input v-model="deptDetaInfo.gwDeptConnYn" type="checkbox" class="mx-3 bg-gray-50 border border-gray-300 text-gray-900 w-8"/></label>
            <label class="p-1">교원그룹웨어부서코드<input v-model="deptDetaInfo.sprfGwDeptCd" type="text" class="mx-3 bg-gray-50 border border-gray-300 text-gray-900 w-24"/></label><br>
            <label class="p-1">직원그룹웨어부서코드<input v-model="deptDetaInfo.empGwDeptCd" type="check" class="mx-3 bg-gray-50 border border-gray-300 text-gray-900 w-24"/></label>
          </div>
          <div class="bg-white dark:bg-[#252731] h-32 p-6 rounded-lg shadow-md md:col-span-1  text-1xl font-semibold mb-4 text-gray-800 dark:text-white flex-auto w-2/4
          h-2/3 float-right relative" style="top: -640px; left: -30px; width: 60%; height: 50%;">
              <h1>부서이력목록&nbsp;&nbsp;<b class="text-sm font-light">* 부서가 통·폐합되거나 명칭 변경 등으로 신규 부서를 등록한 경우<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                이력 관리를 위해 부서 이력 목록을 등록해주십시오.</b><br>
              <strong class="float-right">총 : {{ subRowData.length }} 건</strong>
                <!-- 서브 그리드 공통 버튼 시작-->
                <div class="float-right">
                <ButtonTest @add-row="subGridAdd()" 
                          @delete-item="deleteItemMain"
                          @save-data="saveDataMain" 
                          @download-excel="downloadExcelMain" />
              </div>
              <!--
              <button type="button" @click="subGridSave()" class="float-right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5
              py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">저장</button>
              <button type="button" @click="subGridDel()" id="delGridBtn" class="float-right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5
              py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">삭제</button>
              <button type="button" @click="subGridAdd()" id="addGrid" class="float-right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5
              py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">추가</button> -->
            </h1><br><br><br>
            <ag-grid-vue
              :columnDefs="subColumnDefs"
              :rowData="subRowData"
              :gridOptions="gridOptions"
              style="width: 100%; height: 150px;"
           ></ag-grid-vue>
          </div>
       </div>
   </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { AllCommunityModule, ModuleRegistry, provideGlobalGridOptions } from 'ag-grid-community'; 
import { AgGridVue } from 'ag-grid-vue3' // Vue3 AgGrid Component
import LeftMenu from '@/components/LeftMenu.vue';
import { ref } from 'vue';
import ButtonTest from '@/components/ButtonTest.vue';
// import { TreeDataModule } from 'ag-grid-enterprise'; 
// ModuleRegistry.registerModules([ TreeDataModule ]); 
ModuleRegistry.registerModules([AllCommunityModule]);
provideGlobalGridOptions();

const mainGridAdd = () =>{
  const mainAddRow = {
     status : 'IN'
  }
  mainRowData.value.push(mainAddRow);
}

const subGridAdd = () =>{
  const subAddRow = {
    status : 'IN'
  }
  subRowData.value.push(subAddRow);
}

const gridOptions = {
  //treeData: true,
  //getDataPath: mainRowData.value.gridNm,
  // getDataPath: data => data.path,
  rowSelection: { 
      mode: 'multiRow',
      headerCheckbox: true
  },
}
const gridApi = ref();
const columnApi = ref();
const mainRowData = ref([]);
const mainColumnDefs = [
{ field: 'status', editable: false, headerName: '상태', hide: true, width: 100, cellRenderer: (params) => {
    if (params.value === 'DEL') {
      return '<img src="path_to_x_image.png" alt="삭제" />';
    } else if (params.value === 'UP') {
      return '<img src="path_to_u_image.png" alt="변경" />';
    } else if (params.value === 'IN') {
      return '<img src="path_to_n_image.png" alt="추가" />';
    }
    return '';  // 기본 값
  }},
{ field: 'gridNm', headerName: '부서이름(코드)', width: 200},
{ field: 'deptCd', headerName: '부서코드', width: 100 ,hide: true},
{ field: 'upDeptCd', headerName: '상위부서코드', width: 100 ,hide: true},
{ field: 'eptGrpFgCd', headerName: '부서그룹구분코드', width: 100 ,hide: true},
{ field: 'deptTypCd', headerName: '부서유형코드', width: 100 ,hide: true},
{ field: 'univCd', headerName: '대학코드', width: 100 ,hide: true},
{ field: 'psustCd', headerName: '학과코드', width: 100 ,hide: true},
{ field: 'deptNm', headerName: '부서이름', width: 100 ,hide: true},
{ field: 'deptAbbnm', headerName: '부서약명', width: 100 ,hide: true},
{ field: 'shafFormaYn', headerName: '학사조직여부', width: 100 ,hide: true},
{ field: 'danFg', headerName: '주야구분', width: 100 ,hide: true},
{ field: 'frDt', headerName: '시작일자', width: 100 ,hide: true},
{ field: 'blnDt', headerName: '폐지일자', width: 100 ,hide: true},
{ field: 'ablnExpcDt', headerName: '폐지예정일자', width: 100 ,hide: true},
{ field: 'prnOrd', headerName: '출력순서', width: 100 ,hide: true},
{ field: 'cyberFormaYn', headerName: '가상조직여부', width: 100 ,hide: true},
{ field: 'useYn', headerName: '사용여부', width: 100 ,hide: true},
{ field: 'flDeptYn', headerName: '최종부서여부', width: 100 ,hide: true},
{ field: 'remk', headerName: '메모', width: 100 ,hide: true},
{ field: 'campFgCd', headerName: '캠퍼스구분코드 ', width: 100 ,hide: true},
{ field: 'lastModfIpBreuFg', headerName: '', width: 100 ,hide: true},
{ field: 'formaTyp', headerName: '조직유형', width: 100 ,hide: true},
{ field: 'deptEngNm', headerName: '부서영어명', width: 100 ,hide: true},
{ field: 'deptEngAbbNm', headerName: '부서영어약어명', width: 100 ,hide: true},
{ field: 'deptChnNm', headerName: '부서중문명', width: 100 ,hide: true},
{ field: 'deptChnAbbNm', headerName: ' 부서중문약어명', width: 100 ,hide: true},
{ field: 'deptId', headerName: '부서아이디', width: 100 ,hide: true},
{ field: 'colgNm', headerName: '대학(처)', width: 100 ,hide: true},
{ field: 'sustTeamNm', headerName: '학부(팀)', width: 100 ,hide: true},
{ field: 'certDeptNm', headerName: '증명서부서명', width: 100 ,hide: true},
{ field: 'daytmSustCd', headerName: '주간 학과코드', width: 100 ,hide: true},
{ field: 'infoAnncPart', headerName: '정보공시계열', width: 100 ,hide: true},
{ field: 'shafDegr', headerName: '학사학위', width: 100 ,hide: true},
{ field: 'masterDegr', headerName: '석사학위', width: 100 ,hide: true},
{ field: 'phdDegr', headerName: '박사학위', width: 100 ,hide: true},
{ field: 'connMj', headerName: '연계전공', width: 100 ,hide: true},
{ field: 'achvPart', headerName: '업적계열', width: 100 ,hide: true},
{ field: 'phdDegrMjClsf', headerName: '', width: 100 ,hide: true},
{ field: 'connMjAchvPart', headerName: '', width: 100 ,hide: true},
{ field: 'regPart', headerName: '', width: 100 ,hide: true},
{ field: 'rdtDegrIdcdPrnNm', headerName: '졸업학위증출력명', width: 100 ,hide: true},
{ field: 'achvScrnUniv', headerName: '업적심사대학', width: 100 ,hide: true},
{ field: 'grscClsf', headerName: '대학원분류', width: 100 ,hide: true},
{ field: 'sustNm', headerName: '학부(과)', width: 100 ,hide: true},
{ field: 'gwDeptConnYn', headerName: '그룹웨어부서연계여부', width: 100 ,hide: true},
{ field: 'sprfGwDeptCd', headerName: '교원그룹부서연계코드', width: 100 ,hide: true},
{ field: 'empGwDeptCd', headerName: '직원그룹웨어부서연계코드', width: 100 ,hide: true},
{ field: 'deptSortSeq', headerName: '부서정렬순서', width: 100 ,hide: true},
{ field: 'subChancMissCd', headerName: '부총장보직코드', width: 100 ,hide: true},
{ field: 'breuFg', headerName: '기관구분', width: 100 ,hide: true},
{ field: 'mjClsf', headerName: '전공분류', width: 100 ,hide: true},

];

const subRowData = ref([]);
const subColumnDefs = [
{ field: 'status', editable: false, headerName: '상태', width: 100, cellRenderer: (params) => {
    if (params.value === 'DEL') {
      return '<img src="path_to_x_image.png" alt="삭제" />';
    } else if (params.value === 'UP') {
      return '<img src="path_to_u_image.png" alt="변경" />';
    } else if (params.value === 'IN') {
      return '<img src="path_to_n_image.png" alt="추가" />';
    }
    return '';  // 기본 값
  }},
{ field: 'subRowNum ', headerName: '순번', valueGetter: 'node.rowIndex + 1', cellEditorParams: { min: 0, max: 100 }, cellStyle: {textAlign: "center"}, width: 100,},
{ field: 'bfDeptCd', headerName: '이전부서', width: 100},
{ field: 'afDeptCd', headerName: '이후부서', width: 100},
{ field: 'remk', headerName: '비고', width: 200},


];

let deptDetaInfo = ref({
    gridNm: '',
    deptCd: '',
    upDeptCd: '',
    eptGrpFgCd: '',
    deptTypCd: '',
    univCd: '',
    psustCd: '',
    deptNm: '',
    deptAbbnm: '',
    shafFormaYn: '',
    danFg: '',
    frDt: '',
    blnDt: '',
    ablnExpcDt: '',
    prnOrd: '',
    cyberFormaYn: '',
    useYn: '',
    flDeptYn: '',
    remk: '',
    campFgCd: '',
    lastModfIpBreuFg: '',
    formaTyp: '',
    deptEngNm: '',
    deptEngAbbNm: '',
    deptChnNm: '',
    deptChnAbbNm: '',
    deptId: '',
    colgNm: '',
    sustTeamNm: '',
    certDeptNm: '',
    daytmSustCd: '',
    infoAnncPart: '',
    shafDegr: '',
    masterDegr: '',
    phdDegr: '',
    connMj: '',
    achvPart: '',
    phdDegrMjClsf: '',
    connMjAchvPart: '',
    regPart: '',
    rdtDegrIdcdPrnNm: '',
    achvScrnUniv: '',
    grscClsf: '',
    sustNm: '',
    gwDeptConnYn: '',
    sprfGwDeptCd: '',
    empGwDeptCd: '',
    deptSortSeq: '',
    subChancMissCd: '',
    breuFg: '',
    mjClsf: ''
})

const onGridReady = params => {
  gridApi.value = params.api;
  columnApi.value = params.columnApi;
  console.log('gridApi : ', gridApi.value);
  console.log('columnApi : ' + columnApi.value);

}

const onCellClicked = params => {
  console.log('cell click : ', params.data);
  deptDetaInfo.value = params.data;
}

let param = ref({
  deptNm : '' ,
  deptCd : '' ,
  deptId : '' ,
  useYn : '' ,
  breuFg : '' ,
  flDeptYn : '' ,
  shafFormaYn : ''
});

const search = () => {
  mainGridCall(param);
}

const mainGridCall = param => {
  
  console.log('param : ', param);

  const obj = Object.assign({}, param.value);
  console.log('obj : ', obj);

  axios
  .post("/restApi/prj/com/deptCdMngList.do", obj)
  .then((restApi) => {
    console.log('restApi : ', restApi);
    if(restApi.status === 200){
        mainRowData.value = restApi.data.deptList;
        subRowData.value = restApi.data.deptHistList;
        console.log(mainRowData.value)
    }
    
    
  })
  .catch((error) => {
    console.log('mainGrid load error', error);
  })
  
}
mainGridCall(param);
</script>

<style lang="scss" scoped>

</style>