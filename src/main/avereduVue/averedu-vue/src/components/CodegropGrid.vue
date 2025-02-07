<template>
  <div class="mt-4 bg-white p-6 rounded-lg md:col-span-1 whitespace-nowrap overflow-x-auto relative">
  <h2 class="text-1xl font-semibold mb-4 text-gray-800 dark:text-white">그룹코드리스트</h2>
  <div class="absolute top-0 right-0 z-10">
    <ButtonTest @add-row="addRowToGridMain" 
                    @delete-item="deleteItemMain"
                    @save-data="grpCodeList" 
                    @download-excel="downloadExcelMain" 
                    :addUrl="addUrl" 
                    :deleteUrl="deleteUrlMain" 
                    :dataToSave = "dataToSaveMain"
                    :saveUrl="saveUrlMain" 
                    :downloadUrl="downloadUrlMain" />
  </div>  
    <ag-grid-vue
    :columnDefs="grpcolumnDefs"
    :rowData="grpcodedatas"
    :gridOptions="gridOptions"
    @grid-ready="onGrpGridReady"
    @cell-EditingStarted="edtiGrpEvent"
    @cell-clicked="onCellClicked"
    @rowDataUpdated="rowdataUpdateMain"
    style="height: 300px; width: 100%;">
  </ag-grid-vue>
</div>
<div class="mt-4 bg-white p-6 rounded-lg md:col-span-1 whitespace-nowrap overflow-x-auto relative">
  <h2 class="text-1xl font-semibold mb-4 text-gray-800 dark:text-white">그룹상세코드리스트</h2>
    <div class="absolute top-0 right-0 z-10">
      <ButtonTest @add-row="addRowToGridSub" 
                  @delete-item="deleteItemSub"
                  @save-data="grpDetailCodeList" 
                  @download-excel="downloadExcelSub" 
                  :addUrl="addUrl" 
                  :deleteUrl="deleteUrlSub" 
                  :dataToSave = "dataToSaveSub"
                  :saveUrl="saveUrlSub" 
                  :downloadUrl="downloadUrlSub" />
    </div>
  <ag-grid-vue
    :columnDefs="grpdetailcolumnDefs"
    :rowData="grpdetailcodedatas"
    :gridOptions="gridOptions"
    @grid-ready="onGrpDetailGridReady"
    @cell-EditingStarted="edtiGrpDetailEvent"
    @rowDataUpdated="rowdataUpdateSub"
    style="height: 300px;  width: 100%;">
  </ag-grid-vue>
</div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { AllCommunityModule, ModuleRegistry, provideGlobalGridOptions } from 'ag-grid-community';
import { AgGridVue } from 'ag-grid-vue3' // Vue3 AgGrid Component
import ButtonTest from '../components/ButtonTest.vue';

ModuleRegistry.registerModules([AllCommunityModule]);
provideGlobalGridOptions();
let grpcodedatas = ref([]);
let grpdetailcodedatas = ref([]);

const searchUrl = ''; // 조회 URL
const deleteUrlMain = '/restApi/com/DeleteGrpCodeList.do'; // 삭제 URL
const saveUrlMain = '/restApi/com/SaveGrpCodeList.do'; // 저장 URL
const downloadUrlMain = '/api/downloadExcel'; // 엑셀 다운로드 URL

const deleteUrlSub = '/restApi/com/DeleteGrpCodeDetailList.do'; // 삭제 URL
const saveUrlSub = '/restApi/com/SaveGrpCodeDetailList.do'; // 저장 URL
const downloadUrlSub = '/api/downloadExcel'; // 엑셀 다운로드 URL

const dataToSaveMain = ref();
const dataToSaveSub = ref();

let grpcolumnDefs = [
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
  {field: 'CMMN_GRP_CD', cellStyle: {textAlign: "right"},  headerName:'공통그룹코드'},
  {field: 'CMMN_GRP_CD_NM',cellStyle: {textAlign: "right"}, headerName:'공통그룹코드명'},
  {field: 'ADD_ATT_VAL',cellStyle: {textAlign: "right"}, headerName:'추가속성값',},
  {field: 'REMK_WPC',cellStyle: {textAlign: "right"}, headerName:'비고내역'}

];
let grpdetailcolumnDefs = [
{field: 'CMMN_GRP_CD', headerName:'공통그룹코드', hide:true},
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
  {field: 'CMMN_GRP_DETA_CD',cellStyle: {textAlign: "right"}, headerName:'공통세부코드'},
  {field: 'ADD_ATT_VAL',cellStyle: {textAlign: "right"}, headerName:'추가속성값'},
  {field: 'SORT_SEQ',cellStyle: {textAlign: "center"}, headerName:'정렬순번'},
  {field: 'USE_YN',cellStyle: {textAlign: "center"}, headerName:'사용여부',  cellEditor: "agSelectCellEditor",cellEditorParams: {values: ['Y', 'N']}, cellRenderer: (params) => {
    if (params.value === '0') {
      return 'N';
    } else if (params.value === '1') {
      return 'Y';
    } 
    return params.value;  // 기본 값
  }},
  {field: 'REMK_WPC',cellStyle: {textAlign: "right"}, headerName:'비고내역'}
];

let grpGridApi = null;
let grpColumnApi = null;
let grpDetailGridApi = null;
let grpDetailColumnApi = null;
const onGrpGridReady= (params) => {
  grpGridApi = params.api;
  grpColumnApi = params.columnApi;
  dataToSaveMain.value = grpGridApi;
  }

const onGrpDetailGridReady= (params) => {
  grpDetailGridApi = params.api;
  grpDetailColumnApi = params.columnApi;
  dataToSaveSub.value = grpDetailGridApi;
}

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
let checkedGrpCd = ref([]);
let checkedGrpDetailCd = ref([]);
let selectData = ref([]);
let CMMN_CD = ref("");
let CMMN_GRP_CD = ref("");

let  param = ref({
  CMMN_CD : ""        
}); 

const grpCodeList = (cmmnCd)=>{
  if(cmmnCd != null && cmmnCd !=""){
    param.value.CMMN_CD = cmmnCd;
    CMMN_CD.value = cmmnCd;
  }else{
    param.value.CMMN_CD = CMMN_CD.value;
  }
  
    axios.post('/restApi/com/RetrieveGrpCodeList.do',param.value).then(res =>{
    grpcodedatas.value = res.data;
}).catch(res=>{
  console.log(res);
})
}
const grpDetailCodeList = (cmmnGrpCd)=>{
  let codeData = "";
  if(cmmnGrpCd != null && cmmnGrpCd !=""){
    codeData = cmmnGrpCd;
    CMMN_GRP_CD.value = cmmnGrpCd;
  }else{
    codeData = CMMN_GRP_CD.value;
  }
    axios.post('/restApi/com/RetrieveGrpDetailCodeList.do',{CMMN_CD:CMMN_CD.value,CMMN_GRP_CD:codeData}).then(res =>{
    grpdetailcodedatas.value = res.data;
}).catch(res=>{
  console.log(res);
})
}

const addRowToGridMain = () => {
  if(CMMN_CD.value!=""){
    const newRow = { id: Date.now(),
    CMMN_CD:CMMN_CD.value,
    CMMN_GRP_CD:"",
    CMMN_GRP_CD_NM:"",
    ADD_ATT_VAL:"",
    REMK_WPC:"",
    status:'N'};
    let rowData = [];
    grpGridApi.forEachNode(node => {
      rowData.push(node.data)
        if(node.__selected){
          selectData.value.push(node.rowIndex+1)
          }
        }
    );
    grpcodedatas.value = rowData;
    grpcodedatas.value.unshift(newRow);
  }

};
const addRowToGridSub = () => {
  if(CMMN_GRP_CD.value!=""){
    const newRow = { id: Date.now(),
    CMMN_CD:CMMN_CD.value,
    CMMN_GRP_CD:CMMN_GRP_CD.value,
    CMMN_GRP_DETA_CD:"",
    ADD_ATT_VAL:"",
    SORT_SEQ:"",
    USE_YN:"",
    REMK_WPC:"",
    status:'N'  };
    let rowData = [];
    console.log(selectData.value);
    grpDetailGridApi.forEachNode(node => {
      rowData.push(node.data)
        if(node.__selected){
          selectData.value.push(node.rowIndex+1)
          }
        }
    );
    grpdetailcodedatas.value = rowData;
    grpdetailcodedatas.value.unshift(newRow);
  }

};

//row의 값이 업데이트될때 기존 체크값 유지
const rowdataUpdateMain = () => {
  console.log("main:"+selectData.value)
 if(selectData.value.length>0){
  selectData.value.forEach(index=>{
    grpGridApi.getDisplayedRowAtIndex(index).setSelected(true); 
  })
 }
 selectData.value = [];
};

//row의 값이 업데이트될때 기존 체크값 유지
const rowdataUpdateSub = () => {
  console.log("Sub:"+selectData.value)
 if(selectData.value.length>0){
  selectData.value.forEach(index=>{
    grpDetailGridApi.getDisplayedRowAtIndex(index).setSelected(true); 
  })
 }
 selectData.value = [];
};

const onCellClicked = params => {
  // console.log('cell click : ', params.data);
  grpDetailCodeList(params.data.CMMN_GRP_CD);
  }

defineExpose({
  grpDetailCodeList,
  grpCodeList
});
const edtiGrpEvent = params =>{
      let index  = grpGridApi .getFocusedCell(); 
    if(params.data.status != 'D'&& params.data.status != 'N' && params.data.status != 'U'){
        params.data.status = 'U'
    }
      grpGridApi.getDisplayedRowAtIndex(index.rowIndex).setSelected(true); 
    }
const edtiGrpDetailEvent = params =>{
  let index  = grpDetailGridApi .getFocusedCell(); 
  if(params.data.status != 'D'&& params.data.status != 'N' && params.data.status != 'U'){
         params.data.status = 'U'
      }
  grpDetailGridApi.getDisplayedRowAtIndex(index.rowIndex).setSelected(true); 
}
</script>

<style lang="scss" scoped>

</style>