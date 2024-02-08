const baseURL = "https://wstammseidor.github.io/wdd230/";

const linksURL = `${baseURL}chamber/data/members.json`;

const cards = document.querySelector('#cards');

async function getCompaniesData() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayCompanies(data);
}

getCompaniesData();

const displayCompanies = (members) => {
    members.forEach((members) => {
      const card = document.createElement('section');
      const fullName = document.createElement('h2');
      const portrait = document.createElement('img');
        
      fullName.textContent = `${members.name}`;
      portrait.setAttribute('src', members.imageurl);
      portrait.setAttribute('alt', `${members.name} ${members.lastname}`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '200'); // Adjust width as needed
      portrait.setAttribute('height', '200'); // Adjust height as needed
  
      card.appendChild(fullName);
      card.appendChild(portrait);
      cards.appendChild(card);
    });
  }