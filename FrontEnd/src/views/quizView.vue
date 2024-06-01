<script setup>
import router from "@/router";
import { ref, onMounted, computed } from "vue";
import { defineEmits } from "vue";

const emit = defineEmits(["showsidebar"]);
// let taym = ref(60);
// onMounted(() => {
//     console.log(taym.value);
//   setInterval(() => {
//     taym.value--;
//     console.log(taym.value);
//   }, 1000);
//   clearInterval(inter);

// });

const targetTime = ref(new Date().getTime() + 600000); // 1 minute from now
const timeRemaining = computed(() => targetTime.value - currentTime.value);
const currentTime = ref(new Date().getTime());
const formattedTime = computed(() => {
  const seconds = Math.floor(timeRemaining.value / 1000);
  return `${Math.floor(seconds / 60)}:${seconds % 60}`;
});
const updateCurrentTime = () => {
  currentTime.value = new Date().getTime();
};
const coletest = () => {
  emit("yakun");
  router.push("/");
};

onMounted(() => {
  setInterval(updateCurrentTime, 1000);
});
</script>

<template>
  <div class="display22 w-full h-auto text-white pt-20">
    <div class="w-[1050px] h-[1500px] mx-auto">
      <div class="flex justify-between">
        <div class="w-[700px] gap-6">
          <h1 class="text-2xl font-medium text-white mb-7 text-center">
            Quiz Page
          </h1>
          <div class="flex flex-col gap-5 h-[330px] mb-6">
            <h1 class="flex text-white text-[22px]">
              1.Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
              molestiae?
            </h1>
            <label
              for="default-checkbox1"
              class="flex items-center h-12 w-full bg-[#ccc0c025] text-white rounded-xl border"
            >
              <input
                id="default-checkbox1"
                type="radio"
                name="savol1"
                class="mx-4 h-4 w-4 text-white"
              />
            Savol_1
            </label>

            <label
              for="default-checkbox2"
              class="flex items-center h-12 w-full bg-[#ccc0c025] text-white rounded-xl border"
            >
              <input
                id="default-checkbox2"
                type="radio"
                name="savol1"
                class="mx-4 h-4 w-4 text-white"
              />
              Savol_2
            </label>
            <label
              for="default-checkbox3"
              class="flex items-center h-12 w-full bg-[#ccc0c025] text-white rounded-xl border"
            >
              <input
                id="default-checkbox3"
                type="radio"
                name="savol1"
                class="mx-4 h-4 w-4 text-white"
              />
              Savol_3
            </label>
            <label
              for="default-checkbox3"
              class="flex items-center h-12 w-full bg-[#ccc0c025] text-white rounded-xl border"
            >
              <input
                id="default-checkbox3"
                type="radio"
                name="savol1"
                class="mx-4 h-4 w-4 text-white"
              />
              Savol_4
            </label>

          </div>
        </div>
        <div class="controlQuiz flex flex-col items-center w-[240px]">
          <div class="fixed">
            <h2
              class="h-28 w-28 mx-auto mb-6 rounded-full bg-blue-400 flex items-center justify-center text-2xl"
            >
              {{ formattedTime }}
            </h2>
            <div
              class="h-[470px] w-[390px] rounded-xl bg-white grid grid-cols-8 grid-rows-7 px-3 py-5 gap-[8px]"
            >
              <div
                class="h-13 w-[36px] bg-gray-300 rounded flex items-center justify-center text-black"
                v-for="r in 50"
              >
                {{ r }}
              </div>
            </div>
            <button
              class="bg-red-400 w-full h-12 rounded-xl mt-5"
              @click="coletest()"
            >
              Yakunlash
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.display22 {
  /* background-image: url('../assets/image/download.jpeg');
        background-repeat: no-repeat;
        background-size: cover; */
  /* background-position: center;
        backdrop-filter: blur(53px); */
  /* position: relative; */
  background-color: #050404e3;
  /* backdrop-filter: var(); */
  /* filter: blur(3.5px); */
  /* filter: blur(8px);
        -webkit-filter: blur(8px); */
}
</style>
