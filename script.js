function revealMessage() {
    document.getElementById("message").style.display = "block";
    document.getElementById("revealButton").style.display = "none";
    document.getElementById("buttonContainer").style.display = "block";
}

function exitPage() {
    document.querySelector('.container').style.display = 'none';
}

function contactInfo() {
    const primaryEmail = 'deejay.cristobal@protonmail.com';
    const secondaryEmail = 'deejay.deejay.cristobal@protonmail.com';
    const emailBody = 'Hello,';
    const email = `mailto:${primaryEmail},${secondaryEmail}?subject=Contact%20Information&body=${emailBody}`;
    window.location.href = email;
}
