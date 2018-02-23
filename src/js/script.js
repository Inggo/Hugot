window.Velo = require('velocity-animate');

window.axios = require('axios');

var lastScrollTop = 0;

document.addEventListener("DOMContentLoaded", () => {
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


    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    if (st > lastScrollTop){
      $htmlCL.add("scrolling-down");
      $htmlCL.remove("scrolling-up");
    } else {
      $htmlCL.add("scrolling-up");
      $htmlCL.remove("scrolling-down");
    }
    lastScrollTop = st;
  };

  document.getElementsByClassName('scroll-to-top')[0].onclick = function () {
    var $stt = this;
    $stt.classList.add('scrolling');
    Velo(
      document.getElementsByTagName('html'),
      "scroll",
      { 
        duration: 600,
        offset: 0, 
        mobileHA: false,
        complete: () => {
          $stt.classList.remove('scrolling');
        }
      }
    );
  };

  var loadLinks = function () {
    var links = document.querySelectorAll('a:not([target="_blank"])');

    for (var i = 0; i < links.length; i++) {
      var link = links[i];
      link.addEventListener('click', function (e) {
        e.preventDefault();
        var next = this.getAttribute('href');
        this.classList.add('linked');
        Velo(
          this.parentNode,
          {
            scale: 1.1,
            opacity: 0,
          },
          {
            duration: 120,
            complete: function () {
              Velo(
                document.querySelectorAll('article,main,.site-header .tagline,.site-header h2,.site-header .post-date'),
                {
                  scale: 1.1,
                  opacity: 0
                },
                {
                  duration: 400,
                  complete: () => {
                    window.location = next;
                  }
                }
              );
            }
          }
        );
      });
    };
  };

  window.addEventListener("scroll", () => {
    scrollClass();
    parallax();
  }, false);

  scrollClass();
  parallax();

  window.onload = function () {
    scrollClass();
    parallax();
    loadLinks();
  };
});