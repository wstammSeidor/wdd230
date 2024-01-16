//funcion para poner la fecha actual en el input de fecha
// document.querySelector('#currentYear').textContent = new Date().getFullYear();

    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    if (day < 10)
        day = '0' + day;
    if (month < 10)
        month = '0' + month;
    document.querySelector('#currentYear').textContent = year + "/" + month + "/" + day;