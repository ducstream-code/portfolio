(window.webpackJsonp=window.webpackJsonp||[]).push([[9,3,4,7,8],{280:function(t,e,r){t.exports=r.p+"img/closeWhite.1d2367b.png"},281:function(t,e,r){"use strict";r.r(e);var l={methods:{lightMode:function(){document.documentElement.classList.toggle("dark"),document.documentElement.classList.toggle("light")},openSideMenu:function(){document.getElementById("sideMenu").style.transform="translateX(0%)"},closeSideMenu:function(){document.getElementById("sideMenu").style.transform="translateX(100%)"}}},n=r(51),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"flex justify-center w-full "},[l("div",{staticClass:" p-4 md:pl-8 md:pr-8 max-w-3xl  flex w-full place-items-center justify-between"},[t._m(0),t._v(" "),l("div",{staticClass:"p-2 rounded flex gap-1 "},[l("button",{staticClass:"p-3 rounded-xl bg-[#FBD38D] dark:bg-[#202023]",on:{click:function(e){return t.lightMode()}}},[l("svg",{staticClass:"h-4 w-4 text-black dark:text-white ",attrs:{viewBox:"0 0 24 24",focusable:"false","aria-hidden":"true"}},[l("g",{attrs:{"stroke-linejoin":"round","stroke-linecap":"round","stroke-width":"2",fill:"none",stroke:"currentColor"}},[l("circle",{attrs:{cx:"12",cy:"12",r:"5"}}),t._v(" "),l("path",{attrs:{d:"M12 1v2"}}),t._v(" "),l("path",{attrs:{d:"M12 21v2"}}),t._v(" "),l("path",{attrs:{d:"M4.22 4.22l1.42 1.42"}}),t._v(" "),l("path",{attrs:{d:"M18.36 18.36l1.42 1.42"}}),t._v(" "),l("path",{attrs:{d:"M1 12h2"}}),t._v(" "),l("path",{attrs:{d:"M21 12h2"}}),t._v(" "),l("path",{attrs:{d:"M4.22 19.78l1.42-1.42"}}),t._v(" "),l("path",{attrs:{d:"M18.36 5.64l1.42-1.42"}})])])]),t._v(" "),l("button",{staticClass:"p-3 rounded-xl border border-gray-400 md:hidden",on:{click:function(e){return t.openSideMenu()}}},[l("svg",{staticClass:"h-4 w-4 text-white",attrs:{viewBox:"0 0 24 24",focusable:"false","aria-hidden":"true"}},[l("path",{attrs:{fill:"currentColor",d:"M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"}})])])])]),t._v(" "),l("div",{staticClass:"bg-black/70 h-full w-full translate-x-full  dark:bg-amber-700/70 fixed z-50 right-0 top-0 transition-all pt-10 pr-10 md:hidden ",attrs:{id:"sideMenu"}},[l("div",[l("button",{staticClass:"top-3 ml-10",on:{click:function(e){return t.closeSideMenu()}}},[l("img",{staticClass:"h-8",attrs:{src:r(280)}})])]),t._v(" "),t._m(1)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex gap-10"},[r("a",{attrs:{href:"/"}},[r("h1",{staticClass:"text-white font-semibold text-xl hover:underline dark:text-black"},[t._v("Aurélien K")])]),t._v(" "),r("a",{attrs:{href:"/projects"}},[r("h1",{staticClass:"text-white font-semibold text-xl hidden md:block hover:underline dark:text-black"},[t._v("Projets")])]),t._v(" "),r("a",{attrs:{href:"/photos"}},[r("h1",{staticClass:"text-white font-semibold text-xl hidden md:block hover:underline dark:text-black"},[t._v("Photos")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-col place-items-center md:hidden gap-12 pt-56 text-white"},[r("a",{staticClass:"text-3xl text-white",attrs:{href:"/"}},[t._v("Accueil")]),t._v(" "),r("a",{staticClass:"text-3xl text-white",attrs:{href:"/projects"}},[t._v("Projets")]),t._v(" "),r("a",{staticClass:"text-3xl text-white",attrs:{href:"/photos"}},[t._v("Photos")])])}],!1,null,null,null);e.default=component.exports},282:function(t,e,r){"use strict";r.r(e);var l={name:"PageFooter"},n=r(51),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"text-center text-sm text-gray-300"},[t._v("\n©Aurélien KRIEF\n")])}),[],!1,null,"fc6d2d52",null);e.default=component.exports},284:function(t,e,r){"use strict";r.r(e);var l={name:"ProjectElement",props:["title","link","description","git"]},n=r(51),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full flex justify-center mb-10  justify-evenly"},[r("div",{staticClass:"w-full flex justify-center max-w-3xl"},[r("div",{staticClass:"w-11/12 flex flex-col place-items-center "},[r("a",{attrs:{href:t.git}},[r("img",{staticClass:"rounded-xl min-h-[165px] ",attrs:{src:t.link,alt:""}})]),t._v(" "),r("h1",{staticClass:"font-semibold text-2xl text-white dark:text-black"},[t._v(t._s(t.title))]),t._v(" "),r("p",{staticClass:"text-center text-gray-500 text-sm font-semibold"},[t._v(t._s(t.description))])])])])}),[],!1,null,"2476a22b",null);e.default=component.exports},289:function(t,e,r){"use strict";r.r(e);var l={name:"ProjectMain",data:function(){return{projects:[],error:null}},created:function(){var t=this;this.$axios.get("https://api.aurelienk.space/projects/get.php").then((function(e){e.data&&(t.projects=e.data)})).catch((function(e){console.error(e),t.error=e}))}},n=r(51),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-col place-items-center bg-[#202023] dark:bg-amber-100 h-full"},[t._m(0),t._v(" "),r("div",{staticClass:"p-7 max-w-3xl md:grid md:grid-cols-2 h-full bg-[#202023] dark:bg-amber-100"},[t._l(t.projects,(function(t){return r("ProjectElement",{key:t.id,attrs:{title:t.title,link:t.image,description:t.description,git:t.git}})})),t._v(" "),t.error?r("span",[t._v(t._s(t.error))]):t._e()],2)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"max-w-3xl w-full pl-7"},[r("h1",{staticClass:"_fullname font-semibold text-white text-xl border-b-4 border-gray-600 w-32 mb-4 mt-5 dark:text-black "},[t._v("Mes projets")])])}],!1,null,"1179a9a8",null);e.default=component.exports;installComponents(component,{ProjectElement:r(284).default})},294:function(t,e,r){"use strict";r.r(e);var l={name:"Projects",data:function(){return{projects:[],error:null}},head:function(){return{title:"Projets"}},created:function(){var t=this;this.$axios.get("https://api.aurelienk.space/projects/get.php").then((function(e){e.data&&(t.projects=e.data)})).catch((function(e){console.error(e),t.error=e}))}},n=r(51),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-col justify-center w-full bg-[#202023] dark:bg-amber-100 h-full"},[r("PageHeader"),t._v(" "),r("ProjectMain"),t._v(" "),r("PageFooter")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PageHeader:r(281).default,ProjectMain:r(289).default,PageFooter:r(282).default})}}]);