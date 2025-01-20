"use strict";

// modal variables
const modal = document.querySelector("[data-modal]");
const modalCloseBtn = document.querySelector("[data-modal-close]");
const modalCloseOverlay = document.querySelector("[data-modal-overlay]");
const emailField = document.querySelector(".email-field");
const subscribeBtn = document.querySelector(".btn-newsletter");

// modal function to close
const modalCloseFunc = function () {
  modal.classList.add("closed");
};

// modal function to open
const modalOpenFunc = function () {
  modal.classList.remove("closed");
};

// Modal event listeners for close buttons
modalCloseOverlay.addEventListener("click", modalCloseFunc);
modalCloseBtn.addEventListener("click", modalCloseFunc);

// Timer to show modal every 7 seconds until user subscribes
let isSubscribed = false;
const showModalInterval = setInterval(() => {
  if (!isSubscribed) {
    modalOpenFunc();
  } else {
    clearInterval(showModalInterval); // Stop the interval when subscribed
  }
}, 1000);

// Subscribe button click event
subscribeBtn.addEventListener("click", function (e) {
  e.preventDefault(); // Prevent form submission (for demo purposes)

  const email = emailField.value.trim();
  if (email) {
    isSubscribed = true; // Set subscription flag to true
    modalCloseFunc(); // Close the modal
    alert("Thank you for subscribing!"); // Optional feedback
  } else {
    alert("Please enter a valid email address."); // Handle invalid input
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const enquireButton = document.querySelector(".header-bottom-actions-btn");
  enquireButton.addEventListener("click", modalOpenFunc);
});

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [overlay, navCloseBtn, navOpenBtn];

/**
 * close navbar when click on any navbar link
 */

for (let i = 0; i < navbarLinks.length; i++) {
  navElemArr.push(navbarLinks[i]);
}

/**
 * addd event on all elements for toggling navbar
 */

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
  });
}

/**
 * header active state
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 400
    ? header.classList.add("active")
    : header.classList.remove("active");
});

// Slidder Secotion

// Silder Images :-

let slider = document.querySelector(".slider .list");
let items = document.querySelectorAll(".slider .list .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let dots = document.querySelectorAll(".slider .dots li");

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function () {
  active = active + 1 <= lengthItems ? active + 1 : 0;
  reloadSlider();
};
prev.onclick = function () {
  active = active - 1 >= 0 ? active - 1 : lengthItems;
  reloadSlider();
};
let refreshInterval = setInterval(() => {
  next.click();
}, 3000);
function reloadSlider() {
  slider.style.left = -items[active].offsetLeft + "px";
  //
  let last_active_dot = document.querySelector(".slider .dots li.active");
  last_active_dot.classList.remove("active");
  dots[active].classList.add("active");

  clearInterval(refreshInterval);
  refreshInterval = setInterval(() => {
    next.click();
  }, 3000);
}

dots.forEach((li, key) => {
  li.addEventListener("click", () => {
    active = key;
    reloadSlider();
  });
});
window.onresize = function (event) {
  reloadSlider();
};
