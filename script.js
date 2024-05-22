const message = "You can do it! Don't Give Up!";
let index = 0;
const typingSound = document.getElementById('typingSound');
const typingDelay = 375; // Typing delay in milliseconds to span 9 seconds

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
}

function exitPage() {
    document.querySelector('.login-container').style.display = 'none';
}

function contactInfo() {
    const primaryEmail = 'deejay.cristobal@protonmail.com';
    const secondaryEmail = 'dheejaycristobal28@gmail.com';
    const emailBody = 'Hello,';
    const email = `mailto:${primaryEmail},${secondaryEmail}?subject=A%20Message&body=${emailBody}`;
    window.location.href = email;
}

function openNGL() {
    window.open('https://ngl.link/deejay81979', '_blank');
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

function updateDateTime() {
    const now = new Date().toLocaleString('en-PH', {
        timeZone: 'Asia/Manila',
        dateStyle: 'full',
        timeStyle: 'long'
    });
    document.getElementById('datetime').innerText = ' ${now}`;
}

// Update the date and time every second
setInterval(updateDateTime, 1000);

// Initial call to display the date and time immediately on load
updateDateTime();
