<?php
if($_POST["message"]) {
    mail("chuneycu@gmail.com", "Form to email message", $_POST["message"], "From: an@email.address");
}
?>
<!DOCTYPE html>
<html>
<head>
  <title>Cyrus Huneycutt | Contact Cyrus</title>
  <link rel="shortcut icon" href="./resources/images/ch-favicon.ico" type="image/x-icon">
  <link href="./resources/css/reset.css" type="text/css" rel="stylesheet" />
  <link href="./resources/css/styles.css" type="text/css" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet">
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
  <header>
    <nav class="nav-container set-max">
      <div class="logo">
        <a href="index.html">
          <img id="home-button" src="./resources/images/logo-icon.png" alt="Cyrus Huneycutt" />
        </a>
        <p><span>CYRUS HUNEYCUTT</span> <br> Designer | Developer</p>
      </div>
      <ul class="desktop-nav">
        <li><a href="about.html">About</a></li>
        <li><a href="index.html">Portfolio</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </nav>
    <nav class="mobile-nav">
      <div class="logo">
        <a href="index.html"><img src="./resources/images/logo-icon.png" alt="Cyrus Huneycutt" /></a>
        <p><strong>CYRUS HUNEYCUTT</strong> <br> Designer | Developer</p>
      </div>
      <img id="menu-icon" src="./resources/images/menu-icon.svg" alt="hamburger menu icon" />
    </nav>
    <div class="dropdown-nav hide">
      <ul>
        <li><a href="about.html">About</a></li>
        <li><a href="index.html">Portfolio</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </div>
    <div class="headline">
      <h1>Contact</h1>
      <h4>Leave me a note below!</h4>
    </div>
  </header>
  <div class="content-container">
  <p>If you haven't already, take a look at my portfolio or my skills to get an idea of what I can do for you. Shoot me a note and let's connect!</p>
  <h3>About you</h3>
  <form method="post" action="contact.php">
    <p>
      <label for="name">First name</label>
      <input name="firstname" id="first" type="text">
    </p>
    <p>
      <label for="last">Last name</label>
      <input name="lastname" id="last" type="text">
    </p>
    <p>
      <label for="message">Message</label>
      <textarea name="lastname" id="message" type="text" placeholder="Your message here"></textarea>
    </p>
    <p>
      <button id="submit" type="submit">Send</button>
    </p>
  </form>
  </div>
  <!-- footer -->
  <footer>
    <nav class="nav-container set-max">
      <div class="logo">
        <a href="index.html">
          <img id="footer-button" src="./resources/images/logo-icon-close.png" alt="Cyrus Huneycutt" />
        </a>
        <p><span>CYRUS HUNEYCUTT</span> <br> Designer | Developer</p>
      </div>
      <ul class="desktop-nav">
        <li><a href="about.html">About</a></li>
        <li><a href="index.html">Portfolio</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </nav>
    <nav class="mobile-footer">
      <div class="logo">
        <a href="index.html">
          <img id="home-button" src="./resources/images/logo-icon-close.png" alt="Cyrus Huneycutt" />
        </a>
        <p><span>CYRUS HUNEYCUTT</span> <br> Designer | Developer</p>
      </div>
      <ul class="desktop-nav">
        <li><a href="about.html">About</a></li>
        <li><a href="index.html">Portfolio</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </nav>
    <div class="social">
      <ul>
        <li><a href="https://github.com/chuneycu2" rel="nofollow" target="_blank"><img src="./resources/images/social-github.png" alt="GitHub icon" /></a></li>
        <li><a href="https://www.linkedin.com/in/cyrus-huneycutt-645a5647/" rel="nofollow" target="_blank"><img src="./resources/images/social-linkedin.png" alt="LinkedIn icon" /></li>
        <li><a href="contact.html" rel="nofollow"><img src="./resources/images/social-gmail.png" alt="Gmail icon" /></a></li>
      </ul>
    </div>
    <div class="copyright">
      <p>&copy; 2019 Cyrus Huneycutt</p>
    </div>
  </footer>
</body>
<script
  src="https://code.jquery.com/jquery-3.2.1.min.js"
  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
  crossorigin="anonymous"></script>
<script type="text/javascript" src="./js/main.js"></script>
</html>
