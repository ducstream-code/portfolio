<template>

  <div class="w-full flex justify-center mb-10  justify-evenly">
    <div class="w-full flex justify-center max-w-3xl">
      <div class="w-11/12 flex flex-col place-items-center ">
        <a :href="git"><img :src="link" class="rounded-xl min-h-[165px] " alt=""></a>
        <h1 class="font-semibold text-2xl text-white dark:text-black">{{ title }}</h1>
        <p class="text-center text-gray-500 text-sm font-semibold">{{ description }}</p>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectElement",
  // eslint-disable-next-line vue/require-prop-types
  props: ['title', 'link', 'description','git'],
}
</script>

<style scoped>

</style>
