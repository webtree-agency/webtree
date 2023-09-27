document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide( '.splide', {
        type   : 'loop',
        perPage: 1, // Hier ändern wir perPage auf 1
        focus  : 'center',
        arrows: 'true',
        autoplay: 'true',
    });
      
    splide.mount();
});

