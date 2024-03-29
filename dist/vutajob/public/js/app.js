/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/vutajob/js/app.js":
/*!*******************************!*\
  !*** ./src/vutajob/js/app.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

$(document).ready(function () {
  __webpack_require__(/*! ./make_tag */ "./src/vutajob/js/make_tag.js");

  __webpack_require__(/*! ./filters */ "./src/vutajob/js/filters.js");

  __webpack_require__(/*! ./swiper */ "./src/vutajob/js/swiper.js");

  __webpack_require__(/*! ./headerscroll */ "./src/vutajob/js/headerscroll.js");

  var getToggleAside = document.querySelector('[data-toggle-menu]');
  getToggleAside.addEventListener('click', function () {
    var eToggle = getToggleAside.dataset.toggleMenu;
    var menu_target = document.querySelector(eToggle);
    var menu_li = menu_target.querySelectorAll("li");

    if (menu_li.length && menu_target) {
      var total_height = menu_li[0].clientHeight * menu_li.length;
    }

    if (menu_target.classList[menu_target.classList.length - 1] == "active") {
      menu_target.style.height = 0;
      menu_target.style.borderTopWidth = 0;
    } else {
      menu_target.style.height = total_height + 15 + "px";
      menu_target.style.borderTopWidth = "1px";
    }

    menu_target.classList.toggle('active');
    console.log(menu_target.classList[menu_target.classList.length - 1] == "active");
  });
});

/***/ }),

/***/ "./src/vutajob/js/filters.js":
/*!***********************************!*\
  !*** ./src/vutajob/js/filters.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

$("#myInput").on("keyup", function () {
  var value = $(this).val().toLowerCase();
  $("#xyz label").filter(function () {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
  });
});

/***/ }),

/***/ "./src/vutajob/js/headerscroll.js":
/*!****************************************!*\
  !*** ./src/vutajob/js/headerscroll.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// const nav = document.querySelector('#header');
// const navTop = nav.offsetTop;
// function stickyNavigation() {
//     console.log('navTop = ' + navTop);
//     console.log('scrollY = ' + window.scrollY);
//     if (window.scrollY >= navTop) {
//         // nav offsetHeight = height of nav
//         document.body.style.paddingTop = nav.offsetHeight + 'px';
//         document.body.classList.add('fixed-nav');
//     } else {
//         document.body.style.paddingTop = 0;
//         document.body.classList.remove('fixed-nav');
//     }
// }
// window.addEventListener('scroll', stickyNavigation);
var prevScrollpos = window.pageYOffset;

window.onscroll = function () {
  var header = document.querySelector('header');
  var currentScrollPos = window.pageYOffset;

  if (prevScrollpos >= currentScrollPos && window.pageYOffset !== 0) {
    header.classList.add('affix');
  } else {
    header.classList.remove('affix');
  }

  if (window.pageYOffset == 0) {
    header.classList.remove('affix');
  }

  prevScrollpos = currentScrollPos;
};

/***/ }),

/***/ "./src/vutajob/js/make_tag.js":
/*!************************************!*\
  !*** ./src/vutajob/js/make_tag.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// import Vue from 'vue';
// var app = new Vue({
//     data: {
//         tagList: [],
//         InputTags: null,
//     },
//     methods:{
//         makeTags(){
//             if (this.InputTags){
//                 this.tagList.push(this.InputTags.replace(',', ''))
//                 this.InputTags = null;
//             }
//         },
//         removeTag(key){
//             this.$delete(this.tagList, key)
//         },
//         defaultValue(data){
//             if (data){
//                 let _arr = data.split(',')
//                 for(let i of _arr){
//                     console.log(i)
//                     this.tagList.push(i)
//                 }
//             }
//             return this.tagList
//         }
//     },
//     created(){
//     }
// }).$mount('#app')
$("#tags-input").val();

/***/ }),

/***/ "./src/vutajob/js/swiper.js":
/*!**********************************!*\
  !*** ./src/vutajob/js/swiper.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var person_slider = new Swiper('.swiper-person', {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.pagination-person',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    769: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    440: {
      slidesPerView: 1,
      spaceBetween: 20
    }
  }
});
var main_slider = new Swiper('.swiper-main', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoHeight: true,
  autoplay: {
    delay: 5000
  }
});
var post_swiper_index = document.querySelectorAll('[data-swiper]');
console.log([post_swiper_index]);
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = post_swiper_index[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var swiper = _step.value;
    new Swiper(swiper.dataset.swiper, {
      slidesPerView: 3,
      direction: 'vertical',
      simulateTouch: false,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
          direction: 'horizontal',
          simulateTouch: true,
          autoplay: {
            delay: 5000
          }
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 20,
          direction: 'horizontal',
          simulateTouch: true,
          autoplay: {
            delay: 5000
          }
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 30,
          direction: 'horizontal',
          simulateTouch: true,
          autoplay: {
            delay: 5000
          }
        },
        767: {
          slidesPerView: 3,
          spaceBetween: 20,
          direction: 'vertical',
          simulateTouch: false
        }
      }
    });
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return != null) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

/***/ }),

/***/ "./src/vutajob/sass/app.scss":
/*!***********************************!*\
  !*** ./src/vutajob/sass/app.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*****************************************************************!*\
  !*** multi ./src/vutajob/js/app.js ./src/vutajob/sass/app.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/kimtrong/learning/projects/vuta-host/vutajob/src/vutajob/js/app.js */"./src/vutajob/js/app.js");
module.exports = __webpack_require__(/*! /home/kimtrong/learning/projects/vuta-host/vutajob/src/vutajob/sass/app.scss */"./src/vutajob/sass/app.scss");


/***/ })

/******/ });