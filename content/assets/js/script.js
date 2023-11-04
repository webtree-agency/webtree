
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
  
  (function ($) {
      
      "use strict";
  
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
  
  
      $('.loop').owlCarousel({
        center: true,
        items:1,
        loop:true,
        autoplay: true,
        nav: true,
        margin:0,
        responsive:{ 
            1200:{
                items:5
            },
            992:{
                items:3
            },
            760:{
              items:2
          }
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


    // Acc
    $(document).on("click", ".naccs .menu div", function() {
      var numberIndex = $(this).index();

      if (!$(this).is("active")) {
          $(".naccs .menu div").removeClass("active");
          $(".naccs ul li").removeClass("active");

          $(this).addClass("active");
          $(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");

          var listItemHeight = $(".naccs ul")
            .find("li:eq(" + numberIndex + ")")
            .innerHeight();
          $(".naccs ul").height(listItemHeight + "px");
        }
    });
      // Page loading animation
       $(window).on('load', function() {
  
          $('#js-preloader').addClass('loaded');
  
      });
  
      // Window Resize Mobile Menu Fix
    function mobileNav() {
      var width = $(window).width();
      $('.submenu').on('click', function() {
        if(width < 767) {
          $('.submenu ul').removeClass('active');
          $(this).find('ul').toggleClass('active');
        }
      });
    }
  
  })(window.jQuery);
  
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

// IMAGES LOADED

( function( global, factory ) {
    // universal module definition
    /* jshint strict: false */ /* globals define, module, window */
    if ( typeof define == 'function' && define.amd ) {
      // AMD - RequireJS
      define( 'ev-emitter/ev-emitter',factory );
    } else if ( typeof module == 'object' && module.exports ) {
      // CommonJS - Browserify, Webpack
      module.exports = factory();
    } else {
      // Browser globals
      global.EvEmitter = factory();
    }
  
  }( typeof window != 'undefined' ? window : this, function() {
  
  
  
  function EvEmitter() {}
  
  var proto = EvEmitter.prototype;
  
  proto.on = function( eventName, listener ) {
    if ( !eventName || !listener ) {
      return;
    }
    // set events hash
    var events = this._events = this._events || {};
    // set listeners array
    var listeners = events[ eventName ] = events[ eventName ] || [];
    // only add once
    if ( listeners.indexOf( listener ) == -1 ) {
      listeners.push( listener );
    }
  
    return this;
  };
  
  proto.once = function( eventName, listener ) {
    if ( !eventName || !listener ) {
      return;
    }
    // add event
    this.on( eventName, listener );
    // set once flag
    // set onceEvents hash
    var onceEvents = this._onceEvents = this._onceEvents || {};
    // set onceListeners object
    var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
    // set flag
    onceListeners[ listener ] = true;
  
    return this;
  };
  
  proto.off = function( eventName, listener ) {
    var listeners = this._events && this._events[ eventName ];
    if ( !listeners || !listeners.length ) {
      return;
    }
    var index = listeners.indexOf( listener );
    if ( index != -1 ) {
      listeners.splice( index, 1 );
    }
  
    return this;
  };
  
  proto.emitEvent = function( eventName, args ) {
    var listeners = this._events && this._events[ eventName ];
    if ( !listeners || !listeners.length ) {
      return;
    }
    // copy over to avoid interference if .off() in listener
    listeners = listeners.slice(0);
    args = args || [];
    // once stuff
    var onceListeners = this._onceEvents && this._onceEvents[ eventName ];
  
    for ( var i=0; i < listeners.length; i++ ) {
      var listener = listeners[i]
      var isOnce = onceListeners && onceListeners[ listener ];
      if ( isOnce ) {
        // remove listener
        // remove before trigger to prevent recursion
        this.off( eventName, listener );
        // unset once flag
        delete onceListeners[ listener ];
      }
      // trigger listener
      listener.apply( this, args );
    }
  
    return this;
  };
  
  proto.allOff = function() {
    delete this._events;
    delete this._onceEvents;
  };
  
  return EvEmitter;
  
  }));
  

  
  ( function( window, factory ) { 'use strict';
    // universal module definition
  
    /*global define: false, module: false, require: false */
  
    if ( typeof define == 'function' && define.amd ) {
      // AMD
      define( [
        'ev-emitter/ev-emitter'
      ], function( EvEmitter ) {
        return factory( window, EvEmitter );
      });
    } else if ( typeof module == 'object' && module.exports ) {
      // CommonJS
      module.exports = factory(
        window,
        require('ev-emitter')
      );
    } else {
      // browser global
      window.imagesLoaded = factory(
        window,
        window.EvEmitter
      );
    }
  
  })( typeof window !== 'undefined' ? window : this,
  
  // --------------------------  factory -------------------------- //
  
  function factory( window, EvEmitter ) {
  
  
  
  var $ = window.jQuery;
  var console = window.console;
  
  // -------------------------- helpers -------------------------- //
  
  // extend objects
  function extend( a, b ) {
    for ( var prop in b ) {
      a[ prop ] = b[ prop ];
    }
    return a;
  }
  
  var arraySlice = Array.prototype.slice;
  
  // turn element or nodeList into an array
  function makeArray( obj ) {
    if ( Array.isArray( obj ) ) {
      // use object if already an array
      return obj;
    }
  
    var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
    if ( isArrayLike ) {
      // convert nodeList to array
      return arraySlice.call( obj );
    }
  
    // array of single index
    return [ obj ];
  }
  
  // -------------------------- imagesLoaded -------------------------- //
  
  /**
   * @param {Array, Element, NodeList, String} elem
   * @param {Object or Function} options - if function, use as callback
   * @param {Function} onAlways - callback function
   */
  function ImagesLoaded( elem, options, onAlways ) {
    // coerce ImagesLoaded() without new, to be new ImagesLoaded()
    if ( !( this instanceof ImagesLoaded ) ) {
      return new ImagesLoaded( elem, options, onAlways );
    }
    // use elem as selector string
    var queryElem = elem;
    if ( typeof elem == 'string' ) {
      queryElem = document.querySelectorAll( elem );
    }
    // bail if bad element
    if ( !queryElem ) {
      console.error( 'Bad element for imagesLoaded ' + ( queryElem || elem ) );
      return;
    }
  
    this.elements = makeArray( queryElem );
    this.options = extend( {}, this.options );
    // shift arguments if no options set
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
      // add jQuery Deferred object
      this.jqDeferred = new $.Deferred();
    }
  
    // HACK check async to allow time to bind listeners
    setTimeout( this.check.bind( this ) );
  }
  
  ImagesLoaded.prototype = Object.create( EvEmitter.prototype );
  
  ImagesLoaded.prototype.options = {};
  
  ImagesLoaded.prototype.getImages = function() {
    this.images = [];
  
    // filter & find items if we have an item selector
    this.elements.forEach( this.addElementImages, this );
  };
  
  /**
   * @param {Node} element
   */
  ImagesLoaded.prototype.addElementImages = function( elem ) {
    // filter siblings
    if ( elem.nodeName == 'IMG' ) {
      this.addImage( elem );
    }
    // get background image on element
    if ( this.options.background === true ) {
      this.addElementBackgroundImages( elem );
    }
  
    // find children
    // no non-element nodes, #143
    var nodeType = elem.nodeType;
    if ( !nodeType || !elementNodeTypes[ nodeType ] ) {
      return;
    }
    var childImgs = elem.querySelectorAll('img');
    // concat childElems to filterFound array
    for ( var i=0; i < childImgs.length; i++ ) {
      var img = childImgs[i];
      this.addImage( img );
    }
  
    // get child background images
    if ( typeof this.options.background == 'string' ) {
      var children = elem.querySelectorAll( this.options.background );
      for ( i=0; i < children.length; i++ ) {
        var child = children[i];
        this.addElementBackgroundImages( child );
      }
    }
  };
  
  var elementNodeTypes = {
    1: true,
    9: true,
    11: true
  };
  
  ImagesLoaded.prototype.addElementBackgroundImages = function( elem ) {
    var style = getComputedStyle( elem );
    if ( !style ) {
      // Firefox returns null if in a hidden iframe https://bugzil.la/548397
      return;
    }
    // get url inside url("...")
    var reURL = /url\((['"])?(.*?)\1\)/gi;
    var matches = reURL.exec( style.backgroundImage );
    while ( matches !== null ) {
      var url = matches && matches[2];
      if ( url ) {
        this.addBackground( url, elem );
      }
      matches = reURL.exec( style.backgroundImage );
    }
  };
  
  /**
   * @param {Image} img
   */
  ImagesLoaded.prototype.addImage = function( img ) {
    var loadingImage = new LoadingImage( img );
    this.images.push( loadingImage );
  };
  
  ImagesLoaded.prototype.addBackground = function( url, elem ) {
    var background = new Background( url, elem );
    this.images.push( background );
  };
  
  ImagesLoaded.prototype.check = function() {
    var _this = this;
    this.progressedCount = 0;
    this.hasAnyBroken = false;
    // complete if no images
    if ( !this.images.length ) {
      this.complete();
      return;
    }
  
    function onProgress( image, elem, message ) {
      // HACK - Chrome triggers event before object properties have changed. #83
      setTimeout( function() {
        _this.progress( image, elem, message );
      });
    }
  
    this.images.forEach( function( loadingImage ) {
      loadingImage.once( 'progress', onProgress );
      loadingImage.check();
    });
  };
  
  ImagesLoaded.prototype.progress = function( image, elem, message ) {
    this.progressedCount++;
    this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
    // progress event
    this.emitEvent( 'progress', [ this, image, elem ] );
    if ( this.jqDeferred && this.jqDeferred.notify ) {
      this.jqDeferred.notify( this, image );
    }
    // check if completed
    if ( this.progressedCount == this.images.length ) {
      this.complete();
    }
  
    if ( this.options.debug && console ) {
      console.log( 'progress: ' + message, image, elem );
    }
  };
  
  ImagesLoaded.prototype.complete = function() {
    var eventName = this.hasAnyBroken ? 'fail' : 'done';
    this.isComplete = true;
    this.emitEvent( eventName, [ this ] );
    this.emitEvent( 'always', [ this ] );
    if ( this.jqDeferred ) {
      var jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';
      this.jqDeferred[ jqMethod ]( this );
    }
  };
  
  // --------------------------  -------------------------- //
  
  function LoadingImage( img ) {
    this.img = img;
  }
  
  LoadingImage.prototype = Object.create( EvEmitter.prototype );
  
  LoadingImage.prototype.check = function() {
    // If complete is true and browser supports natural sizes,
    // try to check for image status manually.
    var isComplete = this.getIsImageComplete();
    if ( isComplete ) {
      // report based on naturalWidth
      this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
      return;
    }
  
    // If none of the checks above matched, simulate loading on detached element.
    this.proxyImage = new Image();
    this.proxyImage.addEventListener( 'load', this );
    this.proxyImage.addEventListener( 'error', this );
    // bind to image as well for Firefox. #191
    this.img.addEventListener( 'load', this );
    this.img.addEventListener( 'error', this );
    this.proxyImage.src = this.img.src;
  };
  
  LoadingImage.prototype.getIsImageComplete = function() {
    // check for non-zero, non-undefined naturalWidth
    // fixes Safari+InfiniteScroll+Masonry bug infinite-scroll#671
    return this.img.complete && this.img.naturalWidth;
  };
  
  LoadingImage.prototype.confirm = function( isLoaded, message ) {
    this.isLoaded = isLoaded;
    this.emitEvent( 'progress', [ this, this.img, message ] );
  };
  
  // ----- events ----- //
  
  // trigger specified handler for event type
  LoadingImage.prototype.handleEvent = function( event ) {
    var method = 'on' + event.type;
    if ( this[ method ] ) {
      this[ method ]( event );
    }
  };
  
  LoadingImage.prototype.onload = function() {
    this.confirm( true, 'onload' );
    this.unbindEvents();
  };
  
  LoadingImage.prototype.onerror = function() {
    this.confirm( false, 'onerror' );
    this.unbindEvents();
  };
  
  LoadingImage.prototype.unbindEvents = function() {
    this.proxyImage.removeEventListener( 'load', this );
    this.proxyImage.removeEventListener( 'error', this );
    this.img.removeEventListener( 'load', this );
    this.img.removeEventListener( 'error', this );
  };
  
  // -------------------------- Background -------------------------- //
  
  function Background( url, element ) {
    this.url = url;
    this.element = element;
    this.img = new Image();
  }
  
  // inherit LoadingImage prototype
  Background.prototype = Object.create( LoadingImage.prototype );
  
  Background.prototype.check = function() {
    this.img.addEventListener( 'load', this );
    this.img.addEventListener( 'error', this );
    this.img.src = this.url;
    // check if image is already complete
    var isComplete = this.getIsImageComplete();
    if ( isComplete ) {
      this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
      this.unbindEvents();
    }
  };
  
  Background.prototype.unbindEvents = function() {
    this.img.removeEventListener( 'load', this );
    this.img.removeEventListener( 'error', this );
  };
  
  Background.prototype.confirm = function( isLoaded, message ) {
    this.isLoaded = isLoaded;
    this.emitEvent( 'progress', [ this, this.element, message ] );
  };
  
  // -------------------------- jQuery -------------------------- //
  
  ImagesLoaded.makeJQueryPlugin = function( jQuery ) {
    jQuery = jQuery || window.jQuery;
    if ( !jQuery ) {
      return;
    }
    // set local variable
    $ = jQuery;
    // $().imagesLoaded()
    $.fn.imagesLoaded = function( options, callback ) {
      var instance = new ImagesLoaded( this, options, callback );
      return instance.jqDeferred.promise( $(this) );
    };
  };
  // try making plugin
  ImagesLoaded.makeJQueryPlugin();
  
  // --------------------------  -------------------------- //
  
  return ImagesLoaded;
  
  });
  
  // CONTACT 

  document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); 

        $.ajax({
            url: "https://formsubmit.co/36edd6f61d356d3a6af959552e803d13",
            method: "POST",
            data: {
                Vorname: document.querySelector('[name="name"]').value,
                Nachname: document.querySelector('[name="lastname"]').value,
                Email: document.querySelector('[name="email"]').value,
                Nachricht: document.querySelector('[name="comments"]').value
            },
            dataType: "json",
            success: function(response) {
                clearForm(); 
                showSuccessMessage(); 
            }
        });
    });

    function clearForm() {
        form.reset();
    }

    function showSuccessMessage() {
        const successMessage = document.getElementById('success-message');
        successMessage.style.display = 'block';
    }
});

// Presentation link
function zeigeZugangscodeDialog() {
  const erwarteterCode = "12345"; 

  const eingegebenerCode = prompt("Bitte gib den Zugangscode ein:");

  if (eingegebenerCode === erwarteterCode) {
      window.location.href = "./slides-export.pdf";
  } else if (eingegebenerCode !== null) {
      alert("Falscher Zugangscode. Versuche es erneut.");
  }
}
