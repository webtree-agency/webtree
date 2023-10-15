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
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
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

 const inputs = document.querySelectorAll(".contact-input");


inputs.forEach(ipt =>{
  ipt.addEventListener("focus",()=>{
    ipt.parentNode.classList.add("focus");
    ipt.parentNode.classList.add("not-empty");

  });
  ipt.addEventListener("blur",()=>{
    if(ipt.value == ""){
        ipt.parentNode.classList.remove("not-empty");
    }
    ipt.parentNode.classList.remove("focus");
  });
})

// Changing words
// script.js
var words = [
    "Macher", 
    "Entwickler",
    "in der Nähe Zürich",
    "Problemlöser",
    "unkompliziert",
    "ein eingespieltes Team",
];
var index = 0;

function changeWord() {
    var element = document.getElementById("changing-word");

    // Erstes Ausblenden des Elements
    element.style.opacity = "0";

    // Nachdem das Element ausgeblendet ist (300ms Übergang), das Wort ändern und wieder einblenden
    setTimeout(function() {
        index = (index + 1) % words.length;
        element.textContent = words[index];
        element.style.opacity = "1";
    }, 300); // muss der gleichen Zeit wie der CSS-Übergang entsprechen
}

setInterval(changeWord, 2500); // Ändert das Wort alle 5 Sekunden, genügend Zeit für den Übergang

