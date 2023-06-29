var x=[
    "../img/central-retail/anh1.png",
    "../img/central-retail/anh2.jpg",
    "../img/central-retail/anh3.jpg",
    "../img/central-retail/anh4.jpg",
    "../img/central-retail/anh5.jpg",
    "../img/central-retail/anh6.jpg",
    "../img/central-retail/anh7.jpg",
    "../img/central-retail/anh8.jpg",
    "../img/central-retail/anh9.jpg",
    "../img/central-retail/anh10.jpg",
    "../img/central-retail/anh11.jpg",
    "../img/central-retail/anh12.jpg",
    "../img/central-retail/anh13.jpg",
    "../img/central-retail/anh14.jpg",
    "../img/central-retail/anh15.jpg"

];


var count = 0;
setInterval(function () {
    document.getElementById('img' + count).checked = true;
    count++;
    if (count > 15) {
        count = 1;
    }
}, 1000)




function next() {
count++;

if (count==x.length) count=0; 
document.getElementById("hinhanh").src=x[count];
}
function back() {
count--;
if (count < -0) count=x.length-1;
document.getElementById("hinhanh").src=x[count];
}

setInterval("next()", 5000);


// // =========================================================================



const h=document.querySelector(".top-page");
var menu=document.querySelector(".btn");
window.addEventListener("scroll", myFunction);
var t;
function myFunction(){
t=h.getBoundingClientRect().top+h.getBoundingClientRect().height;
if(t<0){
menu.style.setProperty("position", "fixed");
menu.style.setProperty("top","0px");
}else{
menu.style.removeProperty("position","fixed");
menu.style.removeProperty("top","0px");
}
}
// ====================================================================================================
// ======================================================================================================

// var menuButton = document.getElementById('btn');
// var menu = document.getElementById('menu');

// //xử lý hover vào button
// menuButton.addEventListener('mouseover', function () {
//   //   menu.style.display = 'block';
// });

// menuButton.addEventListener('mouseout', function () {
//   //   menu.style.display = 'none';
// });

// //cho height bannr = menu
// var slider = document.querySelector('.slider');
// slider.style.height = document.querySelector('#menu').clientHeight + 'px';

// var lstbanner = ['Homepage1.png', 'Homepage2.jpg', 'Homepage3.jpg',
//   'Homepage4.jpg', 'Homepage5.jpg', 'Homepage6.jpg',
//   'Homepage7.jpg', 'Homepage8.jpg', 'Homepage9.jpg',
//   'Homepage10.jpg', 'Homepage11.jpg', 'Homepage12.jpg', 'Homepage13.jpg'];

// for (var i = 0; i < lstbanner.length; i++) {
//   document.querySelector('.list-dot').innerHTML += '<div idx="' + i + '">';
//   document.querySelector('#screen').innerHTML += '<img idx="' + i + '" src="img/' + lstbanner[i] + '" >';
// }
// document.querySelector('.list-dot div:first-child').classList.add('active');
// document.querySelector('#screen img:first-child').classList.add('active')
// document.querySelector('#screen img:first-child').setAttribute('id', 'lastClone');
// document.querySelector('#screen img:last-child').setAttribute('id', 'firstClone');
// // document.getElementById('banner-screen').style.backgroundImage = 'url(img/' + lstbanner[0] + ')';

// var arrowLeft = document.querySelector('#btn_prev');
// var arrowRight = document.querySelector('#btn_next');

// var screen = document.querySelector('#screen');
// var lstslide = document.querySelectorAll('#screen img');
// var lstdot = document.querySelectorAll('.list-dot div');


// // document.addEventListener("DOMContentLoaded", function () {
// //   var arrowLeft = document.querySelector('#btn_pre');
// //   var arrowRight = document.querySelector('#btn_next');

// //   var screen = document.querySelector('#screen');
// //   var lstslide = document.querySelectorAll('#screen img');
// //   var lstdot = document.querySelectorAll('.list-dot div');

// //   // var btn = document.querySelectorAll('.slick-dots button');
// //   var eleIsClicked = 0;

// //   var size = screen.clientWidth;
// //   var count = 1, time = 4000;
// //   var stateTab = true;
// //   var stateTranslateOfSlickTrack = true;
// //   var v_interval = "";

// //   var hidden, visibilityChange;
// //   if (typeof document.hidden !== "undefined") {
// //     hidden = "hidden";
// //     visibilityChange = "visibilitychange";
// //   } else if (typeof document.msHidden !== "undefined") {
// //     hidden = "msHidden";
// //     visibilityChange = "msvisibilitychange";
// //   } else if (typeof document.webkitHidden !== "undefined") {
// //     hidden = "webkitHidden";
// //     visibilityChange = "webkitvisibilitychange";
// //   }

// //   function commonFuncBothArrows(arrowL, arrowR, e) {
// //     e.preventDefault();
// //     stateTranslateOfSlickTrack = false;
// //     if (arrowL) {
// //       if (count <= 0) { return; }
// //     } else {
// //       if (arrowR) {
// //         if (count >= lstslide.length - 1) { return; }
// //       }
// //     }
// //     lstdot[count - 1].classList.remove('active');
// //     screen.style.transition = `transform 0.5s ease-in-out`;
// //     count = arrowL ? --count : ++count;
// //     console.log('count - ' + count);
// //     screen.style.transform = `translate3d(${-size * count}px,0px,0px)`;
// //     eleIsClicked = count - 1;
// //     switch (count) {
// //       case 0:
// //         lstdot[lstdot.length - 1].classList.add('active');
// //         break;
// //       case lstslide.length - 1:
// //         lstdot[0].classList.add('active');
// //         break;
// //       default:
// //         lstdot[count - 1].classList.add('active');
// //         break;
// //     }
// //   }

// //   function handleVisibilityChange() {
// //     stateTab = (document[hidden]) ? false : true;
// //     if (stateTab) {
// //       run_setInterval();
// //     } else {
// //       run_clearInterval();
// //     }
// //   }

// //   document.addEventListener(visibilityChange, handleVisibilityChange, false);

// //   // Khi click vào arrow left
// //   arrowLeft.addEventListener("click", function (e) {
// //     if (stateTranslateOfSlickTrack) {
// //       run_clearInterval();
// //       commonFuncBothArrows(true, false, e);
// //       run_setInterval();
// //     }
// //   });

// //   // Khi click vào arrow right
// //   arrowRight.addEventListener("click", function (e) {
// //     if (stateTranslateOfSlickTrack) {
// //       run_clearInterval();
// //       commonFuncBothArrows(false, true, e);
// //       run_setInterval();
// //     }
// //   });



// //   lstdot.forEach((elem) => {
// //     elem.addEventListener('click', () => {
// //       if (stateTranslateOfSlickTrack) {
// //         run_clearInterval();
// //         screen.style.transition = `transform 0.5s ease-in-out`;
// //         count = Number(elem.textContent);
// //         console.log("eleIsClicked - btn - " + eleIsClicked)
// //         lstdot[eleIsClicked].classList.remove('active');
// //         lstdot[count - 1].classList.add('active');
// //         screen.style.transform = `translate3d(${-size * count}px,0px,0px)`;
// //         eleIsClicked = count - 1;
// //         run_setInterval();
// //       }
// //     });
// //   });

// //   function run_setInterval() {
// //     v_interval = setInterval(() => {
// //       lstdot[count - 1].classList.remove('active');
// //       screen.style.transition = "transform 0.5s ease-in-out";
// //       screen.style.transform = `translate3d(${-size * (++count)}px,0px,0px)`;
// //       console.log('count - ' + (count))
// //       eleIsClicked = count - 1;
// //       if (count === lstslide.length - 1) {
// //         lstdot[0].classList.add('active');
// //       } else {
// //         lstdot[count - 1].classList.add('active');
// //       }
// //     }, time);
// //   }

// //   function run_clearInterval() {
// //     clearInterval(v_interval);
// //   }

// //   screen.addEventListener('transitionend', () => {
// //     stateTranslateOfSlickTrack = true;
// //     let nameClassSlickSlide = lstslide[count].id;
// //     if (nameClassSlickSlide === 'lastClone' || nameClassSlickSlide === 'firstClone') {
// //       screen.style.transition = `none`;
// //       count = (nameClassSlickSlide === 'lastClone') ? lstslide.length - 2 : (nameClassSlickSlide === 'firstClone') ? 1 : count;
// //       eleIsClicked = count - 1;
// //       screen.style.transform = `translateX(-${size * count}px)`;
// //     }
// //   })
// // }, false)
// // run_setInterval();


// // run_setInterval();
// function next() {
//   var idx = parseInt(document.querySelector('.active').getAttribute('idx'));
//   document.querySelector('.list-dot .active').classList.remove('active');
//   document.querySelector('#screen .active').classList.remove('active');
//   idx = (idx == lstbanner.length - 1 ? 0 : idx + 1);
//   screen.style.transition = "transform .5s ease";
//   screen.style.transform = `translateX(-${(idx) * 100}%)`;
//   document.querySelector('#screen img:nth-child(' + (idx + 1) + ')').classList.add('active');
//   document.querySelector('.list-dot div:nth-child(' + (idx + 1) + ')').classList.add('active');

// }

// function prev() {
//   var idx = parseInt(document.querySelector('.active').getAttribute('idx'));
//   document.querySelector('.list-dot .active').classList.remove('active');
//   document.querySelector('#screen .active').classList.remove('active')
//   idx = (idx == 0 ? lstbanner.length - 1 : idx - 1);
//   screen.style.transition = "transform .5s ease";
//   screen.style.transform = `translateX(${(-idx) * 100}%)`;
//   document.querySelector('#screen img:nth-child(' + (idx + 1) + ')').classList.add('active');
//   document.querySelector('.list-dot div:nth-child(' + (idx + 1) + ')').classList.add('active');
// }

// // Xử lý nhấn vào dấu chấm
// document.querySelectorAll('#change div').forEach(function (e) {
//   e.addEventListener('click', function () {
//     document.querySelector('.list-dot .active').classList.remove('active');
//     document.querySelector('#screen .active').classList.remove('active')
//     this.classList.add('active');
//     var idx = parseInt(this.getAttribute('idx'));
//     screen.style.transition = "transform 1s ease";
//     screen.style.transform = `translateX(${(1 - idx) * 100}%)`;
//     document.querySelector('#screen img:nth-child(' + (idx + 1) + ')').classList.add('active');
//     document.querySelector('.list-dot div:nth-child(' + (idx + 1) + ')').classList.add('active');
//   });
// });

// // screen.addEventListener('transitionend', () => {
// //     var idx = parseInt(document.querySelector('.active').getAttribute('idx'));
// //     stateTranslateOfSlickTrack = true; // cho biết thằng carousel nó đã thực hiện xong việc translateX 
// //     let nameClassSlickSlide = idx;
// //     if (nameClassSlickSlide === 0 || nameClassSlickSlide === lstbanner.length - 1) {
// //         // screen.style.transition = `none`;
// //         // idx = (nameClassSlickSlide === 0) ? lstbanner.length - 2 : (nameClassSlickSlide === lstbanner.length - 1) ? 1 : idx; // slickSlice .length - 2 thì 2 này là 1 cái ảnh ở đầu có id='lastClone' và 1 ảnh ở cuối có id = 'firstClone'
// //         // screen.style.transition = "transform 1s ease";
// //         // screen.style.transform = `translateX(${(1 - idx) * 100}%)`;
// //     }
// // })

// document.querySelector('#btn_next').addEventListener('click', function () {
//   next();
// });
// document.querySelector('#btn_pre').addEventListener('click', function () {
//   prev();
// });


// var slide = -1;
// // slide = setInterval('next()', 1000);


// function MyTimer() {
//   var date = new Date();
//   var hour = date.getHours();
//   var minute = String(date.getMinutes()).padStart(2, "0");
//   var second = String(date.getSeconds()).padStart(2, "0");
//   document.querySelector('.hour').innerHTML = hour;
//   document.querySelector('.minute').innerHTML = minute;
//   document.querySelector('.second').innerHTML = second;
// }
// setInterval(MyTimer, 1000);