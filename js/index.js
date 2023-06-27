var x=[
                "img/central-retail/anh1.png",
                "img/central-retail/anh2.jpg",
                "img/central-retail/anh3.jpg",
                "img/central-retail/anh4.jpg",
                "img/central-retail/anh5.jpg",
                "img/central-retail/anh6.jpg",
                "img/central-retail/anh7.jpg",
                "img/central-retail/anh8.jpg",
                "img/central-retail/anh9.jpg",
                "img/central-retail/anh10.jpg",
                "img/central-retail/anh11.jpg",
                "img/central-retail/anh12.jpg",
                "img/central-retail/anh13.jpg",
                "img/central-retail/anh14.jpg",
                "img/central-retail/anh15.jpg"

];


var count = 0;
// setInterval(function () {
//     document.getElementById('img' + count).checked = true;
//     count++;
//     if (count > 6) {
//         count = 1;
//     }
// }, 1000)


// var next=document.getElementById 

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


// =========================================================================



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