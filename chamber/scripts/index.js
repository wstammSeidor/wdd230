const baseURL = "https://wstammseidor.github.io/wdd230/";

const linksURL = `${baseURL}chamber/data/members.json`;


const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const cards = document.querySelector('#cards');



async function getCompaniesData() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayMembers(data.members);
}


  
  
  getCompaniesData();
  
  const displayMembers = (members) => {
    const goldAndSilverMembers = members.filter(member => member.membership_level === "Gold" || member.membership_level === "Silver");

    const shuffledMembers = shuffleArray(goldAndSilverMembers);

    const selectedMembers = shuffledMembers.slice(0, 3);

    selectedMembers.forEach((member) => {
        const card = document.createElement('section');
        const companyName = document.createElement('p');
        const website = document.createElement('a');
        const portrait = document.createElement('img');
          
        companyName.textContent = `${member.name}`;
  
        portrait.setAttribute('src', `${baseURL}${member.image}`);
        portrait.setAttribute('alt', `${member.name} `);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '300'); 
        portrait.setAttribute('height', '200'); 
  
        website.textContent = `${member.website}`;
        website.href = `${member.website}`;
    
        card.appendChild(portrait);
        card.appendChild(companyName);
       
        card.appendChild(website);
        cards.appendChild(card);
    });
}

function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}




