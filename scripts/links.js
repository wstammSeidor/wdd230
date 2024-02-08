const baseURL = "https://wstammseidor.github.io/wdd230/";

const linksURL = `${baseURL}data/links.json`;


async function getLinks() {
    try {
      const response = await fetch(linksURL);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      displayLinks(data.weeks);
    } catch (error) {
      console.error('Error fetching links data:', error);
    }
  }
  
  getLinks();

  
  function displayLinks(weeks) {
    const activityList = document.getElementById('activity-list');
    
    weeks.forEach(week => {
      const weekItem = document.createElement('li');
      weekItem.classList.add('week-item'); // Añadir clase para separación entre semanas
  
      const weekTitle = document.createElement('span');
      weekTitle.textContent = `${week.week}: `;
      weekItem.appendChild(weekTitle);
  
      const linksList = document.createElement('ul');
      linksList.classList.add('week-links'); // Añadir clase para estilizar
  
      week.links.forEach((link, index) => {
        const linkItem = document.createElement('li');
        const linkAnchor = document.createElement('a');
        linkAnchor.href = `${baseURL}${link.url}`;
        linkAnchor.textContent = link.title;
        linkItem.appendChild(linkAnchor);
        
        if (index < week.links.length - 1) {
          const separator = document.createElement('span');
          separator.textContent = ' | ';
          linkItem.appendChild(separator);
        }
  
        linksList.appendChild(linkItem);
      });
  
      weekItem.appendChild(linksList);
      activityList.appendChild(weekItem);
    });
  }
  