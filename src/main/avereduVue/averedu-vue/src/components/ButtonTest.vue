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
  saveUrl: String,    // 데이터 저장 URL (PUT)
  dataToSave: Array,  // 여러 데이터 저장

  downloadUrl: String, // 엑셀 다운로드 URL (GET)
});

const emit = defineEmits();
const isAddRowInProgress = ref(false);

const addRow = () => {
  if (isAddRowInProgress.value) return;
  isAddRowInProgress.value = true;
  emit('add-row');
};

// 삭제
// const deleteItem = () => {
//   if (!props.deleteUrl || !props.dataToDelete || props.dataToDelete.length === 0) {
//     console.error("삭제할 데이터가 없습니다.");
//     return;
//   }

//   // 필드를 동적으로 처리하도록 수정
//   const { deleteFields } = props;

//   // dataToDelete에서 필드값을 추출하여 쿼리 문자열로 변환
//   const dataToDelete = props.dataToDelete
//     .map(row => {
//       // deleteFields에서 필드명 가져와서 쿼리로 만듦
//       return Object.entries(deleteFields).map(([key, value]) => `${key}=${row[value]}`).join('&');
//     })
//     .join('&');  // 여러 항목을 하나의 쿼리 문자열로 결합

//   axios.delete(`${props.deleteUrl}?${dataToDelete}`)
//     .then(() => {
//       emit('delete-item'); // 삭제 완료 후 부모 컴포넌트로 이벤트 전달
//     })
//     .catch(error => {
//       console.error('Delete failed', error);
//     });
// };

// // 삭제(2)
// const deleteData = () => {
//   if (!props.deleteUrl || !props.dataToDelete || props.dataToDelete.length === 0) {
//     console.error("삭제할 데이터가 없습니다.");
//     return;
//   }

//   // PUT 요청으로 데이터 저장
//   axios.delete(props.saveUrl, props.dataToSave)
//     .then(() => {
//       emit('delete-data'); 
//     })
//     .catch(error => {
//       console.error('Save failed', error);
//     });
// };

// 저장
const saveData = () => {
  if (!props.saveUrl || !props.dataToSave || props.dataToSave.length === 0) {
    console.error("저장할 URL 또는 데이터가 없습니다.");
    return;
  }

  // PUT 요청으로 데이터 저장
  axios.put(props.saveUrl, props.dataToSave)
    .then(() => {
      emit('save-data'); // 저장 완료 후 이벤트를 부모에게 전달
    })
    .catch(error => {
      console.error('Save failed', error);
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
