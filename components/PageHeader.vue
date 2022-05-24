<template>
  <div class="flex justify-center w-full ">

    <div class=" p-4 md:pl-8 md:pr-8 max-w-3xl  flex w-full place-items-center justify-between">
      <div class="flex gap-10">
        <a href="/"><h1 class="text-white font-semibold text-xl hover:underline dark:text-black">Aurélien K</h1></a>
        <a href="/projects"><h1 class="text-white font-semibold text-xl hidden md:block hover:underline dark:text-black">Projets</h1>
        </a>
        <a href="/photos"><h1 class="text-white font-semibold text-xl hidden md:block hover:underline dark:text-black">Photos</h1></a>
      </div>
      <div class="p-2 rounded flex gap-1 ">
        <button class="p-3 rounded-xl bg-[#FBD38D] dark:bg-[#202023]" @click="lightMode()">
          <svg viewBox="0 0 24 24" focusable="false" class="h-4 w-4 text-black dark:text-white " aria-hidden="true">
            <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="5"></circle>
              <path d="M12 1v2"></path>
              <path d="M12 21v2"></path>
              <path d="M4.22 4.22l1.42 1.42"></path>
              <path d="M18.36 18.36l1.42 1.42"></path>
              <path d="M1 12h2"></path>
              <path d="M21 12h2"></path>
              <path d="M4.22 19.78l1.42-1.42"></path>
              <path d="M18.36 5.64l1.42-1.42"></path>
            </g>
          </svg>
        </button>
        <button class="p-3 rounded-xl border border-gray-400 md:hidden" @click="openSideMenu()">
          <svg class="h-4 w-4 text-white" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
            <path
fill="currentColor"
                  d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"></path>
          </svg>
        </button>
      </div>
    </div>

    <div id="sideMenu" class="bg-black/70 h-full w-full translate-x-full  dark:bg-amber-700/70 fixed z-50 right-0 top-0 transition-all pt-10 pr-10 md:hidden ">
      <div>
        <button  class="top-3 ml-10" @click="closeSideMenu()"> <img class="h-8" src="../assets/images/closeWhite.png"> </button>
      </div>
      <div class="flex flex-col place-items-center md:hidden gap-12 pt-56">
        <a href="/" class="text-3xl">Accueil</a>
        <a href="/projects" class="text-3xl">Projets</a>
        <a href="/photos" class="text-3xl">Photos</a>
      </div>



    </div>
  </div>


</template>
<script>
export default {
  methods: {
    lightMode() {
      document.documentElement.classList.toggle('dark');
      document.documentElement.classList.toggle('light');
    },
    openSideMenu(){
      document.getElementById('sideMenu').style.transform="translateX(0%)"
    },
    closeSideMenu(){
      document.getElementById('sideMenu').style.transform="translateX(100%)"

    }
  }
}
</script>

