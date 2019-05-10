/* jQuery interactions */

$(document).ready(() => {

  /* grid fade in on load */

  $('#one').fadeIn({ queue: false, duration: 700 });
  $('#one').animate({ bottom: "25px" }, 300);
  $('#two').fadeIn({ queue: false, duration: 700 });
  $('#two').animate({ bottom: "25px" }, 500);
  $('#three').fadeIn({ queue: false, duration: 700 });
  $('#three').animate({ bottom: "25px" }, 700);
  $('#four').fadeIn({ queue: false, duration: 700 });
  $('#four').animate({ bottom: "25px" }, 800);
  $('#five').fadeIn({ queue: false, duration: 700 });
  $('#five').animate({ bottom: "25px" }, 900);
  $('#six').fadeIn({ queue: false, duration: 700 });
  $('#six').animate({ bottom: "25px" }, 1000);

  /* mobile nav dropdown */

  $('#menu-icon').on('click', () => {
    $('.dropdown-nav').slideToggle('fast', 'swing');
  });

  /* hover states for project grid */

  $('#p1-img').mouseover(function() {
    $('#icon-01').stop().fadeOut()
  }).mouseout(function() {
    $('#icon-01').stop().fadeIn()
  })
  $('#p1-img').mouseover(function() {
    $('#p1-bg').stop().fadeIn()
  }).mouseout(function() {
    $('#p1-bg').stop().fadeOut()
  });

  $('#p2-img').mouseover(function() {
    $('#icon-02').stop().fadeOut()
  }).mouseout(function() {
    $('#icon-02').stop().fadeIn()
  })
  $('#p2-img').mouseover(function() {
    $('#p2-bg').stop().fadeIn()
  }).mouseout(function() {
    $('#p2-bg').stop().fadeOut()
  });

  $('#p3-img').mouseover(function() {
    $('#icon-03').stop().fadeOut()
  }).mouseout(function() {
    $('#icon-03').stop().fadeIn()
  })
  $('#p3-img').mouseover(function() {
    $('#p3-bg').stop().fadeIn()
  }).mouseout(function() {
    $('#p3-bg').stop().fadeOut()
  });

  $('#p4-img').mouseover(function() {
    $('#icon-04').stop().fadeOut()
  }).mouseout(function() {
    $('#icon-04').stop().fadeIn()
  })
  $('#p4-img').mouseover(function() {
    $('#p4-bg').stop().fadeIn()
  }).mouseout(function() {
    $('#p4-bg').stop().fadeOut()
  });

  $('#p5-img').mouseover(function() {
    $('#icon-05').stop().fadeOut()
  }).mouseout(function() {
    $('#icon-05').stop().fadeIn()
  })
  $('#p5-img').mouseover(function() {
    $('#p5-bg').stop().fadeIn()
  }).mouseout(function() {
    $('#p5-bg').stop().fadeOut()
  });

  $('#p6-img').mouseover(function() {
    $('#icon-06').stop().fadeOut()
  }).mouseout(function() {
    $('#icon-06').stop().fadeIn()
  })
  $('#p6-img').mouseover(function() {
    $('#p6-bg').stop().fadeIn()
  }).mouseout(function() {
    $('#p6-bg').stop().fadeOut()
  });

  /*$('#p1-img').mouseover(function() {
    $('#icon-01').fadeToggle(300)
  }).mouseout(function() {
    $('#icon-01').fadeToggle(300)
  });
  $('#p1-img').mouseover(function() {
    $(this).toggleClass('one')
  }).mouseout(function() {
    $(this).toggleClass('one')
  });*/
  /*
  $('#p1-img').mouseover(function() {
    $(this).css('background-image', "url('./resources/images/home/project-hover-bg-01.png')")
  }).mouseout(function() {
    $(this).css('background-image', 'url()')
  });*/


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
