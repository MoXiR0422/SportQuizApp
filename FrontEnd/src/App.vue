<script setup>
  import {ref,onMounted} from "vue";
  import loginPage from "./views/loginPage.vue";
  import HomeVue from "./views/Home.vue";
  import aboutUs from "./views/aboutUs.vue";

  let authUser = ref(false);
  function isAuthenticated() {
    const authToken = sessionStorage.getItem('authSportAppQuizUserID');
    authToken ? authUser.value = !authUser.value : authUser.value = false;
    console.log(authUser);
    // alert("Authentication");
    // console.log(authToken);
    // return !!authToken; 
  }
  onMounted(()=>{
    isAuthenticated();
  });
</script>

<template>
  <div class="h-full w-full">
      <!-- <router-link to="/about">About Us</router-link>   -->
      <!-- <router-view></router-view> -->
      <HomeVue v-if="authUser" @authchik2="isAuthenticated"/>
      <loginPage v-if="!authUser" @authchik="isAuthenticated"/>
  </div>
</template>

<style scoped>

</style>