function openImage(img) {
  const popup = document.getElementById("popup");
  const popupImg = document.getElementById("popup-img");
  popup.style.display = "block";
  popupImg.src = img.src;
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
// Smooth Scroll
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
  });
});

  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;

  document.querySelector(".next").addEventListener("click", () => {
    changeSlide(currentSlide + 1);
  });

  document.querySelector(".prev").addEventListener("click", () => {
    changeSlide(currentSlide - 1);
  });

  function changeSlide(n) {
    slides[currentSlide].classList.remove("active");
    currentSlide = (n + totalSlides) % totalSlides;
    slides[currentSlide].classList.add("active");
  }

  // Auto play every 5 seconds
  setInterval(() => {
    changeSlide(currentSlide + 1);
  }, 5000);



