<template>
  <div class="flex h-screen bg-gray-200 font-roboto">
    <LeftMenu/>
    <div class="flex-1 flex flex-col overflow-hidden">
      <Header/>
      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div class="black-bg" v-show="modalpoen">
            <div class="white-bg" >
              <button class="float-right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5
                py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" @click="modalinfo()">모달창닫기</button>
                <gropComponent ref="grpRef"/>
            </div>
          </div>
          
    <!-- Main Content -->
            <div class="flex-1 overflow-y-auto">
              <div class="p-6" v-show="!modalpoen">                  
                    <div class="bg-white dark:bg-[#252731] p-6 rounded-lg shadow-md md:col-span-1 whitespace-nowrap overflow-x-auto">
                        <label class="p-1">공통코드<input @keyup.enter="serachCode()" v-model="param.CMMN_CD" type="text" class="mx-3 bg-gray-50 border border-gray-300 text-gray-900"/></label>
                        <label class="p-1">공통코드명<input @keyup.enter="serachCode()" v-model="param.CMMN_CD_NM" type="text" class="mx-3 bg-gray-50 border border-gray-300 text-gray-900"/></label>
                        <label class="p-1">사용여부
                          <select class="mx-3 p-1 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500" v-model="param.USE_YN">
                            <option  value="1">사용</option>
                            <option  value="0">미사용</option>
                          </select>
                          <label class="p-1">이전코드<input @keyup.enter="serachCode()" v-model="param.BF_CMMN_CD" type="text" class="mx-3 bg-gray-50 border border-gray-300 text-gray-900"/></label>
                        </label>
                        <button @click="serachCode()" id="searchBtn" type="button" class="float-right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5
                                    py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">조회</button>

                    </div>

                  <div class="mt-4 bg-white dark:bg-[#252731] p-6 rounded-lg shadow-md md:col-span-1 whitespace-nowrap overflow-x-auto relative">
                    <h2 class="text-xl font-semibold leading-tight text-gray-700">공통코드리스트</h2>
                    <div class="absolute top-0 right-0 z-10">
                      <ButtonTest @add-row="addRowToGridMain" 
                                    @delete-item="deleteItemMain"
                                    @save-data="saveDataMain" 
                                    @download-excel="downloadExcelMain" 
                                    :addUrl="addUrl" 
                                    :deleteUrl="deleteUrlMain" 
                                    :dataToSave = "dataToSaveMain"
                                    :saveUrl="saveUrlMain" 
                                    :downloadUrl="downloadUrlMain" />
                    </div>
                  <ag-grid-vue  
                    :columnDefs="codeColumnDefs"
                    :rowData="csys100datas"
                    :gridOptions="gridOptions"
                    @cell-clicked="onCellClicked"
                    @cell-EditingStarted="edtiEvent"
                    @grid-ready="onGridReady"
                    style="height: 300px;padding-top: 40px;" >
                  </ag-grid-vue >
                </div>
                  <detailComponent ref="detailRef" />
              </div>
          </div>
      </main>
    </div>
  </div>
  
  
</template>
<!-- onCellClicked -->
<script setup>
import LeftMenu from '@/components/LeftMenu.vue';
import ButtonTest from '../components/ButtonTest.vue';
import Header from '@/components/Header.vue'

import { RouterLink,RouterView } from 'vue-router'
import detailComponent from '../components/CodedetailGrid.vue'
import gropComponent from '../components/CodegropGrid.vue'
import { ref } from 'vue';
import axios from 'axios';
import { AllCommunityModule, ModuleRegistry, provideGlobalGridOptions } from 'ag-grid-community';
import { AgGridVue } from 'ag-grid-vue3' // Vue3 AgGrid Component
ModuleRegistry.registerModules([AllCommunityModule]);
provideGlobalGridOptions();
const detailRef = ref(null);
const grpRef = ref(null);

let gridApi = null;
let columnApi = null;

const dataToSaveMain = ref();

const searchUrl = '/restApi/com/RetrieveCommCodeMasterList.do'; // 조회 URL
const deleteUrlMain = '/restApi/com/DeleteCommCodeMasterList.do'; // 삭제 URL
const saveUrlMain = '/restApi/com/SaveCommCodeMasterList.do'; // 저장 URL
const downloadUrlMain = '/api/downloadExcel'; // 엑셀 다운로드 URL

let  modalpoen = ref(false);
let  param = ref({
  CMMN_CD : "",
  CMMN_CD_NM : "",
  BF_CMMN_CD : "",USE_YN : ""        
}); 

const addRowToGridMain = () => {
  const newRow = { id: Date.now(), status: 'N' };
  csys100datas.value.push(newRow);
};

const deleteItemMain = () => {
  gridApi
};

const saveDataMain = () => {
  gridApi
};

const downloadExcelMain = () => {
  console.log('엑셀 다운로드');
};

const codeColumnDefs = [
{ field: 'status', editable: false, headerName: '상태', width: 100, cellRenderer: (params) => {
    if (params.value === 'X') {
      return '<img src="path_to_x_image.png" alt="삭제" />';
    } else if (params.value === 'U') {
      return '<img src="path_to_u_image.png" alt="변경" />';
    } else if (params.value === 'N') {
      return '<img src="path_to_n_image.png" alt="추가" />';
    }
    return '';  // 기본 값
  }},
  {field: 'CMMN_CD', headerName:'공통코드'},
  {field: 'CMMN_CD_NM', headerName:'공통코드명'},
  {field: 'USE_YN', headerName:'사용여부',  cellEditor: "agSelectCellEditor",
    cellEditorParams: {
      values: ['Y', 'N']
    }},
  {field: 'REMK_CTNT', headerName:'비고내역'},
  {field: 'BF_CMMN_CD', headerName:'이전공통코드'},
  { field: 'POPUP', editable: false, headerName: '상태', width: 100, cellRenderer: (params) => {
    return '<button class="float-right text-white bg-blue-700 h over:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">팝업</button>'
    }},
]
//
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

const  csys100datas = ref([]);
    //code 조회

    const onGridReady = (params) => {
        gridApi = params.api;
        columnApi = params.columnApi;
        dataToSaveMain.value = gridApi;
    }

    const resize = ()=>{
      gridApi.sizeColumnsToFit();
    }
    const serachCode = () =>{
      axios.post('/restApi/com/RetrieveCommCodeMasterList.do',param.value).then(res =>{
        csys100datas.value = res.data;
      }).catch(res=>{
        console.log(res);
      })
    }

    const modalinfo = (item) => {
      modalpoen.value = !modalpoen.value;
      if(modalpoen.value){
        serachGrpCode(item)
      }else{
        grpRef.value.grpDetailCodeList('');
      }
    }
    const onCellClicked = params => {
      console.log(params.colDef.field);
      if(params.colDef.field === 'CMMN_CD'){
        serachCodeDetail(params.data.CMMN_CD);
      }
      else if(params.colDef.field === 'POPUP'){
        modalinfo(params.data.CMMN_CD)
      }
      
    }
    const serachCodeDetail = (CMMN_CD) => {
      // 자식 컴포넌트의 메서드를 호출하는 로직
      detailRef.value.detailCodeList(CMMN_CD);
    }
    const serachGrpCode = (CMMN_CD) =>{
      grpRef.value.grpCodeList(CMMN_CD);
    }
    const edtiEvent = params =>{
      let index  = gridApi .getFocusedCell(); 
      gridApi.getDisplayedRowAtIndex(index.rowIndex).setSelected(true); 
    }

	  serachCode()
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
  width: 80%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
</style>