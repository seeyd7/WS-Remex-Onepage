const go2Top = document.querySelector("#go2Top");
const menu = document.querySelector("#menu");

const navMenu = document.querySelector(".navbar-menu");
const menuToggler = document.querySelector(".menu-toggler");

const navbar = document.querySelector("nav");


addEventListener("scroll", () => {
	let scroll = this.scrollY;
	if(scroll > menu.clientHeight) {
    go2Top.style.opacity = 1;
    go2Top.style.lineHeight = "40px";
		go2Top.style.cursor = "pointer";
		console.log(go2Top.style.cursor);
	navbar.style.height = "8vh";
	navbar.style.backgroundColor = "rgba(0, 0, 0, 0.75)"
	} else {
		go2Top.style.opacity = 0;
		go2Top.style.cursor = "default";
		navbar.style.height = "10vh";
		navbar.style.backgroundColor = "rgba(0, 0, 0, 0.5)"
		console.log(go2Top.style.cursor);
	}
})

go2Top.addEventListener("click", () => {
	if(go2Top.style.opacity != 0) window.scrollTo(0, 0);
})

menuToggler.addEventListener("click", () => {
	if(menuToggler.classList.contains("active")) {
		menuToggler.classList.remove("active");
		navMenu.classList.remove("active");
	} else {
		menuToggler.classList.add("active");
		navMenu.classList.add("active");
	}
});


const sliders = document.querySelectorAll(".slider");
const articles = document.querySelectorAll(".article-main p");
 
sliders.forEach((slider, index) => {
	slider.addEventListener("mouseenter", () => {
	articles[index].style.zIndex = "1";
    articles[index].style.opacity = 1;
    articles[index].style.transition = "1.5s";
	articles[index].style.transitionDelay = "0.05s";
  });

  slider.addEventListener("mouseleave", () => {
	articles[index].style.zIndex = "-1";
    articles[index].style.opacity = 0;
    articles[index].style.transition = "0.2s";
	articles[index].style.transitionDelay = "0s";
  }); 
});


