document.getElementById('continueBtn').addEventListener('click', function() {
  const messageBox = document.getElementById('messageBox');
  messageBox.classList.toggle('hidden');
  typeWriterEffect("You can do it! Don't give up!", messageBox);
  document.getElementById('typingSound').play(); // Autoplay typing sound
});

document.getElementById('moreBtn').addEventListener('click', function() {
  window.location.href = "mailto:your@email.com";
});

document.getElementById('anonymousBtn').addEventListener('click', function() {
  window.open("https://ngllink.com", "_blank");
});

document.getElementById('replyBtn').addEventListener('click', function() {
  const modal = document.getElementById('replyModal');
  const span = document.getElementsByClassName("close")[0];
  modal.style.display = "block";

  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
});

// Typewriter effect function
function typeWriterEffect(text, targetElement) {
  const typingDelay = 80; // milliseconds per character
  let charIndex = 0;
  const typingInterval = setInterval(() => {
    if (charIndex < text.length) {
      targetElement.innerHTML += text.charAt(charIndex);
      charIndex++;
      document.getElementById('typingSound').play(); // Play typing sound
    } else {
      clearInterval(typingInterval);
    }
  }, typingDelay);
}
