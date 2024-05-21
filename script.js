const message = "You can do it! Don't Give Up!";
let index = 0;
const typingSound = document.getElementById('typingSound');

function revealMessage() {
    document.getElementById("revealButton").style.display = "none";
    document.getElementById("message").style.display = "block";
    typeMessage();
}

function typeMessage() {
    if (index < message.length) {
        document.getElementById("message").innerHTML += message.charAt(index);
        typingSound.currentTime = 0; // Rewind to start
        typingSound.play(); // Play sound
        index++;
        setTimeout(typeMessage, 100); // Adjust typing speed (milliseconds)
    } else {
        document.getElementById("contactButton").style.display = "inline-block";
    }
}

function exitPage() {
    document.querySelector('.container').style.display = 'none';
}

function contactInfo() {
    const primaryEmail = 'deejay.cristobal@protonmail.com';
    const secondaryEmail = 'deejay.deejay.cristobal@protonmail.com';
    const emailBody = 'Hello,';
    const email = `mailto:${primaryEmail},${secondaryEmail}?subject=An%20Appreciation&body=${emailBody}`;
    window.location.href = email;
}
