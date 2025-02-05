<template>
  <div>
    <BaseButton buttonType="primary" @click="addRow" :disabled="isAddRowInProgress">추가</BaseButton>
    <BaseButton buttonType="danger" @click="deleteItem">삭제</BaseButton>
    <BaseButton buttonType="primary" @click="saveData">저장</BaseButton>
    <BaseButton buttonType="warning" @click="downloadExcel">엑셀 다운로드</BaseButton>
  </div>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue';
import { ref } from 'vue';
import axios from 'axios';
import BaseButton from './BaseButton.vue';

// Props 정의 ( 넘겨받는 URL )
const props = defineProps({
  saveUrl: String,       // 저장할 URL (PUT 요청)
  deleteUrl: String,     // 삭제할 URL (DELETE 요청)
  dataToSave: Object,    // 저장할 데이터 (Object 형태로 받음)
  dataToDelete: Object,  // 삭제할 데이터 (Object 형태로 받음)
  downloadUrl: String, // 엑셀 다운로드 URL (GET)
});

const emit = defineEmits();
const isAddRowInProgress = ref(false);


const addRow = () => {
  if (isAddRowInProgress.value) return;
  //isAddRowInProgress.value = true;
  emit('add-row');
};

// 삭제 o 저장 처리
const saveData = () => {
  if (!props.saveUrl || !props.dataToSave || Object.keys(props.dataToSave).length === 0) {
    console.error("저장할 URL 또는 데이터가 없습니다.");
    return;
  }

    // 선택된 행들만 가져오기
    const selectedRows = props.dataToSave.getSelectedRows();
  // 선택된 행이 없으면 처리하지 않음
  if (selectedRows.length === 0) {
    console.error("선택된 행이 없습니다.");
    return;
  }

  // 1. status가 'D'인 행은 삭제 처리
  const deleteRows = selectedRows.filter(row => row.status === 'D');  
  axios.delete(props.deleteUrl, { data: deleteRows }) 
      .then(() => {
        console.log('삭제 완료:', deleteRows);
        //emit('delete-item'); // 삭제 후 'delete-item' 이벤트 발송
      })
      .catch(error => {
        console.error('삭제 실패:', error);
      });
      // 사용안함--------------------------------------------------------------
  // deleteRows.forEach(row => {
  //   axios.delete(props.deleteUrl, { data: row }) 
  //     .then(() => {
  //       console.log('삭제 완료:', row);
  //       emit('delete-item'); // 삭제 후 'delete-item' 이벤트 발송
  //     })
  //     .catch(error => {
  //       console.error('삭제 실패:', error);
  //     });
  // });

  // 2. status가 'U' 또는 'N'인 행은 저장 처리
  const saveRows = selectedRows.filter(row => row.status !== 'D');
  console.log(saveRows);
  axios.put(props.saveUrl, saveRows)  
      .then(() => {
        console.log('저장 완료:', saveRows);
        emit('save-data'); // 저장 후 'save-data' 이벤트 발송
      })
      .catch(error => {
        console.error('저장 실패:', error);
      });
   // 사용안함--------------------------------------------------------------
  // saveRows.forEach(row => {
  //   axios.put(props.saveUrl, row)  
  //     .then(() => {
  //       console.log('저장 완료:', row);
  //       emit('save-data'); // 저장 후 'save-data' 이벤트 발송
  //     })
  //     .catch(error => {
  //       console.error('저장 실패:', error);
  //     });
  // });
};
const deleteItem =() => {
  const selectedRows = props.dataToSave.getSelectedNodes();
  selectedRows.forEach(row => {
    if(row.data.status != 'D'&& row.data.status != 'N' && row.data.status != 'U'){
        row.data.status = 'D'
      }
      props.dataToSave.startEditingCell({
          rowIndex:row.rowIndex,
          colKey:'status',
        })
   
  })
  props.dataToSave.stopEditing();
}

const downloadExcel = () => {
  // 엑셀 파일 다운로드 (GET 요청) test중
  axios.get(props.downloadUrl, { responseType: 'blob' })
    .then(response => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'data.xlsx');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      emit('download-excel');
    })
    .catch(error => {
      console.error('Download failed', error);
    });
};

const getSelectedRows = () => {
  return [];
};

</script>

<style scoped>
BaseButton {
  margin-right: 10px;
}

button {
  margin-bottom: 10px;
}
</style>
