<template>

  <a :href="link" target="_blank" class="w-full flex justify-center mb-10  justify-evenly md:h-[165px] md:w-[220px] cursor-zoom-in">
    <div class="w-full flex justify-center max-w-3xl">
      <div class="w-11/12 flex flex-col place-items-center ">
        <img :src="link" class="rounded-xl h-[220px] md:h-[165px] md:w-[165px] object-cover " alt="">
        <h1 class="font-semibold text-2xl text-white dark:text-black">{{ title }}</h1>

      </div>

    </div>
  </a>
</template>

<script>
export default {
  name: "PhotoElement",
  // eslint-disable-next-line vue/require-prop-types
  props: ['title', 'link'],
}
</script>

<style scoped>

</style>
