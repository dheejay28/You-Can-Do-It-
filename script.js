const message = "You can do it! Don't Give Up!";
let index = 0;
const typingSound = document.getElementById('typingSound');
const typingDelay = 300; // Typing delay in milliseconds to span 9 seconds

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
        setTimeout(typeMessage, typingDelay);
    } else {
        document.getElementById("moreButtonContainer").style.display = "block"; // Display More button container
    }
}

function showMoreOptions() {
    document.getElementById("moreButtonContainer").style.display = "none"; // Hide More button container
    document.getElementById("messageButtons").style.display = "flex"; // Display message buttons
    document.getElementById("messageButtons").style.flexDirection = "column"; // Align buttons vertically
}

function contactInfo() {
    const primaryEmail = 'deejay.cristobal@protonmail.com';
    const secondaryEmail = 'dheejaycristobal28@gmail.com';
    const emailBody = 'Hello,';
    const email = `mailto:${primaryEmail},${secondaryEmail}?subject=Contact%20Information&body=${emailBody}`;
    window.location.href = email;
}

function openNGL() {
    const nglLink = 'https://ngl.link/deejay81979'; // Ensure the link is correctly formatted
    window.open(nglLink, '_blank');
}

function openReplies() {
    const modal = document.getElementById('replyModal');
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('replyModal');
    modal.style.display = 'none';
}

function showReply(imageSrc, text) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalText = document.getElementById('modalText');
    modalImage.src = imageSrc;
    modalText.textContent = text;
    modal.style.display = 'block';
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
}
