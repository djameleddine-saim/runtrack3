$(document).ready(function() {
  var attempts = 0;
  var maxAttempts = 10;

  $("#shuffle-btn").click(function() {
    if (attempts >= maxAttempts) {
      return;
    }
    var container = $("#rainbow-container");
    var elements = container.children();
    for (var i = elements.length; i >= 0; i--) {
      container.append(elements.eq(Math.random() * i | 0));
    }
    attempts++;
    if (attempts >= maxAttempts) {
      checkRainbowOrder();
    }
  });

  $(".rainbow-image").click(function() {
    if (attempts >= maxAttempts) {
      return;
    }
    var selectedImage = $(this);
    var targetImage = $("#rainbow-" + selectedImage.index());
    selectedImage.insertBefore(targetImage);
    checkRainbowOrder();
  });

  function checkRainbowOrder() {
    var container = $("#rainbow-container");
    var images = container.children();
    var isOrdered = true;

    images.each(function(index) {
      if ($(this).attr("id") !== "rainbow-" + index) {
        isOrdered = false;
        return false;
      }
    });

    var message = $("#message");
    message.text(isOrdered ? "Vous avez gagné" : "Vous avez perdu");
    message.removeClass("win lose");
    message.addClass(isOrdered ? "win" : "lose");
  }
});
