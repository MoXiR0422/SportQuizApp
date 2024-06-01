
<script setup>

</script>

<template>
  <div class="w-full h-screen bg-[#121527] flex flex-col">
    <div class="w-[1444px] h-[550px] mx-auto mt-32 flex text-white">
        <div class="w-1/2 aboutUsImage"></div>
        <div class="w-1/2 pl-12 flex flex-col justify-around items-start">
          <span class="h-40 flex flex-col justify-around">
            <h1 class="text-6xl font-medium">Let Us Find The Perfect Workout <span class="text-[#8368FF]">For You !</span></h1>
            <img class="h-4 w-14" src="./assets/image/download3.png" alt="">
          </span>
          <p>Fusce orci ligula, tincidunt ut metus vel, venenatis aliquet tortor. Duis et consequat enim. Curabitur pulvinar, dolor at pulvinar molestie, augue massa volutpat felis, at rhoncus tortor velit vel diam. Cras ac suscipit metus.</p>
          <p>Etiam fermentum ex orci, a ullamcorper erat tempor in. Nulla est ante, ullamcorper vitae dui vel, molestie feugiat sapien.</p>
          <p>Integer auctor est nec semper hendrerit. Etiam sollicitudin enim in urna commodo, in dapibus velit elementum. Ut congue nisl sapien, vel ultricies nulla tincidunt vitae. Maecenas non ligula quis massa consequat commodo eleifend ut velit. Vestibulum molestie nunc non libero posuere, quis pellentesque massa tempus.</p>
          <button class="bg-[#8368FF] h-10 w-28 rounded-xl">Read More</button>
        </div>
    </div>
  </div>
</template>

<style scoped>
  .aboutUsImage{
    background-image: url("../assets/image/download2.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-size: 850px;
    background-position-y: center;
    background-position-x: right;
  }
</style>
