<template>
<div class="flex h-screen w-full bg-gray-100 dark:bg-[#1E2028]">
    <!-- Sidebar -->
    <aside class="w-64 h-screen bg-white dark:bg-[#15161A] shadow-md">
        <div class="p-4 border-b border-gray-200 dark:border-gray-700">
            <h1 class="text-2xl font-semibold text-gray-800 dark:text-white">averedu</h1>
        </div>
        <nav class="mt-4">
          <RouterLink to="/deptCdConnAttrInfo" class="flex items-center px-4 py-2 text-gray-700 bg-gray-100 dark:bg-[#1E2028] dark:text-gray-200">
            부서코드연계속성정보
          </RouterLink>
          <RouterLink to="/about" class="flex items-center px-4 py-2 mt-1 text-gray-600 hover:bg-gray-100 dark:hover:bg-[#1E2028] dark:text-gray-400">
            about
         </RouterLink>
          <RouterLink to="#" class="flex items-center px-4 py-2 mt-1 text-gray-600 hover:bg-gray-100 dark:hover:bg-[#1E2028] dark:text-gray-400">
            메뉴1
          </RouterLink>
          <RouterLink to="#" class="flex items-center px-4 py-2 mt-1 text-gray-600 hover:bg-gray-100 dark:hover:bg-[#1E2028] dark:text-gray-400">
            메뉴2
         </RouterLink>
        </nav>
    </aside>

    <RouterView />
</div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style lang="scss" scoped>

</style>