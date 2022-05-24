<template class="flex justify-center h-full bg-[#202023] dark:bg-amber-100">
  <div class="flex flex-col place-items-center bg-[#202023] dark:bg-amber-100 h-full">
    <div class="max-w-3xl w-full pl-7">
      <h1 class="_fullname font-semibold text-white text-xl border-b-4 border-gray-600 w-32 mb-4 mt-5 ">Mes projets</h1>
    </div>

    <div class="p-7 max-w-3xl md:grid md:grid-cols-2 h-full bg-[#202023] dark:bg-amber-100">

      <ProjectElement v-for="project in projects" :key="project.id" :title="project.title"
                      :link="project.image"
                      :description="project.description"
                      :git="project.git"
      />
      <span v-if="error">{{ error }}</span>
    </div>
  </div>

</template>

<script>
export default {
  name: "ProjectMain",
  data: () => ({
    projects: [],
    error: null,
  }),

  created() {
    this.$axios.get('https://api.aurelienk.space/projects/get.php').then(result => {
      if (result.data) this.projects = result.data;
    }).catch(error => {
      console.error(error);
      this.error = error;
    })
  }
}
</script>

<style scoped>

</style>
