<script setup>
import router from "@/router";
import { defineEmits,ref } from "vue";
import { useLink } from "vue-router";
import { useToast } from 'vue-toastification';
const emit = defineEmits(['showsidebar']);
const showSidebar = ref(true);

const toast = useToast();
let registr = ref(false);
let phoneNumber = ref('');
let cofirmCode = ref('');
let nextPage = ref(false);
let tekCODE = ref('');
let username = ref('');
let password = ref('');


let loginPhoneNumber = ref('');
let loginPassword = ref('');

const loginAuth = () => {
  fetch("http://localhost:8000/app/sport/login/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({'phoneNumber':loginPhoneNumber.value,'password':loginPassword.value})
      })
      .then(res => res.json())
      .then(data => {
        sessionStorage.setItem('authSportAppQuizUserID',data.id);
        toast.success('Auth login success full');
        emit('authchik');
        // router.push('/home');
       }).catch(err => {
        toast.error('error login');
        console.log(err);
       });
}

const changeRegistr = () => {
  registr.value = !registr.value;
};

const GetCode = () => {
  // toast.error('Auth Error');
  fetch("http://localhost:8000/app/sport/login/getCode", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({'phoneNumber':phoneNumber.value})
      })
      .then(res => res.json())
      .then(data => {
        tekCODE._value = data;
        toast.success('code send to your phone number');
       }).catch(err => {
        toast.error('error sending');
        console.log(err);
       });
}

const confirmAuth = () => {
  fetch("http://localhost:8000/app/sport/login/authCodeIdentify", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({'phoneNumber':phoneNumber.value,'authCode':cofirmCode.value})
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        nextPage.value = !nextPage.value;
        toast.success('Tasdiqlandi!!!');
        // sessionStorage.setItem('authSportAppQuiz',true);
        // router.push('/home');
       }).catch(err => {
        toast.error("parol hato kiritildi!!!");
        console.log(err);
       });
}

const regiterHandler = () => {
  let user = {
    username:username.value,
    phoneNumber:phoneNumber.value,
    roleuser:"justUser",
    password:password.value
  }
  fetch("http://localhost:8000/app/sport/login/registration", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        nextPage.value = false;
        registr.value = false;
        toast.success('Tasdiqlandi!!!');
        sessionStorage.setItem('authSportAppQuizUserID',data);
        router.push('/home');
        
       }).catch(err => {
        toast.error("malumotlarni saqashdagi hatolik!!!");
        console.log(err);
        // emit('authchik');
       });
}

</script>

<template>
  <div class="h-screen w-full bg-[#fbf7f4] flex items-center justify-center">
    <div
      class="loginPage w-full h-screen bg-black flex items-center justify-center"
    >
    
      <form
      @submit.prevent
        action=""
        class="w-[450px] h-[380px] flex flex-col items-center justify-center shadow-2xl border rounded-xl"
        v-show="registr"
      >
        <div class="w-[400px] h-[287px]" v-show="!nextPage">
          <div class="h-8 flex mb-5 items-center justify-between">
            <button class="bg-white w-16 h-8 rounded-lg text-4xl flex items-center justify-center" @click = "changeRegistr"><</button>
            <h1 class="text-white text-3xl text-center font-medium">Registration</h1>
            <button class=" w-16 h-8"></button>
          </div>
          <div class="flex justify-between items-end">
            <div class="w-3/4">
              <label
                for="phone"
                class="block mb-2 font-medium text-white text-lg"
                >Phone Number</label
              >
              <input
                type="text"
                id="phone"
                v-model="phoneNumber"
                class="bg-gray-200 border text-black text-sm rounded-lg w-full p-2.5"
                placeholder="+998997880435"
                required
              />
            </div>
            <button type="submit" class="text-white bg-blue-400 w-1/5 h-[42px] rounded font-medium" @click="GetCode"
              >Send</button
            >
          </div>
          <div class="my-5">
            <label
              for="password"
              class="block mb-2 font-medium text-white text-lg"
              >password</label
            >
            <input
              type="password"
              id="password"
              v-model="cofirmCode"
              class="bg-gray-200 border text-black text-sm rounded-lg w-full p-2.5"
              placeholder="********"
              required
            />
          </div>
          <button class="text-lime-500 text-2xl w-full bg-[#cabdbdc0] h-[42px] rounded-lg font-medium" @click="confirmAuth()">
            confirm
          </button>
        </div>
        <div class="w-[400px] h-[277px]" v-show="nextPage">
          <h1 class="text-lime-200 text-center text-2xl mb-3">Create login and password</h1>
          <div>
            <label for="phone" class="block mb-2 font-medium text-white text-lg"
              >Username</label
            >
            <input
              type="text"
              class="bg-gray-200 border text-black text-sm rounded-lg w-full p-2.5"
              placeholder="John Doe"
              v-model="username"
              required
            />
          </div>
          <div class="my-5">
            <label
              for="password"
              class="block mb-2 font-medium text-white text-lg"
              >password</label
            >
            <input
              type="password"
              class="bg-gray-200 border text-black text-sm rounded-lg w-full p-2.5"
              placeholder="********"
              v-model="password"
              required
            />
          </div>
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            @click="regiterHandler()"
          >
            Save
          </button>
        </div>
      </form>
      <form
        class="w-[450px] h-[340px] flex items-center justify-center shadow-2xl border rounded-xl"
        v-show="!registr"
        @submit.prevent
      >
        <div class="w-[400px] h-[295px]">
          <h1 class="text-white text-3xl text-center font-medium">Login</h1>
          <div>
            <label for="phone" class="block mb-2 font-medium text-white text-lg"
              >Number</label
            >
            <input
              type="text"
              class="bg-gray-200 border text-black text-sm rounded-lg w-full p-2.5"
              placeholder="+998997880435"
              v-model = "loginPhoneNumber"
             required
            />
          </div>
          <div class="my-5">
            <label
              for="password"
              class="block mb-2 font-medium text-white text-lg"
              >password</label
            >
            <input
              type="password"
              class="bg-gray-200 border text-black text-sm rounded-lg w-full p-2.5"
              placeholder="********"
              v-model = "loginPassword"
              required
            />
          </div>
          <div class="flex items-center justify-between mb-5">
            <button class="text-yellow-200 text-xl font-medium" v-on:click="changeRegistr">
              Reagistration
            </button>
            <button
            type="submit"
            @click="loginAuth()"
            class="text-white bg-blue-700 font-medium rounded-lg text-lg px-5 py-2.5 text-center"
          >
            Submit
          </button>

          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.loginPage {
  background-image: url("../assets/image/background.jpg");
  /* background-image: url("https://wallpapers.com/images/high/fitness-pictures-zgrj0gsonbn9kin0.webp"); */
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
}

</style>
