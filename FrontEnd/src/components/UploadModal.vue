<script setup>
// http://localhost:8000/api/uploadQuiz]
import {ref} from "vue"
import axios from "axios"
let filez = ref();
const handleFileChange = (event) => {
    filez = event.target.files[0];
};
const uploadJsFile = () => {
  const formData = new FormData();
  formData.append("excelFile", filez);
  axios
    .post("http://localhost:8000/api/uploadQuiz", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });

};
</script>

<template>
  <div>
    <form class="w-60 h-24" @submit.prevent>
      <label class="block">
        <span class="sr-only">Choose profile photo</span>
        <input
          type="file"
          @change="handleFileChange"
          accept=".xlsx"
          class="block w-60 text-sm text-gray-500 file:me-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 file:disabled:opacity-50 file:disabled:pointer-events-none dark:text-neutral-500 dark:file:bg-blue-500 dark:hover:file:bg-blue-400"
        />
        <button
          class="bg-lime-400 w-full h-10 rounded-xl text-lg font-medium mt-5"
          type="submit"
          v-on:click="uploadJsFile()"
        >
          Upload
        </button>
      </label>
    </form>
  </div>
</template>

<style></style>
