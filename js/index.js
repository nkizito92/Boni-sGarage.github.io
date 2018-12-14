function index() {
    'use strict';

    // image changer;
    var x = 0;
    var slide = document.getElementById("slide");
    var imgArr = ["url(Pic/slidePic/img4.jpg)", "url(Pic/slidePic/img2.jpg)", "url(Pic/slidePic/suite.JPG)", "url(Pic/slidePic/Front.JPG)"];
    var imgButton = document.querySelectorAll("#set1 ul li");
    var timer = '';

    function start() {
        timer = setInterval(function () {
            x++;
            imgButton[x - 1].classList.remove("glow");
            if (x > imgArr.length - 1 && x > imgButton.length - 1) {
                x = 0;
            }
            slide.style.backgroundImage =  imgArr[x];
            imgButton[x].classList.add("glow");
        }, 7000);
    }
    start();
    // buttons to change image

    function one() {
        imgButton[x].classList.remove("glow");
        clearInterval(timer);
        start();
        x = 0;
        slide.style.backgroundImage =  imgArr[x];
        imgButton[x].classList.add("glow");
    }

    function two() {
        imgButton[x].classList.remove("glow");
        clearInterval(timer);
        start();
        x = 1;
        slide.style.backgroundImage =  imgArr[x];
        imgButton[x].classList.add("glow");
    }

    function three() {
        imgButton[x].classList.remove("glow");
        clearInterval(timer);
        start();
        x = 2;
        slide.style.backgroundImage =  imgArr[x];
        imgButton[x].classList.add("glow");
    }

    function four() {
        imgButton[x].classList.remove("glow");
        clearInterval(timer);
        start();
        x = 3;
        slide.style.backgroundImage =  imgArr[x];
        imgButton[x].classList.add("glow");

    }

    // addEventListener for 3 little buttons
    imgButton[0].addEventListener("click", one);
    imgButton[1].addEventListener("click", two);
    imgButton[2].addEventListener("click", three);
    imgButton[3].addEventListener("click", four);
    // goes to next photo
    function next() {
        clearInterval(timer);
        imgButton[x].classList.remove("glow");
        x++;
        slide.classList.remove("slide");

        slide.preventDefault;

        if (x >= imgArr.length) {
            x = 0;
        }
        slide.style.backgroundImage = imgArr[x];
        void slide.offsetWidth;
        slide.classList.add("slide");
        imgButton[x].classList.add("glow");
        start();
    }
    var nex = document.getElementById("next");
    nex.addEventListener("click", next, false);

    // go back one photo
    function prev() {
        clearInterval(timer);
        imgButton[x].classList.remove("glow");
        x--;
        slide.classList.remove("slide");
        slide.preventDefault;
        if (x < 0) {
            x = imgArr.length - 1;
        }
        slide.style.backgroundImage = imgArr[x];
        void slide.offsetWidth;
        slide.classList.add("slide");
        imgButton[x].classList.add("glow");
        start();
    }
    var previous = document.getElementById("previous");
    previous.addEventListener("click", prev);

    // for video on home page

   /* var video = document.getElementById("video");
    video.hidden = true;
    var show = "show";
    var videoButton = document.getElementById('atip');

    function buttons() {
        var videotip = document.getElementById('atip');

        switch (show) {
            case "show":
                video.hidden = false;
                show = "hide";
                videotip.innerHTML = "Hide TIP!!";
                break;
            case "hide":
                video.hidden = true;
                show = "show";
                videotip.innerHTML = "TIP!!";
        }
    }
    videoButton.addEventListener("click", buttons);*/

}
