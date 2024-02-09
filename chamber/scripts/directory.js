const baseURL = "https://wstammseidor.github.io/wdd230/";

const linksURL = `${baseURL}chamber/data/members.json`;


const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const cards = document.querySelector('#cards');


gridbutton.addEventListener("click", () => {
	// example using arrow function
	cards.classList.add("directory-grid");
	cards.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	cards.classList.add("list");
	cards.classList.remove("directory-grid");
}




async function getCompaniesData() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayCompanies(data.members);
}




getCompaniesData();

const displayCompanies = (members) => {

    // console.log(members)
    members.forEach((members) => {
      const card = document.createElement('section');
      const companyName = document.createElement('p');
      const address = document.createElement('p');
      const phone = document.createElement('p');
      const website = document.createElement('a');
      const portrait = document.createElement('img');
        
      companyName.textContent = `${members.name}`;

      portrait.setAttribute('src', `${baseURL}${members.image}`);
    //   console.log(`${baseURL}${members.image}`)
      portrait.setAttribute('alt', `${members.name} `);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '300'); 
      portrait.setAttribute('height', '200'); 

      address.textContent = `${members.address}`;
      phone.textContent = `${members.phone}`;
      website.textContent = `${members.website}`;
      website.href = `${members.website}`;
  
      card.appendChild(portrait);
      card.appendChild(companyName);
      card.appendChild(address);
      card.appendChild(website);
      card.appendChild(phone);
      cards.appendChild(card);
    });
  }



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