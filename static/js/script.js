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

/***/ "./src/css/style.scss":
/*!****************************!*\
  !*** ./src/css/style.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

function scrollIt(destination) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
  var easing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'linear';
  var callback = arguments.length > 3 ? arguments[3] : undefined;
  var easings = {
    linear: function linear(t) {
      return t;
    },
    easeInQuad: function easeInQuad(t) {
      return t * t;
    },
    easeOutQuad: function easeOutQuad(t) {
      return t * (2 - t);
    },
    easeInOutQuad: function easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    },
    easeInCubic: function easeInCubic(t) {
      return t * t * t;
    },
    easeOutCubic: function easeOutCubic(t) {
      return --t * t * t + 1;
    },
    easeInOutCubic: function easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    },
    easeInQuart: function easeInQuart(t) {
      return t * t * t * t;
    },
    easeOutQuart: function easeOutQuart(t) {
      return 1 - --t * t * t * t;
    },
    easeInOutQuart: function easeInOutQuart(t) {
      return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
    },
    easeInQuint: function easeInQuint(t) {
      return t * t * t * t * t;
    },
    easeOutQuint: function easeOutQuint(t) {
      return 1 + --t * t * t * t * t;
    },
    easeInOutQuint: function easeInOutQuint(t) {
      return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
    }
  };
  var start = window.pageYOffset;
  var startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
  var documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
  var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
  var destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
  var destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

  if ('requestAnimationFrame' in window === false) {
    window.scroll(0, destinationOffsetToScroll);

    if (callback) {
      callback();
    }

    return;
  }

  function scroll() {
    var now = 'now' in window.performance ? performance.now() : new Date().getTime();
    var time = Math.min(1, (now - startTime) / duration);
    var timeFunction = easings[easing](time);
    window.scroll(0, Math.ceil(timeFunction * (destinationOffsetToScroll - start) + start));

    if (window.pageYOffset === destinationOffsetToScroll) {
      if (callback) {
        callback();
      }

      return;
    }

    requestAnimationFrame(scroll);
  }

  scroll();
}

var lastScrollTop = 0; // function hidePageLoader() {
//   var loader = document.getElementsByClassName('page-loader')[0];
//   document.getElementsByTagName('html')[0].classList.add('loaded');
//   Velo(
//     loader,
//     {
//       opacity: 0
//     },
//     {
//       complete: () => {
//         loader.classList.add('loaded');
//       }
//     }
//   );
// }
// function showPageLoader(callback) {
//   var loader = document.getElementsByClassName('page-loader')[0];
//   loader.classList.add('loading');
//   Velo(
//     loader,
//     {
//       opacity: 1
//     },
//     {
//       complete: callback
//     }
//   );
// }

function scrollToTop(duration, callback) {
  if (!duration) {
    duration = 200;
  }

  scrollIt(0, duration, "easeOutQuad", callback);
}

var parallax = function parallax() {
  if (window.innerWidth <= 500) {
    return;
  }

  var $siteHeaderBgs = document.getElementsByClassName("site-header-bg");
  var $asideBgs = document.getElementsByClassName("post-aside-bg");

  for (var i = 0; i < $siteHeaderBgs.length; i++) {
    $siteHeaderBgs[i].style.backgroundPosition = 'center calc(50% + ' + $siteHeaderBgs[i].getBoundingClientRect().top / 4 + 'px)';
  }

  for (var j = 0; j < $asideBgs.length; j++) {
    $asideBgs[j].style.backgroundPosition = 'center calc(50% - ' + $asideBgs[j].getBoundingClientRect().top / 4 + 'px)';
  }
};

var scrollClass = function scrollClass() {
  var $htmlCL = document.getElementsByTagName('html')[0].classList;

  if (window.scrollY > window.innerHeight / 2) {
    $htmlCL.add("is-scrolled");
  } else {
    $htmlCL.remove("is-scrolled");
  }

  var beyondNav = document.querySelector('.site-header > .container').getBoundingClientRect().height - document.getElementsByClassName('main-menu')[0].getBoundingClientRect().height;

  if (window.scrollY > beyondNav) {
    $htmlCL.add("fix-nav");
  } else {
    $htmlCL.remove("fix-nav");
  }

  var st = window.pageYOffset || document.documentElement.scrollTop;

  if (st > lastScrollTop) {
    $htmlCL.add("scrolling-down");
    $htmlCL.remove("scrolling-up");
  } else {
    $htmlCL.add("scrolling-up");
    $htmlCL.remove("scrolling-down");
  }

  lastScrollTop = st;
};

document.getElementsByClassName('scroll-to-top')[0].addEventListener('click', function () {
  var $stt = this;
  $stt.classList.add('scrolling');
  scrollToTop(600, function () {
    $stt.classList.remove('scrolling');
  });
}); // function loadLinks () {
//   var links = document.querySelectorAll('a:not([target="_blank"])');
//   for (var i = 0; i < links.length; i++) {
//     var link = links[i];
//     link.addEventListener('click', function (e) {
//       e.preventDefault();
//       var next = this.getAttribute('href');
//       this.classList.add('is-loading');
//       setTimeout(function () {
//         showPageLoader(function () {
//           document.getElementsByTagName('html')[0].classList.add('loading');
//           window.location.href = next;
//         });
//       }, 120);
//     });
//   }
// }

window.addEventListener("scroll", function () {
  scrollClass();
  parallax();
}, false);

var setFullBg = function setFullBg(elem) {
  elem.style.backgroundImage = 'url(' + elem.getAttribute('data-fullbg') + ')';
};

var setParallaxBg = function setParallaxBg() {
  if (window.innerWidth > 500) {
    var headerBg = document.getElementsByClassName('site-header-bg')[0];
    setFullBg(headerBg);
    var postAsides = document.getElementsByClassName('post-aside-bg');

    for (var i = 0; i < postAsides.length; i++) {
      setFullBg(postAsides[i]);
    }
  }
};

setParallaxBg();
scrollClass();
parallax(); // var minLoadingTime = 50;
// var maxLoadingTime = 10000;
// var startTime = new Date();
// var elapsedTime;
// var dismissLoader, maxLoadingTimer;
// window.addEventListener('load', dismissLoader = function () {
//     clearTimeout(maxLoadingTimer);
//     elapsedTime = new Date() - startTime;
//     var hidePageLoaderTimer = (elapsedTime > minLoadingTime) ? 0 : minLoadingTime - elapsedTime;
//     setTimeout(function () {
//       hidePageLoader();
//     }, hidePageLoaderTimer);
// }, false);
// maxLoadingTimer = setTimeout(function(){
//     window.removeEventListener('load', dismissLoader, false);
//     hidePageLoader();
// }, maxLoadingTime);
// window.addEventListener('load', () => {
//   scrollClass();
//   parallax();
//   // loadLinks();
// });

/***/ }),

/***/ 0:
/*!*****************************************************!*\
  !*** multi ./src/js/script.js ./src/css/style.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /mnt/l/Saaya/inggo-noms/themes/hugot/src/js/script.js */"./src/js/script.js");
module.exports = __webpack_require__(/*! /mnt/l/Saaya/inggo-noms/themes/hugot/src/css/style.scss */"./src/css/style.scss");


/***/ })

/******/ });