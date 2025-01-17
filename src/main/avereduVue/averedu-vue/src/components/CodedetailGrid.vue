<template>
  <h2 class="text-1xl font-semibold mb-4 text-gray-800 dark:text-white">상세 공통코드
  <button class="float-right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5
  py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" @click="checkDetailCodeDelete()" >체크 삭제</button>
  <button class="float-right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5
  py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" @click="detailAdd()" >추가</button>
  </h2><br>
  <ag-grid-vue
    :columnDefs="codedetailColumnDefs"
    :rowData="codedetaildatas"
    :gridOptions="gridOptions"
    @grid-ready="onGridReady"
    @grid-SizeChanged="resize"
    style="height: 300px;">
  </ag-grid-vue>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { AllCommunityModule, ModuleRegistry, provideGlobalGridOptions } from 'ag-grid-community';
import { AgGridVue } from 'ag-grid-vue3' // Vue3 AgGrid Component
ModuleRegistry.registerModules([AllCommunityModule]);
provideGlobalGridOptions();
let codedetaildatas = ref([]);
let CMMN_CD = ref("");
let gridApi = null;
let columnApi = null;
let codedetailColumnDefs = [
  {field: 'CMMN_DETA_CD', headerName:'상세코드'},
  {field: 'CMMN_DETA_CD_NM', headerName:'상세코드명'},
  {field: 'CMMN_DETA_CD_ABBNM', headerName:'상세코드약명'},
  {field: 'SORT_SEQ', headerName:'정렬순번'},
  {field: 'LANG_FG_CD', headerName:'언어구분코드'},
  {field: 'LANG_FG_NM', headerName:'언어코드명'},
  {field: 'LANG_ABBNM', headerName:'언어코드약명'},
  {field: 'USE_YN', headerName:'사용여부'},
  {field: 'REMK_CTNT', headerName:'비고내역'}
];

const gridOptions = {
  rowSelection: { 
      mode: 'multiRow',
      headerCheckbox: true,
      checkboxSelection:true
  },
  defaultColDef: {
  editable: true, // 셀 수정 가능
},
}

const onGridReady= (params) => {
      gridApi = params.api;
      columnApi = params.columnApi;
  }
const resize = ()=>{
  gridApi.sizeColumnsToFit();
}
const detailCodeList=(cmmnCd)=>{
  axios.post('/restApi/com/RetrieveCommCodeDetailList.do',{CMMN_CD:cmmnCd}).then(res =>{
    codedetaildatas.value = res.data;
    CMMN_CD.value = cmmnCd;
  }).catch(res=>{
    console.log(res);
  })
}
const checkDetailCodeDelete=()=>{
  const selectedData = gridApi.getSelectedRows();
  axios.delete('/restApi/com/DeleteCommCodeDetailList.do',{data:selectedData}).then(res =>{
    checkedCodes = [];
    detailCodeList(CMMN_CD.value)
    
  }).catch(res=>{
    console.log(res);
  })
}
const detailAdd=()=>{
  if(CMMN_CD==null|| CMMN_CD==""){
    return;
  }
  
  if(codedetaildatas.length>0&&codedetaildatas[codedetaildatas.length-1].newYn=='Y'){
    alert('한번에 하나씩 추가 가능합니다');
    return;
  }

  codedetaildatas.push({
    CMMN_CD:CMMN_CD,
    CMMN_DETA_CD:"",
    CMMN_DETA_CD_NM:"",
    CMMN_DETA_CD_ABBNM:"",
    USE_YN : 1,
    LANG_FG_CD:"",
    LANG_FG_NM:"",
    LANG_ABBNM:"",
    REMK_CTNT:"",
    newYn:'Y'})
}

defineExpose({
  detailCodeList
});
</script>

<style>
body{
  margin: 0;
}
.black-bg{
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding:20px;
}
.white-bg{
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
</style>