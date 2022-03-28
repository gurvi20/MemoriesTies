$(document).ready(function () {
  $(
    "li[name='home'], li[name='gallery'],li[name='testimonials'],li[name='contact']"
  ).hover(
    function () {
      $(this).css("font-size", "20px");
    },
    function () {
      $(this).css("font-size", "17px");
    }
  );
});

var date = new Date();
document.getElementById("fullYear").innerHTML = date.getFullYear();

function goBack() {
  window.history.back();
}

function goForward() {
  window.history.forward();
}
