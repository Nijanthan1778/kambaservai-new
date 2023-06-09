

'use strict'

let curSlide = 0;
const slides = document.querySelectorAll(".slide");



slides.forEach(function (s, i) {
    (s.style.transform = `translateX(${100 * i}%)`)
});

//const moveImg = function () {
// if (curSlide === slides.length - 1) {
//     curSlide = 0;
// } else {
//     curSlide++
// }

// slides.forEach(function (s, i) {
//     (s.style.transform = `translateX(${100 * (i - curSlide)}%)`)
// })
// }

let x = 0;
const images = ["assets/images/banner1.png", "assets/images/banner2.png", "assets/images/banner3.png"]
setInterval(function () {
    if (curSlide === slides.length - 1) {
        curSlide = 0;

    } else {
        curSlide++
    }

    slides.forEach(function (s, i) {
        (s.style.transform = `translateX(${100 * (i - curSlide)}%)`)
    })

    // x = (x === images.length - 1 ? 0 : x + 1);

    // document.querySelector(".bannerimg").src = images[x];

}, 4000);




const nav = document.querySelector(".nav");

const hoverNav = function (e) {
    if (e.target.classList.contains("menu")) {
        const link = e.target;
        const siblings = link.closest(".nav").querySelectorAll(".menu")
        siblings.forEach(el => {
            if (el !== link) {
                el.style.opacity = this;
            }
        })
    }
}

nav.addEventListener("mouseover", hoverNav.bind(0.5))
nav.addEventListener("mouseout", hoverNav.bind(1))



const rightSection = document.querySelectorAll(".right-hidden")

const revealR = function (entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.classList.remove("right-hidden");
    observer.unobserve(entry.target);

}

const rightObserver = new IntersectionObserver(revealR, {
    root: null,
    threshold: 0.20,
})

rightSection.forEach(function (sec) {
    rightObserver.observe(sec);
})

const leftSection = document.querySelectorAll(".left-hidden")


const revealL = function (entries, observer) {
    const [entrys] = entries;
    if (!entrys.isIntersecting) return;
    entrys.target.classList.remove("left-hidden");
    observer.unobserve(entrys.target);

}

const leftObserver = new IntersectionObserver(revealL, {
    root: null,
    threshold: 0.20,
})

leftSection.forEach(function (sec) {
    leftObserver.observe(sec);
})

const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");

const menuList = document.querySelector(".menu-list");
menuOpen.addEventListener("click", function (e) {
    menuList.classList.remove("menu-list-hidden")
    menuOpen.style.display = "none";
    menuClose.style.display = "block";
})
menuClose.addEventListener("click", function (e) {
    menuList.classList.add("menu-list-hidden");
    menuOpen.style.display = "block";
    menuClose.style.display = "none";
})

// const footerSec = document.querySelector(".footer-hidden");

// const revealFooter = function (entries, observer) {
//     const [entry] = entries;
//     if (!entry.isIntersecting) return;
//     entry.target.classList.remove("footer-hidden");
//     observer.unobserve(entry.target)
// }

// const footerObserver = new IntersectionObserver(revealFooter, {
//     root: null,
//     threshold: 0.10,
// })

// footerObserver.observe(footerSec);