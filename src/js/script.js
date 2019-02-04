function scrollIt(destination, duration = 200, easing = 'linear', callback) {

  const easings = {
    linear(t) {
      return t;
    },
    easeInQuad(t) {
      return t * t;
    },
    easeOutQuad(t) {
      return t * (2 - t);
    },
    easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    },
    easeInCubic(t) {
      return t * t * t;
    },
    easeOutCubic(t) {
      return (--t) * t * t + 1;
    },
    easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    },
    easeInQuart(t) {
      return t * t * t * t;
    },
    easeOutQuart(t) {
      return 1 - (--t) * t * t * t;
    },
    easeInOutQuart(t) {
      return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
    },
    easeInQuint(t) {
      return t * t * t * t * t;
    },
    easeOutQuint(t) {
      return 1 + (--t) * t * t * t * t;
    },
    easeInOutQuint(t) {
      return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
    }
  };

  const start = window.pageYOffset;
  const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

  const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
  const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
  const destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
  const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

  if ('requestAnimationFrame' in window === false) {
    window.scroll(0, destinationOffsetToScroll);
    if (callback) {
      callback();
    }
    return;
  }

  function scroll() {
    const now = 'now' in window.performance ? performance.now() : new Date().getTime();
    const time = Math.min(1, ((now - startTime) / duration));
    const timeFunction = easings[easing](time);
    window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));

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

var lastScrollTop = 0;

// function hidePageLoader() {
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
  scrollIt(
    0,
    duration,
    "easeOutQuad",
    callback
  );
}

var parallax = function () {
  if (window.innerWidth <= 500) {
    return;
  }

  var $siteHeaderBgs = document.getElementsByClassName("site-header-bg");
  var $asideBgs = document.getElementsByClassName("post-aside-bg");

  for (var i = 0; i < $siteHeaderBgs.length; i++) {
    $siteHeaderBgs[i].style.backgroundPosition = 'center calc(50% + ' + $siteHeaderBgs[i].getBoundingClientRect().top/4 + 'px)';
  }

  for (var j = 0; j < $asideBgs.length; j++) {
    $asideBgs[j].style.backgroundPosition = 'center calc(50% - ' + $asideBgs[j].getBoundingClientRect().top/4 + 'px)';
  }
};

var scrollClass = function () {
  var $htmlCL = document.getElementsByTagName('html')[0].classList;

  if (window.scrollY > window.innerHeight/2) {
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
  if (st > lastScrollTop){
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
});

// Get all of the images that are marked up to lazy load
const images = document.querySelectorAll('.js-lazy-image');
const config = {
  // If the image gets within 50px in the Y axis, start the download.
  rootMargin: '50px 0px',
  threshold: 0.01
};

// function loadLinks () {
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

window.addEventListener("scroll", () => {
  scrollClass();
  parallax();
}, false);

var setFullBg = function (elem) {
  var img = new Image()
    , src = elem.getAttribute('data-fullbg');
  img.onload = function() {
    elem.style.backgroundImage = 'url(' + elem.getAttribute('data-fullbg') + ')'; 
  }
  img.src = src;
}


var setParallaxBg = function () {
  var headerBg = document.getElementsByClassName('site-header-bg')[0];
  setFullBg(headerBg);

  var postAsides = document.getElementsByClassName('post-aside-bg');
  for (var i = 0; i < postAsides.length; i++) {
    setFullBg(postAsides[i]);
  }
}

setParallaxBg();
scrollClass();
parallax();

// var minLoadingTime = 50;
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

(function () {
  var myLazyLoad = new LazyLoad({
    elements_selector: "picture > img",
    threshold: 0
  });
}());

