<template>
      <div class="flex h-screen w-full bg-gray-100 dark:bg-[#1E2028]">
        <LeftMenu></LeftMenu>
  <!-- Main Content -->
  <div class="flex-1 overflow-y-auto">
    <div class="p-6">
      <h2 class="text-1xl font-semibold mb-4 text-gray-800 dark:text-white">부서코드연계속성정보</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
        
        
        <div class="bg-white dark:bg-[#252731] h-32 p-6 rounded-lg shadow-md md:col-span-1">
          <label class="p-1">입력(inputBox)
            <input @keyup.enter="search" v-model="param.deptNm" type="text" class="mx-3 bg-gray-50 border border-gray-300 text-gray-900" />
          </label>
        
          <!-- 공통 코드 (query Select Box -->
        <label for="commonCode" class="p-1">공통 코드 선택1</label>
        <select id="commonCode" v-model="selectedCode" class="mx-3 bg-gray-50 border border-gray-300 text-gray-900">
          <option value="" disabled selected>Query 호출</option>
          <option v-for="code in commonCodes" :key="code.CMMN_CD" :value="code.CMMN_CD">
            {{ code.CMMN_CD_NM }}
          </option>
        </select>

          <!-- 공통 코드 (공통기능으로 가져오는 Box -->
          <label for="commonCode2" class="p-1">공통 코드 선택2</label>
        <select id="commonCode2" v-model="selectedCode2" class="mx-3 bg-gray-50 border border-gray-300 text-gray-900">
          <option value="" disabled selected>코드호출</option>
          <option v-for="code in commonCodes2" :key="code.CMMN_CD" :value="code.CMMN_CD">
            {{ code.CMMN_CD_NM }}
          </option>
        </select>        

        


          <label class="p-1">
            사용여부
            <select @change="search" v-model="param.useYn" class="mx-3 p-1 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500">
              <option selected></option>
              <option value="Y">사용</option>
              <option value="N">미사용</option>
            </select>
          </label>
          <br />

          <label class="p-1">조직유형
            <select @change="search" v-model="param.formaTyp" class="mx-3 p-1 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500">
              <option selected></option>
              <option value="Y">사용</option>
              <option value="N">미사용</option>
            </select>
          </label>
          <button @click="search" id="searchBtn" type="button" class="float-right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">조회</button>
        </div>
      </div>

      <h2 class="text-1xl font-semibold mb-4 text-gray-800 dark:text-white">부서코드 연계속성 정보</h2>

      <div class="relative mb-6">
        <!-- ButtonTest 버튼을 우측 상단에 배치 -->
        <div class="absolute top-0 right-0 z-10">
          <ButtonTest @add-row="addRowToGridMain" 
                        @delete-item="deleteItemMain"
                        @save-data="saveDataMain" 
                        @download-excel="downloadExcelMain" 
                        :saveUrl="saveUrlMain" 
                        :dataToSave="dataToSaveMain"  
                        :downloadUrl="downloadUrlMain" />
        </div>
        <ag-grid-vue
          :columnDefs="mainColumnDefs"
          :rowData="mainRowData"
          :gridOptions="gridOptions"
          @cell-clicked="onCellClicked"
          style="height: 300px; padding-top: 40px;"
        />
      </div>

      <div class="relative mb-6">
        <!-- ButtonTest 버튼을 우측 상단에 배치 -->
        <div class="absolute top-0 right-0 z-10">
          <ButtonTest @add-row="addRowToGridSub" 
                      @delete-item="deleteItemSub" 
                      @save-data="saveDataSub" 
                      @download-excel="downloadExcelSub" />
        </div>
        <ag-grid-vue
          :columnDefs="subColumnDefs"
          :rowData="subRowData"
          style="height: 300px; padding-top: 40px;"
        />
      </div>
    </div>
  </div>
</div>  
</template>

<script setup>
import LeftMenu from '@/components/LeftMenu.vue';
import axios from 'axios';
import { ref , onMounted } from 'vue';
import { AllCommunityModule, ModuleRegistry, provideGlobalGridOptions } from 'ag-grid-community';
import { AgGridVue } from 'ag-grid-vue3'; // Vue3 AgGrid Component
import ButtonTest from '../components/ButtonTest.vue';

// URL 설정
const apiUrl = ref('/restApi/prj/com/deptCdConnAttrInfoList.do');  // 예시 URL

const deleteUrlMain = '/api/deleteMain'; // 삭제 URL
const saveUrlMain = '/api/saveMain'; // 저장 URL
const downloadUrlMain = '/api/downloadExcel'; // 엑셀 다운로드 URL

// 그리드에서 저장할 데이터 rowData에 맞춰 동적으로 설정
const dataToSaveMain = ref([]);

ModuleRegistry.registerModules([AllCommunityModule]);
provideGlobalGridOptions();

const gridOptions = {
  rowSelection: { 
    mode: 'multiRow',
    headerCheckbox: true
  }
};

const onCellClicked = params => { 
  console.log('cell click : ', params.data.bfDeptCd);
  subGridCall(params.data.bfDeptCd);
};

const mainRowData = ref([]);
const mainColumnDefs = [
  { field: 'status', headerName: '상태', width: 100, cellRenderer: (params) => {
    if (params.value === 'X') {
      return '<img src="path_to_x_image.png" alt="삭제" />';
    } else if (params.value === 'U') {
      return '<img src="path_to_u_image.png" alt="변경" />';
    } else if (params.value === 'N') {
      return '<img src="path_to_n_image.png" alt="추가" />';
    }
    return '';  // 기본 값
  }},
  { field: 'cmmnCdYn', headerName: '순번', width: 100 },
  { field: 'deptConnAttrCd', headerName: 'A', width: 300 }, 
  { field: 'cmmnCdYn', headerName: 'B', width: 200 },
  { field: 'deptConnAttrNm', headerName: 'C', width: 200 },
  { field: 'mngDept', headerName: 'D', width: 150 },
  { field: 'sortSeq', headerName: 'E', width: 150 },
  { field: 'remk', headerName: 'F', width: 150 },
  { field: 'bfDeptCd', headerName: 'G', width: 200 }
];

const subRowData = ref([]);
const subColumnDefs = [
  { field: 'status', headerName: '상태', width: 100, cellRenderer: (params) => {
    if (params.value === 'X') {
      return '<img src="path_to_x_image.png" alt="삭제" />';
    } else if (params.value === 'U') {
      return '<img src="path_to_u_image.png" alt="변경" />';
    } else if (params.value === 'N') {
      return '<img src="path_to_n_image.png" alt="추가" />';
    }
    return '';  // 기본 값
  }},
  { field: 'cmmnCdYn', headerName: 'AA', width: 100 },
  { field: 'bfDeptCd', headerName: 'BB', width: 250 },
  { field: 'deptNm', headerName: 'CC', width: 250 },
  { field: 'useYn', headerName: 'DD', width: 100 },
  { field: 'salyAcnt', headerName: 'EE', width: 250 },
  { field: 'afDeptCd', headerName: 'FF', width: 400 },
];

let param = ref({
  deptConnAttrNm: '',
  deptCd: '',
  deptNm: '',
  useYn: '',
  breuYn: '',
  formaTyp: '' 
}); 

const search = () => {
  mainGridCall(param);
};

//원본본
const mainGridCall = (param) => {
  const obj = Object.assign({}, param.value);
  axios.post(apiUrl.value, obj)
    .then((response) => {
      mainRowData.value = response.data;
    })
    .catch((error) => {
      console.log('error', error);
    });
};

// const mainGridCall = (param) => {
//   const obj = Object.assign({}, param.value);
//   axios.get(apiUrl.value, { params: obj })
//     .then((response) => {
//       mainRowData.value = response.data;
//     })
//     .catch((error) => {
//       console.log('error', error);
//     });
// };
// const mainGridCall = (param) => {
//   const queryString = new URLSearchParams(param.value).toString();  // 파라미터를 쿼리 문자열로 변환
//   axios.get(`${apiUrl.value}?${queryString}`)
//     .then((response) => {
//       mainRowData.value = response.data;
//     })
//     .catch((error) => {
//       console.log('error', error);
//     });
// };


const subGridCall = (bfDeptCd) => {
  axios.post("/restApi/prj/com/deptCdConnAttrValList.do", { bfDeptCd })
    .then((response) => {
      subRowData.value = response.data;
    })
    .catch((error) => {
      console.log('error', error);
    });
};

// 행 추가, 삭제, 저장, 엑셀 다운로드 메서드
const addRowToGridMain = () => {
  const newRow = { id: Date.now(), status: 'N' };
  mainRowData.value.push(newRow);
};

const addRowToGridSub = () => {
  const newRow = { id: Date.now(), status: 'N' };
  subRowData.value.push(newRow);
};

const deleteItemMain = () => {
};

const deleteItemSub = () => {

};

//저장로직 
// 1. apiUrl 호출 - saveUrlMain 
// 2. 그리드에서 데이터를 가져와서 처리 (예시: 저장할 데이터) 데이터를 정의  - saveDataMain
// 3. 데이터 트렌젝션처리 - dataToSaveMain 
const saveDataMain = () => {  
  dataToSaveMain.value = mainRowData.value.map(row => ({
    deptCd: row.deptCd,
    deptNm: row.deptNm,
    useYn: row.useYn
  }));  
};

const saveDataSub = () => {
  console.log('저장 버튼 클릭');
};

const downloadExcelMain = () => {
  console.log('엑셀 다운로드');
};

const downloadExcelSub = () => {
  console.log('엑셀 다운로드');
};


mainGridCall(param);


/* 공통코드 호출 */
const selectedCode = ref('');
const selectedCode2 = ref('');
const commonCodes = ref([]);
const commonCodes2 = ref([]);

// 공통 코드 조회 (쿼리호출)
const fetchCommonCodes = () => {
  const apiUrl = '/restApi/com/RetrieveCommCodeMasterList.do'; // 예시 URL
  const requestData = {
    category: 'exampleCategory'
  };

  axios.post(apiUrl, requestData)
    .then(response => {
      console.log('Response data:', response.data);
      commonCodes.value = response.data;
    })
    .catch(error => {
      console.error('공통 코드 조회 중 오류 발생:', error.response || error);
    });

    // axios.post('/restApi/com/RetrieveCommCodeMasterList.do',param.value).then(res =>{
    //     csys100datas.value = res.data;
    //   }).catch(res=>{
    //     console.log(res);
    //   })

};

// 컴포넌트가 마운트될 때 공통 코드 조회
onMounted(() => {
  fetchCommonCodes();
  
});

</script>

<style scoped>
/* 스타일을 추가해주세요 */
</style>
