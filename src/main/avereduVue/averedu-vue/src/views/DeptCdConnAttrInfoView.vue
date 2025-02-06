<template>
  <div class="flex h-screen bg-gray-200 font-roboto">
  <LeftMenu></LeftMenu>
    <div class="flex-1 flex flex-col overflow-hidden">
      <Header></Header>
      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
        <div class="flex-1 overflow-y-auto">
       <div class="p-6">
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
           </div>
           <div class="mt-4 bg-white dark:bg-[#252731] p-6 rounded-lg shadow-md md:col-span-1 whitespace-nowrap overflow-x-auto relative">
            <h2 class="text-xl font-semibold leading-tight text-gray-700">부서코드 연계속성 정보&ensp;<span class="text-red-400 text-sm">* 부서코드 연계속성 정보 삭제 시 해당 정보의 연계속성 값이 같이 삭제됩니다.</span></h2>
              
              <strong class="float-right">총 : {{ mainRowData.length }} 건</strong>
              <!-- 메인 그리드 공통 버튼 시작-->
              <div class="absolute top-0 right-0 z-10">
              <ButtonTest @add-row="mainGridAdd" 
                          @delete-item="mainGridDel"
                          @save-data="mainGridSave"
                          :saveUrl="saveUrlMain" 
                          :deleteUrl="deleteUrlMain"
                          :dataToSave="mainGridApi" 
                          @download-excel="downloadExcelMain" />
              </div>
      
            <ag-grid-vue
                :columnDefs="mainColumnDefs"
                :rowData="mainRowData"
                :gridOptions="gridOptions"
                @cell-clicked="onCellClicked"
                @cell-EditingStarted="onEditMainGridStart"
                @cell-EditingStopped="onEditMainGridEnd"
                @grid-ready="onMainGridReady"
                style="height: 300px; padding-top: 40px;">
             </ag-grid-vue>
            </div>
            
            <div class="mt-4 bg-white dark:bg-[#252731] p-6 rounded-lg shadow-md md:col-span-1 whitespace-nowrap overflow-x-auto relative">
              <h2 class="text-xl font-semibold leading-tight text-gray-700">부서코드 연계속성 값</h2>
              <strong class="float-right">총 : {{ subRowData.length }} 건</strong>
               <!-- 서브 그리드 공통 버튼 시작-->
               <div class="absolute top-0 right-0 z-10">
                <ButtonTest
                          :saveUrl="saveUrlsub" 
                          :deleteUrl="deleteUrlsub"
                          :dataToSave="subGridApi" 
                          @download-excel="downloadExcelSub"
                          @cell-EditingStarted="onEditMainGridStart"
                          @cell-EditingStopped="onEditMainGridEnd"
                          @grid-ready="onSubGridReady"
                          @add-row="subGridAdd"
                          @delete-item="subGridDel"
                          @save-data="subGridSave"
                 />
              </div>
            
             <ag-grid-vue
                :gridOptions="gridOptions"
                :columnDefs="subColumnDefs"
                :rowData="subRowData"
                @cell-EditingStarted="onEditSubGridStart"
                @cell-EditingStopped="onEditSubGridEnd"
                @grid-ready="onSubGridReady"
                style="height: 300px; padding-top: 40px;">
             </ag-grid-vue>
            </div>
  </div>
  </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

import { AllCommunityModule, ModuleRegistry, provideGlobalGridOptions, CheckboxEditorModule, ClientSideRowModelModule ,ValidationModule } from 'ag-grid-community';
import { AgGridVue } from 'ag-grid-vue3' // Vue3 AgGrid Component
import LeftMenu from '@/components/LeftMenu.vue';
import ButtonTest from '@/components/ButtonTest.vue';
import Header from '@/components/Header.vue'
ModuleRegistry.registerModules([AllCommunityModule, ClientSideRowModelModule, CheckboxEditorModule, ValidationModule ]);
provideGlobalGridOptions();

const saveUrlMain = '/restApi/prj/com/deptCdConnAttrInfoSave.do'
const deleteUrlMain = '/restApi/prj/com/deptCdConnAttrInfoDel.do'
const saveUrlsub = '/restApi/prj/com/deptCdConnAttrValSave.do'
// const deleteUrlsub = '/restApi/prj/com/deptCdConnAttrValDel.do'

const gridOptions = {
    rowSelection: { 
        mode: 'multiRow',
        headerCheckbox: true
    },
    defaultColDef: { 
      headerClass: "centered",
       cellClass: "centered",
       editable: true,
       editType: 'fullRow',
    },
}
const mainGridApi = ref();
const mainColumnApi = ref();
const mainRowData = ref([]);
const mainColumnDefs = [
{ field: 'status', headerName: '상태', width: 100, cellRenderer: (params) => {
    if (params.value === 'D') {
      return '<img src="path_to_x_image.png" alt="삭제" />';
    } else if (params.value === 'U') {
      return '<img src="path_to_u_image.png" alt="변경" />';
    } else if (params.value === 'N') {
      return '<img src="path_to_n_image.png" alt="추가" />';
    }
    return '';
  }},
  { field: 'mainRowNum', headerName: "순번", valueGetter: 'node.rowIndex + 1', cellEditorParams: { min: 0, max: 100 }, cellStyle: {textAlign: "center"}, width: 100,},
  { field: 'deptConnAttrCd', headerName: '부서연계 속성코드' , width: 300, cellStyle: {textAlign: "center"}}, 
  { field: 'cmmnCdYn', headerName: '공통코드 여부', width: 150, cellStyle: {textAlign: "center"}, field: "boolean", cellEditor: "agCheckboxCellEditor"},
  { field: 'deptConnAttrNm', headerName: '부서연계 속성명', width: 200},
  { field: 'mngDept', headerName: '관리부서', width: 150},
  { field: 'sortSeq', headerName: '정렬순서', width: 150, cellStyle: {textAlign: "center"}},
  { field: 'remk', headerName: '비고', width: 150},
  { field: 'bfDeptCd', headerName: '부서코드', width: 200, editable: false}
];

const onMainGridReady = params => {
    // console.log('onGridReady : ', params.api);
    mainGridApi.value = params.api;
    mainColumnApi.value = params.columnApi;
    console.log('gridApi : ', mainGridApi.value);
    console.log('columnApi : ' + mainColumnApi.value);

}

const onEditMainGridStart = params => {
  console.log('onEditMainGridStart : ', params.data);

  let index = mainGridApi.value.getFocusedCell();
  if(params.data.status != 'D'&& params.data.status != 'N' && params.data.status != 'U'){
      params.data.status = 'U'
  }
     
  mainGridApi.value.getDisplayedRowAtIndex(index.rowIndex).setSelected(true); 
}

const onEditMainGridEnd = params => {
  console.log('onEditMainGridEnd : ', params);
}

let bfDeptCd = ref();
// let afDeptCd = ref();

const onCellClicked = params => {
    // console.log('cell click : ', params.data);
    console.log('cell click : ', params.data);
    if(params.data.bfDeptCd === undefined || params.data.bfDeptCd === ''){
      return false;
    }else{
      bfDeptCd.value = params.data.bfDeptCd;
      // afDeptCd.value = params.data.deptConnAttrCd;
    }
    subGridCall(params.data.bfDeptCd);
}

const mainGridSave = () => {
  console.log('mainGrid 저장 성공');
  mainGridCall(param);
    // mainRowData.value.gridApi.stopEditing(true);
    // console.log('save : ', mainRowData.value.gridApi.getEditingCells());
}

const mainGridDel = () => {
  console.log('mainGrid 삭제 성공');
  mainGridCall(param);
  /*
    const delRow = JSON.parse(JSON.stringify(gridApi.value.getSelectedRows()));
    console.log('delRow :', delRow);
    console.log('columnApi : ', columnApi);
   
    if(delRow.length === 0){
      alert('선택한 row가 없습니다.');
      return false;
    }
    
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
    */
}

const downloadExcelMain = () => {

}

const mainGridAdd = () => {
    console.log('mainAddGrid');

    const mainAddRow = {
      status : 'N',
      deptConnAttrCd : '',
      cmmnCdYn : '',
      deptConnAttrNm : '',
      mngDept : '',
      sortSeq : '',
      remk : '',
      bfDeptCd : ''
    }
    
    //gridOptions.value.applyTransaction({add:[data]})
    mainRowData.value.unshift(mainAddRow);

}

const subGridApi = ref();
const subColumnApi = ref();
const subRowData = ref([]);
const subColumnDefs = [
  { field: 'status',  headerName: '상태', width: 100, cellRenderer: params => {
    if (params.value === 'D') {
      return '<img src="path_to_x_image.png" alt="삭제" />';
    } else if (params.value === 'U') {
      return '<img src="path_to_u_image.png" alt="변경" />';
    } else if (params.value === 'N') {
      return '<img src="path_to_n_image.png" alt="추가" />';
    }
    return '';  // 기본 값
    }},
    { field: 'subRowNum', headerName: '순번', valueGetter: 'node.rowIndex + 1', cellEditorParams: { min: 0, max: 100 }, cellStyle: {textAlign: "center"}, width: 100,},
    { field: 'bfDeptCd', headerName: '부서코드', width: 250},
    { field: 'deptNm', headerName: '부서명', width: 250},
    { field: 'useYn', headerName: '사용여부', width: 100},
    { field: 'salyAcnt', headerName: '급여회계매핑', width: 250},
    { field: 'afDeptCd', headerName: '부서연계 속성코드', width: 400},
];



const subGridAdd = () => {
    console.log('subAddGrid');
   
    if(bfDeptCd.value === undefined){
      alert('mainGridRow 선택 후 추가 해주세요.');
      return false;
    }else{
      const subAddRow = {
        status : 'N',
        bfDeptCd : bfDeptCd.value,
        deptNm : '',
        useYn : '',
        salyAcnt : '',
        afDeptCd : '',
        // afDeptCd : afDeptCd.value,
      }

    subRowData.value.unshift(subAddRow);
    }
}

const onSubGridReady = params => {
    // console.log('onGridReady : ', params.api);
    subGridApi.value = params.api;
    subColumnApi.value = params.columnApi;
    console.log('subGridApi : ', subGridApi.value);
    console.log('subColumnApi : ' + subColumnApi.value);

}

const onEditSubGridStart = params => {
  console.log('onEditSubGridStart : ', params.data);

  let index = subGridApi.value.getFocusedCell();
  if(params.data.status != 'D'&& params.data.status != 'N' && params.data.status != 'U'){
    params.data.status = 'U'
  }
   
  subGridApi.value.getDisplayedRowAtIndex(index.rowIndex).setSelected(true); 
}

const onEditSubGridEnd = () => {
  console.log('onEditSubGridEnd');
}

const downloadExcelSub = () => {
  console.log('downloadExcelSub');
}

const subGridDel = () => {
  mainGridCall(param);
}

const subGridSave = () => {
  mainGridCall(param);
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