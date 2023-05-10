    function updateProgressBarColor() {
      var progressBar = document.querySelector('footer');
      var scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      progressBar.style.backgroundColor = 'hsl(' + scrollPercentage + ', 100%, 50%)';
    }

    // Écouteur d'événement pour mettre à jour la couleur de la barre de chargement lors du défilement
    window.addEventListener('scroll', updateProgressBarColor);