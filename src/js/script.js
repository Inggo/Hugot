window.Velo = require('velocity-animate');

window.axios = require('axios');

window.onload = function () {
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
    if (window.scrollY > window.innerHeight/2) {
      document.getElementsByTagName('html')[0].classList.add("is-scrolled");
    } else {
      document.getElementsByTagName('html')[0].classList.remove("is-scrolled");
    }
  };

  document.getElementsByClassName('scroll-to-top')[0].onclick = function () {
    Velo(
      document.getElementsByTagName('html'),
      "scroll",
      { offset: 0, mobileHA: false }
    );
  };

  window.onscroll = function () {
    scrollClass();
    parallax();
  };

  scrollClass();
  parallax();
};
