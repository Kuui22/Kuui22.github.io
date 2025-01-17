
$("document").ready(function () {
  const crtScreen = document.getElementById("crt-screen");
  const content = document.getElementById("content");

  setTimeout(() => {
    crtScreen.style.display = "none";
    content.style.display = "block";
  }, 1500); // Matches the duration of the crt-glow animation

var clients = document.getElementById('clients');
var services = document.getElementById('services');

clients.addEventListener('click', function () {
  $(clients).toggleClass("active");
  $(".parent:not(#clients)").toggleClass("invisible");
}, false);

services.addEventListener('click', function () {
  $(services).toggleClass("active");
  $(".parent:not(#services)").toggleClass("invisible");
}, false);

});