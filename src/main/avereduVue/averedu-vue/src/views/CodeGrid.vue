<template>
  <div class="flex h-screen bg-gray-200 font-roboto">
    <LeftMenu/>
    <div class="flex-1 flex flex-col overflow-hidden">
      <Header/>
      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div class="black-bg" v-show="modalpoen">
            <div class="white-bg" >
              <div class="z-50 cursor-pointer modal-close">
                <svg @click="modalinfo()" class="text-black fill-current" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                </svg>
              </div>
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
                                    @save-data="serachCode" 
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
                    @cell-EditingStarted="editEvent"
                    @grid-ready="onGridReady"
                    @rowDataUpdated="rowdataUpdate"
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

let selectData = ref([]);

const dataToSaveMain = ref();

const searchUrl = '/restApi/com/RetrieveCommCodeMasterList.do'; // 조회 URL
const deleteUrlMain = '/restApi/com/DeleteCommCodeMasterList.do'; // 삭제 URL
const saveUrlMain = '/restApi/com/SaveCommCodeMasterList.do'; // 저장 URL
const downloadUrlMain = '/api/downloadExcel'; // 엑셀 다운로드 URL

const codeColumnDefs = [
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
  {field: 'CMMN_CD', cellStyle: {textAlign: "right"},headerName:'공통코드' },
  {field: 'CMMN_CD_NM', cellStyle: {textAlign: "right"}, headerName:'공통코드명'},
  {field: 'USE_YN',  cellStyle: {textAlign: "center"}, headerName:'사용여부',  cellEditor: "agSelectCellEditor",cellEditorParams: {values: ['Y', 'N']}, cellRenderer: (params) => {
    if (params.value === '0') {
      return 'N';
    } else if (params.value === '1') {
      return 'Y';
    } 
    return params.value;  // 기본 값
  }},
  {field: 'REMK_CTNT', cellStyle: {textAlign: "right"},headerName:'비고내역'},
  {field: 'BF_CMMN_CD', cellStyle: {textAlign: "right"},headerName:'이전공통코드'},
  { field: 'POPUP', editable: false, headerName: '', width: 100, cellRenderer: (params) => {
    return '<button class="float-right text-white bg-blue-700 h over:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">팝업</button>'
    }},
]

let  modalpoen = ref(false);
let  param = ref({
  CMMN_CD : "",
  CMMN_CD_NM : "",
  BF_CMMN_CD : "",USE_YN : ""        
}); 

const addRowToGridMain = () => {
  const newRow = { id: Date.now(), status: 'N' };
  let rowData = [];
  //grid의 row값 가져오기및 선택된값의 row값 따로 저장
  gridApi.forEachNode(node => {
    rowData.push(node.data)
    if(node.__selected){
      selectData.value.push(node.rowIndex+1)
    }
  }
  );
  csys100datas.value = rowData;
  csys100datas.value.unshift(newRow);

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


const downloadExcelMain = () => {
  console.log('엑셀 다운로드');
};

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
      if(params.colDef.field === 'POPUP'){
        modalinfo(params.data.CMMN_CD)
      }else{
        serachCodeDetail(params.data.CMMN_CD);

      }
      
    }
    const serachCodeDetail = (CMMN_CD) => {
      // 자식 컴포넌트의 메서드를 호출하는 로직
      detailRef.value.detailCodeList(CMMN_CD);
    }
    const serachGrpCode = (CMMN_CD) =>{
      grpRef.value.grpCodeList(CMMN_CD);
    }
    const editEvent = params =>{
      let index  = gridApi.getFocusedCell(); 
      if(params.data.status != 'D'&& params.data.status != 'N' && params.data.status != 'U'){
         params.data.status = 'U'
      }
      console.log(gridApi.getDisplayedRowAtIndex(index.rowIndex))
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