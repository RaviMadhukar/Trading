var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop:true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // *******************************************navbar toggle

  let menuBtn = document.querySelector("#menuBtn");
  let navbar = document.querySelector(".navbar");
  
  menuBtn.onclick = () =>{
    navbar.classList.toggle("active");
  }