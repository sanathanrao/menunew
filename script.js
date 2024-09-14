function toggleNav() {
    const sideNav = document.getElementById("sideNav");
    const overlay = document.getElementById("overlay");
  
    // Toggle the sidebar
    if (sideNav.style.left === "-250px" || sideNav.style.left === "-100%") {
      sideNav.style.left = "0";  // Show sidebar
      overlay.classList.add("active"); // Show overlay
    } else {
      sideNav.style.left = "-250px";  // Hide sidebar
      overlay.classList.remove("active"); // Hide overlay
    }
  }
  
  function closeNavOutside(event) {
    const sideNav = document.getElementById("sideNav");
    const overlay = document.getElementById("overlay");
  
    // Close the sidebar and hide the overlay when clicking outside
    sideNav.style.left = "-250px";
    overlay.classList.remove("active");
  }
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
  