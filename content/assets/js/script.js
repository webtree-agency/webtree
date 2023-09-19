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
}, 1200); // Kurzer Timeout vor Beginn der Animation (in Millisekunden)
