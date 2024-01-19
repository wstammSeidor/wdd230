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




    const modeButton = document.querySelector("#mode");
    const main = document.querySelector("main");
    const nav = document.querySelector("nav");
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    const section = document.querySelector("section");
    const section2 = document.querySelector(".section2");
    const p = document.querySelector("p");
    const aElements = document.querySelectorAll(".a-section");

    modeButton.addEventListener("click", () => {
    	if (modeButton.textContent.includes("🕶️")) {
    		main.style.background = "#000";
    		main.style.color = "#fff";
            nav.style.background = "#2b2e3b";
            header.style.background = "#000";
            footer.style.background = "#000";
            p.style.color = "#fff"; 
            section.style.background = "grey";
            section2.style.background = "grey";
            aElements.forEach((a) => {
                a.style.color = "#fff";
            });
    		modeButton.textContent = "🔆";

    	} else {
    		main.style.background = "#eee";
    		main.style.color = "#000";
            header.style.background = "#012d5c";
            nav.style.background = "#2b2e3b";
            footer.style.background = "#012d5c";
            p.style.color = "#000";
            aElements.forEach((a) => {
                a.style.color = "#000";
            });
            section.style.background = "white";
            section2.style.background = "white";
    		modeButton.textContent = "🕶️";
    	}
    });


  } catch (error) {
    console.error("Error in getDates.js:", error);
  }