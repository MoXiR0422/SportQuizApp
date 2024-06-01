<script setup>

</script>

<template>

    <div class="w-[1444px] h-[780px] mx-auto grid grid-cols-2 grid-rows-2 text-white">
      <div class="col-span-1 row-span-1 bg-a flex items-center h-[750px]">
        <div class="h-80 flex flex-col justify-between">
          <h1 class="font-semibold text-6xl">Perfect Workout Coach For <br/><span class="text-[#8368FF]">Body Shape</span></h1>
          <p>Quisque leo augue, lobortis ac tellus nec, posuere ultricies nulla. Praesent massa odio, pellentesque in consectetur quis, volutpat sit amet erat.</p>
          <button class="bg-[#8368FF] rounded-xl h-11 w-32">Learn more</button>
        </div>
      </div>
      <div class="col-span-1 row-span-2 bg-b mainOkna2 h-[750px]"></div>
      <div class="col-span-2 row-span-1 bg-c h-[70px] w-full bg-white rounded-2xl">
        <ul class="flex text-black justify-around items-center  h-[70px] text-lg font-normal">
          <li class="px-2">New tests</li>
          <hr class="w-[1px] h-8 bg-black"/>
          <li class="px-2">Your results</li>
          <hr class="w-[1px] h-8 bg-black"/>
          <li class="px-2">Opportunity to improve your knowledge</li>
          <hr class="w-[1px] h-8 bg-black"/>
          <li class="px-2">Latest news</li>
        </ul>
      </div>
    </div>  


</template>

<style scoped>
    .mainOkna2{
    background-image: url("../assets/image/header-img.png"),url("../assets/image/download1.png");
    /* background-size: cover; */
    background-repeat: no-repeat;
    background-size: contain,400px;
    background-position-y: 23px,center;
    background-position-x: 90px,right;
}
</style>