<template>
    <div class="flex h-screen w-full bg-gray-100 dark:bg-[#1E2028]">
    <LeftMenu></LeftMenu>
    <!-- Main Content -->
    <div class="flex-1 overflow-y-auto">
        <div class="p-6">
            <h2 class="text-1xl font-semibold mb-4 text-gray-800 dark:text-white">프로그램 관리</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
              
                <div class="bg-white dark:bg-[#252731] h-32 p-6 rounded-lg shadow-md md:col-span-1">
                   <!-- 검색영역 -->
                </div>
            </div>
             <!-- 바디영역-->
             <h2 class="text-1xl font-semibold mb-4 text-gray-800 dark:text-white">프로그램 관리</h2>
        </div>
    </div>
 </div>
 </template>
 
 <script setup>
 import LeftMenu from '@/components/LeftMenu.vue';
 import { RouterLink,RouterView } from 'vue-router'
 </script>
 
 <style lang="scss" scoped>
 
 </style>