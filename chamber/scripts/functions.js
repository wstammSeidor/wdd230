try {
    let date = new Date();
    document.querySelector('#currentYear').textContent = date.getFullYear();
  
    let oLastModif = new Date(document.lastModified);
    document.querySelector('#lastModified').textContent = oLastModif;


    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');

    hamButton.addEventListener('click', () => {
    	navigation.classList.toggle('open');
    	hamButton.classList.toggle('open');
    });

    document.addEventListener("DOMContentLoaded", function() {
        var links = document.querySelectorAll('.navigation a');
    
        links.forEach(function(link) {
            link.addEventListener('click', function() {
                links.forEach(function(link) {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            });
        });
    });



  } catch (error) {
    console.error("Error in functions.js:", error);
  }