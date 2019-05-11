/* jQuery interactions */

$(document).ready(() => {

  /* grid fade in on load */

  $('#project-one').fadeIn({ queue: false, duration: 700 });
  $('#project-one').animate({ bottom: "50px" }, 300);
  $('#project-two').fadeIn({ queue: false, duration: 700 });
  $('#project-two').animate({ bottom: "50px" }, 500);
  $('#project-three').fadeIn({ queue: false, duration: 700 });
  $('#project-three').animate({ bottom: "50px" }, 700);
  $('#project-four').fadeIn({ queue: false, duration: 700 });
  $('#project-four').animate({ bottom: "50px" }, 800);
  $('#project-five').fadeIn({ queue: false, duration: 700 });
  $('#project-five').animate({ bottom: "50px" }, 900);
  $('#project-six').fadeIn({ queue: false, duration: 700 });
  $('#project-six').animate({ bottom: "50px" }, 1000);

  /* mobile nav dropdown */

  $('#menu-icon').on('click', () => {
    $('.dropdown-nav').slideToggle('fast', 'swing');
  });

  /* header home button animation */

  $("#home-button").mouseover(function() {
    this.src="./resources/images/logo-icon-active.png"
  }).mouseout(function() {
    this.src="./resources/images/logo-icon.png"
  });

  /* footer home button animation */

  $("#footer-button").mouseover(function() {
    this.src="./resources/images/logo-icon-close-active.png"
  }).mouseout(function() {
    this.src="./resources/images/logo-icon-close.png"
  });

});

/* JS tab functionality */

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

/* 'clicks' the tab with ID 'defaultOpen' to make it appear on page load */

document.getElementById("defaultOpen").click();
