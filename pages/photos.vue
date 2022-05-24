<template>
  <div class=" bg-[#202023] dark:bg-amber-100 h-full">
    <PageHeader/>
    <div class="flex flex-col place-items-center">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl ">

    <PhotoComponents v-for="photo in photos" :key="photo.id" :title="photo.title"
                     :link="photo.link"/>


  </div>
    </div>
    <PageFooter/>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Photos",

  data: () => ({
    photos: [],
    error: null,
  }),

  head() {
    return {
      title: "Photos"
    };
  },

  created() {
    this.$axios.get('https://api.aurelienk.space/photos/get.php').then(result => {
      if (result.data) this.photos = result.data;
    }).catch(error => {
      console.error(error);
      this.error = error;
    })
  }

}
</script>

<style scoped>

</style>
