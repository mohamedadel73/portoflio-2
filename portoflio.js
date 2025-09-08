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


