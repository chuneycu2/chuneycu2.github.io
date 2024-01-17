/* jQuery interactions */

$(document).ready(function() {

  /* grid fade in on load */

  $('#project-one').animate({ opacity: 1 }, 300);
  $('#project-two').animate({ opacity: 1 }, 300);
  $('#project-three').animate({ opacity: 1 }, 300);
  $('#project-four').animate({ opacity: 1 }, 300);
  $('#project-five').animate({ opacity: 1 }, 300);
  $('#project-six').animate({ opacity: 1 }, 300);
  $('#project-seven').animate({ opacity: 1 }, 300);
  $('#project-eight').animate({ opacity: 1 }, 300);
  $('#project-nine').animate({ opacity: 1 }, 300);

  /* mobile nav dropdown */

  $('#menu-icon').on('click', () => {
    $('.dropdown-nav').slideToggle('fast', 'swing');
  });

  /* header home button animation */

  $(".logo-link").mouseover(function() {
    $("#home-button")[0].src="./resources/images/logo-icon-active.png"
  }).mouseout(function() {
    $("#home-button")[0].src="./resources/images/logo-icon.png"
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
