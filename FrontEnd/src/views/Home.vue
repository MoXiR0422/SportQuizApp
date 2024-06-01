<script setup>
  import { RouterLink , useRouter } from 'vue-router';
  import { onMounted ,ref ,defineEmits, watch} from 'vue';
  import router from '@/router';

const emit = defineEmits(['showsidebar']);
let testStarter = ref(false);
let asossiy = ref(false);
let testStarted = ref(false)

// const router = useRouter();
watch(()=>router.currentRoute.value.path, async (newrouter, oldrouter) => {
  if (router.currentRoute.value.path === "/") {
    asossiy.value = true;
  }else{
    asossiy.value = false;  
  }
})

  let coco = ref('');
  let identy = ref(false);
  onMounted(()=>{
    if (router.currentRoute.value.path === "/") {
      asossiy.value = true;
    }else{
    asossiy.value = false;  
  }
    coco = sessionStorage.getItem("authSportAppQuizUserID");
    if (coco) {
      identy.value = true;
      console.log(coco);
    }else{
      identy.value = false;
    }
  })
  const logOut = () => {
    sessionStorage.removeItem("authSportAppQuizUserID");
    emit('authchik2');
  }
  const changeStarterA = () => {
    // alert('keldi')
    testStarter.value = !testStarter.value;
  }
  const changeStarterB = () => {
    // alert('keldi')
    testStarter.value = !testStarter.value;
    testStarted.value = !testStarted.value;
  }
  const closeTest = () => {
    testStarted.value = !testStarted.value;
  }
 
</script>

<template>
  <div class="w-full h-screen flex flex-col" :class="{'mainOkna1': asossiy}">
    <nav class="w-[1444px] h-20 mx-auto mt-5 flex justify-between items-center" v-if="!testStarted">
      <button class="text-white text-4xl font-semibold">
        <RouterLink to="/">LiderTrener</RouterLink>
      </button>
      <ul class="flex gap-10 text-white items-center text-[18px]">
        <li>
          <h1>
            <RouterLink to="/aboutUs" >Biz haqimizda</RouterLink>
          </h1>
        </li>
        <li>
          <button>
            <RouterLink to="/myResult" >Mening natijalarim</RouterLink>
          </button>
        </li>
        <li>
          <button>
            <RouterLink to="/allTest" >Testlar</RouterLink>
          </button>
        </li>
        <li>
          <button>
            <RouterLink to="/constactUs" >Biz bilan aloqa</RouterLink>
          </button>
        </li>
        <li>
          <button v-if="!identy" class="bg-white text-[#8368FF] h-10 w-24 rounded-lg font-medium">
            <RouterLink to="/loginchangeStarter" >Kirish</RouterLink>
          </button>
          <button v-if="identy" class="bg-white text-red-600 h-10 w-24 rounded-lg font-medium" v-on:click="logOut()">
            <RouterLink to="/">Chiqish</RouterLink>
          </button>
        </li>
      </ul>
    </nav>
    
    <!-- Modal -->
    <div v-if="testStarter" class="bg-[#0000008c] h-screen w-full absolute flex items-center justify-center">
      <div class="h-[130px] w-[270px] bg-white rounded-xl flex flex-wrap flex-col">
        <h1 class="text-center mt-5 text-xl">Testni boshlash!!!!</h1>
        <span class="flex justify-between px-5 mt-5">
          <button class="h-9 w-24 bg-red-500 text-white rounded-lg text-xl" @click="changeStarterA">Yoq</button>
        <button class="h-9 w-24 bg-green-600 text-white rounded-lg text-xl" @click="changeStarterB">
          <RouterLink to="/quiz">Ha</RouterLink>
        </button>
      
        </span>
        </div>
    </div>

    <RouterView @kuzatuv="changeStarterA" @yakun = "closeTest"></RouterView>
    
  </div>
</template>

<style scoped>
  
  .mainOkna1{
    background-image: url("../assets/image/download.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-size: 700px;
    background-position-y: top;
    background-position-x: right;
  }

</style>
<!-- #8368FF -->
