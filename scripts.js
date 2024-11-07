document.getElementById("show-contact-btn").addEventListener("click", function() {
    const contactInfo = document.getElementById("contact-info");
    contactInfo.style.display = contactInfo.style.display === "none" ? "block" : "none";
});

function showClubDetails(clubName, description) {
    alert(`${clubName}: ${description}`);
}
