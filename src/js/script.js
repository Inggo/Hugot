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

  function checkVisible (el) {
    var rect = el.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
  }

  // var readMore = function () {
  //   var $nextPage = document.getElementsByClassName("next-page");
  //   if ($nextPage.length == 0) {
  //     return;
  //   }

  //   for (var i = 0; i < $nextPage.length; i++) {
  //     var el = $nextPage[i];

  //     if (el.classList.contains('loading')) {
  //       return;
  //     }

  //     if (!checkVisible(el)) {
  //       return;
  //     }

  //     el.classList.add('loading');

  //     var ld = document.createElement("i");
  //     ld.classList.add("icon-spin");
  //     ld.classList.add("animate-spin");
  //     el.parentNode.insertBefore(ld, el.nextSibling);

  //     console.log(el.href);
  //     axios.get(el.href)
  //       .then((response) => {
  //         var nextPage = document.createElement("html");
  //         nextPage.innerHTML = response.data;

  //         if (document.getElementsByTagName("main").length == 0) {
  //           nextPage.getElementsByTagName("h1")[0].remove();
  //           var nextArticleHeader = nextPage.getElementsByTagName("header")[0];
  //           var nextArticle = nextPage.getElementsByTagName("article")[0];
  //           var currentArticle = el.parentNode.parentNode;
  //           nextArticleHeader.classList.add("secondary-header");
  //           nextArticleHeader.classList.remove("site-header");
  //           currentArticle.parentNode.insertBefore(nextArticleHeader, currentArticle.nextSibling);
  //           currentArticle.parentNode.insertBefore(nextArticle, nextArticleHeader.nextSibling);
  //           el.parentNode.remove();
  //         } else {
  //           var nextArticles = nextPage.getElementsByTagName("article");
  //           var pagination = nextPage.getElementsByClassName("pagination")[0];
  //           nextPage.getElementsByClassName("prev-page")[0].remove();
  //           var mainNode = el.parentNode.parentNode;
  //           for (var i = 0; i < nextArticles.length; i++) {
  //             mainNode.insertBefore(nextArticles[i], el.parentNode);
  //           }
  //           mainNode.insertBefore(pagination, el.parentNode);
  //           el.parentNode.remove();
  //         }
  //       });
  //   }
  // };

  window.onscroll = function () {
    // readMore();
    parallax();
  };

  parallax();
};
