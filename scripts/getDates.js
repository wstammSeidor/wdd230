//funcion para poner la fecha actual en el input de fecha
// document.querySelector('#currentYear').textContent = new Date().getFullYear();

    let date = new Date();
    document.querySelector('#currentYear').textContent =  date.getFullYear();

    let oLastModif = new Date(document.lastModified);
    document.querySelector('#lastModified').textContent = oLastModif;