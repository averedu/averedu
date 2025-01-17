<template>
  
      <!-- Sidebar -->
      <aside class="w-64 h-screen bg-white dark:bg-[#15161A] shadow-md">
          <div class="p-4 border-b border-gray-200 dark:border-gray-700">
              <h1 class="text-2xl font-semibold text-gray-800 dark:text-white">averedu</h1>
          </div>
          <nav v-for="(menuList, idx) in sysMenuList" :key="idx" class="mt-4">
             <RouterLink :to="menuList.pgmPathNm" class="flex items-center px-4 py-2 mt-1 text-gray-600 hover:bg-gray-100 dark:hover:bg-[#1E2028] dark:text-gray-400">
                {{ menuList.menuNm }}
            </RouterLink>
          </nav>      
   </aside>

  </template>
  
  <script setup>
  import { RouterLink,RouterView } from 'vue-router'
  import axios from 'axios'
  import { ref } from 'vue';
  
  const sysMenuList = ref([]);
  
      axios
      .get("/restApi/prj/sys/sysMenuList.do")
      .then((restApi) => {
        console.log('sysMenuList : ', restApi.data);
        if(restApi.status === 200){
          sysMenuList.value = restApi.data;
        }
      })
      .catch((error) => {
        console.log('sysMenuList : ', error);
      })
  
  </script>
  
  <style lang="scss" scoped>
  
  </style>