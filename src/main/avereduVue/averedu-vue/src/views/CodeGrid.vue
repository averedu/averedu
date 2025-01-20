<template>
  <div class="black-bg" v-show="modalpoen">
    <div class="white-bg" >
      <button class="float-right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5
        py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" @click="modalinfo()">모달창닫기</button>
        <gropComponent ref="grpRef"/>
    </div>
  </div>
  <div class="flex h-screen w-full bg-gray-100 dark:bg-[#1E2028]">
  <LeftMenu></LeftMenu> 
    <!-- Main Content -->
    <div class="flex-1 overflow-y-auto">
       <div class="p-6" v-show="!modalpoen">
           <h2 class="text-1xl font-semibold mb-4 text-gray-800 dark:text-white">공통코드</h2>
           <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
             
               <div class="bg-white dark:bg-[#252731] h-32 p-6 rounded-lg shadow-md md:col-span-1 overflow-hidden whitespace-nowrap">
                  
                <label class="p-1">코드명<input @keyup.enter="serachCode()" v-model="param.CMMN_CD" type="text" class="mx-3 bg-gray-50 border border-gray-300 text-gray-900"/></label>
              <button @click="serachCode()" id="searchBtn" type="button" class="float-right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5
                        py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">조회</button>
               </div>
           </div><br>
           <div>
              <h2 class="text-1xl font-semibold mb-4 text-gray-800 dark:text-white">공통코드 
                <!-- <strong class="float-right">총 : {{ mainRowData.length }} 건</strong> -->
                <button class="float-right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5
                py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" @click="checkCodeDelete">삭제</button>
                <button class="float-right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5
                py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" @click="addCode">추가</button>
                <button class="float-right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5
                py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" @click="saveCode">저장</button>
              </h2><br>
            </div>
            <ag-grid-vue 
            :columnDefs="codeColumnDefs"
            :rowData="csys100datas"
            :gridOptions="gridOptions"
            @cell-clicked="onCellClicked"
            @cell-EditingStarted="edtiEvent"
            @cell-doubleclicked="onCellDoubleClicked"
            @grid-SizeChanged="resize"
            @grid-ready="onGridReady"
            style="height: 300px;" v-show="!modalpoen">
          </ag-grid-vue ><br>
          <detailComponent ref="detailRef" />
       </div>
   </div>
  </div>
</template>
<!-- onCellClicked -->
<script setup>
import LeftMenu from '@/components/LeftMenu.vue';
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

let  modalpoen = ref(false);
let  param = ref({
  CMMN_CD : ""        
}); 

const codeColumnDefs = [
  {field: 'CMMN_CD', headerName:'공통코드'},
  {field: 'CMMN_CD_NM', headerName:'공통코드명'},
  {field: 'USE_YN', headerName:'사용여부',  cellEditor: "agSelectCellEditor",
    cellEditorParams: {
      values: ['Y', 'N']
    }},
  {field: 'REMK_CTNT', headerName:'비고내역'},
  {field: 'BF_CMMN_CD', headerName:'이전공통코드'}
]

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

    const onGridReady= (params) => {
        gridApi = params.api;
        columnApi = params.columnApi;
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
    //체크 code 삭제
    const checkCodeDelete = () =>{
      const selectedData = gridApi.getSelectedRows();
      console.log(selectedData);

      axios.delete('/restApi/com/DeleteCommCodeMasterList.do',{data:selectedData})
      .then(res =>{
        if(res.status == 200){
          alert('정상적으로 삭제되었습니다');
          serachCode();
          serachCodeDetail('');
        }
      }).catch(res=>{
        console.log(res);
      })
    }
    //code 수정
    const saveCode = () => {
      const selectedData = gridApi.getSelectedRows();
      console.log(selectedData);
      axios.put('/restApi/com/SaveCommCodeMasterList.do',selectedData)
      .then(res =>{
        if(res.status == 200){
          alert('정상적으로 수정되었습니다');
          serachCode()
        }
      }).catch(res=>{
        console.log(res);
      })

    }
    const addCode = () => {
    //  gridApi.updateRowData({add: [{}], addIndex:0});
      csys100datas.value.push({newYn:'Y'})
    }
    const savedCode = () => {
      console.log(gridApi)
      console.log(gridApi)
      //csys100datas.value.push({newYn:'Y'})
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
      serachCodeDetail(params.data.CMMN_CD);
    }
    const onCellDoubleClicked = params => {
        modalinfo(params.data.CMMN_CD);
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
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
</style>