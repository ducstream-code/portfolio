exports.ids = [4];
exports.modules = {

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(33);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("5e008c7c", content, true, context)
};

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageMain_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageMain_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageMain_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageMain_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageMain_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;400;500;700;800;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body{color:#fff}._mainText{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}._fullname{font-family:\"M PLUS Rounded 1c\",sans-serif}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PageMain.vue?vue&type=template&id=b5210c98&class=flex%20justify-center&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flex justify-center"},[_vm._ssrNode("<div class=\"p-7 max-w-3xl\">","</div>",[_vm._ssrNode("<h1 class=\"_mainText text-white bg-[#FFFFFF]/10 dark:bg-[#FFFFFF]/60 text-center rounded p-2 mb-8 dark:text-black\">Bonjour, je suis Aurélien Krief un développeur\n        français</h1> <h1 class=\"_fullname text-white text-4xl font-semibold dark:text-black\">Aurélien Krief</h1> <p class=\"text-white  dark:text-black\">Étudiant en développement informatique</p> <p class=\"text-white  dark:text-black\">Paris</p> <p class=\"text-white  dark:text-black\">aurelienkrief@gmail.com</p> <div class=\"flex justify-center\"><img src=\"https://www.cdn.aurelienk.space/images/moi.png\" alt class=\"rounded-full object-cover border-white border  h-32 w-32\"></div> <h1 class=\"_fullname font-semibold text-white text-xl border-b-4 border-gray-600 w-32 mb-2 dark:text-black \">Qui suis-je</h1> <p class=\"text-white mb-2 dark:text-black\">\n        Je suis un apprenti développeur, passionné par divers branches de l'informatique comme la\n        sécurité et le développement Web.\n        Lorsque je ne suis pas devant mon écran, j'aime sortir, voir des amis, découvrir de nouvelles choses ou encore prendre des\n        photos.\n      </p> <div class=\"flex justify-center\"><a href=\"./projects\" class=\"p-2 bg-teal-300 rounded dark:text-white dark:bg-teal-900\">Mes projets</a></div> <h1 class=\"_fullname font-semibold text-white text-xl border-b-4 border-gray-600 w-12 mb-2 mt-5 dark:text-black \">Bio</h1> <div class=\"flex text-white dark:text-black mb-0.5\"><h3 class=\"font-bold mr-2\">2021</h3> <h3>Apprentissage de nouvelles technologies : PHP – WordPress – Google Data Studio – WiseTime – Trello - APIs. Chez <a href=\"https://www.agenceharmonie.com/\" class=\"text-teal-500 dark:text-teal-900 font-bold\">Agence Harmonie</a> en tant qu'assistant développeur stagiaire </h3></div> <div class=\"flex text-white dark:text-black mb-0.5\"><h3 class=\"font-bold mr-2\">2020</h3> <h3>Intégration de l'ESGI</h3></div> <div class=\"flex text-white dark:text-black mb-0.5\"><h3 class=\"font-bold mr-2\">2020</h3> <h3>Obtention du Baccalauréat avec mention</h3></div> <div class=\"flex text-white dark:text-black mb-0.5\"><h3 class=\"font-bold mr-2\">2017</h3> <h3>Apprentissage des bases du HTML, CSS, PHP en tant que stagiaire chez <a href=\"https://www.capsens.eu/\" class=\"text-teal-500 dark:text-teal-900 font-bold\">CapSens</a></h3></div> <div class=\"flex text-white mb-0.5\"><h3 class=\"font-bold mr-2 dark:text-black\">2001</h3> <h3 class=\"dark:text-black\">Né à Paris</h3></div> <h1 class=\"_fullname font-semibold text-white text-xl border-b-4 border-gray-600 w-48 mb-2 mt-8 dark:text-black \">Mes compétences</h1> <p class=\"dark:text-black\">HTML <span class=\"text-2xl\">•</span> CSS <span class=\"text-2xl\">•</span> JS <span class=\"text-2xl\">•</span> PHP <span class=\"text-2xl\">•</span> SQL <span class=\"text-2xl\">•</span>\n      NuxtJS <span class=\"text-2xl\">•</span> Python <span class=\"text-2xl\">•</span> Bash <span class=\"text-2xl\">•</span> C <span class=\"text-2xl\">•</span> Linux <span class=\"text-2xl\">•</span> BurpSuite <span class=\"text-2xl\">•</span> Nmap <span class=\"text-2xl\">•</span> SQLMap <span class=\"text-2xl\">•</span> Wordpress <span class=\"text-2xl\">•</span> Heroku <span class=\"text-2xl\">•</span> Node JS <span class=\"text-2xl\">•</span> Reseau <span class=\"text-2xl\">•</span> PfSense <span class=\"text-2xl\">•</span></p> <h1 class=\"_fullname font-semibold text-white text-xl border-b-4 border-gray-600 w-32 mb-2 mt-5 dark:text-black \">Mes passions</h1> <p class=\"dark:text-black\">Développement, Musique, Photographie, Exploration Urbaine, Voyage</p> <h1 class=\"_fullname font-semibold text-white text-xl border-b-4 border-gray-600 w-32 mb-2 mt-5 dark:text-black \">Sur internet</h1> "),_vm._ssrNode("<a href=\"https://github.com/ducstream-code\" class=\"flex place-items-center text-teal-500 font-semibold ml-6\">","</a>",[_vm._ssrNode("<span class=\"flex place-items-center mr-2 dark:text-teal-900\">","</span>",[_c('ion-icon',{attrs:{"name":"logo-github"}})],1),_vm._ssrNode("@ducsteam-code")],2),_vm._ssrNode(" "),_vm._ssrNode("<a href=\"https://www.linkedin.com/in/aurelien-krief/\" class=\"flex place-items-center text-teal-500 font-semibold ml-6\">","</a>",[_vm._ssrNode("<span class=\"flex place-items-center mr-2 dark:text-teal-900\">","</span>",[_c('ion-icon',{attrs:{"name":"logo-linkedin"}})],1),_vm._ssrNode("Aurélien Krief")],2),_vm._ssrNode(" "),_vm._ssrNode("<a href=\"https://www.instagram.com/aurelienkrf/\" class=\"flex place-items-center text-teal-500 font-semibold ml-6\">","</a>",[_vm._ssrNode("<span class=\"flex place-items-center mr-2 dark:text-teal-900\">","</span>",[_c('ion-icon',{attrs:{"name":"logo-instagram"}})],1),_vm._ssrNode("@aurelienkrf")],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/PageMain.vue?vue&type=template&id=b5210c98&class=flex%20justify-center&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/PageMain.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(32)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "7c416267"
  
)

/* harmony default export */ var PageMain = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=page-main.js.map