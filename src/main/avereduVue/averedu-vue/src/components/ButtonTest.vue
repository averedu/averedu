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
  isAddRowInProgress.value = true;
  emit('add-row');
};

// 삭제 o 저장 처리
const saveData = () => {
  if (!props.saveUrl || !props.dataToSave || Object.keys(props.dataToSave).length === 0) {
    console.error("저장할 URL 또는 데이터가 없습니다.");
    return;
  }

  // dataToSave 객체에 있는 각 데이터를 처리
  Object.values(props.dataToSave).forEach(data => {
    const apiUrl = data.stats === 'D' ? props.deleteUrl : props.saveUrl; // stats가 'D'이면 deleteUrl, 아니면 saveUrl

    const requestMethod = data.stats === 'D' ? axios.delete : axios.put;  // stats가 'D'면 delete, 아니면 put

    // Delete일 경우, id를 데이터로 전달
    const requestData = data.stats === 'D' ? { data: { id: data.id } } : data;

    requestMethod(apiUrl, requestData)
      .then(() => {
        console.log(`${data.stats === 'D' ? '삭제' : '저장'} 완료:`, data);
        emit(data.stats === 'D' ? 'delete-item' : 'save-data'); // 삭제 후 'delete-item', 저장 후 'save-data' 이벤트 발송
      })
      .catch(error => {
        console.error(`${data.stats === 'D' ? '삭제' : '저장'} 실패:`, error);
      });
  });
};




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
