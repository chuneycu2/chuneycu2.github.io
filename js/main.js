$(document).ready(() => {
  /* mobile nav dropdown */
  $('#menu-icon').on('click', () => {
    $('#dropdown-nav').slideToggle('fast', 'swing');
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
