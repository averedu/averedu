<template>
  <div class="mt-4 bg-white dark:bg-[#252731] p-6 rounded-lg shadow-md md:col-span-1 whitespace-nowrap overflow-x-auto relative">
    <h2 class="text-xl font-semibold leading-tight text-gray-700">상세공통코드리스트</h2>
    <div class="absolute top-0 right-0 z-10">
      <ButtonTest @add-row="addRowToGridMain" 
                  @delete-item="deleteItemMain"
                  @save-data="saveDataMain" 
                  @download-excel="downloadExcelMain" 
                  :addUrl="addUrl" 
                  :deleteUrl="deleteUrlMain" 
                  :test = "gridApi"
                  :saveUrl="saveUrlMain" 
                  :downloadUrl="downloadUrlMain" />
    </div>
  
  <ag-grid-vue
    :columnDefs="codedetailColumnDefs"
    :rowData="codedetaildatas"
    :gridOptions="gridOptions"
    @grid-ready="onGridReady"
    @cell-EditingStarted="edtiEvent"
    style="height: 300px; padding-top: 40px;">
  </ag-grid-vue>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import ButtonTest from '../components/ButtonTest.vue';
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

const addRowToGridMain = () => {
  if(CMMN_CD.value!=""){
    const newRow = { id: Date.now(), status: 'N' };
    codedetaildatas.value.push(newRow);
  }

};
const saveCodeDetail = () => {
      const selectedData = gridApi.getSelectedRows();
      console.log(selectedData);
      axios.put('/restApi/com/SaveCommCodeDetailList.do',selectedData)
      .then(res =>{
        if(res.status == 200){
          alert('정상적으로 수정되었습니다');
          detailCodeList(CMMN_CD.value)
        }
      }).catch(res=>{
        console.log(res);
      })

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
  console.log(selectedData);
  axios.delete('/restApi/com/DeleteCommCodeDetailList.do',{data:selectedData}).then(res =>{
    checkedCodes = [];
    detailCodeList(CMMN_CD.value)
    
  }).catch(res=>{
    console.log(res);
  })
}
const detailAdd=()=>{
console.log(CMMN_CD.value);
  codedetaildatas.value.push({
    CMMN_CD:CMMN_CD.value,
    newYn:'Y'})
}

defineExpose({
  detailCodeList
});

const edtiEvent = params =>{
      let index  = gridApi .getFocusedCell(); 
      gridApi.getDisplayedRowAtIndex(index.rowIndex).setSelected(true); 
    }
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