const textElement = document.getElementById("text-writer");
const text = textElement.textContent.trim(); // Text ohne führende oder nachfolgende Leerzeichen
textElement.textContent = ""; // Text im <h2> leeren

function typeWriter(text, index) {
    if (index < text.length) {
        textElement.textContent += text.charAt(index);
        index++;
        setTimeout(function () {
            typeWriter(text, index);
        }, 60); // Geschwindigkeit der Animation (in Millisekunden)
    }
}

setTimeout(function () {
    typeWriter(text, 0); // Animation starten nach kurzem Timeout
}, 2800); // Kurzer Timeout vor Beginn der Animation (in Millisekunden)

let mybutton = document.querySelector(".svgContainer");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}