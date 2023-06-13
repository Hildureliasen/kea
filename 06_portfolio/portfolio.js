// window.addEventListener("scroll", function () {
//   var logo = document.querySelector(".logo_img");
//   var scrollPosition = window.scrollY;

//   if (scrollPosition > 0) {
//     logo.classList.add("shrink-logo");
//   } else {
//     logo.classList.remove("shrink-logo");
//   }
// });

// const photos = document.querySelectorAll(".tema_banner .photo");

// function fadeInPhotos() {
//   photos.forEach((photo) => {
//     if (isElementInViewport(photo)) {
//       photo.classList.add("fade-in");
//     }
//   });
// }

// function isElementInViewport(element) {
//   const rect = element.getBoundingClientRect();
//   return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
// }

// // Attach the fadeInPhotos function to the scroll event
// window.addEventListener("scroll", fadeInPhotos);

// // Trigger the fade-in animation for initially visible photos
// fadeInPhotos();

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", fadeInOnScroll);
});

function fadeInOnScroll() {
  var fadeElements = document.querySelectorAll(".fade-in");
  for (var i = 0; i < fadeElements.length; i++) {
    var element = fadeElements[i];
    var position = element.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;
    if (position < windowHeight * 0.85) {
      element.style.opacity = 1; /* Fade in when the element is 85% visible */
    }
  }
}

window.addEventListener("scroll", shrinkLogoOnScroll);

function shrinkLogoOnScroll() {
  var logo = document.querySelector(".logo_forside");
  var scrollPosition = window.pageYOffset;

  if (scrollPosition > 0) {
    logo.classList.add("shrink");
  } else {
    logo.classList.remove("shrink");
  }
}

window.addEventListener("scroll", swapLogoOnScroll);

function swapLogoOnScroll() {
  var logo = document.querySelector(".logo");
  var scrollPosition = window.pageYOffset;

  if (scrollPosition > 0) {
    logo.classList.add("shrink");
  } else {
    logo.classList.remove("shrink");
  }
}
