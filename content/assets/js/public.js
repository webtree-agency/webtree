"use strict";
const parentMarquee = document.querySelector(".marquee-wrapper");
const childMarquee = document.querySelector(".marquee-content");
// will clone the child node of Parent Marquee or copy the sibling 
const adChildMarquee = document.querySelector(".marquee-content").cloneNode(true);
parentMarquee.appendChild(adChildMarquee);
// code below will allow a draggable feature for the marquee carousel 
const ulParentListContainer = document.querySelector('.marquee-wrapper');
let isDragging = false;
const dragStart = (e) => {
    if (!isDragging)
        return;
    ulParentListContainer.scrollLeft -= e.movementX;
};
const stopDragging = () => {
    isDragging = false;
};


function mobileAndTabletChecker(){  
    if(window.innerWidth <= 768)
    ulParentListContainer.addEventListener('mousedown', () => isDragging = true);
    window.addEventListener('mouseup', stopDragging);
    ulParentListContainer.addEventListener('mousemove', dragStart);
}
// when mouse is move to left
ulParentListContainer.addEventListener('mousemove', dragStart);
// when mouse pressed is released
window.addEventListener('mouseup', stopDragging);
