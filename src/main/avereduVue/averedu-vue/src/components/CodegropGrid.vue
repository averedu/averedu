<template>
  <h2 class="text-1xl font-semibold mb-4 text-gray-800 dark:text-white">그룹코드리스트
  <button class="float-right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5
  py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" @click="checkGrpCodeDelete()">체크 삭제</button>
  <button class="float-right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5
  py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" @click="grpCodeAdd()">추가</button>
  <button class="float-right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5
  py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" @click="grpCodeUpdate">저장</button>
  </h2><br>
  <div>
    <ag-grid-vue
    :columnDefs="grpcolumnDefs"
    :rowData="grpcodedatas"
    :gridOptions="gridOptions"
    @grid-ready="onGrpGridReady"
    @cell-EditingStarted="edtiGrpEvent"
    @cell-clicked="onCellClicked"
    @grid-SizeChanged="resize"
    style="height: 300px; width: 100%;">
  </ag-grid-vue>
</div>
<div>
  <h2 class="text-1xl font-semibold mb-4 text-gray-800 dark:text-white">그룹상세코드리스트
  <button class="float-right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5
  py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" @click="checkGrpDetailCodeDelete()">체크 삭제</button>
  <button class="float-right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5
  py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"  @click="grpDetailCodeAdd()">추가</button>
  <button class="float-right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5
  py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" @click="grpDetailCodeUpdate">저장</button>
  </h2><br>
  <ag-grid-vue
    :columnDefs="grpdetailcolumnDefs"
    :rowData="grpdetailcodedatas"
    :gridOptions="gridOptions"
    @grid-ready="onGrpDetailGridReady"
     @cell-EditingStarted="edtiGrpDetailEvent"
    @grid-SizeChanged="resize"
    style="height: 300px;  width: 100%;">
  </ag-grid-vue>
</div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { AllCommunityModule, ModuleRegistry, provideGlobalGridOptions } from 'ag-grid-community';
import { AgGridVue } from 'ag-grid-vue3' // Vue3 AgGrid Component
ModuleRegistry.registerModules([AllCommunityModule]);
provideGlobalGridOptions();
let grpcodedatas = ref([]);
let grpdetailcodedatas = ref([]);
let grpcolumnDefs = [
  {field: 'CMMN_GRP_CD', headerName:'공통그룹코드'},
  {field: 'CMMN_GRP_CD_NM', headerName:'공통그룹코드명'},
  {field: 'ADD_ATT_VAL', headerName:'추가속성값',},
  {field: 'REMK_WPC', headerName:'비고내역'}

];
let grpdetailcolumnDefs = [
  {field: 'CMMN_GRP_DETA_CD', headerName:'공통세부코드'},
  {field: 'ADD_ATT_VAL', headerName:'추가속성값'},
  {field: 'SORT_SEQ', headerName:'정렬순번'},
  {field: 'USE_YN', headerName:'사용여부'},
  {field: 'REMK_WPC', headerName:'비고내역'}
];

let grpGridApi = null;
let grpColumnApi = null;
let grpDetailGridApi = null;
let grpDetailColumnApi = null;
const onGrpGridReady= (params) => {
  grpGridApi = params.api;
  grpColumnApi = params.columnApi;
  }

const onGrpDetailGridReady= (params) => {
  grpDetailGridApi = params.api;
  grpDetailColumnApi = params.columnApi;
}

const resize = ()=>{
  grpGridApi.sizeColumnsToFit();
  if(grpDetailGridApi!=null){
    grpDetailGridApi.sizeColumnsToFit();
  }
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
let CMMN_CD = ref("");
let CMMN_GRP_CD = ref("");

let  param = ref({
  CMMN_CD : ""        
}); 

const grpCodeList = (cmmnCd)=>{
  param.value.CMMN_CD = cmmnCd;
    axios.post('/restApi/com/RetrieveGrpCodeList.do',param.value).then(res =>{
    grpcodedatas.value = res.data;
    CMMN_CD.value = cmmnCd;
}).catch(res=>{
  console.log(res);
})
}
const grpDetailCodeList = (cmmnGrpCd)=>{
    axios.post('/restApi/com/RetrieveGrpDetailCodeList.do',{CMMN_GRP_CD:cmmnGrpCd}).then(res =>{
    grpdetailcodedatas.value = res.data;
    CMMN_GRP_CD.value = cmmnGrpCd;
}).catch(res=>{
  console.log(res);
})
}

const grpCodeUpdate = (item)=>{
  const selectedData = grpGridApi.getSelectedRows();
  console.log(selectedData);
    axios.put('/restApi/com/SaveGrpCodeList.do',selectedData).then(res =>{
        grpCodeList(CMMN_CD.value);
    }).catch(res=>{
    console.log(res);
    })
}
const grpDetailCodeUpdate = (item)=>{
  const selectedData = grpDetailGridApi.getSelectedRows();
  console.log(selectedData);
    axios.put('/restApi/com/SaveGrpCodeDeatilList.do',selectedData).then(res =>{
        grpDetailCodeList(CMMN_GRP_CD.value);
    }).catch(res=>{
    console.log(res);
    })

}
const checkGrpCodeDelete = ()=>{
  const selectedData = grpGridApi.getSelectedRows();
  axios.delete('/restApi/com/DeleteGrpCodeList.do',{data:selectedData}).then(res =>{
    checkedGrpCd = ref([]);
    checkedGrpDetailCd = ref([]);
    grpCodeList(CMMN_CD);
    grpDetailCodeList('');
    
  }).catch(res=>{
    console.log(res);
  })
}
const checkGrpDetailCodeDelete = () => {
const selectedData = grpDetailGridApi.getSelectedRows();
  axios.delete('/restApi/com/DeleteGrpCodeDetailList.do',{data:selectedData}).then(res =>{
    checkedGrpDetailCd = ref([]);
    grpDetailCodeList(CMMN_GRP_CD);
    
  }).catch(res=>{
    console.log(res);
  })
}
const grpCodeAdd = ()=>{
  if(CMMN_CD==null||CMMN_CD==""){
  return;
}
if(grpcodedatas.length>0&&grpcodedatas[grpcodedatas.length-1].status=='N'){
  alert('한번에 하나씩 추가 가능합니다');
  return;
}
console.log(CMMN_CD.value);
grpcodedatas.value.push({
  CMMN_CD:CMMN_CD.value,
  CMMN_GRP_CD:"",
  CMMN_GRP_CD_NM:"",
  ADD_ATT_VAL:"",
  REMK_WPC:"",
  status:'N'})
}
const grpDetailCodeAdd = ()=>{

  if(CMMN_GRP_CD==null||CMMN_GRP_CD==""){
  return;
}
if(grpdetailcodedatas.length>0&&grpdetailcodedatas[grpdetailcodedatas.length-1].status=='N'){
  alert('한번에 하나씩 추가 가능합니다');
  return;
}
grpdetailcodedatas.value.push({
  CMMN_CD:CMMN_CD.value,
  CMMN_GRP_CD:CMMN_GRP_CD.value,
  CMMN_GRP_DETA_CD:"",
  ADD_ATT_VAL:"",
  SORT_SEQ:"",
  USE_YN:"",
  REMK_WPC:"",
  status:'N'})
}
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
      grpGridApi.getDisplayedRowAtIndex(index.rowIndex).setSelected(true); 
    }
const edtiGrpDetailEvent = params =>{
  let index  = grpDetailGridApi .getFocusedCell(); 
  grpDetailGridApi.getDisplayedRowAtIndex(index.rowIndex).setSelected(true); 
}
</script>

<style lang="scss" scoped>

</style>