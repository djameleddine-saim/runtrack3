$(document).ready(function () {
    $('#papillonBtn').on('click', function () {
        $('#papillonModal').modal('show');
    });
});

$(document).ready(function () {
  // Tableau de citations Blade Runner
  var bladeRunnerQuotes = [
    "Tous ces moments se perdront dans l'oubli, comme les larmes dans la pluie.",
    "Il est temps de mourir.",
    "J'ai vu des choses que vous, humains, ne pourriez pas croire.",
    "Le plus dur ici-bas, c'est de décider quoi faire.",
    "Les réplicants sont comme n'importe quelle autre machine, ils sont soit un bienfait, soit un danger. Mais quelque chose de gênant.",
    "Le pire... Le pire c'est la solitude. Être entouré de millions de personnes et se sentir seul au monde.",
    "Je veux voir briller les étoiles une dernière fois, avant qu'elles ne s'éteignent toutes.",
  ];

  // Gestion du clic sur le bouton "Rebooter le Monde"
  $("#rebootBtn").on("click", function () {
    var randomQuote =
      bladeRunnerQuotes[Math.floor(Math.random() * bladeRunnerQuotes.length)];
    $("#jumbotronText").text(randomQuote);
  });
});

$(document).ready(function () {
  var pageContents = [
    "Contenu de la page 1.",
    "Contenu de la page 2.",
    "Contenu de la page 3.",
  ];

  // Récupération de l'index de la page active
  var activePageIndex = $(".pagination .page-item.active").index();

  // Affichage du contenu de la page active
  $("#jumbotronText").text(pageContents[activePageIndex]);

  // Gestion du clic sur les flèches de la pagination
  $(".pagination .page-link").on("click", function (e) {
    e.preventDefault();

    if (!$(this).parent().hasClass("disabled")) {
      var pageIndex = activePageIndex;

      if ($(this).attr("aria-label") === "Previous") {
        // Clic sur la flèche précédente
        pageIndex = activePageIndex - 1;
      } else if ($(this).attr("aria-label") === "Next") {
        // Clic sur la flèche suivante
        pageIndex = activePageIndex + 1;
      } else {
        // Clic sur une page spécifique
        pageIndex = $(this).text() - 1;
      }

      if (pageIndex >= 0 && pageIndex < pageContents.length) {
        // Mise à jour de l'index de la page active
        activePageIndex = pageIndex;

        // Mise à jour du contenu du jumbotron
        $("#jumbotronText").text(pageContents[activePageIndex]);

        // Modification de la classe "active" sur l'élément de la pagination
        $(".pagination .page-item").removeClass("active");
        $(".pagination .page-item").eq(activePageIndex).addClass("active");

        // Gestion de la désactivation des flèches de pagination
        $(".pagination .page-item").removeClass("disabled");
        if (activePageIndex === 0) {
          $(".pagination .page-item:first-child").addClass("disabled");
        } else if (activePageIndex === pageContents.length - 1) {
          $(".pagination .page-item:last-child").addClass("disabled");
        }
      }
    }
  });
});

$(document).ready(function() {
  $('.list-group-item').click(function() {
    // Remove the 'active' class from all list items
    $('.list-group-item').removeClass('active');

    // Add the 'active' class to the clicked item
    $(this).addClass('active');
  });
});

$(document).ready(function() {
  var progressBar = $('.progress-bar');
  var progressValue = parseInt(progressBar.attr('aria-valuenow'));

  $('#decreaseBtn').click(function() {
    if (progressValue > 0) {
      progressValue -= 10;
      progressBar.css('width', progressValue + '%').attr('aria-valuenow', progressValue);
    }
  });

  $('#increaseBtn').click(function() {
    if (progressValue < 100) {
      progressValue += 10;
      progressBar.css('width', progressValue + '%').attr('aria-valuenow', progressValue);
    }
  });
});

$(document).ready(function() {
  var formModal = $('#formModal');

  var formData = {
    username: '',
    recipient: '',
    vanityUrl: '',
    amount: '',
    server: '',
    textarea: ''
  };

  $('input').keyup(function(event) {
    var inputId = $(this).attr('id');
    formData[inputId] = $(this).val();
  });

  $('textarea').keyup(function(event) {
    var textareaId = $(this).attr('id');
    formData[textareaId] = $(this).val();
  });

  $(document).keydown(function(event) {
    if (event.which === 68 && 71 && 67) {
      formDataModal();
    }
  });

  function formDataModal() {
    var modalBody = formModal.find('.modal-body');
    modalBody.empty();

    for (var key in formData) {
      modalBody.append('<p><strong>' + key + ':</strong> ' + formData[key] + '</p>');
    }

    formModal.modal('show');
  }

  function resetFormData() {
    $('input').val('');
    $('textarea').val('');
    formData = {
      username: '',
      recipient: '',
      vanityUrl: '',
      amount: '',
      server: '',
      textarea: ''
    };
  }

  function clearFormData() {
    for (var key in formData) {
      formData[key] = '';
    }
  }
});

