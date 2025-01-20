<template>
  <div class="flex h-screen w-full bg-gray-100 dark:bg-[#1E2028]">
  <LeftMenu></LeftMenu>
    <!-- Main Content -->
    <div class="flex-1 overflow-y-auto">
       <div class="p-6">
           <h2 class="text-1xl font-semibold mb-4 text-gray-800 dark:text-white">부서코드연계속성정보</h2>
           <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
             
               <div class="bg-white dark:bg-[#252731] h-32 p-6 rounded-lg shadow-md md:col-span-1 ">
                  
                   <label class="p-1">부서연계속성명<input @keyup.enter="search()" v-model="param.deptConnAttrNm" type="text" class="mx-3 bg-gray-50 border border-gray-300 text-gray-900"/></label>
                   <label class="p-1">부서명<input @keyup.enter="search()" v-model="param.deptNm" type="text" class="mx-3 bg-gray-50 border border-gray-300 text-gray-900"/></label>
                   <label class="p-1">부서코드<input @keyup.enter="search()" v-model="param.deptCd" class="mx-3 bg-gray-50 border border-gray-300 text-gray-900"/></label>
                   <label class="p-1">
                       사용여부
                       <select @change="search()" v-model="param.useYn" class="mx-3 p-1 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500">
                           <option selected></option>
                           <option value="Y">사용</option>
                           <option value="N">미사용</option>
                       </select></label><br>
                   <label class="p-1">기관여부
                       <select @change="search()" v-model="param.breuYn" class="mx-3 p-1 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500">
                           <option selected></option>
                           <option value="Y">사용</option>
                           <option value="N">미사용</option>
                       </select></label>
                   <label class="p-1">조직유형
                       <select @change="search()" v-model="param.formaTyp" class="mx-3 p-1 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500">
                           <option selected></option>
                           <option value="Y">사용</option>
                           <option value="N">미사용</option>
                       </select></label>
                       <button @click="search()" id="searchBtn" type="button" class="float-right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5
                        py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">조회</button>
               </div>
           </div><br>
           <div>
            <h2 class="text-1xl font-semibold mb-4 text-gray-800 dark:text-white">부서코드 연계속성 정보 
              <span class="text-red-400">* 부서코드 연계속성 정보 삭제 시 해당 정보의 연계속성 값이 같이 삭제됩니다.</span>
              <strong class="float-right">총 : {{ mainRowData.length }} 건</strong>
                <button type="button" class="float-right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5
                py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">엑셀</button>
                <button type="button" class="float-right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5
                py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">저장</button>
                <button type="button" @click="mainGridDel()" id="delGridBtn" class="float-right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5
                py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">삭제</button>
                <button type="button" @click="mainGridAdd()" id="addGrid" class="float-right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5
                py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">추가</button>
            </h2><br>
            </div>
             <ag-grid-vue
                :columnDefs="mainColumnDefs"
                :rowData="mainRowData"
                :gridOptions="gridOptions"
                @cell-clicked="onCellClicked"
                @grid-ready="onGridReady"
                style="height: 300px;">
             </ag-grid-vue><br>
             <h2 class="text-1xl font-semibold mb-4 text-gray-800 dark:text-white">부서코드 연계속성 값
              <strong class="float-right">총 : {{ subRowData.length }} 건</strong>
              <button type="button" class="float-right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5
                py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">엑셀</button>
                <button type="button" class="float-right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5
                py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">저장</button>
             </h2><br>
             <ag-grid-vue
                :columnDefs="subColumnDefs"
                :rowData="subRowData"
                style="height: 300px;">
             </ag-grid-vue>
       </div>
   </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

import { AllCommunityModule, ModuleRegistry, provideGlobalGridOptions } from 'ag-grid-community';
import { AgGridVue } from 'ag-grid-vue3' // Vue3 AgGrid Component
import LeftMenu from '@/components/LeftMenu.vue';
ModuleRegistry.registerModules([AllCommunityModule]);
provideGlobalGridOptions();

const gridOptions = {
    rowSelection: { 
        mode: 'multiRow',
        headerCheckbox: true
    },
    defaultColDef: { headerClass: "centered", cellClass: "centered" },

   
}
const onCellClicked = params => {
    // console.log('cell click : ', params.data);
    console.log('cell click : ', params.data.bfDeptCd);
    subGridCall(params.data.bfDeptCd);
}
const grid = ref();
const mainRowData = ref([]);
const mainColumnDefs = [
  { field: '', headerName: '상태', width: 100, cellStyle: {textAlign: "center"}},
  { field: 'mainRowNum', headerName: "순번", valueGetter: 'node.rowIndex + 1', cellEditorParams: { min: 0, max: 100 }, cellStyle: {textAlign: "center"}, width: 100,},
  { field: 'deptConnAttrCd', headerName: '부서연계 속성코드' , width: 300, cellStyle: {textAlign: "center"}}, 
  { /*field: 'cmmnCdYn',*/ headerName: '공통코드 여부', width: 150, checkboxSelection: true, cellStyle: {textAlign: "center"}},
  { field: 'deptConnAttrNm', headerName: '부서연계 속성명', width: 200},
  { field: 'mngDept', headerName: '관리부서', width: 150},
  { field: 'sortSeq', headerName: '정렬순서', width: 150, cellStyle: {textAlign: "center"}},
  { field: 'remk', headerName: '비고', width: 150},
  { field: 'bfDeptCd', headerName: '부서코드', width: 200}
];

const subRowData = ref([]);
const subColumnDefs = [
    { field: 'cmmnCdYn', headerName: '상태', width: 100},
    { field: 'subRowNum', headerName: '순번', valueGetter: 'node.rowIndex + 1', cellEditorParams: { min: 0, max: 100 }, cellStyle: {textAlign: "center"}, width: 100,},
    { field: 'bfDeptCd', headerName: '부서코드', width: 250},
    { field: 'deptNm', headerName: '부서명', width: 250},
    { field: 'useYn', headerName: '사용여부', width: 100},
    { field: 'salyAcnt', headerName: '급여회계매핑', width: 250},
    { field: 'afDeptCd', headerName: '부서연계 속성코드', width: 400},
];

const onGridReady = params => {
    console.log('onGridReady : ', params.api);
    grid.value = params.api;
}

const mainGridAdd = () => {
    console.log('addGrid');
    mainRowData.value.push({});
}

const mainGridDel = () => {
    const delRow = JSON.parse(JSON.stringify(grid.value.getSelectedRows()));
    console.log('delRow :', delRow);
    
    axios
    .post("/restApi/prj/com/deptCdConnAttrInfoDel.do", delRow)
    .then((restApi) => {
      if(restApi.data){
        alert('삭제 완료');
        mainGridCall(param);
      }else{
        alert('삭제 실패');
        mainGridCall(param);
      }
    })
    .catch((error) => {
      console.log('error', error);
      alert('오류 발생');
      mainGridCall(param);
    })

}

let param = ref({
   deptConnAttrNm : '',
   deptCd : '',
   deptNm : '',
   useYn : '',
   breuYn : '',
   formaTyp : '' 
}); 

const search = () => {
    mainGridCall(param);
}

const mainGridCall = param => {

    console.log('param : ', param);
    const obj = Object.assign({}, param.value);
    console.log('obj : ', obj);

    axios
    .post("/restApi/prj/com/deptCdConnAttrInfoList.do", obj)
    .then((restApi) => {
      console.log('mainRowData : ', restApi);
      if(restApi.status === 200){
        mainRowData.value = restApi.data;
      }else{
        alert('mainGrid load error');
      }
      
    })
    .catch((error) => {
      console.log('mainGrid load error', error);
    })
}

const subGridCall = bfDeptCd => {
    console.log('subGridCall.bfDeptCd : ' + bfDeptCd)
   
    axios
    .post("/restApi/prj/com/deptCdConnAttrValList.do", bfDeptCd)
    .then((restApi) => {
      console.log('subGridCall : ', restApi);
      if(restApi.status === 200){
        subRowData.value = restApi.data;
      }else{
        alert('subGrid load error');
      }
      
    })
    .catch((error) => {
      console.log('subGrid load error', error);
    })
}

mainGridCall(param);
</script>

<style lang="scss" scoped>
.ag-header-group-cell-label {
  justify-content: center;
}
</style>