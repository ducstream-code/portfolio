<template>
  <div class="flex flex-col justify-center w-full bg-[#202023] dark:bg-amber-100 h-full">
    <PageHeader/>
    <ProjectMain/>


<PageFooter/>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Projects",

  data: () => ({
    projects: [],
    error: null,
  }),

  created() {
    this.$axios.get('https://api.aurelienk.space/projects/get.php').then(result => {
      if(result.data) this.projects = result.data;
    }).catch(error => {
      console.error(error);
      this.error = error;
    })
  }
}
</script>

<style>

</style>
