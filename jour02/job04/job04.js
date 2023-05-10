document.addEventListener("DOMContentLoaded", function() {
  var textarea = document.getElementById("keylogger");

  document.addEventListener("keydown", function(event) {
    var key = event.key.toLowerCase();
    if (key.match(/[a-z]/)) {
      if (document.activeElement === textarea) {
        textarea.value += key + key;
      } else {
        textarea.value += key;
      }
    }
  });
});
