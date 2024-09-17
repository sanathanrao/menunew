function toggleSideNav() {
  const sideNav = document.getElementById("sideNav");
  const overlay = document.getElementById("overlay");
  
  if (sideNav.style.width === "250px") {
      closeSideNav();
  } else {
      sideNav.style.width = "250px";
      overlay.style.display = "block";
  }
}

function closeSideNav() {
  document.getElementById("sideNav").style.width = "0";
  document.getElementById("overlay").style.display = "none";
}

// Close side nav if clicked outside the box
document.addEventListener('click', function(event) {
  const sideNav = document.getElementById("sideNav");
  const overlay = document.getElementById("overlay");
  
  if (!sideNav.contains(event.target) && !event.target.matches('.toggle-btn') && sideNav.style.width === "250px") {
      closeSideNav();
  }
});
  // -------------------------------------------------------
  let slideIndex = 1;

  function openLightbox() {
    document.getElementById("lightbox").style.display = "block";
  }
  
  function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
  }
  
  function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function changeSlide(n) {
    showSlides(slideIndex += n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
  }
  
  // -------------------
  // Select all the images
const images = document.querySelectorAll('.menu-image');

// Add click event listener to each image
images.forEach(image => {
    image.addEventListener('click', () => {
        // Remove highlight and blur from all images
        images.forEach(img => {
            img.classList.remove('image-highlight');
            img.classList.add('image-blur');
        });

        // Highlight the clicked image and remove blur
        image.classList.remove('image-blur');
        image.classList.add('image-highlight');
    });
});
