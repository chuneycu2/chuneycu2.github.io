/* jQuery interactions */

$(document).ready(() => {

  /* grid fade in on load */

  $('#project-one').animate({ opacity: 1 }, 500);
  $('#project-two').animate({ opacity: 1 }, 500);
  $('#project-three').animate({ opacity: 1 }, 500);
  $('#project-four').animate({ opacity: 1 }, 500);
  $('#project-five').animate({ opacity: 1 }, 500);
  $('#project-six').animate({ opacity: 1 }, 500);
  $('#project-seven').animate({ opacity: 1 }, 500);
  $('#project-eight').animate({ opacity: 1 }, 500);
  $('#project-nine').animate({ opacity: 1 }, 500);

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
    this.src="./resources/images/logo-icon-active.png"
  }).mouseout(function() {
    this.src="./resources/images/logo-icon.png"
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
