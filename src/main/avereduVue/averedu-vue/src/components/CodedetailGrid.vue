<template>
  <div class="mt-4 bg-white dark:bg-[#252731] p-6 rounded-lg shadow-md md:col-span-1 whitespace-nowrap overflow-x-auto relative">
    <h2 class="text-xl font-semibold leading-tight text-gray-700">상세공통코드리스트</h2>
    <div class="absolute top-0 right-0 z-10">
      <ButtonTest @add-row="addRowToGridMain" 
                  @delete-item="deleteItemMain"
                  @save-data="detailCodeList" 
                  @download-excel="downloadExcelMain" 
                  
                  :addUrl="addUrl" 
                  :deleteUrl="deleteUrlMain" 
                  :dataToSave = "dataToSaveMain"
                  :saveUrl="saveUrlMain" 
                  :downloadUrl="downloadUrlMain" />
    </div>
  
  <ag-grid-vue
    :columnDefs="codedetailColumnDefs"
    :rowData="codedetaildatas"
    :gridOptions="gridOptions"
    @grid-ready="onGridReady"
    @cell-EditingStarted="editEvent"
    @rowDataUpdated="rowdataUpdate"
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
let selectData = ref([]);

let gridApi = null;
let columnApi = null;

const dataToSaveMain = ref();

const searchUrl = '/restApi/com/RetrieveCommCodeDetailList.do'; // 조회 URL
const deleteUrlMain = '/restApi/com/DeleteCommCodeDetailList.do'; // 삭제 URL
const saveUrlMain = '/restApi/com/SaveCommCodeDetailList.do'; // 저장 URL
const downloadUrlMain = '/api/downloadExcel'; // 엑셀 다운로드 URL
let codedetailColumnDefs = [
{field: 'CMMN_CD', headerName:'공통코드', hide:true},
{ field: 'status', headerName: '상태', width: 100, cellRenderer: (params) => {
    if (params.value === 'D') {
      return '<img src="path_to_x_image.png" alt="삭제" />';
    } else if (params.value === 'U') {
      return '<img src="path_to_u_image.png" alt="변경" />';
    } else if (params.value === 'N') {
      return '<img src="path_to_n_image.png" alt="추가" />';
    }
    return '';  // 기본 값
  }},
  {field: 'CMMN_DETA_CD',cellStyle: {textAlign: "right"}, headerName:'상세코드'},
  {field: 'CMMN_DETA_CD_NM',cellStyle: {textAlign: "right"}, headerName:'상세코드명'},
  {field: 'CMMN_DETA_CD_ABBNM',cellStyle: {textAlign: "right"}, headerName:'상세코드약명'},
  {field: 'SORT_SEQ',cellStyle: {textAlign: "center"}, headerName:'정렬순번'},
  {field: 'LANG_FG_CD',cellStyle: {textAlign: "right"}, headerName:'언어구분코드'},
  {field: 'LANG_FG_NM',cellStyle: {textAlign: "right"}, headerName:'언어코드명'},
  {field: 'LANG_ABBNM',cellStyle: {textAlign: "right"}, headerName:'언어코드약명'},
  {field: 'USE_YN',cellStyle: {textAlign: "center"}, headerName:'사용여부', cellEditor: "agSelectCellEditor",cellEditorParams: {values: ['Y', 'N']}, cellRenderer: (params) => {
    if (params.value === '0') {
      return 'N';
    } else if (params.value === '1') {
      return 'Y';
    } 
    return params.value;  // 기본 값
  }},
  {field: 'REMK_CTNT',cellStyle: {textAlign: "right"}, headerName:'비고내역'}
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
      dataToSaveMain.value = gridApi;
  }

const addRowToGridMain = () => {
  if(CMMN_CD.value!=""){
    const newRow = { id: Date.now(), status: 'N',CMMN_CD: CMMN_CD.value  };
    let rowData = [];
    gridApi.forEachNode(node => {
      rowData.push(node.data)
        if(node.__selected){
          selectData.value.push(node.rowIndex+1)
          }
        }
    );
    codedetaildatas.value = rowData;
    codedetaildatas.value.unshift(newRow);
  }

};

//row의 값이 업데이트될때 기존 체크값 유지
const rowdataUpdate = () => {
 if(selectData.value.length>0){
  selectData.value.forEach(index=>{
    gridApi.getDisplayedRowAtIndex(index).setSelected(true); 
  })
 }
 selectData.value = [];
};
const detailCodeList=(cmmnCd)=>{
  let codeData = "";
  if(cmmnCd != null && cmmnCd !=""){
    codeData = cmmnCd;
    CMMN_CD.value = cmmnCd;
  }else{
    codeData = CMMN_CD.value;
  }
  axios.post('/restApi/com/RetrieveCommCodeDetailList.do',{CMMN_CD:codeData}).then(res =>{
    codedetaildatas.value = res.data;
    CMMN_CD.value = cmmnCd;
  }).catch(res=>{
    console.log(res);
  })
}

// const deleteItemMain = () => {
//   const selectedRows = gridApi.getSelectedNodes();
//   selectedRows.forEach(row => {
//     if(row.data.status != 'D'&& row.data.status != 'N' && row.data.status != 'U'){
//         row.data.status = 'D'
//       }
//       gridApi.startEditingCell({
//           rowIndex:row.rowIndex,
//           colKey:'status',
//         })
   
//   })
//   gridApi.stopEditing();
  
// }

const editEvent = params =>{
      let index  = gridApi.getFocusedCell(); 
      if(params.data.status != 'D'&& params.data.status != 'N' && params.data.status != 'U'){
         params.data.status = 'U'
      }
     
      gridApi.getDisplayedRowAtIndex(index.rowIndex).setSelected(true); 
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