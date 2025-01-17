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

// Props 정의  ( 넘겨받는 URL )
const props = defineProps({
  addUrl: String,    // 데이터 추가 URL (POST)
  deleteUrl: String, // 데이터 삭제 URL (DELETE)
  saveUrl: String,   // 데이터 저장 URL (PUT)
  downloadUrl: String, // 엑셀 다운로드 URL (GET)
});

const emit = defineEmits();
const isAddRowInProgress = ref(false);

const addRow = () => {
  if (isAddRowInProgress.value) return;
  isAddRowInProgress.value = true;

  // 새로운 데이터 추가 (POST 요청)
  axios.post(props.addUrl)
    .then(() => {
      emit('add-row');
    })
    .catch(error => {
      console.error('Add failed', error);
    })
    .finally(() => {
      isAddRowInProgress.value = false;
    });
};

const deleteItem = () => {
  const selectedRows = getSelectedRows();  // 선택된 행을 가져오는 함수 호출
  if (selectedRows.length === 0) {
    console.log('선택된 항목이 없습니다.');
    return;
  }

  // 삭제할 데이터 준비 (GET 방식으로 URL에 쿼리 문자열 포함)
  const dataToDelete = selectedRows.map(row => `id=${row.id}&deptCd=${row.deptCd}&deptSn=${row.deptSn}`).join('&');

  // 삭제 요청 (DELETE 요청)
  axios.delete(`${props.deleteUrl}?${dataToDelete}`)
    .then(() => {
      emit('delete-item');
    })
    .catch(error => {
      console.error('Delete failed', error);
    });
};

const saveData = () => {
  const dataToSave = getDataToSave(); // 저장할 데이터를 가져오는 함수 호출

  // 저장 요청 (PUT 요청)
  axios.put(props.saveUrl, dataToSave)
    .then(() => {
      emit('save-data');
    })
    .catch(error => {
      console.error('Save failed', error);
    });
};

const downloadExcel = () => {
  // 엑셀 파일 다운로드 (GET 요청)
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

// 선택된 행을 가져오는 함수 (예시)
const getSelectedRows = () => {
  return []; // 선택된 행을 리턴 (실제 구현 필요)
};

// 저장할 데이터를 가져오는 함수 (예시)
const getDataToSave = () => {
  return {}; // 저장할 데이터를 리턴 (실제 구현 필요)
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
