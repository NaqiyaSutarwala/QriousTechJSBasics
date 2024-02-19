"use strict";

// Selections
const h1 = document.querySelector("h1");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

btnScrollTo.addEventListener("click", (e) => {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  // Coordinotes of scroll button
  // console.log(e.target.getBoundingClientRect());
  // From right, from top
  // DOMRect { x: 0, y: 434.3999938964844, width: 1536, height: 1685.4000244140625, top: 434.3999938964844, right: 1536, bottom: 2119.800018310547, left: 0 }

  // Current scroll
  // Scroll from top
  // console.log('Current Scroll', window.pageXOffset, window.pageYOffset);

  // Height width of viewport
  // console.log(document.documentElement.clientHeight);
  // console.log(document.documentElement.clientWidth);

  // Scrolling
  // window.scrollTo(
  //   s1coords.left + window.scrollX,
  //   s1coords.top + window.scrollY
  // );

  // For smooth scrolling (Old way)
  // window.scrollTo({
  //   left: s1coords.left + window.scrollX,
  //   top: s1coords.top + window.scrollY,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: "smooth" });
});

// PageNavigation (Smooth Scrolling)
// By Ids
// document.querySelectorAll(".nav__link").forEach((el) => {
//   console.log(el);
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     console.log("Link");
//     const id = this.getAttribute("href");
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });

// Event delegation (Adding event listener to common parent element )
// (Determine what element originated the event)
document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  // Matching strategy. Coz we dont have to include the main parent container
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// Tabbed Component
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");
  if (!clicked) return;

  // Removing active class from each tab so that all goes down
  tabs.forEach((t) => {
    t.classList.remove("operations__tab--active");
  });

  clicked.classList.add("operations__tab--active");
  console.log(clicked);

  // Content area

  console.log(tabsContent);
  tabsContent.forEach((content) => {
    content.classList.remove("operations__content--active");
  });

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

// Fading other elements when hovered
const nav = document.querySelector(".nav");

nav.addEventListener("mouseover", function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");

    siblings.forEach((el) => {
      if (el !== link) {
        el.style.opacity = 0.5;
      }

      logo.style.opacity = 0.5;
    });
  }
  console.log("mouseOver");
});

nav.addEventListener("mouseout", function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");

    siblings.forEach((el) => {
      el.style.opacity = 1;

      logo.style.opacity = 1;
    });
  }
});

const initialCords = section1.getBoundingClientRect();
// Sticky Nav bar
// window.addEventListener("scroll", function () {
//   if (this.window.scrollY > initialCords.top) {
//     nav.classList.add("sticky");
//   } else {
//     nav.classList.remove("sticky");
//   }
// });

// Intersection Observer API
const header = document.querySelector(".header");
const obsCallback = function (entries, observer) {
  // entries gets the value of threshold
  let [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};
const obsOptions = {
  root: null, //ViewPort
  threshold: 0, //when 0% of header is visible than we want something to happen
  rootMargin: "-90px", // header element ends before 90px
  // -90 means 0(invisible) thavana na 90px pella  and 90 means 0(invisible) thava na 90px pchi
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(header);

// Sliding in of sections as we scroll to them
const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15, //Only revealed when 15% visible
});

allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

// Lazy Loading
const imgTargets = document.querySelectorAll("img[data-src]");

const imgObserver = new IntersectionObserver(
  (entries, observer) => {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.src = entry.target.dataset.src;

    // Class will be removed only after the image is fully loaded
    // For slow network users
    entry.target.addEventListener("load", function () {
      entry.target.classList.remove("lazy-img");
    });

    observer.unobserve(entry.target);
  },
  {
    root: null,
    threshold: 0,
  }
);

imgTargets.forEach((img) => imgObserver.observe(img));

// Slider Component
const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");
const btnRight = document.querySelector(".slider__btn--right");
const btnLeft = document.querySelector(".slider__btn--left");
const dotContainer = document.querySelector(".dots");

let currentSlide = 0;
const maxSlide = slides.length - 1;

slider.style.overflow = "visible";

const goToSlide = function (slide) {
  slides.forEach((slides, index) => {
    slides.style.transform = `translateX(${100 * (index - slide)}%)`;
  });
};

const createDots = function () {
  slides.forEach((_, index) => {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<button class='dots__dot' data-slide='${index}'></button>`
    );
  });
};

const activateDots = function (currentSlide) {
  console.log("called");
  document.querySelectorAll(".dots__dot").forEach((dot) => {
    dot.classList.remove("dots__dot--active");

    document
      .querySelector(`.dots__dot[data-slide='${currentSlide}']`)
      .classList.add("dots__dot--active");
  });
};

dotContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("dots__dot")) {
    const slide = e.target.dataset.slide;
    goToSlide(slide);
    activateDots(slide);
  }
});

goToSlide(0);
createDots();
activateDots(0);

// slides.forEach((slides, index) => {
//   slides.styles.transform = `translateX(${100 * (index - currentSlide)}%)`;
// });

btnRight.addEventListener("click", function () {
  if (currentSlide === maxSlide) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  goToSlide(currentSlide);
  activateDots(currentSlide);
});

btnLeft.addEventListener("click", function () {
  if (currentSlide === 0) {
    currentSlide = maxSlide;
  } else currentSlide--;
  goToSlide(currentSlide);
  activateDots(currentSlide);
});

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    if (currentSlide === 0) {
      currentSlide = maxSlide;
    } else currentSlide--;
    goToSlide(currentSlide);
    activateDots(currentSlide);
  }
  if (e.key === "ArrowRight") {
    if (currentSlide === maxSlide) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }

    goToSlide(currentSlide);
    activateDots(currentSlide);
  }
});

// Event listening

// h1.addEventListener('mouseenter', function () {
//   alert('Mouse Entered');
// });

// h1.onmouseenter = function () {
//   alert('Mouse Entered');
// };

// // Capturing and bubbling
// const randomInt = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// const randomColor = () => {
//   return `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
// };

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   // console.log(randomColor());
//   console.log('First');

//   this.style.backgroundColor = randomColor();

//   // Stop event propogation i.e stop bubbling or capturing
//   // e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   alert('kuch bhi');
//   this.style.backgroundColor = randomColor();

//   console.log('Second');
// });

// document.querySelector('.nav').addEventListener(
//   'click',
//   function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log('Third');
//   },
//   true
// );
