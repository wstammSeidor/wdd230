document.addEventListener("DOMContentLoaded", function() {
    const banner = document.getElementById("banner");
    const closeBtn = document.getElementById("closeBtn");

    const today = new Date().getDay();
    // to test banner in prd
    if (today >= 1 && today <= 5) {
        banner.classList.remove("hide");
    }

    closeBtn.addEventListener("click", function() {
        banner.classList.add("hide");
    });
});