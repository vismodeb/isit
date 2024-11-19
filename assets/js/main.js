$(document).ready(function () {
  // Mobile Nav Toggle
  $("#toggleNav-icon").click(function () {
    $(this).toggleClass("open");
    $(".menu").slideToggle();
  });
  AOS.init({
    duration: 1200,
  });
});
