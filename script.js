function revealMessage() {
    document.getElementById("message").style.display = "block";
    document.getElementById("revealButton").style.display = "none";
    document.getElementById("exitButton").style.display = "inline-block";
    document.getElementById("contactButton").style.display = "inline-block";
}

function exitPage() {
    document.querySelector('.container').style.display = 'none';
}

function contactInfo() {
    const email = 'mailto:example@gmail.com?subject=Contact%20Information&body=Hello,';
    window.location.href = email;
}
