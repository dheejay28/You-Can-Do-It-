function revealMessage() {
    document.getElementById("message").style.display = "block";
    document.querySelector(".overlay-container").style.display = "none";
    document.getElementById("exitButton").style.display = "inline-block";
    document.getElementById("contactButton").style.display = "inline-block";
}

function exitPage() {
    document.querySelector('.container').style.display = 'none';
}

function contactInfo() {
    const primaryEmail = 'deejay.cristobal@protonmail.com';
    const secondaryEmail = 'deejay.deejay.cristobal@protonmail.com';
    const emailBody = '';
    const email = `mailto:${primaryEmail},${secondaryEmail}?subject=Contact%20Information&body=${emailBody}`;
    window.location.href = email;
}
