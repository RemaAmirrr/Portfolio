let navbare = document.querySelector(".navbare");
let menuicon = document.querySelector('#menu-icon');

menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x');
    navbare.classList.toggle('active');
}

let darkModeIcom = document.querySelector("#darkmode-icon")

darkModeIcom.onclick = () => {
    darkModeIcom.classList.toggle('bx-sun');
    document.body.classList.toggle("dark-mode")
};

var swiper = new Swiper(".mySwiper", {
      cssMode: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      mousewheel: true,
      keyboard: true,
    });

     ScrollReveal({ 
       distance: "80px",
       duration: 2000,
       delay: 200,
    });

    ScrollReveal().reveal(".home-content, .heading",{origin:"top"});
    ScrollReveal().reveal(".home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form", {origin:"bottom"});
    ScrollReveal().reveal(".home-content h1, .about-img img",{origin:"left"});
    ScrollReveal().reveal(".home-content h3, .home-content p, .about-content",{origin:"right"});

    let section = document.querySelectorAll("section");
    let navlinks = document.querySelectorAll("header nav a");
    window.onscroll = () => {
      section.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height){
          navlinks.forEach((links) => {
            links.classList.remove("active");
            document.querySelector("header nav a[href*=" + id +"]")
            .classList.add("active");
          });
        }
      });

      let header = document.querySelector(".header");
      header.classList.toggle("sticky", window.scrollY > 100);
      menuicon.classList.remove("bx-x");
      navbare.classList.remove("active");
     
    }