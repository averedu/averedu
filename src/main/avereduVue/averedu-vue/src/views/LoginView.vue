<template>
<section v-if="$route.path === '/index.html' ? true : false" class="bg-gray-50 dark:bg-gray-900">
<!-- <section v-if="$route.path === '/' ? true : false" class="bg-gray-50 dark:bg-gray-900"> -->
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
  
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="id" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">아이디</label>
                      <input type="id" name="id" id="id"  value="admin" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="아이디를 입력해주세요." required="">
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">패스워드</label>
                      <input type="password" name="password" id="password" value="1234"  placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                  </div>
                  <!--
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="">
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="remember" class="text-gray-500 dark:text-gray-300">아이디 저장</label>
                          </div>
                      </div>
                      <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">패스워드를 잊으셨나요?</a>
                  </div>
                  -->
                  <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  @click="login">로그인</button>
                  <!--
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">회원가입</a>
                  </p>-->
              </form>
          </div>
      </div>
  </div>
</section>
<RouterView></RouterView>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const login = () => {
    router.push('/main')
}
</script>

<style lang="scss" scoped>

</style>