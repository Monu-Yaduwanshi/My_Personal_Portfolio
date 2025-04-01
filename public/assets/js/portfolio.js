document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const filterButtons = document.querySelectorAll('[data-filter-btn]');
    const selectItems = document.querySelectorAll('[data-select-item]');
    const projectItems = document.querySelectorAll('[data-filter-item]');
    const selectBox = document.querySelector('[data-select]');
    const selectValue = document.querySelector('[data-select-value]');
    const selectList = document.querySelector('.select-list');
    const selectIcon = document.querySelector('.select-icon ion-icon');
  
    // Current active filter
    let currentFilter = 'all';
  
    // Filter projects function
    const filterProjects = (category) => {
      currentFilter = category.toLowerCase().replace(/\s+/g, ' ').trim();
      
      projectItems.forEach((item, index) => {
        const itemCategory = item.dataset.category.toLowerCase();
        
        setTimeout(() => {
          if (currentFilter === 'all' || itemCategory === currentFilter) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        }, index * 50);
      });
    };
  
    // Handle filter button clicks
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        filterProjects(this.textContent);
        selectValue.textContent = this.textContent;
      });
    });
  
    // Handle select item clicks
    selectItems.forEach(item => {
      item.addEventListener('click', function() {
        const category = this.textContent;
        filterProjects(category);
        selectValue.textContent = category;
        selectList.classList.remove('active');
        selectIcon.style.transform = 'rotate(0)';
        
        filterButtons.forEach(btn => {
          btn.classList.remove('active');
          if (btn.textContent.toLowerCase() === category.toLowerCase()) {
            btn.classList.add('active');
          }
        });
      });
    });
  
    // Toggle select list
    selectBox.addEventListener('click', function(e) {
      e.stopPropagation();
      selectList.classList.toggle('active');
      selectIcon.style.transform = selectList.classList.contains('active') 
        ? 'rotate(180deg)' 
        : 'rotate(0)';
    });
  
    // Close select list when clicking outside
    document.addEventListener('click', function() {
      selectList.classList.remove('active');
      selectIcon.style.transform = 'rotate(0)';
    });
  
    // Animate projects on scroll
    const animateOnScroll = () => {
      projectItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const itemCategory = item.dataset.category.toLowerCase();
        
        if (itemTop < windowHeight - 100 && 
            (currentFilter === 'all' || itemCategory === currentFilter) &&
            !item.classList.contains('active')) {
          item.style.animationDelay = `${item.dataset.delay || 0}ms`;
          item.classList.add('active');
        }
      });
    };
  
    // Initialize
    filterProjects('all');
    animateOnScroll();
    
    // Debounced scroll event
    let isScrolling;
    window.addEventListener('scroll', () => {
      clearTimeout(isScrolling);
      isScrolling = setTimeout(animateOnScroll, 100);
    });
  });



//   <section class="skills-section">
//   <header>
//     <h2 class="h2 article-title" id="skills-title">Skills</h2>
//   </header>

//   <section class="skills">
//     <ul class="skills-list">
//       <!-- Android Development -->
//       <li class="skill-item">
//         <div class="skill-card">
//           <figure class="skill-icon-box">
//             <img src="./assets/images/skills/android.png" alt="Android Development" loading="lazy">
//             <div class="skill-overlay">
//               <div class="skill-bar" data-level="90"></div>
//             </div>
//           </figure>
//           <div class="skill-content">
//             <h3 class="h3 skill-title">Android Development</h3>
//             <p class="skill-text">
//               Kotlin • Jetpack Compose • MVVM • Room • Retrofit • Firebase
//             </p>
//           </div>
//         </div>
//       </li>

//       <!-- Web Development -->
//       <li class="skill-item">
//         <div class="skill-card">
//           <figure class="skill-icon-box">
//             <img src="./assets/images/skills/web.png" alt="Web Development" loading="lazy">
//             <div class="skill-overlay">
//               <div class="skill-bar" data-level="85"></div>
//             </div>
//           </figure>
//           <div class="skill-content">
//             <h3 class="h3 skill-title">Web Development</h3>
//             <p class="skill-text">
//               HTML5 • CSS3 • JavaScript • React • Node.js • Express
//             </p>
//           </div>
//         </div>
//       </li>

//       <!-- AI/ML -->
//       <li class="skill-item">
//         <div class="skill-card">
//           <figure class="skill-icon-box">
//             <img src="./assets/images/skills/ai-ml.png" alt="AI/ML" loading="lazy">
//             <div class="skill-overlay">
//               <div class="skill-bar" data-level="80"></div>
//             </div>
//           </figure>
//           <div class="skill-content">
//             <h3 class="h3 skill-title">AI/ML</h3>
//             <p class="skill-text">
//               Python • TensorFlow • PyTorch • NLP • Computer Vision
//             </p>
//           </div>
//         </div>
//       </li>

//       <!-- UI/UX Design -->
//       <li class="skill-item">
//         <div class="skill-card">
//           <figure class="skill-icon-box">
//             <img src="./assets/images/skills/ui-ux.png" alt="UI/UX Design" loading="lazy">
//             <div class="skill-overlay">
//               <div class="skill-bar" data-level="75"></div>
//             </div>
//           </figure>
//           <div class="skill-content">
//             <h3 class="h3 skill-title">UI/UX Design</h3>
//             <p class="skill-text">
//               Figma • Adobe XD • User Research • Wireframing • Prototyping
//             </p>
//           </div>
//         </div>
//       </li>

//       <!-- Backend Development -->
//       <li class="skill-item">
//         <div class="skill-card">
//           <figure class="skill-icon-box">
//             <img src="./assets/images/skills/backend.png" alt="Backend Development" loading="lazy">
//             <div class="skill-overlay">
//               <div class="skill-bar" data-level="70"></div>
//             </div>
//           </figure>
//           <div class="skill-content">
//             <h3 class="h3 skill-title">Backend Development</h3>
//             <p class="skill-text">
//               Java • Spring Boot • MySQL • MongoDB • REST APIs
//             </p>
//           </div>
//         </div>
//       </li>

//       <!-- DevOps -->
//       <li class="skill-item">
//         <div class="skill-card">
//           <figure class="skill-icon-box">
//             <img src="./assets/images/skills/devops.png" alt="DevOps" loading="lazy">
//             <div class="skill-overlay">
//               <div class="skill-bar" data-level="65"></div>
//             </div>
//           </figure>
//           <div class="skill-content">
//             <h3 class="h3 skill-title">DevOps</h3>
//             <p class="skill-text">
//               Docker • Kubernetes • AWS • CI/CD • GitHub Actions
//             </p>
//           </div>
//         </div>
//       </li>
//     </ul>
//   </section>
// </section>