<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ul>
      <li v-for="(list, idx) in menuList" :key="idx">
        idx : {{ idx }} menuId : {{ list.menuId }} menuNm : {{ list.menuNm }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import axios, { isAxiosError } from 'axios';
import { ref } from 'vue';

const menuList = ref([]);

  axios
    .get("/restApi/prj/com/menuList.do")
    .then((restApi) => {
      console.log('restApi : ', restApi);
      menuList.value = restApi.data;
    })
    .catch((error) => {
      console.log('error', error);
    })
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
