// const go2Top = document.querySelector("#go2Top");
// const menu = document.querySelector("#menu");

// const navMenu = document.querySelector(".navbar-menu");
// const menuToggler = document.querySelector(".menu-toggler");

// const navbar = document.querySelector("nav");


// addEventListener("scroll", () => {
// 	let scroll = this.scrollY;
// 	if(scroll > menu.clientHeight) {
//     go2Top.style.opacity = 1;
//     go2Top.style.lineHeight = "40px";
// 		go2Top.style.cursor = "pointer";
// 		console.log(go2Top.style.cursor);
// 	navbar.style.height = "8vh";
// 	navbar.style.backgroundColor = "rgba(0, 0, 0, 0.75)"
// 	} else {
// 		go2Top.style.opacity = 0;
// 		go2Top.style.cursor = "default";
// 		navbar.style.height = "10vh";
// 		navbar.style.backgroundColor = "rgba(0, 0, 0, 0.5)"
// 		console.log(go2Top.style.cursor);
// 	}
// })

// go2Top.addEventListener("click", () => {
// 	if(go2Top.style.opacity != 0) window.scrollTo(0, 0);
// })

// menuToggler.addEventListener("click", () => {
// 	if(menuToggler.classList.contains("active")) {
// 		menuToggler.classList.remove("active");
// 		navMenu.classList.remove("active");
// 	} else {
// 		menuToggler.classList.add("active");
// 		navMenu.classList.add("active");
// 	}
// });


// const sliders = document.querySelectorAll(".slider");
// const articles = document.querySelectorAll(".article-main p");
 
// sliders.forEach((slider, index) => {
// 	slider.addEventListener("mouseenter", () => {
// 	articles[index].style.zIndex = "1";
//     articles[index].style.opacity = 1;
//     articles[index].style.transition = "1.5s";
// 	articles[index].style.transitionDelay = "0.05s";
//   });

//   slider.addEventListener("mouseleave", () => {
// 	articles[index].style.zIndex = "-1";
//     articles[index].style.opacity = 0;
//     articles[index].style.transition = "0.2s";
// 	articles[index].style.transitionDelay = "0s";
//   }); 
// });

const menu = document.querySelector("#menu");

const navMenu = document.querySelector(".navbar-menu");
const menuToggler = document.querySelector(".menu-toggler");

const navbar = document.querySelector("nav");


menuToggler.addEventListener("click", () => {
	if(menuToggler.classList.contains("active")) {
		menuToggler.classList.remove("active");
		navMenu.classList.remove("active");
	} else {
		menuToggler.classList.add("active");
		navMenu.classList.add("active");
	}
});

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length) {slideIndex = 1}
	  if (n < 1) {slideIndex = slides.length}
	  for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	  }
	  for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active-slide", "");
	  }
	slides[slideIndex-1].style.display = "flex";
	dots[slideIndex-1].className += " active-slide";
}

addEventListener("scroll", () => {
	let scroll = this.scrollY;
	if(scroll > menu.clientHeight) {
    go2Top.style.opacity = 1;
    go2Top.style.lineHeight = "40px";
		go2Top.style.cursor = "pointer";
		console.log(go2Top.style.cursor);
	} else {
		go2Top.style.opacity = 0;
		go2Top.style.cursor = "default";
		console.log(go2Top.style.cursor);
	}
})

go2Top.addEventListener("click", () => {
	if(go2Top.style.opacity != 0) window.scrollTo(0, 0);
})

document.addEventListener("DOMContentLoaded", function() { startplayer(); }, false);
var player;

function startplayer() 
{
 player = document.getElementById('video_player');
 player.controls = false;
}
function pause_vid()
{
 player.pause();
}

document.getElementById("play_button").onclick = function() {
	if(document.getElementById("video_player").pause)
	{
		document.getElementById("video_player").play();
		document.querySelector(".playbutton").style.opacity = "0"
	}
	else
	{
		document.getElementById("video_player").pause();
	}
}

function visible() {
    document.querySelector('.playbutton').style.opacity = "1";
}   

function notvisible() {
    document.querySelector('.playbutton').style.opacity = "0";
} 

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

