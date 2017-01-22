//para

$(function() {
    var container = $('.wrap'),
        elements = [$('.el'), $('.el-2'), $('.el-3'),],
        containerWidth = container.width(),
        containerHeight = container.height(),
        speed = 0.1;

    $(window).resize(function() {
        containerWidth = container.width();
        containerHeight = container.height();
    });

    $('body').on('mousemove', function(e) {
        for (index in elements) {
            if (index > 0) {
                var current_speed = speed + .01;
            } else {
                var current_speed = .015;
            }

            var offsetX = (.5 - e.pageX / containerWidth) * current_speed * containerWidth,
                offsetY = (.5 - e.pageY / containerHeight) * current_speed * containerHeight;

            if (index == 1) {
                elements[index].css({
                    left: containerWidth / 2 - offsetX,
                    top: containerHeight / 2 - offsetY
                });
            } else {
                elements[index].css({
                    left: containerWidth / 2 + offsetX,
                    top: containerHeight / 2 + offsetY
                });
            }
        }
    });
});







//HAMBURGERMENU
var hamb = document.querySelector('.hamburger');
var hambBg = document.querySelector('#hamb-bg');

hamb.onclick = function() {
    if (hamb.classList.contains('is-active')) {
        hamb.classList.remove('is-active');
        hambBg.style.width = '0px';
        hambBg.style.right = '-400px';
        hambBg.style.opacity = '0';
        hambBg.style.display = 'none';

    } else {
        hamb.classList.add('is-active');
        hambBg.classList.remove('displayNone');
        hambBg.style.display = 'block';
        setTimeout(function() {
            hambBg.style.width = '100%';

            hambBg.style.right = '0px';
            hambBg.style.opacity = '1';
        }, 80);

    }
}

// //FORMS

// var click_carou = document.querySelector('.mail-carou .mail2');
// var click_port = document.querySelector('.mail-box .mail2');
// var box = document.querySelector('#contact');
// var close = document.querySelector('.close-box');
// var close1 = document.querySelector('.close-carou');
// var port = document.querySelector('.items');
// var port2 = document.querySelector('.carousel');
// var port1 = document.querySelector('.box-portrait');



// if (click_port == null) {


//     click_carou.onclick = function() {



//         port.style.display = 'none';
//         port2.style.display = 'none';


//         box.style.opacity = '1';
//         box.style.display = 'block';


//     }
// } else {
//     click_port.onclick = function() {



//         port1.style.display = 'none';

//         box.style.opacity = '1';


//     }
// }

// if (close1 == null) {

//     close.onclick = function() {

//         box.style.display = 'none';
//         port1.style.display = 'block'
//         box.style.opacity = '0';


//     }
// } else {


//     close1.onclick = function() {

//         if (window.matchMedia("(max-width: 768px)").matches) {

//             port2.style.display = 'block';
//             port.style.display = 'none';

//         } else {


//             port.style.display = 'block';



//         }
//         box.style.display = 'none';
//         box.style.opacity = '0';

//     }


// }



// window.addEventListener('resize', function() {    
//     if (window.matchMedia("(max-width: 615px)").matches) {        
//      resize();
//     }

// });


//CAROUSEL


var carousel = {};

carousel.el = {};
carousel.el.container = document.querySelector('.carousel');
carousel.el.slides_mover = carousel.el.container.querySelector('.slides-mover');
carousel.el.next = carousel.el.container.querySelector('.siblings .next');
carousel.el.prev = carousel.el.container.querySelector('.siblings .prev');
carousel.el.slides = carousel.el.container.querySelectorAll('.slide');

carousel.index = 0;
carousel.count = carousel.el.slides.length;

carousel.el.next.addEventListener('click', function(event) {
    carousel.index++;

    if (carousel.index >= carousel.count)
        carousel.index = 0;

    var x = -carousel.index * 400;

    carousel.el.slides_mover.style.transform = 'translateX(' + x + 'px)';

    event.preventDefault();
});



carousel.el.prev.addEventListener('click', function(event) {
    carousel.index--;

    if (carousel.index < 0)
        carousel.index = carousel.el.slides.length - 1;


    var x = -carousel.index * 400;

    carousel.el.slides_mover.style.transform = 'translateX(' + x + 'px)';

    event.preventDefault();
});


//TESTPAGETRANSI
