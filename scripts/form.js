
document.getElementById("confirmPassword").addEventListener("input", checkPasswordMatch);

function checkPasswordMatch() {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    const message = document.querySelector("#formmessage");

    if (password !== confirmPassword) {
        message.textContent = "Passwords do not match. Please try again.";
    } else {
        message.textContent = "";
    }
}



document.getElementById("email").addEventListener("input", validateEmail);

function validateEmail() {
    let email = document.getElementById("email").value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@byui\.edu$/;
    const message = document.querySelector("#formmessage");

    if (!emailPattern.test(email)) {
        message.textContent = "Please enter a valid email address from the byui.edu domain.";
    } else {
        message.textContent = "";
    }
}


function updateRatingValue() {
    let ratingValue = document.getElementById("pageRating").value;
    document.getElementById("ratingValue").innerText = ratingValue;
}