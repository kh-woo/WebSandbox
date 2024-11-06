

document.addEventListener('DOMContentLoaded', function() {
    const showContactBtn = document.getElementById('show-contact-btn');
    const contactInfo = document.getElementById('contact-info');

    showContactBtn.addEventListener('click', function() {
        contactInfo.style.display = 'block';
    });
});
