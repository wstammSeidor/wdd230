const baseURL = "https://wstammseidor.github.io/wdd230/";

const linksURL = `${baseURL}chamber/data/members.json`;

const cards = document.querySelector('#cards');

async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
//   console.table(data.prophets); 
  displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
      const card = document.createElement('section');
      const fullName = document.createElement('h2');
      const portrait = document.createElement('img');
  
      fullName.textContent = `${prophet.name} ${prophet.lastname}`;
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `${prophet.name} ${prophet.lastname}`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '200'); // Adjust width as needed
      portrait.setAttribute('height', '200'); // Adjust height as needed
  
      card.appendChild(fullName);
      card.appendChild(portrait);
      cards.appendChild(card);
    });
  }