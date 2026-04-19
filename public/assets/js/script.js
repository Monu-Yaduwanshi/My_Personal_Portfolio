// this is perfectly without adding apps in navbar

// 'use strict';



// // element toggle function
// const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// // sidebar variables
// const sidebar = document.querySelector("[data-sidebar]");
// const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// // sidebar toggle functionality for mobile
// sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// // testimonials variables
// const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
// const modalContainer = document.querySelector("[data-modal-container]");
// const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
// const overlay = document.querySelector("[data-overlay]");

// // modal variable
// const modalImg = document.querySelector("[data-modal-img]");
// const modalTitle = document.querySelector("[data-modal-title]");
// const modalText = document.querySelector("[data-modal-text]");

// // modal toggle function
// const testimonialsModalFunc = function () {
//   modalContainer.classList.toggle("active");
//   overlay.classList.toggle("active");
// }

// // add click event to all modal items
// for (let i = 0; i < testimonialsItem.length; i++) {

//   testimonialsItem[i].addEventListener("click", function () {

//     modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
//     modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
//     modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
//     modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

//     testimonialsModalFunc();

//   });

// }

// // add click event to modal close button
// modalCloseBtn.addEventListener("click", testimonialsModalFunc);
// overlay.addEventListener("click", testimonialsModalFunc);



// // custom select variables
// const select = document.querySelector("[data-select]");
// const selectItems = document.querySelectorAll("[data-select-item]");
// const selectValue = document.querySelector("[data-selecct-value]");
// const filterBtn = document.querySelectorAll("[data-filter-btn]");

// select.addEventListener("click", function () { elementToggleFunc(this); });

// // add event in all select items
// for (let i = 0; i < selectItems.length; i++) {
//   selectItems[i].addEventListener("click", function () {

//     let selectedValue = this.innerText.toLowerCase();
//     selectValue.innerText = this.innerText;
//     elementToggleFunc(select);
//     filterFunc(selectedValue);

//   });
// }

// // filter variables
// const filterItems = document.querySelectorAll("[data-filter-item]");

// const filterFunc = function (selectedValue) {

//   for (let i = 0; i < filterItems.length; i++) {

//     if (selectedValue === "all") {
//       filterItems[i].classList.add("active");
//     } else if (selectedValue === filterItems[i].dataset.category) {
//       filterItems[i].classList.add("active");
//     } else {
//       filterItems[i].classList.remove("active");
//     }

//   }

// }

// // add event in all filter button items for large screen
// let lastClickedBtn = filterBtn[0];

// for (let i = 0; i < filterBtn.length; i++) {

//   filterBtn[i].addEventListener("click", function () {

//     let selectedValue = this.innerText.toLowerCase();
//     selectValue.innerText = this.innerText;
//     filterFunc(selectedValue);

//     lastClickedBtn.classList.remove("active");
//     this.classList.add("active");
//     lastClickedBtn = this;

//   });

// }



// // contact form variables
// const form = document.querySelector("[data-form]");
// const formInputs = document.querySelectorAll("[data-form-input]");
// const formBtn = document.querySelector("[data-form-btn]");

// // add event to all form input field
// for (let i = 0; i < formInputs.length; i++) {
//   formInputs[i].addEventListener("input", function () {

//     // check form validation
//     if (form.checkValidity()) {
//       formBtn.removeAttribute("disabled");
//     } else {
//       formBtn.setAttribute("disabled", "");
//     }

//   });
// }



// // page navigation variables
// const navigationLinks = document.querySelectorAll("[data-nav-link]");
// const pages = document.querySelectorAll("[data-page]");

// // add event to all nav link
// for (let i = 0; i < navigationLinks.length; i++) {
//   navigationLinks[i].addEventListener("click", function () {

//     for (let i = 0; i < pages.length; i++) {
//       if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
//         pages[i].classList.add("active");
//         navigationLinks[i].classList.add("active");
//         window.scrollTo(0, 0);
//       } else {
//         pages[i].classList.remove("active");
//         navigationLinks[i].classList.remove("active");
//       }
//     }

//   });
// }

// perfectly working for apps in navbar

// 'use strict';

// /*-----------------------------------*\
//   #UTILITY
// \*-----------------------------------*/
// const elementToggleFunc = (elem) => elem.classList.toggle("active");

// /*-----------------------------------*\
//   #SIDEBAR
// \*-----------------------------------*/
// const sidebar = document.querySelector("[data-sidebar]");
// const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// if (sidebarBtn) {
//   sidebarBtn.addEventListener("click", () => elementToggleFunc(sidebar));
// }

// /*-----------------------------------*\
//   #TESTIMONIAL MODAL
// \*-----------------------------------*/
// const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
// const modalContainer = document.querySelector("[data-modal-container]");
// const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
// const overlay = document.querySelector("[data-overlay]");
// const modalImg = document.querySelector("[data-modal-img]");
// const modalTitle = document.querySelector("[data-modal-title]");
// const modalText = document.querySelector("[data-modal-text]");

// const testimonialsModalFunc = () => {
//   modalContainer?.classList.toggle("active");
//   overlay?.classList.toggle("active");
// };

// testimonialsItem.forEach(item => {
//   item.addEventListener("click", function () {
//     if (modalImg && modalTitle && modalText) {
//       modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
//       modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
//       modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
//     }
//     testimonialsModalFunc();
//   });
// });

// modalCloseBtn?.addEventListener("click", testimonialsModalFunc);
// overlay?.addEventListener("click", testimonialsModalFunc);

// /*-----------------------------------*\
//   #PORTFOLIO FILTER
// \*-----------------------------------*/
// const filterItems = document.querySelectorAll("[data-filter-item]");
// const filterBtns = document.querySelectorAll("[data-filter-btn]");
// const selectItems = document.querySelectorAll("[data-select-item]");
// const select = document.querySelector("[data-select]");
// const selectValue = document.querySelector("[data-selecct-value]");

// const filterFunc = (selectedValue) => {
//   filterItems.forEach(item => {
//     if (selectedValue === "all" || selectedValue === item.dataset.category) {
//       item.classList.add("active");
//     } else {
//       item.classList.remove("active");
//     }
//   });
// };

// filterBtns.forEach(btn => {
//   btn.addEventListener("click", function () {
//     const value = this.innerText.toLowerCase();
//     filterFunc(value);
//     filterBtns.forEach(b => b.classList.remove("active"));
//     this.classList.add("active");
//     if (selectValue) selectValue.innerText = this.innerText;
//   });
// });

// select?.addEventListener("click", () => elementToggleFunc(select));

// selectItems.forEach(item => {
//   item.addEventListener("click", function () {
//     const value = this.innerText.toLowerCase();
//     filterFunc(value);
//     if (selectValue) selectValue.innerText = this.innerText;
//     elementToggleFunc(select);
//   });
// });

// /*-----------------------------------*\
//   #CONTACT FORM VALIDATION
// \*-----------------------------------*/
// const form = document.querySelector("[data-form]");
// const formInputs = document.querySelectorAll("[data-form-input]");
// const formBtn = document.querySelector("[data-form-btn]");

// formInputs.forEach(input => {
//   input.addEventListener("input", () => {
//     if (form?.checkValidity()) {
//       formBtn?.removeAttribute("disabled");
//     } else {
//       formBtn?.setAttribute("disabled", "");
//     }
//   });
// });

// /*-----------------------------------*\
//   #PAGE NAVIGATION (FIXED)
// \*-----------------------------------*/
// const navigationLinks = document.querySelectorAll("[data-nav-link]");
// const pages = document.querySelectorAll("[data-page]");

// function switchPage(targetPage) {
//   pages.forEach(page => {
//     const name = page.dataset.page.toLowerCase().trim();
//     page.classList.toggle("active", name === targetPage);
//   });

//   navigationLinks.forEach(link => {
//     const name = (link.dataset.navLink || link.innerText).toLowerCase().trim();
//     link.classList.toggle("active", name === targetPage);
//   });

//   // 🔥 IMPORTANT: re-init Apps features
//   // if (targetPage === 'apps') {
//   //   setTimeout(() => {
//   //     initAppsToggle();
//   //     initScreenshotEnlarge();
//   //   }, 100);
//   // }
// }

// navigationLinks.forEach(link => {
//   link.addEventListener("click", function () {
//     // Use data-nav-link attribute if present, else fall back to innerText
//     const targetPage = (this.dataset.navLink || this.innerText).toLowerCase().trim();
//     switchPage(targetPage);
//     window.scrollTo(0, 0);
//   });
// });

// /*-----------------------------------*\
//   #APPS TOGGLE (REBUILT)
// \*-----------------------------------*/
// function initAppsToggle() {
//   const toggleBtns = document.querySelectorAll('.toggle-btn');
  
//   console.log('Found toggle buttons:', toggleBtns.length); // debug check

//   toggleBtns.forEach(btn => {
//     // Remove any old listener by cloning
//     const newBtn = btn.cloneNode(true);
//     btn.parentNode.replaceChild(newBtn, btn);

//     newBtn.addEventListener('click', function(e) {
//       e.preventDefault();
//       e.stopPropagation();

//       console.log('Toggle clicked!'); // debug check

//       // Find the .app-details div inside the same .app-card
//       const card = this.closest('.app-card');
//       if (!card) {
//         console.log('No card found!');
//         return;
//       }

//       const details = card.querySelector('.app-details');
//       if (!details) {
//         console.log('No details found!');
//         return;
//       }

//       // Close all other open details
//       document.querySelectorAll('.app-details.show').forEach(open => {
//         if (open !== details) {
//           open.classList.remove('show');
//           const otherBtn = open.closest('.app-card').querySelector('.toggle-btn');
//           if (otherBtn) otherBtn.textContent = 'View Details';
//         }
//       });

//       // Toggle current
//       details.classList.toggle('show');
//       this.textContent = details.classList.contains('show')
//         ? 'Hide Details'
//         : 'View Details';
//     });
//   });
// }

// /*-----------------------------------*\
//   #SCREENSHOT ENLARGE
// \*-----------------------------------*/
// function initScreenshotEnlarge() {
//   const images = document.querySelectorAll('.app-screenshots img');

//   images.forEach(img => {
//     img.onclick = function () {
//       const modal = document.createElement('div');
//       modal.style.cssText = `
//         position: fixed;
//         inset: 0;
//         background: rgba(0,0,0,0.9);
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         z-index: 9999;
//       `;

//       const bigImg = document.createElement('img');
//       bigImg.src = this.src;
//       bigImg.style.cssText = `
//         max-width: 90%;
//         max-height: 90%;
//         border-radius: 12px;
//       `;

//       modal.appendChild(bigImg);
//       document.body.appendChild(modal);

//       modal.onclick = () => modal.remove();
//     };
//   });
// }

// /*-----------------------------------*\
//   #INIT
// \*-----------------------------------*/
// document.addEventListener("DOMContentLoaded", () => {
//   initAppsToggle();
//   initScreenshotEnlarge();
// });

// document.addEventListener('click', function(e) {
//   console.log('Clicked:', e.target, e.target.classList);
// });

'use strict';

/*-----------------------------------*\
  #UTILITY
\*-----------------------------------*/
const elementToggleFunc = (elem) => elem.classList.toggle("active");

/*-----------------------------------*\
  #SIDEBAR
\*-----------------------------------*/
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebarBtn) {
  sidebarBtn.addEventListener("click", () => elementToggleFunc(sidebar));
}

/*-----------------------------------*\
  #TESTIMONIAL MODAL
\*-----------------------------------*/
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

const testimonialsModalFunc = () => {
  modalContainer?.classList.toggle("active");
  overlay?.classList.toggle("active");
};

testimonialsItem.forEach(item => {
  item.addEventListener("click", function () {
    if (modalImg && modalTitle && modalText) {
      modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
      modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
      modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
    }
    testimonialsModalFunc();
  });
});

modalCloseBtn?.addEventListener("click", testimonialsModalFunc);
overlay?.addEventListener("click", testimonialsModalFunc);

/*-----------------------------------*\
  #CONTACT FORM VALIDATION
\*-----------------------------------*/
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

formInputs.forEach(input => {
  input.addEventListener("input", () => {
    if (form?.checkValidity()) {
      formBtn?.removeAttribute("disabled");
    } else {
      formBtn?.setAttribute("disabled", "");
    }
  });
});

/*-----------------------------------*\
  #PAGE NAVIGATION (FIXED)
\*-----------------------------------*/
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

function switchPage(targetPage) {
  pages.forEach(page => {
    const name = page.dataset.page.toLowerCase().trim();
    page.classList.toggle("active", name === targetPage);
  });

  navigationLinks.forEach(link => {
    const name = (link.dataset.navLink || link.textContent || '').toLowerCase().trim();
    link.classList.toggle("active", name === targetPage);
  });

  // Apps page re-init
  if (targetPage === 'apps') {
    setTimeout(() => {
      initAppsToggle();
      initScreenshotEnlarge();
    }, 100);
  }
}

navigationLinks.forEach(link => {
  link.addEventListener("click", function () {
    const targetPage = (this.dataset.navLink || this.textContent || '').toLowerCase().trim();
    switchPage(targetPage);
    window.scrollTo(0, 0);
  });
});

/*-----------------------------------*\
  #PORTFOLIO FILTER (FINAL CLEAN)
\*-----------------------------------*/
function initPortfolio() {

  const container = document.querySelector('[data-page="portfolio"]');
  if (!container) return;

  const projectItems = container.querySelectorAll('[data-filter-item]');
  const filterBtns = container.querySelectorAll('[data-filter-btn]');
  const selectItems = container.querySelectorAll('[data-select-item]');
  const selectValue = container.querySelector('[data-select-value]');
  const countDisplay = container.querySelector('#portfolio-count');

  if (!projectItems.length) return;

  const normalize = str => (str || '').toLowerCase().trim();

  function filter(category, label) {
    const current = normalize(category || 'all');
    let visible = 0;

    projectItems.forEach(item => {
      const itemCat = normalize(item.dataset.category);

      if (current === 'all' || itemCat === current) {
        item.style.display = 'block';
        visible++;
      } else {
        item.style.display = 'none';
      }
    });

    if (countDisplay) countDisplay.textContent = visible;
    if (selectValue && label) selectValue.textContent = label;
  }

  // Desktop buttons
  filterBtns.forEach(btn => {
    btn.onclick = function () {
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      filter(this.dataset.cat, this.textContent);
    };
  });

  // Mobile dropdown
  selectItems.forEach(item => {
    item.onclick = function () {
      filter(this.dataset.cat, this.textContent);
    };
  });

  // Initial render
  filter('all', 'All');
}

/*-----------------------------------*\
  #APPS TOGGLE
\*-----------------------------------*/
function initAppsToggle() {
  const toggleBtns = document.querySelectorAll('.toggle-btn');

  toggleBtns.forEach(btn => {
    const newBtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newBtn, btn);

    newBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();

      const card = this.closest('.app-card');
      if (!card) return;

      const details = card.querySelector('.app-details');
      if (!details) return;

      document.querySelectorAll('.app-details.show').forEach(open => {
        if (open !== details) {
          open.classList.remove('show');
          const otherBtn = open.closest('.app-card')?.querySelector('.toggle-btn');
          if (otherBtn) otherBtn.textContent = 'View Details';
        }
      });

      details.classList.toggle('show');
      this.textContent = details.classList.contains('show')
        ? 'Hide Details'
        : 'View Details';
    });
  });
}

/*-----------------------------------*\
  #SCREENSHOT ENLARGE
\*-----------------------------------*/
function initScreenshotEnlarge() {
  const images = document.querySelectorAll('.app-screenshots img');

  images.forEach(img => {
    img.onclick = function () {
      const modal = document.createElement('div');
      modal.style.cssText = `
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
      `;

      const bigImg = document.createElement('img');
      bigImg.src = this.src;
      bigImg.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        border-radius: 12px;
      `;

      modal.appendChild(bigImg);
      document.body.appendChild(modal);

      modal.onclick = () => modal.remove();
    };
  });
}

/*-----------------------------------*\
  #INIT (ONLY ONCE)
\*-----------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
  initAppsToggle();
  initScreenshotEnlarge();
  initPortfolio(); // ✅ IMPORTANT
});