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



const coords = {x: 0, y: 0};
const circles = document.querySelectorAll(".circle");

window.addEventListener("mousemove", function(e) {
    coords.x = e.clientX;
    coords.y = e.clientY;

    circles.forEach(function(circle, index) {
        circle.style.left = coords.x + "px";
        circle.style.top = coords.y + "px";
    });
});

