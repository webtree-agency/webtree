console.log("%cWebTree", "font-size: 80px; font-weight: bold; color: #00731e;");

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

    circle.style.left = circleX - circle.offsetWidth / 2 + "px";
    circle.style.top = circleY - circle.offsetHeight / 2 + "px";

    requestAnimationFrame(moveCircle);
}

function isCursorOverElement(element) {
    const rect = element.getBoundingClientRect();
    return (
        mouseX >= rect.left &&
        mouseX <= rect.right &&
        mouseY >= rect.top &&
        mouseY <= rect.bottom
    );
}

window.addEventListener("mousemove", function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;

    const bigElements = document.querySelectorAll(".circle-big");
    let isCursorOverBigElement = false;
    bigElements.forEach(element => {
        if (isCursorOverElement(element)) {
            isCursorOverBigElement = true;
        }
    });

    if (isCursorOverBigElement) {
        circle.style.width = "38px";
        circle.style.height = "38px";
        circle.style.opacity = "0.4"; 
    } else {
        circle.style.width = "16px";
        circle.style.height = "16px";
        circle.style.opacity = "1"; 
    }
});

moveCircle();
// Counter
$(document).ready(function() {

  $('.counter').each(function () {
    $(this).prop('Counter',0).animate({
      Counter: $(this).text()
    }, {
      duration: 4000,
      easing: 'swing',
      step: function (now) {
        $(this).text(Math.ceil(now));
      }
    });
  }); 
});


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

 
(function() {
  var Util,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  Util = (function() {
    function Util() {}
    Util.prototype.extend = function(custom, defaults) {
      var key, value;
      for (key in custom) {
        value = custom[key];
        if (value != null) {
          defaults[key] = value;
        }
      }
      return defaults;
    };
    Util.prototype.isMobile = function(agent) {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent);
    };
    return Util;
  })();

  this.WOW = (function() {
    WOW.prototype.defaults = {
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true
    };
    function WOW(options) {
      if (options == null) {
        options = {};
      }
      this.scrollCallback = __bind(this.scrollCallback, this);
      this.scrollHandler = __bind(this.scrollHandler, this);
      this.start = __bind(this.start, this);
      this.scrolled = true;
      this.config = this.util().extend(options, this.defaults);
    }
    WOW.prototype.init = function() {
      var _ref;
      this.element = window.document.documentElement;
      if ((_ref = document.readyState) === "interactive" || _ref === "complete") {
        return this.start();
      } else {
        return document.addEventListener('DOMContentLoaded', this.start);
      }
    };
    WOW.prototype.start = function() {
      var box, _i, _len, _ref;
      this.boxes = this.element.getElementsByClassName(this.config.boxClass);
      if (this.boxes.length) {
        if (this.disabled()) {
          return this.resetStyle();
        } else {
          _ref = this.boxes;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            box = _ref[_i];
            this.applyStyle(box, true);
          }
          window.addEventListener('scroll', this.scrollHandler, false);
          window.addEventListener('resize', this.scrollHandler, false);
          return this.interval = setInterval(this.scrollCallback, 50);
        }
      }
    };
    WOW.prototype.stop = function() {
      window.removeEventListener('scroll', this.scrollHandler, false);
      window.removeEventListener('resize', this.scrollHandler, false);
      if (this.interval != null) {
        return clearInterval(this.interval);
      }
    };
    WOW.prototype.show = function(box) {
      this.applyStyle(box);
      return box.className = "" + box.className + " " + this.config.animateClass;
    };
    WOW.prototype.applyStyle = function(box, hidden) {
      var delay, duration, iteration;
      duration = box.getAttribute('data-wow-duration');
      delay = box.getAttribute('data-wow-delay');
      iteration = box.getAttribute('data-wow-iteration');
      return box.setAttribute('style', this.customStyle(hidden, duration, delay, iteration));
    };
    WOW.prototype.resetStyle = function() {
      var box, _i, _len, _ref, _results;
      _ref = this.boxes;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        box = _ref[_i];
        _results.push(box.setAttribute('style', 'visibility: visible;'));
      }
      return _results;
    };
    WOW.prototype.customStyle = function(hidden, duration, delay, iteration) {
      var style;
      style = hidden ? "visibility: hidden; -webkit-animation-name: none; -moz-animation-name: none; animation-name: none;" : "visibility: visible;";
      if (duration) {
        style += "-webkit-animation-duration: " + duration + "; -moz-animation-duration: " + duration + "; animation-duration: " + duration + ";";
      }
      if (delay) {
        style += "-webkit-animation-delay: " + delay + "; -moz-animation-delay: " + delay + "; animation-delay: " + delay + ";";
      }
      if (iteration) {
        style += "-webkit-animation-iteration-count: " + iteration + "; -moz-animation-iteration-count: " + iteration + "; animation-iteration-count: " + iteration + ";";
      }
      return style;
    };
    WOW.prototype.scrollHandler = function() {
      return this.scrolled = true;
    };
    WOW.prototype.scrollCallback = function() {
      var box;
      if (this.scrolled) {
        this.scrolled = false;
        this.boxes = (function() {
          var _i, _len, _ref, _results;
          _ref = this.boxes;
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            box = _ref[_i];
            if (!(box)) {
              continue;
            }
            if (this.isVisible(box)) {
              this.show(box);
              continue;
            }
            _results.push(box);
          }
          return _results;
        }).call(this);
        if (!this.boxes.length) {
          return this.stop();
        }
      }
    };
    WOW.prototype.offsetTop = function(element) {
      var top;
      top = element.offsetTop;
      while (element = element.offsetParent) {
        top += element.offsetTop;
      }
      return top;
    };
    WOW.prototype.isVisible = function(box) {
      var bottom, offset, top, viewBottom, viewTop;
      offset = box.getAttribute('data-wow-offset') || this.config.offset;
      viewTop = window.pageYOffset;
      viewBottom = viewTop + this.element.clientHeight - offset;
      top = this.offsetTop(box);
      bottom = top + box.clientHeight;
      return top <= viewBottom && bottom >= viewTop;
    };
    WOW.prototype.util = function() {
      return this._util || (this._util = new Util());
    };
    WOW.prototype.disabled = function() {
      return !this.config.mobile && this.util().isMobile(navigator.userAgent);
    };
    return WOW;
  })();
}).call(this);
wow = new WOW(
  {
    animateClass: 'animated',
    offset: 50
  }
);
wow.init();
 
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
var wordsDe = [
  "Web-Entwickler",
  "Multimedia-Designer",
  "IT-Supporter",
  "Hosting-Anbieter",
  "SEO-Experten",
];

var wordsEn = [
  "website developers",
  "multimedia designers",
  "IT supporters",
  "hosting providers",
  "SEO experts",
];

var index = 0;

function changeWord() {
  var element = document.getElementById("changing-word");

  element.style.opacity = "0";

  setTimeout(function() {
      var language = localStorage.getItem("language") || "de"; 

      var words = (language === "de") ? wordsDe : wordsEn;

      index = (index + 1) % words.length;
      element.textContent = words[index];
      element.style.opacity = "1";
  }, 300); 
}

setInterval(changeWord, 2500); 

  
  (function ($) {
  
      // Header Type = Fixed
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      var box = $('.header-text').height();
      var header = $('header').height();
  
      if (scroll >= box - header) {
        $("header").addClass("background-header");
      } else {
        $("header").removeClass("background-header");
      }
    });
  
// Menu Dropdown Toggle
if ($('.menu-trigger').length) {
  $(".menu-trigger").on('click', function() {
    $(this).toggleClass('active');
    $('.header-area .nav').slideToggle(400);
  });
}

// Menu elevator animation
$('.scroll-to-section a[href*="#"]').on('click', function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      var width = $(window).width();
      if (width < 991) {
        $('.menu-trigger').removeClass('active');
        $('.header-area .nav').slideUp(200);
      }
      $('html, body').animate({
        scrollTop: (target.offset().top - 80)
      }, 200);
      return false;
    }
  }
});
       $(window).on('load', function() {
  
          $('#js-preloader').addClass('loaded');
  
      });
  
  })(window.jQuery);
  

( function( global, factory ) {

    if ( typeof define == 'function' && define.amd ) {
      define( 'ev-emitter/ev-emitter',factory );
    } else if ( typeof module == 'object' && module.exports ) {
      module.exports = factory();
    } else {
      global.EvEmitter = factory();
    }
  
  }( typeof window != 'undefined' ? window : this, function() {
  
  function EvEmitter() {}
    
  return EvEmitter;
  
  }));
  
  ( function( window, factory ) { 'use strict';
  
    if ( typeof define == 'function' && define.amd ) {
      define( [
        'ev-emitter/ev-emitter'
      ], function( EvEmitter ) {
        return factory( window, EvEmitter );
      });
    } else if ( typeof module == 'object' && module.exports ) {
      module.exports = factory(
        window,
        require('ev-emitter')
      );
    } else {
      window.imagesLoaded = factory(
        window,
        window.EvEmitter
      );
    }
  
  })( typeof window !== 'undefined' ? window : this,
    
  function factory( window, EvEmitter ) {

  function ImagesLoaded( elem, options, onAlways ) {
    if ( !( this instanceof ImagesLoaded ) ) {
      return new ImagesLoaded( elem, options, onAlways );
    }
    var queryElem = elem;
    if ( typeof elem == 'string' ) {
      queryElem = document.querySelectorAll( elem );
    }
    if ( !queryElem ) {
      console.error( 'Bad element for imagesLoaded ' + ( queryElem || elem ) );
      return;
    }
  
    this.elements = makeArray( queryElem );
    this.options = extend( {}, this.options );
    if ( typeof options == 'function' ) {
      onAlways = options;
    } else {
      extend( this.options, options );
    }
  
    if ( onAlways ) {
      this.on( 'always', onAlways );
    }
  
    this.getImages();
  
    if ( $ ) {
      this.jqDeferred = new $.Deferred();
    }
  
    setTimeout( this.check.bind( this ) );
  }
  
  return ImagesLoaded;
  
  });

let counter = 0;
setInterval(() =>{
  if(counter == 100){
    clearInterval();
  }else{
    counter += 1;
  }
  
},30);

const skillElements = document.querySelectorAll('.skill');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('start-animation'); // Add the animation class when the element is in the viewport
      observer.unobserve(entry.target); // Stop observing the element after the animation starts
    }
  });
}, { threshold: 0.5 }); // Adjust the threshold value as needed

skillElements.forEach((el) => observer.observe(el));


// FAQ 
const panels = document.querySelectorAll('.panel');
         
panels.forEach(panel => {
    panel.addEventListener('change', () => {
        panels.forEach(otherPanel => {
            if (otherPanel !== panel) {
                otherPanel.checked = false;
            }
        });
    });
});

// Slider
document.addEventListener("DOMContentLoaded", function() {
  var sliderButton = document.getElementById("filter-slider-button");
  var gridButton = document.getElementById("filter-grid-button");
  var filterSlider = document.querySelector(".filter-slider");
  var filterGrid = document.querySelector(".filter-grid");

  var isMobile = window.matchMedia("only screen and (max-width: 768px)").matches;

  // On mobile -> slider
  if (isMobile) {
    filterSlider.style.display = "block";
    filterGrid.style.display = "none";
    sliderButton.classList.add("button-active");
    gridButton.classList.remove("button-active");
  } else {
    filterSlider.style.display = "none";
    filterGrid.style.display = "block";
    gridButton.classList.add("button-active");
    sliderButton.classList.remove("button-active");
  }

  sliderButton.addEventListener("click", function() {
    filterSlider.style.display = "block";
    filterGrid.style.display = "none";

    sliderButton.classList.add("button-active");
    gridButton.classList.remove("button-active");
  });

  gridButton.addEventListener("click", function() {
    filterSlider.style.display = "none";
    filterGrid.style.display = "block";

    gridButton.classList.add("button-active");
    sliderButton.classList.remove("button-active");
  });
});

// Time Box
function updateTime() {
  var now = new Date();
  var hour = now.getUTCHours() + 2; // Zeitzone +2
  var minute = now.getUTCMinutes();
  var timeZoneString = "GMT+2"; // Zeitzone +2
  document.getElementById('timeDisplay').innerHTML = '<span class="time">' + hour + ':' + (minute < 10 ? "0" : "") + minute + '</span> (' + timeZoneString + ')';
}

updateTime(); 

setInterval(updateTime, 3000);
