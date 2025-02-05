<template>
    <div class="flex h-screen bg-gray-200 font-roboto">
    <LeftMenu/>
        <div class="flex-1 flex flex-col overflow-hidden">
        <Header/>
    <!-- Main Content -->
            <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                <div class="flex-1 overflow-y-auto">
                    <div class="p-6">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                        <div class="bg-white dark:bg-[#252731] h-32 p-6 rounded-lg shadow-md md:col-span-1">
                            <!-- 검색영역 -->
                        </div>
                    </div>
                        <!-- 바디영역-->
                        <div class="mt-4 bg-white dark:bg-[#252731] p-6 rounded-lg shadow-md md:col-span-1 whitespace-nowrap overflow-x-auto relative">
                            <h2 class="text-xl font-semibold leading-tight text-gray-700">메인</h2>
                        </div>
                       
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script setup>
import LeftMenu from '@/components/LeftMenu.vue';
import Header from '@/components/Header.vue'
import { RouterLink,RouterView } from 'vue-router'
</script>

<style lang="scss" scoped>

</style>