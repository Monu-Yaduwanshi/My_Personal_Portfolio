// erfectly working for apps in navbar

// // Check if already initialized
// if (!window.portfolioInitialized) {
//   window.portfolioInitialized = true;
  
//   document.addEventListener('DOMContentLoaded', function() {
//     // ... your existing portfolio code ...
//   });
// }

// document.addEventListener('DOMContentLoaded', function() {
//     // DOM Elements
//     const filterButtons = document.querySelectorAll('[data-filter-btn]');
//     const selectItems = document.querySelectorAll('[data-select-item]');
//     const projectItems = document.querySelectorAll('[data-filter-item]');
//     const selectBox = document.querySelector('[data-select]');
//     const selectValue = document.querySelector('[data-select-value]');
//     const selectList = document.querySelector('.select-list');
//     const selectIcon = document.querySelector('.select-icon ion-icon');
  
//     // Current active filter
//     let currentFilter = 'all';
  
//     // Filter projects function
//     const filterProjects = (category) => {
//       currentFilter = category.toLowerCase().replace(/\s+/g, ' ').trim();
      
//       projectItems.forEach((item, index) => {
//         const itemCategory = item.dataset.category.toLowerCase();
        
//         setTimeout(() => {
//           if (currentFilter === 'all' || itemCategory === currentFilter) {
//             item.classList.add('active');
//           } else {
//             item.classList.remove('active');
//           }
//         }, index * 50);
//       });
//     };
  
//     // Handle filter button clicks
//     filterButtons.forEach(button => {
//       button.addEventListener('click', function() {
//         filterButtons.forEach(btn => btn.classList.remove('active'));
//         this.classList.add('active');
//         filterProjects(this.textContent);
//         selectValue.textContent = this.textContent;
//       });
//     });
  
//     // Handle select item clicks
//     selectItems.forEach(item => {
//       item.addEventListener('click', function() {
//         const category = this.textContent;
//         filterProjects(category);
//         selectValue.textContent = category;
//         selectList.classList.remove('active');
//         selectIcon.style.transform = 'rotate(0)';
        
//         filterButtons.forEach(btn => {
//           btn.classList.remove('active');
//           if (btn.textContent.toLowerCase() === category.toLowerCase()) {
//             btn.classList.add('active');
//           }
//         });
//       });
//     });
  
//     // Toggle select list
//     selectBox.addEventListener('click', function(e) {
//       e.stopPropagation();
//       selectList.classList.toggle('active');
//       selectIcon.style.transform = selectList.classList.contains('active') 
//         ? 'rotate(180deg)' 
//         : 'rotate(0)';
//     });
  
//     // Close select list when clicking outside
//     document.addEventListener('click', function() {
//       selectList.classList.remove('active');
//       selectIcon.style.transform = 'rotate(0)';
//     });
  
//     // Animate projects on scroll
//     const animateOnScroll = () => {
//       projectItems.forEach(item => {
//         const itemTop = item.getBoundingClientRect().top;
//         const windowHeight = window.innerHeight;
//         const itemCategory = item.dataset.category.toLowerCase();
        
//         if (itemTop < windowHeight - 100 && 
//             (currentFilter === 'all' || itemCategory === currentFilter) &&
//             !item.classList.contains('active')) {
//           item.style.animationDelay = `${item.dataset.delay || 0}ms`;
//           item.classList.add('active');
//         }
//       });
//     };
  
//     // Initialize
//     filterProjects('all');
//     animateOnScroll();
    
//     // Debounced scroll event
//     let isScrolling;
//     window.addEventListener('scroll', () => {
//       clearTimeout(isScrolling);
//       isScrolling = setTimeout(animateOnScroll, 100);
//     });
//   });

/* =============================================
   PORTFOLIO SECTION — JavaScript
   Add this to your main script or import as portfolio.js
   Place this <script> just before </body>
   ============================================= */


   // Check if already initialized
// if (!window.portfolioInitialized) 
//   window.portfolioInitialized = true;
/*-----------------------------------*\
  #PORTFOLIO FILTER (FINAL FIX)
\*-----------------------------------*/

function initPortfolio() {

  const container = document.querySelector('[data-page="portfolio"]');
  if (!container) return;

  const projectItems  = container.querySelectorAll('[data-filter-item]');
  const filterBtns    = container.querySelectorAll('[data-filter-btn]');
  const selectItems   = container.querySelectorAll('[data-select-item]');
  const selectValue   = container.querySelector('[data-select-value]');
  const countDisplay  = container.querySelector('#portfolio-count');

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

  // Mobile select
  selectItems.forEach(item => {
    item.onclick = function () {
      filter(this.dataset.cat, this.textContent);
    };
  });

  // Initial load
  filter('all', 'All');
}