exports.ids = [7,6];
exports.modules = {

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ProjectElement.vue?vue&type=template&id=2476a22b&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"w-full flex justify-center mb-10  justify-evenly"},[_vm._ssrNode("<div class=\"w-full flex justify-center max-w-3xl\" data-v-2476a22b><div class=\"w-11/12 flex flex-col place-items-center \" data-v-2476a22b><a"+(_vm._ssrAttr("href",_vm.git))+" data-v-2476a22b><img"+(_vm._ssrAttr("src",_vm.link))+" alt class=\"rounded-xl min-h-[165px] \" data-v-2476a22b></a> <h1 class=\"font-semibold text-2xl text-white dark:text-black\" data-v-2476a22b>"+_vm._ssrEscape(_vm._s(_vm.title))+"</h1> <p class=\"text-center text-gray-500 text-sm font-semibold\" data-v-2476a22b>"+_vm._ssrEscape(_vm._s(_vm.description))+"</p></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ProjectElement.vue?vue&type=template&id=2476a22b&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ProjectElement.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ProjectElementvue_type_script_lang_js_ = ({
  name: "ProjectElement",
  // eslint-disable-next-line vue/require-prop-types
  props: ['title', 'link', 'description', 'git']
});
// CONCATENATED MODULE: ./components/ProjectElement.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ProjectElementvue_type_script_lang_js_ = (ProjectElementvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ProjectElement.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ProjectElementvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2476a22b",
  "7626f462"
  
)

/* harmony default export */ var ProjectElement = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ProjectMain.vue?vue&type=template&id=1179a9a8&scoped=true&class=flex%20justify-center%20h-full%20bg-%5B%23202023%5D%20dark%3Abg-amber-100&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flex flex-col place-items-center bg-[#202023] dark:bg-amber-100 h-full"},[_vm._ssrNode("<div class=\"max-w-3xl w-full pl-7\" data-v-1179a9a8><h1 class=\"_fullname font-semibold text-white text-xl border-b-4 border-gray-600 w-32 mb-4 mt-5 dark:text-black \" data-v-1179a9a8>Mes projets</h1></div> "),_vm._ssrNode("<div class=\"p-7 max-w-3xl md:grid md:grid-cols-2 h-full bg-[#202023] dark:bg-amber-100\" data-v-1179a9a8>","</div>",[_vm._l((_vm.projects),function(project){return _c('ProjectElement',{key:project.id,attrs:{"title":project.title,"link":project.image,"description":project.description,"git":project.git}})}),_vm._ssrNode(" "+((_vm.error)?("<span data-v-1179a9a8>"+_vm._ssrEscape(_vm._s(_vm.error))+"</span>"):"<!---->"))],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ProjectMain.vue?vue&type=template&id=1179a9a8&scoped=true&class=flex%20justify-center%20h-full%20bg-%5B%23202023%5D%20dark%3Abg-amber-100&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ProjectMain.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ProjectMainvue_type_script_lang_js_ = ({
  name: "ProjectMain",
  data: () => ({
    projects: [],
    error: null
  }),

  created() {
    this.$axios.get('https://api.aurelienk.space/projects/get.php').then(result => {
      if (result.data) this.projects = result.data;
    }).catch(error => {
      console.error(error);
      this.error = error;
    });
  }

});
// CONCATENATED MODULE: ./components/ProjectMain.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ProjectMainvue_type_script_lang_js_ = (ProjectMainvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ProjectMain.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ProjectMainvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1179a9a8",
  "b970d47a"
  
)

/* harmony default export */ var ProjectMain = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ProjectElement: __webpack_require__(31).default})


/***/ })

};;
//# sourceMappingURL=project-main.js.map