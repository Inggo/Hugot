window.Velo = require('velocity-animate');

window.axios = require('axios');

var lastScrollTop = 0;

function hidePageLoader() {
  var loader = document.getElementsByClassName('page-loader')[0];
  document.getElementsByTagName('html')[0].classList.add('loaded');
  Velo(
    loader,
    {
      opacity: 0
    },
    {
      complete: () => {
        loader.classList.add('loaded');
      }
    }
  );
}

function showPageLoader(callback) {
  var loader = document.getElementsByClassName('page-loader')[0];
  loader.classList.add('loading');
  Velo(
    loader,
    {
      opacity: 1
    },
    {
      complete: callback
    }
  );
}

function scrollToTop(duration, callback) {
  if (!duration) {
    duration = 600;
  }
  Velo(
    document.getElementsByTagName('html'),
    "scroll",
    { 
      duration: duration,
      offset: 0, 
      mobileHA: false,
      complete: callback
    }
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

function loadLinks () {
  var links = document.querySelectorAll('a:not([target="_blank"])');

  for (var i = 0; i < links.length; i++) {
    var link = links[i];
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var next = this.getAttribute('href');
      this.classList.add('is-loading');
      setTimeout(function () {
        showPageLoader(function () {
          document.getElementsByTagName('html')[0].classList.add('loading');
          window.location.href = next;
        });
      }, 120);
    });
  }
}

window.addEventListener("scroll", () => {
  scrollClass();
  parallax();
}, false);

scrollClass();
parallax();

var minLoadingTime = 100;
var maxLoadingTime = 3000;
 
var startTime = new Date();
var elapsedTime;
var dismissLoader, maxLoadingTimer;

window.addEventListener('load', dismissLoader = function () { // when page loads
    clearTimeout(maxLoadingTimer);
    elapsedTime = new Date() - startTime;
    var hidePageLoaderTimer = (elapsedTime > minLoadingTime) ? 0 : minLoadingTime - elapsedTime;
 
    setTimeout(function () {
      hidePageLoader();
    }, hidePageLoaderTimer);
}, false);
 
maxLoadingTimer = setTimeout(function(){
    window.removeEventListener('load', dismissLoader, false);
    hidePageLoader();
}, maxLoadingTime);

window.addEventListener('load', () => {
  scrollClass();
  parallax();
  loadLinks();
});