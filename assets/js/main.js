const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

function myFunction() {
    const nav = document.getElementById("my-nav");
    if (nav.className === "nav") {
        nav.className += " responsive";
    }
    else {
        nav.className = "nav";
    }
}