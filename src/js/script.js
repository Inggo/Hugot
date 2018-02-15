window.onload = function () {
  var $siteHeaderBg = document.getElementsByClassName("site-header-bg")[0];
  var $asideBg = document.getElementsByClassName("post-aside-bg").length > 0 ?
  document.getElementsByClassName("post-aside-bg")[0] :
  null;

  var $siteImages = document.getElementsByTagName("img");
  var $firstImg = $siteImages[0];
  var $lastImg = $siteImages[$siteImages.length - 1];

  $siteHeaderBg.style.backgroundImage = 'url(' + $lastImg.src + ')';
  $siteHeaderBg.style.opacity = '.25';

  if ($asideBg) {
    $asideBg.style.backgroundImage = 'url(' + $firstImg.src + ')';
    $asideBg.style.opacity = '.16';
  }

  var parallax = function () {
    $siteHeaderBg.style.backgroundPosition = 'center calc(50% + ' + window.scrollY/4 + 'px)';
    if ($asideBg) {
      $asideBg.style.backgroundPosition = 'center calc(50% + ' + $asideBg.getBoundingClientRect().top/4 + 'px)';
    }
  };

  parallax();

  window.onscroll = function () {
    if (window.scrollY > 70) {
      
    }
    parallax();
  };
};
