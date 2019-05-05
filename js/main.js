/* jQuery */

$(document).ready(() => {
  /* mobile nav dropdown */
  $('#menu-icon').on('click', () => {
    $('.dropdown-nav').slideToggle('fast', 'swing');
  });
  /* project hover states */
  $('#p1').hover(function() {
    $('#t1').slideToggle('fast', 'swing');
  });
  $('#p2').hover(function() {
    $('#t2').slideToggle('fast', 'swing');
  });
  $('#p3').hover(function() {
    $('#t3').slideToggle('fast', 'swing');
  });
  $('#p4').hover(function() {
    $('#t4').slideToggle('fast', 'swing');
  });
  $('#p5').hover(function() {
    $('#t5').slideToggle('fast', 'swing');
  });
  $('#p6').hover(function() {
    $('#t6').slideToggle('fast', 'swing');
  });
  /* home button animation */
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
