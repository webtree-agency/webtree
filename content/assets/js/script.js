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



const circle = document.querySelector(".circle");
let mouseX = 0;
let mouseY = 0;
let circleX = 0;
let circleY = 0;
const easing = 0.25;

function moveCircle() {
    let diffX = mouseX - circleX;
    let diffY = mouseY - circleY;

    circleX += diffX * easing;
    circleY += diffY * easing;
    
    // Kreisposition aktualisieren
    circle.style.left = circleX + "px";
    circle.style.top = circleY + "px";

    requestAnimationFrame(moveCircle);
}

// Eventlistener für die Mausbewegung
window.addEventListener("mousemove", function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Animation starten
moveCircle();



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

// Eine Funktion, die überprüft, ob ein Element im Viewport sichtbar ist
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
       rect.top >= 0 &&
       rect.left >= 0 &&
       rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
 }
 
 // Eine Funktion, die die Animation hinzufügt, wenn das Element im Viewport erscheint
 function handleAnimation() {
    var skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(function(item) {
       if (isElementInViewport(item)) {
          item.classList.add('animated');
       }
    });
 }
 
 // Fügen Sie ein Event-Listener hinzu, um die Animation bei Bedarf auszulösen
 window.addEventListener('scroll', handleAnimation);
 window.addEventListener('load', handleAnimation);
