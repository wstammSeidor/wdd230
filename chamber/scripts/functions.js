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



    //counting visitors

    document.addEventListener('DOMContentLoaded', function () {
        const currentDate = new Date();
    
        const lastVisitDate = localStorage.getItem('lastVisit');
    
        if (!lastVisitDate) {
            displayMessage("Welcome! Let us know if you have any questions.");
        } else {
            const timeDifference = currentDate - new Date(lastVisitDate);
    
            const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    
            if (daysDifference < 1) {
                displayMessage("Back so soon! Awesome!");
            } else {
                const message = (daysDifference === 1) ? "day" : "days";
                displayMessage(`You last visited ${daysDifference} ${message} ago.`);
            }
        }
    
        localStorage.setItem('lastVisit', currentDate.toISOString());
    });
    
    function displayMessage(message) {
        const messageFooter = document.getElementById('footer');
        const messageElement = document.createElement('h2');
        messageElement.textContent = message;
        messageFooter.appendChild(messageElement);
    }
    

     const  currentTimestamp = new Date().toISOString();
     document.getElementById("timestamp").value = currentTimestamp;



  } catch (error) {
    console.error("Error in functions.js:", error);
  }